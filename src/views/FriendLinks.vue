<script setup>
import { useLang } from '../composables/useLang'
const { lang } = useLang()

// 友链列表：可在此增删改，或后续改为接口/配置
const friendLinks = [
  // 示例，可删除或替换
  // { name: '示例站点', url: 'https://example.com', zhDesc: '示例描述', enDesc: 'Example description' },
]
</script>

<template>
  <div class="page friend-links-page">
    <h1>
      <span v-show="lang === 'zh'">友链</span>
      <span v-show="lang === 'en'">Friends & Links</span>
    </h1>
    <p class="page-desc">
      <span v-show="lang === 'zh'">以下为本站友链，欢迎互换。</span>
      <span v-show="lang === 'en'">Friend links are listed below. Exchange welcome.</span>
    </p>

    <ul v-if="friendLinks.length" class="friend-list">
      <li v-for="(item, i) in friendLinks" :key="i" class="friend-item">
        <a :href="item.url" target="_blank" rel="noopener noreferrer" class="friend-link">
          <span class="friend-name">{{ item.name }}</span>
          <span class="friend-desc">{{ lang === 'zh' ? (item.zhDesc || '') : (item.enDesc || item.zhDesc || '') }}</span>
        </a>
      </li>
    </ul>
    <p v-else class="empty-tip">
      <span v-show="lang === 'zh'">暂无友链，欢迎申请。</span>
      <span v-show="lang === 'en'">No links yet. Applications welcome.</span>
    </p>
  </div>
</template>

<style scoped>
.friend-links-page { max-width: 100%; }
.page-desc { color: #57606a; margin-bottom: 24px; font-size: 1rem; }
.friend-list { list-style: none; padding-left: 0; margin: 0; }
.friend-item { margin-bottom: 16px; }
.friend-link {
  display: block;
  padding: 16px 20px;
  background: #f6f8fa;
  border: 1px solid #eaeef2;
  border-radius: 12px;
  color: inherit;
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
}
.friend-link:hover {
  border-color: #1976d2;
  background: #f0f7ff;
  text-decoration: none;
}
.friend-name { font-weight: 600; color: #1a1a1a; display: block; margin-bottom: 4px; }
.friend-desc { font-size: 0.9375rem; color: #57606a; display: block; }
.empty-tip { color: #888; font-size: 0.9375rem; }
</style>
