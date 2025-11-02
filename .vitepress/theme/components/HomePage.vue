<script setup>
// 移除了强制深色模式的代码
</script>

<template>
  <div class="home-container">
    <div class="content-wrapper">
      <div class="badge">
        <span class="badge-icon">📚</span>
        "原学"编写中
      </div>

      <h1 class="main-title">
        <span class="gradient-text">提瓦特文化科学研究院</span>
      </h1>

      <h2 class="subtitle">
        以创意与热爱重塑提瓦特的二创组织
      </h2>

      <p class="description">
        与你一起去学习，与你去看高山大海，带你去吃世界美味
      </p>

      <div class="button-group">
        <a href="/guide/getting-started" class="button primary">
          开始探索
        </a>
        <a href="https://github.com/yourusername/yourrepo" class="button github">
          <svg viewBox="0 0 24 24" class="github-icon">
            <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
          </svg>
          GitHub
        </a>
      </div>

      <div class="features">
        <div class="feature-card">
          <div class="feature-icon">🌟</div>
          <h3>丰富的二创内容</h3>
          <p>从提瓦特的文化研究到原创故事创作，我们为你呈现多样化的二创作品。</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">👥</div>
          <h3>热情的创作者社区</h3>
          <p>加入我们的社群，与热爱创作的同好们一起交流、合作、分享灵感。</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🏰</div>
          <h3>多样的旗下组织</h3>
          <p>我们通过 Minecraft 生存服和其他提瓦特以及本院二创以外的内容，为旅行者提供多元化的游戏外体验。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  padding: 2rem;
}

.content-wrapper {
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--vp-c-bg-soft);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  margin-bottom: 2rem;
}

.badge-icon {
  font-size: 1rem;
}

.main-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  line-height: 1.2;
  font-weight: 700;
  margin: 0 0 1rem;
}

.gradient-text {
  background: linear-gradient(to right, #F862FF, #03A5F8);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  font-weight: 500;
}

.description {
  font-size: clamp(1rem, 3vw, 1.25rem);
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin-bottom: 2.5rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
}

.button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s;
  text-decoration: none;
}

.button.primary {
  background: linear-gradient(to right, #F862FF, #03A5F8);
  color: white;
}

.button.primary:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.button.github {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.button.github:hover {
  background: var(--vp-c-bg-mute);
}

.github-icon {
  width: 1.2em;
  height: 1.2em;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.feature-card {
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  background: var(--vp-c-bg-mute);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #F862FF, #03A5F8);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.feature-card p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .button-group {
    flex-direction: column;
  }
  
  .description br {
    display: none;
  }
  
  .features {
    grid-template-columns: 1fr;
  }
}
</style>