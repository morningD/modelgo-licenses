---
layout: home

hero:
  name: ModelGo Licenses
  text: Une méthode standard pour la publication de modèles
  tagline: Des licences flexibles et standardisées conçues pour les modèles d'IA

features:
  - title: 🚀 Parcourir toutes les licences
    details: Explorez les huit variantes de licences ModelGo, des plus permissives aux plus strictes, et trouvez celle qui convient à votre modèle.
    link: /fr/get-started/using-modelgo-licenses
    linkText: Voir les licences
  - title: ✨ Aidez-moi à choisir
    details: Vous ne savez pas quelle licence choisir ? Utilisez notre vue comparative et le Model Sheet pour comparer les options côte à côte.
    link: /fr/get-started/how-to-choose
    linkText: Comparer les options
  - title: 📖 Comprendre ModelGo
    details: Découvrez la philosophie de conception, la portée et la structure du cadre de licences ModelGo.
    link: /fr/learn-more/understanding-modelgo
    linkText: En savoir plus
---

## Vers un meilleur partage des modèles

Les **licences ModelGo** fournissent des solutions de licence de type CreativeCommons pour répondre à vos besoins spécifiques en matière de publication de modèles d'IA. L'objectif de ModelGo est de faciliter le <mark style="color:purple;">partage encadré</mark> des modèles tout en <mark style="color:purple;">protégeant la propriété intellectuelle</mark>, trouvant un équilibre entre ouverture et contrôle.

## Mises à jour récentes

<div class="updates-timeline">
  <div class="update-item">
    <span class="update-date">2026.2</span>
    <span class="update-content">Révision de MG0 et MG-BY et nouvelle soumission à <a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a>. Retrait de MG-BY-SA car elle pourrait ne pas être compatible avec l'<a href="https://opensource.org/osd">Open Source Definition</a>.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.9</span>
    <span class="update-content">MG0, MG-BY et MG-BY-SA ont été soumises pour approbation auprès de l'<a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a>.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.7</span>
    <span class="update-content">Les licences ModelGo ont été présentées en communication orale à <a href="https://icml.cc/virtual/2025/oral/40181"><img src="/images/icml-logo.svg" class="inline-logo" alt="ICML">2025</a>.</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.1</span>
    <span class="update-content">Les licences ModelGo sont désormais hébergées par le <a href="https://ids.nus.edu.sg/modelgo.html"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> NUS Institute of Data Science</a> et le <a href="https://ai.nus.edu.sg/"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> NUS Artificial Intelligence Institute</a>.</span>
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
  <h3>À propos de l'image de bannière</h3>
  <p>Ce graphe visualise le comportement de réutilisation des modèles (dépendances entre modèles) dans les dépôts Hugging Face. Chaque modèle est représenté par un nœud <mark style="color:purple;"><strong>Violet</strong></mark>, tandis que les arêtes de différentes couleurs indiquent diverses méthodes de réutilisation, notamment le <mark style="color:red;"><strong>Fine-tuning</strong></mark>, l'<mark style="color:orange;"><strong>Adaptateur</strong></mark>, la <mark style="color:green;"><strong>Quantification</strong></mark> et la <mark style="color:blue;"><strong>Fusion</strong></mark>. Ce graphe permet d'observer des dépendances complexes entre les modèles.</p>
  <p>Notre vision est qu'à mesure que la réutilisation des modèles devient de plus en plus courante, les modèles publiés sous différentes licences peuvent entrer en conflit les uns avec les autres, entraînant davantage de dépôts confrontés à des problèmes de <strong>non-conformité juridique</strong>. L'une des missions de la licence ModelGo est de promouvoir une approche plus standardisée du partage des modèles. Ce travail est présenté en communication orale à <a href="https://icml.cc/virtual/2025/oral/40181">ICML 2025</a>.</p>
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
    <div class="banner-lightbox-hint">Défilement pour zoomer &middot; Glisser pour déplacer &middot; Double-clic pour réinitialiser</div>
  </div>
</Teleport>
