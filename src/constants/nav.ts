// Navegación — labels + anclas. Las secciones destino se irán creando por fase;
// el indicador del navbar se activa solo cuando el ancla existe en el DOM.

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Por qué asistir', href: '#beneficios' },
  { label: 'Para quién', href: '#problema' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'FAQ', href: '#faq' },
];

export const NAV_CTA = {
  label: 'Reservar lugar',
  href: '#registro',
};
