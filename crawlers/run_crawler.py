#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
气象情报爬虫主控脚本
整合所有爬虫，生成 data.js 文件
"""

import json
import os
from datetime import datetime
from news_crawler import NewsCrawler
from company_crawler import CompanyCrawler
from appstore_crawler import AppStoreCrawler
from google_news_crawler import GoogleNewsCrawler
from company_news_crawler import CompanyNewsCrawler
from tob_bidding_crawler import ToBBiddingCrawler


class IntelligenceManager:
    def __init__(self):
        self.data_file = '../data.js'
        self.results_dir = 'results'

        # 创建结果目录
        if not os.path.exists(self.results_dir):
            os.makedirs(self.results_dir)

    def load_existing_data(self):
        """加载现有的 data.js"""
        print("📂 加载现有数据...")

        try:
            with open(self.data_file, 'r', encoding='utf-8') as f:
                content = f.read()

            # 提取 MOCK_DATA 对象
            start = content.find('const MOCK_DATA = ')
            if start != -1:
                start += len('const MOCK_DATA = ')
                end = content.rfind('};')
                if end != -1:
                    json_str = content[start:end+1]
                    data = json.loads(json_str)
                    print("  ✅ 数据加载成功")
                    return data
        except Exception as e:
            print(f"  ⚠️  加载失败: {e}")

        return None

    def merge_news_data(self, existing_data, news_results):
        """
        合并新闻数据到现有数据
        策略：不再保留webIntelligence，而是将有价值的新闻分类到对应板块
        """
        print("🔄 智能分类新闻数据...")

        if not news_results:
            print("  ℹ️  没有新闻数据需要合并")
            return existing_data

        # 统计
        stats = {
            'total': len(news_results),
            'company_news': 0,
            'tob_bidding': 0,
            'filtered': 0
        }

        for news in news_results:
            # 判断新闻价值和类别
            category = self.classify_news(news)

            if category == 'company_news':
                # 合并到公司动态
                new_item = {
                    'id': len(existing_data.get('tocCompanyNews', [])) + 1,
                    'company': news.get('company', '行业动态'),
                    'date': news['date'],
                    'title': news['title'],
                    'type': self.extract_news_type(news['title']),
                    'rating': 'B',
                    'content': news['summary'][:300],
                    'impactOnMoji': f"关注{news.get('company', '该公司')}的这一动态，评估对市场的影响。",
                    'source': news['source']
                }

                if 'tocCompanyNews' not in existing_data:
                    existing_data['tocCompanyNews'] = []

                existing_data['tocCompanyNews'].insert(0, new_item)
                stats['company_news'] += 1

            elif category == 'filtered':
                # 无价值新闻，不保留
                stats['filtered'] += 1

        # 保持公司动态不超过 30 条
        if 'tocCompanyNews' in existing_data and len(existing_data['tocCompanyNews']) > 30:
            existing_data['tocCompanyNews'] = existing_data['tocCompanyNews'][:30]

        print(f"  ✅ 新闻分类完成：公司动态 {stats['company_news']} 条，过滤 {stats['filtered']} 条")
        return existing_data

    def classify_news(self, news):
        """
        分类新闻：判断是否有价值，以及属于哪个类别
        """
        title = news['title'].lower()
        summary = news.get('summary', '').lower()
        company = news.get('company', '')

        # 无价值关键词（纯天气预报内容）
        useless_keywords = [
            'weather forecast', 'temperature', 'rain', 'snow', 'storm',
            '天气预报', '气温', '降雨', '降雪', '风暴', '预报',
            'what is the weather', 'how hot', 'how cold'
        ]

        # 如果主要是天气预报内容，过滤掉
        if any(keyword in title + summary for keyword in useless_keywords):
            if not any(word in title + summary for word in ['app', 'service', 'company', '公司', '应用', '服务']):
                return 'filtered'

        # 有价值关键词（公司动态）
        valuable_keywords = [
            'launch', 'release', 'funding', 'acquisition', 'partnership',
            'strategy', 'expand', 'growth',
            '发布', '推出', '融资', '收购', '合作', '战略', '扩张', '增长'
        ]

        # 如果包含有价值关键词，且有明确公司
        if company and company != '行业动态':
            if any(keyword in title + summary for keyword in valuable_keywords):
                return 'company_news'

        # 默认过滤
        return 'filtered'

    def extract_news_type(self, title):
        """从标题提取新闻类型"""
        if any(word in title for word in ['融资', 'funding', '投资', 'investment']):
            return '融资'
        elif any(word in title for word in ['收购', 'acquisition', '并购']):
            return '收购'
        elif any(word in title for word in ['战略', 'strategy', '转型']):
            return '战略'
        elif any(word in title for word in ['合作', 'partnership', '签约']):
            return '合作'
        elif any(word in title for word in ['发布', 'launch', '推出', 'release']):
            return '产品'
        else:
            return '动态'

    def merge_app_data(self, existing_data, app_results):
        """合并 App 更新数据"""
        print("🔄 合并 App 更新数据...")

        if not app_results:
            print("  ℹ️  没有 App 数据需要合并")
            return existing_data

        for app in app_results:
            app_info = app['app_info']

            new_item = {
                'id': len(existing_data.get('tocAppUpdates', [])) + 1,
                'company': app['app_name'],
                'version': app_info['version'],
                'date': app_info['release_date'][:10],
                'rating': self.get_rating_from_score(app_info['rating']),
                'updateContent': app_info['release_notes'] or '版本优化和bug修复',
                'highlights': f"版本 {app_info['version']} 更新，用户评分 {app_info['rating']:.1f}/5.0",
                'insightForMoji': f"{app['app_name']}的更新值得关注，建议分析其功能变化和用户反馈。",
                'source': 'App Store',
                'review_analysis': app.get('review_analysis', {})
            }

            if 'tocAppUpdates' not in existing_data:
                existing_data['tocAppUpdates'] = []

            existing_data['tocAppUpdates'].insert(0, new_item)

        # 保持不超过 20 条
        if len(existing_data['tocAppUpdates']) > 20:
            existing_data['tocAppUpdates'] = existing_data['tocAppUpdates'][:20]

        print(f"  ✅ 已合并 {len(app_results)} 个 App 更新")
        return existing_data

    def merge_company_news(self, existing_data, company_news_results):
        """合并公司动态数据"""
        print("🔄 合并公司动态数据...")

        if not company_news_results:
            print("  ℹ️  没有公司动态需要合并")
            return existing_data

        for news in company_news_results:
            new_item = {
                'id': len(existing_data.get('tocCompanyNews', [])) + 1,
                'company': news['company'],
                'date': news['date'],
                'title': news['title'],
                'type': news['type'],
                'rating': news['rating'],
                'content': news['summary'],
                'impactOnMoji': news['impactOnMoji'],
                'source': news['source']
            }

            if 'tocCompanyNews' not in existing_data:
                existing_data['tocCompanyNews'] = []

            existing_data['tocCompanyNews'].insert(0, new_item)

        # 保持不超过 30 条
        if len(existing_data['tocCompanyNews']) > 30:
            existing_data['tocCompanyNews'] = existing_data['tocCompanyNews'][:30]

        print(f"  ✅ 已合并 {len(company_news_results)} 条公司动态")
        return existing_data

    def merge_tob_data(self, existing_data, tob_results):
        """合并 ToB 招标数据"""
        print("🔄 合并 ToB 招标数据...")

        if not tob_results:
            print("  ℹ️  没有招标数据需要合并")
            return existing_data

        # 按行业分类
        by_industry = {'地铁': [], '航空': [], '能源': []}

        for bidding in tob_results:
            industry = bidding.get('industry', '')
            if industry in by_industry:
                new_item = {
                    'id': len(by_industry[industry]) + 1,
                    'date': bidding['date'],
                    'title': bidding['title'],
                    'type': bidding['type'],
                    'rating': bidding['rating'],
                    'amount': bidding['amount'],
                    'content': bidding['summary'],
                    'analysis': bidding['analysis'],
                    'source': bidding['source']
                }
                by_industry[industry].append(new_item)

        # 更新到数据中
        if 'tobIntelligence' not in existing_data:
            existing_data['tobIntelligence'] = {}

        existing_data['tobIntelligence']['metro'] = by_industry['地铁'][:20]
        existing_data['tobIntelligence']['aviation'] = by_industry['航空'][:20]
        existing_data['tobIntelligence']['energy'] = by_industry['能源'][:20]

        total = sum(len(v) for v in by_industry.values())
        print(f"  ✅ 已合并 {total} 条招标信息（地铁:{len(by_industry['地铁'])}, 航空:{len(by_industry['航空'])}, 能源:{len(by_industry['能源'])}）")
        return existing_data

    def get_rating_from_score(self, score):
        """根据评分转换为等级"""
        if score >= 4.5:
            return 'S'
        elif score >= 4.0:
            return 'A'
        elif score >= 3.0:
            return 'B'
        else:
            return 'C'

    def update_stats(self, data):
        """更新统计数据"""
        print("📊 更新统计数据...")

        # 计算本周情报数量（假设最近7天）
        weekly_intel = len([item for item in data.get('tocIntelligence', [])[:7]])

        # 计算重点情报（S级和A级）
        key_intel = len([item for item in data.get('tocIntelligence', [])
                        if item.get('rating') in ['S', 'A']])

        data['stats'] = {
            'weeklyIntel': weekly_intel,
            'keyIntel': key_intel,
            'companies': len(data.get('companyMonitor', [])),
            'trends': data.get('stats', {}).get('trends', 6)
        }

        print("  ✅ 统计数据已更新")
        return data

    def save_data(self, data):
        """保存数据到 data.js"""
        print("💾 保存数据...")

        try:
            content = f"""// 气象行业情报监测平台 - 数据文件
// 最后更新: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
// 数据来源: Web Crawler + Manual Collection

const MOCK_DATA = {json.dumps(data, ensure_ascii=False, indent=4)};
"""

            with open(self.data_file, 'w', encoding='utf-8') as f:
                f.write(content)

            print(f"  ✅ 数据已保存到: {self.data_file}")

        except Exception as e:
            print(f"  ❌ 保存失败: {e}")

    def run_full_crawl(self):
        """运行完整爬虫流程"""
        print("=" * 80)
        print("🚀 气象情报爬虫系统启动")
        print("=" * 80)
        print(f"开始时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("=" * 80)

        # 1. 加载现有数据
        existing_data = self.load_existing_data()

        if not existing_data:
            print("❌ 无法加载现有数据，退出")
            return

        # 2. 爬取新闻
        print("\n" + "=" * 80)
        print("第1步：爬取新闻")
        print("=" * 80)

        # 使用 Google News（免费，效果好）
        google_news_crawler = GoogleNewsCrawler()
        news_results = google_news_crawler.run()

        # 3. 爬取 App Store 数据
        print("\n" + "=" * 80)
        print("第2步：监测 App Store")
        print("=" * 80)
        app_crawler = AppStoreCrawler()
        app_results = app_crawler.run()

        # 4. 爬取 ToC 公司动态
        print("\n" + "=" * 80)
        print("第3步：爬取 ToC 公司动态")
        print("=" * 80)
        company_news_crawler = CompanyNewsCrawler()
        company_news_results = company_news_crawler.run()

        # 5. 爬取 ToB 招标信息
        print("\n" + "=" * 80)
        print("第4步：爬取 ToB 招标信息")
        print("=" * 80)
        tob_crawler = ToBBiddingCrawler()
        tob_results = tob_crawler.run()

        # 6. 合并数据
        print("\n" + "=" * 80)
        print("第5步：合并数据")
        print("=" * 80)
        existing_data = self.merge_news_data(existing_data, news_results)
        existing_data = self.merge_app_data(existing_data, app_results)
        existing_data = self.merge_company_news(existing_data, company_news_results)
        existing_data = self.merge_tob_data(existing_data, tob_results)
        existing_data = self.update_stats(existing_data)

        # 7. 保存数据
        print("\n" + "=" * 80)
        print("第6步：保存数据")
        print("=" * 80)
        self.save_data(existing_data)

        # 8. 生成报告
        print("\n" + "=" * 80)
        print("📊 爬取完成报告")
        print("=" * 80)
        print(f"网络新闻（爬取）: {len(news_results)} 条")
        print(f"  → 分类为公司动态: {len([n for n in news_results if self.classify_news(n) == 'company_news'])} 条")
        print(f"  → 过滤无价值新闻: {len([n for n in news_results if self.classify_news(n) == 'filtered'])} 条")
        print(f"App 更新: {len(app_results)} 个")
        print(f"公司动态（额外爬取）: {len(company_news_results)} 条")
        print(f"招标信息: {len(tob_results)} 条")
        print(f"")
        print(f"📦 数据库总量:")
        print(f"  总 App 更新: {len(existing_data.get('tocAppUpdates', []))} 条")
        print(f"  总公司动态: {len(existing_data.get('tocCompanyNews', []))} 条")
        print(f"  地铁招标: {len(existing_data.get('tobIntelligence', {}).get('metro', []))} 条")
        print(f"  航空招标: {len(existing_data.get('tobIntelligence', {}).get('aviation', []))} 条")
        print(f"  能源招标: {len(existing_data.get('tobIntelligence', {}).get('energy', []))} 条")
        print("=" * 80)
        print(f"完成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("=" * 80)

        return existing_data


def main():
    """主函数"""
    print("""
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║           气象行业情报爬虫系统 v1.0                          ║
║           Weather Intelligence Crawler System                ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
    """)

    manager = IntelligenceManager()

    print("选择运行模式:")
    print("1. 完整爬取（新闻 + App Store）")
    print("2. 仅爬取新闻")
    print("3. 仅监测 App Store")
    print("4. 测试模式（不保存数据）")

    choice = input("\n请输入选项 (1/2/3/4): ").strip()

    if choice == '1':
        manager.run_full_crawl()
    elif choice == '2':
        news_crawler = NewsCrawler()
        news_crawler.run()
    elif choice == '3':
        app_crawler = AppStoreCrawler()
        app_crawler.run()
    elif choice == '4':
        print("测试模式...")
        existing_data = manager.load_existing_data()
        if existing_data:
            print(f"当前数据统计: {existing_data.get('stats', {})}")
    else:
        print("无效选项")


if __name__ == '__main__':
    main()
