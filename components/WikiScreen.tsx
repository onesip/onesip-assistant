import React, { useState } from 'react';
import { WikiItem, Language } from '../types';
import { BookOpen, X, ChevronRight, Leaf } from 'lucide-react';

interface WikiScreenProps {
    wikiItems: WikiItem[];
    onClose: () => void;
    lang: Language;
    t: any;
}

const WikiScreen: React.FC<WikiScreenProps> = ({ wikiItems, onClose, lang, t }) => {
    const [expandedId, setExpandedId] = useState<string | null>(null);
    return (
        <div className="h-screen w-full flex flex-col font-sans animate-slide-up bg-accent">
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
                    {wikiItems.map((wikiItem) => (
                        <div 
                            key={wikiItem.id} 
                            onClick={() => setExpandedId(expandedId === wikiItem.id ? null : wikiItem.id)} 
                            className={`bg-white p-4 rounded-3xl border shadow-sm transition-all ${expandedId === wikiItem.id ? 'ring-2 ring-emerald-100 border-emerald-200' : 'border-stone-50'}`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-colors ${expandedId === wikiItem.id ? 'bg-amber-100 text-amber-700' : 'bg-amber-50 text-amber-600'}`}>
                                    <Leaf size={20} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-800">{lang === 'cn' ? wikiItem.nameCN : wikiItem.nameEN}</h4>
                                </div>
                                <ChevronRight className={`text-gray-300 transition-transform ${expandedId === wikiItem.id ? 'rotate-90 text-emerald-500' : ''}`} size={20}/>
                            </div>
                            {expandedId === wikiItem.id && (
                                <div className="mt-4 pt-4 border-t border-stone-100 animate-slide-down">
                                    <p className="text-sm text-stone-600 leading-relaxed">{lang === 'cn' ? wikiItem.descCN : wikiItem.descEN}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WikiScreen;
