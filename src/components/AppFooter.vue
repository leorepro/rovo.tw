<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = [
  {
    title: '產品功能',
    links: [
      { label: 'Rovo Search', href: '#features' },
      { label: 'Rovo Chat', href: '#features' },
      { label: 'Rovo Agent', href: '#features' },
      { label: '視覺化視圖', href: '#features' },
      { label: 'AC 補全', href: '#features' },
    ],
  },
  {
    title: '應用場景',
    links: [
      { label: '知識管理', href: '#use-cases' },
      { label: '團隊協作', href: '#use-cases' },
      { label: '技術支援', href: '#use-cases' },
      { label: '客服支援', href: '#use-cases' },
    ],
  },
  {
    title: '關於我們',
    links: [
      { label: 'Titansoft 鈦坦科技', href: 'https://titansoft.com/en' },
      { label: 'Atlassian 合作夥伴', href: '#' },
      { label: '敏捷轉型顧問', href: '#' },
    ],
  },
]
</script>

<template>
  <footer class="footer" id="contact">
    <!-- CTA Banner -->
    <div class="footer__cta">
      <div class="container">
        <div class="footer__cta-content animate-on-scroll">
          <h2 class="footer__cta-title">準備好釋放團隊的 AI 潛力了嗎？</h2>
          <p class="footer__cta-subtitle">
            立即聯繫我們，了解 Atlassian Rovo 如何為您的企業帶來改變
          </p>
          <div class="footer__cta-actions">
            <a href="mailto:sales@titansoft.com.sg" class="btn btn-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              聯繫我們
            </a>
            <a href="tel:02-7723-6686" class="btn btn-outline-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              02-7723-6686
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Content -->
    <div class="footer__main">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <div class="footer__logo">
              <svg viewBox="0 0 32 32" width="36" height="36">
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#4C9AFF" />
                    <stop offset="100%" style="stop-color:#6554C0" />
                  </linearGradient>
                </defs>
                <rect width="32" height="32" rx="6" fill="url(#footer-logo-grad)" />
                <text x="16" y="22" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-weight="bold" font-size="18">R</text>
              </svg>
              <div>
                <span class="footer__logo-title">Atlassian Rovo</span>
                <span class="footer__logo-subtitle">Titansoft 鈦坦科技</span>
              </div>
            </div>
            <p class="footer__brand-desc">
              新加坡商鈦坦科技為 Atlassian 合作夥伴，提供 Jira、Confluence 等專案管理工具導入、企業知識管理以及敏捷轉型顧問服務。
            </p>
            <div class="footer__contact-info">
              <div class="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                sales@titansoft.com.sg
              </div>
              <div class="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"/>
                </svg>
                02-7723-6686
              </div>
              <div class="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                台北市南港區園區街3之1號11樓之1（南港軟體園區 G 棟）
              </div>
            </div>
          </div>

          <div v-for="group in footerLinks" :key="group.title" class="footer__link-group">
            <h4 class="footer__link-title">{{ group.title }}</h4>
            <ul class="footer__link-list">
              <li v-for="link in group.links" :key="link.label">
                <a :href="link.href" class="footer__link">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer__bottom">
          <p class="footer__copyright">
            &copy; {{ currentYear }} 鈦坦科技 Titansoft Pte Ltd. All rights reserved.
          </p>
          <p class="footer__powered">
            Powered by <a href="https://www.atlassian.com/software/rovo" target="_blank" rel="noopener">Atlassian Rovo</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer__cta {
  background: linear-gradient(135deg, var(--color-bg-gradient-start) 0%, var(--color-secondary) 50%, #403294 100%);
  padding: var(--spacing-4xl) 0;
  text-align: center;
}

.footer__cta-title {
  font-size: var(--font-size-3xl);
  color: white;
  margin-bottom: var(--spacing-md);
}

.footer__cta-subtitle {
  font-size: var(--font-size-md);
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--spacing-xl);
}

.footer__cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-outline-white {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-outline-white:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: white;
  color: white;
  transform: translateY(-2px);
}

.footer__main {
  background: var(--color-bg-dark);
  padding: var(--spacing-3xl) 0 var(--spacing-lg);
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: var(--spacing-3xl);
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: var(--spacing-md);
}

.footer__logo-title {
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  line-height: 1.2;
}

.footer__logo-subtitle {
  display: block;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.2;
}

.footer__brand-desc {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.8;
  margin-bottom: var(--spacing-lg);
}

.footer__contact-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.6);
}

.footer__link-title {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: white;
  margin-bottom: var(--spacing-md);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer__link-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__link {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.5);
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: white;
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__copyright {
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.4);
}

.footer__powered {
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.4);
}

.footer__powered a {
  color: rgba(255, 255, 255, 0.6);
}

.footer__powered a:hover {
  color: white;
}

@media (max-width: 900px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer__cta-title {
    font-size: var(--font-size-2xl);
  }

  .footer__bottom {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>
