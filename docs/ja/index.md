---
layout: home

hero:
  name: ModelGo Licenses
  text: モデル公開の標準的な方法
  tagline: AIモデルのための柔軟で標準化されたライセンス

features:
  - title: 🚀 すべてのライセンスを見る
    details: 8つのModelGoライセンスバリエーションを探索し、寛容なものから厳格なものまで、あなたのモデルに最適なものを見つけましょう。
    link: /ja/get-started/using-modelgo-licenses
    linkText: ライセンスを見る
  - title: ✨ 選び方ガイド
    details: どのライセンスが適しているかわからない？差分ビューとModel Sheetを使って、オプションを並べて比較しましょう。
    link: /ja/get-started/how-to-choose
    linkText: オプションを比較
  - title: 📖 ModelGoを理解する
    details: ModelGoライセンスフレームワークの設計思想、適用範囲、構造について学びましょう。
    link: /ja/learn-more/understanding-modelgo
    linkText: 詳しく知る
---

## より良いモデル共有に向けて

**ModelGoライセンス**は、AIモデルの公開における特定のニーズを満たすために、CreativeCommonsスタイルのライセンスソリューションを提供します。ModelGoの目標は、<mark style="color:purple;">知的財産の保護</mark>を行いながら、モデルの<mark style="color:purple;">管理された共有</mark>を促進し、オープン性とコントロールのバランスを取ることです。

## 最新情報

<div class="updates-timeline">
  <div class="update-item">
    <span class="update-date">2026.2</span>
    <span class="update-content">MG0とMG-BYを改訂し、<a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a>に再提出しました。MG-BY-SAは<a href="https://opensource.org/osd">オープンソースの定義</a>と互換性がない可能性があるため取り下げました。</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.9</span>
    <span class="update-content">MG0、MG-BY、MG-BY-SAが<a href="https://opensource.org/"><img src="/images/osi-logo.svg" class="inline-logo" alt="OSI"> OSI</a>の承認申請に提出されました。</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.7</span>
    <span class="update-content">ModelGoライセンスが<a href="https://icml.cc/virtual/2025/oral/40181"><img src="/images/icml-logo.svg" class="inline-logo" alt="ICML">2025</a>で口頭発表されました。</span>
  </div>
  <div class="update-item">
    <span class="update-date">2025.1</span>
    <span class="update-content">ModelGoライセンスが<a href="https://ids.nus.edu.sg/modelgo.html"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> NUS Institute of Data Science</a>および<a href="https://ai.nus.edu.sg/"><img src="/images/nus-logo.svg" class="inline-logo" alt="NUS"> NUS Artificial Intelligence Institute</a>に正式に設置されました。</span>
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
  <h3>バナー画像について</h3>
  <p>このグラフは、Hugging Faceリポジトリにおけるモデルの再利用行動（モデル依存関係）を可視化したものです。各モデルは<mark style="color:purple;"><strong>紫色</strong></mark>のノードとして表現され、異なる色のエッジが<mark style="color:red;"><strong>ファインチューニング</strong></mark>、<mark style="color:orange;"><strong>アダプター</strong></mark>、<mark style="color:green;"><strong>量子化</strong></mark>、<mark style="color:blue;"><strong>マージ</strong></mark>などの様々な再利用方法を示しています。このグラフから、複雑なモデル依存関係を観察することができます。</p>
  <p>私たちのビジョンは、モデルの再利用がますます普及するにつれ、異なるライセンスの下で公開されたモデル同士が互いに矛盾し、より多くのリポジトリが<strong>法的な非準拠</strong>の問題に直面するようになるということです。ModelGoライセンスの使命の一つは、モデル共有においてより標準化されたアプローチを推進することです。この研究は<a href="https://icml.cc/virtual/2025/oral/40181">ICML 2025</a>で口頭発表されています。</p>
</div>

<Teleport to="body">
  <div v-if="lightboxOpen" class="banner-lightbox" @click.self="closeLightbox" @wheel.prevent="onWheel">
    <div class="banner-lightbox-img"
      :style="{ transform: `translate(${translateX}px, ${translateY}px) scale(${scale})` }"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @dblclick="onDblClick">
      <img src="/images/banner-hd.png" alt="モデル依存関係グラフの可視化" draggable="false" />
    </div>
    <button class="banner-lightbox-close" @click="closeLightbox" aria-label="閉じる">&times;</button>
    <div class="banner-lightbox-hint">スクロールでズーム &middot; ドラッグで移動 &middot; ダブルクリックでリセット</div>
  </div>
</Teleport>
