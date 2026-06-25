# Mi Caniche — App PWA

App instalable en iPhone para preparar y gestionar la llegada de tu caniche toy:
Inicio (cuenta regresiva), Compras, Alimentación, Salud (vacunas/rutina) y Automatización (lista para conectar el ESP32 más adelante).

## 1. Subir la app (necesita HTTPS para instalarse bien en iOS)

Ya usás Netlify para TriunfAr Market, así que es el camino más rápido:

1. Entrá a https://app.netlify.com
2. "Add new site" → "Deploy manually"
3. Arrastrá esta carpeta completa (`caniche-app`) a la zona de drop
4. Netlify te da una URL tipo `https://mi-caniche.netlify.app` — listo, ya está online

## 2. Instalarla en tu iPhone

1. Abrí esa URL en **Safari** (tiene que ser Safari, no Chrome)
2. Tocá el botón de compartir (el cuadrado con la flecha hacia arriba)
3. Elegí "Agregar a pantalla de inicio"
4. Confirmá el nombre — queda un ícono como una app normal

Una vez instalada, abre a pantalla completa, funciona sin internet (los datos quedan guardados en el teléfono) y podés permitir notificaciones tocando cualquier botón la primera vez.

## 3. Archivos

- `index.html` — estructura y pantallas
- `styles.css` — estilos
- `app.js` — toda la lógica (checklists, alimentación, registro de comidas, cuenta regresiva)
- `manifest.json` — configuración de instalación
- `sw.js` — service worker para que funcione offline
- `icons/` — íconos de la app

## 4. Próxima etapa: automatización

La pestaña "Automatización" ya tiene la estructura lista. Cuando armes el dispensador con ESP32, agregamos en `app.js` las llamadas HTTP/MQTT hacia el ESP32 (en red local o por internet vía un broker como Adafruit IO o HiveMQ) y conectamos el botón "Conectar dispensador".
