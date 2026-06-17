// Navbar — Scaling Hamburger Navigation: botón hamburguesa fijo top-right que escala
// y se abre en un panel con el menú. Estructura + comportamiento (toggle/close/ESC)
// portados del recurso; estilizado con tokens --aa-* (paleta ATFX).

import { renderNavCta } from './atoms/nav-cta';
import { NAV_LINKS, NAV_CTA } from '../constants/nav';

export function renderNavbar(root: Element): void {
  const nav = document.createElement('nav');
  nav.className = 'aa-hnav';
  nav.setAttribute('data-aa-hnav-status', 'not-active');
  nav.setAttribute('aria-label', 'Principal');

  // Backdrop (click = cerrar)
  const backdrop = document.createElement('div');
  backdrop.className = 'aa-hnav__backdrop';
  backdrop.setAttribute('data-aa-hnav-toggle', 'close');

  const panel = document.createElement('div');
  panel.className = 'aa-hnav__panel';

  const panelBg = document.createElement('div');
  panelBg.className = 'aa-hnav__panel-bg';

  // Contenido del menú
  const group = document.createElement('div');
  group.className = 'aa-hnav__group';

  const label = document.createElement('p');
  label.className = 'aa-hnav__label';
  label.textContent = 'Menú';

  const ul = document.createElement('ul');
  ul.className = 'aa-hnav__list';
  NAV_LINKS.forEach((link) => {
    const li = document.createElement('li');
    li.className = 'aa-hnav__item';

    const a = document.createElement('a');
    a.className = 'aa-hnav__link';
    a.href = link.href;

    const text = document.createElement('p');
    text.className = 'aa-hnav__text';
    text.textContent = link.label;

    const dot = document.createElement('div');
    dot.className = 'aa-hnav__dot';

    a.append(text, dot);
    li.appendChild(a);
    ul.appendChild(li);
  });

  const ctaWrap = document.createElement('div');
  ctaWrap.className = 'aa-hnav__cta';
  ctaWrap.appendChild(renderNavCta({ href: NAV_CTA.href, label: NAV_CTA.label }));

  group.append(label, ul, ctaWrap);

  // Toggle (hamburguesa)
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'aa-hnav__toggle';
  toggle.setAttribute('data-aa-hnav-toggle', 'toggle');
  toggle.setAttribute('aria-label', 'Abrir menú');
  toggle.setAttribute('aria-expanded', 'false');
  const bar1 = document.createElement('div');
  bar1.className = 'aa-hnav__bar';
  const bar2 = document.createElement('div');
  bar2.className = 'aa-hnav__bar';
  toggle.append(bar1, bar2);

  panel.append(panelBg, group, toggle);
  nav.append(backdrop, panel);
  root.appendChild(nav);
}

export function initNavbar(root: Element): void {
  const nav = root.querySelector<HTMLElement>('[data-aa-hnav-status]');
  if (!nav) return;

  const isActive = (): boolean => nav.getAttribute('data-aa-hnav-status') === 'active';
  const setStatus = (active: boolean): void => {
    nav.setAttribute('data-aa-hnav-status', active ? 'active' : 'not-active');
    const toggle = nav.querySelector<HTMLElement>('[data-aa-hnav-toggle="toggle"]');
    toggle?.setAttribute('aria-label', active ? 'Cerrar menú' : 'Abrir menú');
    toggle?.setAttribute('aria-expanded', String(active));
  };

  nav.querySelectorAll<HTMLElement>('[data-aa-hnav-toggle="toggle"]').forEach((btn) => {
    btn.addEventListener('click', () => setStatus(!isActive()));
  });
  nav.querySelectorAll<HTMLElement>('[data-aa-hnav-toggle="close"]').forEach((btn) => {
    btn.addEventListener('click', () => setStatus(false));
  });
  // Cerrar al navegar a una sección
  nav.querySelectorAll<HTMLAnchorElement>('.aa-hnav__link').forEach((a) => {
    a.addEventListener('click', () => setStatus(false));
  });
  // ESC para cerrar
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isActive()) setStatus(false);
  });
}
