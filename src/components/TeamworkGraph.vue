<script setup lang="ts">
const comparisons = [
  { dimension: '知識來源', general: '公開網路資料', rovo: '企業內部 Jira/Confluence + 第三方工具' },
  { dimension: '回答角度', general: '通用、直線化', rovo: '團隊協作視角、個性化' },
  { dimension: '學習能力', general: '無組織脈絡', rovo: '從每次互動中自動學習' },
  { dimension: '權限控制', general: '無', rovo: '尊重原始資料權限' },
]

const graphElements = [
  { label: '團隊', icon: 'users', color: '#0052CC' },
  { label: '工作內容', icon: 'tasks', color: '#6554C0' },
  { label: '目標', icon: 'target', color: '#36B37E' },
  { label: '知識', icon: 'book', color: '#00B8D9' },
]
</script>

<template>
  <section class="twg section" id="technology">
    <div class="container">
      <h2 class="section-title">Rovo 為什麼比一般 AI 更懂你的團隊？</h2>
      <p class="section-subtitle">
        答案是 <strong>Teamwork Graph</strong> — Atlassian 雲端平台的核心數據層
      </p>

      <div class="twg__content">
        <div class="twg__comparison animate-on-scroll">
          <div class="twg__comparison-header">
            <div class="twg__comparison-col twg__comparison-col--dim"></div>
            <div class="twg__comparison-col twg__comparison-col--general">一般生成式 AI</div>
            <div class="twg__comparison-col twg__comparison-col--rovo">Rovo（Teamwork Graph）</div>
          </div>
          <div v-for="(c, i) in comparisons" :key="i" class="twg__comparison-row">
            <div class="twg__comparison-col twg__comparison-col--dim">{{ c.dimension }}</div>
            <div class="twg__comparison-col twg__comparison-col--general">{{ c.general }}</div>
            <div class="twg__comparison-col twg__comparison-col--rovo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#36B37E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {{ c.rovo }}
            </div>
          </div>
        </div>

        <div class="twg__graph animate-on-scroll">
          <div class="twg__graph-center">
            <span>Teamwork<br>Graph</span>
          </div>
          <div
            v-for="(el, i) in graphElements"
            :key="i"
            class="twg__graph-node"
            :class="`twg__graph-node--${i}`"
            :style="{ '--node-color': el.color }"
          >
            <svg v-if="el.icon === 'users'" width="20" height="20" viewBox="0 0 24 24" fill="none" :stroke="el.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            </svg>
            <svg v-else-if="el.icon === 'tasks'" width="20" height="20" viewBox="0 0 24 24" fill="none" :stroke="el.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
            </svg>
            <svg v-else-if="el.icon === 'target'" width="20" height="20" viewBox="0 0 24 24" fill="none" :stroke="el.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" :stroke="el.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            <span>{{ el.label }}</span>
          </div>
        </div>
      </div>

      <div class="twg__callout animate-on-scroll">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFAB00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
        <p>簡單來說，<strong>Rovo 越用越懂你的團隊</strong></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.twg {
  background: var(--color-bg-light);
}

.twg__content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: var(--spacing-2xl);
  align-items: start;
  margin-bottom: var(--spacing-2xl);
}

/* Comparison table */
.twg__comparison {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.twg__comparison-header {
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  font-weight: 700;
  font-size: var(--font-size-sm);
}

.twg__comparison-row {
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  border-top: 1px solid var(--color-border);
}

.twg__comparison-col {
  padding: 14px 16px;
  font-size: var(--font-size-sm);
  line-height: 1.5;
}

.twg__comparison-col--dim {
  font-weight: 600;
  color: var(--color-text-dark);
  background: var(--color-bg-subtle);
}

.twg__comparison-col--general {
  color: var(--color-text-light);
}

.twg__comparison-col--rovo {
  background: rgba(0, 82, 204, 0.03);
  color: var(--color-text-dark);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
}

.twg__comparison-header .twg__comparison-col--general,
.twg__comparison-header .twg__comparison-col--rovo {
  text-align: center;
  justify-content: center;
}

.twg__comparison-header .twg__comparison-col--rovo {
  background: rgba(0, 82, 204, 0.06);
  color: var(--color-primary);
}

/* Graph visualization */
.twg__graph {
  position: relative;
  width: 280px;
  height: 280px;
  margin: 0 auto;
}

.twg__graph-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.3;
  box-shadow: 0 8px 32px rgba(0, 82, 204, 0.3);
}

.twg__graph-node {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.twg__graph-node span {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-medium);
}

.twg__graph-node--0 { top: 0; left: 50%; transform: translateX(-50%); }
.twg__graph-node--1 { top: 50%; right: 0; transform: translateY(-50%); }
.twg__graph-node--2 { bottom: 0; left: 50%; transform: translateX(-50%); }
.twg__graph-node--3 { top: 50%; left: 0; transform: translateY(-50%); }

/* Callout */
.twg__callout {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 32px;
  background: rgba(255, 171, 0, 0.08);
  border: 1px solid rgba(255, 171, 0, 0.2);
  border-radius: var(--radius-lg);
  max-width: 500px;
  margin: 0 auto;
}

.twg__callout p {
  font-size: var(--font-size-lg);
  color: var(--color-text-dark);
}

@media (max-width: 1023px) {
  .twg__content {
    grid-template-columns: 1fr;
  }

  .twg__graph {
    order: -1;
  }
}

@media (max-width: 767px) {
  .twg__comparison-header,
  .twg__comparison-row {
    grid-template-columns: 80px 1fr 1fr;
  }

  .twg__comparison-col {
    padding: 10px 8px;
    font-size: var(--font-size-xs);
  }
}
</style>
