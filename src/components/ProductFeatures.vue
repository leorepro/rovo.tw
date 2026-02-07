<script setup lang="ts">
import { ref, computed } from 'vue'

interface Feature {
  id: string
  tab: string
  icon: string
  title: string
  description: string
  subFeatures: { title: string; description: string }[]
  color: string
}

const features: Feature[] = [
  {
    id: 'find',
    tab: 'Find — 智能搜尋',
    icon: 'search',
    title: '跨平台智能搜尋',
    description: '一個搜尋框，查遍所有工具的資料。Rovo Search 整合 Jira、Confluence、Google Drive、SharePoint 等 20+ 工具，以上下文理解取代關鍵字比對，直接給出答案而非連結列表。',
    subFeatures: [
      { title: '跨平台整合', description: '同時搜尋 Jira、Confluence、Google Drive、SharePoint 及更多工具' },
      { title: '上下文理解', description: 'AI 理解問題意圖，減少工具切換，直接提供精準答案' },
    ],
    color: '#0052CC',
  },
  {
    id: 'learn',
    tab: 'Learn — AI 知識管理',
    icon: 'book',
    title: 'AI 驅動的知識管理',
    description: '透過 Rovo Chat 進行對話式知識管理，AI 自動解析企業內部文件，建立知識卡片。工作中即時查詢術語、縮寫與公司特定語言的定義，不打斷你的心流。',
    subFeatures: [
      { title: '對話式探索', description: '以自然語言提問，AI 從企業知識庫中找出最相關的回答' },
      { title: '即時定義查詢', description: '工作中遇到不熟悉的術語？Rovo Definition 即時提供解釋，無需離開頁面' },
    ],
    color: '#6554C0',
  },
  {
    id: 'act',
    tab: 'Act — 自動執行',
    icon: 'zap',
    title: 'AI 代理人自動化',
    description: 'Rovo Agent 是你的 AI 虛擬隊友，能自動執行重複性工作、簡化工作流，讓團隊專注在高價值的任務上。無需撰寫程式碼，即可打造專屬 Agent。',
    subFeatures: [
      { title: 'AI 代理人 Agents', description: '自動化重複工作，從資源管理到流程報告，一鍵完成' },
      { title: '簡化工作流', description: 'No-code 設定，串接 Slack、Teams、JSM 等工具，自動觸發行動' },
    ],
    color: '#36B37E',
  },
]

const activeTab = ref(0)
const activeFeature = computed(() => features[activeTab.value]!)
</script>

<template>
  <section class="features section" id="features">
    <div class="container">
      <h2 class="section-title">Rovo 是什麼？</h2>
      <p class="section-subtitle">
        一款由 Atlassian 推出的生成式 AI 助手，幫助企業高效搜尋、學習與行動
      </p>

      <div class="features__tabs" role="tablist">
        <button
          v-for="(feature, index) in features"
          :key="feature.id"
          class="features__tab"
          :class="{ 'features__tab--active': activeTab === index }"
          :style="activeTab === index ? { borderColor: feature.color, color: feature.color } : {}"
          role="tab"
          :aria-selected="activeTab === index"
          @click="activeTab = index"
        >
          <svg v-if="feature.icon === 'search'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <svg v-else-if="feature.icon === 'book'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
          {{ feature.tab }}
        </button>
      </div>

      <div class="features__panel" role="tabpanel">
        <div class="features__info">
          <h3 class="features__title" :style="{ color: activeFeature.color }">
            {{ activeFeature.title }}
          </h3>
          <p class="features__description">
            {{ activeFeature.description }}
          </p>
          <div class="features__sub-list">
            <div v-for="sub in activeFeature.subFeatures" :key="sub.title" class="features__sub-item">
              <div class="features__sub-icon" :style="{ background: activeFeature.color }">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div>
                <strong>{{ sub.title }}</strong>
                <p>{{ sub.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="features__visual">
          <div class="features__mockup" :style="{ '--feature-color': activeFeature.color }">
            <div class="features__mockup-header">
              <div class="features__mockup-dots">
                <span></span><span></span><span></span>
              </div>
              <span class="features__mockup-title">{{ activeFeature.tab.split(' — ')[0] }}</span>
            </div>
            <div class="features__mockup-body">
              <!-- Find mockup -->
              <template v-if="activeFeature.id === 'find'">
                <div class="mockup-search">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#97A0AF" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  <span>Q3 專案進度報告在哪？</span>
                </div>
                <div class="mockup-result">
                  <div class="mockup-result-badge" style="background: #E3FCEF; color: #006644;">Confluence</div>
                  <span>Q3 專案進度總結 — 最後更新 2 小時前</span>
                </div>
                <div class="mockup-result">
                  <div class="mockup-result-badge" style="background: #DEEBFF; color: #0747A6;">Jira</div>
                  <span>PROJ-89: Q3 里程碑追蹤</span>
                </div>
                <div class="mockup-result">
                  <div class="mockup-result-badge" style="background: #EAE6FF; color: #403294;">Drive</div>
                  <span>Q3_Progress_Report_v3.pdf</span>
                </div>
              </template>

              <!-- Learn mockup -->
              <template v-else-if="activeFeature.id === 'learn'">
                <div class="mockup-chat-msg mockup-chat-msg--user">
                  <span class="mockup-chat-avatar mockup-chat-avatar--user">U</span>
                  <div class="mockup-chat-bubble">什麼是 OKR？我們團隊怎麼用？</div>
                </div>
                <div class="mockup-chat-msg mockup-chat-msg--ai">
                  <span class="mockup-chat-avatar mockup-chat-avatar--ai">R</span>
                  <div class="mockup-chat-bubble mockup-chat-bubble--ai">
                    <strong>OKR (Objectives & Key Results)</strong> 是貴公司採用的目標管理框架。根據 Confluence 上的《團隊運作手冊》，你們團隊每季設定 3-5 個 Objectives…
                  </div>
                </div>
              </template>

              <!-- Act mockup -->
              <template v-else>
                <div class="mockup-agent-card">
                  <div class="mockup-agent-icon" style="background: #E3FCEF;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006644" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  </div>
                  <div>
                    <strong>Sprint Review Agent</strong>
                    <p style="font-size: 0.75rem; color: #6B778C;">自動彙整 Sprint 完成項目並產生報告</p>
                  </div>
                </div>
                <div class="mockup-agent-card">
                  <div class="mockup-agent-icon" style="background: #DEEBFF;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0747A6" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
                  </div>
                  <div>
                    <strong>Onboarding Agent</strong>
                    <p style="font-size: 0.75rem; color: #6B778C;">引導新成員完成入職流程與權限設定</p>
                  </div>
                </div>
                <div class="mockup-agent-card">
                  <div class="mockup-agent-icon" style="background: #EAE6FF;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#403294" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <div>
                    <strong>Customer Support Agent</strong>
                    <p style="font-size: 0.75rem; color: #6B778C;">自動分析客戶問題並建議解決方案</p>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  background: var(--color-bg-light);
}

.features__tabs {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: var(--spacing-2xl);
  flex-wrap: wrap;
}

.features__tab {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 100px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  background: white;
  color: var(--color-text-medium);
  border: 2px solid transparent;
  transition: all var(--transition-base);
}

.features__tab:hover {
  background: white;
  box-shadow: var(--shadow-sm);
}

.features__tab--active {
  background: white;
  box-shadow: var(--shadow-md);
}

.features__panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: start;
}

.features__info {
  padding-top: var(--spacing-sm);
}

.features__title {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-md);
}

.features__description {
  font-size: var(--font-size-base);
  color: var(--color-text-medium);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
}

.features__sub-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.features__sub-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.features__sub-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.features__sub-item strong {
  display: block;
  font-size: var(--font-size-base);
  color: var(--color-text-dark);
  margin-bottom: 4px;
}

.features__sub-item p {
  font-size: var(--font-size-sm);
  color: var(--color-text-medium);
  line-height: 1.6;
}

/* Mockup styles */
.features__visual {
  display: flex;
  justify-content: center;
}

.features__mockup {
  background: white;
  border-radius: var(--radius-xl);
  overflow: hidden;
  width: 100%;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);
}

.features__mockup-header {
  background: var(--color-bg-light);
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--color-border);
}

.features__mockup-dots {
  display: flex;
  gap: 5px;
}

.features__mockup-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.features__mockup-dots span:nth-child(1) { background: #FF5F57; }
.features__mockup-dots span:nth-child(2) { background: #FFBD2E; }
.features__mockup-dots span:nth-child(3) { background: #28CA41; }

.features__mockup-title {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-medium);
}

.features__mockup-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 260px;
}

/* Find mockup items */
.mockup-search {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--color-bg-light);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 10px 14px;
  font-size: 0.8rem;
  color: var(--color-text-medium);
}

.mockup-result {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  color: var(--color-text-dark);
}

.mockup-result-badge {
  font-size: 0.65rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
}

/* Learn mockup items */
.mockup-chat-msg {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.mockup-chat-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 700;
  flex-shrink: 0;
}

.mockup-chat-avatar--user {
  background: var(--color-secondary-light);
  color: white;
}

.mockup-chat-avatar--ai {
  background: linear-gradient(135deg, #0065FF, #6554C0);
  color: white;
}

.mockup-chat-bubble {
  background: var(--color-bg-light);
  border-radius: var(--radius-md);
  padding: 10px 14px;
  font-size: 0.8rem;
  color: var(--color-text-dark);
  line-height: 1.5;
}

.mockup-chat-bubble--ai {
  background: rgba(0, 82, 204, 0.05);
}

.mockup-chat-bubble strong {
  display: block;
  margin-bottom: 4px;
}

/* Act mockup items */
.mockup-agent-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.mockup-agent-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.mockup-agent-card strong {
  display: block;
  font-size: 0.85rem;
  color: var(--color-text-dark);
}

@media (max-width: 1023px) {
  .features__panel {
    grid-template-columns: 1fr;
  }

  .features__visual {
    order: -1;
  }
}

@media (max-width: 767px) {
  .features__tabs {
    flex-direction: column;
    align-items: stretch;
  }

  .features__tab {
    justify-content: center;
  }

  .features__title {
    font-size: var(--font-size-xl);
  }
}
</style>
