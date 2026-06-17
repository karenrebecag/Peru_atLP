// Form — punto de montaje de atfx-forms (form "lead") dentro de un strip light, +
// carga del motor desde jsDelivr. atfx-forms es una librería desacoplada: el loader
// inyecta su CSS + JS y el motor renderiza, valida y envía el form. Aquí NO se
// redeclara nada; solo aportamos el mount y el contenedor.

import { renderSection, renderContainer } from '../ui/layout';

const ATFX_LOADER = 'https://cdn.jsdelivr.net/gh/karenrebecag/at_forms@latest/loader.js';

export function renderFormSection(root: Element): void {
  const mount = document.createElement('div');
  mount.setAttribute('data-atfx-form-mount', 'lead');
  mount.setAttribute('data-lang', 'es');

  const section = renderSection({
    theme: 'light',
    className: 'aa-form-section',
    children: [renderContainer({ size: 'sm', children: [mount] })],
  });
  section.id = 'formulario';
  section.setAttribute('data-aa-nav-anchor', '');
  root.appendChild(section);
}

// Carga el motor de atfx-forms (el loader inyecta forms.css + forms.js apuntando al
// tag inmutable). Debe correr DESPUÉS de montar el DOM, para que el loader encuentre
// el [data-atfx-form-mount] ya presente en el documento.
export function initAtfxForm(): void {
  if (document.querySelector('script[src*="at_forms@"]')) return; // ya cargado
  const s = document.createElement('script');
  s.src = ATFX_LOADER;
  s.setAttribute('data-cfasync', 'false');
  document.body.appendChild(s);
}
