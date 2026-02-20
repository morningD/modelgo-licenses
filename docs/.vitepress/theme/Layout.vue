<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import LicenseSelector from '../components/LicenseSelector.vue'
import PixelRobots from '../components/PixelRobots.vue'

const { Layout } = DefaultTheme

// Fetch Busuanzi stats via JSONP after hydration, then update footer DOM directly.
// Avoids loading the busuanzi library which fights with Vue's v-html rendering.
onMounted(() => {
  const cb = '_busuanzi_cb_' + Date.now()
  window[cb] = (data) => {
    const pv = document.getElementById('busuanzi_value_site_pv')
    const uv = document.getElementById('busuanzi_value_site_uv')
    if (pv) pv.textContent = data.site_pv
    if (uv) uv.textContent = data.site_uv
    delete window[cb]
    el.remove()
  }
  const el = document.createElement('script')
  el.src = 'https://busuanzi.ibruce.info/busuanzi?jsonpCallback=' + cb
  document.head.appendChild(el)
})
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <LicenseSelector />
    </template>
    <template #layout-bottom>
      <ClientOnly>
        <PixelRobots />
      </ClientOnly>
    </template>
  </Layout>
</template>
