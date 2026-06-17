// Contenido SCAFFOLD (placeholder on-topic) para las secciones portadas de Spark.
// La ESTRUCTURA es definitiva; el copy/data se reemplaza por el real de ATFX Perú.

export interface SpeakerData {
  name: string;
  role: string;
  company: string;
}
export interface BenefitData {
  title: string;
  text: string;
}
export interface FaqItem {
  question: string;
  answer: string;
}
export interface StatData {
  value: string;
  label: string;
}
export interface SocialData {
  label: string;
  href: string;
  icon: string; // inner SVG markup
  fill: boolean;
}

// 5 · Qué aprenderás (placeholder — reemplazar por los 8 puntos reales)
export const LEARN_POINTS: string[] = [
  'Cómo funciona realmente el sistema bancario y qué hace con tu dinero',
  'Por qué tus ahorros pierden valor frente a la inflación',
  'Qué papel juegan los metales en una economía en crecimiento',
  'Cómo identificar oportunidades antes que la mayoría',
  'Principios básicos para invertir con criterio',
  'Errores frecuentes al invertir y cómo evitarlos',
  'Cómo diversificar y proteger tu capital',
  'Primeros pasos para empezar hoy',
];

// 6 · Speakers (placeholder — reemplazar por los ponentes reales)
export const SPEAKERS: SpeakerData[] = [
  { name: 'Ponente 1', role: 'Especialista en inversión', company: 'ATFX' },
  { name: 'Ponente 2', role: 'Analista de mercados', company: 'ATFX' },
  { name: 'Ponente 3', role: 'Estratega financiero', company: 'ATFX' },
  { name: 'Ponente 4', role: 'Educador financiero', company: 'ATFX' },
  { name: 'Ponente 5', role: 'Trader senior', company: 'ATFX' },
  { name: 'Ponente 6', role: 'Asesor de inversión', company: 'ATFX' },
];

// 7 · Sobre el evento (datos reales del hero)
export const ABOUT_STATS: StatData[] = [
  { value: '3 h', label: 'de contenido en vivo' },
  { value: 'Presencial', label: 'en Lima, Perú' },
  { value: 'Cupos', label: 'limitados' },
];

// 8 · Beneficios (placeholder)
export const BENEFITS: BenefitData[] = [
  { title: 'Aprende de especialistas', text: 'Conocimiento directo de quienes operan en los mercados todos los días.' },
  { title: 'Estrategias accionables', text: 'Sales con pasos concretos para aplicar, no solo teoría.' },
  { title: 'Networking', text: 'Conecta con otras personas que buscan hacer crecer su capital.' },
];

// 8 · Beneficios como slider de pilares (PillarSlider) — placeholder
export interface PillarData {
  variant: 'dark' | 'gradient' | 'light';
  tags: string[];
  title: string;
  text: string;
}
export const PILLARS: PillarData[] = [
  { variant: 'dark', tags: ['Mercados'], title: 'Anticípate', text: 'Aprende a leer las señales del mercado antes que la mayoría.' },
  { variant: 'gradient', tags: ['Estrategia'], title: 'Invierte', text: 'Construye una estrategia con criterio y objetivos claros.' },
  { variant: 'light', tags: ['Patrimonio'], title: 'Protege', text: 'Resguarda el valor de tu capital frente a la inflación.' },
  { variant: 'dark', tags: ['Networking'], title: 'Conecta', text: 'Rodéate de personas que buscan hacer crecer su capital.' },
  { variant: 'gradient', tags: ['Acción'], title: 'Aplica', text: 'Sal con pasos concretos para empezar a invertir hoy.' },
];

// 9 · FAQ (placeholder on-topic)
export const FAQS: FaqItem[] = [
  { question: '¿Necesito experiencia previa en inversión?', answer: 'No. La masterclass está diseñada para que cualquier persona entienda los conceptos desde cero.' },
  { question: '¿El evento es presencial?', answer: 'Sí. Es 100% presencial en Lima, Perú, el martes 14 de julio de 9:00 a.m. a 12:00 p.m.' },
  { question: '¿Tiene costo?', answer: 'El registro es gratuito, pero los cupos son limitados.' },
  { question: '¿Recibiré algún material?', answer: 'Sí, los asistentes reciben material de apoyo tras el evento.' },
  { question: '¿Cómo confirmo mi lugar?', answer: 'Completa el formulario de registro en esta página. Recibirás la confirmación por correo.' },
];

// 10 · Redes (placeholder hrefs — reemplazar por las cuentas reales de ATFX Perú)
export const SOCIALS: SocialData[] = [
  {
    label: 'Instagram',
    href: '#',
    icon: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
    fill: false,
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    fill: true,
  },
];

// 10 · Aliados (placeholder — reemplazar por logos reales)
export const ALLIES: string[] = ['Aliado 1', 'Aliado 2', 'Aliado 3', 'Aliado 4', 'Aliado 5'];
