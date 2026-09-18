#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
App Store 版本监测爬虫
监测竞品 App 的版本更新和用户评论
"""

import requests
import json
import time
from datetime import datetime


class AppStoreCrawler:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }

    def get_app_info(self, app_id, country='cn'):
        """
        获取 App Store 应用信息
        app_id: App Store ID
        country: 国家代码 (cn=中国, us=美国)
        """
        print(f"🔍 正在获取 App 信息: {app_id} ({country})")

        url = f'https://itunes.apple.com/lookup?id={app_id}&country={country}'

        try:
            response = requests.get(url, headers=self.headers, timeout=10)

            if response.status_code == 200:
                data = response.json()

                if data['resultCount'] > 0:
                    app = data['results'][0]
                    print(f"  ✅ 获取成功: {app.get('trackName', 'Unknown')}")
                    return self.parse_app_info(app)
                else:
                    print(f"  ❌ 未找到该应用")
                    return None
            else:
                print(f"  ❌ 请求失败: HTTP {response.status_code}")
                return None

        except Exception as e:
            print(f"  ❌ 获取出错: {e}")
            return None

    def parse_app_info(self, app):
        """解析应用信息"""
        return {
            'name': app.get('trackName', ''),
            'bundle_id': app.get('bundleId', ''),
            'version': app.get('version', ''),
            'release_date': app.get('currentVersionReleaseDate', ''),
            'release_notes': app.get('releaseNotes', ''),
            'rating': app.get('averageUserRating', 0),
            'rating_count': app.get('userRatingCount', 0),
            'price': app.get('price', 0),
            'developer': app.get('sellerName', ''),
            'description': app.get('description', ''),
            'icon_url': app.get('artworkUrl512', ''),
            'app_store_url': app.get('trackViewUrl', ''),
            'genres': app.get('genres', []),
            'file_size': app.get('fileSizeBytes', 0),
            'content_rating': app.get('contentAdvisoryRating', '')
        }

    def get_app_reviews(self, app_id, country='cn', page=1):
        """
        获取 App Store 用户评论
        """
        print(f"💬 正在获取评论: {app_id} (页面 {page})")

        url = f'https://itunes.apple.com/{country}/rss/customerreviews/id={app_id}/sortBy=mostRecent/page={page}/json'

        try:
            response = requests.get(url, headers=self.headers, timeout=10)

            if response.status_code == 200:
                data = response.json()

                if 'feed' in data and 'entry' in data['feed']:
                    reviews = []
                    for entry in data['feed']['entry']:
                        reviews.append({
                            'author': entry.get('author', {}).get('name', {}).get('label', ''),
                            'rating': entry.get('im:rating', {}).get('label', ''),
                            'title': entry.get('title', {}).get('label', ''),
                            'content': entry.get('content', {}).get('label', ''),
                            'version': entry.get('im:version', {}).get('label', ''),
                            'date': entry.get('updated', {}).get('label', '')
                        })

                    print(f"  ✅ 获取了 {len(reviews)} 条评论")
                    return reviews
                else:
                    print(f"  ℹ️  没有评论数据")
                    return []
            else:
                print(f"  ❌ 请求失败: HTTP {response.status_code}")
                return []

        except Exception as e:
            print(f"  ❌ 获取出错: {e}")
            return []

    def analyze_reviews(self, reviews):
        """分析评论"""
        if not reviews:
            return {
                'total': 0,
                'average_rating': 0,
                'rating_distribution': {},
                'sentiment': '无数据'
            }

        ratings = [int(r['rating']) for r in reviews if r['rating'].isdigit()]

        return {
            'total': len(reviews),
            'average_rating': sum(ratings) / len(ratings) if ratings else 0,
            'rating_distribution': {
                '5星': ratings.count(5),
                '4星': ratings.count(4),
                '3星': ratings.count(3),
                '2星': ratings.count(2),
                '1星': ratings.count(1)
            },
            'sentiment': '正面' if sum(ratings) / len(ratings) >= 4 else '中性' if sum(ratings) / len(ratings) >= 3 else '负面'
        }

    def get_google_play_info(self, package_name):
        """
        获取 Google Play 应用信息
        注意：需要使用第三方 API 或爬虫
        """
        print(f"🔍 正在获取 Google Play 信息: {package_name}")

        # 这里可以使用 google-play-scraper 库
        # pip install google-play-scraper

        try:
            from google_play_scraper import app

            result = app(
                package_name,
                lang='zh',
                country='cn'
            )

            print(f"  ✅ 获取成功: {result.get('title', 'Unknown')}")

            return {
                'name': result.get('title', ''),
                'package_name': package_name,
                'version': result.get('version', ''),
                'updated': result.get('updated', ''),
                'rating': result.get('score', 0),
                'rating_count': result.get('ratings', 0),
                'installs': result.get('installs', ''),
                'developer': result.get('developer', ''),
                'description': result.get('description', ''),
                'icon_url': result.get('icon', ''),
                'recent_changes': result.get('recentChanges', '')
            }

        except ImportError:
            print("  ⚠️  需要安装 google-play-scraper: pip install google-play-scraper")
            return None
        except Exception as e:
            print(f"  ❌ 获取出错: {e}")
            return None

    def compare_versions(self, old_version, new_version):
        """比较版本号"""
        try:
            old_parts = [int(x) for x in old_version.split('.')]
            new_parts = [int(x) for x in new_version.split('.')]

            if new_parts > old_parts:
                return 'updated'
            elif new_parts == old_parts:
                return 'same'
            else:
                return 'downgraded'
        except:
            return 'unknown'

    def save_results(self, results, filename='app_store_results.json'):
        """保存结果"""
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(results, f, ensure_ascii=False, indent=2)
        print(f"\n💾 结果已保存到: {filename}")

    def run(self):
        """运行监测"""
        print("=" * 60)
        print("🚀 App Store 版本监测爬虫启动")
        print("=" * 60)

        # 气象类 App 的 App Store ID
        apps = [
            {'name': '墨迹天气', 'id': '425038398', 'country': 'cn'},
            {'name': '彩云天气', 'id': '847764912', 'country': 'cn'},
            {'name': 'AccuWeather', 'id': '388966650', 'country': 'us'},
            {'name': 'The Weather Channel', 'id': '295646461', 'country': 'us'},
            {'name': 'Weather Underground', 'id': '486154808', 'country': 'us'}
        ]

        results = []

        for app in apps:
            print(f"\n{'='*60}")
            print(f"处理: {app['name']}")
            print(f"{'='*60}")

            # 获取应用信息
            app_info = self.get_app_info(app['id'], app['country'])

            if app_info:
                # 获取评论
                reviews = self.get_app_reviews(app['id'], app['country'], page=1)

                # 分析评论
                review_analysis = self.analyze_reviews(reviews)

                results.append({
                    'app_name': app['name'],
                    'app_info': app_info,
                    'reviews': reviews[:10],  # 只保存前10条评论
                    'review_analysis': review_analysis,
                    'crawled_at': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                })

            time.sleep(2)  # 避免请求过快

        # 保存结果
        self.save_results(results)

        print("\n" + "=" * 60)
        print(f"✅ 监测完成！共监测 {len(results)} 个应用")
        print("=" * 60)

        return results


if __name__ == '__main__':
    crawler = AppStoreCrawler()
    results = crawler.run()

    # 打印结果摘要
    print("\n📊 结果摘要：")
    for item in results:
        info = item['app_info']
        analysis = item['review_analysis']
        print(f"\n{item['app_name']}:")
        print(f"  版本: {info['version']}")
        print(f"  更新日期: {info['release_date'][:10]}")
        print(f"  评分: {info['rating']:.1f} ({info['rating_count']} 评价)")
        print(f"  最近评论情感: {analysis['sentiment']}")
