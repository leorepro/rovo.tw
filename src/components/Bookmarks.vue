<script setup lang="ts">
</script>

<template>
  <section class="bookmarks section">
    <div class="container">
      <div class="bookmarks__layout animate-on-scroll">
        <div class="bookmarks__visual">
          <div class="bookmarks__mockup">
            <div class="bookmarks__mockup-search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#97A0AF" stroke-width="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <span>搜尋書籤與知識庫...</span>
            </div>
            <div class="bookmarks__mockup-items">
              <div class="bookmarks__mockup-item" v-for="i in 4" :key="i">
                <div class="bookmarks__mockup-star">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFAB00" stroke="#FFAB00" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <div class="bookmarks__mockup-item-content">
                  <div class="bookmarks__mockup-item-line" :style="{ width: `${50 + i * 10}%` }"></div>
                  <div class="bookmarks__mockup-item-line bookmarks__mockup-item-line--short" :style="{ width: `${30 + i * 8}%` }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bookmarks__content">
          <span class="bookmarks__label">Rovo Bookmarks</span>
          <h2 class="bookmarks__title">搜尋書籤功能</h2>
          <p class="bookmarks__description">
            透過 Rovo Bookmarks 搜尋書籤功能，企業與團隊可以善用 AI 驅動的搜尋優化，更高效地管理關鍵資訊，確保重要內容在搜尋結果中優先呈現。
          </p>
          <ul class="bookmarks__list">
            <li class="bookmarks__list-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="rgba(0,82,204,0.1)"/>
                <path d="M8 12l3 3 5-5" stroke="#0052CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              AI 驅動的搜尋優化，精準定位資訊
            </li>
            <li class="bookmarks__list-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="rgba(0,82,204,0.1)"/>
                <path d="M8 12l3 3 5-5" stroke="#0052CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              重要內容優先呈現，節省搜尋時間
            </li>
            <li class="bookmarks__list-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="rgba(0,82,204,0.1)"/>
                <path d="M8 12l3 3 5-5" stroke="#0052CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              跨平台書籤管理，統一知識入口
            </li>
          </ul>
          <a href="#contact" class="btn btn-primary">開始使用</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bookmarks {
  background: var(--color-bg-white);
}

.bookmarks__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.bookmarks__visual {
  display: flex;
  justify-content: center;
}

.bookmarks__mockup {
  width: 100%;
  max-width: 420px;
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--color-border);
  overflow: hidden;
}

.bookmarks__mockup-search {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-subtle);
}

.bookmarks__mockup-search span {
  font-size: var(--font-size-sm);
  color: var(--color-text-subtle);
}

.bookmarks__mockup-items {
  padding: 8px;
}

.bookmarks__mockup-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: var(--radius-md);
  transition: background var(--transition-fast);
}

.bookmarks__mockup-item:hover {
  background: var(--color-bg-light);
}

.bookmarks__mockup-item-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.bookmarks__mockup-item-line {
  height: 8px;
  background: var(--color-bg-light);
  border-radius: 4px;
}

.bookmarks__mockup-item-line--short {
  height: 6px;
  opacity: 0.6;
}

.bookmarks__label {
  display: inline-block;
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-sm);
  background: rgba(0, 82, 204, 0.08);
  padding: 6px 16px;
  border-radius: 100px;
}

.bookmarks__title {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-lg);
}

.bookmarks__description {
  font-size: var(--font-size-md);
  color: var(--color-text-medium);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
}

.bookmarks__list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: var(--spacing-xl);
}

.bookmarks__list-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--font-size-sm);
  color: var(--color-text-dark);
}

@media (max-width: 900px) {
  .bookmarks__layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .bookmarks__visual {
    order: -1;
  }
}
</style>
