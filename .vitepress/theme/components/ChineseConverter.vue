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
import { ref, onMounted, computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const isTraditional = ref(false)
const openccLoaded = ref(false)

// 检查是否为中文语言
const isChineseLocale = computed(() => lang.value === 'zh-CN')

// 切换繁简体
function toggleChinese() {
  if (!openccLoaded.value) return
  isTraditional.value = !isTraditional.value
  convertPage()
}

// 繁简体转换函数
function convertPage() {
  if (!openccLoaded.value) return

  // 使用 OpenCC 进行转换
  const elements = document.querySelectorAll('*:not(script):not(style)')
  elements.forEach(element => {
    if (element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) {
      const text = element.textContent
      if (text && /[\u4e00-\u9fa5]/.test(text)) {
        // 使用 OpenCC 进行转换
        if (isTraditional.value) {
          // 简体转繁体
          element.textContent = (window as any).OpenCC.s2t(text)
        } else {
          // 繁体转简体
          element.textContent = (window as any).OpenCC.t2s(text)
        }
      }
    }
  })
}

// 加载 OpenCC 库
onMounted(() => {
  // 检查是否已经加载
  if ((window as any).OpenCC) {
    openccLoaded.value = true
    return
  }

  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/opencc-js@1.0.5/dist/umd/opencc.min.js'
  script.onload = () => {
    // OpenCC 加载完成
    openccLoaded.value = true
  }
  script.onerror = (e) => {
    console.error('Failed to load OpenCC:', e)
  }
  document.head.appendChild(script)
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