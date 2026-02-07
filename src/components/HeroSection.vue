<script setup lang="ts">
import { ref } from 'vue'

const showVideoModal = ref(false)

const openVideoModal = () => {
  showVideoModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeVideoModal = () => {
  showVideoModal.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <section class="hero">
    <div class="hero__bg">
      <div class="hero__bg-shape hero__bg-shape--1"></div>
      <div class="hero__bg-shape hero__bg-shape--2"></div>
      <div class="hero__bg-shape hero__bg-shape--3"></div>
    </div>

    <div class="hero__container container">
      <div class="hero__content">
        <div class="hero__text">
          <div class="hero__badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Atlassian Authorized Partner
          </div>

          <h1 class="hero__title">
            Rovo — 專為企業設計的 AI
          </h1>

          <p class="hero__subtitle">
            整合 Jira、Confluence 與 20+ 工具，讓團隊減少 47% 資訊搜尋時間
          </p>

          <div class="hero__actions">
            <a href="#contact" class="btn btn-white hero__btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              預約免費 Demo
            </a>
            <button class="btn btn-outline-white hero__btn-secondary" @click="openVideoModal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/>
              </svg>
              觀看 2 分鐘介紹
            </button>
          </div>

          <div class="hero__trust">
            <span class="hero__trust-text">已服務 50+ 企業導入 Atlassian 解決方案</span>
          </div>
        </div>

        <div class="hero__visual">
          <div class="hero__mockup">
            <div class="hero__mockup-header">
              <div class="hero__mockup-dots">
                <span></span><span></span><span></span>
              </div>
              <span class="hero__mockup-title">Rovo Chat</span>
            </div>
            <div class="hero__mockup-body">
              <div class="hero__mockup-message hero__mockup-message--user">
                <div class="hero__mockup-avatar hero__mockup-avatar--user">U</div>
                <div class="hero__mockup-bubble">幫我找出 Q3 專案中未完成的高優先 Jira tickets</div>
              </div>
              <div class="hero__mockup-message hero__mockup-message--ai">
                <div class="hero__mockup-avatar hero__mockup-avatar--ai">R</div>
                <div class="hero__mockup-bubble hero__mockup-bubble--ai">
                  <p>我找到了 <strong>3 個高優先未完成任務</strong>：</p>
                  <div class="hero__mockup-ticket">PROJ-142 API 效能優化</div>
                  <div class="hero__mockup-ticket">PROJ-158 權限系統重構</div>
                  <div class="hero__mockup-ticket">PROJ-163 Dashboard 改版</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Video Lightbox -->
    <Teleport to="body">
      <div v-if="showVideoModal" class="hero__modal" @click.self="closeVideoModal">
        <div class="hero__modal-content">
          <button class="hero__modal-close" @click="closeVideoModal" aria-label="關閉影片">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <div class="hero__modal-video">
            <iframe
              src="https://www.youtube.com/embed/bkDJCIh7CCI?autoplay=1"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="Rovo 產品介紹影片"
            ></iframe>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--color-bg-gradient-start) 0%, var(--color-secondary) 50%, #403294 100%);
  overflow: hidden;
  padding-top: var(--header-height);
}

.hero__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.hero__bg-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
}

.hero__bg-shape--1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #4C9AFF, transparent);
  top: -200px;
  right: -100px;
  animation: float 20s ease-in-out infinite;
}

.hero__bg-shape--2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #00B8D9, transparent);
  bottom: -100px;
  left: -100px;
  animation: float 15s ease-in-out infinite reverse;
}

.hero__bg-shape--3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #6554C0, transparent);
  top: 50%;
  left: 50%;
  animation: float 18s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(30px, -30px); }
  50% { transform: translate(-20px, 20px); }
  75% { transform: translate(20px, 30px); }
}

.hero__container {
  position: relative;
  z-index: 1;
  padding-top: var(--spacing-2xl);
  padding-bottom: var(--spacing-3xl);
}

.hero__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  padding: 8px 20px;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: var(--spacing-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero__title {
  font-size: var(--font-size-hero);
  font-weight: 700;
  color: white;
  margin-bottom: var(--spacing-md);
  line-height: 1.2;
}

.hero__subtitle {
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: var(--spacing-xl);
  line-height: 1.8;
}

.hero__actions {
  display: flex;
  gap: 16px;
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
}

.hero__btn-primary {
  padding: 16px 36px;
  font-size: 1.05rem;
}

.hero__btn-secondary {
  padding: 16px 36px;
  font-size: 1.05rem;
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.hero__btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: white;
  color: white;
  transform: translateY(-2px);
}

.hero__trust {
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero__trust-text {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
}

/* Rovo Chat Mockup */
.hero__visual {
  display: flex;
  justify-content: center;
}

.hero__mockup {
  background: white;
  border-radius: var(--radius-xl);
  overflow: hidden;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.hero__mockup-header {
  background: var(--color-bg-light);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--color-border);
}

.hero__mockup-dots {
  display: flex;
  gap: 6px;
}

.hero__mockup-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.hero__mockup-dots span:nth-child(1) { background: #FF5F57; }
.hero__mockup-dots span:nth-child(2) { background: #FFBD2E; }
.hero__mockup-dots span:nth-child(3) { background: #28CA41; }

.hero__mockup-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-medium);
}

.hero__mockup-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero__mockup-message {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.hero__mockup-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  flex-shrink: 0;
}

.hero__mockup-avatar--user {
  background: var(--color-secondary-light);
  color: white;
}

.hero__mockup-avatar--ai {
  background: linear-gradient(135deg, #0065FF, #6554C0);
  color: white;
}

.hero__mockup-bubble {
  background: var(--color-bg-light);
  border-radius: var(--radius-md);
  padding: 10px 14px;
  font-size: 0.8rem;
  color: var(--color-text-dark);
  line-height: 1.5;
}

.hero__mockup-bubble--ai {
  background: rgba(0, 82, 204, 0.06);
}

.hero__mockup-bubble p {
  margin-bottom: 8px;
}

.hero__mockup-ticket {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 6px 10px;
  font-size: 0.75rem;
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: 4px;
}

.hero__mockup-ticket:last-child {
  margin-bottom: 0;
}

/* Video Modal */
.hero__modal {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
}

.hero__modal-content {
  position: relative;
  width: 100%;
  max-width: 900px;
}

.hero__modal-close {
  position: absolute;
  top: -48px;
  right: 0;
  background: none;
  color: white;
  padding: 8px;
}

.hero__modal-close:hover {
  opacity: 0.7;
}

.hero__modal-video {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: var(--radius-lg);
}

.hero__modal-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 1023px) {
  .hero__content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__trust {
    justify-content: center;
  }

  .hero__visual {
    order: 2;
  }

  .hero__mockup {
    max-width: 400px;
  }
}

@media (max-width: 767px) {
  .hero {
    min-height: auto;
    padding-top: calc(var(--header-height) + var(--spacing-xl));
    padding-bottom: var(--spacing-xl);
  }

  .hero__title {
    font-size: 2.2rem;
  }

  .hero__subtitle {
    font-size: var(--font-size-base);
  }

  .hero__actions {
    flex-direction: column;
    align-items: center;
  }

  .hero__btn-primary,
  .hero__btn-secondary {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .hero__mockup {
    max-width: 100%;
  }
}
</style>
