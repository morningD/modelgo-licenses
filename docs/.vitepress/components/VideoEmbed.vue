<script setup lang="ts">
defineProps<{
  url: string
  caption?: string
}>()
</script>

<template>
  <div class="video-embed">
    <iframe
      :src="url"
      allow="autoplay; encrypted-media"
      allowfullscreen
    />
    <p v-if="caption" class="caption">{{ caption }}</p>
  </div>
</template>
