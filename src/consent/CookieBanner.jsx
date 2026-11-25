import { useEffect, useRef, useState } from 'react';
import { useConsent } from './ConsentContext.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';

export default function CookieBanner() {
  const { decided, panelOpen, consent, acceptAll, rejectAll, saveChoice, openPreferences, closePreferences } = useConsent();
  const { t } = useLang();
  const [stats, setStats] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const firstRef = useRef(null);

  useEffect(() => {
    if (panelOpen) {
      setStats(!!consent?.stats); setMarketing(!!consent?.marketing);
      requestAnimationFrame(() => firstRef.current?.focus());
    }
  }, [panelOpen, consent]);

  if (decided && !panelOpen) return null;

  return (
    <div className={'cookie' + (panelOpen ? ' panel' : '')} role="dialog" aria-modal={panelOpen} aria-labelledby="ckTitle">
      <div className="cookie-box">
        <p className="cookie-title" id="ckTitle">{t.ckTitle}</p>
        <p className="cookie-text">
          {t.ckText} <a href="#/cookie-policy">{t.legalCookie}</a>.
        </p>

        {panelOpen && (
          <div className="cookie-cats">
            <label className="cookie-cat">
              <input type="checkbox" checked disabled />
              <span><b>{t.ckNecessary}</b><small>{t.ckNecessaryDesc}</small></span>
            </label>
            <label className="cookie-cat">
              <input ref={firstRef} type="checkbox" checked={stats} onChange={(e) => setStats(e.target.checked)} />
              <span><b>{t.ckStats}</b><small>{t.ckStatsDesc}</small></span>
            </label>
            <label className="cookie-cat">
              <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
              <span><b>{t.ckMarketing}</b><small>{t.ckMarketingDesc}</small></span>
            </label>
          </div>
        )}

        <div className="cookie-actions">
          {panelOpen ? (
            <>
              <button type="button" className="btn btn-ghost btn-sm" onClick={rejectAll}>{t.ckReject}</button>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => saveChoice({ stats, marketing })}>{t.ckSave}</button>
              <button type="button" className="btn btn-primary btn-sm" onClick={acceptAll}>{t.ckAccept}</button>
              {decided && <button type="button" className="cookie-close" aria-label="Chiudi" onClick={closePreferences}>×</button>}
            </>
          ) : (
            <>
              <button type="button" className="cookie-link" onClick={openPreferences}>{t.ckCustomize}</button>
              <button type="button" className="btn btn-ghost btn-sm" onClick={rejectAll}>{t.ckReject}</button>
              <button type="button" className="btn btn-primary btn-sm" onClick={acceptAll}>{t.ckAccept}</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
