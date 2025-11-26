

import React, { useState } from 'react';
import { WikiItem, Language, Product } from '../types';
import { BookOpen, X, ChevronRight, Leaf, Coffee } from 'lucide-react';

interface WikiScreenProps {
    wikiItems: WikiItem[];
    onClose: () => void;
    lang: Language;
    t: any;
    products: Product[];
}

const WikiScreen: React.FC<WikiScreenProps> = ({ wikiItems, onClose, lang, t, products }) => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    // Helper to find related drinks
    const getRelatedDrinks = (wikiItem: WikiItem) => {
        const searchStrCN = wikiItem.nameCN;
        
        return products.filter(p => {
            // Priority 1: Check explicit ID association
            if (p.relatedWikiIds && p.relatedWikiIds.includes(wikiItem.id)) {
                return true;
            }

            // Priority 2: Legacy fallback - Match if ingredient name appears in product name or description
            return (
                p.nameCN.includes(searchStrCN) || 
                p.descCN.includes(searchStrCN) ||
                (lang === 'en' && p.descEN.toLowerCase().includes(wikiItem.nameEN.toLowerCase().split('(')[0].trim())) // Match English desc
            );
        });
    };

    return (
        <div className="h-[100dvh] w-full flex flex-col font-sans animate-slide-up bg-accent">
            <div className="z-10 p-4 shadow-sm flex justify-between items-center rounded-b-3xl backdrop-blur-md bg-white/90 border-b border-stone-50 shrink-0">
                <h2 className="font-bold text-lg flex items-center gap-2 text-primary">
                    <BookOpen size={20}/> {t.wikiTitle}
                </h2>
                <button onClick={onClose} className="p-2 bg-stone-100 rounded-full text-gray-500 hover:bg-stone-200 transition">
                    <X size={20} />
                </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 pb-20 scroll-smooth">
                <div className="grid grid-cols-1 gap-3">
                    {wikiItems.map((wikiItem) => {
                        const relatedDrinks = getRelatedDrinks(wikiItem);
                        const isExpanded = expandedId === wikiItem.id;

                        return (
                            <div 
                                key={wikiItem.id} 
                                onClick={() => setExpandedId(isExpanded ? null : wikiItem.id)} 
                                className={`bg-white p-4 rounded-3xl border shadow-sm transition-all ${isExpanded ? 'ring-2 ring-emerald-100 border-emerald-200' : 'border-stone-50'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-colors ${isExpanded ? 'bg-amber-100 text-amber-700' : 'bg-amber-50 text-amber-600'}`}>
                                        <Leaf size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-800">{lang === 'cn' ? wikiItem.nameCN : wikiItem.nameEN}</h4>
                                    </div>
                                    <ChevronRight className={`text-gray-300 transition-transform ${isExpanded ? 'rotate-90 text-emerald-500' : ''}`} size={20}/>
                                </div>
                                {isExpanded && (
                                    <div className="mt-4 pt-4 border-t border-stone-100 animate-slide-down">
                                        <p className="text-sm text-stone-600 leading-relaxed whitespace-pre-wrap">{lang === 'cn' ? wikiItem.descCN : wikiItem.descEN}</p>
                                        
                                        {relatedDrinks.length > 0 && (
                                            <div className="mt-4 pt-2">
                                                <h5 className="text-xs font-bold text-emerald-600 uppercase mb-2 flex items-center gap-1">
                                                    <Coffee size={12}/> {lang === 'cn' ? '包含此原料的饮品' : 'Found in these drinks'}:
                                                </h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {relatedDrinks.map(drink => (
                                                        <span key={drink.id} className="px-3 py-1 bg-stone-50 border border-stone-200 rounded-full text-xs text-stone-600">
                                                            {lang === 'cn' ? drink.nameCN : drink.nameEN}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WikiScreen;
