import Vue from 'vue'
import VueI18N from 'vue-i18n'
import en from './en'
import cn from './cn'
import { getLocale, saveLocale } from '../utils/localStorage'

Vue.use(VueI18N)



let locale = 'en'


const i18n = new VueI18N({
  locale,//当前默认的语言

})

export default i18n
