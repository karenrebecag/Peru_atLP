// 10 · Footer oficial de ATFX — logo + columnas (Legal / Sobre Nosotros / Redes) +
// disclaimer legal. Trasladado del footer de marca de ATFX. Strip dark.

import { renderContainer } from '../ui/layout';
import {
  ATFX_HOME,
  ATFX_LOGO_SRC,
  FOOTER_GROUPS,
  FOOTER_SOCIALS,
  BLUEMAKERS_SOCIALS,
  FOOTER_LEGAL,
} from '../constants/footer';

function renderSocialLink({ label, href, icon, fill }: { label: string; href: string; icon: string; fill: boolean }): HTMLAnchorElement {
  const a = document.createElement('a');
  a.className = 'aa-footer__social';
  a.href = href;
  a.target = '_blank';
  a.rel = 'noopener';
  a.setAttribute('aria-label', label);
  a.innerHTML = `<svg viewBox="0 0 24 24" fill="${fill ? 'currentColor' : 'none'}" stroke="${fill ? 'none' : 'currentColor'}" stroke-width="${fill ? 0 : 2}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icon}</svg>`;
  return a;
}

export function renderFooterSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-section aa-footer';
  section.id = 'footer';
  section.setAttribute('data-aa-section-theme', 'dark');
  section.setAttribute('data-aa-nav-anchor', '');

  // Logo
  const top = document.createElement('div');
  top.className = 'aa-footer__top';
  const logoLink = document.createElement('a');
  logoLink.href = ATFX_HOME;
  logoLink.target = '_blank';
  logoLink.rel = 'noopener';
  const logo = document.createElement('img');
  logo.className = 'aa-footer__logo';
  logo.src = ATFX_LOGO_SRC;
  logo.alt = 'ATFX';
  logo.loading = 'lazy';
  logoLink.appendChild(logo);
  top.appendChild(logoLink);

  // Columnas: grupos de links + redes
  const cols = document.createElement('div');
  cols.className = 'aa-footer__cols';

  FOOTER_GROUPS.forEach((group) => {
    const col = document.createElement('div');
    col.className = 'aa-footer__col';

    const eyebrow = document.createElement('p');
    eyebrow.className = 'aa-footer__eyebrow';
    eyebrow.textContent = `( ${group.title} )`;

    const links = document.createElement('div');
    links.className = 'aa-footer__links';
    group.links.forEach(({ label, href }) => {
      const a = document.createElement('a');
      a.className = 'aa-footer__link';
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = label;
      links.appendChild(a);
    });

    col.append(eyebrow, links);
    cols.appendChild(col);
  });

  // Columna de redes
  const socialCol = document.createElement('div');
  socialCol.className = 'aa-footer__col';
  const socialEyebrow = document.createElement('p');
  socialEyebrow.className = 'aa-footer__eyebrow';
  socialEyebrow.textContent = '( Redes )';
  const socials = document.createElement('div');
  socials.className = 'aa-footer__socials';
  FOOTER_SOCIALS.forEach((s) => socials.appendChild(renderSocialLink(s)));
  socialCol.append(socialEyebrow, socials);
  cols.appendChild(socialCol);

  // Co-brand: redes del aliado Blue Makers
  const cobrand = document.createElement('div');
  cobrand.className = 'aa-footer__cobrand';
  const cobrandLabel = document.createElement('p');
  cobrandLabel.className = 'aa-footer__eyebrow';
  cobrandLabel.textContent = 'Síguenos también en Blue Makers';
  const cobrandSocials = document.createElement('div');
  cobrandSocials.className = 'aa-footer__socials';
  BLUEMAKERS_SOCIALS.forEach((s) => cobrandSocials.appendChild(renderSocialLink(s)));
  cobrand.append(cobrandLabel, cobrandSocials);

  // Disclaimer legal
  const legal = document.createElement('div');
  legal.className = 'aa-footer__legal';
  const legalText = document.createElement('p');
  legalText.textContent = FOOTER_LEGAL;
  legal.appendChild(legalText);

  const inner = document.createElement('div');
  inner.className = 'aa-footer__inner';
  inner.append(top, cols, cobrand, legal);

  section.appendChild(renderContainer({ children: [inner] }));
  root.appendChild(section);
}
