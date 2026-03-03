<script setup>
import { useLang } from '../composables/useLang'
const { lang } = useLang()

// 功能演示：图片路径为 public 下的路径，可增删改
const demos = [
  {
    image: '/demo/demo1.jpg',
    zh: { title: '游戏信息查询', desc: '发送指令即可查询游戏攻略、角色、版本更新与活动公告等。' },
    en: { title: 'Game Info Query', desc: 'Query game guides, characters, version updates and event announcements by sending commands.' },
  },
  {
    image: '/demo/demo2.jpg',
    zh: { title: '娱乐互动', desc: '每日运势、表情包生成等趣味功能，丰富群内互动。' },
    en: { title: 'Entertainment', desc: 'Daily fortune, emoji generation and other fun features for group interaction.' },
  },
  // 可继续添加更多演示项，图片请放入 public/demo/
]
</script>

<template>
  <div class="page feature-demo-page">
    <h1>
      <span v-show="lang === 'zh'">功能演示</span>
      <span v-show="lang === 'en'">Feature Demo</span>
    </h1>
    <p class="page-desc">
      <span v-show="lang === 'zh'">以下为小米糕（XiaoMiGao）部分功能的图文介绍。</span>
      <span v-show="lang === 'en'">Below are image and text introductions for some features of XiaoMiGao.</span>
    </p>

    <section v-for="(item, i) in demos" :key="i" class="demo-block">
      <div class="demo-image-wrap">
        <img :src="item.image" :alt="lang === 'zh' ? item.zh.title : item.en.title" class="demo-image" @error="($event.target).style.display = 'none'" />
      </div>
      <div class="demo-content">
        <h2 class="demo-title">{{ lang === 'zh' ? item.zh.title : item.en.title }}</h2>
        <p class="demo-desc">{{ lang === 'zh' ? item.zh.desc : item.en.desc }}</p>
      </div>
    </section>

    <p v-if="demos.length === 0" class="empty-tip">
      <span v-show="lang === 'zh'">暂无演示内容，敬请期待。</span>
      <span v-show="lang === 'en'">No demo content yet. Stay tuned.</span>
    </p>
  </div>
</template>

<style scoped>
.feature-demo-page { max-width: 100%; }
.page-desc { color: #57606a; margin-bottom: 32px; font-size: 1rem; }
.demo-block {
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #eaeef2;
}
.demo-block:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.demo-image-wrap {
  border-radius: 12px;
  overflow: hidden;
  background: #f6f8fa;
  border: 1px solid #eaeef2;
  margin-bottom: 16px;
  max-width: 100%;
}
.demo-image { width: 100%; height: auto; display: block; vertical-align: top; }
.demo-content { max-width: 100%; }
.demo-title { font-size: 1.25rem; font-weight: 600; color: #1a1a1a; margin: 0 0 8px; }
.demo-desc { font-size: 1rem; color: #57606a; line-height: 1.7; margin: 0; }
.empty-tip { color: #888; font-size: 0.9375rem; }
</style>
