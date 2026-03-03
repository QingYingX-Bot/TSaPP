<script setup>
import { useLang } from '../composables/useLang'
const { lang } = useLang()

const features = [
  {
    icon: '🎮',
    zh: { title: '游戏信息查询', desc: '快速查询各类游戏的攻略、角色信息、版本更新、活动公告等内容' },
    en: { title: 'Game Information Query', desc: 'Quickly query strategies, character info, version updates and event announcements for various games' },
  },
  {
    icon: '✨',
    zh: { title: '娱乐互动功能', desc: '每日运势、表情包生成等休闲娱乐服务' },
    en: { title: 'Entertainment', desc: 'Daily fortune, emoji generation and other casual entertainment' },
  },
]

const links = [
  {
    key: 'qq',
    href: 'https://qm.qq.com/q/BaBp4oLVgQ',
    zh: 'QQ 群',
    en: 'QQ Group',
    icon: 'qq',
  },
  {
    key: 'tg',
    href: 'https://t.me/Xmg_BBot',
    zh: 'Telegram',
    en: 'Telegram',
    icon: 'telegram',
  },
  {
    key: 'discord',
    href: 'https://xmg.099311.xyz',
    zh: 'Discord',
    en: 'Discord',
    icon: 'discord',
  },
]

// QQ 企鹅 logo（Simple Icons Tencent QQ）；Discord 带中间双眼
const icons = {
  qq: '<svg t="1772506090457" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1600" width="200" height="200"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="1601" fill="#ffffff"></path></svg>',
  telegram: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
  discord: '<svg t="1772505821853" class="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1633" width="200" height="200"><path d="M1049.062 139.672a3 3 0 0 0-1.528-1.4A970.13 970.13 0 0 0 808.162 64.06a3.632 3.632 0 0 0-3.846 1.82 674.922 674.922 0 0 0-29.8 61.2 895.696 895.696 0 0 0-268.852 0 619.082 619.082 0 0 0-30.27-61.2 3.78 3.78 0 0 0-3.848-1.82 967.378 967.378 0 0 0-239.376 74.214 3.424 3.424 0 0 0-1.576 1.352C78.136 367.302 36.372 589.38 56.86 808.708a4.032 4.032 0 0 0 1.53 2.75 975.332 975.332 0 0 0 293.65 148.378 3.8 3.8 0 0 0 4.126-1.352A696.4 696.4 0 0 0 416.24 860.8a3.72 3.72 0 0 0-2.038-5.176 642.346 642.346 0 0 1-91.736-43.706 3.77 3.77 0 0 1-0.37-6.252 502.094 502.094 0 0 0 18.218-14.274 3.638 3.638 0 0 1 3.8-0.512c192.458 87.834 400.82 87.834 591 0a3.624 3.624 0 0 1 3.848 0.466 469.066 469.066 0 0 0 18.264 14.32 3.768 3.768 0 0 1-0.324 6.252 602.814 602.814 0 0 1-91.78 43.66 3.75 3.75 0 0 0-2 5.222 782.11 782.11 0 0 0 60.028 97.63 3.728 3.728 0 0 0 4.126 1.4A972.096 972.096 0 0 0 1221.4 811.458a3.764 3.764 0 0 0 1.53-2.704c24.528-253.566-41.064-473.824-173.868-669.082zM444.982 675.16c-57.944 0-105.688-53.174-105.688-118.478s46.818-118.482 105.688-118.482c59.33 0 106.612 53.64 105.686 118.478 0 65.308-46.82 118.482-105.686 118.482z m390.76 0c-57.942 0-105.686-53.174-105.686-118.478s46.818-118.482 105.686-118.482c59.334 0 106.614 53.64 105.688 118.478 0 65.308-46.354 118.482-105.688 118.482z" p-id="1634" fill="#ffffff"></path></svg>',
}
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-logo-wrap">
        <img src="/logo.jpg" alt="XiaoMiGao" class="hero-logo" />
      </div>
      <h1 class="hero-title">
        <span v-show="lang === 'zh'">欢迎使用 XiaoMiGao 自助机器人</span>
        <span v-show="lang === 'en'">Welcome to XiaoMiGao</span>
      </h1>
      <p class="hero-desc">
        <span v-show="lang === 'zh'">由 QingYingX (HInXe) 提供的智能自助机器人，<br>为你提供便捷、有趣的智能服务体验。</span>
        <span v-show="lang === 'en'">An intelligent self-service robot provided by QingYingX (HInXe),<br>for a convenient and fun experience.</span>
      </p>
    </section>

    <section class="features">
      <h2 class="section-title">
        <span v-show="lang === 'zh'">核心功能</span>
        <span v-show="lang === 'en'">Core Features</span>
      </h2>
      <div class="features-grid">
        <div
          v-for="(f, i) in features"
          :key="i"
          class="feature-card"
        >
          <span class="feature-icon">{{ f.icon }}</span>
          <h3 class="feature-title">{{ lang === 'zh' ? f.zh.title : f.en.title }}</h3>
          <p class="feature-desc">{{ lang === 'zh' ? f.zh.desc : f.en.desc }}</p>
        </div>
      </div>
    </section>

    <section class="join-section">
      <h2 class="section-title">
        <span v-show="lang === 'zh'">加入我们</span>
        <span v-show="lang === 'en'">Join Us</span>
      </h2>
      <div class="join-buttons">
        <a
          v-for="item in links"
          :key="item.key"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="join-btn"
          :class="item.key"
        >
          <span class="join-icon" v-html="icons[item.icon]"></span>
          <span class="join-label">{{ lang === 'zh' ? item.zh : item.en }}</span>
        </a>
      </div>
    </section>

    <p class="contact-line">
      <span v-show="lang === 'zh'">问题或反馈：</span>
      <span v-show="lang === 'en'">Questions or feedback: </span>
      <a href="mailto:qingyingx@099311.xyz" class="contact-link">qingyingx@099311.xyz</a>
    </p>
  </div>
</template>

<style scoped>
.home {
  padding-bottom: 32px;
}

.hero {
  text-align: center;
  padding: 28px 0 40px;
}

.hero-logo-wrap {
  margin-bottom: 20px;
}

.hero-logo {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}

.hero-title {
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 700;
  color: #0d1117;
  line-height: 1.3;
  margin-bottom: 12px;
  letter-spacing: -0.03em;
}

.hero-title::after {
  content: '';
  display: block;
  width: 48px;
  height: 4px;
  background: linear-gradient(90deg, #1976d2, #42a5f5);
  border-radius: 2px;
  margin: 12px auto 0;
}

.hero-desc {
  font-size: 1.0625rem;
  color: #57606a;
  line-height: 1.8;
  margin: 0 auto;
  max-width: 480px;
}

.section-title {
  font-size: 1.0625rem;
  font-weight: 600;
  color: #21262d;
  margin-bottom: 16px;
  padding: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.feature-card {
  padding: 24px;
  background: #f6f8fa;
  border-radius: 12px;
  border: 1px solid #eaeef2;
  transition: border-color 0.2s;
}

.feature-card:hover {
  border-color: #1976d2;
}

.feature-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 12px;
  line-height: 1;
}

.feature-title {
  font-size: 1rem;
  font-weight: 600;
  color: #21262d;
  margin: 0 0 8px;
}

.feature-desc {
  font-size: 0.875rem;
  color: #57606a;
  line-height: 1.6;
  margin: 0;
}

.join-section {
  margin-top: 40px;
}

.join-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.join-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  transition: opacity 0.2s;
  border: none;
}

.join-btn:hover {
  opacity: 0.92;
}

.join-btn .join-icon {
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.join-btn .join-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.join-btn.qq {
  background: linear-gradient(135deg, #12b7f5 0%, #0e9ae0 100%);
}

.join-btn.tg {
  background: linear-gradient(135deg, #2aabee 0%, #229ed9 100%);
}

.join-btn.discord {
  background: linear-gradient(135deg, #5865f2 0%, #4752c4 100%);
}

.contact-line {
  margin: 36px 0 0;
  padding: 20px 0 0;
  border-top: 1px solid #eaeef2;
  font-size: 0.9375rem;
  color: #57606a;
  text-align: center;
}

.contact-link {
  color: #1976d2;
  font-weight: 500;
  text-decoration: none;
}

.contact-link:hover {
  text-decoration: underline;
}
</style>
