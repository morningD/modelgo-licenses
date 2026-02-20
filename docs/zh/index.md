---
layout: home

hero:
  name: ModelGo Licenses
  text: 模型发布的标准方式
  tagline: 为 AI 模型设计的灵活、标准化许可证

features:
  - title: 🚀 浏览所有许可证
    details: 探索所有八种 ModelGo 许可证变体，从宽松到严格，找到最适合您模型的许可证。
    link: /zh/get-started/using-modelgo-licenses
    linkText: 查看许可证
  - title: ✨ 帮我选择
    details: 不确定哪种许可证适合您？使用我们的差异视图和 Model Sheet 来并排比较各选项。
    link: /zh/get-started/how-to-choose
    linkText: 比较选项
  - title: 📖 理解 ModelGo
    details: 了解 ModelGo 许可证框架背后的设计理念、适用范围和结构。
    link: /zh/learn-more/understanding-modelgo
    linkText: 了解更多
---

## 迈向更好的模型共享

**ModelGo 许可证** 提供类似 CreativeCommons 风格的许可证解决方案，以满足您在发布 AI 模型时的特定需求。ModelGo 的目标是促进模型的 <mark style="color:purple;">受管理的共享</mark>，同时 <mark style="color:purple;">保护知识产权</mark>，在开放性和控制之间取得平衡。

## 最新动态

<div class="updates-timeline">
  <div class="update-item">
    <span class="update-date">2026.2</span>
    <span class="update-content">修订了 MG0 和 MG-BY 并重新提交至 <a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a>。撤回了 MG-BY-SA，因为它可能与 <a href="https://opensource.org/osd">开源定义</a> 不兼容。</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.9</span>
    <span class="update-content">MG0、MG-BY 和 MG-BY-SA 已提交 <a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a> 审批。</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.7</span>
    <span class="update-content">ModelGo 许可证在 <a href="https://icml.cc/virtual/2025/oral/40181"><img src="/images/icml-logo.svg" class="inline-logo" alt="ICML">2025</a> 上作为口头报告进行了展示。</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.1</span>
    <span class="update-content">ModelGo 许可证现已由 <a href="https://ids.nus.edu.sg/modelgo.html"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> 新加坡国立大学数据科学研究所</a> 和 <a href="https://ai.nus.edu.sg/"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> 新加坡国立大学人工智能研究所</a> 托管。</span>
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

function openLightbox(e) {
  if (e.target.closest('a')) return
  lightboxOpen.value = true
  resetTransform()
}

function closeLightbox() {
  lightboxOpen.value = false
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
  dragging.value = true
  dragStart.x = e.clientX
  dragStart.y = e.clientY
  dragStart.tx = translateX.value
  dragStart.ty = translateY.value
  e.target.setPointerCapture(e.pointerId)
}

function onPointerMove(e) {
  if (!dragging.value) return
  translateX.value = dragStart.tx + (e.clientX - dragStart.x)
  translateY.value = dragStart.ty + (e.clientY - dragStart.y)
}

function onPointerUp() {
  dragging.value = false
}

function onDblClick() {
  resetTransform()
}
</script>

<div class="banner-about" @click="openLightbox">
  <h3>关于横幅图片</h3>
  <p>此图可视化了 Hugging Face 仓库中的模型复用行为（模型依赖关系）。每个模型表示为一个 <mark style="color:purple;"><strong>紫色</strong></mark> 节点，不同颜色的边表示各种复用方法，包括 <mark style="color:red;"><strong>微调</strong></mark>、<mark style="color:orange;"><strong>适配器</strong></mark>、<mark style="color:green;"><strong>量化</strong></mark> 和 <mark style="color:blue;"><strong>合并</strong></mark>。从这张图中，我们可以观察到复杂的模型依赖关系。</p>
  <p>我们的愿景是，随着模型复用变得越来越普遍，在不同许可证下发布的模型可能会彼此冲突，导致更多的仓库面临 <strong>法律合规</strong> 问题。ModelGo 许可证的使命之一是促进更标准化的模型共享方式。这项工作在 <a href="https://icml.cc/virtual/2025/oral/40181">ICML 2025</a> 上作为口头报告进行了展示。</p>
</div>

<Teleport to="body">
  <div v-if="lightboxOpen" class="banner-lightbox" @click.self="closeLightbox" @wheel.prevent="onWheel">
    <div class="banner-lightbox-img"
      :style="{ transform: `translate(${translateX}px, ${translateY}px) scale(${scale})` }"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @dblclick="onDblClick">
      <img src="/images/banner-hd.webp" alt="模型依赖关系图可视化" draggable="false" />
    </div>
    <button class="banner-lightbox-close" @click="closeLightbox" aria-label="关闭">&times;</button>
    <div class="banner-lightbox-hint">滚动缩放 &middot; 拖拽平移 &middot; 双击重置</div>
  </div>
</Teleport>
