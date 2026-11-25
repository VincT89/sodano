import { useEffect, useId, useRef, useState } from 'react';
import { useLang, LANGS } from '../i18n/LanguageContext.jsx';
import { FLAGS } from './Flags.jsx';

const NAMES = { it: 'Italiano', en: 'English', de: 'Deutsch', nl: 'Nederlands' };
const LABEL = { it: 'Lingua', en: 'Language', de: 'Sprache', nl: 'Taal' };

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(LANGS.indexOf(lang));
  const rootRef = useRef(null);
  const btnRef = useRef(null);
  const listRef = useRef(null);
  const id = useId();
  const Current = FLAGS[lang];

  // chiude cliccando fuori
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => { if (!rootRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [open]);

  useEffect(() => {
    if (open) { setActive(LANGS.indexOf(lang)); requestAnimationFrame(() => listRef.current?.focus()); }
  }, [open, lang]);

  function choose(l) {
    setLang(l);
    setOpen(false);
    btnRef.current?.focus();
  }

  function onListKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); setOpen(false); btnRef.current?.focus(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => (a + 1) % LANGS.length); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => (a - 1 + LANGS.length) % LANGS.length); }
    else if (e.key === 'Home') { e.preventDefault(); setActive(0); }
    else if (e.key === 'End') { e.preventDefault(); setActive(LANGS.length - 1); }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(LANGS[active]); }
    else if (e.key === 'Tab') setOpen(false);
  }

  function onBtnKey(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); setOpen(true); }
  }

  return (
    <div className={'lang-menu' + (open ? ' open' : '')} ref={rootRef}>
      <button
        ref={btnRef}
        type="button"
        className="lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={id + '-list'}
        aria-label={`${LABEL[lang]}: ${NAMES[lang]}`}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onBtnKey}
      >
        <span className="flag"><Current /></span>
        <span className="lang-code">{lang.toUpperCase()}</span>
        <svg className="chev" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5L6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>

      <ul
        id={id + '-list'}
        ref={listRef}
        className="lang-list"
        role="listbox"
        tabIndex={-1}
        aria-label={LABEL[lang]}
        aria-activedescendant={open ? `${id}-opt-${LANGS[active]}` : undefined}
        onKeyDown={onListKey}
        hidden={!open}
      >
        {LANGS.map((l, i) => {
          const F = FLAGS[l];
          return (
            <li
              key={l}
              id={`${id}-opt-${l}`}
              role="option"
              aria-selected={l === lang}
              className={(i === active ? 'active ' : '') + (l === lang ? 'selected' : '')}
              onMouseEnter={() => setActive(i)}
              onClick={() => choose(l)}
            >
              <span className="flag"><F /></span>
              <span className="lang-name">{NAMES[l]}</span>
              <span className="lang-code-sm">{l.toUpperCase()}</span>
              {l === lang && (
                <svg className="check" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 7.5l2.6 2.5L11 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
