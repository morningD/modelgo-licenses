<script setup>
import DefaultTheme from 'vitepress/theme'
import LicenseSelector from '../components/LicenseSelector.vue'
import PixelRobots from '../components/PixelRobots.vue'

const { Layout } = DefaultTheme
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
