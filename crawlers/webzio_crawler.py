#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Webz.io 网络情报爬虫
使用 Webz.io API 监测气象行业新闻
"""

import requests
import json
import time
from datetime import datetime, timedelta


class WebzIOCrawler:
    def __init__(self, api_token):
        self.api_token = api_token
        # Webz.io 的正确 API 端点
        self.base_url = 'https://api.webz.io/filterWebContent'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 Weather Intelligence Crawler'
        }

    def search_news(self, query, days_back=7, size=10):
        """
        搜索新闻

        参数:
            query: 搜索关键词
            days_back: 搜索最近几天的新闻
            size: 返回结果数量
        """
        print(f"🔍 搜索关键词: {query}")

        # 计算时间戳（毫秒）
        end_time = int(time.time() * 1000)
        start_time = int((time.time() - days_back * 86400) * 1000)

        params = {
            'token': self.api_token,
            'q': query,
            'ts': start_time,
            'size': size,
            'format': 'json'
        }

        try:
            response = requests.get(self.base_url, params=params, headers=self.headers, timeout=30)

            if response.status_code == 200:
                data = response.json()
                total_results = data.get('totalResults', 0)
                posts = data.get('posts', [])

                print(f"  ✅ 找到 {total_results} 条结果，返回 {len(posts)} 条")
                return posts
            else:
                print(f"  ❌ 搜索失败: HTTP {response.status_code}")
                if response.status_code == 401:
                    print("  ⚠️  API Token 无效，请检查")
                elif response.status_code == 429:
                    print("  ⚠️  请求过多，已达到免费额度限制")
                return []

        except Exception as e:
            print(f"  ❌ 搜索出错: {e}")
            return []

    def parse_post(self, post):
        """解析新闻数据"""
        try:
            return {
                'title': post.get('title', ''),
                'url': post.get('url', ''),
                'published': post.get('published', ''),
                'author': post.get('author', ''),
                'source': post.get('thread', {}).get('site', ''),
                'text': post.get('text', '')[:500],  # 只取前500字符
                'language': post.get('language', ''),
                'country': post.get('thread', {}).get('country', ''),
                'main_image': post.get('thread', {}).get('main_image', ''),
            }
        except Exception as e:
            print(f"  ⚠️  解析数据失败: {e}")
            return None

    def extract_company(self, text):
        """从文本中提取公司名"""
        companies = {
            'moji': '墨迹天气',
            'colorfulclouds': '彩云天气',
            'caiyun': '彩云天气',
            'accuweather': 'AccuWeather',
            'weather channel': 'The Weather Channel',
            'windy': 'Windy.com',
            'weathernews': 'Weathernews'
        }

        text_lower = text.lower()

        for keyword, name in companies.items():
            if keyword in text_lower:
                return name

        return '行业动态'

    def analyze_sentiment(self, text):
        """简单的情感分析"""
        positive_words = ['success', 'growth', 'innovation', 'breakthrough', 'leading',
                         'improved', 'launched', 'partnership', '成功', '增长', '创新', '领先']
        negative_words = ['failure', 'decline', 'problem', 'crisis', 'lawsuit',
                         '失败', '下降', '问题', '危机']

        text_lower = text.lower()

        pos_count = sum(1 for word in positive_words if word in text_lower)
        neg_count = sum(1 for word in negative_words if word in text_lower)

        if pos_count > neg_count:
            return '正面'
        elif neg_count > pos_count:
            return '负面'
        else:
            return '中性'

    def crawl_weather_news(self):
        """爬取气象行业新闻"""
        print("=" * 60)
        print("🚀 Webz.io 气象新闻爬虫启动")
        print("=" * 60)

        # 定义搜索关键词
        keywords = [
            'AccuWeather',
            'Weather Channel',
            'weather app',
            'weather forecast innovation',
            'meteorological services'
        ]

        all_results = []

        for keyword in keywords:
            posts = self.search_news(keyword, days_back=7, size=10)

            for post in posts:
                parsed = self.parse_post(post)

                if parsed:
                    # 转换为统一格式
                    result = {
                        'title': parsed['title'],
                        'source': parsed['source'],
                        'url': parsed['url'],
                        'date': parsed['published'][:10] if parsed['published'] else datetime.now().strftime('%Y-%m-%d'),
                        'summary': parsed['text'],
                        'company': self.extract_company(parsed['title'] + ' ' + parsed['text']),
                        'sentiment': self.analyze_sentiment(parsed['title'] + ' ' + parsed['text']),
                        'keyword': keyword,
                        'author': parsed['author'],
                        'language': parsed['language'],
                        'country': parsed['country'],
                        'crawled_at': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                    }

                    all_results.append(result)

            time.sleep(2)  # 控制请求频率

        # 去重（根据URL）
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

    def save_results(self, results, filename='webzio_results.json'):
        """保存结果"""
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(results, f, ensure_ascii=False, indent=2)
        print(f"\n💾 结果已保存到: {filename}")

    def run(self):
        """运行爬虫"""
        results = self.crawl_weather_news()
        self.save_results(results)

        # 打印前5条预览
        print("\n📰 结果预览（前5条）：")
        for i, item in enumerate(results[:5], 1):
            print(f"\n{i}. {item['title']}")
            print(f"   来源: {item['source']} | 日期: {item['date']} | 情感: {item['sentiment']}")
            print(f"   公司: {item['company']}")
            print(f"   链接: {item['url'][:80]}...")

        return results


if __name__ == '__main__':
    # 你的 Webz.io API Token
    API_TOKEN = '2ac93334-1e4b-4be5-8fa0-2d5d2a883913'

    crawler = WebzIOCrawler(API_TOKEN)
    results = crawler.run()

    print("\n" + "=" * 60)
    print("🎉 完成！")
    print("=" * 60)
    print(f"获取了 {len(results)} 条新闻")
    print("数据已保存到 webzio_results.json")
    print("\n下一步：运行 python3 run_crawler.py 将数据合并到网站")
