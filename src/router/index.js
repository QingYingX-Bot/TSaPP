import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue'), meta: { title: { zh: '首页', en: 'Home' } } },
  { path: '/demo', name: 'FeatureDemo', component: () => import('../views/FeatureDemo.vue'), meta: { title: { zh: '功能演示', en: 'Feature Demo' } } },
  { path: '/friends', name: 'FriendLinks', component: () => import('../views/FriendLinks.vue'), meta: { title: { zh: '友链', en: 'Friends & Links' } } },
  { path: '/privacy', name: 'Privacy', component: () => import('../views/Privacy.vue'), meta: { title: { zh: '隐私政策', en: 'Privacy Policy' } } },
  { path: '/terms', name: 'Terms', component: () => import('../views/Terms.vue'), meta: { title: { zh: '服务条款', en: 'Terms of Service' } } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  if (typeof document !== 'undefined') {
    const lang = localStorage.getItem('site-lang') || 'zh'
    const t = to.meta?.title
    document.title = t ? (lang === 'en' ? t.en : t.zh) + ' - XiaoMiGao' : 'XiaoMiGao'
  }
})

export default router
