// 9 · FAQ — card flotante (patrón "Primera generación" de ATOM): badge + heading +
// intro + Preguntas frecuentes + Accordion + CTA, dentro de un aa-container--card
// navy sobre strip claro. Copy adaptado al evento ATFX Perú.

import { renderContainer } from '../ui/layout';
import { renderHeading, renderParagraph } from '../ui/text';
import { renderPill } from '../ui/atoms/pill';
import { renderAccordion } from '../ui/accordion';
import { renderButton } from '../ui/atoms/button';
import { FAQS } from '../constants/content';

export function renderFaqSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-section aa-faq';
  section.id = 'faq';
  section.setAttribute('data-aa-section-theme', 'light');
  section.setAttribute('data-aa-nav-anchor', '');

  const badge = renderPill('Cupos limitados · 14 de julio');
  badge.setAttribute('data-aa-fade', '');

  const heading = renderHeading({
    size: 'l',
    tag: 'h2',
    text: 'Reserva tu lugar en El Futuro de la Inversión',
    split: true,
  });

  const intro = renderParagraph({
    size: 'l',
    text: 'La masterclass es 100% presencial y de cupos limitados en la Cámara de Comercio de Lima. Regístrate, resuelve tus dudas y asegura tu lugar antes de que se agoten.',
    className: 'aa-faq__intro',
  });
  intro.setAttribute('data-aa-fade', '');

  // Mapa de la sede (Cámara de Comercio de Lima) — entre el copy y las preguntas.
  const map = document.createElement('div');
  map.className = 'aa-faq__map';
  map.setAttribute('data-aa-fade', '');
  const iframe = document.createElement('iframe');
  iframe.src =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.4157733406073!2d-77.0514506!3d-12.0836636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8fed8055555%3A0xbaef62005ffe9f92!2sC%C3%A1mara%20de%20Comercio%20de%20Lima!5e0!3m2!1ses!2smx!4v1781813347026!5m2!1ses!2smx';
  iframe.title = 'Cámara de Comercio de Lima — sede del evento';
  iframe.loading = 'lazy';
  iframe.allowFullscreen = true;
  iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
  map.appendChild(iframe);

  const faqLabel = renderPill('Preguntas frecuentes');
  faqLabel.classList.add('aa-faq__label');
  faqLabel.setAttribute('data-aa-fade', '');

  const acc = renderAccordion(FAQS);
  acc.setAttribute('data-aa-fade', '');

  const cta = document.createElement('div');
  cta.className = 'aa-faq__cta';
  cta.appendChild(renderButton({ href: '#registro', label: 'Quiero registrarme', variant: 'primary' }));

  const inner = document.createElement('div');
  inner.className = 'aa-faq__inner';
  inner.append(badge, heading, intro, map, faqLabel, acc, cta);

  const card = renderContainer({ size: 'default', className: 'aa-container--card', children: [inner] });
  // La card es navy → cuenta como sección dark (lo lee el navbar para el swap de logos).
  card.setAttribute('data-aa-section-theme', 'dark');
  section.appendChild(card);
  root.appendChild(section);
}
