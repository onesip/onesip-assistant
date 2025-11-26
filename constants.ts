import { Product, WikiItem, Announcement } from './types';

export const INITIAL_MENU_DATA: Product[] = [
    // Winter Specials
    { id: 'w1', status: 'new', nameCN: '小吊梨鲜奶茶', nameEN: 'Snow Pear Milk Tea', price: 5.0, type: 'milk', subType: 'healthy', tags: ['hot', 'cold'], keywords: '润肺,清甜,养生,雪梨颗粒,枸杞,暖胃', descCN: '小吊梨，马蹄爆爆珠，茉莉绿茶，牛奶，调和乳', descEN: 'Pear, water chestnut boba, jasmine tea, milk, cream base', sugarGuideCN: '🍐 甜度不可选。', sugarGuideEN: '🍐 Fixed Sugar.' },
    { id: 'w2', status: 'new', nameCN: '红枣桂圆奶茶', nameEN: 'Longan Jujube Milk Tea', price: 5.0, type: 'milk', subType: 'healthy', tags: ['hot', 'cold'], keywords: '补血,养颜,红枣,桂圆,冬季限定', descCN: '红枣桂圆酱，珍珠，蜜香红茶，牛奶，调和乳', descEN: 'Jujube jam, pearls, black tea, milk, cream base', sugarGuideCN: '🍬 甜度不可选。', sugarGuideEN: '🍬 Fixed Sugar.' },
    { id: 'w3', status: 'new', nameCN: '姜心比心', nameEN: 'Ginger Brown Sugar Milk Tea', price: 5.0, type: 'milk', subType: 'healthy', tags: ['hot', 'cold'], keywords: '驱寒,暖宫,黑糖,姜汁,经期友好', descCN: '黑糖姜母茶，蜜香红茶，牛奶，调和乳，珍珠', descEN: 'Ginger syrup, black tea, milk, pearls, cream base', sugarGuideCN: '🔥 稍甜，平时三分糖，选无糖；平时七分糖，可以选择半糖。', sugarGuideEN: '🔥 Slightly sweet. Recommend 0% or 50%.' },
    { id: 'w5', status: 'new', nameCN: '雪梨银耳茶', nameEN: 'Snow Pear Tremella Jasmine', price: 5.0, type: 'milk', subType: 'healthy', tags: ['hot', 'cold'], keywords: '胶原蛋白,银耳,清爽,滋润,下火', descCN: '小吊梨，银耳，茶冻，四季春乌龙', descEN: 'Pear, tremella, tea jelly, oolong', sugarGuideCN: '🍐 稍甜，平时三分糖，选无糖；平时七分糖，可以选择半糖。', sugarGuideEN: '🍐 Slightly sweet. Recommend 0% or 50%.' },
    
    // Coffee
    { id: 'cf1', status: 'active', nameCN: '陨石咖啡(珍珠)', nameEN: 'Brown Sugar Coffee', price: 5.0, type: 'coffee', subType: 'rich', tags: ['cold', 'hot'], keywords: '黑糖挂壁,珍珠Q弹,层次感,提神', descCN: '咖啡，黑糖糖浆，珍珠，牛奶，调和乳', descEN: 'Coffee, brown sugar, pearls, milk, cream base', sugarGuideCN: '🍯 稍甜，平时三分糖，选无糖；平时七分糖，可以选择半糖。', sugarGuideEN: '🍯 Slightly sweet. Recommend 0% or 50%.' },
    { id: 'cf2', status: 'active', nameCN: '玫瑰拿铁', nameEN: 'Rose Macchiato', price: 5.0, type: 'coffee', subType: 'rich', tags: ['cold', 'hot'], keywords: '浪漫,玫瑰花香,拿铁,丝滑,粉色', descCN: '玫瑰露，火龙果水，牛奶，调和乳，咖啡', descEN: 'Rose syrup, dragonfruit water, milk, coffee, cream base', sugarGuideCN: '🌹 稍甜，平时三分糖，选无糖；平时七分糖，可以选择半糖。', sugarGuideEN: '🌹 Slightly sweet. Recommend 0% or 50%.' },
    { id: 'cf3', status: 'active', nameCN: '生椰拿铁', nameEN: 'Coconut Coffee', price: 4.8, type: 'coffee', subType: 'plant', tags: ['cold', 'hot'], keywords: '经典,融合咖啡,提神,椰香浓郁,顺滑', descCN: '椰奶调和乳，咖啡，牛奶', descEN: 'Coconut milk, coffee, milk', sugarGuideCN: '🥥 偏甜，平时三/五分糖，选无糖；平时七分糖，可以选择半糖。', sugarGuideEN: '🥥 Sweet. Recommend 0%.' },
    { id: 'cf4', status: 'active', nameCN: '荔枝冰美式', nameEN: 'Lychee Americano', price: 4.5, type: 'coffee', subType: 'fruity', tags: ['cold'], keywords: '清爽,荔枝果香,解腻,低卡,花香', descCN: '荔枝果浆，茉莉绿茶，咖啡', descEN: 'Lychee syrup, jasmine tea, coffee', sugarGuideCN: '🍬 茶底含少量糖，可以酌情减少糖量。', sugarGuideEN: '🍬 Contains some sugar. Can adjust.' },
    
    // Matcha
    { id: 'm1', status: 'active', nameCN: '抹茶云顶', nameEN: 'Matcha Cloud', price: 5.0, type: 'matcha', subType: 'rich', tags: ['hot', 'cold'], keywords: '椰香,庆典抹茶,茉莉花香,分层', descCN: '抹茶云顶，茉莉绿茶，牛奶，调和乳', descEN: 'Matcha foam, jasmine tea, milk, cream base', sugarGuideCN: '🍵 抹茶奶盖含糖，下面奶茶不含糖，酌情选糖。', sugarGuideEN: '🍵 Foam is sweet, tea is unsweetened.' },
    { id: 'm2', status: 'active', nameCN: '生椰抹茶', nameEN: 'Matcha Coconut', price: 5.0, type: 'matcha', subType: 'plant', tags: ['hot', 'cold'], keywords: '椰子,清新,千目抹茶,顺滑', descCN: '椰奶调和乳，抹茶，牛奶', descEN: 'Coconut milk, matcha, milk', sugarGuideCN: '🥥 偏甜，平时三/五分糖，选无糖。', sugarGuideEN: '🥥 Sweet. Recommend 0%.' },
    { id: 'm3', status: 'active', nameCN: '抹茶森林', nameEN: 'Matcha Strawberry', price: 5.0, type: 'matcha', subType: 'fruity', tags: ['hot', 'cold'], keywords: '草莓,酸甜,少女心,颜值担当', descCN: '草莓厚酱，抹茶，牛奶，调和乳，椰果', descEN: 'Strawberry jam, matcha, milk, coconut jelly', sugarGuideCN: '🍓 底部草莓酱含糖，酌情减少糖量。', sugarGuideEN: '🍓 Jam is sweet. Adjust sugar level.' },
    
    // Fruit
    { id: 'ft1', status: 'new', nameCN: '山茶花甜橙', nameEN: 'Orange Camellia', price: 4.5, type: 'fruit', subType: 'sour', tags: ['hot', 'cold'], keywords: '山茶花,橙子,清香,高级感,维C', descCN: '山茶花乌龙，甜橙厚浆，甜橙片，椰果', descEN: 'Camellia oolong, orange jam, coconut jelly', sugarGuideCN: '🍊 稍甜，平时三分糖，选无糖。', sugarGuideEN: '🍊 Slightly sweet. Recommend 0% or 50%.' },
    { id: 'ft2', status: 'active', nameCN: '蜜桃四季春', nameEN: 'Peach Oolong', price: 4.5, type: 'fruit', subType: 'sweet', tags: ['cold'], keywords: '桃子果肉,四季春乌龙,清爽,解腻', descCN: '四季春乌龙，蜜桃厚浆，椰果，桃子颗粒', descEN: 'Oolong, peach jam, coconut jelly, peach pulp', sugarGuideCN: '🍑 稍甜，平时三分糖，选无糖。', sugarGuideEN: '🍑 Slightly sweet. Recommend 0% or 50%.' },
    { id: 'ft5', status: 'active', nameCN: '百香果双响炮', nameEN: 'Passionfruit Jasmine', price: 4.5, type: 'fruit', subType: 'sour', tags: ['cold'], keywords: '百香果,酸甜,双小料,开胃', descCN: '百香果果粒，百香果果浆，茉莉绿茶，椰果，珍珠', descEN: 'Passionfruit pulp, jasmine tea, coconut jelly, pearls', sugarGuideCN: '🍋 偏甜，建议无糖。', sugarGuideEN: '🍋 Sweet. Recommend 0%.' },

    // Milk Tea
    { id: 'fm1', status: 'active', nameCN: '茉莉鲜奶茶', nameEN: 'Jasmine Milk Tea', price: 3.9, type: 'milk', subType: 'classic', tags: ['hot', 'cold'], keywords: '茉莉花香,鲜奶,清爽', descCN: '茉莉绿茶，牛奶，调和乳，珍珠', descEN: 'Jasmine tea, milk, pearls', sugarGuideCN: '🌿 无糖不含糖，建议三分糖。', sugarGuideEN: '🌿 Unsweetened base. Recommend 30%.' },
    { id: 'fm6', status: 'active', nameCN: '黑糖啵啵鲜奶', nameEN: 'Brown Sugar Fresh Milk', price: 4.5, type: 'milk', subType: 'rich', tags: ['hot', 'cold', 'no-caffeine'], keywords: '黑糖珍珠,鲜奶,挂壁,无咖啡因', descCN: '黑糖糖浆，珍珠，牛奶，调和乳', descEN: 'Brown sugar, pearls, milk', sugarGuideCN: '🍯 偏甜，建议无糖。', sugarGuideEN: '🍯 Sweet. Recommend 0%.' },
    { id: 'fm8', status: 'active', nameCN: '经典珍珠奶茶', nameEN: 'Classic Bubble Milk Tea', price: 3.9, type: 'milk', subType: 'classic', tags: ['hot', 'cold'], keywords: '珍珠奶茶,经典,Q弹', descCN: '珍珠，蜜香红茶，牛奶，调和乳', descEN: 'Pearls, black tea, milk', sugarGuideCN: '🧋 无糖不含糖，建议三分糖。', sugarGuideEN: '🧋 Unsweetened base. Recommend 30%.' },
];

export const INITIAL_WIKI_DATA: WikiItem[] = [
    { id: 'i_fresh_milk', nameCN: '鲜奶', nameEN: 'Fresh Milk', descCN: '新鲜牛乳。', descEN: 'Fresh cow milk.' },
    { id: 'i_cream_blend', nameCN: '调和乳', nameEN: 'Cream Base', descCN: '提升饮品醇厚度和顺滑感。', descEN: 'Enhances richness.' },
    { id: 'i_oat', nameCN: '燕麦奶', nameEN: 'Oatmilk', descCN: '植物基底，口感顺滑。', descEN: 'Plant-based oat milk.' },
    { id: 'i_boba', nameCN: '珍珠', nameEN: 'Pearls', descCN: 'Q弹木薯珍珠。', descEN: 'Tapioca pearls.' },
    { id: 'i_matcha', nameCN: '千目抹茶', nameEN: 'Matcha', descCN: '高山茶园低温研磨。', descEN: 'Ceremonial grade matcha.' },
    { id: 'i_jasmine', nameCN: '茉莉绿茶', nameEN: 'Jasmine Tea', descCN: '茉莉花窨制绿茶。', descEN: 'Jasmine green tea.' },
];

export const INITIAL_ANNOUNCEMENT_DATA: Announcement = {
    enabled: true,
    titleCN: "黑五特惠",
    titleEN: "BLACK FRIDAY",
    date: "11.25 - 12.07",
    mainPromoCN: "买 2 送 1",
    mainPromoEN: "BUY 2 GET 1 FREE",
    subPromoCN: "第 3 杯我们请客！",
    subPromoEN: "The 3rd drink is on us!",
    includedCN: "参与系列",
    includedEN: "INCLUDED SERIES",
    itemsCN: "🍐 小吊梨鲜奶茶\n☕ 红枣桂圆奶茶\n🍊 山茶花甜橙\n🔥 姜心比心\n🍊 甜橙美式\n🍐 雪梨银耳茶",
    itemsEN: "🍐 Snow Pear Milk Tea\n☕ Longan Jujube Milk Tea\n🍊 Orange Camellia\n🔥 Ginger Brown Sugar Milk Tea\n🍊 Orange Americano\n🔥 Snow Pear Tremella Jasmine",
    rulesCN: "怎么玩: 点以上任意 2 杯，即可「抽签」赢取第 3 杯免费饮品！",
    rulesEN: "How to Play: Buy 2 drinks from the list, draw a lucky stick to win the 3rd one from a specific pool!",
    disclaimerCN: "* 活动仅限黑五期间有效。\n* 赠饮不可与其他优惠同享。",
    disclaimerEN: "* Offer valid during promotion period.\n* Cannot be combined with other offers."
};

export const UI_TEXT = {
    cn: {
        title: "ONESIP ROTTERDAM", subtitle: "Tea it, sip it and love it", standbySlogan: "吸吸猫给你寻找最满足的一口",
        welcome: "喵呜~ 欢迎来到 OneSip 🌿\n我是店长 Sip-Sip (吸吸猫)！\n\n点击下方【✨帮我推荐】\n我会帮你找到最适合你的那一杯！",
        btnRecommend: "帮我推荐", btnMenu: "浏览菜单", btnNew: "🎁 黑五特惠", btnWiki: "原料百科",
        staffPortal: "员工后台", staffHint: "请输入访问密码", hot: "暖暖", cold: "冰爽", sugarLabel: "口味指南：", detailIngred: "配料 & 描述",
        wikiTitle: "📖 原料博物馆", wikiSub: "点击原料，查看包含它的饮品",
        detailTitle: "饮品档案", detailBestFor: "👤 适合谁喝", detailKnow: "📝 原料小知识", detailBack: "返回", detailOrder: "👉 就要这杯",
        disclaimer: "⚠️ 此APP仅辅助选品，下单请移步 Kiosk 或小程序", btnOrder: "去小程序点单 (OrderPin)",
        quiz: { 
            q1: "收到！Sip-Sip 先问你一个问题 🐾\n现在的天气，你想喝暖的还是冰的？", 
            reply_hot: "想喝点热的 🔥", reply_cold: "想喝点冰的 ❄️", 
            q2: "了解！你今天想喝哪一类？", 
            result_intro: "喵！找到啦！根据你的口味，Sip-Sip 强推这两杯：",
            q3_milk: "奶茶想喝哪种风格的？", a3_milk_healthy: "养生暖心 (红枣/梨/姜)", a3_milk_classic: "经典原叶 (茉莉/乌龙)", a3_milk_rich: "浓郁厚乳 (黑糖/咸奶盖)", a3_milk_plant: "植物基 (燕麦奶/无乳糖)",
            q3_fruit: "果茶喜欢什么口味？", a3_fruit_sweet: "偏甜 (葡萄/芒果)", a3_fruit_sour: "偏酸爽口 (百香果/橙)",
            q3_matcha: "抹茶想怎么喝？", a3_matcha_rich: "特调浓郁 (奶盖/黑糖)", a3_matcha_plant: "植物基 (配椰奶/燕麦)", a3_matcha_classic: "经典纯粹 (拿铁/焙茶)", a3_matcha_fruity: "清爽果味 (配草莓)",
            q3_coffee: "咖啡想喝哪种？", a3_coffee_rich: "特调浓郁 (黑糖/玫瑰)", a3_coffee_fruity: "清爽果咖 (荔枝/橙)", a3_coffee_plant: "生椰拿铁 (植物基)"
        },
        nlp: { staffPrompt: "检测到员工模式请求。请输入密码喵。🔒", new: "这些是本季重磅新品！🎁 圣诞限定不要错过：", default: "喵呜？Sip-Sip 好像没听懂... 🤔\n你可以点下面的按钮让我推荐 👇", found: "找到啦！你是想了解这个吗？👇" }
    },
    en: {
        title: "ONESIP ROTTERDAM", subtitle: "Tea it, sip it and love it", standbySlogan: "Let Sip-Sip find your perfect sip",
        welcome: "Meow! Welcome to OneSip 🌿\nI'm Sip-Sip, your assistant cat!\n\nTap [✨ Recommend] below,\nand I'll find your perfect drink!",
        btnRecommend: "Recommend", btnMenu: "Full Menu", btnNew: "🎁 BF Deal", btnWiki: "Wiki",
        staffPortal: "Staff Portal", staffHint: "Enter Access Code", hot: "Hot", cold: "Cold", price: "Price", reviewLabel: "💬 Review:", sugarLabel: "Taste Guide:",
        wikiTitle: "📖 Ingredient Wiki", wikiSub: "Know what's inside your cup", wikiSuitable: "👤 Best for:", wikiIngred: "🧪 Ingredients:", wikiIntro: "📝 Details:", wikiOrder: "👉 Order This",
        detailTitle: "Drink Profile", detailBestFor: "👤 Best For", detailIngred: "🏆 Ingredients Inside", detailKnow: "📝 Good to Know", detailBack: "Back", detailOrder: "👉 Order This",
        disclaimer: "⚠️ App is for selection only. Please order at Kiosk or Mini-program", btnOrder: "Order on Mini-Program",
        quiz: { 
            q1: "Sure! Quick quiz first 🐾\nDo you prefer something Hot or Cold?", 
            reply_hot: "Something Hot 🔥", reply_cold: "Something Cold ❄️", 
            q2: "Got it. What category are you in the mood for?", 
            result_intro: "Meow! Based on your choices, I recommend:",
            q3_milk: "What style of Milk Tea?", a3_milk_healthy: "Healthy & Warm", a3_milk_classic: "Classic Tea Base", a3_milk_rich: "Rich & Creamy", a3_milk_plant: "Plant-Based (Oat)",
            q3_fruit: "Sweet or Sour?", a3_fruit_sweet: "Sweet (Grape/Mango)", a3_fruit_sour: "Refreshing/Sour (Citrus)",
            q3_matcha: "How do you like your Matcha?", a3_matcha_rich: "Rich (Foam/Brown Sugar)", a3_matcha_plant: "Plant-Based (Coconut/Oat)", a3_matcha_classic: "Classic Latte", a3_matcha_fruity: "Fruity (Strawberry)",
            q3_coffee: "Coffee style?", a3_coffee_rich: "Rich Fusion", a3_coffee_fruity: "Fruity Americano", a3_coffee_plant: "Coconut Latte"
        },
        nlp: { staffPrompt: "Staff mode requested. Please enter passcode. 🔒", new: "Check out our seasonal specials! 🎁 Don't miss the Xmas limited:", default: "Meow? I didn't quite catch that... 🤔\nTry tapping the buttons below 👇", found: "Found it! Is this what you're looking for? 👇" }
    }
};