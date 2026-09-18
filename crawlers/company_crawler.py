#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
企业工商信息爬虫
抓取国家企业信用信息公示系统的企业信息
"""

import requests
from bs4 import BeautifulSoup
import json
import time
from datetime import datetime
import re


class CompanyCrawler:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
        self.base_url = 'https://www.gsxt.gov.cn'

    def search_company(self, company_name):
        """搜索企业"""
        print(f"🔍 正在搜索企业: {company_name}")

        # 注意：国家企业信用信息公示系统有反爬机制
        # 需要处理验证码和 Cookie
        # 这里提供基本框架

        search_url = f'{self.base_url}/corp-query-search-1.html'

        params = {
            'searchword': company_name
        }

        try:
            response = requests.get(search_url, headers=self.headers, params=params, timeout=10)

            if response.status_code == 200:
                print(f"  ✅ 搜索成功")
                # 解析搜索结果
                # 由于网站结构复杂，这里需要根据实际情况调整
                return self.parse_search_results(response.text)
            else:
                print(f"  ❌ 搜索失败: HTTP {response.status_code}")
                return None

        except Exception as e:
            print(f"  ❌ 搜索出错: {e}")
            return None

    def parse_search_results(self, html):
        """解析搜索结果"""
        soup = BeautifulSoup(html, 'html.parser')

        # 这里需要根据实际网页结构解析
        # 国家企业信用信息公示系统的结构可能会变化

        results = []

        # 示例解析逻辑（需要根据实际调整）
        company_items = soup.find_all('div', class_='search-item')

        for item in company_items:
            try:
                name = item.find('a', class_='search_list_item').text.strip()
                link = item.find('a', class_='search_list_item').get('href', '')

                results.append({
                    'name': name,
                    'link': link
                })
            except Exception as e:
                print(f"  ⚠️  解析项目失败: {e}")
                continue

        return results

    def get_company_detail(self, company_url):
        """获取企业详细信息"""
        print(f"📄 正在获取企业详情...")

        try:
            response = requests.get(company_url, headers=self.headers, timeout=10)

            if response.status_code == 200:
                return self.parse_company_detail(response.text)
            else:
                print(f"  ❌ 获取失败: HTTP {response.status_code}")
                return None

        except Exception as e:
            print(f"  ❌ 获取出错: {e}")
            return None

    def parse_company_detail(self, html):
        """解析企业详细信息"""
        soup = BeautifulSoup(html, 'html.parser')

        company_info = {
            'basic_info': {},
            'changes': [],
            'shareholders': []
        }

        # 解析基本信息
        # 这里需要根据实际网页结构调整
        info_table = soup.find('table', class_='detailsList')

        if info_table:
            rows = info_table.find_all('tr')
            for row in rows:
                cells = row.find_all('td')
                if len(cells) >= 2:
                    key = cells[0].text.strip()
                    value = cells[1].text.strip()
                    company_info['basic_info'][key] = value

        # 解析变更记录
        changes_table = soup.find('table', id='biangeng')
        if changes_table:
            rows = changes_table.find_all('tr')[1:]  # 跳过表头
            for row in rows:
                cells = row.find_all('td')
                if len(cells) >= 4:
                    company_info['changes'].append({
                        'date': cells[0].text.strip(),
                        'type': cells[1].text.strip(),
                        'before': cells[2].text.strip(),
                        'after': cells[3].text.strip()
                    })

        return company_info

    def crawl_tianyancha_alternative(self, company_name):
        """
        备选方案：使用天眼查等第三方API
        注意：需要申请API Key
        """
        print(f"🔍 使用天眼查API查询: {company_name}")

        # 这里需要你的天眼查 API Key
        api_key = "YOUR_TIANYANCHA_API_KEY"

        if api_key == "YOUR_TIANYANCHA_API_KEY":
            print("  ⚠️  请先配置天眼查 API Key")
            return None

        api_url = "http://open.api.tianyancha.com/services/open/search/2.0"

        headers = {
            'Authorization': api_key
        }

        params = {
            'word': company_name,
            'pageSize': 20,
            'pageNum': 1
        }

        try:
            response = requests.get(api_url, headers=headers, params=params, timeout=10)

            if response.status_code == 200:
                data = response.json()
                return data
            else:
                print(f"  ❌ API调用失败: HTTP {response.status_code}")
                return None

        except Exception as e:
            print(f"  ❌ API调用出错: {e}")
            return None

    def crawl_sec_edgar(self, company_ticker):
        """
        爬取美国SEC EDGAR数据库（免费）
        适用于美国上市公司
        """
        print(f"🔍 正在查询 SEC EDGAR: {company_ticker}")

        # SEC EDGAR API 是免费的
        api_url = f"https://data.sec.gov/submissions/CIK{company_ticker}.json"

        headers = {
            'User-Agent': 'MyCompany name@domain.com',  # SEC要求提供联系方式
            'Accept-Encoding': 'gzip, deflate'
        }

        try:
            response = requests.get(api_url, headers=headers, timeout=10)

            if response.status_code == 200:
                data = response.json()
                print(f"  ✅ SEC数据获取成功")
                return self.parse_sec_data(data)
            else:
                print(f"  ❌ SEC查询失败: HTTP {response.status_code}")
                return None

        except Exception as e:
            print(f"  ❌ SEC查询出错: {e}")
            return None

    def parse_sec_data(self, data):
        """解析SEC数据"""
        company_info = {
            'name': data.get('name', ''),
            'cik': data.get('cik', ''),
            'sic': data.get('sic', ''),
            'sicDescription': data.get('sicDescription', ''),
            'category': data.get('category', ''),
            'entityType': data.get('entityType', ''),
            'filings': []
        }

        # 获取最近的财报文件
        if 'filings' in data and 'recent' in data['filings']:
            recent = data['filings']['recent']
            for i in range(min(5, len(recent.get('accessionNumber', [])))):
                company_info['filings'].append({
                    'form': recent['form'][i],
                    'filingDate': recent['filingDate'][i],
                    'accessionNumber': recent['accessionNumber'][i]
                })

        return company_info

    def save_results(self, results, filename='company_results.json'):
        """保存结果"""
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(results, f, ensure_ascii=False, indent=2)
        print(f"\n💾 结果已保存到: {filename}")

    def run_chinese_companies(self):
        """爬取中国企业"""
        print("=" * 60)
        print("🚀 中国企业工商信息爬虫启动")
        print("=" * 60)

        companies = ['北京墨迹风云科技股份有限公司', '北京彩云科技有限公司']

        results = []

        for company_name in companies:
            print(f"\n处理: {company_name}")

            # 方案1：爬取国家企业信用信息公示系统（有反爬机制，较难）
            # result = self.search_company(company_name)

            # 方案2：使用天眼查API（需要付费）
            result = self.crawl_tianyancha_alternative(company_name)

            if result:
                results.append(result)

            time.sleep(3)  # 避免请求过快

        self.save_results(results, 'chinese_companies.json')
        return results

    def run_us_companies(self):
        """爬取美国上市公司（免费）"""
        print("=" * 60)
        print("🚀 美国上市公司信息爬虫启动")
        print("=" * 60)

        # AccuWeather 不是上市公司，这里用示例
        # IBM (The Weather Channel的母公司) 的CIK
        companies = {
            'IBM': '0000051143'
        }

        results = []

        for name, cik in companies.items():
            print(f"\n处理: {name} (CIK: {cik})")
            result = self.crawl_sec_edgar(cik)

            if result:
                results.append(result)

            time.sleep(2)

        self.save_results(results, 'us_companies.json')
        return results


if __name__ == '__main__':
    crawler = CompanyCrawler()

    print("\n选择爬取模式:")
    print("1. 中国企业（需要天眼查API或手动处理反爬）")
    print("2. 美国上市公司（免费，使用SEC EDGAR）")
    print("3. 两者都爬")

    choice = input("\n请输入选项 (1/2/3): ").strip()

    if choice == '1':
        crawler.run_chinese_companies()
    elif choice == '2':
        crawler.run_us_companies()
    elif choice == '3':
        crawler.run_chinese_companies()
        crawler.run_us_companies()
    else:
        print("无效选项")
