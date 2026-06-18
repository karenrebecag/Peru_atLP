# Changelog

Formato basado en [Keep a Changelog](https://keepachangelog.com/es/1.1.0/).
Versionado: el CI de release etiqueta `vX.Y.Z` por push a `main` (cuando se conecte el repo).

## [Unreleased]

### Added
- Bootstrap del proyecto: duplicado 1:1 de `ATOM_Academy` como punto de partida (stack
  vanilla TS + esbuild + GSAP, Mount Point Pattern para Elementor).
- `PORT` configurable en `esbuild.config.mjs` (default `8766`) para coexistir con otros
  proyectos del mismo stack en local.
- Plan de traslado de SparkSummit2026 documentado en `CLAUDE.md` (mapeo de tokens,
  secciones, componentes y fases).
- Este `CHANGELOG.md`.

### Fixed
- Desborde horizontal en todas las strips: se restauró el reset `box-sizing: border-box`
  (perdido en el duplicado). Sin él, `width:100%` + `padding-inline` del `.aa-container`
  desbordaba y el `overflow-x: clip` del root recortaba el contenido por la derecha
  (más visible en la sección del form embebido).

### Changed
- Beneficios ("Por qué asistir"): se reemplazó el slider draggable por el efecto MWG 087
  (pin + scroll horizontal con inercia por card según la velocidad de scroll). Header sin
  cambios. Nuevos `ui/benefits-scroll.ts` y `styles/benefits.css`; `ui/slider.ts` +
  `styles/slider.css` quedan sin uso.
- FAQ accordion: portado el estilo de ATOM Academy (filas underline + icono +/−) en lugar
  del de Spark (pills rellenos), que se estiraban a lo ancho de la card navy.
- Git desconectado del duplicado (sin historial ni remote del proyecto origen).

### Pending
- Rebrand de identidad: `package.json` (`name`), refs `Academy_LP` en `loader.js` /
  `src/index.ts`, definir repo/remote/CDN destino.
- Traslado de las 9 secciones + navbar de SparkSummit (ver fases en `CLAUDE.md`).
- Reemplazo de contenido/copy/imagery por el de ATFX Perú.
