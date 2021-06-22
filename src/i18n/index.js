import en from './locales/en'
import kr from './locales/kr'

export default {
  locales: ['en', 'kr'],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: {
      en,
      kr,
    }
  }
}