export type TopicId = 'security' | 'automation' | 'water' | 'logic' | 'contract';

export type Topic = {
  id: TopicId;
  icon: string;
  title: string;
  subtitle: string;
  priority: number;
  tips: string[];
};

export type Question = {
  id: string;
  topicId: TopicId;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
};

export const topics: Topic[] = [
  {
    id: 'security',
    icon: '🛡️',
    title: 'Sicurezza',
    subtitle: 'D.Lgs. 81/08, DPI, DVR, RSPP, RLS',
    priority: 30,
    tips: ['Non sbagliare acronimi base', 'DPI e ruoli sono quasi certi', 'Ripassa rischio elettrico e spazi confinati']
  },
  {
    id: 'automation',
    icon: '⚙️',
    title: 'Automazione',
    subtitle: 'PLC, SCADA, sensori, inverter, OT',
    priority: 30,
    tips: ['Analogico vs digitale', 'FAT/SAT/commissioning', 'SCADA, HMI, inverter e cyber OT']
  },
  {
    id: 'water',
    icon: '💧',
    title: 'Reti idriche',
    subtitle: 'Ricerca perdite, geofono, portata, pressione',
    priority: 20,
    tips: ['Geofono e gas tracciante', 'Pressione, portata e perdite di carico', 'Saracinesche e GIS']
  },
  {
    id: 'logic',
    icon: '🧠',
    title: 'Logica',
    subtitle: 'Serie, percentuali, proporzioni',
    priority: 15,
    tips: ['Allenati sulla velocità', 'Fai prima i calcoli semplici', 'Non bloccarti su una domanda']
  },
  {
    id: 'contract',
    icon: '📄',
    title: 'CCNL',
    subtitle: 'Gas-Acqua, reperibilità, prova',
    priority: 5,
    tips: ['Poche domande, facili', 'Reperibilità e periodo di prova', 'Soglia 28/40']
  }
];

const seed: Omit<Question, 'id'>[] = [
  {
    topicId: 'security',
    prompt: 'Cosa significa DPI?',
    options: ['Dispositivo di Protezione Individuale', 'Documento Prevenzione Industriale', 'Dispositivo Protezione Interna', 'Dichiarazione Personale'],
    answerIndex: 0,
    explanation: 'I DPI proteggono il singolo lavoratore da rischi specifici.',
    difficulty: 'easy'
  },
  {
    topicId: 'security',
    prompt: "Chi nomina l'RSPP?",
    options: ['Datore di lavoro', 'RLS', 'INAIL', 'Cliente'],
    answerIndex: 0,
    explanation: "La nomina dell'RSPP è obbligo del datore di lavoro.",
    difficulty: 'easy'
  },
  {
    topicId: 'security',
    prompt: 'Cosa significa DVR?',
    options: ['Documento Valutazione Rischi', 'Documento Verifica Reti', 'Dichiarazione Valori Rete', 'Documento Vigilanza Reparto'],
    answerIndex: 0,
    explanation: 'Il DVR contiene la valutazione dei rischi e le misure di prevenzione.',
    difficulty: 'easy'
  },
  {
    topicId: 'security',
    prompt: 'Chi rappresenta i lavoratori per la sicurezza?',
    options: ['RLS', 'RSPP', 'ASPP', 'Medico competente'],
    answerIndex: 0,
    explanation: 'RLS significa Rappresentante dei Lavoratori per la Sicurezza.',
    difficulty: 'easy'
  },
  {
    topicId: 'security',
    prompt: 'Uno spazio confinato è:',
    options: ['Ambiente con accessi limitati e rischi specifici', 'Ufficio piccolo', 'Locale aperto', 'Magazzino asciutto'],
    answerIndex: 0,
    explanation: 'Può avere carenza di ossigeno, gas tossici o difficoltà di soccorso.',
    difficulty: 'medium'
  },
  {
    topicId: 'automation',
    prompt: 'Cosa significa PLC?',
    options: ['Programmable Logic Controller', 'Power Line Computer', 'Primary Logic Cable', 'Process Level Control'],
    answerIndex: 0,
    explanation: 'È un controllore logico programmabile usato per automatizzare impianti.',
    difficulty: 'easy'
  },
  {
    topicId: 'automation',
    prompt: 'Un ingresso digitale legge:',
    options: ['Stati ON/OFF', 'Valori continui', 'Solo pressione', 'Solo temperatura'],
    answerIndex: 0,
    explanation: 'Un ingresso digitale lavora con stati binari.',
    difficulty: 'easy'
  },
  {
    topicId: 'automation',
    prompt: 'Un segnale 4-20 mA è:',
    options: ['Analogico', 'Digitale', 'Meccanico', 'Cartografico'],
    answerIndex: 0,
    explanation: '4-20 mA è uno standard analogico industriale.',
    difficulty: 'easy'
  },
  {
    topicId: 'automation',
    prompt: 'A cosa serve uno SCADA?',
    options: ['Supervisione e controllo impianti', 'Saldatura', 'Paghe', 'DPI'],
    answerIndex: 0,
    explanation: 'Uno SCADA monitora e controlla impianti da remoto o sala controllo.',
    difficulty: 'medium'
  },
  {
    topicId: 'automation',
    prompt: 'FAT significa:',
    options: ['Factory Acceptance Test', 'Final Alarm Tool', 'Field Action Test', 'First Automation Type'],
    answerIndex: 0,
    explanation: "È il test in fabbrica prima dell'installazione.",
    difficulty: 'medium'
  },
  {
    topicId: 'water',
    prompt: "Cos'è una perdita occulta?",
    options: ['Perdita non visibile', 'Perdita autorizzata', 'Errore PLC', 'Ferie'],
    answerIndex: 0,
    explanation: 'È una perdita nascosta che richiede indagini strumentali.',
    difficulty: 'easy'
  },
  {
    topicId: 'water',
    prompt: "Cos'è un geofono?",
    options: ['Strumento acustico per perdite', 'Valvola', 'Pompa', 'PLC'],
    answerIndex: 0,
    explanation: 'Ascolta il rumore prodotto dalla perdita.',
    difficulty: 'easy'
  },
  {
    topicId: 'water',
    prompt: 'La portata è:',
    options: ['Quantità di fluido nel tempo', 'Forza per superficie', 'Temperatura', 'Tensione'],
    answerIndex: 0,
    explanation: 'Si misura spesso in l/s o m³/h.',
    difficulty: 'easy'
  },
  {
    topicId: 'water',
    prompt: 'Una saracinesca serve a:',
    options: ['Intercettare il flusso', 'Misurare pH', 'Fare backup', 'Saldare'],
    answerIndex: 0,
    explanation: 'Serve a isolare o chiudere tratti della rete.',
    difficulty: 'easy'
  },
  {
    topicId: 'logic',
    prompt: '2, 4, 8, 16, ?',
    options: ['24', '30', '32', '36'],
    answerIndex: 2,
    explanation: 'La serie raddoppia ogni volta.',
    difficulty: 'easy'
  },
  {
    topicId: 'logic',
    prompt: '1, 4, 9, 16, ?',
    options: ['20', '24', '25', '36'],
    answerIndex: 2,
    explanation: 'Sono quadrati perfetti: 1², 2², 3², 4², 5².',
    difficulty: 'easy'
  },
  {
    topicId: 'logic',
    prompt: 'Il 20% di 150 è:',
    options: ['20', '25', '30', '35'],
    answerIndex: 2,
    explanation: '150 × 0,20 = 30.',
    difficulty: 'easy'
  },
  {
    topicId: 'contract',
    prompt: 'Il CCNL Gas-Acqua disciplina:',
    options: ['Rapporto di lavoro settore gas-acqua', 'Solo geofoni', 'Solo PLC', 'Solo cartografia'],
    answerIndex: 0,
    explanation: 'Definisce diritti, doveri e istituti contrattuali.',
    difficulty: 'easy'
  },
  {
    topicId: 'contract',
    prompt: 'La reperibilità significa:',
    options: ['Disponibilità a intervenire fuori orario', 'Ferie', 'Formazione base', 'Telelavoro automatico'],
    answerIndex: 0,
    explanation: 'Può essere richiesta per profili operativi.',
    difficulty: 'easy'
  },
  {
    topicId: 'contract',
    prompt: 'Il punteggio minimo scritto è:',
    options: ['28/40', '14/40', '40/40', '75/40'],
    answerIndex: 0,
    explanation: 'La soglia minima dello scritto è 28/40.',
    difficulty: 'easy'
  }
];

const targets: Record<TopicId, number> = {
  security: 130,
  automation: 130,
  water: 125,
  logic: 100,
  contract: 15
};

export const questions: Question[] = Object.entries(targets).flatMap(([topicId, count]) => {
  const topicSeed = seed.filter(q => q.topicId === topicId);
  return Array.from({ length: count }, (_, index) => {
    const base = topicSeed[index % topicSeed.length];
    const variant = Math.floor(index / topicSeed.length) + 1;
    return {
      ...base,
      id: `${topicId}-${index + 1}`,
      prompt: variant === 1 ? base.prompt : `${base.prompt.replace(/\?$/, '')} - variante ${variant}?`
    };
  });
});

export const facts = [
  'La soglia 28/40 significa che puoi sbagliare al massimo 12 domande.',
  'DPI, DVR, RSPP, RLS e preposto sono domande da non sbagliare.',
  'PLC, SCADA, inverter, FAT e SAT sono parole chiave del profilo C.',
  'Geofono, gas tracciante, correlatore, pressione e portata sono centrali per il profilo B.',
  'Un segnale 4-20 mA è analogico; un ingresso ON/OFF è digitale.',
  'La perdita apparente non è acqua fisicamente persa: può dipendere da contatori, frodi o errori.',
  'Fai almeno tre simulazioni sopra 32/40 prima della prova.'
];
