<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import { useData } from 'vitepress'
import { i18n } from './license-i18n'

const { lang } = useData()

interface FeatureBadge {
  key: string
  label: string
  fullName: string
  desc: string
  icon: string
  color: string
}

function t(key: string): string {
  const locale = i18n[lang.value] || i18n['en']
  return (locale as any)[key] || (i18n['en'] as any)[key] || key
}

function getBadgeTranslation(badgeKey: string): { fullName: string; desc: string } {
  const locale = i18n[lang.value] || i18n['en']
  return locale.badges[badgeKey] || i18n['en'].badges[badgeKey]
}

const badgeBase: { key: string; label: string; icon: string; color: string }[] = [
  { key: 'BY', label: 'BY', icon: '🟢', color: '#16a34a' },
  { key: 'NC', label: 'NC', icon: '🟡', color: '#ca8a04' },
  { key: 'ND', label: 'ND', icon: '🟠', color: '#ea580c' },
  { key: 'RAI', label: 'RAI', icon: '🟣', color: '#7c3aed' },
  { key: 'SA', label: 'SA', icon: '🔵', color: '#2563eb' },
  { key: 'MG0', label: 'Zero', icon: '⚪', color: '#6b7280' },
]

const allBadges = computed<FeatureBadge[]>(() =>
  badgeBase.map(b => ({
    ...b,
    fullName: getBadgeTranslation(b.key).fullName,
    desc: getBadgeTranslation(b.key).desc,
  }))
)

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

const licenseReadme: Record<string, string> = {
  'MG0': `### Model License:

This model is licensed under the ModelGo Zero License, Version 2.0 (MG0-2.0);
you may use this model only in compliance with the License.
You may obtain a copy of the License at

https://ids.nus.edu.sg/docs/modelgo/v2/MG0/LICENSE`,
  'MG-BY': `### Model License:

This model is licensed under the ModelGo Attribution License, Version 2.0 (MG-BY-2.0);
you may use this model only in compliance with the License.
You may obtain a copy of the License at

https://ids.nus.edu.sg/docs/modelgo/v2/MG-BY/LICENSE`,
  'MG-BY-SA': `### Model License:

This model is licensed under the ModelGo Attribution-ShareAlike License, Version 2.0 (MG-BY-SA-2.0);
you may use this model only in compliance with the License.
You may obtain a copy of the License at

https://ids.nus.edu.sg/docs/modelgo/v2/MG-BY-SA/LICENSE`,
  'MG-BY-RAI': `### Model License:

This model is licensed under the ModelGo Attribution-ResponsibleAI License, Version 2.0 (MG-BY-RAI-2.0);
you may use this model only in compliance with the License.
You may obtain a copy of the License at

https://ids.nus.edu.sg/docs/modelgo/v2/MG-BY-RAI/LICENSE`,
  'MG-BY-NC': `### Model License:

This model is licensed under the ModelGo Attribution-NonCommercial License, Version 2.0 (MG-BY-NC-2.0);
you may use this model only in compliance with the License.
You may obtain a copy of the License at

https://ids.nus.edu.sg/docs/modelgo/v2/MG-BY-NC/LICENSE`,
  'MG-BY-ND': `### Model License:

This model is licensed under the ModelGo Attribution-NoDerivatives License, Version 2.0 (MG-BY-ND-2.0);
you may use this model only in compliance with the License.
You may obtain a copy of the License at

https://ids.nus.edu.sg/docs/modelgo/v2/MG-BY-ND/LICENSE`,
  'MG-BY-NC-RAI': `### Model License:

This model is licensed under the ModelGo Attribution-NonCommercial-ResponsibleAI License, Version 2.0 (MG-BY-NC-RAI-2.0);
you may use this model only in compliance with the License.
You may obtain a copy of the License at

https://ids.nus.edu.sg/docs/modelgo/v2/MG-BY-NC-RAI/LICENSE`,
  'MG-BY-NC-ND': `### Model License:

This model is licensed under the ModelGo Attribution-NonCommercial-NoDerivatives License, Version 2.0 (MG-BY-NC-ND-2.0);
you may use this model only in compliance with the License.
You may obtain a copy of the License at

https://ids.nus.edu.sg/docs/modelgo/v2/MG-BY-NC-ND/LICENSE`,
}

const licenseModelSheet: Record<string, string> = {
  'MG0': `### Model Sheet MG0-2.0
+--------------+-------------------------------------------------+---+
|              | Use, Reproduce, Distribute Licensed Materials   | ✓ |
|              +-------------------------------------------------+---+
|              | Create Derivative Materials                     | ✓ |
|              +-------------------------------------------------+---+
|              | Distribute Derivative Materials                 | ✓ |
| Grant of     +-------------------------------------------------+---+
| Rights       | Sublicensable License                           | ✓ |
|              +-------------------------------------------------+---+
|              | Revocable License                               | ✗ |
|              +-------------------------------------------------+---+
|              | Commercial Use of Licensed Materials            | ✓ |
|              | and/or Derivative Materials                     |   |
+--------------+-------------------------------------------------+---+
| Responsible  | Use Restrictions (RAI) on Licensed Materials    | ✗ |
| AI           | and Derivative Materials                        |   |
+--------------+-------------------------------------------------+---+
|              | Provide a Copy of Original License when         | ✗ |
|              | Distributing Licensed Materials                 |   |
|              +-------------------------------------------------+---+
|              | Provide a Copy of Original License when         | ✗ |
|              | Distributing Derivative Materials               |   |
|              +-------------------------------------------------+---+
|              | Retain Original Attribution Notice when         | ✗ |
| Requirements | Distributing Licensed Materials                 |   |
| Relating to  +-------------------------------------------------+---+
| Distribution | Retain Original Attribution Notice when         | ✗ |
| of Licensed  | Distributing Derivative Materials               |   |
| Materials,   +-------------------------------------------------+---+
| Derivative   | Indicate Modifications when Distributing        | ✗ |
| Materials,   | Derivative Materials                            |   |
| Output       +-------------------------------------------------+---+
|              | Disclosure of Distributed Licensed Materials    | ✗ |
|              | and/or Derivative Materials in Source Code Form |   |
|              +-------------------------------------------------+---+
|              | Licensing Distributed Derivative Materials      | ✗ |
|              | on Same Terms as License                        |   |
|              +-------------------------------------------------+---+
|              | Include a Notice of Provenance when             | ✗ |
|              | Distributing Output as Dataset                  |   |
+--------------+-------------------------------------------------+---+`,
  'MG-BY': `### Model Sheet MG-BY-2.0
+--------------+-------------------------------------------------+---+
|              | Use, Reproduce, Distribute Licensed Materials   | ✓ |
|              +-------------------------------------------------+---+
|              | Create Derivative Materials                     | ✓ |
|              +-------------------------------------------------+---+
|              | Distribute Derivative Materials                 | ✓ |
| Grant of     +-------------------------------------------------+---+
| Rights       | Sublicensable License                           | ✓ |
|              +-------------------------------------------------+---+
|              | Revocable License                               | ✗ |
|              +-------------------------------------------------+---+
|              | Commercial Use of Licensed Materials            | ✓ |
|              | and/or Derivative Materials                     |   |
+--------------+-------------------------------------------------+---+
| Responsible  | Use Restrictions (RAI) on Licensed Materials    | ✗ |
| AI           | and Derivative Materials                        |   |
+--------------+-------------------------------------------------+---+
|              | Provide a Copy of Original License when         | ✓ |
|              | Distributing Licensed Materials                 |   |
|              +-------------------------------------------------+---+
|              | Provide a Copy of Original License when         | ✓ |
|              | Distributing Derivative Materials               |   |
|              +-------------------------------------------------+---+
|              | Retain Original Attribution Notice when         | ✓ |
| Requirements | Distributing Licensed Materials                 |   |
| Relating to  +-------------------------------------------------+---+
| Distribution | Retain Original Attribution Notice when         | ✓ |
| of Licensed  | Distributing Derivative Materials               |   |
| Materials,   +-------------------------------------------------+---+
| Derivative   | Indicate Modifications when Distributing        | ✓ |
| Materials,   | Derivative Materials                            |   |
| Output       +-------------------------------------------------+---+
|              | Disclosure of Distributed Licensed Materials    | ✗ |
|              | and/or Derivative Materials in Source Code Form |   |
|              +-------------------------------------------------+---+
|              | Licensing Distributed Derivative Materials      | ✗ |
|              | on Same Terms as License                        |   |
|              +-------------------------------------------------+---+
|              | Include a Notice of Provenance when             | ✗ |
|              | Distributing Output as Dataset                  |   |
+--------------+-------------------------------------------------+---+`,
  'MG-BY-SA': `### Model Sheet MG-BY-SA-2.0
+--------------+-------------------------------------------------+---+
|              | Use, Reproduce, Distribute Licensed Materials   | ✓ |
|              +-------------------------------------------------+---+
|              | Create Derivative Materials                     | ✓ |
|              +-------------------------------------------------+---+
|              | Distribute Derivative Materials                 | ✓ |
| Grant of     +-------------------------------------------------+---+
| Rights       | Sublicensable License                           | ✗ |
|              +-------------------------------------------------+---+
|              | Revocable License                               | ✗ |
|              +-------------------------------------------------+---+
|              | Commercial Use of Licensed Materials            | ✓ |
|              | and/or Derivative Materials                     |   |
+--------------+-------------------------------------------------+---+
| Responsible  | Use Restrictions (RAI) on Licensed Materials    | ✗ |
| AI           | and Derivative Materials                        |   |
+--------------+-------------------------------------------------+---+
|              | Provide a Copy of Original License when         | ✓ |
|              | Distributing Licensed Materials                 |   |
|              +-------------------------------------------------+---+
|              | Provide a Copy of Original License when         | ✓ |
|              | Distributing Derivative Materials               |   |
|              +-------------------------------------------------+---+
|              | Retain Original Attribution Notice when         | ✓ |
| Requirements | Distributing Licensed Materials                 |   |
| Relating to  +-------------------------------------------------+---+
| Distribution | Retain Original Attribution Notice when         | ✓ |
| of Licensed  | Distributing Derivative Materials               |   |
| Materials,   +-------------------------------------------------+---+
| Derivative   | Indicate Modifications when Distributing        | ✓ |
| Materials,   | Derivative Materials                            |   |
| Output       +-------------------------------------------------+---+
|              | Disclosure of Distributed Licensed Materials    | ✓ |
|              | and/or Derivative Materials in Source Code Form |   |
|              +-------------------------------------------------+---+
|              | Licensing Distributed Derivative Materials      | ✓ |
|              | on Same Terms as License                        |   |
|              +-------------------------------------------------+---+
|              | Include a Notice of Provenance when             | ✗ |
|              | Distributing Output as Dataset                  |   |
+--------------+-------------------------------------------------+---+`,
  'MG-BY-RAI': `### Model Sheet MG-BY-RAI-2.0
+--------------+-------------------------------------------------+---+
|              | Use, Reproduce, Distribute Licensed Materials   | ✓ |
|              +-------------------------------------------------+---+
|              | Create Derivative Materials                     | ✓ |
|              +-------------------------------------------------+---+
|              | Distribute Derivative Materials                 | ✓ |
| Grant of     +-------------------------------------------------+---+
| Rights       | Sublicensable License                           | ✗ |
|              +-------------------------------------------------+---+
|              | Revocable License                               | ✓ |
|              +-------------------------------------------------+---+
|              | Commercial Use of Licensed Materials            | ✓ |
|              | and/or Derivative Materials                     |   |
+--------------+-------------------------------------------------+---+
| Responsible  | Use Restrictions (RAI) on Licensed Materials    | ✓ |
| AI           | and Derivative Materials                        |   |
+--------------+-------------------------------------------------+---+
|              | Provide a Copy of Original License when         | ✓ |
|              | Distributing Licensed Materials                 |   |
|              +-------------------------------------------------+---+
|              | Provide a Copy of Original License when         | ✓ |
|              | Distributing Derivative Materials               |   |
|              +-------------------------------------------------+---+
|              | Retain Original Attribution Notice when         | ✓ |
| Requirements | Distributing Licensed Materials                 |   |
| Relating to  +-------------------------------------------------+---+
| Distribution | Retain Original Attribution Notice when         | ✓ |
| of Licensed  | Distributing Derivative Materials               |   |
| Materials,   +-------------------------------------------------+---+
| Derivative   | Indicate Modifications when Distributing        | ✓ |
| Materials,   | Derivative Materials                            |   |
| Output       +-------------------------------------------------+---+
|              | Disclosure of Distributed Licensed Materials    | ✗ |
|              | and/or Derivative Materials in Source Code Form |   |
|              +-------------------------------------------------+---+
|              | Licensing Distributed Derivative Materials      | ✗ |
|              | on Same Terms as License                        |   |
|              +-------------------------------------------------+---+
|              | Include a Notice of Provenance when             | ✗ |
|              | Distributing Output as Dataset                  |   |
+--------------+-------------------------------------------------+---+`,
  'MG-BY-NC': `### Model Sheet MG-BY-NC-2.0
+--------------+-------------------------------------------------+---+
|              | Use, Reproduce, Distribute Licensed Materials   | ✓ |
|              +-------------------------------------------------+---+
|              | Create Derivative Materials                     | ✓ |
|              +-------------------------------------------------+---+
|              | Distribute Derivative Materials                 | ✓ |
| Grant of     +-------------------------------------------------+---+
| Rights       | Sublicensable License                           | ✗ |
|              +-------------------------------------------------+---+
|              | Revocable License                               | ✓ |
|              +-------------------------------------------------+---+
|              | Commercial Use of Licensed Materials            | ✗ |
|              | and/or Derivative Materials                     |   |
+--------------+-------------------------------------------------+---+
| Responsible  | Use Restrictions (RAI) on Licensed Materials    | ✗ |
| AI           | and Derivative Materials                        |   |
+--------------+-------------------------------------------------+---+
|              | Provide a Copy of Original License when         | ✓ |
|              | Distributing Licensed Materials                 |   |
|              +-------------------------------------------------+---+
|              | Provide a Copy of Original License when         | ✓ |
|              | Distributing Derivative Materials               |   |
|              +-------------------------------------------------+---+
|              | Retain Original Attribution Notice when         | ✓ |
| Requirements | Distributing Licensed Materials                 |   |
| Relating to  +-------------------------------------------------+---+
| Distribution | Retain Original Attribution Notice when         | ✓ |
| of Licensed  | Distributing Derivative Materials               |   |
| Materials,   +-------------------------------------------------+---+
| Derivative   | Indicate Modifications when Distributing        | ✓ |
| Materials,   | Derivative Materials                            |   |
| Output       +-------------------------------------------------+---+
|              | Disclosure of Distributed Licensed Materials    | ✗ |
|              | and/or Derivative Materials in Source Code Form |   |
|              +-------------------------------------------------+---+
|              | Licensing Distributed Derivative Materials      | ✗ |
|              | on Same Terms as License                        |   |
|              +-------------------------------------------------+---+
|              | Include a Notice of Provenance when             | ✓ |
|              | Distributing Output as Dataset                  |   |
+--------------+-------------------------------------------------+---+`,
  'MG-BY-ND': `### Model Sheet MG-BY-ND-2.0
+--------------+-------------------------------------------------+---+
|              | Use, Reproduce, Distribute Licensed Materials   | ✓ |
|              +-------------------------------------------------+---+
|              | Create Derivative Materials                     | ✓ |
|              +-------------------------------------------------+---+
|              | Distribute Derivative Materials                 | ✗ |
| Grant of     +-------------------------------------------------+---+
| Rights       | Sublicensable License                           | ✗ |
|              +-------------------------------------------------+---+
|              | Revocable License                               | ✓ |
|              +-------------------------------------------------+---+
|              | Commercial Use of Licensed Materials            | ✓ |
|              | and/or Derivative Materials                     |   |
+--------------+-------------------------------------------------+---+
| Responsible  | Use Restrictions (RAI) on Licensed Materials    | ✗ |
| AI           | and Derivative Materials                        |   |
+--------------+-------------------------------------------------+---+
|              | Provide a Copy of Original License when         | ✓ |
|              | Distributing Licensed Materials                 |   |
|              +-------------------------------------------------+---+
|              | Provide a Copy of Original License when         | ✗ |
|              | Distributing Derivative Materials               |   |
|              +-------------------------------------------------+---+
|              | Retain Original Attribution Notice when         | ✓ |
| Requirements | Distributing Licensed Materials                 |   |
| Relating to  +-------------------------------------------------+---+
| Distribution | Retain Original Attribution Notice when         | ✗ |
| of Licensed  | Distributing Derivative Materials               |   |
| Materials,   +-------------------------------------------------+---+
| Derivative   | Indicate Modifications when Distributing        | ✗ |
| Materials,   | Derivative Materials                            |   |
| Output       +-------------------------------------------------+---+
|              | Disclosure of Distributed Licensed Materials    | ✗ |
|              | and/or Derivative Materials in Source Code Form |   |
|              +-------------------------------------------------+---+
|              | Licensing Distributed Derivative Materials      | ✗ |
|              | on Same Terms as License                        |   |
|              +-------------------------------------------------+---+
|              | Include a Notice of Provenance when             | ✓ |
|              | Distributing Output as Dataset                  |   |
+--------------+-------------------------------------------------+---+`,
  'MG-BY-NC-RAI': `### Model Sheet MG-BY-NC-RAI-2.0
+--------------+-------------------------------------------------+---+
|              | Use, Reproduce, Distribute Licensed Materials   | ✓ |
|              +-------------------------------------------------+---+
|              | Create Derivative Materials                     | ✓ |
|              +-------------------------------------------------+---+
|              | Distribute Derivative Materials                 | ✓ |
| Grant of     +-------------------------------------------------+---+
| Rights       | Sublicensable License                           | ✗ |
|              +-------------------------------------------------+---+
|              | Revocable License                               | ✓ |
|              +-------------------------------------------------+---+
|              | Commercial Use of Licensed Materials            | ✗ |
|              | and/or Derivative Materials                     |   |
+--------------+-------------------------------------------------+---+
| Responsible  | Use Restrictions (RAI) on Licensed Materials    | ✓ |
| AI           | and Derivative Materials                        |   |
+--------------+-------------------------------------------------+---+
|              | Provide a Copy of Original License when         | ✓ |
|              | Distributing Licensed Materials                 |   |
|              +-------------------------------------------------+---+
|              | Provide a Copy of Original License when         | ✓ |
|              | Distributing Derivative Materials               |   |
|              +-------------------------------------------------+---+
|              | Retain Original Attribution Notice when         | ✓ |
| Requirements | Distributing Licensed Materials                 |   |
| Relating to  +-------------------------------------------------+---+
| Distribution | Retain Original Attribution Notice when         | ✓ |
| of Licensed  | Distributing Derivative Materials               |   |
| Materials,   +-------------------------------------------------+---+
| Derivative   | Indicate Modifications when Distributing        | ✓ |
| Materials,   | Derivative Materials                            |   |
| Output       +-------------------------------------------------+---+
|              | Disclosure of Distributed Licensed Materials    | ✗ |
|              | and/or Derivative Materials in Source Code Form |   |
|              +-------------------------------------------------+---+
|              | Licensing Distributed Derivative Materials      | ✗ |
|              | on Same Terms as License                        |   |
|              +-------------------------------------------------+---+
|              | Include a Notice of Provenance when             | ✓ |
|              | Distributing Output as Dataset                  |   |
+--------------+-------------------------------------------------+---+`,
  'MG-BY-NC-ND': `### Model Sheet MG-BY-NC-ND-2.0
+--------------+-------------------------------------------------+---+
|              | Use, Reproduce, Distribute Licensed Materials   | ✓ |
|              +-------------------------------------------------+---+
|              | Create Derivative Materials                     | ✓ |
|              +-------------------------------------------------+---+
|              | Distribute Derivative Materials                 | ✗ |
| Grant of     +-------------------------------------------------+---+
| Rights       | Sublicensable License                           | ✗ |
|              +-------------------------------------------------+---+
|              | Revocable License                               | ✓ |
|              +-------------------------------------------------+---+
|              | Commercial Use of Licensed Materials            | ✗ |
|              | and/or Derivative Materials                     |   |
+--------------+-------------------------------------------------+---+
| Responsible  | Use Restrictions (RAI) on Licensed Materials    | ✗ |
| AI           | and Derivative Materials                        |   |
+--------------+-------------------------------------------------+---+
|              | Provide a Copy of Original License when         | ✓ |
|              | Distributing Licensed Materials                 |   |
|              +-------------------------------------------------+---+
|              | Provide a Copy of Original License when         | ✗ |
|              | Distributing Derivative Materials               |   |
|              +-------------------------------------------------+---+
|              | Retain Original Attribution Notice when         | ✓ |
| Requirements | Distributing Licensed Materials                 |   |
| Relating to  +-------------------------------------------------+---+
| Distribution | Retain Original Attribution Notice when         | ✗ |
| of Licensed  | Distributing Derivative Materials               |   |
| Materials,   +-------------------------------------------------+---+
| Derivative   | Indicate Modifications when Distributing        | ✗ |
| Materials,   | Derivative Materials                            |   |
| Output       +-------------------------------------------------+---+
|              | Disclosure of Distributed Licensed Materials    | ✗ |
|              | and/or Derivative Materials in Source Code Form |   |
|              +-------------------------------------------------+---+
|              | Licensing Distributed Derivative Materials      | ✗ |
|              | on Same Terms as License                        |   |
|              +-------------------------------------------------+---+
|              | Include a Notice of Provenance when             | ✓ |
|              | Distributing Output as Dataset                  |   |
+--------------+-------------------------------------------------+---+`,
}

const licenses = Object.keys(licenseMap)
const selected = ref<string | null>(null)
const downloading = ref(false)
const showDeclaration = ref(false)
const copied = ref<'readme' | 'sheet' | null>(null)
const highlightDecl = ref(false)

const visibleBadges = computed(() => {
  if (!selected.value) return allBadges.value
  const keys = new Set(licenseMap[selected.value])
  return allBadges.value.filter(b => keys.has(b.key))
})

function selectLicense(name: string) {
  selected.value = selected.value === name ? null : name
  highlightDecl.value = false
  showOrb.value = false
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
    a.download = 'LICENSE'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(a.href)
  } catch {
    window.open(licenseDownloads[selected.value!], '_blank')
  } finally {
    downloading.value = false
    showOrb.value = true
    setTimeout(() => {
      showOrb.value = false
      highlightDecl.value = true
    }, 700)
  }
}

const showOrb = ref(false)

let closeTimer: number | undefined

function toggleDeclaration() {
  showDeclaration.value = !showDeclaration.value
}

function onDeclEnter() {
  clearTimeout(closeTimer)
  showDeclaration.value = true
}

function onDeclLeave() {
  closeTimer = window.setTimeout(() => {
    showDeclaration.value = false
  }, 200)
}

async function copyText(text: string, type: 'readme' | 'sheet') {
  await navigator.clipboard.writeText(text)
  copied.value = type
  setTimeout(() => { copied.value = null }, 1500)
}

onUnmounted(() => {
  clearTimeout(closeTimer)
})
</script>

<template>
  <div class="ls-root">
    <!-- Fixed-height slot for hint so nothing shifts -->
    <div class="ls-hint-slot">
      <Transition name="hint">
        <p v-if="!selected" class="ls-hint">
          {{ t('pickYourLicense') }} <span class="hint-arrow">↓</span>
        </p>
      </Transition>
    </div>

    <!-- Buttons area with optional animated border -->
    <div class="ls-buttons-area">
      <!-- Rotating border overlay -->
      <Transition name="box-fade">
        <div v-if="!selected" class="ls-border-ring" aria-hidden="true" />
      </Transition>

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
    </div>

    <!-- Badges + download -->
    <div class="ls-result">
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
        <div v-if="selected" class="ls-actions">
          <button
            :class="['ls-download', { 'dl-drained': showOrb }]"
            :disabled="downloading"
            @click="downloadLicense"
          >
            ⬇️ {{ downloading ? t('downloading') : t('downloadLicense').replace('{name}', selected!) }}
          </button>

          <div v-if="showOrb" class="decl-orb" />

          <div class="ls-decl-wrap" @mouseenter="onDeclEnter" @mouseleave="onDeclLeave">
            <button :class="['ls-declaration', { 'decl-highlight': highlightDecl }]" @click="toggleDeclaration">📜 {{ t('licenseDeclaration') }}</button>
            <div v-show="showDeclaration" class="decl-popover">
              <div class="decl-section">
                <div class="decl-header">
                  <span>{{ t('addToReadme') }}</span>
                  <button class="decl-copy" @click="copyText(licenseReadme[selected!], 'readme')">
                    {{ copied === 'readme' ? t('copied') : t('copy') }}
                  </button>
                </div>
                <pre class="decl-code">{{ licenseReadme[selected!] }}</pre>
              </div>
              <div class="decl-section">
                <div class="decl-header">
                  <span>{{ t('modelSheetOptional') }}</span>
                  <button class="decl-copy" @click="copyText(licenseModelSheet[selected!], 'sheet')">
                    {{ copied === 'sheet' ? t('copied') : t('copy') }}
                  </button>
                </div>
                <pre class="decl-code">{{ licenseModelSheet[selected!] }}</pre>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
/* Animated gradient angle */
@property --border-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.ls-root {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 4px 0;
  margin-top: -20px;
  width: 100%;
}

/* Fixed-height slot so buttons don't shift when hint disappears */
.ls-hint-slot {
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hint */
.ls-hint {
  font-size: 14px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

.hint-arrow {
  display: inline-block;
  animation: nudge-down 1.5s ease-in-out infinite;
}

@keyframes nudge-down {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(3px); }
}

.hint-enter-active { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
.hint-leave-active { transition: all 0.2s ease; }
.hint-enter-from { opacity: 0; transform: translateY(-6px); }
.hint-leave-to { opacity: 0; transform: translateY(-6px); }

/* Buttons area — relative container for the border overlay */
.ls-buttons-area {
  position: relative;
  padding: 14px 18px;
}

/* Rotating border ring — sits behind buttons as overlay */
.ls-border-ring {
  position: absolute;
  inset: 0;
  border-radius: 18px;
  padding: 2px;
  background: conic-gradient(
    from var(--border-angle),
    var(--vp-c-brand-1),
    #2563eb,
    #16a34a,
    #ca8a04,
    #ea580c,
    var(--vp-c-brand-1)
  );
  animation: border-spin 3s linear infinite reverse;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

@keyframes border-spin {
  to { --border-angle: 360deg; }
}

/* Box fade transition */
.box-fade-enter-active { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
.box-fade-leave-active { transition: all 0.3s ease; }
.box-fade-enter-from { opacity: 0; }
.box-fade-leave-to { opacity: 0; }

/* License buttons */
.ls-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  align-items: center;
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

/* Result */
.ls-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.ls-badges-wrap {
  height: 46px;
  width: 100%;
  overflow: visible;
}

.ls-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
}

/* Badge */
.ls-badge {
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
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
  font-size: 16px;
  flex-shrink: 0;
}

.badge-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.badge-label {
  font-size: 12px;
  font-weight: 800;
  color: var(--vp-c-text-1);
}

.badge-fullname {
  font-size: 10px;
  color: var(--badge-color);
  font-weight: 500;
}

/* Tooltip */
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

/* TransitionGroup */
.badge-move {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.badge-enter-active {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
              opacity 0.35s ease;
}

.badge-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.6);
}

.badge-leave-active {
  transition: transform 0.45s cubic-bezier(0.55, 0, 1, 0.45),
              opacity 0.35s ease;
  position: absolute;
}

.badge-leave-to {
  opacity: 0;
  transform: translateY(80px) rotate(15deg) scale(0.5);
}

/* Actions row */
.ls-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* Download */
.ls-download {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 20px;
  background: var(--vp-c-brand-1);
  color: #fff;
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.5s ease, color 0.5s ease;
  box-shadow: 0 3px 12px rgba(124, 58, 237, 0.25);
}

.ls-download.dl-drained {
  background: transparent;
  color: var(--vp-c-brand-1);
  box-shadow: none;
}

/* Traveling orb */
.decl-orb {
  position: absolute;
  top: 50%;
  left: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  box-shadow: 0 0 16px var(--vp-c-brand-1), 0 0 32px rgba(124, 58, 237, 0.4);
  pointer-events: none;
  z-index: 10;
  animation: orb-travel 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes orb-travel {
  0% {
    left: 20%;
    transform: translateY(-50%) scale(1);
    opacity: 1;
  }
  80% {
    opacity: 1;
    transform: translateY(-50%) scale(1.2);
  }
  100% {
    left: 80%;
    transform: translateY(-50%) scale(0.5);
    opacity: 0;
  }
}

.ls-download:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 18px rgba(124, 58, 237, 0.35);
}

.ls-download:disabled {
  opacity: 0.7;
  cursor: wait;
}

/* Declaration button */
.ls-decl-wrap {
  position: relative;
}

.ls-declaration {
  position: relative;
  z-index: 0;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 20px;
  background: transparent;
  color: var(--vp-c-brand-1);
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, color 0.4s ease;
}

.ls-declaration.decl-highlight {
  color: #fff;
  border-color: transparent;
  background:
    radial-gradient(circle, var(--vp-c-brand-1) 99%, transparent 100%) no-repeat center padding-box,
    conic-gradient(
      from var(--border-angle),
      var(--vp-c-brand-1),
      #2563eb,
      #16a34a,
      #ca8a04,
      #ea580c,
      var(--vp-c-brand-1)
    ) border-box;
  background-size: 0% 0%, 100% 100%;
  animation: border-spin 2s linear infinite reverse, decl-spread 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  box-shadow: 0 3px 12px rgba(124, 58, 237, 0.25);
}

@keyframes decl-spread {
  from { background-size: 0% 0%, 100% 100%; }
  to { background-size: 300% 300%, 100% 100%; }
}

.ls-declaration:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 5px 18px rgba(124, 58, 237, 0.35);
}

/* Declaration popover */
.decl-popover {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 520px;
  max-height: 460px;
  overflow-y: auto;
  background: var(--vp-c-bg);
  border: 1.5px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  z-index: 200;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.decl-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.decl-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.decl-copy {
  padding: 3px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.decl-copy:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.decl-code {
  margin: 0;
  padding: 10px 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 11px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  white-space: pre;
  overflow-x: auto;
  font-family: var(--vp-font-family-mono);
}

.slide-up-enter-active { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
.slide-up-leave-active { transition: all 0.25s ease; }
.slide-up-enter-from { opacity: 0; transform: translateY(12px) scale(0.9); }
.slide-up-leave-to { opacity: 0; transform: translateY(8px) scale(0.95); }

/* Mobile responsive */
@media (max-width: 640px) {
  .ls-btn {
    padding: 7px 16px;
    font-size: 14px;
  }

  .decl-popover {
    width: min(520px, 90vw);
    max-height: 60vh;
  }

  .decl-code {
    font-size: 10px;
  }

  .ls-download,
  .ls-declaration {
    font-size: 13px;
    padding: 7px 16px;
  }

  .decl-copy {
    padding: 5px 12px;
  }
}
</style>
