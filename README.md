# Court Atlas｜籃球鞋圖鑑

用類似 LLM Wiki 的方式維護球鞋條目，並將 Wiki 發布為可搜尋的靜態網站。收錄 Kobe III、IV、IX、XI 的指定 Protro 版本。首頁與詳情頁皆顯示配色名稱，搜尋欄也可輸入配色查找鞋款。

## 上傳並啟用 GitHub Pages

1. 解壓縮 ZIP。在 GitHub 建立公開 repository，例如 `sneaker-atlas`。
2. 在 repository 的根目錄，將解壓縮後 **sneaker-atlas 資料夾裡面的內容** 上傳並提交至 `main`。上傳後應該能在 repository 首頁直接看到 `index.html`、`AGENTS.md` 和 `wiki/`。建議也上傳 ZIP 附的 `.nojekyll` 檔案。
3. 開啟 **Settings → Pages**，將 **Source** 設為 **Deploy from a branch**，選擇 **main** 和 **/(root)**，按 **Save**。
4. 部署後，回到同一頁開啟 **Visit site**。若使用預設網址，格式為 `https://你的帳號.github.io/sneaker-atlas/`。

[GitHub Pages 官方設定說明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

第一次上傳可直接使用專案已產生的 HTML。Python 只在更新 Markdown 後重新建置時使用，網站本身可在靜態主機執行。

## 在 Windows 本機預覽

在 VS Code 終端切換到含有 `index.html` 的資料夾，執行：

```powershell
python -m http.server 8000
```

開啟 [http://localhost:8000/](http://localhost:8000/)。若 Windows 使用 Python Launcher，可將上方與下方命令的 `python` 換成 `py`。

## 更新 Wiki 並重建網站

從 [AGENTS.md](AGENTS.md) 與 [Wiki 索引](wiki/index.md) 開始。更新條目後執行：

```powershell
python scripts/build.py
python scripts/build.py --check
```

提交 Wiki 與生成的網頁，GitHub Pages 會隨分支更新。建置只使用 Python 3.10 以上的標準函式庫。鞋款照片連到品牌商品圖，詳情也有來源頁連結。首頁封面是 AI 繪製的概念圖。鞋款圖片載入失敗時，網站仍會顯示代數圖版和鞋款資料。

## 課堂展示範例

可在 VS Code 或 Codex 開啟這個專案，再請 AI：

> 先讀 AGENTS.md 和 wiki/index.md，新增 G.T. Cut 3 EP。我的實穿尺碼是 US 10.5，尺碼剛好。請核對官方規格並附來源，未確認的資料標為待補。更新索引、來源表與更新紀錄後，執行建置和驗證。

完成後，可在首頁切換至 G.T. Cut 系列，查看新條目沿用同一套卡片與詳情版型。
