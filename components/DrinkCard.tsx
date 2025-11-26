import React from 'react';
import { Product, Language } from '../types';
import { Flame, Snowflake, Droplet } from 'lucide-react';

interface DrinkCardProps {
    item: Product;
    onClick: (item: Product) => void;
    lang: Language;
    t: any;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ item, onClick, lang, t }) => {
    return (
        <div 
            onClick={() => onClick(item)} 
            className="bg-white p-4 rounded-[2rem] border border-stone-50 shadow-sm hover:shadow-md transition-all mb-3 cursor-pointer flex flex-col group animate-pop-in relative overflow-hidden"
        >
            {item.status === 'new' && <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-xl z-20 shadow-sm">NEW</div>}
            {item.status === 'limited' && <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-xl z-20 shadow-sm">LIMITED</div>}
            {item.status === 'promotion' && <div className="absolute top-0 right-0 bg-amber-500 text-black text-[10px] font-bold px-2 py-1 rounded-bl-xl z-20 shadow-sm">SALE</div>}
            
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-50 to-transparent rounded-bl-[2rem] -z-0 opacity-50"></div>
            <div className="flex items-start z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4 text-3xl shadow-inner bg-secondary">
                    {item.type === 'coffee' ? '☕' : item.type === 'matcha' ? '🍵' : item.type === 'fruit' ? '🍹' : item.type === 'cake' ? '🍰' : '🧋'}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                        <h3 className="font-extrabold text-gray-800 text-base truncate pr-2">{lang === 'cn' ? item.nameCN : item.nameEN}</h3>
                        <span className="text-sm font-bold whitespace-nowrap text-primary">€{item.price.toFixed(1)}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2 font-medium truncate">{lang === 'cn' ? item.nameEN : item.nameCN}</p>
                    <div className="flex flex-wrap gap-1.5">
                        {item.tags.includes('hot') && (
                            <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[10px] font-bold rounded-full flex items-center border border-orange-100">
                                <Flame size={10} className="mr-0.5"/>{t.hot}
                            </span>
                        )}
                        {item.tags.includes('cold') && (
                            <span className="px-2 py-0.5 bg-sky-50 text-sky-600 text-[10px] font-bold rounded-full flex items-center border border-sky-100">
                                <Snowflake size={10} className="mr-0.5"/>{t.cold}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-3 pt-3 border-t border-stone-100 text-xs space-y-1.5">
                <div className="flex items-start">
                    <Droplet size={12} className="mr-1.5 mt-0.5 text-amber-400 shrink-0" />
                    <span className="text-stone-600">
                        <span className="font-bold text-amber-600">{t.sugarLabel}</span> {lang === 'cn' ? item.sugarGuideCN : item.sugarGuideEN}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DrinkCard;
