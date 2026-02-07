<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = [
  {
    title: '產品',
    links: [
      { label: 'Rovo Search', href: '#features' },
      { label: 'Rovo Chat', href: '#features' },
      { label: 'Rovo Agents', href: '#features' },
      { label: '外部整合', href: '#integrations' },
      { label: '應用範例', href: '#use-cases' },
    ],
  },
  {
    title: '公司',
    links: [
      { label: 'Titansoft 鈦坦科技', href: 'https://titansoft.com/en' },
      { label: 'Atlassian 合作夥伴', href: 'https://www.atlassian.com/partners' },
      { label: '免費課程', href: '#course-cta' },
      { label: '聯絡我們', href: '#contact' },
    ],
  },
  {
    title: '法律',
    links: [
      { label: '隱私權政策', href: '#' },
      { label: '服務條款', href: '#' },
      { label: 'Cookie 政策', href: '#' },
    ],
  },
]
</script>

<template>
  <footer class="footer">
    <div class="footer__main">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <div class="footer__logo">
              <svg viewBox="0 0 32 32" width="36" height="36" aria-hidden="true">
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
              新加坡商鈦坦科技為 Atlassian 授權合作夥伴，提供 Jira、Confluence 等專案管理工具導入、企業知識管理以及敏捷轉型顧問服務。
            </p>

            <!-- Atlassian Partner Badge -->
            <div class="footer__partner-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Atlassian Authorized Partner</span>
            </div>

            <!-- Social Media -->
            <div class="footer__social">
              <a href="https://www.linkedin.com/company/titansoft/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/titansoft" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <div v-for="group in footerLinks" :key="group.title" class="footer__link-group">
            <h4 class="footer__link-title">{{ group.title }}</h4>
            <ul class="footer__link-list">
              <li v-for="link in group.links" :key="link.label">
                <a
                  :href="link.href"
                  class="footer__link"
                  :target="link.href.startsWith('http') ? '_blank' : undefined"
                  :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                >{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer__bottom">
          <p class="footer__copyright">
            &copy; {{ currentYear }} 鈦坦科技 Titansoft Pte Ltd. All rights reserved.
          </p>
          <p class="footer__powered">
            Powered by <a href="https://www.atlassian.com/software/rovo" target="_blank" rel="noopener noreferrer">Atlassian Rovo</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
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
  margin-bottom: var(--spacing-md);
}

.footer__partner-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-md);
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--font-size-xs);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
}

.footer__social {
  display: flex;
  gap: 12px;
}

.footer__social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.6);
  transition: all var(--transition-fast);
}

.footer__social a:hover {
  background: rgba(255, 255, 255, 0.15);
  color: white;
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

@media (max-width: 1023px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .footer__brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 767px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .footer__bottom {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>
