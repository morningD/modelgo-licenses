---
layout: home

hero:
  name: ModelGo Licenses
  text: طريقة معيارية لنشر النماذج
  tagline: تراخيص مرنة ومعيارية مصممة لنماذج الذكاء الاصطناعي

features:
  - title: "\U0001F680 استعراض جميع التراخيص"
    details: استكشف جميع المتغيرات الثمانية لتراخيص ModelGo، من المتساهلة إلى الصارمة، واعثر على الترخيص المناسب لنموذجك.
    link: /ar/get-started/using-modelgo-licenses
    linkText: عرض التراخيص
  - title: "\u2728 ساعدني في الاختيار"
    details: غير متأكد من الترخيص المناسب؟ استخدم عرض الفروقات وModel Sheet لمقارنة الخيارات جنبًا إلى جنب.
    link: /ar/get-started/how-to-choose
    linkText: مقارنة الخيارات
  - title: "\U0001F4D6 فهم ModelGo"
    details: تعرف على فلسفة التصميم والنطاق والهيكل الكامن وراء إطار تراخيص ModelGo.
    link: /ar/learn-more/understanding-modelgo
    linkText: اعرف المزيد
---

## نحو مشاركة أفضل للنماذج

توفر **تراخيص ModelGo** حلول ترخيص على غرار CreativeCommons لتلبية احتياجاتك المحددة في نشر نماذج الذكاء الاصطناعي. هدف ModelGo هو تسهيل <mark style="color:purple;">المشاركة المُدارة</mark> للنماذج مع <mark style="color:purple;">حماية الملكية الفكرية</mark>، وتحقيق التوازن بين الانفتاح والتحكم.

## آخر التحديثات

<div class="updates-timeline">
  <div class="update-item">
    <span class="update-date">2026.2</span>
    <span class="update-content">تمت مراجعة MG0 وMG-BY وإعادة تقديمهما إلى <a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a>. تم سحب MG-BY-SA لأنه قد لا يكون متوافقًا مع <a href="https://opensource.org/osd">تعريف المصدر المفتوح</a>.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.9</span>
    <span class="update-content">تم تقديم MG0 وMG-BY وMG-BY-SA للحصول على موافقة <a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a>.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.7</span>
    <span class="update-content">تم تقديم تراخيص ModelGo كعرض شفهي في <a href="https://icml.cc/virtual/2025/oral/40181"><img src="/images/icml-logo.svg" class="inline-logo" alt="ICML">2025</a>.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.1</span>
    <span class="update-content">تراخيص ModelGo مستضافة الآن في <a href="https://ids.nus.edu.sg/modelgo.html"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> معهد علوم البيانات بجامعة سنغافورة الوطنية</a> و<a href="https://ai.nus.edu.sg/"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> معهد الذكاء الاصطناعي بجامعة سنغافورة الوطنية</a>.</span>
  </div>
</div>

<VideoEmbed url="https://drive.google.com/file/d/1BWLXb523KuWWZneGpvOjdsEuECsy4_4l/preview" />

<script setup>
import { ref, onBeforeUnmount } from 'vue'

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
  <h3>حول صورة الشعار</h3>
  <p>يعرض هذا الرسم البياني سلوك إعادة استخدام النماذج (تبعيات النماذج) في مستودعات Hugging Face. يُمثَّل كل نموذج كعقدة <mark style="color:purple;"><strong>بنفسجية</strong></mark>، بينما تشير الحواف المختلفة الألوان إلى طرق إعادة الاستخدام المتنوعة، بما في ذلك <mark style="color:red;"><strong>الضبط الدقيق</strong></mark>، و<mark style="color:orange;"><strong>المحول</strong></mark>، و<mark style="color:green;"><strong>التكميم</strong></mark>، و<mark style="color:blue;"><strong>الدمج</strong></mark>. من هذا الرسم البياني، يمكننا ملاحظة تبعيات النماذج المعقدة.</p>
  <p>رؤيتنا هي أنه مع انتشار إعادة استخدام النماذج بشكل متزايد، قد تتعارض النماذج المنشورة بموجب تراخيص مختلفة مع بعضها البعض، مما يؤدي إلى مواجهة المزيد من المستودعات لمشاكل <strong>عدم الامتثال القانوني</strong>. إحدى مهام ترخيص ModelGo هي تعزيز نهج أكثر معيارية لمشاركة النماذج. تم تقديم هذا العمل كعرض شفهي في <a href="https://icml.cc/virtual/2025/oral/40181">ICML 2025</a>.</p>
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
      <img src="/images/banner-hd.webp" alt="تصور رسم بياني لتبعيات النماذج" draggable="false" />
    </div>
    <button class="banner-lightbox-close" @click="closeLightbox" aria-label="إغلاق">&times;</button>
    <div class="banner-lightbox-hint">مرر/اقرص للتكبير &middot; اسحب للتحريك &middot; انقر مرتين لإعادة التعيين</div>
  </div>
</Teleport>
