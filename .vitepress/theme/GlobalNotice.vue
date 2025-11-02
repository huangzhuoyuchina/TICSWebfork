<template>
  <div>
    <Transition name="slide-fade">
      <div class="notice-container" :class="{ 'dark': isDark, 'mobile': isMobile, 'minimized': !isVisible }">
        <div v-if="isVisible" class="notice-content">
          <div class="notice-header">
            <img src="/head&favicon.png" alt="Logo" class="notice-logo">
            <span class="notice-title">T.I.C.S Next</span>
            <button @click="toggleNotice" class="toggle-button" :class="{ 'mobile': isMobile }">
              <svg v-if="isVisible" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="toggle-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="toggle-icon"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </button>
          </div>
          <Transition name="fade">
            <div v-if="showFullNotice" class="notice-text">
              <p v-html="globalNotice?.text"></p>
            </div>
          </Transition>
          <div class="separator" v-if="showFullNotice && !isMobile"></div>
          <Transition name="fade" mode="out-in">
            <div :key="hitokoto" class="hitokoto-content">
              <p class="hitokoto-text">{{ hitokoto }}</p>
              <p class="hitokoto-source">
                —— {{ fromWho ? fromWho + '，' : '' }}「{{ from }}」
              </p>
              <p class="hitokoto-attribution">来自 一言</p>
            </div>
          </Transition>
        </div>
        <div v-else class="minimized-content" @click="toggleNotice">
          <img src="/head&favicon.png" alt="Logo" class="notice-logo-mini">
          <span class="notice-title-mini">打开通知</span>
        </div>
        <div v-if="isVisible" class="countdown-bar" :style="{ width: `${countdownProgress}%` }"></div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useData } from 'vitepress'

const { theme, isDark } = useData()
const showFullNotice = ref(true)
const globalNotice = theme.value.globalNotice

const hitokoto = ref('')
const from = ref('')
const fromWho = ref('')
const countdownProgress = ref(100)

const isMobile = ref(false)
const isVisible = ref(true)

const fetchHitokoto = async () => {
  try {
    const response = await fetch('https://international.v1.hitokoto.cn/')
    const data = await response.json()
    hitokoto.value = data.hitokoto
    from.value = data.from
    fromWho.value = data.from_who
    countdownProgress.value = 100
  } catch (error) {
    console.error('Failed to fetch hitokoto:', error)
  }
}

const updateCountdown = () => {
  countdownProgress.value = Math.max(0, countdownProgress.value - 2)
  if (countdownProgress.value === 0) {
    fetchHitokoto()
  }
}

let countdownInterval

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

const toggleNotice = () => {
  isVisible.value = !isVisible.value
}

onMounted(() => {
  fetchHitokoto()
  countdownInterval = setInterval(updateCountdown, 100)

  if (globalNotice?.text) {
    setTimeout(() => {
      showFullNotice.value = false
    }, 2147438467)
  }

  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  clearInterval(countdownInterval)
  window.removeEventListener('resize', checkMobile)
})

watch(isMobile, (newValue) => {
  if (newValue) {
    showFullNotice.value = false
  } else {
    showFullNotice.value = true
    isVisible.value = true
  }
})
</script>

<style scoped>
.notice-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  padding: 20px;
  border-radius: 8px;
  box-shadow: var(--vp-shadow-2);
  z-index: 100;
  width: 360px;
  backdrop-filter: blur(20px);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.notice-container.dark {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.notice-container.mobile {
  left: 20px;
  right: 20px;
  bottom: 20px;
  width: auto;
  max-width: none;
}

.notice-container.minimized {
  padding: 8px 16px;
  cursor: pointer;
}

.notice-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.notice-logo {
  width: 20px;
  height: 21px;
  margin-right: 12px;
}

.notice-title {
  font-weight: 600;
  font-size: 16px;
  color: var(--vp-c-text-1);
}

.notice-content {
  margin-bottom: 16px;
}

.notice-text {
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
  padding: 1px 0;
  color: var(--vp-c-text-2);
}

.separator {
  height: 1px;
  background-color: var(--vp-c-divider);
  margin: 12px 0;
}

.hitokoto-content {
  font-size: 14px;
  line-height: 1.6;
}

.hitokoto-text {
  margin: 0;
  color: var(--vp-c-text-1);
}

.hitokoto-source {
  font-size: 12px;
  color: var(--vp-c-text-2);
  margin-top: 8px;
  text-align: right;
}

.hitokoto-attribution {
  font-size: 10px;
  color: var(--vp-c-text-3);
  margin-top: 4px;
  text-align: right;
}

.countdown-bar {
  height: 2px;
  background-color: var(--vp-c-brand);
  margin-top: 12px;
  transition: width 0.1s linear;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-fade-enter-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.minimized-content {
  display: flex;
  align-items: center;
}

.notice-logo-mini {
  width: 20px;
  height: 21px;
  margin-right: 8px;
}

.notice-title-mini {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.toggle-button {
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: var(--vp-c-text-2);
  cursor: pointer;
  padding: 4px;
  line-height: 1;
}

.toggle-button.mobile {
  top: 4px;
  right: 4px;
}

.toggle-icon {
  width: 20px;
  height: 21px;
}

@media (max-width: 768px) {
  .notice-container {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    font-size: 14px;
  }

  .notice-container.mobile:not(.minimized) {
    max-height: 40vh;
    overflow-y: auto;
  }

  .notice-header {
    margin-bottom: 12px;
    position: relative;
  }

  .notice-logo {
    width: 20px;
    height: 21px;
    margin-right: 8px;
  }

  .notice-title {
    font-size: 14px;
  }

  .notice-text,
  .hitokoto-content {
    font-size: 12px;
  }

  .hitokoto-source {
    font-size: 10px;
  }

  .hitokoto-attribution {
    font-size: 9px;
  }

  .countdown-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100% !important;
  }
}
</style>