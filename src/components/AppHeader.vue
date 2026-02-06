<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navItems = [
  { label: '企業挑戰', href: '#pain-points' },
  { label: '什麼是 Rovo', href: '#what-is-rovo' },
  { label: '功能特色', href: '#features' },
  { label: '應用場景', href: '#use-cases' },
  { label: '聯絡我們', href: '#contact' },
]
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="header__container container">
      <a href="#" class="header__logo">
        <svg class="header__logo-icon" viewBox="0 0 32 32" width="36" height="36">
          <defs>
            <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#0065FF" />
              <stop offset="100%" style="stop-color:#6554C0" />
            </linearGradient>
          </defs>
          <rect width="32" height="32" rx="6" fill="url(#logo-grad)" />
          <text x="16" y="22" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-weight="bold" font-size="18">R</text>
        </svg>
        <div class="header__logo-text">
          <span class="header__logo-title">Atlassian Rovo</span>
          <span class="header__logo-subtitle">Titansoft 鈦坦科技</span>
        </div>
      </a>

      <nav class="header__nav" :class="{ 'header__nav--open': isMobileMenuOpen }">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="header__nav-link"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </a>
        <a href="#contact" class="btn btn-primary header__cta" @click="closeMobileMenu">
          免費諮詢
        </a>
      </nav>

      <button class="header__hamburger" :class="{ 'header__hamburger--open': isMobileMenuOpen }" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--header-height);
  display: flex;
  align-items: center;
  transition: all var(--transition-base);
  background: transparent;
}

.header--scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(10px);
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.header__logo-text {
  display: flex;
  flex-direction: column;
}

.header__logo-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text-dark);
  line-height: 1.2;
}

.header--scrolled .header__logo-title {
  color: var(--color-text-dark);
}

.header:not(.header--scrolled) .header__logo-title {
  color: white;
}

.header__logo-subtitle {
  font-size: 0.75rem;
  color: var(--color-text-light);
  line-height: 1.2;
}

.header:not(.header--scrolled) .header__logo-subtitle {
  color: rgba(255, 255, 255, 0.8);
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header__nav-link {
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-medium);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.header:not(.header--scrolled) .header__nav-link {
  color: rgba(255, 255, 255, 0.9);
}

.header__nav-link:hover {
  color: var(--color-primary);
  background: rgba(0, 82, 204, 0.08);
}

.header:not(.header--scrolled) .header__nav-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.15);
}

.header__cta {
  margin-left: 8px;
  padding: 10px 24px;
  font-size: 0.9rem;
}

.header__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
}

.header__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text-dark);
  transition: all var(--transition-base);
}

.header:not(.header--scrolled) .header__hamburger span {
  background: white;
}

.header__hamburger--open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.header__hamburger--open span:nth-child(2) {
  opacity: 0;
}

.header__hamburger--open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 900px) {
  .header__hamburger {
    display: flex;
  }

  .header__nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 24px;
    box-shadow: var(--shadow-lg);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition-base);
  }

  .header__nav--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .header__nav-link {
    color: var(--color-text-dark) !important;
    padding: 12px 16px;
    width: 100%;
    text-align: center;
  }

  .header__cta {
    margin-left: 0;
    margin-top: 8px;
    width: 100%;
  }
}
</style>
