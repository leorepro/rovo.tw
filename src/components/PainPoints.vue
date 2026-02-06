<script setup lang="ts">
const painPoints = [
  {
    icon: 'knowledge',
    title: '知識整合',
    subtitle: 'Knowledge Integration',
    description: '許多 AI 工具往往難以有效整合企業內部的知識和流程，導致無法提供貼合企業需求的分析和建議。Atlassian Rovo AI 透過整合 Jira 與 Confluence 資訊，具有智慧搜尋與自動化知識管理，使 AI 能夠理解企業內部資訊，提供精準實用的決策支援。',
    color: '#0052CC',
    bgColor: 'rgba(0, 82, 204, 0.08)',
  },
  {
    icon: 'silo',
    title: '資訊孤島',
    subtitle: 'Information Silos',
    description: '超過 47% 的數位工作者曾因難以找到工作所需的資訊而陷入資訊孤島。透過 Atlassian Rovo AI，企業能夠打破資訊孤島，利用 AI 驅動的智慧搜尋與知識管理，快速獲取關鍵資訊，提升工作效率與團隊協作。',
    color: '#6554C0',
    bgColor: 'rgba(101, 84, 192, 0.08)',
  },
  {
    icon: 'security',
    title: '安全合規',
    subtitle: 'Security & Compliance',
    description: '將 AI 技術整合到現有的 IT 基礎設施和業務流程中，可能會面臨資訊洩漏、合規性等挑戰。Atlassian Rovo AI 採用企業級安全標準，確保資料隱私與合規性，同時提供智慧型知識管理，讓企業能夠在安全無虞的環境下高效運用 AI 技術。',
    color: '#36B37E',
    bgColor: 'rgba(54, 179, 126, 0.08)',
  },
  {
    icon: 'switch',
    title: '應用程式切換',
    subtitle: 'App Switching',
    description: '數位工作者平均每天需要在 11 個應用程式之間切換以尋找資訊或完成任務。Atlassian Rovo AI 透過智慧搜尋與跨平台整合，讓使用者在單一介面中即可快速取得所需資訊，大幅減少應用程式間的切換次數。',
    color: '#FF5630',
    bgColor: 'rgba(255, 86, 48, 0.08)',
  },
]
</script>

<template>
  <section class="pain-points section" id="pain-points">
    <div class="container">
      <h2 class="section-title">企業面臨的挑戰</h2>
      <p class="section-subtitle">
        在數位轉型的過程中，企業經常面臨以下痛點。Rovo 正是為了解決這些問題而生。
      </p>
      <div class="pain-points__grid">
        <div
          v-for="(point, index) in painPoints"
          :key="index"
          class="pain-points__card animate-on-scroll"
          :style="{ '--card-color': point.color, '--card-bg': point.bgColor, animationDelay: `${index * 0.15}s` }"
        >
          <div class="pain-points__icon">
            <svg v-if="point.icon === 'knowledge'" width="32" height="32" viewBox="0 0 24 24" fill="none" :stroke="point.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            <svg v-else-if="point.icon === 'silo'" width="32" height="32" viewBox="0 0 24 24" fill="none" :stroke="point.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <svg v-else-if="point.icon === 'security'" width="32" height="32" viewBox="0 0 24 24" fill="none" :stroke="point.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <svg v-else width="32" height="32" viewBox="0 0 24 24" fill="none" :stroke="point.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 3 21 3 21 8"/>
              <line x1="4" y1="20" x2="21" y2="3"/>
              <polyline points="21 16 21 21 16 21"/>
              <line x1="15" y1="15" x2="21" y2="21"/>
              <line x1="4" y1="4" x2="9" y2="9"/>
            </svg>
          </div>
          <div class="pain-points__content">
            <h3 class="pain-points__title">{{ point.title }}</h3>
            <span class="pain-points__subtitle">{{ point.subtitle }}</span>
            <p class="pain-points__description">{{ point.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pain-points {
  background: var(--color-bg-white);
}

.pain-points__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.pain-points__card {
  background: var(--color-bg-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: 36px;
  transition: all var(--transition-base);
  display: flex;
  gap: 20px;
}

.pain-points__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--card-color);
}

.pain-points__icon {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  background: var(--card-bg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.pain-points__content {
  flex: 1;
}

.pain-points__title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 2px;
}

.pain-points__subtitle {
  font-size: var(--font-size-sm);
  color: var(--card-color);
  font-weight: 500;
  display: block;
  margin-bottom: 12px;
}

.pain-points__description {
  font-size: var(--font-size-sm);
  color: var(--color-text-medium);
  line-height: 1.8;
}

@media (max-width: 768px) {
  .pain-points__grid {
    grid-template-columns: 1fr;
  }

  .pain-points__card {
    flex-direction: column;
    padding: 28px;
  }
}
</style>
