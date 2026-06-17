// Navbar — maquetación trasladada del Navbar de Spark: logo · pill de links con
// indicador activo · NavCta. Comportamiento: hide-on-scroll-down, tema dark/light
// según la sección detrás (reusa data-aa-section-theme), indicador sobre link activo.

import { renderRoll } from './atoms/roll';
import { renderNavCta } from './atoms/nav-cta';
import { NAV_LINKS, NAV_CTA } from '../constants/nav';

export function renderNavbar(root: Element): void {
  const nav = document.createElement('nav');
  nav.className = 'aa-nav';
  nav.setAttribute('data-aa-nav', '');
  nav.setAttribute('aria-label', 'Principal');

  const inner = document.createElement('div');
  inner.className = 'aa-nav__inner';

  // Pill de links con indicador (referencia ATFX: pill flotante sin logo)
  const links = document.createElement('div');
  links.className = 'aa-nav__links';
  const list = document.createElement('div');
  list.className = 'aa-nav__links-list';
  list.setAttribute('data-aa-nav-list', '');

  const indicator = document.createElement('div');
  indicator.className = 'aa-nav__indicator';
  list.appendChild(indicator);

  NAV_LINKS.forEach((link) => {
    const a = document.createElement('a');
    a.className = 'aa-nav__link';
    a.href = link.href;
    a.setAttribute('data-aa-nav-target', link.href);
    a.appendChild(renderRoll(link.label));
    list.appendChild(a);
  });
  links.appendChild(list);

  // CTA (oculto en mobile vía CSS)
  const ctaWrap = document.createElement('div');
  ctaWrap.className = 'aa-nav__cta';
  ctaWrap.appendChild(renderNavCta({ href: NAV_CTA.href, label: NAV_CTA.label }));

  inner.append(links, ctaWrap);
  nav.appendChild(inner);
  root.appendChild(nav);
}

// Punto bajo el cual se evalúa "qué sección está detrás del navbar".
const NAV_SAMPLE_Y = 40;

export function initNavbar(root: Element): void {
  const found = root.querySelector<HTMLElement>('[data-aa-nav]');
  if (!found) return;
  const nav = found; // estrechado a no-null para los closures (scroll/resize)

  const list = nav.querySelector<HTMLElement>('[data-aa-nav-list]');
  const indicator = nav.querySelector<HTMLElement>('.aa-nav__indicator');
  const navLinks = Array.from(nav.querySelectorAll<HTMLElement>('.aa-nav__link'));
  const themed = Array.from(root.querySelectorAll<HTMLElement>('[data-aa-section-theme]'));

  let lastY = window.scrollY;
  let ticking = false;

  // Sección cuyo rango vertical cruza el punto de muestreo del navbar.
  function sectionBehind(): HTMLElement | undefined {
    return themed.find((s) => {
      const r = s.getBoundingClientRect();
      return r.top <= NAV_SAMPLE_Y && r.bottom > NAV_SAMPLE_Y;
    });
  }

  // Último link cuya sección destino ya pasó el 40% superior del viewport.
  function activeLink(): HTMLElement | undefined {
    const mid = window.innerHeight * 0.4;
    let current: HTMLElement | undefined;
    navLinks.forEach((link) => {
      const id = link.getAttribute('data-aa-nav-target')?.slice(1);
      if (!id) return;
      const sec = root.querySelector<HTMLElement>(`#${CSS.escape(id)}`);
      if (!sec) return;
      if (sec.getBoundingClientRect().top <= mid) current = link;
    });
    return current;
  }

  function moveIndicator(link: HTMLElement | undefined): void {
    if (!list || !indicator) return;
    navLinks.forEach((l) => l.removeAttribute('data-active'));
    if (!link) {
      indicator.style.opacity = '0';
      return;
    }
    link.setAttribute('data-active', 'true');
    const lr = list.getBoundingClientRect();
    const er = link.getBoundingClientRect();
    indicator.style.opacity = '1';
    indicator.style.left = `${er.left - lr.left}px`;
    indicator.style.top = `${er.top - lr.top}px`;
    indicator.style.width = `${er.width}px`;
    indicator.style.height = `${er.height}px`;
  }

  function update(): void {
    const y = window.scrollY;
    nav.setAttribute('data-aa-hidden', String(y > 10 && y > lastY));
    lastY = y;

    const sec = sectionBehind();
    if (sec) {
      const theme = sec.getAttribute('data-aa-section-theme');
      if (theme) nav.setAttribute('data-aa-section-theme', theme);
    }

    moveIndicator(activeLink());
    ticking = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  window.addEventListener('resize', () => moveIndicator(activeLink()), { passive: true });
  update();
}
