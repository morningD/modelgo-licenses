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
      title="Embedded video"
      loading="lazy"
      allow="autoplay; encrypted-media"
      allowfullscreen
    />
    <p v-if="caption" class="caption">{{ caption }}</p>
  </div>
</template>
