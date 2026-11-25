import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In sviluppo (npm run dev) PHP non gira: simuliamo contact.php per provare il modulo.
const devContactMock = {
  name: 'dev-contact-mock',
  configureServer(server) { mock(server); },
  configurePreviewServer(server) { mock(server); }
};
function mock(server) {
    server.middlewares.use('/contact.php', (req, res) => {
      let body = '';
      req.on('data', (c) => { body += c; });
      req.on('end', () => {
        console.log('\n[contact.php simulato] richiesta ricevuta:', body);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ ok: true, dev: true }));
      });
    });
}

export default defineConfig({
  plugins: [react(), devContactMock],
  server: { port: 5173, open: true },
  build: { chunkSizeWarningLimit: 2500 } // il globo 3D è un pezzo separato, caricato solo vicino alla sezione
});
