import { renderToString } from 'react-dom/server';
import Root from './Root.jsx';

/* Usato solo in build (scripts/prerender.mjs): genera l'HTML di ogni pagina */
export function render(url) {
  return renderToString(<Root url={url} />);
}
export { allRoutes, matchPath } from './router/routes.js';
export { headFor, headToHtml } from './router/head.js';
