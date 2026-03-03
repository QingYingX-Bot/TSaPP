<script setup>
import { useLang } from '../composables/useLang'
const { lang } = useLang()
</script>

<template>
  <div class="legal-page">
    <h1>
      <span v-show="lang === 'zh'">隐私政策</span>
      <span v-show="lang === 'en'">Privacy Policy</span>
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
      <span v-show="lang === 'zh'">一、概述</span>
      <span v-show="lang === 'en'">1. Overview</span>
    </h2>
    <p>
      <span v-show="lang === 'zh'">本隐私政策说明本机器人在运行过程中可能收集、使用、存储的数据类型与目的。我们仅为实现本机器人功能所必需的范围内的数据进行处理，并会采取合理措施保护您的信息安全。</span>
      <span v-show="lang === 'en'">This Privacy Policy describes the types and purposes of data that the Bot may collect, use and store when running. We process data only as necessary to provide the Bot's features and take reasonable measures to protect your information.</span>
    </p>

    <h2>
      <span v-show="lang === 'zh'">二、可能涉及的数据类型</span>
      <span v-show="lang === 'en'">2. Types of Data Involved</span>
    </h2>

    <h3><span v-show="lang === 'zh'">2.1 身份与账号相关</span><span v-show="lang === 'en'">2.1 Identity and Account</span></h3>
    <ul>
      <li><span v-show="lang === 'zh'"><strong>平台账号标识</strong>：QQ 号（user_id）、群号（group_id）、Telegram/Discord 等平台下的用户 ID（当您在使用对应平台的本机器人时）。</span><span v-show="lang === 'en'"><strong>Platform identifiers</strong>: QQ user_id, group_id, Telegram/Discord user IDs when you use the Bot on those platforms.</span></li>
      <li><span v-show="lang === 'zh'"><strong>展示用信息</strong>：昵称、群名片、头像等由平台提供的公开信息，用于回复、展示与功能逻辑（如 @ 提及、权限判断）。</span><span v-show="lang === 'en'"><strong>Display information</strong>: Nicknames, group names, avatars and other public info from platforms, used for replies, display and features (e.g. @ mentions, permission checks).</span></li>
    </ul>

    <h3><span v-show="lang === 'zh'">2.2 消息与交互内容</span><span v-show="lang === 'en'">2.2 Messages and Interaction</span></h3>
    <ul>
      <li><span v-show="lang === 'zh'"><strong>消息内容</strong>：您发送的文本、指令、@ 信息等，用于命令解析、回复生成与必要的日志记录（如故障排查）。</span><span v-show="lang === 'en'"><strong>Message content</strong>: Text, commands, @ mentions you send, used for command parsing, reply generation and necessary logging (e.g. troubleshooting).</span></li>
      <li><span v-show="lang === 'zh'"><strong>上下文</strong>：为完成您的指令可能涉及的对话上下文、回复内容。</span><span v-show="lang === 'en'"><strong>Context</strong>: Conversation context and replies involved in fulfilling your commands.</span></li>
    </ul>

    <h3><span v-show="lang === 'zh'">2.3 功能相关数据（视您使用的功能而定）</span><span v-show="lang === 'en'">2.3 Feature Data (Depending on Your Use)</span></h3>
    <ul>
      <li><span v-show="lang === 'zh'"><strong>游戏/第三方服务绑定</strong>：如您主动绑定的米游社、森空岛、抽卡链接等，用于为您提供游戏数据查询（原神、星铁、绝区零、终末地等）。</span><span v-show="lang === 'en'"><strong>Game/third-party bindings</strong>: e.g. miHoYo, gacha links you voluntarily bind, used to provide you with game data queries.</span></li>
      <li><span v-show="lang === 'zh'"><strong>业务数据</strong>：签到记录、抽卡记录、便签、面板数据等，用于在您使用相应功能时展示或统计。</span><span v-show="lang === 'en'"><strong>Business data</strong>: Check-in records, gacha records, notes, panel data, etc., used to display or aggregate when you use the relevant features.</span></li>
      <li><span v-show="lang === 'zh'"><strong>配置与偏好</strong>：您或群组内设置的偏好、白名单/黑名单等，用于提供个性化或权限控制。</span><span v-show="lang === 'en'"><strong>Configuration and preferences</strong>: Preferences, whitelist/blacklist you or the group set, used for personalization and access control.</span></li>
    </ul>

    <h2>
      <span v-show="lang === 'zh'">三、数据用途</span>
      <span v-show="lang === 'en'">3. Use of Data</span>
    </h2>
    <ul>
      <li><span v-show="lang === 'zh'">执行您的指令、提供查询与娱乐功能。</span><span v-show="lang === 'en'">Execute your commands and provide query and entertainment features.</span></li>
      <li><span v-show="lang === 'zh'">实现账号绑定、多账号切换、权限判断（如主人/黑名单）。</span><span v-show="lang === 'en'">Account binding, multi-account switching, permission checks (e.g. owner/blacklist).</span></li>
      <li><span v-show="lang === 'zh'">日志与故障排查（仅在必要范围内，并受内部策略约束）。</span><span v-show="lang === 'en'">Logging and troubleshooting (only as necessary and subject to internal policies).</span></li>
      <li><span v-show="lang === 'zh'">定时提醒、推送等您已使用或同意的功能。</span><span v-show="lang === 'en'">Scheduled reminders, notifications and other features you use or have agreed to.</span></li>
    </ul>

    <h2>
      <span v-show="lang === 'zh'">四、数据存储与保留</span>
      <span v-show="lang === 'en'">4. Storage and Retention</span>
    </h2>
    <ul>
      <li><span v-show="lang === 'zh'"><strong>存储位置</strong>：上述数据保存在运营者或运营者委托的服务器与存储中，并采取访问控制与安全措施。</span><span v-show="lang === 'en'"><strong>Storage location</strong>: The above data is stored on the Operator's or the Operator's designated servers and storage, with access control and security measures.</span></li>
      <li><span v-show="lang === 'zh'"><strong>保留时间</strong>：仅在为实现本机器人功能或法律法规所要求的期限内保留；非必要数据会定期清理或匿名化。</span><span v-show="lang === 'en'"><strong>Retention</strong>: Data is retained only as long as necessary for the Bot's features or as required by law; non-essential data is periodically purged or anonymized.</span></li>
      <li><span v-show="lang === 'zh'"><strong>不向无关第三方出售或共享</strong>：我们不会将您的个人信息出售给第三方。仅在实现功能所需（如调用游戏 API）或法律要求时，才会在最小必要范围内与第三方发生数据交互，且会遵守相关合规要求。</span><span v-show="lang === 'en'"><strong>No sale or sharing with unrelated third parties</strong>: We do not sell your personal information. We share data with third parties only to the minimum extent necessary to provide features (e.g. calling game APIs) or as required by law, in compliance with applicable rules.</span></li>
    </ul>

    <h2>
      <span v-show="lang === 'zh'">五、第三方与外部服务</span>
      <span v-show="lang === 'en'">5. Third Parties and External Services</span>
    </h2>
    <ul>
      <li><span v-show="lang === 'zh'">本机器人可能调用第三方 API（如米游社、森空岛、B 站等）以完成查询、签到、绑定等功能。</span><span v-show="lang === 'en'">The Bot may call third-party APIs (e.g. miHoYo, Bilibili) for queries, check-in, binding, etc.</span></li>
      <li><span v-show="lang === 'zh'">调用时可能传递平台账号标识、您主动绑定的 Cookie/Token 等，具体以各功能说明与第三方隐私政策为准。</span><span v-show="lang === 'en'">Calls may pass platform identifiers, cookies/tokens you have bound; see each feature's description and third-party privacy policies.</span></li>
      <li><span v-show="lang === 'zh'">我们会对接入的第三方进行合理评估，但无法控制第三方的数据实践，请您知悉相关风险。</span><span v-show="lang === 'en'">We reasonably assess third parties we integrate, but cannot control their data practices; please be aware of the associated risks.</span></li>
    </ul>

    <h2>
      <span v-show="lang === 'zh'">六、您的选择与权利</span>
      <span v-show="lang === 'en'">6. Your Choices and Rights</span>
    </h2>
    <ul>
      <li><span v-show="lang === 'zh'"><strong>使用即接受</strong>：与本机器人或其所在群组/频道交互，即表示您知悉并接受在必要范围内对上述数据的收集与使用。</span><span v-show="lang === 'en'"><strong>Use implies consent</strong>: Interacting with the Bot or its groups/channels means you acknowledge and accept the collection and use of the above data as necessary.</span></li>
      <li><span v-show="lang === 'zh'"><strong>停止使用</strong>：您可随时停止使用本机器人（如退出群组、取消关注、移除绑定）。停止使用后，可减少后续数据产生。</span><span v-show="lang === 'en'"><strong>Stopping use</strong>: You may stop using the Bot at any time (e.g. leave the group, unfollow, remove bindings). Doing so reduces further data collection.</span></li>
      <li><span v-show="lang === 'zh'"><strong>删除与更正</strong>：您可通过本机器人提供的命令（如「删除绑定」「删除 cred」等）删除绑定或部分数据；若需删除其他个人信息或行使访问、更正权，可通过本政策「变更与联系」中的方式联系我们。</span><span v-show="lang === 'en'"><strong>Deletion and correction</strong>: You can delete bindings or some data via the Bot's commands (e.g. "删除绑定", "删除 cred"); for other personal data deletion or access/correction rights, contact us as set out in "Changes and Contact" below.</span></li>
    </ul>

    <h2>
      <span v-show="lang === 'zh'">七、安全与免责</span>
      <span v-show="lang === 'en'">7. Security and Disclaimer</span>
    </h2>
    <ul>
      <li><span v-show="lang === 'zh'">我们采取合理的技术与管理措施，以降低信息泄露、篡改或丢失的风险。</span><span v-show="lang === 'en'">We take reasonable technical and organizational measures to reduce the risk of disclosure, alteration or loss of information.</span></li>
      <li><span v-show="lang === 'zh'">鉴于互联网环境的局限性，我们无法保证绝对安全。您理解并同意，在法律允许的范围内，因不可抗力、黑客攻击、您自身操作等原因导致的数据问题，运营者不承担赔偿责任；法律法规另有规定的除外。</span><span v-show="lang === 'en'">Given the nature of the internet, we cannot guarantee absolute security. You understand and agree that, to the extent permitted by law, the Operator is not liable for data issues caused by force majeure, hacking, or your own actions; except where the law provides otherwise.</span></li>
    </ul>

    <h2>
      <span v-show="lang === 'zh'">八、变更与联系</span>
      <span v-show="lang === 'en'">8. Changes and Contact</span>
    </h2>
    <ul>
      <li><span v-show="lang === 'zh'">本隐私政策可能随运营或法律要求而修订，以本页面最新版本为准。重大变更我们会通过本网站或合理方式提示。</span><span v-show="lang === 'en'">This Privacy Policy may be revised with operations or legal requirements; the latest version on this page applies. We will notify you of material changes via this website or other reasonable means.</span></li>
      <li><span v-show="lang === 'zh'">若您对隐私政策或您的个人信息有疑问、投诉或请求，请联系运营者 QingYingX(HInXe)，可通过本网站、项目仓库或约定渠道取得联系（如邮箱：qingyingx@099311.xyz）。</span><span v-show="lang === 'en'">For questions, complaints or requests about this policy or your personal information, contact the Operator QingYingX(HInXe) via this website, the project repository or agreed channels (e.g. email: qingyingx@099311.xyz).</span></li>
    </ul>

    <p class="footer-note">
      <span v-show="lang === 'zh'">本政策针对小米糕（XiaoMiGao）所涉及的数据实践进行说明，不替代您使用的各平台（QQ、Telegram、Discord 等）或第三方服务的单独条款。</span>
      <span v-show="lang === 'en'">This policy describes data practices for XiaoMiGao; it does not replace the separate terms of the platforms (QQ, Telegram, Discord, etc.) or third-party services you use.</span>
    </p>
  </div>
</template>

<style scoped>
.legal-page { max-width: 100%; }
.meta { color: #555; font-size: 0.9375rem; margin-bottom: 0.5em; }
.legal-page :deep(h1) { margin-bottom: 0.75em; }
.legal-page :deep(h2) { margin-top: 1.5em; margin-bottom: 0.5em; font-size: 1.125rem; }
.legal-page :deep(h3) { margin-top: 1em; margin-bottom: 0.35em; font-size: 1rem; font-weight: 600; }
.legal-page :deep(ul), .legal-page :deep(ol) { padding-left: 1.25em; }
.legal-page :deep(li) { margin-bottom: 0.5em; }
.footer-note { margin-top: 2em; padding-top: 1em; border-top: 1px solid #eee; font-size: 0.875rem; color: #666; }
</style>
