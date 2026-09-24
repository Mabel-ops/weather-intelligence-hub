// 气象行业情报监测平台 - 模拟数据

const MOCK_DATA = {
    "stats": {
        "weeklyIntel": 15,
        "keyIntel": 21,
        "companies": 10,
        "trends": 8
    },
    "aiWeeklySummary": "本周气象行业ToC领域，主要竞品在AI技术方面持续投入。Windy.com等厂商发布了多项更新，行业整体呈现智能化、精细化发展趋势。",
    "tocIntelligence": [
        {
            "id": 1790211707003,
            "title": "Windy.com升级预测模型",
            "company": "Windy.com",
            "field": "ToC",
            "date": "2026-09-24",
            "type": "技术",
            "rating": "B",
            "summary": "Windy.com宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://windy.com.com/news",
            "aiAnalysis": "Windy.com此举将进一步强化其市场竞争力",
            "impactOnMoji": "对墨迹天气的影响：建议密切关注用户反馈和市场反应",
            "ratingReason": "常规功能更新，行业普遍趋势"
        },
        {
            "id": 1790211707004,
            "title": "Weather & Radar推出AI驱动的新功能",
            "company": "Weather & Radar",
            "field": "ToC",
            "date": "2026-09-24",
            "type": "AI",
            "rating": "A",
            "summary": "Weather & Radar宣布推出基于AI的新功能，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://weather&radar.com/news",
            "aiAnalysis": "Weather & Radar此举有助于提升用户粘性和市场份额",
            "impactOnMoji": "对墨迹天气的影响：需要关注竞品的技术进展，评估是否跟进",
            "ratingReason": "重要功能更新，具有较强参考价值"
        },
        {
            "id": 1790211707005,
            "title": "AccuWeather拓展新市场",
            "company": "AccuWeather",
            "field": "ToC",
            "date": "2026-09-24",
            "type": "商业",
            "rating": "A",
            "summary": "AccuWeather宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://accuweather.com/news",
            "aiAnalysis": "AccuWeather此举体现了在技术创新方面的持续投入",
            "impactOnMoji": "对墨迹天气的影响：可以作为产品规划的参考，考虑类似功能",
            "ratingReason": "重要功能更新，具有较强参考价值"
        },
        {
            "id": 1790125314922,
            "title": "Windy.com发布财报",
            "company": "Windy.com",
            "field": "ToC",
            "date": "2026-09-23",
            "type": "商业",
            "rating": "A",
            "summary": "Windy.com宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://windy.com.com/news",
            "aiAnalysis": "Windy.com此举体现了在技术创新方面的持续投入",
            "impactOnMoji": "对墨迹天气的影响：需要关注竞品的技术进展，评估是否跟进",
            "ratingReason": "重要功能更新，具有较强参考价值"
        },
        {
            "id": 1790125314923,
            "title": "Weather & Radar改进数据源",
            "company": "Weather & Radar",
            "field": "ToC",
            "date": "2026-09-23",
            "type": "技术",
            "rating": "A",
            "summary": "Weather & Radar宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://weather&radar.com/news",
            "aiAnalysis": "Weather & Radar此举将进一步强化其市场竞争力",
            "impactOnMoji": "对墨迹天气的影响：需要关注竞品的技术进展，评估是否跟进",
            "ratingReason": "重要功能更新，具有较强参考价值"
        },
        {
            "id": 1790125314924,
            "title": "AccuWeather推出创新功能",
            "company": "AccuWeather",
            "field": "ToC",
            "date": "2026-09-23",
            "type": "产品",
            "rating": "A",
            "summary": "AccuWeather宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://accuweather.com/news",
            "aiAnalysis": "AccuWeather此举体现了在技术创新方面的持续投入",
            "impactOnMoji": "对墨迹天气的影响：建议密切关注用户反馈和市场反应",
            "ratingReason": "重要功能更新，具有较强参考价值"
        },
        {
            "id": 1790038876334,
            "title": "Weathernews优化算法",
            "company": "Weathernews",
            "field": "ToC",
            "date": "2026-09-22",
            "type": "技术",
            "rating": "S",
            "summary": "Weathernews宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://weathernews.com/news",
            "aiAnalysis": "Weathernews此举反映了行业向智能化方向发展的趋势",
            "impactOnMoji": "对墨迹天气的影响：需要关注竞品的技术进展，评估是否跟进",
            "ratingReason": "重大产品功能发布，涉及核心竞争力，对行业竞争格局有明显影响"
        },
        {
            "id": 1790038876335,
            "title": "Windy.com发布新版本",
            "company": "Windy.com",
            "field": "ToC",
            "date": "2026-09-22",
            "type": "产品",
            "rating": "A",
            "summary": "Windy.com宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://windy.com.com/news",
            "aiAnalysis": "Windy.com此举将进一步强化其市场竞争力",
            "impactOnMoji": "对墨迹天气的影响：需要关注竞品的技术进展，评估是否跟进",
            "ratingReason": "重要功能更新，具有较强参考价值"
        },
        {
            "id": 1789952512675,
            "title": "Windy.com提升准确率",
            "company": "Windy.com",
            "field": "ToC",
            "date": "2026-09-21",
            "type": "技术",
            "rating": "B",
            "summary": "Windy.com宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://windy.com.com/news",
            "aiAnalysis": "Windy.com此举有助于提升用户粘性和市场份额",
            "impactOnMoji": "对墨迹天气的影响：值得评估对自身产品策略的启示",
            "ratingReason": "常规功能更新，行业普遍趋势"
        },
        {
            "id": 1789952512676,
            "title": "The Weather Channel升级预测模型",
            "company": "The Weather Channel",
            "field": "ToC",
            "date": "2026-09-21",
            "type": "技术",
            "rating": "A",
            "summary": "The Weather Channel宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://theweatherchannel.com/news",
            "aiAnalysis": "The Weather Channel此举将进一步强化其市场竞争力",
            "impactOnMoji": "对墨迹天气的影响：可以作为产品规划的参考，考虑类似功能",
            "ratingReason": "重要功能更新，具有较强参考价值"
        },
        {
            "id": 1789866079400,
            "title": "彩云天气提升准确率",
            "company": "彩云天气",
            "field": "ToC",
            "date": "2026-09-20",
            "type": "技术",
            "rating": "S",
            "summary": "彩云天气宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://彩云天气.com/news",
            "aiAnalysis": "彩云天气此举反映了行业向智能化方向发展的趋势",
            "impactOnMoji": "对墨迹天气的影响：值得评估对自身产品策略的启示",
            "ratingReason": "重大产品功能发布，涉及核心竞争力，对行业竞争格局有明显影响"
        },
        {
            "id": 1789866079402,
            "title": "Weathernews达成战略合作",
            "company": "Weathernews",
            "field": "ToC",
            "date": "2026-09-20",
            "type": "商业",
            "rating": "B",
            "summary": "Weathernews宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://weathernews.com/news",
            "aiAnalysis": "Weathernews此举将进一步强化其市场竞争力",
            "impactOnMoji": "对墨迹天气的影响：需要关注竞品的技术进展，评估是否跟进",
            "ratingReason": "常规功能更新，行业普遍趋势"
        },
        {
            "id": 1789866079403,
            "title": "AccuWeather发布新版本",
            "company": "AccuWeather",
            "field": "ToC",
            "date": "2026-09-20",
            "type": "产品",
            "rating": "B",
            "summary": "AccuWeather宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://accuweather.com/news",
            "aiAnalysis": "AccuWeather此举反映了行业向智能化方向发展的趋势",
            "impactOnMoji": "对墨迹天气的影响：建议密切关注用户反馈和市场反应",
            "ratingReason": "常规功能更新，行业普遍趋势"
        },
        {
            "id": 1789779677930,
            "title": "Weathernews上线智能分析系统",
            "company": "Weathernews",
            "field": "ToC",
            "date": "2026-09-19",
            "type": "AI",
            "rating": "B",
            "summary": "Weathernews宣布推出基于AI的新功能，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://weathernews.com/news",
            "aiAnalysis": "Weathernews此举反映了行业向智能化方向发展的趋势",
            "impactOnMoji": "对墨迹天气的影响：值得评估对自身产品策略的启示",
            "ratingReason": "常规功能更新，行业普遍趋势"
        },
        {
            "id": 1789779677931,
            "title": "彩云天气优化算法",
            "company": "彩云天气",
            "field": "ToC",
            "date": "2026-09-19",
            "type": "技术",
            "rating": "A",
            "summary": "彩云天气宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://彩云天气.com/news",
            "aiAnalysis": "彩云天气此举体现了在技术创新方面的持续投入",
            "impactOnMoji": "对墨迹天气的影响：值得评估对自身产品策略的启示",
            "ratingReason": "重要功能更新，具有较强参考价值"
        },
        {
            "id": 1789520952943,
            "title": "AccuWeather达成战略合作",
            "company": "AccuWeather",
            "field": "ToC",
            "date": "2026-09-16",
            "type": "商业",
            "rating": "B",
            "summary": "AccuWeather宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://accuweather.com/news",
            "aiAnalysis": "AccuWeather此举体现了在技术创新方面的持续投入",
            "impactOnMoji": "对墨迹天气的影响：值得评估对自身产品策略的启示",
            "ratingReason": "常规功能更新，行业普遍趋势"
        },
        {
            "id": 1789520952944,
            "title": "The Weather Channel拓展新市场",
            "company": "The Weather Channel",
            "field": "ToC",
            "date": "2026-09-16",
            "type": "商业",
            "rating": "S",
            "summary": "The Weather Channel宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://theweatherchannel.com/news",
            "aiAnalysis": "The Weather Channel此举反映了行业向智能化方向发展的趋势",
            "impactOnMoji": "对墨迹天气的影响：可以作为产品规划的参考，考虑类似功能",
            "ratingReason": "重大产品功能发布，涉及核心竞争力，对行业竞争格局有明显影响"
        },
        {
            "id": 1789520952945,
            "title": "彩云天气优化用户体验",
            "company": "彩云天气",
            "field": "ToC",
            "date": "2026-09-16",
            "type": "产品",
            "rating": "A",
            "summary": "彩云天气宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://彩云天气.com/news",
            "aiAnalysis": "彩云天气此举将进一步强化其市场竞争力",
            "impactOnMoji": "对墨迹天气的影响：值得评估对自身产品策略的启示",
            "ratingReason": "重要功能更新，具有较强参考价值"
        },
        {
            "id": 1789519786291,
            "title": "Weather & Radar上线智能分析系统",
            "company": "Weather & Radar",
            "field": "ToC",
            "date": "2026-09-16",
            "type": "AI",
            "rating": "S",
            "summary": "Weather & Radar宣布推出基于AI的新功能，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://weather&radar.com/news",
            "aiAnalysis": "Weather & Radar此举将进一步强化其市场竞争力",
            "impactOnMoji": "对墨迹天气的影响：可以作为产品规划的参考，考虑类似功能",
            "ratingReason": "重大产品功能发布，涉及核心竞争力，对行业竞争格局有明显影响"
        },
        {
            "id": 1789519786292,
            "title": "Weather & Radar优化算法",
            "company": "Weather & Radar",
            "field": "ToC",
            "date": "2026-09-16",
            "type": "技术",
            "rating": "A",
            "summary": "Weather & Radar宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://weather&radar.com/news",
            "aiAnalysis": "Weather & Radar此举体现了在技术创新方面的持续投入",
            "impactOnMoji": "对墨迹天气的影响：可以作为产品规划的参考，考虑类似功能",
            "ratingReason": "重要功能更新，具有较强参考价值"
        },
        {
            "id": 1789463033353,
            "title": "Weathernews拓展新市场",
            "company": "Weathernews",
            "field": "ToC",
            "date": "2026-09-15",
            "type": "商业",
            "rating": "A",
            "summary": "Weathernews宣布发布最新产品更新，旨在提升用户体验和预测准确率。该功能已在主要市场上线，预期将对行业产生积极影响。",
            "source": "https://weathernews.com/news",
            "aiAnalysis": "Weathernews此举有助于提升用户粘性和市场份额",
            "impactOnMoji": "对墨迹天气的影响：建议密切关注用户反馈和市场反应",
            "ratingReason": "重要功能更新，具有较强参考价值"
        },
        {
            "id": 1,
            "title": "AccuWeather推出AI驱动的极端天气预警系统",
            "company": "AccuWeather",
            "field": "ToC",
            "date": "2026-09-05",
            "type": "AI",
            "rating": "S",
            "summary": "AccuWeather宣布推出新一代AI极端天气预警系统，基于深度学习模型分析气象数据，可提前72小时预测极端天气事件，准确率提升40%。系统已在美国、欧洲市场上线，支持自然语言预警推送。",
            "source": "https://www.accuweather.com/news",
            "aiAnalysis": "这是AccuWeather在AI气象预测领域的重大突破，将AI能力从辅助分析提升到核心预警链路。72小时提前量和40%准确率提升具有明显竞争优势。",
            "impactOnMoji": "对墨迹天气的影响：竞品在AI预警能力上形成领先优势，墨迹需要评估自身AI预警能力的差距，考虑是否加大AI气象预测投入。",
            "ratingReason": "重大产品功能发布，涉及核心竞争力，对行业竞争格局有明显影响"
        },
        {
            "id": 2,
            "title": "The Weather Channel集成ChatGPT提供对话式天气查询",
            "company": "The Weather Channel",
            "field": "ToC",
            "date": "2026-09-04",
            "type": "AI",
            "rating": "A",
            "summary": "The Weather Channel在iOS和Android应用中集成OpenAI ChatGPT，用户可通过自然语言对话获取天气信息、出行建议和穿衣指南。功能支持30+语言，已在全球市场上线。",
            "source": "https://weather.com/news",
            "aiAnalysis": "生成式AI正在成为天气APP的标配功能，从单向信息展示向双向对话交互演进。The Weather Channel此举进一步强化了其在AI应用方面的领先地位。",
            "impactOnMoji": "对墨迹天气的影响：竞品通过对话式交互提升用户体验，墨迹需要评估是否引入类似能力，以及如何在中文场景下提供更优质的对话体验。",
            "ratingReason": "重要AI功能上线，提升用户交互体验，具有较强参考价值"
        },
        {
            "id": 3,
            "title": "Windy.com上线全球实时空气质量3D可视化",
            "company": "Windy.com",
            "field": "ToC",
            "date": "2026-09-03",
            "type": "产品",
            "rating": "A",
            "summary": "Windy.com推出全球空气质量3D可视化功能，整合NASA、ESA等机构的卫星数据，提供PM2.5、PM10、臭氧等污染物的实时3D地图展示。用户可旋转查看不同高度的空气质量分布。",
            "source": "https://windy.com/news",
            "aiAnalysis": "Windy.com持续强化其可视化优势，3D空气质量展示提升了数据呈现的专业性和直观性，符合其专业气象工具的产品定位。",
            "impactOnMoji": "对墨迹天气的影响：可视化能力是差异化竞争点，墨迹需要评估是否在空气质量展示上投入，以及如何平衡专业性与易用性。",
            "ratingReason": "重要产品功能，强化竞品差异化优势"
        },
        {
            "id": 4,
            "title": "彩云天气推出「AI气象播报员」功能",
            "company": "彩云天气",
            "field": "ToC",
            "date": "2026-09-02",
            "type": "AI",
            "rating": "A",
            "summary": "彩云天气上线AI虚拟播报员，基于数字人技术生成语音+视频天气播报，支持自定义播报内容和风格。功能已向会员用户开放，日均生成播报视频超10万条。",
            "source": "https://caiyunapp.com/news",
            "aiAnalysis": "彩云天气将AI应用于内容生成场景，通过数字人提升内容表现形式。虽然技术成熟度尚待验证，但探索了AI在气象内容生产上的新方向。",
            "impactOnMoji": "对墨迹天气的影响：AI内容生成是潜在的差异化方向，墨迹可关注用户对此类功能的接受度，评估是否跟进。",
            "ratingReason": "国内竞品AI功能创新，具有一定参考价值"
        },
        {
            "id": 5,
            "title": "Weather & Radar新增闪电追踪实时地图",
            "company": "Weather & Radar",
            "field": "ToC",
            "date": "2026-09-01",
            "type": "产品",
            "rating": "B",
            "summary": "Weather & Radar在雷达地图中新增全球闪电实时追踪功能，数据来自全球闪电探测网络，延迟低于5秒。用户可查看闪电密度、频率和移动方向。",
            "source": "https://weatherradar.com/news",
            "aiAnalysis": "闪电追踪是雷达地图的常规功能扩展，技术壁垒不高，但对关注极端天气的用户有一定价值。",
            "impactOnMoji": "对墨迹天气的影响：功能性补充，可根据用户需求评估是否引入。",
            "ratingReason": "常规功能更新，行业普遍趋势"
        },
        {
            "id": 6,
            "title": "Weathernews强化台风路径预测精度，新版本上线",
            "company": "Weathernews",
            "field": "ToC",
            "date": "2026-08-30",
            "type": "产品",
            "rating": "A",
            "summary": "日本气象服务商Weathernews发布最新版本，强化台风路径预测功能。结合日本气象厅数据和自有AI模型，台风路径预测准确率达行业领先水平。新版本还优化了海洋天气服务和降雪预报可视化。",
            "source": "https://weathernews.jp/news",
            "aiAnalysis": "Weathernews在亚太地区台风预测领域积累深厚，其专业化和本地化策略值得关注。针对台风等高关注天气场景的深度优化能够建立竞争壁垒。",
            "impactOnMoji": "对墨迹天气的影响：台风预测是中国沿海地区用户的核心需求，Weathernews的技术优势显示专业化方向的价值。墨迹可考虑在台风、暴雨等灾害性天气预报上加大投入。",
            "ratingReason": "日本头部竞品产品更新，台风预测技术领先"
        },
        {
            "id": 7,
            "title": "Weather & Radar德国版完成重大更新，用户体验全面升级",
            "company": "Weather & Radar",
            "field": "ToC",
            "date": "2026-08-28",
            "type": "产品",
            "rating": "A",
            "summary": "德国天气应用Weather & Radar（App ID: 545993260）发布v2.48版本，升级多普勒雷达显示效果，支持自定义雷达图层。新版本优化了极端天气推送逻辑，用户可精细化设置预警阈值。",
            "source": "https://weatherradar.de/news",
            "aiAnalysis": "Weather & Radar通过持续强化雷达可视化建立差异化优势，自定义图层功能满足专业用户需求。其在欧洲市场的成功显示专业工具型产品的市场空间。",
            "impactOnMoji": "对墨迹天气的影响：雷达可视化是专业用户和极端天气场景的重要功能。墨迹需要评估雷达地图的产品优先级，以及如何在大众化定位下提供专业功能。",
            "ratingReason": "欧洲主流竞品重大更新，雷达技术有特色"
        },
        {
            "id": 8,
            "title": "天气通优化UI设计，新增语音播报功能",
            "company": "天气通",
            "field": "ToC",
            "date": "2026-08-25",
            "type": "产品",
            "rating": "B",
            "summary": "天气通发布v8.05版本，优化首页布局采用更简洁的卡片式设计，新增语音播报功能支持方言播报。新版本还支持15天趋势预报，并修复了部分机型的闪退问题。",
            "source": "https://www.weather.com.cn/app",
            "aiAnalysis": "天气通在UI简化和适老化功能上有所探索。语音播报支持方言是针对中老年用户的差异化功能，显示对不同用户群体需求的关注。",
            "impactOnMoji": "对墨迹天气的影响：天气通在UI简化和适老化方面的尝试值得参考。墨迹可考虑针对不同年龄段用户推出差异化功能，如简化版或长辈模式。",
            "ratingReason": "国内竞品常规更新，适老化功能有特色"
        },
        {
            "id": 9,
            "title": "看天专注农业气象，新增农作物病虫害预警",
            "company": "看天",
            "field": "ToC",
            "date": "2026-08-22",
            "type": "产品",
            "rating": "B",
            "summary": "看天发布v3.2版本，专注农业气象服务。新增农作物病虫害预警功能，结合天气数据和农业知识为农户提供实用建议。优化了乡镇级天气预报精度，新增农事建议功能。",
            "source": "https://kantian.app/news",
            "aiAnalysis": "看天通过深耕农业气象垂直场景建立差异化定位。农作物病虫害预警等专业功能显示对细分用户需求的深度理解，垂直化策略值得关注。",
            "impactOnMoji": "对墨迹天气的影响：垂直场景深耕是差异化竞争的有效策略。看天在农业气象上的探索显示细分市场潜力，墨迹可评估是否在某些垂直场景（如户外运动、旅游等）做专业化尝试。",
            "ratingReason": "垂直化竞品产品更新，农业气象场景有价值"
        }
    ],
    "tocAppUpdates": [
        {
            "id": 23,
            "company": "Weather Underground",
            "version": "6.21",
            "date": "2025-06-30",
            "rating": "B",
            "updateContent": "Thanks for using Weather Underground! Please email us at support@wunderground.com with any suggestions or questions.",
            "highlights": "版本 6.21 更新，用户评分 3.9/5.0",
            "insightForMoji": "Weather Underground的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 0,
                "average_rating": 0,
                "rating_distribution": {},
                "sentiment": "无数据"
            }
        },
        {
            "id": 22,
            "company": "The Weather Channel",
            "version": "16.25",
            "date": "2026-09-21",
            "rating": "S",
            "updateContent": "We're always working to make The Weather Channel app the best experience for our users. This update includes radar improvements, performance updates, and bug fixes. Partly cloudy with a 100% chance of a better app.\n\nQuestions? Contact us at iphonesupport@weather.com",
            "highlights": "版本 16.25 更新，用户评分 4.8/5.0",
            "insightForMoji": "The Weather Channel的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 50,
                "average_rating": 3.34,
                "rating_distribution": {
                    "5星": 23,
                    "4星": 3,
                    "3星": 4,
                    "2星": 8,
                    "1星": 12
                },
                "sentiment": "中性"
            }
        },
        {
            "id": 21,
            "company": "彩云天气",
            "version": "7.63.1",
            "date": "2026-09-11",
            "rating": "B",
            "updateContent": "1. 优化地址展示规则，提升显示准确率\n2. 优化台风相关功能细节\n3. 新增 Apple Watch 国际化支持\n4. 修复了一些已知问题",
            "highlights": "版本 7.63.1 更新，用户评分 3.8/5.0",
            "insightForMoji": "彩云天气的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 50,
                "average_rating": 2.04,
                "rating_distribution": {
                    "5星": 11,
                    "4星": 0,
                    "3星": 3,
                    "2星": 2,
                    "1星": 34
                },
                "sentiment": "负面"
            }
        },
        {
            "id": 23,
            "company": "Weather Underground",
            "version": "6.21",
            "date": "2025-06-30",
            "rating": "B",
            "updateContent": "Thanks for using Weather Underground! Please email us at support@wunderground.com with any suggestions or questions.",
            "highlights": "版本 6.21 更新，用户评分 3.9/5.0",
            "insightForMoji": "Weather Underground的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 50,
                "average_rating": 2.58,
                "rating_distribution": {
                    "5星": 11,
                    "4星": 6,
                    "3星": 5,
                    "2星": 7,
                    "1星": 21
                },
                "sentiment": "负面"
            }
        },
        {
            "id": 22,
            "company": "The Weather Channel",
            "version": "16.25",
            "date": "2026-09-21",
            "rating": "S",
            "updateContent": "We're always working to make The Weather Channel app the best experience for our users. This update includes radar improvements, performance updates, and bug fixes. Partly cloudy with a 100% chance of a better app.\n\nQuestions? Contact us at iphonesupport@weather.com",
            "highlights": "版本 16.25 更新，用户评分 4.8/5.0",
            "insightForMoji": "The Weather Channel的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 50,
                "average_rating": 3.46,
                "rating_distribution": {
                    "5星": 25,
                    "4星": 3,
                    "3星": 3,
                    "2星": 8,
                    "1星": 11
                },
                "sentiment": "中性"
            }
        },
        {
            "id": 21,
            "company": "彩云天气",
            "version": "7.63.1",
            "date": "2026-09-11",
            "rating": "B",
            "updateContent": "1. 优化地址展示规则，提升显示准确率\n2. 优化台风相关功能细节\n3. 新增 Apple Watch 国际化支持\n4. 修复了一些已知问题",
            "highlights": "版本 7.63.1 更新，用户评分 3.8/5.0",
            "insightForMoji": "彩云天气的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 50,
                "average_rating": 2.1,
                "rating_distribution": {
                    "5星": 11,
                    "4星": 0,
                    "3星": 4,
                    "2星": 3,
                    "1星": 32
                },
                "sentiment": "负面"
            }
        },
        {
            "id": 23,
            "company": "Weather Underground",
            "version": "6.21",
            "date": "2025-06-30",
            "rating": "B",
            "updateContent": "Thanks for using Weather Underground! Please email us at support@wunderground.com with any suggestions or questions.",
            "highlights": "版本 6.21 更新，用户评分 3.9/5.0",
            "insightForMoji": "Weather Underground的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 50,
                "average_rating": 2.58,
                "rating_distribution": {
                    "5星": 11,
                    "4星": 6,
                    "3星": 5,
                    "2星": 7,
                    "1星": 21
                },
                "sentiment": "负面"
            }
        },
        {
            "id": 22,
            "company": "The Weather Channel",
            "version": "16.24.1",
            "date": "2026-09-17",
            "rating": "S",
            "updateContent": "We're always working to make The Weather Channel app the best experience for our users. This update includes new perks, a few handy improvements, and bug fixes. A fresh front of improvements is moving in.\n\nQuestions? Contact us at iphonesupport@weather.com",
            "highlights": "版本 16.24.1 更新，用户评分 4.8/5.0",
            "insightForMoji": "The Weather Channel的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 50,
                "average_rating": 3.48,
                "rating_distribution": {
                    "5星": 25,
                    "4星": 3,
                    "3星": 5,
                    "2星": 5,
                    "1星": 12
                },
                "sentiment": "中性"
            }
        },
        {
            "id": 21,
            "company": "彩云天气",
            "version": "7.63.1",
            "date": "2026-09-11",
            "rating": "B",
            "updateContent": "1. 优化地址展示规则，提升显示准确率\n2. 优化台风相关功能细节\n3. 新增 Apple Watch 国际化支持\n4. 修复了一些已知问题",
            "highlights": "版本 7.63.1 更新，用户评分 3.8/5.0",
            "insightForMoji": "彩云天气的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 50,
                "average_rating": 2.1,
                "rating_distribution": {
                    "5星": 11,
                    "4星": 0,
                    "3星": 4,
                    "2星": 3,
                    "1星": 32
                },
                "sentiment": "负面"
            }
        },
        {
            "id": 23,
            "company": "Weather Underground",
            "version": "6.21",
            "date": "2025-06-30",
            "rating": "B",
            "updateContent": "Thanks for using Weather Underground! Please email us at support@wunderground.com with any suggestions or questions.",
            "highlights": "版本 6.21 更新，用户评分 3.9/5.0",
            "insightForMoji": "Weather Underground的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 0,
                "average_rating": 0,
                "rating_distribution": {},
                "sentiment": "无数据"
            }
        },
        {
            "id": 22,
            "company": "The Weather Channel",
            "version": "16.24.1",
            "date": "2026-09-17",
            "rating": "S",
            "updateContent": "We're always working to make The Weather Channel app the best experience for our users. This update includes new perks, a few handy improvements, and bug fixes. A fresh front of improvements is moving in.\n\nQuestions? Contact us at iphonesupport@weather.com",
            "highlights": "版本 16.24.1 更新，用户评分 4.8/5.0",
            "insightForMoji": "The Weather Channel的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 50,
                "average_rating": 3.36,
                "rating_distribution": {
                    "5星": 21,
                    "4星": 5,
                    "3星": 9,
                    "2星": 1,
                    "1星": 14
                },
                "sentiment": "中性"
            }
        },
        {
            "id": 21,
            "company": "彩云天气",
            "version": "7.63.1",
            "date": "2026-09-11",
            "rating": "B",
            "updateContent": "1. 优化地址展示规则，提升显示准确率\n2. 优化台风相关功能细节\n3. 新增 Apple Watch 国际化支持\n4. 修复了一些已知问题",
            "highlights": "版本 7.63.1 更新，用户评分 3.8/5.0",
            "insightForMoji": "彩云天气的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 50,
                "average_rating": 2.1,
                "rating_distribution": {
                    "5星": 11,
                    "4星": 0,
                    "3星": 4,
                    "2星": 3,
                    "1星": 32
                },
                "sentiment": "负面"
            }
        },
        {
            "id": 23,
            "company": "Weather Underground",
            "version": "6.21",
            "date": "2025-06-30",
            "rating": "B",
            "updateContent": "Thanks for using Weather Underground! Please email us at support@wunderground.com with any suggestions or questions.",
            "highlights": "版本 6.21 更新，用户评分 3.9/5.0",
            "insightForMoji": "Weather Underground的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 50,
                "average_rating": 2.58,
                "rating_distribution": {
                    "5星": 11,
                    "4星": 6,
                    "3星": 5,
                    "2星": 7,
                    "1星": 21
                },
                "sentiment": "负面"
            }
        },
        {
            "id": 22,
            "company": "The Weather Channel",
            "version": "16.24.1",
            "date": "2026-09-17",
            "rating": "S",
            "updateContent": "We're always working to make The Weather Channel app the best experience for our users. This update includes new perks, a few handy improvements, and bug fixes. A fresh front of improvements is moving in.\n\nQuestions? Contact us at iphonesupport@weather.com",
            "highlights": "版本 16.24.1 更新，用户评分 4.8/5.0",
            "insightForMoji": "The Weather Channel的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 50,
                "average_rating": 3.6,
                "rating_distribution": {
                    "5星": 25,
                    "4星": 5,
                    "3星": 7,
                    "2星": 1,
                    "1星": 12
                },
                "sentiment": "中性"
            }
        },
        {
            "id": 21,
            "company": "彩云天气",
            "version": "7.63.1",
            "date": "2026-09-11",
            "rating": "B",
            "updateContent": "1. 优化地址展示规则，提升显示准确率\n2. 优化台风相关功能细节\n3. 新增 Apple Watch 国际化支持\n4. 修复了一些已知问题",
            "highlights": "版本 7.63.1 更新，用户评分 3.8/5.0",
            "insightForMoji": "彩云天气的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 50,
                "average_rating": 2.1,
                "rating_distribution": {
                    "5星": 11,
                    "4星": 0,
                    "3星": 4,
                    "2星": 3,
                    "1星": 32
                },
                "sentiment": "负面"
            }
        },
        {
            "id": 23,
            "company": "Weather Underground",
            "version": "6.21",
            "date": "2025-06-30",
            "rating": "B",
            "updateContent": "Thanks for using Weather Underground! Please email us at support@wunderground.com with any suggestions or questions.",
            "highlights": "版本 6.21 更新，用户评分 3.9/5.0",
            "insightForMoji": "Weather Underground的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 50,
                "average_rating": 2.58,
                "rating_distribution": {
                    "5星": 11,
                    "4星": 6,
                    "3星": 5,
                    "2星": 7,
                    "1星": 21
                },
                "sentiment": "负面"
            }
        },
        {
            "id": 22,
            "company": "The Weather Channel",
            "version": "16.24",
            "date": "2026-09-16",
            "rating": "S",
            "updateContent": "We're always working to make The Weather Channel app the best experience for our users. This update includes new perks, a few handy improvements, and bug fixes. A fresh front of improvements is moving in.\n\nQuestions? Contact us at iphonesupport@weather.com",
            "highlights": "版本 16.24 更新，用户评分 4.8/5.0",
            "insightForMoji": "The Weather Channel的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 50,
                "average_rating": 3.84,
                "rating_distribution": {
                    "5星": 30,
                    "4星": 3,
                    "3星": 6,
                    "2星": 1,
                    "1星": 10
                },
                "sentiment": "中性"
            }
        },
        {
            "id": 21,
            "company": "彩云天气",
            "version": "7.63.1",
            "date": "2026-09-11",
            "rating": "B",
            "updateContent": "1. 优化地址展示规则，提升显示准确率\n2. 优化台风相关功能细节\n3. 新增 Apple Watch 国际化支持\n4. 修复了一些已知问题",
            "highlights": "版本 7.63.1 更新，用户评分 3.8/5.0",
            "insightForMoji": "彩云天气的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 50,
                "average_rating": 2.12,
                "rating_distribution": {
                    "5星": 11,
                    "4星": 0,
                    "3星": 4,
                    "2星": 4,
                    "1星": 31
                },
                "sentiment": "负面"
            }
        },
        {
            "id": 20,
            "company": "Weather Underground",
            "version": "6.21",
            "date": "2025-06-30",
            "rating": "B",
            "updateContent": "Thanks for using Weather Underground! Please email us at support@wunderground.com with any suggestions or questions.",
            "highlights": "版本 6.21 更新，用户评分 3.9/5.0",
            "insightForMoji": "Weather Underground的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 0,
                "average_rating": 0,
                "rating_distribution": {},
                "sentiment": "无数据"
            }
        },
        {
            "id": 19,
            "company": "The Weather Channel",
            "version": "16.24",
            "date": "2026-09-16",
            "rating": "S",
            "updateContent": "We're always working to make The Weather Channel app the best experience for our users. This update includes new perks, a few handy improvements, and bug fixes. A fresh front of improvements is moving in.\n\nQuestions? Contact us at iphonesupport@weather.com",
            "highlights": "版本 16.24 更新，用户评分 4.8/5.0",
            "insightForMoji": "The Weather Channel的更新值得关注，建议分析其功能变化和用户反馈。",
            "source": "App Store",
            "review_analysis": {
                "total": 0,
                "average_rating": 0,
                "rating_distribution": {},
                "sentiment": "无数据"
            }
        }
    ],
    "tocCompanyNews": [
        {
            "id": 31,
            "company": "Weather Channel",
            "date": "2026-09-03",
            "title": "Google’s latest AI weather model gives you no excuse to forget your umbrella - TechCrunch",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMirwFBVV95cUxOdWd1ZTNyVUZHOXVCbElwdC16YTVxSE5uY2pjSFAtYnZqUVh4OGM2bnExRXBOUU5DbkNhSFRJQnVYYXFYN0NQeEtNMVM1a3RFSkRjYzJOdldMZkhvanE1dmd4WEUtS2ZMYWxZMUdENnFlV19vbjEzMFBid28yLUwzbkdKTG5BZjVTVVVqdmZGeDU2MjFPc3B3RlFQd0hLblNyMzRwQkJFYUpKUDFUQmZv?oc=5\" target=",
            "impactOnMoji": "持续关注Weather Channel的动态，评估对市场格局的潜在影响。",
            "source": "TechCrunch"
        },
        {
            "id": 32,
            "company": "The Weather Channel",
            "date": "2026-06-11",
            "title": "The Weather Channel App Launches Enhanced Allergy Experience To Help Sufferers Eliminate the Guesswork of Seasonal Allergies - PR Newswire",
            "type": "动态",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMijAJBVV95cUxPRWFPdmY2bmc3bk84YUJtdlVMTm1oYmduWTJ3cUZtZEpxLTdJME5QWHRCMlA5U1JHOHZabnMyTFdUdXlnc2txMkswVHctYmk5dU1tdU5EQVFSLU9ZaXRldEhCeTJUUHBCSTNWek1uSGx5TnJQX3VvT2hDaDVqcS1fVHhjS2Fmc1BTc1JDVVVZNnEyUEhRS0tJalFLOFh5RGJxaXJaYlg2LWpCR2s4aGw5eVVLZnc2eGo5bX",
            "impactOnMoji": "关注The Weather Channel的这一动态，评估对市场的影响。",
            "source": "PR Newswire"
        },
        {
            "id": 31,
            "company": "The Weather Channel",
            "date": "2026-07-08",
            "title": "The Weather Channel Launches New App - The Weather Channel",
            "type": "动态",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMidkFVX3lxTE1PYXFzc2tKUkFiRGF3Z1h5NHdTZWtzYnJFVk0ydTIzLWRLWEJqaC03YjB3VmMzQ0paMmF6XzVZMGxnY1BKT0RfV2gxSDJ0TEVRc243U1RVMXNvemc0LTh2cnV6bWFZN2JlZExKeDdZQ1gwd216SHc?oc=5\" target=\"_blank\">The Weather Channel Launches New App</a>&nbsp;&nbsp;<font color=\"#6f",
            "impactOnMoji": "关注The Weather Channel的这一动态，评估对市场的影响。",
            "source": "The Weather Channel"
        },
        {
            "id": 38,
            "company": "Weather Underground",
            "date": "2012-07-17",
            "title": "Google Search Gets New Interactive Weather Widget On iOS And Android Tablets - TechCrunch",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMisAFBVV95cUxOdzdvS281aWhjUkdvNVlMZnVyaUFFQ2hBWGhEcl9kR2dpYWl5LXJ4N2ZnTkpiMzlJMnB2eVhxLXluRm16aUY4Q1E2NGRXMTlocGRXU2ZpaDZ5RlZyOUQ3Q3pWTTFYeFFxQ0Z2NmlremRpSWl2UXFpYmhjZGh2a3BpUlFuQmRrU2NXQ0VVYTFZbFpWd1E2b1NadXNDQ1pFSE9zQ0ZDZklualBqa0hsNzl2eg?oc=5\" targe",
            "impactOnMoji": "持续关注Weather Underground的动态，评估对市场格局的潜在影响。",
            "source": "TechCrunch"
        },
        {
            "id": 37,
            "company": "Weather Underground",
            "date": "2014-07-09",
            "title": "The best weather app for Android - The Verge",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMiekFVX3lxTE1XOWZ5dWl2RlI2ekV2cnRMdlo4M1ozQTduR2F4UFIwNDZOTkd5NFBIOEJ0dUU2V09ickgyRjlFZXI4T0VGZEVveEc2bDZnNEpMekNTUV8tSTFwSldlS3RBZWNxSjgyVDAxbFZzRDNxeVpIbUgxaXlXcHhB?oc=5\" target=\"_blank\">The best weather app for Android</a>&nbsp;&nbsp;<font color=\"#6",
            "impactOnMoji": "持续关注Weather Underground的动态，评估对市场格局的潜在影响。",
            "source": "The Verge"
        },
        {
            "id": 36,
            "company": "Weather Underground",
            "date": "2014-07-09",
            "title": "The best weather app for iPhone - The Verge",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMieEFVX3lxTE13RG83Yjh0RllhWUFtamJ5UFdweFVRWEhHZEotMTFtVzhsRmFoUF81dzJZcmpqSTNzajBkQTlPanZ5SUx5TjYxVEhvRUN0QjFObTh4V1VDSUs2SWliaXZ5Q0JhekNRTmV0Tl9ETkZKRlZDMk9ObGwwNA?oc=5\" target=\"_blank\">The best weather app for iPhone</a>&nbsp;&nbsp;<font color=\"#6f6f",
            "impactOnMoji": "持续关注Weather Underground的动态，评估对市场格局的潜在影响。",
            "source": "The Verge"
        },
        {
            "id": 35,
            "company": "Weathernews",
            "date": "2015-07-27",
            "title": "Weathernews Partners With Moji, Maker Of China’s Largest Crowdsourced Weather App - TechCrunch",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMiYEFVX3lxTFAzMzhKdlFoWVByYlU2WDVkOVFCTndTdXlELTBMT0pjRGVRMS0zZjMyM042MWZ5T2h2WXJDRmE3QW9wanI1RjVNeGhKa3NSOWxJd2lPWmlDY3VhMHBwWkNEYQ?oc=5\" target=\"_blank\">Weathernews Partners With Moji, Maker Of China’s Largest Crowdsourced Weather App</a>&nbsp;&nbsp;",
            "impactOnMoji": "持续关注Weathernews的动态，评估对市场格局的潜在影响。",
            "source": "TechCrunch"
        },
        {
            "id": 34,
            "company": "Weather Underground",
            "date": "2017-07-20",
            "title": "Carrot adds new features to its comically malicious AI weather app - The Verge",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMiogFBVV95cUxOakxiWURpdVFwYlFpcS1WbkxSbkFFU1JVbjVmc0J0cGZSM2dqRTRWRGFBWGMzYjgyU1pyaUZkQW5RdTBqdi1mMWVZZFFNaGpNcUVzN19DajJFcl81YTdGREpOLTh6ZWZBVjM4blVaeml2WXFCTzVUNzExTjFlakVVZ1J2LU9kcy1VdkNWOVhpSThPQkFrY0FrM2laZTVqRGdlLVE?oc=5\" target=\"_blank\">Carrot a",
            "impactOnMoji": "持续关注Weather Underground的动态，评估对市场格局的潜在影响。",
            "source": "The Verge"
        },
        {
            "id": 33,
            "company": "Weather Underground",
            "date": "2018-05-29",
            "title": "Carrot, a weather app with personality, is coming to Android - The Verge",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMimgFBVV95cUxNR2g2VG5QeXNZWUctTmZ5eDdfeTZOaFlBd1JMXzM0NkUzRmpBVzlua3VZdUlNeWxXa1BTenJ1Rzk4Yy1tQkUyVDVUNTNlVHAzdmIwbjRmbnBVcmlpSG5ESjM5MGFvVThLUkZhQm5TRXI2aUVvUmx1YzRqNVg2VWVMSG1ZQW92djFTNUpPLWNCeHlHNmhXNVRUTXhR?oc=5\" target=\"_blank\">Carrot, a weather a",
            "impactOnMoji": "持续关注Weather Underground的动态，评估对市场格局的潜在影响。",
            "source": "The Verge"
        },
        {
            "id": 32,
            "company": "彩云天气",
            "date": "2018-10-17",
            "title": "边说边译，「彩云科技」想用AI让人人拥有贴身同传 - 36 Kr",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMiSkFVX3lxTFA1QlJnWEtiRFRrMHlEejRYRnl1NGo1NGRlOHdua2dCMzFPY25IV2h0Yk45LUxqc24yZ2U3MU4zZ2xFdFpnR1RGWnN3?oc=5\" target=\"_blank\">边说边译，「彩云科技」想用AI让人人拥有贴身同传</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">36 Kr</font>",
            "impactOnMoji": "持续关注彩云天气的动态，评估对市场格局的潜在影响。",
            "source": "36 Kr"
        },
        {
            "id": 31,
            "company": "墨迹天气",
            "date": "2022-02-20",
            "title": "墨迹天气发布室内空气监测设备“空气果”，圆形机身，体感交互，支持语音播报 - 36 Kr",
            "type": "产品",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMiSkFVX3lxTE9yZlYxVW1odnZyT2tCb0FRMElXQUhNeVBZV21nVDFiYWZTSlBCVUJYVHlZczZlWEFqX2d0WVpIUENmalAwMjFGZ0Rn?oc=5\" target=\"_blank\">墨迹天气发布室内空气监测设备“空气果”，圆形机身，体感交互，支持语音播报</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">36 Kr</font>",
            "impactOnMoji": "墨迹天气推出新产品功能，墨迹需要评估该功能对用户的价值，考虑是否跟进开发。",
            "source": "36 Kr"
        },
        {
            "id": 30,
            "company": "墨迹天气",
            "date": "2022-09-25",
            "title": "天气会员年费99元，是救命符还是纯纯的智商税？ - 36 Kr",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMiTkFVX3lxTE11OUlVck51QXVhRDJnR250U0NVSE41SThqdUV3RE4xczhiMmhRMm5QOHByUUtPTW51LTlqdXBidWE0REN2cERTM1Q1Zkw0QQ?oc=5\" target=\"_blank\">天气会员年费99元，是救命符还是纯纯的智商税？</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">36 Kr</font>",
            "impactOnMoji": "持续关注墨迹天气的动态，评估对市场格局的潜在影响。",
            "source": "36 Kr"
        },
        {
            "id": 29,
            "company": "彩云天气",
            "date": "2022-11-21",
            "title": "“一以贯之的努力，不得懈怠的人生” —— 五源小酒馆Vol.9 x 彩云科技袁行远 - 36 Kr",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMiTkFVX3lxTE05Mk1ZaG5qYkFlc1NHRVlsS3hRdWR4MThiNWpkbWJ2WlZHTG1VTXZKVmptcVBfQUJWamVGWWJTYUZYVEgxT0tSazdDSmJBUQ?oc=5\" target=\"_blank\">“一以贯之的努力，不得懈怠的人生” —— 五源小酒馆Vol.9 x 彩云科技袁行远</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">36 Kr</font>",
            "impactOnMoji": "持续关注彩云天气的动态，评估对市场格局的潜在影响。",
            "source": "36 Kr"
        },
        {
            "id": 28,
            "company": "墨迹天气",
            "date": "2023-07-26",
            "title": "挺进气象服务「无人区」，墨迹天气让「普通人」的天气预报进入Next Level？ - 36 Kr",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMiTkFVX3lxTE9seUdLY2tqakJsX3dUanBDejdPTzNRZ1JxcG1MZ2N5TmVNWWQxU3lhZjU0LVozVlFWWFRISTBsWmpPOGhEd09SbWtUZGp4dw?oc=5\" target=\"_blank\">挺进气象服务「无人区」，墨迹天气让「普通人」的天气预报进入Next Level？</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">36 Kr</font>",
            "impactOnMoji": "持续关注墨迹天气的动态，评估对市场格局的潜在影响。",
            "source": "36 Kr"
        },
        {
            "id": 27,
            "company": "彩云天气",
            "date": "2024-05-29",
            "title": "宿华，投了一个“水下”AI项目 - 36 Kr",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMiTkFVX3lxTE1BcEVTLWJRQUJ4aWpvem4yaldIMng1WnkxeXliNGl2QlNMMFU0ajEtQnZreUJKSTdYdC14UTd6emdVTWVsXy1taTlKZ2hQdw?oc=5\" target=\"_blank\">宿华，投了一个“水下”AI项目</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">36 Kr</font>",
            "impactOnMoji": "持续关注彩云天气的动态，评估对市场格局的潜在影响。",
            "source": "36 Kr"
        },
        {
            "id": 26,
            "company": "Windy",
            "date": "2024-08-22",
            "title": "Watch: AI could help design and test F1 cars faster - TechCrunch",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMilwFBVV95cUxPRzA3aWM1aDRDa2tHZVN2ekdJMjU3MlMzaGF6QlBHTTBXNjZzdmxSZm5qTEFQczkyRElOTjZXQnZlcEs5bkZVM2M0R1pZS3Rfck9JSWEzam44eThocVNsTlo2RklsN2RNdlNUZkdESDFjeHB5Z01WbWlTbk90b3ZhNktfZkYyYm4xV1FvakU3RnZNanVDaUdv?oc=5\" target=\"_blank\">Watch: AI could help de",
            "impactOnMoji": "持续关注Windy的动态，评估对市场格局的潜在影响。",
            "source": "TechCrunch"
        },
        {
            "id": 25,
            "company": "墨迹天气",
            "date": "2025-07-24",
            "title": "AI时代的气象服务，如何从“服务”到“决策”？ - 36 Kr",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMiTkFVX3lxTE1yZ3FNWlVhQ2NWQUEzM2NlWmY1enI0VXBLTnBYSzI2akFuNHZ0WTRRWkd3MFBGdmVFYTR3TXNBZU95allkY0hxd2gwSUhiZw?oc=5\" target=\"_blank\">AI时代的气象服务，如何从“服务”到“决策”？</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">36 Kr</font>",
            "impactOnMoji": "持续关注墨迹天气的动态，评估对市场格局的潜在影响。",
            "source": "36 Kr"
        },
        {
            "id": 24,
            "company": "墨迹天气",
            "date": "2025-07-28",
            "title": "揭秘！墨迹天气为何“晒黑”了？ - 36 Kr",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMiU0FVX3lxTFAwZTRwRm83b2pSYjZ6Z09VYzVWUTJrOVd2NXB6a3pZZlZjcE1IdnNYMTVfb3BjbGJzLWZwWS1INV9WeFRYNzFodmluNm9Nd2FhWURV?oc=5\" target=\"_blank\">揭秘！墨迹天气为何“晒黑”了？</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">36 Kr</font>",
            "impactOnMoji": "持续关注墨迹天气的动态，评估对市场格局的潜在影响。",
            "source": "36 Kr"
        },
        {
            "id": 23,
            "company": "彩云天气",
            "date": "2025-12-16",
            "title": "华为祭出百万级奖励，这些鸿蒙应用路子对了 - 36 Kr",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMiTkFVX3lxTE83MlpQSVJQU3RsNlVzMWxvejhOaExJb3ZXZ3ZJaTFrOTZHZlVMWEZtXzJZaC1aY2dyanNHc0RSU1FqWkltZmpDU212Tk40Zw?oc=5\" target=\"_blank\">华为祭出百万级奖励，这些鸿蒙应用路子对了</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">36 Kr</font>",
            "impactOnMoji": "持续关注彩云天气的动态，评估对市场格局的潜在影响。",
            "source": "36 Kr"
        },
        {
            "id": 22,
            "company": "AccuWeather",
            "date": "2025-12-18",
            "title": "The U.S. Is on the Verge of Meteorological Malpractice - The Atlantic",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMilAFBVV95cUxQWlZ0OXhVUDBybjdGZllGbEhJSHR4aFUzQUlVSUVrdFNMWldRRXpnZmxHcF9jTnUzOVNyRTY1WE95dnhpVnFaUDdpWmFQNjRyTmY1RTlUUGVXNGtzcUx0a1QxWjg1Y1YxTUR6dEdYVkc1cldLQ3loQWdUb0ptVFZOLUxJcVY1MUZRaExTcmVQazJGaWVi?oc=5\" target=\"_blank\">The U.S. Is on the Verge of",
            "impactOnMoji": "持续关注AccuWeather的动态，评估对市场格局的潜在影响。",
            "source": "The Atlantic"
        },
        {
            "id": 21,
            "company": "AccuWeather",
            "date": "2026-01-04",
            "title": "SwitchBot’s new E Ink display seems great for weather nerds - The Verge",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMigAFBVV95cUxQRUR1WmFUQk5KX1RBNDI0aVpyWVpZT2RJU3pXcDFNMkNycTVydWQzQ2NNMl9OMzh5bzZ1TUZPVk5tWFF3Q2dKMnhjSDVIVXpGX08yZ3RQalFRb1VvNy1odXUtS2JvclZibm1VZ3h2VWt5OHl6LTV1d1pMdWtZNjJ6ZQ?oc=5\" target=\"_blank\">SwitchBot’s new E Ink display seems great for weather",
            "impactOnMoji": "持续关注AccuWeather的动态，评估对市场格局的潜在影响。",
            "source": "The Verge"
        },
        {
            "id": 20,
            "company": "Windy",
            "date": "2026-01-30",
            "title": "Cold weather in Florida is pushing back the Artemis II launch - The Verge",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMisAFBVV95cUxNM3h0bmpOdHhsSHprZkVpVlRtbVBwUlVwOGcwRXZ5aXhIYUZQVXVhSk84WVNwTUlXdFV4cVRRTFBYOHltZ1Q0VEtfOG56Z2FLcXBwSGRYUlhFUWtoQXVwMFEySE11N0lmMUFFTXVKSlh5OF96ZkdOVk9NR001RmppTnNBbGZHUkl1Sk5USlhxQ3padVVjNVhZN05EMXEtdHNrT3RNR0FwZ2lZWWhHZVpEag?oc=5\" targe",
            "impactOnMoji": "持续关注Windy的动态，评估对市场格局的潜在影响。",
            "source": "The Verge"
        },
        {
            "id": 19,
            "company": "AccuWeather",
            "date": "2026-02-23",
            "title": "The creators of Dark Sky have a new weather app that shares multiple predictions - The Verge",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMingFBVV95cUxOOEpySVVzT1BmMGJlUUliMU1NblVNY2FUU3Flai1iMDNsYndMTmREMnhCcTEtQ2ZpMmw1eDlxa2ZZQVBqdlRONjh1Q0RBckRXby1vTXIxWWx4T19mSW9lcUhLdEFkanZRN2RDTXBfb1lzM2ZFMVA4Y3cxWlU5Ti1IcWdtNnBjY1RJTkJfaUJTTkI4Q1RoZUF4YWlZOXJPdw?oc=5\" target=\"_blank\">The creators ",
            "impactOnMoji": "持续关注AccuWeather的动态，评估对市场格局的潜在影响。",
            "source": "The Verge"
        },
        {
            "id": 18,
            "company": "AccuWeather",
            "date": "2026-02-28",
            "title": "A legendary weather app makes a comeback - The Verge",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMie0FVX3lxTE1FV3dZN0pyakF0Vm9QRUlJbVhweUJhMnd5WVV5Qk54RGthYlBOQXVaVmR5d0tQRm54RWpaNlhkcklXVHNUandqOWpoMWZyV2dpWmFoZmplay1mYmpoeGJQNXJQcVJ5cnppODkxLUJxS2FPTTdCZmFmOFdwZw?oc=5\" target=\"_blank\">A legendary weather app makes a comeback</a>&nbsp;&nbsp;<font",
            "impactOnMoji": "持续关注AccuWeather的动态，评估对市场格局的潜在影响。",
            "source": "The Verge"
        },
        {
            "id": 17,
            "company": "Windy",
            "date": "2026-03-25",
            "title": "Lucid Bots raises $20M to keep up with demand for its window-washing drones - TechCrunch",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMirgFBVV95cUxPTWJ2OGUzMWlic04zNHdWVFhQTVlQUnV3N1l3M2dLSGZNMmF2TEVyVzRyZVlsNERYRjUzMjhUbUJlRVpQWEZYWERrVV9NamJZNW1sVEJtc0stbGJEdkoxSEJ6LUltVFpjeEt5MS1pRW5uVkV3MkhuWktybnVZVkxxOXYxNjdqc1RHSDBvTF91NzlzS3JDZ1pxM3hxNTc4TVR5SDdTbmtkakpwSWVpcmc?oc=5\" target=\"",
            "impactOnMoji": "持续关注Windy的动态，评估对市场格局的潜在影响。",
            "source": "TechCrunch"
        },
        {
            "id": 16,
            "company": "Weather Channel",
            "date": "2026-06-01",
            "title": "This AI weather startup is out-forecasting government agencies - TechCrunch",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMingFBVV95cUxNaFdELUFWNTdSeENxMURRM2VIeVcySWpVUjlQazQwcFhuVDRoazF0c09QckczdU9xY1AzeUNtOHFISVE4Tl9HNEJYcEJWb1ZPeFVMS1JSWm4zN3B1TW9ialpDbHV3bGwtWGhqMHg4WkJSaGw1WnEydlI4SXhlazg2aEl6S3JveUZnUEFnTV9LeVJ2YWVuZlNOS1U1Qll6dw?oc=5\" target=\"_blank\">This AI weath",
            "impactOnMoji": "持续关注Weather Channel的动态，评估对市场格局的潜在影响。",
            "source": "TechCrunch"
        },
        {
            "id": 15,
            "company": "Weather Channel",
            "date": "2026-06-09",
            "title": "SwitchBot’s E Ink Weather Station is already 20 percent off - The Verge",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMilwFBVV95cUxQUHhUN0hPVFpMZ3dsM0ZScm1GenpWN3pRakp3MU9KenE3R2RLSTUyRUtzSE9rNGMtM041aHM5R2JjVVBwcGJqdER5SDNaUzUtTjlpYUFRb0ZZOTliME42VEhkUlB4bVM2eUdfOXdXRVVudVVqSkUwcElHVHJUU1pDcHJyYkJjc0xKZzdLWXpyMkJCaGZMQzBN?oc=5\" target=\"_blank\">SwitchBot’s E Ink Weath",
            "impactOnMoji": "持续关注Weather Channel的动态，评估对市场格局的潜在影响。",
            "source": "The Verge"
        },
        {
            "id": 14,
            "company": "Windy",
            "date": "2026-06-10",
            "title": "Amazon’s Echo speakers can now help kids wind down and fall asleep - The Verge",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMipAFBVV95cUxPUHkwQzN6SlU2elF0NndhTFo0MDVCUS1mUXhUd0lkLUd2dVVZc3ZFdDBXVVE1b3ZnOEI5NGNfRTBBcWhPSlpPb2x1QTZPeVF0ejBjZUdjZjRYSEpvTzZ0NE1YcXozbURWSU9Qd0liQU5lLTItMWZNdkF3b1haUWQwZ041TUxlMkdORmp3UXVON3c4Zkp2RnEtc2kycWZUb1VNemZpUQ?oc=5\" target=\"_blank\">Amazo",
            "impactOnMoji": "持续关注Windy的动态，评估对市场格局的潜在影响。",
            "source": "The Verge"
        },
        {
            "id": 13,
            "company": "Weather Channel",
            "date": "2026-06-11",
            "title": "The Weather Channel app now predicts bad allergy days - The Verge",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMilgFBVV95cUxQQm5TYldBcWZ2UWlyZGNhYWNMQ3BRMEhaeUZWbVlFSV9kb1o5bGlrVkxUa2g4UE1ELUJoV3dKSFFsYjRsQTN4WVJiRk10UFZmZkJlN1duNDBXdEZlcTdMbkVRblVESml2UTlwamN2ZlJ2b21aQnZINXFzVkh3b1ZXREllaE5ucFhtSTllby12bnlxMWtYSnc?oc=5\" target=\"_blank\">The Weather Channel app ",
            "impactOnMoji": "持续关注Weather Channel的动态，评估对市场格局的潜在影响。",
            "source": "The Verge"
        },
        {
            "id": 12,
            "company": "AccuWeather",
            "date": "2026-06-17",
            "title": "Illinois on the verge of setting new annual tornado record - whig.com",
            "type": "其他",
            "rating": "B",
            "content": "<a href=\"https://news.google.com/rss/articles/CBMikAFBVV95cUxQUG55Umo2dEpub2hpWG9BNW9fTXZPQjJmT1ZhWk5KMjg2S2hVa0g0OHRTVEFjX0FsUWlqNWxtVGxiSzhqVmdmV0dGMmFObWpRZFdNR1VhYmwxTlVOa2xSZDlWcFZ4ZzlFQmk3dE14R2xGVXAzdjA3Y3R5WkVxMWxDeVVZX2x1LWJudHdkWGpTRlU?oc=5\" target=\"_blank\">Illinois on the verge of setting",
            "impactOnMoji": "持续关注AccuWeather的动态，评估对市场格局的潜在影响。",
            "source": "whig.com"
        }
    ],
    "tobIntelligence": {
        "metro": [],
        "aviation": [],
        "energy": [
            {
                "id": 1,
                "date": "2026-09-17",
                "title": "招标 | 新疆2.4GW风电项目EPC总承包招标 - 国际风力发电网",
                "type": "招标公告",
                "rating": "B",
                "amount": "金额未公开",
                "content": "<a href=\"https://news.google.com/rss/articles/CBMiWkFVX3lxTE4tUWlTby00Rk5OaXdHTy15cG9uTm0xSEVfUUNRSmlJSHI2MENyT1JpSHhDVlpBcU9pQ1o1dlNuYlhKTWt1akxkWERnOEFSblBiUUFadzJldHFzUQ?oc=5\" target=\"_blank\">招标 | 新疆2.4GW风电项目EPC总承包招标</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">国际风力发电网</font>",
                "analysis": "新能源领域对气象预报精度要求高，墨迹可重点关注风电、光伏项目。",
                "source": "国际风力发电网"
            }
        ]
    },
    "trends": [
        {
            "id": 1,
            "name": "生成式AI进入天气服务核心链路",
            "category": "ToC",
            "stage": "accelerating",
            "strength": 4,
            "firstSeen": "2026-07-15",
            "lastUpdate": "2026-09-05",
            "relatedEvents": 12,
            "companies": [
                "AccuWeather",
                "The Weather Channel",
                "Google",
                "Tomorrow.io",
                "彩云天气"
            ],
            "description": "多家头部天气服务商开始将生成式AI应用于天气摘要、自然语言问答、极端天气解释等核心场景，AI正在从辅助工具向用户获取天气信息的主要入口演进。AccuWeather的AI预警、The Weather Channel的ChatGPT集成都是典型案例。",
            "aiJudgment": "生成式AI在天气服务中的应用已从实验阶段进入规模化部署阶段。多家企业同时布局表明这是行业共识而非个别尝试。AI能力正在成为天气产品的核心竞争力之一，不具备AI能力的竞品可能面临用户体验劣势。",
            "impactOnMoji": "对墨迹天气的影响：需要加快生成式AI的产品化落地，重点关注中文场景下的AI交互体验优化，避免在AI能力上被竞品拉开差距。"
        },
        {
            "id": 2,
            "name": "ToB气象服务向定制化、高精度方向演进",
            "category": "ToB",
            "stage": "accelerating",
            "strength": 4,
            "firstSeen": "2026-06-20",
            "lastUpdate": "2026-09-06",
            "relatedEvents": 18,
            "companies": [
                "华风气象",
                "WNI",
                "国能日新",
                "东润环能"
            ],
            "description": "地铁、航空、能源等ToB行业对气象服务的需求从通用预报向定制化、高精度、场景化方向发展。客户愿意为高质量服务支付更高费用，千万级项目频繁出现，行业整体向高价值方向升级。",
            "aiJudgment": "ToB气象服务正在从标准化产品向解决方案转型，技术壁垒和行业壁垒同时提升。能够提供定制化、高精度服务的企业将获得更高溢价，通用化服务商面临价格压力。",
            "impactOnMoji": "对墨迹天气的影响：如果墨迹计划拓展ToB业务，需要建立场景化、定制化服务能力，单纯的API接口难以满足高端客户需求。需要投入行业研究、技术研发和解决方案团队。"
        },
        {
            "id": 3,
            "name": "空气质量可视化成为天气APP新战场",
            "category": "ToC",
            "stage": "emerging",
            "strength": 3,
            "firstSeen": "2026-08-10",
            "lastUpdate": "2026-09-03",
            "relatedEvents": 6,
            "companies": [
                "Windy.com",
                "Weather & Radar",
                "彩云天气"
            ],
            "description": "多家天气APP强化空气质量展示能力，从简单数值向3D可视化、实时监测、污染物分层展示等方向升级。Windy.com的3D空气质量地图是代表性案例。",
            "aiJudgment": "空气质量关注度上升推动产品功能升级，可视化能力成为差异化竞争点。但该趋势目前仍处于萌芽期，尚未形成用户刚需，更多是产品差异化尝试。",
            "impactOnMoji": "对墨迹天气的影响：可根据用户反馈评估是否跟进，非核心功能，优先级相对较低。"
        }
    ],
    "companies": [
        {
            "id": 1,
            "name": "AccuWeather",
            "logo": "AW",
            "field": [
                "ToC"
            ],
            "products": [
                "AccuWeather App",
                "MinuteCast",
                "RealFeel Temperature"
            ],
            "customers": [
                "全球C端用户",
                "媒体合作伙伴"
            ],
            "businessModel": "To C订阅会员 + 广告 + To B数据授权",
            "recentActivity": 15,
            "aiScore": 95,
            "recentStrategy": "近3个月AccuWeather重点在AI能力建设上，先后推出AI极端天气预警、生成式AI天气摘要、AI驱动的过敏指数预测等功能。公司明确将AI定位为核心竞争力，通过AI提升预测准确性和用户体验。"
        },
        {
            "id": 2,
            "name": "华风气象",
            "logo": "华风",
            "field": [
                "ToB",
                "地铁",
                "航空"
            ],
            "products": [
                "气象预警平台",
                "防灾减灾系统",
                "专业气象服务"
            ],
            "customers": [
                "政府部门",
                "交通行业",
                "能源企业"
            ],
            "businessModel": "To B项目制 + 长期服务合同",
            "recentActivity": 12,
            "aiScore": 88,
            "recentStrategy": "近6个月华风气象重点拓展地铁气象服务市场，与北京地铁、上海地铁建立战略合作，打造行业标杆案例。公司策略是通过头部客户建立行业壁垒，形成可复制的解决方案。"
        },
        {
            "id": 3,
            "name": "国能日新",
            "logo": "国能",
            "field": [
                "ToB",
                "能源"
            ],
            "products": [
                "新能源功率预测",
                "气象预报服务",
                "智慧能源平台"
            ],
            "customers": [
                "发电集团",
                "新能源企业",
                "电网公司"
            ],
            "businessModel": "To B软件授权 + 服务订阅",
            "recentActivity": 18,
            "aiScore": 92,
            "recentStrategy": "国能日新近期密集中标大型功率预测项目，市场份额持续提升。公司策略是通过技术领先（90%+准确率）和持续服务能力建立客户粘性，同时向电力交易、虚拟电厂等新场景延伸。"
        },
        {
            "id": 4,
            "name": "Weathernews",
            "logo": "WN",
            "field": [
                "ToC"
            ],
            "products": [
                "Weathernews App",
                "台风预测",
                "海洋天气"
            ],
            "customers": [
                "日本及亚太地区C端用户",
                "专业用户"
            ],
            "businessModel": "To C订阅会员 + To B专业服务",
            "recentActivity": 8,
            "aiScore": 90,
            "recentStrategy": "Weathernews在亚太地区深耕台风和海洋气象服务，通过专业化和本地化建立竞争优势。近期强化AI台风预测能力，准确率达到行业领先水平。"
        },
        {
            "id": 5,
            "name": "Weather & Radar",
            "logo": "WR",
            "field": [
                "ToC"
            ],
            "products": [
                "Weather & Radar App",
                "雷达地图",
                "闪电追踪"
            ],
            "customers": [
                "欧洲C端用户",
                "专业气象爱好者"
            ],
            "businessModel": "To C订阅会员 + 广告",
            "recentActivity": 10,
            "aiScore": 85,
            "recentStrategy": "Weather & Radar专注雷达可视化和极端天气监测，通过技术差异化在欧洲市场占据一席之地。近期获得B轮融资，计划扩大市场份额和强化技术研发。"
        },
        {
            "id": 6,
            "name": "天气通",
            "logo": "天气通",
            "field": [
                "ToC"
            ],
            "products": [
                "天气通App",
                "语音播报",
                "15天预报"
            ],
            "customers": [
                "国内C端用户"
            ],
            "businessModel": "To C广告 + 增值服务",
            "recentActivity": 6,
            "aiScore": 75,
            "recentStrategy": "天气通在UI简化和适老化功能上有所探索，语音播报支持方言是其特色。产品定位偏向大众化和易用性，关注中老年用户群体。"
        },
        {
            "id": 7,
            "name": "看天",
            "logo": "看天",
            "field": [
                "ToC"
            ],
            "products": [
                "看天App",
                "农业气象",
                "病虫害预警"
            ],
            "customers": [
                "农业用户",
                "乡村用户"
            ],
            "businessModel": "To C免费 + To B农业服务",
            "recentActivity": 5,
            "aiScore": 78,
            "recentStrategy": "看天专注农业气象垂直场景，通过深度理解农业用户需求建立差异化定位。乡镇级预报和农事建议是其核心优势，显示垂直化策略的潜力。"
        },
        {
            "id": 8,
            "name": "The Weather Channel",
            "logo": "TWC",
            "field": [
                "ToC"
            ],
            "products": [
                "The Weather Channel App",
                "Watson AI天气",
                "Storm Radar"
            ],
            "customers": [
                "全球C端用户",
                "企业客户"
            ],
            "businessModel": "To C订阅会员 + 广告 + To B数据服务",
            "recentActivity": 14,
            "aiScore": 93,
            "recentStrategy": "The Weather Channel近期战略重点是深化AI能力，与OpenAI合作开发定制AI模型，将生成式AI整合到天气查询全流程。通过AI对话提升用户体验，探索天气信息交互的新范式。"
        },
        {
            "id": 9,
            "name": "Windy.com",
            "logo": "Windy",
            "field": [
                "ToC"
            ],
            "products": [
                "Windy App",
                "气象可视化",
                "飞行天气"
            ],
            "customers": [
                "专业用户",
                "户外爱好者",
                "飞行员"
            ],
            "businessModel": "To C订阅会员 + 企业授权",
            "recentActivity": 9,
            "aiScore": 82,
            "recentStrategy": "Windy.com专注气象数据可视化，通过强大的地图和动画展示建立技术壁垒。近期开源可视化框架WinViz，通过开源社区建立技术影响力，同时强化3D空气质量展示等专业功能。"
        },
        {
            "id": 10,
            "name": "彩云天气",
            "logo": "彩云",
            "field": [
                "ToC"
            ],
            "products": [
                "彩云天气App",
                "分钟级降水预报",
                "AI播报员"
            ],
            "customers": [
                "国内C端用户"
            ],
            "businessModel": "To C会员订阅 + 广告 + To B API服务",
            "recentActivity": 11,
            "aiScore": 87,
            "recentStrategy": "彩云天气近期重点在AI内容生成和鸿蒙生态布局。推出AI虚拟播报员功能，与华为合作开发鸿蒙原生应用。继续强化分钟级降水预报的核心优势，探索AI在天气服务中的创新应用。"
        },
        {
            "id": 11,
            "name": "WNI",
            "logo": "WNI",
            "field": [
                "ToB",
                "航空"
            ],
            "products": [
                "航空气象服务",
                "航路优化",
                "风险评估"
            ],
            "customers": [
                "航空公司",
                "机场",
                "物流企业"
            ],
            "businessModel": "To B专业服务 + 长期合同",
            "recentActivity": 10,
            "aiScore": 89,
            "recentStrategy": "WNI（Weathernews旗下）在航空气象领域深耕多年，近期与中国国航达成战略合作，为国际航线提供全球气象服务。通过高质量专业服务和全球数据能力建立竞争壁垒。"
        }
    ],
    "customerNeeds": [
        {
            "id": 1,
            "industry": "航空",
            "need": "极端天气AI决策支持",
            "frequency": 15,
            "trend": "上升",
            "relatedCustomers": 8,
            "description": "航空公司需要AI系统在极端天气条件下提供航班调度、航路优化、旅客服务等综合决策建议，而非仅提供气象数据。"
        },
        {
            "id": 2,
            "industry": "能源",
            "need": "超短期功率预测（15分钟级）",
            "frequency": 12,
            "trend": "上升",
            "relatedCustomers": 10,
            "description": "新能源企业需要更高频的超短期功率预测，以适应电力市场现货交易和双细则考核要求。"
        },
        {
            "id": 3,
            "industry": "地铁",
            "need": "暴雨积水风险预警",
            "frequency": 10,
            "trend": "稳定",
            "relatedCustomers": 6,
            "description": "地铁运营商需要精准到站点的暴雨积水风险预警，结合地形、排水等数据提供风险评估和应急建议。"
        }
    ],
    "reports": [
        {
            "id": 1,
            "type": "ToC周报",
            "title": "ToC天气产品竞品周报",
            "description": "监测全球主流天气APP产品动态、公司战略、市场数据，识别行业趋势，提供竞品分析和业务建议。",
            "structure": [
                "核心洞察",
                "市场数据",
                "APP更新",
                "公司动态",
                "合作动态",
                "行业趋势",
                "对墨迹建议"
            ]
        },
        {
            "id": 2,
            "type": "ToB周报",
            "title": "气象行业ToB业务周报",
            "description": "覆盖地铁、航空、能源三大行业，监测政策变化、客户需求、竞品动态、中标信息，识别商业机会。",
            "structure": [
                "行业重点动态",
                "政策/标准",
                "客户需求",
                "竞品动态",
                "中标/合作",
                "行业趋势",
                "业务影响"
            ]
        },
        {
            "id": 3,
            "type": "月度趋势",
            "title": "气象行业月度趋势报告",
            "description": "基于一个月情报数据，系统性分析ToC和ToB领域的结构性变化、新兴趋势和战略机会。",
            "structure": [
                "趋势总览",
                "ToC市场变化",
                "ToB市场变化",
                "技术趋势",
                "政策影响",
                "战略机会",
                "风险提示"
            ]
        }
    ],
    "tobIndustry": {
        "subway": [],
        "aviation": [],
        "energy": []
    },
    "industryTrends": [],
    "keyCompanies": [],
    "intelLibrary": [],
    "companyMonitor": [
        {
            "id": 1,
            "name": "北京墨迹风云科技股份有限公司",
            "nameEn": "Moji Weather",
            "country": "中国",
            "type": "ToC",
            "logo": "🌤️",
            "basicInfo": {
                "legalPerson": "金犁",
                "registeredCapital": "62666.67万元",
                "foundDate": "2010-03-15",
                "status": "存续",
                "location": "北京市朝阳区",
                "businessScope": "技术开发、技术推广、技术转让、技术咨询、技术服务；数据处理；设计、制作、代理、发布广告",
                "unifiedCode": "91110105551382174B",
                "dataSource": "国家企业信用信息公示系统"
            },
            "changes": [
                {
                    "date": "2024-06-20",
                    "type": "注册资本变更",
                    "before": "50000万元",
                    "after": "62666.67万元",
                    "remark": "增资扩股"
                },
                {
                    "date": "2023-03-15",
                    "type": "董事变更",
                    "content": "新增董事张某某",
                    "remark": "引入战略投资者代表"
                }
            ],
            "funding": [
                {
                    "date": "2016-02",
                    "round": "C轮",
                    "amount": "2亿元",
                    "investors": [
                        "阿里巴巴",
                        "险峰长青"
                    ]
                },
                {
                    "date": "2014-12",
                    "round": "B轮",
                    "amount": "数千万美元",
                    "investors": [
                        "盛大资本",
                        "创新工场"
                    ]
                }
            ],
            "shareholders": [
                {
                    "name": "金犁",
                    "ratio": "23.5%",
                    "type": "自然人"
                },
                {
                    "name": "阿里巴巴",
                    "ratio": "12.8%",
                    "type": "法人"
                }
            ]
        },
        {
            "id": 2,
            "name": "北京彩云科技有限公司",
            "nameEn": "ColorfulClouds",
            "country": "中国",
            "type": "ToC",
            "logo": "🌈",
            "basicInfo": {
                "legalPerson": "袁行远",
                "registeredCapital": "120.48万元",
                "foundDate": "2016-03-30",
                "status": "存续",
                "location": "北京市海淀区",
                "businessScope": "技术开发、技术推广、技术转让、技术咨询、技术服务；软件开发；计算机系统服务",
                "unifiedCode": "91110108MA005E8R3U",
                "dataSource": "国家企业信用信息公示系统"
            },
            "changes": [
                {
                    "date": "2025-08-10",
                    "type": "注册资本变更",
                    "before": "100万元",
                    "after": "120.48万元",
                    "remark": "增资"
                }
            ],
            "funding": [
                {
                    "date": "2019-03",
                    "round": "B+轮",
                    "amount": "数千万元",
                    "investors": [
                        "TCL创投",
                        "盈动资本"
                    ]
                },
                {
                    "date": "2017-12",
                    "round": "B轮",
                    "amount": "数千万元",
                    "investors": [
                        "创新工场",
                        "盈动资本"
                    ]
                }
            ],
            "shareholders": [
                {
                    "name": "袁行远",
                    "ratio": "45.0%",
                    "type": "自然人"
                },
                {
                    "name": "创新工场",
                    "ratio": "20.0%",
                    "type": "法人"
                }
            ]
        },
        {
            "id": 3,
            "name": "AccuWeather Inc.",
            "nameEn": "AccuWeather",
            "country": "美国",
            "type": "ToC",
            "logo": "🌦️",
            "basicInfo": {
                "legalPerson": "Steven R. Smith (CEO)",
                "foundDate": "1962-01-01",
                "status": "Active",
                "location": "Pennsylvania, USA",
                "businessScope": "Weather forecasting services, digital media, advertising",
                "stockExchange": "Private",
                "dataSource": "SEC EDGAR, WikiData"
            },
            "changes": [
                {
                    "date": "2025-06-20",
                    "type": "业务扩展",
                    "content": "收购欧洲气象数据公司WeatherTech",
                    "importance": "高"
                }
            ],
            "funding": [
                {
                    "date": "2015-03",
                    "round": "私募",
                    "amount": "$100M",
                    "investors": [
                        "未公开"
                    ]
                }
            ],
            "shareholders": [
                {
                    "name": "Myers家族",
                    "ratio": "控股",
                    "type": "家族企业"
                }
            ]
        },
        {
            "id": 4,
            "name": "The Weather Channel (IBM)",
            "nameEn": "The Weather Channel",
            "country": "美国",
            "type": "ToC",
            "logo": "⛈️",
            "basicInfo": {
                "legalPerson": "IBM Corporation",
                "foundDate": "1982-05-02",
                "status": "Active",
                "location": "Georgia, USA",
                "businessScope": "Weather forecasting, digital media, IoT weather data",
                "stockExchange": "IBM (Parent)",
                "dataSource": "SEC EDGAR, WikiData"
            },
            "changes": [
                {
                    "date": "2024-11-10",
                    "type": "战略调整",
                    "content": "专注IoT和企业气象服务",
                    "importance": "中"
                }
            ],
            "funding": [],
            "shareholders": [
                {
                    "name": "IBM Corporation",
                    "ratio": "100%",
                    "type": "母公司"
                }
            ]
        },
        {
            "id": 5,
            "name": "天气通",
            "nameEn": "Weather Link",
            "country": "中国",
            "type": "ToC",
            "logo": "☀️",
            "basicInfo": {
                "legalPerson": "李某某",
                "registeredCapital": "5000万元",
                "foundDate": "2008-06-15",
                "status": "存续",
                "location": "北京市海淀区",
                "businessScope": "互联网信息服务；技术开发、技术咨询；设计、制作、代理、发布广告",
                "unifiedCode": "91110108672345678X",
                "dataSource": "国家企业信用信息公示系统"
            },
            "changes": [
                {
                    "date": "2023-05-12",
                    "type": "股东变更",
                    "content": "新增股东某投资公司",
                    "remark": "引入战略投资"
                }
            ],
            "funding": [
                {
                    "date": "2015-08",
                    "round": "A轮",
                    "amount": "数千万元",
                    "investors": [
                        "某创投基金"
                    ]
                }
            ],
            "shareholders": [
                {
                    "name": "李某某",
                    "ratio": "60.0%",
                    "type": "自然人"
                }
            ]
        },
        {
            "id": 6,
            "name": "看天",
            "nameEn": "KanTian Weather",
            "country": "中国",
            "type": "ToC",
            "logo": "🌾",
            "basicInfo": {
                "legalPerson": "王某某",
                "registeredCapital": "1000万元",
                "foundDate": "2017-09-20",
                "status": "存续",
                "location": "四川省成都市",
                "businessScope": "软件开发；互联网信息服务；农业信息咨询；技术服务",
                "unifiedCode": "91510100MA6C12345F",
                "dataSource": "国家企业信用信息公示系统"
            },
            "changes": [
                {
                    "date": "2026-08-05",
                    "type": "合作协议",
                    "content": "与农业农村部达成合作",
                    "importance": "高"
                }
            ],
            "funding": [
                {
                    "date": "2019-06",
                    "round": "天使轮",
                    "amount": "500万元",
                    "investors": [
                        "农业科技基金"
                    ]
                }
            ],
            "shareholders": [
                {
                    "name": "王某某",
                    "ratio": "80.0%",
                    "type": "自然人"
                }
            ]
        },
        {
            "id": 7,
            "name": "Windy.com",
            "nameEn": "Windyty SE",
            "country": "捷克",
            "type": "ToC",
            "logo": "💨",
            "basicInfo": {
                "legalPerson": "Ivo Lukačovič (Founder & CEO)",
                "foundDate": "2014-11-01",
                "status": "Active",
                "location": "Prague, Czech Republic",
                "businessScope": "Weather visualization, meteorological services, web applications",
                "dataSource": "Czech Business Register (ARES), WikiData"
            },
            "changes": [
                {
                    "date": "2026-08-30",
                    "type": "技术开源",
                    "content": "开源气象可视化框架WinViz",
                    "importance": "中"
                }
            ],
            "funding": [
                {
                    "date": "2016-03",
                    "round": "种子轮",
                    "amount": "€500K",
                    "investors": [
                        "Czech Invest"
                    ]
                }
            ],
            "shareholders": [
                {
                    "name": "Ivo Lukačovič",
                    "ratio": "控股",
                    "type": "创始人"
                }
            ]
        },
        {
            "id": 8,
            "name": "Weathernews Inc.",
            "nameEn": "Weathernews",
            "country": "日本",
            "type": "ToC",
            "logo": "🌸",
            "basicInfo": {
                "legalPerson": "Chihito Kusabiraki (CEO)",
                "foundDate": "1986-06-11",
                "status": "Active",
                "location": "Chiba, Japan",
                "businessScope": "Weather forecasting, maritime weather services, broadcasting",
                "stockExchange": "TSE: 4825",
                "dataSource": "Tokyo Stock Exchange, WikiData"
            },
            "changes": [
                {
                    "date": "2026-08-15",
                    "type": "技术发布",
                    "content": "推出新一代台风预测AI模型",
                    "importance": "高"
                }
            ],
            "funding": [],
            "shareholders": [
                {
                    "name": "公开上市",
                    "ratio": "分散持股",
                    "type": "上市公司"
                }
            ]
        },
        {
            "id": 9,
            "name": "Weather Underground",
            "nameEn": "Weather Underground (TWC Product)",
            "country": "美国",
            "type": "ToC",
            "logo": "🌡️",
            "basicInfo": {
                "legalPerson": "The Weather Company (IBM)",
                "foundDate": "1995-01-01",
                "status": "Active (Product)",
                "location": "Atlanta, Georgia, USA",
                "businessScope": "Crowdsourced weather data, personal weather stations network",
                "stockExchange": "IBM (Parent)",
                "dataSource": "SEC EDGAR, WikiData"
            },
            "changes": [
                {
                    "date": "2012-07-02",
                    "type": "收购",
                    "content": "被The Weather Channel收购",
                    "importance": "高"
                }
            ],
            "funding": [],
            "shareholders": [
                {
                    "name": "IBM Corporation",
                    "ratio": "100%",
                    "type": "母公司（通过TWC）"
                }
            ]
        },
        {
            "id": 10,
            "name": "Weather & Radar",
            "nameEn": "Weather & Radar GmbH",
            "country": "德国",
            "type": "ToC",
            "logo": "📡",
            "basicInfo": {
                "legalPerson": "Thomas Schmidt (CEO)",
                "foundDate": "2015-03-01",
                "status": "Active",
                "location": "Berlin, Germany",
                "businessScope": "Mobile weather applications, radar services, premium weather data",
                "dataSource": "German Business Register, WikiData"
            },
            "changes": [
                {
                    "date": "2026-08-20",
                    "type": "融资",
                    "content": "完成1500万欧元B轮融资",
                    "importance": "高"
                }
            ],
            "funding": [
                {
                    "date": "2026-08",
                    "round": "B轮",
                    "amount": "€15M",
                    "investors": [
                        "Climate Tech Ventures"
                    ],
                    "valuation": "€80M"
                },
                {
                    "date": "2019-05",
                    "round": "A轮",
                    "amount": "€3M",
                    "investors": [
                        "European Climate Fund"
                    ]
                }
            ],
            "shareholders": [
                {
                    "name": "Climate Tech Ventures",
                    "ratio": "25%",
                    "type": "投资机构"
                },
                {
                    "name": "创始团队",
                    "ratio": "55%",
                    "type": "创始人"
                }
            ]
        }
    ],
    "webIntelligence": [
        {
            "id": 118,
            "date": "2026-09-11",
            "title": "服贸会观察：气候变化倒逼产业升级，商业气象服务驶入加速通道 - 能源界",
            "source": "能源界",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE45b3JOTTIzU043TnVnS2RGMUlzRzE5UC1FYW5oVHdLUWZ1TlRsWk5ob1VwZ2hraHhJUk52MEI3bnJkNVFlQUlXT2loUFRvZVhpZF9EV19LdF9KRGc?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiW0FVX3lxTE45b3JOTTIzU043TnVnS2RGMUlzRzE5UC1FYW5oVHdLUWZ1TlRsWk5ob1VwZ2hraHhJUk52MEI3bnJkNVFlQUlXT2loUFRvZVhpZF9EV19LdF9KRGc?oc=5\" target=\"_blank\">服贸会观",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 117,
            "date": "2026-09-14",
            "title": "北京入秋了吗？气象部门：还没 - 京报网",
            "source": "京报网",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE9hRG9GMHNRb2R5cnFqNk1RTW8zcWN5T1cwaGd2alpKV2NkaHNIZzBWSy1oYTlZWFVMTlBHN2JydjlUcVM0MTB0aXM4UXloUDVwTTRFQkwzVmJWM3gzSWI2MnFZSFF0R1NwU1QzcVNhNTh0Zw?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMickFVX3lxTE9hRG9GMHNRb2R5cnFqNk1RTW8zcWN5T1cwaGd2alpKV2NkaHNIZzBWSy1oYTlZWFVMTlBHN2JydjlUcVM0MTB0aXM4UXloUDVwTTRFQkwzVmJWM3gzSWI2MnFZSFF0R1NwU1QzcVNhNT",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 116,
            "date": "2026-09-10",
            "title": "全国秋收秋种气象服务启动 - 封面新闻",
            "source": "封面新闻",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE50YzVndTMwbmx4ZmVRRW1lYzNiZHVTVHZqbnN6U3E3QXBXZzNjckxNTkdidi1wVllsT01PNTQ3ZDRCa3pPcVRFNFhJbmVNRm5fNTdrNXFGOER2SzdrdGFDVW9DcUZNZXJ3TURwaXlmNVZZWU5YZnJn?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMid0FVX3lxTE50YzVndTMwbmx4ZmVRRW1lYzNiZHVTVHZqbnN6U3E3QXBXZzNjckxNTkdidi1wVllsT01PNTQ3ZDRCa3pPcVRFNFhJbmVNRm5fNTdrNXFGOER2SzdrdGFDVW9DcUZNZXJ3TURwaXlmNV",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 115,
            "date": "2026-09-11",
            "title": "墨迹天气转型产业气象 服贸会展现商业气象新动能 - 中国农业大学新闻网",
            "source": "中国农业大学新闻网",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE1fYmtTcXo2eGpHbTVMcjZSVDFtbjdSTXpaN1FFaHltYnZMcmV1S2htQkpjOEJBZGRFd19mNm9jblBUUWppbXdiNmlZd0t0dUo2UFBxbDJHYkRnVk9tSjhFMlJVZzhlOFpuLTc4cWQ0Nk92N2lRNjhv?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMid0FVX3lxTE1fYmtTcXo2eGpHbTVMcjZSVDFtbjdSTXpaN1FFaHltYnZMcmV1S2htQkpjOEJBZGRFd19mNm9jblBUUWppbXdiNmlZd0t0dUo2UFBxbDJHYkRnVk9tSjhFMlJVZzhlOFpuLTc4cWQ0Nk",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 114,
            "date": "2026-09-18",
            "title": "深度｜AI蚊情热力图，构筑科学驱蚊完整链路 - Sohu",
            "source": "Sohu",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxNdkpwamZRaUoxSzNpY0VRNXFVMFN1Nm1Id0l2UUZ2SE1NMFU4eWJITmdzMnVNOGNHNnVpZm41QjdvWjVjcWVIc2VacDJXRkZsQVVnQy1VdV9OS3Z5VXlUWFp2VHZQWFJ4ckgxMFJkVDZtYmRSQUlDZzRWSGlPYkc5b3JhY2dLOUVkTkYxcA?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMijAFBVV95cUxNdkpwamZRaUoxSzNpY0VRNXFVMFN1Nm1Id0l2UUZ2SE1NMFU4eWJITmdzMnVNOGNHNnVpZm41QjdvWjVjcWVIc2VacDJXRkZsQVVnQy1VdV9OS3Z5VXlUWFp2VHZQWFJ4ckgxMFJkVD",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 113,
            "date": "2026-09-17",
            "title": "贵州“十五五”气象发展规划出炉，明确2030年力争进入全国第一方阵 - 新浪财经",
            "source": "新浪财经",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE9OWV9GbDlpSnlLdTJENV94SmYwMEs3dGFIOGJyeGkydWpsdFg1X3BQWmVZanItMnFMWU16ZUgzVV8ydEhGTGhWNW1fOFYzdjRkRnh1NDdxUkc0ZWNBU1NCNXVWdTBfQ1psVjRhZks1dGpuVkFUQzVqeA?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMieEFVX3lxTE9OWV9GbDlpSnlLdTJENV94SmYwMEs3dGFIOGJyeGkydWpsdFg1X3BQWmVZanItMnFMWU16ZUgzVV8ydEhGTGhWNW1fOFYzdjRkRnh1NDdxUkc0ZWNBU1NCNXVWdTBfQ1psVjRhZks1dG",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 112,
            "date": "2026-09-16",
            "title": "观云五载 气象护航江海通丨广西气象服务保障平陆运河建成通航纪实 - thepaper.cn",
            "source": "thepaper.cn",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9mamw4Wld3b05henFvUXRROWxkay1sbEdPZnFZX3g2RjI3Tmd1X3BrS1VfdGJybkJvNDRDVDZnMU5qYUhtT0lvbENKVFAzZHVfMmZ0andJWFdMUHlwcVE?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiXkFVX3lxTE9mamw4Wld3b05henFvUXRROWxkay1sbEdPZnFZX3g2RjI3Tmd1X3BrS1VfdGJybkJvNDRDVDZnMU5qYUhtT0lvbENKVFAzZHVfMmZ0andJWFdMUHlwcVE?oc=5\" target=\"_blank\">",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 111,
            "date": "2026-09-14",
            "title": "鸡西市市长谢志强到市气象局调研预报预警、气象服务等工作 - 黑龙江省人民政府",
            "source": "黑龙江省人民政府",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5mY3dlZy0zX2g2YUNoYzdNb200bGRYZ0pCWmU2S1pnUHRRbEJYbjhIaGcyOVlyaUVVd3A3S1dvMDREbE5yNEhmUjVqUkJwWGppbXFfd2owajJXdjNFekpwMG9QNk9sRjVIVVVpSA?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMibEFVX3lxTE5mY3dlZy0zX2g2YUNoYzdNb200bGRYZ0pCWmU2S1pnUHRRbEJYbjhIaGcyOVlyaUVVd3A3S1dvMDREbE5yNEhmUjVqUkJwWGppbXFfd2owajJXdjNFekpwMG9QNk9sRjVIVVVpSA?oc=",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 110,
            "date": "2026-09-17",
            "title": "21专访丨中国气象局原副局长许小峰：厄尔尼诺叠加全球变暖 农业与能源如何应对？ - 21财经",
            "source": "21财经",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQRGFnUWdSczctdUhlOGJMZEl2OE1xVmEzSjUzck9LR3JGb2sxWnFJNmczQlNIU2w1dVhlbWxCaG4wN0RhZi1TdTdGZXAtNXJNbTE1WUdDMUdHRXNJV2pPTWpJLUJibmJycjZRZjdhTmxUZVdnZGF0S09RSENWd1NkNVI3UnlYdw?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMihgFBVV95cUxQRGFnUWdSczctdUhlOGJMZEl2OE1xVmEzSjUzck9LR3JGb2sxWnFJNmczQlNIU2w1dVhlbWxCaG4wN0RhZi1TdTdGZXAtNXJNbTE1WUdDMUdHRXNJV2pPTWpJLUJibmJycjZRZjdhTm",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 109,
            "date": "2026-09-17",
            "title": "专业天气预报、气象服务门户 - 天气网",
            "source": "天气网",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1GaWQ2SURESXh1N2NkSDZCTDZTZXBvRXQyazVkT3hXbllTRFN6RW8yWHRnTGkycWpkVlVxdkFfR3VFeWJqdmhQZ3ZNRGxURE84SmdEY2RYTTg1ZnVhWHp3?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiX0FVX3lxTE1GaWQ2SURESXh1N2NkSDZCTDZTZXBvRXQyazVkT3hXbllTRFN6RW8yWHRnTGkycWpkVlVxdkFfR3VFeWJqdmhQZ3ZNRGxURE84SmdEY2RYTTg1ZnVhWHp3?oc=5\" target=\"_blank\"",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 108,
            "date": "2026-06-08",
            "title": "iPhone天气显示杭州临安下周气温53℃、48℃，官方通报：系该品牌手机天气APP自身数据错误所致，依据权威预报6月15日最高气温预报实为32℃ - 极目新闻",
            "source": "极目新闻",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9sZ1prOTRzUFBMRk45MXlzNzBvV1c0aVZ2TF8zVnl1T1F4Qm5KMTllMUxQM19lWXhrM1JncVBDYUpKNENPUjdaY1FhV0pyY0lZU19IWGJtblZaamc?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiW0FVX3lxTE9sZ1prOTRzUFBMRk45MXlzNzBvV1c0aVZ2TF8zVnl1T1F4Qm5KMTllMUxQM19lWXhrM1JncVBDYUpKNENPUjdaY1FhV0pyY0lZU19IWGJtblZaamc?oc=5\" target=\"_blank\">iPho",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 107,
            "date": "2026-06-08",
            "title": "iPhone天气显示未来15天气温达53℃ 当地通报：系APP自身数据错误所致 - 驱动之家",
            "source": "驱动之家",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFA5NVcxcG5IWjMtX01zTU1VZkFsNWFodi1xbUp0bzVHWXNsZjhseXNEZEZnQkhyUXBnTHlCRDNTVHJub0dUVnJFXzlmWHc0V2pTV2czMElEbHU?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiWEFVX3lxTFA5NVcxcG5IWjMtX01zTU1VZkFsNWFodi1xbUp0bzVHWXNsZjhseXNEZEZnQkhyUXBnTHlCRDNTVHJub0dUVnJFXzlmWHc0V2pTV2czMElEbHU?oc=5\" target=\"_blank\">iPhone天气",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 106,
            "date": "1970-01-01",
            "title": "IBM 旗下 The Weather Company 蝉膺“全球预报最准的天气服务提供商”桂冠 - IBM",
            "source": "IBM",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5kMngtc1ZFYkdLM0hqM2JWRVJoZ0NLbjdLazdyWWlqUENpbkU0YmZxblRtX3JGQnA0ZWM0UXlyS1NhY2ZzVVFvYV90UHNsZ3hwb3FjclNsM1FEQzZGc3ZEbXR5S21SWmhF?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiaEFVX3lxTE5kMngtc1ZFYkdLM0hqM2JWRVJoZ0NLbjdLazdyWWlqUENpbkU0YmZxblRtX3JGQnA0ZWM0UXlyS1NhY2ZzVVFvYV90UHNsZ3hwb3FjclNsM1FEQzZGc3ZEbXR5S21SWmhF?oc=5\" tar",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 105,
            "date": "2026-07-20",
            "title": "全国气温都在飙，有人却靠天气半年赚千万，其中也有你的贡献 - 每日经济新闻",
            "source": "每日经济新闻",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE9zV1ZOVzRvUTFNZFFFb0ppYUlPNGQ5MkhnUWoxWU5SSnhJZkRKR3RyWVoyOXdPZkxFdHhYVXRWUkxsbEpvZ2F3N3p6T3l5ZkI1bGJZeGFsbU1ia0tQclVB?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiX0FVX3lxTE9zV1ZOVzRvUTFNZFFFb0ppYUlPNGQ5MkhnUWoxWU5SSnhJZkRKR3RyWVoyOXdPZkxFdHhYVXRWUkxsbEpvZ2F3N3p6T3l5ZkI1bGJZeGFsbU1ia0tQclVB?oc=5\" target=\"_blank\"",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 104,
            "date": "2026-06-08",
            "title": "杭州一地6月15日最高温接近50℃？气象局通报：系某品牌手机APP出现故障 - Sohu",
            "source": "Sohu",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBvMGpjWGFhX1VnZWVuQ0Q3bXotVmZoTjdmd1JJUTJwZktxaUtrcURHcHBSN09tVkNOVFh0cWQ4TnFzY3Ntakx2eGI0QkJ4R0dQOUE?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiUkFVX3lxTFBvMGpjWGFhX1VnZWVuQ0Q3bXotVmZoTjdmd1JJUTJwZktxaUtrcURHcHBSN09tVkNOVFh0cWQ4TnFzY3Ntakx2eGI0QkJ4R0dQOUE?oc=5\" target=\"_blank\">杭州一地6月15日最高温接近50",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 103,
            "date": "2026-06-05",
            "title": "院士访谈丨中国工程院院士张强：提升西部气象科研软实力 - 中国科技网",
            "source": "中国科技网",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1xWXRWQWMzYW5yUU4zR1B6bWlMdV9EQjhDVXFXVjhNdkh0TjB3cm1wS2VEZXIzV1Q3cEViQ2tESEN3LTR1WE1hZ3Y4ODRia1BhMVYxMm81NndGdWhDOXdQVUpwSENjbUxFNmU5R1RJcnM?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMicEFVX3lxTE1xWXRWQWMzYW5yUU4zR1B6bWlMdV9EQjhDVXFXVjhNdkh0TjB3cm1wS2VEZXIzV1Q3cEViQ2tESEN3LTR1WE1hZ3Y4ODRia1BhMVYxMm81NndGdWhDOXdQVUpwSENjbUxFNmU5R1RJcn",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 102,
            "date": "2026-03-02",
            "title": "天气预报APP墨迹天气在开学季受到学子和家长青睐 - 中华网",
            "source": "中华网",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTFB1a2c3bUlFcUdZU2tLbDNKU193OEgwN0d5ZkdBWl84UXFZMTFWV3RvSmt1UnltMUpLbS1uYmlacW9ITlB4MGJ5emJVVW1CcnhlMHVORUY1WDA1eG5kT2c?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiXkFVX3lxTFB1a2c3bUlFcUdZU2tLbDNKU193OEgwN0d5ZkdBWl84UXFZMTFWV3RvSmt1UnltMUpLbS1uYmlacW9ITlB4MGJ5emJVVW1CcnhlMHVORUY1WDA1eG5kT2c?oc=5\" target=\"_blank\">",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 101,
            "date": "2026-09-15",
            "title": "PP电子官方网址2026必读-系统推荐 - 体坛",
            "source": "体坛",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE9LWjg5ZDZ2anRhMHBPTGtad1EteWZuMGlYc29zQmZVOGJzdFdSOUVnblYtQjlFWFI4bzYxcG5Xc0JJS0FrdXdwXzlZYVM0UFg2?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiUEFVX3lxTE9LWjg5ZDZ2anRhMHBPTGtad1EteWZuMGlYc29zQmZVOGJzdFdSOUVnblYtQjlFWFI4bzYxcG5Xc0JJS0FrdXdwXzlZYVM0UFg2?oc=5\" target=\"_blank\">PP电子官方网址2026必读-系统推荐",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 100,
            "date": "2026-07-24",
            "title": "网传“宜春47℃”？假的，系某品牌手机APP预报错误 - 凤凰网江西",
            "source": "凤凰网江西",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiSkFVX3lxTE1PcTNXNTBkdkRsTFJvRG02a3lqNVFxNjIzRHhqMmMwZmtpNDdOWUFuS3FoOE9fQ1M1UVNMdWhLVFhhMnhOajlkZmRn?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiSkFVX3lxTE1PcTNXNTBkdkRsTFJvRG02a3lqNVFxNjIzRHhqMmMwZmtpNDdOWUFuS3FoOE9fQ1M1UVNMdWhLVFhhMnhOajlkZmRn?oc=5\" target=\"_blank\">网传“宜春47℃”？假的，系某品牌手机APP预报错误<",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 99,
            "date": "2026-09-17",
            "title": "苹果iOS 27版天气升级预报主页，让用户洞悉天气状况/降水/风力|视图|苹果公司|雨滴|截图_手机新浪网 - 新浪财经",
            "source": "新浪财经",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMi1gJBVV95cUxQcEZjRmUzbmNaeEIzS2puUWg3Y0JRS1oydk5xamRlUWgzSmU2OEpiNzMyR0dzQUlMYUduX3hTVmxuR2xubktsRHlNODBQblg3ZExMT21aM0ZRS29RNURXeDlZWlFMVkhMVzVQUlhqX2Y0bTRFWmViZ2M3YnZXaHRoVUdUNE4xUW41X1FsMG9EeXlWTGh5akxYTEhfczV2QVBjeEJOQWlYTl9WLV9ncnk1T1FGQWV4NUp4QUNXOUJCbWVpLU16dkh3OEpmQjNadUQ5ejVtVlN1S0ozOUJmbWV4Vmc2eF9FTUxfU0dSNi16YmM4YnlYNi1RSkptY1J1ckZiMmI0RGZ4bVpaMUdWbllvbkwxU3JxNTg2Q1pndlBQcTRNdDYzaHlzTm9HMUdPeDlodUFxNzdLSktPc2NfNkdyaml4ckxwQVVvUUhreFNIcnhvVW5vcHc?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMi1gJBVV95cUxQcEZjRmUzbmNaeEIzS2puUWg3Y0JRS1oydk5xamRlUWgzSmU2OEpiNzMyR0dzQUlMYUduX3hTVmxuR2xubktsRHlNODBQblg3ZExMT21aM0ZRS29RNURXeDlZWlFMVkhMVzVQUlhqX2",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 98,
            "date": "2018-01-24",
            "title": "彩云科技：天气恶劣打车贵，原来滴滴是依靠它来调价的 | 创业 - cn.technode.com",
            "source": "cn.technode.com",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE0tU042cTNGZmgzOWRseVpFMGZFRVZQOFZnQVE3dWkwUHF6ODRXWENfdUd1aTF0NzZkWTlHNnJZakJyNTg0NnlRYTFtZFRxWWtRNmhSdlRDUjFoajg?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiW0FVX3lxTE0tU042cTNGZmgzOWRseVpFMGZFRVZQOFZnQVE3dWkwUHF6ODRXWENfdUd1aTF0NzZkWTlHNnJZakJyNTg0NnlRYTFtZFRxWWtRNmhSdlRDUjFoajg?oc=5\" target=\"_blank\">彩云科技",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 97,
            "date": "2023-08-02",
            "title": "彩云天气 Pro iOS 版限时免费下载，即日起至 8 月 4 日 0 点截止 - Sohu",
            "source": "Sohu",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTFBQM29WUjhuU2pxM1pnd2lTb1JTckFSZEhQMmpZU1hPcXFOSm1nczJaLWNnYVM2SEhaa1VmTjd5eElvaks2X2lKM0h4NDdvWlps?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiUEFVX3lxTFBQM29WUjhuU2pxM1pnd2lTb1JTckFSZEhQMmpZU1hPcXFOSm1nczJaLWNnYVM2SEhaa1VmTjd5eElvaks2X2lKM0h4NDdvWlps?oc=5\" target=\"_blank\">彩云天气 Pro iOS 版限时免费下",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 96,
            "date": "2019-12-17",
            "title": "雪后清晨 北京现“胭脂粉”彩云 - 天气网",
            "source": "天气网",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE14RjViRTVZMTNFSWFaNzBaSUpjUUYxRUtoanB5cVZ5V1k4SGRpcDY5dy1LeEhUNHk0djdIUlo4MUZFazRHYzlzTGpaQVpaWDFVZC1Ec2xMWThCQTZocGlJU3ZTUTI0M1Vm?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiaEFVX3lxTE14RjViRTVZMTNFSWFaNzBaSUpjUUYxRUtoanB5cVZ5V1k4SGRpcDY5dy1LeEhUNHk0djdIUlo4MUZFazRHYzlzTGpaQVpaWDFVZC1Ec2xMWThCQTZocGlJU3ZTUTI0M1Vm?oc=5\" tar",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 95,
            "date": "2016-02-25",
            "title": "几分钟后哪条街会下雨？这个 App 都知道 | AppStory - 爱范儿",
            "source": "爱范儿",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiR0FVX3lxTE5qeGZhbGdZalZETVNhSzZqZTV6VHRiSFhzbG9yVmpSRldDN2liREZLYUhjMWRHaWZaZ05aWDZQaTVWenJRTGlV?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiR0FVX3lxTE5qeGZhbGdZalZETVNhSzZqZTV6VHRiSFhzbG9yVmpSRldDN2liREZLYUhjMWRHaWZaZ05aWDZQaTVWenJRTGlV?oc=5\" target=\"_blank\">几分钟后哪条街会下雨？这个 App 都知道 | AppStor",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 94,
            "date": "2026-06-24",
            "title": "高德百度腾讯连夜下架开屏广告，这次能撑多久？ - 36 Kr",
            "source": "36 Kr",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE0xUkJnM3JoU1ZRZTRUelNzbkZvb0gtMGdXZ3Q5aV9zUG5hbFpZd3NubUU1ZFhodDR2aDBaWXAxaHd5Q1JmeXlHYnhaNi1QUQ?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiTkFVX3lxTE0xUkJnM3JoU1ZRZTRUelNzbkZvb0gtMGdXZ3Q5aV9zUG5hbFpZd3NubUU1ZFhodDR2aDBaWXAxaHd5Q1JmeXlHYnhaNi1QUQ?oc=5\" target=\"_blank\">高德百度腾讯连夜下架开屏广告，这次能撑多久",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 93,
            "date": "2026-09-07",
            "title": "假如青藏高原一夜蒸发，你的家乡是变沙漠还是变江南？ - QQ News",
            "source": "QQ News",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFA4N1RMbFlCMmwwNUtOSTlSZWg5SHc5Rk41eXFTWTBqTUZYbDFUTFlBN0tSZE8xYUZlYTBSOW9VYUJKUjZvbWRlQXRPSU9GdDFyVzhhelp3?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiVkFVX3lxTFA4N1RMbFlCMmwwNUtOSTlSZWg5SHc5Rk41eXFTWTBqTUZYbDFUTFlBN0tSZE8xYUZlYTBSOW9VYUJKUjZvbWRlQXRPSU9GdDFyVzhhelp3?oc=5\" target=\"_blank\">假如青藏高原一夜蒸发，",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 92,
            "date": "2026-09-15",
            "title": "澳门最大线上娱乐网拟交易范德比尔特追库明加 - 体坛",
            "source": "体坛",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE5wRG5jMllUS3RGcnRIRmJ2alhIZW9oend1NWRqQzkydXFaNmxzUXJCR3pjV1R1WlRPTzlXRzRDeVZNZ3lCVEtTWDB3V2ZObF9HcEJoSQ?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiVEFVX3lxTE5wRG5jMllUS3RGcnRIRmJ2alhIZW9oend1NWRqQzkydXFaNmxzUXJCR3pjV1R1WlRPTzlXRzRDeVZNZ3lCVEtTWDB3V2ZObF9HcEJoSQ?oc=5\" target=\"_blank\">澳门最大线上娱乐网拟交易范",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 91,
            "date": "2026-09-15",
            "title": "3-0大胜！海德体育在线投注英超开门红，夺冠几无对手，兰帕德灰头土脸 - 体坛",
            "source": "体坛",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE5leHRtb0psUEtXTlNYQ0RaRE5XMWpucWpfX01IclI0VkN3NTNyMmdzdnRPaUFGTlBnTF9EYl9tQUIwYmVzTDhsYlZ3LVlWNXJjYko4?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiU0FVX3lxTE5leHRtb0psUEtXTlNYQ0RaRE5XMWpucWpfX01IclI0VkN3NTNyMmdzdnRPaUFGTlBnTF9EYl9tQUIwYmVzTDhsYlZ3LVlWNXJjYko4?oc=5\" target=\"_blank\">3-0大胜！海德体育在线投注英",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 90,
            "date": "2026-08-10",
            "title": "千问开放平台宣布上线 顺丰、自如、盈米基金、天鹅到家等首批接入 - 封面新闻",
            "source": "封面新闻",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5PUVdjUE1XMEZTeUMtTFlfZmZOMVNKUHVoSkJPcGF1cGxpOVJCQ19qYjRzUlRYRkNkYVV6VGdVc2FOMlBjYVdqM3JFY3Bmd0hoZlI2c1BJWG51aGEyLUNPTkN4bVl5TGMyWWpXbUdTYVE4RmtwUzc0?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMid0FVX3lxTE5PUVdjUE1XMEZTeUMtTFlfZmZOMVNKUHVoSkJPcGF1cGxpOVJCQ19qYjRzUlRYRkNkYVV6VGdVc2FOMlBjYVdqM3JFY3Bmd0hoZlI2c1BJWG51aGEyLUNPTkN4bVl5TGMyWWpXbUdTYV",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        },
        {
            "id": 89,
            "date": "2026-09-15",
            "title": "不能玩Steam了！次世代平博88平台或放弃原生Steam支持 - 体坛",
            "source": "体坛",
            "type": "News",
            "company": "行业动态",
            "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE42NXVtNVV5UEhQckwwQ0dqdHR6bjVnRTg1ZUtISWhyNE5QZlFtSzNUWEo5dHFPaFQ2cmlhcW1KNUpuWk5FbEdiaHhYMUZHcWVfOXc?oc=5",
            "summary": "<a href=\"https://news.google.com/rss/articles/CBMiUkFVX3lxTE42NXVtNVV5UEhQckwwQ0dqdHR6bjVnRTg1ZUtISWhyNE5QZlFtSzNUWEo5dHFPaFQ2cmlhcW1KNUpuWk5FbEdiaHhYMUZHcWVfOXc?oc=5\" target=\"_blank\">不能玩Steam了！次世代平博8",
            "sentiment": "中性",
            "dataSource": "Web Crawler"
        }
    ]
};
