// 9 · FAQ — header (patrón Spark) + Accordion + CTA (FaqStrip).

import { renderContainer } from '../ui/layout';
import { renderSectionHeader } from '../ui/section-header';
import { renderAccordion } from '../ui/accordion';
import { renderNavCta } from '../ui/atoms/nav-cta';
import { FAQS } from '../constants/content';

export function renderFaqSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-section aa-faq';
  section.id = 'faq';
  section.setAttribute('data-aa-section-theme', 'light');
  section.setAttribute('data-aa-nav-anchor', '');

  const header = renderSectionHeader({
    eyebrow: 'Preguntas frecuentes',
    heading: 'Todo lo que necesitas saber',
  });

  const cta = document.createElement('div');
  cta.className = 'aa-faq__cta';
  cta.appendChild(renderNavCta({ href: '#registro', label: 'Regístrate', standalone: true }));

  const inner = document.createElement('div');
  inner.className = 'aa-faq__inner';
  inner.append(header, renderAccordion(FAQS), cta);

  section.appendChild(renderContainer({ size: 'sm', children: [inner] }));
  root.appendChild(section);
}
