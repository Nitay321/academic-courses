import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formulas } from '../data/formulas';
import type { Formula } from '../data/formulas';
import MathRenderer from '../components/MathRenderer';
import { Award, Layers, Search, RotateCcw, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { useAppContext } from '../App';
import { useDomain } from '../context/DomainContext';

interface CategoryStyle {
  border: string;
  badgeBg: string;
  badgeText: string;
  shadow: string;
  glow: string;
}

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  'Matrix & Vector Norms': {
    border: 'var(--primary-color)',
    badgeBg: 'rgba(99, 102, 241, 0.15)',
    badgeText: 'var(--primary-color)',
    shadow: 'rgba(99, 102, 241, 0.1)',
    glow: 'rgba(99, 102, 241, 0.2)'
  },
  'Direct Solvers': {
    border: '#a855f7',
    badgeBg: 'rgba(168, 85, 247, 0.15)',
    badgeText: '#a855f7',
    shadow: 'rgba(168, 85, 247, 0.1)',
    glow: 'rgba(168, 85, 247, 0.2)'
  },
  'Least Squares Minimization': {
    border: '#ec4899',
    badgeBg: 'rgba(236, 72, 153, 0.15)',
    badgeText: '#ec4899',
    shadow: 'rgba(236, 72, 153, 0.1)',
    glow: 'rgba(236, 72, 153, 0.2)'
  },
  'Orthogonalization & SVD': {
    border: '#3b82f6',
    badgeBg: 'rgba(59, 130, 246, 0.15)',
    badgeText: '#3b82f6',
    shadow: 'rgba(59, 130, 246, 0.1)',
    glow: 'rgba(59, 130, 246, 0.2)'
  },
  'Iterative Solvers': {
    border: '#14b8a6',
    badgeBg: 'rgba(20, 184, 166, 0.15)',
    badgeText: '#14b8a6',
    shadow: 'rgba(20, 184, 166, 0.1)',
    glow: 'rgba(20, 184, 166, 0.2)'
  },
  'Eigenvalue Solvers': {
    border: '#f59e0b',
    badgeBg: 'rgba(245, 158, 11, 0.15)',
    badgeText: '#f59e0b',
    shadow: 'rgba(245, 158, 11, 0.1)',
    glow: 'rgba(245, 158, 11, 0.2)'
  },
  'Optimization Foundations': {
    border: '#eab308',
    badgeBg: 'rgba(234, 179, 8, 0.15)',
    badgeText: '#eab308',
    shadow: 'rgba(234, 179, 8, 0.1)',
    glow: 'rgba(234, 179, 8, 0.2)'
  },
  'Unconstrained Optimization': {
    border: '#ef4444',
    badgeBg: 'rgba(239, 68, 68, 0.15)',
    badgeText: '#ef4444',
    shadow: 'rgba(239, 68, 68, 0.1)',
    glow: 'rgba(239, 68, 68, 0.2)'
  },
  'Constrained Optimization': {
    border: '#10b981',
    badgeBg: 'rgba(16, 185, 129, 0.15)',
    badgeText: '#10b981',
    shadow: 'rgba(16, 185, 129, 0.1)',
    glow: 'rgba(16, 185, 129, 0.2)'
  },
  // Probability & Statistics Categories
  'Probability Spaces': {
    border: '#10b981',
    badgeBg: 'rgba(16, 185, 129, 0.15)',
    badgeText: '#10b981',
    shadow: 'rgba(16, 185, 129, 0.1)',
    glow: 'rgba(16, 185, 129, 0.2)'
  },
  'Conditional & Bayes': {
    border: '#06b6d4',
    badgeBg: 'rgba(6, 182, 212, 0.15)',
    badgeText: '#06b6d4',
    shadow: 'rgba(6, 182, 212, 0.1)',
    glow: 'rgba(6, 182, 212, 0.2)'
  },
  'Discrete Variables': {
    border: '#0284c7',
    badgeBg: 'rgba(2, 132, 199, 0.15)',
    badgeText: '#0284c7',
    shadow: 'rgba(2, 132, 199, 0.1)',
    glow: 'rgba(2, 132, 199, 0.2)'
  },
  'Discrete Distributions': {
    border: '#3b82f6',
    badgeBg: 'rgba(59, 130, 246, 0.15)',
    badgeText: '#3b82f6',
    shadow: 'rgba(59, 130, 246, 0.1)',
    glow: 'rgba(59, 130, 246, 0.2)'
  },
  'Continuous Variables': {
    border: '#6366f1',
    badgeBg: 'rgba(99, 102, 241, 0.15)',
    badgeText: '#6366f1',
    shadow: 'rgba(99, 102, 241, 0.1)',
    glow: 'rgba(99, 102, 241, 0.2)'
  },
  'Continuous Distributions': {
    border: '#8b5cf6',
    badgeBg: 'rgba(139, 92, 246, 0.15)',
    badgeText: '#8b5cf6',
    shadow: 'rgba(139, 92, 246, 0.1)',
    glow: 'rgba(139, 92, 246, 0.2)'
  },
  'Joint Distributions': {
    border: '#d946ef',
    badgeBg: 'rgba(217, 70, 239, 0.15)',
    badgeText: '#d946ef',
    shadow: 'rgba(217, 70, 239, 0.1)',
    glow: 'rgba(217, 70, 239, 0.2)'
  },
  'Moment Generating Functions': {
    border: '#ec4899',
    badgeBg: 'rgba(236, 72, 153, 0.15)',
    badgeText: '#ec4899',
    shadow: 'rgba(236, 72, 153, 0.1)',
    glow: 'rgba(236, 72, 153, 0.2)'
  },
  'Limit Theorems': {
    border: '#f43f5e',
    badgeBg: 'rgba(244, 63, 94, 0.15)',
    badgeText: '#f43f5e',
    shadow: 'rgba(244, 63, 94, 0.1)',
    glow: 'rgba(244, 63, 94, 0.2)'
  },
  'Probability Inequalities': {
    border: '#f97316',
    badgeBg: 'rgba(249, 115, 22, 0.15)',
    badgeText: '#f97316',
    shadow: 'rgba(249, 115, 22, 0.1)',
    glow: 'rgba(249, 115, 22, 0.2)'
  },
  'Inclusion-Exclusion': {
    border: '#eab308',
    badgeBg: 'rgba(234, 179, 8, 0.15)',
    badgeText: '#eab308',
    shadow: 'rgba(234, 179, 8, 0.1)',
    glow: 'rgba(234, 179, 8, 0.2)'
  },
  'Calculus Review': {
    border: '#84cc16',
    badgeBg: 'rgba(132, 204, 22, 0.15)',
    badgeText: '#84cc16',
    shadow: 'rgba(132, 204, 22, 0.1)',
    glow: 'rgba(132, 204, 22, 0.2)'
  },
  'Estimator Properties': {
    border: '#10b981',
    badgeBg: 'rgba(16, 185, 129, 0.15)',
    badgeText: '#10b981',
    shadow: 'rgba(16, 185, 129, 0.1)',
    glow: 'rgba(16, 185, 129, 0.2)'
  },
  'Maximum Likelihood': {
    border: '#06b6d4',
    badgeBg: 'rgba(6, 182, 212, 0.15)',
    badgeText: '#06b6d4',
    shadow: 'rgba(6, 182, 212, 0.1)',
    glow: 'rgba(6, 182, 212, 0.2)'
  },
  'Method of Moments': {
    border: '#3b82f6',
    badgeBg: 'rgba(59, 130, 246, 0.15)',
    badgeText: '#3b82f6',
    shadow: 'rgba(59, 130, 246, 0.1)',
    glow: 'rgba(59, 130, 246, 0.2)'
  },
  'Confidence Intervals': {
    border: '#8b5cf6',
    badgeBg: 'rgba(139, 92, 246, 0.15)',
    badgeText: '#8b5cf6',
    shadow: 'rgba(139, 92, 246, 0.1)',
    glow: 'rgba(139, 92, 246, 0.2)'
  },
  'Hypothesis Testing': {
    border: '#f43f5e',
    badgeBg: 'rgba(244, 63, 94, 0.15)',
    badgeText: '#f43f5e',
    shadow: 'rgba(244, 63, 94, 0.1)',
    glow: 'rgba(244, 63, 94, 0.2)'
  },
  'Linear Regression': {
    border: '#f97316',
    badgeBg: 'rgba(249, 115, 22, 0.15)',
    badgeText: '#f97316',
    shadow: 'rgba(249, 115, 22, 0.1)',
    glow: 'rgba(249, 115, 22, 0.2)'
  }
};

const DEFAULT_STYLE: CategoryStyle = {
  border: 'var(--text-muted)',
  badgeBg: 'var(--surface-color)',
  badgeText: 'var(--text-secondary)',
  shadow: 'transparent',
  glow: 'transparent'
};

export default function FormulaBoard() {
  const { language, seenFormulas, toggleSeenFormula, searchQuery, setSearchQuery } = useAppContext();
  const { activeSubject } = useDomain();
  const [selectedCourse, setSelectedCourse] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'green' | 'yellow' | 'red' | 'to-learn'>('all');
  const [selectedFormula, setSelectedFormula] = useState<Formula | null>(null);
  const [viewMode, setViewMode] = useState<'grouped' | 'list' | 'tables'>('grouped');
  const [activeTableTab, setActiveTableTab] = useState<'norms' | 'solvers' | 'iterative' | 'unconstrained' | 'constrained'>('norms');
  const [sortBy, setSortBy] = useState<'name' | 'course' | 'category'>('name');
  
  // Collapse Toggles for Course Stats Blocks (mapped dynamically by course ID)
  const [expandedCourses, setExpandedCourses] = useState<Record<string, boolean>>({});

  const toggleCourseExpanded = (courseId: string) => {
    setExpandedCourses(prev => ({ ...prev, [courseId]: !prev[courseId] }));
  };

  const isHe = language === 'he';

  useEffect(() => {
    setSelectedCourse('all');
    setExpandedCourses({});
    if (activeSubject.id !== 'nla-opt' && viewMode === 'tables') {
      setViewMode('grouped');
    }
  }, [activeSubject.id]);

  const toggleSeen = (id: string, status?: 'green' | 'yellow' | 'red' | null) => {
    toggleSeenFormula(id, status);
  };

  const resetAllProgress = () => {
    const confirmMsg = isHe 
      ? 'האם אתה בטוח שברצונך לאפס את כל מדדי השליטה בנוסחאות?' 
      : 'Are you sure you want to reset all formula mastery indicators?';
      
    if (window.confirm(confirmMsg)) {
      // Toggle all mastered/marked formulas off
      Object.keys(seenFormulas).forEach(id => {
        if (seenFormulas[id]) {
          toggleSeenFormula(id, null);
        }
      });
    }
  };

  // Dynamic Course/Badge Helper Functions
  const isFirstCourse = (courseId: string) => {
    return courseId === 'nla' || courseId === 'prob';
  };
  const getCourseColor = (courseId: string) => {
    return isFirstCourse(courseId) ? 'var(--primary-color)' : 'var(--secondary-color)';
  };
  const getCourseBgColor = (courseId: string) => {
    return isFirstCourse(courseId) ? 'rgba(99, 102, 241, 0.12)' : 'rgba(236, 72, 153, 0.12)';
  };
  const getCourseBorderColor = (courseId: string) => {
    return isFirstCourse(courseId) ? 'rgba(99, 102, 241, 0.2)' : 'rgba(236, 72, 153, 0.2)';
  };
  const getCourseBadgeText = (courseId: string) => {
    if (courseId === 'nla') return isHe ? 'אלגברה ליניארית נומרית' : 'NLA';
    if (courseId === 'opt') return isHe ? 'אופטימיזציה נומרית' : 'OPT';
    if (courseId === 'prob') return isHe ? 'תורת ההסתברות' : 'PROB';
    if (courseId === 'stats') return isHe ? 'סטטיסטיקה מתמטית' : 'STATS';
    return courseId.toUpperCase();
  };

  // Filter Formulas (dynamic by active subject's courses)
  const filteredFormulas = formulas.filter(f => {
    const isFromActiveSubject = activeSubject.courses.some(c => c.id === f.courseId);
    if (!isFromActiveSubject) return false;

    const matchesSearch = 
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (f.nameHe && f.nameHe.toLowerCase().includes(searchQuery.toLowerCase())) ||
      f.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (f.descriptionHe && f.descriptionHe.toLowerCase().includes(searchQuery.toLowerCase())) ||
      f.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (f.categoryHe && f.categoryHe.toLowerCase().includes(searchQuery.toLowerCase())) ||
      f.equation.toLowerCase().includes(searchQuery.toLowerCase());
                          
    const matchesCourse = selectedCourse === 'all' || f.courseId === selectedCourse;
    const matchesStatus = selectedStatus === 'all' || 
                          (selectedStatus === 'green' && (seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true)) || 
                          (selectedStatus === 'yellow' && seenFormulas[f.id] === 'yellow') || 
                          (selectedStatus === 'red' && seenFormulas[f.id] === 'red') || 
                          (selectedStatus === 'to-learn' && !seenFormulas[f.id]);
    
    return matchesSearch && matchesCourse && matchesStatus;
  });

  // Calculate Metrics dynamically for active subject's courses
  const courseStats = activeSubject.courses.map(course => {
    const total = formulas.filter(f => f.courseId === course.id).length;
    const green = formulas.filter(f => f.courseId === course.id && (seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true)).length;
    const yellow = formulas.filter(f => f.courseId === course.id && seenFormulas[f.id] === 'yellow').length;
    const red = formulas.filter(f => f.courseId === course.id && seenFormulas[f.id] === 'red').length;
    
    const pctGreen = total > 0 ? Math.round((green / total) * 100) : 0;
    const pctYellow = total > 0 ? Math.round((yellow / total) * 100) : 0;
    const pctRed = total > 0 ? Math.round((red / total) * 100) : 0;
    
    const index = total > 0 
      ? Math.min(100, Math.round(((green * 1.0 + yellow * 0.5 + red * 0.1) / total) * 1000) / 10) 
      : 0;
      
    return {
      id: course.id,
      name: course.name,
      nameHe: course.nameHe,
      total,
      green,
      yellow,
      red,
      pctGreen,
      pctYellow,
      pctRed,
      index
    };
  });

  const lMasteryIndexTitle = isHe ? 'מדד שליטה בנושא' : 'Subject Mastery Index';
  const lLegendTitle = isHe 
    ? '* מדד משוקלל: 😄 שליטה = 100% | 😐 בתהליך = 50% | 😡 מתקשה = 10%' 
    : '* Weighted Index: 😄 Mastered = 100% | 😐 Learning = 50% | 😡 Struggling = 10%';

  // Compute Sorted List for List View
  const sortedFormulas = [...filteredFormulas].sort((a, b) => {
    if (sortBy === 'name') {
      const nameA = isHe ? (a.nameHe || a.name) : a.name;
      const nameB = isHe ? (b.nameHe || b.name) : b.name;
      return nameA.localeCompare(nameB, isHe ? 'he' : 'en');
    } else if (sortBy === 'course') {
      if (a.courseId !== b.courseId) {
        return a.courseId.localeCompare(b.courseId);
      }
      const chapterOrder = Object.keys(CATEGORY_STYLES);
      return chapterOrder.indexOf(a.category) - chapterOrder.indexOf(b.category);
    } else {
      const chapterOrder = Object.keys(CATEGORY_STYLES);
      const indexA = chapterOrder.indexOf(a.category);
      const indexB = chapterOrder.indexOf(b.category);
      if (indexA !== indexB) {
        return indexA - indexB;
      }
      const nameA = isHe ? (a.nameHe || a.name) : a.name;
      const nameB = isHe ? (b.nameHe || b.name) : b.name;
      return nameA.localeCompare(nameB, isHe ? 'he' : 'en');
    }
  });

  // Group by category
  const categoriesMap: Record<string, typeof formulas> = {};
  sortedFormulas.forEach(f => {
    const cat = isHe ? (f.categoryHe || f.category) : f.category;
    if (!categoriesMap[cat]) {
      categoriesMap[cat] = [];
    }
    categoriesMap[cat].push(f);
  });

  // Dynamic Translations
  const lTitle = isHe ? 'מרכז הנוסחאות וההגדרות' : 'Formula & Definition Hub';
  const lSubTitle = isHe 
    ? 'דף נוסחאות אינטראקטיבי להכנה מהירה למבחן. למד הגדרות, חקור משוואות ב-LaTeX, ולחץ על כל כרטיס כדי לפתוח מסך מפורט.'
    : 'Interactive formula sheet for rapid exam preparation. Study definitions, examine equations in beautiful LaTeX, and tap any card to open a full popup screen.';
  const lSearchPlaceholder = isHe ? 'חפש משוואות, מילות מפתח או קטגוריות...' : 'Search equations, definition keywords or categories...';
  const lReset = isHe ? 'איפוס' : 'Reset';
  
  const lFilterTopic = isHe ? 'נושא' : 'Topic';
  const lFilterAllCourses = isHe ? 'כל הקורסים' : 'All Courses';
  
  const lFilterMastery = isHe ? 'מדד שליטה בחומר' : 'Mastery status';
  const lFilterAll = isHe ? 'הכל' : 'All';
  const lFilterMastered = isHe ? 'שולט 😄' : 'Mastered 😄';
  const lFilterLearning = isHe ? 'בתהליך 😐' : 'Learning 😐';
  const lFilterStruggling = isHe ? 'מתקשה 😡' : 'Struggling 😡';
  const lFilterToLearn = isHe ? 'ללמוד 📝' : 'To Learn 📝';
  
  const lViewMode = isHe ? 'מצב תצוגה' : 'View Mode';
  const lGrouped = isHe ? 'תצוגת כרטיסים' : 'Card View';
  const lSortedList = isHe ? 'רשימה ממוינת' : 'Sorted List';
  const lSortBy = isHe ? 'מיין לפי' : 'Sort By';
  const lSortName = isHe ? 'סדר אלפביתי' : 'Alphabetical';
  const lSortCourse = isHe ? 'קורס' : 'Course';
  const lSortCategory = isHe ? 'קטגוריה' : 'Category';

  const lNoMatches = isHe ? 'לא נמצאו נוסחאות מתאימות' : 'No matching equations found';
  const lNoMatchesSub = isHe ? 'נסה לשנות את מילות החיפוש או פילטר הקטגוריות.' : 'Try adjusting your search query or filter keywords.';
  
  const lItemsLabel = isHe ? 'פריטים' : 'items';
  const lDefSentence = isHe ? 'משפט הגדרה:' : 'Definition Sentence:';
  const lCoreDefSentence = isHe ? 'משפט הגדרה מרכזי' : 'Core Definition Sentence';
  const lStatusLabel = isHe ? 'סטטוס:' : 'Status:';

  // Reusable card renderer
  const renderFormulaCard = (f: Formula, showCategory = false) => {
    const formulaName = isHe ? (f.nameHe || f.name) : f.name;
    const formulaDesc = isHe ? (f.descriptionHe || f.description) : f.description;

    // Find original category style
    let style = DEFAULT_STYLE;
    for (const [engCat, s] of Object.entries(CATEGORY_STYLES)) {
      if (f.category === engCat) {
        style = s;
        break;
      }
    }

    if (viewMode === 'list') {
      return (
        <motion.div 
          key={f.id} 
          className="list-view-card" 
          onClick={() => setSelectedFormula(f)}
          style={{ 
            direction: isHe ? 'rtl' : 'ltr',
            borderColor: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true
              ? 'var(--success)'
              : seenFormulas[f.id] === 'yellow'
              ? '#f59e0b'
              : seenFormulas[f.id] === 'red'
              ? '#ef4444'
              : 'var(--surface-border)',
            borderLeftWidth: isHe ? '1px' : '5px',
            borderLeftColor: isHe ? 'var(--surface-border)' : style.border,
            borderRightWidth: isHe ? '5px' : '1px',
            borderRightColor: isHe ? style.border : 'var(--surface-border)',
            boxShadow: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true
              ? '0 8px 24px rgba(16, 185, 129, 0.08)'
              : seenFormulas[f.id] === 'yellow'
              ? '0 8px 24px rgba(245, 158, 11, 0.08)'
              : seenFormulas[f.id] === 'red'
              ? '0 8px 24px rgba(239, 68, 68, 0.08)'
              : `0 4px 12px ${style.shadow}`,
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
            userSelect: 'none'
          }}
          whileHover={{ 
            transform: 'translateY(-2px)', 
            boxShadow: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true
              ? '0 12px 30px rgba(16, 185, 129, 0.14)'
              : seenFormulas[f.id] === 'yellow'
              ? '0 12px 30px rgba(245, 158, 11, 0.14)'
              : seenFormulas[f.id] === 'red'
              ? '0 12px 30px rgba(239, 68, 68, 0.14)'
              : `0 8px 20px ${style.glow}` 
          }}
        >
          {/* Column 1: Info Block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', justifySelf: 'stretch' }}>
            {/* Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span style={{ 
                fontSize: '0.72rem', 
                fontWeight: 'bold', 
                textTransform: 'uppercase', 
                color: getCourseColor(f.courseId)
              }}>
                {getCourseBadgeText(f.courseId)}
              </span>
              {showCategory && (
                <span style={{ 
                  fontSize: '0.68rem', 
                  fontWeight: 'bold', 
                  padding: '0.1rem 0.4rem',
                  borderRadius: '6px',
                  backgroundColor: style.badgeBg,
                  color: style.badgeText,
                  border: `1px solid ${style.border}`,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {isHe ? (f.categoryHe || f.category) : f.category}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 style={{ 
              fontSize: '1.15rem', 
              margin: '0.15rem 0 0.35rem 0', 
              whiteSpace: 'normal', 
              wordBreak: 'break-word', 
              color: 'var(--text-primary)',
              fontWeight: 700
            }}>
              {formulaName}
            </h3>

            {/* Definition */}
            <div style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: style.border, fontWeight: 'bold', display: 'block', marginBottom: '0.15rem' }}>
                {lDefSentence}
              </span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', fontWeight: 500, lineHeight: '1.35', margin: 0 }}>
                {formulaDesc}
              </p>
            </div>
          </div>

          {/* Column 2: Math Equation Box */}
          <div style={{ 
            background: 'var(--math-bg)', 
            padding: '0.85rem 1rem', 
            borderRadius: 'var(--radius-sm)', 
            textAlign: 'center', 
            overflowX: 'auto',
            color: 'var(--text-primary)',
            border: '1px solid var(--surface-border)',
            boxShadow: `inset 0 1px 4px rgba(0,0,0,0.15)`,
            justifySelf: 'stretch',
            alignSelf: 'stretch',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <MathRenderer tex={f.equation} block={true} style={{ fontSize: '1rem' }} />
          </div>

          {/* Column 3: Mastery actions & Emojis */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.75rem', 
            alignItems: 'center',
            justifyContent: 'center',
            justifySelf: 'center',
            width: '100%'
          }}>
            {/* Emojis selector inline wrapper */}
            <div 
              onClick={(e) => e.stopPropagation()} 
              style={{
                display: 'flex',
                gap: '0.35rem',
                background: 'var(--surface-color)',
                padding: '0.2rem',
                borderRadius: '20px',
                border: '1px solid var(--surface-border)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {/* 😄 Green button */}
              <button
                onClick={() => toggleSeen(f.id, seenFormulas[f.id] === 'green' ? null : 'green')}
                style={{
                  width: '26px', height: '26px', borderRadius: '50%',
                  background: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true ? 'rgba(16, 185, 129, 0.18)' : 'transparent',
                  border: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true ? '1.5px solid var(--success)' : '1px dashed transparent',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.88rem', transition: 'all 0.2s ease', outline: 'none',
                  opacity: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true ? 1 : 0.45,
                  boxShadow: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true ? '0 0 8px rgba(16, 185, 129, 0.4)' : 'none'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={(e) => { if (seenFormulas[f.id] !== 'green' && seenFormulas[f.id] !== true) e.currentTarget.style.opacity = '0.45'; }}
                title={isHe ? 'שולט 😄' : 'Mastered 😄'}
              >
                😄
              </button>

              {/* 😐 Yellow button */}
              <button
                onClick={() => toggleSeen(f.id, seenFormulas[f.id] === 'yellow' ? null : 'yellow')}
                style={{
                  width: '26px', height: '26px', borderRadius: '50%',
                  background: seenFormulas[f.id] === 'yellow' ? 'rgba(245, 158, 11, 0.18)' : 'transparent',
                  border: seenFormulas[f.id] === 'yellow' ? '1.5px solid #f59e0b' : '1px dashed transparent',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.88rem', transition: 'all 0.2s ease', outline: 'none',
                  opacity: seenFormulas[f.id] === 'yellow' ? 1 : 0.45,
                  boxShadow: seenFormulas[f.id] === 'yellow' ? '0 0 8px rgba(245, 158, 11, 0.4)' : 'none'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={(e) => { if (seenFormulas[f.id] !== 'yellow') e.currentTarget.style.opacity = '0.45'; }}
                title={isHe ? 'בתהליך 😐' : 'Learning 😐'}
              >
                😐
              </button>

              {/* 😡 Red button */}
              <button
                onClick={() => toggleSeen(f.id, seenFormulas[f.id] === 'red' ? null : 'red')}
                style={{
                  width: '26px', height: '26px', borderRadius: '50%',
                  background: seenFormulas[f.id] === 'red' ? 'rgba(239, 68, 68, 0.18)' : 'transparent',
                  border: seenFormulas[f.id] === 'red' ? '1.5px solid #ef4444' : '1px dashed transparent',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.88rem', transition: 'all 0.2s ease', outline: 'none',
                  opacity: seenFormulas[f.id] === 'red' ? 1 : 0.45,
                  boxShadow: seenFormulas[f.id] === 'red' ? '0 0 8px rgba(239, 68, 68, 0.4)' : 'none'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={(e) => { if (seenFormulas[f.id] !== 'red') e.currentTarget.style.opacity = '0.45'; }}
                title={isHe ? 'מתקשה 😡' : 'Struggling 😡'}
              >
                😡
              </button>
            </div>

            {/* Celebration status badge */}
            {seenFormulas[f.id] && (
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.3rem', 
                padding: '0.3rem 0.6rem',
                background: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true
                  ? 'rgba(16, 185, 129, 0.08)'
                  : seenFormulas[f.id] === 'yellow'
                  ? 'rgba(245, 158, 11, 0.08)'
                  : 'rgba(239, 68, 68, 0.08)', 
                borderRadius: 'var(--radius-sm)',
                border: `1px solid ${
                  seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true
                    ? 'rgba(16, 185, 129, 0.15)'
                    : seenFormulas[f.id] === 'yellow'
                    ? 'rgba(245, 158, 11, 0.15)'
                    : 'rgba(239, 68, 68, 0.15)'
                }`
              }}>
                <Award size={14} color={
                  seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true
                    ? 'var(--success)'
                    : seenFormulas[f.id] === 'yellow'
                    ? '#f59e0b'
                    : '#ef4444'
                } />
                <span style={{ 
                  fontSize: '0.75rem', 
                  color: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true
                    ? 'var(--success)'
                    : seenFormulas[f.id] === 'yellow'
                    ? '#f59e0b'
                    : '#ef4444', 
                  fontWeight: 'bold' 
                }}>
                  {seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true
                    ? (isHe ? 'שולט' : 'Mastered')
                    : seenFormulas[f.id] === 'yellow'
                    ? (isHe ? 'בתהליך' : 'Learning')
                    : (isHe ? 'מתקשה' : 'Struggling')
                  }
                </span>
              </div>
            )}
          </div>
        </motion.div>
      );
    }

    return (
      <motion.div 
        key={f.id} 
        className="glass-card" 
        onClick={() => setSelectedFormula(f)}
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          borderColor: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true
            ? 'var(--success)'
            : seenFormulas[f.id] === 'yellow'
            ? '#f59e0b'
            : seenFormulas[f.id] === 'red'
            ? '#ef4444'
            : 'var(--surface-border)',
          borderLeftWidth: isHe ? '1px' : '5px',
          borderLeftColor: isHe ? 'var(--surface-border)' : style.border,
          borderRightWidth: isHe ? '5px' : '1px',
          borderRightColor: isHe ? style.border : 'var(--surface-border)',
          boxShadow: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true
            ? '0 8px 24px rgba(16, 185, 129, 0.12)'
            : seenFormulas[f.id] === 'yellow'
            ? '0 8px 24px rgba(245, 158, 11, 0.12)'
            : seenFormulas[f.id] === 'red'
            ? '0 8px 24px rgba(239, 68, 68, 0.12)'
            : `0 4px 12px ${style.shadow}`,
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
          userSelect: 'none'
        }}
        whileHover={{ 
          transform: 'translateY(-4px)', 
          boxShadow: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true
            ? '0 12px 30px rgba(16, 185, 129, 0.18)'
            : seenFormulas[f.id] === 'yellow'
            ? '0 12px 30px rgba(245, 158, 11, 0.18)'
            : seenFormulas[f.id] === 'red'
            ? '0 12px 30px rgba(239, 68, 68, 0.18)'
            : `0 8px 20px ${style.glow}` 
        }}
      >
        {/* 3-Tier Emoji Marking Row */}
        <div 
          onClick={(e) => e.stopPropagation()} // Prevent card click
          style={{
            position: 'absolute',
            top: '1.1rem',
            right: isHe ? 'auto' : '1.1rem',
            left: isHe ? '1.1rem' : 'auto',
            display: 'flex',
            gap: '0.3rem',
            zIndex: 5,
            background: 'var(--surface-color)',
            padding: '0.2rem',
            borderRadius: '20px',
            border: '1px solid var(--surface-border)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          {/* 😄 Green button */}
          <button
            onClick={() => toggleSeen(f.id, seenFormulas[f.id] === 'green' ? null : 'green')}
            style={{
              width: '26px', height: '26px', borderRadius: '50%',
              background: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true ? 'rgba(16, 185, 129, 0.18)' : 'transparent',
              border: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true ? '1.5px solid var(--success)' : '1px dashed transparent',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.88rem', transition: 'all 0.2s ease', outline: 'none',
              opacity: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true ? 1 : 0.45,
              boxShadow: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true ? '0 0 8px rgba(16, 185, 129, 0.4)' : 'none'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
            onMouseLeave={(e) => { if (seenFormulas[f.id] !== 'green' && seenFormulas[f.id] !== true) e.currentTarget.style.opacity = '0.45'; }}
            title={isHe ? 'שולט 😄' : 'Mastered 😄'}
          >
            😄
          </button>

          {/* 😐 Yellow button */}
          <button
            onClick={() => toggleSeen(f.id, seenFormulas[f.id] === 'yellow' ? null : 'yellow')}
            style={{
              width: '26px', height: '26px', borderRadius: '50%',
              background: seenFormulas[f.id] === 'yellow' ? 'rgba(245, 158, 11, 0.18)' : 'transparent',
              border: seenFormulas[f.id] === 'yellow' ? '1.5px solid #f59e0b' : '1px dashed transparent',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.88rem', transition: 'all 0.2s ease', outline: 'none',
              opacity: seenFormulas[f.id] === 'yellow' ? 1 : 0.45,
              boxShadow: seenFormulas[f.id] === 'yellow' ? '0 0 8px rgba(245, 158, 11, 0.4)' : 'none'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
            onMouseLeave={(e) => { if (seenFormulas[f.id] !== 'yellow') e.currentTarget.style.opacity = '0.45'; }}
            title={isHe ? 'בתהליך 😐' : 'Learning 😐'}
          >
            😐
          </button>

          {/* 😡 Red button */}
          <button
            onClick={() => toggleSeen(f.id, seenFormulas[f.id] === 'red' ? null : 'red')}
            style={{
              width: '26px', height: '26px', borderRadius: '50%',
              background: seenFormulas[f.id] === 'red' ? 'rgba(239, 68, 68, 0.18)' : 'transparent',
              border: seenFormulas[f.id] === 'red' ? '1.5px solid #ef4444' : '1px dashed transparent',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.88rem', transition: 'all 0.2s ease', outline: 'none',
              opacity: seenFormulas[f.id] === 'red' ? 1 : 0.45,
              boxShadow: seenFormulas[f.id] === 'red' ? '0 0 8px rgba(239, 68, 68, 0.4)' : 'none'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
            onMouseLeave={(e) => { if (seenFormulas[f.id] !== 'red') e.currentTarget.style.opacity = '0.45'; }}
            title={isHe ? 'מתקשה 😡' : 'Struggling 😡'}
          >
            😡
          </button>
        </div>

        {/* Course badge indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
          <span style={{ 
            fontSize: '0.75rem', 
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            color: getCourseColor(f.courseId)
          }}>
            {getCourseBadgeText(f.courseId)}
          </span>
          {showCategory && (
            <span style={{ 
              fontSize: '0.72rem', 
              fontWeight: 'bold', 
              padding: '0.1rem 0.5rem',
              borderRadius: '6px',
              backgroundColor: style.badgeBg,
              color: style.badgeText,
              border: `1px solid ${style.border}`,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {isHe ? (f.categoryHe || f.category) : f.category}
            </span>
          )}
        </div>

        {/* Equation Title */}
        <h3 style={{ 
          fontSize: '1.2rem', 
          marginTop: '0.2rem', 
          marginBottom: '1rem', 
          paddingRight: isHe ? '0' : '5.5rem', 
          paddingLeft: isHe ? '5.5rem' : '0', 
          whiteSpace: 'normal', 
          wordBreak: 'break-word', 
          color: 'var(--text-primary)' 
        }}>
          {formulaName}
        </h3>
        
        {/* Mathematical Equation Box - Beautifully Rendered via MathRenderer */}
        <div style={{ 
          background: 'var(--math-bg)', 
          padding: '1.25rem 1rem', 
          borderRadius: 'var(--radius-sm)', 
          textAlign: 'center', 
          marginBottom: '1.25rem',
          overflowX: 'auto',
          color: 'var(--text-primary)',
          border: '1px solid var(--surface-border)',
          boxShadow: `inset 0 1px 4px rgba(0,0,0,0.15)`
        }}>
          <MathRenderer tex={f.equation} block={true} style={{ fontSize: '1.1rem' }} />
        </div>

        {/* Explicit Definition Sentence Requirement (Wrapped nicely without scrolling) */}
        <div style={{ marginBottom: '1rem', flexGrow: 1, whiteSpace: 'normal', wordBreak: 'break-word' }}>
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: style.border, fontWeight: 'bold', display: 'block', marginBottom: '0.3rem' }}>
            {lDefSentence}
          </span>
          <p style={{ color: 'var(--text-primary)', fontSize: '0.92rem', fontWeight: 500, lineHeight: '1.4', margin: 0 }}>
            {formulaDesc}
          </p>
        </div>

        {/* Celebration status badge */}
        {seenFormulas[f.id] && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.4rem', 
            marginTop: '1rem',
            padding: '0.4rem 0.8rem',
            background: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true
              ? 'rgba(16, 185, 129, 0.1)'
              : seenFormulas[f.id] === 'yellow'
              ? 'rgba(245, 158, 11, 0.1)'
              : 'rgba(239, 68, 68, 0.1)', 
            borderRadius: 'var(--radius-sm)',
            border: `1px solid ${
              seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true
                ? 'rgba(16, 185, 129, 0.2)'
                : seenFormulas[f.id] === 'yellow'
                ? 'rgba(245, 158, 11, 0.2)'
                : 'rgba(239, 68, 68, 0.2)'
            }`,
            alignSelf: 'flex-start'
          }}>
            <Award size={16} color={
              seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true
                ? 'var(--success)'
                : seenFormulas[f.id] === 'yellow'
                ? '#f59e0b'
                : '#ef4444'
            } />
            <span style={{ 
              fontSize: '0.8rem', 
              color: seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true
                ? 'var(--success)'
                : seenFormulas[f.id] === 'yellow'
                ? '#f59e0b'
                : '#ef4444', 
              fontWeight: 'bold' 
            }}>
              {seenFormulas[f.id] === 'green' || seenFormulas[f.id] === true
                ? (isHe ? 'שולט' : 'Mastered')
                : seenFormulas[f.id] === 'yellow'
                ? (isHe ? 'בתהליך' : 'Learning')
                : (isHe ? 'מתקשה' : 'Struggling')
              }
            </span>
          </div>
        )}
      </motion.div>
    );
  };

  // ==========================================
  // Comparative Summary Tables Render Function
  // ==========================================
  const renderComparisonTables = () => {
    return (
      <div style={{ marginBottom: '4rem', direction: isHe ? 'rtl' : 'ltr' }}>
        {/* Table Tabs */}
        <div style={{ display: 'flex', gap: '0.65rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <motion.button
            onClick={() => setActiveTableTab('norms')}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className={`filter-btn ${activeTableTab === 'norms' ? 'active' : ''}`}
            style={{ 
              background: activeTableTab === 'norms' ? 'var(--primary-color)' : 'var(--math-bg)',
              color: activeTableTab === 'norms' ? 'white' : 'var(--text-secondary)',
              border: '1px solid var(--surface-border)',
              padding: '0.6rem 1.1rem',
              fontWeight: 600
            }}
          >
            {isHe ? 'נורמות וקטוריות ומטריציאליות 📏' : 'Vector & Matrix Norms 📏'}
          </motion.button>
          
          <motion.button
            onClick={() => setActiveTableTab('solvers')}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className={`filter-btn ${activeTableTab === 'solvers' ? 'active' : ''}`}
            style={{ 
              background: activeTableTab === 'solvers' ? 'var(--primary-color)' : 'var(--math-bg)',
              color: activeTableTab === 'solvers' ? 'white' : 'var(--text-secondary)',
              border: '1px solid var(--surface-border)',
              padding: '0.6rem 1.1rem',
              fontWeight: 600
            }}
          >
            {isHe ? 'פותרי מערכות ישירים ⚡' : 'Direct Linear Solvers ⚡'}
          </motion.button>

          <motion.button
            onClick={() => setActiveTableTab('iterative')}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className={`filter-btn ${activeTableTab === 'iterative' ? 'active' : ''}`}
            style={{ 
              background: activeTableTab === 'iterative' ? 'var(--primary-color)' : 'var(--math-bg)',
              color: activeTableTab === 'iterative' ? 'white' : 'var(--text-secondary)',
              border: '1px solid var(--surface-border)',
              padding: '0.6rem 1.1rem',
              fontWeight: 600
            }}
          >
            {isHe ? 'פותרים איטרטיביים 🔄' : 'Iterative Solvers 🔄'}
          </motion.button>
          
          <motion.button
            onClick={() => setActiveTableTab('unconstrained')}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className={`filter-btn ${activeTableTab === 'unconstrained' ? 'active' : ''}`}
            style={{ 
              background: activeTableTab === 'unconstrained' ? 'var(--primary-color)' : 'var(--math-bg)',
              color: activeTableTab === 'unconstrained' ? 'white' : 'var(--text-secondary)',
              border: '1px solid var(--surface-border)',
              padding: '0.6rem 1.1rem',
              fontWeight: 600
            }}
          >
            {isHe ? 'אופטימיזציה ללא אילוצים 📉' : 'Unconstrained Optimization 📉'}
          </motion.button>

          <motion.button
            onClick={() => setActiveTableTab('constrained')}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className={`filter-btn ${activeTableTab === 'constrained' ? 'active' : ''}`}
            style={{ 
              background: activeTableTab === 'constrained' ? 'var(--primary-color)' : 'var(--math-bg)',
              color: activeTableTab === 'constrained' ? 'white' : 'var(--text-secondary)',
              border: '1px solid var(--surface-border)',
              padding: '0.6rem 1.1rem',
              fontWeight: 600
            }}
          >
            {isHe ? 'אופטימיזציה תחת אילוצים 🛡️' : 'Constrained Optimization 🛡️'}
          </motion.button>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTableTab === 'norms' && (
            <motion.div
              key="norms-table"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="glass-card" style={{ padding: '1.75rem', borderLeft: '4px solid var(--primary-color)' }}>
                <h2 style={{ fontSize: '1.45rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>📏</span> {isHe ? 'נורמות וקטוריות ומטריציאליות' : 'Vector & Matrix Norms'}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                  {isHe 
                    ? 'סיכום מקיף של נורמות וקטוריות ושל נורמות מטריצה מושרות (ולא מושרות) שלמדנו בקורס.'
                    : 'A comprehensive summary of vector norms and induced (or non-induced) matrix norms studied in the curriculum.'}
                </p>

                <div style={{ overflowX: 'auto', width: '100%' }}>
                  <table className="custom-table">
                    <thead>
                      <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '2px solid var(--surface-border)' }}>
                        <th style={{ padding: '0.75rem', textAlign: isHe ? 'right' : 'left' }}>{isHe ? 'סוג נורמה' : 'Norm Type'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'הגדרה / נוסחה' : 'Definition / Formula'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'תכונות מפתח ושקילויות' : 'Properties & Equivalences'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'שימושים מרכזיים' : 'Key Applications'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'וקטורית p-נורמה כללית' : 'Vector p-Norm'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\|x\|_p = \left( \sum_{i=1}^n |x_i|^p \right)^{1/p}" /></td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'מקיימת אי-שוויון המשולש. מוגדרת לכל p ≥ 1.' : 'Triangle inequality holds. Defined for p ≥ 1.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'חישוב מרחקים וגדלים במרחב הדו-ממדי והרב-ממדי.' : 'General geometric distance calculations in Rn.'}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'וקטורית 1-נורמה (מנהטן)' : 'Vector 1-Norm'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\|x\|_1 = \sum_{i=1}^n |x_i|" /></td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'סכום ערכים מוחלטים. משרה את נורמת העמודה המקסימלית.' : 'Absolute sum of coordinates. Induces matrix 1-norm.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'קירוב דלילות (Lasso / L1 regularization) באופטימיזציה.' : 'Compressed sensing and sparse recovery (L1 regularization).'}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'וקטורית 2-נורמה (אוקלידית)' : 'Vector 2-Norm'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\|x\|_2 = \sqrt{\sum_{i=1}^n |x_i|^2}" /></td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'מושרת על ידי מכפלה פנימית סטנדרטית (אורך פיזי).' : 'Induced directly by the standard Hermitian inner product.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'ריבועים מינימליים, אלגוריתמי גרדיאנט, אנליזה מרחבית.' : 'Standard least squares, gradients, and mechanical energy.'}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'וקטורית ∞-נורמה (מקסימום)' : 'Vector ∞-Norm'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\|x\|_\infty = \max_{1 \le i \le n} |x_i|" /></td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'הרכיב המקסימלי בערכו המוחלט. משרה נורמת שורה מקסימלית.' : 'Maximum absolute coordinate. Induces matrix infinity-norm.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'בקרת שגיאות מוחלטת מחמירה (Worst-case limits).' : 'Worst-case tolerance bounds and bounds checker.'}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'מטריצה 1-נורמה מושרית' : 'Matrix 1-Norm'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\|A\|_1 = \max_{1 \le j \le n} \sum_{i=1}^m |a_{ij}|" /></td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'סכום עמודה מוחלט מקסימלי. מושרית מנורמת וקטור L1.' : 'Maximum absolute column sum. Induced by vector 1-norm.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'חסמי שגיאה מהירים, חישוב מספרי קל יחסית.' : 'Fast computational error bounds on linear solvers.'}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'מטריצה 2-נורמה (ספקטרלית)' : 'Matrix 2-Norm'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\|A\|_2 = \sigma_{\max}(A) = \sqrt{\lambda_{\max}(A^T A)}" /></td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'ערך סינגולרי מקסימלי. מושרית מנורמת וקטור L2.' : 'Maximum singular value of A. Induced by vector 2-norm.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'אנליזה של מספרי מצב, יציבות אלגוריתמים, SVD.' : 'Sensitivity analysis, condition numbers, and SVD bounding.'}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'מטריצה ∞-נורמה מושרית' : 'Matrix ∞-Norm'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\|A\|_\infty = \max_{1 \le i \le m} \sum_{j=1}^n |a_{ij}|" /></td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'סכום שורה מוחלט מקסימלי. מושרית מנורמת וקטור L∞.' : 'Maximum absolute row sum. Induced by vector infinity-norm.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'נוחה לחישוב ידני ואינטואיציה מהירה של יציבות.' : 'Analytical bounding and fast visual estimation.'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'נורמת פרובניוס (איבר-איבר)' : 'Frobenius Norm'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\|A\|_F = \sqrt{\sum_{i,j} |a_{ij}|^2} = \sqrt{\text{tr}(A^* A)}" /></td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'אינה מושרית! אך סאב-מולטיפליקטיבית ומקיימת רציפות.' : 'Not an induced norm! However, sub-multiplicative.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'קירובי מטריצות (Low-rank approximations), אנליזת שגיאה.' : 'Matrix approximations, low-rank truncations, and errors.'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTableTab === 'solvers' && (
            <motion.div
              key="solvers-table"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="glass-card" style={{ padding: '1.75rem', borderLeft: '4px solid var(--primary-color)' }}>
                <h2 style={{ fontSize: '1.45rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>⚡</span> {isHe ? 'פותרי מערכות ליניאריות ישירים' : 'Direct Linear Solvers'}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                  {isHe 
                    ? 'השוואה בין שיטות הפירוק המרכזיות לפתרון מערכות ישיר Ax=b לפי דרישות קדם, סיבוכיות, ויציבות נומרית.'
                    : 'Comparison of key direct matrix decomposition solvers for linear systems Ax=b by prerequisites, cost, and stability.'}
                </p>

                <div style={{ overflowX: 'auto', width: '100%' }}>
                  <table className="custom-table">
                    <thead>
                      <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '2px solid var(--surface-border)' }}>
                        <th style={{ padding: '0.75rem', textAlign: isHe ? 'right' : 'left' }}>{isHe ? 'שיטת פירוק' : 'Solver / Method'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'דרישות מהמטריצה A' : 'Matrix Requirements'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'סיבוכיות פלופים (Flops)' : 'Flop Complexity'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'יציבות נומרית' : 'Numerical Stability'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'ייעוד ושימוש מרכזי' : 'Best For / Use Cases'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'פירוק LU בסיסי' : 'Naïve LU'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'ריבועית. כל המינורים הראשיים המובילים הפיכים.' : 'Square. All leading principal minors non-singular.'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\frac{2}{3}n^3 + \mathcal{O}(n^2)" /></td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'גרועה מאוד (חלוקה באפס או במספר קטן ללא פיבוט).' : 'Unstable (division by zero or near-zero pivot).'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'שימוש תיאורטי בלבד; בסיס לשיטות מתקדמות.' : 'Theoretical formulations; educational base model.'}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'פירוק LU עם פיבוט (PLU)' : 'LU with Pivoting (PLU)'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'ריבועית כללית והפיכה.' : 'General invertible square matrix.'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\frac{2}{3}n^3 + \text{swap costs}" /></td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'יציבה מאוד בפועל (עמידה בשגיאות עיגול בזכות פיבוט שורות).' : 'Extremely robust in practice (backward stable).'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'פתרון מערכות ליניאריות כלליות ומחשבוני דטרמיננטות.' : 'General linear systems Ax=b, matrix inversion.'}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'פירוק חולסקי (Cholesky)' : 'Cholesky (LLᵀ)'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="A = A^* > 0" /> <br/><span style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>{isHe ? 'הרמיטית חיובית לחלוטין (SPD)' : 'Hermitian Positive Definite'}</span></td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\frac{1}{3}n^3 + \mathcal{O}(n^2)" /> <br/><span style={{fontSize:'0.75rem', color:'#10b981', fontWeight:'bold'}}>{isHe ? 'מהיר פי 2 מ-LU!' : '2x Faster than LU!'}</span></td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'מעולה ויציבה במיוחד (אין צורך בפיבוט שורות כלל).' : 'Symmetric stability guaranteed (no pivoting needed).'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'מערכות המגיעות ממשוואות דיפרנציאליות (SPD), סטטיסטיקה.' : 'Finite elements (FEM), covariance matrices, SPD equations.'}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'פירוק QR' : 'QR Decomposition'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'מלבנית כללית (m ≥ n), בעלת עמודות בת"ל.' : 'Rectangular or square (m ≥ n), full column rank.'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\frac{4}{3}n^3" /> {isHe ? '(האוסהולדר)' : '(Householder)'} <br/><span style={{fontSize:'0.75rem', color:'var(--text-muted)'}}><MathRenderer tex="2n^3" /> {isHe ? '(גרם-שמידט)' : '(Gram-Schmidt)'}</span></td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'יציבה להפליא (שיקופי האוסהולדר משמרים אורתוגונליות).' : 'Excellent (Householder reflections are strictly stable).'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'בעיית ריבועים מינימליים (Least Squares), מציאת ע"ע.' : 'Least Squares optimization, QR eigenvalue algorithms.'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'פירוק ערכים סינגולריים (SVD)' : 'Singular Value Decomp (SVD)'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'מטריצה מלבנית כללית (m × n).' : 'Any general rectangular matrix.'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\mathcal{O}(mn^2)" /> {isHe ? 'עד' : 'to'} <br/><span style={{fontSize:'0.75rem', color:'var(--text-muted)'}}><MathRenderer tex="\mathcal{O}(n^3)" /> (large constants)</span></td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'היציבה ביותר שקיימת (רובוסטית לחלוטין לכל דרגה).' : 'Ultimate numerical robustness; handles rank deficiency.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'קירוב דרגה נמוכה (Low-rank), פסאודו-אינברס, PCA.' : 'Low-rank approximations, pseudo-inverse, PCA analysis.'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTableTab === 'iterative' && (
            <motion.div
              key="iterative-table"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="glass-card" style={{ padding: '1.75rem', borderLeft: '4px solid var(--primary-color)' }}>
                <h2 style={{ fontSize: '1.45rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>🔄</span> {isHe ? 'פותרים איטרטיביים למערכות ליניאריות' : 'Iterative Linear Solvers'}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                  {isHe 
                    ? 'השוואה בין השיטות האיטרטיביות המרכזיות לפתרון מערכות דלילות גדולות Ax=b, לפי קצב התכנסות ודרישות.'
                    : 'A side-by-side comparison of linear iterative solvers for large sparse systems, showing rates and footprints.'}
                </p>

                <div style={{ overflowX: 'auto', width: '100%' }}>
                  <table className="custom-table">
                    <thead>
                      <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '2px solid var(--surface-border)' }}>
                        <th style={{ padding: '0.75rem', textAlign: isHe ? 'right' : 'left' }}>{isHe ? 'שם השיטה' : 'Solver'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'דרישות מהמטריצה A' : 'Matrix Requirements'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'קצב התכנסות' : 'Convergence Rate'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'עלות פלופים / איטרציה' : 'Flop Cost / Iteration'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'צריכת זיכרון (Footprint)' : 'Memory Footprint'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'שיטת יעקובי (Jacobi)' : 'Jacobi Method'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'אלכסונית שולטת חזקה (Strictly Diagonally Dominant)' : 'Strictly Diagonally Dominant (SDD)'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'ליניארי (איטי מאוד).' : 'Linear (very slow).'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\mathcal{O}(n^2)" /> <br/><span style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>{isHe ? 'עבור דלילה:' : 'For sparse:'} <MathRenderer tex="\mathcal{O}(\text{nnz})" /></span></td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="2n" /> <br/><span style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>{isHe ? '(וקטורים ישן וחדש בנפרד)' : '(Requires old and new vector storage)'}</span></td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'גאוס-סיידל (Gauss-Seidel)' : 'Gauss-Seidel'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'אלכסונית שולטת חזקה או מטריצת SPD.' : 'SDD or Symmetric Positive Definite (SPD)'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'ליניארי (לרוב פי 2 מהיר מיעקובי).' : 'Linear (usually 2x faster than Jacobi).'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\mathcal{O}(n^2)" /> <br/><span style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>{isHe ? 'עבור דלילה:' : 'For sparse:'} <MathRenderer tex="\mathcal{O}(\text{nnz})" /></span></td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="n" /> <br/><span style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>{isHe ? '(עדכון במקום ללא הפרדת וקטורים)' : '(Updates in-place, less memory)'}</span></td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'הרפיה מוצלחת (SOR)' : 'Successive Over-Relaxation (SOR)'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'אלכסונית שולטת או SPD. דורשת מקדם רלקסציה ω.' : 'SDD or SPD. Requires parameter ω ∈ (1,2).'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'ליניארי מואץ (מהיר משמעותית עם ω אופטימלי).' : 'Accelerated linear (highly dependent on optimal ω).'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\mathcal{O}(n^2)" /> <br/><span style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>{isHe ? 'עבור דלילה:' : 'For sparse:'} <MathRenderer tex="\mathcal{O}(\text{nnz})" /></span></td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="n" /> <br/><span style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>{isHe ? '(עדכון במקום תוך שילוב משקולת)' : '(Updates in-place with relaxation weighting)'}</span></td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'גרדיאנטים צמודים (CG)' : 'Conjugate Gradient (CG)'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="A = A^* > 0" /> <br/><span style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>{isHe ? 'מטריצת SPD' : 'Symmetric Positive Definite'}</span></td>
                        <td style={{ padding: '0.75rem', color:'#10b981', fontWeight:'bold' }}>{isHe ? 'על-ליניארי (מובטח n שלבים תיאורטית, סופר-מהיר).' : 'Superlinear (extremely fast, converges in at most n steps)'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\mathcal{O}(\text{nnz})" /> <br/><span style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>{isHe ? 'כפל מטריצה-וקטור יחיד בכל איטרציה' : 'One matrix-vector multiply per iteration'}</span></td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="4n" /> <br/><span style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>{isHe ? '(שומר וקטורי שגיאה, כיוון, וחיפוש)' : '(Stores iterate, residual, search dir, and Ap)'}</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTableTab === 'unconstrained' && (
            <motion.div
              key="unconstrained-table"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="glass-card" style={{ padding: '1.75rem', borderLeft: '4px solid var(--primary-color)' }}>
                <h2 style={{ fontSize: '1.45rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>📉</span> {isHe ? 'אלגוריתמי אופטימיזציה ללא אילוצים' : 'Unconstrained Optimization'}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                  {isHe 
                    ? 'השוואה בין האלגוריתמים המרכזיים למציאת מינימום מקומי של פונקציה חלקה ללא אילוצים.'
                    : 'Comparison of key optimization algorithms for local minimization of smooth functions.'}
                </p>

                <div style={{ overflowX: 'auto', width: '100%' }}>
                  <table className="custom-table">
                    <thead>
                      <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '2px solid var(--surface-border)' }}>
                        <th style={{ padding: '0.75rem', textAlign: isHe ? 'right' : 'left' }}>{isHe ? 'שם האלגוריתם' : 'Algorithm'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'קצב התכנסות' : 'Convergence Rate'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'עלות חישוב לאיטרציה' : 'Cost Per Iteration'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'דרישות נגזרת / מידע סדר שני' : 'Hessian / Gradient Info'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'צורך בחיפוש קו (Line Search)' : 'Line Search Required'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'גרדיאנט יורד (Steepest Descent)' : 'Gradient Descent'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'ליניארי (עלול להיות איטי מאוד עם זיגזגים).' : 'Linear (highly sensitive to conditioning; zig-zags).'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\mathcal{O}(n)" /></td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'גרדיאנט בלבד (סדר ראשון). אין צורך בהסיאן.' : 'Gradient only (1st order info). No Hessian required.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'הכרחי (למניעת התבדרות וקביעת גודל צעד מתאים).' : 'Essential (Backtracking or Armijo rules).'}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'שיטת ניוטון (Newton\'s Method)' : 'Newton\'s Method'}</td>
                        <td style={{ padding: '0.75rem', color:'#10b981', fontWeight:'bold' }}>{isHe ? 'ריבועי (מהיר מאוד בקרבת המינימום).' : 'Quadratic (extremely rapid locally near minimizer).'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\mathcal{O}(n^3)" /> <br/><span style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>{isHe ? '(פתרון מערכת הסיאן)' : '(Hessian linear system solver)'}</span></td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'גרדיאנט והסיאן מלא מדויק (סדר שני).' : 'Requires both Gradient and exact Hessian matrix.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'רצוי לגלובליזציה (צעד יחידה 1 מובטח להתכנס מקומית).' : 'Recommended for global safety; standard step = 1 locally.'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'שיטת קוואזי-ניוטון (BFGS)' : 'Quasi-Newton (BFGS)'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'סופר-ליניארי (מהיר מגרדיאנט, איטי במעט מניוטון).' : 'Superlinear (faster than GD, slightly slower than Newton).'}</td>
                        <td style={{ padding: '0.75rem' }}><MathRenderer tex="\mathcal{O}(n^2)" /> <br/><span style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>{isHe ? '(עדכון הסיאן הפוך בדרגה 2)' : '(Rank-2 update of inverse Hessian approx)'}</span></td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'גרדיאנט בלבד! משחזרת הערכה להסיאן ההפוך.' : 'Gradient only! Generates approximate inverse Hessian.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'חובה (דורש תנאי וולף לשמירת חיוביות ההסיאן).' : 'Mandatory (Wolfe conditions required to preserve SPD Hessian).'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTableTab === 'constrained' && (
            <motion.div
              key="constrained-table"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="glass-card" style={{ padding: '1.75rem', borderLeft: '4px solid var(--primary-color)' }}>
                <h2 style={{ fontSize: '1.45rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>🛡️</span> {isHe ? 'פרדיגמות אופטימיזציה תחת אילוצים' : 'Constrained Optimization'}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                  {isHe 
                    ? 'השוואה בין הגישות והפרדיגמות השונות לטיפול באילוצי שוויון ואי-שוויון באופטימיזציה.'
                    : 'Comparison of different paradigms to handle equality and inequality constraints.'}
                </p>

                <div style={{ overflowX: 'auto', width: '100%' }}>
                  <table className="custom-table">
                    <thead>
                      <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '2px solid var(--surface-border)' }}>
                        <th style={{ padding: '0.75rem', textAlign: isHe ? 'right' : 'left' }}>{isHe ? 'פרדיגמה / גישה' : 'Paradigm'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'אופן אכיפת האילוץ' : 'Constraint Enforcement'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'יתרונות מפתח' : 'Key Advantages'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'חסרונות ומכשולים' : 'Drawbacks & Pitfalls'}</th>
                        <th style={{ padding: '0.75rem', textAlign: 'left' }}>{isHe ? 'שימוש אידיאלי' : 'Ideal Use Cases'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'הדואליות של לגראנז\'' : 'Lagrangian Dual'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'שילוב האילוצים ככופלים לפונקציית לגראנז\' L(x,λ).' : 'Lagrange multipliers incorporate boundaries via L(x,λ).'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'מפחית ממד כאשר מספר האילוצים קטן; מבטיח חסם תחתון.' : 'Reduces dimension when constraints are few; guarantees lower bounds.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'פונקציית הדואל עלולה לא להיות גזירה; פער דואליות בלא-קמור.' : 'Dual function may be non-differentiable; gaps in non-convex.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'אופטימיזציה קמורה, מודלים כלכליים, SVM.' : 'Convex programming, economics models, SVM learning.'}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'שיטות קנס (Penalty Methods)' : 'Penalty Methods'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'הוספת קנס ריבועי לפונקציית המטרה על הפרת אילוצים.' : 'Adds violation penalty proportional to constraint breach squared.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'קל מאוד למימוש; הופך בעיה עם אילוצים לבעיה פשוטה.' : 'Extremely easy to implement; converts problem to unconstrained.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'דורש שאיפה של מקדם הקנס לאינסוף, מה שגורם להקשחה רעה מאוד של ההסיאן.' : 'Requires penalty parameter μ → ∞, leading to severe Hessian ill-conditioning.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'בעיות פשוטות, קירוב ראשוני מהיר (Warm start).' : 'Simple boundaries, initial warm starts, regularization.'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{isHe ? 'שיטות מחסום (Barrier / Interior)' : 'Barrier / Interior Point'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'הוספת מחסום לוגריתמי השואף לאינסוף על שפת האילוץ.' : 'Logarithmic barrier prevents iterates from crossing boundary.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'האיטרציות נשארות תמיד קבילות פיזית (Feasible iterates).' : 'Iterates always remain strictly inside the feasible region.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'מחייב נקודת התחלה קבילה לחלוטין; רגיש ליד השפה.' : 'Requires strictly feasible starting points; highly non-linear near walls.'}</td>
                        <td style={{ padding: '0.75rem' }}>{isHe ? 'תכנון ליניארי/ריבועי בקנה מידה גדול (Convex QP/LP).' : 'Large-scale convex programming, LP, QP models.'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      style={{ maxWidth: '1100px', margin: '0 auto' }}
    >
      {/* Header Panel */}
      <header style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '1rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>{lTitle}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          {lSubTitle}
        </p>
      </header>

      {/* Progress Dashboard with Collapsible Stats Cards & Subject Mastery Index */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {courseStats.map((cStat, index) => {
          const isExpanded = expandedCourses[cStat.id] || false;
          const borderTopColor = index === 0 ? 'var(--primary-color)' : 'var(--secondary-color)';
          const hoverShadow = index === 0 
            ? '0 12px 30px rgba(99, 102, 241, 0.15)' 
            : '0 12px 30px rgba(236, 72, 153, 0.15)';
            
          const courseTitle = isHe ? cStat.nameHe : cStat.name;
          
          return (
            <motion.div 
              key={cStat.id}
              className="glass-panel" 
              whileHover={{ 
                y: -3,
                boxShadow: hoverShadow
              }}
              transition={{ duration: 0.2 }}
              style={{ 
                padding: '1.5rem 1.75rem', 
                borderTop: `4px solid ${borderTopColor}`, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1rem',
                transition: 'box-shadow 0.3s ease, transform 0.2s ease'
              }}
            >
              {/* Header (Clickable Toggle) */}
              <motion.div 
                onClick={() => toggleCourseExpanded(cStat.id)}
                whileHover={{ scale: 0.99, x: isHe ? -3 : 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
              >
                <span style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {courseTitle}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ background: borderTopColor, color: 'white', padding: '0.2rem 0.65rem', borderRadius: '12px', fontSize: '0.78rem', fontWeight: 'bold' }}>
                    {cStat.total} {isHe ? 'נוסחאות' : 'equations'}
                  </span>
                  <ChevronDown 
                    size={18} 
                    style={{ 
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: 'var(--text-secondary)'
                    }} 
                  />
                </div>
              </motion.div>

              {/* Subject Mastery Index (Blue Bar - Always Visible) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', margin: '0.2rem 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#3b82f6', fontWeight: 700 }}>
                  <span>🔹 {lMasteryIndexTitle}</span>
                  <span>{cStat.index}%</span>
                </div>
                <div style={{ height: '9px', background: 'var(--math-bg)', borderRadius: '4.5px', overflow: 'hidden', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }}>
                  <div 
                    style={{ 
                      height: '100%', 
                      width: `${cStat.index}%`, 
                      background: index === 0 
                        ? 'linear-gradient(90deg, #3b82f6, var(--primary-color))' 
                        : 'linear-gradient(90deg, #3b82f6, var(--secondary-color))', 
                      borderRadius: '4.5px', 
                      transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 0 8px rgba(59, 130, 246, 0.5)'
                    }} 
                  />
                </div>
              </div>

              {/* Detailed Emoji Progress Bars (Revealed on Click) */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ height: '1px', background: 'rgba(226, 232, 240, 0.15)', margin: '0.5rem 0 1rem 0' }} />
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {/* Green progress bar */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                          <span>😄 {isHe ? 'שולט' : 'Mastered'}</span>
                          <span>{cStat.green} / {cStat.total} ({cStat.pctGreen}%)</span>
                        </div>
                        <div style={{ height: '8px', background: 'var(--math-bg)', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${cStat.pctGreen}%`, background: 'var(--success)', borderRadius: '4px', transition: 'width 0.4s ease' }} />
                        </div>
                      </div>

                      {/* Yellow progress bar */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                          <span>😐 {isHe ? 'בתהליך' : 'Learning'}</span>
                          <span>{cStat.yellow} / {cStat.total} ({cStat.pctYellow}%)</span>
                        </div>
                        <div style={{ height: '8px', background: 'var(--math-bg)', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${cStat.pctYellow}%`, background: '#f59e0b', borderRadius: '4px', transition: 'width 0.4s ease' }} />
                        </div>
                      </div>

                      {/* Red progress bar */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                          <span>😡 {isHe ? 'מתקשה' : 'Struggling'}</span>
                          <span>{cStat.red} / {cStat.total} ({cStat.pctRed}%)</span>
                        </div>
                        <div style={{ height: '8px', background: 'var(--math-bg)', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${cStat.pctRed}%`, background: '#ef4444', borderRadius: '4px', transition: 'width 0.4s ease' }} />
                        </div>
                      </div>
                    </div>

                    {/* Calculation Legend */}
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1.25rem', fontStyle: 'italic', opacity: 0.8 }}>
                      {lLegendTitle}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Control Panel: Search & Filters */}
      <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {/* Search Box */}
          <div style={{ flex: 1, minWidth: '260px', position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: isHe ? 'auto' : '1rem', right: isHe ? '1rem' : 'auto' }} />
            <input 
              type="text" 
              placeholder={lSearchPlaceholder}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: isHe ? '0.75rem 2.8rem 0.75rem 1rem' : '0.75rem 1rem 0.75rem 2.8rem',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--math-bg)',
                border: '1px solid var(--surface-border)',
                color: 'var(--text-primary)',
                fontFamily: 'inherit',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
            />
          </div>

          {/* Reset Progress Button */}
          <motion.button 
            onClick={resetAllProgress} 
            className="btn btn-secondary reset-btn"
            whileHover={{ scale: 1.05, y: -1, boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0, cursor: 'pointer' }}
          >
            <RotateCcw size={16} className="reset-icon" />
            {lReset}
          </motion.button>
        </div>

        {/* Filter Controls Panel: Left Column (Topic & View Mode) & Right Column (Sort By & Mastery Status) */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start', 
          flexWrap: 'wrap', 
          gap: '2rem 1.5rem', 
          borderTop: '1px solid var(--surface-border)', 
          paddingTop: '1.25rem' 
        }}>
          {/* Left Column: Topic & View Mode */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: '1 1 300px', minWidth: '280px' }}>
            {/* Course filter group */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontWeight: 'bold', textAlign: isHe ? 'right' : 'left' }}>{lFilterTopic}</span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <motion.button 
                  onClick={() => setSelectedCourse('all')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`filter-btn filter-btn-primary ${selectedCourse === 'all' ? 'active' : ''}`}
                >
                  {lFilterAllCourses}
                </motion.button>
                {activeSubject.courses.map((course, idx) => {
                  const isSelected = selectedCourse === course.id;
                  const btnClass = idx === 0 ? 'filter-btn-primary' : 'filter-btn-secondary';
                  return (
                    <motion.button 
                      key={course.id}
                      onClick={() => setSelectedCourse(course.id)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className={`filter-btn ${btnClass} ${isSelected ? 'active' : ''}`}
                    >
                      {isHe ? course.nameHe : course.name}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* View Mode selection group */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontWeight: 'bold', textAlign: isHe ? 'right' : 'left' }}>{lViewMode}</span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <motion.button 
                  onClick={() => setViewMode('grouped')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`filter-btn filter-btn-primary ${viewMode === 'grouped' ? 'active' : ''}`}
                >
                  <LayoutGrid size={14} />
                  {lGrouped}
                </motion.button>
                <motion.button 
                  onClick={() => setViewMode('list')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`filter-btn filter-btn-primary ${viewMode === 'list' ? 'active' : ''}`}
                >
                  <List size={14} />
                  {lSortedList}
                </motion.button>
                {activeSubject.id === 'nla-opt' && (
                  <motion.button 
                    onClick={() => setViewMode('tables')}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className={`filter-btn filter-btn-primary ${viewMode === 'tables' ? 'active' : ''}`}
                  >
                    <Layers size={14} />
                    {isHe ? 'טבלאות השוואה' : 'Comparison Tables'}
                  </motion.button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Sort By & Mastery Status */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: '1 1 300px', minWidth: '280px' }}>
            {/* Sort By group (Always Visible) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontWeight: 'bold', textAlign: isHe ? 'right' : 'left' }}>{lSortBy}</span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <motion.button 
                  onClick={() => setSortBy('name')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`filter-btn filter-btn-secondary ${sortBy === 'name' ? 'active' : ''}`}
                >
                  {lSortName}
                </motion.button>
                <motion.button 
                  onClick={() => setSortBy('course')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`filter-btn filter-btn-secondary ${sortBy === 'course' ? 'active' : ''}`}
                >
                  {lSortCourse}
                </motion.button>
                <motion.button 
                  onClick={() => setSortBy('category')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`filter-btn filter-btn-secondary ${sortBy === 'category' ? 'active' : ''}`}
                >
                  {lSortCategory}
                </motion.button>
              </div>
            </div>

            {/* Status filter group */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontWeight: 'bold', textAlign: isHe ? 'right' : 'left' }}>{lFilterMastery}</span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <motion.button 
                  onClick={() => setSelectedStatus('all')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`filter-btn filter-btn-accent ${selectedStatus === 'all' ? 'active' : ''}`}
                >
                  {lFilterAll}
                </motion.button>
                <motion.button 
                  onClick={() => setSelectedStatus('green')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`filter-btn filter-btn-success ${selectedStatus === 'green' ? 'active' : ''}`}
                >
                  {lFilterMastered}
                </motion.button>
                <motion.button 
                  onClick={() => setSelectedStatus('yellow')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`filter-btn filter-btn-warning ${selectedStatus === 'yellow' ? 'active' : ''}`}
                >
                  {lFilterLearning}
                </motion.button>
                <motion.button 
                  onClick={() => setSelectedStatus('red')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`filter-btn filter-btn-danger ${selectedStatus === 'red' ? 'active' : ''}`}
                >
                  {lFilterStruggling}
                </motion.button>
                <motion.button 
                  onClick={() => setSelectedStatus('to-learn')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`filter-btn filter-btn-muted ${selectedStatus === 'to-learn' ? 'active' : ''}`}
                >
                  {lFilterToLearn}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Tables Mode */}
      {viewMode === 'tables' ? (
        renderComparisonTables()
      ) : (
        /* Regular Formulas Content Grouped or List */
        Object.keys(categoriesMap).length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--surface-color)', border: '1px dashed var(--surface-border)', borderRadius: 'var(--radius-md)' }}>
            <Layers size={48} color="var(--text-muted)" style={{ marginBottom: '1rem' }} />
            <h3>{lNoMatches}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{lNoMatchesSub}</p>
          </div>
        ) : (
          viewMode === 'list' ? (
            /* Sleek 3-column sorted list view */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '4rem' }}>
              {sortedFormulas.map(f => renderFormulaCard(f, true))}
            </div>
          ) : (
            /* Traditional category-grouped card grids */
            Object.entries(categoriesMap).map(([category, items]) => {
              // Find original category style
              let style = DEFAULT_STYLE;
              for (const [engCat, s] of Object.entries(CATEGORY_STYLES)) {
                if (category === engCat || (items[0] && items[0].category === engCat)) {
                  style = s;
                  break;
                }
              }
              
              return (
                <div key={category} style={{ marginBottom: '4rem' }}>
                  {/* Category Heading Banner */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '0.8rem', marginBottom: '1.8rem' }}>
                    <div style={{
                      padding: '0.35rem 0.8rem',
                      borderRadius: '16px',
                      backgroundColor: style.badgeBg,
                      color: style.badgeText,
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {category}
                    </div>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>({items.length} {lItemsLabel})</span>
                  </div>

                  {/* Grid of Cards */}
                  <div className="layout-grid">
                    {items.map(f => renderFormulaCard(f, false))}
                  </div>
                </div>
              );
            })
          )
        )
      )}

      {/* POPUP DETAIL MODAL OVERLAY */}
      <AnimatePresence>
        {selectedFormula && (() => {
          const popupName = isHe ? (selectedFormula.nameHe || selectedFormula.name) : selectedFormula.name;
          const popupDesc = isHe ? (selectedFormula.descriptionHe || selectedFormula.description) : selectedFormula.description;
          const popupCat = isHe ? (selectedFormula.categoryHe || selectedFormula.category) : selectedFormula.category;
          
          let style = DEFAULT_STYLE;
          for (const [engCat, s] of Object.entries(CATEGORY_STYLES)) {
            if (selectedFormula.category === engCat) {
              style = s;
              break;
            }
          }

          return (
            <div 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(11, 15, 25, 0.85)',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                padding: '1.5rem'
              }}
              onClick={() => setSelectedFormula(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: 'var(--bg-color)',
                  border: '1px solid var(--surface-border)',
                  borderRadius: '16px',
                  padding: '2.5rem',
                  maxWidth: '680px',
                  width: '100%',
                  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
                  position: 'relative',
                  maxHeight: '90vh',
                  overflowY: 'auto',
                  direction: isHe ? 'rtl' : 'ltr'
                }}
                onClick={e => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button 
                  onClick={() => setSelectedFormula(null)}
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: isHe ? 'auto' : '1.5rem',
                    left: isHe ? '1.5rem' : 'auto',
                    background: 'var(--surface-color)',
                    border: '1px solid var(--surface-border)',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--text-primary)',
                    fontSize: '1.5rem',
                    lineHeight: '1',
                    transition: 'all 0.2s'
                  }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                >
                  &times;
                </motion.button>

                {/* Badges */}
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    fontWeight: 'bold', 
                    textTransform: 'uppercase', 
                    color: getCourseColor(selectedFormula.courseId),
                    padding: '0.3rem 0.75rem',
                    background: getCourseBgColor(selectedFormula.courseId),
                    borderRadius: '8px',
                    border: `1px solid ${getCourseBorderColor(selectedFormula.courseId)}`
                  }}>
                    {getCourseBadgeText(selectedFormula.courseId)}
                  </span>
                  
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    padding: '0.3rem 0.75rem',
                    background: style.badgeBg,
                    color: style.badgeText,
                    borderRadius: '8px',
                    border: `1px solid ${style.border}`
                  }}>
                    {popupCat}
                  </span>
                </div>

                {/* Title */}
                <h2 style={{ 
                  fontSize: '1.8rem', 
                  marginBottom: '1.5rem', 
                  fontWeight: '700', 
                  color: 'var(--text-primary)', 
                  paddingRight: isHe ? '0' : '2rem',
                  paddingLeft: isHe ? '2rem' : '0'
                }}>
                  {popupName}
                </h2>

                {/* Math Formula Rendering */}
                <div style={{
                  background: 'var(--math-bg)',
                  padding: '2rem 1.5rem',
                  borderRadius: '12px',
                  textAlign: 'center',
                  border: '1px solid var(--surface-border)',
                  marginBottom: '2rem',
                  overflowX: 'auto',
                  boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.2)'
                }}>
                  <MathRenderer tex={selectedFormula.equation} block={true} style={{ fontSize: '1.35rem' }} />
                </div>

                {/* Definition Sentence */}
                <div style={{ marginBottom: '2.5rem', whiteSpace: 'normal', wordBreak: 'break-word' }}>
                  <h4 style={{ 
                    fontSize: '0.85rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.5px', 
                    color: style.border,
                    fontWeight: 'bold', 
                    marginBottom: '0.6rem' 
                  }}>
                    {lCoreDefSentence}
                  </h4>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    lineHeight: '1.6', 
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                    margin: 0
                  }}>
                    {popupDesc}
                  </p>
                </div>

                {/* Mastery Action Toggle */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--surface-border)', paddingTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '500' }}>
                    {lStatusLabel} {
                      seenFormulas[selectedFormula.id] === 'green' || seenFormulas[selectedFormula.id] === true
                        ? `😄 ${isHe ? 'שולט' : 'Mastered'}`
                        : seenFormulas[selectedFormula.id] === 'yellow'
                        ? `😐 ${isHe ? 'בתהליך' : 'Learning'}`
                        : seenFormulas[selectedFormula.id] === 'red'
                        ? `😡 ${isHe ? 'מתקשה' : 'Struggling'}`
                        : `📝 ${isHe ? 'צריך ללמוד' : 'To Learn'}`
                    }
                  </span>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {/* 😄 Green button */}
                    <button
                      onClick={() => toggleSeen(selectedFormula.id, seenFormulas[selectedFormula.id] === 'green' ? null : 'green')}
                      style={{
                        background: seenFormulas[selectedFormula.id] === 'green' || seenFormulas[selectedFormula.id] === true ? 'rgba(16, 185, 129, 0.15)' : 'var(--math-bg)',
                        color: seenFormulas[selectedFormula.id] === 'green' || seenFormulas[selectedFormula.id] === true ? 'var(--success)' : 'var(--text-primary)',
                        border: `1px solid ${seenFormulas[selectedFormula.id] === 'green' || seenFormulas[selectedFormula.id] === true ? 'var(--success)' : 'var(--surface-border)'}`,
                        padding: '0.55rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        transition: 'all 0.2s',
                        boxShadow: seenFormulas[selectedFormula.id] === 'green' || seenFormulas[selectedFormula.id] === true ? '0 0 10px rgba(16, 185, 129, 0.25)' : 'none'
                      }}
                    >
                      <span>😄</span>
                      <span>{isHe ? 'שולט' : 'Mastered'}</span>
                    </button>

                    {/* 😐 Yellow button */}
                    <button
                      onClick={() => toggleSeen(selectedFormula.id, seenFormulas[selectedFormula.id] === 'yellow' ? null : 'yellow')}
                      style={{
                        background: seenFormulas[selectedFormula.id] === 'yellow' ? 'rgba(245, 158, 11, 0.15)' : 'var(--math-bg)',
                        color: seenFormulas[selectedFormula.id] === 'yellow' ? '#f59e0b' : 'var(--text-primary)',
                        border: `1px solid ${seenFormulas[selectedFormula.id] === 'yellow' ? '#f59e0b' : 'var(--surface-border)'}`,
                        padding: '0.55rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        transition: 'all 0.2s',
                        boxShadow: seenFormulas[selectedFormula.id] === 'yellow' ? '0 0 10px rgba(245, 158, 11, 0.25)' : 'none'
                      }}
                    >
                      <span>😐</span>
                      <span>{isHe ? 'בתהליך' : 'Learning'}</span>
                    </button>

                    {/* 😡 Red button */}
                    <button
                      onClick={() => toggleSeen(selectedFormula.id, seenFormulas[selectedFormula.id] === 'red' ? null : 'red')}
                      style={{
                        background: seenFormulas[selectedFormula.id] === 'red' ? 'rgba(239, 68, 68, 0.15)' : 'var(--math-bg)',
                        color: seenFormulas[selectedFormula.id] === 'red' ? '#ef4444' : 'var(--text-primary)',
                        border: `1px solid ${seenFormulas[selectedFormula.id] === 'red' ? '#ef4444' : 'var(--surface-border)'}`,
                        padding: '0.55rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        transition: 'all 0.2s',
                        boxShadow: seenFormulas[selectedFormula.id] === 'red' ? '0 0 10px rgba(239, 68, 68, 0.25)' : 'none'
                      }}
                    >
                      <span>😡</span>
                      <span>{isHe ? 'מתקשה' : 'Struggling'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </motion.div>
  );
}
