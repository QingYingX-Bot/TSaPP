<script setup>
import { useLang } from '../composables/useLang'
const { lang } = useLang()
</script>

<template>
  <h1>
    <span v-show="lang === 'zh'">服务条款</span>
    <span v-show="lang === 'en'">Terms of Service for XiaoMiGao Self-Service Robot</span>
  </h1>
  <p>
    <span v-show="lang === 'zh'"><strong>最后更新日期：2026年3月2日</strong></span>
    <span v-show="lang === 'en'"><strong>Last Updated: March 2, 2026</strong></span>
  </p>

  <h2>
    <span v-show="lang === 'zh'">1. 接受条款</span>
    <span v-show="lang === 'en'">1. Acceptance of Terms</span>
  </h2>
  <p>
    <span v-show="lang === 'zh'">通过访问和使用 XiaoMiGao 自助机器人（包括游戏信息查询、娱乐互动等功能，以下简称“本服务”），您接受并同意受本服务条款的约束。如果您不同意本条款，请不要使用我们的机器人服务。</span>
    <span v-show="lang === 'en'">By accessing and using XiaoMiGao Self-Service Robot (including functions such as game information query and entertainment interaction, hereinafter referred to as "the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our robot services.</span>
  </p>

  <h2>
    <span v-show="lang === 'zh'">2. 服务描述</span>
    <span v-show="lang === 'en'">2. Description of Service</span>
  </h2>
  <p>
    <span v-show="lang === 'zh'">XiaoMiGao 是一款智能自助机器人，为用户提供游戏信息查询（攻略、角色信息、版本更新等）、娱乐互动（每日运势、表情包生成等）等在线工具和实用程序。我们的服务按“现状”提供，不提供任何形式的保证。</span>
    <span v-show="lang === 'en'">XiaoMiGao is an intelligent self-service robot that provides users with online tools and utilities such as game information query (guides, character information, version updates, etc.) and entertainment interaction (daily fortune, emoji generation, etc.). Our services are provided "as is" without warranties of any kind.</span>
  </p>

  <h2>
    <span v-show="lang === 'zh'">3. 用户责任</span>
    <span v-show="lang === 'en'">3. User Responsibilities</span>
  </h2>
  <p>
    <span v-show="lang === 'zh'">使用我们的自助机器人服务，您同意：</span>
    <span v-show="lang === 'en'">By using our self-service robot services, you agree to:</span>
  </p>
  <ul>
    <li><span v-show="lang === 'zh'">在需要时提供准确的信息，尤其是使用游戏信息查询功能时的相关验证信息</span><span v-show="lang === 'en'">Provide accurate information when required, especially relevant verification information when using the game information query function</span></li>
    <li><span v-show="lang === 'zh'">仅将服务用于合法目的，不得利用娱乐功能传播违法、低俗、暴力等不良信息</span><span v-show="lang === 'en'">Use the services only for lawful purposes, and shall not use entertainment functions to spread illegal, vulgar, violent and other harmful information</span></li>
    <li><span v-show="lang === 'zh'">不尝试干扰或破坏我们的机器人系统，包括但不限于恶意刷屏、滥用查询功能等</span><span v-show="lang === 'en'">Not attempt to disrupt or compromise our robot systems, including but not limited to malicious spamming and abuse of query functions</span></li>
    <li><span v-show="lang === 'zh'">未经允许，不使用自动化脚本、程序等工具批量访问我们的自助机器人服务</span><span v-show="lang === 'en'">Not use automated scripts, programs and other tools to access our self-service robot services in batches without permission</span></li>
    <li><span v-show="lang === 'zh'">遵守所有适用的法律法规，尤其是网络游戏、互联网信息服务相关法规</span><span v-show="lang === 'en'">Comply with all applicable laws and regulations, especially those related to online games and Internet information services</span></li>
  </ul>

  <h2>
    <span v-show="lang === 'zh'">4. 知识产权</span>
    <span v-show="lang === 'en'">4. Intellectual Property</span>
  </h2>
  <p>
    <span v-show="lang === 'zh'">XiaoMiGao 自助机器人的所有内容、功能和特性（包括游戏信息查询的数据源整理、娱乐功能的程序逻辑）均归 NebulaX 所有，并受国际版权、商标和其他知识产权法律的保护。用户仅可在授权范围内使用本服务，不得复制、篡改、分发机器人的核心功能。</span>
    <span v-show="lang === 'en'">All content, features and functionality of XiaoMiGao Self-Service Robot (including data source collation for game information queries and program logic for entertainment functions) are owned by NebulaX and are protected by international copyright, trademark, and other intellectual property laws. Users may only use the Service within the authorized scope, and shall not copy, tamper with, or distribute the core functions of the robot.</span>
  </p>

  <h2>
    <span v-show="lang === 'zh'">5. 责任限制</span>
    <span v-show="lang === 'en'">5. Limitation of Liability</span>
  </h2>
  <p>
    <span v-show="lang === 'zh'">在法律允许的最大范围内：</span>
    <span v-show="lang === 'en'">To the maximum extent permitted by law:</span>
  </p>
  <ul>
    <li><span v-show="lang === 'zh'">我们不对因游戏信息查询结果不准确、娱乐功能故障导致的任何间接、附带或后果性损害承担责任</span><span v-show="lang === 'en'">We are not liable for any indirect, incidental, or consequential damages caused by inaccurate game information query results or entertainment function failures</span></li>
    <li><span v-show="lang === 'zh'">我们的总赔偿责任不超过您过去12个月向我们支付的金额（如适用）</span><span v-show="lang === 'en'">Our total liability shall not exceed the amount you paid us in the past 12 months (if applicable)</span></li>
    <li><span v-show="lang === 'zh'">我们不保证自助机器人服务的不间断性或无错误运行，尤其是游戏信息更新期间可能出现的临时服务中断</span><span v-show="lang === 'en'">We do not guarantee uninterrupted or error-free operation of the self-service robot services, especially temporary service interruptions that may occur during game information updates</span></li>
  </ul>

  <h2>
    <span v-show="lang === 'zh'">6. 免责声明</span>
    <span v-show="lang === 'en'">6. Disclaimer of Warranties</span>
  </h2>
  <p>
    <span v-show="lang === 'zh'">我们的自助机器人服务按“现状”和“可用状态”提供，不提供任何形式的保证，无论是明示的还是默示的，包括但不限于：</span>
    <span v-show="lang === 'en'">Our self-service robot services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied, including but not limited to:</span>
  </p>
  <ul>
    <li><span v-show="lang === 'zh'">适销性（符合用户对游戏查询、娱乐功能的使用预期）</span><span v-show="lang === 'en'">Merchantability (meeting users' expectations for the use of game queries and entertainment functions)</span></li>
    <li><span v-show="lang === 'zh'">适用于特定用途（如特定游戏的信息查询需求）</span><span v-show="lang === 'en'">Fitness for a particular purpose (such as information query needs for specific games)</span></li>
    <li><span v-show="lang === 'zh'">不侵权（确保游戏信息查询内容不侵犯第三方知识产权）</span><span v-show="lang === 'en'">Non-infringement (ensuring that game information query content does not infringe on third-party intellectual property rights)</span></li>
    <li><span v-show="lang === 'zh'">结果的准确性或可靠性（尤其是实时更新的游戏信息）</span><span v-show="lang === 'en'">Accuracy or reliability of results (especially real-time updated game information)</span></li>
  </ul>

  <h2>
    <span v-show="lang === 'zh'">7. 赔偿</span>
    <span v-show="lang === 'en'">7. Indemnification</span>
  </h2>
  <p>
    <span v-show="lang === 'zh'">您同意赔偿并使 NebulaX 及其管理人员、董事、员工和代理人免受因您使用我们的自助机器人服务（包括滥用游戏查询功能、传播不良娱乐内容）或违反本条款而引起的任何索赔、损害或费用。</span>
    <span v-show="lang === 'en'">You agree to indemnify and hold harmless NebulaX and its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our self-service robot services (including abuse of game query functions and dissemination of harmful entertainment content) or violation of these terms.</span>
  </p>

  <h2>
    <span v-show="lang === 'zh'">8. 适用法律</span>
    <span v-show="lang === 'en'">8. Governing Law</span>
  </h2>
  <p>
    <span v-show="lang === 'zh'">本条款应受美国法律管辖并据其解释，不考虑其法律冲突规定（如涉及中国用户的核心权益，适用中国相关法律法规）。</span>
    <span v-show="lang === 'en'">These Terms shall be governed by and construed in accordance with the laws of United States, without regard to its conflict of law provisions (for core rights and interests of Chinese users, applicable Chinese laws and regulations shall apply).</span>
  </p>

  <h2>
    <span v-show="lang === 'zh'">9. 条款变更</span>
    <span v-show="lang === 'en'">9. Changes to Terms</span>
  </h2>
  <p>
    <span v-show="lang === 'zh'">我们保留随时修改本条款的权利。我们将通过以下方式通知用户重大变更（如游戏信息查询规则调整、娱乐功能范围变更等）：</span>
    <span v-show="lang === 'en'">We reserve the right to modify these terms at any time. We will notify users of significant changes (such as adjustments to game information query rules, changes to the scope of entertainment functions, etc.) by:</span>
  </p>
  <ul>
    <li><span v-show="lang === 'zh'">在我们的网站上发布通知</span><span v-show="lang === 'en'">Posting a notice on our website</span></li>
    <li><span v-show="lang === 'zh'">更新“最后更新”日期</span><span v-show="lang === 'en'">Updating the "Last Updated" date</span></li>
    <li><span v-show="lang === 'zh'">发送电子邮件通知（针对注册用户）</span><span v-show="lang === 'en'">Sending an email notification (for registered users)</span></li>
  </ul>
  <p>
    <span v-show="lang === 'zh'">变更后继续使用我们的自助机器人服务即表示接受新条款。</span>
    <span v-show="lang === 'en'">Continued use of our self-service robot services after changes constitutes acceptance of the new terms.</span>
  </p>

  <h2>
    <span v-show="lang === 'zh'">10. 终止</span>
    <span v-show="lang === 'en'">10. Termination</span>
  </h2>
  <p>
    <span v-show="lang === 'zh'">我们可立即终止或暂停您访问我们自助机器人服务的权利，无需事先通知，理由包括但不限于：滥用游戏查询功能、传播不良娱乐内容、违反本条款的任何规定。</span>
    <span v-show="lang === 'en'">We may terminate or suspend your access to our self-service robot services immediately, without prior notice, for any reason, including but not limited to: abuse of game query functions, dissemination of harmful entertainment content, violation of any provisions of these Terms.</span>
  </p>

  <h2>
    <span v-show="lang === 'zh'">11. 联系方式</span>
    <span v-show="lang === 'en'">11. Contact Information</span>
  </h2>
  <p>
    <span v-show="lang === 'zh'">如对本服务条款有任何疑问，或对游戏信息查询、娱乐功能有建议/反馈，请联系我们：</span>
    <span v-show="lang === 'en'">For questions about these Terms of Service, or suggestions/feedback on game information queries and entertainment functions, please contact us:</span>
  </p>
  <p>
    <span v-show="lang === 'zh'"><strong>NebulaX</strong><br>邮箱：qingyingx@099311.xyz</span>
    <span v-show="lang === 'en'"><strong>NebulaX</strong><br>Email: qingyingx@099311.xyz</span>
  </p>
</template>
