<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import VideoSection from './components/VideoSection.vue'
import PainPoints from './components/PainPoints.vue'
import WhatIsRovo from './components/WhatIsRovo.vue'
import Features from './components/Features.vue'
import UseCases from './components/UseCases.vue'
import Bookmarks from './components/Bookmarks.vue'
import AppFooter from './components/AppFooter.vue'

const observer = ref<IntersectionObserver | null>(null)

onMounted(() => {
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.value?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  setTimeout(() => {
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.value?.observe(el)
    })
  }, 100)
})

onUnmounted(() => {
  observer.value?.disconnect()
})
</script>

<template>
  <div id="app-root">
    <AppHeader />
    <main>
      <HeroSection />
      <VideoSection />
      <PainPoints />
      <WhatIsRovo />
      <Features />
      <UseCases />
      <Bookmarks />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* Scroll animation styles */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

#app {
  max-width: none;
  margin: 0;
  padding: 0;
  text-align: left;
}
</style>
