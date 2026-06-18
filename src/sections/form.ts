// Registro — bloque único: countdown (sobre el bg) + card con el form atfx-forms. El
// widget es una librería desacoplada (loader desde jsDelivr); aquí solo aportamos el
// frame, el countdown y el mount. id=registro (ancla de los CTAs).

import { renderContainer } from '../ui/layout';
import { renderHeading, renderParagraph } from '../ui/text';
import { renderPill } from '../ui/atoms/pill';
import { renderCountdown } from '../ui/countdown';
import { EVENT_DATE } from '../constants/event';

const ATFX_LOADER = 'https://cdn.jsdelivr.net/gh/karenrebecag/at_forms@latest/loader.js';

export function renderFormSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-form-section';
  section.id = 'registro';
  section.setAttribute('data-aa-section-theme', 'dark');
  section.setAttribute('data-aa-nav-anchor', '');

  // ── Intro (pill + heading + lead + countdown compacto) ───────────────────────
  const intro = document.createElement('div');
  intro.className = 'aa-form-section__intro';

  // Pill + heading + lead SIN reveal de scroll (aparecen estáticos).
  const eyebrow = renderPill('Inscripción · 14 de julio');

  const lead = renderParagraph({
    size: 'l',
    text: 'Cupos limitados para la masterclass presencial en la Cámara de Comercio de Lima. Déjanos tus datos y asegura tu lugar; te enviamos la confirmación por correo.',
    className: 'aa-text-balance',
  });

  // Countdown compacto, debajo del copy (da contexto de urgencia; sin label/note).
  const cd = renderCountdown(EVENT_DATE);
  cd.classList.add('aa-form-section__countdown');
  cd.setAttribute('data-aa-fade', '');

  intro.append(
    eyebrow,
    renderHeading({ size: 'l', tag: 'h2', text: 'Asegura tu lugar', split: false, className: 'aa-text-center' }),
    lead,
    cd,
  );

  const mount = document.createElement('div');
  mount.setAttribute('data-atfx-form-mount', 'lead');
  mount.setAttribute('data-lang', 'es');
  mount.setAttribute('data-theme', 'dark'); // atfx-forms aplica su tema dark

  // Card: intro (con countdown) + form.
  const inner = document.createElement('div');
  inner.className = 'aa-form-section__inner';
  inner.append(intro, mount);

  section.appendChild(
    renderContainer({ size: 'default', className: 'aa-container--card', children: [inner] }),
  );
  root.appendChild(section);
}

// Carga el motor de atfx-forms (el loader inyecta forms.css + forms.js apuntando al tag
// inmutable). Corre DESPUÉS de montar el DOM, para que encuentre el [data-atfx-form-mount].
export function initAtfxForm(): void {
  if (document.querySelector('script[src*="at_forms@"]')) return; // ya cargado
  const s = document.createElement('script');
  s.src = ATFX_LOADER;
  s.setAttribute('data-cfasync', 'false');
  document.body.appendChild(s);
}
