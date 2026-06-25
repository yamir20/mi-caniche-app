const SHOPPING = [
  "Cama o cucha chica","Transportadora / bolso de transporte","2 comederos bajos (acero o cerámica)",
  "Bebedero","Alimento balanceado cachorro raza pequeña","Collar y arnés talle cachorro",
  "Correa liviana","Plaqueta con datos","Pañales de entrenamiento / tapete absorbente",
  "Juguetes para morder (dentición)","Premios de entrenamiento pequeños","Shampoo para cachorros",
  "Cepillo suave","Cortaúñas para perros pequeños","Toallas y manta extra"
];

const SPACE = [
  "Definir zona de descanso fija","Definir zona de comida/agua","Armar zona de baño (pañales/pasto sintético)",
  "Guardar cables y objetos a su alcance","Bloquear escaleras o desniveles si hay","Asegurar plantas tóxicas fuera de su alcance",
  "Avisar a toda la familia las reglas básicas","Conseguir datos del veterinario de zona"
];

const FEEDING = [
  ["8-12 semanas","4 comidas/día","Húmedo en agua tibia si rechaza el seco"],
  ["3-6 meses","3 comidas/día","Pasar a balanceado seco raza pequeña"],
  ["6-12 meses","2 comidas/día","Mismo horario todos los días"],
  ["+12 meses","2 comidas/día","Cambiar a fórmula adulto raza pequeña"]
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

const ROUTINE = [
  ["7:00","Pis apenas despierta"],
  ["7:15","Primera comida"],
  ["8-10:00","Siesta"],
  ["10:00","Pis + juego corto"],
  ["12:00","Segunda comida + pis"],
  ["14-16:00","Siesta larga"],
  ["16:30","Pis + socialización breve"],
  ["18:30","Tercera comida + pis"],
  ["20:00","Juego tranquilo"],
  ["21:30","Última salida de pis"]
];

const HOUSETRAINING = [
  ["Elegí el lugar ya", "Antes de que llegue, decidí el punto exacto afuera (un rincón del patio, una maceta con pasto sintético). No lo cambies las primeras semanas."],
  ["Llevala siempre cargada al principio", "Hasta que tenga el recorrido aprendido, cargala hasta el lugar — si camina sola por la casa, va a marcar en el camino."],
  ["Quedate 2-3 minutos ahí", "No la dejes sola ahí afuera. Quedate parado, sin jugar, hasta que haga. Si en 3 min no hizo, volvé adentro y reintentá en 15 min."],
  ["Premiá en los primeros 5 segundos", "Apenas termina de hacer pis en el lugar correcto: premio + '¡muy bien!' con voz alegre. El timing es lo que más importa, no el premio en sí."],
  ["Accidente adentro: ignoralo", "Nunca la regañes ni le muestres el charco. Limpiá con un limpiador enzimático (no amoníaco) para que no quede olor — si queda olor, va a volver a marcar ahí."],
  ["Vigilancia o jaula chica", "Cuando no la podés mirar fijo, dejala en un espacio reducido (corralito) con su cama. Los cachorros no ensucian donde duermen si el espacio es justo."]
];

const POTTY_SCHEDULE = [
  ["Apenas despierta", "Sacarla antes de que camine por la casa"],
  ["15-20 min después de comer", "Siempre, sin excepción — comer activa el intestino"],
  ["Después de cada siesta", "Aunque haya dormido 20 minutos"],
  ["Después de jugar fuerte", "La actividad también activa las ganas de hacer pis"],
  ["Cada 2 horas (8-12 semanas)", "Aunque parezca que no tiene ganas"],
  ["Antes de dormir a la noche", "Última salida, sin agua después de esa hora"]
];

const PLAY = [
  ["8-12 semanas", "Juego libre en casa, explorar texturas, juguetes blandos. Nada de correa larga ni escaleras."],
  ["3-6 meses", "Paseos cortos con correa (5 min x mes de edad), juego con otros cachorros vacunados"],
  ["6-12 meses", "Paseos un poco más largos, empezar a frenar el exceso de energía con juegos mentales (snuffle mat, buscar premios)"],
  ["+12 meses", "Ya cerró el crecimiento óseo: paseos normales, juegos de pelota, agility liviano si le gusta"]
];

const TRAINING = [
  ["Sesiones de 5 minutos, varias veces al día", "Mejor 4 sesiones de 5 min que una de 20 — pierde atención rápido"],
  ["Premio en trocitos chicos", "Del tamaño de una lenteja, así no se llena y podés repetir muchas veces"],
  ["Orden sugerido de comandos", "1) Su nombre (mirarte cuando lo llamás) 2) Sentado 3) Quieto 4) Venir 5) Caminar sin tirar de la correa"],
  ["Marcá el momento exacto", "Decí 'sí' o usá clicker justo cuando hace lo correcto, antes de darle el premio"],
  ["Terminá siempre bien", "Cortá la sesión mientras todavía le interesa, nunca cuando ya está aburrida o cansada"],
  ["Repetición en contextos distintos", "Practicá 'sentado' en la cocina, el patio, la calle — si no, solo va a obedecer en un lugar"]
];

const SOCIAL = [
  "Gente distinta (chicos, adultos, con gorra, con bastón)",
  "Otros perros ya vacunados y de buen trato",
  "Sonidos de casa: aspiradora, timbre, secador de pelo",
  "Subirla en auto en viajes cortos y tranquilos",
  "Caminar sobre superficies distintas (pasto, cerámica, alfombra, metal)",
  "Manipulación de patas, orejas y boca (para cuando haya que bañarla o ir al veterinario)"
];

const AVOID = [
  "Nunca pegarle, gritarle ni restregarle la nariz en el accidente",
  "No dejarla sola muchas horas seguidas — el toy poodle es propenso a ansiedad por separación",
  "No forzarla a bajar de upa ni a subir/bajar escalones saltando antes del año",
  "No premiar con comida humana ni en exceso, se desordena el apetito",
  "No despertarla bruscamente ni sorprenderla mientras duerme",
  "No exponerla a frío o calor extremo — el toy se descompensa más rápido que una raza grande"
];

const VET_SIGNS = [
  "Vómitos o diarrea que duran más de 24hs",
  "No come ni toma agua por más de 12hs",
  "Letargo extremo, no responde a estímulos",
  "Encías muy pálidas o temblores fuertes (hipoglucemia, común en toy)",
  "Dificultad para respirar o tos persistente",
  "Cualquier golpe o caída desde altura, aunque parezca estar bien"
];

const store = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v === null ? fallback : JSON.parse(v);
    } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }
};

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 1800);
}

function renderChecklist(containerId, items, key, statId) {
  let checked = store.get(key, new Array(items.length).fill(false));
  if (checked.length !== items.length) checked = new Array(items.length).fill(false);

  const el = document.getElementById(containerId);
  el.innerHTML = items.map((item, i) => `
    <label class="checklist-item ${checked[i] ? 'done' : ''}" data-i="${i}">
      <input type="checkbox" ${checked[i] ? 'checked' : ''} />
      <span>${item}</span>
    </label>
  `).join('');

  function updateStat() {
    const done = checked.filter(Boolean).length;
    if (statId) document.getElementById(statId).textContent = `${done}/${checked.length}`;
  }
  updateStat();

  el.querySelectorAll('.checklist-item').forEach((row) => {
    row.querySelector('input').addEventListener('change', (e) => {
      const i = parseInt(row.dataset.i);
      checked[i] = e.target.checked;
      row.classList.toggle('done', e.target.checked);
      store.set(key, checked);
      updateStat();
      renderNextSteps();
    });
  });

  return checked;
}

function renderTable(containerId, rows, withNote) {
  const el = document.getElementById(containerId);
  el.innerHTML = rows.map(r => `
    <tr>
      <td class="when">${r[0]}</td>
      <td class="${withNote ? '' : 'note'}">${r[1]}</td>
      ${withNote ? `<td class="note">${r[2]}</td>` : ''}
    </tr>
  `).join('');
}

function updateCountdown() {
  const input = document.getElementById('arrival-date');
  const numEl = document.getElementById('countdown-num');
  const labelEl = document.getElementById('countdown-label');
  if (!input.value) {
    numEl.textContent = '--';
    labelEl.textContent = 'elegí la fecha de llegada';
    return;
  }
  const today = new Date(); today.setHours(0,0,0,0);
  const target = new Date(input.value + 'T00:00:00');
  const diff = Math.round((target - today) / 86400000);
  if (diff > 0) { numEl.textContent = diff; labelEl.textContent = diff === 1 ? 'día para que llegue' : 'días para que llegue'; }
  else if (diff === 0) { numEl.textContent = '🎉'; labelEl.textContent = '¡hoy llega!'; }
  else { numEl.textContent = '✓'; labelEl.textContent = 'ya está en casa'; }
}

function renderFeedLog() {
  const today = new Date().toISOString().slice(0,10);
  let log = store.get('feed-log-' + today, []);
  const el = document.getElementById('feed-log');
  if (log.length === 0) {
    el.innerHTML = '<p class="empty-note">Todavía no registraste comidas hoy.</p>';
  } else {
    el.innerHTML = log.map(t => `<div class="checklist-item"><span>🍽️ ${t}</span></div>`).join('');
  }
}

function logFeed() {
  const today = new Date().toISOString().slice(0,10);
  const time = new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
  let log = store.get('feed-log-' + today, []);
  log.push(time);
  store.set('feed-log-' + today, log);
  renderFeedLog();
  showToast('Comida registrada a las ' + time);
}

function renderInfoList(containerId, items) {
  const el = document.getElementById(containerId);
  el.innerHTML = items.map(item => `<div class="checklist-item"><span>${item}</span></div>`).join('');
}

function renderNextSteps() {
  const shopping = store.get('shopping-checked', new Array(SHOPPING.length).fill(false));
  const space = store.get('space-checked', new Array(SPACE.length).fill(false));
  const el = document.getElementById('next-steps');
  const missingShopping = SHOPPING.filter((_, i) => !shopping[i]);
  const missingSpace = SPACE.filter((_, i) => !space[i]);

  if (missingShopping.length === 0 && missingSpace.length === 0) {
    el.textContent = 'Todo listo para su llegada. Cuando llegue, anotá las comidas en la pestaña Comida.';
    return;
  }
  const parts = [];
  if (missingShopping.length) parts.push(`Comprar: ${missingShopping[0]}${missingShopping.length > 1 ? ` (+${missingShopping.length - 1} más)` : ''}`);
  if (missingSpace.length) parts.push(`Preparar: ${missingSpace[0]}${missingSpace.length > 1 ? ` (+${missingSpace.length - 1} más)` : ''}`);
  el.textContent = parts.join(' · ');
}

function setupTabs() {
  const buttons = document.querySelectorAll('nav.tabbar button');
  const titles = {
    inicio: ['Mi Caniche', 'Preparando todo para su llegada'],
    compras: ['Compras y casa', 'Todo lo que necesitás antes de que llegue'],
    alimentacion: ['Alimentación', 'Plan de comidas por edad'],
    salud: ['Salud', 'Vacunas, desparasitación y rutina'],
    crianza: ['Crianza', 'Pis afuera, juego, entrenamiento y socialización'],
    automatizacion: ['Automatización', 'Dispositivos conectados a la casa']
  };
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.getElementById('view-' + btn.dataset.view).classList.add('active');
      const [title, sub] = titles[btn.dataset.view];
      document.getElementById('page-title').textContent = title;
      document.getElementById('page-sub').textContent = sub;
    });
  });
}

function setupNotifications() {
  if (!('Notification' in window)) return;
  if (Notification.permission === 'default') {
    document.body.addEventListener('click', () => {
      Notification.requestPermission();
    }, { once: true });
  }
}

function init() {
  setupTabs();
  setupNotifications();

  const dateInput = document.getElementById('arrival-date');
  dateInput.value = store.get('arrival-date', '');
  updateCountdown();
  dateInput.addEventListener('change', (e) => {
    store.set('arrival-date', e.target.value);
    updateCountdown();
  });

  renderChecklist('list-shopping', SHOPPING, 'shopping-checked', 'stat-shopping');
  renderChecklist('list-space', SPACE, 'space-checked', 'stat-space');
  renderTable('feeding-table', FEEDING, true);
  renderTable('vaccine-table', VACCINES, false);
  renderTable('routine-table', ROUTINE, false);
  renderTable('housetraining-table', HOUSETRAINING, false);
  renderTable('potty-schedule-table', POTTY_SCHEDULE, false);
  renderTable('play-table', PLAY, false);
  renderTable('training-table', TRAINING, false);
  renderInfoList('list-social', SOCIAL);
  renderInfoList('list-avoid', AVOID);
  renderInfoList('list-vet', VET_SIGNS);
  document.getElementById('stat-vaccine').textContent = VACCINES[0][0];
  renderFeedLog();
  renderNextSteps();

  document.getElementById('btn-log-feed').addEventListener('click', logFeed);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', init);
