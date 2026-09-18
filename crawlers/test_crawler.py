#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
爬虫测试脚本
快速测试爬虫是否能正常工作
"""

import sys


def test_imports():
    """测试依赖是否安装"""
    print("=" * 60)
    print("测试 Python 依赖...")
    print("=" * 60)

    dependencies = {
        'requests': 'HTTP 请求库',
        'bs4': 'HTML 解析库 (BeautifulSoup)',
    }

    all_installed = True

    for module, description in dependencies.items():
        try:
            __import__(module)
            print(f"✅ {module:20s} - {description}")
        except ImportError:
            print(f"❌ {module:20s} - {description} (未安装)")
            all_installed = False

    print("\n" + "=" * 60)

    if all_installed:
        print("✅ 所有依赖已安装！")
    else:
        print("❌ 部分依赖未安装")
        print("\n请运行以下命令安装：")
        print("pip3 install -r requirements.txt")

    return all_installed


def test_app_store_api():
    """测试 App Store API"""
    print("\n" + "=" * 60)
    print("测试 App Store API...")
    print("=" * 60)

    try:
        import requests

        # 测试获取墨迹天气的信息
        url = 'https://itunes.apple.com/lookup?id=425038398&country=cn'
        response = requests.get(url, timeout=10)

        if response.status_code == 200:
            data = response.json()
            if data['resultCount'] > 0:
                app = data['results'][0]
                print(f"✅ App Store API 正常")
                print(f"   应用名称: {app['trackName']}")
                print(f"   当前版本: {app['version']}")
                print(f"   评分: {app.get('averageUserRating', 0)}")
                return True
            else:
                print("⚠️  未找到应用")
                return False
        else:
            print(f"❌ API 请求失败: HTTP {response.status_code}")
            return False

    except Exception as e:
        print(f"❌ 测试失败: {e}")
        return False


def test_web_access():
    """测试网站访问"""
    print("\n" + "=" * 60)
    print("测试网站访问...")
    print("=" * 60)

    sites = {
        'TechCrunch': 'https://techcrunch.com',
        'SEC EDGAR': 'https://data.sec.gov',
    }

    results = {}

    try:
        import requests

        for name, url in sites.items():
            try:
                response = requests.get(url, timeout=10)
                if response.status_code == 200:
                    print(f"✅ {name:20s} - 可访问")
                    results[name] = True
                else:
                    print(f"⚠️  {name:20s} - HTTP {response.status_code}")
                    results[name] = False
            except Exception as e:
                print(f"❌ {name:20s} - 无法访问 ({e})")
                results[name] = False

    except ImportError:
        print("❌ requests 库未安装")
        return False

    return all(results.values())


def main():
    """主函数"""
    print("""
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║              气象情报爬虫 - 测试脚本                          ║
║              Weather Crawler - Test Script                   ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
    """)

    # 测试依赖
    deps_ok = test_imports()

    if not deps_ok:
        print("\n请先安装依赖后再运行爬虫")
        sys.exit(1)

    # 测试 API
    api_ok = test_app_store_api()

    # 测试网站访问
    web_ok = test_web_access()

    # 总结
    print("\n" + "=" * 60)
    print("测试总结")
    print("=" * 60)
    print(f"依赖安装: {'✅ 通过' if deps_ok else '❌ 失败'}")
    print(f"API 访问: {'✅ 通过' if api_ok else '❌ 失败'}")
    print(f"网站访问: {'✅ 通过' if web_ok else '❌ 失败'}")
    print("=" * 60)

    if deps_ok and api_ok and web_ok:
        print("\n🎉 所有测试通过！可以运行爬虫了")
        print("\n运行命令:")
        print("  python3 run_crawler.py")
    else:
        print("\n⚠️  部分测试失败，请检查上述错误")


if __name__ == '__main__':
    main()
