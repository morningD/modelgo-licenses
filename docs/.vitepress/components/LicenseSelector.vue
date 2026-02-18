<script setup lang="ts">
import { ref, computed } from 'vue'

interface FeatureBadge {
  key: string
  label: string
  fullName: string
  desc: string
  icon: string
  color: string
}

const allBadges: FeatureBadge[] = [
  { key: 'BY', label: 'BY', fullName: 'Attribution', desc: 'Must give credit, retain attribution and license in copies and derivatives.', icon: '🟢', color: '#16a34a' },
  { key: 'NC', label: 'NC', fullName: 'NonCommercial', desc: 'Must use and distribute for non-commercial purposes only.', icon: '🟡', color: '#ca8a04' },
  { key: 'ND', label: 'ND', fullName: 'NoDerivatives', desc: 'May not distribute any modified works based on the model.', icon: '🟠', color: '#ea580c' },
  { key: 'RAI', label: 'RAI', fullName: 'ResponsibleAI', desc: 'Must comply with responsible use of AI terms.', icon: '🟣', color: '#7c3aed' },
  { key: 'SA', label: 'SA', fullName: 'ShareAlike', desc: 'Must keep derivatives open source and apply the same license.', icon: '🔵', color: '#2563eb' },
  { key: 'MG0', label: 'Zero', fullName: '0 Conditions', desc: 'Almost no restrictions. Maximum sharing and freedom.', icon: '⚪', color: '#6b7280' },
]

const licenseMap: Record<string, string[]> = {
  'MG0': ['MG0'],
  'MG-BY': ['BY'],
  'MG-BY-SA': ['BY', 'SA'],
  'MG-BY-RAI': ['BY', 'RAI'],
  'MG-BY-NC': ['BY', 'NC'],
  'MG-BY-ND': ['BY', 'ND'],
  'MG-BY-NC-RAI': ['BY', 'NC', 'RAI'],
  'MG-BY-NC-ND': ['BY', 'NC', 'ND'],
}

const licenseDownloads: Record<string, string> = {
  'MG0': 'https://raw.githubusercontent.com/Xtra-Computing/ModelGo/main/MGL/V2/MG0/LICENSE',
  'MG-BY': 'https://raw.githubusercontent.com/Xtra-Computing/ModelGo/main/MGL/V2/MG-BY/LICENSE',
  'MG-BY-SA': 'https://raw.githubusercontent.com/Xtra-Computing/ModelGo/main/MGL/V2/MG-BY-SA/LICENSE',
  'MG-BY-RAI': 'https://raw.githubusercontent.com/Xtra-Computing/ModelGo/main/MGL/V2/MG-BY-RAI/LICENSE',
  'MG-BY-NC': 'https://raw.githubusercontent.com/Xtra-Computing/ModelGo/main/MGL/V2/MG-BY-NC/LICENSE',
  'MG-BY-ND': 'https://raw.githubusercontent.com/Xtra-Computing/ModelGo/main/MGL/V2/MG-BY-ND/LICENSE',
  'MG-BY-NC-RAI': 'https://raw.githubusercontent.com/Xtra-Computing/ModelGo/main/MGL/V2/MG-BY-NC-RAI/LICENSE',
  'MG-BY-NC-ND': 'https://raw.githubusercontent.com/Xtra-Computing/ModelGo/main/MGL/V2/MG-BY-NC-ND/LICENSE',
}

const licenses = Object.keys(licenseMap)
const selected = ref<string | null>(null)
const downloading = ref(false)

// Only the visible badges — TransitionGroup handles enter/leave/move
const visibleBadges = computed(() => {
  if (!selected.value) return allBadges
  const keys = new Set(licenseMap[selected.value])
  return allBadges.filter(b => keys.has(b.key))
})

function selectLicense(name: string) {
  selected.value = selected.value === name ? null : name
}

async function downloadLicense() {
  if (!selected.value || downloading.value) return
  downloading.value = true
  try {
    const url = licenseDownloads[selected.value]
    const resp = await fetch(url)
    const text = await resp.text()
    const blob = new Blob([text], { type: 'text/plain' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `${selected.value}-LICENSE.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(a.href)
  } catch {
    window.open(licenseDownloads[selected.value!], '_blank')
  } finally {
    downloading.value = false
  }
}
</script>

<template>
  <div class="ls-root">
    <p class="ls-hint">👇 Click a license to explore</p>

    <div class="ls-buttons">
      <button
        v-for="name in licenses"
        :key="name"
        :class="['ls-btn', { active: selected === name }]"
        @click="selectLicense(name)"
      >
        {{ name }}
      </button>
    </div>

    <div class="ls-badges-wrap">
      <TransitionGroup name="badge" tag="div" class="ls-badges">
        <div
          v-for="b in visibleBadges"
          :key="b.key"
          class="ls-badge"
          :style="{ '--badge-color': b.color }"
        >
          <span class="badge-icon">{{ b.icon }}</span>
          <div class="badge-text">
            <span class="badge-label">{{ b.label }}</span>
            <span class="badge-fullname">{{ b.fullName }}</span>
          </div>
          <div class="badge-desc">{{ b.desc }}</div>
        </div>
      </TransitionGroup>
    </div>

    <Transition name="slide-up">
      <button
        v-if="selected"
        class="ls-download"
        :disabled="downloading"
        @click="downloadLicense"
      >
        📄 {{ downloading ? 'Downloading...' : `Download ${selected} License` }}
      </button>
    </Transition>
  </div>
</template>

<style scoped>
.ls-root {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
}

.ls-hint {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0;
  font-weight: 500;
}

/* License buttons */
.ls-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.ls-btn {
  padding: 5px 14px;
  border: 1.5px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  user-select: none;
  line-height: 1.4;
}

.ls-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  transform: translateY(-1px);
  box-shadow: 0 3px 10px rgba(124, 58, 237, 0.12);
}

.ls-btn.active {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #fff;
  transform: translateY(-1px) scale(1.05);
  box-shadow: 0 3px 14px rgba(124, 58, 237, 0.25);
}

/* Badges container — fixed height prevents hero shake */
.ls-badges-wrap {
  min-height: 100px;
  width: 100%;
}

.ls-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start;
}

/* Individual badge */
.ls-badge {
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: var(--vp-c-bg-soft);
  border: 1.5px solid var(--vp-c-divider);
  border-radius: 10px;
  cursor: default;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.ls-badge:hover {
  border-color: var(--badge-color);
  box-shadow: 0 2px 12px color-mix(in srgb, var(--badge-color) 20%, transparent);
}

.badge-icon {
  font-size: 18px;
  flex-shrink: 0;
}

.badge-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.badge-label {
  font-size: 13px;
  font-weight: 800;
  color: var(--vp-c-text-1);
}

.badge-fullname {
  font-size: 11px;
  color: var(--badge-color);
  font-weight: 500;
}

/* Tooltip — absolute, doesn't affect layout */
.badge-desc {
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  width: 200px;
  padding: 8px 12px;
  background: var(--vp-c-bg-soft);
  border: 1.5px solid var(--badge-color);
  border-radius: 8px;
  font-size: 12px;
  line-height: 1.5;
  color: var(--badge-color);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 100;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.ls-badge:hover .badge-desc {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  pointer-events: auto;
}

/* === TransitionGroup animations === */

/* MOVE: remaining badges slide to new positions with spring physics */
.badge-move {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ENTER: badges spring up from below */
.badge-enter-active {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
              opacity 0.35s ease;
}

.badge-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.6);
}

/* LEAVE: badges fall with gravity + rotation */
.badge-leave-active {
  transition: transform 0.45s cubic-bezier(0.55, 0, 1, 0.45),
              opacity 0.35s ease;
  /* Take out of flow so remaining items can move */
  position: absolute;
}

.badge-leave-to {
  opacity: 0;
  transform: translateY(80px) rotate(15deg) scale(0.5);
}

/* Download button */
.ls-download {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 20px;
  background: var(--vp-c-brand-1);
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 3px 12px rgba(124, 58, 237, 0.25);
}

.ls-download:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 18px rgba(124, 58, 237, 0.35);
}

.ls-download:disabled {
  opacity: 0.7;
  cursor: wait;
}

/* Slide-up transition for download button */
.slide-up-enter-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.slide-up-leave-active {
  transition: all 0.25s ease;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(12px) scale(0.9);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
}
</style>
