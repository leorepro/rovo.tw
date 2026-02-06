<script setup lang="ts">
</script>

<template>
  <section class="hero">
    <div class="hero__bg">
      <div class="hero__bg-shape hero__bg-shape--1"></div>
      <div class="hero__bg-shape hero__bg-shape--2"></div>
      <div class="hero__bg-shape hero__bg-shape--3"></div>
    </div>
    <div class="hero__container container">
      <div class="hero__badge">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/>
        </svg>
        Powered by Atlassian Intelligence
      </div>
      <h1 class="hero__title">
        Your AI Teammate
        <span class="hero__title-gradient">Rovo</span>
      </h1>
      <p class="hero__subtitle">
        探索如何透過 Atlassian Rovo 釋放每個團隊的潛力。<br />
        快速搜尋資訊、學習迭代知識、並透過專屬 AI 代理人加速行動。
      </p>
      <div class="hero__actions">
        <a href="#contact" class="btn btn-white hero__btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          免費諮詢
        </a>
        <a href="#what-is-rovo" class="btn btn-outline-white hero__btn">
          了解更多
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M7 17l9.2-9.2M17 17V7.8H7.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
      <div class="hero__stats">
        <div class="hero__stat">
          <span class="hero__stat-number">47%</span>
          <span class="hero__stat-label">數位工作者面臨資訊孤島</span>
        </div>
        <div class="hero__stat-divider"></div>
        <div class="hero__stat">
          <span class="hero__stat-number">11+</span>
          <span class="hero__stat-label">平均每日需切換的應用程式</span>
        </div>
        <div class="hero__stat-divider"></div>
        <div class="hero__stat">
          <span class="hero__stat-number">AI</span>
          <span class="hero__stat-label">企業級安全標準保障</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--color-bg-gradient-start) 0%, var(--color-secondary) 50%, #403294 100%);
  overflow: hidden;
  padding-top: var(--header-height);
}

.hero__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.hero__bg-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
}

.hero__bg-shape--1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #4C9AFF, transparent);
  top: -200px;
  right: -100px;
  animation: float 20s ease-in-out infinite;
}

.hero__bg-shape--2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #00B8D9, transparent);
  bottom: -100px;
  left: -100px;
  animation: float 15s ease-in-out infinite reverse;
}

.hero__bg-shape--3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #6554C0, transparent);
  top: 50%;
  left: 50%;
  animation: float 18s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(30px, -30px); }
  50% { transform: translate(-20px, 20px); }
  75% { transform: translate(20px, 30px); }
}

.hero__container {
  position: relative;
  z-index: 1;
  text-align: center;
  padding-top: var(--spacing-3xl);
  padding-bottom: var(--spacing-3xl);
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  padding: 10px 24px;
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: var(--spacing-xl);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero__title {
  font-size: var(--font-size-hero);
  font-weight: 700;
  color: white;
  margin-bottom: var(--spacing-lg);
  line-height: 1.2;
}

.hero__title-gradient {
  display: block;
  background: linear-gradient(135deg, #4C9AFF, #00B8D9, #36B37E);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.3em;
}

.hero__subtitle {
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.85);
  max-width: 650px;
  margin: 0 auto var(--spacing-2xl);
  line-height: 1.8;
}

.hero__actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: var(--spacing-3xl);
  flex-wrap: wrap;
}

.hero__btn {
  padding: 16px 36px;
  font-size: 1.05rem;
}

.btn-outline-white {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-outline-white:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: white;
  color: white;
  transform: translateY(-2px);
}

.hero__stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-xl);
  padding: 32px 48px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  max-width: 700px;
  margin: 0 auto;
}

.hero__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.hero__stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: white;
}

.hero__stat-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
}

.hero__stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .hero__title {
    font-size: 2.5rem;
  }

  .hero__title-gradient {
    font-size: 1.2em;
  }

  .hero__subtitle {
    font-size: var(--font-size-base);
    padding: 0 var(--spacing-sm);
  }

  .hero__stats {
    flex-direction: column;
    gap: 20px;
    padding: 24px;
  }

  .hero__stat-divider {
    width: 60px;
    height: 1px;
  }

  .hero__stat-label {
    white-space: normal;
    text-align: center;
  }
}
</style>
