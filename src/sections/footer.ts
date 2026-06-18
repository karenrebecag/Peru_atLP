// 10 · Footer oficial de ATFX — logo + columnas (Legal / Sobre Nosotros / Redes) +
// disclaimer legal. Trasladado del footer de marca de ATFX. Strip dark.

import { renderContainer } from '../ui/layout';
import {
  ATFX_HOME,
  FOOTER_GROUPS,
  FOOTER_SOCIALS,
  BLUEMAKERS_SOCIALS,
  FOOTER_LEGAL,
} from '../constants/footer';

const LOGOS = '/public/logos';

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

// Grupo de redes (eyebrow + iconos). ATFX y Blue Makers usan el mismo grupo para
// que se lean con jerarquía equivalente (colab), apilados en una columna.
function renderSocialGroup(label: string, items: typeof FOOTER_SOCIALS): HTMLElement {
  const group = document.createElement('div');
  group.className = 'aa-footer__social-group';
  const eyebrow = document.createElement('p');
  eyebrow.className = 'aa-footer__eyebrow';
  eyebrow.textContent = label;
  const socials = document.createElement('div');
  socials.className = 'aa-footer__socials';
  items.forEach((s) => socials.appendChild(renderSocialLink(s)));
  group.append(eyebrow, socials);
  return group;
}

export function renderFooterSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-section aa-footer';
  section.id = 'footer';
  section.setAttribute('data-aa-section-theme', 'dark');
  section.setAttribute('data-aa-nav-anchor', '');

  // Conjunto de logos (ATFX · separador · Blue Makers) — footer dark → versión white.
  const top = document.createElement('div');
  top.className = 'aa-footer__top';

  const logos = document.createElement('div');
  logos.className = 'aa-footer__logos';

  const atfxLink = document.createElement('a');
  atfxLink.href = ATFX_HOME;
  atfxLink.target = '_blank';
  atfxLink.rel = 'noopener';
  const atfx = document.createElement('img');
  atfx.className = 'aa-footer__logo aa-footer__logo--atfx';
  atfx.src = `${LOGOS}/atfx-white.png`;
  atfx.alt = 'ATFX';
  atfx.loading = 'lazy';
  atfxLink.appendChild(atfx);

  const sep = document.createElement('span');
  sep.className = 'aa-footer__logo-sep';
  sep.setAttribute('aria-hidden', 'true');

  const bm = document.createElement('img');
  bm.className = 'aa-footer__logo aa-footer__logo--bm';
  bm.src = `${LOGOS}/bluemakers-white.png`;
  bm.alt = 'Blue Makers';
  bm.loading = 'lazy';

  logos.append(atfxLink, sep, bm);
  top.appendChild(logos);

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

  // Columna de redes: ATFX y Blue Makers apilados con jerarquía equivalente (colab)
  const socialCol = document.createElement('div');
  socialCol.className = 'aa-footer__col aa-footer__col--socials';
  socialCol.append(
    renderSocialGroup('( Redes de ATFX )', FOOTER_SOCIALS),
    renderSocialGroup('( Redes de Blue Makers )', BLUEMAKERS_SOCIALS),
  );
  cols.appendChild(socialCol);

  // Disclaimer legal
  const legal = document.createElement('div');
  legal.className = 'aa-footer__legal';
  const legalText = document.createElement('p');
  legalText.textContent = FOOTER_LEGAL;
  legal.appendChild(legalText);

  const inner = document.createElement('div');
  inner.className = 'aa-footer__inner';
  inner.append(top, cols, legal);

  section.appendChild(renderContainer({ children: [inner] }));
  root.appendChild(section);
}
