import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import noTranslation from './locales/no/translation.json';

const resources = {
    en: {
        translation: enTranslation
    },
    no: {
        translation: noTranslation
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'no', // default language
        fallbackLng: 'no', // fallback language

        interpolation: {
            escapeValue: false
        },
    });

export default i18n;