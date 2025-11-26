

import React, { useState, useEffect, useRef } from 'react';
import { initFirebase } from './services/firebase';
import { Product, WikiItem, Announcement, Message, Language } from './types';
import { INITIAL_MENU_DATA, INITIAL_WIKI_DATA, INITIAL_ANNOUNCEMENT_DATA, UI_TEXT } from './constants';
import SipSipMascot from './components/SipSipMascot';
import DrinkCard from './components/DrinkCard';
import ChatBubble from './components/ChatBubble';
import ProductDetailModal from './components/ProductDetailModal';
import WikiScreen from './components/WikiScreen';
import StaffDashboard from './components/StaffDashboard';
import BlackFridayModal from './components/BlackFridayModal';
import { Trash2, Lock, Gift, Globe, ChevronRight, ShieldAlert, Flame, Snowflake, X } from 'lucide-react';

const App: React.FC = () => {
    // --- Data State ---
    const [fbModules, setFbModules] = useState<any>(null);
    const [menuItems, setMenuItems] = useState<Product[]>(INITIAL_MENU_DATA);
    const [wikiItems, setWikiItems] = useState<WikiItem[]>(INITIAL_WIKI_DATA);
    const [announcement, setAnnouncement] = useState<Announcement>(INITIAL_ANNOUNCEMENT_DATA);
    
    // --- UI State ---
    const [view, setView] = useState<'standby' | 'chat' | 'menu' | 'wiki' | 'staff-login' | 'staff-dashboard'>('standby');
    const [lang, setLang] = useState<Language>('cn');
    const [messages, setMessages] = useState<Message[]>([]);
    const [staffPassword, setStaffPassword] = useState('');
    const [mascotMood, setMascotMood] = useState<'idle' | 'happy' | 'thinking'>('idle');
    const [showNotice, setShowNotice] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const t = UI_TEXT[lang];

    // --- Firebase Init & Real-time Sync ---
    useEffect(() => {
        let unsubMenu: (() => void) | undefined;
        let unsubWiki: (() => void) | undefined;
        let unsubPromo: (() => void) | undefined;

        const load = async () => {
            const mods = await initFirebase();
            if (mods) {
                setFbModules(mods);
                const { db, collection, onSnapshot, doc, setDoc } = mods;
                const appId = 'onesip-default'; 
                
                // 1. Menu Sync & Auto-Seeding
                unsubMenu = onSnapshot(collection(db, 'artifacts', appId, 'public', 'data', 'menu'), (snap: any) => {
                    if (snap.empty) {
                        console.log("Database empty. Seeding initial menu data...");
                        INITIAL_MENU_DATA.forEach(item => {
                            setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'menu', item.id), item)
                                .catch((e: any) => console.error("Seeding menu failed:", e));
                        });
                    } else {
                        setMenuItems(snap.docs.map((d: any) => ({ id: d.id, ...d.data() })));
                    }
                });

                // 2. Wiki Sync & Auto-Seeding
                unsubWiki = onSnapshot(collection(db, 'artifacts', appId, 'public', 'data', 'wiki'), (snap: any) => {
                    if (snap.empty) {
                        console.log("Database empty. Seeding initial wiki data...");
                        INITIAL_WIKI_DATA.forEach(item => {
                            setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'wiki', item.id), item)
                                .catch((e: any) => console.error("Seeding wiki failed:", e));
                        });
                    } else {
                        setWikiItems(snap.docs.map((d: any) => ({ id: d.id, ...d.data() })));
                    }
                });

                // 3. Promo Sync & Auto-Seeding
                unsubPromo = onSnapshot(doc(db, 'artifacts', appId, 'public', 'data', 'promotion', 'main'), (snap: any) => {
                    if (!snap.exists()) {
                        console.log("Promo data missing. Seeding initial promo...");
                        setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'promotion', 'main'), INITIAL_ANNOUNCEMENT_DATA)
                            .catch((e: any) => console.error("Seeding promo failed:", e));
                    } else {
                        setAnnouncement(snap.data());
                    }
                });
            }
        };
        load();

        // Cleanup listeners on unmount
        return () => {
            if (unsubMenu) unsubMenu();
            if (unsubWiki) unsubWiki();
            if (unsubPromo) unsubPromo();
        };
    }, []);

    // --- Staff Actions (Write to Cloud) ---
    const updateItem = async (id: string, data: any) => {
        if (!fbModules) return;
        const { db, doc, updateDoc } = fbModules;
        const appId = 'onesip-default';
        try {
            await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'menu', id), data);
        } catch(e) { console.error("Update item failed", e); }
    };

    const addItem = async (data: any) => {
        if (!fbModules) return;
        const { db, doc, setDoc } = fbModules;
        const appId = 'onesip-default';
        try {
            await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'menu', data.id), data);
        } catch(e) { console.error("Add item failed", e); }
    };

    const updateWiki = async (id: string, data: any) => {
        if (!fbModules) return;
        const { db, doc, updateDoc } = fbModules;
        const appId = 'onesip-default';
        try {
            await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'wiki', id), data);
        } catch(e) { console.error("Update wiki failed", e); }
    };

    const addWiki = async (data: any) => {
        if (!fbModules) return;
        const { db, doc, setDoc } = fbModules;
        const appId = 'onesip-default';
        try {
            await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'wiki', data.id), data);
        } catch(e) { console.error("Add wiki failed", e); }
    };

    const updateAnnouncement = async (data: any) => {
        if (!fbModules) return;
        const { db, doc, setDoc } = fbModules;
        const appId = 'onesip-default';
        try {
            await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'promotion', 'main'), data);
        } catch(e) { console.error("Update promo failed", e); }
    };

    const reseedDatabase = async () => {
        if (!fbModules) { alert("Firebase not connected."); return; }
        const { db, doc, setDoc } = fbModules;
        const appId = 'onesip-default';
        
        if (!window.confirm("CONFIRM RE-SEED: This will overwrite cloud data with local code constants. Are you sure?")) return;

        try {
            // 1. Menu
            for (const item of INITIAL_MENU_DATA) {
                await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'menu', item.id), item);
            }
            // 2. Wiki
            for (const item of INITIAL_WIKI_DATA) {
                await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'wiki', item.id), item);
            }
            // 3. Promo
            await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'promotion', 'main'), INITIAL_ANNOUNCEMENT_DATA);
            
            alert("✅ Database re-seeded successfully from code!");
        } catch (e) {
            console.error("Reseed failed", e);
            alert("❌ Reseed failed. Check console.");
        }
    };

    // --- CSV INTELLIGENT PARSER & SYNC ---
    const parseAndSyncCSV = async (csvText: string) => {
        if (!fbModules) { alert("Firebase not connected."); return; }
        const { db, doc, setDoc } = fbModules;
        const appId = 'onesip-default';

        if (!window.confirm("CONFIRM IMPORT: This will analyze your CSV and overwrite the database. Proceed?")) return;

        try {
            const lines = csvText.split(/\r?\n/).filter(l => l.trim() !== '');
            const parsedItems: Product[] = [];
            
            // Skip header (Row 0)
            for (let i = 1; i < lines.length; i++) {
                // Simple CSV splitter, assuming no commas within fields for this specific use case
                // or fields are clean. For better robustness, a library is usually preferred,
                // but we'll use a smart split here.
                const cols = lines[i].split(',');
                if (cols.length < 5) continue; // Skip invalid rows

                const rawName = cols[0].trim();
                const rawCategory = cols[1]?.toLowerCase() || '';
                const rawStatus = cols[2]?.trim() || '';
                const rawPrice = cols[6]?.trim() || '5';
                const rawTags = cols[7]?.toLowerCase() || '';
                const rawSugar = cols[9]?.trim() || '';
                const rawKeywords = cols[10]?.trim() || '';
                const rawIngred = cols[11]?.trim() || '';

                // 1. Intelligent Name Split (EN vs CN)
                // Find first Chinese character
                const cnMatch = rawName.match(/[\u4e00-\u9fa5]/);
                let nameEN = rawName;
                let nameCN = rawName;
                
                if (cnMatch && cnMatch.index) {
                    nameEN = rawName.substring(0, cnMatch.index).trim();
                    nameCN = rawName.substring(cnMatch.index).trim();
                }

                // 2. Generate Deterministic ID
                const id = nameEN.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || `item_${i}`;

                // 3. Map Status
                let status: any = 'active';
                if (rawStatus.includes('新品')) status = 'new';
                if (rawStatus.includes('下架') || rawStatus.includes('未上架')) status = 'inactive';
                if (rawStatus.includes('n')) status = 'inactive'; // Handle 'n' from csv

                // 4. Map Type & SubType
                let type: any = 'milk';
                let subType = 'classic';
                
                if (rawCategory.includes('coffee')) { type = 'coffee'; subType = 'rich'; }
                else if (rawCategory.includes('matcha')) { type = 'matcha'; subType = 'classic'; }
                else if (rawCategory.includes('fruit')) { type = 'fruit'; subType = 'sweet'; }

                // Refine SubType
                if (rawCategory.includes('养生') || rawKeywords.includes('养生')) subType = 'healthy';
                if (rawCategory.includes('cheese') || rawName.toLowerCase().includes('cheezo') || rawName.includes('芝芝')) subType = 'cheese';
                if (rawCategory.includes('oat') || rawName.toLowerCase().includes('oat')) subType = 'plant';
                if (rawCategory.includes('salt') || rawName.includes('咸')) subType = 'rich';

                // 5. Parse Tags
                const tags: string[] = [];
                if (rawTags.includes('cold')) tags.push('cold');
                if (rawTags.includes('warm') || rawTags.includes('hot')) tags.push('hot');
                if (cols[3]?.trim() === 'N' || rawName.toLowerCase().includes('no caffeine')) tags.push('no-caffeine');

                // 6. Clean Price
                const price = parseFloat(rawPrice.replace(/[^0-9.]/g, '')) || 5.0;

                const newItem: Product = {
                    id,
                    status,
                    nameCN,
                    nameEN,
                    price,
                    type,
                    subType,
                    tags,
                    keywords: rawKeywords,
                    descCN: rawIngred,
                    descEN: nameEN, // Fallback if no specific EN desc in CSV
                    sugarGuideCN: rawSugar,
                    sugarGuideEN: rawSugar.includes('Fixed') ? 'Fixed Sugar' : 'Recommend 30% or 0%.'
                };
                
                parsedItems.push(newItem);
            }

            console.log(`Parsed ${parsedItems.length} items. Uploading...`);
            
            // Batch upload
            for (const item of parsedItems) {
                await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'menu', item.id), item);
            }

            alert(`✅ Successfully imported ${parsedItems.length} items!`);

        } catch (e) {
            console.error("CSV Parse Error", e);
            alert("❌ Failed to parse CSV. Please ensure format matches standard.");
        }
    };

    const activeMenuItems = menuItems.filter(item => item.status !== 'inactive');

    const addBotMessage = (text: string, component: React.ReactNode = null) => {
        setMessages(prev => [...prev, { type: 'bot', text, component }]);
    };
    
    const addUserMessage = (text: string, skipNLP = false) => {
        setMessages(prev => [...prev, { type: 'user', text }]);
        if (!skipNLP) handleBotResponse(text);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleStart = (selectedLang: Language) => {
        setLang(selectedLang);
        setView('chat');
        setMessages([]);
        setTimeout(() => {
            addBotMessage(UI_TEXT[selectedLang].welcome);
            if(announcement.enabled) setShowNotice(true);
        }, 300);
    };

    // --- Quiz Logic ---
    const handleQuizStep1 = (val: string, reply: string) => {
        addUserMessage(reply, true);
        setTimeout(() => addBotMessage(t.quiz.q2, (
            <div className="grid grid-cols-2 gap-3 mt-3 animate-pop-in">
                {['matcha', 'fruit', 'milk', 'coffee'].map(cat => (
                    <button key={cat} onClick={() => handleQuizStep2(cat, val)} className="p-4 bg-stone-50 border rounded-2xl text-xs font-bold uppercase hover:bg-stone-100">{cat}</button>
                ))}
            </div>
        )), 500);
    };

    const handleQuizStep2 = (category: string, temp: string) => {
        const replyMap: any = { matcha: "Matcha 🍵", fruit: "Fruit Tea 🍹", milk: "Milk Tea 🧋", coffee: "Coffee ☕" };
        addUserMessage(replyMap[category], true);
        let question = "";
        let options: any[] = [];
        
        if (category === 'milk') {
            question = t.quiz.q3_milk;
            options = [
                { label: t.quiz.a3_milk_healthy, filter: (i:Product) => i.subType === 'healthy' }, 
                { label: t.quiz.a3_milk_classic, filter: (i:Product) => i.subType === 'classic' }, 
                { label: t.quiz.a3_milk_rich, filter: (i:Product) => i.subType === 'rich' }, // Includes Salté and Brown Sugar
                { label: t.quiz.a3_milk_plant, filter: (i:Product) => i.subType === 'plant' }
            ];
        } else if (category === 'fruit') {
            question = t.quiz.q3_fruit;
            options = [
                { label: "Cheese Foam 🧀 (Cheezo)", filter: (i:Product) => i.subType === 'cheese' },
                { label: t.quiz.a3_fruit_sweet, filter: (i:Product) => i.subType === 'sweet' }, 
                { label: t.quiz.a3_fruit_sour, filter: (i:Product) => i.subType === 'sour' }
            ];
        } else if (category === 'matcha') {
            question = t.quiz.q3_matcha;
            options = [
                { label: t.quiz.a3_matcha_classic, filter: (i:Product) => i.subType === 'classic' }, 
                { label: t.quiz.a3_matcha_rich, filter: (i:Product) => i.subType === 'rich' }, 
                { label: t.quiz.a3_matcha_plant, filter: (i:Product) => i.subType === 'plant' }, 
                { label: t.quiz.a3_matcha_fruity, filter: (i:Product) => i.subType === 'fruity' }
            ];
        } else {
            question = t.quiz.q3_coffee;
            options = [
                { label: t.quiz.a3_coffee_rich, filter: (i:Product) => i.subType === 'rich' }, 
                { label: t.quiz.a3_coffee_fruity, filter: (i:Product) => i.subType === 'fruity' }, 
                { label: t.quiz.a3_coffee_plant, filter: (i:Product) => i.subType === 'plant' }
            ];
        }
        
        setTimeout(() => addBotMessage(question, (
            <div className="flex flex-col gap-2 mt-3 animate-pop-in">
                {options.map((opt, idx) => (
                    <button key={idx} onClick={() => handleQuizStep3(category, temp, opt)} className="p-3 bg-white border border-stone-100 rounded-xl text-stone-600 text-sm font-bold text-left px-4 hover:bg-emerald-50">{opt.label}</button>
                ))}
            </div>
        )), 500);
    };

    const handleQuizStep3 = (category: string, temp: string, opt: any) => {
        addUserMessage(opt.label, true);
        setMascotMood('thinking');
        const results = activeMenuItems.filter(item => {
            if (item.type !== category) return false;
            // Hot check
            if (temp === 'hot' && !item.tags.includes('hot')) return false;
            // Cold check
            if (temp === 'cold' && !item.tags.includes('cold')) return false;
            return opt.filter(item);
        });
        
        setTimeout(() => {
            setMascotMood('happy');
            if (results.length > 0) {
                addBotMessage(t.quiz.result_intro, (
                    <div className="mt-2 animate-pop-in">
                        {results.slice(0, 4).map(item => ( <DrinkCard key={item.id} item={item} lang={lang} t={t} onClick={() => setSelectedProduct(item)} /> ))}
                        <div className="mt-4 pt-4 border-t border-stone-100">
                            <button onClick={() => window.open('https://miniprogram.orderpin.co/app/16476', '_blank')} className="w-full py-3 bg-emerald-600 text-white font-bold text-sm rounded-2xl shadow-lg hover:bg-emerald-700 active:scale-95 transition flex items-center justify-center gap-2 group">
                                <span>{t.btnOrder}</span><ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                ));
            } else {
                addBotMessage("Meow... No exact match found! 🍐", (
                    <button onClick={() => addBotMessage(t.quiz.q1, renderQuizStartButtons())} className="mt-2 text-emerald-600 font-bold underline">Try Again</button>
                ));
            }
        }, 1000);
    };

    const renderQuizStartButtons = () => (
        <div className="grid grid-cols-2 gap-3 mt-3 animate-pop-in">
            <button onClick={() => handleQuizStep1('hot', t.quiz.reply_hot)} className="p-4 bg-orange-50 border border-orange-200 rounded-[1.5rem] text-orange-800 font-bold text-sm flex flex-col items-center hover:bg-orange-100"><Flame size={24} className="mb-1"/>{t.hot}</button>
            <button onClick={() => handleQuizStep1('cold', t.quiz.reply_cold)} className="p-4 bg-sky-50 border border-sky-200 rounded-[1.5rem] text-sky-800 font-bold text-sm flex flex-col items-center hover:bg-sky-100"><Snowflake size={24} className="mb-1"/>{t.cold}</button>
        </div>
    );

    const handleBotResponse = (inputText: string) => {
        const text = inputText.toLowerCase();
        const newItems = activeMenuItems.filter(i => i.status === 'new');
        if (text.includes('new') || text.includes('新品')) { 
            setTimeout(() => addBotMessage(t.nlp.new, (<div className="mt-2">{newItems.slice(0,5).map(item => ( <DrinkCard key={item.id} item={item} lang={lang} t={t} onClick={() => setSelectedProduct(item)} /> ))}</div>)), 500); 
        } else { 
            const results = activeMenuItems.filter(item => item.nameCN.includes(text) || item.nameEN.toLowerCase().includes(text) || item.keywords.includes(text)); 
            if (results.length > 0) setTimeout(() => addBotMessage(t.nlp.found, (<div className="mt-2">{results.slice(0, 4).map(item => ( <DrinkCard key={item.id} item={item} lang={lang} t={t} onClick={() => setSelectedProduct(item)} /> ))}</div>)), 500); 
            else setTimeout(() => addBotMessage(t.nlp.default, renderActionButtons()), 500); 
        }
    };

    const renderActionButtons = () => (
        <div className="flex flex-wrap gap-2 mt-3 animate-pop-in">
            <button onClick={() => addBotMessage(t.quiz.q1, renderQuizStartButtons())} className="flex-1 py-3 px-2 bg-white text-gray-700 text-xs font-bold rounded-2xl shadow-sm border border-stone-100 hover:bg-stone-50 transition active:scale-95 flex items-center justify-center">{t.btnRecommend}</button>
            <button onClick={() => setView('menu')} className="flex-1 py-3 px-2 bg-white text-gray-700 text-xs font-bold rounded-2xl shadow-sm border border-stone-100 hover:bg-stone-50 transition active:scale-95 flex items-center justify-center">{t.btnMenu}</button>
            <button onClick={() => setView('wiki')} className="flex-1 py-3 px-2 bg-amber-50 text-amber-800 text-xs font-bold rounded-2xl shadow-sm border border-amber-100 flex items-center justify-center">{t.btnWiki}</button>
            <button onClick={() => setShowNotice(true)} className="flex-1 py-3 px-2 bg-black text-[#F59E0B] text-xs font-bold rounded-2xl shadow-sm border border-black flex items-center justify-center">{t.btnNew}</button>
        </div>
    );

    // --- Render Views ---

    if (view === 'standby') {
        return (
            <div className="h-full w-full flex flex-col items-center justify-center bg-accent relative overflow-hidden p-6">
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-secondary opacity-50 blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-[#F2E6D8] opacity-50 blur-xl animate-pulse"></div>
                <div className="mb-8 transform scale-125">
                    <SipSipMascot mood="happy" onClick={() => {}} scale={1.6} />
                </div>
                <h1 className="text-4xl font-black tracking-wider mb-2 text-center text-primary">SIP SIP CAT<span className="block text-sm font-medium mt-2 opacity-80 tracking-normal">（吸吸猫）</span></h1>
                <div className="text-center mb-16 space-y-2 text-textMain"><p className="text-base font-bold">{lang === 'cn' ? '吸吸猫给你寻找最满足的一口' : 'Let Sip-Sip find your perfect sip'}</p></div>
                <div className="flex flex-col w-full max-w-xs gap-4 z-10">
                    <button onClick={() => handleStart('cn')} className="w-full py-4 bg-white rounded-full shadow-lg shadow-emerald-100/50 border-2 border-secondary text-primary font-bold text-lg active:scale-95 transition-transform flex items-center justify-center gap-3"><span className="text-2xl">✨</span> <span className="tracking-wide">帮我选一杯 (中文)</span></button>
                    <button onClick={() => handleStart('en')} className="w-full py-4 bg-white rounded-full shadow-lg shadow-emerald-100/50 border-2 border-secondary text-primary font-bold text-lg active:scale-95 transition-transform flex items-center justify-center gap-3"><span className="text-2xl">✨</span> <span className="tracking-wide">Help me pick (English)</span></button>
                </div>
            </div>
        );
    }

    if (selectedProduct) {
        return <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} lang={lang} t={t} wikiItems={wikiItems} />;
    }

    if (view === 'staff-login') {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-primary">
                <ShieldAlert size={48} className="mb-4 text-white/80"/>
                <h2 className="text-xl font-bold mb-2 text-white">Staff Access</h2>
                <input type="password" className="w-full max-w-xs bg-white/10 border border-white/20 rounded-2xl p-3 text-center text-lg tracking-widest mb-4 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 transition" maxLength={4} value={staffPassword} onChange={e => setStaffPassword(e.target.value)} placeholder="••••" />
                <div className="flex gap-4 w-full max-w-xs">
                    <button onClick={() => setView('chat')} className="flex-1 py-3 rounded-2xl bg-white/10 text-white text-sm font-bold hover:bg-white/20 transition">Cancel</button>
                    <button onClick={() => { if(staffPassword==='0117') setView('staff-dashboard'); else alert('Error code: 0117'); }} className="flex-1 py-3 rounded-2xl bg-white text-emerald-800 font-bold text-sm hover:bg-gray-50 transition">Enter</button>
                </div>
            </div>
        );
    }

    if (view === 'staff-dashboard') {
        return (
            <StaffDashboard 
                menuItems={menuItems} wikiItems={wikiItems} announcementData={announcement} 
                updateItem={updateItem} addItem={addItem} updateWiki={updateWiki} addWiki={addWiki} updateAnnouncement={updateAnnouncement} 
                onSyncData={parseAndSyncCSV}
                onExit={() => { setView('chat'); setStaffPassword(''); }} 
            />
        );
    }

    if (view === 'menu') {
        return (
            <div className="h-screen w-full flex flex-col font-sans animate-slide-up bg-accent">
                <div className="z-10 p-4 shadow-sm flex justify-between items-center rounded-b-3xl backdrop-blur-md bg-white/90 border-b border-stone-50 shrink-0">
                    <h2 className="font-bold text-lg text-primary">{lang === 'cn' ? '全线菜单' : 'Full Menu'}</h2>
                    <button onClick={() => setView('chat')} className="p-2 bg-stone-100 rounded-full text-gray-500 hover:bg-stone-200 transition"><X size={20} /></button>
                </div>
                <div className="flex-1 overflow-y-auto p-5 pb-20 scroll-smooth">
                    {['milk', 'fruit', 'matcha', 'coffee'].map(type => (
                        <div key={type} className="mb-8">
                            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 pl-2 flex items-center text-stone-400">
                                <span className="w-2 h-2 rounded-full mr-2 bg-primary"></span> {type === 'milk' ? 'Milk Tea 奶茶' : type === 'fruit' ? 'Fruit Tea 果茶' : type === 'matcha' ? 'Matcha 抹茶' : 'Coffee 咖啡'}
                            </h3>
                            <div className="grid grid-cols-1 gap-1">
                                {activeMenuItems.filter(i => i.type === type).map(item => ( <DrinkCard key={item.id} item={item} lang={lang} t={t} onClick={() => setSelectedProduct(item)} /> ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (view === 'wiki') return <WikiScreen onClose={() => setView('chat')} lang={lang} t={t} wikiItems={wikiItems} products={menuItems} />;

    return (
        <div className="flex flex-col h-screen font-sans mx-auto max-w-md shadow-2xl overflow-hidden relative bg-accent">
            <BlackFridayModal isOpen={showNotice} onClose={() => setShowNotice(false)} lang={lang} data={announcement} />
            <div className="flex flex-col items-center justify-center pt-6 pb-2 sticky top-0 z-10 relative rounded-b-[2.5rem] shadow-sm bg-white">
                <button onClick={() => { setMessages([]); setMascotMood('idle'); setShowNotice(false); setSelectedProduct(null); setView('standby'); }} className="absolute left-5 top-5 flex items-center justify-center w-8 h-8 bg-stone-100 rounded-full text-stone-600 hover:bg-stone-200 hover:text-red-500 transition"><Trash2 size={14} /></button>
                <button onClick={() => setView('staff-login')} className="absolute left-16 top-5 flex items-center justify-center w-8 h-8 bg-stone-100 rounded-full text-stone-400 hover:bg-stone-200 hover:text-stone-600 transition"><Lock size={12} /></button>
                <button onClick={() => setShowNotice(true)} className="absolute right-20 top-5 flex items-center justify-center w-8 h-8 bg-black text-[#F59E0B] rounded-full hover:bg-gray-900 transition animate-pulse shadow-md"><Gift size={14} /></button>
                <button onClick={() => setLang(prev => prev === 'cn' ? 'en' : 'cn')} className="absolute right-5 top-5 flex items-center space-x-1 bg-stone-100 px-3 py-1.5 rounded-full text-[10px] font-bold text-stone-600 hover:bg-stone-200 transition"><Globe size={12} /><span>{lang === 'cn' ? 'EN' : 'CN'}</span></button>
                <div className="-mb-5 z-20"><SipSipMascot mood={mascotMood} onClick={() => setMascotMood('happy')} /></div>
                <h1 className="text-lg font-bold tracking-wide flex items-center mt-4 text-primary">{t.title}</h1>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">{t.subtitle}</p>
            </div>
            <div className="flex-1 overflow-y-auto p-4 pb-4 scroll-smooth">
                {messages.map((msg, idx) => ( <div key={idx}><ChatBubble text={msg.text} type={msg.type}>{msg.component}</ChatBubble></div> ))} 
                <div ref={messagesEndRef} />
            </div>
            <div className="shrink-0 z-30 w-full">
                <div className="px-4 pb-2">{renderActionButtons()}</div>
                <div className="bg-white/90 backdrop-blur-md border-t border-stone-100 p-4 pb-8 rounded-t-[2rem] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-col items-center gap-3">
                        <p className="text-[10px] text-gray-400 text-center leading-tight px-4">{t.disclaimer}</p>
                        <button onClick={() => window.open('https://miniprogram.orderpin.co/app/16476', '_blank')} className="w-full py-3 bg-emerald-600 text-white font-bold text-sm rounded-2xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 active:scale-95 transition flex items-center justify-center gap-2 group">
                            <span>{t.btnOrder}</span><ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
