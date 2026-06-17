// Assets externos (CDN).

const CDN = 'https://pub-62c41549a44642efbcd3f775bdb039b3.r2.dev';

export const ASSETS = {
  heroVideo: `${CDN}/lima-coastline-web.mp4`,
  // Escena Spline (.splinecode, formato runtime). Vacío = fallback a heroVideo.
  splineScene: '/public/spline/scene-clean.splinecode',
};

// Runtime de Spline vía CDN (no npm). Se inyecta solo si hay una <spline-viewer> montada.
export const SPLINE_RUNTIME = 'https://unpkg.com/@splinetool/viewer@1.12.97/build/spline-viewer.js';
