import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend) // load translation using xhr -> see /public/locales
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    lng: "fr",
    debug: false,
    fallbackLng: "en", // use en if detected lng is not available
    bindStore: false,
    react: {
        wait: false,
        withRef: false,
        bindStore: false,
        useSuspense : false
      },

  },
  (err, t) => {
      if(err){
          console.log(err)
        };
    });

export default i18n;