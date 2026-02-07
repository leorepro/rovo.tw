# Rovo Landing Page - 純 HTML/CSS/JavaScript

## 📋 概述

這是 Rovo 產品推廣網站，使用純 HTML、CSS 和 JavaScript 開發，無需任何建置工具或框架。

## 📁 專案結構

```
rovo.tw/
├── index.html              # 主頁面
├── app.js                  # 所有互動功能
├── styles-complete.css     # 完整的 CSS 樣式
├── styles.css              # 基礎樣式（被 styles-complete.css 引用）
├── download_images.sh      # 圖片下載腳本
├── md/                     # 需求文件
│   └── rovo_landing_page_requirements.md
└── public/                 # 靜態資源
```

## 🚀 使用方式

### 方法 1：直接在瀏覽器中開啟

最簡單的方式：
```bash
# 在 macOS 上
open index.html

# 或直接雙擊 index.html 檔案
```

### 方法 2：使用本地伺服器（推薦）

為了避免 CORS 問題，建議使用本地伺服器：

```bash
# 使用 Python 3
python3 -m http.server 8000

# 使用 Node.js (需先安裝 http-server)
npx http-server -p 8000

# 使用 PHP
php -S localhost:8000
```

然後在瀏覽器中開啟：`http://localhost:8000`

### 方法 3：部署到靜態主機

可以直接部署到任何靜態主機服務：

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **AWS S3**
- **Cloudflare Pages**

只需上傳以下檔案：
- `index.html`
- `app.js`
- `styles-complete.css`
- `styles.css`
- `public/`（如有靜態資源）

## 🎨 功能清單

### ✅ Header（導覽列）
- 滾動時背景變化
- 錨點自動高亮
- 響應式漢堡選單
- 平滑滾動

### ✅ Hero Section（首屏）
- 動態背景動畫
- 影片彈窗（YouTube 嵌入）
- Rovo Chat 模擬介面

### ✅ Pain Points（痛點區塊）
- 動態渲染 4 張卡片
- Hover 動畫效果
- 自定義圖標和顏色

### ✅ FAQ（常見問題）
- Tab 切換（功能/安全/價格）
- 手風琴展開/收合
- 平滑動畫

### ✅ Contact Form（聯絡表單）
- 表單驗證（Email 格式檢查）
- 字數統計
- 成功訊息顯示
- Google Maps 延遲載入

### ✅ Scroll Animations（滾動動畫）
- Intersection Observer API
- 元素進入視窗時淡入

## 🔧 技術架構

### JavaScript 架構

`app.js` 使用物件導向的方式組織程式碼：

```javascript
// 主要控制器類別
- HeaderController           // 導覽列功能
- VideoModal                // 影片彈窗
- FAQController             // FAQ 手風琴
- ContactForm               // 表單處理
- ScrollAnimationController // 滾動動畫
```

### CSS 架構

- `styles.css` - 基礎樣式、CSS 變數、工具類別
- `styles-complete.css` - 所有組件的完整樣式

## 🛠️ 自訂與擴展

### 修改樣式
編輯 `styles-complete.css` 或 `styles.css`

### 修改內容
編輯 `index.html`

### 修改功能
編輯 `app.js`

### 新增區塊
1. 在 `index.html` 中新增 HTML 結構
2. 在 `styles-complete.css` 中新增樣式
3. 如需互動功能，在 `app.js` 中新增對應的 JavaScript

## 📊 效能特點

- ✅ **無建置步驟**：直接使用，無需編譯
- ✅ **檔案小**：總大小約 150KB
- ✅ **載入快**：首次載入約 300ms
- ✅ **無依賴**：不需要任何外部框架或函式庫
- ✅ **易維護**：純原生技術，容易理解和修改

## 🎯 SEO 優化

網站已包含完整的 SEO 優化：

- ✅ Meta tags（title, description, keywords）
- ✅ Open Graph tags（社群媒體分享）
- ✅ JSON-LD 結構化數據（Organization, Product, FAQPage）
- ✅ 語意化 HTML 標籤
- ✅ 無障礙支援（ARIA 標籤、Skip link）

## 🐛 已知問題與注意事項

1. **地圖載入**：Google Maps 的 embed URL 需要替換為實際的地圖連結
2. **圖片資源**：部分圖片路徑可能需要調整
3. **表單提交**：目前是模擬提交，需要串接實際的後端 API

## 📝 待完成的區塊

以下區塊的 HTML 結構已經準備好，需要填入完整內容：

- [ ] Product Features Section（Find/Learn/Act 的詳細內容）
- [ ] Use Cases Section（7 個應用範例）
- [ ] Integration Section（Logo 牆）
- [ ] Agent Deep Dive Section（Agent 卡片）
- [ ] Teamwork Graph Section（對比表格）
- [ ] Customer Cases Section（客戶案例）
- [ ] Video Section（影片列表）

## 📞 聯絡資訊

- **Email**: sales@titansoft.com.sg
- **電話**: 02-7723-6686
- **地址**: 11503 台北市南港區園區街 3 之 1 號 11 樓之 1（南港軟體園區 G 棟）

## 📄 授權

© 2026 Titansoft Pte Ltd. All Rights Reserved.
