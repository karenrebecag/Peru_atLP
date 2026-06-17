// Hero (banner) — base del HeroStrip de SparkSummit: video bg + overlay detrás,
// columna única de texto (heading + subtítulo + detalles del evento + CTA).
// Tokens --aa-* (OSMO).

import { renderHeading } from '../ui/text';
import { renderNavCta } from '../ui/atoms/nav-cta';
import { ASSETS } from '../constants/assets';

export function renderHero(root: Element): void {
  const hero = document.createElement('section');
  hero.className = 'aa-hero';
  hero.id = 'top';
  hero.setAttribute('data-aa-section-theme', 'dark'); // strip oscuro sobre el video
  hero.setAttribute('data-aa-nav-anchor', '');
  hero.setAttribute('data-aa-intro', ''); // sus hijos animan al montar (no al scroll)

  // Fondo: video loop muteado + overlay degradado (como el HeroStrip de Spark)
  const bg = document.createElement('div');
  bg.className = 'aa-hero__bg';

  const video = document.createElement('video');
  video.className = 'aa-hero__video';
  video.src = ASSETS.heroVideo;
  video.muted = true;
  video.loop = true;
  video.autoplay = true;
  video.playsInline = true;
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('preload', 'metadata');
  video.setAttribute('aria-hidden', 'true');

  const overlay = document.createElement('div');
  overlay.className = 'aa-hero__overlay';
  bg.append(video, overlay);

  const grid = document.createElement('div');
  grid.className = 'aa-hero__grid';

  // ── Columna izquierda ──────────────────────────────────────────────────────
  const left = document.createElement('div');
  left.className = 'aa-hero__left';
  left.setAttribute('data-hero-left', '');

  left.appendChild(
    renderHeading({
      size: 'xl',
      tag: 'h1',
      text: 'Antes del Boom de los Metales',
      highlight: 'Boom de los Metales',
      className: 'aa-hero__title',
    }),
  );

  const sub = document.createElement('p');
  sub.className = 'aa-hero__sub';
  sub.setAttribute('data-aa-fade', '');
  sub.textContent =
    'Descubre cómo anticiparte a las oportunidades de inversión en un mercado en crecimiento.';
  left.appendChild(sub);

  // Detalles del evento (fecha/horario + modalidad/lugar)
  const details = document.createElement('div');
  details.className = 'aa-hero__details';
  details.setAttribute('data-aa-fade', '');

  const when = document.createElement('p');
  when.className = 'aa-hero__detail aa-hero__detail--strong';
  when.textContent = 'Martes 14 de julio · 9:00 a.m. – 12:00 p.m.';

  const where = document.createElement('p');
  where.className = 'aa-hero__detail';
  where.textContent = 'Evento presencial | Lima, Perú';

  details.append(when, where);
  left.appendChild(details);

  const cta = document.createElement('div');
  cta.className = 'aa-hero__cta';
  cta.setAttribute('data-aa-fade', '');
  cta.appendChild(renderNavCta({ href: '#registro', label: 'Regístrate', standalone: true }));
  left.appendChild(cta);

  grid.appendChild(left);
  hero.append(bg, grid);
  root.appendChild(hero);
}
