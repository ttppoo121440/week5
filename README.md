# Welcome to week5 👋

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000)

> 第五週 作業

### 🏠 [Homepage](https://ttppoo121440.github.io/week5/)

## 安裝

```sh
npm install
```

## 使用

```sh
npm start
```

## 資料夾結構

```plaintext
│  .env                      # 環境變數配置文件，用於儲存專案的敏感資訊，如 API 金鑰等。
│  .env.production           # 生產環境的環境變數配置文件。
│  .gitignore                # Git 忽略文件列表，指定哪些文件和資料夾不應該被版本控制系統追蹤。
│  .prettierrc               # Prettier 配置文件，用於設定代碼格式化的規則。
│  eslint.config.js          # ESLint 配置文件，用於設定代碼檢查的規則。
│  package-lock.json         # NPM 鎖定文件，用於鎖定目前專案所使用的所有 NPM 套件的具體版本。
│  package.json              # 專案的 NPM 配置文件，包含專案的基本資訊和所需的依賴套件。
│  postcss.config.js         # PostCSS 配置文件，用於設定 CSS 轉換插件。
│  README.md                 # 專案的說明文件，通常用於記錄專案的相關資訊和使用說明。
│  tailwind.config.js        # Tailwind CSS 配置文件，用於設定 Tailwind CSS 的自定義配置。
│  tsconfig.json             # TypeScript 配置文件，用於設定 TypeScript 編譯器的選項。
│  vite-env.d.ts             # Vite 的 TypeScript 環境宣告文件。
│  vite.config.ts            # Vite 配置文件，用於設定 Vite 的打包和開發服務器配置。
│
├─.vscode                   # VSCode 編輯器的設定資料夾。
│      settings.json        # VSCode 的設定文件，包含編輯器的配置選項。
│
├─public                    # 公共資源資料夾，存放不需編譯的靜態資源。
│
└─src                       # 原始碼資料夾，存放專案的所有源代碼。
    │  main.ts              # 專案的主要入口文件。
    │
    ├─assets                # 資產資料夾，存放圖片、樣式等靜態資源。
    │  └─styles             # 樣式文件資料夾。
    │          tailwind.css # Tailwind CSS 主樣式文件。
    │
    ├─components            # 組件資料夾，存放可重用的 UI 組件。
    │  │  article.ejs       # 文章組件模板文件。
    │  │  message.ejs       # 訊息組件模板文件。
    │  │  pagination.ejs    # 分頁組件模板文件。
    │  │  table-item-action.ejs # 表格項目操作組件模板文件。
    │  │
    │  └─Modal              # 模態框組件資料夾。
    │          edit-modal.ejs # 編輯模態框組件模板文件。
    │          infoModal.ejs  # 信息模態框組件模板文件。
    │          new-modal.ejs  # 新建模態框組件模板文件。
    │
    ├─layout                # 佈局資料夾，存放佈局組件。
    │      aside.ejs        # 側邊欄佈局組件模板文件。
    │
    ├─models                # 模型資料夾，存放應用程序的數據模型。
    │      Observer.ts      # 觀察者模型文件。
    │
    ├─observers             # 觀察者資料夾，存放觀察者的具體實現。
    │      UIObserver.ts    # UI 觀察者文件。
    │
    ├─pages                 # 頁面資料夾，存放具體的頁面文件。
    │      admin.html       # 管理員頁面文件。
    │      assignment-post.html # 任務發布頁面文件。
    │      index.html       # 主頁面文件。
    │
    ├─services              # 服務資料夾，存放應用程序的邏輯服務。
    │      UIService.ts     # UI 服務文件。
    │
    ├─subjects              # 主題資料夾，存放主題的具體實現。
    │      UISubject.ts     # UI 主題文件。
    │
    └─utils                 # 工具資料夾，存放工具函數。
            DOMUtils.ts     # DOM 工具文件。
```

## Author

👤 **兔子**

- Github: [@ttppoo121440](https://github.com/ttppoo121440)
