import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
Localization.getLocalizationAsync
import en from './languages/en.json';
import esp from './languages/esp.json';
declare const global: any
i18n.translations = {
  en,
  esp,
};

i18n.fallbacks = true;
i18n.locale = Localization.locale;
i18n.locale = global.locale;
export default i18n
export const strings = (t: string) => i18n.translate(t)