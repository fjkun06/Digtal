import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

//loading translation files
// // footer
// import footEN from './locales/en/pageend.json';
// import footDE from './locales/de/pageend.json';
// import footFR from './locales/fr/pageend.json';

// // form
// import formEN from './locales/en/form.json';
// import formDE from './locales/de/form.json';
// import formFR from './locales/fr/form.json';

// // formerror
// import formErrorEN from './locales/en/formerror.json';
// import formErrorDE from './locales/de/formerror.json';
// import formErrorFR from './locales/fr/formerror.json';

// // navbar
// import navbarEN from './locales/en/navbar.json';
// import navbarDE from './locales/de/navbar.json';
// import navbarFR from './locales/fr/navbar.json';

// // translation
// import translationEN from './locales/en/translation.json';
// import translationDE from './locales/de/translation.json';
// import translationFR from './locales/fr/translation.json';


// // don't want to use this?
// // have a look at the Quick start guide
// // for passing in lng and translations on init

// // the translations
// const resources = {
//    en: {
//       foot: footEN,
//       form: formEN,
//       formerror: formErrorEN,
//       navbar: navbarEN,
//       translation: translationEN
//    },
//    de: {
//       foot: footDE,
//       form: formDE,
//       formerror: formErrorDE,
//       navbar: navbarDE,
//       translation: translationDE
//    },
//    fr: {
//       foot: footFR,
//       form: formFR,
//       formerror: formErrorFR,
//       navbar: navbarFR,
//       translation: translationFR
//    }
// };

i18n
   // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
   // learn more: https://github.com/i18next/i18next-http-backend
   // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
   .use(Backend)
   // detect user language
   // learn more: https://github.com/i18next/i18next-browser-languageDetector
   .use(LanguageDetector)
   // pass the i18n instance to react-i18next.
   .use(initReactI18next)
   // init i18next
   // for all options read: https://www.i18next.com/overview/configuration-options
   .init({
      fallbackLng: 'en',
      debug: true,
      lng:'cimode',

      interpolation: {
         escapeValue: false // not needed for react as it escapes by default
      },
      react: {
         useSuspense: true
      }
   });


export default i18n;
