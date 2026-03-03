<script setup>
import { useLang } from '../composables/useLang'
const { lang } = useLang()
</script>

<template>
  <div class="legal-page">
    <h1>
      <span v-show="lang === 'zh'">服务条款</span>
      <span v-show="lang === 'en'">Terms of Service</span>
    </h1>
    <p class="meta">
      <span v-show="lang === 'zh'"><strong>生效日期</strong>：以项目发布或首次部署为准</span>
      <span v-show="lang === 'en'"><strong>Effective Date</strong>: As of project release or first deployment</span>
    </p>
    <p class="meta">
      <span v-show="lang === 'zh'"><strong>适用对象</strong>：使用小米糕（XiaoMiGao）（下称「本机器人」）的所有用户。本机器人由 QingYingX(HInXe)（以下简称「运营者」或「我们」）运营，本网站供用户查阅使用。</span>
      <span v-show="lang === 'en'"><strong>Applicable to</strong>: All users of XiaoMiGao (hereinafter "the Bot"). The Bot is operated by QingYingX(HInXe) (hereinafter "we" or "the Operator"); this website is for users to read and use.</span>
    </p>

    <h2>
      <span v-show="lang === 'zh'">一、服务性质与免责</span>
      <span v-show="lang === 'en'">1. Nature of Service and Disclaimer</span>
    </h2>
    <ol>
      <li>
        <span v-show="lang === 'zh'"><strong>个人使用</strong> — 本机器人仅供个人学习与娱乐使用。您使用本机器人所产生的一切后果（包括但不限于账号风险、数据丢失、第三方封禁、群组纠纷等）由您自行承担，运营者不承担任何责任。</span>
        <span v-show="lang === 'en'"><strong>Personal Use</strong> — The Bot is for personal learning and entertainment only. All consequences of your use (including but not limited to account risks, data loss, third-party bans, group disputes) are your own responsibility; the Operator assumes no liability.</span>
      </li>
      <li>
        <span v-show="lang === 'zh'"><strong>「按现状」提供</strong> — 本机器人以「现状」和「可用性」提供，不附带任何明示或默示保证。运营者不保证服务不中断、无错误或满足特定用途。</span>
        <span v-show="lang === 'en'"><strong>"As Is"</strong> — The Bot is provided "as is" and "as available" without any express or implied warranties. The Operator does not guarantee uninterrupted, error-free service or fitness for a particular purpose.</span>
      </li>
      <li>
        <span v-show="lang === 'zh'"><strong>平台规则与法律</strong> — 使用本机器人时，您必须遵守：腾讯 QQ、Telegram、Discord 等各平台的用户协议与社区规范；您所在地区适用的法律法规（包括但不限于数据保护、言论、未成年人保护等）。</span>
        <span v-show="lang === 'en'"><strong>Platform Rules and Law</strong> — When using the Bot you must comply with the user agreements and community guidelines of Tencent QQ, Telegram, Discord and other platforms, and with the laws and regulations of your jurisdiction (including but not limited to data protection, speech, and protection of minors).</span>
      </li>
    </ol>

    <h2>
      <span v-show="lang === 'zh'">二、使用规范</span>
      <span v-show="lang === 'en'">2. Acceptable Use</span>
    </h2>
    <ol>
      <li>
        <span v-show="lang === 'zh'"><strong>禁止用途</strong> — 您不得将本机器人用于：违法、欺诈、骚扰、spam、恶意刷屏或对他人造成困扰的行为；未经授权获取、传播他人账号、Cookie、Token 等敏感信息；破坏平台或第三方服务正常运行、规避安全机制等行为。</span>
        <span v-show="lang === 'en'"><strong>Prohibited Uses</strong> — You must not use the Bot for: illegal, fraudulent, harassing, spam, or other conduct that disturbs others; unauthorized acquisition or dissemination of others' accounts, cookies, tokens or other sensitive information; disrupting platforms or third-party services or circumventing security measures.</span>
      </li>
      <li>
        <span v-show="lang === 'zh'"><strong>群组/频道管理员</strong> — 若您将本机器人加入群组或频道并拥有管理权限，您应对该群组/频道内的使用行为负责，并合理设置权限与规范，避免滥用或对他人造成困扰。</span>
        <span v-show="lang === 'en'"><strong>Group/Channel Admins</strong> — If you add the Bot to a group or channel and have admin rights, you are responsible for use within that group/channel and should set permissions and rules reasonably to avoid abuse or harm to others.</span>
      </li>
      <li>
        <span v-show="lang === 'zh'"><strong>第三方功能</strong> — 本机器人可能通过插件调用第三方 API（如米游社、森空岛、B 站等）或存储绑定、抽卡记录等数据。使用相关功能即表示您接受该功能及所涉第三方的规则与风险，与第三方之间的纠纷与运营者无关。</span>
        <span v-show="lang === 'en'"><strong>Third-Party Features</strong> — The Bot may call third-party APIs (e.g. miHoYo, Bilibili) or store bindings, gacha records, etc. Using such features means you accept the rules and risks of those third parties; disputes with third parties are not the Operator's responsibility.</span>
      </li>
    </ol>

    <h2>
      <span v-show="lang === 'zh'">三、知识产权与其他</span>
      <span v-show="lang === 'en'">3. Intellectual Property and Other</span>
    </h2>
    <ol>
      <li>
        <span v-show="lang === 'zh'"><strong>知识产权</strong> — 本机器人的内容、功能与逻辑归运营者或相应权利人所有。您仅可在正常使用范围内使用本机器人，不得复制、篡改、反向工程或用于商业目的。</span>
        <span v-show="lang === 'en'"><strong>Intellectual Property</strong> — The Bot's content, features and logic are owned by the Operator or respective rights holders. You may only use the Bot within normal use; you may not copy, modify, reverse-engineer or use for commercial purposes.</span>
      </li>
      <li>
        <span v-show="lang === 'zh'"><strong>条款独立性</strong> — 若本条款部分内容被认定为无效或不可执行，不影响其余条款的效力。</span>
        <span v-show="lang === 'en'"><strong>Severability</strong> — If any part of these terms is held invalid or unenforceable, the rest remains in effect.</span>
      </li>
      <li>
        <span v-show="lang === 'zh'"><strong>解释与争议</strong> — 本条款的解释权归运营者 QingYingX(HInXe) 所有。因使用本机器人产生的争议，应优先通过友好协商解决。</span>
        <span v-show="lang === 'en'"><strong>Interpretation and Disputes</strong> — Interpretation of these terms is reserved by the Operator QingYingX(HInXe). Disputes arising from use of the Bot should first be resolved by good-faith negotiation.</span>
      </li>
      <li>
        <span v-show="lang === 'zh'"><strong>更新</strong> — 服务条款可能随运营需要而修订，以本页面最新版本为准。继续使用本机器人即视为接受修订后的条款。</span>
        <span v-show="lang === 'en'"><strong>Updates</strong> — These terms may be revised as needed; the latest version on this page applies. Continued use of the Bot constitutes acceptance of the revised terms.</span>
      </li>
    </ol>

    <h2>
      <span v-show="lang === 'zh'">四、终止与限制</span>
      <span v-show="lang === 'en'">4. Termination and Limitation</span>
    </h2>
    <ol>
      <li>
        <span v-show="lang === 'zh'"><strong>停止使用</strong> — 您可随时停止使用本机器人（如退出群组、取消关注或移除绑定）。停止使用后，您可通过本网站或约定渠道向我们申请删除或匿名化您的相关数据（法律法规另有规定的除外）。</span>
        <span v-show="lang === 'en'"><strong>Stopping Use</strong> — You may stop using the Bot at any time (e.g. leave the group, unfollow, or remove bindings). After that, you may contact us via this website or agreed channels to request deletion or anonymization of your related data (except where the law provides otherwise).</span>
      </li>
      <li>
        <span v-show="lang === 'zh'"><strong>运营者权利</strong> — 运营者保留在不另行通知的情况下修改、暂停或终止本机器人服务的权利。若因违规使用被限制或终止，运营者不承担赔偿责任。</span>
        <span v-show="lang === 'en'"><strong>Operator Rights</strong> — The Operator reserves the right to modify, suspend or terminate the Bot without notice. The Operator is not liable for compensation if your access is restricted or terminated due to violation of these terms.</span>
      </li>
    </ol>

    <p class="footer-note">
      <span v-show="lang === 'zh'">使用本机器人即表示您已阅读、理解并同意受本服务条款及 <router-link to="/privacy">隐私政策</router-link> 的约束。</span>
      <span v-show="lang === 'en'">Use of the Bot means you have read, understood and agree to be bound by these Terms of Service and the <router-link to="/privacy">Privacy Policy</router-link>.</span>
    </p>
  </div>
</template>

<style scoped>
.legal-page { max-width: 100%; }
.meta { color: #555; font-size: 0.9375rem; margin-bottom: 0.5em; }
.legal-page :deep(h1) { margin-bottom: 0.75em; }
.legal-page :deep(h2) { margin-top: 1.5em; margin-bottom: 0.5em; font-size: 1.125rem; }
.legal-page :deep(ol) { padding-left: 1.25em; }
.legal-page :deep(li) { margin-bottom: 0.75em; }
.footer-note { margin-top: 2em; padding-top: 1em; border-top: 1px solid #eee; font-size: 0.875rem; color: #666; }
.footer-note a { color: #1976d2; text-decoration: none; }
.footer-note a:hover { text-decoration: underline; }
</style>
