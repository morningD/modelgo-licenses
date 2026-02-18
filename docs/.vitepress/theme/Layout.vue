<script setup>
import DefaultTheme from 'vitepress/theme'
import LicenseSelector from '../components/LicenseSelector.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <LicenseSelector />
    </template>
  </Layout>
</template>
