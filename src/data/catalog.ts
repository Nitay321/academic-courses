export interface Course {
  id: string;
  name: string;
  nameHe: string;
}

export interface Subject {
  id: string;
  title: string;
  titleHe: string;
  themeAccent: string;
  themeAccentSecondary: string;
  glowColor: string;
  courses: Course[];
}

export const SUBJECT_CATALOG: Subject[] = [
  {
    id: 'nla-opt',
    title: 'Numerical Analysis & Optimization',
    titleHe: 'אנליזה נומרית ואופטימיזציה נומרית',
    themeAccent: '#6366f1', // Indigo primary
    themeAccentSecondary: '#ec4899', // Pink secondary
    glowColor: 'rgba(99, 102, 241, 0.2)',
    courses: [
      { id: 'nla', name: 'Numerical Linear Algebra', nameHe: 'אלגברה ליניארית נומרית' },
      { id: 'opt', name: 'Numerical Optimization', nameHe: 'אופטימיזציה נומרית' }
    ]
  },
  {
    id: 'prob-stats',
    title: 'Probability & Statistics',
    titleHe: 'תורת ההסתברות וסטטיסטיקה מתמטית',
    themeAccent: '#10b981', // Mint Emerald primary
    themeAccentSecondary: '#06b6d4', // Cyber Cyan secondary
    glowColor: 'rgba(16, 185, 129, 0.2)',
    courses: [
      { id: 'prob', name: 'Probability Theory', nameHe: 'תורת ההסתברות' },
      { id: 'stats', name: 'Mathematical Statistics', nameHe: 'סטטיסטיקה' }
    ]
  }
];
