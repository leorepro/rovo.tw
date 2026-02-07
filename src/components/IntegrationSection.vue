<script setup lang="ts">
const scenarios = [
  {
    icon: 'folder',
    title: '企業知識管理',
    description: '統一檢索散落在各平台的文件，建立企業知識庫，讓員工快速找到所需資訊。',
  },
  {
    icon: 'users',
    title: '多專案協作',
    description: '跨團隊、跨工具整合專案資訊，即時掌握進度、避免重複輸入與資訊遺失。',
  },
  {
    icon: 'headset',
    title: '技術客服支援',
    description: '快速定位客戶紀錄與技術文件，搭配 Agent 自動回覆常見問題，加速回應。',
  },
]

const logos = [
  { name: 'Google Drive', color: '#4285F4' },
  { name: 'SharePoint', color: '#036C70' },
  { name: 'Microsoft Teams', color: '#6264A7' },
  { name: 'Slack', color: '#4A154B' },
  { name: 'GitHub', color: '#24292E' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Loom', color: '#625DF5' },
  { name: 'Trello', color: '#0052CC' },
]
</script>

<template>
  <section class="integration section" id="integrations">
    <div class="container">
      <h2 class="section-title">一個搜尋框，查遍所有工具的資料</h2>
      <p class="section-subtitle">
        Rovo 透過 Connector 機制整合你日常使用的工具，讓知識不再散落各處
      </p>

      <div class="integration__scenarios">
        <div v-for="(s, i) in scenarios" :key="i" class="integration__scenario animate-on-scroll" :style="{ animationDelay: `${i * 0.15}s` }">
          <div class="integration__scenario-icon">
            <svg v-if="s.icon === 'folder'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
            <svg v-else-if="s.icon === 'users'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
            </svg>
          </div>
          <h3 class="integration__scenario-title">{{ s.title }}</h3>
          <p class="integration__scenario-desc">{{ s.description }}</p>
        </div>
      </div>

      <div class="integration__logos animate-on-scroll">
        <p class="integration__logos-label">已支援的第三方產品</p>
        <div class="integration__logos-grid">
          <div v-for="logo in logos" :key="logo.name" class="integration__logo" :style="{ '--logo-color': logo.color }">
            <span class="integration__logo-initial" :style="{ background: logo.color }">{{ logo.name[0] }}</span>
            <span class="integration__logo-name">{{ logo.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.integration {
  background: var(--color-bg-light);
}

.integration__scenarios {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: var(--spacing-3xl);
}

.integration__scenario {
  background: white;
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  text-align: center;
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.integration__scenario:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.integration__scenario-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-lg);
  background: var(--color-bg-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-md);
  color: var(--color-primary);
}

.integration__scenario-title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xs);
}

.integration__scenario-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-medium);
  line-height: 1.7;
}

.integration__logos {
  text-align: center;
}

.integration__logos-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
  font-weight: 500;
}

.integration__logos-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
}

.integration__logo {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  filter: grayscale(0.6);
}

.integration__logo:hover {
  filter: grayscale(0);
  box-shadow: var(--shadow-sm);
  border-color: var(--logo-color);
}

.integration__logo-initial {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
}

.integration__logo-name {
  font-size: var(--font-size-sm);
  color: var(--color-text-medium);
  font-weight: 500;
}

@media (max-width: 767px) {
  .integration__scenarios {
    grid-template-columns: 1fr;
  }

  .integration__logos-grid {
    gap: 10px;
  }
}
</style>
