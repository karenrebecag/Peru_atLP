// 7 · Sobre el evento — header + marquee de imágenes (dual-row, Edition2025Strip) +
// grid de stats. Tiles placeholder (gradiente) hasta tener fotos reales.

import { renderContainer, renderGrid } from '../ui/layout';
import { renderSectionHeader } from '../ui/section-header';
import { renderMarquee } from '../ui/marquee';
import { ABOUT_STATS } from '../constants/content';
import { MASTERCLASS_PHOTOS } from '../constants/masterclass';

function renderPhotoTile(src: string, i: number): HTMLElement {
  const img = document.createElement('img');
  img.className = 'aa-photo';
  img.src = src;
  img.alt = `Masterclass — foto ${i + 1}`;
  img.loading = 'lazy';
  img.decoding = 'async';
  return img;
}

export function renderAboutSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-section aa-about';
  section.id = 'evento';
  section.setAttribute('data-aa-section-theme', 'light');
  section.setAttribute('data-aa-nav-anchor', '');

  const header = renderSectionHeader({
    eyebrow: 'Sobre el evento',
    heading: 'Una masterclass para anticiparte',
    sub: 'Tres horas para entender el mercado y salir con un plan claro.',
    highlight: 'anticiparte',
  });

  // Marquee de imágenes: dos filas en direcciones opuestas, con máscara en los bordes.
  const half = Math.ceil(MASTERCLASS_PHOTOS.length / 2);
  const tilesA = MASTERCLASS_PHOTOS.slice(0, half).map((src, i) => renderPhotoTile(src, i));
  const tilesB = MASTERCLASS_PHOTOS.slice(half).map((src, i) => renderPhotoTile(src, i + half));
  const photos = document.createElement('div');
  photos.className = 'aa-about__photos';
  photos.append(
    renderMarquee({ items: tilesA, direction: 'forward', duration: '55s', gap: 'var(--aa-gap-xs)', className: 'aa-marquee--masked' }),
    renderMarquee({ items: tilesB, direction: 'reverse', duration: '55s', gap: 'var(--aa-gap-xs)', className: 'aa-marquee--masked' }),
  );

  const stats = ABOUT_STATS.map(({ value, label }) => {
    const stat = document.createElement('div');
    stat.className = 'aa-stat';
    const v = document.createElement('span');
    v.className = 'aa-stat__value';
    v.textContent = value;
    const l = document.createElement('span');
    l.className = 'aa-stat__label';
    l.textContent = label;
    stat.append(v, l);
    return stat;
  });
  const statsGrid = renderGrid({ cols: 3, className: 'aa-about__stats', attrs: { 'data-aa-fade': '' }, children: stats });

  // Header y stats en container; el marquee de fotos full-bleed.
  section.append(
    renderContainer({ size: 'm', children: [header] }),
    photos,
    renderContainer({ size: 'm', children: [statsGrid] }),
  );
  root.appendChild(section);
}
