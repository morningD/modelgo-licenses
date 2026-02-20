---
layout: home

hero:
  name: ModelGo Licenses
  text: 模型發布的標準方式
  tagline: 為 AI 模型設計的靈活、標準化授權條款

features:
  - title: 🚀 瀏覽所有授權條款
    details: 探索所有八種 ModelGo 授權條款變體，從寬鬆到嚴格，為您的模型找到最合適的授權方案。
    link: /zh-tw/get-started/using-modelgo-licenses
    linkText: 查看授權條款
  - title: ✨ 幫我選擇
    details: 不確定哪個授權條款適合？使用我們的差異視圖和 Model Sheet 來並排比較各選項。
    link: /zh-tw/get-started/how-to-choose
    linkText: 比較選項
  - title: 📖 理解 ModelGo
    details: 了解 ModelGo 授權條款框架背後的設計理念、適用範圍和結構。
    link: /zh-tw/learn-more/understanding-modelgo
    linkText: 了解更多
---

## 邁向更好的模型共享

**ModelGo 授權條款**提供類似 CreativeCommons 風格的授權方案，以滿足您在發布 AI 模型時的特定需求。ModelGo 的目標是促進模型的<mark style="color:purple;">有管理的共享</mark>，同時<mark style="color:purple;">保護智慧財產權</mark>，在開放性與控制權之間取得平衡。

## 最新動態

<div class="updates-timeline">
  <div class="update-item">
    <span class="update-date">2026.2</span>
    <span class="update-content">修訂了 MG0 和 MG-BY 並重新提交至 <a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a>。撤回了 MG-BY-SA，因其可能與<a href="https://opensource.org/osd">開源定義</a>不相容。</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.9</span>
    <span class="update-content">MG0、MG-BY 和 MG-BY-SA 已提交至 <a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a> 審批。</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.7</span>
    <span class="update-content">ModelGo 授權條款在 <a href="https://icml.cc/virtual/2025/oral/40181"><img src="/images/icml-logo.svg" class="inline-logo" alt="ICML">2025</a> 上以口頭報告形式發表。</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.1</span>
    <span class="update-content">ModelGo 授權條款現已落戶 <a href="https://ids.nus.edu.sg/modelgo.html"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> NUS 數據科學研究院</a>和 <a href="https://ai.nus.edu.sg/"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> NUS 人工智能研究院</a>。</span>
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
  <h3>關於橫幅圖片</h3>
  <p>此圖可視化了 Hugging Face 儲存庫中的模型重用行為（模型依賴關係）。每個模型以<mark style="color:purple;"><strong>紫色</strong></mark>節點表示，不同顏色的邊代表各種重用方式，包括<mark style="color:red;"><strong>微調</strong></mark>、<mark style="color:orange;"><strong>適配器</strong></mark>、<mark style="color:green;"><strong>量化</strong></mark>和<mark style="color:blue;"><strong>合併</strong></mark>。從圖中我們可以觀察到複雜的模型依賴關係。</p>
  <p>我們的願景是：隨著模型重用日益普及，在不同授權條款下發布的模型可能會相互衝突，導致越來越多的儲存庫面臨<strong>法律合規</strong>問題。ModelGo 授權條款的使命之一是促進更加標準化的模型共享方式。這項工作在 <a href="https://icml.cc/virtual/2025/oral/40181">ICML 2025</a> 上以口頭報告形式發表。</p>
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
    <div class="banner-lightbox-hint">滾動/雙指縮放 &middot; 拖曳平移 &middot; 雙擊重置</div>
  </div>
</Teleport>
