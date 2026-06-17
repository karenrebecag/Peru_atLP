// Spline runtime (CDN, no npm) — inyecta el web component <spline-viewer> una sola vez,
// solo si hay una escena montada en el DOM. La escena se declara en ASSETS.splineScene
// (export .splinecode); el <spline-viewer url="..."> la carga.

import { SPLINE_RUNTIME } from '../constants/assets';

export function initSpline(): void {
  if (!document.querySelector('spline-viewer')) return; // no hay escena montada
  if (document.querySelector('script[data-spline-runtime]')) return; // ya cargado
  const s = document.createElement('script');
  s.type = 'module';
  s.src = SPLINE_RUNTIME;
  s.setAttribute('data-spline-runtime', '');
  document.head.appendChild(s);
}
