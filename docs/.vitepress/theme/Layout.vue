<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import LicenseSelector from '../components/LicenseSelector.vue'
import PixelRobots from '../components/PixelRobots.vue'

const { Layout } = DefaultTheme

// Load Busuanzi after Vue hydration so the JSONP callback
// writes into the already-mounted footer DOM.
onMounted(() => {
  const s = document.createElement('script')
  s.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
  s.async = true
  document.head.appendChild(s)
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
