<script setup lang="ts">
const useCases = [
  {
    icon: 'folder',
    title: '企業內部知識管理',
    description: '統一檢索儲存於各平台的文件，減少時間浪費。透過 Rovo 的智慧搜尋，員工可以快速找到散落在 Jira、Confluence、Google Drive 等不同平台中的知識文件。',
    color: '#0052CC',
  },
  {
    icon: 'users',
    title: '多專案團隊合作',
    description: '避免重複輸入與資訊遺失，確保跨部門協作效率。Rovo 整合各專案資訊，提供視覺化的進度追蹤，讓不同團隊間的溝通更加順暢。',
    color: '#6554C0',
  },
  {
    icon: 'headset',
    title: '技術與客服支援',
    description: '快速定位客戶查詢紀錄與技術文件，加快回應時間。Rovo Agent 可以與 Jira Service Management 整合，自動回覆常見問題，提升客戶滿意度。',
    color: '#00B8D9',
  },
]
</script>

<template>
  <section class="use-cases section" id="use-cases">
    <div class="container">
      <h2 class="section-title">應用場景</h2>
      <p class="section-subtitle">
        無論是知識管理、團隊協作還是客戶服務，Rovo 都能為您的企業帶來顯著的效率提升
      </p>
      <div class="use-cases__grid">
        <div
          v-for="(useCase, index) in useCases"
          :key="index"
          class="use-cases__card animate-on-scroll"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div class="use-cases__card-icon" :style="{ background: useCase.color }">
            <svg v-if="useCase.icon === 'folder'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
            <svg v-else-if="useCase.icon === 'users'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <svg v-else width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="23"/>
              <line x1="8" y1="23" x2="16" y2="23"/>
            </svg>
          </div>
          <h3 class="use-cases__card-title">{{ useCase.title }}</h3>
          <p class="use-cases__card-description">{{ useCase.description }}</p>
          <a href="#contact" class="use-cases__card-link" :style="{ color: useCase.color }">
            了解更多
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.use-cases {
  background: var(--color-bg-light);
}

.use-cases__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.use-cases__card {
  background: var(--color-bg-white);
  border-radius: var(--radius-xl);
  padding: 40px 32px;
  text-align: center;
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.use-cases__card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.use-cases__card-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
}

.use-cases__card-title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-sm);
}

.use-cases__card-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-medium);
  line-height: 1.8;
  margin-bottom: var(--spacing-lg);
}

.use-cases__card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  transition: gap var(--transition-base);
}

.use-cases__card-link:hover {
  gap: 10px;
}

@media (max-width: 900px) {
  .use-cases__grid {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }
}
</style>
