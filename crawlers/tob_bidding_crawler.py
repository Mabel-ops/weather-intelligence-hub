#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ToB 招标信息爬虫
爬取地铁、航空、能源行业的气象服务招标信息
数据源：中国政府采购网、公共资源交易中心、行业网站
"""

import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime, timedelta
import time
import re


class ToBBiddingCrawler:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }

    def crawl_gov_procurement(self, keyword, industry):
        """
        爬取中国政府采购网
        网址：http://www.ccgp.gov.cn/
        注意：有反爬机制
        """
        print(f"🔍 搜索 {industry} 行业招标: {keyword}")

        # 通过 Google News 搜索招标公告
        from google_news_crawler import GoogleNewsCrawler
        google_crawler = GoogleNewsCrawler()

        results = []

        try:
            # 搜索招标相关新闻
            query = f'{keyword} (招标 OR 采购 OR 中标)'
            news_items = google_crawler.search_news(query, language='zh-CN', days=30)

            for item in news_items[:10]:
                title = item.get('title', '')

                # 过滤出真正的招标信息
                if any(word in title for word in ['招标', '采购', '中标', '公告']):
                    result = {
                        'industry': industry,
                        'title': title,
                        'url': item.get('link', ''),
                        'date': google_crawler.parse_date(item.get('pubDate', '')),
                        'source': item.get('source', ''),
                        'type': self.classify_bidding_type(title),
                        'summary': item.get('description', '')[:300]
                    }
                    results.append(result)

        except Exception as e:
            print(f"  ⚠️  搜索失败: {e}")

        print(f"  ✅ 找到 {len(results)} 条招标信息")
        return results

    def classify_bidding_type(self, title):
        """分类招标类型"""
        if '中标' in title or '成交' in title:
            return '中标公告'
        elif '招标' in title:
            return '招标公告'
        elif '采购' in title:
            return '采购公告'
        else:
            return '其他公告'

    def crawl_metro_bidding(self):
        """爬取地铁行业招标"""
        print("\n📍 爬取地铁行业招标信息...")

        keywords = [
            '地铁 气象',
            '轨道交通 气象服务',
            '地铁 天气预报',
            '城市轨道 气象监测'
        ]

        all_results = []

        for keyword in keywords:
            results = self.crawl_gov_procurement(keyword, '地铁')
            all_results.extend(results)
            time.sleep(2)

        print(f"  ✅ 地铁行业共获取 {len(all_results)} 条")
        return all_results

    def crawl_aviation_bidding(self):
        """爬取航空行业招标"""
        print("\n✈️  爬取航空行业招标信息...")

        keywords = [
            '机场 气象',
            '航空 气象服务',
            '民航 天气预报',
            '机场 气象设备'
        ]

        all_results = []

        for keyword in keywords:
            results = self.crawl_gov_procurement(keyword, '航空')
            all_results.extend(results)
            time.sleep(2)

        print(f"  ✅ 航空行业共获取 {len(all_results)} 条")
        return all_results

    def crawl_energy_bidding(self):
        """爬取能源行业招标"""
        print("\n⚡ 爬取能源行业招标信息...")

        keywords = [
            '电力 气象',
            '风电 气象服务',
            '光伏 天气预报',
            '新能源 气象监测'
        ]

        all_results = []

        for keyword in keywords:
            results = self.crawl_gov_procurement(keyword, '能源')
            all_results.extend(results)
            time.sleep(2)

        print(f"  ✅ 能源行业共获取 {len(all_results)} 条")
        return all_results

    def extract_amount(self, text):
        """提取金额"""
        # 匹配金额模式：xxx万元、xxx亿元
        patterns = [
            r'(\d+\.?\d*)\s*万元',
            r'(\d+\.?\d*)\s*亿元',
            r'(\d+\.?\d*)\s*万',
        ]

        for pattern in patterns:
            match = re.search(pattern, text)
            if match:
                amount = float(match.group(1))
                if '亿' in pattern:
                    return f'{amount}亿元'
                else:
                    return f'{amount}万元'

        return '金额未公开'

    def analyze_importance(self, bidding):
        """分析重要性"""
        title = bidding.get('title', '')
        amount = self.extract_amount(title + bidding.get('summary', ''))

        # 根据金额和类型判断
        if '亿' in amount or '中标' in bidding.get('type', ''):
            return 'A'
        elif '万' in amount and float(amount.replace('万元', '')) > 100:
            return 'A'
        else:
            return 'B'

    def generate_analysis(self, bidding):
        """生成分析"""
        industry = bidding.get('industry', '')
        bid_type = bidding.get('type', '')

        analyses = {
            '地铁': {
                '招标公告': '地铁行业对气象服务的需求持续增长，建议墨迹评估参与投标的可行性。',
                '中标公告': '竞品成功中标地铁项目，墨迹需要分析其技术方案和价格策略，提升竞标能力。',
            },
            '航空': {
                '招标公告': '航空气象服务要求高，是展示技术实力的机会，建议墨迹积极跟进。',
                '中标公告': '航空行业中标案例值得深入研究，分析客户需求和竞争对手优势。',
            },
            '能源': {
                '招标公告': '新能源领域对气象预报精度要求高，墨迹可重点关注风电、光伏项目。',
                '中标公告': '能源行业中标信息反映市场需求，建议墨迹加强相关技术储备。',
            }
        }

        return analyses.get(industry, {}).get(bid_type, '持续关注该行业的招标动态，寻找商业机会。')

    def run(self):
        """运行爬虫"""
        print("=" * 60)
        print("🚀 ToB 招标信息爬虫启动")
        print("=" * 60)

        all_results = []

        # 爬取各行业
        all_results.extend(self.crawl_metro_bidding())
        all_results.extend(self.crawl_aviation_bidding())
        all_results.extend(self.crawl_energy_bidding())

        # 去重和处理
        unique_results = []
        seen_urls = set()

        # 计算30天前的日期
        from datetime import datetime, timedelta
        thirty_days_ago = (datetime.now() - timedelta(days=30)).strftime('%Y-%m-%d')

        for result in all_results:
            url = result.get('url', '')
            date = result.get('date', '')

            # 只保留最近30天的招标信息
            if url and url not in seen_urls and date >= thirty_days_ago:
                # 添加分析
                result['amount'] = self.extract_amount(result.get('title', '') + result.get('summary', ''))
                result['rating'] = self.analyze_importance(result)
                result['analysis'] = self.generate_analysis(result)
                result['crawled_at'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

                unique_results.append(result)
                seen_urls.add(url)

        # 按日期排序
        unique_results.sort(key=lambda x: x.get('date', ''), reverse=True)

        print("\n" + "=" * 60)
        print(f"✅ 爬取完成！共获取 {len(unique_results)} 条招标信息")
        print("=" * 60)

        # 按行业统计
        by_industry = {}
        for result in unique_results:
            industry = result.get('industry', '')
            by_industry[industry] = by_industry.get(industry, 0) + 1

        print("\n📊 行业分布：")
        for industry, count in by_industry.items():
            print(f"  {industry}: {count} 条")

        return unique_results

    def save_results(self, results, filename='tob_bidding_results.json'):
        """保存结果"""
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(results, f, ensure_ascii=False, indent=2)
        print(f"\n💾 结果已保存到: {filename}")


if __name__ == '__main__':
    crawler = ToBBiddingCrawler()
    results = crawler.run()
    crawler.save_results(results)

    # 打印预览
    print("\n📰 结果预览（前10条）：")
    for i, item in enumerate(results[:10], 1):
        print(f"\n{i}. [{item['industry']}] {item['title']}")
        print(f"   类型: {item['type']} | 金额: {item['amount']} | 日期: {item['date']}")
        print(f"   等级: {item['rating']}")
