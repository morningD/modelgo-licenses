import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

const nav = (home: string, homeLink: string) => [
  { text: home, link: homeLink },
  { text: 'Paper', link: 'https://icml.cc/virtual/2025/oral/40181' }
]

const sidebar = (prefix: string, gs: string, lm: string, using: string, howTo: string, understanding: string, faq: string, disclaimer: string) => [
  {
    text: gs,
    items: [
      { text: `🚀 ${using}`, link: `${prefix}/get-started/using-modelgo-licenses` },
      { text: `✨ ${howTo}`, link: `${prefix}/get-started/how-to-choose` }
    ]
  },
  {
    text: lm,
    items: [
      { text: `📖 ${understanding}`, link: `${prefix}/learn-more/understanding-modelgo` },
      { text: `💬 ${faq}`, link: `${prefix}/learn-more/faq` },
      { text: `ℹ️ ${disclaimer}`, link: `${prefix}/learn-more/disclaimer` }
    ]
  }
]

export default defineConfig({
  title: 'ModelGo Licenses',
  description: 'A Standard Way for Model Publishing',
  base: '/',
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: 'https://www.modelgo.li'
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/mg-favicon.svg' }]
  ],

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: nav('Home', '/'),
        sidebar: sidebar('', 'Get Started', 'Learn More', 'Using ModelGo Licenses', 'How to Choose', 'Understanding ModelGo', 'FAQ', 'Disclaimer'),
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: nav('首页', '/zh/'),
        sidebar: sidebar('/zh', '快速开始', '了解更多', '使用 ModelGo 许可证', '如何选择', '理解 ModelGo', '常见问题', '免责声明'),
        outlineTitle: '本页目录',
        lastUpdatedText: '上次更新',
        docFooter: { prev: '上一页', next: '下一页' },
        darkModeSwitchLabel: '外观',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
      }
    },
    'zh-tw': {
      label: '繁體中文',
      lang: 'zh-TW',
      themeConfig: {
        nav: nav('首頁', '/zh-tw/'),
        sidebar: sidebar('/zh-tw', '快速開始', '了解更多', '使用 ModelGo 授權條款', '如何選擇', '理解 ModelGo', '常見問題', '免責聲明'),
        outlineTitle: '本頁目錄',
        lastUpdatedText: '上次更新',
        docFooter: { prev: '上一頁', next: '下一頁' },
        darkModeSwitchLabel: '外觀',
        returnToTopLabel: '返回頂部',
        sidebarMenuLabel: '選單',
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      themeConfig: {
        nav: nav('ホーム', '/ja/'),
        sidebar: sidebar('/ja', 'はじめに', '詳しく知る', 'ModelGo ライセンスの使い方', '選び方', 'ModelGo を理解する', 'よくある質問', '免責事項'),
        outlineTitle: '目次',
        lastUpdatedText: '最終更新',
        docFooter: { prev: '前のページ', next: '次のページ' },
        darkModeSwitchLabel: 'テーマ',
        returnToTopLabel: 'トップに戻る',
        sidebarMenuLabel: 'メニュー',
      }
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      themeConfig: {
        nav: nav('홈', '/ko/'),
        sidebar: sidebar('/ko', '시작하기', '더 알아보기', 'ModelGo 라이선스 사용법', '선택 방법', 'ModelGo 이해하기', '자주 묻는 질문', '면책 조항'),
        outlineTitle: '목차',
        lastUpdatedText: '마지막 업데이트',
        docFooter: { prev: '이전', next: '다음' },
        darkModeSwitchLabel: '테마',
        returnToTopLabel: '맨 위로',
        sidebarMenuLabel: '메뉴',
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      themeConfig: {
        nav: nav('Главная', '/ru/'),
        sidebar: sidebar('/ru', 'Начало работы', 'Узнать больше', 'Использование лицензий ModelGo', 'Как выбрать', 'Понимание ModelGo', 'Часто задаваемые вопросы', 'Отказ от ответственности'),
        outlineTitle: 'Содержание',
        lastUpdatedText: 'Последнее обновление',
        docFooter: { prev: 'Предыдущая', next: 'Следующая' },
        darkModeSwitchLabel: 'Тема',
        returnToTopLabel: 'Наверх',
        sidebarMenuLabel: 'Меню',
      }
    },
    es: {
      label: 'Español',
      lang: 'es',
      themeConfig: {
        nav: nav('Inicio', '/es/'),
        sidebar: sidebar('/es', 'Primeros pasos', 'Más información', 'Uso de las licencias ModelGo', 'Cómo elegir', 'Entendiendo ModelGo', 'Preguntas frecuentes', 'Aviso legal'),
        outlineTitle: 'En esta página',
        lastUpdatedText: 'Última actualización',
        docFooter: { prev: 'Anterior', next: 'Siguiente' },
        darkModeSwitchLabel: 'Tema',
        returnToTopLabel: 'Volver arriba',
        sidebarMenuLabel: 'Menú',
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      themeConfig: {
        nav: nav('Accueil', '/fr/'),
        sidebar: sidebar('/fr', 'Pour commencer', 'En savoir plus', 'Utiliser les licences ModelGo', 'Comment choisir', 'Comprendre ModelGo', 'FAQ', 'Avertissement'),
        outlineTitle: 'Sur cette page',
        lastUpdatedText: 'Dernière mise à jour',
        docFooter: { prev: 'Précédent', next: 'Suivant' },
        darkModeSwitchLabel: 'Thème',
        returnToTopLabel: 'Retour en haut',
        sidebarMenuLabel: 'Menu',
      }
    },
    ar: {
      label: 'العربية',
      lang: 'ar',
      dir: 'rtl',
      themeConfig: {
        nav: nav('الرئيسية', '/ar/'),
        sidebar: sidebar('/ar', 'البدء', 'معرفة المزيد', 'استخدام تراخيص ModelGo', 'كيفية الاختيار', 'فهم ModelGo', 'الأسئلة الشائعة', 'إخلاء المسؤولية'),
        outlineTitle: 'في هذه الصفحة',
        lastUpdatedText: 'آخر تحديث',
        docFooter: { prev: 'السابق', next: 'التالي' },
        darkModeSwitchLabel: 'المظهر',
        returnToTopLabel: 'العودة للأعلى',
        sidebarMenuLabel: 'القائمة',
      }
    },
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Xtra-Computing/ModelGo' },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>' }, link: 'https://scholar.google.com/citations?user=vEWocfwAAAAJ' }
    ],

    footer: {
      message: 'Content licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en">CC BY-NC-SA 4.0</a> (excluding license text files). All rights reserved.',
      copyright: 'ModelGo Licenses &copy; NUS Institute of Data Science | <a href="/learn-more/disclaimer">Disclaimer</a><br><span style="display:inline-flex;gap:12px;align-items:center;margin-top:4px;font-size:0.8em;opacity:0.5;letter-spacing:0.02em"><span style="display:inline-flex;align-items:center;gap:3px"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.7"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg><span id="busuanzi_value_site_pv">-</span> views</span><span style="display:inline-flex;align-items:center;gap:3px"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.7"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span id="busuanzi_value_site_uv">-</span> visitors</span></span>'
    },

    search: {
      provider: 'local'
    }
  }
})
