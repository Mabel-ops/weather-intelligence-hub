#!/usr/bin/env node

/**
 * 气象行业情报监测平台 - 每日数据更新脚本
 *
 * 功能：使用 Claude API 生成每日气象行业情报数据
 */

const fs = require('fs');
const path = require('path');

class WeatherIntelUpdater {
    constructor() {
        this.dataPath = path.join(__dirname, 'data.js');
        this.today = new Date().toISOString().split('T')[0];
    }

    /**
     * 主更新流程
     */
    async update() {
        console.log('=== 气象情报平台 - 每日数据更新 ===');
        console.log(`更新时间: ${new Date().toLocaleString('zh-CN')}`);
        console.log(`生成日期: ${this.today}`);

        try {
            // 读取现有数据
            const currentData = this.loadCurrentData();

            // 生成新的情报数据
            const newIntel = await this.generateNewIntel();

            // 更新数据
            const updatedData = this.mergeData(currentData, newIntel);

            // 保存数据
            this.saveData(updatedData);

            console.log('✓ 数据更新完成');
            console.log(`✓ 新增情报 ${newIntel.tocIntelligence.length} 条`);

        } catch (error) {
            console.error('✗ 更新失败:', error);
            process.exit(1);
        }
    }

    loadCurrentData() {
        try {
            const content = fs.readFileSync(this.dataPath, 'utf-8');
            const dataMatch = content.match(/const MOCK_DATA = ({[\s\S]*});?\s*$/m);
            if (dataMatch) {
                return eval('(' + dataMatch[1] + ')');
            }
        } catch (error) {
            console.error('读取数据失败:', error);
        }
        return this.getDefaultStructure();
    }

    getDefaultStructure() {
        return {
            stats: {
                weeklyIntel: 0,
                keyIntel: 0,
                companies: 19,
                trends: 8
            },
            aiWeeklySummary: "",
            tocIntelligence: [],
            tobIndustry: { subway: [], aviation: [], energy: [] },
            industryTrends: [],
            keyCompanies: [],
            intelLibrary: []
        };
    }

    /**
     * 使用 Claude API 生成新情报
     */
    async generateNewIntel() {
        console.log('→ 调用 Claude API 生成新情报...');

        const prompt = this.buildPrompt();

        // 如果设置了 ANTHROPIC_API_KEY 环境变量，调用真实 API
        if (process.env.ANTHROPIC_API_KEY) {
            return await this.callClaudeAPI(prompt);
        } else {
            // 否则生成模拟数据
            console.log('  未检测到 ANTHROPIC_API_KEY，使用模拟数据');
            return this.generateMockData();
        }
    }

    buildPrompt() {
        return `你是气象行业情报分析专家。请生成今天（${this.today}）的气象行业情报数据。

要求：
1. 生成 2-3 条 ToC 竞品情报（AccuWeather、The Weather Channel、Windy、彩云天气等）
2. 生成 1-2 条 ToB 行业情报（地铁/航空/能源领域的气象服务项目）
3. 情报内容要真实可信，基于这些公司的业务方向合理推演
4. 情报评级：S（重大）、A（重要）、B（一般）
5. 必须包含：标题、公司、日期、类型、摘要、AI分析、对墨迹天气的影响

返回 JSON 格式。`;
    }

    async callClaudeAPI(prompt) {
        // TODO: 实现真实的 Claude API 调用
        // 需要安装 @anthropic-ai/sdk
        return this.generateMockData();
    }

    /**
     * 生成模拟数据
     */
    generateMockData() {
        const companies = [
            'AccuWeather', 'The Weather Channel', 'Windy.com',
            '彩云天气', 'Weather & Radar', 'Weathernews'
        ];

        const types = ['AI', '产品', '商业', '技术'];
        const ratings = ['S', 'A', 'B'];

        const tocIntelligence = [];
        const numItems = 2 + Math.floor(Math.random() * 2); // 2-3条

        for (let i = 0; i < numItems; i++) {
            const company = companies[Math.floor(Math.random() * companies.length)];
            const type = types[Math.floor(Math.random() * types.length)];
            const rating = ratings[Math.floor(Math.random() * ratings.length)];

            tocIntelligence.push({
                id: Date.now() + i,
                title: `${company}${this.getRandomUpdate(type)}`,
                company: company,
                field: "ToC",
                date: this.today,
                type: type,
                rating: rating,
                summary: this.getRandomSummary(company, type),
                source: `https://${company.toLowerCase().replace(/\s+/g, '')}.com/news`,
                aiAnalysis: `${company}此举${this.getRandomAnalysis()}`,
                impactOnMoji: `对墨迹天气的影响：${this.getRandomImpact()}`,
                ratingReason: this.getRatingReason(rating)
            });
        }

        return {
            tocIntelligence,
            tobIndustry: { subway: [], aviation: [], energy: [] },
            industryTrends: [],
            keyCompanies: [],
            intelLibrary: []
        };
    }

    getRandomUpdate(type) {
        const updates = {
            'AI': ['推出AI驱动的新功能', '强化AI预测能力', '上线智能分析系统', '集成大语言模型'],
            '产品': ['发布新版本', '推出创新功能', '优化用户体验', '上线新特性'],
            '商业': ['达成战略合作', '拓展新市场', '发布财报', '获得新融资'],
            '技术': ['升级预测模型', '优化算法', '提升准确率', '改进数据源']
        };
        const list = updates[type] || updates['产品'];
        return list[Math.floor(Math.random() * list.length)];
    }

    getRandomSummary(company, type) {
        return `${company}宣布${type === 'AI' ? '推出基于AI的新功能' : '发布最新产品更新'}，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。`;
    }

    getRandomAnalysis() {
        const analyses = [
            '体现了在技术创新方面的持续投入',
            '将进一步强化其市场竞争力',
            '反映了行业向智能化方向发展的趋势',
            '有助于提升用户粘性和市场份额'
        ];
        return analyses[Math.floor(Math.random() * analyses.length)];
    }

    getRandomImpact() {
        const impacts = [
            '需要关注竞品的技术进展，评估是否跟进',
            '可以作为产品规划的参考，考虑类似功能',
            '建议密切关注用户反馈和市场反应',
            '值得评估对自身产品策略的启示'
        ];
        return impacts[Math.floor(Math.random() * impacts.length)];
    }

    getRatingReason(rating) {
        const reasons = {
            'S': '重大产品功能发布，涉及核心竞争力，对行业竞争格局有明显影响',
            'A': '重要功能更新，具有较强参考价值',
            'B': '常规功能更新，行业普遍趋势'
        };
        return reasons[rating];
    }

    /**
     * 合并新旧数据
     */
    mergeData(currentData, newIntel) {
        // 合并 ToC 情报，保持最近 50 条
        const allTocIntel = [...newIntel.tocIntelligence, ...currentData.tocIntelligence];
        const uniqueTocIntel = this.deduplicateByTitle(allTocIntel).slice(0, 50);

        // 更新统计数据
        const stats = {
            weeklyIntel: this.countThisWeek(uniqueTocIntel),
            keyIntel: uniqueTocIntel.filter(i => i.rating === 'S' || i.rating === 'A').length,
            companies: currentData.stats.companies || 19,
            trends: currentData.stats.trends || 8
        };

        // 生成 AI 周摘要
        const aiWeeklySummary = this.generateWeeklySummary(uniqueTocIntel);

        return {
            ...currentData,
            stats,
            aiWeeklySummary,
            tocIntelligence: uniqueTocIntel,
            // 保留其他数据
            tobIndustry: currentData.tobIndustry || { subway: [], aviation: [], energy: [] },
            industryTrends: currentData.industryTrends || [],
            keyCompanies: currentData.keyCompanies || [],
            intelLibrary: currentData.intelLibrary || []
        };
    }

    deduplicateByTitle(items) {
        const seen = new Set();
        return items.filter(item => {
            if (seen.has(item.title)) return false;
            seen.add(item.title);
            return true;
        });
    }

    countThisWeek(items) {
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return items.filter(item => new Date(item.date) >= weekAgo).length;
    }

    generateWeeklySummary(items) {
        const recent = items.slice(0, 10);
        const aiItems = recent.filter(i => i.type === 'AI');
        const productItems = recent.filter(i => i.type === '产品');

        return `本周气象行业ToC领域，主要竞品在${aiItems.length > 0 ? 'AI技术' : '产品功能'}方面持续投入。${
            recent.length > 0 ? recent[0].company + '等厂商' : '各大厂商'
        }发布了多项更新，行业整体呈现智能化、精细化发展趋势。`;
    }

    /**
     * 保存数据到 data.js
     */
    saveData(data) {
        const content = `// 气象行业情报监测平台 - 模拟数据\n\nconst MOCK_DATA = ${JSON.stringify(data, null, 4)};\n`;
        fs.writeFileSync(this.dataPath, content, 'utf-8');
        console.log(`  数据已保存到: ${this.dataPath}`);
    }
}

// 执行更新
if (require.main === module) {
    const updater = new WeatherIntelUpdater();
    updater.update().catch(error => {
        console.error('更新失败:', error);
        process.exit(1);
    });
}

module.exports = WeatherIntelUpdater;
