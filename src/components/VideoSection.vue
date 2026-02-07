<script setup lang="ts">
import { ref } from 'vue'

interface Video {
  id: string
  title: string
  description: string
  youtubeId: string
}

const videos: Video[] = [
  {
    id: 'intro',
    title: 'Rovo 產品概覽',
    description: '2 分鐘了解 Rovo 如何整合企業知識，提升團隊效率',
    youtubeId: 'bkDJCIh7CCI',
  },
  {
    id: 'search',
    title: 'Rovo Search 實戰',
    description: '看看 Rovo 如何跨平台搜尋 Jira、Confluence 與第三方工具',
    youtubeId: 'bkDJCIh7CCI',
  },
  {
    id: 'agents',
    title: 'Rovo Agents 教學',
    description: '從零開始建立你的第一個 AI Agent，自動化重複性工作',
    youtubeId: 'bkDJCIh7CCI',
  },
]

const playingVideo = ref<string | null>(null)

const playVideo = (id: string) => {
  playingVideo.value = id
}
</script>

<template>
  <section class="video-section section" id="video">
    <div class="container">
      <h2 class="section-title">觀看 Rovo 實際演示</h2>
      <p class="section-subtitle">
        透過影片快速了解 Rovo 的核心功能與實際操作
      </p>

      <div class="video-section__grid">
        <div
          v-for="video in videos"
          :key="video.id"
          class="video-section__card animate-on-scroll"
        >
          <div class="video-section__player-wrapper">
            <div v-if="playingVideo === video.id" class="video-section__player">
              <iframe
                :src="`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`"
                :title="video.title"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
            <div v-else class="video-section__thumbnail" @click="playVideo(video.id)">
              <img
                :src="`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`"
                :alt="video.title"
                loading="lazy"
              />
              <div class="video-section__overlay">
                <div class="video-section__play-btn">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="video-section__info">
            <h3 class="video-section__title">{{ video.title }}</h3>
            <p class="video-section__desc">{{ video.description }}</p>
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

.video-section__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.video-section__card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.video-section__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.video-section__player-wrapper {
  position: relative;
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
  position: relative;
  cursor: pointer;
  padding-top: 56.25%;
  overflow: hidden;
}

.video-section__thumbnail img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.video-section__card:hover .video-section__thumbnail img {
  transform: scale(1.05);
}

.video-section__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  transition: background var(--transition-base);
}

.video-section__thumbnail:hover .video-section__overlay {
  background: rgba(0, 0, 0, 0.45);
}

.video-section__play-btn {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.4);
  transition: all var(--transition-base);
}

.video-section__thumbnail:hover .video-section__play-btn {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.video-section__info {
  padding: 20px;
}

.video-section__title {
  font-size: var(--font-size-md);
  font-weight: 700;
  margin-bottom: 6px;
}

.video-section__desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-medium);
  line-height: 1.6;
}

@media (max-width: 1023px) {
  .video-section__grid {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>
