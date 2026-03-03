<script setup>
import { useRoute } from 'vue-router'
import { useLang } from '../composables/useLang'

const route = useRoute()
const { lang, setLang } = useLang()
</script>

<template>
  <v-app-bar
    elevation="0"
    color="white"
    height="56"
    class="header-bar"
  >
    <v-container class="header-container d-flex align-center">
      <router-link to="/" class="brand-link">
        <span class="brand-logo-wrap">
          <img src="/logo.jpg" alt="" class="brand-logo-img" />
        </span>
        <span class="brand-name">XiaoMiGao</span>
      </router-link>

      <v-spacer />

      <router-link
        v-if="route.path !== '/'"
        to="/"
        class="nav-home"
      >
        <span v-show="lang === 'zh'">首页</span>
        <span v-show="lang === 'en'">Home</span>
      </router-link>

      <v-btn-toggle
        :model-value="lang"
        mandatory
        density="compact"
        variant="outlined"
        divided
        class="lang-toggle"
        @update:model-value="setLang"
      >
        <v-btn size="small" value="zh">中文</v-btn>
        <v-btn size="small" value="en">EN</v-btn>
      </v-btn-toggle>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.header-bar {
  border-bottom: 1px solid #e8e8e8;
}

.header-container {
  max-width: 880px;
  margin: 0 auto;
  height: 100%;
}

.brand-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.brand-logo-wrap {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: 10px;
}
.brand-logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.brand-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: -0.02em;
}

.nav-home {
  margin-right: 16px;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #444;
  text-decoration: none;
}

.nav-home:hover {
  color: #1976d2;
}

.lang-toggle {
  border-radius: 6px;
}
</style>
