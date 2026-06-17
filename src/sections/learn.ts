// 5 · Qué aprenderás — header (patrón Spark) + grid de puntos numerados.

import { renderContainer, renderGrid } from '../ui/layout';
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

  const items = LEARN_POINTS.map((text, i) => {
    const item = document.createElement('div');
    item.className = 'aa-learn__item';

    const num = document.createElement('span');
    num.className = 'aa-learn__num';
    num.textContent = String(i + 1).padStart(2, '0');

    const p = document.createElement('p');
    p.className = 'aa-learn__text';
    p.textContent = text;

    item.append(num, p);
    return item;
  });

  const grid = renderGrid({ cols: 2, className: 'aa-learn__grid', attrs: { 'data-aa-fade': '' }, children: items });

  const inner = document.createElement('div');
  inner.className = 'aa-learn__inner';
  inner.append(header, grid);

  section.appendChild(renderContainer({ size: 'm', children: [inner] }));
  root.appendChild(section);
}
