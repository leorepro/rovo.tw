<script setup lang="ts">
const capabilities = [
  {
    icon: 'search',
    title: '跨平台整合',
    description: '支援 Jira、Confluence、Google Drive、Microsoft SharePoint 等工具，快速檢索相關資訊。',
  },
  {
    icon: 'brain',
    title: '上下文理解',
    description: '提供更精準的搜尋結果，減少在不同應用程式之間的切換需求。',
  },
  {
    icon: 'chart',
    title: '自動分析與學習',
    description: '透過 AI 產生洞察與知識卡片，協助團隊快速掌握關鍵資訊。',
  },
  {
    icon: 'chat',
    title: '對話式探索',
    description: '內建 AI 助手可回答問題、提供建議，並優化知識管理流程。',
  },
]
</script>

<template>
  <section class="what-is-rovo section" id="what-is-rovo">
    <div class="container">
      <div class="what-is-rovo__layout">
        <div class="what-is-rovo__content animate-on-scroll">
          <span class="what-is-rovo__label">什麼是 Rovo？</span>
          <h2 class="what-is-rovo__title">
            Atlassian 推出的<br />
            <span class="what-is-rovo__highlight">生成式 AI 助手</span>
          </h2>
          <p class="what-is-rovo__description">
            Rovo 是由 Atlassian 推出的生成式 AI 助手，旨在幫助企業和團隊高效搜尋資訊、分析數據並自動化工作流程，減少時間浪費，提升生產力。
          </p>
          <a href="#contact" class="btn btn-primary">
            立即了解
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        <div class="what-is-rovo__capabilities">
          <div
            v-for="(cap, index) in capabilities"
            :key="index"
            class="what-is-rovo__capability animate-on-scroll"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="what-is-rovo__capability-icon">
              <svg v-if="cap.icon === 'search'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <svg v-else-if="cap.icon === 'brain'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/>
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/>
              </svg>
              <svg v-else-if="cap.icon === 'chart'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
              <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div>
              <h4 class="what-is-rovo__capability-title">{{ cap.title }}</h4>
              <p class="what-is-rovo__capability-desc">{{ cap.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.what-is-rovo {
  background: var(--color-bg-light);
}

.what-is-rovo__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.what-is-rovo__label {
  display: inline-block;
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-sm);
  background: rgba(0, 82, 204, 0.08);
  padding: 6px 16px;
  border-radius: 100px;
}

.what-is-rovo__title {
  font-size: var(--font-size-3xl);
  line-height: 1.3;
  margin-bottom: var(--spacing-lg);
}

.what-is-rovo__highlight {
  color: var(--color-primary);
}

.what-is-rovo__description {
  font-size: var(--font-size-md);
  color: var(--color-text-medium);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
}

.what-is-rovo__capabilities {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.what-is-rovo__capability {
  display: flex;
  gap: 16px;
  padding: 24px;
  background: var(--color-bg-white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.what-is-rovo__capability:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary-light);
}

.what-is-rovo__capability-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.what-is-rovo__capability-title {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-dark);
  margin-bottom: 4px;
}

.what-is-rovo__capability-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-medium);
  line-height: 1.6;
}

@media (max-width: 900px) {
  .what-is-rovo__layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
