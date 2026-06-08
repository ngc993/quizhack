import { describe, expect, it } from 'vitest';
import { computeStreak, defaultProgress, recordAnswer, topicStats } from '../src/store/progressStore';

describe('progressStore', () => {
  it('records a correct answer', () => {
    const state = recordAnswer(defaultProgress, {
      questionId: 'security-1',
      topicId: 'security',
      selectedIndex: 0,
      correct: true
    });

    expect(state.totalAnswered).toBe(1);
    expect(state.answers['security-1'].correct).toBe(true);
    expect(state.wrongQuestionIds).toHaveLength(0);
  });

  it('tracks wrong answers', () => {
    const state = recordAnswer(defaultProgress, {
      questionId: 'security-2',
      topicId: 'security',
      selectedIndex: 1,
      correct: false
    });

    expect(state.wrongQuestionIds).toContain('security-2');
  });

  it('computes topic stats', () => {
    const state = recordAnswer(defaultProgress, {
      questionId: 'automation-1',
      topicId: 'automation',
      selectedIndex: 0,
      correct: true
    });

    expect(topicStats(state, 'automation')).toEqual({ answered: 1, correct: 1 });
  });

  it('increments streak for consecutive days', () => {
    expect(computeStreak('2026-06-08', 2, '2026-06-09')).toBe(3);
  });

  it('resets streak when days are skipped', () => {
    expect(computeStreak('2026-06-06', 5, '2026-06-09')).toBe(1);
  });
});
