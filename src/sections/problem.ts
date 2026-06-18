// Público objetivo — layout "Para quién" de ATOM (community-meet de OSMO): intro
// centrado + fila de 2 columnas (checklist de criterios izq + abanico de 3 fotos der
// con momentum-hover). Strip dark.

import { renderContainer } from '../ui/layout';
import { renderHeading, renderParagraph } from '../ui/text';
import { renderPill } from '../ui/atoms/pill';

// Fotos del abanico. BASE relativa para el preview local; en producción (jsDelivr/R2)
// cambiar por la URL del CDN (igual que constants/masterclass). El índice mapea a la
// posición del abanico: 1 = la de adelante (is--1, z-index mayor).
const AUDIENCE_BASE = '/public/audience';
const FAN_PHOTOS = [
  `${AUDIENCE_BASE}/persona_1.webp`,
  `${AUDIENCE_BASE}/persona_2.webp`,
  `${AUDIENCE_BASE}/persona_3.webp`,
];

const CRITERIA = [
  'Tienes ahorros parados en el banco y sientes que no crecen.',
  'Te preocupa que la inflación le reste valor a tu dinero.',
  'Quieres aprender a invertir pero no sabes por dónde empezar.',
  'Buscas alternativas más allá del plazo fijo.',
  'Quieres entender qué hace el banco con tu dinero.',
  'Te gustaría tomar decisiones financieras con criterio.',
];

const CHECK_ICON =
  '<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
  '<path d="M2.5 7.5 5.5 10.5 11.5 3.5" stroke="currentColor" stroke-width="2" ' +
  'stroke-linecap="round" stroke-linejoin="round"/></svg>';

function listItem(text: string): HTMLElement {
  const item = document.createElement('li');
  item.className = 'aa-aud__item';
  item.setAttribute('data-aa-fade', '');
  const icon = document.createElement('span');
  icon.className = 'aa-aud__item-icon';
  icon.innerHTML = CHECK_ICON;
  const span = document.createElement('span');
  span.className = 'aa-aud__item-text';
  span.textContent = text;
  item.append(icon, span);
  return item;
}

// Abanico de 3 fotos: card = posición/rotación + listener del momentum-hover;
// media = nodo que recibe la inercia del hover.
function buildFan(): HTMLElement {
  const wrap = document.createElement('div');
  wrap.className = 'aa-aud__img-w';
  wrap.setAttribute('data-aa-fade', '');
  wrap.setAttribute('aria-hidden', 'true'); // decorativo: el texto ya describe el público
  FAN_PHOTOS.forEach((src, i) => {
    const card = document.createElement('div');
    card.className = `aa-aud__img is--${i + 1}`;
    card.setAttribute('data-momentum-hover-element', '');
    const media = document.createElement('div');
    media.className = 'aa-aud__media';
    media.setAttribute('data-momentum-hover-target', '');
    const img = document.createElement('img');
    img.className = 'aa-aud__media-img';
    img.src = src;
    img.alt = '';
    img.loading = 'lazy';
    img.decoding = 'async';
    media.appendChild(img);
    card.appendChild(media);
    wrap.appendChild(card);
  });
  return wrap;
}

export function renderProblemSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-section aa-audience';
  section.id = 'problema';
  section.setAttribute('data-aa-section-theme', 'dark');
  section.setAttribute('data-aa-nav-anchor', '');

  const wrap = document.createElement('div');
  wrap.className = 'aa-aud';
  wrap.setAttribute('data-momentum-hover-init', ''); // rastrea velocidad del cursor

  // Intro centrado
  const intro = document.createElement('div');
  intro.className = 'aa-aud__intro';
  const eyebrow = renderPill('Para quién');
  eyebrow.setAttribute('data-aa-fade', '');
  intro.append(
    eyebrow,
    renderHeading({
      size: 'xl',
      tag: 'h2',
      text: '¿Esta masterclass es para ti?',
      split: true,
      className: 'aa-text-balance aa-text-center',
    }),
  );

  // Fila 2 columnas: criterios izq + abanico der
  const row = document.createElement('div');
  row.className = 'aa-aud__row';

  const leftCol = document.createElement('div');
  leftCol.className = 'aa-aud__col';
  const info = document.createElement('div');
  info.className = 'aa-aud__info';
  const lead = renderParagraph({
    size: 'l',
    text: 'Si alguna de estas situaciones te suena, este evento es para ti.',
    className: 'aa-aud__lead',
  });
  lead.setAttribute('data-aa-fade', '');
  info.appendChild(lead);
  const list = document.createElement('ul');
  list.className = 'aa-aud__list';
  CRITERIA.forEach((text) => list.appendChild(listItem(text)));
  info.appendChild(list);
  leftCol.appendChild(info);

  const rightCol = document.createElement('div');
  rightCol.className = 'aa-aud__col aa-aud__col--media';
  rightCol.appendChild(buildFan());

  row.append(leftCol, rightCol);
  wrap.append(intro, row);

  section.appendChild(renderContainer({ size: 'default', children: [wrap] }));
  root.appendChild(section);
}
