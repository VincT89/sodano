import { Fragment } from 'react';

/* Divide un titolo in parole che salgono una dopo l'altra quando la sezione entra nello schermo
   (funziona dentro un elemento .reveal). */
export default function Split({ text, step = 0.06, delay = 0.1 }) {
  const words = String(text).split(' ');
  return words.map((w, i) => (
    <Fragment key={i + w}>
      <span className="sw" aria-hidden="true">
        <span style={{ transitionDelay: (delay + i * step).toFixed(2) + 's' }}>{w}</span>
      </span>
      {i < words.length - 1 ? ' ' : ''}
    </Fragment>
  ));
}
