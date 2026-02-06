<script setup lang="ts">
import { ref } from 'vue'

const isPlaying = ref(false)

const playVideo = () => {
  isPlaying.value = true
}
</script>

<template>
  <section class="video-section section" id="video">
    <div class="container">
      <h2 class="section-title">認識 Rovo 的強大功能</h2>
      <p class="section-subtitle">
        觀看影片了解 Rovo Agents 如何協助團隊創建和自訂 AI 代理人，提升協作效率
      </p>
      <div class="video-section__wrapper animate-on-scroll">
        <div class="video-section__player" v-if="isPlaying">
          <iframe
            ref="videoRef"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Rovo Agents Introduction"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video-section__thumbnail" v-else @click="playVideo">
          <div class="video-section__thumbnail-bg">
            <div class="video-section__thumbnail-content">
              <div class="video-section__play-btn">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p class="video-section__play-text">觀看 Rovo 介紹影片</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.video-section {
  background: var(--color-bg-light);
}

.video-section__wrapper {
  max-width: 900px;
  margin: 0 auto;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.video-section__player {
  position: relative;
  padding-top: 56.25%;
  background: #000;
}

.video-section__player iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-section__thumbnail {
  cursor: pointer;
  position: relative;
}

.video-section__thumbnail-bg {
  position: relative;
  padding-top: 56.25%;
  background: linear-gradient(135deg, var(--color-bg-gradient-start) 0%, var(--color-secondary) 100%);
}

.video-section__thumbnail-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.video-section__play-btn {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
  border: 2px solid rgba(255, 255, 255, 0.4);
}

.video-section__thumbnail:hover .video-section__play-btn {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.video-section__play-text {
  color: white;
  font-size: var(--font-size-md);
  font-weight: 500;
}
</style>
