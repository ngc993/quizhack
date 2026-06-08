import { facts, questions as baseQuestions, topics, TopicId, Question } from '../data/questions';
import { extraQuestions } from '../data/extraQuestions';
import { answerQuizQuestion, createSimulation, gradeQuiz, QuizQuestion } from '../core/quizEngine';
import { loadProgress, recordAnswer, recordQuizAttempt, resetProgress, saveProgress, topicStats, ProgressState } from '../store/progressStore';
import '../styles/app.css';

const questions: Question[] = [...baseQuestions, ...extraQuestions];

let state: ProgressState = loadProgress();
let currentTopic: TopicId = 'security';
let currentQuiz: QuizQuestion[] = [];
let quizSubmitted = false;

const app = document.querySelector<HTMLDivElement>('#app')!;

export function renderApp(): void {
  app.innerHTML = `
    <header class="app-header">
      <div>
        <h1>🧪 QuizHack SMAT</h1>
        <p>SPA per preparazione prova scritta profili B e C</p>
      </div>
      <span class="badge">🎯 Obiettivo: 28/40</span>
    </header>

    <main class="shell">
      <section class="hero">
        <div>
          <h2>Scegli la modalità</h2>
          <p>Studia, fai simulazioni e monitora i progressi salvati nel browser.</p>
        </div>
        <div class="dashboard">
          <article><strong>${state.totalAnswered}</strong><span>risposte studio</span></article>
          <article><strong>${state.quizAttempts.length}</strong><span>simulazioni</span></article>
          <article><strong>${state.streak}</strong><span>giorni streak</span></article>
          <article><strong>${state.wrongQuestionIds.length}</strong><span>da ripassare</span></article>
        </div>
      </section>

      <nav class="mode-nav">
        <button data-route="study" class="active">🧭 Percorso studio</button>
        <button data-route="quiz">🧪 Quiz</button>
        <button data-route="facts">💡 Sapevi che</button>
        <button data-route="progress">📈 Progressi</button>
        <button data-action="reset">↩️ Reset</button>
      </nav>

      <section id="view"></section>
    </main>
  `;

  app.querySelectorAll<HTMLButtonElement>('[data-route]').forEach(button => {
    button.addEventListener('click', () => {
      app.querySelectorAll('[data-route]').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      renderRoute(button.dataset.route ?? 'study');
    });
  });

  app.querySelector<HTMLButtonElement>('[data-action="reset"]')?.addEventListener('click', () => {
    if (confirm('Vuoi cancellare tutti i progressi salvati?')) {
      state = resetProgress();
      currentQuiz = [];
      quizSubmitted = false;
      renderApp();
    }
  });

  renderRoute('study');
}

function view(): HTMLElement {
  return document.querySelector('#view')!;
}

function renderRoute(route: string): void {
  if (route === 'quiz') renderQuiz();
  else if (route === 'facts') renderFacts();
  else if (route === 'progress') renderProgress();
  else renderStudy();
}

function renderStudy(): void {
  const topic = topics.find(t => t.id === currentTopic)!;
  const topicQuestions = questions.filter(q => q.topicId === currentTopic).slice(0, 20);
  const stats = topicStats(state, currentTopic);

  view().innerHTML = `
    <div class="topic-tabs">
      ${topics.map(t => `<button data-topic="${t.id}" class="${t.id === currentTopic ? 'active' : ''}">${t.icon}<strong>${t.title}</strong><small>${t.subtitle}</small></button>`).join('')}
    </div>

    <div class="study-grid">
      <aside class="card sticky">
        <h2>${topic.icon} ${topic.title}</h2>
        <p>${topic.subtitle}</p>
        <ul>${topic.tips.map(t => `<li>${t}</li>`).join('')}</ul>
        <div class="progress"><div style="width:${Math.min(100, Math.round((stats.answered / topicQuestions.length) * 100))}%"></div></div>
        <p>${stats.answered}/${topicQuestions.length} completate · ${stats.correct} corrette</p>
      </aside>
      <div>${topicQuestions.map(renderQuestion).join('')}</div>
    </div>
  `;

  view().querySelectorAll<HTMLButtonElement>('[data-topic]').forEach(button => {
    button.addEventListener('click', () => {
      currentTopic = button.dataset.topic as TopicId;
      renderStudy();
    });
  });

  bindStudyAnswers();
}

function renderQuestion(q: Question): string {
  const existing = state.answers[q.id];
  return `
    <article class="question ${existing ? 'answered show' : ''}" data-question="${q.id}">
      <span class="meta">${q.difficulty} · ${q.id}</span>
      <h3>${q.prompt}</h3>
      ${q.options.map((option, index) => {
        const isSelected = existing?.selectedIndex === index;
        const isCorrect = q.answerIndex === index;
        const klass = existing ? (isCorrect ? 'correct' : isSelected ? 'wrong' : '') : '';
        return `<button class="option ${klass}" data-answer="${index}"><strong>${'ABCD'[index]})</strong> ${option}</button>`;
      }).join('')}
      <div class="explanation"><strong>Risposta corretta: ${'ABCD'[q.answerIndex]}) ${q.options[q.answerIndex]}</strong><br>${q.explanation}</div>
    </article>
  `;
}

function bindStudyAnswers(): void {
  view().querySelectorAll<HTMLElement>('.question').forEach(card => {
    card.querySelectorAll<HTMLButtonElement>('[data-answer]').forEach(button => {
      button.addEventListener('click', () => {
        const question = questions.find(q => q.id === card.dataset.question)!;
        if (state.answers[question.id]) return;
        const selectedIndex = Number(button.dataset.answer);
        state = recordAnswer(state, {
          questionId: question.id,
          topicId: question.topicId,
          selectedIndex,
          correct: selectedIndex === question.answerIndex
        });
        saveProgress(state);
        renderStudy();
      });
    });
  });
}

function renderQuiz(): void {
  if (!currentQuiz.length) currentQuiz = createSimulation(questions, 40);
  const answered = currentQuiz.filter(q => q.selectedIndex !== null).length;

  view().innerHTML = `
    <div class="quiz-layout">
      <div class="quiz-list">
        ${currentQuiz.map((q, index) => renderQuizQuestion(q, index)).join('')}
      </div>
      <aside class="card sticky quiz-panel">
        <h2>🧪 Simulazione</h2>
        <p>Risposte date: ${answered}/40</p>
        <div class="progress"><div style="width:${Math.round((answered / 40) * 100)}%"></div></div>
        <button data-new-quiz>🔄 Nuova simulazione</button>
        <button data-submit-quiz class="primary">✅ Invia</button>
        <div class="question-map">${currentQuiz.map((q, i) => `<a href="#quiz-${i}" class="${q.selectedIndex !== null ? 'done' : ''}">${i + 1}</a>`).join('')}</div>
        ${quizSubmitted ? renderQuizResult() : ''}
      </aside>
    </div>
  `;

  view().querySelector<HTMLButtonElement>('[data-new-quiz]')?.addEventListener('click', () => {
    currentQuiz = createSimulation(questions, 40);
    quizSubmitted = false;
    renderQuiz();
  });

  view().querySelector<HTMLButtonElement>('[data-submit-quiz]')?.addEventListener('click', () => {
    const result = gradeQuiz(currentQuiz);
    state = recordQuizAttempt(state, result);
    saveProgress(state);
    quizSubmitted = true;
    renderQuiz();
  });

  view().querySelectorAll<HTMLButtonElement>('[data-quiz-answer]').forEach(button => {
    button.addEventListener('click', () => {
      if (quizSubmitted) return;
      const id = button.dataset.question!;
      const selected = Number(button.dataset.quizAnswer);
      currentQuiz = answerQuizQuestion(currentQuiz, id, selected);
      renderQuiz();
    });
  });
}

function renderQuizQuestion(q: QuizQuestion, index: number): string {
  return `
    <article class="question ${quizSubmitted ? 'show' : ''}" id="quiz-${index}">
      <span class="meta">Domanda ${index + 1}/40 · ${topics.find(t => t.id === q.topicId)?.title}</span>
      <h3>${q.prompt}</h3>
      ${q.options.map((option, optIndex) => {
        const selected = q.selectedIndex === optIndex;
        const klass = quizSubmitted
          ? optIndex === q.answerIndex ? 'correct' : selected ? 'wrong' : ''
          : selected ? 'selected' : '';
        return `<button class="option ${klass}" data-question="${q.id}" data-quiz-answer="${optIndex}"><strong>${'ABCD'[optIndex]})</strong> ${option}</button>`;
      }).join('')}
      <div class="explanation"><strong>Risposta corretta: ${'ABCD'[q.answerIndex]}) ${q.options[q.answerIndex]}</strong><br>${q.explanation}</div>
    </article>
  `;
}

function renderQuizResult(): string {
  const result = gradeQuiz(currentQuiz);
  return `<div class="result ${result.passed ? 'pass' : 'fail'}">
    <h3>${result.passed ? '✅ Test superato' : '❌ Test non superato'}</h3>
    <p><strong>${result.score}/40</strong> · soglia ${result.threshold}/40</p>
  </div>`;
}

function renderFacts(): void {
  view().innerHTML = `<div class="facts">${facts.map((fact, index) => `<article class="card"><span class="meta">Tip ${index + 1}</span><h3>💡 Sapevi che</h3><p>${fact}</p></article>`).join('')}</div>`;
}

function renderProgress(): void {
  const attempts = state.quizAttempts;
  const avg = attempts.length ? Math.round(attempts.reduce((sum, a) => sum + a.score, 0) / attempts.length) : 0;

  view().innerHTML = `
    <div class="progress-grid">
      <article class="card"><h3>Risposte studio</h3><strong>${state.totalAnswered}</strong></article>
      <article class="card"><h3>Quiz completati</h3><strong>${attempts.length}</strong></article>
      <article class="card"><h3>Media quiz</h3><strong>${avg}/40</strong></article>
      <article class="card"><h3>Streak</h3><strong>${state.streak} giorni</strong></article>
    </div>
    <section class="card">
      <h2>Ultimi tentativi</h2>
      ${attempts.length ? attempts.map(a => `<p>${new Date(a.completedAt).toLocaleString()} · <strong>${a.score}/${a.total}</strong> · ${a.passed ? 'superato' : 'non superato'}</p>`).join('') : '<p>Nessun tentativo completato.</p>'}
    </section>
  `;
}
