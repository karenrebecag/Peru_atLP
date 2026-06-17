// 5 · Qué aprenderás — header + lista numerada con directional-hover (filas con
// número + tema, tile cian que entra desde la dirección del cursor). Trasladado del
// agenda-strip interactivo de la referencia ATFX.

import { renderContainer } from '../ui/layout';
import { renderSectionHeader } from '../ui/section-header';
import { LEARN_POINTS } from '../constants/content';

export function renderLearnSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-section aa-learn';
  section.id = 'aprenderas';
  section.setAttribute('data-aa-section-theme', 'light');
  section.setAttribute('data-aa-nav-anchor', '');

  const header = renderSectionHeader({
    eyebrow: 'Contenido',
    heading: 'Qué aprenderás',
    sub: 'Esto es lo que te llevarás de la masterclass.',
    highlight: 'aprenderás',
  });

  const list = document.createElement('div');
  list.className = 'aa-learn__list';
  list.setAttribute('data-directional-hover', '');
  list.setAttribute('data-type', 'y');
  list.setAttribute('data-aa-fade', '');

  LEARN_POINTS.forEach((text, i) => {
    const row = document.createElement('div');
    row.className = 'aa-learn__row';
    row.setAttribute('data-directional-hover-item', '');

    const tile = document.createElement('div');
    tile.className = 'aa-learn__tile';
    tile.setAttribute('data-directional-hover-tile', '');

    const border = document.createElement('div');
    border.className = 'aa-learn__border';

    const num = document.createElement('span');
    num.className = 'aa-learn__num';
    num.textContent = String(i + 1).padStart(2, '0');

    const topic = document.createElement('p');
    topic.className = 'aa-learn__topic';
    topic.textContent = text;

    row.append(tile, border, num, topic);
    list.appendChild(row);
  });

  const borderBottom = document.createElement('div');
  borderBottom.className = 'aa-learn__border-bottom';
  list.appendChild(borderBottom);

  const inner = document.createElement('div');
  inner.className = 'aa-learn__inner';
  inner.append(header, list);

  section.appendChild(renderContainer({ size: 'm', children: [inner] }));
  root.appendChild(section);
}
