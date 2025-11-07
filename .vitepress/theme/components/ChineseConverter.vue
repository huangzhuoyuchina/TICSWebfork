<template>
  <button
    v-if="isChineseLocale"
    class="chinese-converter"
    @click="toggleChinese"
    :title="isTraditional ? '切换到简体' : '切换到繁体'"
  >
    {{ isTraditional ? '简' : '繁' }}
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import { useData, useRoute } from 'vitepress'

const { lang } = useData()
const route = useRoute()
const isTraditional = ref(false)
const openccLoaded = ref(false)
let toTraditional: ((s: string) => string) | null = null
let toSimplified: ((s: string) => string) | null = null
const traditionalClass = 'zh-traditional'

// 检查是否为中文语言
const isChineseLocale = computed(() => lang.value === 'zh-CN')

// 切换繁简体
function toggleChinese() {
  if (!openccLoaded.value) return
  isTraditional.value = !isTraditional.value
  localStorage.setItem('preferredChinese', isTraditional.value ? 'traditional' : 'simplified')
  applyTraditionalClass()
  convertPage()
}

// 繁简体转换函数
function convertPage() {
  if (!openccLoaded.value) return
  if (!isChineseLocale.value) return

  const to = isTraditional.value ? toTraditional : toSimplified
  if (!to) return

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
  const nodes = [] as Text[]
  let cur = walker.nextNode()
  while (cur) {
    const parent = (cur as Text).parentElement
    if (parent) {
      const tag = parent.tagName.toLowerCase()
      const txt = (cur as Text).nodeValue || ''
      if (tag !== 'script' && tag !== 'style' && tag !== 'noscript' && /[\u4e00-\u9fa5]/.test(txt)) {
        nodes.push(cur as Text)
      }
    }
    cur = walker.nextNode()
  }

  nodes.forEach(node => {
    node.nodeValue = to!(node.nodeValue || '')
  })
}

function applyTraditionalClass() {
  const root = document.documentElement
  if (isTraditional.value) {
    root.classList.add(traditionalClass)
  } else {
    root.classList.remove(traditionalClass)
  }
}

// 加载 OpenCC 库
onMounted(() => {
  const saved = localStorage.getItem('preferredChinese')
  isTraditional.value = saved === 'traditional'
  applyTraditionalClass()
  if ((window as any).OpenCC) {
    const OpenCC = (window as any).OpenCC
    toTraditional = OpenCC.Converter({ from: 'cn', to: 'twp' })
    toSimplified = OpenCC.Converter({ from: 'twp', to: 'cn' })
    openccLoaded.value = true
    applyTraditionalClass()
    convertPage()
    return
  }
  const script = document.createElement('script')
  script.src = '/libs/opencc.full.js'
  script.onload = () => {
    const OpenCC = (window as any).OpenCC
    toTraditional = OpenCC.Converter({ from: 'cn', to: 'twp' })
    toSimplified = OpenCC.Converter({ from: 'twp', to: 'cn' })
    openccLoaded.value = true
    applyTraditionalClass()
    convertPage()
  }
  script.onerror = (e) => {
    console.error('Failed to load OpenCC:', e)
  }
  document.head.appendChild(script)
})

watch(() => route.path, async () => {
  if (!openccLoaded.value) return
  if (!isChineseLocale.value) return
  await nextTick()
  requestAnimationFrame(() => convertPage())
})
</script>

<style scoped>
.chinese-converter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-left: 8px;
  padding: 0;
  color: var(--vp-c-text-1);
  background-color: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  transition: border-color 0.25s, color 0.25s;
  cursor: pointer;
  outline: none;
}

.chinese-converter:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.chinese-converter:focus {
  border-color: var(--vp-c-brand-1);
}
</style>