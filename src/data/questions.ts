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

export const questions: Question[] = [
  { id: 'security-1', topicId: 'security', prompt: 'Cosa significa DPI?', options: ['Dispositivo di Protezione Individuale', 'Documento Prevenzione Industriale', 'Dispositivo Protezione Interna', 'Dichiarazione Personale'], answerIndex: 0, explanation: 'I DPI proteggono il singolo lavoratore da rischi specifici quando il rischio non può essere eliminato alla fonte.', difficulty: 'easy' },
  { id: 'security-2', topicId: 'security', prompt: "Chi nomina l'RSPP?", options: ['Datore di lavoro', 'RLS', 'INAIL', 'Cliente'], answerIndex: 0, explanation: "La nomina dell'RSPP è un obbligo non delegabile del datore di lavoro.", difficulty: 'easy' },
  { id: 'security-3', topicId: 'security', prompt: 'Cosa significa DVR?', options: ['Documento di Valutazione dei Rischi', 'Documento Verifica Reti', 'Dichiarazione Valori Rete', 'Documento Vigilanza Reparto'], answerIndex: 0, explanation: 'Il DVR contiene la valutazione dei rischi e le misure di prevenzione e protezione.', difficulty: 'easy' },
  { id: 'security-4', topicId: 'security', prompt: 'Chi rappresenta i lavoratori per la sicurezza?', options: ['RLS', 'RSPP', 'ASPP', 'Medico competente'], answerIndex: 0, explanation: 'RLS significa Rappresentante dei Lavoratori per la Sicurezza.', difficulty: 'easy' },
  { id: 'security-5', topicId: 'security', prompt: 'Quale rischio è tipico di uno spazio confinato?', options: ['Atmosfera asfissiante o tossica', 'Solo rumore da ufficio', 'Solo rischio videoterminale', 'Assenza di rischio specifico'], answerIndex: 0, explanation: 'Negli spazi confinati possono esserci carenza di ossigeno, gas tossici o difficoltà di soccorso.', difficulty: 'medium' },
  { id: 'security-6', topicId: 'security', prompt: 'Il preposto ha il compito principale di:', options: ['Sovrintendere e vigilare sulle attività operative', 'Redigere il bilancio aziendale', 'Sostituire sempre il medico competente', 'Autorizzare le ferie'], answerIndex: 0, explanation: 'Il preposto vigila sull’attuazione delle disposizioni di sicurezza durante il lavoro.', difficulty: 'medium' },
  { id: 'security-7', topicId: 'security', prompt: 'Prima di intervenire su un quadro elettrico è essenziale:', options: ['Mettere in sicurezza e verificare assenza tensione', 'Bagnare il pavimento', 'Lavorare senza guanti', 'Aumentare la corrente'], answerIndex: 0, explanation: 'La messa in sicurezza elettrica riduce il rischio di folgorazione.', difficulty: 'medium' },
  { id: 'security-8', topicId: 'security', prompt: 'La segnaletica di sicurezza con forma triangolare indica generalmente:', options: ['Avvertimento o pericolo', 'Obbligo', 'Divieto assoluto', 'Uscita di emergenza'], answerIndex: 0, explanation: 'I segnali triangolari sono di avvertimento; quelli rotondi blu sono di obbligo.', difficulty: 'easy' },
  { id: 'security-9', topicId: 'security', prompt: 'La formazione sulla sicurezza deve essere:', options: ['Adeguata al rischio e aggiornata', 'Solo verbale e mai registrata', 'Facoltativa per i neoassunti', 'Svolta solo dopo un infortunio'], answerIndex: 0, explanation: 'La formazione deve essere coerente con mansione, rischi e aggiornamenti normativi.', difficulty: 'medium' },
  { id: 'security-10', topicId: 'security', prompt: 'In caso di emergenza, la prima azione corretta è:', options: ['Seguire il piano di emergenza e avvisare i referenti', 'Correre senza avvisare nessuno', 'Usare sempre l’ascensore', 'Ignorare l’allarme se si lavora'], answerIndex: 0, explanation: 'Il piano di emergenza definisce ruoli, vie di esodo e comunicazioni.', difficulty: 'easy' },
  { id: 'security-11', topicId: 'security', prompt: 'Un rischio residuo è:', options: ['Il rischio che rimane dopo le misure di prevenzione', 'Un rischio inesistente', 'Un errore del PLC', 'Una perdita contabile'], answerIndex: 0, explanation: 'Il rischio residuo va gestito con procedure, formazione e DPI.', difficulty: 'medium' },
  { id: 'security-12', topicId: 'security', prompt: 'Quale figura effettua la sorveglianza sanitaria quando prevista?', options: ['Medico competente', 'RLS', 'Cliente finale', 'Magazziniere'], answerIndex: 0, explanation: 'Il medico competente collabora alla valutazione dei rischi ed effettua la sorveglianza sanitaria.', difficulty: 'easy' },
  { id: 'automation-1', topicId: 'automation', prompt: 'Cosa significa PLC?', options: ['Programmable Logic Controller', 'Power Line Computer', 'Primary Logic Cable', 'Process Level Control'], answerIndex: 0, explanation: 'È un controllore logico programmabile usato per automatizzare impianti.', difficulty: 'easy' },
  { id: 'automation-2', topicId: 'automation', prompt: 'Un ingresso digitale legge:', options: ['Stati ON/OFF', 'Valori continui', 'Solo pressione', 'Solo temperatura'], answerIndex: 0, explanation: 'Un ingresso digitale lavora con stati binari.', difficulty: 'easy' },
  { id: 'automation-3', topicId: 'automation', prompt: 'Un segnale 4-20 mA è:', options: ['Analogico', 'Digitale', 'Meccanico', 'Cartografico'], answerIndex: 0, explanation: '4-20 mA è uno standard analogico industriale per misure di processo.', difficulty: 'easy' },
  { id: 'automation-4', topicId: 'automation', prompt: 'A cosa serve uno SCADA?', options: ['Supervisione e controllo impianti', 'Saldatura tubazioni', 'Gestione paghe', 'Distribuzione DPI'], answerIndex: 0, explanation: 'Uno SCADA monitora e controlla impianti da remoto o da sala controllo.', difficulty: 'medium' },
  { id: 'automation-5', topicId: 'automation', prompt: 'FAT significa:', options: ['Factory Acceptance Test', 'Final Alarm Tool', 'Field Action Test', 'First Automation Type'], answerIndex: 0, explanation: 'È il test in fabbrica prima dell’installazione presso il sito.', difficulty: 'medium' },
  { id: 'automation-6', topicId: 'automation', prompt: 'SAT significa:', options: ['Site Acceptance Test', 'Safety Alarm Timer', 'System Analog Tool', 'Sensor Active Test'], answerIndex: 0, explanation: 'È il test di accettazione eseguito sul sito di installazione.', difficulty: 'medium' },
  { id: 'automation-7', topicId: 'automation', prompt: 'Un inverter serve principalmente a:', options: ['Regolare velocità e frequenza di un motore', 'Misurare il pH', 'Registrare ferie', 'Isolare una condotta'], answerIndex: 0, explanation: 'L’inverter controlla motori elettrici variando frequenza e tensione.', difficulty: 'medium' },
  { id: 'automation-8', topicId: 'automation', prompt: 'Un trasduttore di pressione trasforma:', options: ['Una grandezza fisica in segnale elettrico', 'Una password in allarme', 'Una valvola in pompa', 'Una rete idrica in GIS'], answerIndex: 0, explanation: 'I trasduttori convertono grandezze fisiche in segnali leggibili dal sistema.', difficulty: 'easy' },
  { id: 'automation-9', topicId: 'automation', prompt: 'La HMI è:', options: ['Interfaccia uomo-macchina', 'Un tipo di saracinesca', 'Un DPI elettrico', 'Una pompa sommersa'], answerIndex: 0, explanation: 'La HMI permette all’operatore di interagire con macchina o impianto.', difficulty: 'easy' },
  { id: 'automation-10', topicId: 'automation', prompt: 'Quale linguaggio IEC 61131-3 è simile a schemi con contatti e bobine?', options: ['Ladder Diagram', 'SQL', 'HTML', 'Bash'], answerIndex: 0, explanation: 'Il Ladder Diagram richiama la logica a relè con contatti e bobine.', difficulty: 'medium' },
  { id: 'automation-11', topicId: 'automation', prompt: 'Un allarme SCADA deve indicare almeno:', options: ['Evento, ora e stato', 'Solo colore dello schermo', 'Solo nome operatore', 'Solo numero ferie'], answerIndex: 0, explanation: 'Gli allarmi devono essere tracciabili e utili alla diagnosi.', difficulty: 'medium' },
  { id: 'automation-12', topicId: 'automation', prompt: 'In ambito OT, una buona pratica di sicurezza è:', options: ['Limitare accessi e segmentare la rete', 'Usare la stessa password per tutti', 'Disabilitare i log', 'Collegare tutto a reti pubbliche'], answerIndex: 0, explanation: 'La segmentazione e il controllo accessi riducono il rischio cyber sugli impianti.', difficulty: 'hard' },
  { id: 'water-1', topicId: 'water', prompt: "Cos'è una perdita occulta?", options: ['Perdita non visibile', 'Perdita autorizzata', 'Errore PLC', 'Ferie non godute'], answerIndex: 0, explanation: 'È una perdita nascosta che richiede indagini strumentali.', difficulty: 'easy' },
  { id: 'water-2', topicId: 'water', prompt: "Cos'è un geofono?", options: ['Strumento acustico per individuare perdite', 'Valvola di intercettazione', 'Pompa di rilancio', 'Modulo PLC'], answerIndex: 0, explanation: 'Il geofono ascolta il rumore prodotto dalla perdita nel terreno o sulla condotta.', difficulty: 'easy' },
  { id: 'water-3', topicId: 'water', prompt: 'La portata è:', options: ['Quantità di fluido nel tempo', 'Forza per superficie', 'Temperatura del tubo', 'Tensione elettrica'], answerIndex: 0, explanation: 'Si misura spesso in l/s o m³/h.', difficulty: 'easy' },
  { id: 'water-4', topicId: 'water', prompt: 'Una saracinesca serve a:', options: ['Intercettare il flusso', 'Misurare pH', 'Fare backup dati', 'Saldare un quadro'], answerIndex: 0, explanation: 'Serve a isolare o chiudere tratti della rete.', difficulty: 'easy' },
  { id: 'water-5', topicId: 'water', prompt: 'Il correlatore acustico viene usato per:', options: ['Localizzare una perdita confrontando segnali acustici', 'Misurare cloro residuo', 'Gestire turni di reperibilità', 'Comandare un inverter'], answerIndex: 0, explanation: 'Confronta rumori captati in punti diversi per stimare la posizione della perdita.', difficulty: 'medium' },
  { id: 'water-6', topicId: 'water', prompt: 'Una perdita apparente può dipendere da:', options: ['Errore di misura, frode o contatore non corretto', 'Rottura sempre visibile della tubazione', 'Assenza totale di consumo', 'Pressione sempre nulla'], answerIndex: 0, explanation: 'La perdita apparente non è acqua fisicamente dispersa, ma volume non contabilizzato correttamente.', difficulty: 'medium' },
  { id: 'water-7', topicId: 'water', prompt: 'La pressione in una rete idrica si misura comunemente in:', options: ['bar', 'kg', 'Volt', 'Hz'], answerIndex: 0, explanation: 'Il bar è una unità di pressione usata spesso negli impianti idrici.', difficulty: 'easy' },
  { id: 'water-8', topicId: 'water', prompt: 'Un distretto idrico serve soprattutto a:', options: ['Monitorare consumi e perdite in una zona delimitata', 'Creare buste paga', 'Programmare solo PLC', 'Misurare soltanto temperatura aria'], answerIndex: 0, explanation: 'La distrettualizzazione permette bilanci idrici e ricerca perdite più efficace.', difficulty: 'medium' },
  { id: 'water-9', topicId: 'water', prompt: 'Il gas tracciante nella ricerca perdite serve a:', options: ['Individuare fuoriuscite rilevando il gas in superficie', 'Disinfettare l’acqua', 'Bloccare una valvola', 'Misurare il rumore elettrico'], answerIndex: 0, explanation: 'Il gas immesso nella tubazione può emergere dal punto di perdita ed essere rilevato.', difficulty: 'medium' },
  { id: 'water-10', topicId: 'water', prompt: 'Il GIS aziendale in ambito reti serve a:', options: ['Gestire dati geografici di condotte e asset', 'Misurare corrente elettrica', 'Eseguire test SAT', 'Sostituire il DVR'], answerIndex: 0, explanation: 'Il GIS associa informazioni tecniche alla posizione geografica degli elementi di rete.', difficulty: 'medium' },
  { id: 'water-11', topicId: 'water', prompt: 'Una perdita di carico indica:', options: ['Riduzione di pressione lungo una condotta', 'Aumento ferie', 'Errore di badge', 'Aumento del numero di PLC'], answerIndex: 0, explanation: 'Attriti, curve e componenti possono causare riduzioni di pressione nel flusso.', difficulty: 'medium' },
  { id: 'water-12', topicId: 'water', prompt: 'Una valvola di ritegno serve a:', options: ['Impedire il riflusso', 'Misurare il cloro', 'Generare corrente', 'Visualizzare allarmi'], answerIndex: 0, explanation: 'La valvola di ritegno consente il passaggio in un solo verso.', difficulty: 'easy' },
  { id: 'logic-1', topicId: 'logic', prompt: '2, 4, 8, 16, ?', options: ['24', '30', '32', '36'], answerIndex: 2, explanation: 'La serie raddoppia ogni volta.', difficulty: 'easy' },
  { id: 'logic-2', topicId: 'logic', prompt: '1, 4, 9, 16, ?', options: ['20', '24', '25', '36'], answerIndex: 2, explanation: 'Sono quadrati perfetti: 1², 2², 3², 4², 5².', difficulty: 'easy' },
  { id: 'logic-3', topicId: 'logic', prompt: 'Il 20% di 150 è:', options: ['20', '25', '30', '35'], answerIndex: 2, explanation: '150 × 0,20 = 30.', difficulty: 'easy' },
  { id: 'logic-4', topicId: 'logic', prompt: 'Se 3 operai completano un lavoro in 6 ore, quanti operai servono per completarlo in 3 ore?', options: ['4', '5', '6', '9'], answerIndex: 2, explanation: 'Tempo dimezzato richiede il doppio degli operai: 6.', difficulty: 'medium' },
  { id: 'logic-5', topicId: 'logic', prompt: 'Una pompa eroga 12 m³ in 3 ore. Qual è la portata media?', options: ['2 m³/h', '3 m³/h', '4 m³/h', '6 m³/h'], answerIndex: 2, explanation: '12 / 3 = 4 m³/h.', difficulty: 'easy' },
  { id: 'logic-6', topicId: 'logic', prompt: 'Qual è il numero mancante: 5, 10, 20, 40, ?', options: ['45', '60', '80', '100'], answerIndex: 2, explanation: 'La serie raddoppia ogni volta.', difficulty: 'easy' },
  { id: 'logic-7', topicId: 'logic', prompt: 'Un valore passa da 80 a 100. L’aumento percentuale è:', options: ['10%', '20%', '25%', '30%'], answerIndex: 2, explanation: 'L’aumento è 20 su base 80: 20/80 = 25%.', difficulty: 'medium' },
  { id: 'logic-8', topicId: 'logic', prompt: 'Se A è maggiore di B e B è maggiore di C, allora:', options: ['A è maggiore di C', 'C è maggiore di A', 'A è uguale a C', 'Non si può dire nulla'], answerIndex: 0, explanation: 'La relazione maggiore di è transitiva.', difficulty: 'easy' },
  { id: 'logic-9', topicId: 'logic', prompt: 'Un serbatoio contiene 600 litri. Se se ne consuma il 15%, quanti litri restano?', options: ['480', '500', '510', '540'], answerIndex: 2, explanation: 'Il 15% di 600 è 90; 600 - 90 = 510.', difficulty: 'medium' },
  { id: 'logic-10', topicId: 'logic', prompt: 'Quale numero completa la proporzione 4 : 20 = 7 : ?', options: ['28', '30', '35', '40'], answerIndex: 2, explanation: '20/4 = 5, quindi 7 × 5 = 35.', difficulty: 'easy' },
  { id: 'contract-1', topicId: 'contract', prompt: 'Il CCNL Gas-Acqua disciplina:', options: ['Rapporto di lavoro del settore gas-acqua', 'Solo geofoni', 'Solo PLC', 'Solo cartografia'], answerIndex: 0, explanation: 'Definisce diritti, doveri e istituti contrattuali del settore.', difficulty: 'easy' },
  { id: 'contract-2', topicId: 'contract', prompt: 'La reperibilità significa:', options: ['Disponibilità a intervenire fuori orario secondo turnazione', 'Ferie', 'Formazione base', 'Telelavoro automatico'], answerIndex: 0, explanation: 'La reperibilità può essere richiesta per garantire continuità del servizio.', difficulty: 'easy' },
  { id: 'contract-3', topicId: 'contract', prompt: 'Il punteggio minimo scritto indicato per la prova è:', options: ['28/40', '14/40', '40/40', '75/40'], answerIndex: 0, explanation: 'La soglia minima dello scritto è 28/40.', difficulty: 'easy' },
  { id: 'contract-4', topicId: 'contract', prompt: 'Durante il periodo di prova il lavoratore:', options: ['Viene valutato rispetto alla mansione assegnata', 'Non deve rispettare la sicurezza', 'Non ha alcun superiore', 'Non può ricevere formazione'], answerIndex: 0, explanation: 'Il periodo di prova serve a verificare l’idoneità alla mansione nel rispetto delle regole contrattuali.', difficulty: 'medium' }
];

export const facts = [
  'La soglia 28/40 significa che puoi sbagliare al massimo 12 domande.',
  'DPI, DVR, RSPP, RLS e preposto sono domande da non sbagliare.',
  'PLC, SCADA, inverter, FAT e SAT sono parole chiave del profilo C.',
  'Geofono, gas tracciante, correlatore, pressione e portata sono centrali per il profilo B.',
  'Un segnale 4-20 mA è analogico; un ingresso ON/OFF è digitale.',
  'La perdita apparente non è acqua fisicamente persa: può dipendere da contatori, frodi o errori.',
  'Fai almeno tre simulazioni sopra 32/40 prima della prova.'
];
