<script setup lang="ts">
import { useScrollAnimation } from './composables/useScrollAnimation'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import PainPoints from './components/PainPoints.vue'
import ProductFeatures from './components/ProductFeatures.vue'
import UseCases from './components/UseCases.vue'
import IntegrationSection from './components/IntegrationSection.vue'
import AgentDeepDive from './components/AgentDeepDive.vue'
import TeamworkGraph from './components/TeamworkGraph.vue'
import CustomerCases from './components/CustomerCases.vue'
import FaqSection from './components/FaqSection.vue'
import FreeCourseCta from './components/FreeCourseCta.vue'
import ContactForm from './components/ContactForm.vue'
import VideoSection from './components/VideoSection.vue'
import AppFooter from './components/AppFooter.vue'

useScrollAnimation()
</script>

<template>
  <div id="app-root">
    <a href="#main-content" class="sr-only" style="position:fixed;top:0;left:0;z-index:10000;padding:12px 16px;background:var(--color-primary);color:white;text-decoration:none;" @focus="($event.target as HTMLElement).classList.remove('sr-only')" @blur="($event.target as HTMLElement).classList.add('sr-only')">
      跳到主要內容
    </a>
    <AppHeader />
    <main id="main-content">
      <HeroSection />
      <PainPoints />
      <ProductFeatures />
      <UseCases />
      <IntegrationSection />
      <AgentDeepDive />
      <TeamworkGraph />
      <CustomerCases />
      <FaqSection />
      <FreeCourseCta />
      <ContactForm />
      <VideoSection />
    </main>
    <AppFooter />
  </div>
</template>

<style>
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
