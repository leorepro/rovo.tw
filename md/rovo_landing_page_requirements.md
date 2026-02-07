# Rovo 產品推廣網站 — 開發需求規格書

> **專案名稱：** Atlassian Rovo Landing Page Redesign  
> **目標 URL：** rovo.titansoft.com.sg  
> **版本：** v2.0  
> **建立日期：** 2026-02-07  
> **負責單位：** Titansoft Marketing & Engineering

---

## 一、專案概覽

### 1.1 專案目標

重新設計並開發 Titansoft 的 Atlassian Rovo 產品推廣頁面，解決現有網站的技術缺陷（響應式 bug、名稱拼寫錯誤、草稿遺留），並強化銷售轉化能力（CTA 設計、客戶案例、視覺呈現）。

### 1.2 目標受眾

| 角色 | 關注點 | 頁面對應區塊 |
|------|--------|-------------|
| IT 主管 / CTO | 安全合規、系統整合、ROI | 痛點區塊、FAQ（安全類）、Teamwork Graph |
| 產品經理 / PO | 效率提升、AC 撰寫、知識管理 | 應用範例（AC、專案風險）、功能介紹 |
| 軟體開發人員 | IDE 整合、自動化、No-code | 應用範例（Copilot、Slack/Teams 整合） |
| ITSM / 客服主管 | 工單管理、回應速度、客戶滿意度 | 應用範例（Agent 客服、JSM 整合） |
| 企業決策者 / CEO | 成本效益、同業案例、品牌信任 | 客戶案例（新增）、首屏價值主張 |

### 1.3 技術規格

| 項目 | 規格 |
|------|------|
| 網站類型 | 單頁式行銷著陸頁（Single Page Landing Page） |
| 主要語言 | 繁體中文（部分英文專有名詞保留原文） |
| 建議平台 | WordPress + Elementor / Webflow / Next.js（取代現有 GoDaddy Website Builder） |
| 響應式斷點 | Mobile (< 768px)、Tablet (768-1024px)、Desktop (> 1024px) |
| 效能目標 | Lighthouse Performance ≥ 85、LCP < 2.5s、CLS < 0.1 |
| SEO 要求 | 每個區塊需有正確的語意化 HTML 標籤（h1-h3）、meta description、Open Graph |
| 無障礙 | WCAG 2.1 AA 等級 |

---

## 二、頁面資訊架構（Information Architecture）

### 2.1 銷售漏斗對應

整體頁面遵循 AIDTA（Attention → Interest → Desire → Trust → Action）架構：

```
[Header + 固定導覽列]
    │
    ▼
[Section 1] Hero Section ─────────────── Attention（注意）
    │
    ▼
[Section 2] 企業痛點 ─────────────────── Attention（引發共鳴）
    │
    ▼
[Section 3] 產品功能概覽 ─────────────── Interest（建立興趣）
    │
    ▼
[Section 4] 實際應用範例（7 個場景）──── Desire（激發渴望）
    │
    ▼
[Section 5] 外部產品整合 ─────────────── Desire（延伸價值）
    │
    ▼
[Section 6] AI 學習功能 ─────────────── Desire（輔助功能）
    │
    ▼
[Section 7] Rovo Agent 深入介紹 ──────── Desire（核心賣點）
    │
    ▼
[Section 8] Teamwork Graph 技術底層 ──── Trust（技術可信度）
    │
    ▼
[Section 9] 客戶案例（新增）─────────── Trust（社會認同）
    │
    ▼
[Section 10] FAQ ──────────────────────── Trust（消除疑慮）
    │
    ▼
[Section 11] 免費課程 CTA ─────────────── Action（低門檻行動）
    │
    ▼
[Section 12] 聯絡表單 ────────────────── Action（高意圖行動）
    │
    ▼
[Section 13] 參考影片 ────────────────── 補充資訊
    │
    ▼
[Footer]
```

### 2.2 固定式導覽列錨點

導覽列應包含以下錨點（固定在頁面頂部，滾動時自動 highlight 當前區塊）：

| 導覽項目 | 對應區塊 | 錨點 ID |
|---------|---------|---------|
| 功能 | Section 3 產品功能概覽 | `#features` |
| 應用範例 | Section 4 實際應用範例 | `#use-cases` |
| 技術架構 | Section 8 Teamwork Graph | `#technology` |
| 客戶案例 | Section 9 客戶案例 | `#customers` |
| FAQ | Section 10 常見問題 | `#faq` |
| 聯絡我們 | Section 12 聯絡表單 | `#contact` |

右側額外放置一個高亮 CTA 按鈕：「預約免費 Demo」

---

## 三、各區塊詳細需求

---

### Section 0：Header / 固定導覽列

**功能需求：**

- 固定在頁面頂部，滾動時保持可見
- 左側：Titansoft Logo + 「Atlassian Rovo」文字標識
- 中間：6 個頁內錨點連結（見 2.2）
- 右側：CTA 按鈕「預約免費 Demo」（主色按鈕）
- 滾動時自動 highlight 當前所在區塊的導覽項目
- Mobile 版收合為漢堡選單

**設計規範：**

- 背景：白色，加底部 1px 陰影
- Logo 高度：32px
- 導覽文字：14px、#374151
- CTA 按鈕：#1A56DB 背景、白色文字、圓角 8px

**已知問題修復：**

- ❌ 現有版本品牌文字重複 3 次（響應式 bug）→ 確保每個斷點只顯示 1 份
- ❌ 現有版本無頁內導覽 → 新增完整導覽列
- ❌ 免費課程連結使用 GitHub Pages 域名 → 遷移至子域名 `course.rovo.titansoft.com.sg`

---

### Section 1：Hero Section（首屏區塊）

**內容需求：**

| 元素 | 內容 | 備註 |
|------|------|------|
| 主標題 | Rovo — 專為企業設計的 AI | H1 標籤，全頁唯一 |
| 副標題 | 整合 Jira、Confluence 與 20+ 工具，讓團隊減少 47% 資訊搜尋時間 | 數據需標註來源 |
| 主 CTA | 「預約免費 Demo」 | 主色按鈕，連結至聯絡表單或 Calendly |
| 次 CTA | 「觀看 2 分鐘介紹」 | 白底邊框按鈕，彈出影片 Lightbox |
| 社會認同 | Atlassian Authorized Partner 標章 + 「已服務 XX+ 企業」 | 標章需取得 Atlassian 授權使用 |
| 產品圖片 | Rovo 產品截圖或動態 GIF | 建議使用 Rovo Chat 介面截圖 |

**設計規範：**

- 佈局：左文右圖（Desktop）、上文下圖（Mobile）
- 主標題：48px bold、#1F2937
- 副標題：20px regular、#6B7280
- CTA 間距：主次 CTA 並排，間距 16px

**已知問題修復：**

- ❌ 現有版本首屏無 CTA 按鈕 → 新增主次 CTA
- ❌ 現有版本主標題重複 3 次 → 修復響應式 bug
- ❌ 現有版本副標題過於通用 → 改為數據驅動的價值主張

---

### Section 2：企業面臨的挑戰（痛點區塊）

**內容需求：**

4 張痛點卡片，每張結構如下：

| 欄位 | 說明 |
|------|------|
| Icon | 對應主題的 SVG icon（建議使用 Lucide 或 Heroicons） |
| 數據標題 | 大字體數據（如「47%」、「11 個」），製造視覺衝擊 |
| 痛點標題 | 一行文字，描述問題 |
| 痛點說明 | 2-3 句話，60-80 字 |
| Rovo 解方 | 1-2 句話，說明 Rovo 如何解決 |

**4 張卡片內容：**

| # | 數據 | 痛點標題 | 核心訊息 |
|---|------|---------|---------|
| 1 | —（無數據） | 常見 AI 工具缺乏企業知識 | Rovo 整合 Jira/Confluence，提供企業內部 AI |
| 2 | 47% | 數位工作者陷入資訊孤島 | Rovo 打破資訊孤島，智慧搜尋跨平台資料 |
| 3 | —（無數據） | AI 與現有系統整合困難 | Rovo 採企業級安全標準，確保合規 |
| 4 | 11 個 | 每天切換的應用程式數量 | Rovo 統一介面，減少切換成本 |

**設計規範：**

- 佈局：4 欄並排（Desktop）、2x2 網格（Tablet）、垂直堆疊（Mobile）
- 數據字體：48px bold、#1A56DB
- 卡片背景：白色、圓角 12px、淺灰陰影
- 資料來源：在區塊底部以小字標註數據出處

**已知問題修復：**

- ❌ 「常見的 AI 工具沒有企業知識」標題重複 3 次 → 修復
- ❌ 「工作效率下降和注意力分散」標題重複 3 次 → 修復
- ❌ 數據未標註來源 → 加入出處引用（建議來源：Atlassian State of Teams Report）
- ❌ 缺乏視覺化元素 → 加入 icon 和放大數據

---

### Section 3：產品功能概覽（Find / Learn / Act）

**內容需求：**

| 元素 | 內容 |
|------|------|
| 區塊標題 | 「Rovo 是什麼？」 |
| 區塊副標 | 「一款由 Atlassian 推出的生成式 AI 助手，幫助企業高效搜尋、學習與行動」 |
| 功能展示 | 3 個功能 Tab 或並排卡片 |

**三大功能卡片：**

| 功能 | Icon | 標題 | 子功能 1 | 子功能 2 | 截圖 |
|------|------|------|---------|---------|------|
| Find | 🔍 | 智能搜尋 | 跨平台整合（Jira/Confluence/Google Drive/SharePoint） | 上下文理解，減少切換 | Rovo Search 介面截圖 |
| Learn | 📚 | AI 知識管理 | 自動解析與學習（知識卡片） | 對話式探索（AI 問答） | Rovo Chat 對話截圖 |
| Act | ⚡ | 自動執行 | AI 代理人 Agents（自動化重複工作） | 簡化工作流 | Rovo Agent 設定截圖 |

**互動設計：**

- 建議使用 Tab 切換方式，點擊 Find/Learn/Act 切換對應內容和截圖
- 或使用三欄並排卡片，hover 時展開詳細說明

**已知問題修復：**

- ❌ 第二個 H3 標題為空（###） → 刪除空標題
- ❌ 圖片使用 base64 placeholder（1x1 GIF）→ 替換為實際產品截圖
- ❌ 功能描述偏抽象 → 加入具體使用情境描述

---

### Section 4：實際應用範例（7 個場景）

**整體設計規範：**

每個範例統一格式如下：

```
┌──────────────────────────────────────┐
│  [Icon]  範例標題                     │
│                                      │
│  場景描述（2-3 句話）                  │
│                                      │
│  ┌────────────────────────────┐      │
│  │    產品截圖 / GIF 動畫      │      │
│  └────────────────────────────┘      │
│                                      │
│  📊 成效數據 / 價值說明（1 句話）      │
│  🎯 適用角色標籤                      │
└──────────────────────────────────────┘
```

**7 個範例詳細規格：**

#### 範例 1：搜尋書籤（Rovo Bookmarks）

| 項目 | 內容 |
|------|------|
| 標題 | 直接獲得答案，而不是另一個連結 |
| 對應功能 | Find |
| 場景描述 | 透過 Rovo Bookmarks 搜尋功能，AI 驅動的搜尋優化讓重要內容優先呈現，直接給出答案而非連結列表。 |
| 截圖需求 | Before/After 對比：傳統搜尋結果 vs Rovo 搜尋結果 |
| 適用角色 | 所有知識工作者 |

#### 範例 2：Rovo Chat 內容創建

| 項目 | 內容 |
|------|------|
| 標題 | 像對話一樣，讓 Rovo 協助創建內容 |
| 對應功能 | Learn |
| 場景描述 | 透過 Rovo Chat 進行對話式知識管理，AI 輔助內容創建與資訊分析，加速團隊運作效率。 |
| 截圖需求 | Rovo Chat 實際對話介面截圖（展示提問→回答流程） |
| 適用角色 | 內容編輯、PM、知識管理者 |
| 已知問題 | ❌ 現有版本結尾「Rovo Chat 是最佳選擇！」過於行銷化 → 刪除或改為客觀描述 |

#### 範例 3：專案風險追蹤

| 項目 | 內容 |
|------|------|
| 標題 | Rovo 助團隊提升效率並降低專案風險 |
| 對應功能 | Find + Learn + Act（綜合應用） |
| 場景描述 | Rovo 整合 Jira、Confluence 及其他 SaaS 應用，提供組織目標與工作狀態的可視化視圖，即時追蹤進度並預測潛在風險。 |
| 截圖需求 | 專案 Dashboard 或風險預測視圖截圖 |
| 適用角色 | 專案經理、Scrum Master、管理層 |
| 已知問題 | ❌ 現有版本文字過長（約 120 字一段）→ 拆分為 2-3 短段 |

#### 範例 4：撰寫驗收條件（AC）

| 項目 | 內容 |
|------|------|
| 標題 | Rovo 協助撰寫產品驗收條件 |
| 對應功能 | Act |
| 場景描述 | Rovo 分析現有需求描述與使用者故事，自動補全遺漏的 Acceptance Criteria，確保開發團隊對需求有明確理解。 |
| 截圖需求 | Before/After 範例：原始 User Story → Rovo 補全後的 AC 列表 |
| 適用角色 | PO、開發團隊 |

#### 範例 5：GitHub Copilot 協作

| 項目 | 內容 |
|------|------|
| 標題 | Rovo 搭配 GitHub Copilot，提升開發效率 |
| 對應功能 | Find（外部連結搜尋） |
| 場景描述 | 開發人員在 IDE 中透過 Rovo 存取 Jira 或 Confluence 的任務資訊，不需離開開發環境即可獲取完整上下文。 |
| 截圖需求 | IDE 中使用 Rovo 搜尋 Jira ticket 的截圖 |
| 適用角色 | 軟體開發人員 |
| 補充需求 | 說明整合方式（Chrome Extension / IDE Plugin） |

#### 範例 6：Rovo Agent 客服應用

| 項目 | 內容 |
|------|------|
| 標題 | Rovo Agent 提升團隊效率與客戶滿意度 |
| 對應功能 | Act（AI 代理人） |
| 場景描述 | Rovo Agent 協助客服團隊快速分析問題、聚焦核心、列舉解決方案、找到對應負責人並回報進度，大幅縮短問題解決時間。 |
| 截圖需求 | Agent 工作流程圖或步驟圖 |
| 適用角色 | 客服團隊、技術支援、管理者 |
| 補充需求 | 加入量化數據（如問題解決時間縮短 X%） |

#### 範例 7：Slack / Teams / JSM 整合

| 項目 | 內容 |
|------|------|
| 標題 | Rovo Agent 無縫整合 Slack、Teams 與 JSM |
| 對應功能 | Act（Agent + 自動化） |
| 場景描述 | No-code 串接通訊工具與 JSM，讓 Agent 即時回覆訊息、量化提問數據，並自動進行品質分析，支援手機操作。 |
| 截圖需求 | Slack/Teams 中 Rovo Agent 回覆的對話截圖 |
| 適用角色 | IT 管理者、ITSM 團隊 |
| 適用 Badge | 📱 支援手機、🔧 No-code |
| 已知問題 | ❌ 現有版本標題過長（42 字）→ 縮短為上方版本 |

---

### Section 5：外部產品連接能力

**內容需求：**

| 元素 | 內容 |
|------|------|
| 區塊標題 | 「一個搜尋框，查遍所有工具的資料」（取代原有技術化標題） |
| 三個應用場景 | 企業知識管理 / 多專案協作 / 技術客服 |
| Logo 牆 | 已支援的第三方產品 logo 列表 |

**Logo 牆需包含（依 Atlassian 官方 Connector 支援列表）：**

Google Drive、Microsoft SharePoint、Microsoft Teams、Slack、GitHub、Figma、Loom、Trello 等。

**設計規範：**

- Logo 牆使用灰階 logo，hover 時顯示彩色
- 三個場景使用 icon + 標題 + 1 句描述的格式

---

### Section 6：AI 學習功能（Definition）

**處理建議：**

此功能點較小，建議不獨立為完整區塊。有兩種處理方式：

- **方案 A（推薦）：** 併入 Section 3 的 Learn 功能卡片中，作為子功能展示
- **方案 B：** 若保留獨立區塊，需加入更多內容（使用場景截圖、實際定義查詢範例）

若採方案 B：

| 元素 | 內容 |
|------|------|
| 區塊標題 | 「工作中即時學習，不打斷你的心流」 |
| 核心功能 | 快速定義（Definition）：即時查詢術語、縮寫、公司特定語言 |
| 截圖需求 | Confluence 頁面中出現 Definition 彈窗的截圖 |

---

### Section 7：Rovo Agent 深入介紹

**內容需求：**

取代現有輪播格式，改為並排卡片確保關鍵資訊不被隱藏。

| 元素 | 內容 |
|------|------|
| 區塊標題 | 「Rovo Agent — 你的 AI 虛擬隊友」 |
| 副標題 | 「靈活應用組織知識，節省人力成本，提升產出品質」 |

**卡片內容（至少 3 張，最多 4 張並排）：**

| # | 卡片標題 | 內容重點 | 截圖需求 |
|---|---------|---------|---------|
| 1 | Agent + Automation 結合 | 資源管理自動化、流程報告自動化 | Automation 設定截圖 |
| 2 | 打造專屬 Agent | 可控知識範圍、個性化設定、決策效率 | Agent Builder 截圖 |
| 3 | Agent Marketplace | 預建 Agent 模板、快速部署 | Marketplace 瀏覽截圖 |
| 4 | 開發者自訂 Agent | Forge 平台、API 整合、進階自訂 | 程式碼範例截圖 |

**設計規範：**

- 並排卡片（Desktop 3-4 欄）而非輪播
- 每張卡片：icon + 標題 + 2-3 個 bullet + 截圖縮圖

**已知問題修復：**

- ❌ 現有版本使用輪播，後面卡片容易被忽略 → 改為並排
- ❌ 現有版本標題過長（47 字）→ 縮短

---

### Section 8：Teamwork Graph 技術底層

**內容需求：**

| 元素 | 內容 |
|------|------|
| 區塊標題 | 「Rovo 為什麼比一般 AI 更懂你的團隊？」 |
| 技術名稱 | **Teamwork Graph**（⚠️ 注意：是 Graph 不是 Graphic） |
| 核心概念 | Atlassian 雲端平台核心數據層，聚焦團隊、工作內容、目標、知識四大元素 |
| 對比展示 | 左右對比：一般 AI vs Rovo（有 Teamwork Graph） |
| 一句話翻譯 | 「簡單來說，Rovo 越用越懂你的團隊」 |

**對比表內容：**

| 面向 | 一般生成式 AI | Rovo（Teamwork Graph） |
|------|-------------|----------------------|
| 知識來源 | 公開網路資料 | 企業內部 Jira/Confluence + 第三方工具 |
| 回答角度 | 通用、直線化 | 團隊協作視角、個性化 |
| 學習能力 | 無組織脈絡 | 從每次互動中自動學習 |
| 權限控制 | 無 | 尊重原始資料權限 |

**視覺需求：**

- Teamwork Graph 架構圖或動畫（四大元素：團隊、工作內容、目標、知識）
- 左右對比使用不同背景色區分

**已知問題修復（高優先）：**

- ❌ 多處「Teamwork Graphic」拼寫錯誤 → 全部修正為「Teamwork Graph」
- ❌ 出現「Graphick」拼寫錯誤 → 修正
- ❌ 技術說明偏抽象 → 加入「一句話翻譯」和架構圖

---

### Section 9：客戶案例（新增區塊）

> ⚠️ 此為新增區塊，現有網站不存在。

**內容需求：**

| 元素 | 內容 |
|------|------|
| 區塊標題 | 「看看誰在用 Rovo」或「企業成功故事」 |
| 展示數量 | 2-3 個客戶案例 |
| 每個案例格式 | 公司 Logo + 行業 + 挑戰 + Rovo 解方 + 成效數據 + 引言 |

**案例模板：**

```
┌──────────────────────────────────────┐
│  [Company Logo]  XX 公司             │
│  行業：科技 / 金融 / 製造            │
│                                      │
│  挑戰：（1-2 句話描述導入前的問題）    │
│  解方：（1-2 句話描述如何用 Rovo）    │
│                                      │
│  📊 「導入後問題解決時間縮短 40%」    │
│                                      │
│  💬 「Rovo 讓我們的團隊...」         │
│      — CTO, XX 公司                  │
└──────────────────────────────────────┘
```

**備註：**

- 優先使用台灣市場的客戶案例
- 若無法取得客戶授權，可先使用匿名化案例（如「某科技公司」）
- 未來可擴展為獨立的案例研究子頁面

---

### Section 10：常見問題（FAQ）

**內容需求：**

以 Accordion（手風琴展開）方式呈現，按類別分組：

#### 分類 A：功能與整合

| # | 問題 | 回答重點 |
|---|------|---------|
| 1 | Rovo 支援哪些第三方產品？ | Connector 機制 + 支援產品列表 |
| 2 | 權限如何管理和同步？ | 同步機制 + Google Drive 範例（合併現有 Q2+Q8） |
| 3 | Rovo 使用哪些 AI 模型？ | OpenAI + 自託管開源模型，供應商不保留數據 |
| 4 | 瀏覽器擴展能做什麼？ | Chrome Extension 功能 + 隱私處理 |

#### 分類 B：安全與合規

| # | 問題 | 回答重點 |
|---|------|---------|
| 5 | Rovo 有哪些安全認證？ | SOC2 + ISO27001 已通過 |
| 6 | 數據如何被使用和儲存？ | 索引範圍 + 權限設定 + 儲存說明 |
| 7 | 刪除數據後會發生什麼？ | 三種情境：管理員 Connector / Smart Link / 斷開連接 |
| 8 | 與第三方產品的資料互通安全嗎？ | 條款適用 + 數據審查建議 |

#### 分類 C：價格與導入（新增）

| # | 問題 | 回答重點 |
|---|------|---------|
| 9 | Rovo 的價格方案？ | 依 Atlassian 官方定價 + Titansoft 顧問服務 |
| 10 | 如何開始免費試用？ | 試用流程 + 聯絡方式 |
| 11 | 導入 Rovo 需要多長時間？ | 典型導入時程 + 支援服務說明 |
| 12 | Titansoft 提供哪些支援？ | 技術支援 + 教育訓練 + 顧問服務 |

**設計規範：**

- 區塊頂部：分類 Tab（功能 / 安全 / 價格）
- 每個問題可點擊展開/收合
- 區塊底部：「找不到答案？聯絡我們 sales@titansoft.com.sg」

**已知問題修復：**

- ❌ 缺少商業面 FAQ → 新增分類 C
- ❌ Q2 和 Q8 主題重疊 → 合併為一個完整的權限說明
- ❌ 用語不一致（使用者/用戶混用）→ 統一使用「使用者」

---

### Section 11：免費課程推廣 CTA

**內容需求：**

| 元素 | 內容 |
|------|------|
| 小標 | 鈦坦客戶專屬 |
| 主標 | Atlassian Rovo 免費課程 |
| 描述 | 系統化學習 Rovo AI，X 堂課程涵蓋搜尋、知識管理與 Agent 建置 |
| CTA 按鈕 | 「立即報名免費課程」（取代現有的「瞭解更多」） |
| 課程資訊 | 堂數、時長、涵蓋主題（需具體化） |

**設計規範：**

- 使用深色背景（#1A56DB 或深灰）+ 白色文字，與其他區塊形成視覺對比
- CTA 按鈕使用白底 + 主色文字，或亮色（橘/綠）按鈕

**已知問題修復：**

- ❌ CTA 文字「瞭解更多」不夠強烈 → 改為「立即報名免費課程」
- ❌ 連結指向 GitHub Pages → 遷移至正式子域名

---

### Section 12：聯絡表單與公司資訊

**表單欄位需求：**

| 欄位 | 類型 | 必填 | 備註 |
|------|------|------|------|
| 姓名 | Text | ✅ | |
| 公司名稱 | Text | ✅ | |
| 職稱 | Text | 選填 | |
| 電子郵件 | Email | ✅ | 驗證格式 |
| 電話 | Tel | 選填 | |
| 團隊規模 | Dropdown | 選填 | 1-10 / 11-50 / 51-200 / 200+ |
| 感興趣的功能 | Multi-select | 選填 | Rovo Search / Rovo Chat / Rovo Agents / 全部 |
| 需求描述 | Textarea | 選填 | 最多 500 字 |
| 隱私政策同意 | Checkbox | ✅ | 連結至隱私政策頁面 |
| 送出按鈕 | Button | — | 「送出諮詢」 |

**公司資訊：**

| 項目 | 內容 |
|------|------|
| 公司名稱 | 新加坡商鈦坦科技 Titansoft |
| 地址 | 11503 台北市南港區園區街 3 之 1 號 11 樓之 1（南港軟體園區 G 棟） |
| 電話 | 02-7723-6686 |
| Email | sales@titansoft.com.sg |
| 地圖 | 嵌入 Google Maps |

**已知問題修復：**

- ❌ 名稱欄位非必填 → 改為必填
- ❌ 缺少公司名稱、職稱欄位 → 新增
- ❌ 有「附加檔案」功能（初次聯繫不需要）→ 移除或改為可選
- ❌ 缺少隱私政策連結 → 新增

---

### Section 13：參考影片

**內容需求：**

| 元素 | 內容 |
|------|------|
| 區塊標題 | 「觀看 Rovo 實際演示」（取代「其他參考影片」） |
| 影片 1 | Meet Rovo, your AI-powered teammate（Atlassian 官方） |
| 影片 2 | The Ultimate Rovo Agents guide（Team '24 Europe） |
| 影片 3（新增） | Titansoft 自製中文介紹影片（未來製作） |

**設計規範：**

- 影片使用 YouTube 嵌入，支援 lazy loading
- 每支影片下方顯示標題和簡短描述
- 考慮將此區塊移至 Section 3（功能介紹）下方，而非頁面底部

**已知問題修復：**

- ❌ 標題「其他參考影片」定位太弱 → 改為「觀看 Rovo 實際演示」
- ❌ 影片均為英文 → 長期計畫製作中文版本
- ❌ 位置太靠後 → 考慮上移

---

### Section 14：Footer

**內容需求：**

| 元素 | 內容 |
|------|------|
| 版權聲明 | © 2025-2026 Titansoft Pte Ltd. All Rights Reserved.（使用動態年份） |
| 法律連結 | 隱私政策、服務條款、Cookie 政策 |
| 產品連結 | Atlassian Rovo、Atlassian Intelligence、Jira、Confluence |
| 公司連結 | 關於 Titansoft、聯絡我們、免費課程 |
| 社群媒體 | LinkedIn、Facebook（icon 連結） |
| 認證標章 | Atlassian Authorized Partner Badge |

**已知問題修復：**

- ❌ 版權年份可能過時 → 使用動態年份
- ❌ 缺少隱私政策、服務條款 → 新增
- ❌ 缺少社群媒體連結 → 新增
- ❌ 無 Atlassian Partner 標章 → 新增

---

## 四、Prompt 指南處理方案

現有網站中「AI 提示詞撰寫指南」（包含 Role/Job/Context 框架和 Do/Don't 列表）佔據大量頁面篇幅，但與產品銷售主線關聯薄弱。

**建議處理方式：**

| 方案 | 描述 | 優點 | 缺點 |
|------|------|------|------|
| A（推薦） | 從本頁移除，獨立為子頁面 `/prompt-guide` | 降低主頁長度、獨立 SEO 價值 | 需額外開發頁面 |
| B | 精簡為 3-4 條核心要點 + 「查看完整指南」連結 | 保留部分內容、降低篇幅 | 仍占用銷售頁空間 |
| C | 併入免費課程內容 | 增加課程價值 | 主頁無相關內容 |

**無論採用哪種方案，以下問題必須修復：**

- ❌ 「工作(Job)」段落結尾的草稿編輯備註：「若有其他細節想加入或強調，可以再調整內容！」→ 立即刪除
- ❌ Do/Don't 標題重複 3 次 → 修復響應式 bug

---

## 五、已知問題清單（Bug Tracker）

### 高優先（P0 — 立即修復）

| # | 問題 | 影響區塊 | 類型 | 說明 |
|---|------|---------|------|------|
| BUG-001 | 「Teamwork Graphic」拼寫錯誤 | Section 8 | 內容錯誤 | 正確名稱為「Teamwork Graph」，包含「Graphick」變體 |
| BUG-002 | 響應式標題重複 3 次 | Header, Hero, Section 2, Section 10 | CSS/HTML | 多個斷點的文字同時顯示，需在非活躍斷點加 `display:none` |
| BUG-003 | 草稿編輯備註遺留 | Section 10 (Prompt) | 內容錯誤 | 「若有其他細節想加入…」出現在正式頁面 |
| BUG-004 | 首屏無 CTA 按鈕 | Section 1 Hero | 轉化缺陷 | 首屏是最高流量區域，缺少行動呼籲 |

### 中優先（P1 — 1-2 週內修復）

| # | 問題 | 影響區塊 | 類型 | 說明 |
|---|------|---------|------|------|
| BUG-005 | 空白 H3 標題 | Section 3 | HTML | 多餘的 `###` 標籤 |
| BUG-006 | 圖片 placeholder | 多個區塊 | 資源缺失 | 多處使用 1x1 GIF base64，疑似圖片未上傳 |
| BUG-007 | 用語不一致 | Section 10 FAQ | 內容 | 「使用者」與「用戶」混用 |
| BUG-008 | 範例標題過長 | Section 4 範例 7 | 內容 | 42 字標題不利於掃描閱讀 |
| BUG-009 | 版權年份 | Footer | 內容 | 需確認是否需更新為 2026 |

### 低優先（P2 — 長期優化）

| # | 問題 | 影響區塊 | 類型 | 說明 |
|---|------|---------|------|------|
| BUG-010 | 課程連結使用 GitHub Pages | Header, Section 11 | 專業度 | 建議遷移至正式子域名 |
| BUG-011 | 數據來源未標註 | Section 2 | 可信度 | 47% 和 11 個 App 缺少出處 |
| BUG-012 | 缺少結構化數據 | 全頁 | SEO | 需加入 JSON-LD（Organization, Product, FAQ） |

---

## 六、SEO 與技術優化需求

### 6.1 Meta 標籤

```html
<title>Atlassian Rovo AI — 企業級 AI 助手 | 新加坡商鈦坦科技 Titansoft</title>
<meta name="description" content="Rovo 是 Atlassian 推出的企業 AI 助手，整合 Jira、Confluence 與 20+ 工具。智能搜尋、AI 知識管理、自動化 Agent，讓團隊效率大幅提升。Titansoft 提供免費諮詢與教育訓練。">
<meta name="keywords" content="Rovo, Atlassian Rovo, AI, Jira, Confluence, 企業AI, 知識管理, Rovo Agent, Titansoft, 鈦坦科技">
```

### 6.2 Open Graph

```html
<meta property="og:title" content="Atlassian Rovo AI — 專為企業設計的 AI 助手">
<meta property="og:description" content="整合 Jira、Confluence 與 20+ 工具，智能搜尋、AI 知識管理、自動化 Agent。">
<meta property="og:image" content="https://rovo.titansoft.com.sg/og-image.png">
<meta property="og:url" content="https://rovo.titansoft.com.sg/">
```

### 6.3 結構化數據（JSON-LD）

需加入以下結構化數據：

- `Organization`：Titansoft 公司資訊
- `Product`：Rovo 產品資訊
- `FAQPage`：FAQ 問題與回答
- `BreadcrumbList`：頁面階層

### 6.4 效能優化

- 圖片格式：使用 WebP + fallback JPEG
- 圖片載入：Lazy loading（viewport 外的圖片）
- CSS/JS：壓縮合併、Critical CSS inline
- 影片：YouTube embed lazy loading（點擊後才載入 iframe）

---

## 七、驗收標準（Acceptance Criteria）

### 7.1 功能驗收

- [ ] 所有 15 個區塊（含新增的客戶案例）完整呈現
- [ ] 固定導覽列正常運作，錨點跳轉準確
- [ ] 聯絡表單可正確送出，必填欄位驗證正常
- [ ] FAQ Accordion 展開/收合正常
- [ ] YouTube 影片嵌入可正常播放
- [ ] 所有外部連結可正確開啟

### 7.2 響應式驗收

- [ ] Desktop (1920px, 1440px, 1280px) 佈局正常
- [ ] Tablet (1024px, 768px) 佈局正常
- [ ] Mobile (375px, 414px) 佈局正常
- [ ] 導覽列在 Mobile 正確收合為漢堡選單
- [ ] 所有文字無重複顯示（修復 BUG-002）

### 7.3 內容驗收

- [ ] 全文無「Teamwork Graphic」錯誤拼寫（全部為「Teamwork Graph」）
- [ ] 全文無草稿編輯備註遺留
- [ ] 全文用語一致（統一使用「使用者」）
- [ ] 數據來源均有標註
- [ ] 所有圖片為實際產品截圖（非 placeholder）

### 7.4 效能驗收

- [ ] Lighthouse Performance Score ≥ 85
- [ ] LCP < 2.5 秒
- [ ] CLS < 0.1
- [ ] FID < 100ms

### 7.5 SEO 驗收

- [ ] H1 標籤全頁唯一
- [ ] Meta title 和 description 正確設定
- [ ] Open Graph 標籤完整
- [ ] JSON-LD 結構化數據通過 Google Rich Results Test
- [ ] 所有圖片含 alt 屬性

---

*文件結束 — 如有疑問請聯絡 Titansoft Marketing Team*
