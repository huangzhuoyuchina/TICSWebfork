<template>
  <div class="members-overlay">
    <div class="overlay-content">
      我社正发生大规模人事变动，具体人事详情尚未统计完毕，故该页面暂时不进行展示。
      <div class="overlay-actions">
        <a href="/" class="VPButton brand">返回首页</a>
        <button class="VPButton alt" @click="goBack">返回上一页</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const goBack = () => {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    window.location.href = '/'
  }
}
</script>

<style scoped>
.members-overlay {
  position: fixed;
  top: var(--vp-nav-height, 64px);
  left: var(--vp-sidebar-width, 0);
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9000;
  overflow: hidden;
}

.overlay-content {
  color: white;
  font-size: 1.5rem;
  text-align: center;
  padding: 2rem;
  max-width: 80%;
  line-height: 1.6;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.overlay-actions {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

.overlay-actions .VPButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 144px;
  height: 44px;
  padding: 0 16px;
  border-radius: 9999px;
  text-decoration: none;
}

@media (max-width: 480px) {
  .overlay-actions .VPButton {
    min-width: 128px;
    height: 40px;
    padding: 0 14px;
  }
}

@media (max-width: 768px) {
  .members-overlay {
    top: 0;
    left: 0;
    z-index: 10000;
  }
  .overlay-content {
    font-size: 1.2rem;
    padding: 1.25rem;
    max-width: 92%;
  }
}

@media (max-width: 480px) {
  .overlay-content {
    font-size: 1rem;
    padding: 1rem;
    max-width: 96%;
  }
}
</style>