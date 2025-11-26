import React from 'react';

export type Language = 'cn' | 'en';

export type ProductType = 'milk' | 'fruit' | 'matcha' | 'coffee' | 'cake';
export type ProductStatus = 'active' | 'inactive' | 'new' | 'limited' | 'promotion';

export interface Product {
    id: string;
    status: ProductStatus;
    nameCN: string;
    nameEN: string;
    price: number;
    type: ProductType;
    subType: string;
    tags: string[];
    keywords: string;
    descCN: string;
    descEN: string;
    sugarGuideCN: string;
    sugarGuideEN: string;
    relatedWikiIds?: string[]; // New field for linking ingredients
}

export interface WikiItem {
    id: string;
    nameCN: string;
    nameEN: string;
    descCN: string;
    descEN: string;
}

export interface Announcement {
    enabled: boolean;
    titleCN: string;
    titleEN: string;
    date: string;
    mainPromoCN: string;
    mainPromoEN: string;
    subPromoCN: string;
    subPromoEN: string;
    includedCN: string;
    includedEN: string;
    itemsCN: string;
    itemsEN: string;
    rulesCN: string;
    rulesEN: string;
    disclaimerCN: string;
    disclaimerEN: string;
}

export interface Message {
    type: 'bot' | 'user';
    text: string;
    component?: React.ReactNode;
}
