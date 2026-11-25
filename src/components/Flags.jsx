/* Bandiere in SVG (nessun file esterno). Proporzioni 4:3, angoli arrotondati via CSS. */
const common = { viewBox: '0 0 24 18', width: 24, height: 18, 'aria-hidden': true, focusable: 'false' };

export function FlagIT() {
  return (
    <svg {...common}><rect width="8" height="18" fill="#009246" /><rect x="8" width="8" height="18" fill="#fff" /><rect x="16" width="8" height="18" fill="#CE2B37" /></svg>
  );
}
export function FlagDE() {
  return (
    <svg {...common}><rect width="24" height="6" fill="#000" /><rect y="6" width="24" height="6" fill="#DD0000" /><rect y="12" width="24" height="6" fill="#FFCE00" /></svg>
  );
}
export function FlagNL() {
  return (
    <svg {...common}><rect width="24" height="6" fill="#AE1C28" /><rect y="6" width="24" height="6" fill="#fff" /><rect y="12" width="24" height="6" fill="#21468B" /></svg>
  );
}
export function FlagGB() {
  return (
    <svg {...common}>
      <rect width="24" height="18" fill="#012169" />
      <path d="M0 0L24 18M24 0L0 18" stroke="#fff" strokeWidth="3.6" />
      <path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" strokeWidth="1.4" />
      <path d="M12 0V18M0 9H24" stroke="#fff" strokeWidth="6" />
      <path d="M12 0V18M0 9H24" stroke="#C8102E" strokeWidth="3.4" />
    </svg>
  );
}

export const FLAGS = { it: FlagIT, en: FlagGB, de: FlagDE, nl: FlagNL };
