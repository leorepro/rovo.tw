<script setup lang="ts">
interface PainPoint {
  icon: string
  dataNumber: string
  title: string
  description: string
  solution: string
  color: string
  bgColor: string
}

const painPoints: PainPoint[] = [
  {
    icon: 'knowledge',
    dataNumber: '—',
    title: '常見 AI 工具缺乏企業知識',
    description: '通用型 AI 工具無法存取企業內部知識與流程，提供的建議往往不夠貼切，難以真正協助決策。',
    solution: 'Rovo 整合 Jira、Confluence 等企業工具，讓 AI 理解你的團隊脈絡，提供精準且實用的回答。',
    color: '#0052CC',
    bgColor: 'rgba(0, 82, 204, 0.08)',
  },
  {
    icon: 'silo',
    dataNumber: '47%',
    title: '數位工作者陷入資訊孤島',
    description: '超過 47% 的數位工作者表示難以找到工作所需的資訊，團隊之間的知識斷層嚴重影響效率。',
    solution: 'Rovo 打破資訊孤島，AI 驅動的智慧搜尋能跨平台檢索 Google Drive、SharePoint 等 20+ 工具。',
    color: '#6554C0',
    bgColor: 'rgba(101, 84, 192, 0.08)',
  },
  {
    icon: 'security',
    dataNumber: '—',
    title: 'AI 與現有系統整合困難',
    description: '導入 AI 工具時常面臨資料安全、權限管理及合規性的挑戰，讓企業對 AI 採用猶豫不決。',
    solution: 'Rovo 採用企業級安全標準，通過 SOC2 及 ISO27001 認證，尊重原始資料權限設定。',
    color: '#36B37E',
    bgColor: 'rgba(54, 179, 126, 0.08)',
  },
  {
    icon: 'switch',
    dataNumber: '11 個',
    title: '每天切換的應用程式數量',
    description: '員工平均每天在 11 個應用程式間切換，大量時間消耗在搜尋資訊和切換工具上。',
    solution: 'Rovo 統一搜尋介面，讓使用者在一個地方就能找到散落在各工具中的資訊，大幅減少切換成本。',
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
            <svg v-if="point.icon === 'knowledge'" width="28" height="28" viewBox="0 0 24 24" fill="none" :stroke="point.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            <svg v-else-if="point.icon === 'silo'" width="28" height="28" viewBox="0 0 24 24" fill="none" :stroke="point.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <svg v-else-if="point.icon === 'security'" width="28" height="28" viewBox="0 0 24 24" fill="none" :stroke="point.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <svg v-else width="28" height="28" viewBox="0 0 24 24" fill="none" :stroke="point.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 3 21 3 21 8"/>
              <line x1="4" y1="20" x2="21" y2="3"/>
              <polyline points="21 16 21 21 16 21"/>
              <line x1="15" y1="15" x2="21" y2="21"/>
              <line x1="4" y1="4" x2="9" y2="9"/>
            </svg>
          </div>

          <div class="pain-points__data" v-if="point.dataNumber !== '—'">
            {{ point.dataNumber }}
          </div>

          <h3 class="pain-points__title">{{ point.title }}</h3>
          <p class="pain-points__description">{{ point.description }}</p>

          <div class="pain-points__solution">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" :stroke="point.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>{{ point.solution }}</span>
          </div>
        </div>
      </div>

      <p class="pain-points__source">
        資料來源：Atlassian State of Teams Report
      </p>
    </div>
  </section>
</template>

<style scoped>
.pain-points {
  background: var(--color-bg-white);
}

.pain-points__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.pain-points__card {
  background: var(--color-bg-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  transition: all var(--transition-base);
  text-align: center;
}

.pain-points__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--card-color);
}

.pain-points__icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  background: var(--card-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-sm);
}

.pain-points__data {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--card-color);
  line-height: 1;
  margin-bottom: var(--spacing-xs);
}

.pain-points__title {
  font-size: var(--font-size-md);
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: var(--spacing-sm);
  line-height: 1.4;
}

.pain-points__description {
  font-size: var(--font-size-sm);
  color: var(--color-text-medium);
  line-height: 1.7;
  margin-bottom: var(--spacing-md);
}

.pain-points__solution {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  text-align: left;
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--color-border);
}

.pain-points__solution svg {
  flex-shrink: 0;
  margin-top: 2px;
}

.pain-points__solution span {
  font-size: var(--font-size-sm);
  color: var(--color-text-medium);
  line-height: 1.6;
}

.pain-points__source {
  text-align: center;
  font-size: var(--font-size-xs);
  color: var(--color-text-subtle);
  margin-top: var(--spacing-xl);
}

@media (min-width: 768px) and (max-width: 1023px) {
  .pain-points__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .pain-points__grid {
    grid-template-columns: 1fr;
  }

  .pain-points__card {
    padding: 24px 20px;
  }
}
</style>
