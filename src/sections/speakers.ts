// 6 · Aliados / Quiénes dirigen la masterclass — tres strips portadas de ATOM:
//   La tesis    → intro centrado (statement)
//   El problema → Álvaro Matos (2-col, media izquierda + lista de dots)
//   La visión   → Josué Flores (2-col, media derecha + prosa)
// Una sola sección dark navy; media en placeholder hasta tener las fotos reales.

import { renderContainer } from '../ui/layout';
import { renderHeading, renderParagraph } from '../ui/text';
import { renderRotatingHeading } from '../ui/rotating-text';
import { renderPill } from '../ui/atoms/pill';

function mediaPlaceholder(label: string): HTMLElement {
  const media = document.createElement('div');
  media.className = 'aa-ally__media';
  const span = document.createElement('span');
  span.className = 'aa-ally__media-label';
  span.textContent = label;
  media.appendChild(span);
  return media;
}

function roleLine(text: string): HTMLElement {
  const el = document.createElement('p');
  el.className = 'aa-ally__role';
  el.textContent = text;
  el.setAttribute('data-aa-fade', '');
  return el;
}

interface AllyOpts {
  side: 'left' | 'right'; // lado de la media
  name: string;
  role: string;
  heading: string;
}

// El problema → lista de dots
function buildAllyList(o: AllyOpts & { intro: string; list: string[] }): HTMLElement {
  const el = document.createElement('div');
  el.className = o.side === 'left' ? 'aa-ally aa-ally--media-left' : 'aa-ally';

  const text = document.createElement('div');
  text.className = 'aa-ally__text';

  const pill = renderPill(o.name);
  pill.setAttribute('data-aa-fade', '');

  const list = document.createElement('ul');
  list.className = 'aa-ally__list';
  list.setAttribute('data-aa-fade', '');
  o.list.forEach((t) => {
    const li = document.createElement('li');
    li.textContent = t;
    list.appendChild(li);
  });

  text.append(
    pill,
    renderHeading({ size: 'l', tag: 'h3', text: o.heading, split: true }),
    roleLine(o.role),
    renderParagraph({ size: 'l', text: o.intro }),
    list,
  );

  el.append(text, mediaPlaceholder(`Foto · ${o.name}`));
  return el;
}

// La visión → prosa
function buildAllyProse(o: AllyOpts & { paragraphs: string[] }): HTMLElement {
  const el = document.createElement('div');
  el.className = o.side === 'left' ? 'aa-ally aa-ally--media-left' : 'aa-ally';

  const text = document.createElement('div');
  text.className = 'aa-ally__text';

  const pill = renderPill(o.name);
  pill.setAttribute('data-aa-fade', '');

  text.append(pill, renderHeading({ size: 'l', tag: 'h3', text: o.heading, split: true }), roleLine(o.role));
  o.paragraphs.forEach((p) => {
    const par = renderParagraph({ size: 'l', text: p });
    par.setAttribute('data-aa-fade', '');
    text.appendChild(par);
  });

  el.append(text, mediaPlaceholder(`Foto · ${o.name}`));
  return el;
}

export function renderSpeakersSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-section aa-speakers';
  section.id = 'speakers';
  section.setAttribute('data-aa-section-theme', 'dark');
  section.setAttribute('data-aa-nav-anchor', '');

  // — Strip 1 · intro (La tesis) —
  const intro = document.createElement('div');
  intro.className = 'aa-allies-intro';
  const introPill = renderPill('Aliados');
  introPill.setAttribute('data-aa-fade', '');
  intro.append(
    introPill,
    renderRotatingHeading({
      size: 'l',
      tag: 'h2',
      before: 'Quiénes',
      words: ['dirigen', 'lideran', 'imparten', 'guían'],
      after: 'la masterclass',
    }),
    renderParagraph({
      size: 'l',
      text: 'La formación está liderada por el equipo de Blue Makers: traders e inversionistas en activo que operan los mercados todos los días y forman a la próxima generación de inversionistas en LATAM.',
    }),
  );

  // — Strip 2 · Álvaro Matos (El problema, media izquierda) —
  const alvaro = buildAllyList({
    side: 'left',
    name: 'Álvaro Matos',
    role: 'CEO de Blue Makers · Certificado Bloomberg',
    heading: 'Estrategia que opera todos los días',
    intro: 'Trader e inversionista con experiencia en mercados financieros, criptomonedas y análisis macroeconómico.',
    list: [
      'Lidera un fondo de inversión de trading cuantitativo algorítmico',
      'Dirige una academia de formación en trading',
      'Programas de mentoría presencial',
      'Análisis macroeconómico de mercados',
    ],
  });

  // — Strip 3 · Josué Flores (La visión, media derecha) —
  const josue = buildAllyProse({
    side: 'right',
    name: 'Josué Flores',
    role: 'Fundador y CEO de Blue Makers · Co-CEO de SkillyFund · Certificado Bloomberg 2026',
    heading: 'Seis años operando los mercados',
    paragraphs: [
      'Trader profesional con 6 años de experiencia, especializado en índices americanos. Analista fundamental y macroeconómico.',
      'Ponente en eventos a nivel LATAM, con operativa diaria y sesiones presenciales semanales.',
    ],
  });

  const inner = document.createElement('div');
  inner.className = 'aa-allies';
  inner.append(intro, alvaro, josue);

  section.appendChild(renderContainer({ size: 'default', children: [inner] }));
  root.appendChild(section);
}
