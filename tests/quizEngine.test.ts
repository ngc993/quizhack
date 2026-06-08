import { describe, expect, it } from 'vitest';
import { createSimulation, gradeQuiz } from '../src/core/quizEngine';
import { questions } from '../src/data/questions';

describe('quizEngine', () => {
  it('creates a 40-question simulation', () => {
    const quiz = createSimulation(questions, 40, () => 0.42);
    expect(quiz).toHaveLength(40);
    expect(quiz.every(q => q.selectedIndex === null)).toBe(true);
  });

  it('grades a passing quiz', () => {
    const quiz = createSimulation(questions, 40, () => 0.42).map(q => ({
      ...q,
      selectedIndex: q.answerIndex
    }));

    const result = gradeQuiz(quiz);
    expect(result.score).toBe(40);
    expect(result.passed).toBe(true);
  });

  it('tracks wrong question ids', () => {
    const quiz = createSimulation(questions, 40, () => 0.42).map(q => ({
      ...q,
      selectedIndex: -1
    }));

    const result = gradeQuiz(quiz);
    expect(result.score).toBe(0);
    expect(result.passed).toBe(false);
    expect(result.wrongQuestionIds).toHaveLength(40);
  });
});
