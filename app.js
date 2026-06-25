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
  document.getElementById('stat-vaccine').textContent = VACCINES[0][0];
  renderFeedLog();
  renderNextSteps();

  document.getElementById('btn-log-feed').addEventListener('click', logFeed);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', init);
