// ============================================================
// DATOS ESTÁTICOS
// ============================================================
const ROUTINES = {
  '8-12': [
    { time: '7:00',  icon: '🌅', text: 'Sacarla afuera a hacer pis (antes de que camine por la casa)' },
    { time: '7:15',  icon: '🍽️', text: 'Primera comida (ración de cachorro toy)' },
    { time: '7:30',  icon: '🚽', text: 'Sacarla afuera — después de comer siempre activa el intestino' },
    { time: '8:00',  icon: '🎾', text: 'Juego libre en casa — 10 minutos máximo' },
    { time: '8:30',  icon: '😴', text: 'Siesta (los cachorros duermen 18-20 hs/día — no interrumpirla)' },
    { time: '10:00', icon: '🚽', text: 'Sacarla afuera al despertar de la siesta' },
    { time: '10:15', icon: '🎾', text: 'Sesión de entrenamiento #1 — 5 minutos (nombre, sentado)' },
    { time: '11:00', icon: '😴', text: 'Siesta' },
    { time: '12:00', icon: '🍽️', text: 'Segunda comida' },
    { time: '12:15', icon: '🚽', text: 'Sacarla afuera' },
    { time: '12:30', icon: '🎾', text: 'Juego breve — 10 minutos' },
    { time: '13:00', icon: '😴', text: 'Siesta larga' },
    { time: '15:00', icon: '🚽', text: 'Sacarla afuera al despertar' },
    { time: '15:30', icon: '🎾', text: 'Sesión de entrenamiento #2 — 5 minutos' },
    { time: '16:30', icon: '😴', text: 'Siesta' },
    { time: '18:00', icon: '🍽️', text: 'Tercera comida' },
    { time: '18:15', icon: '🚽', text: 'Sacarla afuera' },
    { time: '18:45', icon: '🎾', text: 'Juego y socialización con la familia — 15 minutos' },
    { time: '19:30', icon: '😴', text: 'Tiempo tranquilo — bajar la energía antes de dormir' },
    { time: '20:00', icon: '🍽️', text: 'Cuarta comida (última del día)' },
    { time: '20:15', icon: '🚽', text: 'Sacarla afuera — última salida importante' },
    { time: '21:30', icon: '🌙', text: 'A dormir — sin agua después de esta hora los primeros días' },
  ],
  '3-6': [
    { time: '7:00',  icon: '🌅', text: 'Sacarla afuera a hacer pis' },
    { time: '7:15',  icon: '🍽️', text: 'Primera comida' },
    { time: '7:30',  icon: '🚽', text: 'Sacarla afuera' },
    { time: '8:00',  icon: '🎾', text: 'Paseo corto con correa (15 min máximo)' },
    { time: '9:00',  icon: '😴', text: 'Siesta' },
    { time: '11:00', icon: '🚽', text: 'Sacarla afuera' },
    { time: '11:15', icon: '🎾', text: 'Sesión de entrenamiento #1 — 5-8 minutos' },
    { time: '12:30', icon: '🍽️', text: 'Segunda comida' },
    { time: '12:45', icon: '🚽', text: 'Sacarla afuera' },
    { time: '13:30', icon: '😴', text: 'Siesta' },
    { time: '15:30', icon: '🚽', text: 'Sacarla afuera al despertar' },
    { time: '16:00', icon: '🎾', text: 'Sesión de entrenamiento #2 — 5-8 minutos' },
    { time: '16:30', icon: '😴', text: 'Siesta / descanso' },
    { time: '18:30', icon: '🍽️', text: 'Tercera comida' },
    { time: '18:45', icon: '🚽', text: 'Sacarla afuera' },
    { time: '19:00', icon: '🎾', text: 'Juego y socialización familiar' },
    { time: '21:00', icon: '🚽', text: 'Última salida' },
    { time: '21:30', icon: '🌙', text: 'A dormir' },
  ],
  '6-12': [
    { time: '7:00',  icon: '🌅', text: 'Sacarla a pasear — empiezan a aguantar más' },
    { time: '7:30',  icon: '🍽️', text: 'Primera comida' },
    { time: '7:45',  icon: '🚽', text: 'Sacarla afuera' },
    { time: '9:00',  icon: '🎾', text: 'Sesión de entrenamiento #1 — 10 minutos' },
    { time: '10:00', icon: '😴', text: 'Descanso' },
    { time: '13:00', icon: '🍽️', text: 'Segunda comida' },
    { time: '13:15', icon: '🚽', text: 'Sacarla afuera' },
    { time: '15:00', icon: '🎾', text: 'Sesión de entrenamiento #2 — 10 minutos' },
    { time: '17:00', icon: '🎾', text: 'Paseo largo — 20-30 min' },
    { time: '18:30', icon: '😴', text: 'Descanso' },
    { time: '20:00', icon: '🚽', text: 'Sacarla afuera' },
    { time: '21:30', icon: '🌙', text: 'A dormir' },
  ]
};

const GOLDEN_RULES = {
  '8-12': [
    'Si no la podés mirar fijo, ponela en el corralito con su cama',
    'Premiá el pis afuera en los primeros 5 segundos — después ya no sirve',
    'Nunca la retés por accidentes adentro — ignorá, limpiá, y listo',
    'Nada de escaleras, sillones ni saltos — huesos en formación',
    'Sesiones de entrenamiento de 5 min max — terminá antes de que se aburra',
  ],
  '3-6': [
    'Ya puede aguantar un poco más, pero seguí siendo consistente con los horarios',
    'Empezá a practicar la correa adentro antes de salir a la calle',
    'Presentarla a nuevas personas y sonidos todos los días',
    'Si hace pis adentro más de 2 veces en un día, revisá si está enferma o muy estresada',
  ],
  '6-12': [
    'Ya casi tiene el esfínter controlado — los accidentes son excepciones',
    'Podés empezar a alargar los paseos gradualmente',
    'Reforzá los comandos en distintos lugares y contextos',
  ]
};

const TRAINING_TIPS = [
  { icon: '⏱️', tip: 'Máximo 5 minutos por sesión. Con el caniche toy menos es más.' },
  { icon: '🦴', tip: 'Premio del tamaño de una lenteja. Si se llena deja de trabajar.' },
  { icon: '✅', tip: 'Decí "sí" o usá clicker JUSTO cuando hace lo correcto, antes del premio.' },
  { icon: '🔁', tip: 'Practicá cada comando en distintos lugares. En la cocina no vale solo en la cocina.' },
  { icon: '🌟', tip: 'Siempre terminá con algo que ya sabe hacer bien — que termine con éxito.' },
  { icon: '🚫', tip: 'Nunca repitas una orden 3 veces seguidas sin respuesta — perdés autoridad.' },
];

const SHOPPING = [
  "Cama o cucha chica","Transportadora / bolso de transporte","2 comederos bajos (acero o cerámica)",
  "Bebedero","Alimento balanceado cachorro raza pequeña","Collar y arnés talle cachorro",
  "Correa liviana","Plaqueta con datos","Pañales de entrenamiento / tapete absorbente",
  "Juguetes para morder (dentición)","Premios de entrenamiento pequeños","Shampoo para cachorros",
  "Cepillo suave","Cortaúñas para perros pequeños","Toallas y manta extra",
  "Limpiador enzimático (para limpiar accidentes sin dejar olor)","Corralito / playpen",
  "Snuffle mat o juguete de enriquecimiento mental"
];
const SPACE = [
  "Definir zona de descanso fija","Definir zona de comida/agua","Armar zona de baño (pañal/pasto sintético)",
  "Guardar cables y objetos a su alcance","Bloquear escaleras o desniveles si hay","Asegurar plantas tóxicas fuera de su alcance",
  "Avisar a toda la familia las reglas básicas","Conseguir datos del veterinario de zona",
  "Elegir el punto fijo afuera donde va a hacer pis siempre"
];
const FEEDING = [
  ["8-12 semanas","4 comidas al día","Húmedo en agua tibia si rechaza el seco"],
  ["3-6 meses","3 comidas al día","Pasar a balanceado seco raza pequeña"],
  ["6-12 meses","2 comidas al día","Mismo horario todos los días"],
  ["+12 meses","2 comidas al día","Cambiar a fórmula adulto raza pequeña"]
];
const VACCINES = [
  ["45 días","Vacuna óctuple/sextuple (1ra dosis)"],
  ["15 días tras llegar","Desparasitación interna"],
  ["65 días","Vacuna óctuple/sextuple (2da dosis)"],
  ["85 días","Vacuna óctuple/sextuple (3ra dosis)"],
  ["Cada 2-3 meses","Desparasitación interna de refuerzo"],
  ["Desde 90 días","Vacuna antirrábica"],
  ["Mensual hasta 6m","Desparasitación externa"],
  ["Anual","Refuerzo de vacunas"]
];
const ROUTINE_BASE = [
  ["7:00","Pis apenas despierta"],["7:15","Primera comida"],["8-10:00","Siesta"],
  ["10:00","Pis + juego corto"],["12:00","Segunda comida + pis"],["14-16:00","Siesta larga"],
  ["16:30","Pis + socialización"],["18:30","Tercera comida + pis"],["20:00","Juego tranquilo"],["21:30","Última salida pis"]
];
const HOUSETRAINING = [
  ["Elegí el lugar ya","Antes de que llegue, decidí el punto exacto afuera. No lo cambies las primeras semanas."],
  ["Llevala cargada al principio","Hasta que tenga el camino aprendido, cargala — si camina sola, va a marcar en el camino."],
  ["Quedate 2-3 minutos ahí","Sin jugar. Si no hizo en 3 min, volvé adentro y reintentá en 15 min."],
  ["Premiá en los primeros 5 segundos","Premio + '¡muy bien!' justo al terminar. El timing lo es todo."],
  ["Accidente adentro: ignoralo","Nunca la retés. Limpiá con limpiador enzimático (no amoníaco)."],
  ["Corralito cuando no la mirás","No ensucian donde duermen si el espacio es justo."]
];
const POTTY_SCHEDULE = [
  ["Apenas despierta","Sacarla antes de que camine por la casa"],
  ["15-20 min después de comer","Siempre — comer activa el intestino"],
  ["Después de cada siesta","Aunque haya dormido 20 minutos"],
  ["Después de jugar fuerte","La actividad también activa las ganas"],
  ["Cada 2 hs (8-12 semanas)","Aunque parezca que no tiene ganas"],
  ["Antes de dormir","Última salida, sin agua después"]
];
const PLAY = [
  ["8-12 semanas","Juego libre en casa, texturas, juguetes blandos. Nada de correa larga ni escaleras."],
  ["3-6 meses","Paseos cortos (5 min x mes de edad), juego con otros cachorros vacunados"],
  ["6-12 meses","Paseos más largos, juegos mentales (snuffle mat, buscar premios)"],
  ["+12 meses","Paseos normales, pelota, agility liviano si le gusta"]
];
const TRAINING_INFO = [
  ["Sesiones de 5 minutos","Mejor 4 sesiones de 5 min que una de 20"],
  ["Premio chico","Del tamaño de una lenteja, así no se llena"],
  ["Orden de comandos","Nombre → Sentado → Quieto → Venir → Pata → Echado → Sin tirar correa"],
  ["Marcá el momento exacto","Decí 'sí' justo cuando hace lo correcto"],
  ["Terminá siempre bien","Cortá cuando todavía le interesa"],
  ["Distintos lugares","Practicá en cocina, patio, calle — sino solo obedece en un lugar"]
];
const SOCIAL = [
  "Gente distinta (chicos, adultos, con gorra, con bastón)",
  "Otros perros vacunados y de buen trato",
  "Sonidos de casa: aspiradora, timbre, secador",
  "Viajes en auto cortos y tranquilos",
  "Superficies distintas: pasto, cerámica, alfombra, metal",
  "Manipulación de patas, orejas y boca (para baño y veterinario)"
];
const AVOID = [
  "Nunca pegarle, gritarle ni restregarle la nariz en el accidente",
  "No dejarla sola muchas horas — el toy es propenso a ansiedad por separación",
  "No forzar saltos ni escaleras antes del año — huesos en crecimiento",
  "No premiar con comida humana ni en exceso",
  "No despertarla bruscamente ni sorprenderla al dormir",
  "No exponerla a frío o calor extremo"
];
const VET_SIGNS = [
  "Vómitos o diarrea que duran más de 24hs",
  "No come ni toma agua por más de 12hs",
  "Letargo extremo, no responde a estímulos",
  "Encías muy pálidas o temblores fuertes (hipoglucemia — frecuente en toy)",
  "Dificultad para respirar o tos persistente",
  "Cualquier caída desde altura, aunque parezca estar bien"
];

// ============================================================
// STORAGE
// ============================================================
const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); }
    catch(e) { return fallback; }
  },
  set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch(e) {} }
};

function today() { return new Date().toISOString().slice(0,10); }
function nowTime() { return new Date().toLocaleTimeString('es-AR', { hour:'2-digit', minute:'2-digit' }); }

// ============================================================
// TOAST
// ============================================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}

// ============================================================
// TABS
// ============================================================
const PAGE_TITLES = {
  inicio: ['Mi Caniche', 'Resumen del día'],
  rutinas: ['Rutinas', 'Entrenamiento y seguimiento diario'],
  compras: ['Compras y casa', 'Todo lo que necesitás antes de que llegue'],
  salud: ['Salud', 'Vacunas, desparasitación y rutina'],
  crianza: ['Crianza', 'Pis afuera, juego, entrenamiento y socialización'],
};

function setupTabs() {
  document.querySelectorAll('nav.tabbar button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('nav.tabbar button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.getElementById('view-' + btn.dataset.view).classList.add('active');
      const [title, sub] = PAGE_TITLES[btn.dataset.view] || ['Mi Caniche',''];
      document.getElementById('page-title').textContent = title;
      document.getElementById('page-sub').textContent = sub;
      if (btn.dataset.view === 'inicio') renderTodaySummary();
      if (btn.dataset.view === 'rutinas') renderProgresoCharts();
    });
  });

  // subtabs
  document.querySelectorAll('.subtab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.subtab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.subview').forEach(v => v.classList.remove('active'));
      document.getElementById('sub-' + btn.dataset.sub).classList.add('active');
      if (btn.dataset.sub === 'progreso') renderProgresoCharts();
      if (btn.dataset.sub === 'pis-tracker') renderPisStats();
    });
  });
}

// ============================================================
// COUNTDOWN / INICIO
// ============================================================
function updateCountdown() {
  const input = document.getElementById('arrival-date');
  const numEl = document.getElementById('countdown-num');
  const labelEl = document.getElementById('countdown-label');
  if (!input.value) { numEl.textContent = '--'; labelEl.textContent = 'elegí la fecha de llegada'; return; }
  const t = new Date(); t.setHours(0,0,0,0);
  const target = new Date(input.value + 'T00:00:00');
  const diff = Math.round((target - t) / 86400000);
  if (diff > 0) { numEl.textContent = diff; labelEl.textContent = diff === 1 ? 'día para que llegue' : 'días para que llegue'; }
  else if (diff === 0) { numEl.textContent = '🎉'; labelEl.textContent = '¡hoy llega!'; }
  else { numEl.textContent = '✓'; labelEl.textContent = 'ya está en casa'; }
}

function renderTodaySummary() {
  const log = store.get('pis-log-' + today(), []);
  const feeds = store.get('feed-log-' + today(), []);
  const training = store.get('training-log-' + today(), []);
  const correct = log.filter(e => e.type === 'afuera' || e.type === 'caca').length;
  const total = log.length;
  const pct = total > 0 ? Math.round(correct/total*100) : null;

  document.getElementById('stat-pis').textContent = pct !== null ? pct + '%' : '--%';

  const el = document.getElementById('today-summary');
  if (log.length === 0 && feeds.length === 0 && training.length === 0) {
    el.textContent = 'Todavía no hay registros del día.'; return;
  }
  el.innerHTML = `
    <div class="log-entry"><span>🚽</span><span>Pis: ${total} registros${pct!==null?' — '+pct+'% en lugar correcto':''}</span></div>
    <div class="log-entry"><span>🍽️</span><span>Comidas: ${feeds.length} (${feeds.join(', ')||'—'})</span></div>
    <div class="log-entry"><span>🎾</span><span>Entrenamientos: ${training.length} sesiones</span></div>
  `;
}

// ============================================================
// CHECKLIST GENÉRICO
// ============================================================
function renderChecklist(containerId, items, key, statId) {
  let checked = store.get(key, new Array(items.length).fill(false));
  if (checked.length !== items.length) checked = new Array(items.length).fill(false);
  const el = document.getElementById(containerId);
  el.innerHTML = items.map((item, i) => `
    <label class="checklist-item ${checked[i]?'done':''}" data-i="${i}">
      <input type="checkbox" ${checked[i]?'checked':''} /><span>${item}</span>
    </label>`).join('');
  function updateStat() {
    const done = checked.filter(Boolean).length;
    if (statId) document.getElementById(statId).textContent = done+'/'+checked.length;
  }
  updateStat();
  el.querySelectorAll('.checklist-item').forEach(row => {
    row.querySelector('input').addEventListener('change', e => {
      const i = parseInt(row.dataset.i);
      checked[i] = e.target.checked;
      row.classList.toggle('done', e.target.checked);
      store.set(key, checked);
      updateStat();
      renderNextSteps();
    });
  });
}

function renderInfoList(containerId, items) {
  const el = document.getElementById(containerId);
  el.innerHTML = items.map(item => `<div class="checklist-item"><span>${item}</span></div>`).join('');
}

function renderTable(containerId, rows, withNote) {
  const el = document.getElementById(containerId);
  el.innerHTML = rows.map(r => `<tr>
    <td class="when">${r[0]}</td>
    <td class="${withNote?'':'note'}">${r[1]}</td>
    ${withNote ? `<td class="note">${r[2]}</td>` : ''}
  </tr>`).join('');
}

function renderNextSteps() {
  const shopping = store.get('shopping-checked', new Array(SHOPPING.length).fill(false));
  const space = store.get('space-checked', new Array(SPACE.length).fill(false));
  const el = document.getElementById('next-steps');
  const ms = SHOPPING.filter((_,i)=>!shopping[i]);
  const msp = SPACE.filter((_,i)=>!space[i]);
  if (!ms.length && !msp.length) { el.textContent='Todo listo para su llegada.'; return; }
  const parts = [];
  if (ms.length) parts.push(`Comprar: ${ms[0]}${ms.length>1?` (+${ms.length-1} más)`:''}`);
  if (msp.length) parts.push(`Preparar: ${msp[0]}${msp.length>1?` (+${msp.length-1} más)`:''}`);
  el.textContent = parts.join(' · ');
}

// ============================================================
// RUTINA DEL DÍA
// ============================================================
let currentAge = store.get('selected-age', '8-12');

function renderRoutineChecklist() {
  const key = 'routine-checked-' + today() + '-' + currentAge;
  let checked = store.get(key, new Array(ROUTINES[currentAge].length).fill(false));
  const el = document.getElementById('routine-checklist');
  const items = ROUTINES[currentAge];
  el.innerHTML = items.map((item, i) => `
    <label class="checklist-item ${checked[i]?'done':''}" data-i="${i}" style="gap:6px;">
      <input type="checkbox" ${checked[i]?'checked':''} />
      <span style="font-size:18px;line-height:1;">${item.icon}</span>
      <span><b>${item.time}</b> — ${item.text}</span>
    </label>`).join('');
  el.querySelectorAll('.checklist-item').forEach(row => {
    row.querySelector('input').addEventListener('change', e => {
      const i = parseInt(row.dataset.i);
      checked[i] = e.target.checked;
      row.classList.toggle('done', e.target.checked);
      store.set(key, checked);
    });
  });
}

function renderGoldenRules() {
  const el = document.getElementById('golden-rules');
  el.innerHTML = (GOLDEN_RULES[currentAge]||[]).map(r =>
    `<div class="checklist-item"><span>💡 ${r}</span></div>`).join('');
}

function setupAgeSelector() {
  document.querySelectorAll('#age-selector .pill-btn').forEach(btn => {
    if (btn.dataset.age === currentAge) btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('#age-selector .pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentAge = btn.dataset.age;
      store.set('selected-age', currentAge);
      renderRoutineChecklist();
      renderGoldenRules();
    });
  });
  document.getElementById('btn-reset-routine').addEventListener('click', () => {
    const key = 'routine-checked-' + today() + '-' + currentAge;
    store.set(key, new Array(ROUTINES[currentAge].length).fill(false));
    renderRoutineChecklist();
    showToast('Rutina reiniciada para hoy');
  });
}

// ============================================================
// PIS TRACKER
// ============================================================
function logPis(type) {
  const entry = { time: nowTime(), type };
  const key = 'pis-log-' + today();
  const log = store.get(key, []);
  log.push(entry);
  store.set(key, log);
  renderPisStats();
  const msgs = { afuera:'✅ ¡Bien! Pis afuera registrado', correcto:'🟡 Pis en tapete registrado', mal:'❌ Accidente registrado', caca:'💩 Caca registrada' };
  showToast(msgs[type] || 'Registrado');
  renderTodaySummary();
  document.getElementById('stat-pis').textContent = getPisPctToday() + '%';
}

function getPisPctToday() {
  const log = store.get('pis-log-' + today(), []);
  if (!log.length) return '--';
  const ok = log.filter(e => e.type==='afuera'||e.type==='caca').length;
  return Math.round(ok/log.length*100);
}

function renderPisStats() {
  const log = store.get('pis-log-' + today(), []);
  const afuera = log.filter(e=>e.type==='afuera').length;
  const correcto = log.filter(e=>e.type==='correcto').length;
  const mal = log.filter(e=>e.type==='mal').length;
  const caca = log.filter(e=>e.type==='caca').length;
  const total = log.length;
  const ok = afuera + caca;
  const pct = total > 0 ? Math.round(ok/total*100) : 0;

  const statsEl = document.getElementById('pis-stats-today');
  statsEl.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:12px;">
      <div class="stat"><div class="num" style="color:#2D6020;">${afuera}</div><div class="lbl">Afuera</div></div>
      <div class="stat"><div class="num" style="color:#7A5C00;">${correcto}</div><div class="lbl">Tapete</div></div>
      <div class="stat"><div class="num" style="color:#B8543A;">${mal}</div><div class="lbl">Accidente</div></div>
      <div class="stat"><div class="num" style="color:#2955A8;">${caca}</div><div class="lbl">Caca</div></div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;">
      <span>Tasa de éxito hoy</span><b>${pct}%</b>
    </div>
    <div class="prog-bar-wrap">
      <div class="prog-bar-fill ${pct<50?'danger':pct<75?'warn':''}" style="width:${pct}%;"></div>
    </div>
    <p class="empty-note" style="margin:0;">${
      pct===100?'¡Perfecto! Todo en el lugar correcto hoy 🌟':
      pct>=75?'Muy bien — seguí así con los horarios de salida':
      pct>=50?'Bien encaminada — revisá si los horarios de salida son suficientes':
      total===0?'Todavía sin registros hoy':
      'Necesita más consistencia — fijate en los horarios de salida'
    }</p>
  `;

  const logEl = document.getElementById('pis-log-today');
  if (!log.length) { logEl.innerHTML = '<p class="empty-note">Sin registros todavía.</p>'; return; }
  const badges = { afuera:['ok','Afuera ✅'], correcto:['warn','Tapete 🟡'], mal:['bad','Adentro ❌'], caca:['info','Caca 💩'] };
  logEl.innerHTML = [...log].reverse().map(e => {
    const [cls, label] = badges[e.type]||['ok','?'];
    return `<div class="log-entry"><span class="time">${e.time}</span><span class="badge ${cls}">${label}</span></div>`;
  }).join('');
}

function renderWeekPis() {
  const days = [];
  for (let i=6; i>=0; i--) {
    const d = new Date(); d.setDate(d.getDate()-i);
    const key = d.toISOString().slice(0,10);
    const log = store.get('pis-log-'+key, []);
    const ok = log.filter(e=>e.type==='afuera'||e.type==='caca').length;
    const total = log.length;
    const pct = total>0?Math.round(ok/total*100):null;
    const label = ['Do','Lu','Ma','Mi','Ju','Vi','Sa'][d.getDay()];
    days.push({ label, pct, total });
  }

  const el = document.getElementById('pis-stats-week');
  const maxH = 60;
  el.innerHTML = `
    <div class="week-chart">
      ${days.map(d=>`
        <div class="week-bar-col">
          <div class="week-bar-pct">${d.pct!==null?d.pct+'%':''}</div>
          <div class="week-bar ${d.pct===null?'empty':''}" style="height:${d.pct!==null?Math.round(d.pct/100*maxH):8}px;"></div>
          <div class="week-bar-label">${d.label}</div>
        </div>`).join('')}
    </div>
    <p class="empty-note" style="margin:4px 0 0;">Cada barra es el % de pis en lugar correcto ese día.</p>
  `;
}

function setupPisButtons() {
  document.getElementById('btn-pis-afuera').addEventListener('click', () => logPis('afuera'));
  document.getElementById('btn-pis-adentro-correcto').addEventListener('click', () => logPis('correcto'));
  document.getElementById('btn-pis-adentro-mal').addEventListener('click', () => logPis('mal'));
  document.getElementById('btn-pis-caca').addEventListener('click', () => logPis('caca'));
}

// ============================================================
// ENTRENAMIENTO
// ============================================================
let selectedCmd = 'nombre';
let selectedRes = 'excelente';
let repCount = 5;

function setupTraining() {
  document.querySelectorAll('#comando-selector .pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#comando-selector .pill-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      selectedCmd = btn.dataset.cmd;
    });
  });
  document.querySelectorAll('.resultado-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.resultado-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      selectedRes = btn.dataset.res;
    });
  });
  document.getElementById('rep-minus').addEventListener('click', () => {
    if (repCount > 1) { repCount--; document.getElementById('rep-count').textContent = repCount; }
  });
  document.getElementById('rep-plus').addEventListener('click', () => {
    repCount++; document.getElementById('rep-count').textContent = repCount;
  });

  document.getElementById('btn-save-training').addEventListener('click', () => {
    const note = document.getElementById('training-note').value.trim();
    const entry = { time: nowTime(), cmd: selectedCmd, res: selectedRes, reps: repCount, note, date: today() };
    const key = 'training-log-' + today();
    const log = store.get(key, []);
    log.push(entry);
    store.set(key, log);

    // también guardar en historial global
    const hist = store.get('training-history', []);
    hist.push(entry);
    if (hist.length > 200) hist.splice(0, hist.length - 200);
    store.set('training-history', hist);

    document.getElementById('training-note').value = '';
    renderTrainingLog();
    renderProgresoCharts();
    showToast(`Sesión de "${selectedCmd}" guardada ✅`);
    renderTodaySummary();
  });

  // tips
  const tipsEl = document.getElementById('training-tips');
  tipsEl.innerHTML = TRAINING_TIPS.map(t=>
    `<div class="checklist-item"><span style="font-size:18px;">${t.icon}</span><span>${t.tip}</span></div>`).join('');

  renderTrainingLog();
}

function renderTrainingLog() {
  const log = store.get('training-log-' + today(), []);
  const el = document.getElementById('training-log-today');
  if (!log.length) { el.innerHTML = '<p class="empty-note">Sin sesiones hoy. ¡Empezá con 5 minutos!</p>'; return; }
  const resLabel = { excelente:'🌟 Excelente', bien:'👍 Bien', trabajando:'🔄 Trabajando' };
  const resCls = { excelente:'ok', bien:'info', trabajando:'warn' };
  el.innerHTML = [...log].reverse().map(e=>`
    <div class="log-entry">
      <span class="time">${e.time}</span>
      <span class="badge ${resCls[e.res]||'ok'}">${resLabel[e.res]||e.res}</span>
      <span style="font-size:13px;font-weight:600;">${e.cmd}</span>
      <span style="font-size:12px;color:var(--ink-soft);">${e.reps} rep${e.reps!==1?'s':''}</span>
    </div>
    ${e.note?`<div style="padding:0 4px 6px;font-size:12px;color:var(--ink-soft);">📝 ${e.note}</div>`:''}`).join('');
}

// ============================================================
// PROGRESO
// ============================================================
function renderProgresoCharts() {
  renderWeekPis();

  const hist = store.get('training-history', []);
  const cmdCount = {};
  hist.forEach(e => { cmdCount[e.cmd] = (cmdCount[e.cmd]||0) + 1; });
  const cmdEl = document.getElementById('progreso-comandos');
  if (!Object.keys(cmdCount).length) {
    cmdEl.innerHTML = '<p class="empty-note">Todavía sin sesiones registradas.</p>';
  } else {
    const sorted = Object.entries(cmdCount).sort((a,b)=>b[1]-a[1]);
    const max = sorted[0][1];
    cmdEl.innerHTML = sorted.map(([cmd,n])=>`
      <div style="margin-bottom:10px;">
        <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:3px;">
          <span style="font-weight:600;">${cmd}</span><span>${n} sesión${n!==1?'es':''}</span>
        </div>
        <div class="prog-bar-wrap"><div class="prog-bar-fill" style="width:${Math.round(n/max*100)}%;"></div></div>
      </div>`).join('');
  }

  const histEl = document.getElementById('progreso-historial');
  const recentDays = {};
  hist.slice(-30).forEach(e => {
    if (!recentDays[e.date]) recentDays[e.date] = [];
    recentDays[e.date].push(e);
  });
  if (!Object.keys(recentDays).length) {
    histEl.innerHTML = '<p class="empty-note">Sin historial aún.</p>';
  } else {
    histEl.innerHTML = Object.entries(recentDays).sort((a,b)=>b[0].localeCompare(a[0])).map(([date,entries])=>`
      <div style="margin-bottom:10px;">
        <div style="font-size:12px;color:var(--ink-soft);margin-bottom:4px;">${new Date(date+'T12:00:00').toLocaleDateString('es-AR',{weekday:'long',day:'numeric',month:'short'})}</div>
        ${entries.map(e=>`<div class="log-entry"><span class="time">${e.time}</span><span style="font-size:13px;">${e.cmd} · ${e.reps} rep${e.reps!==1?'s':''}</span></div>`).join('')}
      </div>`).join('');
  }
}

// ============================================================
// CALENDARIO DE VACUNAS
// ============================================================
const VACCINE_SCHEDULE = [
  { id: 'v1',  diasDesdeNac: 45,  label: 'Vacuna óctuple / sextuple',     tipo: 'vacuna',        nota: '1ra dosis — primera vacuna de la vida' },
  { id: 'd1',  diasDesdeNac: 45,  label: 'Desparasitación interna',        tipo: 'desparasitacion', nota: '1ra dosis — hacerla junto con la primera vacuna' },
  { id: 'v2',  diasDesdeNac: 65,  label: 'Vacuna óctuple / sextuple',     tipo: 'vacuna',        nota: '2da dosis — refuerzo obligatorio' },
  { id: 'd2',  diasDesdeNac: 75,  label: 'Desparasitación interna',        tipo: 'desparasitacion', nota: '2da dosis' },
  { id: 'de1', diasDesdeNac: 45,  label: 'Desparasitación externa',        tipo: 'externo',       nota: 'Antipulgas/garrapatas — mensual hasta los 6 meses' },
  { id: 'v3',  diasDesdeNac: 85,  label: 'Vacuna óctuple / sextuple',     tipo: 'vacuna',        nota: '3ra dosis — completa la serie inicial' },
  { id: 'd3',  diasDesdeNac: 105, label: 'Desparasitación interna',        tipo: 'desparasitacion', nota: '3ra dosis' },
  { id: 'de2', diasDesdeNac: 75,  label: 'Desparasitación externa',        tipo: 'externo',       nota: '2do mes — antipulgas/garrapatas' },
  { id: 'r1',  diasDesdeNac: 90,  label: 'Vacuna antirrábica',             tipo: 'vacuna',        nota: '1ra dosis — obligatoria desde los 3 meses' },
  { id: 'de3', diasDesdeNac: 105, label: 'Desparasitación externa',        tipo: 'externo',       nota: '3er mes' },
  { id: 'd4',  diasDesdeNac: 135, label: 'Desparasitación interna',        tipo: 'desparasitacion', nota: '4ta dosis' },
  { id: 'de4', diasDesdeNac: 135, label: 'Desparasitación externa',        tipo: 'externo',       nota: '4to mes' },
  { id: 'de5', diasDesdeNac: 165, label: 'Desparasitación externa',        tipo: 'externo',       nota: '5to mes' },
  { id: 'd5',  diasDesdeNac: 165, label: 'Desparasitación interna',        tipo: 'desparasitacion', nota: '5ta dosis' },
  { id: 'de6', diasDesdeNac: 195, label: 'Desparasitación externa',        tipo: 'externo',       nota: '6to mes — fin de la etapa mensual' },
  { id: 'va1', diasDesdeNac: 365, label: 'Refuerzo anual de vacunas',      tipo: 'vacuna',        nota: 'Repetir todos los años de por vida' },
  { id: 'da1', diasDesdeNac: 270, label: 'Desparasitación interna',        tipo: 'desparasitacion', nota: 'Cada 3 meses de por vida' },
  { id: 'da2', diasDesdeNac: 365, label: 'Desparasitación interna',        tipo: 'desparasitacion', nota: 'Cada 3 meses de por vida' },
];

function addDays(dateStr, days) {
  const d = new Date(dateStr + 'T12:00:00');
  d.setDate(d.getDate() + days);
  return d;
}

function formatDate(date) {
  return date.toLocaleDateString('es-AR', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' });
}

function diffDays(date) {
  const today = new Date(); today.setHours(0,0,0,0);
  const d = new Date(date); d.setHours(0,0,0,0);
  return Math.round((d - today) / 86400000);
}

function renderVaccineCalendar() {
  const birthDate = document.getElementById('birth-date').value;
  const calEl = document.getElementById('vaccine-calendar');
  const nextCard = document.getElementById('next-vaccine-card');
  const nextInfo = document.getElementById('next-vaccine-info');

  if (!birthDate) {
    calEl.innerHTML = '<p class="empty-note">Ingresá la fecha de nacimiento arriba para ver el calendario.</p>';
    nextCard.style.display = 'none';
    return;
  }

  const done = store.get('vaccine-done', {});
  const items = VACCINE_SCHEDULE.map(v => ({
    ...v,
    date: addDays(birthDate, v.diasDesdeNac),
    done: !!done[v.id]
  })).sort((a,b) => a.date - b.date);

  // próxima vacuna pendiente
  const upcoming = items.filter(v => !v.done && diffDays(v.date) >= 0);
  if (upcoming.length) {
    const next = upcoming[0];
    const diff = diffDays(next.date);
    nextCard.style.display = 'block';
    nextInfo.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <div>
          <div style="font-size:16px;font-weight:700;">${next.label}</div>
          <div style="font-size:13px;color:var(--ink-soft);margin-top:2px;">${formatDate(next.date)}</div>
        </div>
        <span class="pill ${diff<=7?'warn':'ok'}" style="margin-left:auto;">
          ${diff===0?'¡HOY!':diff===1?'mañana':'en '+diff+' días'}
        </span>
      </div>
    `;
  } else {
    nextCard.style.display = 'none';
  }

  const tipoIcon = { vacuna:'💉', desparasitacion:'💊', externo:'🐾' };
  const tipoLabel = { vacuna:'Vacuna', desparasitacion:'Desparasitación interna', externo:'Desparasitación externa' };
  const tipoCls = { vacuna:'ok', desparasitacion:'info', externo:'warn' };

  calEl.innerHTML = items.map(v => {
    const diff = diffDays(v.date);
    const isPast = diff < 0;
    const isToday = diff === 0;
    const isSoon = diff > 0 && diff <= 7;
    let statusBadge = '';
    if (v.done) statusBadge = '<span class="badge ok">✓ Aplicada</span>';
    else if (isToday) statusBadge = '<span class="badge warn">¡Hoy!</span>';
    else if (isPast) statusBadge = '<span class="badge bad">Vencida</span>';
    else if (isSoon) statusBadge = '<span class="badge warn">Pronto</span>';

    return `
      <div class="vax-row ${v.done?'vax-done':isPast&&!v.done?'vax-late':''}" data-id="${v.id}">
        <div style="display:flex;align-items:flex-start;gap:10px;">
          <span style="font-size:20px;margin-top:2px;">${tipoIcon[v.tipo]}</span>
          <div style="flex:1;">
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
              <span style="font-weight:600;font-size:14px;">${v.label}</span>
              <span class="badge ${tipoCls[v.tipo]}" style="font-size:10px;">${tipoLabel[v.tipo]}</span>
            </div>
            <div style="font-size:12px;color:var(--ink-soft);margin:2px 0;">${formatDate(v.date)}</div>
            <div style="font-size:12px;color:var(--ink-soft);">${v.nota}</div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
            ${statusBadge}
            <button class="btn-vax-toggle btn-small" data-id="${v.id}" style="font-size:11px;">
              ${v.done?'Desmarcar':'Marcar ✓'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // eventos botones
  calEl.querySelectorAll('.btn-vax-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const done = store.get('vaccine-done', {});
      done[id] = !done[id];
      store.set('vaccine-done', done);
      renderVaccineCalendar();
      showToast(done[id] ? 'Vacuna marcada como aplicada ✓' : 'Vacuna desmarcada');
    });
  });
}

function setupVaccineCalendar() {
  const input = document.getElementById('birth-date');
  input.value = store.get('birth-date', '');
  input.addEventListener('change', e => {
    store.set('birth-date', e.target.value);
    renderVaccineCalendar();
  });
  renderVaccineCalendar();
}


function renderFeedLog() {
  const log = store.get('feed-log-' + today(), []);
  const el = document.getElementById('feed-log');
  if (!log.length) { el.innerHTML = '<p class="empty-note">Sin comidas registradas hoy.</p>'; return; }
  el.innerHTML = log.map(t=>`<div class="log-entry"><span>🍽️</span><span>${t}</span></div>`).join('');
}

// ============================================================
// INIT
// ============================================================
function init() {
  // date header
  document.getElementById('topbar-date').textContent =
    new Date().toLocaleDateString('es-AR', { weekday:'long', day:'numeric', month:'long' });

  setupTabs();

  // countdown
  const di = document.getElementById('arrival-date');
  di.value = store.get('arrival-date','');
  updateCountdown();
  di.addEventListener('change', e => { store.set('arrival-date', e.target.value); updateCountdown(); });

  // checklists
  renderChecklist('list-shopping', SHOPPING, 'shopping-checked', 'stat-shopping');
  renderChecklist('list-space', SPACE, 'space-checked', null);

  // salud
  setupVaccineCalendar();
  renderTable('routine-table', ROUTINE_BASE, false);
  renderTable('feeding-table', FEEDING, true);
  renderTable('housetraining-table', HOUSETRAINING, false);
  renderTable('potty-schedule-table', POTTY_SCHEDULE, false);
  renderTable('play-table', PLAY, false);
  renderTable('training-table', TRAINING_INFO, false);
  renderInfoList('list-social', SOCIAL);
  renderInfoList('list-avoid', AVOID);
  renderInfoList('list-vet', VET_SIGNS);

  document.getElementById('stat-vaccine').textContent = VACCINES[0][0];

  // rutina
  document.querySelectorAll('#age-selector .pill-btn').forEach(b => {
    if (b.dataset.age === currentAge) b.classList.add('active');
  });
  setupAgeSelector();
  renderRoutineChecklist();
  renderGoldenRules();

  // pis
  setupPisButtons();
  renderPisStats();

  // entrenamiento
  setupTraining();

  // alimentacion
  renderFeedLog();
  document.getElementById('btn-log-feed').addEventListener('click', () => {
    const t = nowTime();
    const log = store.get('feed-log-' + today(), []);
    log.push(t);
    store.set('feed-log-' + today(), log);
    renderFeedLog();
    renderTodaySummary();
    showToast('Comida registrada a las ' + t);
  });

  // inicio
  renderNextSteps();
  renderTodaySummary();
  document.getElementById('stat-pis').textContent = getPisPctToday() + '%';

  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
}

document.addEventListener('DOMContentLoaded', init);
