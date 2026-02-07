// ===== Main Application JavaScript =====
// This file handles all interactive functionality for the Rovo landing page

// ===== Utility Functions =====
function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

// ===== Header Scroll & Navigation =====
class HeaderController {
    constructor() {
        this.header = $('#header');
        this.hamburger = $('#hamburger-btn');
        this.nav = $('#main-nav');
        this.navLinks = $$('.header__nav-link');
        this.logoLink = $('#logo-link');
        this.isMobileMenuOpen = false;

        this.init();
    }

    init() {
        // Scroll handler
        window.addEventListener('scroll', () => this.handleScroll());
        this.handleScroll();

        // Hamburger menu
        this.hamburger.addEventListener('click', () => this.toggleMobileMenu());

        // Close menu on link click
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });

        // Logo click - scroll to top
        this.logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Active section highlighting
        this.setupSectionObserver();
    }

    handleScroll() {
        if (window.scrollY > 10) {
            this.header.classList.add('header--scrolled');
        } else {
            this.header.classList.remove('header--scrolled');
        }
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
        this.nav.classList.toggle('header__nav--open');
        this.hamburger.classList.toggle('header__hamburger--open');
        this.hamburger.setAttribute('aria-expanded', this.isMobileMenuOpen);
        this.hamburger.setAttribute('aria-label', this.isMobileMenuOpen ? '關閉選單' : '開啟選單');
        document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
    }

    closeMobileMenu() {
        this.isMobileMenuOpen = false;
        this.nav.classList.remove('header__nav--open');
        this.hamburger.classList.remove('header__hamburger--open');
        this.hamburger.setAttribute('aria-expanded', 'false');
        this.hamburger.setAttribute('aria-label', '開啟選單');
        document.body.style.overflow = '';
    }

    setupSectionObserver() {
        const sections = ['features', 'use-cases', 'technology', 'customers', 'faq', 'contact'];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Remove active class from all links
                        this.navLinks.forEach(link => link.classList.remove('header__nav-link--active'));

                        // Add active class to corresponding link
                        const activeLink = $(`.header__nav-link[href="#${entry.target.id}"]`);
                        if (activeLink) {
                            activeLink.classList.add('header__nav-link--active');
                        }
                    }
                });
            },
            { rootMargin: '-20% 0px -60% 0px' }
        );

        // Observe sections after a short delay to ensure DOM is ready
        setTimeout(() => {
            sections.forEach((id) => {
                const el = $(`#${id}`);
                if (el) observer.observe(el);
            });
        }, 200);
    }
}

// ===== Video Modal =====
class VideoModal {
    constructor() {
        this.modal = $('#video-modal');
        this.openBtn = $('#video-btn');
        this.closeBtn = $('#modal-close-btn');
        this.iframe = $('#video-iframe');

        this.init();
    }

    init() {
        this.openBtn.addEventListener('click', () => this.open());
        this.closeBtn.addEventListener('click', () => this.close());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.close();
        });
    }

    open() {
        this.modal.style.display = 'flex';
        this.iframe.src = 'https://www.youtube.com/embed/bkDJCIh7CCI?autoplay=1';
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.style.display = 'none';
        this.iframe.src = '';
        document.body.style.overflow = '';
    }
}

// ===== Pain Points Data & Rendering =====
const painPointsData = [
    {
        icon: 'knowledge',
        dataNumber: '—',
        title: '常見 AI 工具缺乏企業知識',
        description: '通用型 AI 工具無法存取企業內部知識與流程，提供的建議往往不夠貼切，難以真正協助決策。',
        solution: 'Rovo 整合 Jira、Confluence 等企業工具，讓 AI 理解你的團隊脈絡，提供精準且實用的回答。',
        color: '#0052CC',
        bgColor: 'rgba(0, 82, 204, 0.08)',
    },
    {
        icon: 'silo',
        dataNumber: '47%',
        title: '數位工作者陷入資訊孤島',
        description: '超過 47% 的數位工作者表示難以找到工作所需的資訊，團隊之間的知識斷層嚴重影響效率。',
        solution: 'Rovo 打破資訊孤島，AI 驅動的智慧搜尋能跨平台檢索 Google Drive、SharePoint 等 20+ 工具。',
        color: '#6554C0',
        bgColor: 'rgba(101, 84, 192, 0.08)',
    },
    {
        icon: 'security',
        dataNumber: '—',
        title: 'AI 與現有系統整合困難',
        description: '導入 AI 工具時常面臨資料安全、權限管理及合規性的挑戰，讓企業對 AI 採用猶豫不決。',
        solution: 'Rovo 採用企業級安全標準，通過 SOC2 及 ISO27001 認證，尊重原始資料權限設定。',
        color: '#36B37E',
        bgColor: 'rgba(54, 179, 126, 0.08)',
    },
    {
        icon: 'switch',
        dataNumber: '11 個',
        title: '每天切換的應用程式數量',
        description: '員工平均每天在 11 個應用程式間切換，大量時間消耗在搜尋資訊和切換工具上。',
        solution: 'Rovo 統一搜尋介面，讓使用者在一個地方就能找到散落在各工具中的資訊，大幅減少切換成本。',
        color: '#FF5630',
        bgColor: 'rgba(255, 86, 48, 0.08)',
    },
];

function getIconSVG(iconName, color) {
    const icons = {
        knowledge: `<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>`,
        silo: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
        security: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
        switch: `<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>`,
    };

    return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[iconName]}</svg>`;
}

function renderPainPoints() {
    const grid = $('#pain-points-grid');
    if (!grid) return;

    grid.innerHTML = painPointsData.map((point, index) => `
    <div class="pain-points__card animate-on-scroll" style="--card-color: ${point.color}; --card-bg: ${point.bgColor}; animation-delay: ${index * 0.15}s">
      <div class="pain-points__icon">
        ${getIconSVG(point.icon, point.color)}
      </div>
      ${point.dataNumber !== '—' ? `<div class="pain-points__data">${point.dataNumber}</div>` : ''}
      <h3 class="pain-points__title">${point.title}</h3>
      <p class="pain-points__description">${point.description}</p>
      <div class="pain-points__solution">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${point.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <span>${point.solution}</span>
      </div>
    </div>
  `).join('');
}

// ===== FAQ Section =====
const faqData = {
    features: [
        {
            question: 'Rovo 支援哪些第三方產品？',
            answer: 'Rovo 透過 Connector 機制支援 Google Drive、Microsoft SharePoint、Microsoft Teams、Slack、GitHub、Figma、Loom、Trello 等 20+ 工具。連接後，Rovo 即可跨平台搜尋與整合這些工具中的資料。',
        },
        {
            question: '權限如何管理和同步？',
            answer: 'Rovo 尊重原始資料的權限設定。例如，若某份 Google Drive 文件僅限特定使用者存取，Rovo 搜尋結果也只會對有權限的使用者顯示該文件。管理員可在 Atlassian Admin 中統一管理 Connector 的權限同步設定。',
        },
        {
            question: 'Rovo 使用哪些 AI 模型？',
            answer: 'Rovo 使用 OpenAI 的模型以及 Atlassian 自託管的開源模型。所有 AI 供應商均不會保留或使用你的企業數據進行模型訓練。',
        },
        {
            question: '瀏覽器擴展能做什麼？',
            answer: 'Rovo Chrome Extension 讓你在任何網頁上都能使用 Rovo 的搜尋和對話功能。它不會自動讀取網頁內容，僅在你主動發起搜尋或對話時才會存取企業知識庫。',
        },
    ],
    security: [
        {
            question: 'Rovo 有哪些安全認證？',
            answer: 'Atlassian 已通過 SOC2 Type II 和 ISO 27001 認證。Rovo 作為 Atlassian 雲端平台的一部分，完全符合這些安全標準。',
        },
        {
            question: '數據如何被使用和儲存？',
            answer: 'Rovo 會建立企業資料的索引以提供搜尋功能。索引範圍可由管理員設定，資料儲存在 Atlassian 的安全雲端環境中，並受到嚴格的存取控制。',
        },
        {
            question: '刪除數據後會發生什麼？',
            answer: '有三種情境：(1) 管理員移除 Connector 時，相關索引會被清除；(2) 來源端刪除 Smart Link 時，對應索引會自動更新；(3) 斷開第三方連接時，所有相關索引資料會在 30 天內完全移除。',
        },
        {
            question: '與第三方產品的資料互通安全嗎？',
            answer: '所有第三方整合均受 Atlassian 的服務條款約束。建議定期審查已連接的第三方工具及其資料存取範圍，確保符合貴公司的資安政策。',
        },
    ],
    pricing: [
        {
            question: 'Rovo 的價格方案？',
            answer: 'Rovo 的定價依 Atlassian 官方方案而定，依使用者人數計費。Titansoft 作為 Atlassian 授權合作夥伴，可提供專屬的顧問服務與導入支援。請聯繫我們取得報價。',
        },
        {
            question: '如何開始免費試用？',
            answer: '你可以直接在 Atlassian 平台上啟動 Rovo 的試用期，或透過 Titansoft 申請延長試用。我們會協助你完成初始設定與功能導覽。',
        },
        {
            question: '導入 Rovo 需要多長時間？',
            answer: '基本設定可在 1-2 天內完成。完整導入（包含 Connector 設定、Agent 建置、團隊教育訓練）通常需要 2-4 週，視企業規模與複雜度而定。',
        },
        {
            question: 'Titansoft 提供哪些支援？',
            answer: 'Titansoft 提供完整的導入顧問服務，包括：技術支援、架構規劃、Agent 客製化開發、團隊教育訓練，以及持續的售後支援。',
        },
    ],
};

class FAQController {
    constructor() {
        this.tabs = $$('#faq-tabs .faq__tab');
        this.list = $('#faq-list');
        this.activeCategory = 'features';
        this.openQuestions = new Set();

        this.init();
    }

    init() {
        // Tab switching
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const category = tab.dataset.category;
                this.switchCategory(category);
            });
        });

        // Initial render
        this.renderFAQItems();
    }

    switchCategory(category) {
        this.activeCategory = category;
        this.openQuestions.clear();

        // Update tab states
        this.tabs.forEach(tab => {
            if (tab.dataset.category === category) {
                tab.classList.add('faq__tab--active');
                tab.setAttribute('aria-selected', 'true');
            } else {
                tab.classList.remove('faq__tab--active');
                tab.setAttribute('aria-selected', 'false');
            }
        });

        this.renderFAQItems();
    }

    renderFAQItems() {
        const items = faqData[this.activeCategory];

        this.list.innerHTML = items.map((item, index) => {
            const key = `${this.activeCategory}-${index}`;
            const isOpen = this.openQuestions.has(key);

            return `
        <div class="faq__item ${isOpen ? 'faq__item--open' : ''}" data-key="${key}">
          <button class="faq__question" aria-expanded="${isOpen}">
            <span>${item.question}</span>
            <svg class="faq__chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <div class="faq__answer">
            <div class="faq__answer-inner">
              <p>${item.answer}</p>
            </div>
          </div>
        </div>
      `;
        }).join('');

        // Add click handlers
        $$('.faq__item').forEach(item => {
            const btn = item.querySelector('.faq__question');
            btn.addEventListener('click', () => this.toggleQuestion(item));
        });
    }

    toggleQuestion(itemElement) {
        const key = itemElement.dataset.key;

        if (this.openQuestions.has(key)) {
            this.openQuestions.delete(key);
            itemElement.classList.remove('faq__item--open');
            itemElement.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
        } else {
            this.openQuestions.add(key);
            itemElement.classList.add('faq__item--open');
            itemElement.querySelector('.faq__question').setAttribute('aria-expanded', 'true');
        }
    }
}

// ===== Contact Form =====
class ContactForm {
    constructor() {
        this.form = $('#contact-form');
        this.successMessage = $('#contact-success');
        this.emailInput = $('#email');
        this.emailError = $('#email-error');
        this.messageInput = $('#message');
        this.charCount = $('#char-count');
        this.mapPlaceholder = $('#map-placeholder');

        this.init();
    }

    init() {
        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Email validation
        this.emailInput.addEventListener('blur', () => this.validateEmail());

        // Character count
        this.messageInput.addEventListener('input', () => this.updateCharCount());

        // Map loading
        if (this.mapPlaceholder) {
            this.mapPlaceholder.addEventListener('click', () => this.loadMap());
        }
    }

    validateEmail() {
        const email = this.emailInput.value;
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (email && !isValid) {
            this.emailInput.classList.add('contact__input--error');
            this.emailError.style.display = 'block';
            return false;
        } else {
            this.emailInput.classList.remove('contact__input--error');
            this.emailError.style.display = 'none';
            return true;
        }
    }

    updateCharCount() {
        const length = this.messageInput.value.length;
        this.charCount.textContent = `${length}/500`;
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.validateEmail()) {
            return;
        }

        // Simulate form submission
        const submitBtn = this.form.querySelector('.contact__submit');
        submitBtn.disabled = true;
        submitBtn.textContent = '送出中...';

        setTimeout(() => {
            this.form.style.display = 'none';
            this.successMessage.style.display = 'block';
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
        送出諮詢
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      `;
        }, 1000);
    }

    loadMap() {
        const mapContainer = this.mapPlaceholder.parentElement;
        mapContainer.innerHTML = `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7!2d121.6139!3d25.0592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5Y2X5riv6LuR6auU5ZyS5Y0A!5e0!3m2!1szh-TW!2stw!4v1"
        width="100%"
        height="200"
        style="border: 0; border-radius: 8px;"
        allowfullscreen
        loading="lazy"
        title="Titansoft 辦公室位置"
      ></iframe>
    `;
    }
}

// ===== Scroll Animation =====
class ScrollAnimationController {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        this.observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        // Observe elements after a short delay
        setTimeout(() => {
            $$('.animate-on-scroll').forEach((el) => {
                this.observer.observe(el);
            });
        }, 100);
    }
}

// ===== Skip Link =====
function setupSkipLink() {
    const skipLink = $('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('focus', function () {
            this.classList.remove('sr-only');
        });
        skipLink.addEventListener('blur', function () {
            this.classList.add('sr-only');
        });
    }
}

// ===== Update Current Year =====
function updateCurrentYear() {
    const yearElement = $('#current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all controllers
    new HeaderController();
    new VideoModal();
    new FAQController();
    new ContactForm();
    new ScrollAnimationController();

    // Render content
    renderPainPoints();

    // Setup utilities
    setupSkipLink();
    updateCurrentYear();

    console.log('✅ Rovo Landing Page initialized successfully!');
});
