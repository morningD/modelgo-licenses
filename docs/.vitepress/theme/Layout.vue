<script setup>
import DefaultTheme from 'vitepress/theme'
import { defineAsyncComponent, computed, onMounted } from 'vue'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
const isHome = computed(() => frontmatter.value.layout === 'home')

const LicenseSelector = defineAsyncComponent(() => import('../components/LicenseSelector.vue'))
const PixelRobots = defineAsyncComponent(() => import('../components/PixelRobots.vue'))

// Fetch Busuanzi stats via JSONP after hydration, then update footer DOM directly.
// Avoids loading the busuanzi library which fights with Vue's v-html rendering.
onMounted(() => {
  const cb = '_busuanzi_cb_' + Date.now()
  const el = document.createElement('script')
  window[cb] = (data) => {
    const pv = document.getElementById('busuanzi_value_site_pv')
    const uv = document.getElementById('busuanzi_value_site_uv')
    if (pv) pv.textContent = data.site_pv
    if (uv) uv.textContent = data.site_uv
    delete window[cb]
    el.remove()
  }
  el.src = 'https://busuanzi.ibruce.info/busuanzi?jsonpCallback=' + cb
  el.onerror = () => { delete window[cb]; el.remove() }
  document.head.appendChild(el)
  setTimeout(() => { if (window[cb]) { delete window[cb]; el.remove() } }, 5000)
})
</script>

<template>
  <Layout>
    <template v-if="isHome" #home-hero-image>
      <LicenseSelector />
    </template>
    <template v-if="isHome" #layout-bottom>
      <ClientOnly>
        <PixelRobots />
      </ClientOnly>
    </template>
  </Layout>
</template>
