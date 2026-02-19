<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import LicenseSelector from '../components/LicenseSelector.vue'
import PixelRobots from '../components/PixelRobots.vue'

const { Layout } = DefaultTheme
const { lang } = useData()
</script>

<template>
  <Layout :key="lang">
    <template #home-hero-image>
      <LicenseSelector />
    </template>
    <template #layout-bottom>
      <PixelRobots />
    </template>
  </Layout>
</template>
