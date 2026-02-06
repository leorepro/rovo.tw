<script setup lang="ts">
import { ref, computed } from 'vue'

const activeTab = ref(0)

const features = [
  {
    id: 'search',
    tab: 'Rovo Search',
    title: 'Rovo Search 智慧搜尋',
    description: 'Rovo Search 整合 Jira、Confluence、Google Drive、Microsoft SharePoint 等多個平台，提供跨平台智慧搜尋功能。使用者可以透過自然語言快速檢索所需資訊，無需在不同應用間來回切換。',
    highlights: [
      '跨平台整合搜尋 — 支援 Jira、Confluence 等',
      '自然語言查詢 — 直觀的搜尋體驗',
      '上下文感知 — 提供更精準的搜尋結果',
      '即時結果 — 快速獲取關鍵資訊',
    ],
    color: '#0052CC',
  },
  {
    id: 'chat',
    tab: 'Rovo Chat',
    title: 'Rovo Chat 對話式 AI',
    description: '透過 Rovo Chat，企業可輕鬆管理內部知識，實現 AI 輔助的內容創建與資訊分析，加速團隊運作效率。如同與同事對話般自然地詢問問題、腦力激盪，甚至直接執行操作。',
    highlights: [
      '對話式互動 — 像與同事交流一樣自然',
      'AI 輔助創建 — 自動生成 Confluence 頁面',
      '任務執行 — 直接從 Chat 指派 Jira 任務',
      '知識管理 — 即時分析與整理企業知識',
    ],
    color: '#6554C0',
  },
  {
    id: 'views',
    tab: '視覺化視圖',
    title: '視覺化組織視圖',
    description: 'Rovo 整合 Atlassian 工具（如 Jira、Confluence）及其他 SaaS 應用，提供組織目標、知識、團隊與工作狀態的可視化視圖。透過即時追蹤進度與對話式互動，Rovo 協助團隊迅速掌握專案狀況並預測潛在風險。',
    highlights: [
      '組織目標追蹤 — 即時掌握專案進度',
      '團隊狀態概覽 — 可視化工作分配',
      '風險預測 — AI 預測潛在問題',
      'SaaS 整合 — 連結多個應用工具',
    ],
    color: '#00B8D9',
  },
  {
    id: 'ac',
    tab: 'AC 補全',
    title: 'Acceptance Criteria 智慧補全',
    description: 'Rovo 可協助補全遺漏的 Acceptance Criteria (AC)，透過分析現有的需求描述、使用者故事或相似案例，提供合理且具體的驗收標準，確保開發團隊擁有清晰的完成定義。',
    highlights: [
      '需求分析 — 自動分析現有使用者故事',
      'AC 生成 — 提供具體驗收標準建議',
      '案例參考 — 基於歷史相似案例學習',
      '品質提升 — 減少需求遺漏與誤解',
    ],
    color: '#36B37E',
  },
  {
    id: 'agent',
    tab: 'Rovo Agent',
    title: 'Rovo Agent 智慧代理人',
    description: '透過 Rovo Agent，企業可將 Slack、Microsoft Teams 等常用通訊工具與 JSM（Jira Service Management）無縫整合，讓 Rovo Agent 即時執行指令並回覆使用者訊息，無需撰寫任何程式碼。',
    highlights: [
      'Slack / Teams 整合 — 在常用工具中直接操作',
      'JSM 連接 — 與服務管理無縫串聯',
      '即時回覆 — 自動回應使用者查詢',
      '零程式碼 — 無需開發即可部署',
    ],
    color: '#FFAB00',
  },
]

const activeFeature = computed(() => features[activeTab.value]!)
</script>

<template>
  <section class="features section" id="features">
    <div class="container">
      <h2 class="section-title">功能特色</h2>
      <p class="section-subtitle">
        Rovo 提供全方位的 AI 功能，從智慧搜尋到自動化代理人，全面提升團隊生產力
      </p>

      <div class="features__tabs">
        <button
          v-for="(feature, index) in features"
          :key="feature.id"
          class="features__tab"
          :class="{ 'features__tab--active': activeTab === index }"
          :style="activeTab === index ? { borderColor: feature.color, color: feature.color } : {}"
          @click="activeTab = index"
        >
          {{ feature.tab }}
        </button>
      </div>

      <div class="features__content animate-on-scroll">
        <transition name="fade" mode="out-in">
          <div :key="activeFeature.id" class="features__panel">
            <div class="features__panel-info">
              <h3 class="features__panel-title" :style="{ color: activeFeature.color }">
                {{ activeFeature.title }}
              </h3>
              <p class="features__panel-description">
                {{ activeFeature.description }}
              </p>
              <ul class="features__panel-highlights">
                <li
                  v-for="(highlight, idx) in activeFeature.highlights"
                  :key="idx"
                  class="features__panel-highlight"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" :fill="activeFeature.color" opacity="0.15"/>
                    <path d="M8 12l3 3 5-5" :stroke="activeFeature.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {{ highlight }}
                </li>
              </ul>
              <a href="#contact" class="btn btn-primary" :style="{ background: activeFeature.color }">
                了解更多
              </a>
            </div>
            <div class="features__panel-visual">
              <div class="features__panel-mockup" :style="{ borderColor: activeFeature.color + '30' }">
                <div class="features__panel-mockup-header">
                  <div class="features__panel-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <span class="features__panel-mockup-title">{{ activeFeature.tab }}</span>
                </div>
                <div class="features__panel-mockup-body" :style="{ background: activeFeature.color + '08' }">
                  <div class="features__panel-mockup-lines">
                    <div class="features__panel-mockup-line" v-for="i in 5" :key="i" :style="{ width: `${60 + Math.random() * 35}%`, background: activeFeature.color + '20' }"></div>
                  </div>
                  <div class="features__panel-mockup-icon" :style="{ background: activeFeature.color + '15' }">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" :fill="activeFeature.color" opacity="0.6"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  background: var(--color-bg-white);
}

.features__tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: var(--spacing-2xl);
  flex-wrap: wrap;
}

.features__tab {
  padding: 12px 24px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-medium);
  background: var(--color-bg-light);
  border: 2px solid transparent;
  border-radius: 100px;
  transition: all var(--transition-base);
}

.features__tab:hover {
  background: var(--color-bg-subtle);
}

.features__tab--active {
  background: var(--color-bg-white);
  box-shadow: var(--shadow-md);
}

.features__panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.features__panel-title {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-md);
}

.features__panel-description {
  font-size: var(--font-size-base);
  color: var(--color-text-medium);
  line-height: 1.8;
  margin-bottom: var(--spacing-lg);
}

.features__panel-highlights {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: var(--spacing-xl);
}

.features__panel-highlight {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--font-size-sm);
  color: var(--color-text-dark);
}

.features__panel-visual {
  display: flex;
  justify-content: center;
}

.features__panel-mockup {
  width: 100%;
  max-width: 480px;
  border-radius: var(--radius-xl);
  border: 2px solid var(--color-border);
  overflow: hidden;
  background: white;
  box-shadow: var(--shadow-lg);
}

.features__panel-mockup-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-subtle);
}

.features__panel-dots {
  display: flex;
  gap: 6px;
}

.features__panel-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-border);
}

.features__panel-dots span:nth-child(1) { background: #FF5F57; }
.features__panel-dots span:nth-child(2) { background: #FFBD2E; }
.features__panel-dots span:nth-child(3) { background: #28C840; }

.features__panel-mockup-title {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  font-weight: 500;
}

.features__panel-mockup-body {
  padding: 32px 24px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.features__panel-mockup-lines {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.features__panel-mockup-line {
  height: 10px;
  border-radius: 5px;
}

.features__panel-mockup-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 900px) {
  .features__panel {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .features__panel-visual {
    order: -1;
  }

  .features__tabs {
    gap: 4px;
  }

  .features__tab {
    padding: 8px 16px;
    font-size: var(--font-size-xs);
  }
}
</style>
