

import { Product, WikiItem, Announcement } from './types';

export const INITIAL_MENU_DATA: Product[] = [
    // --- Winter Specials (Healthy) ---
    { id: 'w1', status: 'new', nameCN: '小吊梨鲜奶茶', nameEN: 'Snow Pear Milk Tea', price: 5.0, type: 'milk', subType: 'healthy', tags: ['hot', 'cold'], keywords: '润肺,清甜,养生,雪梨颗粒,枸杞,暖胃', descCN: '小吊梨，马蹄爆爆珠，茉莉绿茶，牛奶，调和乳', descEN: 'Pear, water chestnut boba, jasmine tea, milk, cream base', sugarGuideCN: '🍐 甜度不可选。', sugarGuideEN: '🍐 Fixed Sugar.' },
    { id: 'w2', status: 'new', nameCN: '红枣桂圆奶茶', nameEN: 'Longan Jujube Milk Tea', price: 5.0, type: 'milk', subType: 'healthy', tags: ['hot', 'cold'], keywords: '补血,养颜,红枣,桂圆,冬季限定', descCN: '红枣桂圆酱，珍珠，蜜香红茶，牛奶，调和乳', descEN: 'Jujube jam, pearls, black tea, milk, cream base', sugarGuideCN: '🍬 甜度不可选。', sugarGuideEN: '🍬 Fixed Sugar.' },
    { id: 'w3', status: 'new', nameCN: '姜心比心', nameEN: 'Ginger Brown Sugar Milk Tea', price: 5.0, type: 'milk', subType: 'healthy', tags: ['hot', 'cold'], keywords: '驱寒,暖宫,黑糖,姜汁,经期友好', descCN: '黑糖姜母茶，蜜香红茶，牛奶，调和乳，珍珠', descEN: 'Ginger syrup, black tea, milk, pearls, cream base', sugarGuideCN: '🔥 稍甜，平时三分糖，选无糖；平时七分糖，可以选择半糖。', sugarGuideEN: '🔥 Slightly sweet. Recommend 0% or 50%.' },
    { id: 'w5', status: 'new', nameCN: '雪梨银耳茶', nameEN: 'Snow Pear Tremella Jasmine', price: 5.0, type: 'milk', subType: 'healthy', tags: ['hot', 'cold'], keywords: '胶原蛋白,银耳,清爽,滋润,下火', descCN: '小吊梨，银耳，茶冻，四季春乌龙', descEN: 'Pear, tremella, tea jelly, oolong', sugarGuideCN: '🍐 稍甜，平时三分糖，选无糖；平时七分糖，可以选择半糖。', sugarGuideEN: '🍐 Slightly sweet. Recommend 0% or 50%.' },
    { id: 'w_off1', status: 'inactive', nameCN: '雪梨白月光', nameEN: 'Snow Pear Oolong', price: 5.0, type: 'milk', subType: 'healthy', tags: ['hot', 'cold'], keywords: '雪梨,椰奶', descCN: '雪梨颗粒酱，椰奶调和乳，茉莉绿茶，马蹄爆爆珠，银耳', descEN: 'Pear jam, coconut milk, jasmine tea, boba, tremella', sugarGuideCN: '稍甜，平时三分糖，选无糖。', sugarGuideEN: 'Slightly sweet.' },

    // --- Coffee ---
    { id: 'cf1', status: 'active', nameCN: '陨石咖啡(珍珠)', nameEN: 'Brown Sugar Coffee', price: 5.0, type: 'coffee', subType: 'rich', tags: ['cold', 'hot'], keywords: '黑糖挂壁,珍珠Q弹,层次感,提神', descCN: '咖啡，黑糖糖浆，珍珠，牛奶，调和乳', descEN: 'Coffee, brown sugar, pearls, milk, cream base', sugarGuideCN: '🍯 稍甜，平时三分糖，选无糖；平时七分糖，可以选择半糖。', sugarGuideEN: '🍯 Slightly sweet. Recommend 0% or 50%.' },
    { id: 'cf2', status: 'active', nameCN: '玫瑰拿铁', nameEN: 'Rose Macchiato', price: 5.0, type: 'coffee', subType: 'rich', tags: ['cold', 'hot'], keywords: '浪漫,玫瑰花香,拿铁,丝滑,粉色', descCN: '玫瑰露，火龙果水，牛奶，调和乳，咖啡', descEN: 'Rose syrup, dragonfruit water, milk, coffee, cream base', sugarGuideCN: '🌹 稍甜，平时三分糖，选无糖；平时七分糖，可以选择半糖。', sugarGuideEN: '🌹 Slightly sweet. Recommend 0% or 50%.' },
    { id: 'cf3', status: 'active', nameCN: '生椰拿铁', nameEN: 'Coconut Coffee', price: 4.8, type: 'coffee', subType: 'plant', tags: ['cold', 'hot'], keywords: '经典,融合咖啡,提神,椰香浓郁,顺滑', descCN: '椰奶调和乳，咖啡，牛奶', descEN: 'Coconut milk, coffee, milk', sugarGuideCN: '🥥 偏甜，平时三/五分糖，选无糖；平时七分糖，可以选择半糖。', sugarGuideEN: '🥥 Sweet. Recommend 0%.' },
    { id: 'cf4', status: 'active', nameCN: '荔枝冰美式', nameEN: 'Lychee Americano', price: 4.5, type: 'coffee', subType: 'fruity', tags: ['cold'], keywords: '清爽,荔枝果香,解腻,低卡,花香', descCN: '荔枝果浆，茉莉绿茶，咖啡', descEN: 'Lychee syrup, jasmine tea, coffee', sugarGuideCN: '🍬 茶底含少量糖，可以酌情减少糖量。', sugarGuideEN: '🍬 Contains some sugar. Can adjust.' },
    { id: 'cf5', status: 'new', nameCN: '甜橙冰美式', nameEN: 'Orange Americano', price: 4.5, type: 'coffee', subType: 'fruity', tags: ['cold', 'hot'], keywords: '维C,橙香,果咖,活力,清新', descCN: '甜橙厚浆，茉莉绿茶，咖啡，甜橙片', descEN: 'Orange jam, jasmine tea, coffee, orange slice', sugarGuideCN: '🍊 稍甜，平时三分糖，选无糖；平时七分糖，可以选择半糖。', sugarGuideEN: '🍊 Slightly sweet. Recommend 0% or 50%.' },
    { id: 'cf6', status: 'new', nameCN: '打勾娜拿铁', nameEN: 'Dalgona Latte', price: 5.0, type: 'coffee', subType: 'rich', tags: ['cold', 'hot'], keywords: '网红爆款,焦糖颗粒,绵密,甜蜜,鱿鱼游戏', descCN: '打勾娜糖块，烤奶糖浆，牛奶，调和乳，咖啡', descEN: 'Dalgona candy, roasted syrup, milk, coffee', sugarGuideCN: '🔥 稍甜，平时三分糖，选无糖；平时七分糖，可以选择半糖。', sugarGuideEN: '🔥 Slightly sweet. Recommend 0% or 50%.' },
    { id: 'cf_off1', status: 'inactive', nameCN: '蜜桃冰美式', nameEN: 'Peach Americano', price: 4.5, type: 'coffee', subType: 'fruity', tags: ['cold'], keywords: '蜜桃甜香', descCN: '蜜桃厚浆，茉莉绿茶，咖啡，桃子颗粒', descEN: 'Peach jam, jasmine tea, coffee', sugarGuideCN: '茶底含少量糖', sugarGuideEN: 'Contains sugar' },
    
    // --- Matcha ---
    { id: 'm1', status: 'active', nameCN: '抹茶云顶', nameEN: 'Matcha Cloud', price: 5.0, type: 'matcha', subType: 'rich', tags: ['hot', 'cold'], keywords: '椰香,庆典抹茶,茉莉花香,分层', descCN: '抹茶云顶，茉莉绿茶，牛奶，调和乳', descEN: 'Matcha foam, jasmine tea, milk, cream base', sugarGuideCN: '🍵 抹茶奶盖含糖，下面奶茶不含糖，酌情选糖。', sugarGuideEN: '🍵 Foam is sweet, tea is unsweetened.' },
    { id: 'm2', status: 'active', nameCN: '生椰抹茶', nameEN: 'Matcha Coconut', price: 5.0, type: 'matcha', subType: 'plant', tags: ['hot', 'cold'], keywords: '椰子,清新,千目抹茶,顺滑', descCN: '椰奶调和乳，抹茶，牛奶', descEN: 'Coconut milk, matcha, milk', sugarGuideCN: '🥥 偏甜，平时三/五分糖，选无糖。', sugarGuideEN: '🥥 Sweet. Recommend 0%.' },
    { id: 'm3', status: 'active', nameCN: '抹茶森林', nameEN: 'Matcha Strawberry', price: 5.0, type: 'matcha', subType: 'fruity', tags: ['hot', 'cold'], keywords: '草莓,酸甜,少女心,颜值担当', descCN: '草莓厚酱，抹茶，牛奶，调和乳，椰果', descEN: 'Strawberry jam, matcha, milk, coconut jelly', sugarGuideCN: '🍓 底部草莓酱含糖，酌情减少糖量。', sugarGuideEN: '🍓 Jam is sweet. Adjust sugar level.' },
    { id: 'm4', status: 'new', nameCN: '日式烤奶', nameEN: 'Caramel Hojicha Latte', price: 5.0, type: 'matcha', subType: 'rich', tags: ['hot', 'cold'], keywords: '焙茶,焦香,大麦香气,焦糖风味', descCN: '培茶，烤奶糖浆，牛奶，调和乳', descEN: 'Hojicha, roasted syrup, milk, cream base', sugarGuideCN: '🔥 茶底含糖，可以酌情减少糖量。', sugarGuideEN: '🔥 Base contains sugar.' },
    { id: 'm5', status: 'active', nameCN: '黑糖抹茶', nameEN: 'Brown Sugar Matcha', price: 5.0, type: 'matcha', subType: 'rich', tags: ['hot', 'cold'], keywords: '黑糖挂壁,甜蜜,经典搭配,浓郁', descCN: '黑糖糖浆，抹茶，珍珠，牛奶，调和乳', descEN: 'Brown sugar, matcha, pearls, milk', sugarGuideCN: '🍯 黑糖含糖，偏甜，建议无糖。', sugarGuideEN: '🍯 Sweet. Recommend 0%.' },
    { id: 'm6', status: 'new', nameCN: '焙茶拿铁', nameEN: 'Hojicha Latte', price: 5.0, type: 'matcha', subType: 'classic', tags: ['hot', 'cold'], keywords: '低咖啡因,烤大麦香,温润,养胃', descCN: '培茶，牛奶，调和乳', descEN: 'Hojicha, milk', sugarGuideCN: '🍂 无糖不含任何糖，建议三分糖。', sugarGuideEN: '🍂 Unsweetened base. Recommend 30%.' },
    { id: 'm7', status: 'active', nameCN: '抹茶拿铁', nameEN: 'Matcha Latte', price: 5.0, type: 'matcha', subType: 'classic', tags: ['hot', 'cold'], keywords: '经典,庆典抹茶,丝滑,鲜奶', descCN: '抹茶，牛奶，调和乳', descEN: 'Matcha, milk', sugarGuideCN: '🍵 无糖不含任何糖，建议三分糖。', sugarGuideEN: '🍵 Unsweetened base. Recommend 30%.' },
    { id: 'm8', status: 'active', nameCN: '抹茶茉莉', nameEN: 'Matcha Jasmine', price: 5.0, type: 'matcha', subType: 'classic', tags: ['hot', 'cold'], keywords: '花香,茶香浓郁,清新,双重口感', descCN: '抹茶，茉莉绿茶，牛奶，调和乳', descEN: 'Matcha, jasmine tea, milk', sugarGuideCN: '🌿 无糖不含任何糖，建议三分糖。', sugarGuideEN: '🌿 Unsweetened base. Recommend 30%.' },
    { id: 'm9', status: 'active', nameCN: '绿野仙踪', nameEN: 'Wonderful Wizard', price: 5.5, type: 'matcha', subType: 'rich', tags: ['hot', 'cold'], keywords: '咖啡,抹茶,分层,浓郁', descCN: '抹茶云顶，咖啡，牛奶，调和乳', descEN: 'Matcha foam, coffee, milk', sugarGuideCN: '🍵 奶盖含糖，建议无糖。', sugarGuideEN: '🍵 Foam is sweet.' },

    // --- Fruit Tea ---
    { id: 'ft1', status: 'new', nameCN: '山茶花甜橙', nameEN: 'Orange Camellia', price: 4.5, type: 'fruit', subType: 'sour', tags: ['hot', 'cold'], keywords: '山茶花,橙子,清香,高级感,维C', descCN: '山茶花乌龙，甜橙厚浆，甜橙片，椰果', descEN: 'Camellia oolong, orange jam, coconut jelly', sugarGuideCN: '🍊 稍甜，平时三分糖，选无糖。', sugarGuideEN: '🍊 Slightly sweet. Recommend 0% or 50%.' },
    { id: 'ft2', status: 'active', nameCN: '蜜桃四季春', nameEN: 'Peach Oolong', price: 4.5, type: 'fruit', subType: 'sweet', tags: ['cold'], keywords: '桃子果肉,四季春乌龙,清爽,解腻', descCN: '四季春乌龙，蜜桃厚浆，椰果，桃子颗粒', descEN: 'Oolong, peach jam, coconut jelly, peach pulp', sugarGuideCN: '🍑 稍甜，平时三分糖，选无糖。', sugarGuideEN: '🍑 Slightly sweet. Recommend 0% or 50%.' },
    { id: 'ft3', status: 'active', nameCN: '荔枝红茶', nameEN: 'Lychee Honey Black Tea', price: 4.5, type: 'fruit', subType: 'sweet', tags: ['cold'], keywords: '荔枝,红茶,滋润,甜蜜', descCN: '荔枝果浆，蜜香红茶，椰果', descEN: 'Lychee syrup, black tea, coconut jelly', sugarGuideCN: '🍬 稍甜，平时三分糖，选无糖。', sugarGuideEN: '🍬 Slightly sweet. Recommend 0% or 50%.' },
    { id: 'ft4', status: 'active', nameCN: '葡萄玫瑰芋圆', nameEN: 'Rosy Grape Oolong', price: 4.5, type: 'fruit', subType: 'sweet', tags: ['cold'], keywords: '葡萄,玫瑰,芋圆,嚼感', descCN: '葡萄颗粒，葡萄果浆，火龙果水，玫瑰露，茉莉绿茶，芋圆', descEN: 'Grape pulp, grape syrup, rose syrup, jasmine tea, taro balls', sugarGuideCN: '🍇 偏甜，建议无糖。', sugarGuideEN: '🍇 Sweet. Recommend 0%.' },
    { id: 'ft5', status: 'active', nameCN: '百香果双响炮', nameEN: 'Passionfruit Jasmine', price: 4.5, type: 'fruit', subType: 'sour', tags: ['cold'], keywords: '百香果,酸甜,双小料,开胃', descCN: '百香果果粒，百香果果浆，茉莉绿茶，椰果，珍珠', descEN: 'Passionfruit pulp, jasmine tea, coconut jelly, pearls', sugarGuideCN: '🍋 偏甜，建议无糖。', sugarGuideEN: '🍋 Sweet. Recommend 0%.' },
    { id: 'ft6', status: 'active', nameCN: '荔枝玫瑰', nameEN: 'Pinky Rose', price: 5.0, type: 'fruit', subType: 'sweet', tags: ['hot', 'cold'], keywords: '玫瑰花露,浪漫粉色,荔枝,香气袭人', descCN: '荔枝果浆，玫瑰露，火龙果，茉莉绿茶，牛奶，调和乳，椰果', descEN: 'Lychee, rose, jasmine tea, milk, jelly', sugarGuideCN: '🌹 偏甜，建议无糖。', sugarGuideEN: '🌹 Sweet. Recommend 0%.' },
    { id: 'ft7', status: 'active', nameCN: '杨枝甘露茶茶', nameEN: 'Mango Pomelo', price: 6.0, type: 'fruit', subType: 'sweet', tags: ['cold'], keywords: '杨枝甘露,芒果,西米,椰奶', descCN: '杨枝甘露浓浆，西米，西柚颗粒，酸奶', descEN: 'Mango base, sago, grapefruit, yogurt', sugarGuideCN: '🥭 固定甜度。', sugarGuideEN: '🥭 Fixed Sugar.' },
    { id: 'ft8', status: 'active', nameCN: '芝芝葡萄', nameEN: 'Cheezo Grape', price: 6.0, type: 'fruit', subType: 'cheese', tags: ['cold'], keywords: '芝士奶盖,葡萄冰沙,咸甜,果肉', descCN: '芝士奶盖，葡萄颗粒，寒天晶球，茉莉绿茶，葡萄果浆，火龙果水', descEN: 'Cheese foam, grape, jasmine tea', sugarGuideCN: '🍇 稍甜，建议无糖。', sugarGuideEN: '🍇 Slightly sweet.' },
    { id: 'ft_off1', status: 'inactive', nameCN: '苹果秋茉', nameEN: 'Autumn Apple Jasmine', price: 4.5, type: 'fruit', subType: 'sweet', tags: ['hot', 'cold'], keywords: '苹果,桂花', descCN: '苹果颗粒，茉莉绿茶，牛奶，调和乳', descEN: 'Apple, jasmine tea, milk', sugarGuideCN: '稍甜', sugarGuideEN: 'Sweet' },
    { id: 'ft_off2', status: 'inactive', nameCN: '芝芝蜜桃', nameEN: 'Peach Cheezo', price: 6.0, type: 'fruit', subType: 'cheese', tags: ['cold'], keywords: '芝士,蜜桃', descCN: '芝士奶盖，蜜桃', descEN: 'Cheese, peach', sugarGuideCN: '稍甜', sugarGuideEN: 'Sweet' },
    { id: 'ft_off3', status: 'inactive', nameCN: '芝芝荔枝', nameEN: 'Lychee Cheezo', price: 6.0, type: 'fruit', subType: 'cheese', tags: ['cold'], keywords: '芝士,荔枝', descCN: '芝士奶盖，荔枝', descEN: 'Cheese, lychee', sugarGuideCN: '稍甜', sugarGuideEN: 'Sweet' },

    // --- Salté / Rich Milk Tea ---
    { id: 's1', status: 'active', nameCN: '泰式咸法酪', nameEN: 'Thai Salté', price: 5.0, type: 'milk', subType: 'rich', tags: ['cold'], keywords: '泰式奶茶,咸奶盖,异域风情', descCN: '芝士奶盖，泰式奶茶，牛奶，调和乳', descEN: 'Cheese foam, Thai tea, milk, cream base', sugarGuideCN: '🧡 稍甜，建议无糖。', sugarGuideEN: '🧡 Slightly sweet. Recommend 0%.' },
    { id: 's2', status: 'active', nameCN: '经典咸法酪', nameEN: 'Classic Salté', price: 5.0, type: 'milk', subType: 'rich', tags: ['cold', 'hot'], keywords: '招牌,咸奶盖,经典,奶茶控', descCN: '蜜香红茶，牛奶，调和乳，芝士奶盖', descEN: 'Black tea, milk, cheese foam, cream base', sugarGuideCN: '🧂 无糖不含任何糖，建议三分糖。', sugarGuideEN: '🧂 Unsweetened base. Recommend 30%.' },
    { id: 's3', status: 'new', nameCN: '抹茶咸法酪', nameEN: 'Matcha Salté', price: 5.0, type: 'matcha', subType: 'rich', tags: ['cold', 'hot'], keywords: '抹茶,咸奶盖,苦甜交织', descCN: '抹茶，牛奶，调和乳，芝士奶盖', descEN: 'Matcha, milk, cheese foam, cream base', sugarGuideCN: '🍵 无糖不含任何糖，建议三分糖。', sugarGuideEN: '🍵 Unsweetened base. Recommend 30%.' },
    
    // --- Milk Tea ---
    { id: 'fm1', status: 'active', nameCN: '茉莉鲜奶茶', nameEN: 'Jasmine Milk Tea', price: 3.9, type: 'milk', subType: 'classic', tags: ['hot', 'cold'], keywords: '茉莉花香,鲜奶,清爽', descCN: '茉莉绿茶，牛奶，调和乳，珍珠', descEN: 'Jasmine tea, milk, pearls', sugarGuideCN: '🌿 无糖不含糖，建议三分糖。', sugarGuideEN: '🌿 Unsweetened base. Recommend 30%.' },
    { id: 'fm2', status: 'active', nameCN: '四季春鲜奶茶', nameEN: 'Four Season Milk Tea', price: 3.9, type: 'milk', subType: 'classic', tags: ['hot', 'cold'], keywords: '四季春,乌龙,回甘', descCN: '四季春乌龙，牛奶，调和乳，珍珠', descEN: 'Oolong tea, milk, pearls', sugarGuideCN: '🍂 无糖不含糖，建议三分糖。', sugarGuideEN: '🍂 Unsweetened base. Recommend 30%.' },
    { id: 'fm3', status: 'active', nameCN: '山茶花鲜奶茶', nameEN: 'Camellia Milk Tea', price: 3.9, type: 'milk', subType: 'classic', tags: ['hot', 'cold'], keywords: '山茶花,高级香,优雅', descCN: '山茶花乌龙，牛奶，调和乳，珍珠', descEN: 'Camellia tea, milk, pearls', sugarGuideCN: '🌸 无糖不含糖，建议三分糖。', sugarGuideEN: '🌸 Unsweetened base. Recommend 30%.' },
    { id: 'fm4', status: 'active', nameCN: '蜜香鲜奶茶', nameEN: 'Honey Black Milk Tea', price: 3.9, type: 'milk', subType: 'classic', tags: ['hot', 'cold'], keywords: '蜜香红茶,经典,醇厚', descCN: '蜜香红茶，牛奶，调和乳，珍珠', descEN: 'Black tea, milk, pearls', sugarGuideCN: '🍯 无糖不含糖，建议三分糖。', sugarGuideEN: '🍯 Unsweetened base. Recommend 30%.' },
    { id: 'fm5', status: 'active', nameCN: '芋香茉莉/珍珠奶茶', nameEN: 'Taro Jasmine Milk Tea', price: 3.9, type: 'milk', subType: 'rich', tags: ['hot', 'cold'], keywords: '芋香味,茉莉,奶绿,绵密', descCN: '香芋预拌粉，茉莉绿茶，牛奶，调和乳，珍珠', descEN: 'Taro powder, jasmine tea, milk, pearls', sugarGuideCN: '🍠 偏甜，建议无糖。', sugarGuideEN: '🍠 Sweet. Recommend 0%.' },
    { id: 'fm6', status: 'active', nameCN: '黑糖啵啵鲜奶', nameEN: 'Brown Sugar Fresh Milk', price: 4.5, type: 'milk', subType: 'rich', tags: ['hot', 'cold', 'no-caffeine'], keywords: '黑糖珍珠,鲜奶,挂壁,无咖啡因', descCN: '黑糖糖浆，珍珠，牛奶，调和乳', descEN: 'Brown sugar, pearls, milk', sugarGuideCN: '🍯 偏甜，建议无糖。', sugarGuideEN: '🍯 Sweet. Recommend 0%.' },
    { id: 'fm7', status: 'new', nameCN: '烤奶奶茶', nameEN: 'Roasted Milk Tea', price: 4.5, type: 'milk', subType: 'rich', tags: ['hot', 'cold'], keywords: '焦糖香,烤茶,浓郁,经典', descCN: '烤奶糖浆，珍珠，蜜香红茶，牛奶，调和乳', descEN: 'Roasted syrup, pearls, black tea, milk', sugarGuideCN: '🔥 稍甜，建议无糖。', sugarGuideEN: '🔥 Slightly sweet. Recommend 0%.' },
    { id: 'fm8', status: 'active', nameCN: '经典珍珠奶茶', nameEN: 'Classic Bubble Milk Tea', price: 3.9, type: 'milk', subType: 'classic', tags: ['hot', 'cold'], keywords: '珍珠奶茶,经典,Q弹', descCN: '珍珠，蜜香红茶，牛奶，调和乳', descEN: 'Pearls, black tea, milk', sugarGuideCN: '🧋 无糖不含糖，建议三分糖。', sugarGuideEN: '🧋 Unsweetened base. Recommend 30%.' },
    
    // --- Oatmilk (Plant-Based) ---
    { id: 'o1', status: 'active', nameCN: '生椰抹茶燕麦奶', nameEN: 'Matcha Coconut Oatmilk', price: 5.0, type: 'matcha', subType: 'plant', tags: ['hot', 'cold'], keywords: '燕麦奶,椰子,千目抹茶,健康', descCN: '椰奶调和乳，燕麦奶，抹茶', descEN: 'Coconut milk, oatmilk, matcha', sugarGuideCN: '🥥 偏甜，建议无糖。', sugarGuideEN: '🥥 Sweet. Recommend 0%.' },
    { id: 'o2', status: 'active', nameCN: '草莓森林燕麦奶', nameEN: 'Strawberry Matcha Oatmilk', price: 5.0, type: 'matcha', subType: 'plant', tags: ['hot', 'cold'], keywords: '草莓,千目抹茶,高颜值,植物基', descCN: '草莓厚酱，抹茶，燕麦奶，调和乳，椰果', descEN: 'Strawberry jam, matcha, oatmilk', sugarGuideCN: '🍓 稍甜，建议无糖。', sugarGuideEN: '🍓 Slightly sweet. Recommend 0%.' },
    { id: 'o3', status: 'active', nameCN: '香芋茉莉燕麦奶', nameEN: 'Taro Jasmine Oatmilk', price: 5.0, type: 'milk', subType: 'plant', tags: ['hot', 'cold'], keywords: '芋香,茉莉,燕麦,养生', descCN: '香芋预拌粉，茉莉绿茶，燕麦奶，调和乳，珍珠', descEN: 'Taro powder, jasmine tea, oatmilk', sugarGuideCN: '🍠 稍甜，建议无糖。', sugarGuideEN: '🍠 Slightly sweet. Recommend 0%.' },
    { id: 'o4', status: 'active', nameCN: '抹茶黑糖燕麦奶', nameEN: 'Matcha Brown Sugar Oatmilk', price: 5.0, type: 'matcha', subType: 'plant', tags: ['hot', 'cold'], keywords: '黑糖,抹茶,浓郁,燕麦', descCN: '黑糖糖浆，抹茶，珍珠，燕麦奶，调和乳', descEN: 'Brown sugar, matcha, pearls, oatmilk', sugarGuideCN: '🍯 偏甜，建议无糖。', sugarGuideEN: '🍯 Sweet. Recommend 0%.' },
    { id: 'o5', status: 'active', nameCN: '抹茶拿铁燕麦奶', nameEN: 'Matcha Latte Oatmilk', price: 5.0, type: 'matcha', subType: 'plant', tags: ['hot', 'cold'], keywords: '乳糖不耐受,抹茶,燕麦,健康', descCN: '抹茶，燕麦奶，调和乳，珍珠', descEN: 'Matcha, oatmilk, pearls', sugarGuideCN: '🌿 稍甜，建议无糖。', sugarGuideEN: '🌿 Slightly sweet. Recommend 0%.' },
    { id: 'o6', status: 'active', nameCN: '黑糖啵啵燕麦奶', nameEN: 'Brown Sugar Oatmilk', price: 5.0, type: 'milk', subType: 'plant', tags: ['hot', 'cold', 'no-caffeine'], keywords: '无咖啡因,黑糖,燕麦,儿童友好', descCN: '黑糖糖浆，珍珠，燕麦奶，调和乳', descEN: 'Brown sugar, pearls, oatmilk', sugarGuideCN: '🍯 偏甜，建议无糖。', sugarGuideEN: '🍯 Sweet. Recommend 0%.' },
    { id: 'o7', status: 'active', nameCN: '茉莉燕麦奶茶', nameEN: 'Jasmine Oatmilk Tea', price: 4.5, type: 'milk', subType: 'plant', tags: ['hot', 'cold'], keywords: '茉莉花香,燕麦,清新,轻负担', descCN: '茉莉绿茶，燕麦奶，调和乳，珍珠', descEN: 'Jasmine tea, oatmilk, pearls', sugarGuideCN: '🌿 无糖不含糖，建议三分糖。', sugarGuideEN: '🌿 Unsweetened base. Recommend 30%.' },

    // --- Holiday (Inactive) ---
    { id: 'h1', status: 'inactive', nameCN: '热红酒风味茶(无酒精)', nameEN: 'Mulled Tea', price: 6.0, type: 'fruit', subType: 'holiday', tags: ['hot'], keywords: '圣诞限定,热红酒,香料', descCN: '葡萄果浆，甜橙厚浆，蜜香红茶，甜橙片，苹果片，肉桂粉', descEN: 'Grape, orange, black tea, cinnamon', sugarGuideCN: '🎄 固定甜度。', sugarGuideEN: '🎄 Fixed Sugar.' },
    { id: 'h2', status: 'inactive', nameCN: '柠檬塔奶茶', nameEN: 'Lemon Tart Milk Tea', price: 5.0, type: 'milk', subType: 'holiday', tags: ['cold', 'hot'], keywords: '甜点风味,柠檬塔', descCN: '柠檬塔奶盖，甜橙皮，蜜香红茶，牛奶', descEN: 'Lemon tart foam, orange peel, black tea, milk', sugarGuideCN: '🍋 奶盖含糖。', sugarGuideEN: '🍋 Foam is sweet.' },
];

export const INITIAL_WIKI_DATA: WikiItem[] = [
    { 
        id: 'i_pear', 
        nameCN: '小吊梨', 
        nameEN: 'Candied Mini Pear', 
        descCN: '小吊梨是把整颗梨用糖煮后再风干的小型蜜渍梨，口感软糯带一点焦糖香。它在北方秋冬甜品里很常见，被当作“暖甜点”，在饮品里带来清甜的果香和舒服的喉感。', 
        descEN: '“Xiao Diao Li” is a small whole pear that has been gently candied and dried. The texture is soft and chewy with a hint of caramelized sweetness. It’s a classic ingredient in autumn–winter desserts and, in drinks, it adds a mellow pear aroma and a cozy, comforting sweetness.' 
    },
    { 
        id: 'i_tremella', 
        nameCN: '银耳', 
        nameEN: 'White Jelly Fungus', 
        descCN: '银耳又叫“雪耳”，是传统中式甜品里常见的食材。煮熟后呈胶冻状、软糯Q弹，用在饮品里会让口感更稠滑，有一种在“喝甜品”的满足感。', 
        descEN: 'White jelly fungus, also known as snow fungus, is a traditional dessert ingredient in Chinese cuisine. Once cooked, it becomes slightly gelatinous and bouncy. In drinks, it adds a thicker, dessert-like mouthfeel and a gentle, soothing texture.' 
    },
    { 
        id: 'i_jujube', 
        nameCN: '红枣', 
        nameEN: 'Red Dates (Jujube)', 
        descCN: '红枣是常见的干制枣果，在中式点心和甜汤里出现频率极高。它带有独特的枣香和温润甜味，可以让奶茶或热饮的味道更圆润，回甘更长。', 
        descEN: 'Red dates (jujube) are widely used in Chinese desserts and sweet soups. They bring a characteristic date aroma and a warm, rounded sweetness, making milk teas and hot drinks taste fuller with a longer, gentle aftertaste.' 
    },
    { 
        id: 'i_longan', 
        nameCN: '桂圆', 
        nameEN: 'Dried Longan', 
        descCN: '桂圆是去壳去核后的龙眼果肉，多以干桂圆的形式入甜汤和茶饮。它有浓郁的蜜香和果干风味，在热饮里会带出很“养”的感觉，适合做偏甜暖的风味基底。', 
        descEN: 'Dried longan is the peeled and pitted flesh of the longan fruit, often used in sweet soups and herbal teas. It has a rich honey-like aroma and dried-fruit sweetness. In hot drinks, it gives a nourishing, cozy profile and works well as a sweet, warming base note.' 
    },
    { 
        id: 'i_ginger', 
        nameCN: '姜母', 
        nameEN: 'Old Ginger', 
        descCN: '姜母指生长时间更长的老姜，辛辣感更明显，香气更厚。常用在亚洲传统暖身饮品里，加入奶茶或茶饮后，会带出明显的辛香和暖胃感，让整体风味更有层次。', 
        descEN: '“Old ginger” refers to mature ginger with stronger spiciness and deeper aroma. It is widely used in traditional warming drinks. Added to tea or milk tea, it brings a pronounced spicy heat and warming sensation, giving the drink more structure and character.' 
    },
    { 
        id: 'i_boba', 
        nameCN: '珍珠', 
        nameEN: 'Tapioca Pearls', 
        descCN: '珍珠是以木薯淀粉为主原料制作的小圆球，是台湾奶茶文化的代表配料之一。煮好的珍珠软糯Q弹、带有轻微黑糖或糖浆香，是“咀嚼控”的快乐来源，也是奶茶最经典的口感标志。', 
        descEN: 'Tapioca pearls are made mainly from cassava starch and are the signature topping of Taiwanese bubble tea. Properly cooked pearls are chewy and bouncy, often coated with a hint of brown sugar or syrup. They provide the iconic “chew” that defines bubble tea.' 
    },
    { 
        id: 'i_agar', 
        nameCN: '寒天晶球', 
        nameEN: 'Agar Crystal Pearls', 
        descCN: '寒天晶球是以海藻提取物寒天为胶体做成的透明小球，比珍珠更清爽脆弹。它最早多出现在日式甜品和轻负担饮品中，在杯子里像小水晶一样，带来干净、轻盈的咀嚼口感。', 
        descEN: 'Agar crystal pearls are made from agar, a jelly derived from seaweed. Compared with tapioca pearls, they are lighter and slightly firmer, with a clean, refreshing bite. In drinks, they look like tiny crystals and add a light, crisp chewing experience.' 
    },
    { 
        id: 'i_tea_jelly', 
        nameCN: '茶冻', 
        nameEN: 'Tea Jelly', 
        descCN: '茶冻是用茶汤加凝胶类原料做成的茶味果冻，源自东亚各种“茶冻/咖啡冻”甜品。和奶茶搭配时，茶冻能保留茶香，又带有柔软弹牙的口感，让一杯饮品同时兼具喝和“吃”的满足。', 
        descEN: 'Tea jelly is made by setting brewed tea with a gelling agent, inspired by East Asian tea or coffee jellies. When paired with milk tea, it keeps the tea aroma while adding a soft, bouncy texture, turning a drink into something you can both sip and “eat”.' 
    },
    { 
        id: 'i_cheese', 
        nameCN: '芝士奶盖', 
        nameEN: 'Cheese Milk Foam', 
        descCN: '芝士奶盖由奶油、奶酪等打发而成，是近十多年新式茶饮的标志之一。它带有微咸的芝士香和奶油的顺滑，覆盖在茶面上，喝起来像茶配上芝士慕斯，让茶更有“甜品感”。', 
        descEN: 'Cheese milk foam is a whipped mixture of cream and cheese, and has become a signature of modern tea drinks. It is slightly salty, rich, and creamy. Poured on top of tea, it tastes like drinking tea through a layer of cheese mousse, giving a dessert-like experience.' 
    },
    { 
        id: 'i_matcha_cloud', 
        nameCN: '抹茶云顶', 
        nameEN: 'Matcha Cloud Topping', 
        descCN: '抹茶云顶是在茶面上铺上一层由抹茶、乳制品和椰奶一起打发成的绵密奶霜，像一朵飘在杯里的云。它保留了抹茶的清苦与鲜香，椰奶带来轻盈的椰香和一点热带气息，让整体口感顺滑柔和但不厚腻。', 
        descEN: 'Matcha cloud topping is a fluffy cream layer made from matcha, dairy, and coconut milk, floating gently on top of the drink like a cloud. It keeps the fresh, slightly bitter notes of matcha, while the coconut milk adds a light tropical aroma and softer sweetness.' 
    },
    { 
        id: 'i_mango_pomelo', 
        nameCN: '杨枝甘露', 
        nameEN: 'Mango Pomelo Sago', 
        descCN: '杨枝甘露是起源于香港的经典甜品，以芒果、西柚/柚子和西米为主角，后来延伸到饮品界。典型风味是芒果的浓郁甜香配上柑橘的微酸和西米的Q弹，在杯中就是“可以喝的港式甜品”。', 
        descEN: 'Mango pomelo sago is a classic Hong Kong dessert made with mango, pomelo or grapefruit, and sago. In drink form, it delivers rich mango sweetness balanced by citrusy tartness, with sago pearls adding a chewy bite—essentially a drinkable Hong Kong dessert.' 
    },
    { 
        id: 'i_sago', 
        nameCN: '西米', 
        nameEN: 'Sago', 
        descCN: '西米原本由西米椰子树的淀粉制成，现在多用木薯淀粉替代，成为小颗粒透明“珍珠”。它入口软Q但更细腻，常出现在东南亚甜品和港式糖水中，在饮品里带来细腻又不抢味的口感。', 
        descEN: 'Sago was traditionally made from the pith of sago palm trees, now often replaced with tapioca starch. The small translucent pearls are soft and gently chewy. Widely used in Southeast Asian and Hong Kong-style desserts, they add a delicate texture without overpowering the drink’s flavor.' 
    },
    { 
        id: 'i_jasmine', 
        nameCN: '茉莉绿茶', 
        nameEN: 'Jasmine Green Tea', 
        descCN: '茉莉绿茶是用绿茶坯反复与茉莉花窨制得来的花茶，在中国有上百年历史。它同时保留绿茶的清爽和茉莉花的馥郁花香，做成茶饮时显得干净、优雅，适合搭配果香或轻奶香。', 
        descEN: 'Jasmine green tea is a traditional Chinese tea made by repeatedly scenting green tea leaves with fresh jasmine blossoms. It combines the freshness of green tea with the elegant floral aroma of jasmine. In drinks, it tastes clean and refined, pairing well with fruit or light milk.' 
    },
    { 
        id: 'i_honey_black', 
        nameCN: '蜜香红茶', 
        nameEN: 'Honey-Fragrant Black Tea', 
        descCN: '蜜香红茶多源自小叶种茶区，经小绿叶蝉叮咬等特殊工艺，茶叶会自然发展出类似蜂蜜和水果干的香气。茶汤圆润、带天然蜜甜感，用来做奶茶或果茶，可以减少对糖的依赖，也能喝到丰富香气。', 
        descEN: 'Honey-fragrant black tea often comes from specific small-leaf tea regions. Due to special growing conditions, the leaves naturally develop honeyed and dried-fruit aromatics. The liquor is smooth and naturally sweet, ideal for milk teas or fruit teas that need depth without too much added sugar.' 
    },
    { 
        id: 'i_matcha', 
        nameCN: '千目高山抹茶', 
        nameEN: 'High-Mountain Matcha', 
        descCN: `千目高山抹茶指产自高海拔茶园、用细筛（千目）研磨出的高等级抹茶粉。

• 香气最佳释放温度：
抹茶不适合用开水冲，水温控制在 70℃ 左右 时，香气释放最饱满，苦涩感更轻，颜色也更鲜亮。

• ONESIP 内部推荐打法：
1. 先用细筛筛抹茶，让粉末更蓬松、不结块。
2. 取适量抹茶粉（例如 2–3 g），加入少量 70℃ 温水（约 20–30 ml）先调成顺滑无颗粒的浓抹茶液。
3. 用茶筅或电动打泡器快速打到表面有细腻泡沫，再按配方加入牛奶、糖浆等做成对应饮品。
4. 避免使用 80℃ 以上或沸水，容易让抹茶变苦、发黄、香气流失。`, 
        descEN: `High-mountain matcha is premium-grade matcha made from tea leaves grown at higher elevations and finely sifted.

• Best aroma release temperature:
Matcha should not be brewed with boiling water. Around 70°C is ideal for unlocking its full aroma while keeping bitterness low.

• Simple at-home guide:
"When making matcha at home, don’t pour boiling water directly. Let the water cool to about 70°C, first blend a small amount of water with the matcha powder until smooth, then slowly add the rest of the water or milk and whisk until slightly foamy."` 
    },
    { 
        id: 'i_hojicha', 
        nameCN: '焙茶', 
        nameEN: 'Hojicha (Roasted Tea)', 
        descCN: '焙茶是将绿茶的茶叶和茶梗经过深度烘焙的茶，起源于日本。几乎没有青草气，而是带明显的大麦、坚果和烘烤谷物香气，咖啡因含量也相对较低，非常适合做成秋冬风味的奶茶或拿铁。', 
        descEN: 'Hojicha is a roasted Japanese tea made from green tea leaves and stems. The roasting removes grassy notes and brings out toasty aromas reminiscent of barley, nuts, and roasted grains. It is naturally lower in caffeine and works beautifully in autumn–winter style lattes.' 
    },
    { 
        id: 'i_four_seasons', 
        nameCN: '四季春乌龙', 
        nameEN: 'Four Seasons Spring Oolong', 
        descCN: '四季春乌龙是台湾常见品种，属于清香型乌龙，全年可采，因此得名“四季春”。它有明显花香和清甜茶汤，比绿茶多一分厚度，又比传统乌龙更轻盈，是果茶和轻奶茶的万能底茶。', 
        descEN: 'Four Seasons Spring Oolong is a popular Taiwanese tea cultivar, known for its fresh, floral style. The liquor is lightly sweet, floral, and slightly fuller than green tea, yet lighter than traditional roasted oolong—an ideal all-round base for fruit teas and light milk teas.' 
    },
    { 
        id: 'i_osmanthus', 
        nameCN: '桂花乌龙', 
        nameEN: 'Osmanthus Oolong', 
        descCN: '桂花乌龙是用乌龙茶与桂花窨制或调配而成，结合了茶香与桂花香。入口带有淡淡蜜糖与桂花糕的香气，让饮品有一种中式点心的氛围。', 
        descEN: 'Osmanthus oolong is created by blending or scenting oolong tea with osmanthus flowers. It carries a soft honey-like sweetness and the aroma of osmanthus pastries. In drinks, it gives a gentle dessert-like, distinctly Chinese pastry vibe.' 
    },
    { 
        id: 'i_camellia', 
        nameCN: '山茶花乌龙', 
        nameEN: 'Camellia Oolong', 
        descCN: '山茶花乌龙以乌龙茶为基底，辅以山茶花香气或窨制而成。相比桂花乌龙，它的花香更清雅，像院子里刚开的花，配合奶或果味时，会让杯子闻起来像一束新鲜花束。', 
        descEN: 'Camellia oolong uses oolong tea as the base, infused or blended with camellia aroma. The floral note is delicate and airy—like freshly opened garden flowers. When combined with milk or fruit, the drink smells like a fresh bouquet in a cup.' 
    },
    { 
        id: 'i_fresh_milk_tea', 
        nameCN: '鲜奶茶', 
        nameEN: 'Fresh Milk Tea', 
        descCN: '鲜奶茶指以鲜牛奶而不是植脂末或奶精制作的奶茶，是现代新式茶饮的基础款。它保留茶汤的骨架，再叠加牛奶的醇厚和自然乳香，口感干净顺滑，适合作为“日常喝得住”的常备产品。', 
        descEN: 'Fresh milk tea is made with real fresh milk instead of non-dairy creamer. It keeps the structure of brewed tea while adding the richness and natural aroma of milk. The result is clean, smooth, and easy to drink regularly as a go-to classic.' 
    },
    { 
        id: 'i_thai', 
        nameCN: '泰国奶茶', 
        nameEN: 'Thai Milk Tea', 
        descCN: '泰国奶茶源自泰国街头文化，以浓泡红茶搭配炼乳、淡奶和糖，呈现标志性的橙红色。风味浓郁甜顺，带有淡淡香料与焦糖感，即使冰块融化后也很有存在感，是“甜党”的快乐选项。', 
        descEN: 'Thai milk tea comes from Thai street drink culture. It’s made with strong-brewed black tea, condensed milk, evaporated milk, and sugar, giving it a signature orange hue. The flavor is rich, sweet, and slightly spiced with a caramel note—perfect for sweet-tooth drinkers.' 
    },
    { 
        id: 'i_salte', 
        nameCN: '咸法酪', 
        nameEN: 'Savory French-Style Cheese', 
        descCN: '咸法酪可以理解为法式风格的轻咸奶酪奶霜，灵感来自奶酪慕斯和咸味黄油甜点。它带有微微咸味和丰富乳香，用在饮品顶部时，可以中和底部茶或果饮的甜度，让一杯饮品瞬间升级成分层甜品。', 
        descEN: '“Xian Fa Lao” is a French-inspired lightly salted cream cheese topping, drawing from cheese mousse and salted butter desserts. It has a gentle savory note and rich dairy aroma. On top of a drink, it balances sweetness and instantly turns the beverage into a layered dessert-in-a-cup.' 
    },
    { 
        id: 'i_taro_balls', 
        nameCN: '芋园', 
        nameEN: 'Taro Balls', 
        descCN: '芋园源自台湾传统甜品，是以芋头（有时加入地瓜、紫薯）和淀粉手工制成的小块。煮熟后的芋园Q弹中带点粉糯，咬开有浓厚芋头香，是“芋头控”在一杯饮品里最满足的一口咀嚼。', 
        descEN: 'Taro balls come from Taiwanese dessert culture and are handmade from taro (sometimes with sweet potato or purple yam) and starch. After cooking, they are bouncy yet slightly powdery inside, releasing a strong taro aroma—pure happiness for taro lovers in drink form.' 
    },
    { 
        id: 'i_popping_boba', 
        nameCN: '爆爆珠', 
        nameEN: 'Popping Boba', 
        descCN: '爆爆珠是外层为海藻胶、内里包裹果汁的小球，最早多见于新式果茶和甜品饮品。入口轻轻一咬便会“爆汁”，果味瞬间在口腔里散开，是偏玩乐、互动感很强的一类配料。', 
        descEN: 'Popping boba are small spheres with a thin seaweed-based shell and liquid fruit juice inside. Often used in modern fruit teas and dessert drinks, they pop in the mouth and release a burst of flavor, adding a playful, interactive element to the drink.' 
    },
    { 
        id: 'i_milk_tea_gen', 
        nameCN: '奶茶', 
        nameEN: 'Milk Tea', 
        descCN: '广义的奶茶是茶汤与奶（鲜奶、炼乳或奶精等）的结合，源头可以追溯到英式奶茶、港式奶茶与台湾手摇饮等不同传统。它保留茶的清苦骨架，又加入奶的柔和与甜香，是整个 ONESIP 体系里最核心、也最容易被各类人群接受的基础形态。', 
        descEN: 'Milk tea is the combination of brewed tea with milk. Its roots include British milk tea, Hong Kong-style milk tea, and Taiwanese hand-shaken drinks. It keeps the backbone of tea’s slight bitterness while adding the softness and sweetness of milk, making it the most fundamental format in the ONESIP lineup.' 
    }
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
    itemsEN: "🍐 Snow Pear Milk Tea\n☕ Longan Jujube Milk Tea\n🍊 Orange Camellia\n🔥 Ginger Brown Sugar Milk Tea\n🍊 Orange Americano\n🍐 Snow Pear Tremella Jasmine",
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
        staffPortal: "Staff Portal", staffHint: "Enter Access Code", hot: "Hot", cold: "Cold", price: "Price", reviewLabel: "💬 Review:", sugarLabel: "Taste Guide:", detailIngred: "Ingredients & Desc",
        wikiTitle: "📖 Ingredient Wiki", wikiSub: "Know what's inside your cup", wikiSuitable: "👤 Best for:", wikiIngred: "🧪 Ingredients:", wikiIntro: "📝 Details:", wikiOrder: "👉 Order This",
        detailTitle: "Drink Profile", detailBestFor: "👤 Best For", detailKnow: "📝 Good to Know", detailBack: "Back", detailOrder: "👉 Order This",
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

