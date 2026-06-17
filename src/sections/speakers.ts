// 6 · Speakers — header (patrón Spark) + marquee de SpeakerCards (SpeakersStrip).
// Strip dark, como en Spark.

import { renderSectionHeader } from '../ui/section-header';
import { renderMarquee } from '../ui/marquee';
import { renderSpeakerCard } from '../ui/atoms/speaker-card';
import { SPEAKERS } from '../constants/content';

export function renderSpeakersSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-section aa-speakers';
  section.id = 'speakers';
  section.setAttribute('data-aa-section-theme', 'dark');
  section.setAttribute('data-aa-nav-anchor', '');

  const header = renderSectionHeader({
    eyebrow: 'Speakers',
    heading: 'Quiénes te acompañan',
  });

  const cards = SPEAKERS.map((s) => renderSpeakerCard(s));
  const marquee = renderMarquee({ items: cards, direction: 'forward', duration: '40s', gap: 'var(--aa-gap-s)' });

  // El header va en container; el marquee a todo el ancho (full-bleed).
  section.append(header, marquee);
  root.appendChild(section);
}
