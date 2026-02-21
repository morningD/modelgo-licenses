---
layout: home

hero:
  name: ModelGo Licenses
  text: 모델 배포를 위한 표준 방법
  tagline: AI 모델을 위한 유연하고 표준화된 라이선스

features:
  - title: 🚀 모든 라이선스 탐색
    details: 관대한 것부터 엄격한 것까지, 8가지 ModelGo 라이선스 변형을 탐색하고 모델에 가장 적합한 것을 찾으세요.
    link: /ko/get-started/using-modelgo-licenses
    linkText: 라이선스 보기
  - title: ✨ 선택 도움
    details: 어떤 라이선스가 적합한지 모르겠나요? 차이점 보기와 Model Sheet를 사용하여 옵션을 나란히 비교하세요.
    link: /ko/get-started/how-to-choose
    linkText: 옵션 비교
  - title: 📖 ModelGo 이해하기
    details: ModelGo 라이선스 프레임워크의 설계 철학, 적용 범위 및 구조에 대해 알아보세요.
    link: /ko/learn-more/understanding-modelgo
    linkText: 자세히 알아보기
---

## 더 나은 모델 공유를 향하여

**ModelGo 라이선스**는 AI 모델 배포 시 특정 요구 사항을 충족하기 위해 CreativeCommons 스타일의 라이선스 솔루션을 제공합니다. ModelGo의 목표는 <mark style="color:purple;">지식 재산권을 보호</mark>하면서 모델의 <mark style="color:purple;">관리된 공유</mark>를 촉진하여 개방성과 통제 사이의 균형을 이루는 것입니다.

## 최근 업데이트

<div class="updates-timeline">
  <div class="update-item">
    <span class="update-date">2026.2</span>
    <span class="update-content">MG0 및 MG-BY를 수정하고 <a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a>에 재제출했습니다. MG-BY-SA는 <a href="https://opensource.org/osd">오픈 소스 정의</a>와 호환되지 않을 수 있어 철회했습니다.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.9</span>
    <span class="update-content">MG0, MG-BY, MG-BY-SA가 <a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a> 승인을 위해 제출되었습니다.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.7</span>
    <span class="update-content">ModelGo 라이선스가 <a href="https://icml.cc/virtual/2025/oral/40181"><img src="/images/icml-logo.svg" class="inline-logo" alt="ICML">2025</a>에서 구두 발표로 소개되었습니다.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.1</span>
    <span class="update-content">ModelGo 라이선스가 현재 <a href="https://ids.nus.edu.sg/modelgo.html"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> NUS 데이터 과학 연구소</a> 및 <a href="https://ai.nus.edu.sg/"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> NUS 인공지능 연구소</a>에서 운영되고 있습니다.</span>
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
  <h3>배너 이미지 소개</h3>
  <p>이 그래프는 Hugging Face 저장소에서의 모델 재사용 행동(모델 의존성)을 시각화합니다. 각 모델은 <mark style="color:purple;"><strong>보라색</strong></mark> 노드로 표현되며, 서로 다른 색상의 엣지는 <mark style="color:red;"><strong>파인튜닝</strong></mark>, <mark style="color:orange;"><strong>어댑터</strong></mark>, <mark style="color:green;"><strong>양자화</strong></mark>, <mark style="color:blue;"><strong>병합</strong></mark> 등 다양한 재사용 방법을 나타냅니다. 이 그래프를 통해 복잡한 모델 의존성을 관찰할 수 있습니다.</p>
  <p>우리의 비전은, 모델 재사용이 점점 보편화됨에 따라 서로 다른 라이선스로 배포된 모델들이 상호 충돌하여 더 많은 저장소가 <strong>법적 비준수</strong> 문제에 직면할 수 있다는 것입니다. ModelGo 라이선스의 사명 중 하나는 보다 표준화된 모델 공유 방식을 촉진하는 것입니다. 이 연구는 <a href="https://icml.cc/virtual/2025/oral/40181">ICML 2025</a>에서 구두 발표로 소개되었습니다.</p>
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
      <img src="/images/banner-hd.webp" alt="모델 의존성 그래프 시각화" draggable="false" />
    </div>
    <button class="banner-lightbox-close" @click="closeLightbox" aria-label="닫기">&times;</button>
    <div class="banner-lightbox-hint">스크롤/핀치로 확대/축소 &middot; 드래그하여 이동 &middot; 더블클릭하여 초기화</div>
  </div>
</Teleport>
