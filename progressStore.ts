import { TopicId } from '../data/questions';
import { QuizResult } from '../core/quizEngine';

export type AnswerRecord = {
  questionId: string;
  topicId: TopicId;
  selectedIndex: number;
  correct: boolean;
  answeredAt: string;
};

export type QuizAttempt = QuizResult & {
  id: string;
  completedAt: string;
};

export type ProgressState = {
  answers: Record<string, AnswerRecord>;
  quizAttempts: QuizAttempt[];
  wrongQuestionIds: string[];
  lastStudyDate: string | null;
  streak: number;
  totalAnswered: number;
};

export const STORAGE_KEY = 'quizhack.progress.v1';

export const defaultProgress: ProgressState = {
  answers: {},
  quizAttempts: [],
  wrongQuestionIds: [],
  lastStudyDate: null,
  streak: 0,
  totalAnswered: 0
};

export function loadProgress(storage: Storage = localStorage): ProgressState {
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultProgress };
    return { ...defaultProgress, ...JSON.parse(raw) };
  } catch {
    return { ...defaultProgress };
  }
}

export function saveProgress(state: ProgressState, storage: Storage = localStorage): void {
  storage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function resetProgress(storage: Storage = localStorage): ProgressState {
  storage.removeItem(STORAGE_KEY);
  return { ...defaultProgress };
}

export function recordAnswer(
  state: ProgressState,
  answer: Omit<AnswerRecord, 'answeredAt'>
): ProgressState {
  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  const alreadyAnswered = Boolean(state.answers[answer.questionId]);
  const wrongSet = new Set(state.wrongQuestionIds);

  if (answer.correct) wrongSet.delete(answer.questionId);
  else wrongSet.add(answer.questionId);

  return {
    ...state,
    answers: {
      ...state.answers,
      [answer.questionId]: {
        ...answer,
        answeredAt: now.toISOString()
      }
    },
    wrongQuestionIds: Array.from(wrongSet),
    lastStudyDate: today,
    streak: computeStreak(state.lastStudyDate, state.streak, today),
    totalAnswered: alreadyAnswered ? state.totalAnswered : state.totalAnswered + 1
  };
}

export function recordQuizAttempt(state: ProgressState, result: QuizResult): ProgressState {
  const wrongSet = new Set([...state.wrongQuestionIds, ...result.wrongQuestionIds]);
  return {
    ...state,
    quizAttempts: [
      {
        ...result,
        id: crypto.randomUUID?.() ?? String(Date.now()),
        completedAt: new Date().toISOString()
      },
      ...state.quizAttempts
    ].slice(0, 20),
    wrongQuestionIds: Array.from(wrongSet)
  };
}

export function computeStreak(lastDate: string | null, currentStreak: number, today: string): number {
  if (!lastDate) return 1;
  if (lastDate === today) return Math.max(currentStreak, 1);
  const last = new Date(`${lastDate}T00:00:00Z`).getTime();
  const current = new Date(`${today}T00:00:00Z`).getTime();
  const diffDays = Math.round((current - last) / 86400000);
  return diffDays === 1 ? currentStreak + 1 : 1;
}

export function topicStats(state: ProgressState, topicId: TopicId): { answered: number; correct: number } {
  const records = Object.values(state.answers).filter(a => a.topicId === topicId);
  return {
    answered: records.length,
    correct: records.filter(a => a.correct).length
  };
}
