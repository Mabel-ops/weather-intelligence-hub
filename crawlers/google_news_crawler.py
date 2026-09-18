#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Google News RSS 爬虫
通过 Google News RSS 订阅自动获取气象行业新闻
完全免费，无需 API Key
"""

import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime
import time
from urllib.parse import quote


class GoogleNewsCrawler:
    def __init__(self):
        self.base_url = 'https://news.google.com/rss/search'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }

    def search_news(self, keyword, language='en', days=7):
        """
        搜索 Google News

        参数:
            keyword: 搜索关键词
            language: 语言（en=英文, zh-CN=中文）
            days: 最近几天
        """
        print(f"🔍 搜索: {keyword} ({language})")

        # 构建搜索 URL
        params = {
            'q': keyword,
            'hl': language,
            'gl': 'US' if language == 'en' else 'CN',
            'ceid': 'US:en' if language == 'en' else 'CN:zh-Hans'
        }

        # 构建完整 URL
        query_string = '&'.join([f"{k}={quote(str(v))}" for k, v in params.items()])
        url = f"{self.base_url}?{query_string}"

        try:
            response = requests.get(url, headers=self.headers, timeout=15)

            if response.status_code == 200:
                # 解析 RSS XML
                soup = BeautifulSoup(response.content, 'xml')
                items = soup.find_all('item')

                print(f"  ✅ 找到 {len(items)} 条新闻")

                results = []
                for item in items[:10]:  # 只取前10条
                    try:
                        result = {
                            'title': item.find('title').text if item.find('title') else '',
                            'link': item.find('link').text if item.find('link') else '',
                            'pubDate': item.find('pubDate').text if item.find('pubDate') else '',
                            'source': item.find('source').text if item.find('source') else '',
                            'description': item.find('description').text if item.find('description') else ''
                        }
                        results.append(result)
                    except Exception as e:
                        print(f"    ⚠️  解析项目失败: {e}")
                        continue

                return results

            else:
                print(f"  ❌ 请求失败: HTTP {response.status_code}")
                return []

        except Exception as e:
            print(f"  ❌ 搜索出错: {e}")
            return []

    def parse_date(self, pub_date_str):
        """解析 RSS 日期格式"""
        try:
            # RSS 日期格式: "Wed, 17 Sep 2026 12:00:00 GMT"
            from email.utils import parsedate_to_datetime
            dt = parsedate_to_datetime(pub_date_str)
            return dt.strftime('%Y-%m-%d')
        except:
            return datetime.now().strftime('%Y-%m-%d')

    def extract_company(self, text):
        """从文本中提取公司名"""
        companies = {
            'moji': '墨迹天气',
            'caiyun': '彩云天气',
            'accuweather': 'AccuWeather',
            'weather channel': 'The Weather Channel',
            'windy': 'Windy.com',
            'weathernews': 'Weathernews',
            'weather underground': 'Weather Underground'
        }

        text_lower = text.lower()

        for keyword, name in companies.items():
            if keyword in text_lower:
                return name

        return '行业动态'

    def analyze_sentiment(self, text):
        """情感分析"""
        positive = ['success', 'growth', 'innovation', 'breakthrough', 'leading',
                   'launched', 'partnership', 'award', 'best', 'improved']
        negative = ['failure', 'decline', 'problem', 'crisis', 'lawsuit',
                   'controversy', 'criticized', 'warning']

        text_lower = text.lower()

        pos_count = sum(1 for word in positive if word in text_lower)
        neg_count = sum(1 for word in negative if word in text_lower)

        if pos_count > neg_count:
            return '正面'
        elif neg_count > pos_count:
            return '负面'
        else:
            return '中性'

    def crawl_weather_news(self):
        """爬取气象行业新闻"""
        print("=" * 60)
        print("🚀 Google News 气象新闻爬虫启动")
        print("=" * 60)

        # 英文关键词
        en_keywords = [
            'AccuWeather',
            'Weather Channel app',
            'weather forecast app',
            'Windy weather',
            'weather application innovation'
        ]

        # 中文关键词
        cn_keywords = [
            '墨迹天气',
            '彩云天气',
            '天气预报应用',
            '气象服务'
        ]

        all_results = []

        # 搜索英文新闻
        print("\n📰 搜索英文新闻...")
        for keyword in en_keywords:
            items = self.search_news(keyword, language='en')

            for item in items:
                result = {
                    'title': item['title'],
                    'url': item['link'],
                    'date': self.parse_date(item['pubDate']),
                    'source': item['source'],
                    'summary': item['description'][:300],
                    'company': self.extract_company(item['title'] + ' ' + item['description']),
                    'sentiment': self.analyze_sentiment(item['title'] + ' ' + item['description']),
                    'language': 'en',
                    'keyword': keyword,
                    'crawled_at': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                }
                all_results.append(result)

            time.sleep(2)  # 避免请求过快

        # 搜索中文新闻
        print("\n📰 搜索中文新闻...")
        for keyword in cn_keywords:
            items = self.search_news(keyword, language='zh-CN')

            for item in items:
                result = {
                    'title': item['title'],
                    'url': item['link'],
                    'date': self.parse_date(item['pubDate']),
                    'source': item['source'],
                    'summary': item['description'][:300],
                    'company': self.extract_company(item['title'] + ' ' + item['description']),
                    'sentiment': self.analyze_sentiment(item['title'] + ' ' + item['description']),
                    'language': 'zh',
                    'keyword': keyword,
                    'crawled_at': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                }
                all_results.append(result)

            time.sleep(2)

        # 去重
        unique_results = []
        seen_urls = set()

        for result in all_results:
            if result['url'] not in seen_urls:
                unique_results.append(result)
                seen_urls.add(result['url'])

        print("\n" + "=" * 60)
        print(f"✅ 爬取完成！共获取 {len(unique_results)} 条独特新闻")
        print("=" * 60)

        return unique_results

    def save_results(self, results, filename='google_news_results.json'):
        """保存结果"""
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(results, f, ensure_ascii=False, indent=2)
        print(f"\n💾 结果已保存到: {filename}")

    def run(self):
        """运行爬虫"""
        results = self.crawl_weather_news()
        self.save_results(results)

        # 打印预览
        print("\n📰 结果预览（前10条）：")
        for i, item in enumerate(results[:10], 1):
            print(f"\n{i}. [{item['company']}] {item['title']}")
            print(f"   来源: {item['source']} | 日期: {item['date']} | 情感: {item['sentiment']}")
            print(f"   语言: {item['language']} | 链接: {item['url'][:60]}...")

        return results


if __name__ == '__main__':
    crawler = GoogleNewsCrawler()
    results = crawler.run()

    print("\n" + "=" * 60)
    print("🎉 完成！")
    print("=" * 60)
    print(f"获取了 {len(results)} 条新闻")
    print("数据已保存到 google_news_results.json")
