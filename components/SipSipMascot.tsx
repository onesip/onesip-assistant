import React from 'react';

interface SipSipMascotProps {
    mood: 'idle' | 'happy' | 'thinking';
    onClick?: () => void;
    scale?: number;
}

const SipSipMascot: React.FC<SipSipMascotProps> = ({ mood, onClick, scale = 1 }) => {
    return (
        <div 
            className="relative cursor-pointer hover:scale-105 transition-transform duration-300 z-20" 
            style={{ width: `${100 * scale}px`, height: `${100 * scale}px` }} 
            onClick={onClick}
        >
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
                <g className="tail" transform="translate(100, 150)">
                    <path d="M0,0 Q30,-20 40,-50" fill="none" stroke="#FAF7F0" strokeWidth="12" strokeLinecap="round" />
                    <circle cx="40" cy="-50" r="8" fill="#5D7E68" />
                </g>
                <g className="body-group">
                    <ellipse cx="100" cy="120" rx="70" ry="60" fill="#FAF7F0" />
                    <path d="M50,80 L30,40 L70,55 Z" fill="#5D7E68" stroke="#FAF7F0" strokeWidth="4" strokeLinejoin="round"/>
                    <path d="M150,80 L170,40 L130,55 Z" fill="#FAF7F0" stroke="#5D7E68" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M60,150 Q100,170 140,150 L140,165 Q100,185 60,165 Z" fill="#5D7E68" />
                    <path d="M120,160 L130,190 L145,185 L135,155 Z" fill="#435E4C" />
                    
                    {mood === 'thinking' ? (
                        <g>
                            <circle cx="80" cy="110" r="5" fill="#4A4A4A" />
                            <circle cx="120" cy="110" r="5" fill="#4A4A4A" />
                            <circle cx="100" cy="125" r="3" fill="#4A4A4A" />
                            <circle cx="140" cy="90" r="15" stroke="#5D7E68" strokeWidth="3" fill="none" />
                            <line x1="150" y1="100" x2="160" y2="110" stroke="#5D7E68" strokeWidth="3" />
                        </g>
                    ) : mood === 'happy' ? (
                        <g>
                            <path d="M70,110 Q80,100 90,110" fill="none" stroke="#4A4A4A" strokeWidth="3" strokeLinecap="round" />
                            <path d="M110,110 Q120,100 130,110" fill="none" stroke="#4A4A4A" strokeWidth="3" strokeLinecap="round" />
                            <path d="M90,125 Q100,130 110,125" fill="none" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="65" cy="125" r="6" fill="#FFB7B2" opacity="0.6" />
                            <circle cx="135" cy="125" r="6" fill="#FFB7B2" opacity="0.6" />
                            <g transform="rotate(-10 130 120)">
                                <rect x="130" y="120" width="20" height="30" rx="2" fill="#F2E6D8"/>
                                <line x1="140" y1="120" x2="145" y2="110" stroke="#4A4A4A" strokeWidth="2"/>
                                <circle cx="135" cy="140" r="2" fill="#4A4A4A"/>
                                <circle cx="145" cy="130" r="2" fill="#4A4A4A"/>
                            </g>
                        </g>
                    ) : (
                        <g>
                            <circle className="eye" cx="80" cy="110" r="5" fill="#4A4A4A" />
                            <circle className="eye" cx="120" cy="110" r="5" fill="#4A4A4A" />
                            <path d="M92,125 Q100,130 108,125" fill="none" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" />
                        </g>
                    )}
                </g>
            </svg>
        </div>
    );
};

export default SipSipMascot;
