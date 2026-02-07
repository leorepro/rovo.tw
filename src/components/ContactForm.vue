<script setup lang="ts">
import { ref, computed } from 'vue'

interface FormData {
  name: string
  company: string
  jobTitle: string
  email: string
  phone: string
  teamSize: string
  interests: string[]
  message: string
  privacy: boolean
}

const form = ref<FormData>({
  name: '',
  company: '',
  jobTitle: '',
  email: '',
  phone: '',
  teamSize: '',
  interests: [],
  message: '',
  privacy: false,
})

const submitted = ref(false)
const submitting = ref(false)

const isEmailValid = computed(() => {
  if (!form.value.email) return true
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)
})

const isFormValid = computed(() => {
  return (
    form.value.name.trim() !== '' &&
    form.value.company.trim() !== '' &&
    form.value.email.trim() !== '' &&
    isEmailValid.value &&
    form.value.privacy
  )
})

const handleSubmit = () => {
  if (!isFormValid.value) return
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    submitted.value = true
  }, 1000)
}

const teamSizes = ['1-10 人', '11-50 人', '51-200 人', '200+ 人']
const interestOptions = ['Rovo Search', 'Rovo Chat', 'Rovo Agents', '全部功能']

const showMap = ref(false)
</script>

<template>
  <section class="contact section" id="contact">
    <div class="container">
      <h2 class="section-title">聯絡我們</h2>
      <p class="section-subtitle">
        填寫表單，我們的顧問團隊會在 1-2 個工作天內與您聯繫
      </p>

      <div class="contact__grid">
        <div class="contact__form-wrapper">
          <div v-if="submitted" class="contact__success animate-on-scroll">
            <div class="contact__success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#36B37E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3>感謝您的諮詢！</h3>
            <p>我們已收到您的訊息，顧問團隊會在 1-2 個工作天內與您聯繫。</p>
          </div>

          <form v-else class="contact__form" @submit.prevent="handleSubmit">
            <div class="contact__row">
              <div class="contact__field">
                <label for="name">姓名 <span class="contact__required">*</span></label>
                <input id="name" v-model="form.name" type="text" required placeholder="您的姓名" />
              </div>
              <div class="contact__field">
                <label for="company">公司名稱 <span class="contact__required">*</span></label>
                <input id="company" v-model="form.company" type="text" required placeholder="公司名稱" />
              </div>
            </div>

            <div class="contact__row">
              <div class="contact__field">
                <label for="email">電子郵件 <span class="contact__required">*</span></label>
                <input id="email" v-model="form.email" type="email" required placeholder="your@company.com" :class="{ 'contact__input--error': !isEmailValid }" />
                <span v-if="!isEmailValid" class="contact__error">請輸入有效的電子郵件</span>
              </div>
              <div class="contact__field">
                <label for="jobTitle">職稱</label>
                <input id="jobTitle" v-model="form.jobTitle" type="text" placeholder="您的職稱" />
              </div>
            </div>

            <div class="contact__row">
              <div class="contact__field">
                <label for="phone">電話</label>
                <input id="phone" v-model="form.phone" type="tel" placeholder="02-xxxx-xxxx" />
              </div>
              <div class="contact__field">
                <label for="teamSize">團隊規模</label>
                <select id="teamSize" v-model="form.teamSize">
                  <option value="">請選擇</option>
                  <option v-for="size in teamSizes" :key="size" :value="size">{{ size }}</option>
                </select>
              </div>
            </div>

            <div class="contact__field">
              <label>感興趣的功能</label>
              <div class="contact__checkboxes">
                <label v-for="opt in interestOptions" :key="opt" class="contact__checkbox">
                  <input type="checkbox" :value="opt" v-model="form.interests" />
                  <span>{{ opt }}</span>
                </label>
              </div>
            </div>

            <div class="contact__field">
              <label for="message">需求描述</label>
              <textarea id="message" v-model="form.message" rows="4" placeholder="請簡述您的需求或問題（最多 500 字）" maxlength="500"></textarea>
              <span class="contact__char-count">{{ form.message.length }}/500</span>
            </div>

            <div class="contact__field">
              <label class="contact__checkbox contact__checkbox--privacy">
                <input type="checkbox" v-model="form.privacy" required />
                <span>我同意 <a href="#" @click.prevent>隱私政策</a> 的條款 <span class="contact__required">*</span></span>
              </label>
            </div>

            <button type="submit" class="btn btn-primary contact__submit" :disabled="!isFormValid || submitting">
              {{ submitting ? '送出中...' : '送出諮詢' }}
              <svg v-if="!submitting" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>

        <div class="contact__info">
          <h3 class="contact__info-title">新加坡商鈦坦科技 Titansoft</h3>

          <div class="contact__info-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            <a href="mailto:sales@titansoft.com.sg">sales@titansoft.com.sg</a>
          </div>

          <div class="contact__info-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <a href="tel:02-7723-6686">02-7723-6686</a>
          </div>

          <div class="contact__info-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span>11503 台北市南港區園區街 3 之 1 號 11 樓之 1<br>（南港軟體園區 G 棟）</span>
          </div>

          <div class="contact__map">
            <div v-if="!showMap" class="contact__map-placeholder" @click="showMap = true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-light)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>點擊載入地圖</span>
            </div>
            <iframe
              v-else
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7!2d121.6139!3d25.0592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5Y2X5riv6LuR6auU5ZyS5Y2A!5e0!3m2!1szh-TW!2stw!4v1"
              width="100%"
              height="200"
              style="border: 0; border-radius: 8px;"
              allowfullscreen
              loading="lazy"
              title="Titansoft 辦公室位置"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: var(--color-bg-white);
}

.contact__grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: var(--spacing-2xl);
  align-items: start;
}

/* Form */
.contact__form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.contact__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}

.contact__field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contact__field label {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-dark);
}

.contact__required {
  color: var(--color-accent-red);
}

.contact__field input,
.contact__field select,
.contact__field textarea {
  padding: 12px 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-family: var(--font-family);
  color: var(--color-text-dark);
  transition: border-color var(--transition-fast);
  background: white;
}

.contact__field input:focus,
.contact__field select:focus,
.contact__field textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 82, 204, 0.1);
}

.contact__input--error {
  border-color: var(--color-accent-red) !important;
}

.contact__error {
  font-size: var(--font-size-xs);
  color: var(--color-accent-red);
}

.contact__char-count {
  font-size: var(--font-size-xs);
  color: var(--color-text-subtle);
  text-align: right;
}

.contact__checkboxes {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.contact__checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400 !important;
  cursor: pointer;
}

.contact__checkbox input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: var(--color-primary);
  padding: 0;
}

.contact__checkbox span {
  font-size: var(--font-size-sm);
  color: var(--color-text-medium);
}

.contact__checkbox--privacy span a {
  color: var(--color-primary);
  font-weight: 600;
}

.contact__submit {
  width: 100%;
  padding: 16px;
  font-size: 1.05rem;
}

.contact__submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

/* Success state */
.contact__success {
  text-align: center;
  padding: var(--spacing-3xl) var(--spacing-lg);
}

.contact__success-icon {
  margin-bottom: var(--spacing-lg);
}

.contact__success h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-sm);
}

.contact__success p {
  font-size: var(--font-size-base);
  color: var(--color-text-medium);
}

/* Info sidebar */
.contact__info {
  background: var(--color-bg-light);
  border-radius: var(--radius-lg);
  padding: 32px;
}

.contact__info-title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-lg);
}

.contact__info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: var(--spacing-md);
}

.contact__info-item svg {
  flex-shrink: 0;
  margin-top: 2px;
}

.contact__info-item a,
.contact__info-item span {
  font-size: var(--font-size-sm);
  color: var(--color-text-medium);
  line-height: 1.6;
}

.contact__map {
  margin-top: var(--spacing-lg);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.contact__map-placeholder {
  height: 200px;
  background: var(--color-bg-subtle);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all var(--transition-base);
}

.contact__map-placeholder:hover {
  background: var(--color-bg-white);
  border-color: var(--color-primary-light);
}

.contact__map-placeholder span {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

@media (max-width: 1023px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .contact__row {
    grid-template-columns: 1fr;
  }
}
</style>
