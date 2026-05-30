import { useState } from 'react';
import { BookOpen, AlertCircle, ChevronDown, ChevronUp, Layers, HelpCircle, Lightbulb, Link2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Definition } from '../data/chapters';
import { RichText } from './MathRenderer';
import { useAppContext } from '../App';

export default function TheoremBox({ definition }: { definition: Definition }) {
  const [isOpen, setIsOpen] = useState(true); // Main container open/close
  const [isFormalOpen, setIsFormalOpen] = useState(true);
  const [isSimplifiedOpen, setIsSimplifiedOpen] = useState(true);
  const [isToolboxOpen, setIsToolboxOpen] = useState(true);
  const [isProofOpen, setIsProofOpen] = useState(false); // Collapsed by default to avoid overwhelming
  const [isExampleOpen, setIsExampleOpen] = useState(true);

  const { language } = useAppContext();
  const isHe = language === 'he';

  // Dynamic Content selection
  const title = isHe ? (definition.titleHe || definition.title) : definition.title;
  const content = isHe ? (definition.contentHe || definition.content) : definition.content;
  const proof = isHe ? (definition.proofHe || definition.proof) : definition.proof;
  const example = isHe ? (definition.exampleHe || definition.example) : definition.example;
  const simplifiedLogic = isHe ? (definition.simplifiedLogicHe || definition.simplifiedLogic) : definition.simplifiedLogic;
  const toolboxConnection = isHe ? (definition.toolboxConnectionHe || definition.toolboxConnection) : definition.toolboxConnection;

  // Labels Translation
  const lFormal = isHe ? 'הגדרה פורמלית / משפט' : 'Formal Definition / Theorem';
  const lProof = isHe ? 'הוכחה פורמלית והסבר:' : 'Rigorous Proof & Explanation:';
  const lExample = isHe ? 'דוגמה שלב-אחר-שלב:' : 'Step-by-Step Example:';
  const lSimplifiedHeader = isHe ? 'היגיון פשוט (מודל מנטלי)' : 'Simplified Logic (Mental Model)';
  const lToolboxHeader = isHe ? 'קשר ארגז הכלים (הקשר ללמידה)' : 'Toolbox Connection (Why Link)';
  const lKeyTakeaway = isHe ? 'נקודת מפתח לקחת לחיים:' : 'Key Takeaway to Remember:';
  const lCollapse = isHe ? 'צמצם' : 'Collapse';
  const lExpand = isHe ? 'הרחב' : 'Expand';

  return (
    <div className="glass-panel" style={{ 
      marginBottom: '2.5rem', 
      overflow: 'hidden',
      borderLeft: isHe ? 'none' : '5px solid var(--accent-color)',
      borderRight: isHe ? '5px solid var(--accent-color)' : 'none',
      boxShadow: 'var(--shadow-sm)'
    }}>
      {/* Interactive Expand/Collapse Bar */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          padding: '1.25rem 1.5rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          cursor: 'pointer',
          background: 'rgba(255, 255, 255, 0.02)',
          userSelect: 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <BookOpen size={20} color="var(--accent-color)" />
          <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600 }}>{title}</h3>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="theorem-toggle-text" style={{ 
            fontSize: '0.75rem', 
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            letterSpacing: '1px', 
            color: 'var(--text-muted)' 
          }}>
            {isOpen ? lCollapse : lExpand}
          </span>
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </div>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* 1. Collapsible Formal Statement Block */}
              <div style={{ 
                background: 'var(--math-bg)', 
                borderRadius: 'var(--radius-sm)', 
                border: '1px solid var(--surface-border)',
                overflow: 'hidden'
              }}>
                <div 
                  onClick={() => setIsFormalOpen(!isFormalOpen)}
                  style={{
                    padding: '0.75rem 1.25rem',
                    background: 'rgba(99, 102, 241, 0.06)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Layers size={16} color="var(--accent-color)" />
                    <span style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>
                      {lFormal}
                    </span>
                  </div>
                  {isFormalOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>

                <AnimatePresence initial={false}>
                  {isFormalOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div style={{ 
                        padding: '1.25rem', 
                        fontSize: '1.08rem', 
                        fontWeight: 500, 
                        lineHeight: '1.5',
                        color: 'var(--text-primary)'
                      }}>
                        <RichText text={content} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 2. Collapsible Simplified Logic (Mental Model) Block */}
              {simplifiedLogic && (
                <div style={{
                  background: 'rgba(59, 130, 246, 0.05)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(59, 130, 246, 0.15)',
                  overflow: 'hidden'
                }}>
                  <div 
                    onClick={() => setIsSimplifiedOpen(!isSimplifiedOpen)}
                    style={{
                      padding: '0.75rem 1.25rem',
                      background: 'rgba(59, 130, 246, 0.08)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Lightbulb size={18} color="var(--primary-color)" />
                      <span style={{ fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--primary-color)' }}>
                        {lSimplifiedHeader}
                      </span>
                    </div>
                    {isSimplifiedOpen ? <ChevronUp size={16} color="var(--primary-color)" /> : <ChevronDown size={16} color="var(--primary-color)" />}
                  </div>

                  <AnimatePresence initial={false}>
                    {isSimplifiedOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div style={{ padding: '1.25rem', color: 'var(--text-primary)', fontSize: '0.98rem', lineHeight: '1.6' }}>
                          <RichText text={simplifiedLogic} />

                          {/* Render custom takeaways if available */}
                           {isHe && (definition as any).keyTakeawayHe && (
                            <div className="responsive-takeaway" style={{ marginTop: '1rem', paddingTop: '0.8rem', borderTop: '1px solid rgba(59, 130, 246, 0.15)' }}>
                              <strong style={{ color: 'var(--primary-color)', flexShrink: 0 }}>{lKeyTakeaway}</strong>
                              <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>{(definition as any).keyTakeawayHe}</span>
                            </div>
                          )}
                          {!isHe && (definition as any).keyTakeaway && (
                            <div className="responsive-takeaway" style={{ marginTop: '1rem', paddingTop: '0.8rem', borderTop: '1px solid rgba(59, 130, 246, 0.15)' }}>
                              <strong style={{ color: 'var(--primary-color)', flexShrink: 0 }}>{lKeyTakeaway}</strong>
                              <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>{(definition as any).keyTakeaway}</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* 3. Collapsible Pedagogical Toolbox Connection (Why Link) Callout */}
              {toolboxConnection && (
                <div style={{
                  background: 'rgba(167, 139, 250, 0.05)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(167, 139, 250, 0.2)',
                  overflow: 'hidden'
                }}>
                  <div 
                    onClick={() => setIsToolboxOpen(!isToolboxOpen)}
                    style={{
                      padding: '0.75rem 1.25rem',
                      background: 'rgba(167, 139, 250, 0.08)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Link2 color="#a78bfa" size={18} />
                      <span style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#a78bfa' }}>
                        {lToolboxHeader}
                      </span>
                    </div>
                    {isToolboxOpen ? <ChevronUp size={16} color="#a78bfa" /> : <ChevronDown size={16} color="#a78bfa" />}
                  </div>

                  <AnimatePresence initial={false}>
                    {isToolboxOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div style={{ padding: '1.25rem', color: 'var(--text-primary)', fontSize: '0.96rem', lineHeight: '1.55' }}>
                          <RichText text={toolboxConnection} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
              
              {/* 4. Collapsible Rigorous Proof Block */}
              {proof && (
                <div style={{
                  background: 'rgba(239, 68, 68, 0.02)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(239, 68, 68, 0.1)',
                  overflow: 'hidden'
                }}>
                  <div 
                    onClick={() => setIsProofOpen(!isProofOpen)}
                    style={{
                      padding: '0.75rem 1.25rem',
                      background: 'rgba(239, 68, 68, 0.04)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <AlertCircle size={16} color="var(--error)" />
                      <span style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--error)' }}>
                        {lProof}
                      </span>
                    </div>
                    {isProofOpen ? <ChevronUp size={16} color="var(--error)" /> : <ChevronDown size={16} color="var(--error)" />}
                  </div>

                  <AnimatePresence initial={false}>
                    {isProofOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div style={{ padding: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                          <RichText text={proof} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
              
              {/* 5. Collapsible Step-by-Step Example Block */}
              {example && (
                <div style={{
                  background: 'rgba(16, 185, 129, 0.03)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(16, 185, 129, 0.12)',
                  overflow: 'hidden'
                }}>
                  <div 
                    onClick={() => setIsExampleOpen(!isExampleOpen)}
                    style={{
                      padding: '0.75rem 1.25rem',
                      background: 'rgba(16, 185, 129, 0.05)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <HelpCircle size={16} color="var(--success)" />
                      <span style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--success)' }}>
                        {lExample}
                      </span>
                    </div>
                    {isExampleOpen ? <ChevronUp size={16} color="var(--success)" /> : <ChevronDown size={16} color="var(--success)" />}
                  </div>

                  <AnimatePresence initial={false}>
                    {isExampleOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div style={{ padding: '1.25rem', color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                          <RichText text={example} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
