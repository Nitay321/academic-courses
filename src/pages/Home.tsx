import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { chapters } from '../data/chapters';
import { Calculator, Award, ArrowRight, ArrowLeft } from 'lucide-react';
import { useAppContext } from '../App';
import { useDomain } from '../context/DomainContext';

export default function Home() {
  const { language } = useAppContext();
  const { activeSubject, setSubjectById } = useDomain();
  const isHe = language === 'he';

  const course1Id = activeSubject.courses[0].id;
  const course2Id = activeSubject.courses[1].id;

  const course1Chapters = chapters.filter(c => c.courseId === course1Id);
  const course2Chapters = chapters.filter(c => c.courseId === course2Id);

  // Dynamic Translations
  const lTitle = isHe ? activeSubject.titleHe : activeSubject.title;
  
  const lSubTitle = activeSubject.id === 'nla-opt'
    ? (isHe 
        ? 'למד אלגברה ליניארית נומרית (NLA) ואופטימיזציה נומרית (OPT) ביעילות ובמהירות. בחר יחידת לימוד מטה כדי להתחיל למידה פעילה, לקרוא הוכחות פורמליות, לסקור דוגמאות מפורטות ולבחון את עצמך.'
        : 'Master Numerical Linear Algebra (NLA) and Optimization (OPT) efficiently. Pick a chapter below to start active learning, read proofs, review examples, and test yourself.')
    : (isHe
        ? 'למד תורת ההסתברות וסטטיסטיקה מתמטית ביעילות ובמהירות. בחר יחידת לימוד מטה כדי להתחיל למידה פעילה, לקרוא משפטים מורכבים, לחקור התפלגויות ולבחון את עצמך.'
        : 'Master Probability Theory and Mathematical Statistics efficiently. Pick a chapter below to start active learning, study theorems, explore distributions, and test yourself.');

  const lCourse1Title = isHe ? activeSubject.courses[0].nameHe : activeSubject.courses[0].name;
  const lCourse2Title = isHe ? activeSubject.courses[1].nameHe : activeSubject.courses[1].name;

  const lCourse1Sub = isHe 
    ? `קוד קורס: ${course1Id.toUpperCase()} • ${course1Chapters.length} יחידות` 
    : `Course Code: ${course1Id.toUpperCase()} • ${course1Chapters.length} Modules`;
    
  const lCourse2Sub = isHe 
    ? `קוד קורס: ${course2Id.toUpperCase()} • ${course2Chapters.length} יחידות` 
    : `Course Code: ${course2Id.toUpperCase()} • ${course2Chapters.length} Modules`;

  const lModuleLabel = isHe ? 'יחידה' : 'MODULE';

  // Companion Switch Card Translations
  const companionSubjectId = activeSubject.id === 'nla-opt' ? 'prob-stats' : 'nla-opt';
  const companionTitle = isHe 
    ? (companionSubjectId === 'prob-stats' ? 'מדריך לימוד משלים: הסתברות וסטטיסטיקה' : 'מדריך לימוד משלים: אלגברה נומרית ואופטימיזציה')
    : (companionSubjectId === 'prob-stats' ? 'Companion Subject: Probability & Statistics' : 'Companion Subject: Numerical Linear Algebra & Optimization');

  const companionDesc = isHe
    ? (companionSubjectId === 'prob-stats' 
        ? 'עבור למדריך האינטראקטיבי המקביל לתרגול תורת ההסתברות (PROB) וסטטיסטיקה (STATS) ישירות באתר.'
        : 'עבור למדריך האינטראקטיבי המקביל לתרגול אלגברה ליניארית נומרית (NLA) ואופטימיזציה (OPT) ישירות באתר.')
    : (companionSubjectId === 'prob-stats'
        ? 'Switch over to study Probability Theory and Mathematical Statistics instantly in this tab.'
        : 'Switch over to study Numerical Linear Algebra and Numerical Optimization instantly in this tab.');

  const companionBtnText = isHe ? 'החלף נושא למידה' : 'Switch Subject';

  const ArrowIcon = isHe ? ArrowLeft : ArrowRight;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}
    >
      {/* Title Hero Banner */}
      <header style={{ textAlign: 'center', marginTop: '1.5rem', marginBottom: '1rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '3.8rem', fontWeight: 700, marginBottom: '0.8rem', letterSpacing: '-1px' }}>
          {lTitle}
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
          {lSubTitle}
        </p>
      </header>

      {/* Course Cards Grid */}
      <div className="layout-grid">
        
        {/* Course 1 Column Card */}
        <div className="glass-card" style={{ 
          borderColor: 'var(--primary-color)',
          boxShadow: 'var(--glow-primary)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            <div style={{ 
              padding: '0.85rem', 
              background: 'rgba(99, 102, 241, 0.1)', 
              borderRadius: 'var(--radius-md)', 
              color: 'var(--primary-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Calculator size={28} />
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>{lCourse1Title}</h2>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{lCourse1Sub}</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
            {course1Chapters.map(chapter => {
              const chTitle = isHe ? (chapter.titleHe || chapter.title) : chapter.title;
              return (
                <Link key={chapter.id} to={`/chapter/${course1Id}/${chapter.id}`} style={{ textDecoration: 'none' }}>
                  <div 
                    className="glass-panel" 
                    style={{ 
                      padding: '1.2rem 1.5rem', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      transition: 'all 0.2s', 
                      cursor: 'pointer',
                      borderLeft: isHe ? 'none' : '3px solid transparent',
                      borderRight: isHe ? '3px solid transparent' : 'none'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)';
                      if (isHe) {
                        e.currentTarget.style.borderRightColor = 'var(--primary-color)';
                        e.currentTarget.style.transform = 'translateX(-4px)';
                      } else {
                        e.currentTarget.style.borderLeftColor = 'var(--primary-color)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'none';
                      if (isHe) {
                        e.currentTarget.style.borderRightColor = 'transparent';
                      } else {
                        e.currentTarget.style.borderLeftColor = 'transparent';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>
                        {lModuleLabel} {chapter.chapterNumber}
                      </span>
                      <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {chTitle}
                      </h3>
                    </div>
                    <ArrowIcon size={18} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Course 2 Column Card */}
        <div className="glass-card" style={{ 
          borderColor: 'var(--secondary-color)',
          boxShadow: '0 10px 30px rgba(236, 72, 153, 0.05)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            <div style={{ 
              padding: '0.85rem', 
              background: 'rgba(236, 72, 153, 0.1)', 
              borderRadius: 'var(--radius-md)', 
              color: 'var(--secondary-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Award size={28} />
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>{lCourse2Title}</h2>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{lCourse2Sub}</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
            {course2Chapters.map(chapter => {
              const chTitle = isHe ? (chapter.titleHe || chapter.title) : chapter.title;
              return (
                <Link key={chapter.id} to={`/chapter/${course2Id}/${chapter.id}`} style={{ textDecoration: 'none' }}>
                  <div 
                    className="glass-panel" 
                    style={{ 
                      padding: '1.2rem 1.5rem', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      transition: 'all 0.2s', 
                      cursor: 'pointer',
                      borderLeft: isHe ? 'none' : '3px solid transparent',
                      borderRight: isHe ? '3px solid transparent' : 'none'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)';
                      if (isHe) {
                        e.currentTarget.style.borderRightColor = 'var(--secondary-color)';
                        e.currentTarget.style.transform = 'translateX(-4px)';
                      } else {
                        e.currentTarget.style.borderLeftColor = 'var(--secondary-color)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'none';
                      if (isHe) {
                        e.currentTarget.style.borderRightColor = 'transparent';
                      } else {
                        e.currentTarget.style.borderLeftColor = 'transparent';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--secondary-color)', fontWeight: 'bold' }}>
                        {lModuleLabel} {chapter.chapterNumber}
                      </span>
                      <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {chTitle}
                      </h3>
                    </div>
                    <ArrowIcon size={18} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>

      {/* Companion Subject Toggle Card at Bottom (Toggles inside same page!) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="glass-card" 
        style={{ 
          borderColor: 'var(--primary-color)',
          boxShadow: 'var(--glow-primary)',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          marginTop: '2rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <div style={{ 
            padding: '0.85rem', 
            background: 'rgba(99, 102, 241, 0.1)', 
            borderRadius: 'var(--radius-md)', 
            color: 'var(--primary-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem'
          }}>
            {companionSubjectId === 'prob-stats' ? '🎲' : '⚙️'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              {companionTitle}
            </h3>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {companionDesc}
            </p>
          </div>
        </div>
        <button 
          onClick={() => {
            setSubjectById(companionSubjectId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="btn btn-primary animate-float"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}
        >
          <span>{companionBtnText}</span>
          <ArrowIcon size={16} />
        </button>
      </motion.div>
    </motion.div>
  );
}
