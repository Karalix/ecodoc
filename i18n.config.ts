import enLocale from './locales/en.json'
import frLocale from './locales/fr.json'


export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: enLocale,
        fr: frLocale,
    }
}))
  