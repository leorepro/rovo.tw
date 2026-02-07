<script setup lang="ts">
import { ref } from 'vue'

interface FaqItem {
  question: string
  answer: string
}

interface FaqCategory {
  id: string
  label: string
  items: FaqItem[]
}

const categories: FaqCategory[] = [
  {
    id: 'features',
    label: '功能與整合',
    items: [
      {
        question: 'Rovo 支援哪些第三方產品？',
        answer: 'Rovo 透過 Connector 機制支援 Google Drive、Microsoft SharePoint、Microsoft Teams、Slack、GitHub、Figma、Loom、Trello 等 20+ 工具。連接後，Rovo 即可跨平台搜尋與整合這些工具中的資料。',
      },
      {
        question: '權限如何管理和同步？',
        answer: 'Rovo 尊重原始資料的權限設定。例如，若某份 Google Drive 文件僅限特定使用者存取，Rovo 搜尋結果也只會對有權限的使用者顯示該文件。管理員可在 Atlassian Admin 中統一管理 Connector 的權限同步設定。',
      },
      {
        question: 'Rovo 使用哪些 AI 模型？',
        answer: 'Rovo 使用 OpenAI 的模型以及 Atlassian 自託管的開源模型。所有 AI 供應商均不會保留或使用你的企業數據進行模型訓練。',
      },
      {
        question: '瀏覽器擴展能做什麼？',
        answer: 'Rovo Chrome Extension 讓你在任何網頁上都能使用 Rovo 的搜尋和對話功能。它不會自動讀取網頁內容，僅在你主動發起搜尋或對話時才會存取企業知識庫。',
      },
    ],
  },
  {
    id: 'security',
    label: '安全與合規',
    items: [
      {
        question: 'Rovo 有哪些安全認證？',
        answer: 'Atlassian 已通過 SOC2 Type II 和 ISO 27001 認證。Rovo 作為 Atlassian 雲端平台的一部分，完全符合這些安全標準。',
      },
      {
        question: '數據如何被使用和儲存？',
        answer: 'Rovo 會建立企業資料的索引以提供搜尋功能。索引範圍可由管理員設定，資料儲存在 Atlassian 的安全雲端環境中，並受到嚴格的存取控制。',
      },
      {
        question: '刪除數據後會發生什麼？',
        answer: '有三種情境：(1) 管理員移除 Connector 時，相關索引會被清除；(2) 來源端刪除 Smart Link 時，對應索引會自動更新；(3) 斷開第三方連接時，所有相關索引資料會在 30 天內完全移除。',
      },
      {
        question: '與第三方產品的資料互通安全嗎？',
        answer: '所有第三方整合均受 Atlassian 的服務條款約束。建議定期審查已連接的第三方工具及其資料存取範圍，確保符合貴公司的資安政策。',
      },
    ],
  },
  {
    id: 'pricing',
    label: '價格與導入',
    items: [
      {
        question: 'Rovo 的價格方案？',
        answer: 'Rovo 的定價依 Atlassian 官方方案而定，依使用者人數計費。Titansoft 作為 Atlassian 授權合作夥伴，可提供專屬的顧問服務與導入支援。請聯繫我們取得報價。',
      },
      {
        question: '如何開始免費試用？',
        answer: '你可以直接在 Atlassian 平台上啟動 Rovo 的試用期，或透過 Titansoft 申請延長試用。我們會協助你完成初始設定與功能導覽。',
      },
      {
        question: '導入 Rovo 需要多長時間？',
        answer: '基本設定可在 1-2 天內完成。完整導入（包含 Connector 設定、Agent 建置、團隊教育訓練）通常需要 2-4 週，視企業規模與複雜度而定。',
      },
      {
        question: 'Titansoft 提供哪些支援？',
        answer: 'Titansoft 提供完整的導入顧問服務，包括：技術支援、架構規劃、Agent 客製化開發、團隊教育訓練，以及持續的售後支援。',
      },
    ],
  },
]

const activeCategory = ref('features')
const openQuestions = ref<Set<string>>(new Set())

const toggleQuestion = (key: string) => {
  if (openQuestions.value.has(key)) {
    openQuestions.value.delete(key)
  } else {
    openQuestions.value.add(key)
  }
  openQuestions.value = new Set(openQuestions.value)
}

const activeItems = () => {
  return categories.find(c => c.id === activeCategory.value)?.items ?? []
}
</script>

<template>
  <section class="faq section" id="faq">
    <div class="container">
      <h2 class="section-title">常見問題</h2>
      <p class="section-subtitle">
        關於 Rovo 的功能、安全與導入，這裡有你想知道的答案
      </p>

      <div class="faq__tabs" role="tablist">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="faq__tab"
          :class="{ 'faq__tab--active': activeCategory === cat.id }"
          role="tab"
          :aria-selected="activeCategory === cat.id"
          @click="activeCategory = cat.id"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="faq__list" role="tabpanel">
        <div
          v-for="(item, i) in activeItems()"
          :key="`${activeCategory}-${i}`"
          class="faq__item"
          :class="{ 'faq__item--open': openQuestions.has(`${activeCategory}-${i}`) }"
        >
          <button
            class="faq__question"
            @click="toggleQuestion(`${activeCategory}-${i}`)"
            :aria-expanded="openQuestions.has(`${activeCategory}-${i}`)"
          >
            <span>{{ item.question }}</span>
            <svg class="faq__chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <div class="faq__answer">
            <div class="faq__answer-inner">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="faq__cta">
        <p>找不到答案？<a href="mailto:sales@titansoft.com.sg">聯絡我們 sales@titansoft.com.sg</a></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  background: var(--color-bg-light);
}

.faq__tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: var(--spacing-2xl);
  flex-wrap: wrap;
}

.faq__tab {
  padding: 10px 24px;
  border-radius: 100px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  background: white;
  color: var(--color-text-medium);
  border: 1px solid var(--color-border);
  transition: all var(--transition-fast);
}

.faq__tab:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.faq__tab--active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.faq__list {
  max-width: 800px;
  margin: 0 auto;
}

.faq__item {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  margin-bottom: 8px;
  overflow: hidden;
  transition: all var(--transition-base);
}

.faq__item:hover {
  border-color: var(--color-primary-light);
}

.faq__question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-dark);
  text-align: left;
  background: none;
  gap: 16px;
}

.faq__chevron {
  transition: transform var(--transition-base);
  flex-shrink: 0;
  color: var(--color-text-light);
}

.faq__item--open .faq__chevron {
  transform: rotate(180deg);
  color: var(--color-primary);
}

.faq__answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-slow);
}

.faq__item--open .faq__answer {
  max-height: 300px;
}

.faq__answer-inner {
  padding: 0 24px 18px;
}

.faq__answer p {
  font-size: var(--font-size-sm);
  color: var(--color-text-medium);
  line-height: 1.8;
}

.faq__cta {
  text-align: center;
  margin-top: var(--spacing-2xl);
}

.faq__cta p {
  font-size: var(--font-size-sm);
  color: var(--color-text-medium);
}

.faq__cta a {
  font-weight: 600;
}
</style>
