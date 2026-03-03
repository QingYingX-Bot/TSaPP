<script setup>
import { useRoute } from 'vue-router'
import { useLang } from '../composables/useLang'

const route = useRoute()
const { lang, setLang } = useLang()

const nav = [
  { path: '/', zh: '首页', en: 'Home' },
  { path: '/privacy', zh: '隐私政策', en: 'Privacy Policy' },
  { path: '/terms', zh: '服务条款', en: 'Terms of Service' },
]
</script>

<template>
  <header class="site-header">
    <nav>
      <router-link
        v-for="item in nav"
        :key="item.path"
        :to="item.path"
        class="nav-link"
        :class="{ 'active-nav': route.path === item.path }"
      >
        <span v-show="lang === 'zh'">{{ item.zh }}</span>
        <span v-show="lang === 'en'">{{ item.en }}</span>
      </router-link>
    </nav>
    <div class="lang-switch">
      <button
        type="button"
        class="lang-btn"
        :class="{ active: lang === 'zh' }"
        @click="setLang('zh')"
      >
        中文
      </button>
      <button
        type="button"
        class="lang-btn"
        :class="{ active: lang === 'en' }"
        @click="setLang('en')"
      >
        English
      </button>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  padding: 15px 0;
  border-bottom: 2px solid #f0f0f0;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
nav {
  display: flex;
  gap: 8px;
}
.nav-link {
  padding: 8px 16px;
  text-decoration: none;
  color: #555;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-size: 0.95em;
}
.nav-link:hover {
  background: #f5f5f5;
  color: #0070f3;
}
.active-nav {
  background: #0070f3;
  color: #fff !important;
  font-weight: 600;
}
.lang-switch {
  display: flex;
  gap: 0;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 4px;
}
.lang-btn {
  padding: 6px 14px;
  border: none;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  font-size: 0.9em;
  color: #666;
  transition: all 0.2s ease;
  font-weight: 500;
}
.lang-btn:hover {
  color: #333;
}
.lang-btn.active {
  background: #fff;
  color: #0070f3;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
</style>
