export interface Formula {
  id: string;
  courseId: 'nla' | 'opt' | 'prob' | 'stats';
  category: string;
  categoryHe?: string;
  name: string;
  nameHe?: string;
  equation: string;
  description: string;
  descriptionHe?: string;
}

export const formulas: Formula[] = [
// ==========================================
  // CHAPTER 0: PROBABILITY SPACES & AXIOMS
  // ==========================================
  {
    id: 'kolmogorov-axioms',
    courseId: 'prob',
    category: 'Probability Spaces',
    categoryHe: 'יסודות ההסתברות',
    name: "Kolmogorov's Three Axioms",
    nameHe: 'שלושת האקסיומות של קולמוגורוב',
    equation: 'P(A) \\ge 0, \\quad P(\\Omega) = 1, \\quad P\\left(\\bigcup_{i=1}^{\\infty} A_i\\right) = \\sum_{i=1}^{\\infty} P(A_i)',
    description: 'The foundational axioms of probability theory: Non-negativity of any event, Normalization of the entire sample space, and countable additivity of mutually disjoint events.',
    descriptionHe: 'אקסיומות היסוד של תורת ההסתברות: אי-שליליות של כל מאורע, נרמול של מרחב המדגם כולו ל-1, ואדיטיביות בת-מנייה עבור מאורעות זרים.'
  },
  {
    id: 'complement-rule',
    courseId: 'prob',
    category: 'Probability Spaces',
    categoryHe: 'יסודות ההסתברות',
    name: 'Complement Rule',
    nameHe: 'כלל המשלים',
    equation: 'P(A^c) = 1 - P(A)',
    description: 'The probability that an event does not occur is one minus the probability that it does occur.',
    descriptionHe: 'ההסתברות שמאורע מסוים לא יתרחש שווה ל-1 פחות ההסתברות שהוא כן יתרחש.'
  },
  {
    id: 'difference-rule',
    courseId: 'prob',
    category: 'Probability Spaces',
    categoryHe: 'יסודות ההסתברות',
    name: 'Difference Rule',
    nameHe: 'כלל ההפרש',
    equation: 'P(A \\setminus B) = P(A) - P(A \\cap B)',
    description: 'The probability of the set difference between A and B is the probability of A minus the probability of their intersection.',
    descriptionHe: 'ההסתברות להפרש בין קבוצות A ו-B היא ההסתברות של A פחות ההסתברות של החיתוך ביניהן.'
  },
  {
    id: 'probability-monotonicity',
    courseId: 'prob',
    category: 'Probability Spaces',
    categoryHe: 'יסודות ההסתברות',
    name: 'Probability Monotonicity',
    nameHe: 'מונוטוניות ההסתברות',
    equation: 'A \\subseteq B \\implies P(A) \\le P(B)',
    description: 'If event A is contained within event B, then the probability of event A cannot exceed the probability of event B.',
    descriptionHe: 'אם מאורע A מוכל במאורע B, אזי ההסתברות של A אינה יכולה לעלות על ההסתברות של B.'
  },
  {
    id: 'inclusion-exclusion-2',
    courseId: 'prob',
    category: 'Inclusion-Exclusion',
    categoryHe: 'הכלה והפרדה',
    name: 'Inclusion-Exclusion (2 Events)',
    nameHe: 'עקרון ההכלה וההפרדה (2 מאורעות)',
    equation: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
    description: 'Calculates the probability of the union of two overlapping events by summing their individual probabilities and subtracting their intersection to avoid double-counting.',
    descriptionHe: 'מחשב את ההסתברות של איחוד שני מאורעות על ידי סכימת ההסתברויות שלהם והחסרת החיתוך ביניהם כדי למנוע ספירה כפולה.'
  },
  {
    id: 'inclusion-exclusion-3',
    courseId: 'prob',
    category: 'Inclusion-Exclusion',
    categoryHe: 'הכלה והפרדה',
    name: 'Inclusion-Exclusion (3 Events)',
    nameHe: 'עקרון ההכלה וההפרדה (3 מאורעות)',
    equation: 'P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(A \\cap C) - P(B \\cap C) + P(A \\cap B \\cap C)',
    description: 'Generalization of the inclusion-exclusion principle to three events, systematically adding and subtracting intersections to correct for multiple overlaps.',
    descriptionHe: 'הרחבה של עקרון ההכלה וההפרדה לשלושה מאורעות, המערבת חיבור והחסרה שיטתיים של חיתוך המאורעות כדי לתקן חפיפות מרובות.'
  },
  {
    id: 'conditional-probability',
    courseId: 'prob',
    category: 'Conditional & Bayes',
    categoryHe: 'הסתברות מותנית ובייס',
    name: 'Conditional Probability',
    nameHe: 'הסתברות מותנית',
    equation: 'P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(B) > 0',
    description: 'The probability of event A occurring given that event B has occurred, which effectively scales the sample space down to the conditioning event B.',
    descriptionHe: 'ההסתברות שמאורע A יתרחש בהינתן שמאורע B כבר התרחש, דבר המצמצם בפועל את מרחב המדגם כולו למאורע B.'
  },
  {
    id: 'law-total-probability',
    courseId: 'prob',
    category: 'Conditional & Bayes',
    categoryHe: 'הסתברות מותנית ובייס',
    name: 'Law of Total Probability',
    nameHe: 'חוק ההסתברות השלמה',
    equation: 'P(A) = \\sum_{i=1}^{n} P(A \\mid B_i) P(B_i)',
    description: 'Calculates the total probability of event A by summing its conditional probabilities across a partition of mutually exclusive and exhaustive events B_i.',
    descriptionHe: 'מחשב את ההסתברות הכוללת של מאורע A על ידי סכימת ההסתברויות המותנות שלו על פני חלוקה (פרטישן) של מאורעות זרים ומשלימים B_i.'
  },
  {
    id: 'bayes-theorem',
    courseId: 'prob',
    category: 'Conditional & Bayes',
    categoryHe: 'הסתברות מותנית ובייס',
    name: "Bayes' Theorem",
    nameHe: 'משפט בייס',
    equation: 'P(B_j \\mid A) = \\frac{P(A \\mid B_j) P(B_j)}{\\sum_{i=1}^{n} P(A \\mid B_i) P(B_i)}',
    description: 'Updates the prior probability of partition event B_j using newly observed evidence A by combining the conditional likelihoods and priors.',
    descriptionHe: 'מעדכן את ההסתברות המוקדמת (prior) של מאורע B_j בהינתן ראיה חדשה A שנצפתה בפועל, על ידי שילוב נראויות מותנות והסתברויות אפריוריות.'
  },

  // ==========================================
  // CHAPTER 1: CONTINUOUS RANDOM VARIABLES & PDF
  // ==========================================
  {
    id: 'single-point-probability',
    courseId: 'prob',
    category: 'Continuous Variables',
    categoryHe: 'משתנים מקריים רציפים',
    name: 'Single-Point Probability',
    nameHe: 'הסתברות בנקודה בודדת',
    equation: 'P(X = x) = 0, \\quad \\forall x \\in \\mathbb{R}',
    description: 'For any continuous random variable X, the probability of the variable taking any exact, isolated real value x is mathematically zero.',
    descriptionHe: 'עבור כל משתנה מקרי רציף X, ההסתברות שהמשתנה יקבל ערך ממשי בודד ומדויק x היא אפס מבחינה מתמטית.'
  },
  {
    id: 'cdf-definition',
    courseId: 'prob',
    category: 'Continuous Variables',
    categoryHe: 'משתנים מקריים רציפים',
    name: 'Cumulative Distribution Function (CDF)',
    nameHe: 'פונקציית התפלגות מצטברת (CDF)',
    equation: 'F_X(x) = P(X \\le x)',
    description: 'The cumulative distribution function represents the accumulated probability that a random variable X takes a value less than or equal to x.',
    descriptionHe: 'פונקציית ההתפלגות המצטברת מייצגת את ההסתברות המצטברת לכך שהמשתנה המקרי X יקבל ערך קטן או שווה ל-x.'
  },
  {
    id: 'cdf-monotonicity',
    courseId: 'prob',
    category: 'Continuous Variables',
    categoryHe: 'משתנים מקריים רציפים',
    name: 'CDF Monotonicity Property',
    nameHe: 'מונוטוניות פונקציית ההתפלגות',
    equation: 'x_1 < x_2 \\implies F_X(x_1) \\le F_X(x_2)',
    description: 'The cumulative distribution function is non-decreasing; as the upper bound increases, the accumulated probability cannot decrease.',
    descriptionHe: 'פונקציית ההתפלגות המצטברת היא פונקציה מונוטונית לא יורדת; ככל שערך החסם העליון גדל, ההסתברות המצטברת אינה יכולה לקטון.'
  },
  {
    id: 'cdf-boundary-limits',
    courseId: 'prob',
    category: 'Continuous Variables',
    categoryHe: 'משתנים מקריים רציפים',
    name: 'CDF Boundary Limits',
    nameHe: 'גבולות פונקציית ההתפלגות בקצוות',
    equation: '\\lim_{x \\to -\\infty} F_X(x) = 0, \\quad \\lim_{x \\to \\infty} F_X(x) = 1',
    description: 'As the threshold approaches negative infinity, the accumulated probability goes to zero; as it approaches positive infinity, the probability goes to one.',
    descriptionHe: 'כאשר הסף שואף למינוס אינסוף, ההסתברות המצטברת שואפת לאפס; כאשר הוא שואף לפלוס אינסוף, ההסתברות המצטברת שואפת ל-1.'
  },
  {
    id: 'cdf-right-continuity',
    courseId: 'prob',
    category: 'Continuous Variables',
    categoryHe: 'משתנים מקריים רציפים',
    name: 'CDF Right-Continuity',
    nameHe: 'רציפות מימין של פונקציית ההתפלגות',
    equation: '\\lim_{h \\to 0^+} F_X(x + h) = F_X(x)',
    description: 'The CDF is continuous from the right at every point, meaning the limit as h approaches 0 from the positive side equals the function value.',
    descriptionHe: 'פונקציית ההתפלגות המצטברת רציפה מימין בכל נקודה, כלומר הגבול כאשר h שואף ל-0 מהצד החיובי שווה לערך הפונקציה בנקודה.'
  },
  {
    id: 'cdf-interval-probability',
    courseId: 'prob',
    category: 'Continuous Variables',
    categoryHe: 'משתנים מקריים רציפים',
    name: 'CDF Interval Probability',
    nameHe: 'הסתברות קטע באמצעות פונקציית ההתפלגות',
    equation: 'P(a < X \\le b) = F_X(b) - F_X(a)',
    description: 'The probability that a continuous random variable falls in the interval (a, b] is given by the difference between the CDF values at the boundaries.',
    descriptionHe: 'ההסתברות שמשתנה מקרי רציף יפול בקטע חצי פתוח (a, b] ניתנת על ידי ההפרש בין ערכי ה-CDF בגבולות הקטע.'
  },
  {
    id: 'pdf-definition',
    courseId: 'prob',
    category: 'Continuous Variables',
    categoryHe: 'משתנים מקריים רציפים',
    name: 'Probability Density Function (PDF)',
    nameHe: 'פונקציית צפיפות הסתברות (PDF)',
    equation: 'f_X(x) = \\frac{d}{dx} F_X(x)',
    description: 'The PDF is the derivative of the CDF, representing the rate of probability accumulation or density at any given point x.',
    descriptionHe: 'פונקציית הצפיפות היא הנגזרת של פונקציית ההתפלגות המצטברת, המייצגת את קצב צבירת ההסתברות או את צפיפותה בכל נקודה x.',
  },
  {
    id: 'pdf-non-negativity',
    courseId: 'prob',
    category: 'Continuous Variables',
    categoryHe: 'משתנים מקריים רציפים',
    name: 'PDF Non-Negativity Property',
    nameHe: 'אי-שליליות פונקציית הצפיפות',
    equation: 'f_X(x) \\ge 0, \\quad \\forall x \\in \\mathbb{R}',
    description: 'The probability density function can never be negative because accumulated probability is a non-decreasing measure.',
    descriptionHe: 'פונקציית צפיפות ההסתברות לעולם אינה יכולה להיות שלילית, מכיוון שההסתברות המצטברת היא מידה מונוטונית לא יורדת.',
  },
  {
    id: 'pdf-normalization',
    courseId: 'prob',
    category: 'Continuous Variables',
    categoryHe: 'משתנים מקריים רציפים',
    name: 'PDF Normalization Constraint',
    nameHe: 'תנאי הנרמול של פונקציית הצפיפות',
    equation: '\\int_{-\\infty}^{\\infty} f_X(x) dx = 1',
    description: 'The total area under the entire probability density function curve must integrate to exactly one, representing certain probability over the real line.',
    descriptionHe: 'השטח הכולל מתחת לעקומת פונקציית צפיפות ההסתברות כולה חייב להיות שווה בדיוק ל-1, דבר המייצג מאורע ודאי מעל הישר הממשי.',
  },
  {
    id: 'pdf-interval-integration',
    courseId: 'prob',
    category: 'Continuous Variables',
    categoryHe: 'משתנים מקריים רציפים',
    name: 'PDF Interval Integration',
    nameHe: 'חישוב הסתברות קטע באמצעות פונקציית צפיפות',
    equation: 'P(a \\le X \\le b) = \\int_{a}^{b} f_X(x) dx',
    description: 'The probability that a continuous random variable X lies in the interval [a, b] is represented by the definite integral of its PDF over that interval.',
    descriptionHe: 'ההסתברות שמשתנה מקרי רציף X יימצא בקטע [a, b] מיוצגת על ידי האינטגרל המסוים של פונקציית הצפיפות שלו מעל קטע זה.',
  },

  // ==========================================
  // CHAPTER 2: SPECIAL CONTINUOUS DISTRIBUTIONS
  // ==========================================
  {
    id: 'uniform-pdf-cdf',
    courseId: 'prob',
    category: 'Continuous Distributions',
    categoryHe: 'התפלגויות רציפות',
    name: 'Uniform Distribution PDF & CDF',
    nameHe: 'פונקציית צפיפות והתפלגות של התפלגות אחידה רציפה',
    equation: 'f_X(x) = \\begin{cases} \\frac{1}{b-a} & a \\le x \\le b \\\\ 0 & \\text{otherwise} \\end{cases}, \\quad F_X(x) = \\begin{cases} 0 & x < a \\\\ \\frac{x-a}{b-a} & a \\le x \\le b \\\\ 1 & x > b \\end{cases}',
    description: 'Models a continuous random variable X where all intervals of equal length in the support [a, b] are equally likely to occur.',
    descriptionHe: 'מדלגת משתנה מקרי רציף X שבו לכל התתי-קטעים בעלי אורך שווה בתוך התומך [a, b] יש הסתברות שווה להתרחש.'
  },
  {
    id: 'uniform-expectation-variance',
    courseId: 'prob',
    category: 'Continuous Distributions',
    categoryHe: 'התפלגויות רציפות',
    name: 'Uniform Expectation & Variance',
    nameHe: 'תוחלת ושונות של התפלגות אחידה',
    equation: '\\mathbb{E}[X] = \\frac{a+b}{2}, \\quad \\text{Var}(X) = \\frac{(b-a)^2}{12}',
    description: 'The expected value (mean) of a uniform distribution is the midpoint of its support, and the variance measures the spread squared divided by 12.',
    descriptionHe: 'התוחלת (הממוצע) של התפלגות אחידה היא נקודת האמצע של התומך שלה, והשונות מודדת את פיזור הערכים הריבועי מחולק ב-12.'
  },
  {
    id: 'exponential-pdf-cdf',
    courseId: 'prob',
    category: 'Continuous Distributions',
    categoryHe: 'התפלגויות רציפות',
    name: 'Exponential Distribution PDF & CDF',
    nameHe: 'פונקציית צפיפות והתפלגות של התפלגות מעריכית',
    equation: 'f_X(x) = \\begin{cases} \\lambda e^{-\\lambda x} & x \\ge 0 \\\\ 0 & \\text{otherwise} \\end{cases}, \\quad F_X(x) = \\begin{cases} 1 - e^{-\\lambda x} & x \\ge 0 \\\\ 0 & x < 0 \\end{cases}',
    description: 'Models the time elapsed between independent Poisson events occurring at a constant average rate lambda.',
    descriptionHe: 'מדלגת את הזמן החולף בין מאורעות פואסוניים בלתי תלויים המתרחשים בקצב ממוצע קבוע למדא.'
  },
  {
    id: 'exponential-expectation-variance',
    courseId: 'prob',
    category: 'Continuous Distributions',
    categoryHe: 'התפלגויות רציפות',
    name: 'Exponential Expectation & Variance',
    nameHe: 'תוחלת ושונות של התפלגות מעריכית',
    equation: '\\mathbb{E}[X] = \\frac{1}{\\lambda}, \\quad \\text{Var}(X) = \\frac{1}{\\lambda^2}',
    description: 'The expected value (mean time to next event) is the reciprocal of the rate parameter lambda, and the standard deviation is equal to the mean.',
    descriptionHe: 'התוחלת (זמן ההמתנה הממוצע למאורע הבא) היא ההופכי של פרמטר הקצב למדא, וסטיית התקן שווה לתוחלת.'
  },
  {
    id: 'memoryless-property',
    courseId: 'prob',
    category: 'Continuous Distributions',
    categoryHe: 'התפלגויות רציפות',
    name: 'Memoryless Property',
    nameHe: 'תכונת חוסר הזיכרון',
    equation: 'P(X \\ge s + t \\mid X \\ge s) = P(X \\ge t), \\quad \\forall s, t \\ge 0',
    description: 'For an exponential random variable, the probability of surviving an additional time t is independent of how long the system has already survived.',
    descriptionHe: 'עבור משתנה מקרי מעריכית, ההסתברות שרכיב ישרוד פרק זמן נוסף t אינה תלויה בכלל במשך הזמן s שהמערכת כבר שרדה עד כה.',
  },
  {
    id: 'minimum-of-exponentials',
    courseId: 'prob',
    category: 'Continuous Distributions',
    categoryHe: 'התפלגויות רציפות',
    name: 'Minimum of Independent Exponentials',
    nameHe: 'מינימום של משתנים מעריכיים בלתי תלויים',
    equation: 'Y = \\min(X_1, \\dots, X_m) \\sim \\text{Exp}\\left(\\sum_{i=1}^{m} \\lambda_i\\right)',
    description: 'If X_1, ..., X_m are independent exponentially distributed random variables with rates lambda_1, ..., lambda_m, then their minimum is also exponentially distributed with a rate equal to the sum of their individual rates.',
    descriptionHe: 'אם X_1, ..., X_m הם משתנים מקריים בלתי תלויים המתפלגים מעריכית עם קצבים למדא_1, ..., למדא_m, אזי המינימום ביניהם מתפלג גם הוא מעריכית עם קצב ששווה לסכום קצביהם האינדיבידואליים.',
  },

  // ==========================================
  // CHAPTER 3: DISCRETE RANDOM VARIABLES
  // ==========================================
  {
    id: 'discrete-pmf-properties',
    courseId: 'prob',
    category: 'Discrete Variables',
    categoryHe: 'משתנים מקריים בדידים',
    name: 'Probability Mass Function (PMF) Constraints',
    nameHe: 'תכונות פונקציית הסתברות (PMF) דיסקרטית',
    equation: 'p_X(x) = P(X = x), \\quad p_X(x) \\ge 0, \\quad \\sum_{x \\in S} p_X(x) = 1',
    description: 'The PMF maps each countable outcome to its exact probability; these values must be non-negative and sum to exactly 1 over the support S.',
    descriptionHe: 'פונקציית ההסתברות מתאימה לכל תוצאה בדידה את ההסתברות המדויקת שלה; ערכים אלו חייבים להיות אי-שליליים ולסכום ל-1 בדיוק מעל התומך S.'
  },
  {
    id: 'discrete-expectation',
    courseId: 'prob',
    category: 'Discrete Variables',
    categoryHe: 'משתנים מקריים בדידים',
    name: 'Discrete Expected Value',
    nameHe: 'תוחלת של משתנה מקרי דיסקרטי',
    equation: '\\mathbb{E}[X] = \\sum_{x \\in S} x \\cdot p_X(x)',
    description: 'Calculates the center of mass or average value of a discrete random variable X by summing all possible values weighted by their probabilities.',
    descriptionHe: 'מחשב את מרכז הכובד או הערך הממוצע של משתנה מקרי דיסקרטי X על ידי סכימת כל הערכים האפשריים כשהם משוקללים בהסתברויות שלהם.'
  },
  {
    id: 'discrete-lotus',
    courseId: 'prob',
    category: 'Discrete Variables',
    categoryHe: 'משתנים מקריים בדידים',
    name: 'Law of the Unconscious Statistician (Discrete LOTUS)',
    nameHe: 'חוק הסטטיסטיקאי ההמום (LOTUS) הדיסקרטי',
    equation: '\\mathbb{E}[h(X)] = \\sum_{x \\in S} h(x) \\cdot p_X(x)',
    description: 'Computes the expectation of a transformed variable h(X) directly using the PMF of X, without first finding the PMF of the new variable h(X).',
    descriptionHe: 'מחשב את התוחלת של משתנה מותמר h(X) ישירות מתוך פונקציית ההסתברות המקורית של X, ללא צורך למצוא תחילה את התפלגותו של המשתנה החדש h(X).'
  },
  {
    id: 'discrete-variance',
    courseId: 'prob',
    category: 'Discrete Variables',
    categoryHe: 'משתנים מקריים בדידים',
    name: 'Discrete Variance Identity',
    nameHe: 'נוסחת השונות של משתנה דיסקרטי',
    equation: '\\text{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2, \\quad \\mathbb{E}[X^2] = \\sum_{x \\in S} x^2 \\cdot p_X(x)',
    description: 'Measures the spread of a discrete random variable by taking the expected value of its squared distance from the mean.',
    descriptionHe: 'מודד את פיזורו של משתנה מקרי דיסקרטי על ידי חישוב התוחלת של מרחקו הריבועי מהממוצע, ומפושט באמצעות נוסחת העזר הנוחה.'
  },
  {
    id: 'binomial-distribution',
    courseId: 'prob',
    category: 'Discrete Distributions',
    categoryHe: 'התפלגויות בדידות',
    name: 'Binomial Distribution PMF & Expectation',
    nameHe: 'התפלגות בינומית: PMF ותוחלת',
    equation: 'P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad \\mathbb{E}[X] = np, \\quad \\text{Var}(X) = np(1-p)',
    description: 'Models the number of successes in n independent Bernoulli trials, each having a success probability p.',
    descriptionHe: 'מדלגת את מספר ההצלחות בתוך סדרה של n ניסויי ברנולי בלתי תלויים, כאשר לכל ניסוי יש הסתברות הצלחה קבועה p.'
  },
  {
    id: 'geometric-distribution',
    courseId: 'prob',
    category: 'Discrete Distributions',
    categoryHe: 'התפלגויות בדידות',
    name: 'Geometric Distribution PMF & Expectation',
    nameHe: 'התפלגות גיאומטרית: PMF ותוחלת',
    equation: 'P(X = k) = (1-p)^{k-1} p, \\quad \\mathbb{E}[X] = \\frac{1}{p}, \\quad \\text{Var}(X) = \\frac{1-p}{p^2}',
    description: 'Models the number of independent Bernoulli trials required to achieve the very first success.',
    descriptionHe: 'מדלגת את מספר ניסויי ברנולי הבלתי תלויים הנדרשים עד לקבלת ההצלחה הראשונה ביותר בסדרה.'
  },
  {
    id: 'poisson-distribution',
    courseId: 'prob',
    category: 'Discrete Distributions',
    categoryHe: 'התפלגויות בדידות',
    name: 'Poisson Distribution PMF & Expectation',
    nameHe: 'התפלגות פואסון: PMF ותוחלת',
    equation: 'P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}, \\quad \\mathbb{E}[X] = \\lambda, \\quad \\text{Var}(X) = \\lambda',
    description: 'Models the number of independent events occurring in a fixed interval with a constant average rate lambda.',
    descriptionHe: 'מדלגת את מספר המאורעות הבלתי תלויים המתרחשים בתוך פרק זמן קבוע או מרחב מוגדר, תחת קצב ממוצע קבוע למדא.'
  },
  {
    id: 'hypergeometric-distribution',
    courseId: 'prob',
    category: 'Discrete Distributions',
    categoryHe: 'התפלגויות בדידות',
    name: 'Hypergeometric Distribution PMF & Expectation',
    nameHe: 'התפלגות היפרגיאומטרית: PMF ותוחלת',
    equation: 'P(X = k) = \\frac{\\binom{D}{k} \\binom{N-D}{n-k}}{\\binom{N}{n}}, \\quad \\mathbb{E}[X] = n \\frac{D}{N}',
    description: 'Models the number of successes in a sample of size n drawn without replacement from a population of size N containing D successes.',
    descriptionHe: 'מדלגת את מספר ההצלחות במדגם בגודל n הנלקח ללא החזרה מתוך אוכלוסייה בגודל N המכילה בסך הכל D פריטים מוגדרים כהצלחה.'
  },

  // ==========================================
  // CHAPTER 4: JOINT DISTRIBUTIONS & INEQUALITIES
  // ==========================================
  {
    id: 'joint-pdf-normalization',
    courseId: 'prob',
    category: 'Joint Distributions',
    categoryHe: 'התפלגויות משותפות',
    name: 'Joint Continuous PDF Normalization',
    nameHe: 'תנאי הנרמול של פונקציית צפיפות משותפת רציפה',
    equation: '\\int_{-\\infty}^{\\infty} \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y) dx dy = 1',
    description: 'The total volume under the entire joint probability density function must integrate to exactly 1.',
    descriptionHe: 'הנפח הכולל מתחת למשטח פונקציית צפיפות ההסתברות המשותפת של שני משתנים רציפים חייב להסתכם בדיוק ל-1.'
  },
  {
    id: 'marginal-pdf-continuous',
    courseId: 'prob',
    category: 'Joint Distributions',
    categoryHe: 'התפלגויות משותפות',
    name: 'Marginal Density Functions',
    nameHe: 'פונקציות צפיפות שוליות',
    equation: 'f_X(x) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y) dy, \\quad f_Y(y) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y) dx',
    description: 'Calculates the individual probability density functions of X and Y from their joint PDF by integrating out the other variable.',
    descriptionHe: 'מחלץ את פונקציות הצפיפות האינדיבידואליות של X ושל Y מתוך הצפיפות המשותפת שלהם על ידי ביצוע אינטגרציה מעל המשתנה השני.'
  },
  {
    id: 'covariance-definition',
    courseId: 'prob',
    category: 'Joint Distributions',
    categoryHe: 'התפלגויות משותפות',
    name: 'Covariance Definition & Identity',
    nameHe: 'הגדרת השונות המשותפת (קובריאנס) ונוסחת העזר',
    equation: '\\text{Cov}(X, Y) = \\mathbb{E}[(X - \\mathbb{E}[X])(Y - \\mathbb{E}[Y])] = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y]',
    description: 'Measures the linear relationship between two random variables by subtracting the product of their individual means from the expectation of their product.',
    descriptionHe: 'מודד את עוצמת הקשר הליניארי בין שני משתנים מקריים על ידי הפחתת מכפלת התוחלות שלהם מתוך התוחלת של המכפלה שלהם.'
  },
  {
    id: 'variance-of-sum-two',
    courseId: 'prob',
    category: 'Joint Distributions',
    categoryHe: 'התפלגויות משותפות',
    name: 'Variance of a Sum (2 Variables)',
    nameHe: 'שונות של סכום שני משתנים מקריים',
    equation: '\\text{Var}(X \\pm Y) = \\text{Var}(X) + \\text{Var}(Y) \\pm 2\\text{Cov}(X, Y)',
    description: 'The variance of a sum or difference of two random variables is the sum of their variances plus or minus twice their covariance.',
    descriptionHe: 'השונות של סכום או הפרש של שני משתנים מקריים שווה לסכום השונויות שלהם בתוספת או הפחתה של פעמיים השונות המשותפת ביניהם.'
  },
  {
    id: 'pearson-correlation',
    courseId: 'prob',
    category: 'Joint Distributions',
    categoryHe: 'התפלגויות משותפות',
    name: 'Pearson Correlation Coefficient',
    nameHe: 'מקדם המתאם של פירסון',
    equation: '\\rho_{X,Y} = \\frac{\\text{Cov}(X, Y)}{\\sqrt{\\text{Var}(X)\\text{Var}(Y)}}',
    description: 'Dimensionless, normalized measure of the linear correlation between two variables, bounded between -1 and 1.',
    descriptionHe: 'מדד חסר ממדים ומנורמל לקשר הליניארי בין שני משתנים מקריים, החסום תמיד בערכים שבין מינוס 1 לפלוס 1.'
  },
  {
    id: 'markov-inequality',
    courseId: 'prob',
    category: 'Probability Inequalities',
    categoryHe: 'אי-שוויונות',
    name: "Markov's Inequality",
    nameHe: 'אי-שוויון מרקוב',
    equation: 'P(X \\ge c) \\le \\frac{\\mathbb{E}[X]}{c}, \\quad X \\ge 0, \\quad c > 0',
    description: 'Bounds the tail probability of a non-negative random variable X using only its mathematical expectation.',
    descriptionHe: 'חוסם את הסתברות הזנב של משתנה מקרי אי-שלילי X על סמך ידיעת התוחלת המתמטית שלו בלבד.'
  },
  {
    id: 'chebyshev-inequality',
    courseId: 'prob',
    category: 'Probability Inequalities',
    categoryHe: 'אי-שוויונות',
    name: "Chebyshev's Inequality",
    nameHe: "אי-שוויון צ'בישב",
    equation: 'P(|X - \\mu| \\ge c) \\le \\frac{\\text{Var}(X)}{c^2}, \\quad c > 0',
    description: 'Bounds the probability that any random variable X deviates from its mean mu by c or more using its variance.',
    descriptionHe: 'חוסם את ההסתברות שמשתנה מקרי כלשהו X יסטה מהתוחלת שלו במרחק העולה על c, באמצעות שימוש בשונות המשתנה.'
  },
  {
    id: 'hoeffding-inequality',
    courseId: 'prob',
    category: 'Probability Inequalities',
    categoryHe: 'אי-שוויונות',
    name: "Hoeffding's Concentration Inequality",
    nameHe: 'אי-שוויון הריכוזיות של הפדינג',
    equation: 'P(|\\bar{X}_n - p| \\ge \\epsilon) \\le 2 e^{-2n\\epsilon^2}',
    description: 'Exponential concentration bound for the sample mean of independent Bernoulli trials around their true probability parameter.',
    descriptionHe: 'חסם ריכוזיות מעריכי הדוק עבור ממוצע מדגם של ניסויי ברנולי עצמאיים סביב פרמטר ההסתברות האמיתי שלהם.'
  },
  {
    id: 'mills-inequality',
    courseId: 'prob',
    category: 'Probability Inequalities',
    categoryHe: 'אי-שוויונות',
    name: "Mill's Inequality",
    nameHe: 'אי-שוויון מיל',
    equation: 'P(Z \\ge x) \\le \\frac{\\phi(x)}{x} = \\frac{e^{-x^2/2}}{x\\sqrt{2\\pi}}, \\quad P(|Z| \\ge x) \\le \\sqrt{\\frac{2}{\\pi}} \\frac{e^{-x^2/2}}{x} = \\frac{2\\phi(x)}{x}, \\quad \\left(\\frac{1}{x} - \\frac{1}{x^3}\\right)\\phi(x) \\le P(Z \\ge x) \\le \\frac{\\phi(x)}{x}',
    description: 'Provides a highly accurate tail bound for a standard normal distribution without requiring numerical CDF integration.',
    descriptionHe: 'חוסם את הסתברות הזנב של משתנה נורמלי סטנדרטי Z ללא צורך בחישוב נומרי מורכב של פונקציית ההתפלגות המצטברת.'
  },
  {
    id: 'cauchy-schwarz-inequality',
    courseId: 'prob',
    category: 'Probability Inequalities',
    categoryHe: 'אי-שוויונות',
    name: 'Cauchy-Schwarz Inequality',
    nameHe: 'אי-שוויון קושי-שוורץ',
    equation: '(\\mathbb{E}[XY])^2 \\le \\mathbb{E}[X^2]\\mathbb{E}[Y^2]',
    description: 'Fundamental algebraic bound for the expectation of a product of two random variables with finite second moments.',
    descriptionHe: 'אי-שוויון אלגברי יסודי עבור התוחלת של מכפלת שני משתנים מקריים בעלי מומנט שני סופי.'
  },
  {
    id: 'jensen-inequality',
    courseId: 'prob',
    category: 'Probability Inequalities',
    categoryHe: 'אי-שוויונות',
    name: "Jensen's Inequality",
    nameHe: 'אי-שוויון ינסן',
    equation: '\\mathbb{E}[g(X)] \\ge g(\\mathbb{E}[X]) \\quad (g \\text{ is convex})',
    description: 'Relates the expectation of a transformed variable to the transformation of its expected value using convexity.',
    descriptionHe: 'מקשר בין התוחלת של פונקציה המופעלת על משתנה מקרי לבין הפעלת הפונקציה על התוחלת שלו, תוך שימוש בקמירות.'
  },

  // ==========================================
  // CHAPTER 5: MOMENT GENERATING FUNCTIONS
  // ==========================================
  {
    id: 'mgf-definition',
    courseId: 'prob',
    category: 'Moment Generating Functions',
    categoryHe: 'פונקציות יוצרות מומנטים',
    name: 'Moment Generating Function (MGF) Definition',
    nameHe: 'הגדרת פונקציה יוצרת מומנטים (MGF)',
    equation: 'M_X(t) = \\mathbb{E}[e^{tX}] = \\begin{cases} \\sum_{x} e^{tx} p_X(x) & \\text{(Discrete)} \\\\ \\int_{-\\infty}^{\\infty} e^{tx} f_X(x) dx & \\text{(Continuous)} \\end{cases}',
    description: "Defines the Moment Generating Function as the mathematical expectation of e^{tX}. It acts as a unique functional wrapper for a distribution's moments.",
    descriptionHe: 'מגדיר את הפונקציה יוצרת המומנטים כתוחלת המתמטית של e^{tX}. היא משמשת כמעטפת פונקציונלית ייחודית המכילה את כל מומנטי ההתפלגות.'
  },
  {
    id: 'mgf-moment-generation',
    courseId: 'prob',
    category: 'Moment Generating Functions',
    categoryHe: 'פונקציות יוצרות מומנטים',
    name: 'Moment Generation Property',
    nameHe: 'תכונת יצירת המומנטים',
    equation: '\\mathbb{E}[X^n] = M_X^{(n)}(0), \\quad \\text{Var}(X) = M_X\'\'(0) - \\left(M_X\'(0)\\right)^2',
    description: 'The n-th moment of X is obtained by evaluating the n-th derivative of its MGF at t=0.',
    descriptionHe: 'ניתן לחשב את המומנט ה-n של משתנה מקרי על ידי גזירת פונקציית ה-MGF שלו n פעמים והצבת t=0.'
  },
  {
    id: 'mgf-linear-transformation',
    courseId: 'prob',
    category: 'Moment Generating Functions',
    categoryHe: 'פונקציות יוצרות מומנטים',
    name: 'MGF Linear Transformation',
    nameHe: 'טרנספורמציה ליניארית של MGF',
    equation: 'M_{aX+b}(t) = e^{bt} M_X(at)',
    description: 'Shifting a random variable by constant b scales its MGF by e^{bt}, and scaling it by a scales the parameter t to at.',
    descriptionHe: 'הזזה של משתנה מקרי בקבוע b מכפילה את ה-MGF שלו ב-e^{bt}, וכפל שלו בקבוע a מכפיל את משתנה העזר t ל-at.'
  },
  {
    id: 'mgf-independent-sums',
    courseId: 'prob',
    category: 'Moment Generating Functions',
    categoryHe: 'פונקציות יוצרות מומנטים',
    name: 'MGF of Independent Sums',
    nameHe: 'MGF של סכום משתנים בלתי תלויים',
    equation: 'M_{\\sum_{i=1}^n X_i}(t) = \\prod_{i=1}^n M_{X_i}(t)',
    description: 'The MGF of a sum of independent random variables is the product of their individual MGFs.',
    descriptionHe: 'פונקציית ה-MGF של סכום משתנים מקריים בלתי תלויים שווה למכפלת פונקציות ה-MGF האינדיבידואליות שלהם.'
  },
  {
    id: 'mgf-common-distributions',
    courseId: 'prob',
    category: 'Moment Generating Functions',
    categoryHe: 'פונקציות יוצרות מומנטים',
    name: 'Common MGF Reference Table',
    nameHe: 'טבלת ייחוס של MGF נפוצים',
    equation: 'M_{\\text{Geom}}(t) = \\frac{p e^t}{1 - q e^t}, \\quad M_{\\text{Exp}}(t) = \\frac{\\lambda}{\\lambda - t}, \\quad M_{\\text{Poisson}}(t) = e^{\\lambda(e^t-1)}, \\quad M_{\\text{Normal}}(t) = e^{\\mu t + \\frac{1}{2}\\sigma^2 t^2}',
    description: 'Quick reference formulas for standard discrete and continuous distributions (Geometric, Exponential, Poisson, and Normal).',
    descriptionHe: 'נוסחאות ייחוס מהירות עבור התפלגויות סטנדרטיות בדידות ורציפות נפוצות (גיאומטרית, מעריכית, פואסון ונורמלית).'
  },

  // ==========================================
  // CHAPTER 6: LIMIT THEOREMS & CONVERGENCE
  // ==========================================
  {
    id: 'wlln-formula',
    courseId: 'prob',
    category: 'Limit Theorems',
    categoryHe: 'משפטי גבול והתכנסות',
    name: 'Weak Law of Large Numbers (WLLN)',
    nameHe: 'החוק החלש של המספרים הגדולים',
    equation: '\\lim_{n \\to \\infty} P(|\\bar{X}_n - \\mu| \\ge \\epsilon) = 0',
    description: 'States that the sample mean of a sequence of i.i.d. random variables converges in probability to the theoretical population mean.',
    descriptionHe: 'קובע כי ממוצע המדגם של סדרת משתנים מקריים בלתי תלויים ובעלי התפלגות זהה מתכנס בהסתברות אל התוחלת התאורטית באוכלוסייה.'
  },
  {
    id: 'clt-formula',
    courseId: 'prob',
    category: 'Limit Theorems',
    categoryHe: 'משפטי גבול והתכנסות',
    name: 'Central Limit Theorem (CLT)',
    nameHe: 'משפט הגבול המרכזי',
    equation: '\\lim_{n \\to \\infty} P\\left(\\frac{\\sum_{i=1}^n X_i - n\\mu}{\\sigma\\sqrt{n}} \\le z\\right) = \\Phi(z)',
    description: 'States that the sum or average of a large number of independent, identically distributed random variables will be approximately normally distributed, regardless of the original distribution.',
    descriptionHe: 'קובע כי סכום או ממוצע של מספר רב של משתנים מקריים בלתי תלויים ובעלי התפלגות זהה יתפלג בקירוב נורמלית, ללא קשר להתפלגותם המקורית.'
  },

  // ==========================================
  // CHAPTER 7: METHOD OF MOMENTS ESTIMATION (MME)
  // ==========================================
  {
    id: 'moments-comparison',
    courseId: 'stats',
    category: 'Method of Moments',
    categoryHe: 'שיטת המומנטים',
    name: 'Population vs. Sample Moments',
    nameHe: 'מומנטים באוכלוסייה מול מומנטים במדגם',
    equation: '\\mu_k = \\mathbb{E}[X^k], \\quad \\hat{\\mu}_k = \\frac{1}{n} \\sum_{i=1}^n X_i^k',
    description: 'The standard formulas for theoretical population moments and their empirical sample counterparts.',
    descriptionHe: 'הנוסחאות הסטנדרטיות עבור מומנטים תאורטיים של האוכלוסייה מול עמיתיהם האמפיריים במדגם.'
  },
  {
    id: 'mme-system',
    courseId: 'stats',
    category: 'Method of Moments',
    categoryHe: 'שיטת המומנטים',
    name: 'Method of Moments System',
    nameHe: 'מערכת משוואות של שיטת המומנטים',
    equation: '\\mathbb{E}[X^k] = \\frac{1}{n} \\sum_{i=1}^n X_i^k, \\quad k = 1, \\dots, m',
    description: 'Constructs estimators by equating the population moments to the sample moments and solving for the unknown parameters.',
    descriptionHe: 'בונה אומדים על ידי השוואת המומנטים של האוכלוסייה למומנטים של המדגם ופתרון עבור הפרמטרים הלא ידועים.'
  },

  // ==========================================
  // CHAPTER 8: MAXIMUM LIKELIHOOD ESTIMATION (MLE)
  // ==========================================
  {
    id: 'likelihood-func',
    courseId: 'stats',
    category: 'Maximum Likelihood',
    categoryHe: 'אמידת נראות מרבית',
    name: 'Likelihood Function',
    nameHe: 'פונקציית הנראות',
    equation: 'L(\\theta) = \\prod_{i=1}^n f(X_i; \\theta)',
    description: 'The joint PDF/PMF of the sample evaluated as a function of the parameter theta.',
    descriptionHe: 'הצפיפות המשותפת או פונקציית ההסתברות המשותפת של המדגם, המוערכת כפונקציה של הפרמטר.'
  },
  {
    id: 'log-likelihood-func',
    courseId: 'stats',
    category: 'Maximum Likelihood',
    categoryHe: 'אמידת נראות מרבית',
    name: 'Log-Likelihood Function',
    nameHe: 'פונקציית הלוג-נראות',
    equation: '\\ell(\\theta) = \\sum_{i=1}^n \\ln f(X_i; \\theta)',
    description: 'The natural logarithm of the likelihood function, simplifying products into sums.',
    descriptionHe: 'הלוגריתם הטבעי של פונקציית הנראות, המפשט מכפלות לכדי סכומים.'
  },
  {
    id: 'score-equation',
    courseId: 'stats',
    category: 'Maximum Likelihood',
    categoryHe: 'אמידת נראות מרבית',
    name: 'Score Function & Score Equation',
    nameHe: 'פונקציית הציון ומשוואת הציונים',
    equation: 'U(\\theta) = \\frac{\\partial}{\\partial \\theta} \\ell(\\theta) = 0',
    description: 'The derivative of the log-likelihood function set to zero to find parameter candidates.',
    descriptionHe: 'הנגזרת של פונקציית הלוג-נראות אשר מושווית לאפס כדי למצוא מועמדים לאומד.'
  },
  {
    id: 'mle-invariance',
    courseId: 'stats',
    category: 'Maximum Likelihood',
    categoryHe: 'אמידת נראות מרבית',
    name: 'Invariance Property',
    nameHe: 'תכונת האי-שתנות',
    equation: '\\hat{\\tau}_{MLE} = g(\\hat{\\theta}_{MLE})',
    description: "The MLE of any transformed parameter g(theta) is simply the function evaluated at the original parameter's MLE.",
    descriptionHe: 'אומד הנראות המרבית של כל פרמטר מותמר הוא פשוט הפונקציה המופעלת על אומד הנראות המרבית המקורי.'
  },

  // ==========================================
  // CHAPTER 9: CONFIDENCE INTERVALS (CI)
  // ==========================================
  {
    id: 'general-ci-form',
    courseId: 'stats',
    category: 'Confidence Intervals',
    categoryHe: 'מרווחי סמך',
    name: 'General Confidence Interval',
    nameHe: 'מרווח סמך כללי',
    equation: 'P(L(X) \\le \\theta \\le U(X)) = 1 - \\alpha',
    description: 'Defines an interval range that captures the true parameter with probability 1-alpha.',
    descriptionHe: 'מגדיר טווח מרווח הלוכד את הפרמטר האמיתי בהסתברות של 1 פחות אלפא.'
  },
  {
    id: 'z-interval-mean',
    courseId: 'stats',
    category: 'Confidence Intervals',
    categoryHe: 'מרווחי סמך',
    name: 'Z-Interval for Mean (Known Variance)',
    nameHe: 'מרווח סמך Z לתוחלת (שונות ידועה)',
    equation: '\\bar{X} \\pm z_{1-\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}',
    description: 'Confidence interval for the mean of a normal population when the variance is known.',
    descriptionHe: 'מרווח סמך עבור תוחלת של אוכלוסייה נורמלית כאשר השונות ידועה.'
  },
  {
    id: 't-interval-mean',
    courseId: 'stats',
    category: 'Confidence Intervals',
    categoryHe: 'מרווחי סמך',
    name: 't-Interval for Mean (Unknown Variance)',
    nameHe: 'מרווח סמך t לתוחלת (שונות לא ידועה)',
    equation: '\\bar{X} \\pm t_{1-\\alpha/2, n-1} \\frac{S}{\\sqrt{n}}',
    description: 'Confidence interval for the mean of a normal population when the variance is unknown.',
    descriptionHe: 'מרווח סמך עבור תוחלת של אוכלוסייה נורמלית כאשר השונות אינה ידועה.'
  },
  {
    id: 'wald-proportion-ci',
    courseId: 'stats',
    category: 'Confidence Intervals',
    categoryHe: 'מרווחי סמך',
    name: 'Wald Interval for Proportion',
    nameHe: 'מרווח סמך לפרופורציה',
    equation: '\\hat{p} \\pm z_{1-\\alpha/2} \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}',
    description: 'Normal approximation confidence interval for a population proportion.',
    descriptionHe: 'מרווח סמך המבוסס על קירוב נורמלי עבור פרופורציה באוכלוסייה.'
  },
  {
    id: 'chi-square-variance-ci',
    courseId: 'stats',
    category: 'Confidence Intervals',
    categoryHe: 'מרווחי סמך',
    name: 'Chi-Square Interval for Variance',
    nameHe: 'מרווח סמך לשונות',
    equation: '\\left[ \\frac{(n-1)S^2}{\\chi^2_{1-\\alpha/2, n-1}}, \\frac{(n-1)S^2}{\\chi^2_{\\alpha/2, n-1}} \\right]',
    description: 'Confidence interval for the variance of a normal population using Chi-Square distribution.',
    descriptionHe: 'מרווח סמך עבור השונות של אוכלוסייה נורמלית בעזרת התפלגות חי בריבוע.'
  },

  // ==========================================
  // CHAPTER 10: HYPOTHESIS TESTING
  // ==========================================
  {
    id: 'z-test-statistic',
    courseId: 'stats',
    category: 'Hypothesis Testing',
    categoryHe: 'מבחני השערות',
    name: 'One-Sample Z-Test Statistic',
    nameHe: 'סטטיסטי מבחן Z למדגם יחיד',
    equation: 'Z = \\frac{\\bar{X} - \\mu_0}{\\sigma/\\sqrt{n}}',
    description: 'Computes the standard score for a sample mean under a known population variance.',
    descriptionHe: 'מחשב את ציון התקן עבור ממוצע מדגם תחת שונות אוכלוסייה ידועה.'
  },
  {
    id: 't-test-statistic',
    courseId: 'stats',
    category: 'Hypothesis Testing',
    categoryHe: 'מבחני השערות',
    name: 'One-Sample t-Test Statistic',
    nameHe: 'סטטיסטי מבחן t למדגם יחיד',
    equation: 't = \\frac{\\bar{X} - \\mu_0}{S/\\sqrt{n}}',
    description: 'Computes the test statistic for a sample mean under an unknown population variance.',
    descriptionHe: 'מחשב את סטטיסטי המבחן עבור ממוצע מדגם תחת שונות אוכלוסייה שאינה ידועה.'
  },
  {
    id: 'proportion-z-test',
    courseId: 'stats',
    category: 'Hypothesis Testing',
    categoryHe: 'מבחני השערות',
    name: 'Z-Test for Proportion',
    nameHe: 'מבחן Z לפרופורציה',
    equation: 'Z = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n}}}',
    description: 'Normal approximation test statistic for a population proportion.',
    descriptionHe: 'סטטיסטי מבחן בקירוב נורמלי עבור פרופורציה באוכלוסייה.'
  },
  {
    id: 'p-value-def',
    courseId: 'stats',
    category: 'Hypothesis Testing',
    categoryHe: 'מבחני השערות',
    name: 'Definition of p-value',
    nameHe: 'הגדרת ערך ה-p (p-value)',
    equation: 'p\\text{-value} = P(\\text{Test Statistic} \\ge \\text{Observed Value} \\mid H_0 \\text{ is true})',
    description: 'The probability of obtaining test results at least as extreme as the observed results, assuming the null hypothesis is correct.',
    descriptionHe: 'ההסתברות לקבלת תוצאות מבחן קיצוניות לפחות כמו אלו שנצפו, תחת ההנחה שהשערת האפס נכונה.'
  },
  {
    id: 'type2-error-power',
    courseId: 'stats',
    category: 'Hypothesis Testing',
    categoryHe: 'מבחני השערות',
    name: 'Type II Error & Power',
    nameHe: 'טעות מסוג שני ועוצמת המבחן',
    equation: '\\beta = P(\\text{Fail to Reject } H_0 \\mid H_1 \\text{ is true}), \\quad \\text{Power} = 1 - \\beta',
    description: 'The probability of failing to reject a false null hypothesis, and its complement representing the power of the test.',
    descriptionHe: 'ההסתברות שלא לדחות השערת אפס שקרית, והמשלים שלה המייצג את עוצמת המבחן.'
  }
,
  // ==========================================
  // CHAPTER 11: ADVANCED STATISTICAL METHODS (PROPERTIES & REGRESSION)
  // ==========================================
  {
    id: 'estimator-bias',
    courseId: 'stats',
    category: 'Estimator Properties',
    categoryHe: 'תכונות אומדים',
    name: 'Estimator Bias',
    nameHe: 'הטיית האומד',
    equation: '\\text{Bias}(\\hat{\\theta}) = \\mathbb{E}[\\hat{\\theta}] - \\theta',
    description: 'Measures the difference between the expected value of an estimator and the true parameter value.',
    descriptionHe: 'מודד את ההפרש בין התוחלת של האומד לבין ערכו האמיתי של הפרמטר.'
  },
  {
    id: 'estimator-mse',
    courseId: 'stats',
    category: 'Estimator Properties',
    categoryHe: 'תכונות אומדים',
    name: 'Mean Square Error (MSE)',
    nameHe: 'טעות ריבועית ממוצעת (MSE)',
    equation: '\\text{MSE}(\\hat{\\theta}) = \\text{Var}(\\hat{\\theta}) + [\\text{Bias}(\\hat{\\theta})]^2',
    description: 'Decomposes the overall squared error of an estimator into its variance and squared bias.',
    descriptionHe: 'מפרק את הטעות הריבועית הכוללת של אומד לשונות שלו ועוד ריבוע ההטיה שלו.'
  },
  {
    id: 'fisher-information',
    courseId: 'stats',
    category: 'Estimator Properties',
    categoryHe: 'תכונות אומדים',
    name: 'Fisher Information',
    nameHe: 'מידע פישר',
    equation: 'I(\\theta) = -n \\mathbb{E}\\left[ \\frac{\\partial^2}{\\partial \\theta^2} \\ln f(X; \\theta) \\right]',
    description: 'Measures the amount of information that an observable random variable X carries about an unknown parameter.',
    descriptionHe: 'מודד את כמות המידע שמשתנה מקרי תצפיתי X נושא אודות הפרמטר הלא ידוע.'
  },
  {
    id: 'cramer-rao-bound',
    courseId: 'stats',
    category: 'Estimator Properties',
    categoryHe: 'תכונות אומדים',
    name: 'Cramer-Rao Lower Bound',
    nameHe: 'חסם קרמר-ראו',
    equation: '\\text{Var}(\\hat{\\theta}) \\ge \\frac{1}{I(\\theta)}',
    description: 'States that the variance of any unbiased estimator is bounded from below by the reciprocal of the Fisher Information.',
    descriptionHe: 'קובע כי השונות של כל אומד בלתי מוטה חסומה מלמטה על ידי ההופכי של מידע פישר.'
  },
  {
    id: 'regression-slope',
    courseId: 'stats',
    category: 'Linear Regression',
    categoryHe: 'רגרסיה ליניארית',
    name: 'Least Squares Slope',
    nameHe: 'שיפוע בריבועים פחותים',
    equation: '\\hat{\\beta}_1 = \\frac{\\sum_{i=1}^n (X_i - \\bar{X})(Y_i - \\bar{Y})}{\\sum_{i=1}^n (X_i - \\bar{X})^2} = \\frac{\\text{Cov}(X, Y)}{\\text{Var}(X)}',
    description: 'The formula for estimating the slope of the simple linear regression line.',
    descriptionHe: 'הנוסחה לאמידת השיפוע של קו הרגרסיה הליניארית הפשוטה.'
  },
  {
    id: 'regression-intercept',
    courseId: 'stats',
    category: 'Linear Regression',
    categoryHe: 'רגרסיה ליניארית',
    name: 'Least Squares Intercept',
    nameHe: 'חותך בריבועים פחותים',
    equation: '\\hat{\\beta}_0 = \\bar{Y} - \\hat{\\beta}_1 \\bar{X}',
    description: 'The formula for estimating the y-intercept of the simple linear regression line.',
    descriptionHe: 'הנוסחה לאמידת החותך של קו הרגרסיה הליניארית הפשוטה.'
  },
  // ==========================================
  // CALCULUS & INTEGRATION REVIEW
  // ==========================================
  {
    id: 'u-substitution',
    courseId: 'prob',
    category: 'Calculus Review',
    categoryHe: 'ריענון חדו"א',
    name: 'u-Substitution (Integration by Substitution)',
    nameHe: 'אינטגרציה בשיטת ההצבה (u-Substitution)',
    equation: '\\int f(g(x))g\'(x)dx = \\int f(u)du, \\quad \\int_{a}^{b} f(g(x))g\'(x)dx = \\int_{g(a)}^{g(b)} f(u) du',
    description: 'Simplifies complex products of functions by changing coordinates to a new variable u = g(x) and updating integration bounds accordingly.',
    descriptionHe: 'מפשטת אינטגרלים המכילים מכפלות מורכבות על ידי החלפת המשתנה המקרי במשתנה עזר u, תוך עדכון גבולות האינטגרציה המסוימים בהתאם לערכי g(a) ו-g(b).'
  },
  {
    id: 'integration-by-parts',
    courseId: 'prob',
    category: 'Calculus Review',
    categoryHe: 'ריענון חדו"א',
    name: 'Integration by Parts',
    nameHe: 'אינטגרציה בחלקים',
    equation: '\\int u \\, dv = uv - \\int v \\, du, \\quad \\int_{a}^{b} u(x)v\'(x)dx = [u(x)v(x)]_a^b - \\int_{a}^{b} v(x)u\'(x)dx',
    description: 'The inverse of the Product Rule of differentiation, useful for evaluating integrals of products by shifting the derivative using the LIATE prioritization rule.',
    descriptionHe: 'הפעולה ההפוכה לכלל המכפלה של גזירה. היא מסייעת בחישוב אינטגרלים של מכפלות פונקציות על ידי העברת פעולת הגזירה לפונקציה פשוטה יותר לפי כלל LIATE.'
  },
  {
    id: 'gaussian-improper-integrals',
    courseId: 'prob',
    category: 'Calculus Review',
    categoryHe: 'ריענון חדו"א',
    name: 'Improper Limits & The Gaussian Integral',
    nameHe: 'אינטגרלים לא אמיתיים והאינטגרל הגאוסיאני',
    equation: '\\int_{-\\infty}^{\\infty} e^{-\\frac{x^2}{2}} dx = \\sqrt{2\\pi}, \\quad \\int_{a}^{\\infty} f(x)dx = \\lim_{M \\to \\infty} \\int_{a}^{M} f(x)dx',
    description: 'Defines continuous integration over infinite intervals via limits, and establishes the essential Gaussian normalization constant for the Normal density.',
    descriptionHe: 'מגדיר אינטגרציה רציפה מעל תחומים אינסופיים באמצעות גבולות מתמטיים, ומציג את ערך האינטגרל הגאוסיאני היסודי המשמש כבסיס לנרמול צפיפות התפלגות נורמלית.'
  },
  {
    id: 'double-integrals-triangular',
    courseId: 'prob',
    category: 'Calculus Review',
    categoryHe: 'ריענון חדו"א',
    name: 'Double Integrals (Triangular Regions)',
    nameHe: 'אינטגרלים כפולים (תחומים משולשיים)',
    equation: '\\iint_{D} f(x,y) dA = \\int_{a}^{b} \\int_{g_1(x)}^{g_2(x)} f(x,y) \\, dy \\, dx = \\int_{c}^{d} \\int_{h_1(y)}^{h_2(y)} f(x,y) \\, dx \\, dy',
    description: 'Enables 2D continuous integration over non-rectangular domains, key for marginalization and joint probabilities in multivariate continuous setups.',
    descriptionHe: 'מאפשר ביצוע אינטגרציה דו-ממדית מעל תחומים שאינם מלבניים, דבר המהווה מפתח למציאת הסתברויות שוליות ותוחלות משותפות במרחבים רציפים רב-ממדיים.'
  },
// ==================== NLA FORMULAS ====================
  {
    id: 'f-nla-vector-norm',
    courseId: 'nla',
    category: 'Matrix & Vector Norms',
    categoryHe: 'נורמות של מטריצות ווקטורים',
    name: 'p-Norm of a Vector',
    nameHe: 'נורמת p של וקטור',
    equation: '\\|x\\|_p = \\left( \\sum_{i=1}^n |x_i|^p \\right)^{1/p}',
    description: 'General vector norm formula measuring the magnitude of x in R^n. Common instances include: p=1 (absolute sum), p=2 (Euclidean distance), and p=\\infty (maximum coordinate in magnitude).',
    descriptionHe: 'נוסחת נורמה כללית של וקטור המודדת את גודלו של x ב-R^n. מקרים נפוצים כוללים: p=1 (סכום מוחלט), p=2 (מרחק אוקלידי אוקלידי), ו-p=\\infty (הרכיב המקסימלי בערכו המוחלט).'
  },
  {
    id: 'f-nla-inner-product',
    courseId: 'nla',
    category: 'Matrix & Vector Norms',
    categoryHe: 'נורמות של מטריצות ווקטורים',
    name: 'Vector Inner Product (Hermitian)',
    nameHe: 'מכפלה פנימית של וקטורים (הרמיטית)',
    equation: '\\langle u, v \\rangle = u^* v = \\sum_{i=1}^n \\bar{u}_i v_i',
    description: 'Defines the standard complex dot product with conjugate symmetry, linearity, and non-negativity. Induces the 2-norm directly.',
    descriptionHe: 'מגדיר מכפלה סקלרית מרוכבת סטנדרטית עם תכונות סימטריה צמודה, ליניאריות ואי-שליליות. מכפלה זו משרה את נורמת 2 (המרחק האוקלידי) באופן ישיר.'
  },
  {
    id: 'f-nla-energy-norm',
    courseId: 'nla',
    category: 'Matrix & Vector Norms',
    categoryHe: 'נורמות של מטריצות ווקטורים',
    name: 'Energy Norm (M-Norm)',
    nameHe: 'נורמת אנרגיה (M-נורמה)',
    equation: '\\|u\\|_M = \\sqrt{\\langle u, M u \\rangle} = \\sqrt{u^* M u}',
    description: 'A valid weighted vector norm induced by any Hermitian Positive Definite matrix M. Vital in error bounds for Conjugate Gradients.',
    descriptionHe: 'נורמת וקטורים משוקללת תקפה המושרת על ידי מטריצה הרמיטית חיובית לחלוטין M. נורמה זו חיונית לקבלת חסמי שגיאה בשיטת הגרדיאנטים הצמודים (CG).'
  },
  {
    id: 'f-nla-matrix-induced',
    courseId: 'nla',
    category: 'Matrix & Vector Norms',
    categoryHe: 'נורמות של מטריצות ווקטורים',
    name: 'Induced Matrix Norm Definition',
    nameHe: 'הגדרת נורמת מטריצה מושרית',
    equation: '\\|A\\| = \\max_{x \\neq 0} \\frac{\\|Ax\\|}{\\|x\\|}',
    description: 'The maximum amplification factor of vector length when multiplied by matrix A. Represents the supremum of the vector norm mapping.',
    descriptionHe: 'גורם ההגברה המקסימלי של אורך וקטור תחת כפל במטריצה A. מייצג את הסופרמום של היחס בין נורמת הוקטור המותמר לנורמת וקטור המקור.'
  },
  {
    id: 'f-nla-matrix-1',
    courseId: 'nla',
    category: 'Matrix & Vector Norms',
    categoryHe: 'נורמות של מטריצות ווקטורים',
    name: 'Matrix 1-Norm (Max Column Sum)',
    nameHe: 'נורמת 1 של מטריצה (סכום עמודה מקסימלי)',
    equation: '\\|A\\|_1 = \\max_{1 \\leq j \\leq n} \\sum_{i=1}^m |a_{ij}|',
    description: 'The induced 1-norm of a matrix, calculated by finding the maximum absolute column sum across all columns.',
    descriptionHe: 'הנורמה המושרית 1 של מטריצה, המחושבת על ידי מציאת הסכום המוחלט המקסימלי של רכיבי עמודה כלשהי במטריצה.'
  },
  {
    id: 'f-nla-matrix-inf',
    courseId: 'nla',
    category: 'Matrix & Vector Norms',
    categoryHe: 'נורמות של מטריצות ווקטורים',
    name: 'Matrix ∞-Norm (Max Row Sum)',
    nameHe: 'נורמת אינסוף של מטריצה (סכום שורה מקסימלי)',
    equation: '\\|A\\|_\\infty = \\max_{1 \\leq i \\leq m} \\sum_{j=1}^n |a_{ij}|',
    description: 'The induced infinity-norm of a matrix, calculated by finding the maximum absolute row sum across all rows.',
    descriptionHe: 'הנורמה המושרית אינסוף של מטריצה, המחושבת על ידי מציאת הסכום המוחלט המקסימלי של רכיבי שורה כלשהי במטריצה.'
  },
  {
    id: 'f-nla-matrix-2',
    courseId: 'nla',
    category: 'Matrix & Vector Norms',
    categoryHe: 'נורמות של מטריצות ווקטורים',
    name: 'Matrix 2-Norm (Spectral Norm)',
    nameHe: 'נורמת 2 של מטריצה (נורמה ספקטרלית)',
    equation: '\\|A\\|_2 = \\sqrt{\\lambda_{\\max}(A^T A)} = \\sigma_{\\max}(A)',
    description: 'The induced 2-norm of a matrix. Equals the maximum singular value of A, which is the square root of the maximum eigenvalue of A^T A.',
    descriptionHe: 'הנורמה המושרית 2 של מטריצה. שווה לערך הסינגולרי המקסימלי של A, שהוא שורש הערך העצמי המקסימלי של המטריצה A^T A.'
  },
  {
    id: 'f-nla-matrix-f',
    courseId: 'nla',
    category: 'Matrix & Vector Norms',
    categoryHe: 'נורמות של מטריצות ווקטורים',
    name: 'Frobenius Matrix Norm',
    nameHe: 'נורמת פרובניוס של מטריצה',
    equation: '\\|A\\|_F = \\sqrt{\\sum_{i=1}^m \\sum_{j=1}^n |a_{ij}|^2} = \\sqrt{\\text{trace}(A^* A)}',
    description: 'An entry-wise norm analogous to the vector 2-norm. Not an induced matrix norm, but sub-multiplicative.',
    descriptionHe: 'נורמה המחושבת על פי איברי המטריצה, בדומה לנורמת 2 של וקטור. אינה נורמה מושרית, אך מקיימת את תכונת הסאב-מולטיפליקטיביות.'
  },
  {
    id: 'f-nla-cauchy-schwarz',
    courseId: 'nla',
    category: 'Matrix & Vector Norms',
    categoryHe: 'נורמות של מטריצות ווקטורים',
    name: 'Cauchy-Schwarz Inequality',
    nameHe: 'אי-שוויון קושי-שוורץ',
    equation: '|\\langle u, v \\rangle| \\leq \\|u\\|_2 \\cdot \\|v\\|_2',
    description: 'Fundamental bound on the inner product of two vectors. Equality holds iff u and v are linearly dependent (parallel).',
    descriptionHe: 'חסם יסודי על מכפלה פנימית של שני וקטורים. שוויון מתקיים אם ורק אם u ו-v תלויים ליניארית (מקבילים).'
  },
  {
    id: 'f-nla-submult',
    courseId: 'nla',
    category: 'Matrix & Vector Norms',
    categoryHe: 'נורמות של מטריצות ווקטורים',
    name: 'Sub-multiplicativity Property',
    nameHe: 'תכונת הסאב-מולטיפליקטיביות',
    equation: '\\|AB\\| \\leq \\|A\\| \\cdot \\|B\\|',
    description: 'Any induced matrix norm satisfies sub-multiplicativity: the norm of the product is at most the product of the norms.',
    descriptionHe: 'כל נורמת מטריצה מושרית מקיימת סאב-מולטיפליקטיביות: נורמת המכפלה אינה עולה על מכפלת הנורמות של המטריצות בנפרד.'
  },
  {
    id: 'f-nla-spectral-radius',
    courseId: 'nla',
    category: 'Matrix & Vector Norms',
    categoryHe: 'נורמות של מטריצות ווקטורים',
    name: 'Spectral Radius',
    nameHe: 'רדיוס ספקטרלי',
    equation: '\\rho(A) = \\max_{1 \\leq i \\leq n} |\\lambda_i(A)| \\leq \\|A\\|',
    description: 'The largest eigenvalue in magnitude. Any induced matrix norm upper-bounds the spectral radius. Controls convergence of iterative methods.',
    descriptionHe: 'הערך העצמי הגדול ביותר בערכו המוחלט. כל נורמת מטריצה מושרית מהווה חסם עליון לרדיוס הספקטרלי. הרדיוס הספקטרלי שולט בקצב ההתכנסות של שיטות איטרטיביות.'
  },
  {
    id: 'f-nla-cond2',
    courseId: 'nla',
    category: 'Matrix & Vector Norms',
    categoryHe: 'נורמות של מטריצות ווקטורים',
    name: 'Condition Number via SVD',
    nameHe: 'מספר מצב באמצעות SVD',
    equation: '\\kappa_2(A) = \\frac{\\sigma_{\\max}(A)}{\\sigma_{\\min}(A)} = \\frac{\\lambda_{\\max}(A^T A)^{1/2}}{\\lambda_{\\min}(A^T A)^{1/2}}',
    description: 'The 2-norm condition number equals the ratio of largest to smallest singular values. For SPD matrices, κ₂ = λ_max/λ_min.',
    descriptionHe: 'מספר המצב בנורמת 2 שווה ליחס בין הערך הסינגולרי הגדול ביותר לקטן ביותר. עבור מטריצות סימטריות חיוביות לחלוטין (SPD), מספר המצב שווה ליחס בין הערך העצמי המקסימלי למינימלי.'
  },
  {
    id: 'f-nla-norm-equiv',
    courseId: 'nla',
    category: 'Matrix & Vector Norms',
    categoryHe: 'נורמות של מטריצות ווקטורים',
    name: 'Norm Equivalence Theorem',
    nameHe: 'משפט שקילות הנורמות',
    equation: 'c_1 \\|x\\|_b \\leq \\|x\\|_a \\leq c_2 \\|x\\|_b \\quad \\forall x \\in \\mathbb{R}^n',
    description: 'In finite dimensions, all norms are equivalent: convergence in one norm implies convergence in every other norm.',
    descriptionHe: 'במרחב מממד סופי, כל הנורמות שקולות טופולוגית: התכנסות סדרה לפי נורמה אחת מבטיחה התכנסות לאותו גבול בדיוק לפי כל נורמה אחרת.'
  },
  {
    id: 'f-nla-cond',
    courseId: 'nla',
    category: 'Matrix & Vector Norms',
    categoryHe: 'נורמות של מטריצות ווקטורים',
    name: 'Matrix Condition Number',
    nameHe: 'מספר מצב של מטריצה',
    equation: '\\kappa(A) = \\|A\\| \\cdot \\|A^{-1}\\|',
    description: 'Quantifies the maximum relative sensitivity of the solution x in Ax=b to input perturbations. κ(A) ≥ 1, with κ(A) = ∞ if singular.',
    descriptionHe: 'מכמת את הרגישות היחסית המקסימלית של הפתרון x במערכת Ax=b לשינויים והפרעות בקלטים. מספר המצב גדול או שווה ל-1, ושווה לאינסוף אם המטריצה אינה הפיכה.'
  },
  {
    id: 'f-nla-relative-error',
    courseId: 'nla',
    category: 'Matrix & Vector Norms',
    categoryHe: 'נורמות של מטריצות ווקטורים',
    name: 'Relative Error Propagation Bound',
    nameHe: 'חסם התפשטות השגיאה היחסית',
    equation: '\\frac{\\|\\delta x\\|}{\\|x\\|} \\leq \\kappa(A) \\frac{\\|\\delta b\\|}{\\|b\\|}',
    description: 'Rigorous mathematical proof bound establishing that the relative error in the output solution is bounded by the condition number times input relative error.',
    descriptionHe: 'חסם מתמטי ריגורוזי המוכיח כי השגיאה היחסית בוקטור הפתרון חסומה מלמעלה על ידי מכפלת מספר המצב של המטריצה בשגיאה היחסית של וקטור הקלט.'
  },
  {
    id: 'f-nla-lu',
    courseId: 'nla',
    category: 'Direct Solvers',
    categoryHe: 'פותרי מערכות ישירים',
    name: 'Naïve LU Decomposition',
    nameHe: 'פירוק LU בסיסי',
    equation: 'A = L \\cdot U',
    description: 'Factors square matrix into unit lower triangular L (1s on diagonal) and upper triangular U. Exists iff all leading principal minors are non-singular.',
    descriptionHe: 'מפרק מטריצה ריבועית למכפלה של מטריצה משולשית תחתונה L (בעלת איברי 1 באלכסון) ומטריצה משולשית עליונה U. קיים אם ורק אם כל המינורים הראשיים המובילים הפיכים.'
  },
  {
    id: 'f-nla-pivoting',
    courseId: 'nla',
    category: 'Direct Solvers',
    categoryHe: 'פותרי מערכות ישירים',
    name: 'LU Decomposition with Row Pivoting',
    nameHe: 'פירוק LU עם בחירת ציר (Row Pivoting)',
    equation: 'P \\cdot A = L \\cdot U',
    description: 'Introduces a permutation matrix P to swap rows, placing the largest absolute column element on the diagonal to enforce stability.',
    descriptionHe: 'משלב מטריצת תמורה P כדי להחליף שורות, ובכך מציב את האיבר הגדול ביותר בערכו המוחלט בעמודה הנוכחית על האלכסון כדי להבטיח יציבות נומרית.'
  },
  {
    id: 'f-nla-schur-complement',
    courseId: 'nla',
    category: 'Direct Solvers',
    categoryHe: 'פותרי מערכות ישירים',
    name: 'Schur Complement in Cholesky Step',
    nameHe: 'משלים שור בצעד חולסקי',
    equation: 'S = A_{\\text{sub}} - \\frac{v v^T}{\\alpha}',
    description: 'The reduced submatrix computed in Cholesky elimination. If A is Symmetric Positive Definite, its Schur complement is guaranteed SPD.',
    descriptionHe: 'תת-המטריצה המוקטנת המחושבת בתהליך האלמינציה של חולסקי. אם המטריצה A היא סימטרית חיובית לחלוטין (SPD), מובטח כי משלים שור שלה הוא גם SPD.'
  },
  {
    id: 'f-nla-cholesky',
    courseId: 'nla',
    category: 'Direct Solvers',
    categoryHe: 'פותרי מערכות ישירים',
    name: 'Cholesky Factorization (LLᵀ)',
    nameHe: 'פירוק חולסקי (LLᵀ)',
    equation: 'A = L \\cdot L^T',
    description: 'Unique, highly stable factorization for Symmetric Positive Definite matrices. Requires only (1/3)n^3 flops—exactly half the cost of LU.',
    descriptionHe: 'פירוק ייחודי ויציב ביותר למטריצות סימטריות חיוביות לחלוטין (SPD). דורש רק חצי מכמות הפעולות של פירוק LU רגיל, כלומר כשליש n בשלישית פעולות.'
  },
  {
    id: 'f-nla-ls-normal',
    courseId: 'nla',
    category: 'Least Squares Minimization',
    categoryHe: 'מזעור בריבועים מינימליים',
    name: 'Least Squares Normal Equations',
    nameHe: 'המשוואות הנורמליות בריבועים מינימליים',
    equation: 'A^T A x = A^T b',
    description: 'The system that solves full-rank least squares problems min_x ||Ax - b||_2. Arises from equating the gradient of the error residual to zero.',
    descriptionHe: 'מערכת המשוואות הפותרת בעיות ריבועים מינימליים בדרגה מלאה. נובעת מהשוואת הגרדיאנט של פונקציית הפסד השאריות הריבועית לאפס.'
  },
  {
    id: 'f-nla-wls',
    courseId: 'nla',
    category: 'Least Squares Minimization',
    categoryHe: 'מזעור בריבועים מינימליים',
    name: 'Weighted Least Squares Solution',
    nameHe: 'פתרון ריבועים מינימליים משוקללים',
    equation: 'x_{\\text{WLS}} = (A^T W A)^{-1} A^T W b',
    description: 'Solves the weighted system min_x ||Ax - b||_W^2 where diagonal matrix W holds inverse variance weights for data points.',
    descriptionHe: 'פותר מערכת ריבועים מינימליים משוקללת שבה מטריצה אלכסונית W מכילה משקלים התואמים להופכי השונות של נקודות המידע.'
  },
  {
    id: 'f-nla-tikhonov',
    courseId: 'nla',
    category: 'Least Squares Minimization',
    categoryHe: 'מזעור בריבועים מינימליים',
    name: 'Regularized Least Squares (Tikhonov)',
    nameHe: 'ריבועים מינימליים עם רגולריזציה (טיכונוב)',
    equation: '(A^T A + \\mu I) x = A^T b',
    description: 'Solves regularized least squares min_x (1/2)||Ax - b||^2 + (μ/2)||x||^2. Adds penalty factor μ > 0 to stabilize ill-posed matrices.',
    descriptionHe: 'פותר בעיית ריבועים מינימליים עם איבר ענישה. מוסיף איבר רגולריזציה לקבלת פתרון יציב וייחודי גם עבור מערכות לא הפיכות או בעלות מספר מצב גרוע.'
  },
  {
    id: 'f-nla-ls-orthogonality',
    courseId: 'nla',
    category: 'Least Squares Minimization',
    categoryHe: 'מזעור בריבועים מינימליים',
    name: 'LS Orthogonality Property',
    nameHe: 'תכונת האורתוגונליות של ריבועים מינימליים',
    equation: 'A^T r = A^T(b - A\\hat{x}) = 0',
    description: 'The residual r = b - Ax̂ of the LS solution is orthogonal to all columns of A. This is the geometric meaning of the normal equations.',
    descriptionHe: 'וקטור השארית r של פתרון הריבועים המינימליים ניצב לחלוטין לכל אחת מעמודות המטריצה A. זהו הפירוש הגיאומטרי של המשוואות הנורמליות.'
  },
  {
    id: 'f-nla-grad-rules',
    courseId: 'nla',
    category: 'Least Squares Minimization',
    categoryHe: 'מזעור בריבועים מינימליים',
    name: 'Key Gradient Rules for LS',
    nameHe: 'חוקי גרדיאנטים מרכזיים עבור LS',
    equation: '\\nabla_x(v^T x) = v, \\quad \\nabla_x(x^T M x) = (M + M^T)x',
    description: 'Fundamental matrix calculus identities used to derive the normal equations. For symmetric M, the quadratic gradient simplifies to 2Mx.',
    descriptionHe: 'זהויות יסוד של חשבון מטריצות ווקטורים המשמשות לגזירת המשוואות הנורמליות. עבור מטריצה סימטרית M, הגרדיאנט של התבנית הריבועית מתפשט ל-2Mx.'
  },
  {
    id: 'f-nla-gram-schmidt',
    courseId: 'nla',
    category: 'Orthogonalization & SVD',
    categoryHe: 'אורתוגונליזציה ופירוק SVD',
    name: 'Classical Gram-Schmidt Step',
    nameHe: 'צעד גרם-שמידט קלאסי',
    equation: 'u_k = v_k - \\sum_{i=1}^{k-1} \\frac{\\langle u_i, v_k \\rangle}{\\langle u_i, u_i \\rangle} u_i',
    description: 'Orthogonalizes vector v_k against previously computed orthogonal basis vectors u_1...u_{k-1}.',
    descriptionHe: 'מבצע אורתוגונליזציה לוקטור v_k על ידי חיסור ההטלים שלו על פני הוקטורים האורתוגונליים u_1...u_{k-1} שכבר חושבו קודם לכן.'
  },
  {
    id: 'f-nla-qr',
    courseId: 'nla',
    category: 'Orthogonalization & SVD',
    categoryHe: 'אורתוגונליזציה ופירוק SVD',
    name: 'QR Factorization',
    nameHe: 'פירוק QR',
    equation: 'A = Q \\cdot R',
    description: 'Factors m x n matrix A into orthogonal matrix Q (Q^T Q = I) and upper triangular R. Used for numerically stable least squares solvers.',
    descriptionHe: 'מפרק מטריצה A למכפלה של מטריצה אורתוגונלית Q ומטריצה משולשית עליונה R. משמש כבסיס לפתרון יציב ביותר של בעיות ריבועים מינימליים.'
  },
  {
    id: 'f-nla-svd-factor',
    courseId: 'nla',
    category: 'Orthogonalization & SVD',
    categoryHe: 'אורתוגונליזציה ופירוק SVD',
    name: 'Singular Value Decomposition (SVD)',
    nameHe: 'פירוק לערכים סינגולריים (SVD)',
    equation: 'A = U \\Sigma V^T = \\sum_{i=1}^r \\sigma_i u_i v_i^T',
    description: 'Decomposes any real m x n matrix A into left singular vectors U, singular values Σ, and right singular vectors V.',
    descriptionHe: 'מפרק כל מטריצה ממשית A למכפלת שלוש מטריצות: וקטורים סינגולריים שמאליים U, ערכים סינגולריים אלכסוניים Σ, ווקטורים סינגולריים ימניים V.'
  },
  {
    id: 'f-nla-eckart-young',
    courseId: 'nla',
    category: 'Orthogonalization & SVD',
    categoryHe: 'אורתוגונליזציה ופירוק SVD',
    name: 'Eckart-Young Spectral Error',
    nameHe: 'שגיאת קירוב ספקטרלית של אקארט-יאנג',
    equation: '\\min_{\\text{rank}(B) \\leq k} \\|A - B\\|_2 = \\|A - A_k\\|_2 = \\sigma_{k+1}',
    description: 'The optimal rank-k SVD approximation theorem showing the spectral-norm error equals the first omitted singular value.',
    descriptionHe: 'משפט הקירוב האופטימלי מדרגה k של אקארט-יאנג, המוכיח כי שגיאת הקירוב בנורמת 2 (ספקטרלית) שווה בדיוק לערך הסינגולרי הראשון שהושמט.'
  },
  {
    id: 'f-nla-spectral-decomp',
    courseId: 'nla',
    category: 'Orthogonalization & SVD',
    categoryHe: 'אורתוגונליזציה ופירוק SVD',
    name: 'Spectral Decomposition (Eigendecomposition)',
    nameHe: 'פירוק ספקטרלי (פירוק לערוצים עצמיים)',
    equation: 'A = U \\Lambda U^*, \\quad \\Lambda = \\text{diag}(\\lambda_1, ..., \\lambda_n)',
    description: 'For normal/Hermitian matrices: orthogonal eigenvectors form U, eigenvalues form Λ. For symmetric real matrices, all values are real.',
    descriptionHe: 'עבור מטריצות נורמליות/הרמיטיות: עמודות U הן הוקטורים העצמיים האורתוגונליים, והאלכסון של Λ מכיל את הערכים העצמיים המתאימים.'
  },
  {
    id: 'f-nla-svd-eigen',
    courseId: 'nla',
    category: 'Orthogonalization & SVD',
    categoryHe: 'אורתוגונליזציה ופירוק SVD',
    name: 'SVD-Eigenvalue Relationship',
    nameHe: 'הקשר בין פירוק SVD לערכים עצמיים',
    equation: 'A^T A = V \\Sigma^2 V^T \\implies \\sigma_i = \\sqrt{\\lambda_i(A^T A)}',
    description: 'Singular values are the square roots of eigenvalues of A^T A. V contains eigenvectors of A^T A, U contains eigenvectors of AA^T.',
    descriptionHe: 'הערכים הסינגולריים של מטריצה A הם שורשי הערכים העצמיים של המטריצה A^T A. המטריצה V מכילה את הוקטורים העצמיים של A^T A.'
  },
  {
    id: 'f-nla-pseudoinverse',
    courseId: 'nla',
    category: 'Orthogonalization & SVD',
    categoryHe: 'אורתוגונליזציה ופירוק SVD',
    name: 'Moore-Penrose Pseudo-inverse',
    nameHe: 'הפסאודו-הופכי של מור-פנרוז',
    equation: 'A^\\dagger = V \\Sigma^\\dagger U^T, \\quad (\\Sigma^\\dagger)_{ii} = \\begin{cases} 1/\\sigma_i & \\sigma_i \\neq 0 \\\\ 0 & \\sigma_i = 0 \\end{cases}',
    description: 'Generalized inverse via SVD. For full-rank A: A† = (A^T A)^{-1} A^T. For rank-deficient A, gives minimum-norm LS solution.',
    descriptionHe: 'אופרטור ההופכי המוכלל המחושב באמצעות פירוק SVD. עבור מטריצות בעלות דרגה מלאה, הפסאודו-הופכי מתכנס לנוסחה המוכרת. עבור דרגה חסרה, הוא נותן את פתרון הריבועים המינימליים בעל הנורמה המינימלית.'
  },
  {
    id: 'f-nla-ls-svd',
    courseId: 'nla',
    category: 'Orthogonalization & SVD',
    categoryHe: 'אורתוגונליזציה ופירוק SVD',
    name: 'Least Squares via SVD',
    nameHe: 'פתרון ריבועים מינימליים באמצעות SVD',
    equation: '\\Sigma \\hat{y} = U^T b, \\quad \\hat{x} = V \\hat{y}',
    description: 'Substituting A = UΣV^T into normal equations reduces LS to a trivial diagonal system. The most numerically stable LS approach.',
    descriptionHe: 'הצבת פירוק SVD לתוך משוואות הריבועים המינימליים מצמצמת את הבעיה למערכת אלכסונית פשוטה לפתרון. זוהי הדרך היציבה ביותר נומרית לפתרון בעיות LS.'
  },
  {
    id: 'f-nla-jacobi-split',
    courseId: 'nla',
    category: 'Iterative Solvers',
    categoryHe: 'פותרי מערכות איטרטיביים',
    name: 'Jacobi Iteration Step',
    nameHe: 'צעד איטרטיבי של שיטת יעקובי',
    equation: 'x^{(k+1)} = D^{-1}(L + U)x^{(k)} + D^{-1}b',
    description: 'Solves Ax=b by updating each coordinate independently based on the previous iteration vector values.',
    descriptionHe: 'פותר מערכות ליניאריות על ידי עדכון כל רכיב בוקטור הפתרון באופן בלתי תלוי, בהסתמך על ערכי הרכיבים מהאיטרציה הקודמת.'
  },
  {
    id: 'f-nla-gs-split',
    courseId: 'nla',
    category: 'Iterative Solvers',
    categoryHe: 'פותרי מערכות איטרטיביים',
    name: 'Gauss-Seidel Iteration Step',
    nameHe: 'צעד איטרטיבי של שיטת גאוס-סיידל',
    equation: 'x^{(k+1)} = (D - L)^{-1} U x^{(k)} + (D - L)^{-1} b',
    description: 'Improves convergence by using newly calculated elements immediately in the current iteration step.',
    descriptionHe: 'משפר את קצב ההתכנסות על ידי שימוש מיידי ברכיבים החדשים שכבר חושבו בצעד הנוכחי של אותה איטרציה.'
  },
  {
    id: 'f-nla-kahan-sor',
    courseId: 'nla',
    category: 'Iterative Solvers',
    categoryHe: 'פותרי מערכות איטרטיביים',
    name: "Kahan's SOR Spectral Radius Bound",
    nameHe: 'חסם הרדיוס הספקטרלי של כהאן לשיטת SOR',
    equation: '\\rho(T_\\omega) \\geq |\\omega - 1|',
    description: 'Mandatory convergence bound. Proves the iteration converges only if relaxation factor ω lies strictly between 0 and 2.',
    descriptionHe: 'חסם התכנסות מתמטי מחייב. מוכיח כי שיטת ההרפיה לשיעורין (SOR) יכולה להתכנס רק אם מקדם ההרפיה ω נמצא בטווח הפתוח שבין 0 ל-2.'
  },
  {
    id: 'f-nla-sor-weight',
    courseId: 'nla',
    category: 'Iterative Solvers',
    categoryHe: 'פותרי מערכות איטרטיביים',
    name: 'SOR Iteration Scheme',
    nameHe: 'אלגוריתם איטרטיבי SOR',
    equation: 'x_i^{(k+1)} = (1 - \\omega)x_i^{(k)} + \\frac{\\omega}{a_{ii}} \\left[ b_i - \\sum_{j \\lt i} a_{ij}x_j^{(k+1)} - \\sum_{j \\gt i} a_{ij}x_j^{(k)} \\right]',
    description: 'Accelerated relaxation solver governed by parameter ω. Ostrowski-Reich guarantees convergence for SPD systems iff 0 < ω < 2.',
    descriptionHe: 'שיטת פתרון מואצת המבוססת על שילוב מקדם משקל ω. משפט אוסטרובסקי-רייך מבטיח התכנסות עבור מטריצות SPD אם ורק אם מקדם ההרפיה ω גדול מ-0 וקטן מ-2.'
  },
  {
    id: 'f-nla-sor-optimal',
    courseId: 'nla',
    category: 'Iterative Solvers',
    categoryHe: 'פותרי מערכות איטרטיביים',
    name: 'Optimal SOR Parameter ω',
    nameHe: 'מקדם הרפיה אופטימלי ω לשיטת SOR',
    equation: '\\omega_{\\text{opt}} = \\frac{2}{1 + \\sqrt{1 - \\rho(T_J)^2}}',
    description: 'The optimal factor ω derived for structured matrices, reducing the iteration spectral radius and accelerating solve speeds.',
    descriptionHe: 'מקדם ההרפיה האופטימלי המחושב עבור מטריצות בעלות מבנה מוגדר, אשר ממזער את הרדיוס הספקטרלי של המטריצה האיטרטיבית ומאיץ את קצב הפתרון.'
  },
  {
    id: 'f-nla-general-iter',
    courseId: 'nla',
    category: 'Iterative Solvers',
    categoryHe: 'פותרי מערכות איטרטיביים',
    name: 'General Iterative Method',
    nameHe: 'סכמת פתרון איטרטיבית כללית',
    equation: 'x^{(k+1)} = x^{(k)} + M^{-1}(b - Ax^{(k)})',
    description: 'Unified framework: M is the preconditioner. Jacobi: M=D, GS: M=D-L, Richardson: M=cI. Error: e^{(k+1)} = (I - M^{-1}A)e^{(k)}.',
    descriptionHe: 'ארגז כלים מאוחד: המטריצה M משמשת כמתנה (Preconditioner). בשיטת יעקובי M=D, בגאוס-סיידל M=D-L. השגיאה בכל שלב מתפתחת לפי מטריצת המעבר (I - M^-1 A).'
  },
  {
    id: 'f-nla-convergence-factor',
    courseId: 'nla',
    category: 'Iterative Solvers',
    categoryHe: 'פותרי מערכות איטרטיביים',
    name: 'Convergence Factor Theorem',
    nameHe: 'משפט גורם ההתכנסות האסימפטוטי',
    equation: '\\lim_{k \\to \\infty} \\frac{\\|e^{(k+1)}\\|}{\\|e^{(k)}\\|} = \\rho(I - M^{-1}A)',
    description: 'The asymptotic convergence rate equals the spectral radius of the iteration matrix T = I - M^{-1}A. Converges iff ρ(T) < 1.',
    descriptionHe: 'קצב ההתכנסות האסימפטוטי של שיטה איטרטיבית שווה בדיוק לרדיוס הספקטרלי של מטריצת המעבר T. השיטה תתכנס לפתרון הנכון אם ורק אם רדיוס זה קטן מ-1.'
  },
  {
    id: 'f-nla-sd-optimal-alpha',
    courseId: 'nla',
    category: 'Iterative Solvers',
    categoryHe: 'פותרי מערכות איטרטיביים',
    name: 'Optimal SD Step Size & Convergence',
    nameHe: 'גודל צעד אופטימלי וקצב התכנסות של שיטת הירידה התלולה (SD)',
    equation: '\\alpha_{\\text{opt}} = \\frac{2}{\\lambda_{\\max} + \\lambda_{\\min}}, \\quad \\rho_{\\min} = \\frac{\\kappa(A) - 1}{\\kappa(A) + 1}',
    description: 'For SPD A, the best constant α gives convergence factor (κ-1)/(κ+1). High condition number → slow convergence.',
    descriptionHe: 'עבור מטריצת SPD, בחירת גודל צעד קבוע אופטימלי מניבה מקדם התכנסות התלוי ישירות במספר המצב של המטריצה. מספר מצב גבוה גורר התכנסות איטית מאוד (זיגזג).'
  },
  {
    id: 'f-nla-cg-convergence',
    courseId: 'nla',
    category: 'Iterative Solvers',
    categoryHe: 'פותרי מערכות איטרטיביים',
    name: 'CG Convergence Bound',
    nameHe: 'חסם התכנסות של שיטת הגרדיאנטים הצמודים (CG)',
    equation: '\\|x^* - x^{(k)}\\|_A \\leq 2 \\|x^* - x^{(0)}\\|_A \\left( \\frac{\\sqrt{\\kappa(A)} - 1}{\\sqrt{\\kappa(A)} + 1} \\right)^k',
    description: 'CG converges based on √κ(A) instead of κ(A), making it dramatically faster than SD. Converges in at most n iterations exactly.',
    descriptionHe: 'שיטת CG מתכנסת על בסיס שורש מספר המצב במקום מספר המצב עצמו, דבר ההופך אותה למהירה וחסונה בהרבה משיטת הירידה התלולה. מתכנסת תאורטית בתוך לכל היותר n צעדים.'
  },
  {
    id: 'f-nla-error-residual',
    courseId: 'nla',
    category: 'Iterative Solvers',
    categoryHe: 'פותרי מערכות איטרטיביים',
    name: 'Error vs Residual Vectors',
    nameHe: 'וקטור השגיאה מול וקטור השארית',
    equation: 'e^{(k)} = x^* - x^{(k)}, \\quad r^{(k)} = b - Ax^{(k)} = Ae^{(k)}',
    description: 'Error requires knowing x* (usually unknown). Residual is computable and related by r = Ae. Both converge to zero together.',
    descriptionHe: 'השגיאה מייצגת את המרחק מהפתרון האמיתי (שאינו ידוע מראש). השארית ניתנת לחישוב וקשורה לשגיאה באמצעות המשוואה r = Ae. שני הוקטורים שואפים לאפס יחד.'
  },
  {
    id: 'f-nla-power-method',
    courseId: 'nla',
    category: 'Eigenvalue Solvers',
    categoryHe: 'פותרי ערכים עצמיים',
    name: 'Power Method Vector Update',
    nameHe: 'שיטת החזקה למציאת וקטור עצמי דומיננטי',
    equation: 'x^{(k+1)} = \\frac{A x^{(k)}}{\\|A x^{(k)}\\|_2}',
    description: 'Isolates the dominant eigenvalue and its eigenvector. Convergence rate is governed strictly by the ratio |λ₂ / λ₁|.',
    descriptionHe: 'מבודדת את הערך העצמי הדומיננטי ביותר (הגדול ביותר בערכו המוחלט) ואת הוקטור העצמי המתאים לו. קצב ההתכנסות נקבע על ידי יחס הערכים העצמיים |λ₂ / λ₁|.'
  },
  {
    id: 'f-nla-rayleigh-quotient',
    courseId: 'nla',
    category: 'Eigenvalue Solvers',
    categoryHe: 'פותרי ערכים עצמיים',
    name: 'Rayleigh Quotient',
    nameHe: 'מנת ריילי',
    equation: '\\lambda^{(k)} \\approx R(A, x^{(k)}) = \\frac{(x^{(k)})^T A x^{(k)}}{(x^{(k)})^T x^{(k)}}',
    description: 'Computes highly accurate eigenvalue estimates from normalized eigenvector estimates.',
    descriptionHe: 'מחשבת אומדנים מדויקים ומהירים לערכים עצמיים מתוך וקטורים עצמיים מנורמלים.'
  },
  {
    id: 'f-nla-shifted-inverse',
    courseId: 'nla',
    category: 'Eigenvalue Solvers',
    categoryHe: 'פותרי ערכים עצמיים',
    name: 'Shifted Inverse Power Iteration',
    nameHe: 'שיטת החזקה ההפוכה עם הזזה (Shifted Inverse)',
    equation: 'x^{(k+1)} = \\frac{(A - \\sigma I)^{-1} x^{(k)}}{\\|(A - \\sigma I)^{-1} x^{(k)}\\|_2}',
    description: 'Isolates the eigenvalue closest to the shift value σ. Achieves rapid cubic convergence when combined with Rayleigh Quotient updates.',
    descriptionHe: 'מבודדת את הערך העצמי הקרוב ביותר לערך ההזזה סירקולר σ. משיגה קצב התכנסות קובי מהיר במיוחד בשילוב עם מנת ריילי.'
  },

  // ==================== OPT FORMULAS ====================
  {
    id: 'f-opt-optimality-1st',
    courseId: 'opt',
    category: 'Optimization Foundations',
    categoryHe: 'יסודות האופטימיזציה',
    name: 'First-Order Necessary Condition',
    nameHe: 'תנאי הכרחי מסדר ראשון (FNC)',
    equation: '\\nabla f(x^*) = 0',
    description: 'At any local minimum x* of a smooth unconstrained function, the gradient must vanish. This is necessary but not sufficient.',
    descriptionHe: 'בכל נקודת מינימום מקומי x* של פונקציה חלקה ללא אילוצים, הגרדיאנט חייב להתאפס. זהו תנאי הכרחי אך אינו מספיק.'
  },
  {
    id: 'f-opt-optimality-2nd',
    courseId: 'opt',
    category: 'Optimization Foundations',
    categoryHe: 'יסודות האופטימיזציה',
    name: 'Second-Order Sufficient Condition',
    nameHe: 'תנאי מספיק מסדר שני (SOSC)',
    equation: '\\nabla f(x^*) = 0 \\text{ and } \\nabla^2 f(x^*) \\succ 0 \\implies x^* \\text{ is a strict local min}',
    description: 'A stationary point with strictly positive definite Hessian is guaranteed to be a strict local minimum.',
    descriptionHe: 'נקודה סטציונרית שבה מטריצת ההסיאן היא חיובית לחלוטין מובטחת להיות נקודת מינימום מקומי קשיח.'
  },
  {
    id: 'f-opt-strongly-convex',
    courseId: 'opt',
    category: 'Optimization Foundations',
    categoryHe: 'יסודות האופטימיזציה',
    name: 'Strongly Convex Function',
    nameHe: 'פונקציה קמורה חזק',
    equation: 'f(y) \\geq f(x) + \\nabla f(x)^T(y-x) + \\frac{\\mu}{2}\\|y-x\\|^2, \\quad \\mu \\gt 0',
    description: 'Stronger than convexity: guarantees a unique global minimum and linear convergence rate for gradient descent.',
    descriptionHe: 'תנאי חזק מקמירות רגילה: מבטיח קיום של נקודת מינימום גלובלי יחידה וקצב התכנסות ליניארי מובטח עבור שיטת ירידת הגרדיאנט.'
  },
  {
    id: 'f-opt-taylor',
    courseId: 'opt',
    category: 'Optimization Foundations',
    categoryHe: 'יסודות האופטימיזציה',
    name: 'Multivariate Taylor Expansion',
    nameHe: 'פיתוח טיילור רב-ממדי',
    equation: 'f(x + \\epsilon) = f(x) + \\langle \\nabla f(x), \\epsilon \\rangle + \\frac{1}{2} \\langle \\epsilon, \\nabla^2 f(x) \\epsilon \\rangle + O(\\|\\epsilon\\|^3)',
    description: 'Local quadratic model of smooth function f around point x. Forms the analytical basis for all Newton and gradient descent solvers.',
    descriptionHe: 'מודל ריבועי מקומי של פונקציה חלקה f בסביבת נקודה x. מהווה את הבסיס האנליטי לכל פותרי ניוטון וירידת הגרדיאנט.'
  },
  {
    id: 'f-opt-jacobian',
    courseId: 'opt',
    category: 'Optimization Foundations',
    categoryHe: 'יסודות האופטימיזציה',
    name: 'Jacobian Matrix Definition',
    nameHe: 'הגדרת מטריצת היעקוביאן',
    equation: 'J_{ij} = \\frac{\\partial f_i}{\\partial x_j} \\implies \\delta f \\approx J \\epsilon',
    description: 'The first-order partial derivative matrix of a vector-valued function f: R^n -> R^m. Gathers gradient row vectors.',
    descriptionHe: 'מטריצת הנגזרות החלקיות מסדר ראשון של פונקציה וקטורית. מאגדת את וקטורי הגרדיאנט של פונקציות הרכיב.'
  },
  {
    id: 'f-opt-convex-func',
    courseId: 'opt',
    category: 'Optimization Foundations',
    categoryHe: 'יסודות האופטימיזציה',
    name: 'Convex Function Algebraic Definition',
    nameHe: 'הגדרה אלגברית של פונקציה קמורה',
    equation: 'f( \\theta x + (1 - \\theta) y ) \\leq \\theta f(x) + (1 - \\theta) f(y)',
    description: 'A function is convex over region Ω if its chord connecting any two points lies completely above its graph.',
    descriptionHe: 'פונקציה מוגדרת כקמורה מעל קבוצה קמורה Ω אם מיתר המחבר כל שתי נקודות על גרף הפונקציה נמצא כולו מעל או על הגרף.'
  },
  {
    id: 'f-opt-convex-diff1',
    courseId: 'opt',
    category: 'Optimization Foundations',
    categoryHe: 'יסודות האופטימיזציה',
    name: 'First-Order Convexity Condition',
    nameHe: 'תנאי קמירות מסדר ראשון',
    equation: 'f(x_1) \\geq f(x_2) + \\langle \\nabla f(x_2), x_1 - x_2 \\rangle',
    description: 'A continuously differentiable function is convex iff its linear tangent planes lie everywhere below its graph.',
    descriptionHe: 'פונקציה גזירה ברציפות היא קמורה אם ורק אם המישורים המשיקים לה נמצאים בכל מקום מתחת לגרף הפונקציה.'
  },
  {
    id: 'f-opt-convex-diff2',
    courseId: 'opt',
    category: 'Optimization Foundations',
    categoryHe: 'יסודות האופטימיזציה',
    name: 'Second-Order Convexity Condition',
    nameHe: 'תנאי קמירות מסדר שני',
    equation: '\\nabla^2 f(x) \\succeq 0 \\quad \\forall x \\in \\Omega',
    description: 'A twice continuously differentiable function is convex iff its Hessian matrix is Positive Semi-Definite everywhere.',
    descriptionHe: 'פונקציה הגזירה פעמיים ברציפות היא קמורה אם ורק אם מטריצת ההסיאן שלה היא אי-שלילית לחלוטין (PSD) בכל תחום הגדרתה.'
  },
  {
    id: 'f-opt-descent-direction',
    courseId: 'opt',
    category: 'Unconstrained Optimization',
    categoryHe: 'אופטימיזציה ללא אילוצים',
    name: 'Descent Direction Condition',
    nameHe: 'תנאי כיוון ירידה',
    equation: '\\langle \\nabla f(x^{(k)}), d \\rangle \\lt 0 \\implies d = -M \\nabla f(x^{(k)}) \\quad (M \\succ 0)',
    description: 'Establishes that vector d is a descent direction if its inner product with the gradient is negative. Any positive-definite scaling M guarantees this.',
    descriptionHe: 'קובע כי וקטור d הוא כיוון ירידה אם המכפלה הפנימית שלו עם הגרדיאנט היא שלילית. כפל במטריצה חיובית לחלוטין M מבטיח זאת תמיד.'
  },
  {
    id: 'f-opt-gd',
    courseId: 'opt',
    category: 'Unconstrained Optimization',
    categoryHe: 'אופטימיזציה ללא אילוצים',
    name: 'Gradient Descent Iteration',
    nameHe: 'שיטת ירידת הגרדיאנט (GD)',
    equation: 'x_{k+1} = x_k - \\alpha_k \\nabla f(x_k)',
    description: 'Iterative update taking steps in the opposite direction of the local gradient. Converges linearly to a local minimum.',
    descriptionHe: 'אלגוריתם איטרטיבי המקדם את הפתרון בכיוון הפוך לגרדיאנט המקומי. השיטה מתכנסת בקצב ליניארי לנקודת מינימום מקומי.'
  },
  {
    id: 'f-opt-newton',
    courseId: 'opt',
    category: 'Unconstrained Optimization',
    categoryHe: 'אופטימיזציה ללא אילוצים',
    name: "Newton's Optimization Step",
    nameHe: 'צעד אופטימיזציה של שיטת ניוטון',
    equation: 'd_N = -(\\nabla^2 f(x_k))^{-1} \\nabla f(x_k)',
    description: 'The search direction computed by minimizing the second-order Taylor expansion. Near local minima, it achieves quadratic convergence.',
    descriptionHe: 'כיוון החיפוש המחושב על ידי מזעור המודל הריבועי (פיתוח טיילור מסדר שני). בסביבת נקודת מינימום, השיטה משיגה קצב התכנסות ריבועי (מהיר מאוד).'
  },
  {
    id: 'f-opt-armijo',
    courseId: 'opt',
    category: 'Unconstrained Optimization',
    categoryHe: 'אופטימיזציה ללא אילוצים',
    name: 'Armijo Backtracking Line Search',
    nameHe: 'חיפוש קו לא-מדויק עם תנאי ארמיחו',
    equation: 'f(x^{(k)} + \\alpha_j d^{(k)}) \\leq f(x^{(k)}) + c \\alpha_j \\langle \\nabla f, d^{(k)} \\rangle',
    description: 'Standard backtracking rule to find step size α. Requires sufficient decrease. Employs factor β in (0, 1) and small scalar c.',
    descriptionHe: 'אלגוריתם חיפוש קו למציאת גודל צעד אופטימלי α. דורש ירידה מספקת בערך הפונקציה בהתאם לתנאי ארמיחו, תוך שימוש במקדם קיטון β.'
  },
  {
    id: 'f-opt-cd',
    courseId: 'opt',
    category: 'Unconstrained Optimization',
    categoryHe: 'אופטימיזציה ללא אילוצים',
    name: 'Coordinate Descent Step',
    nameHe: 'צעד של שיטת ירידת קואורדינטות (CD)',
    equation: 'x_i^{(k+1)} \\leftarrow \\arg\\min_{x_i} f(x_1^{(k+1)}, ..., x_i, ..., x_n^{(k)})',
    description: 'Iteratively minimizes the objective along one coordinate axis at a time. Easy to apply when 1-D minimization has closed forms.',
    descriptionHe: 'ממזערת את פונקציית המטרה על ידי עדכון איטרטיבי לאורך ציר קואורדינטה בודד בכל פעם. קלה מאוד ליישום כאשר לבעיית המזעור החד-ממדית יש פתרון סגור.'
  },
  {
    id: 'f-opt-gauss-newton',
    courseId: 'opt',
    category: 'Unconstrained Optimization',
    categoryHe: 'אופטימיזציה ללא אילוצים',
    name: 'Gauss-Newton Search Direction',
    nameHe: 'כיוון חיפוש של שיטת גאוס-ניוטון',
    equation: 'd_{\\text{GN}} = -(J^T J)^{-1} J^T (f(\\theta) - y_{\\text{obs}})',
    description: 'Approximates the Hessian as J^T J to solve non-linear least squares. Bypasses the costly second-derivative computations of Newton.',
    descriptionHe: 'מקרבת את מטריצת ההסיאן על ידי J^T J לצורך פתרון בעיות ריבועים מינימליים לא-ליניאריים. עוקפת את הצורך בחישוב נגזרות שניות יקרות.'
  },
  {
    id: 'f-opt-levenberg',
    courseId: 'opt',
    category: 'Unconstrained Optimization',
    categoryHe: 'אופטימיזציה ללא אילוצים',
    name: 'Levenberg-Marquardt Direction',
    nameHe: 'כיוון חיפוש של שיטת לבנברג-מרקוורדט',
    equation: 'd_{\\text{LM}} = -(J^T J + \\mu I)^{-1} J^T (f(\\theta) - y_{\\text{obs}})',
    description: 'Adds a damping parameter μ > 0 to Gauss-Newton, stabilizing the system when the Jacobian is ill-conditioned or low-rank.',
    descriptionHe: 'מוסיפה פרמטר ריסון μ > 0 לשיטת גאוס-ניוטון, ובכך מייצבת את המערכת כאשר היעקוביאן סובל ממספר מצב גרוע או מדרגה חסרה.'
  },
  {
    id: 'f-opt-irls',
    courseId: 'opt',
    category: 'Unconstrained Optimization',
    categoryHe: 'אופטימיזציה ללא אילוצים',
    name: 'IRLS Weight Update (ℓp norm)',
    nameHe: 'עדכון משקלים בשיטת IRLS (עבור נורמת ℓp)',
    equation: 'w_i^{(k)} = \\left( | a_i^T x^{(k)} - b_i | + \\epsilon \\right)^{p-2}',
    description: 'Iterative weight updates to solve non-quadratic norm minimizations via a sequence of diagonally weighted least squares problems.',
    descriptionHe: 'שיטת עדכון משקלים איטרטיבית לפתרון בעיות מזעור של נורמות לא-ריבועיות באמצעות פתרון סדרת בעיות ריבועים מינימליים משוקללים באלכסון.'
  },
  {
    id: 'f-opt-verification',
    courseId: 'opt',
    category: 'Unconstrained Optimization',
    categoryHe: 'אופטימיזציה ללא אילוצים',
    name: 'Gradient Taylor Verification Test',
    nameHe: 'בדיקת אימות גרדיאנט באמצעות טיילור',
    equation: '\\lim_{\\epsilon \\to 0} \\frac{|f(x + \\epsilon d) - f(x) - \\epsilon \\langle \\nabla f, d \\rangle|}{\\epsilon^2} = \\frac{1}{2} |\\langle d, \\nabla^2 f(x) d \\rangle|',
    description: 'Numerical test verifying gradient implementations. The error between the function difference and gradient approximation must decay quadratically.',
    descriptionHe: 'מבחן נומרי המאמת נכונות של חישוב גרדיאנטים. השארית בין הפרש ערכי הפונקציה לקירוב הליניארי חייבת להצטמצם בקצב ריבועי ככל שגודל הצעד שואף לאפס.'
  },
  {
    id: 'f-opt-lagrange',
    courseId: 'opt',
    category: 'Constrained Optimization',
    categoryHe: 'אופטימיזציה עם אילוצים',
    name: 'Lagrangian (Equality Constraints)',
    nameHe: 'פונקציית הלגראנז\'יאן (לאילוצי שוויון)',
    equation: 'L(x, \\mu) = f(x) + \\sum_{i=1}^m \\mu_i h_i(x)',
    description: 'Mathematical objective combining f(x) and constraints h_i(x) = 0. Optimality requires finding critical points of L.',
    descriptionHe: 'פונקציה מתמטית המשלבת את פונקציית המטרה f(x) עם אילוצי השוויון h_i(x)=0. חיפוש נקודות אופטימליות שקול למציאת נקודות קריטיות של הלגראנז\'יאן.'
  },
  {
    id: 'f-opt-kkt-stationarity',
    courseId: 'opt',
    category: 'Constrained Optimization',
    categoryHe: 'אופטימיזציה עם אילוצים',
    name: 'KKT Stationarity Condition',
    nameHe: 'תנאי הסטציונריות של KKT',
    equation: '\\nabla f(x^*) + \\sum_{i=1}^p \\lambda_i \\nabla g_i(x^*) + \\sum_{j=1}^m \\mu_j \\nabla h_j(x^*) = 0',
    description: 'Enforces that the gradient of the Lagrangian vanishes, meaning the objective gradient is a linear combination of constraint gradients.',
    descriptionHe: 'דורש כי הגרדיאנט של פונקציית הלגראנז\'יאן יתאפס בנקודה האופטימלית, כלומר גרדיאנט פונקציית המטרה מהווה צירוף ליניארי של גרדיאנטים של האילוצים.'
  },
  {
    id: 'f-opt-kkt-slackness',
    courseId: 'opt',
    category: 'Constrained Optimization',
    categoryHe: 'אופטימיזציה עם אילוצים',
    name: 'KKT Complementary Slackness',
    nameHe: 'תנאי משלימי של KKT (Complementary Slackness)',
    equation: '\\lambda_i \\cdot g_i(x^*) = 0 \\quad \\forall i=1...p',
    description: 'Guarantees that active constraints lie on the boundary (g_i = 0), and inactive constraints have no influence (multiplier λ_i = 0).',
    descriptionHe: 'מבטיח כי עבור אילוצים פעילים מתקיים g_i = 0, בעוד שעבור אילוצים לא פעילים כופל לגראנז\' המתאים λ_i שווה לאפס (אין להם השפעה על הפתרון).'
  },
  {
    id: 'f-opt-kkt-dual',
    courseId: 'opt',
    category: 'Constrained Optimization',
    categoryHe: 'אופטימיזציה עם אילוצים',
    name: 'KKT Dual Feasibility',
    nameHe: 'תנאי קבילות דואלית של KKT',
    equation: '\\lambda_i \\geq 0 \\quad \\forall i=1...p',
    description: 'Enforces that Lagrange multipliers associated with inequality constraints are non-negative, preserving the minimization direction.',
    descriptionHe: 'מבטיח כי כופלי לגראנז\' השייכים לאילוצי אי-שוויון יהיו אי-שליליים, דבר השומר על כיוון המזעור הנכון במרחב האילוצים.'
  },
  {
    id: 'f-opt-log-barrier',
    courseId: 'opt',
    category: 'Constrained Optimization',
    categoryHe: 'אופטימיזציה עם אילוצים',
    name: 'Logarithmic Barrier Function',
    nameHe: 'פונקציית מחסום לוגריתמית',
    equation: 'B(x, \\mu) = f(x) - \\mu \\sum_{i=1}^p \\ln(-g_i(x))',
    description: 'An interior point penalty solver. The log term acts as a barrier that approaches infinity as x approaches the constraint boundaries.',
    descriptionHe: 'שיטת פתרון מסוג נקודת פנים. פונקציית הלוגריתם מתנהגת כמחסום השואף לאינסוף ככל שנקודת הפתרון מתקרבת לגבול האילוצים מבפנים.'
  },
  {
    id: 'f-opt-projected-gd',
    courseId: 'opt',
    category: 'Constrained Optimization',
    categoryHe: 'אופטימיזציה עם אילוצים',
    name: 'Projected Gradient Descent Step',
    nameHe: 'צעד של שיטת ירידת גרדיאנט מוטלת (Projected GD)',
    equation: 'x^{(k+1)} = P_{\\Omega} \\left( x^{(k)} - \\alpha^{(k)} \\nabla f(x^{(k)}) \\right)',
    description: 'Iterates like standard gradient descent, but projects the resulting vector back onto the feasible region boundary after each step.',
    descriptionHe: 'מקדמת את הפתרון כמו שיטת ירידת גרדיאנט רגילה, אך מטילה את הוקטור המתקבל חזרה לתוך התחום הקביל Ω בסיום כל שלב.'
  },
  {
    id: 'f-opt-penalty-method',
    courseId: 'opt',
    category: 'Constrained Optimization',
    categoryHe: 'אופטימיזציה עם אילוצים',
    name: 'Quadratic Penalty Method',
    nameHe: 'שיטת הקנס הריבועי (Quadratic Penalty)',
    equation: '\\min_x \\left[ f(x) + \\mu \\sum_j (c^{\\text{eq}}_j(x))^2 + \\mu \\sum_l (\\max\\{0, c^{\\text{ieq}}_l(x)\\})^2 \\right]',
    description: 'Converts constrained problem to unconstrained by penalizing constraint violations. As μ → ∞, the solution approaches the true constrained optimum.',
    descriptionHe: 'הופכת בעיה עם אילוצים לבעיה ללא אילוצים על ידי הוספת איבר ענישה על הפרות אילוצים. ככל שפרמטר הקנס μ שואף לאינסוף, הפתרון מתכנס לאופטימום האמיתי.'
  },
  {
    id: 'f-opt-licq',
    courseId: 'opt',
    category: 'Constrained Optimization',
    categoryHe: 'אופטימיזציה עם אילוצים',
    name: 'LICQ — Constraint Qualification',
    nameHe: 'תנאי LICQ (תנאי אי-תלות ליניארית של אילוצים)',
    equation: '\\text{LICQ holds at } x^* \\iff \\text{rank}(J_{\\text{eq}}(x^*)) = m_{\\text{eq}}',
    description: 'Linear Independence Constraint Qualification: constraint gradients are linearly independent at x*. Guarantees existence of unique Lagrange multipliers.',
    descriptionHe: 'תנאי אי-תלות ליניארית של אילוצים פעילים בנקודה האופטימלית x*. מבטיח קיום של כופלי לגראנז\' ייחודיים ויציבים.'
  },
  {
    id: 'f-opt-lagrangian-general',
    courseId: 'opt',
    category: 'Constrained Optimization',
    categoryHe: 'אופטימיזציה עם אילוצים',
    name: 'General Lagrangian Function',
    nameHe: 'פונקציית לגראנז\'יאן כללית',
    equation: 'L(x, \\lambda^{\\text{eq}}, \\lambda^{\\text{ieq}}) = f(x) + (\\lambda^{\\text{eq}})^T c^{\\text{eq}}(x) + (\\lambda^{\\text{ieq}})^T c^{\\text{ieq}}(x)',
    description: 'Full Lagrangian combining objective with both equality and inequality constraints. KKT conditions are stationary points of this function.',
    descriptionHe: 'פונקציית לגראנז\'יאן מלאה המשלבת את פונקציית המטרה עם אילוצי שוויון ואי-שוויון. תנאי KKT מתקבלים מתוך חיפוש נקודות סדל של פונקציה זו.'
  },
  {
    id: 'f-opt-2nd-order-constrained',
    courseId: 'opt',
    category: 'Constrained Optimization',
    categoryHe: 'אופטימיזציה עם אילוצים',
    name: '2nd-Order Sufficient Condition (Constrained)',
    nameHe: 'תנאי מספיק מסדר שני עם אילוצים',
    equation: 'y^T \\nabla^2_x L(x^*, \\lambda^*) y \\gt 0 \\quad \\forall y \\neq 0 \\text{ s.t. } J_{\\text{eq}} y = 0',
    description: 'At a KKT point, if the Hessian of the Lagrangian is positive definite on the constraint null-space, then x* is a strict local minimum.',
    descriptionHe: 'בנקודת KKT, אם מטריצת ההסיאן של הלגראנז\'יאן היא חיובית לחלוטין מעל מרחב האפס (Null space) של היעקוביאן של האילוצים הפעילים, אזי x* מובטחת להיות נקודת מינימום מקומי קשיח.'
  },
  {
    id: 'f-opt-active-set',
    courseId: 'opt',
    category: 'Constrained Optimization',
    categoryHe: 'אופטימיזציה עם אילוצים',
    name: 'Active Set at a Feasible Point',
    nameHe: 'קבוצה פעילה בנקודה קבילה',
    equation: '\\mathcal{A}(x) = \\{ l : c^{\\text{ieq}}_l(x) = 0 \\}',
    description: 'The set of inequality constraints satisfied with equality at x. Active constraints act like equality constraints; inactive ones have multiplier = 0.',
    descriptionHe: 'אוסף אילוצי האי-שוויון המתקיימים עם שוויון בנקודה x. אילוצים פעילים מתנהגים כאילוצי שוויון לכל דבר, בעוד שלאילוצים שאינם פעילים יש כופל שווה לאפס.'
  },
  {
    id: 'f-opt-box-projection',
    courseId: 'opt',
    category: 'Constrained Optimization',
    categoryHe: 'אופטימיזציה עם אילוצים',
    name: 'Box-Constraint Projection',
    nameHe: 'היטל על אילוצי קופסה/תיבה',
    equation: 'x^{(k+1)}_i = \\begin{cases} a_i & z_i \\lt a_i \\\\ b_i & z_i \\gt b_i \\\\ z_i & \\text{otherwise} \\end{cases}, \\quad z = x^{(k)} - \\alpha \\nabla f',
    description: 'Projected SD for box constraints a ≤ x ≤ b. The projection simply clips each coordinate to the nearest bound — computed in O(n).',
    descriptionHe: 'מנגנון הטלה עבור אילוצי תיבה a ≤ x ≤ b. ההטלה פשוט קוטמת/חוסמת כל רכיב בוקטור לגבול הקרוב אליו ביותר. חישוב זה מבוצע בסיבוכיות ליניארית מהירה O(n).'
  },
  {
    id: 'f-opt-linear-eq-projection',
    courseId: 'opt',
    category: 'Constrained Optimization',
    categoryHe: 'אופטימיזציה עם אילוצים',
    name: 'Projection onto Linear Equality Constraint',
    nameHe: 'היטל על אילוץ שוויון ליניארי',
    equation: 'P_{Ax=b}(y) = y - A^T(AA^T)^{-1}(Ay - b)',
    description: 'Closest point to y satisfying Ax = b. Used in projected SD for linear constraints; each step stays in the null space of A.',
    descriptionHe: 'הנקודה הקרובה ביותר ל-y המקיימת את אילוץ השוויון Ax = b. משמשת בשיטת ירידת גרדיאנט מוטלת עבור אילוצים ליניאריים; כל צעד נשאר במרחב האפס של המטריצה A.'
  },
  {
    id: 'f-opt-sgd',
    courseId: 'opt',
    category: 'Unconstrained Optimization',
    categoryHe: 'אופטימיזציה ללא אילוצים',
    name: 'Stochastic Gradient Descent (SGD)',
    nameHe: 'שיטת ירידת הגרדיאנט האקראית (SGD)',
    equation: 'w^{(k+1)} = w^{(k)} - \\alpha^{(k)} \\frac{1}{|S|} \\sum_{i \\in S} \\nabla f_i(w^{(k)})',
    description: 'Uses a random mini-batch S ⊂ {1,...,m} to estimate the gradient. Noisy but cheap per iteration — the workhorse of deep learning.',
    descriptionHe: 'משתמשת בתת-קבוצה אקראית (Mini-batch) לצורך הערכת הגרדיאנט. אלגוריתם רועש אך זול מאוד מבחינה חישובית בכל שלב — סוס העבודה של עולם הלמידה העמוקה.'
  },
  {
    id: 'f-opt-momentum',
    courseId: 'opt',
    category: 'Unconstrained Optimization',
    categoryHe: 'אופטימיזציה ללא אילוצים',
    name: 'SGD with Momentum',
    nameHe: 'ירידת גרדיאנט אקראית עם תנע (Momentum)',
    equation: 'm^{(k)} = \\gamma m^{(k-1)} + \\alpha^{(k)} g^{(k)}, \\quad w^{(k+1)} = w^{(k)} - m^{(k)}',
    description: 'Accumulates gradient directions with decay γ ∈ (0.5, 0.9). Reduces oscillation and accelerates convergence through curved valleys.',
    descriptionHe: 'צוברת את כיווני הגרדיאנט לאורך זמן עם מקדם דעיכה גמא. מקטינה תנודות (אוסצילציות) ומאיצה את קצב ההתכנסות דרך עמקים צרים ומעוקלים.'
  },
  {
    id: 'f-opt-adam',
    courseId: 'opt',
    category: 'Unconstrained Optimization',
    categoryHe: 'אופטימיזציה ללא אילוצים',
    name: 'Adam Optimizer',
    nameHe: 'אופטימייזר אדם (Adam)',
    equation: 'w^{(k+1)} = w^{(k)} - \\alpha^{(k)} \\frac{\\hat{m}^{(k)}}{\\sqrt{\\hat{v}^{(k)}} + \\epsilon}',
    description: 'Combines momentum (m̂) and RMSProp gradient rescaling (v̂) with bias correction. Default optimizer for neural networks. Recommended γ₁=0.9, γ₂=0.999.',
    descriptionHe: 'משלב תנע (m̂) עם שינוי קנה מידה של הגרדיאנט לפי RMSProp (ערך v̂) ותיקון הטיות. אלגוריתם ברירת המחדל לאימון רשתות נוירונים עמוקות.'
  }
];
