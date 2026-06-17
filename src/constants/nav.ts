// Navegación — labels + anclas. Las secciones destino se irán creando por fase;
// el indicador del navbar se activa solo cuando el ancla existe en el DOM.

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'El evento', href: '#programa' },
  { label: 'Registro', href: '#registro' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'FAQ', href: '#faq' },
];

export const NAV_CTA = {
  label: 'Reservar lugar',
  href: '#registro',
};
