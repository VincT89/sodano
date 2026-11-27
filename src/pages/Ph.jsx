/* Testo con eventuali segnaposto [[…]]: in sviluppo li evidenzia, così si vede subito cosa manca */
export default function Ph({ text }) {
  const parts = String(text).split(/(\[\[[\s\S]*?\]\])/);
  return parts.map((p, i) =>
    p.startsWith('[[') ? <mark key={i} className="ph">{p.slice(2, -2)}</mark> : p
  );
}

export const hasPh = (v) => JSON.stringify(v).includes('[[');
