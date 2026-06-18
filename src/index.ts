// Entry point. Cada punto de montaje declara su configuración por atributos:
//   <div data-aa-mount
//        data-aa-theme="light|dark"
//        data-aa-lang="es|en"></div>
//
//   <script data-cfasync="false"
//     src="https://cdn.jsdelivr.net/gh/karenrebecag/Peru_atLP@latest/loader.js"></script>
const _v = document.querySelector<HTMLScriptElement>('script[src*="Peru_atLP@"]')?.src.match(/Peru_atLP@([^/]+)/)?.[1] ?? 'dev';
console.log(`[atfx-peru-lp] v${_v} loaded`);

import { type Theme, type Lang } from './core/types';
import { initMotion } from './ui/motion';
import { renderNavbar, initNavbar } from './ui/navbar';
import { renderTopbar, initTopbar } from './ui/topbar';
import { renderScrollProgress, initScrollProgress } from './ui/scroll-progress';
import { initSpline } from './ui/spline';
import { initParallax } from './ui/parallax';
import { initDirectionalHover } from './ui/directional-hover';
import { renderHero } from './sections/hero';
import { renderFormSection, initAtfxForm } from './sections/form';
import { renderProblemSection } from './sections/problem';
import { renderLearnSection } from './sections/learn';
import { renderSpeakersSection } from './sections/speakers';
import { renderAboutSection } from './sections/about';
import { renderBenefitsSection } from './sections/benefits';
import { renderFaqSection } from './sections/faq';
import { renderFooterSection } from './sections/footer';
import { initAccordion } from './ui/accordion';
import { initPillarSlider } from './ui/pillar-slider';
import { initRotatingText } from './ui/rotating-text';
import { initBenefitsScroll } from './ui/benefits-scroll';
import { initCursor } from './ui/cursor';
import { initMomentumHover } from './ui/momentum-hover';
import { initButton004 } from './ui/button004';
import { initDriftGallery } from './ui/drift-gallery';
import { initNumberOdometer } from './ui/odometer';

// Scroll suave para anclas internas (#id) sin tocar CSS global de Elementor.
function initAnchorScroll(root: HTMLElement): void {
  root.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href')?.slice(1);
    if (!id) return;
    const target = root.querySelector(`#${CSS.escape(id)}`);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function resolveTheme(raw: string | undefined): Theme {
  return raw === 'dark' ? 'dark' : 'light';
}

function resolveLang(raw: string | undefined): Lang {
  return raw === 'en' ? 'en' : 'es';
}

function boot(): void {
  const mounts = document.querySelectorAll<HTMLElement>('[data-aa-mount]');
  mounts.forEach((mount) => {
    const theme = resolveTheme(mount.dataset.aaTheme);
    const lang = resolveLang(mount.dataset.aaLang);

    // Root wrapper — todo el CSS está scopeado a .aa-landing
    const root = document.createElement('div');
    root.className = 'aa-landing';
    root.setAttribute('data-aa-theme', theme);
    root.setAttribute('data-aa-lang', lang);

    // Navbar (fixed) + cada sección como módulo, recibiendo `root` como contenedor.
    renderTopbar(root); // barra fija superior (botón de registro permanente)
    renderScrollProgress(root);
    renderNavbar(root);
    renderHero(root);
    renderFormSection(root); // incluye el countdown (bloque de registro)
    renderProblemSection(root);
    renderBenefitsSection(root);
    renderLearnSection(root);
    renderSpeakersSection(root);
    renderAboutSection(root);
    renderFaqSection(root);
    renderFooterSection(root);

    mount.replaceChildren(root);
    initAnchorScroll(root);
    // Pines primero: crean sus pin-spacers (~200vh) para que initMotion mida los triggers
    // de reveal con la altura real. Si no, en el layout colapsado las secciones de abajo
    // caen dentro del viewport y sus reveals once:true disparan antes de tiempo (el texto
    // ya está visible cuando llegas, sin animación).
    initBenefitsScroll(root);
    initDriftGallery(root);
    initMotion(root);
    initNavbar(root);
    initTopbar(root);
    initScrollProgress(root);
    initSpline();
    initParallax(root);
    initDirectionalHover(root);
    initAccordion(root);
    initPillarSlider(root);
    initRotatingText(root);
    initCursor(root);
    initMomentumHover(root);
    initButton004(root);
    initNumberOdometer();
    initAtfxForm();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
