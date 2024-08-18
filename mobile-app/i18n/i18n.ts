import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { getLocales } from "expo-localization";

const deviceLanguage = getLocales()[0].languageCode;

import en from "./locales/en.json";

export const languageResources = {
  en: { translation: en },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: deviceLanguage || "en",
  fallbackLng: "en",
  resources: languageResources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
