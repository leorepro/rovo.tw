<script setup lang="ts">
const agents = [
  {
    icon: 'automation',
    title: 'Agent + Automation 結合',
    description: '將 Rovo Agent 與 Jira Automation 搭配使用，實現資源管理、流程報告自動化，解放團隊雙手。',
    bullets: ['Sprint 結束自動產生回顧報告', '資源分配異常時主動通知', '自動更新專案儀表板'],
    color: '#0052CC',
  },
  {
    icon: 'custom',
    title: '打造專屬 Agent',
    description: '依據團隊需求設定 Agent 的知識範圍與行為模式，打造個性化的 AI 助手。',
    bullets: ['可控知識來源範圍', '自訂回應風格與語氣', '決策效率大幅提升'],
    color: '#6554C0',
  },
  {
    icon: 'marketplace',
    title: 'Agent Marketplace',
    description: '從 Atlassian Marketplace 選擇預建 Agent 模板，快速部署常見工作流程。',
    bullets: ['數十種預建 Agent 模板', '一鍵部署即可使用', '社群持續貢獻新模板'],
    color: '#00B8D9',
  },
  {
    icon: 'developer',
    title: '開發者自訂 Agent',
    description: '透過 Forge 平台與 API 進行進階自訂，滿足企業特殊需求。',
    bullets: ['Forge 平台支援', 'REST API 完整整合', '企業級進階自訂能力'],
    color: '#36B37E',
  },
]
</script>

<template>
  <section class="agent section" id="agents">
    <div class="container">
      <h2 class="section-title">Rovo Agent — 你的 AI 虛擬隊友</h2>
      <p class="section-subtitle">
        靈活應用組織知識，節省人力成本，提升產出品質
      </p>

      <div class="agent__grid">
        <div
          v-for="(a, i) in agents"
          :key="i"
          class="agent__card animate-on-scroll"
          :style="{ '--agent-color': a.color, animationDelay: `${i * 0.1}s` }"
        >
          <div class="agent__icon">
            <svg v-if="a.icon === 'automation'" width="24" height="24" viewBox="0 0 24 24" fill="none" :stroke="a.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            <svg v-else-if="a.icon === 'custom'" width="24" height="24" viewBox="0 0 24 24" fill="none" :stroke="a.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            <svg v-else-if="a.icon === 'marketplace'" width="24" height="24" viewBox="0 0 24 24" fill="none" :stroke="a.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" :stroke="a.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>

          <h3 class="agent__title">{{ a.title }}</h3>
          <p class="agent__description">{{ a.description }}</p>

          <ul class="agent__bullets">
            <li v-for="b in a.bullets" :key="b">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" :stroke="a.color" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {{ b }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.agent {
  background: var(--color-bg-white);
}

.agent__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.agent__card {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  transition: all var(--transition-base);
}

.agent__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--agent-color);
}

.agent__icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--color-bg-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
}

.agent__title {
  font-size: var(--font-size-md);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.agent__description {
  font-size: var(--font-size-sm);
  color: var(--color-text-medium);
  line-height: 1.7;
  margin-bottom: var(--spacing-md);
}

.agent__bullets {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.agent__bullets li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--font-size-sm);
  color: var(--color-text-medium);
}

.agent__bullets svg {
  flex-shrink: 0;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .agent__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .agent__grid {
    grid-template-columns: 1fr;
  }
}
</style>
