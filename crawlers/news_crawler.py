#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
气象行业新闻爬虫
抓取 36氪、TechCrunch 等科技媒体的气象相关新闻
"""

import requests
from bs4 import BeautifulSoup
import json
import time
from datetime import datetime
import re


class NewsCrawler:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
        self.keywords = [
            '墨迹天气', '彩云天气', '天气通', '看天',
            'AccuWeather', 'Weather Channel', 'Windy',
            '气象', '天气预报', '天气应用', '气象服务'
        ]

    def crawl_36kr(self):
        """爬取36氪的气象相关新闻"""
        print("🔍 正在爬取 36氪...")
        results = []

        try:
            # 搜索页面
            for keyword in ['墨迹天气', '彩云天气', '气象']:
                url = f'https://www.36kr.com/search/articles/{keyword}'
                response = requests.get(url, headers=self.headers, timeout=10)

                if response.status_code == 200:
                    soup = BeautifulSoup(response.text, 'html.parser')

                    # 解析文章列表
                    articles = soup.find_all('div', class_='article-item')

                    for article in articles[:5]:  # 取前5条
                        try:
                            title_elem = article.find('a', class_='article-item-title')
                            if title_elem:
                                title = title_elem.text.strip()
                                link = 'https://www.36kr.com' + title_elem.get('href', '')

                                # 提取日期
                                date_elem = article.find('span', class_='article-item-date')
                                date = date_elem.text.strip() if date_elem else datetime.now().strftime('%Y-%m-%d')

                                # 提取摘要
                                summary_elem = article.find('div', class_='article-item-description')
                                summary = summary_elem.text.strip() if summary_elem else ''

                                results.append({
                                    'title': title,
                                    'source': '36氪',
                                    'url': link,
                                    'date': date,
                                    'summary': summary,
                                    'keyword': keyword
                                })
                        except Exception as e:
                            print(f"  ⚠️  解析文章失败: {e}")
                            continue

                time.sleep(2)  # 避免请求过快

        except Exception as e:
            print(f"  ❌ 36氪爬取失败: {e}")

        print(f"  ✅ 36氪爬取完成，获得 {len(results)} 条新闻")
        return results

    def crawl_techcrunch(self):
        """爬取 TechCrunch 的气象相关新闻"""
        print("🔍 正在爬取 TechCrunch...")
        results = []

        try:
            keywords = ['weather', 'AccuWeather', 'Weather Channel']

            for keyword in keywords:
                url = f'https://techcrunch.com/?s={keyword}'
                response = requests.get(url, headers=self.headers, timeout=10)

                if response.status_code == 200:
                    soup = BeautifulSoup(response.text, 'html.parser')

                    # 解析文章列表
                    articles = soup.find_all('article', class_='post-block')

                    for article in articles[:5]:
                        try:
                            title_elem = article.find('h2')
                            if title_elem:
                                title = title_elem.text.strip()
                                link_elem = title_elem.find('a')
                                link = link_elem.get('href', '') if link_elem else ''

                                # 提取日期
                                date_elem = article.find('time')
                                date = date_elem.get('datetime', '')[:10] if date_elem else datetime.now().strftime('%Y-%m-%d')

                                # 提取摘要
                                summary_elem = article.find('div', class_='post-block__content')
                                summary = summary_elem.text.strip() if summary_elem else ''

                                results.append({
                                    'title': title,
                                    'source': 'TechCrunch',
                                    'url': link,
                                    'date': date,
                                    'summary': summary[:200],
                                    'keyword': keyword
                                })
                        except Exception as e:
                            print(f"  ⚠️  解析文章失败: {e}")
                            continue

                time.sleep(2)

        except Exception as e:
            print(f"  ❌ TechCrunch爬取失败: {e}")

        print(f"  ✅ TechCrunch爬取完成，获得 {len(results)} 条新闻")
        return results

    def crawl_zhihu(self):
        """爬取知乎的气象相关讨论"""
        print("🔍 正在爬取知乎...")
        results = []

        try:
            for keyword in ['墨迹天气', '彩云天气', '天气预报']:
                url = f'https://www.zhihu.com/search?type=content&q={keyword}'
                response = requests.get(url, headers=self.headers, timeout=10)

                if response.status_code == 200:
                    # 知乎返回的是 JSON 数据
                    # 这里需要解析 JSON
                    # 注意：知乎有反爬机制，可能需要登录
                    pass

                time.sleep(2)

        except Exception as e:
            print(f"  ❌ 知乎爬取失败: {e}")

        print(f"  ✅ 知乎爬取完成，获得 {len(results)} 条讨论")
        return results

    def extract_company_from_title(self, title):
        """从标题中提取公司名"""
        companies = {
            '墨迹天气': 'Moji',
            '彩云天气': 'ColorfulClouds',
            '天气通': 'Weather Link',
            '看天': 'KanTian',
            'AccuWeather': 'AccuWeather',
            'Weather Channel': 'The Weather Channel',
            'Windy': 'Windy.com',
            'Weathernews': 'Weathernews'
        }

        for cn_name, en_name in companies.items():
            if cn_name in title or en_name in title:
                return cn_name

        return '行业动态'

    def analyze_sentiment(self, text):
        """简单的情感分析"""
        positive_words = ['成功', '增长', '领先', '突破', '创新', '合作', '融资', '上市']
        negative_words = ['失败', '下降', '落后', '问题', '危机', '裁员', '亏损']

        pos_count = sum(1 for word in positive_words if word in text)
        neg_count = sum(1 for word in negative_words if word in text)

        if pos_count > neg_count:
            return '正面'
        elif neg_count > pos_count:
            return '负面'
        else:
            return '中性'

    def save_results(self, results, filename='news_results.json'):
        """保存爬取结果"""
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(results, f, ensure_ascii=False, indent=2)
        print(f"\n💾 结果已保存到: {filename}")

    def run(self):
        """运行爬虫"""
        print("=" * 60)
        print("🚀 气象行业新闻爬虫启动")
        print("=" * 60)

        all_results = []

        # 爬取各个网站
        all_results.extend(self.crawl_36kr())
        all_results.extend(self.crawl_techcrunch())
        # all_results.extend(self.crawl_zhihu())  # 知乎需要登录，暂时禁用

        # 数据处理
        for item in all_results:
            item['company'] = self.extract_company_from_title(item['title'])
            item['sentiment'] = self.analyze_sentiment(item['title'] + item['summary'])
            item['crawled_at'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

        # 保存结果
        self.save_results(all_results)

        print("\n" + "=" * 60)
        print(f"✅ 爬虫完成！共获取 {len(all_results)} 条新闻")
        print("=" * 60)

        return all_results


if __name__ == '__main__':
    crawler = NewsCrawler()
    results = crawler.run()

    # 打印前5条结果预览
    print("\n📰 结果预览（前5条）：")
    for i, item in enumerate(results[:5], 1):
        print(f"\n{i}. {item['title']}")
        print(f"   来源: {item['source']} | 日期: {item['date']} | 情感: {item['sentiment']}")
        print(f"   链接: {item['url']}")
