import React from 'react';
import { motion } from 'framer-motion';

// Official multi-colored Google brand SVG logo
export function GoogleLogo({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

interface GoogleSignInButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  variant?: 'brand-light' | 'brand-dark' | 'glass';
  style?: React.CSSProperties;
}

export default function GoogleSignInButton({
  onClick,
  text,
  variant = 'brand-light',
  style
}: GoogleSignInButtonProps) {
  
  // Custom button styles that mimic a premium, professional "Google Sign In" experience
  const getButtonStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.85rem',
      width: '100%',
      padding: '0.85rem 1.5rem',
      borderRadius: 'var(--radius-sm, 8px)',
      fontWeight: 600,
      fontFamily: "'Outfit', sans-serif",
      fontSize: '0.95rem',
      cursor: 'pointer',
      border: '1px solid transparent',
      transition: 'box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.2s ease',
      outline: 'none',
      userSelect: 'none',
      ...style
    };

    switch (variant) {
      case 'brand-light':
        return {
          ...baseStyles,
          backgroundColor: '#FFFFFF',
          color: '#1E293B',
          borderColor: '#E2E8F0',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.04)',
        };
      case 'brand-dark':
        return {
          ...baseStyles,
          backgroundColor: '#0F172A',
          color: '#F8FAF5',
          borderColor: '#334155',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        };
      case 'glass':
      default:
        return {
          ...baseStyles,
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          color: 'var(--text-primary)',
          borderColor: 'var(--surface-border)',
          boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 2px 8px rgba(0, 0, 0, 0.1)',
        };
    }
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      style={getButtonStyles()}
      whileHover={{ 
        scale: 1.015,
        y: -1.5,
        boxShadow: variant === 'brand-light' 
          ? '0 6px 16px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05)'
          : '0 6px 16px rgba(99, 102, 241, 0.15), 0 3px 6px rgba(0, 0, 0, 0.2)',
        backgroundColor: variant === 'brand-light' 
          ? '#F8FAF5' 
          : variant === 'brand-dark' 
            ? '#1E293B' 
            : 'rgba(255, 255, 255, 0.06)',
        borderColor: variant === 'glass' ? 'rgba(255, 255, 255, 0.15)' : undefined
      }}
      whileTap={{ scale: 0.985, y: 0 }}
      className={`google-btn-${variant}`}
    >
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          padding: '5px',
          borderRadius: '50%',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
        }}
      >
        <GoogleLogo size={16} />
      </div>
      <span style={{ letterSpacing: '0.2px' }}>{text}</span>
    </motion.button>
  );
}
