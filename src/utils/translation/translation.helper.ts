import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';

import i18n from 'i18next';

import en from '../../assets/translations/en.json';

export const getCurrentDeviceLanguage = (): string => {
  const locales = getLocales();

  return locales[0].languageCode;
};

export const initI18N = () => {
  i18n.use(initReactI18next).init({
    resources: {
      en,
    },
    lng: getCurrentDeviceLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
};
