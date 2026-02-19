import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default defineConfig({
  title: 'ModelGo Licenses',
  description: 'A Standard Way for Model Publishing',
  base: '/',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/mg-favicon.svg' }]
  ],

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Paper', link: 'https://icml.cc/virtual/2025/oral/40181' }
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

    socialLinks: [],

    footer: {
      message: 'Content licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en">CC BY-NC-SA 4.0</a> (excluding license text files). All rights reserved.',
      copyright: 'ModelGo Licenses &copy; NUS Institute of Data Science | <a href="/learn-more/disclaimer">Disclaimer</a>'
    },

    search: {
      provider: 'local'
    }
  }
})
