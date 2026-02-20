---
layout: home

hero:
  name: ModelGo Licenses
  text: A Standard Way for Model Publishing
  tagline: Flexible, standard licenses designed for AI models

features:
  - title: 🚀 Browse All Licenses
    details: Explore all eight ModelGo license variants, from permissive to stringent, and find the right one for your model.
    link: /get-started/using-modelgo-licenses
    linkText: View Licenses
  - title: ✨ Help Me Choose
    details: Not sure which license fits? Use our diff view and Model Sheet to compare options side by side.
    link: /get-started/how-to-choose
    linkText: Compare Options
  - title: 📖 Understanding ModelGo
    details: Learn about the design philosophy, scope, and structure behind the ModelGo license framework.
    link: /learn-more/understanding-modelgo
    linkText: Learn More
---

## Towards Better Model Sharing

**ModelGo licenses** provide CreativeCommons-style licensing solutions to meet your specific needs in publishing AI models. The goal of ModelGo is to facilitate <mark style="color:purple;">managed sharing</mark> of models while <mark style="color:purple;">protecting Intellectual Property</mark>, striking a balance between openness and control.

## Recent Updates

<div class="updates-timeline">
  <div class="update-item">
    <span class="update-date">2026.2</span>
    <span class="update-content">Revised MG0 and MG-BY and resubmitted them to <a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a>. Withdrew MG-BY-SA as it may not be compatible with the <a href="https://opensource.org/osd">Open Source Definition</a>.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.9</span>
    <span class="update-content">MG0, MG-BY, and MG-BY-SA have been submitted for <a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a> approval.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.7</span>
    <span class="update-content">ModelGo Licenses were presented as an oral talk at <a href="https://icml.cc/virtual/2025/oral/40181"><img src="/images/icml-logo.svg" class="inline-logo" alt="ICML">2025</a>.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.1</span>
    <span class="update-content">ModelGo Licenses are now anchored at <a href="https://ids.nus.edu.sg/modelgo.html"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> NUS Institute of Data Science</a> and <a href="https://ai.nus.edu.sg/"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> NUS Artificial Intelligence Institute</a>.</span>
  </div>
</div>

<VideoEmbed url="https://drive.google.com/file/d/1BWLXb523KuWWZneGpvOjdsEuECsy4_4l/preview" />

<script setup>
import { ref } from 'vue'

// --- Lightbox ---
const lightboxOpen = ref(false)
const scale = ref(2)
const translateX = ref(0)
const translateY = ref(0)
const dragging = ref(false)
const dragStart = { x: 0, y: 0, tx: 0, ty: 0 }

// Pinch-to-zoom state
const pointers = new Map()
let pinching = false
let pinchStartDist = 0
let pinchStartScale = 1

function getPinchDist() {
  const pts = [...pointers.values()]
  const dx = pts[1].x - pts[0].x
  const dy = pts[1].y - pts[0].y
  return Math.sqrt(dx * dx + dy * dy)
}

function openLightbox(e) {
  if (e.target.closest('a')) return
  lightboxOpen.value = true
  resetTransform()
}

function closeLightbox() {
  lightboxOpen.value = false
  pointers.clear()
  pinching = false
}

function resetTransform() {
  scale.value = 2
  translateX.value = window.innerWidth * 0.05
  translateY.value = 0
}

function onWheel(e) {
  e.preventDefault()
  const delta = e.deltaY > 0 ? -0.15 : 0.15
  scale.value = Math.min(Math.max(0.5, scale.value + delta), 8)
}

function onPointerDown(e) {
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY })
  if (pointers.size === 2) {
    pinching = true
    dragging.value = false
    pinchStartDist = getPinchDist()
    pinchStartScale = scale.value
  } else if (pointers.size === 1 && !pinching) {
    dragging.value = true
    dragStart.x = e.clientX
    dragStart.y = e.clientY
    dragStart.tx = translateX.value
    dragStart.ty = translateY.value
  }
  e.target.setPointerCapture(e.pointerId)
}

function onPointerMove(e) {
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY })
  if (pinching && pointers.size >= 2) {
    const dist = getPinchDist()
    if (pinchStartDist > 0) {
      scale.value = Math.min(Math.max(0.5, pinchStartScale * (dist / pinchStartDist)), 8)
    }
  } else if (dragging.value && !pinching) {
    translateX.value = dragStart.tx + (e.clientX - dragStart.x)
    translateY.value = dragStart.ty + (e.clientY - dragStart.y)
  }
}

function onPointerUp(e) {
  pointers.delete(e.pointerId)
  if (pointers.size < 2) pinching = false
  if (pointers.size === 0) dragging.value = false
}

function onDblClick() {
  resetTransform()
}
</script>

<div class="banner-about" @click="openLightbox">
  <h3>About the Banner Image</h3>
  <p>This graph visualizes model reuse behavior (model dependencies) in Hugging Face repositories. Each model is represented as a <mark style="color:purple;"><strong>Purple</strong></mark> node, while different-colored edges indicate various reuse methods, including <mark style="color:red;"><strong>Finetune</strong></mark>, <mark style="color:orange;"><strong>Adapter</strong></mark>, <mark style="color:green;"><strong>Quantization</strong></mark>, and <mark style="color:blue;"><strong>Merge</strong></mark>. From this graph, we can observe complex model dependencies.</p>
  <p>Our vision is that as model reuse becomes increasingly prevalent, models published under different licenses may conflict with one another, leading to more repositories facing <strong>legal non-compliance</strong> issues. One of the missions of the ModelGo License is to promote a more standardized approach to model sharing. This work is presented as an oral talk at <a href="https://icml.cc/virtual/2025/oral/40181">ICML 2025</a>.</p>
</div>

<Teleport to="body">
  <div v-if="lightboxOpen" class="banner-lightbox" @click.self="closeLightbox" @wheel.prevent="onWheel">
    <div class="banner-lightbox-img"
      :style="{ transform: `translate(${translateX}px, ${translateY}px) scale(${scale})` }"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
      @dblclick="onDblClick">
      <img src="/images/banner-hd.webp" alt="Model dependency graph visualization" draggable="false" />
    </div>
    <button class="banner-lightbox-close" @click="closeLightbox" aria-label="Close">&times;</button>
    <div class="banner-lightbox-hint">Scroll/pinch to zoom &middot; Drag to pan &middot; Double-click to reset</div>
  </div>
</Teleport>
