
import React, { useState, useRef } from 'react';
import { Product, WikiItem, Announcement } from '../types';
import { Lock, Plus, Edit, X, Upload, FileText } from 'lucide-react';

interface StaffDashboardProps {
    menuItems: Product[];
    wikiItems: WikiItem[];
    announcementData: Announcement;
    updateItem: (id: string, data: any) => void;
    addItem: (data: any) => void;
    updateWiki: (id: string, data: any) => void;
    addWiki: (data: any) => void;
    updateAnnouncement: (data: any) => void;
    onSyncData: (csvText: string) => void;
    onExit: () => void;
}

const EditProductModal = ({ item, onSave, onClose }: { item: any, onSave: (d: any) => void, onClose: () => void }) => {
    const [formData, setFormData] = useState(item || { id: `new_${Date.now()}`, status: 'active', type: 'milk', subType: 'classic', tags: [], nameCN: '', nameEN: '', price: 5.0, keywords: '', descCN: '', descEN: '', sugarGuideCN: '', sugarGuideEN: '' });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => 
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const handleTagChange = (tag: string) => {
        const newTags = formData.tags.includes(tag) ? formData.tags.filter((t: string) => t !== tag) : [...formData.tags, tag];
        setFormData({ ...formData, tags: newTags });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="p-4 border-b border-stone-100 flex justify-between items-center bg-stone-50"><h3 className="font-bold text-lg text-stone-800">{item ? 'Edit Product' : 'Add New Product'}</h3><button onClick={onClose} className="p-2 hover:bg-stone-200 rounded-full"><X size={20}/></button></div>
                <div className="p-6 overflow-y-auto space-y-4">
                    <div className="grid grid-cols-2 gap-3"><div><label className="text-[10px] font-bold text-stone-400 uppercase">Name (CN)</label><input name="nameCN" value={formData.nameCN} onChange={handleChange} className="w-full p-2 border rounded-lg"/></div><div><label className="text-[10px] font-bold text-stone-400 uppercase">Name (EN)</label><input name="nameEN" value={formData.nameEN} onChange={handleChange} className="w-full p-2 border rounded-lg"/></div></div>
                    <div className="grid grid-cols-2 gap-3"><div><label className="text-[10px] font-bold text-stone-400 uppercase">Price (€)</label><input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full p-2 border rounded-lg" step="0.1"/></div><div><label className="text-[10px] font-bold text-stone-400 uppercase">Status</label><select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded-lg bg-white"><option value="active">🟢 Active</option><option value="inactive">🔴 Inactive</option><option value="new">🆕 New</option><option value="limited">✨ Limited</option><option value="promotion">🎁 Sale</option></select></div></div>
                    <div className="grid grid-cols-2 gap-3"><div><label className="text-[10px] font-bold text-stone-400 uppercase">Category</label><select name="type" value={formData.type} onChange={handleChange} className="w-full p-2 border rounded-lg bg-white"><option value="milk">Milk Tea</option><option value="fruit">Fruit Tea</option><option value="matcha">Matcha</option><option value="coffee">Coffee</option></select></div><div><label className="text-[10px] font-bold text-stone-400 uppercase">Keywords</label><input name="keywords" value={formData.keywords} onChange={handleChange} className="w-full p-2 border rounded-lg"/></div></div>
                    <div><label className="text-[10px] font-bold text-stone-400 uppercase block mb-1">Temp Tags</label><div className="flex gap-2">{['hot', 'cold'].map(t => (<button key={t} onClick={() => handleTagChange(t)} className={`px-3 py-1 rounded-full text-xs border ${formData.tags.includes(t) ? 'bg-emerald-100 border-emerald-500 text-emerald-700' : 'bg-white border-stone-200 text-stone-500'}`}>{t.toUpperCase()}</button>))}</div></div>
                    <div><label className="text-[10px] font-bold text-stone-400 uppercase">Ingredients (CN)</label><textarea name="descCN" value={formData.descCN} onChange={handleChange} className="w-full p-2 border rounded-lg" rows={2}/></div>
                    <div><label className="text-[10px] font-bold text-stone-400 uppercase">Ingredients (EN)</label><textarea name="descEN" value={formData.descEN} onChange={handleChange} className="w-full p-2 border rounded-lg" rows={2}/></div>
                    <div><label className="text-[10px] font-bold text-stone-400 uppercase">Sugar Guide (CN & EN)</label><input name="sugarGuideCN" value={formData.sugarGuideCN} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="中文建议"/> <input name="sugarGuideEN" value={formData.sugarGuideEN} onChange={handleChange} className="w-full p-2 border rounded-lg mt-1" placeholder="English Guide"/></div>
                </div>
                <div className="p-4 border-t border-stone-100 bg-stone-50"><button onClick={() => onSave(formData)} className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition">Save Product</button></div>
            </div>
        </div>
    );
};

const EditWikiModal = ({ item, onSave, onClose }: { item: any, onSave: (d: any) => void, onClose: () => void }) => {
    const [formData, setFormData] = useState(item || { id: `i_${Date.now()}`, nameCN: '', nameEN: '', descCN: '', descEN: '' });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl p-6 space-y-4">
                <h3 className="font-bold text-lg border-b pb-2 text-stone-800">{item ? 'Edit Ingredient' : 'Add Ingredient'}</h3>
                <input name="nameCN" value={formData.nameCN} onChange={handleChange} className="w-full p-2 border rounded" placeholder="原料名 (CN)" />
                <input name="nameEN" value={formData.nameEN} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Name (EN)" />
                <textarea name="descCN" value={formData.descCN} onChange={handleChange} className="w-full p-2 border rounded" rows={2} placeholder="描述 (CN)" />
                <textarea name="descEN" value={formData.descEN} onChange={handleChange} className="w-full p-2 border rounded" rows={2} placeholder="Description (EN)" />
                <div className="flex gap-2 pt-2">
                    <button onClick={onClose} className="flex-1 py-2 bg-stone-100 rounded-lg text-stone-500 font-bold">Cancel</button>
                    <button onClick={() => onSave(formData)} className="flex-1 py-2 bg-emerald-600 text-white rounded-lg font-bold">Save</button>
                </div>
            </div>
        </div>
    );
};

const AnnouncementManager = ({ data, onSave }: { data: Announcement, onSave: (d: Announcement) => void }) => {
    const [formData, setFormData] = useState(data);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { 
        setFormData({ ...formData, [e.target.name]: e.target.value }); 
    };
    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, enabled: e.target.checked });
    };

    return (
        <div className="space-y-4 p-2">
            <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-700">Enable Popup (启用弹窗)</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" name="enabled" checked={formData.enabled} onChange={handleToggle} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-100 space-y-3">
                <h4 className="text-xs font-bold text-emerald-600 uppercase border-b pb-1">Header & Date</h4>
                <div className="grid grid-cols-2 gap-2">
                    <div><label className="text-[10px] font-bold text-stone-400 uppercase">Title (CN)</label><input name="titleCN" value={formData.titleCN} onChange={handleChange} className="w-full p-2 border rounded-lg"/></div>
                    <div><label className="text-[10px] font-bold text-stone-400 uppercase">Title (EN)</label><input name="titleEN" value={formData.titleEN} onChange={handleChange} className="w-full p-2 border rounded-lg"/></div>
                </div>
                <div><label className="text-[10px] font-bold text-stone-400 uppercase">Date Range</label><input name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded-lg"/></div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-100 space-y-3">
                <h4 className="text-xs font-bold text-emerald-600 uppercase border-b pb-1">Main Offer</h4>
                <div className="grid grid-cols-2 gap-2">
                    <div><label className="text-[10px] font-bold text-stone-400 uppercase">Headline (CN)</label><input name="mainPromoCN" value={formData.mainPromoCN} onChange={handleChange} className="w-full p-2 border rounded-lg"/></div>
                    <div><label className="text-[10px] font-bold text-stone-400 uppercase">Headline (EN)</label><input name="mainPromoEN" value={formData.mainPromoEN} onChange={handleChange} className="w-full p-2 border rounded-lg"/></div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div><label className="text-[10px] font-bold text-stone-400 uppercase">Subtext (CN)</label><input name="subPromoCN" value={formData.subPromoCN} onChange={handleChange} className="w-full p-2 border rounded-lg"/></div>
                    <div><label className="text-[10px] font-bold text-stone-400 uppercase">Subtext (EN)</label><input name="subPromoEN" value={formData.subPromoEN} onChange={handleChange} className="w-full p-2 border rounded-lg"/></div>
                </div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-100 space-y-3">
                <h4 className="text-xs font-bold text-emerald-600 uppercase border-b pb-1">Items Included</h4>
                <div className="grid grid-cols-2 gap-2">
                    <div><label className="text-[10px] font-bold text-stone-400 uppercase">Label (CN)</label><input name="includedCN" value={formData.includedCN} onChange={handleChange} className="w-full p-2 border rounded-lg"/></div>
                    <div><label className="text-[10px] font-bold text-stone-400 uppercase">Label (EN)</label><input name="includedEN" value={formData.includedEN} onChange={handleChange} className="w-full p-2 border rounded-lg"/></div>
                </div>
                <div className="grid grid-cols-1 gap-2">
                    <div><label className="text-[10px] font-bold text-stone-400 uppercase">Product List (CN)</label><textarea name="itemsCN" value={formData.itemsCN} onChange={handleChange} className="w-full p-2 border rounded-lg" rows={3}/></div>
                    <div><label className="text-[10px] font-bold text-stone-400 uppercase">Product List (EN)</label><textarea name="itemsEN" value={formData.itemsEN} onChange={handleChange} className="w-full p-2 border rounded-lg" rows={3}/></div>
                </div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-100 space-y-3">
                <h4 className="text-xs font-bold text-emerald-600 uppercase border-b pb-1">Rules & Disclaimer</h4>
                <div><label className="text-[10px] font-bold text-stone-400 uppercase">Rules (CN)</label><textarea name="rulesCN" value={formData.rulesCN} onChange={handleChange} className="w-full p-2 border rounded-lg" rows={2}/></div>
                <div><label className="text-[10px] font-bold text-stone-400 uppercase">Rules (EN)</label><textarea name="rulesEN" value={formData.rulesEN} onChange={handleChange} className="w-full p-2 border rounded-lg" rows={2}/></div>
                <div><label className="text-[10px] font-bold text-stone-400 uppercase">Disclaimer (CN)</label><textarea name="disclaimerCN" value={formData.disclaimerCN} onChange={handleChange} className="w-full p-2 border rounded-lg" rows={2}/></div>
                <div><label className="text-[10px] font-bold text-stone-400 uppercase">Disclaimer (EN)</label><textarea name="disclaimerEN" value={formData.disclaimerEN} onChange={handleChange} className="w-full p-2 border rounded-lg" rows={2}/></div>
            </div>
            <button onClick={() => onSave(formData)} className="w-full py-3 bg-amber-500 text-white font-bold rounded-xl shadow-md hover:bg-amber-600">Save Settings</button>
        </div>
    );
};

const StaffDashboard: React.FC<StaffDashboardProps> = ({ menuItems, wikiItems, announcementData, updateItem, addItem, updateWiki, addWiki, updateAnnouncement, onSyncData, onExit }) => {
    const [activeTab, setActiveTab] = useState('menu');
    const [editingItem, setEditingItem] = useState<any>(null);
    const [editingWiki, setEditingWiki] = useState<any>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const csvText = event.target?.result as string;
            if (csvText) {
                onSyncData(csvText);
            }
        };
        reader.readAsText(file);
        // Reset input so you can upload the same file again if needed
        e.target.value = '';
    };

    return (
        <div className="h-screen w-full flex flex-col bg-stone-50 font-sans animate-slide-up">
            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept=".csv" 
                className="hidden" 
            />
            
            {editingItem && (
                <EditProductModal 
                    item={editingItem === 'new' ? null : editingItem} 
                    onSave={(data) => { 
                        editingItem === 'new' ? addItem(data) : updateItem(data.id, data); 
                        setEditingItem(null); 
                    }} 
                    onClose={() => setEditingItem(null)} 
                />
            )}
            {editingWiki && (
                <EditWikiModal 
                    item={editingWiki === 'new' ? null : editingWiki} 
                    onSave={(data) => { 
                        editingWiki === 'new' ? addWiki(data) : updateWiki(data.id, data); 
                        setEditingWiki(null); 
                    }} 
                    onClose={() => setEditingWiki(null)} 
                />
            )}
            <div className="bg-white border-b border-stone-200 pt-10 pb-2 sticky top-0 z-10 shadow-sm px-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-black text-xl text-stone-800 flex items-center gap-2"><Lock size={20} className="text-emerald-600"/> Dashboard</h2>
                    <div className="flex gap-2">
                         <button onClick={() => fileInputRef.current?.click()} className="text-xs font-bold text-blue-600 bg-blue-100 hover:bg-blue-200 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors">
                            <Upload size={12} /> Import CSV
                        </button>
                        <button onClick={onExit} className="text-xs font-bold text-stone-500 bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-full transition-colors">Exit</button>
                    </div>
                </div>
                <div className="flex gap-1 bg-stone-100 p-1 rounded-xl">
                    {['menu', 'wiki', 'promo'].map(tab => (
                        <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-2 text-xs font-bold rounded-lg transition capitalize ${activeTab === tab ? 'bg-white text-emerald-700 shadow-sm' : 'text-stone-400'}`}>{tab} Mgr</button>
                    ))}
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 pb-20">
                {activeTab === 'menu' && (
                    <div>
                        <button onClick={() => setEditingItem('new')} className="w-full py-3 mb-4 border-2 border-dashed border-emerald-300 text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 flex items-center justify-center gap-2"><Plus size={18}/> Add New Product</button>
                        <div className="space-y-3">
                            {menuItems.map(item => (
                                <div key={item.id} className={`bg-white p-3 rounded-xl border flex justify-between items-center ${item.status === 'inactive' ? 'border-stone-200 opacity-60' : 'border-stone-100 shadow-sm'}`}>
                                    <div className="flex-1 overflow-hidden mr-2">
                                        <div className="flex items-center gap-2">
                                            <span className={`text-[10px] px-1.5 rounded font-bold uppercase ${item.status === 'active' ? 'bg-green-100 text-green-700' : item.status === 'new' ? 'bg-red-100 text-red-700' : item.status === 'inactive' ? 'bg-gray-100 text-gray-500' : 'bg-purple-100 text-purple-700'}`}>{item.status}</span>
                                            <h4 className="font-bold text-sm truncate">{item.nameCN}</h4>
                                        </div>
                                    </div>
                                    <button onClick={() => setEditingItem(item)} className="p-2 bg-stone-50 rounded-lg text-stone-500 hover:bg-emerald-100 hover:text-emerald-600"><Edit size={16}/></button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {activeTab === 'wiki' && (
                    <div>
                        <button onClick={() => setEditingWiki('new')} className="w-full py-3 mb-4 border-2 border-dashed border-amber-300 text-amber-600 font-bold rounded-xl hover:bg-amber-50 flex items-center justify-center gap-2"><Plus size={18}/> Add Ingredient</button>
                        <div className="space-y-3">
                            {wikiItems.map(item => (
                                <div key={item.id} className="bg-white p-3 rounded-xl border border-stone-100 shadow-sm flex justify-between items-center">
                                    <div>
                                        <h4 className="font-bold text-stone-800 text-sm">{item.nameCN}</h4>
                                        <p className="text-xs text-stone-400">{item.nameEN}</p>
                                    </div>
                                    <button onClick={() => setEditingWiki(item)} className="p-2 bg-stone-50 rounded-lg text-stone-500 hover:bg-amber-100 hover:text-amber-600"><Edit size={16}/></button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {activeTab === 'promo' && (
                    <AnnouncementManager data={announcementData} onSave={updateAnnouncement} />
                )}
            </div>
        </div>
    );
};

export default StaffDashboard;
