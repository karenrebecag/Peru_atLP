// 8 · Beneficios — header (patrón Spark) + PillarSlider (carrusel rotario draggable).

import { renderContainer } from '../ui/layout';
import { renderSectionHeader } from '../ui/section-header';
import { renderPillarSlider } from '../ui/pillar-slider';
import { renderPillarCard } from '../ui/atoms/pillar-card';
import { PILLARS } from '../constants/content';

export function renderBenefitsSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-section aa-benefits';
  section.id = 'beneficios';
  section.setAttribute('data-aa-section-theme', 'light');
  section.setAttribute('data-aa-nav-anchor', '');

  const header = renderSectionHeader({
    eyebrow: 'Beneficios',
    heading: 'Por qué asistir',
    sub: 'Lo que te llevas de esta masterclass, en cinco claves. Arrástralas para explorarlas.',
    highlight: 'asistir',
  });

  const cards = PILLARS.map((p) => renderPillarCard(p));
  const slider = renderPillarSlider(cards);

  const headerWrap = renderContainer({ size: 'm', children: [header] });

  // Header en container; slider full-bleed.
  section.append(headerWrap, slider);
  root.appendChild(section);
}
