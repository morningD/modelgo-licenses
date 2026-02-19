import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default defineConfig({
  title: 'ModelGo Licenses',
  description: 'A Standard Way for Model Publishing',
  base: '/modelgo-licenses/',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/modelgo-licenses/mg-favicon.svg' }]
  ],

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/Xtra-Computing/ModelGo' }
    ],

    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: '🚀 Using ModelGo Licenses', link: '/get-started/using-modelgo-licenses' },
          { text: '✨ How to Choose', link: '/get-started/how-to-choose' }
        ]
      },
      {
        text: 'Learn More',
        items: [
          { text: '📖 Understanding ModelGo', link: '/learn-more/understanding-modelgo' },
          { text: '📪 FAQ', link: '/learn-more/faq' },
          { text: '📌 Disclaimer', link: '/learn-more/disclaimer' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Xtra-Computing/ModelGo' }
    ],

    footer: {
      message: 'Content licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en">CC BY-NC-SA 4.0</a> (excluding license text files). All rights reserved.',
      copyright: 'ModelGo Licenses &copy; NUS Institute of Data Science | <a href="/modelgo-licenses/learn-more/disclaimer">Disclaimer</a>'
    },

    search: {
      provider: 'local'
    }
  }
})
