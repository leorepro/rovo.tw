<script setup lang="ts">
import { ref, computed } from 'vue'

interface UseCase {
  icon: string
  title: string
  category: string
  description: string
  metrics: string
  roles: string[]
  badges?: string[]
}

const categories = ['全部', 'Find', 'Learn', 'Act']
const activeCategory = ref('全部')

const useCases: UseCase[] = [
  {
    icon: 'bookmark',
    title: '直接獲得答案，而不是另一個連結',
    category: 'Find',
    description: '透過 Rovo Bookmarks 搜尋功能，AI 驅動的搜尋優化讓重要內容優先呈現，直接給出答案而非連結列表。不再浪費時間逐一點開搜尋結果。',
    metrics: '搜尋效率提升 60%',
    roles: ['所有知識工作者'],
  },
  {
    icon: 'chat',
    title: '像對話一樣，讓 Rovo 協助創建內容',
    category: 'Learn',
    description: '透過 Rovo Chat 進行對話式知識管理，AI 輔助內容創建與資訊分析，從初稿撰寫到數據整理，加速團隊運作效率。',
    metrics: '內容產出速度提升 40%',
    roles: ['內容編輯', 'PM', '知識管理者'],
  },
  {
    icon: 'chart',
    title: 'Rovo 助團隊提升效率並降低專案風險',
    category: 'Find',
    description: 'Rovo 整合 Jira、Confluence 及其他 SaaS 應用，提供組織目標與工作狀態的可視化視圖，即時追蹤進度並預測潛在風險。',
    metrics: '專案風險預警提前 2 週',
    roles: ['專案經理', 'Scrum Master', '管理層'],
  },
  {
    icon: 'edit',
    title: 'Rovo 協助撰寫產品驗收條件',
    category: 'Act',
    description: 'Rovo 分析現有需求描述與使用者故事，自動補全遺漏的 Acceptance Criteria，確保開發團隊對需求有明確理解。',
    metrics: 'AC 撰寫時間減少 50%',
    roles: ['PO', '開發團隊'],
  },
  {
    icon: 'code',
    title: 'Rovo 搭配 GitHub Copilot，提升開發效率',
    category: 'Find',
    description: '開發人員在 IDE 中透過 Rovo 存取 Jira 或 Confluence 的任務資訊，不需離開開發環境即可獲取完整上下文，搭配 Copilot 加速開發。',
    metrics: '開發者上下文切換減少 35%',
    roles: ['軟體開發人員'],
  },
  {
    icon: 'headset',
    title: 'Rovo Agent 提升團隊效率與客戶滿意度',
    category: 'Act',
    description: 'Rovo Agent 協助客服團隊快速分析問題、聚焦核心、列舉解決方案、找到對應負責人並回報進度，大幅縮短問題解決時間。',
    metrics: '問題解決時間縮短 40%',
    roles: ['客服團隊', '技術支援', '管理者'],
  },
  {
    icon: 'integration',
    title: 'Rovo Agent 無縫整合 Slack、Teams 與 JSM',
    category: 'Act',
    description: 'No-code 串接通訊工具與 JSM，讓 Agent 即時回覆訊息、量化提問數據，並自動進行品質分析，支援手機操作。',
    metrics: '回覆時間縮短 65%',
    roles: ['IT 管理者', 'ITSM 團隊'],
    badges: ['支援手機', 'No-code'],
  },
]

const filteredUseCases = computed(() => {
  if (activeCategory.value === '全部') return useCases
  return useCases.filter((uc) => uc.category === activeCategory.value)
})
</script>

<template>
  <section class="use-cases section" id="use-cases">
    <div class="container">
      <h2 class="section-title">實際應用範例</h2>
      <p class="section-subtitle">
        看看不同角色如何運用 Rovo 解決日常工作中的挑戰
      </p>

      <div class="use-cases__filters" role="tablist">
        <button
          v-for="cat in categories"
          :key="cat"
          class="use-cases__filter"
          :class="{ 'use-cases__filter--active': activeCategory === cat }"
          role="tab"
          :aria-selected="activeCategory === cat"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <div class="use-cases__grid">
        <div
          v-for="(uc, index) in filteredUseCases"
          :key="uc.title"
          class="use-cases__card animate-on-scroll"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="use-cases__card-header">
            <div class="use-cases__icon">
              <svg v-if="uc.icon === 'bookmark'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
              <svg v-else-if="uc.icon === 'chat'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <svg v-else-if="uc.icon === 'chart'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
              <svg v-else-if="uc.icon === 'edit'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
              <svg v-else-if="uc.icon === 'code'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
              <svg v-else-if="uc.icon === 'headset'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
              </svg>
              <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
            </div>
            <span class="use-cases__category-badge">{{ uc.category }}</span>
          </div>

          <h3 class="use-cases__title">{{ uc.title }}</h3>
          <p class="use-cases__description">{{ uc.description }}</p>

          <div class="use-cases__metrics">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#36B37E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
            </svg>
            <span>{{ uc.metrics }}</span>
          </div>

          <div class="use-cases__footer">
            <div class="use-cases__roles">
              <span v-for="role in uc.roles" :key="role" class="use-cases__role">{{ role }}</span>
            </div>
            <div v-if="uc.badges" class="use-cases__badges">
              <span v-for="badge in uc.badges" :key="badge" class="use-cases__badge">{{ badge }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.use-cases {
  background: var(--color-bg-white);
}

.use-cases__filters {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: var(--spacing-2xl);
  flex-wrap: wrap;
}

.use-cases__filter {
  padding: 8px 20px;
  border-radius: 100px;
  font-size: var(--font-size-sm);
  font-weight: 500;
  background: var(--color-bg-light);
  color: var(--color-text-medium);
  transition: all var(--transition-fast);
}

.use-cases__filter:hover {
  background: var(--color-bg-subtle);
  color: var(--color-primary);
}

.use-cases__filter--active {
  background: var(--color-primary);
  color: white;
}

.use-cases__filter--active:hover {
  background: var(--color-primary-dark);
  color: white;
}

.use-cases__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.use-cases__card {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
}

.use-cases__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.use-cases__card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
}

.use-cases__icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: var(--color-bg-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}

.use-cases__category-badge {
  font-size: var(--font-size-xs);
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 100px;
  background: var(--color-bg-light);
  color: var(--color-text-medium);
}

.use-cases__title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: var(--spacing-sm);
  line-height: 1.4;
}

.use-cases__description {
  font-size: var(--font-size-sm);
  color: var(--color-text-medium);
  line-height: 1.7;
  margin-bottom: var(--spacing-md);
  flex: 1;
}

.use-cases__metrics {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: rgba(54, 179, 126, 0.06);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
}

.use-cases__metrics span {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: #006644;
}

.use-cases__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
}

.use-cases__roles {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.use-cases__role {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  padding: 2px 10px;
  background: var(--color-bg-light);
  border-radius: 100px;
}

.use-cases__badges {
  display: flex;
  gap: 6px;
}

.use-cases__badge {
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--color-primary);
  padding: 2px 10px;
  background: rgba(0, 82, 204, 0.08);
  border-radius: 100px;
}

@media (max-width: 767px) {
  .use-cases__grid {
    grid-template-columns: 1fr;
  }
}
</style>
