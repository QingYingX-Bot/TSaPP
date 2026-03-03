<script setup>
import { useLang } from '../composables/useLang'
const { lang } = useLang()
</script>

<template>
  <h1>
    <span v-show="lang === 'zh'">欢迎使用 XiaoMiGao 自助机器人</span>
    <span v-show="lang === 'en'">Welcome to XiaoMiGao Self-Service Robot</span>
  </h1>
  <p>
    <span v-show="lang === 'zh'">XiaoMiGao 是由 QingYingX(HInXe) 开发的智能自助机器人，致力于为用户提供便捷、有趣的智能服务体验。</span>
    <span v-show="lang === 'en'">XiaoMiGao is an intelligent self-service robot developed by QingYingX (HInXe), committed to providing users with a convenient and interesting intelligent service experience.</span>
  </p>

  <h2>
    <span v-show="lang === 'zh'">✨ 核心功能</span>
    <span v-show="lang === 'en'">✨ Core Features</span>
  </h2>
  <ul class="features">
    <li>
      <span v-show="lang === 'zh'"><strong>游戏信息查询</strong>：快速查询各类游戏的攻略、角色信息、版本更新、活动公告等内容</span>
      <span v-show="lang === 'en'"><strong>Game Information Query</strong>: Quickly query strategies, character information, version updates, event announcements and other content for various games</span>
    </li>
    <li>
      <span v-show="lang === 'zh'"><strong>娱乐互动功能</strong>：提供每日运势，表情包生成等休闲娱乐服务</span>
      <span v-show="lang === 'en'"><strong>Entertainment Interactive Functions</strong>: Provide casual entertainment services such as daily fortune, emoji generation, etc.</span>
    </li>
  </ul>

  <p>
    <span v-show="lang === 'zh'">使用 XiaoMiGao 自助机器人前，请仔细阅读我们的 <router-link to="/privacy">隐私政策</router-link> 和 <router-link to="/terms">服务条款</router-link>，了解我们对用户信息的处理规则。</span>
    <span v-show="lang === 'en'">Before using the XiaoMiGao self-service robot, please carefully read our <router-link to="/privacy">Privacy Policy</router-link> and <router-link to="/terms">Terms of Service</router-link> to understand our rules for processing user information.</span>
  </p>
  <p>
    <span v-show="lang === 'zh'">如有任何问题、建议或反馈，可通过邮箱 <strong>qingyingx@099311.xyz</strong> 联系我们。</span>
    <span v-show="lang === 'en'">If you have any questions, suggestions or feedback, please contact us via email at <strong>qingyingx@099311.xyz</strong>.</span>
  </p>
</template>
