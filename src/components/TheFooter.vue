<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLang } from '../composables/useLang'

const { lang } = useLang()

const startDate = new Date('2024-06-27T19:01:00')
const elapsed = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })
let timer = null

function updateElapsed() {
  const now = new Date()
  let diff = Math.max(0, Math.floor((now - startDate) / 1000))
  const days = Math.floor(diff / 86400)
  diff %= 86400
  const hours = Math.floor(diff / 3600)
  diff %= 3600
  const minutes = Math.floor(diff / 60)
  const seconds = diff % 60
  elapsed.value = { days, hours, minutes, seconds }
}

onMounted(() => {
  updateElapsed()
  timer = setInterval(updateElapsed, 1000)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <footer class="site-footer">
    <div class="footer-bar">
      <div class="footer-links">
        <router-link to="/demo" class="footer-link">
          <span v-show="lang === 'zh'">功能演示</span>
          <span v-show="lang === 'en'">Feature Demo</span>
        </router-link>
        <span class="sep">·</span>
        <router-link to="/friends" class="footer-link">
          <span v-show="lang === 'zh'">友链</span>
          <span v-show="lang === 'en'">Friends</span>
        </router-link>
        <span class="sep">·</span>
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

      <div class="footer-timer">
        <span class="timer-label" v-show="lang === 'zh'">已运行</span>
        <span class="timer-label" v-show="lang === 'en'">Running</span>
        <span class="timer-value">{{ String(elapsed.days).padStart(3, '0') }} {{ lang === 'zh' ? '天' : 'd' }} {{ String(elapsed.hours).padStart(2, '0') }} {{ lang === 'zh' ? '时' : 'h' }} {{ String(elapsed.minutes).padStart(2, '0') }} {{ lang === 'zh' ? '分' : 'm' }} {{ String(elapsed.seconds).padStart(2, '0') }} {{ lang === 'zh' ? '秒' : 's' }}</span>
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
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px 8px;
}

.footer-link {
  font-size: 0.875rem;
  color: #555;
  text-decoration: none;
  padding: 2px 0;
}

.footer-link:hover {
  color: #1976d2;
  text-decoration: underline;
}

.footer-link.router-link-active {
  color: #1976d2;
  font-weight: 500;
}

.sep {
  color: #ccc;
  font-size: 0.5rem;
  user-select: none;
}

.footer-timer {
  display: flex;
  align-items: baseline;
  gap: 6px;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
}

.timer-label {
  font-size: 0.8125rem;
  color: #888;
}

.timer-value {
  font-size: 0.875rem;
  color: #555;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.footer-copy {
  font-size: 0.8125rem;
  color: #888;
}

@media (max-width: 640px) {
  .footer-bar {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .footer-links { justify-content: center; }
}
</style>
