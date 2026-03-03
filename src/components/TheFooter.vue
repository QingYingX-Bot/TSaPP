<script setup>
import { useLang } from '../composables/useLang'
const { lang } = useLang()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-bar">
      <div class="footer-links">
        <router-link to="/privacy" class="footer-link">
          <span v-show="lang === 'zh'">隐私政策</span>
          <span v-show="lang === 'en'">Privacy Policy</span>
        </router-link>
        <span class="sep">·</span>
        <router-link to="/terms" class="footer-link">
          <span v-show="lang === 'zh'">服务条款</span>
          <span v-show="lang === 'en'">Terms of Service</span>
        </router-link>
      </div>
      <span class="footer-copy">© 2026 XiaoMiGao</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  flex-shrink: 0;
  width: 100%;
  background: #f5f5f5;
  border-top: 1px solid #e8e8e8;
}

.footer-bar {
  max-width: 880px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 6px;
}

.footer-link {
  font-size: 0.875rem;
  color: #555;
  text-decoration: none;
}

.footer-link:hover {
  color: #1976d2;
  text-decoration: underline;
}

.sep {
  color: #bbb;
  font-size: 0.75rem;
}

.footer-copy {
  font-size: 0.8125rem;
  color: #888;
}
</style>
