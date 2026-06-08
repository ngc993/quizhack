# QuizHack SMAT SPA

SPA statica per prepararsi alla prova scritta SMAT per i profili B e C.

## Stack

- Vite
- TypeScript
- SPA vanilla
- LocalStorage persistence
- Vitest
- GitHub Pages workflow

## Funzionalità

- Wrapper iniziale con scelta modalità:
  - Percorso studio
  - Quiz / simulazione
  - Sapevi che
- Tracciamento progressi su `localStorage`
- Cronologia tentativi quiz
- Errori da ripassare
- Streak giornaliera
- Dashboard personale
- Simulazione da 40 domande con soglia 28/40
- Risposte della simulazione visibili solo dopo invio
- Test unitari per store e quiz engine

## Comandi

```bash
npm install
npm run dev
npm run test
npm run build
```

## Deploy GitHub Pages

Il workflow `.github/workflows/pages.yml` pubblica automaticamente la build su GitHub Pages.

Se il repository è `ngc993/quizhack`, il sito sarà disponibile su:

```text
https://ngc993.github.io/quizhack/
```

## Note

Le domande sono ricostruite per esercitazione personale sugli argomenti più probabili del bando. Non sono domande ufficiali SMAT.
