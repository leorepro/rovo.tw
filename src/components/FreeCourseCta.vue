<script setup lang="ts">
</script>

<template>
  <section class="course-cta" id="course-cta">
    <div class="course-cta__container container">
      <span class="course-cta__label">鈦坦客戶專屬</span>
      <h2 class="course-cta__title">Atlassian Rovo 免費課程</h2>
      <p class="course-cta__description">
        系統化學習 Rovo AI，涵蓋搜尋、知識管理與 Agent 建置，帶你從入門到實戰應用
      </p>
      <div class="course-cta__info">
        <span class="course-cta__badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          多堂系列課程
        </span>
        <span class="course-cta__badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          線上隨時學習
        </span>
        <span class="course-cta__badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          完全免費
        </span>
      </div>
      <a href="#contact" class="btn course-cta__btn">
        立即報名免費課程
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>
    </div>
  </section>
</template>

<style scoped>
.course-cta {
  background: linear-gradient(135deg, var(--color-bg-gradient-start) 0%, var(--color-secondary) 50%, #403294 100%);
  padding: var(--spacing-3xl) 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.course-cta__container {
  position: relative;
  z-index: 1;
}

.course-cta__label {
  display: inline-block;
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.15);
  padding: 6px 20px;
  border-radius: 100px;
  margin-bottom: var(--spacing-md);
}

.course-cta__title {
  font-size: var(--font-size-3xl);
  color: white;
  margin-bottom: var(--spacing-md);
}

.course-cta__description {
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
  line-height: 1.7;
}

.course-cta__info {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
}

.course-cta__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.9);
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.course-cta__btn {
  background: white;
  color: var(--color-primary);
  padding: 16px 36px;
  font-size: 1.05rem;
  font-weight: 700;
}

.course-cta__btn:hover {
  background: var(--color-bg-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  color: var(--color-primary);
}

@media (max-width: 767px) {
  .course-cta__title {
    font-size: var(--font-size-2xl);
  }

  .course-cta__description {
    font-size: var(--font-size-base);
  }
}
</style>
