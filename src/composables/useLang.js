import { ref, watch } from 'vue'

const STORAGE_KEY = 'site-lang'
const lang = ref(localStorage.getItem(STORAGE_KEY) || 'zh')

export function useLang() {
  const isEn = () => lang.value === 'en'

  function setLang(l) {
    lang.value = l
    localStorage.setItem(STORAGE_KEY, l)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l === 'en' ? 'en' : 'zh-CN'
    }
  }

  watch(lang, (l) => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l === 'en' ? 'en' : 'zh-CN'
    }
  }, { immediate: true })

  return { lang, isEn, setLang }
}
