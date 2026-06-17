// 6 · Aliados / instructores — header + grid de cards (Álvaro Matos, Josué Flores de
// Blue Makers) con bio. Strip dark. Trasladado del SpeakerCard/Instructor de Spark/ATFX.

import { renderContainer } from '../ui/layout';
import { renderSectionHeader } from '../ui/section-header';
import { renderSpeakerCard } from '../ui/atoms/speaker-card';
import { SPEAKERS } from '../constants/content';

export function renderSpeakersSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-section aa-speakers';
  section.id = 'speakers';
  section.setAttribute('data-aa-section-theme', 'dark');
  section.setAttribute('data-aa-nav-anchor', '');

  const header = renderSectionHeader({
    eyebrow: 'Aliados',
    heading: 'Quiénes dirigen la masterclass',
    highlight: 'dirigen',
  });

  const grid = document.createElement('div');
  grid.className = 'aa-speakers__grid';
  grid.setAttribute('data-aa-fade', '');
  SPEAKERS.forEach((s) => grid.appendChild(renderSpeakerCard(s)));

  const inner = document.createElement('div');
  inner.className = 'aa-speakers__inner';
  inner.append(header, grid);

  section.appendChild(renderContainer({ size: 'm', children: [inner] }));
  root.appendChild(section);
}
