import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from 'react';
import Home from './pages/Home';
import ChapterPage from './pages/ChapterPage';
import FormulaBoard from './pages/FormulaBoard';
import { FunctionSquare, Home as HomeIcon, Sun, Moon, Languages, ZoomIn, ZoomOut, Share2, Copy, Check, X, LogIn, LogOut, Settings, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase, isRealDatabaseConnected } from './supabaseClient';
import GoogleSignInButton from './components/GoogleSignInButton';
import { formulas } from './data/formulas';
import { DomainProvider, useDomain } from './context/DomainContext';

// Injected by Vite define config
declare const __LOCAL_IP__: string;

// Global Context
interface AppContextType {
  language: 'en' | 'he';
  zoom: number;
  toggleLanguage: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  // Auth state
  user: any;
  signInWithGoogle: () => void;
  signOut: () => void;
  isSyncing: boolean;
  triggerSync: (forcedProgress?: Record<string, 'green' | 'yellow' | 'red' | null | boolean>, forcedAvatarUrl?: string) => Promise<void>;
  seenFormulas: Record<string, 'green' | 'yellow' | 'red' | null | boolean>;
  toggleSeenFormula: (id: string, status?: 'green' | 'yellow' | 'red' | null) => void;
  updateUserAvatar: (avatarId: string) => Promise<void>;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isOnline: boolean;
  openShareModal: () => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

function ShareModal({ onClose, language }: { onClose: () => void; language: 'en' | 'he' }) {
  const isHe = language === 'he';
  const publicUrl = 'https://academic-mastery-portal.surge.sh';
  
  // Local network state (collapsible)
  const [showLocalOptions, setShowLocalOptions] = useState(false);
  const port = window.location.port || '5173';
  const [ipAddress, setIpAddress] = useState(() => {
    const hostname = window.location.hostname;
    if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
      return hostname;
    }
    return typeof __LOCAL_IP__ !== 'undefined' && __LOCAL_IP__ !== 'localhost' ? __LOCAL_IP__ : '';
  });
  
  const [copiedPublic, setCopiedPublic] = useState(false);
  const [copiedLocal, setCopiedLocal] = useState(false);

  // Compute final local share URL
  const activeIp = ipAddress || (typeof __LOCAL_IP__ !== 'undefined' && __LOCAL_IP__ !== 'localhost' ? __LOCAL_IP__ : '192.168.1.100');
  const localShareUrl = `${window.location.protocol}//${activeIp}:${port}`;

  const handleCopyPublic = async () => {
    try {
      await navigator.clipboard.writeText(publicUrl);
      setCopiedPublic(true);
      setTimeout(() => setCopiedPublic(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleCopyLocal = async () => {
    try {
      await navigator.clipboard.writeText(localShareUrl);
      setCopiedLocal(true);
      setTimeout(() => setCopiedLocal(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        style={{
          background: 'var(--bg-color)',
          border: '1px solid var(--surface-border)',
          borderRadius: 'var(--radius-md)',
          padding: '2rem',
          maxWidth: '460px',
          width: '100%',
          position: 'relative',
          boxShadow: 'var(--shadow-lg)',
          textAlign: isHe ? 'right' : 'left',
          direction: isHe ? 'rtl' : 'ltr'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: isHe ? 'auto' : '1.25rem',
            left: isHe ? '1.25rem' : 'auto',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.25rem',
            borderRadius: '50%',
            transition: 'all 0.2s ease'
          }}
          className="hover-scale"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
            padding: '0.5rem',
            borderRadius: 'var(--radius-sm)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Share2 size={22} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
              {isHe ? 'שתף אתר לימודי' : 'Share Study Guide'}
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0.2rem 0 0 0' }}>
              {isHe ? 'שתף את הקישור הציבורי עם חברים וקולגות' : 'Share the public link with friends and colleagues'}
            </p>
          </div>
        </div>

        {/* Public Sharing Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          
          {/* Public Link Copy Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              {isHe ? 'קישור ציבורי:' : 'Public Link:'}
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--math-bg)',
              padding: '0.6rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--surface-border)',
              direction: 'ltr'
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--accent-color)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {publicUrl}
              </span>
              <button 
                onClick={handleCopyPublic}
                style={{
                  padding: '0.35rem 0.6rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.78rem',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  background: copiedPublic ? 'var(--success)' : 'var(--primary-color)',
                  color: 'white',
                  transition: 'all 0.2s ease',
                  fontWeight: 500
                }}
              >
                {copiedPublic ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedPublic ? (isHe ? 'הועתק!' : 'Copied!') : (isHe ? 'העתק' : 'Copy')}</span>
              </button>
            </div>
          </div>

          {/* QR Code Container */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'rgba(255, 255, 255, 0.01)',
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--surface-border)'
          }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              {isHe ? 'סרוק קוד זה לגישה מיידית מכל מכשיר:' : 'Scan to access instantly from any device:'}
            </span>
            <div style={{
              background: 'white',
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(publicUrl)}`} 
                alt="QR Code" 
                style={{ width: '150px', height: '150px', display: 'block' }}
              />
            </div>
          </div>

          {/* Collapsible Local Wi-Fi sharing panel for Developers */}
          <div style={{ borderTop: '1px solid var(--surface-border)', paddingTop: '1rem', marginTop: '0.5rem' }}>
            <button 
              onClick={() => setShowLocalOptions(!showLocalOptions)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: 0,
                width: '100%',
                justifyContent: 'space-between'
              }}
            >
              <span>{isHe ? 'אפשרויות מפתח (חיבור מקומי)' : 'Developer Options (Local Wi-Fi)'}</span>
              <span>{showLocalOptions ? '▼' : '▶'}</span>
            </button>

            {showLocalOptions && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', overflow: 'hidden' }}
              >
                <div style={{ background: 'rgba(255,255,255,0.01)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--surface-border)', fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                  <strong>{isHe ? 'חיבור Wi-Fi מקומי:' : 'Local Wi-Fi connection:'}</strong>
                  <div style={{ marginTop: '0.35rem' }}>
                    {isHe ? 'הזן את ה-IP המקומי של מחשב הפיתוח שלך:' : "Enter your hosting computer's local IP:"}
                  </div>
                  <input 
                    type="text" 
                    placeholder="e.g. 192.168.0.110" 
                    value={ipAddress}
                    onChange={(e) => setIpAddress(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.35rem',
                      background: 'rgba(0,0,0,0.2)',
                      border: '1px solid var(--surface-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontSize: '0.8rem',
                      marginTop: '0.25rem',
                      textAlign: 'center',
                      direction: 'ltr'
                    }}
                  />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', background: 'var(--math-bg)', padding: '0.4rem 0.5rem', borderRadius: 'var(--radius-sm)', direction: 'ltr' }}>
                    <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '0.75rem', color: 'var(--accent-color)' }}>
                      {localShareUrl}
                    </span>
                    <button 
                      onClick={handleCopyLocal}
                      style={{
                        padding: '0.25rem 0.4rem',
                        fontSize: '0.7rem',
                        background: copiedLocal ? 'var(--success)' : 'rgba(255,255,255,0.08)',
                        border: 'none',
                        color: 'white',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer'
                      }}
                    >
                      {copiedLocal ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </motion.div>
    </div>
  );
}

declare const google: any;

export const AVATAR_CHARACTERS = [
  { id: 'owl', emoji: '🦉', label: { en: 'Academic Owl', he: 'ינשוף למדן' }, color: '#818cf8', url: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Galeel' },
  { id: 'bot', emoji: '🤖', label: { en: 'Study Bot', he: 'רובוט למידה' }, color: '#34d399', url: 'https://api.dicebear.com/7.x/bottts/svg?seed=Bot' },
  { id: 'coffee', emoji: '☕', label: { en: 'Exam Fuel', he: 'דלק בחינות' }, color: '#fbbf24', url: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Coffee' },
  { id: 'wizard', emoji: '🧙‍♂️', label: { en: 'Math Wizard', he: 'קוסם מתמטי' }, color: '#a78bfa', url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wizard' },
  { id: 'ninja', emoji: '🥷', label: { en: 'Stats Ninja', he: "נינג'ת סטטיסטיקה" }, color: '#f87171', url: 'https://api.dicebear.com/7.x/bottts/svg?seed=Ninja' },
  { id: 'rocket', emoji: '🚀', label: { en: 'Rocket', he: 'רקטת הצלחה' }, color: '#38bdf8', url: 'https://api.dicebear.com/7.x/identicon/svg?seed=Rocket' },
  { id: 'fox', emoji: '🦊', label: { en: 'Clever Fox', he: 'שועל פיקח' }, color: '#f97316', url: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Fox' },
  { id: 'unicorn', emoji: '🦄', label: { en: 'Stats Unicorn', he: 'חד קרן סטטיסטי' }, color: '#ec4899', url: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Unicorn' },
  { id: 'alien', emoji: '👾', label: { en: 'Math Alien', he: 'חייזר מתמטי' }, color: '#a855f7', url: 'https://api.dicebear.com/7.x/bottts/svg?seed=Alien' },
  { id: 'lion', emoji: '🦁', label: { en: 'Prob Lion', he: 'אריה הסתברותי' }, color: '#eab308', url: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Lion' },
  { id: 'panda', emoji: '🐼', label: { en: 'Study Panda', he: 'פנדת למידה' }, color: '#64748b', url: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Panda' },
  { id: 'ghost', emoji: '👻', label: { en: 'Ghost Writer', he: 'כותב רפאים' }, color: '#cbd5e1', url: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Ghost' }
];

export const renderAvatar = (avatarUrl: string, size: string = '2.5rem', fontSize: string = '1.3rem') => {
  if (!avatarUrl) {
    return (
      <div style={{
        width: size, height: size, borderRadius: '50%',
        background: 'var(--math-bg)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1.5px solid var(--surface-border)',
        boxSizing: 'border-box',
        fontSize: fontSize
      }}>
        👤
      </div>
    );
  }

  // Find matching character
  const char = AVATAR_CHARACTERS.find(c => c.id === avatarUrl || c.url === avatarUrl);
  if (char) {
    return (
      <div style={{
        width: size, height: size, borderRadius: '50%',
        background: `${char.color}22`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: fontSize,
        border: `1.5px solid ${char.color}`,
        boxShadow: `0 0 10px ${char.color}25`,
        boxSizing: 'border-box'
      }}>
        {char.emoji}
      </div>
    );
  }

  // Fallback to image tag if it is a real URL (external provider picture)
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#f1f5f9', border: '1.5px solid var(--surface-border)',
      boxSizing: 'border-box'
    }}>
      <img src={avatarUrl} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
};

function AuthModal({ onClose, language, signInMockUser }: { onClose: () => void; language: 'en' | 'he'; signInMockUser: (user: any) => void }) {
  const isHe = language === 'he';
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [googleError, setGoogleError] = useState<string | null>(null);

  // Load previously saved user (Welcome Back Screen)
  const [savedUser, setSavedUser] = useState<any>(() => {
    const saved = localStorage.getItem('nla_saved_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Google Accounts simulation state
  const [showGoogleSimulation, setShowGoogleSimulation] = useState(false);
  const [simStep, setSimStep] = useState(1); // 1 for email, 2 for name, 3 for loading/signing in
  const [simEmail, setSimEmail] = useState('');
  const [simName, setSimName] = useState('');
  const [simError, setSimError] = useState('');

  // Disable scroll when modal is open
  useEffect(() => {
    const originalOverflowY = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflowY;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  const handleGoogleSignInClick = async () => {
    setIsGoogleLoading(true);
    setGoogleError(null);

    // If real Supabase database is connected, execute the authentic OAuth browser redirect
    if (isRealDatabaseConnected) {
      try {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: window.location.origin
          }
        });
        if (error) throw error;
      } catch (err: any) {
        console.error('Real OAuth integration failed:', err);
        setGoogleError(err.message || 'Real Google authentication failed.');
        setIsGoogleLoading(false);
      }
    } else {
      // In offline/mock mode, trigger our high-fidelity interactive Google Account Login Simulation
      setTimeout(() => {
        setIsGoogleLoading(false);
        setShowGoogleSimulation(true);
        setSimStep(1);
      }, 300);
    }
  };

  const handleSimEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!simEmail.trim()) {
      setSimError(isHe ? 'נא להזין כתובת אימייל' : 'Please enter an email address');
      return;
    }
    if (!simEmail.includes('@')) {
      setSimError(isHe ? 'כתובת אימייל לא תקינה' : 'Invalid email address');
      return;
    }
    setSimError('');
    setSimStep(2);
  };

  const handleSimNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!simName.trim()) {
      setSimError(isHe ? 'נא להזין שם מלא' : 'Please enter your name');
      return;
    }
    setSimError('');
    setSimStep(3);

    // Simulate OAuth handshake
    setTimeout(() => {
      const emailLower = simEmail.trim().toLowerCase();
      // Generate initials seed
      const initialsSeed = encodeURIComponent(simName.trim());
      const mockUserObj = {
        name: simName.trim(),
        email: emailLower,
        avatarUrl: `https://api.dicebear.com/7.x/initials/svg?seed=${initialsSeed}`
      };
      
      signInMockUser(mockUserObj);
      onClose();
    }, 1500);
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        style={{
          background: 'var(--bg-color)',
          border: '1px solid var(--surface-border)',
          borderRadius: 'var(--radius-md)',
          padding: '2.25rem',
          maxWidth: '440px',
          width: '100%',
          position: 'relative',
          boxShadow: 'var(--shadow-lg)',
          textAlign: isHe ? 'right' : 'left',
          direction: isHe ? 'rtl' : 'ltr'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: isHe ? 'auto' : '1.25rem',
            left: isHe ? '1.25rem' : 'auto',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.25rem',
            borderRadius: '50%',
            transition: 'all 0.2s ease'
          }}
          className="hover-scale"
        >
          <X size={20} />
        </button>

        {showGoogleSimulation ? (
          /* Google Simulated OAuth Screens */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', direction: 'ltr', textAlign: 'left' }}>
            
            {/* Google Logo / Brand Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '1rem' }}>
              <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5.04c1.65 0 3.13.57 4.3 1.69l3.21-3.2C17.55 1.71 14.99 1 12 1 7.35 1 3.39 3.65 1.48 7.52l3.82 2.96C6.24 7.21 8.87 5.04 12 5.04z" />
                <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.35H12v4.51h6.48c-.29 1.48-1.14 2.73-2.4 3.58l3.76 2.91c2.2-2.02 3.65-5.02 3.65-8.65z" />
                <path fill="#FBBC05" d="M5.3 14.56c-.24-.72-.38-1.49-.38-2.31 0-.82.14-1.59.38-2.31L1.48 6.98C.54 8.88 0 11.02 0 13.25s.54 4.37 1.48 6.27l3.82-2.96z" />
                <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.76-2.91c-1.08.72-2.48 1.16-4.2 1.16-3.13 0-5.76-2.17-6.7-5.44L1.48 15.86C3.39 19.73 7.35 23 12 23z" />
              </svg>
              <span style={{ fontFamily: '"Roboto", sans-serif', fontSize: '1rem', fontWeight: 500, color: '#3c4043' }}>
                Sign in with Google
              </span>
            </div>

            {simStep === 1 && (
              /* Step 1: Simulated Email Form */
              <form onSubmit={handleSimEmailSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 400, color: 'var(--text-primary)' }}>
                    Sign in
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    to continue to Anti-Gravity Guide
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <input
                    type="email"
                    placeholder="Email or phone"
                    value={simEmail}
                    onChange={(e) => setSimEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      border: '1px solid var(--surface-border)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(0,0,0,0.2)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                    autoFocus
                  />
                  {simError && <span style={{ color: '#ef4444', fontSize: '0.78rem' }}>{simError}</span>}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                  <button 
                    type="button" 
                    onClick={() => setShowGoogleSimulation(false)}
                    style={{ background: 'none', border: 'none', color: 'var(--primary-color)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    style={{ padding: '0.6rem 1.25rem', borderRadius: '4px', fontSize: '0.85rem' }}
                  >
                    Next
                  </button>
                </div>
              </form>
            )}

            {simStep === 2 && (
              /* Step 2: Simulated Full Name Form */
              <form onSubmit={handleSimNameSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.02)', padding: '0.35rem 0.6rem', borderRadius: '20px', border: '1px solid var(--surface-border)', width: 'fit-content' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>👤</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{simEmail}</span>
                  </div>
                  <h3 style={{ margin: '0.5rem 0 0 0', fontSize: '1.25rem', fontWeight: 400, color: 'var(--text-primary)' }}>
                    Welcome
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Enter your full name to set up your study profile
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={simName}
                    onChange={(e) => setSimName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      border: '1px solid var(--surface-border)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(0,0,0,0.2)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                    autoFocus
                  />
                  {simError && <span style={{ color: '#ef4444', fontSize: '0.78rem' }}>{simError}</span>}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                  <button 
                    type="button" 
                    onClick={() => setSimStep(1)}
                    style={{ background: 'none', border: 'none', color: 'var(--primary-color)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    style={{ padding: '0.6rem 1.25rem', borderRadius: '4px', fontSize: '0.85rem' }}
                  >
                    Finish
                  </button>
                </div>
              </form>
            )}

            {simStep === 3 && (
              /* Step 3: OAuth Simulating Loading Screen */
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', padding: '2rem 0' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  border: '3px solid var(--primary-color)',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite'
                }} />
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Verifying credentials...
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Establishing secure session to sync progress
                  </span>
                </div>
              </div>
            )}

          </div>
        ) : (
          /* Default Sign-in / Welcome back Screen */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            
            {savedUser ? (
              /* Welcome back state (high-fidelity custom experience) */
              <>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span style={{ fontSize: '1.8rem', marginBottom: '0.25rem' }}>✨</span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                    {isHe ? 'ברוך השב לפורטל הלמידה!' : 'Welcome Back, Scholar!'}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, lineHeight: '1.4' }}>
                    {isHe ? 'נמצאה התקדמות למידה שמורה לחשבון שלך.' : 'Pick up right where you left off. Quick login is ready!'}
                  </p>
                </div>

                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '0.85rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textAlign: isHe ? 'right' : 'left'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {renderAvatar(savedUser.avatarUrl, '2rem', '1.1rem')}
                  </div>
                  <div style={{ overflow: 'hidden', flex: 1 }}>
                    <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 600, color: '#1e293b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {savedUser.name}
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {savedUser.email}
                    </p>
                  </div>
                  <span style={{ fontSize: '1.1rem' }}>🎓</span>
                </div>

                <button 
                  onClick={() => {
                    signInMockUser({ name: savedUser.name, email: savedUser.email, avatarUrl: savedUser.avatarUrl });
                    onClose();
                  }}
                  className="btn btn-primary"
                  style={{
                    padding: '0.85rem',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.2)'
                  }}
                >
                  <span>🚀</span>
                  <span>{isHe ? `המשך בתור ${savedUser.name.split(' ')[0]}` : `Continue as ${savedUser.name.split(' ')[0]}`}</span>
                </button>

                <button 
                  onClick={() => setSavedUser(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--primary-color)',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    padding: '0.25rem',
                    width: 'fit-content',
                    margin: '0 auto',
                    textDecoration: 'underline'
                  }}
                >
                  {isHe ? 'התחבר עם משתמש אחר' : 'Switch to another account'}
                </button>
              </>
            ) : (
              /* Brand new Sign-in state */
              <>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    background: 'rgba(99, 102, 241, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.25rem auto',
                    border: '2px solid var(--primary-color)',
                    boxShadow: '0 0 15px rgba(99, 102, 241, 0.2)',
                    fontSize: '2rem'
                  }}>
                    🔐
                  </div>
                  <h1 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                    {isHe ? 'התחברות לפורטל הלמידה' : 'Sign in to Mastery Portal'}
                  </h1>
                  <p style={{ color: '#475569', fontSize: '0.82rem', margin: 0, lineHeight: '1.4' }}>
                    {isHe ? 'גבה וסנכרן את התקדמות הלמידה ומדדי השליטה שלך בענן באופן מיידי.' : 'Connect your account to instantly sync and backup your study progress.'}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', margin: '0.5rem 0' }}>
                  <GoogleSignInButton 
                    onClick={handleGoogleSignInClick} 
                    text={isGoogleLoading ? (isHe ? 'מתחבר...' : 'Connecting...') : (isHe ? 'המשך עם Google' : 'Continue with Google')}
                    variant="brand-light"
                    style={{
                      padding: '0.8rem 1.25rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem'
                    }}
                  />
                  {googleError && (
                    <div style={{
                      color: '#ef4444',
                      fontSize: '0.78rem',
                      textAlign: 'center',
                      padding: '0.4rem',
                      background: '#fef2f2',
                      borderRadius: '6px',
                      border: '1px solid #fecaca'
                    }}>
                      ⚠️ {googleError}
                    </div>
                  )}
                </div>

                <div style={{ textAlign: 'center', fontSize: '0.7rem', color: '#64748b', lineHeight: '1.4', marginTop: '0.15rem' }}>
                  {isHe ? 'ההתחברות מאובטחת לחלוטין. בלחיצה על כפתור ההמשך, אתה מסכים לתנאי השירות ומדיניות הפרטיות.' : 'Sign-in is fully secure. By continuing, you agree to our Terms of Service and Privacy Policy.'}
                </div>
              </>
            )}

          </div>
        )}

      </motion.div>
    </div>
  );
}

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, user, signInWithGoogle, signOut, seenFormulas, isOnline, isSyncing, updateUserAvatar } = useAppContext();
  const { activeSubject, setSubjectById, subjects } = useDomain();
  const [profileOpen, setProfileOpen] = useState(false);
  const [avatarSelectorOpen, setAvatarSelectorOpen] = useState(false);
  const [prevSubjectId, setPrevSubjectId] = useState(activeSubject.id);

  // Synchronous route handler and tracker when subject switches
  useEffect(() => {
    if (activeSubject.id !== prevSubjectId) {
      setPrevSubjectId(activeSubject.id);
      if (location.pathname.startsWith('/chapter/')) {
        console.log('Subject changed while on module. Redirecting to home dashboard...');
        navigate('/');
      }
    }
  }, [activeSubject.id, prevSubjectId, location.pathname, navigate]);

  // Auto-close avatar selector when profile dropdown closes
  useEffect(() => {
    if (!profileOpen) {
      setAvatarSelectorOpen(false);
    }
  }, [profileOpen]);

  // Translations for Navigation buttons
  const isHe = language === 'he';
  const tDashboard = isHe ? 'לוח בקרה' : 'Dashboard';
  const tFormulas = isHe ? 'נוסחאות והגדרות' : 'Formulas & Definitions';
  
  // Calculate platform mastery percentage dynamically from all formulas in database
  const totalFormulasCount = formulas.length;
  const masteredCount = Object.values(seenFormulas).filter(v => v === 'green' || v === true).length;
  const masteryPercentage = totalFormulasCount > 0 ? Math.round((masteredCount / totalFormulasCount) * 100) : 0;

  return (
    <FragmentWrapper>
      {/* Step 2 Fix: Wrap in a dedicated main-navbar-wrapper class for absolute layout centering */}
      <div className="main-navbar-wrapper">
        <nav className="glass-panel" style={{ 
          padding: '0.85rem 1.25rem', 
          margin: '2rem auto', 
          maxWidth: '56.25rem', 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: '0.75rem',
          flexWrap: 'nowrap',
          position: 'relative'
        }}>
          
          {/* Group 1: Navigation Links (Left-docked) */}
          <div className="nav-left-group" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexShrink: 0 }}>
            <Link to="/" className={`btn ${location.pathname === '/' ? 'btn-primary' : 'btn-secondary'}`} style={{ padding: '0.65rem 1.25rem', fontSize: '0.95rem', height: '2.625rem' }}>
              <HomeIcon size={18} /> {tDashboard}
            </Link>
            <Link to="/formulas" className={`btn ${location.pathname === '/formulas' ? 'btn-accent' : 'btn-secondary'}`} style={{ padding: '0.65rem 1.25rem', fontSize: '0.95rem', height: '2.625rem' }}>
              <FunctionSquare size={18} /> {tFormulas}
            </Link>
          </div>

          {/* Group 2: Premium Subject Switcher Toggle Container (Centered Symmetrically!) */}
          <div style={{
            display: 'flex',
            gap: '0.35rem',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '0.2rem',
            borderRadius: '1.25rem',
            border: '1px solid var(--surface-border)',
            height: '2.625rem',
            alignItems: 'center',
            flexShrink: 0
          }}>
            {subjects.map(sub => {
              const isActive = activeSubject.id === sub.id;
              const title = isHe ? sub.titleHe : sub.title;
              const shortLabel = sub.id === 'nla-opt' 
                ? (isHe ? 'אלגברה ואופטימיזציה' : 'NLA & OPT') 
                : (isHe ? 'הסתברות וסטטיסטיקה' : 'Prob & Stats');
              return (
                <button
                  key={sub.id}
                  onClick={() => {
                    const currentPath = location.pathname;
                    setSubjectById(sub.id);
                    if (currentPath.includes('chapter')) {
                      navigate('/');
                    } else if (currentPath.includes('formulas')) {
                      navigate('/formulas');
                    } else {
                      navigate('/');
                    }
                  }}
                  style={{
                    padding: '0.35rem 0.85rem',
                    fontSize: '0.82rem',
                    borderRadius: '1rem',
                    background: isActive ? 'var(--primary-color)' : 'transparent',
                    color: isActive ? 'white' : 'var(--text-secondary)',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive ? '0 2px 8px rgba(0, 0, 0, 0.15)' : 'none'
                  }}
                  title={title}
                >
                  {shortLabel}
                </button>
              );
            })}
          </div>

          {/* Group 3: Sync Pill status and User Profile dropdown (Right-docked) */}
          <div className="nav-right-group" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            
            {/* Sync Pill (State reactive PWA cloud/local indicator) */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.65rem',
                borderRadius: '1rem',
                background: isOnline ? 'rgba(16, 185, 129, 0.08)' : 'rgba(245, 158, 11, 0.08)',
                border: isOnline ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid rgba(245, 158, 11, 0.2)',
                height: '2.625rem',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: isOnline ? '#10b981' : '#f59e0b',
                whiteSpace: 'nowrap',
                transition: 'all 0.25s ease'
              }}
              title={isOnline 
                ? (isHe ? 'מחובר ומסונכרן לענן' : 'Online & Synced to Cloud')
                : (isHe ? 'במצב לא מקוון - נשמר מקומית' : 'Offline Mode - Saved Locally')
              }
            >
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: isOnline ? '#10b981' : '#f59e0b',
                boxShadow: isOnline ? '0 0 8px #10b981' : '0 0 8px #f59e0b',
                display: 'inline-block'
              }} />
              <span>
                {isOnline 
                  ? (isSyncing ? (isHe ? 'מסנכרן...' : 'Syncing...') : (isHe ? 'מקוון' : 'Online'))
                  : (isHe ? 'לא מקוון' : 'Offline')
                }
              </span>
            </div>

            {/* Profile Avatar Corner Option */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              {user ? (
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="profile-avatar-btn"
                  style={{
                    background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, display: 'flex',
                    alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s ease',
                    width: '2.625rem', height: '2.625rem'
                  }}
                  title={user.name}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  {renderAvatar(user.avatarUrl, '2.625rem', '1.2rem')}
                </button>
              ) : (
                <button 
                  onClick={signInWithGoogle}
                  className="profile-avatar-btn"
                  style={{
                    width: '2.625rem',
                    height: '2.625rem',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    padding: 0,
                    overflow: 'hidden',
                    background: 'rgba(99, 102, 241, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease',
                    border: '2px solid var(--primary-color)',
                    boxShadow: '0 0 10px rgba(99, 102, 241, 0.15)'
                  }}
                  title={isHe ? 'התחבר לשמירת התקדמות' : 'Sign In to Backup Progress'}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.12)';
                    e.currentTarget.style.borderColor = 'var(--accent-color)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.06)';
                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                  }}
                >
                  <LogIn size={18} color="var(--primary-color)" />
                </button>
              )}

              {/* Profile dropdown dialog */}
              <AnimatePresence>
                {profileOpen && user && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="glass-panel"
                      style={{
                        position: 'absolute',
                        top: '3.25rem',
                        right: isHe ? 'auto' : 0,
                        left: isHe ? 0 : 'auto',
                        width: '280px',
                        padding: '1.25rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--surface-border)',
                        boxShadow: 'var(--shadow-lg)',
                        zIndex: 999,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        textAlign: isHe ? 'right' : 'left'
                      }}
                    >
                      {/* User metadata header */}
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', borderBottom: '1px solid var(--surface-border)', paddingBottom: '0.85rem' }}>
                        
                        {/* Interactive Avatar Modifier trigger button */}
                        <button 
                          onClick={() => setAvatarSelectorOpen(!avatarSelectorOpen)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            transition: 'transform 0.2s ease',
                            outline: 'none',
                            position: 'relative'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          title={isHe ? 'לחץ לשינוי דמות מלווה' : 'Click to change study companion'}
                        >
                          {renderAvatar(user.avatarUrl, '2.5rem', '1.3rem')}
                          <div style={{
                            position: 'absolute',
                            bottom: '-2px',
                            right: '-2px',
                            background: 'var(--primary-color)',
                            color: 'white',
                            borderRadius: '50%',
                            width: '14px',
                            height: '14px',
                            fontSize: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
                            border: '1px solid var(--bg-color)'
                          }}>
                            ✏️
                          </div>
                        </button>

                        <div style={{ overflow: 'hidden', flex: 1 }}>
                          <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {user.name}
                          </h4>
                          <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {user.email}
                          </p>
                        </div>
                      </div>

                      {/* Formulas Mastery metrics progress section */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 'bold' }}>
                          <span style={{ color: 'var(--text-secondary)' }}>
                            {isHe ? 'מדד שליטה בנוסחאות' : 'Formula Mastery'}
                          </span>
                          <span style={{ color: 'var(--accent-color)' }}>{masteryPercentage}%</span>
                        </div>
                        <div style={{ width: '100%', height: '6px', background: 'var(--math-bg)', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${masteryPercentage}%`, background: 'var(--accent-color)', borderRadius: '3px', transition: 'width 0.4s ease' }} />
                        </div>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          {isHe ? `סומנו ${masteredCount} מתוך ${totalFormulasCount} נוסחאות שליטה` : `Mastered ${masteredCount} of ${totalFormulasCount} formulas`}
                        </span>
                      </div>

                      {/* Sign out options */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.25rem', borderTop: '1px solid var(--surface-border)', paddingTop: '0.85rem' }}>
                        <button
                          onClick={() => {
                            signOut();
                            setProfileOpen(false);
                          }}
                          className="btn btn-secondary"
                          style={{
                            padding: '0.5rem 0.75rem',
                            fontSize: '0.8rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            width: '100%',
                            borderColor: 'rgba(239, 68, 68, 0.2)',
                            color: 'var(--error)'
                          }}
                        >
                          <LogOut size={14} />
                          {isHe ? 'התנתק מהחשבון' : 'Sign Out'}
                        </button>
                      </div>
                    </motion.div>

                    {/* Interactive Avatar selector companions drawer */}
                    <AnimatePresence>
                      {avatarSelectorOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: isHe ? 15 : -15, scale: 0.95 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: isHe ? 15 : -15, scale: 0.95 }}
                          className="glass-panel"
                          style={{
                            position: 'absolute',
                            top: '3.25rem',
                            right: isHe ? 'auto' : '290px',
                            left: isHe ? '290px' : 'auto',
                            width: '240px',
                            padding: '1.25rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--surface-border)',
                            boxShadow: 'var(--shadow-lg)',
                            zIndex: 1000,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.85rem',
                            textAlign: isHe ? 'right' : 'left'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--surface-border)', paddingBottom: '0.5rem' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                              {isHe ? 'בחר מלווה למידה:' : 'Choose Companion:'}
                            </span>
                            <button 
                              onClick={() => setAvatarSelectorOpen(false)}
                              style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0 }}
                            >
                              ✕
                            </button>
                          </div>
                          
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '0.65rem',
                            maxHeight: '220px',
                            overflowY: 'auto',
                            paddingRight: '0.2rem'
                          }}>
                            {AVATAR_CHARACTERS.map(char => {
                              const isSelected = user.avatarUrl === char.id || user.avatarUrl === char.url;
                              return (
                                <button
                                  key={char.id}
                                  onClick={() => {
                                    updateUserAvatar(char.id);
                                    setAvatarSelectorOpen(false);
                                  }}
                                  style={{
                                    border: isSelected ? `2.5px solid ${char.color}` : '1.5px solid var(--surface-border)',
                                    borderRadius: '50%',
                                    width: '42px',
                                    height: '42px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: isSelected ? `${char.color}15` : 'rgba(255,255,255,0.02)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    outline: 'none'
                                  }}
                                  title={isHe ? char.label.he : char.label.en}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.06)';
                                    e.currentTarget.style.borderColor = char.color;
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    if (!isSelected) {
                                      e.currentTarget.style.borderColor = 'var(--surface-border)';
                                    }
                                  }}
                                >
                                  <span style={{ fontSize: '1.35rem' }}>{char.emoji}</span>
                                  <span style={{
                                    fontSize: '0.52rem',
                                    color: isSelected ? 'var(--text-primary)' : 'var(--text-muted)',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    width: '100%',
                                    textAlign: 'center',
                                    marginTop: '0.15rem',
                                    fontWeight: isSelected ? 'bold' : 'normal',
                                    display: 'none' // hidden in grid, but kept for descriptive access
                                  }}>
                                    {isHe ? char.label.he.split(' ')[0] : char.label.en.split(' ')[0]}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </AnimatePresence>
            </div>

          </div>

        </nav>
      </div>
    </FragmentWrapper>
  );
}

// Fragment wrapper helper to ensure zero layout jump
const FragmentWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

function FloatingDock({ theme, toggleTheme }: { theme: 'dark' | 'light'; toggleTheme: () => void }) {
  const { language, toggleLanguage, zoom, zoomIn, zoomOut, openShareModal } = useAppContext();
  const isHe = language === 'he';
  const dir = isHe ? 'rtl' : 'ltr';

  const [isCollapsed, setIsCollapsed] = useState(() => {
    return localStorage.getItem('dock_collapsed') === 'true';
  });

  const [position, setPosition] = useState<{ x: number; y: number }>(() => {
    const saved = localStorage.getItem('dock_position');
    return saved ? JSON.parse(saved) : { x: 0, y: 0 };
  });

  const handleToggle = () => {
    setIsCollapsed(prev => {
      const next = !prev;
      localStorage.setItem('dock_collapsed', String(next));
      return next;
    });
  };

  const handleDragEnd = (_event: any, info: any) => {
    const nextPos = {
      x: position.x + info.offset.x,
      y: position.y + info.offset.y
    };
    setPosition(nextPos);
    localStorage.setItem('dock_position', JSON.stringify(nextPos));
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.05}
      onDragEnd={handleDragEnd}
      animate={{ x: position.x, y: position.y }}
      style={{
        position: 'fixed',
        top: '2.5rem',
        left: isHe ? '2.5rem' : 'auto',
        right: isHe ? 'auto' : '2.5rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.65rem',
        width: '54px',
        padding: isCollapsed ? '0.6rem 0' : '0.75rem 0',
        boxSizing: 'border-box',
        borderRadius: '30px',
        background: theme === 'dark' ? 'rgba(15, 23, 42, 0.55)' : 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
        boxShadow: theme === 'dark' 
          ? '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.05)'
          : '0 10px 30px -10px rgba(0, 0, 0, 0.15)',
        direction: dir,
        cursor: 'grab',
        touchAction: 'none',
        transformOrigin: 'top',
        transition: 'padding 0.25s ease, background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
      }}
      className="floating-utility-dock"
      whileDrag={{ scale: 1.02, cursor: 'grabbing', boxShadow: 'var(--shadow-xl)' }}
    >
      <button
        onClick={handleToggle}
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: 'none',
          background: 'rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'var(--text-secondary)',
          outline: 'none',
          transition: 'all 0.2s ease',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
          marginTop: isCollapsed ? '0px' : '0.25rem'
        }}
        className="dock-icon-btn"
        title={isCollapsed 
          ? (isHe ? 'הרחב תפריט צד' : 'Expand Sidebar')
          : (isHe ? 'צמצם תפריט צד' : 'Collapse Sidebar')
        }
      >
        {/* Step 1 Fix: closed (isCollapsed === true) shows Settings icon; open shows ChevronUp to collapse */}
        {isCollapsed ? (
          <Settings size={14} className="spin-hover" />
        ) : (
          <ChevronUp size={16} />
        )}
      </button>

      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.65rem',
              overflow: 'hidden',
              width: '100%',
              transformOrigin: 'top'
            }}
          >
            <div style={{ width: '20px', height: '1px', background: 'var(--surface-border)', opacity: 0.5, margin: '0.2rem 0' }} />
            
            <button
              onClick={toggleTheme}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: 'none',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              className="dock-icon-btn"
              title={isHe 
                ? 'שנה מצב תאורה'
                : `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`
              }
            >
              {theme === 'dark' ? (
                <Sun size={20} color="#f59e0b" />
              ) : (
                <Moon size={20} color="#6366f1" />
              )}
            </button>

            <div style={{ width: '20px', height: '1px', background: 'var(--surface-border)', opacity: 0.5 }} />

            <button
              onClick={toggleLanguage}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: 'none',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                outline: 'none',
                transition: 'all 0.2s ease',
                fontSize: '0.82rem',
                fontWeight: 'bold'
              }}
              className="dock-icon-btn"
              title={isHe ? 'עבור לפורטל אנגלית' : 'עבור לפורטל עברית'}
            >
              <Languages size={18} color="var(--primary-color)" />
            </button>

            <div style={{ width: '20px', height: '1px', background: 'var(--surface-border)', opacity: 0.5 }} />

            <button
              onClick={zoomOut}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: 'none',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              className="dock-icon-btn"
              title={isHe ? 'הקטן גופן' : 'Zoom Out'}
            >
              <ZoomOut size={16} />
            </button>

            <span style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--text-muted)', userSelect: 'none', textAlign: 'center', width: '38px' }}>
              {zoom}%
            </span>

            <button
              onClick={zoomIn}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: 'none',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              className="dock-icon-btn"
              title={isHe ? 'הגדל גופן' : 'Zoom In'}
            >
              <ZoomIn size={16} />
            </button>

            <div style={{ width: '20px', height: '1px', background: 'var(--surface-border)', opacity: 0.5 }} />

            <button
              onClick={openShareModal}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: 'none',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              className="dock-icon-btn"
              title={isHe ? 'שתף אתר' : 'Share Website'}
            >
              <Share2 size={18} color="var(--accent-color)" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  });

  const [language, setLanguage] = useState<'en' | 'he'>(() => {
    const saved = localStorage.getItem('language');
    return saved === 'en' || saved === 'he' ? saved : 'en';
  });

  const [zoom, setZoom] = useState<number>(() => {
    const saved = localStorage.getItem('zoom');
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (parsed >= 80 && parsed <= 150) return parsed;
    }
    return 100;
  });

  const [user, setUser] = useState<any>(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [shareOpen, setShareOpen] = useState(false);

  // Formulas seen mastery registry state
  const [seenFormulas, setSeenFormulas] = useState<Record<string, 'green' | 'yellow' | 'red' | null | boolean>>(() => {
    const saved = localStorage.getItem('seenFormulas');
    return saved ? JSON.parse(saved) : {};
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Handle Online/Offline cloud progress backup synchronization
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      console.log('Connection restored. Initiating automatic background cloud backup...');
      const saved = localStorage.getItem('seenFormulas');
      const parsed = saved ? JSON.parse(saved) : null;
      if (user && parsed) {
        triggerSync(parsed);
      }
    };
    const handleOffline = () => {
      setIsOnline(false);
      console.log('App went offline. Saving all progress changes locally.');
    };
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [user, seenFormulas]);

  // Handle OAuth authentication states with database auto synchronizations!
  useEffect(() => {
    // 1. Try to load authenticated Supabase user profile from OAuth session
    const loadSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      handleAuthChange(session);
    };
    loadSession();

    // 2. Setup standard listener to handle implicit auth redirect callbacks
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      handleAuthChange(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleAuthChange = async (session: any) => {
    if (session?.user) {
      const mockUserObj = {
        id: session.user.id,
        email: session.user.email,
        name: session.user.user_metadata?.full_name || 'Student',
        avatarUrl: session.user.user_metadata?.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(session.user.email)}`,
        googleId: session.user.user_metadata?.sub || (session.user.identities && session.user.identities[0] ? session.user.identities[0].id : '') || ''
      };
      setUser(mockUserObj);
      localStorage.setItem('nla_saved_user', JSON.stringify(mockUserObj));
      await loadProgressFromCloud(session.user.id);
    } else {
      setUser(null);
    }
  };

  // Helper method to load completed formulas ticks from secure cloud database
  const loadProgressFromCloud = async (userId: string) => {
    try {
      setIsSyncing(true);
      const { data, error } = await supabase
        .from('nla_study_progress')
        .select('*')
        .eq('user_id', userId)
        .single();
      
      if (error && error.message === 'No records found') {
        // Initial setup for new user
        console.log('No progress record found for new user. Creating dedicated database slot...');
        await supabase
          .from('nla_study_progress')
          .upsert({ user_id: userId, progress_data: {}, updated_at: new Date().toISOString() });
      } else if (error) {
        console.error('Failed to load progress:', error);
      }
      
      if (data?.progress_data) {
        const pdata = data.progress_data || {};
        // Compatibility: check nested seenFormulas or fallback to top level
        const cloudSeen = pdata.seenFormulas || pdata;
        setSeenFormulas(prev => {
          const next = { ...prev, ...cloudSeen };
          localStorage.setItem('seenFormulas', JSON.stringify(next));
          return next;
        });

        // Restore custom selected companion avatar
        if (pdata.avatarUrl) {
          setUser((prev: any) => {
            if (!prev) return null;
            const updated = { ...prev, avatarUrl: pdata.avatarUrl };
            localStorage.setItem('nla_saved_user', JSON.stringify(updated));
            return updated;
          });
        }
        console.log('Successfully synced study progress and companion choice from cloud database!');
      }
    } catch (e) {
      console.error('Database loading error:', e);
    } finally {
      setIsSyncing(false);
    }
  };

  // Helper method to write progress to cloud database
  const triggerSync = async (forcedProgress?: Record<string, 'green' | 'yellow' | 'red' | null | boolean>, forcedAvatarUrl?: string) => {
    if (!user) return;
    try {
      setIsSyncing(true);
      const syncData = {
        seenFormulas: forcedProgress || seenFormulas,
        avatarUrl: forcedAvatarUrl || user.avatarUrl,
        fullName: user.name,
        email: user.email,
        googleId: user.googleId || ''
      };
      
      const { error } = await supabase
        .from('nla_study_progress')
        .upsert({
          user_id: user.id,
          progress_data: syncData,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
      console.log('Study progress and companion avatar backed up to secure database!');
    } catch (e) {
      console.error('Failed to sync progress:', e);
    } finally {
      setIsSyncing(false);
    }
  };

  // Helper method to change selected avatar and auto-sync to DB
  const updateUserAvatar = async (avatarId: string) => {
    if (!user) return;
    const updated = { ...user, avatarUrl: avatarId };
    setUser(updated);
    localStorage.setItem('nla_saved_user', JSON.stringify(updated));
    await triggerSync(undefined, avatarId);
  };

  // Toggle formula mastery globally and auto-trigger sync if logged in!
  const toggleSeenFormula = (id: string, status?: 'green' | 'yellow' | 'red' | null) => {
    setSeenFormulas(prev => {
      let nextVal: 'green' | 'yellow' | 'red' | null = null;
      if (status !== undefined) {
        nextVal = status;
      } else {
        // Toggle behavior if no status is provided: toggle between green (mastered) and null
        nextVal = prev[id] === 'green' || prev[id] === true ? null : 'green';
      }
      
      const nextState = { ...prev, [id]: nextVal };
      if (nextVal === null) {
        delete nextState[id];
      }
      
      localStorage.setItem('seenFormulas', JSON.stringify(nextState));
      
      // If signed in, perform silent cloud backup in background!
      if (user) {
        triggerSync(nextState);
      }
      
      return nextState;
    });
  };

  const signInWithGoogle = () => {
    setAuthOpen(true);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSeenFormulas({});
    localStorage.removeItem('seenFormulas');
    console.log('User signed out successfully.');
  };

  const signInMockUser = (mockUser: { name: string; email: string; avatarUrl?: string }) => {
    const mockUserFull = {
      id: `mock-oauth-id-${encodeURIComponent(mockUser.email)}`,
      email: mockUser.email,
      name: mockUser.name,
      avatarUrl: mockUser.avatarUrl || 'owl',
      googleId: 'mock-google-oauth-sub-12345678'
    };
    setUser(mockUserFull);
    localStorage.setItem('nla_saved_user', JSON.stringify(mockUserFull));
    loadProgressFromCloud(mockUserFull.id);
  };

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('zoom', zoom.toString());
    document.documentElement.style.fontSize = `${zoom}%`;
  }, [zoom]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'he' : 'en'));
  };

  const zoomIn = () => {
    setZoom(prev => Math.min(prev + 10, 150));
  };

  const zoomOut = () => {
    setZoom(prev => Math.max(prev - 10, 80));
  };

  const openShareModal = () => setShareOpen(true);

  const dir = language === 'he' ? 'rtl' : 'ltr';

  return (
    <AppContext.Provider value={{ 
      language, zoom, toggleLanguage, zoomIn, zoomOut,
      user, signInWithGoogle, signOut, isSyncing, triggerSync,
      seenFormulas, toggleSeenFormula, updateUserAvatar,
      searchQuery, setSearchQuery, isOnline, openShareModal
    }}>
      <DomainProvider>
        <Router>
          <div 
            className="container" 
            style={{ 
              minHeight: '100vh', 
              display: 'flex', 
              flexDirection: 'column',
              direction: dir,
              transition: 'direction 0.25s ease'
            }}
          >
            <Navigation />
            
            <main style={{ paddingBottom: '4rem', flex: 1 }}>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/chapter/:courseId/:chapterId" element={<ChapterPage />} />
                  <Route path="/formulas" element={<FormulaBoard />} />
                </Routes>
              </AnimatePresence>
            </main>

            <FloatingDock theme={theme} toggleTheme={toggleTheme} />
          </div>
        </Router>
      </DomainProvider>

      <AnimatePresence>
        {authOpen && (
          <AuthModal 
            onClose={() => setAuthOpen(false)} 
            language={language}
            signInMockUser={signInMockUser}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {shareOpen && (
          <ShareModal 
            onClose={() => setShareOpen(false)} 
            language={language}
          />
        )}
      </AnimatePresence>
    </AppContext.Provider>
  );
}

export default App;
