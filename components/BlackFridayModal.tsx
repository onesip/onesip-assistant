import React from 'react';
import { Announcement, Language } from '../types';
import { X, Sparkles } from 'lucide-react';

interface BlackFridayModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: Language;
    data: Announcement;
}

const BlackFridayModal: React.FC<BlackFridayModalProps> = ({ isOpen, onClose, lang, data }) => {
    if (!isOpen || !data || !data.enabled) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="w-full max-w-sm rounded-[2.5rem] shadow-2xl overflow-hidden animate-pop-in flex flex-col relative" style={{background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'}}>
                <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white/80 hover:bg-white/20 transition z-10">
                    <X size={20}/>
                </button>
                <div className="h-40 bg-[#F59E0B] relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="text-center z-10 p-4">
                        <h2 className="text-3xl font-black text-black tracking-tighter leading-none mb-1">{lang === 'cn' ? data.titleCN : data.titleEN}</h2>
                        <p className="text-black/80 font-bold tracking-widest text-xs uppercase border-t border-black/20 pt-2 mt-1">{data.date}</p>
                    </div>
                </div>
                <div className="p-5 text-white space-y-4 overflow-y-auto max-h-[50vh]">
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-[#F59E0B] text-gold-gradient">{lang === 'cn' ? data.mainPromoCN : data.mainPromoEN}</h3>
                        <p className="text-xs text-gray-400">{lang === 'cn' ? data.subPromoCN : data.subPromoEN}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                        <h4 className="text-[#F59E0B] font-bold text-[10px] mb-2 uppercase tracking-wide flex items-center gap-2">
                            <Sparkles size={12}/> {lang === 'cn' ? data.includedCN : data.includedEN}
                        </h4>
                        <p className="text-xs text-gray-300 whitespace-pre-line leading-relaxed">{lang === 'cn' ? data.itemsCN : data.itemsEN}</p>
                    </div>
                    <div className="text-[10px] text-gray-500 text-center leading-tight px-2 whitespace-pre-line">
                        <p className="mb-2 text-gray-300">{lang === 'cn' ? data.rulesCN : data.rulesEN}</p>
                        <div className="pt-2 border-t border-white/10">{lang === 'cn' ? data.disclaimerCN : data.disclaimerEN}</div>
                    </div>
                </div>
                <div className="p-4 bg-black/20 backdrop-blur-md border-t border-white/5">
                    <button onClick={onClose} className="w-full py-3 bg-[#F59E0B] text-black font-extrabold text-sm rounded-xl shadow-lg hover:bg-amber-400 transition active:scale-95">
                        {lang === 'cn' ? 'OK' : 'GOT IT'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlackFridayModal;
