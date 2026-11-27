import { RouterProvider } from './router/Router.jsx';
import { LanguageProvider } from './i18n/LanguageContext.jsx';
import { ConsentProvider } from './consent/ConsentContext.jsx';
import App from './App.jsx';

export default function Root({ url }) {
  return (
    <RouterProvider initialPath={url}>
      <LanguageProvider>
        <ConsentProvider>
          <App />
        </ConsentProvider>
      </LanguageProvider>
    </RouterProvider>
  );
}
