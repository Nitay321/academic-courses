import React, { createContext, useContext, useState, useEffect } from 'react';
import { SUBJECT_CATALOG, type Subject } from '../data/catalog';

interface DomainContextType {
  activeSubject: Subject;
  setSubjectById: (id: string) => void;
  subjects: Subject[];
}

const DomainContext = createContext<DomainContextType | undefined>(undefined);

export const DomainProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const savedSubjectId = localStorage.getItem('activeSubjectId') || 'nla-opt';
  const initialSubject = SUBJECT_CATALOG.find(s => s.id === savedSubjectId) || SUBJECT_CATALOG[0];
  
  const [activeSubject, setActiveSubject] = useState<Subject>(initialSubject);

  const setSubjectById = (id: string) => {
    const found = SUBJECT_CATALOG.find(s => s.id === id);
    if (found) {
      setActiveSubject(found);
      localStorage.setItem('activeSubjectId', id);
    }
  };

  useEffect(() => {
    // Dynamically apply subject theme tokens based on Dark/Light theme status
    const updateCSSVariables = () => {
      const isLightTheme = document.documentElement.classList.contains('light-theme');
      const root = document.documentElement;

      if (activeSubject.id === 'nla-opt') {
        if (isLightTheme) {
          root.style.setProperty('--primary-color', '#4f46e5');
          root.style.setProperty('--secondary-color', '#d01d73');
          root.style.setProperty('--accent-color', '#0d9488');
          root.style.setProperty('--glow-primary', '0 0 0 transparent');
          root.style.setProperty('--card-bg-gradient', 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))');
          root.style.setProperty('--card-hover-border', 'rgba(79, 70, 229, 0.25)');
          root.style.setProperty('--navbar-bg', 'rgba(243, 244, 246, 0.8)');
          root.style.setProperty('--math-bg', '#e5e7eb');
        } else {
          root.style.setProperty('--primary-color', '#6366f1');
          root.style.setProperty('--secondary-color', '#ec4899');
          root.style.setProperty('--accent-color', '#14b8a6');
          root.style.setProperty('--glow-primary', '0 0 24px rgba(99, 102, 241, 0.2)');
          root.style.setProperty('--card-bg-gradient', 'linear-gradient(135deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02))');
          root.style.setProperty('--card-hover-border', 'rgba(255, 255, 255, 0.18)');
          root.style.setProperty('--navbar-bg', 'rgba(11, 15, 25, 0.7)');
          root.style.setProperty('--math-bg', 'rgba(0, 0, 0, 0.25)');
        }
      } else if (activeSubject.id === 'prob-stats') {
        if (isLightTheme) {
          root.style.setProperty('--primary-color', 'hsl(155, 75%, 32%)');
          root.style.setProperty('--secondary-color', 'hsl(185, 75%, 32%)');
          root.style.setProperty('--accent-color', 'hsl(38, 85%, 40%)');
          root.style.setProperty('--glow-primary', '0 0 0 transparent');
          root.style.setProperty('--card-bg-gradient', 'linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(240, 253, 249, 0.78))');
          root.style.setProperty('--card-hover-border', 'rgba(16, 185, 129, 0.3)');
          root.style.setProperty('--navbar-bg', 'rgba(240, 253, 249, 0.85)');
          root.style.setProperty('--math-bg', '#e6f4ef');
        } else {
          root.style.setProperty('--primary-color', 'hsl(155, 85%, 42%)');
          root.style.setProperty('--secondary-color', 'hsl(185, 85%, 42%)');
          root.style.setProperty('--accent-color', 'hsl(45, 90%, 52%)');
          root.style.setProperty('--glow-primary', '0 0 24px hsla(155, 85%, 42%, 0.2)');
          root.style.setProperty('--card-bg-gradient', 'linear-gradient(135deg, rgba(16, 185, 129, 0.07), rgba(6, 78, 59, 0.04))');
          root.style.setProperty('--card-hover-border', 'rgba(16, 185, 129, 0.28)');
          root.style.setProperty('--navbar-bg', 'rgba(8, 24, 18, 0.75)');
          root.style.setProperty('--math-bg', 'rgba(0, 0, 0, 0.28)');
        }
      }
    };

    updateCSSVariables();

    // Set up a MutationObserver to listen for class updates on the <html> tag (e.g. theme changes)
    const observer = new MutationObserver(() => {
      updateCSSVariables();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, [activeSubject]);

  return (
    <DomainContext.Provider value={{ activeSubject, setSubjectById, subjects: SUBJECT_CATALOG }}>
      {children}
    </DomainContext.Provider>
  );
};

export const useDomain = () => {
  const context = useContext(DomainContext);
  if (!context) {
    throw new Error('useDomain must be used within a DomainProvider');
  }
  return context;
};
