// Footer oficial de ATFX — links, redes y disclaimer legal extraídos del proyecto de
// referencia. Contenido real de marca (no placeholder).

export interface FooterLink {
  label: string;
  href: string;
}
export interface FooterGroup {
  title: string;
  links: FooterLink[];
}
export interface FooterSocial {
  label: string;
  href: string;
  icon: string; // inner SVG markup
  fill: boolean;
}

export const ATFX_HOME = 'https://www.atfx.com/es/';
export const ATFX_LOGO_SRC = 'https://www.atfx.com/wp-content/uploads/2023/06/ATFX_logo.svg';

export const FOOTER_GROUPS: FooterGroup[] = [
  {
    title: 'Legal',
    links: [
      { label: 'Legal', href: 'https://www.atfx.com/es/condiciones-legales' },
      { label: 'Términos comerciales', href: 'https://www.atfx.com/wp-content/uploads/2024/04/AT-Global-Markets-MU_EN_Standard-Terms-of-Business.pdf' },
      { label: 'Privacidad', href: 'https://www.atfx.com/wp-content/uploads/2024/04/AT-Global-Markets-MU_EN_Privacy-and-Internal-Privacy-Controls-Policy.pdf' },
      { label: 'Cookies', href: 'https://www.atfx.com/wp-content/uploads/2025/03/ES-ATFX-GM-Cookies-Policy-EN-V20200605.pdf' },
      { label: 'Boletines', href: 'https://notice.atfx.com/es/notice' },
    ],
  },
  {
    title: 'Sobre Nosotros',
    links: [
      { label: 'Nuestra visión', href: 'https://www.atfx.com/es/sobre-nosotros/nuestra-vision' },
      { label: '¿Por qué elegir ATFX?', href: 'https://www.atfx.com/es/sobre-nosotros/por-que-elegir-atfx' },
      { label: 'Licencias ATFX', href: 'https://www.atfx.com/es/sobre-nosotros/atfx-reguladores' },
      { label: 'Premios y reconocimientos', href: 'https://www.atfx.com/es/sobre-nosotros/premios-y-reconocimientos' },
      { label: 'Responsabilidad social corporativa', href: 'https://www.atfx.com/es/duke-of-edinburgh-cup-sponsorship' },
      { label: 'Noticias de la compañía', href: 'https://www.atfx.com/es/sobre-nosotros/noticias-de-la-compania' },
    ],
  },
];

export const FOOTER_SOCIALS: FooterSocial[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/ATFXLatam', fill: true, icon: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>' },
  { label: 'Instagram', href: 'https://www.instagram.com/atfx_latam/', fill: false, icon: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>' },
  { label: 'X', href: 'https://x.com/ATFX_Latam', fill: true, icon: '<path d="M5.92 6l14.66 21.375L6.23 44h3.18l12.576-14.578L31.986 44H44L28.682 21.67 42.199 6h-3.17L27.275 19.617 17.934 6H5.92zm3.797 2h7.163L40.203 42h-7.164L9.717 8z"/>' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/atfx-latam/', fill: true, icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>' },
  { label: 'YouTube', href: 'https://www.youtube.com/@atfxlatam', fill: true, icon: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#08101d"/>' },
];

// Redes del aliado Blue Makers (co-brand)
export const BLUEMAKERS_SOCIALS: FooterSocial[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/blue.makers_', fill: false, icon: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@bluemakers0', fill: true, icon: '<path d="M16.5 5.6a4.4 4.4 0 0 1-2.7-2.1h-2.6v11.4a2 2 0 1 1-1.6-2v-2.6a4.6 4.6 0 1 0 4.2 4.6V9.5a6.9 6.9 0 0 0 3.5 1V7.9a4.4 4.4 0 0 1-0.8-0.1z"/>' },
  { label: 'YouTube', href: 'https://www.youtube.com/@BLUEMAKERS-z5f', fill: true, icon: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#111b30"/>' },
];

export const FOOTER_LEGAL =
  'ATFX es una alianza estratégica formada por un grupo de entidades que incluye: AT Global Markets (UK) Ltd, autorizada y regulada por la FCA (n.º 760555) · AT Global Markets (Australia) Pty Ltd, regulada por ASIC (AFSL 418036) · AT Global Markets SA (Pty) Ltd, regulada por FSCA (FSP 44816) · ATFX Global Markets (CY) Ltd, regulada por CySEC (licencia 285/15) · AT Global Markets Intl Ltd, regulada por FSC de Mauricio (C118023331) · AT Global Markets (SC) Limited, regulada por FSA de Seychelles (SD093) · ATFX MENA Financial Services LLC, regulada por CMA (n.º 20200000078) · AT Global Financial Services (HK) Limited, regulada por SFC de Hong Kong (BUM667) · ATFX (Cambodia) Company Limited, regulada por SERC (n.º 040). ADVERTENCIA DE INVERSIÓN DE ALTO RIESGO: El trading de Forex y CFDs es muy especulativo, conlleva un alto nivel de riesgo y puede no ser adecuado para todos los inversores. Puede perder parte o la totalidad de su capital. Regiones restringidas: AT Global Markets Intl Ltd no brinda servicios a residentes de Canadá, Japón, Corea del Norte, Irán ni EE.UU. © 2026 ATFX. Todos los derechos reservados.';
