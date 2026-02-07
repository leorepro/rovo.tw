<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const navItems = [
  { label: '功能', href: '#features' },
  { label: '應用範例', href: '#use-cases' },
  { label: '技術架構', href: '#technology' },
  { label: '客戶案例', href: '#customers' },
  { label: 'FAQ', href: '#faq' },
  { label: '聯絡我們', href: '#contact' },
]

const sectionIds = navItems.map(item => item.href.slice(1))

let sectionObserver: IntersectionObserver | null = null

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { rootMargin: '-20% 0px -60% 0px' }
  )

  setTimeout(() => {
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) sectionObserver?.observe(el)
    })
  }, 200)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  sectionObserver?.disconnect()
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="header__container container">
      <a href="#" class="header__logo" @click.prevent="scrollToTop">
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
          :class="{ 'header__nav-link--active': activeSection === item.href.slice(1) }"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </a>
        <a href="#contact" class="btn btn-primary header__cta" @click="closeMobileMenu">
          預約免費 Demo
        </a>
      </nav>

      <button
        class="header__hamburger"
        :class="{ 'header__hamburger--open': isMobileMenuOpen }"
        @click="toggleMobileMenu"
        :aria-label="isMobileMenuOpen ? '關閉選單' : '開啟選單'"
        :aria-expanded="isMobileMenuOpen"
      >
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
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
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
  gap: 4px;
}

.header__nav-link {
  padding: 8px 14px;
  font-size: 0.875rem;
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

.header__nav-link--active {
  color: var(--color-primary) !important;
  background: rgba(0, 82, 204, 0.08);
}

.header:not(.header--scrolled) .header__nav-link--active {
  color: white !important;
  background: rgba(255, 255, 255, 0.2);
}

.header__cta {
  margin-left: 8px;
  padding: 10px 24px;
  font-size: 0.875rem;
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

.header__hamburger--open span {
  background: var(--color-text-dark) !important;
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

@media (max-width: 1023px) {
  .header__hamburger {
    display: flex;
  }

  .header__nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    flex-direction: column;
    padding: 24px;
    box-shadow: var(--shadow-lg);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition-base);
    gap: 4px;
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
    font-size: 1rem;
  }

  .header__nav-link--active {
    background: rgba(0, 82, 204, 0.08) !important;
    color: var(--color-primary) !important;
  }

  .header__cta {
    margin-left: 0;
    margin-top: 8px;
    width: 100%;
  }
}
</style>
