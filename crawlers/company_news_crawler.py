#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ToC 公司动态爬虫
爬取气象公司的融资、收购、战略调整等重大动态
数据源：IT桔子、投资界、公司官网、科技媒体
"""

import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime
import time
import re


class CompanyNewsCrawler:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
        self.companies = [
            '墨迹天气', '彩云天气', 'AccuWeather', 'Weather Channel',
            'Windy', 'Weathernews', 'Weather Underground'
        ]

    def crawl_itjuzi_events(self):
        """
        爬取 IT桔子 的投融资事件
        注意：IT桔子有反爬机制，这里提供基本框架
        """
        print("🔍 爬取 IT桔子 投融资信息...")

        # IT桔子需要登录，这里改用搜索引擎作为入口
        results = []

        for company in ['墨迹天气', '彩云天气']:
            # 通过 Google News 搜索投融资相关新闻
            query = f'{company} 融资 OR 收购 OR 战略'

            try:
                # 使用 Google News RSS
                from google_news_crawler import GoogleNewsCrawler
                google_crawler = GoogleNewsCrawler()
                news_items = google_crawler.search_news(query, language='zh-CN', days=90)

                for item in news_items[:5]:
                    # 判断是否是公司动态新闻
                    keywords = ['融资', '收购', '战略', '合作', '上市', 'IPO', '投资']
                    title_lower = item.get('title', '').lower()

                    if any(keyword in item.get('title', '') for keyword in keywords):
                        result = {
                            'company': company,
                            'title': item.get('title', ''),
                            'url': item.get('link', ''),
                            'date': google_crawler.parse_date(item.get('pubDate', '')),
                            'source': item.get('source', ''),
                            'type': self.classify_news_type(item.get('title', '')),
                            'summary': item.get('description', '')[:300]
                        }
                        results.append(result)

                time.sleep(2)

            except Exception as e:
                print(f"  ⚠️  处理 {company} 时出错: {e}")

        print(f"  ✅ IT桔子爬取完成，获得 {len(results)} 条")
        return results

    def classify_news_type(self, title):
        """分类新闻类型"""
        if any(word in title for word in ['融资', '投资', 'IPO', '上市']):
            return '融资'
        elif any(word in title for word in ['收购', '并购', '兼并']):
            return '收购'
        elif any(word in title for word in ['战略', '转型', '调整']):
            return '战略'
        elif any(word in title for word in ['合作', '联合', '签约']):
            return '合作'
        elif any(word in title for word in ['发布', '推出', '上线']):
            return '产品'
        else:
            return '其他'

    def crawl_company_official_news(self):
        """
        爬取公司官网新闻
        """
        print("🔍 爬取公司官网新闻...")

        results = []

        # 彩云天气官网示例
        company_sites = {
            '彩云天气': 'https://caiyunapp.com',
            # 墨迹天气官网较难爬取，暂时跳过
        }

        for company, url in company_sites.items():
            try:
                print(f"  处理: {company}")
                # 这里需要根据实际网站结构调整
                # 暂时通过 Google News 获取
                pass
            except Exception as e:
                print(f"  ⚠️  {company} 爬取失败: {e}")

        print(f"  ✅ 官网新闻爬取完成，获得 {len(results)} 条")
        return results

    def crawl_tech_media_reports(self):
        """
        爬取科技媒体的公司报道
        通过 Google News 搜索各大科技媒体
        """
        print("🔍 爬取科技媒体报道...")

        from google_news_crawler import GoogleNewsCrawler
        google_crawler = GoogleNewsCrawler()

        results = []

        # 为每个公司搜索科技媒体报道
        for company in self.companies:
            try:
                # 中文公司搜索中文媒体
                if any(c >= '一' and c <= '鿿' for c in company):
                    query = f'{company} (36氪 OR 虎嗅 OR 钛媒体 OR 创业邦)'
                    news_items = google_crawler.search_news(query, language='zh-CN', days=30)
                else:
                    # 英文公司搜索英文媒体
                    query = f'{company} (TechCrunch OR VentureBeat OR TheVerge)'
                    news_items = google_crawler.search_news(query, language='en', days=30)

                for item in news_items[:5]:
                    result = {
                        'company': company,
                        'title': item.get('title', ''),
                        'url': item.get('link', ''),
                        'date': google_crawler.parse_date(item.get('pubDate', '')),
                        'source': item.get('source', ''),
                        'type': self.classify_news_type(item.get('title', '')),
                        'summary': item.get('description', '')[:300]
                    }
                    results.append(result)

                time.sleep(2)

            except Exception as e:
                print(f"  ⚠️  处理 {company} 时出错: {e}")

        print(f"  ✅ 科技媒体爬取完成，获得 {len(results)} 条")
        return results

    def analyze_importance(self, news):
        """分析新闻重要性"""
        title = news.get('title', '').lower()
        summary = news.get('summary', '').lower()
        text = title + ' ' + summary

        # S级：重大事件
        if any(word in text for word in ['ipo', '上市', '亿', 'billion', 'acquisition', '收购']):
            return 'S'
        # A级：重要事件
        elif any(word in text for word in ['融资', 'funding', '战略', 'strategic', '合作', 'partnership']):
            return 'A'
        # B级：一般事件
        else:
            return 'B'

    def generate_insight(self, news):
        """生成对墨迹天气的影响分析"""
        company = news.get('company', '')
        news_type = news.get('type', '')
        title = news.get('title', '')

        insights = {
            '融资': f"{company}获得融资显示资本市场对气象服务赛道的信心，墨迹需要评估自身融资计划和估值水平。",
            '收购': f"{company}通过收购扩大业务范围，墨迹需要关注行业整合趋势，评估潜在的并购机会。",
            '战略': f"{company}的战略调整反映行业发展方向，墨迹应分析其背后逻辑，评估是否需要跟进。",
            '合作': f"{company}与头部企业合作增强竞争力，墨迹可寻找类似的战略合作机会。",
            '产品': f"{company}推出新产品功能，墨迹需要评估该功能对用户的价值，考虑是否跟进开发。",
            '其他': f"持续关注{company}的动态，评估对市场格局的潜在影响。"
        }

        return insights.get(news_type, insights['其他'])

    def run(self):
        """运行爬虫"""
        print("=" * 60)
        print("🚀 ToC 公司动态爬虫启动")
        print("=" * 60)

        all_results = []

        # 1. 爬取投融资信息
        funding_news = self.crawl_itjuzi_events()
        all_results.extend(funding_news)

        # 2. 爬取官网新闻
        # official_news = self.crawl_company_official_news()
        # all_results.extend(official_news)

        # 3. 爬取科技媒体报道
        media_reports = self.crawl_tech_media_reports()
        all_results.extend(media_reports)

        # 去重
        unique_results = []
        seen_urls = set()

        # 计算30天前的日期
        from datetime import datetime, timedelta
        thirty_days_ago = (datetime.now() - timedelta(days=30)).strftime('%Y-%m-%d')

        for result in all_results:
            url = result.get('url', '')
            date = result.get('date', '')

            # 只保留最近30天的新闻
            if url and url not in seen_urls and date >= thirty_days_ago:
                # 添加分析
                result['rating'] = self.analyze_importance(result)
                result['impactOnMoji'] = self.generate_insight(result)
                result['crawled_at'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

                unique_results.append(result)
                seen_urls.add(url)

        # 按日期排序
        unique_results.sort(key=lambda x: x.get('date', ''), reverse=True)

        print("\n" + "=" * 60)
        print(f"✅ 爬取完成！共获取 {len(unique_results)} 条公司动态（最近30天）")
        print("=" * 60)

        return unique_results

    def save_results(self, results, filename='company_news_results.json'):
        """保存结果"""
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(results, f, ensure_ascii=False, indent=2)
        print(f"\n💾 结果已保存到: {filename}")


if __name__ == '__main__':
    crawler = CompanyNewsCrawler()
    results = crawler.run()
    crawler.save_results(results)

    # 打印预览
    print("\n📰 结果预览（前10条）：")
    for i, item in enumerate(results[:10], 1):
        print(f"\n{i}. [{item['company']}] {item['title']}")
        print(f"   类型: {item['type']} | 等级: {item['rating']} | 日期: {item['date']}")
        print(f"   来源: {item['source']}")
