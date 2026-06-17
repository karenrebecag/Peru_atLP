// Problema (hook financiero) — layout basado en el AudienceStrip de Spark:
// contenido alineado a la izquierda (max-w-5xl) con heading + párrafos + lista con
// dots de acento. Strip dark para contraste con el bloque de registro. Tokens --aa-*.

import { renderContainer } from '../ui/layout';
import { renderHeading, renderParagraph } from '../ui/text';

const NOT_KNOWN = [
  'cómo funciona realmente el sistema bancario',
  'por qué sus ahorros pierden valor con el tiempo',
  'qué alternativas existen para hacerlo crecer',
];

export function renderProblemSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-problem';
  section.id = 'problema';
  section.setAttribute('data-aa-section-theme', 'dark');
  section.setAttribute('data-aa-nav-anchor', '');

  const content = document.createElement('div');
  content.className = 'aa-problem__content';

  content.appendChild(
    renderHeading({
      size: 'l',
      tag: 'h2',
      text: '¿Tu dinero realmente está creciendo?',
      highlight: 'creciendo',
    }),
  );

  content.appendChild(
    renderParagraph({
      size: 'l',
      text: 'Mientras permanece en el banco, la inflación y el sistema financiero pueden estar reduciendo su valor sin que lo notes.',
    }),
  );

  // Lead + lista (agrupados con gap menor para que el lead "pegue" con la lista)
  const group = document.createElement('div');
  group.className = 'aa-problem__group';
  group.setAttribute('data-aa-fade', '');

  const lead = document.createElement('p');
  lead.className = 'aa-problem__lead';
  lead.textContent = 'La mayoría de personas no sabe:';

  const list = document.createElement('ul');
  list.className = 'aa-problem__list';
  NOT_KNOWN.forEach((text) => {
    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
  });

  group.append(lead, list);
  content.appendChild(group);

  content.appendChild(
    renderParagraph({
      size: 'l',
      text: 'En esta masterclass descubrirás qué está pasando y cómo aprovecharlo a tu favor.',
    }),
  );

  section.appendChild(renderContainer({ size: 'm', children: [content] }));
  root.appendChild(section);
}
