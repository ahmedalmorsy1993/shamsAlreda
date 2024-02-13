import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Yup from 'yup';
import * as en from './en.json'
import * as ar from './ar.json'

const resources = {
  en: { translation: en },
  ar: { translation: ar },
} as const;

export default i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('lang') || "ar", // if you're using a language detector, do not define the lng option
    fallbackLng: "ar",
    supportedLngs: ["ar", 'en'],
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });


Yup.setLocale({
  mixed: {
    required: i18n.t('validations.required'),
  },
  string: {
    email: i18n.t('validations.email'),
    min: i18n.t('validations.min'),
  },
});