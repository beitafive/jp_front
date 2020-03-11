import Vue from 'vue'
import VueI18n from 'vue-i18n'

import zh from './zh'
import ja from './ja'

Vue.use(VueI18n)

export default new VueI18n({
  locale: localStorage.lang || 'ja',
  messages: {
    zh,
    ja
  }
})
