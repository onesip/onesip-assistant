import React from 'react';
import { Product, Language } from '../types';
import { ChevronLeft, Coffee, Droplet, Leaf } from 'lucide-react';

interface ProductDetailProps {
    product: Product;
    onClose: () => void;
    lang: Language;
    t: any;
}

const ProductDetailModal: React.FC<ProductDetailProps> = ({ product, onClose, lang, t }) => {
    const detailData = { ingred: lang === 'cn' ? product.descCN : product.descEN };
    return (
        <div className="h-screen w-full flex flex-col font-sans bg-white fixed inset-0 z-50 animate-slide-up">
            <div className="p-4 flex justify-between items-center border-b border-stone-50 sticky top-0 bg-white/90 backdrop-blur-sm z-10">
                <button onClick={onClose} className="p-2 rounded-full hover:bg-stone-50 transition">
                    <ChevronLeft size={24} className="text-textMain"/>
                </button>
                <span className="font-bold text-lg text-primary">{lang === 'cn' ? '饮品详情' : 'Details'}</span>
                <div className="w-8"></div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 pb-32">
                <div className="bg-[#FAF7F0] p-6 rounded-[2.5rem] mb-6 text-center relative overflow-hidden">
                        {product.status === 'new' && <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-bl-2xl z-20 shadow-sm">NEW</div>}
                        {product.status === 'limited' && <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-bl-2xl z-20 shadow-sm">LIMITED</div>}
                        {product.status === 'promotion' && <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-3 py-1.5 rounded-bl-2xl z-20 shadow-sm">SALE</div>}
                        
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <div className="w-24 h-24 mx-auto bg-white rounded-3xl flex items-center justify-center text-5xl shadow-sm mb-4 relative z-10">
                            {product.type === 'coffee' ? '☕' : product.type === 'matcha' ? '🍵' : product.type === 'fruit' ? '🍹' : product.type === 'cake' ? '🍰' : '🧋'}
                        </div>
                        <h2 className="text-2xl font-black text-gray-800 mb-1 relative z-10 leading-tight">{lang === 'cn' ? product.nameCN : product.nameEN}</h2>
                        <p className="text-sm text-gray-500 font-medium relative z-10">{lang === 'cn' ? product.nameEN : product.nameCN}</p>
                        <div className="mt-4 inline-block bg-white px-4 py-1.5 rounded-full shadow-sm text-emerald-700 font-bold text-lg relative z-10">€{product.price.toFixed(1)}</div>
                </div>
                
                <div className="space-y-6">
                    <div className="bg-orange-50/50 rounded-3xl p-5 border border-orange-100">
                        <h3 className="font-bold text-orange-700 mb-2 flex items-center gap-2"><Droplet size={18}/> {t.sugarLabel}</h3>
                        <p className="text-orange-800/80 text-sm leading-relaxed font-medium">{lang === 'cn' ? product.sugarGuideCN : product.sugarGuideEN}</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-amber-700 mb-3 flex items-center gap-2 px-1"><Leaf size={18}/> {lang === 'cn' ? '配料 & 描述' : 'Ingredients & Desc'}</h3>
                        <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm">
                            <p className="text-stone-600 text-sm leading-relaxed">{detailData.ingred}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-stone-100">
                <button 
                    onClick={() => { onClose(); window.open('https://miniprogram.orderpin.co/app/16476', '_blank'); }} 
                    className="w-full py-4 bg-emerald-600 text-white font-bold text-lg rounded-2xl shadow-lg shadow-emerald-200 active:scale-95 transition flex items-center justify-center gap-2"
                >
                    {t.btnOrder} <Coffee size={20} />
                </button>
            </div>
        </div>
    );
};

export default ProductDetailModal;
