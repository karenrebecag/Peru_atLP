// Hero (banner) — base del HeroStrip de SparkSummit: video bg + overlay detrás,
// columna única de texto (heading + subtítulo + detalles del evento + CTA).
// Tokens --aa-* (OSMO).

import { renderHeading } from '../ui/text';
import { renderButton } from '../ui/atoms/button';
import { renderPill } from '../ui/atoms/pill';
import { ASSETS } from '../constants/assets';

export function renderHero(root: Element): void {
  const hero = document.createElement('section');
  hero.className = 'aa-hero';
  hero.id = 'top';
  hero.setAttribute('data-aa-section-theme', 'dark'); // strip oscuro sobre el video
  hero.setAttribute('data-aa-nav-anchor', '');
  hero.setAttribute('data-aa-intro', ''); // sus hijos animan al montar (no al scroll)
  // Parallax (Portfolio2026): la escena de fondo se mueve scrubbeada al scroll
  hero.setAttribute('data-parallax', 'trigger');
  hero.setAttribute('data-parallax-start', '10');
  hero.setAttribute('data-parallax-end', '-10');

  // Fondo: escena Spline (si hay export .splinecode) o video de fallback, + overlay.
  const bg = document.createElement('div');
  bg.className = 'aa-hero__bg';

  let media: HTMLElement;
  if (ASSETS.splineScene) {
    media = document.createElement('spline-viewer');
    media.className = 'aa-hero__spline';
    media.setAttribute('url', ASSETS.splineScene);
    media.setAttribute('loading-anim-type', 'none');
    media.setAttribute('aria-hidden', 'true');
  } else {
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
    media = video;
  }

  // Wrapper = target del parallax (GSAP mueve este; el scale/zoom va en el media interno
  // para no pisar el transform del parallax).
  const mediaWrap = document.createElement('div');
  mediaWrap.className = 'aa-hero__media-wrap';
  mediaWrap.setAttribute('data-parallax', 'target');
  mediaWrap.appendChild(media);

  const overlay = document.createElement('div');
  overlay.className = 'aa-hero__overlay';
  bg.append(mediaWrap, overlay);

  const grid = document.createElement('div');
  grid.className = 'aa-hero__grid';

  // ── Columna izquierda ──────────────────────────────────────────────────────
  const left = document.createElement('div');
  left.className = 'aa-hero__left';
  left.setAttribute('data-hero-left', '');

  const tag = renderPill('Masterclass presencial');
  tag.classList.add('aa-hero__tag');
  tag.setAttribute('data-aa-fade', '');
  left.appendChild(tag);

  left.appendChild(
    renderHeading({
      size: 'xxl',
      tag: 'h1',
      text: 'El Futuro de la Inversión',
      split: true,
      className: 'aa-hero__title',
    }),
  );

  const sub = document.createElement('p');
  sub.className = 'aa-hero__sub';
  sub.setAttribute('data-aa-fade', '');
  sub.textContent =
    'Inteligencia, datos y oportunidades en los mercados globales.';
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
  where.textContent = 'Presencial · Cámara de Comercio de Lima';

  details.append(when, where);
  left.appendChild(details);

  const cta = document.createElement('div');
  cta.className = 'aa-hero__cta';
  cta.setAttribute('data-aa-fade', '');
  cta.appendChild(renderButton({ href: '#registro', label: 'Regístrate', variant: 'primary' }));
  left.appendChild(cta);

  grid.appendChild(left);
  hero.append(bg, grid);
  root.appendChild(hero);
}
