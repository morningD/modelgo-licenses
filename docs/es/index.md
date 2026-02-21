---
layout: home

hero:
  name: ModelGo Licenses
  text: Una forma estandar para la publicacion de modelos
  tagline: Licencias flexibles y estandarizadas diseñadas para modelos de IA

features:
  - title: 🚀 Explorar todas las licencias
    details: Explore las ocho variantes de licencias ModelGo, desde permisivas hasta estrictas, y encuentre la adecuada para su modelo.
    link: /es/get-started/using-modelgo-licenses
    linkText: Ver licencias
  - title: ✨ Ayudeme a elegir
    details: ¿No esta seguro de que licencia le conviene? Use nuestra vista de diferencias y Model Sheet para comparar opciones lado a lado.
    link: /es/get-started/how-to-choose
    linkText: Comparar opciones
  - title: 📖 Entendiendo ModelGo
    details: Conozca la filosofia de diseño, el alcance y la estructura del marco de licencias ModelGo.
    link: /es/learn-more/understanding-modelgo
    linkText: Mas informacion
---

## Hacia un mejor intercambio de modelos

Las **licencias ModelGo** ofrecen soluciones de licenciamiento al estilo de CreativeCommons para satisfacer sus necesidades especificas en la publicacion de modelos de IA. El objetivo de ModelGo es facilitar el <mark style="color:purple;">intercambio gestionado</mark> de modelos mientras se <mark style="color:purple;">protege la Propiedad Intelectual</mark>, logrando un equilibrio entre apertura y control.

## Actualizaciones recientes

<div class="updates-timeline">
  <div class="update-item">
    <span class="update-date">2026.2</span>
    <span class="update-content">Se revisaron MG0 y MG-BY y se reenviaron a <a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a>. Se retiro MG-BY-SA ya que podria no ser compatible con la <a href="https://opensource.org/osd">Open Source Definition</a>.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.9</span>
    <span class="update-content">MG0, MG-BY y MG-BY-SA han sido enviados para la aprobacion de <a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a>.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.7</span>
    <span class="update-content">Las licencias ModelGo fueron presentadas como charla oral en <a href="https://icml.cc/virtual/2025/oral/40181"><img src="/images/icml-logo.svg" class="inline-logo" alt="ICML">2025</a>.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.1</span>
    <span class="update-content">Las licencias ModelGo ahora estan alojadas en el <a href="https://ids.nus.edu.sg/modelgo.html"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> NUS Institute of Data Science</a> y el <a href="https://ai.nus.edu.sg/"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> NUS Artificial Intelligence Institute</a>.</span>
  </div>
</div>

<VideoEmbed url="https://drive.google.com/file/d/1BWLXb523KuWWZneGpvOjdsEuECsy4_4l/preview" />

<script setup>
import { ref, onBeforeUnmount } from 'vue'

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

// rAF throttle — batch pointer updates to once per frame
let rafId = 0
let pendingScale = 0
let pendingTx = 0
let pendingTy = 0
let needsUpdate = false

function flushUpdate() {
  rafId = 0
  if (!needsUpdate) return
  needsUpdate = false
  scale.value = pendingScale
  translateX.value = pendingTx
  translateY.value = pendingTy
}

function scheduleUpdate(s, tx, ty) {
  pendingScale = s
  pendingTx = tx
  pendingTy = ty
  needsUpdate = true
  if (!rafId) rafId = requestAnimationFrame(flushUpdate)
}

onBeforeUnmount(() => { if (rafId) cancelAnimationFrame(rafId) })

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
  window.dispatchEvent(new CustomEvent('lightbox-change', { detail: { open: true } }))
}

function closeLightbox() {
  lightboxOpen.value = false
  pointers.clear()
  pinching = false
  if (rafId) { cancelAnimationFrame(rafId); rafId = 0 }
  window.dispatchEvent(new CustomEvent('lightbox-change', { detail: { open: false } }))
}

function resetTransform() {
  scale.value = 2
  translateX.value = window.innerWidth * 0.05
  translateY.value = 0
  pendingScale = scale.value
  pendingTx = translateX.value
  pendingTy = translateY.value
}

function onWheel(e) {
  e.preventDefault()
  const delta = e.deltaY > 0 ? -0.15 : 0.15
  const s = Math.min(Math.max(0.5, scale.value + delta), 8)
  scheduleUpdate(s, translateX.value, translateY.value)
}

function onPointerDown(e) {
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY })
  if (pointers.size === 2) {
    pinching = true
    dragging.value = false
    pinchStartDist = getPinchDist()
    pinchStartScale = pendingScale || scale.value
  } else if (pointers.size === 1 && !pinching) {
    dragging.value = true
    dragStart.x = e.clientX
    dragStart.y = e.clientY
    dragStart.tx = pendingTx || translateX.value
    dragStart.ty = pendingTy || translateY.value
  }
  e.target.setPointerCapture(e.pointerId)
}

function onPointerMove(e) {
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY })
  if (pinching && pointers.size >= 2) {
    const dist = getPinchDist()
    if (pinchStartDist > 0) {
      const s = Math.min(Math.max(0.5, pinchStartScale * (dist / pinchStartDist)), 8)
      scheduleUpdate(s, pendingTx, pendingTy)
    }
  } else if (dragging.value && !pinching) {
    const tx = dragStart.tx + (e.clientX - dragStart.x)
    const ty = dragStart.ty + (e.clientY - dragStart.y)
    scheduleUpdate(pendingScale, tx, ty)
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
  <h3>Acerca de la imagen del banner</h3>
  <p>Este grafico visualiza el comportamiento de reutilizacion de modelos (dependencias de modelos) en los repositorios de Hugging Face. Cada modelo se representa como un nodo <mark style="color:purple;"><strong>Purpura</strong></mark>, mientras que los bordes de diferentes colores indican varios metodos de reutilizacion, incluyendo <mark style="color:red;"><strong>Finetune</strong></mark>, <mark style="color:orange;"><strong>Adapter</strong></mark>, <mark style="color:green;"><strong>Quantization</strong></mark> y <mark style="color:blue;"><strong>Merge</strong></mark>. A partir de este grafico, podemos observar dependencias complejas entre modelos.</p>
  <p>Nuestra vision es que, a medida que la reutilizacion de modelos se vuelve cada vez mas prevalente, los modelos publicados bajo diferentes licencias pueden entrar en conflicto entre si, lo que lleva a que mas repositorios enfrenten problemas de <strong>incumplimiento legal</strong>. Una de las misiones de la licencia ModelGo es promover un enfoque mas estandarizado para el intercambio de modelos. Este trabajo se presento como charla oral en <a href="https://icml.cc/virtual/2025/oral/40181">ICML 2025</a>.</p>
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
    <div class="banner-lightbox-hint">Desplazar/pellizcar para zoom &middot; Arrastrar para mover &middot; Doble clic para reiniciar</div>
  </div>
</Teleport>
