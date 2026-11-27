/* Prerendering: dopo la build genera un file HTML completo per ogni pagina del sito,
   più 404.html, sitemap.xml e robots.txt. Non serve un browser: usa il rendering di React lato server. */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(process.cwd());
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');
const { render, allRoutes, matchPath, headFor, headToHtml } = await import(pathToFileURL(ssrEntry).href);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<!--app-->') || !template.includes('<!--head-->')) {
  throw new Error('index.html senza i segnaposto <!--app--> e <!--head-->');
}

function page(url, route) {
  const head = headFor(route);
  return template
    .replace(/<html lang="[^"]*">/, `<html lang="${head.lang}">`)
    .replace(/<!--head-->[\s\S]*?<!--\/head-->/, headToHtml(head))
    .replace('<!--app-->', render(url));
}

const routes = allRoutes();
for (const r of routes) {
  const file = path.join(dist, r.path, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(r.path, r));
}

// pagina non trovata (Apache la usa per tutti gli indirizzi inesistenti, vedi .htaccess)
fs.writeFileSync(path.join(dist, '404.html'), page('/404/', matchPath('/404/')));

// sitemap con le versioni nelle altre lingue
const base = headFor(routes[0]).canonical.replace(/\/$/, '');
const today = new Date().toISOString().slice(0, 10);
const indexable = !headFor(routes[0]).robots;
// le pagine con noindex (anteprime) non vanno nella sitemap
const urls = routes.filter((r) => !headFor(r).robots).map((r) => {
  const h = headFor(r);
  const alt = h.alternates.length > 1
    ? h.alternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`).join('\n') + '\n'
    : '';
  return `  <url>\n    <loc>${h.canonical}</loc>\n${alt}    <lastmod>${today}</lastmod>\n  </url>`;
});
fs.writeFileSync(path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(dist, 'robots.txt'),
  indexable ? `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n');

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Prerendering: ${routes.length} pagine, 404.html, sitemap.xml, robots.txt`);
