---
layout: home

hero:
  name: ModelGo Licenses
  text: Стандартный способ публикации моделей
  tagline: Гибкие стандартизированные лицензии для моделей ИИ

features:
  - title: 🚀 Обзор всех лицензий
    details: Изучите все восемь вариантов лицензий ModelGo, от разрешительных до строгих, и найдите подходящую для вашей модели.
    link: /ru/get-started/using-modelgo-licenses
    linkText: Просмотр лицензий
  - title: ✨ Помощь в выборе
    details: Не уверены, какая лицензия подходит? Используйте наш сравнительный вид и Model Sheet для сопоставления вариантов.
    link: /ru/get-started/how-to-choose
    linkText: Сравнить варианты
  - title: 📖 Понимание ModelGo
    details: Узнайте о философии проектирования, области применения и структуре лицензионной системы ModelGo.
    link: /ru/learn-more/understanding-modelgo
    linkText: Узнать больше
---

## К лучшему совместному использованию моделей

**Лицензии ModelGo** предоставляют решения в стиле CreativeCommons для лицензирования, отвечающие вашим специфическим потребностям при публикации моделей ИИ. Цель ModelGo -- содействовать <mark style="color:purple;">управляемому обмену</mark> моделями при <mark style="color:purple;">защите интеллектуальной собственности</mark>, обеспечивая баланс между открытостью и контролем.

## Последние обновления

<div class="updates-timeline">
  <div class="update-item">
    <span class="update-date">2026.2</span>
    <span class="update-content">Пересмотрены MG0 и MG-BY, повторно поданы в <a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a>. Отозвана MG-BY-SA, так как она может быть несовместима с <a href="https://opensource.org/osd">Open Source Definition</a>.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.9</span>
    <span class="update-content">MG0, MG-BY и MG-BY-SA поданы на утверждение в <a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a>.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.7</span>
    <span class="update-content">Лицензии ModelGo были представлены в формате устного доклада на <a href="https://icml.cc/virtual/2025/oral/40181"><img src="/images/icml-logo.svg" class="inline-logo" alt="ICML">2025</a>.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.1</span>
    <span class="update-content">Лицензии ModelGo теперь размещены в <a href="https://ids.nus.edu.sg/modelgo.html"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> NUS Institute of Data Science</a> и <a href="https://ai.nus.edu.sg/"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> NUS Artificial Intelligence Institute</a>.</span>
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
  <h3>О баннерном изображении</h3>
  <p>Этот граф визуализирует поведение повторного использования моделей (зависимости моделей) в репозиториях Hugging Face. Каждая модель представлена как <mark style="color:purple;"><strong>фиолетовый</strong></mark> узел, а рёбра разных цветов обозначают различные методы повторного использования, включая <mark style="color:red;"><strong>Finetune</strong></mark>, <mark style="color:orange;"><strong>Adapter</strong></mark>, <mark style="color:green;"><strong>Quantization</strong></mark> и <mark style="color:blue;"><strong>Merge</strong></mark>. На этом графе можно наблюдать сложные зависимости между моделями.</p>
  <p>Наше видение заключается в том, что по мере того как повторное использование моделей становится всё более распространённым, модели, опубликованные под разными лицензиями, могут конфликтовать друг с другом, что приводит к увеличению числа репозиториев с проблемами <strong>юридического несоответствия</strong>. Одна из миссий лицензий ModelGo -- способствовать более стандартизированному подходу к обмену моделями. Эта работа представлена в формате устного доклада на <a href="https://icml.cc/virtual/2025/oral/40181">ICML 2025</a>.</p>
</div>

<Teleport to="body">
  <div v-if="lightboxOpen" class="banner-lightbox" @click.self="closeLightbox" @wheel.prevent="onWheel">
    <div class="banner-lightbox-img"
      :style="{ transform: `translate(${translateX}px, ${translateY}px) scale(${scale})` }"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @dblclick="onDblClick">
      <img src="/images/banner-hd.webp" alt="Model dependency graph visualization" draggable="false" />
    </div>
    <button class="banner-lightbox-close" @click="closeLightbox" aria-label="Close">&times;</button>
    <div class="banner-lightbox-hint">Прокрутка для масштабирования &middot; Перетаскивание для перемещения &middot; Двойной клик для сброса</div>
  </div>
</Teleport>
