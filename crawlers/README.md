# 气象情报爬虫系统

## 📋 文件说明

```
crawlers/
├── news_crawler.py          # 新闻爬虫（36氪、TechCrunch）
├── company_crawler.py       # 企业工商信息爬虫
├── appstore_crawler.py      # App Store 版本监测
├── run_crawler.py           # 主控脚本
├── requirements.txt         # Python 依赖
└── README.md               # 本文件
```

---

## 🚀 快速开始

### 1. 安装依赖

```bash
cd crawlers
pip3 install -r requirements.txt
```

### 2. 运行爬虫

```bash
# 完整爬取（推荐）
python3 run_crawler.py

# 或单独运行某个爬虫
python3 news_crawler.py        # 新闻爬虫
python3 appstore_crawler.py    # App Store 监测
python3 company_crawler.py     # 企业信息
```

### 3. 查看结果

爬取的数据会自动合并到：
```
../data.js
```

网站会自动读取更新后的数据。

---

## 📦 依赖说明

### 必需依赖：
- `requests` - HTTP 请求
- `beautifulsoup4` - HTML 解析

### 可选依赖：
- `google-play-scraper` - Google Play 数据（如果需要）
- `selenium` - 处理 JavaScript 渲染（如果需要）

---

## 🎯 各爬虫功能

### 1. 新闻爬虫 (news_crawler.py)

**功能：**
- 爬取 36氪 的气象相关新闻
- 爬取 TechCrunch 的天气应用新闻
- 自动提取公司名、情感分析

**运行：**
```bash
python3 news_crawler.py
```

**输出：**
- `news_results.json` - 原始新闻数据
- 自动合并到 `../data.js`

---

### 2. App Store 爬虫 (appstore_crawler.py)

**功能：**
- 监测墨迹天气、彩云天气等 App 版本
- 获取用户评分和评论
- 分析用户反馈情感

**运行：**
```bash
python3 appstore_crawler.py
```

**输出：**
- `app_store_results.json` - App 数据
- 自动合并到 `../data.js`

**监测的 App：**
- 墨迹天气 (ID: 425038398)
- 彩云天气 (ID: 847764912)
- AccuWeather (ID: 388966650)
- The Weather Channel (ID: 295646461)
- Weather Underground (ID: 486154808)

---

### 3. 企业工商爬虫 (company_crawler.py)

**功能：**
- 爬取国家企业信用信息公示系统（有反爬）
- 调用天眼查 API（需要付费）
- 调用 SEC EDGAR API（免费，美国公司）

**运行：**
```bash
python3 company_crawler.py
```

**注意：**
- 中国企业需要天眼查 API Key
- 美国上市公司可以免费获取（SEC EDGAR）

---

## 🔧 配置说明

### 天眼查 API（可选）

如果需要爬取中国企业工商信息：

1. 访问 https://open.tianyancha.com/ 注册
2. 获取 API Key
3. 在 `company_crawler.py` 中配置：

```python
api_key = "YOUR_TIANYANCHA_API_KEY"  # 替换为你的 Key
```

**费用：** 约 5000-20000 元/年

### Webz.io API（推荐）

如果需要更全面的网络监测：

1. 访问 https://webz.io/ 注册
2. 获取 API Key（免费额度：500次/月）
3. 可以替代 `news_crawler.py` 的部分功能

---

## ⚠️ 注意事项

### 1. 反爬机制

很多网站有反爬机制：
- **36氪、知乎**：需要处理登录、验证码
- **国家企业信用信息公示系统**：强反爬，建议用天眼查 API
- **App Store**：限制频率，需要控制请求速度

**建议：**
- 控制爬取频率（每个请求间隔 2-5 秒）
- 使用代理 IP（如果被封）
- 优先使用官方 API

### 2. 数据准确性

- 爬虫数据可能不完整或有延迟
- 建议人工审核重要情报
- App Store 数据相对可靠

### 3. 法律合规

- 遵守网站的 robots.txt
- 不要过度爬取
- 仅用于个人学习或内部使用
- 商业使用请购买官方 API

---

## 📊 数据格式

### 新闻数据格式

```json
{
  "title": "墨迹天气推出新功能",
  "source": "36氪",
  "url": "https://...",
  "date": "2026-09-17",
  "summary": "摘要...",
  "company": "墨迹天气",
  "sentiment": "正面"
}
```

### App 数据格式

```json
{
  "name": "墨迹天气",
  "version": "9.0.8",
  "release_date": "2026-09-15",
  "rating": 4.5,
  "release_notes": "版本更新内容..."
}
```

---

## 🔄 自动化运行

### 使用 cron（macOS/Linux）

每天早上 9 点自动爬取：

```bash
# 编辑 crontab
crontab -e

# 添加以下行
0 9 * * * cd /path/to/crawlers && /usr/local/bin/python3 run_crawler.py >> crawler.log 2>&1
```

### 使用 GitHub Actions（推荐）

项目已经配置好 GitHub Actions，会每天自动运行。

如果想用爬虫替代模拟数据：
1. 在 GitHub Secrets 中添加 API Key
2. 修改 `.github/workflows/daily-update.yml`
3. 把 `update-daily.js` 改为调用 `run_crawler.py`

---

## 🐛 常见问题

### Q1: 爬虫被封了怎么办？
**A:** 
- 增加请求间隔时间
- 使用代理 IP
- 改用官方 API

### Q2: 36氪数据爬不到？
**A:** 36氪有反爬机制，建议：
- 使用 Selenium + 无头浏览器
- 或改用其他新闻源

### Q3: App Store 数据不完整？
**A:** App Store API 有限制，可以：
- 增加请求间隔
- 使用第三方服务（如 App Annie）

### Q4: 中国企业信息怎么获取？
**A:** 
- **免费方法**：手动从国家企业信用信息公示系统复制
- **付费方法**：购买天眼查/企查查 API

---

## 💡 改进建议

### 短期（1-2周）：
1. ✅ 先用现有爬虫测试
2. 📝 记录哪些数据源可靠
3. 🔧 调整爬虫参数

### 中期（1-3个月）：
1. 🔌 申请 Webz.io 免费 API
2. 🔌 集成 App Store Connect API
3. 📊 添加数据去重和清洗

### 长期（3-6个月）：
1. 💰 如效果好，购买天眼查 API
2. 🤖 使用 AI 做情报分类和摘要
3. 📈 添加数据可视化分析

---

## 📞 需要帮助？

遇到问题可以：
1. 查看爬虫日志
2. 检查网络连接
3. 确认目标网站是否可访问
4. 提供错误信息截图

---

**最后更新：** 2026-09-17
**版本：** 1.0
