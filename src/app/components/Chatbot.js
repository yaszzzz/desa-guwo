// components/Chatbot.jsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery'; // Impor hook kita

// Komponen Ikon Robot (tetap sama)
const RobotIcon = ({ color = 'white', size = 28 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" /><rect x="4" y="12" width="16" height="8" rx="2" /><path d="M20 12v-2a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2" /><path d="M12 18v-2" /><path d="M8 18v-2" /><path d="M16 18v-2" />
    </svg>
);

// Fungsi untuk injeksi style global (tetap sama)
const StyleInjector = ({ css }) => <style>{css}</style>;

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Halo! Saya Asisten Virtual Desa. Ada yang bisa dibantu?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatboxRef = useRef(null);

    // --- LOGIKA RESPONSIVE ---
    // Gunakan hook untuk mendeteksi jika layar <= 768px
    const isMobile = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        if (chatboxRef.current) {
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const userMessage = inputValue.trim();
        if (!userMessage) return;

        setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: userMessage }),
            });
            if (!response.ok) throw new Error("Gagal mengambil respon");
            const data = await response.json();
            setMessages(prev => [...prev, { sender: 'bot', text: data.answer }]);
        } catch (error) {
            setMessages(prev => [...prev, { sender: 'bot', text: 'Maaf, terjadi kesalahan.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    // --- STYLE DINAMIS BERDASARKAN UKURAN LAYAR ---
    const dynamicStyles = getDynamicStyles(isMobile);
    
    // Style untuk scrollbar (tetap sama)
    const globalStyles = `
        .chatBox::-webkit-scrollbar { width: 8px; }
        .chatBox::-webkit-scrollbar-track { background: #1F2937; }
        .chatBox::-webkit-scrollbar-thumb { background-color: #4B5563; border-radius: 10px; border: 2px solid #1F2937; }
    `;

    return (
        <>
            <StyleInjector css={globalStyles} />
            <div style={dynamicStyles.chatbotContainer}>
                {isOpen && (
                    <div style={dynamicStyles.chatWindow}>
                        <div style={dynamicStyles.chatHeader}>
                            Asisten Desa
                            <button onClick={() => setIsOpen(false)} style={dynamicStyles.closeButton}>×</button>
                        </div>
                        <div ref={chatboxRef} className="chatBox" style={dynamicStyles.chatBox}>
                            {messages.map((msg, index) => (
                                <div key={index} style={msg.sender === 'user' ? dynamicStyles.userMessage : dynamicStyles.botMessage}>
                                    {msg.text}
                                </div>
                            ))}
                            {isLoading && <div style={dynamicStyles.botMessage}>...</div>}
                        </div>
                        <form onSubmit={handleSendMessage} style={dynamicStyles.chatInputForm}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ketik pertanyaanmu..."
                                style={dynamicStyles.chatInput}
                                disabled={isLoading}
                            />
                            <button type="submit" style={dynamicStyles.sendButton} disabled={isLoading}>Kirim</button>
                        </form>
                    </div>
                )}
                <button onClick={() => setIsOpen(!isOpen)} style={dynamicStyles.toggleButton}>
                    <RobotIcon />
                </button>
            </div>
        </>
    );
}


// --- FUNGSI UNTUK MENGHASILKAN STYLE DINAMIS ---
const getDynamicStyles = (isMobile) => {
    // Style dasar (Desktop)
    const baseStyles = {
        chatbotContainer: {
            position: 'fixed',
            top: '50%',
            right: '20px',
            transform: 'translateY(-50%)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center'
        },
        toggleButton: {
            background: '#8B5CF6', color: 'white', width: '60px', height: '60px',
            borderRadius: '50%', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        },
        chatWindow: {
            width: '350px', height: '500px', background: '#1F2937', color: '#E5E7EB',
            borderRadius: '15px', boxShadow: '0 8px 24px rgba(0,0,0,0.5)', display: 'flex',
            flexDirection: 'column', marginRight: '20px', border: '1px solid #4B5563'
        },
        chatHeader: { background: '#374151', color: 'white', padding: '15px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
        closeButton: { background: 'none', border: 'none', color: '#9CA3AF', fontSize: '24px', cursor: 'pointer', lineHeight: 1 },
        chatBox: { flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' },
        // --- BALON CHAT LEBIH KECIL ---
        botMessage: { alignSelf: 'flex-start', background: '#374151', color: 'white', padding: '8px 12px', borderRadius: '15px 15px 15px 0px', maxWidth: '80%', fontSize: '14px' },
        userMessage: { alignSelf: 'flex-end', background: '#8B5CF6', color: 'white', padding: '8px 12px', borderRadius: '15px 15px 0px 15px', maxWidth: '80%', fontSize: '14px' },
        chatInputForm: { display: 'flex', borderTop: '1px solid #4B5563', padding: '10px', background: '#1F2937' },
        chatInput: { flex: 1, border: '1px solid #4B5563', background: '#374151', color: 'white', padding: '10px 15px', borderRadius: '20px', marginRight: '10px', outline: 'none', fontSize: '14px' },
        sendButton: { background: '#8B5CF6', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }
    };

    // Jika mobile, timpa beberapa style
    if (isMobile) {
        return {
            ...baseStyles,
            chatbotContainer: {
                // Posisi di kanan bawah untuk mobile
                position: 'fixed',
                bottom: '90px',
                right: '15px',
                zIndex: 1000
            },
            toggleButton: {
                ...baseStyles.toggleButton,
                // Tombol lebih kecil di mobile
                width: '50px',
                height: '50px',
            },
            chatWindow: {
                // Jendela chat mengisi layar, tapi dengan margin
                position: 'fixed',
                top: '10px',
                left: '10px',
                right: '10px',
                bottom: '80px', // Sisakan ruang untuk input & tombol
                width: 'auto', // Lebar otomatis
                height: 'auto', // Tinggi otomatis
                marginRight: '0',
                background: '#1F2937', color: '#E5E7EB',
                borderRadius: '15px', boxShadow: '0 8px 24px rgba(0,0,0,0.5)', display: 'flex',
                flexDirection: 'column', border: '1px solid #4B5563'
            }
        };
    }

    return baseStyles;
};