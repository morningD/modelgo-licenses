import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default defineConfig({
  title: 'ModelGo Licenses',
  description: 'A Standard Way for Model Publishing',
  base: '/modelgo-licenses/',

  head: [
    ['link', { rel: 'icon', href: '/modelgo-licenses/images/cover.png' }]
  ],

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },

  themeConfig: {
    logo: '/images/cover.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/get-started/using-modelgo-licenses' },
      { text: 'Learn More', link: '/learn-more/understanding-modelgo' },
      { text: 'GitHub', link: 'https://github.com/Xtra-Computing/ModelGo' }
    ],

    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: 'Using ModelGo Licenses', link: '/get-started/using-modelgo-licenses' },
          { text: 'How to Choose', link: '/get-started/how-to-choose' }
        ]
      },
      {
        text: 'Learn More',
        items: [
          { text: 'Understanding ModelGo', link: '/learn-more/understanding-modelgo' },
          { text: 'FAQ', link: '/learn-more/faq' },
          { text: 'Disclaimer', link: '/learn-more/disclaimer' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Xtra-Computing/ModelGo' }
    ],

    footer: {
      message: 'Except where otherwise noted, the content on this website is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en">CC BY-NC-SA 4.0</a>.',
      copyright: 'ModelGo Licenses &copy; NUS Institute of Data Science'
    },

    search: {
      provider: 'local'
    }
  }
})
