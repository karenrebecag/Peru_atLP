// Accordion — trasladado del Accordion de Spark: panel con animación grid-rows
// (0fr↔1fr) + chevron que rota. closeSiblings (solo uno abierto). Estado vía
// data-open; init engancha el toggle.

import type { FaqItem } from '../constants/content';

export function renderAccordion(items: FaqItem[]): HTMLElement {
  const ul = document.createElement('ul');
  ul.className = 'aa-accordion';

  items.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'aa-accordion__item';
    li.setAttribute('data-open', 'false');

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'aa-accordion__trigger';

    const q = document.createElement('h3');
    q.className = 'aa-accordion__q';
    q.textContent = item.question;

    const icon = document.createElement('span');
    icon.className = 'aa-accordion__icon';
    icon.innerHTML =
      '<svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="M28.5 22.5L18 12L7.5 22.5" stroke="currentColor" stroke-width="3" stroke-miterlimit="10"/></svg>';

    trigger.append(q, icon);

    const panel = document.createElement('div');
    panel.className = 'aa-accordion__panel';
    const panelInner = document.createElement('div');
    panelInner.className = 'aa-accordion__panel-inner';
    const a = document.createElement('p');
    a.className = 'aa-accordion__a';
    a.textContent = item.answer;
    panelInner.appendChild(a);
    panel.appendChild(panelInner);

    li.append(trigger, panel);
    ul.appendChild(li);
  });

  return ul;
}

export function initAccordion(scope: Element): void {
  scope.querySelectorAll<HTMLElement>('.aa-accordion').forEach((acc) => {
    const items = Array.from(acc.querySelectorAll<HTMLElement>('.aa-accordion__item'));
    items.forEach((item) => {
      const trigger = item.querySelector<HTMLButtonElement>('.aa-accordion__trigger');
      trigger?.addEventListener('click', () => {
        const willOpen = item.getAttribute('data-open') !== 'true';
        items.forEach((i) => i.setAttribute('data-open', 'false')); // closeSiblings
        item.setAttribute('data-open', String(willOpen));
      });
    });
  });
}
