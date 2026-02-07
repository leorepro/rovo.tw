<script setup lang="ts">
const cases = [
  {
    industry: '科技業',
    company: '某科技公司',
    challenge: '團隊分散在多個辦公室，專案資訊散落在 Jira、Confluence 和 Google Drive，工程師每天花大量時間搜尋文件。',
    solution: '導入 Rovo Search 整合所有工具，並建立 Rovo Agent 自動匯整 Sprint 報告。',
    metric: '資訊搜尋時間減少 45%',
    quote: 'Rovo 讓我們的工程師可以專注在真正重要的事情上，而不是到處找文件。',
    role: 'CTO',
    color: '#0052CC',
  },
  {
    industry: '金融業',
    company: '某金融服務公司',
    challenge: '客服團隊處理大量技術諮詢，回覆速度不夠快，客戶滿意度下降。需要更快速地定位知識庫中的解決方案。',
    solution: '部署 Rovo Agent 整合 JSM 與 Slack，自動分析客戶問題並建議解決方案。',
    metric: '平均回覆時間縮短 60%',
    quote: '導入 Rovo Agent 後，我們的首次回覆時間從 4 小時降到了 1.5 小時。',
    role: '客服主管',
    color: '#6554C0',
  },
  {
    industry: '製造業',
    company: '某製造企業',
    challenge: '跨部門協作困難，研發、生產、品管的知識無法有效共享，新人培訓成本高。',
    solution: '利用 Rovo Chat 建立企業知識問答系統，新人可以透過對話快速學習公司流程。',
    metric: '新人上手時間縮短 30%',
    quote: '新同事透過 Rovo 問問題，就像有一位隨時在線的資深同事指導。',
    role: 'HR 主管',
    color: '#36B37E',
  },
]
</script>

<template>
  <section class="cases section" id="customers">
    <div class="container">
      <h2 class="section-title">看看誰在用 Rovo</h2>
      <p class="section-subtitle">
        來自不同產業的企業，透過 Rovo 實現效率提升與數位轉型
      </p>

      <div class="cases__grid">
        <div
          v-for="(c, i) in cases"
          :key="i"
          class="cases__card animate-on-scroll"
          :style="{ '--case-color': c.color, animationDelay: `${i * 0.15}s` }"
        >
          <div class="cases__header">
            <div class="cases__logo" :style="{ background: c.color }">
              {{ c.company[0] }}
            </div>
            <div>
              <h3 class="cases__company">{{ c.company }}</h3>
              <span class="cases__industry">{{ c.industry }}</span>
            </div>
          </div>

          <div class="cases__body">
            <div class="cases__section">
              <span class="cases__label">挑戰</span>
              <p>{{ c.challenge }}</p>
            </div>
            <div class="cases__section">
              <span class="cases__label">解方</span>
              <p>{{ c.solution }}</p>
            </div>
          </div>

          <div class="cases__metric">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#36B37E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
            </svg>
            <strong>{{ c.metric }}</strong>
          </div>

          <blockquote class="cases__quote">
            <p>「{{ c.quote }}」</p>
            <cite>— {{ c.role }}, {{ c.company }}</cite>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cases {
  background: var(--color-bg-white);
}

.cases__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.cases__card {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
}

.cases__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.cases__header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: var(--spacing-lg);
}

.cases__logo {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  flex-shrink: 0;
}

.cases__company {
  font-size: var(--font-size-md);
  font-weight: 700;
}

.cases__industry {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

.cases__body {
  flex: 1;
  margin-bottom: var(--spacing-md);
}

.cases__section {
  margin-bottom: var(--spacing-sm);
}

.cases__label {
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: var(--case-color);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
  margin-bottom: 4px;
}

.cases__section p {
  font-size: var(--font-size-sm);
  color: var(--color-text-medium);
  line-height: 1.7;
}

.cases__metric {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(54, 179, 126, 0.06);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
}

.cases__metric strong {
  font-size: var(--font-size-sm);
  color: #006644;
}

.cases__quote {
  border-left: 3px solid var(--case-color);
  padding-left: 16px;
}

.cases__quote p {
  font-size: var(--font-size-sm);
  color: var(--color-text-dark);
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 6px;
}

.cases__quote cite {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  font-style: normal;
}

@media (max-width: 1023px) {
  .cases__grid {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>
