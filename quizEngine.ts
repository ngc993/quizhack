import { Question, TopicId } from '../data/questions';

export type QuizQuestion = Question & { selectedIndex: number | null };
export type QuizResult = {
  score: number;
  total: number;
  passed: boolean;
  threshold: number;
  wrongQuestionIds: string[];
};

export const PASS_THRESHOLD = 28;

export function shuffle<T>(items: T[], random: () => number = Math.random): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function createSimulation(
  questions: Question[],
  size = 40,
  random: () => number = Math.random
): QuizQuestion[] {
  const quotas: Partial<Record<TopicId, number>> = {
    security: 11,
    automation: 11,
    water: 8,
    logic: 7,
    contract: 3
  };

  const selected: Question[] = [];

  Object.entries(quotas).forEach(([topicId, count]) => {
    const bucket = questions.filter(q => q.topicId === topicId);
    selected.push(...shuffle(bucket, random).slice(0, count));
  });

  if (selected.length < size) {
    const selectedIds = new Set(selected.map(q => q.id));
    const remaining = questions.filter(q => !selectedIds.has(q.id));
    selected.push(...shuffle(remaining, random).slice(0, size - selected.length));
  }

  return shuffle(selected, random).slice(0, size).map(q => ({ ...q, selectedIndex: null }));
}

export function gradeQuiz(items: QuizQuestion[], threshold = PASS_THRESHOLD): QuizResult {
  const score = items.filter(q => q.selectedIndex === q.answerIndex).length;
  return {
    score,
    total: items.length,
    passed: score >= threshold,
    threshold,
    wrongQuestionIds: items
      .filter(q => q.selectedIndex !== q.answerIndex)
      .map(q => q.id)
  };
}

export function answerQuizQuestion(items: QuizQuestion[], id: string, selectedIndex: number): QuizQuestion[] {
  return items.map(item => item.id === id ? { ...item, selectedIndex } : item);
}
