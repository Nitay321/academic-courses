export interface Definition {
  id: string;
  title: string;
  titleHe?: string;
  content: string;
  contentHe?: string;
  simplifiedLogic?: string;
  simplifiedLogicHe?: string;
  toolboxConnection?: string;
  toolboxConnectionHe?: string;
  proof?: string;
  proofHe?: string;
  example?: string;
  exampleHe?: string;
  keyTakeaway?: string;
  keyTakeawayHe?: string;
  isPractice?: boolean;
}

export interface QuizQuestion {
  question: string;
  questionHe?: string;
  options: string[];
  optionsHe?: string[];
  correctAnswerIndex: number;
  explanation: string;
  explanationHe?: string;
}

export interface Chapter {
  id: string;
  courseId: 'nla' | 'opt' | 'prob' | 'stats';
  chapterNumber: string;
  title: string;
  titleHe?: string;
  intro: string;
  introHe?: string;
  motivation: string;
  motivationHe?: string;
  definitions: Definition[];
  quiz: QuizQuestion[];
}

export const chapters: Chapter[] = [
// ==========================================
  //                PROBABILITY CHAPTERS
  // ==========================================
  {
    id: 'prob-0',
    courseId: 'prob',
    chapterNumber: '0',
    title: 'Chapter 0: Preliminary Background - Probability Foundations & Integration Review',
    titleHe: 'פרק 0: הקדמה — יסודות ההסתברות וריענון חדו"א',
    intro: 'Probability is the formal mathematical language of uncertainty. This chapter establishes the fundamental discrete definitions: sample spaces, events, Kolmogorov\'s axioms, basic properties, and the transition to conditional probability and Bayes\' theorem.',
    introHe: 'תורת ההסתברות היא השפה המתמטית הפורמלית למידול וניתוח תופעות של אי-ודאות. פרק מבוא זה מציב את הגדרות היסוד הדיסקרטיות (הבדידות) של התחום: נלמד להגדיר מרחבי מדגם, נכיר את תפקידם של המאורעות כתת-קבוצות, נחקור את שלוש אקסיומות היסוד של קולמוגורוב ותכונותיהן, ונבצע מעבר חלק אל עולם ההסתברות המותנית ומשפט בייס.',
    motivation: 'To model real-world randomness (like noise in data, clinical trials, or communications), we need a rigorous axiomatic framework. Without Kolmogorov\'s foundation, intuitive reasoning about uncertainty leads to paradoxes, and we cannot build reliable data-driven algorithms.',
    motivationHe: 'כדי למדל בצורה מדעית אקראיות בעולם האמיתי (כמו רעש סטטיסטי במערכות נתונים, תוצאות של ניסויים קליניים, או שיבושים בערוצי תקשורת), אנו זקוקים למערכת אקסיומטית קשיחה וריגורוזית. ללא התשתית המתמטית שהציב אנדריי קולמוגורוב, חשיבה אינטואיטיבית שטחית על אי-ודאות מובילה לפספוסים ופרדוקסים לוגיים, ולא מאפשרת לבנות אלגוריתמים אמינים מבוססי נתונים.',
    definitions: [
      {
        id: 'def-prob-0-1',
        title: 'Sample Spaces & Events',
        titleHe: 'מרחב מדגם ומאורעות בדידים',
        content: 'A random experiment has a sample space $\\Omega$ of all possible outcomes. An individual outcome is $\\omega \\in \\Omega$. An event $A$ is a subset of the sample space:\n$$A \\subseteq \\Omega$$\nA simple event consists of a single outcome:\n$$A = \\{\\omega\\}$$\nThe certain event is $\\Omega$, and the impossible event is the empty set $\\emptyset$. Two events $A$ and $B$ are mutually exclusive (disjoint) if:\n$$A \\cap B = \\emptyset$$',
        contentHe: 'לכל ניסוי מקרי קיים מרחב מדגם, המסומן באות $\\Omega$, המכיל את אוסף כל התוצאות האפשריות של הניסוי. תוצאה יסודית בודדת מיוצגת על ידי האות $\\omega$. \n\nמאורע, המיוצג באות $A$, הוא תת-קבוצה של מרחב המדגם:\n$$A \\subseteq \\Omega$$\n\nמאורע פשוט מוגדר כמאורע המכיל תוצאה יסודית אחת בלבד:\n$$A = \\{\\omega\\}$$\n\nהמאורע הוודאי הוא מרחב המדגם כולו $\\Omega$, בעוד שהמאורע הבלתי אפשרי מיוצג על ידי הקבוצה הריקה $\\emptyset$.  \nשני מאורעות $A$ ו-$B$ נקראים **מאורעות זרים** (או מוציאים זה את זה / Disjoint) אם אין ביניהם אף תוצאה משותפת, כלומר החיתוך שלכם ריק:\n$$A \\cap B = \\emptyset$$',
        simplifiedLogic: 'Think of the sample space $\\Omega$ as the universal set containing all possible futures. An event $A$ is just choosing a specific subset of those futures. Mutual exclusivity means those two groups of futures have absolutely no overlap.',
        simplifiedLogicHe: 'חשבו על מרחב המדגם $\\Omega$ כעל "יקום אוניברסלי" המכיל בתוכו את כל תרחישי העתיד האפשריים. מאורע $A$ הוא פשוט בחירה של תת-קבוצה ספציפית מתוך אותם עתידים. מאורעות זרים פירושם ששתי קבוצות העתידים הללו אינן חופפות בשום נקודה—הן לא יכולות להתרחש יחד.',
        toolboxConnection: 'Understanding subsets and set operations is essential. It provides the discrete foundations for representing events in databases and building boolean logic filters in search engines.',
        toolboxConnectionHe: 'הבנה עמוקה של קבוצות ופעולות בין קבוצות היא תנאי הכרחי לבניית יסודות ההסתברות. היא מספקת את הכלים הדיסקרטיים לייצוג מאורעות במסדי נתונים ובניית מסנני לוגיקה בוליאנית במנועי חיפוש.',
        keyTakeaway: 'Sample space represents all possible outcomes; events are subsets representing specific conditions.',
        keyTakeawayHe: 'מרחב מדגם מייצג את כל התוצאות האפשריות; מאורעות הם תת-קבוצות המייצגות תנאים ספציפיים.'
      },
      {
        id: 'def-prob-0-2',
        title: 'Kolmogorov Axioms',
        titleHe: 'אקסיומות קולמוגורוב',
        content: 'A probability measure $P$ is a real-valued function on events satisfying:\n1. Non-negativity: For any event $A$:\n$$P(A) \\ge 0$$\n2. Normalization: For the certain event $\\Omega$:\n$$P(\\Omega) = 1$$\n3. $\\sigma$-Additivity: For any sequence of mutually disjoint events $A_1, A_2, \\dots$:\n$$P\\left(\\bigcup_{i=1}^{\\infty} A_i\\right) = \\sum_{i=1}^{\\infty} P(A_i)$$',
        contentHe: 'פונקציית הסתברות $P$ היא פונקציה המקבלת מאורע ומחזירה מספר ממשי, המקיימת את שלוש האקסיומות הבאות:\n\n1. **אי-שליליות**: לכל מאורע $A$, ערך ההסתברות הוא לעולם אינו שלילי:\n$$P(A) \\ge 0$$\n\n2. **נרמול**: ההסתברות של המאורע הוודאי (מרחב המדגם כולו) שווה בדיוק ל-1:\n$$P(\\Omega) = 1$$\n\n3. **$\\sigma$-אדיטיביות (אדיטיביות למנייה)**: לכל סדרה של מאורעות זרים בזוגות $A_1, A_2, \\dots$ מתקיים שההסתברות של איחודם שווה לסכום הסתברויותיהם:\n$$P\\left(\\bigcup_{i=1}^{\\infty} A_i\\right) = \\sum_{i=1}^{\\infty} P(A_i)$$',
        simplifiedLogic: 'Probability is a measure of "mass" or "weight" distributed over the sample space. The total weight of all possible futures is exactly 1 (Normalization), no future can have negative weight (Non-negativity), and if you have non-overlapping groups of futures, their combined weight is just the sum of their individual weights (Additivity).',
        simplifiedLogicHe: 'הסתברות היא למעשה מדד של "מסה" או "משקל" המפוזרים מעל מרחב המדגם. המשקל הכולל של כל העתידים האפשריים יחד הוא בדיוק 1 (נרמול), אף תרחיש עתידי אינו יכול לקבל משקל שלילי (אי-שליליות), ואם יש לכם קבוצות של תרחישים שאין ביניהן שום חפיפה, המשקל המשולב שלהן הוא פשוט סכום המשקלים האינדיבידואליים שלהן (אדיטיביות).',
        toolboxConnection: 'These three simple axioms are the absolute bedrock of all probability theory. Everything else, from simple coin tosses to advanced machine learning loss functions, is derived from these rules.',
        toolboxConnectionHe: 'שלוש האקסיומות הפשוטות הללו הן אבני היסוד והסלע האיתן של כל תורת ההסתברות. כל חוק מתמטי מתקדם, החל מהטלות מטבע פשוטות ועד לפונקציות הפסד מורכבות ברשתות נוירונים בלמידת מכונה, נגזר ישירות מתוך שלושת הכללים הללו.',
        keyTakeaway: 'Kolmogorov axioms mathematically define probability using measure theory properties.',
        keyTakeawayHe: 'אקסיומות קולמוגורוב מגדירות מתמטית את מושג ההסתברות בעזרת תכונות של תורת המידה.'
      },
      {
        id: 'def-prob-0-3',
        title: 'Basic Properties & Inclusion-Exclusion',
        titleHe: 'תכונות יסוד הנגזרות מתוך האקסיומות',
        content: 'From the axioms, we derive key properties for events $A, B, C$:\n- Empty Set: \n$$P(\\emptyset) = 0$$\n- Complement:\n$$P(A^c) = 1 - P(A)$$\n- Difference:\n$$P(A \\setminus B) = P(A) - P(A \\cap B)$$\n- Monotonicity: If \n$$A \\subseteq B$$\nthen \n$$P(A) \\le P(B)$$\n- Boundedness: \n$$0 \\le P(A) \\le 1$$\n- Inclusion-Exclusion for two events:\n$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$\n- Inclusion-Exclusion for three events:\n$$P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(A \\cap C) - P(B \\cap C) + P(A \\cap B \\cap C)$$\nIn a Symmetric Probability Space with finite $\\Omega$, all outcomes are equally likely, giving:\n$$P(A) = \\frac{|A|}{|\\Omega|}$$',
        contentHe: 'מתוך האקסיומות בלבד, אנו מוכיחים בצורה ריגורוזית את התכונות הבאות לכל מאורעות $A, B, C$:\n\n* **הקבוצה הריקה**:\n$$P(\\emptyset) = 0$$\n\n* **מאורע המשלים**:\n$$P(A^c) = 1 - P(A)$$\n\n* **הפרש מאורעות**:\n$$P(A \\setminus B) = P(A) - P(A \\cap B)$$\n\n* **מונוטוניות (שימור סדר)**: אם מתקיים הכלה בין קבוצות:\n$$A \\subseteq B$$\nאז מתקיים בהכרח שימור סדר בהסתברות:\n$$P(A) \\le P(B)$$\n\n* **חסימות ההסתברות**: ערך הפלט של כל מאורע חסום תמיד בריבוע הסגור בין 0 ל-1:\n$$0 \\le P(A) \\le 1$$\n\n* **נוסחת ההכלה וההפרדה לשני מאורעות**:\n$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$\n\n* **נוסחת ההכלה וההפרדה לשלושה מאורעות**:\n$$P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(A \\cap C) - P(B \\cap C) + P(A \\cap B \\cap C)$$\n\n### 🎲 מרחב הסתברות סימטרי (אחיד)\nכאשר מרחב המדגם $\\Omega$ הוא סופי, וקיימת סימטריה מלאה שבה לכל התוצאות היסודיות יש סיכוי שווה לחלוטין להתרחש, ההסתברות של מאורע $A$ מחושבת על פי יחס הגדלים של הקבוצות (ההגדרה הקלאסית):\n$$P(A) = \\frac{|A|}{|\\Omega|}$$',
        simplifiedLogic: 'If you want to find the size of the union of two overlapping groups, you cannot just add their sizes together because you would be double-counting their intersection. You must subtract the overlap once. For symmetric spaces, probability is simply a ratio of sizes.',
        simplifiedLogicHe: 'אם אתם רוצים למצוא את הגודל של איחוד בין שתי קבוצות שיש ביניהן חפיפה, אתם לא יכולים פשוט לחבר את הגדלים שלהן, כי אז תספרו את אזור החפיפה (החיתוך) פעמיים. עליכם להחסיר את האזור המשותף פעם אחת כדי לתקן את הספירה. במרחבים סימטריים, הסתברות היא פשוט יחס פשוט בין כמות האפשרויות הרצויות לכמות האפשרויות הכוללת במרחב.',
        toolboxConnection: 'The Inclusion-Exclusion principle is a massive tool in computer science combinatorics, database query optimizations, and networking routing safety analysis.',
        toolboxConnectionHe: 'עקרון ההכלה וההפרדה (Inclusion-Exclusion) הוא כלי עצמתי ביותר בקומבינטוריקה של מדעי המחשב, אופטימיזציית שאילתות במסדי נתונים, וניתוח בטיחות של נתיבים ברשתות תקשורת.',
        keyTakeaway: 'The inclusion-exclusion formula prevents double-counting of overlapping events.',
        keyTakeawayHe: 'נוסחת ההכלה וההפרדה מונעת ספירה כפולה של מאורעות חופפים.',
        proof: 'Proof of Monotonicity:\nExpress $B$ as a union of disjoint events:\n$$B = A \\cup (B \\setminus A)$$\nSince $A$ and $B \\setminus A$ are disjoint:\n$$P(B) = P(A) + P(B \\setminus A)$$\nBy Axiom 1:\n$$P(B \\setminus A) \\ge 0$$\nThus:\n$$P(B) \\ge P(A)$$\nOr written equivalent:\n$$P(A) \\le P(B)$$',
        proofHe: 'הוכחת מונוטוניות:\nנציג את $B$ כאיחוד של שני מאורעות זרים:\n$$B = A \\cup (B \\setminus A)$$\nמכיוון ש-$A$ ו-$B \\setminus A$ הם זרים:\n$$P(B) = P(A) + P(B \\setminus A)$$\nלפי אקסיומה 1:\n$$P(B \\setminus A) \\ge 0$$\nלכן:\n$$P(B) \\ge P(A)$$\nאו ברישום שקול:\n$$P(A) \\le P(B)$$'
      },
      {
        id: 'def-prob-0-4',
        title: 'Conditional Probability & Bayes\' Theorem',
        titleHe: 'הסתברות מותנית ומשפט בייס',
        content: 'The conditional probability of $A$ given $B$ is:\n$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$$\n(where $P(B) > 0$).\n\nLaw of Total Probability: If $B_1, \\dots, B_n$ partition $\\Omega$, then for any event $A$:\n$$P(A) = \\sum_{i=1}^n P(A \\mid B_i) \\cdot P(B_i)$$\n\nBayes\' Theorem:\n$$P(B_j \\mid A) = \\frac{P(A \\mid B_j) \\cdot P(B_j)}{\\sum_{i=1}^n P(A \\mid B_i) \\cdot P(B_i)}$$',
        contentHe: 'הסתברות מותנית מודדת את הסיכוי להתרחשות מאורע $A$, בהינתן שכבר יש בידינו מידע ודאי כי מאורע אחר $B$ התרחש:\n$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$$\n(כאשר תנאי הקצה המחייב הוא $P(B) > 0$).\n\n### 📜 נוסחת ההסתברות השלמה:\nאם אוסף המאורעות $B_1, \\dots, B_n$ מהווה חלוקה (Partition) של מרחב המדגם $\\Omega$ (כלומר הם זרים בזוגות ואיחודם נותן את המרחב כולו), אז לכל מאורע $A$ מתקיים:\n$$P(A) = \\sum_{i=1}^{n} P(A \\mid B_i) \\cdot P(B_i)$$\n\n### 📜 משפט בייס (Bayes\' Theorem):\nנוסחת בייס מאפשרת להפוך את כיוון ההתניה ומנוסחת כך לכל מאורע $B_j$ מתוך החלוקה:\n$$P(B_j \\mid A) = \\frac{P(A \\mid B_j) \\cdot P(B_j)}{\\sum_{i=1}^{n} P(A \\mid B_i) \\cdot P(B_i)}$$',
        simplifiedLogic: 'Conditional probability scales our universe down to the event $B$. Any outcome outside $B$ is discarded. Bayes\' theorem acts as an evidence-updating machine: it takes our prior belief $P(B_j)$ and updates it to a posterior belief $P(B_j \\mid A)$ after observing new evidence $A$.',
        simplifiedLogicHe: 'הסתברות מותנית למעשה מצמצמת ומכווצת את היקום המקורי שלנו אך ורק לתוך גבולות המאורע $B$. כל עתיד אפשרי שנמצא מחוץ ל-$B$ נזרק מיד לפח. משפט בייס פועל כ"מכונה לעדכון ראיות": הוא לוקח את האמונה הראשונית שלנו לגבי הסיכוי של התרחיש ($P(B_j)$ - Prior) ומעדכן אותה לאמונה מעודכנת ומבוססת ($P(B_j \\mid A)$ - Posterior) מיד לאחר שצפינו בראיה החדשה $A$.',
        toolboxConnection: 'Conditional probability and Bayes\' Theorem are the core components behind Naive Bayes classifiers in machine learning, spam filters, medical diagnostic software, and robotic localization (Bayesian tracking).',
        toolboxConnectionHe: 'הסתברות מותנית ומשפט בייס הם רכיבי הליבה העומדים מאחורי מסווגי תוכנה אקראיים (Naive Bayes) בלמידת מכונה, מסנני דואר זבל (Spam Filters), מערכות לדיאגנוזה רפואית, ואלגוריתמי ניווט ומיקום של רובוטים (Bayesian tracking).',
        keyTakeaway: 'Bayes\' theorem updates prior probabilities using newly observed evidence.',
        keyTakeawayHe: 'משפט בייס מעדכן הסתברויות אפריוריות באמצעות ראיות חדשות שנצפו.',
        proof: 'Proof of Bayes\' Theorem:\nBy definition of conditional probability:\n$$P(B_j \\mid A) = \\frac{P(B_j \\cap A)}{P(A)}$$\nUsing the identity:\n$$P(B_j \\cap A) = P(A \\mid B_j) \\cdot P(B_j)$$\nWe substitute the numerator:\n$$P(B_j \\mid A) = \\frac{P(A \\mid B_j) \\cdot P(B_j)}{P(A)}$$\nApplying the Law of Total Probability to the denominator $P(A)$ yields:\n$$P(B_j \\mid A) = \\frac{P(A \\mid B_j) \\cdot P(B_j)}{\\sum_{i=1}^n P(A \\mid B_i) \\cdot P(B_i)}$$',
        proofHe: 'הוכחת משפט בייס:\nלפי הגדרת ההסתברות המותנית:\n$$P(B_j \\mid A) = \\frac{P(B_j \\cap A)}{P(A)}$$\nבאמצעות שימוש בזהות:\n$$P(B_j \\cap A) = P(A \\mid B_j) \\cdot P(B_j)$$\nנציב במונה:\n$$P(B_j \\mid A) = \\frac{P(A \\mid B_j) \\cdot P(B_j)}{P(A)}$$\nהפעלת נוסחת ההסתברות השלמה על המכנה $P(A)$ מניבה:\n$$P(B_j \\mid A) = \\frac{P(A \\mid B_j) \\cdot P(B_j)}{\\sum_{i=1}^n P(A \\mid B_i) \\cdot P(B_i)}$$',
        example: 'Three Cards Paradox Example:\nThree cards sit in a box:\n1. Card A: Red on both sides.\n2. Card B: Black on both sides.\n3. Card C: Red on one side, black on the other.\nWe draw a card at random and place it on the table. The visible side is Red. What is the probability that the hidden side is also Red?\nLet $C_1, C_2, C_3$ be drawing Card A, B, C respectively. $P(C_1)=P(C_2)=P(C_3)=1/3$.\nLet $R$ be the event that the visible side is Red.\n$$P(R \\mid C_1) = 1, \\quad P(R \\mid C_2) = 0, \\quad P(R \\mid C_3) = 0.5$$\nBy total probability:\n$$P(R) = 1(1/3) + 0 + 0.5(1/3) = 0.5$$\nBy Bayes\' theorem, the probability that the hidden side is Red is the probability that we got Card A given $R$:\n$$P(C_1 \\mid R) = \\frac{P(R \\mid C_1)P(C_1)}{P(R)} = \\frac{1(1/3)}{0.5} = \\frac{2}{3}$$',
        exampleHe: 'תרגיל שוקולד מודרך: פרדוקס שלושת הקלפים (Three Cards Paradox)\nבתוך קופסה מונחים שלושה קלפים מיוחדים:\n1. קלף א\': צבוע באדום משני צדדיו.\n2. קלף ב\': צבוע בשחור משני צדדיו.\n3. קלף ג\': צבוע באדום מצד אחד ובשחור מצדו השני.\n\nשולפים קלף אחד באקראי ומניחים אותו על השולחן. הצד הגלוי לעין שפונה כלפי מעלה הוא אדום. מהי ההסתברות המדויקת שגם צדו השני (הנסתר) של הקלף הוא אדום?\n\n### ✍️ פתרון ריגורוזית צעד-אחר-צעד:\n\nנרשם את המאורעות לבחירת הקלפים: נסמן ב-$C_1, C_2, C_3$ את בחירת קלף א\', ב\' ו-ג\' בהתאמה. מכיוון שהשליפה היא באקראי:\n$$P(C_1) = P(C_2) = P(C_3) = \\frac{1}{3}$$\n\nנסמן ב-$R$ את המאורע: "הצד הגלוי לעין הוא אדום". נרשם את ההסתברויות המותנות לקבלת צד אדום מכל קלף:\n$$P(R \\mid C_1) = 1 \\quad, \\quad P(R \\mid C_2) = 0 \\quad, \\quad P(R \\mid C_3) = 0.5$$\n\nנחשב את ההסתברות הכוללת שהצד הגלוי הוא אדום בעזרת נוסחת ההסתברות השלמה:\n$$P(R) = P(R \\mid C_1)P(C_1) + P(R \\mid C_2)P(C_2) + P(R \\mid C_3)P(C_3)$$\n$$P(R) = 1 \\cdot \\left(\\frac{1}{3}\\right) + 0 \\cdot \\left(\\frac{1}{3}\\right) + 0.5 \\cdot \\left(\\frac{1}{3}\\right) = \\frac{1}{3} + 0 + \\frac{1}{6} = \\frac{1}{2}$$\n\nאנו מעוניינים למצוא את הסיכוי שהצד הנסתר הוא אדום. דבר זה ייתכן אך ורק אם הקלף שבידנו הוא קלף א\' הדו-צדדי ($C_1$). לכן, אנו מחפשים את ההסתברות המותנית $P(C_1 \\mid R)$. נפעיל את משפט בייס:\n$$P(C_1 \\mid R) = \\frac{P(R \\mid C_1)P(C_1)}{P(R)} = \\frac{1 \\cdot \\frac{1}{3}}{\\frac{1}{2}} = \\frac{2}{3}$$\n\n**תשובה סופית:** ההסתברות שהצד השני הוא אדום היא בדיוק $\\frac{2}{3}$ (או $66.6\\%$).  \n*(אינטואיציה פשוטה: בקופסה יש 6 צדדים סך הכל, מתוכם 3 צדדים צבועים באדום. ברגע שראינו צד אדום, אנחנו בוודאות נמצאים על אחד מתוך 3 הצדדים האדומים האלו. מתוך 3 האפשרויות האלו, 2 צדדים שייכים לקלף א\' הדו-צדדי, ולכן הסיכוי שהקלף הוא אדום-אדום הוא 2 מתוך 3).*'
      },
      {
        id: 'def-prob-0-5',
        title: 'Integration by Substitution (u-Substitution)',
        titleHe: 'אינטגרציה בשיטת ההצבה (u-Substitution)',
        content: 'Integration by substitution is the counterpart to the Chain Rule of differentiation. It simplifies integrals by replacing the integration variable $x$ with a new variable $u = g(x)$.\n\nFor indefinite integrals:\n$$\\int f(g(x))g\'(x)dx = \\int f(u) du$$\n\nFor definite integrals, we MUST update the integration boundaries immediately:\n$$\\int_{a}^{b} f(g(x))g\'(x)dx = \\int_{g(a)}^{g(b)} f(u) du$$\n\n**Step-by-Step Methodology:**\n1. **Identify the inner function** $u = g(x)$ whose derivative $g\'(x)$ (or a constant multiple of it) appears in the integrand.\n2. **Find the differential**: $du = g\'(x) dx$.\n3. **Update integration boundaries**: replace $a$ with $g(a)$ and $b$ with $g(b)$.\n4. **Substitute and evaluate**: rewrite the integral in terms of $u$ and $du$, solve, and compute.',
        contentHe: 'אינטגרציה בשיטת ההצבה היא הכלי ההפוך לכלל השרשרת של גזירה. השיטה מיועדת לפישוט של אינטגרלים על ידי החלפת משתנה האינטגרציה $x$ במשתנה חדש $u = g(x)$.\n\nנוסחת ההצבה לאינטגרל לא מסוים:\n$$\\int f(g(x))g\'(x)dx = \\int f(u) du$$\n\nעבור אינטגרל מסוים, קריטי לעדכן את גבולות האינטגרציה בהתאם להצבה:\n$$\\int_{a}^{b} f(g(x))g\'(x)dx = \\int_{g(a)}^{g(b)} f(u) du$$\n\n**שלבי העבודה בשיטה:**\n1. **זיהוי פונקציה פנימית** $u = g(x)$ שהנגזרת שלה $g\'(x)$ (או כפולת קבוע שלה) מופיעה באינטגרל.\n2. **חישוב הדיפרנציאל**: $du = g\'(x) dx$.\n3. **עדכון גבולות האינטגרציה**: הגבול התחתון הופך ל-$g(a)$, וגבול עליון הופך ל-$g(b)$.\n4. **ביצוע ההצבה וחישוב**: רישום האינטגרל החדש לפי $u$ והדיפרנציאל $du$, פתרון והצבת הגבולות החדשים.',
        simplifiedLogic: 'U-substitution is the undo-button for the Chain Rule. It allows us to view a complicated product of functions as a single simple variable, compressing the inner function\'s contribution into a new coordinate system.',
        simplifiedLogicHe: 'שיטת ההצבה היא למעשה פעולת ה-Undo (ביטול) עבור כלל השרשרת של הנגזרת. היא מאפשרת לנו להסתכל על מכפלה מסובכת של פונקציות כעל משתנה יחיד ופשוט, ובכך היא \'דוחסת\' את תרומת הפונקציה הפנימית לתוך מערכת קואורדינטות חדשה.',
        toolboxConnection: 'This is our primary tool when verifying that continuous Probability Density Functions (PDFs) integrate to 1, or when performing non-linear transformations of random variables $Y = g(X)$ where the Jacobian term represents the derivative of the substitution.',
        toolboxConnectionHe: 'זהו הכלי המרכזי ביותר המשמש אותנו לאימות פונקציות צפיפות רציפות (PDF) שהאינטגרל שלהן אכן שווה ל-1, וכן בביצוע טרנספורמציות לא-ליניאריות של משתנים מקריים $Y = g(X)$, שבהן איבר היעקוביאן מייצג את הנגזרת של פונקציית ההצבה.',
        proof: 'Let $F(u)$ be an antiderivative of $f(u)$, meaning $F\'(u) = f(u)$. By the Chain Rule of differentiation:\n$$\\frac{d}{dx}[F(g(x))] = F\'(g(x)) \\cdot g\'(x) = f(g(x))g\'(x)$$\nIntegrating both sides with respect to $x$:\n$$\\int f(g(x))g\'(x)dx = F(g(x)) + C = F(u) + C = \\int f(u) du$$\nFor definite integrals:\n$$\\int_{a}^{b} f(g(x))g\'(x)dx = [F(g(x))]_a^b = F(g(b)) - F(g(a)) = [F(u)]_{g(a)}^{g(b)} = \\int_{g(a)}^{g(b)} f(u) du$$',
        proofHe: 'תהי $F(u)$ פונקציה קדומה של $f(u)$, כלומר מתקיים $F\'(u) = f(u)$. על פי כלל השרשרת לגזירה:\n$$\\frac{d}{dx}[F(g(x))] = F\'(g(x)) \\cdot g\'(x) = f(g(x))g\'(x)$$\nאם נפעיל אינטגרל על שני האגפים לפי $x$:\n$$\\int f(g(x))g\'(x)dx = F(g(x)) + C = F(u) + C = \\int f(u) du$$\nעבור אינטגרל מסוים, לפי המשפט היסודי של החדוו"א:\n$$\\int_{a}^{b} f(g(x))g\'(x)dx = [F(g(x))]_a^b = F(g(b)) - F(g(a)) = [F(u)]_{g(a)}^{g(b)} = \\int_{g(a)}^{g(b)} f(u) du$$',
        example: 'Prove that the Rayleigh Probability Density Function $f(x) = 2x e^{-x^2}$ for $x \\ge 0$ integrates to 1:\n$$I = \\int_{0}^{\\infty} 2x e^{-x^2} dx$$\n\n**Step 1: Set up substitution**\nLet $u = x^2$.\n\n**Step 2: Differentiate**\n$$du = 2x dx$$\n\n**Step 3: Update boundaries**\n- Lower boundary: $x = 0 \\implies u = 0^2 = 0$\n- Upper boundary: $x \\to \\infty \\implies u \\to \\infty$\n\n**Step 4: Substitute and integrate**\n$$I = \\int_{0}^{\\infty} e^{-u} du = [-e^{-u}]_0^{\\infty} = \\lim_{M \\to \\infty} (-e^{-M}) - (-e^0) = 0 - (-1) = 1$$',
        exampleHe: 'נוכיח כי השטח הכולל מתחת לפונקציית הצפיפות של התפלגות ריילי (Rayleigh) $f(x) = 2xe^{-x^2}$ עבור $x \\ge 0$ שווה בדיוק ל-1 (תנאי הנרמול של פונקציית צפיפות):\n$$I = \\int_{0}^{\\infty} 2x e^{-x^2} dx$$\n\n**שלב 1: בחירת ההצבה**\nנסמן את המעריך של האקספוננט כמשתנה החדש: $u = x^2$.\n\n**שלב 2: גזירה ומציאת הדיפרנציאל**\n$$du = 2x dx$$\nנשים לב שהביטוי $2x dx$ מופיע בשלמותו בתוך האינטגרל!\n\n**שלב 3: עדכון גבולות האינטגרציה**\n* גבול תחתון: כאשר $x = 0$ נקבל $u = 0^2 = 0$.\n* גבול עליון: כאשר $x \\to \\infty$ נקבל $u \to \\infty$.\n\n**שלב 4: הצבה וחישוב האינטגרל**\n$$I = \\int_{0}^{\\infty} e^{-u} du = [-e^{-u}]_0^{\\infty} = \\lim_{M \\to \\infty} (-e^{-M}) - (-e^0) = 0 - (-1) = 1$$\nהוכחנו בהצלחה שתנאי הנרמול מתקיים והשטח הוא בדיוק 1.',
        keyTakeaway: 'When using u-substitution for definite integrals, always update the integration boundaries immediately. Never forget the differential du.',
        keyTakeawayHe: 'בשימוש בשיטת ההצבה עבור אינטגרלים מסוימים, חובה לעדכן מיד את גבולות האינטגרציה לפי המשתנה החדש u. לעולם אל תשכחו לכפול בדיפרנציאל du.'
      },
      {
        id: 'def-prob-0-6',
        title: 'Integration by Parts & Expectations',
        titleHe: 'אינטגרציה בחלקים וחישוב תוחלות',
        content: 'Integration by parts is the inverse of the Product Rule for differentiation. It is particularly useful when the integrand is a product of two functions.\n\nFormula for indefinite integrals:\n$$\\int u \\, dv = u v - \\int v \\, du$$\n\nFormula for definite integrals:\n$$\\int_{a}^{b} u(x) v\'(x) dx = [u(x)v(x)]_a^b - \\int_{a}^{b} v(x) u\'(x) dx$$\n\n**The LIATE Rule for choosing $u$:**\nTo decide which part of the integrand to differentiate ($u$) and which to integrate ($dv$), follow this priority list:\n1. **L**ogarithmic (e.g., $\\ln x$)\n2. **I**nverse trigonometric (e.g., $\\arctan x$)\n3. **A**lgebraic (e.g., $x^2, 3x$)\n4. **T**rigonometric (e.g., $\\sin x$)\n5. **E**xponential (e.g., $e^x, e^{-\\lambda x}$)',
        contentHe: 'אינטגרציה בחלקים היא השיטה ההפוכה לכלל המכפלה של גזירה. היא שימושית במיוחד כאשר האינטגרנד הוא מכפלה של שתי פונקציות מסוגים שונים.\n\nנוסחת האינטגרציה בחלקים:\n$$\\int u \\, dv = u v - \\int v \\, du$$\n\nעבור אינטגרל מסוים:\n$$\\int_{a}^{b} u(x) v\'(x) dx = [u(x)v(x)]_a^b - \\int_{a}^{b} v(x) u\'(x) dx$$\n\n**כלל קדימות לבחירת $u$ (כלל LIATE):**\nעל מנת להחליט איזה חלק של האינטגרנד נבחר להיות $u$ (אותו נגזור) ואיזה חלק יהיה $dv$ (אותו נבצע לו אינטגרציה), נשתמש בסדר העדיפויות הבא:\n1. **L**ogarithmic - פונקציות לוגריתמיות (כמו $\\ln x$)\n2. **I**nverse Trig - פונקציות טריגונומטריות הפוכות (כמו $\\arctan x$)\n3. **A**lgebraic - פונקציות אלגבריות / פולינומים (כמו $x^2, 3x$)\n4. **T**rigonometric - פונקציות טריגונומטריות (כמו $\\sin x$)\n5. **E**xponential - פונקציות מעריכיות (כמו $e^x, e^{-\\lambda x}$)',
        simplifiedLogic: 'Integration by parts allows us to trade a difficult integration of one product (like $x \\cdot e^{-x}$) for an easier integration of another product (like $1 \\cdot e^{-x}$) by shifting the derivative from one function to the other.',
        simplifiedLogicHe: 'אינטגרציה בחלקים מאפשרת לנו להחליף אינטגרל קשה של מכפלה אחת (כמו $x \\cdot e^{-x}$) באינטגרל קל בהרבה של מכפלה אחרת (כמו $1 \\cdot e^{-x}$) על ידי העברת פעולת הנגזרת מפונקציה אחת לשנייה.',
        toolboxConnection: 'This is our primary vehicle for calculating the mathematical expectation $\\mathbb{E}[X] = \\int x f(x) dx$ and higher-order moments $\\mathbb{E}[X^k] = \\int x^k f(x) dx$ for continuous probability distributions (such as Exponential, Gamma, and Chi-Square).',
        toolboxConnectionHe: 'זהו הכלי העיקרי לחישוב התוחלת המתמטית $\\mathbb{E}[X] = \\int x f(x) dx$ ומומנטים מסדרים גבוהים $\\mathbb{E}[X^k] = \\int x^k f(x) dx$ עבור התפלגויות הסתברות רציפות (כמו התפלגות מעריכית, התפלגות גמא והתפלגות חי-בריבוע).',
        proof: 'Start from the product rule of differentiation for $u(x)$ and $v(x)$:\n$$\\frac{d}{dx}[u(x)v(x)] = u\'(x)v(x) + u(x)v\'(x)$$\nIntegrate both sides with respect to $x$:\n$$u(x)v(x) = \\int u\'(x)v(x) dx + \\int u(x)v\'(x) dx$$\nRearranging the terms yields the standard integration by parts formula:\n$$\\int u(x)v\'(x) dx = u(x)v(x) - \\int v(x)u\'(x) dx$$\nSince $dv = v\'(x)dx$ and $du = u\'(x)dx$, this is compactly written as:\n$$\\int u \\, dv = uv - \\int v \\, du$$',
        proofHe: 'נוכיח את נוסחת האינטגרציה בחלקים מתוך כלל המכפלה לגזירת שתי פונקציות $u(x)$ ו-$v(x)$:\n$$\\frac{d}{dx}[u(x)v(x)] = u\'(x)v(x) + u(x)v\'(x)$$\nנבצע אינטגרציה על שני האגפים לפי $x$:\n$$u(x)v(x) = \\int u\'(x)v(x) dx + \\int u(x)v\'(x) dx$$\nנעביר אגפים על מנת לבודד את האינטגרל של המכפלה המקורית:\n$$\\int u(x)v\'(x) dx = u(x)v(x) - \\int v(x)u\'(x) dx$$\nמאחר שמתקיים $dv = v\'(x)dx$ ו-$du = u\'(x)dx$, ניתן לכתוב זאת בצורה המקוצרת והמוכרת:\n$$\\int u \\, dv = uv - \\int v \\, du$$',
        example: 'Prove that the expectation of an exponential random variable $X \\sim \\text{Exp}(\\lambda)$ is $\\mathbb{E}[X] = 1/\\lambda$:\n$$\\mathbb{E}[X] = \\int_{0}^{\\infty} x \\cdot \\lambda e^{-\\lambda x} dx$$\n\n**Step 1: Set up parts**\n- Let $u = x \\implies du = dx$ (Algebraic has priority over Exponential).\n- Let $dv = \\lambda e^{-\\lambda x} dx \\implies v = -e^{-\\lambda x}$.\n\n**Step 2: Apply formula**\n$$\\mathbb{E}[X] = [-x e^{-\\lambda x}]_0^{\\infty} - \\int_{0}^{\\infty} (-e^{-\\lambda x}) dx$$\n\n**Step 3: Evaluate boundaries and integrate**\n- Boundary term: $\\lim_{x\\to\\infty} (-xe^{-\\lambda x}) - 0 = 0$ (since exponential decay dominates linear growth).\n- The remaining integral:\n$$\\int_{0}^{\\infty} e^{-\\lambda x} dx = [-\\frac{1}{\\lambda} e^{-\\lambda x}]_0^{\\infty} = 0 - (-\\frac{1}{\\lambda}) = \\frac{1}{\\lambda}$$\nThus, $\\mathbb{E}[X] = 1/\\lambda$.',
        exampleHe: 'נוכיח כי התוחלת של משתנה מקרי רציף בעל התפלגות מעריכית עם פרמטר קצב $\\lambda > 0$ שווה ל-$1/\\lambda$:\n$$\\mathbb{E}[X] = \\int_{0}^{\\infty} x \\cdot \\lambda e^{-\\lambda x} dx$$\n\n**שלב 1: בחירת הפונקציות לפי כלל LIATE**\nהאינטגרנד מורכב מפונקציה אלגברית ($x$) ופונקציה מעריכית ($\\lambda e^{-\\lambda x}$). לפי הכלל, לאלגברי יש עדיפות להיות $u$:\n* נבחר: $u = x \\implies du = dx$\n* נבחר: $dv = \\lambda e^{-\\lambda x} dx \\implies v = -e^{-\\lambda x}$\n\n**שלב 2: הפעלת נוסחת האינטגרציה בחלקים**\n$$\\mathbb{E}[X] = [-x e^{-\\lambda x}]_0^{\\infty} - \\int_{0}^{\\infty} (-e^{-\\lambda x}) dx$$\n\n**שלב 3: חישוב איבר הגבולות והאינטגרל הנותר**\n* איבר הגבולות: לפי כלל לופיטל, האקספוננט שואף לאפס מהר יותר מאשר הגידול הליניארי של $x$, ולכן:\n  $$\\lim_{x\\to\\infty} (-xe^{-\\lambda x}) = 0 \\quad \\text{וכן עבור } x=0: 0 \\cdot 1 = 0 \\implies [-x e^{-\\lambda x}]_0^{\\infty} = 0$$\n* פתרון האינטגרל הנותר:\n  $$\\int_{0}^{\\infty} e^{-\\lambda x} dx = [-\\frac{1}{\\lambda} e^{-\\lambda x}]_0^{\\infty} = \\lim_{M\\to\\infty}\\left(-\\frac{1}{\\lambda}e^{-\\lambda M}\\right) - \\left(-\\frac{1}{\\lambda}e^0\\right) = 0 + \\frac{1}{\\lambda} = \\frac{1}{\\lambda}$$\n\n**תשובה סופית:** קיבלנו כי $\\mathbb{E}[X] = \\frac{1}{\\lambda}$ כנדרש!',
        keyTakeaway: 'Choose u following LIATE to ensure the new integral is simpler than the original. In probability expectations, exponential decay usually forces the boundary terms to vanish at infinity.',
        keyTakeawayHe: 'בחרו את u לפי סדר העדיפויות של כלל LIATE על מנת להבטיח שהאינטגרל החדש שיתקבל יהיה פשוט יותר מהמקורי. בחישובי תוחלת, הדעיכה המעריכית בקצוות בדרך כלל מאפסת את איברי הגבולות באינסוף.'
      },
      {
        id: 'def-prob-0-7',
        title: 'Improper, Special & Joint Double Integrals',
        titleHe: 'אינטגרלים לא אמיתיים, פונקציות מיוחדות ואינטגרלים כפולים',
        content: '**1. Improper Integrals:**\nIntegrals over infinite intervals are evaluated using limits:\n$$\\int_{a}^{\\infty} f(x)dx = \\lim_{M \\to \\infty} \\int_{a}^{M} f(x)dx$$\nIf the limit exists and is finite, the integral **converges**; otherwise, it **diverges**.\n\n**2. The Gaussian Integral:**\nA critical special integral in statistics (normalization of the Normal distribution):\n$$\\int_{-\\infty}^{\\infty} e^{-\\frac{x^2}{2}} dx = \\sqrt{2\\pi}$$\n\n**3. The Gamma Function:**\nExtends the factorial function to real (positive) numbers:\n$$\\Gamma(\\alpha) = \\int_{0}^{\\infty} x^{\\alpha-1} e^{-x} dx \\quad \\text{for } \\alpha > 0$$\nSatisfies $\\Gamma(\\alpha+1) = \\alpha \\Gamma(\\alpha)$ and $\\Gamma(n) = (n-1)!$ for positive integers.\n\n**4. Double Integrals over Triangular Regions:**\nFor joint continuous distributions, we integrate over 2D domains. If the domain is bounded by $0 \\le x \\le y \\le 1$:\n$$\\iint_{D} f(x,y) dA = \\int_{0}^{1} \\int_{x}^{1} f(x,y) \\, dy \\, dx = \\int_{0}^{1} \\int_{0}^{y} f(x,y) \\, dx \\, dy$$',
        contentHe: '**1. אינטגרלים לא אמיתיים (Improper Integrals):**\nאינטגרלים שבהם לפחות אחד מגבולות האינטגרציה הוא אינסופי מוגדרים באמצעות גבולות:\n$$\\int_{a}^{\\infty} f(x)dx = \\lim_{M \\to \\infty} \\int_{a}^{M} f(x)dx$$\nאם הגבול קיים וסופי, האינטגרל **מתכנס**; אחרת, הוא **מתבדר**.\n\n**2. האינטגרל הגאוסיאני (The Gaussian Integral):**\nאינטגרל מפתח בהסתברות המשמש לנרמול פונקציית צפיפות של התפלגות נורמלית:\n$$\\int_{-\\infty}^{\\infty} e^{-\\frac{x^2}{2}} dx = \\sqrt{2\\pi}$$\n\n**3. פונקציית גמא (The Gamma Function):**\nהרחבה של מושג העצרת למספרים ממשיים וחיוביים:\n$$\\Gamma(\\alpha) = \\int_{0}^{\\infty} x^{\\alpha-1} e^{-x} dx \\quad (\\alpha > 0)$$\nהפונקציה מקיימת את הזהות $\\Gamma(\\alpha+1) = \\alpha \\Gamma(\\alpha)$ ועבור מספרים שלמים: $\\Gamma(n) = (n-1)!$.\n\n**4. אינטגרלים כפולים מעל תחומים משולשיים (Triangular Regions):**\nבעבודה עם משתנים מקריים משותפים (Joint Distributions), אנו מבצעים אינטגרציה דו-ממדית. אם התחום מוגדר על ידי $0 \\le x \\le y \\le 1$:\n$$\\iint_{D} f(x,y) dA = \\int_{0}^{1} \\int_{x}^{1} f(x,y) \\, dy \\, dx = \\int_{0}^{1} \\int_{0}^{y} f(x,y) \\, dx \\, dy$$',
        simplifiedLogic: 'Double integrals over non-rectangular regions require extreme care with boundaries. If $x$ depends on $y$, the inner integration boundaries must contain variables representing that dependency, while the outer boundaries must always consist of absolute constants.',
        simplifiedLogicHe: 'אינטגרלים כפולים מעל תחומים שאינם מלבניים דורשים זהירות רבה בקביעת הגבולות. אם $x$ תלוי ב-$y$, גבולות האינטגרל הפנימי חייבים להכיל משתנים שמייצגים תלות זו, בעוד שגבולות האינטגרל החיצוני חייבים להיות תמיד קבועים מספריים מוחלטים.',
        toolboxConnection: 'Used directly to normalize the Normal Distribution $N(\\mu, \\sigma^2)$, calculate moments of the Gamma Distribution, and find marginal probabilities or joint expectations for multivariate distributions.',
        toolboxConnectionHe: 'משמש ישירות לנרמול ההתפלגות הנורמלית $N(\\mu, \\sigma^2)$, חישוב מומנטים של התפלגות גמא, ומציאת הסתברויות שוליות (Marginal) או תוחלות משותפות עבור התפלגויות רב-ממדיות.',
        proof: 'Prove the **Gaussian Integral** $I = \\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$ using polar coordinates:\n$$I^2 = \\left( \\int_{-\\infty}^{\\infty} e^{-x^2} dx \\right) \\left( \\int_{-\\infty}^{\\infty} e^{-y^2} dy \\right) = \\int_{-\\infty}^{\\infty} \\int_{-\\infty}^{\\infty} e^{-(x^2+y^2)} dx \\, dy$$\nConvert to polar coordinates where $x^2+y^2 = r^2$ and $dx \\, dy = r \\, dr \\, d\\theta$:\n$$I^2 = \\int_{0}^{2\\pi} \\int_{0}^{\\infty} e^{-r^2} r \\, dr \\, d\\theta = \\int_{0}^{2\\pi} d\\theta \\cdot \\int_{0}^{\\infty} r e^{-r^2} dr$$\nUse $u$-substitution for the inner integral: $u = r^2 \\implies du = 2r \\, dr$:\n$$\\int_{0}^{\\infty} r e^{-r^2} dr = \\frac{1}{2} \\int_{0}^{\\infty} e^{-u} du = \\frac{1}{2} [-e^{-u}]_0^{\\infty} = \\frac{1}{2}(0 - (-1)) = \\frac{1}{2}$$\nTherefore:\n$$I^2 = 2\\pi \\cdot \\frac{1}{2} = \\pi \\implies I = \\sqrt{\\pi}$$\nBy substitution $x = t/\\sqrt{2}$, we obtain the standard Gaussian normalization $\\int_{-\\infty}^{\\infty} e^{-t^2/2} dt = \\sqrt{2\\pi}$.',
        proofHe: 'נוכיח את ערך **האינטגרל הגאוסיאני** $I = \\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$ באמצעות מעבר למערכת קואורדינטות קוטביות (פולריות):\nנקח את ריבוע האינטגרל $I^2$:\n$$I^2 = \\left( \\int_{-\\infty}^{\\infty} e^{-x^2} dx \\right) \\left( \\int_{-\\infty}^{\\infty} e^{-y^2} dy \\right) = \\int_{-\\infty}^{\\infty} \\int_{-\\infty}^{\\infty} e^{-(x^2+y^2)} dx \\, dy$$\nנעבור לקואורדינטות קוטביות שבהן $x^2+y^2 = r^2$ ואיבר השטח הדיפרנציאלי הוא $dx \\, dy = r \\, dr \\, d\\theta$:\nהתחום בכל המישור הדו-ממדי מתורגם ל-$r \\in [0, \\infty)$ ו-$\\theta \\in [0, 2\\pi)$:\n$$I^2 = \\int_{0}^{2\\pi} \\int_{0}^{\\infty} e^{-r^2} r \\, dr \\, d\\theta = \\left( \\int_{0}^{2\\pi} d\\theta \\right) \\cdot \\left( \\int_{0}^{\\infty} r e^{-r^2} dr \\right)$$\nנפתור את האינטגרל הימני בעזרת שיטת ההצבה: $u = r^2 \\implies du = 2r \\, dr \\implies r \\, dr = \\frac{1}{2} du$:\n$$\\int_{0}^{\\infty} r e^{-r^2} dr = \\frac{1}{2} \\int_{0}^{\\infty} e^{-u} du = \\frac{1}{2} [-e^{-u}]_0^{\\infty} = \\frac{1}{2}$$\nנציב חזרה במכפלה:\n$$I^2 = 2\\pi \\cdot \\frac{1}{2} = \\pi \\implies I = \\sqrt{\\pi}$$\nבעזרת הצבה פשוטה $x = t/\\sqrt{2}$ נקבל את צורת הנרמול הסטנדרטית של התפלגות נורמלית:\n$$\\int_{-\\infty}^{\\infty} e^{-\\frac{t^2}{2}} dt = \\sqrt{2\\pi}$$',
        example: 'Let $X$ and $Y$ have joint probability density function $f(x,y) = 8xy$ on the region $0 \\le x \\le y \\le 1$. Verify that this density integrates to 1:\n$$I = \\int_{0}^{1} \\int_{0}^{y} 8xy \\, dx \\, dy$$\n\n**Step 1: Integrate with respect to $x$ (inner)**\n$$\\int_{0}^{y} 8xy \\, dx = [4x^2 y]_{x=0}^{x=y} = 4y^3 - 0 = 4y^3$$\n\n**Step 2: Integrate with respect to $y$ (outer)**\n$$I = \\int_{0}^{1} 4y^3 \\, dy = [y^4]_0^1 = 1^4 - 0 = 1$$\nThis proves the joint density is correctly normalized.',
        exampleHe: 'יהיו $X$ ו-$Y$ שני משתנים מקריים רציפים בעלי פונקציית צפיפות משותפת $f(x,y) = 8xy$ המוגדרת אך ורק מעל התחום המשולשי $0 \\le x \\le y \\le 1$. נוכיח כי נפח פונקציית הצפיפות מעל תחום זה שווה בדיוק ל-1 (נרמול דו-ממדי):\n$$I = \\int_{0}^{1} \int_{0}^{y} 8xy \\, dx \\, dy$$\n\n**שלב 1: פתרון האינטגרל הפנימי (לפי $x$, כאשר $y$ נחשב כקבוע)**\n$$\\int_{0}^{y} 8xy \\, dx = 8y \\left[ \\frac{x^2}{2} \\right]_{x=0}^{x=y} = 8y \\cdot \\frac{y^2}{2} = 4y^3$$\n\n**שלב 2: פתרון האינטגרל החיצוני (לפי $y$, בטווח הקבועים של $y$)**\n$$I = \\int_{0}^{1} 4y^3 \\, dy = [y^4]_0^1 = 1^4 - 0 = 1$$\nהוכחנו כי תנאי הנרמול הדו-ממדי מתקיים בצורה מושלמת.',
        keyTakeaway: 'When setting up double integrals over non-rectangular regions, the inner integration limits must contain variables describing the boundary curves, whereas the outer integration limits must strictly contain constant numbers.',
        keyTakeawayHe: 'בקביעת גבולות של אינטגרלים כפולים מעל תחומים שאינם מלבניים, גבולות האינטגרל הפנימי חייבים להכיל משתנים המתארים את עקומות הגבול, בעוד שגבולות האינטגרל החיצוני חייבים להכיל אך ורק מספרים קבועים.'
      }
    ],
    quiz: [
      {
        question: 'Two events A and B have probabilities P(A) = 0.8 and P(B) = 0.7. What is the Frechet-Bonferroni lower bound for their intersection P(A ∩ B)?',
        questionHe: 'יהיו $A$ ו-$B$ שני מאורעות במרחב הסתברות כלשהו, בעלי הסתברויות ידועות $P(A) = 0.8$ ו-$P(B) = 0.7$. מהו חסם פרשה-בונפרוני התחתון (Frechet-Bonferroni Bound) עבור הסתברות החיתוך שלהם $P(A \\cap B)$?',
        options: [
          '0.5',
          '0.0',
          '0.7',
          '0.1'
        ],
        optionsHe: [
          '0.5',
          '0.0',
          '0.7',
          '0.1'
        ],
        correctAnswerIndex: 0,
        explanation: 'By the Inclusion-Exclusion formula, P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Since the probability of the union cannot exceed 1, we get P(A ∩ B) >= P(A) + P(B) - 1. Substituting the values: P(A ∩ B) >= 0.8 + 0.7 - 1 = 0.5.',
        explanationHe: 'על פי נוסחת ההכלה וההפרדה הבסיסית: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. \nנבודד אלגברית את איבר החיתוך: $P(A \\cap B) = P(A) + P(B) - P(A \\cup B)$. \nמכיוון שערך פונקציית הסתברות חסום מלעיל על ידי 1, ההסתברות המקסימלית האפשרית של האיחוד היא לכל היותר 1 ($P(A \\cup B) \\le 1$). כדי למזער את החיתוך, עלינו למקסם את איבר האיחוד ולהציב 1: \n$$P(A \\cap B) \\ge 0.8 + 0.7 - 1 = 0.5$$\nלכן, החסם התחתון המחייב לחיתוך הוא בדיוק 0.5.'
      },
      {
        question: 'Suppose a rare disease affects 0.1% of the population. A test has a 99% sensitivity (true positive) and a 5% false positive rate. If a person tests positive, what is the approximate probability that they actually have the disease?',
        questionHe: 'נניח כי מחלה נדירה תוקפת 0.1% מהאוכלוסייה. לבדיקה רפואית יש רגישות (Sensitivity) של 99% (חיובי אמיתי) ושיעור חיוביים כוזבים (False positive) של 5%. אם אדם קיבל תוצאה חיובית בבדיקה, מהי ההסתברות המקורבת שהוא אכן חולה במחלה?',
        options: [
          '99%',
          '2%',
          '50%',
          '8%'
        ],
        optionsHe: [
          '99%',
          '2%',
          '50%',
          '8%'
        ],
        correctAnswerIndex: 1,
        explanation: 'Using Bayes\' theorem: P(D | T+) = P(T+ | D)*P(D) / [P(T+ | D)*P(D) + P(T+ | D^c)*P(D^c)]. Numerator = 0.99 * 0.001 = 0.00099. Denominator = 0.00099 + 0.05 * 0.999 = 0.05094. P(D | T+) = 0.00099 / 0.05094 = 0.0194 (about 2%).',
        explanationHe: 'על פי משפט בייס: $P(D \\mid T^+) = \\frac{P(T^+ \\mid D) \\cdot P(D)}{P(T^+ \\mid D) \\cdot P(D) + P(T^+ \\mid D^c) \\cdot P(D^c)}$. \nהמונה: $0.99 \\cdot 0.001 = 0.00099$. \nהמכנה: $0.00099 + 0.05 \\cdot 0.999 = 0.05094$. \nנקבל: $P(D \\mid T^+) = \\frac{0.00099}{0.05094} \\approx 0.0194$ (בערך 2%).'
      }
    ]
  },
  {
    id: 'prob-1',
    courseId: 'prob',
    chapterNumber: '1',
    title: 'Chapter 1: Continuous Random Variables & Density Functions',
    titleHe: 'פרק 1: משתנים מקריים רציפים ופונקציות צפיפות',
    intro: 'While discrete models deal with countable outcomes, physical and biological processes—such as time, distance, or continuous voltage—require continuous random variables. This chapter introduces continuous probability spaces, Cumulative Distribution Functions (CDFs), Probability Density Functions (PDFs), mathematical expectations, and advanced variable transformation techniques.',
    introHe: 'בעוד שמודלים בדידים עוסקים בתוצאות ספירות, תהליכים פיזיקליים וביולוגיים רבים—כגון זמן, מרחק או מתח חשמלי רציף—דורשים עבודה עם משתנים מקריים רציפים. פרק זה מציג את מרחבי ההסתברות הרציפים, פונקציות התפלגות מצטברת (CDF), פונקציות צפיפות הסתברות (PDF), תוחלת מתמטית וטכניקות מתקדמות לטרנספורמציה של משתנים מקריים.',
    motivation: 'In engineering, signal processing, and quantitative finance, variables are rarely discrete. To model continuous distributions (like Gaussian noise, exponential decay, or stock price jumps), we must move from summations to integrals, ensuring that probabilities are assigned to intervals rather than isolated points where P(X=x)=0.',
    motivationHe: 'בהנדסה, עיבוד אותות ופיננסים כמותיים, משתנים הם לעיתים רחוקות בדידים בלבד. כדי למדל התפלגויות רציפות (כמו רעש גאוסיאני, דעיכה מעריכית או תנודות במחירי מניות), עלינו לעבור מסכומים לאינטגרלים. מעבר זה מבטיח שההסתברויות יוקצו לתתי-קטעים ולא לנקודות מבודדות, שבהן ההסתברות היא אפס.',
    definitions: [
      {
        id: 'def-prob-1-1',
        title: 'Continuous Cumulative Distribution Function (CDF)',
        titleHe: 'פונקציית התפלגות מצטברת רציפה (CDF)',
        content: 'For any continuous random variable $X$, the Cumulative Distribution Function (CDF), denoted by $F_X(x)$, represents the probability that the variable takes a value less than or equal to $x$:\n$$F_X(x) = P(X \\le x)$$\n\n**Core Mathematical Properties of the CDF:**\n1. **Monotonicity**: The CDF is a non-decreasing function. If $x_1 < x_2$, then:\n$$F_X(x_1) \\le F_X(x_2)$$\n2. **Boundary Limits**:\n$$\\lim_{x \\to -\\infty} F_X(x) = 0 \\quad \\text{and} \\quad \\lim_{x \\to \\infty} F_X(x) = 1$$\n3. **Right-Continuity**: For all $x \\in \\mathbb{R}$:\n$$\\lim_{h \\to 0^+} F_X(x + h) = F_X(x)$$\n4. **Interval Probability Calculation**: For any interval $(a, b]$:\n$$P(a < X \\le b) = F_X(b) - F_X(a)$$',
        contentHe: 'עבור כל משתנה מקרי רציף $X$, פונקציית ההתפלגות המצטברת (CDF), המסומנת ב-$F_X(x)$, מייצגת את ההסתברות שהמשתנה יקבל ערך קטן או שווה ל-$x$:\n$$F_X(x) = P(X \\le x)$$\n\n**תכונות מתמטיות יסודיות של ה-CDF:**\n1. **מונוטוניות**: ה-CDF היא פונקציה אי-יורדת. אם $x_1 < x_2$, אז:\n$$F_X(x_1) \\le F_X(x_2)$$\n2. **גבולות בקצוות**:\n$$\\lim_{x \\to -\\infty} F_X(x) = 0 \\quad \\text{וכן} \\quad \\lim_{x \\to \\infty} F_X(x) = 1$$\n3. **רציפות מימין**: לכל $x \\in \\mathbb{R}$:\n$$\\lim_{h \\to 0^+} F_X(x + h) = F_X(x)$$\n4. **חישוב הסתברות בקטע**: לכל מרווח $(a, b]$:\n$$P(a < X \\le b) = F_X(b) - F_X(a)$$',
        simplifiedLogic: 'The CDF acts as an accumulator of probability weight starting from the far left ($-\\infty$) up to the current point $x$. Because probability is positive, the accumulated value can only grow or stay flat as you move right (Monotonicity), eventually capping at exactly 1 when all possible outcomes are covered (Normalization).',
        simplifiedLogicHe: 'אפשר לחשוב על ה-CDF כעל צובר של מסת הסתברות שמתחיל מהקצה השמאלי הקיצוני ($-\\infty$) ועד לנקודה הנוכחית $x$. כיוון שהסתברות היא תמיד אי-שלילית, הערך הצבור יכול רק לגדול או להישאר קבוע ככל שננוע ימינה (מונוטוניות), עד שהוא מגיע לערך המקסימלי שהוא בדיוק 1 כאשר כל התוצאות האפשריות כוסו.',
        toolboxConnection: 'The CDF is widely used to define quantiles, percentiles, and critical value thresholds in computer simulations, statistical significance tests, and generator algorithms.',
        toolboxConnectionHe: 'פונקציית ה-CDF נמצאת בשימוש נרחב להגדרת אחוזונים (percentiles), קוונטילים וספי ערכים קריטיים בסימולציות מחשב, מבחני מובהקות סטטיסטיים ואלגוריתמים ליצירת מספרים אקראיים.',
        keyTakeaway: 'The CDF accumulates probability from left to right, bounding its output values between 0 and 1.',
        keyTakeawayHe: 'ה-CDF צובורת הסתברות משמאל לימין, וערכי הפלט שלה חסומים תמיד בין 0 ל-1.',
        proof: 'Proof of Right-Continuity using Measure Theory Continuity:\nLet $A_n = (-\\infty, x + 1/n]$ be a sequence of events. Notice that $A_n$ is a decreasing sequence ($A_{n+1} \\subseteq A_n$) whose intersection is:\n$$\\bigcap_{n=1}^{\\infty} A_n = (-\\infty, x]$$\nBy the Continuity of Probability measures for decreasing events, we have:\n$$\\lim_{n \\to \\infty} P(A_n) = P\\left(\\bigcap_{n=1}^{\\infty} A_n\\right)$$\nSubstituting the CDF definition yields:\n$$\\lim_{n \\to \\infty} F_X(x + 1/n) = F_X(x)$$\nSince this holds for any decreasing sequence of intervals converging to $x$, the function is right-continuous.',
        proofHe: '**הוכחת רציפות מימין באמצעות תכונת הרציפות של מידות הסתברות:**\n\nנגדיר סדרה של אירועים $A_n = (-\\infty, x + 1/n]$. נשים לב ש-$A_n$ היא סדרה יורדת של קבוצות ($A_{n+1} \\subseteq A_n$) שהחיתוך שלהן הוא:\n$$\\bigcap_{n=1}^{\\infty} A_n = (-\\infty, x]$$\nלפי תכונת הרציפות של מידת הסתברות עבור סדרות יורדות של אירועים, מתקיים:\n$$\\lim_{n \\to \\infty} P(A_n) = P\\left(\\bigcap_{n=1}^{\\infty} A_n\\right)$$\nהצבת הגדרת ה-CDF נותנת:\n$$\\lim_{n \\to \\infty} F_X(x + 1/n) = F_X(x)$$\nמכיוון שזה נכון לכל סדרה יורדת של קטעים המתכנסת ל-$x$, הפונקציה רציפה מימין.'
      },
      {
        id: 'def-prob-1-2',
        title: 'Probability Density Function (PDF) & Core Properties',
        titleHe: 'פונקציית צפיפות הסתברות (PDF) ותכונותיה',
        content: 'For a continuous random variable $X$, the Probability Density Function (PDF), denoted by $f_X(x)$, represents the rate of change of the probability accumulation. It is the derivative of the CDF:\n$$f_X(x) = \\frac{d}{dx} F_X(x)$$\n\n**Essential Mathematical Properties of the PDF:**\n1. **Non-negativity**: For all $x \\in \\mathbb{R}$:\n$$f_X(x) \\ge 0$$\n2. **Total Area Normalization**:\n$$\\int_{-\\infty}^{\\infty} f_X(x) dx = 1$$\n3. **Probability as Area under Curve**:\n$$P(a < X \\le b) = \\int_{a}^{b} f_X(x) dx$$\n4. **Single-Point Probability**: For any specific point $c$:\n$$P(X = c) = \\int_{c}^{c} f_X(x) dx = 0$$\n5. **Density Interpretation**: The probability of $X$ falling in an infinitesimal interval of width $dx$ around $x$ is:\n$$P(x < X \\le x + dx) \\approx f_X(x) dx$$',
        contentHe: 'עבור משתנה מקרי רציף $X$, פונקציית צפיפות ההסתברות (PDF), המסומנת ב-$f_X(x)$, מייצגת את קצב השינוי של צבירת ההסתברות. היא מוגדרת כנגזרת של ה-CDF:\n$$f_X(x) = \\frac{d}{dx} F_X(x)$$\n\n**תכונות מתמטיות יסודיות של ה-PDF:**\n1. **אי-שליליות**: לכל $x \\in \\mathbb{R}$:\n$$f_X(x) \\ge 0$$\n2. **נרמול השטח הכולל**:\n$$\\int_{-\\infty}^{\\infty} f_X(x) dx = 1$$\n3. **ההסתברות כשטח מתחת לעקומה**:\n$$P(a < X \\le b) = \\int_{a}^{b} f_X(x) dx$$\n4. **הסתברות בנקודה בודדת**: לכל נקודה ספציפית $c$:\n$$P(X = c) = \\int_{c}^{c} f_X(x) dx = 0$$\n5. **משמעות הצפיפות**: ההסתברות ש-$X$ ייפול בקטע אינפיניטסימלי ברוחב $dx$ סביב $x$ היא בקירוב:\n$$P(x < X \\le x + dx) \\approx f_X(x) dx$$',
        simplifiedLogic: 'Unlike discrete variables where PMF values represent exact point probabilities, the height of a PDF $f_X(x)$ does *not* represent a probability—it represents "density" (probability per unit length). The actual probability is represented exclusively by the *area* under the density curve. Since a single mathematical point has zero width, the probability of hitting any exact point is exactly 0.',
        simplifiedLogicHe: 'בניגוד למשתנים בדידים שבהם ערכי פונקציית ההסתברות (PMF) מייצגים הסתברויות מדויקות בנקודות, הגובה של ה-PDF $f_X(x)$ אינו מייצג הסתברות—הוא מייצג "צפיפות" (הסתברות ליחידת אורך). ההסתברות הממשית מיוצגת אך ורק על ידי השטח שמתחת לעקומת הצפיפות. כיוון שלנקודה מתמטית בודדת יש רוחב אפס, השטח מעליה הוא אפס, ולכן ההסתברות לפגוע בדיוק בנקודה מסוימת היא תמיד 0.',
        toolboxConnection: 'The PDF is the fundamental building block in quantitative sciences used to construct likelihood functions for regression modeling, active filters, and deep neural network distributions.',
        toolboxConnectionHe: 'פונקציית הצפיפות היא אבן הבניין הבסיסית במדעים כמותיים המשמשת לבניית פונקציות נראות (likelihood functions) לצורך התאמת מודלים של רגרסיה, סינון רעשים ואפיון התפלגויות ברשתות נוירונים עמוקות.',
        keyTakeaway: 'Continuous probability is represented by the area under the PDF curve, making point probabilities P(X=x) exactly zero.',
        keyTakeawayHe: 'הסתברות רציפה מיוצגת על ידי השטח שמתחת לעקומת ה-PDF, מה שהופך את ההסתברות בנקודה בודדת P(X=x) לאפס בדיוק.'
      },
      {
        id: 'def-prob-1-3',
        title: 'Syllabus Case Studies: Trigonometric and Cauchy Density Functions',
        titleHe: 'מקרי מבחן מתוכנית הלימודים: פונקציות צפיפות טריגונומטריות וקושי (Cauchy)',
        content: 'We study two specific examples demonstrating the properties of continuous density functions:\n\n**1. The Sine Density Function (Trigonometric PDF)**:\nConsider a variable $X$ representing an angle with PDF:\n$$f_X(x) = \\begin{cases} \\frac{1}{2} \\sin(x) & 0 \\le x \\le \\pi \\\\ 0 & \\text{otherwise} \\end{cases}$$\n* Normalization check:\n$$\\int_{0}^{\\pi} \\frac{1}{2} \\sin(x) dx = \\frac{1}{2} \\left[ -\\cos(x) \\right]_0^{\\pi} = \\frac{1}{2} \\left( -\\cos(\\pi) - (-\\cos(0)) \\right) = \\frac{1}{2}(1 - (-1)) = 1$$\n* The resulting CDF is:\n$$F_X(x) = \\begin{cases} 0 & x < 0 \\\\ \\frac{1 - \\cos(x)}{2} & 0 \\le x \\le \\pi \\\\ 1 & x > \\pi \\end{cases}$$\n\n**2. The Cauchy Distribution**:\nConsider a variable $X$ defined over all real numbers with PDF:\n$$f_X(x) = \\frac{1}{\\pi(1 + x^2)} \\quad \\text{for } -\\infty < x < \\infty$$\n* Normalization check using the inverse tangent derivative:\n$$\\int_{-\\infty}^{\\infty} \\frac{1}{\\pi(1+x^2)} dx = \\frac{1}{\\pi} \\left[ \\arctan(x) \\right]_{-\\infty}^{\\infty} = \\frac{1}{\\pi} \\left( \\frac{\\pi}{2} - \\left( -\\frac{\\pi}{2} \\right) \\right) = 1$$\n* The resulting CDF is:\n$$F_X(x) = \\frac{1}{2} + \\frac{1}{\\pi} \\arctan(x)$$',
        contentHe: 'אנו לומדים שתי דוגמאות ספציפיות המדגימות את התכונות הייחודיות של פונקציות צפיפות רציפות:\n\n**1. פונקציית צפיפות סינוס (Trigonometric PDF)**:\nנניח משתנה מקרי $X$ המייצג זווית עם PDF הנתון על ידי:\n$$f_X(x) = \\begin{cases} \\frac{1}{2} \\sin(x) & 0 \\le x \\le \\pi \\\\ 0 & \\text{אחרת} \\end{cases}$$\n* בדיקת נרמול:\n$$\\int_{0}^{\\pi} \\frac{1}{2} \\sin(x) dx = \\frac{1}{2} \\left[ -\\cos(x) \\right]_0^{\\pi} = \\frac{1}{2} \\left( -\\cos(\\pi) - (-\\cos(0)) \\right) = \\frac{1}{2}(1 - (-1)) = 1$$\n* פונקציית ה-CDF המתקבלת היא:\n$$F_X(x) = \\begin{cases} 0 & x < 0 \\\\ \\frac{1 - \\cos(x)}{2} & 0 \\le x \\le \\pi \\\\ 1 & x > \\pi \\end{cases}$$\n\n**2. התפלגות קושי (Cauchy)**:\nמשתנה מקרי $X$ המוגדר על פני כל הישר הממשי עם PDF מהצורה:\n$$f_X(x) = \\frac{1}{\\pi(1 + x^2)} \\quad \\text{עבור } -\\infty < x < \\infty$$\n* בדיקת נרמול באמצעות הנגזרת של פונקציית הטנגנס ההפוך (arctan):\n$$\\int_{-\\infty}^{\\infty} \\frac{1}{\\pi(1+x^2)} dx = \\frac{1}{\\pi} \\left[ \\arctan(x) \\right]_{-\\infty}^{\\infty} = \\frac{1}{\\pi} \\left( \\frac{\\pi}{2} - \\left( -\\frac{\\pi}{2} \\right) \\right) = 1$$\n* פונקציית ה-CDF המתקבלת היא:\n$$F_X(x) = \\frac{1}{2} + \\frac{1}{\\pi} \\arctan(x)$$',
        simplifiedLogic: 'The Sine density represents a smooth, symmetric probability distribution centered at $\\pi/2$. The Cauchy distribution is highly unique—it is a "symmetric, bell-shaped" curve similar to the Normal distribution, but with extremely "heavy tails". These tails decay so slowly that if you try to integrate $x f_X(x)$ to calculate the average expectation, the positive and negative tail integrals both diverge, meaning the Cauchy distribution has **no mathematical expectation**!',
        simplifiedLogicHe: 'הצפיפות של פונקציית הסינוס מייצגת התפלגות חלקה וסימטרית הממוקדת סביב $\\pi/2$. לעומת זאת, התפלגות קושי היא מקרה ייחודי ביותר—זוהי עקומה סימטרית בצורת פעמון הדומה להתפלגות נורמלית, אך עם "זנבות עבים" (heavy tails) בצורה קיצונית. זנבות אלו דועכים כה לאט, שאם ננסה לחשב את התוחלת המתמטית $\\mathbb{E}[X]$ על ידי אינטגרציה של $x f_X(x)$, האינטגרלים בזנב החיובי והשלילי יתבדרו שניהם, כלומר **להתפלגות קושי אין תוחלת מוגדרת**!',
        toolboxConnection: 'The Cauchy distribution represents the ratio of two independent standard Normal variables. It serves as a classic benchmark model in robust statistics, signal processing under noise, and mechanical physics.',
        toolboxConnectionHe: 'התפלגות קושי מייצגת יחס בין שני משתנים נורמליים סטנדרטיים בלתי תלויים. היא משמשת כמודל להשוואה (benchmark) בסטטיסטיקה חסינה (robust statistics), בעיבוד אותות תחת רעש חזק ובפיזיקה של מערכות מכניות.',
        keyTakeaway: 'The Cauchy distribution is a symmetric distribution that lacks both a defined expectation and a defined variance due to its heavy tails.',
        keyTakeawayHe: 'התפלגות קושי היא התפלגות סימטרית שאין לה תוחלת מתמטית או שונות מוגדרת בשל הזנבות העבים שלה.',
        proof: 'Proof of Non-existence of Expectation for the Cauchy Distribution:\nThe expectation $\\mathbb{E}[X]$ is defined by the integral:\n$$\\mathbb{E}[X] = \\int_{-\\infty}^{\\infty} x \\cdot \\frac{1}{\\pi(1+x^2)} dx$$\nFor this improper integral to exist, the integrals over the positive and negative sub-domains must converge independently. Let us examine the positive tail limit:\n$$\\int_{0}^{\\infty} \\frac{x}{\\pi(1+x^2)} dx = \\lim_{R \\to \\infty} \\left[ \\frac{1}{2\\pi} \\ln(1+x^2) \\right]_0^R = \\lim_{R \\to \\infty} \\frac{1}{2\\pi} \\ln(1+R^2) = \\infty$$\nSince the absolute integral diverges to $\\infty$, the overall expectation integral is undefined (leading to the indeterminate form $\\infty - \\infty$). Therefore, the Cauchy distribution has no mean.',
        proofHe: '**הוכחת אי-קיום התוחלת עבור התפלגות קושי:**\n\nהתוחלת $\\mathbb{E}[X]$ מוגדרת על ידי האינטגרל:\n$$\\mathbb{E}[X] = \\int_{-\\infty}^{\\infty} x \\cdot \\frac{1}{\\pi(1+x^2)} dx$$\nכדי שאינטגרל לא אמיתי זה יהיה קיים, האינטגרלים על פני תת-התחומים החיוביים והשליליים חייבים להתכנס באופן בלתי תלוי. נבחן את גבול הזנב החיובי:\n$$\\int_{0}^{\\infty} \\frac{x}{\\pi(1+x^2)} dx = \\lim_{R \\to \\infty} \\left[ \\frac{1}{2\\pi} \\ln(1+x^2) \\right]_0^R = \\lim_{R \\to \\infty} \\frac{1}{2\\pi} \\ln(1+R^2) = \\infty$$\nכיוון שהאינטגרל בערך מוחלט מתבדר לאינסוף, אינטגרל התוחלת הכולל אינו מוגדר (מוביל לצורה הבלתי מסוימת $\\infty - \\infty$). על כן, להתפלגות קושי אין ממוצע/תוחלת.'
      },
      {
        id: 'def-prob-1-4',
        title: 'Comparison Model: Discrete vs. Continuous Random Variables',
        titleHe: 'מודל השוואתי: משתנים מקריים בדידים מול רציפים',
        content: 'To prevent any layout confusion or conceptual pitfalls, we map the entire probability architecture across both discrete and continuous domains using inline equations for table compatibility:\n\n| Mathematical Feature | Discrete Random Variables | Continuous Random Variables |\n| :--- | :--- | :--- |\n| **Sample Space $\\Omega$** | Countable (finite or countably infinite) | Uncountable (intervals on the real line $\\mathbb{R}$) |\n| **Fundamental Probability Block** | Probability Mass Function (PMF): $p_X(x)$ | Probability Density Function (PDF): $f_X(x)$ |\n| **Total Normalization** | $\\sum_{x} p_X(x) = 1$ | $\\int_{-\\infty}^{\\infty} f_X(x) dx = 1$ |\n| **Point Probability** | $P(X = x) = p_X(x)$ | $P(X = x) = 0$ |\n| **Interval Probability** | $P(X \\in A) = \\sum_{x \\in A} p_X(x)$ | $P(X \\in A) = \\int_{A} f_X(x) dx$ |\n| **Cumulative Distribution (CDF)** | $F_X(t) = \\sum_{x \\le t} p_X(x)$ | $F_X(t) = \\int_{-\\infty}^{t} f_X(x) dx$ |\n| **Expectation $\\mathbb{E}[X]$** | $\\mathbb{E}[X] = \\sum_{x} x \\cdot p_X(x)$ | $\\mathbb{E}[X] = \\int_{-\\infty}^{\\infty} x \\cdot f_X(x) dx$ |\n| **Variance $\\text{Var}(X)$** | $\\sum_{x} (x - \\mu)^2 p_X(x)$ | $\\int_{-\\infty}^{\\infty} (x - \\mu)^2 f_X(x) dx$ |',
        contentHe: 'כדי למנוע בלבול מושגי, אנו ממפים את כל הארכיטקטורה ההסתברותית בין התחום הבדיד והרציף באמצעות נוסחאות מובנות בטבלה:\n\n| תכונה מתמטית | משתנה מקרי בדיד | משתנה מקרי רציף |\n| :--- | :--- | :--- |\n| **מרחב המדגם $\\Omega$** | בן-מנייה (סופי או אינסופי בן-מנייה) | אינו בן-מנייה (מרווחים על הישר הממשי $\\mathbb{R}$) |\n| **אבן בניין הסתברותית** | פונקציית הסתברות (PMF): $p_X(x)$ | פונקציית צפיפות (PDF): $f_X(x)$ |\n| **תנאי נרמול כולל** | $\\sum_{x} p_X(x) = 1$ | $\\int_{-\\infty}^{\\infty} f_X(x) dx = 1$ |\n| **הסתברות בנקודה** | $P(X = x) = p_X(x)$ | $P(X = x) = 0$ |\n| **הסתברות בקטע** | $P(X \\in A) = \\sum_{x \\in A} p_X(x)$ | $P(X \\in A) = \\int_{A} f_X(x) dx$ |\n| **פונקציית התפלגות (CDF)** | $F_X(t) = \\sum_{x \\le t} p_X(x)$ | $F_X(t) = \\int_{-\\infty}^{t} f_X(x) dx$ |\n| **תוחלת $\\mathbb{E}[X]$** | $\\mathbb{E}[X] = \\sum_{x} x \\cdot p_X(x)$ | $\\mathbb{E}[X] = \\int_{-\\infty}^{\\infty} x \\cdot f_X(x) dx$ |\n| **שונות $\\text{Var}(X)$** | $\\sum_{x} (x - \\mu)^2 p_X(x)$ | $\\int_{-\\infty}^{\\infty} (x - \\mu)^2 f_X(x) dx$ |',
        simplifiedLogic: 'Think of discrete probability as distributing "pebbles" of mass at specific, isolated coordinate points. Think of continuous probability as spreading a "layer of butter" smoothly over a continuous bread surface. A single mathematical point of zero width holds no physical butter (probability is 0), but any interval of finite width holds a measurable mass (probability is positive).',
        simplifiedLogicHe: 'תארו לעצמכם הסתברות בדידה כמו פיזור "אבנים קטנות" של מסה בנקודות קואורדינטה מבודדות. לעומת זאת, הסתברות רציפה היא כמו מריחת "שכבת חמאה" אחידה על פני פרוסת לחם רציפה. נקודה מתמטית בודדת ללא רוחב אינה נושאת חמאה בכלל (הסתברות 0), אך כל קטע בעל רוחב סופי נושא כמות חמאה מדידה (הסתברות חיובית).',
        toolboxConnection: 'Using this comparison matrix helps you choose the correct model—summation algorithms for discrete database indexes vs. integral simulations for continuous sensor noise.',
        toolboxConnectionHe: 'שימוש במטריצת השוואה זו מסייע בבחירת המודל הנכון—אלגוריתמים מבוססי סכומים עבור מסדי נתונים בדידים מול סימולציות אינטגרליות לרעש חיישנים רציף.',
        keyTakeaway: 'Discrete variables deal with point mass counts, while continuous variables deal with density area intervals.',
        keyTakeawayHe: 'משתנים בדידים עוסקים בספירה של נקודות מסה, בעוד שמשתנים רציפים עוסקים בשטח של צפיפות ההסתברות בקטעים.'
      },
      // ==========================================
      //        PRACTICE SESSION 1 PROBLEMS
      // ==========================================
      {
        id: 'def-prob-1-practice-1',
        title: 'Practice Problem 1: Piecewise PDF Validation & Proof (Question 1.b)',
        titleHe: 'בעיית תרגול 1: הוכחה ואימות של פונקציית צפיפות למקוטעין (שאלה 1.ב)',
        isPractice: true,
        content: 'Let $X$ be a continuous random variable with a piecewise PDF given by:\n$$f_X(x) = \\begin{cases} 2-x & 1 < x \\le 2 \\\\ 1 & 2 < x \\le 2.5 \\\\ 0 & \\text{otherwise} \\end{cases}$$\n\nProve that $f_X(x)$ is a valid Probability Density Function (PDF) by demonstrating that it satisfies the normalization requirement.',
        contentHe: 'יהי $X$ משתנה מקרי רציף עם PDF למקוטעין הנתון על ידי:\n$$f_X(x) = \\begin{cases} 2-x & 1 < x \\le 2 \\\\ 1 & 2 < x \\le 2.5 \\\\ 0 & \\text{אחרת} \\end{cases}$$\n\nהוכיחו כי $f_X(x)$ היא פונקציית צפיפות הסתברות (PDF) תקפה על ידי הגדרה ואימות של דרישת הנרמול.',
        simplifiedLogic: 'To show a function is a valid PDF, we must confirm two conditions: first, that it is non-negative everywhere (which is clear as $2-x > 0$ for $x \\in (1,2]$ and $1 > 0$), and second, that the total area under the curve equals exactly 1. Since the function is piecewise, we split the definite integral into active sub-intervals and sum them.',
        simplifiedLogicHe: 'כדי להראות שפונקציה היא PDF תקפה, עלינו לוודא שני תנאים: ראשית, שהיא אי-שלילית בכל מקום (מה שברור שכן כיוון ש-$2-x > 0$ עבור $x \\in (1,2]$ וכן $1 > 0$), ושנית, שהשטח הכולל מתחת לעקומה שווה בדיוק ל-1. מאחר שהפונקציה מוגדרת למקוטעין, נפצל את האינטגרל המסוים לתתי-הקטעים הפעילים ונסכום אותם.',
        toolboxConnection: 'Piecewise constant and linear functions are extremely common in digital sampling filters, electrical load profiles, and continuous uniform transformations.',
        toolboxConnectionHe: 'פונקציות ליניאריות וקבועות למקוטעין נפוצות מאוד במסנני דגימה דיגיטליים, באפיון עומסי חשמל רציפים ובטרנספורמציות אחידות.',
        keyTakeaway: 'A valid PDF must be non-negative everywhere and integrate to exactly 1 over its entire domain.',
        keyTakeawayHe: 'פונקציית PDF תקפה חייבת להיות אי-שלילית בכל מקום ולהסתכם באינטגרל ל-1 בדיוק על פני כל התחום שלה.',
        proof: '**Rigorous Step-by-Step Mathematical Proof:**\n\nTo prove normalization, we evaluate the improper integral of $f_X(x)$ over the entire real line:\n$$\\int_{-\\infty}^{\\infty} f_X(x) dx = \\int_{1}^{2} (2-x) dx + \\int_{2}^{2.5} 1 dx$$\n\nEvaluate the first integral using the power rule:\n$$\\int_{1}^{2} (2-x) dx = \\left[ 2x - \\frac{x^2}{2} \\right]_1^2$$\nSubstitute boundaries:\n$$\\left( 2(2) - \\frac{4}{2} \\right) - \\left( 2(1) - \\frac{1}{2} \\right) = (4 - 2) - \\left(2 - \\frac{1}{2}\\right) = 2 - 1.5 = 0.5$$\n\nEvaluate the second integral:\n$$\\int_{2}^{2.5} 1 dx = [x]_2^{2.5} = 2.5 - 2 = 0.5$$\n\nSum the two areas:\n$$\\int_{-\\infty}^{\\infty} f_X(x) dx = 0.5 + 0.5 = 1$$\n\nSince the total integrated area is exactly 1 and $f_X(x) \\ge 0$ for all $x$, $f_X(x)$ is mathematically proved to be a valid PDF.',
        proofHe: '**פתרון מתמטי מפורט שלב אחר שלב:**\n\nכדי להוכיח נרמול, נחשב את האינטגרל של $f_X(x)$ על פני כל הישר הממשי:\n$$\\int_{-\\infty}^{\\infty} f_X(x) dx = \\int_{1}^{2} (2-x) dx + \\int_{2}^{2.5} 1 dx$$\n\nנפתור את האינטגרל הראשון באמצעות חוקי האינטגרציה הבסיסיים:\n$$\\int_{1}^{2} (2-x) dx = \\left[ 2x - \\frac{x^2}{2} \\right]_1^2$$\nנציב את הגבולות:\n$$\\left( 2(2) - \\frac{4}{2} \\right) - \\left( 2(1) - \\frac{1}{2} \\right) = (4 - 2) - \\left(2 - \\frac{1}{2}\\right) = 2 - 1.5 = 0.5$$\n\nנפתור את האינטגרל השני:\n$$\\int_{2}^{2.5} 1 dx = [x]_2^{2.5} = 2.5 - 2 = 0.5$$\n\nנסכום את שני השטחים שקיבלנו:\n$$\\int_{-\\infty}^{\\infty} f_X(x) dx = 0.5 + 0.5 = 1$$\n\nמאחר שהשטח הכולל הוא בדיוק 1 ומתקיים $f_X(x) \\ge 0$ לכל $x$, הוכח מתמטית כי $f_X(x)$ היא פונקציית צפיפות (PDF) תקפה.'
      },
      {
        id: 'def-prob-1-practice-2',
        title: 'Practice Problem 2: Linear PDF Normalization, CDF & Conditional Probability (Question 2)',
        titleHe: 'בעיית תרגול 2: נרמול PDF ליניארי, מציאת CDF והסתברות מותנית (שאלה 2)',
        isPractice: true,
        content: 'A continuous random variable $X$ has a Probability Density Function defined by:\n$$f_X(x) = \\begin{cases} c(1 + x) & 2 \\le x \\le 5 \\\\ 0 & \\text{otherwise} \\end{cases}$$\n\n1. **Part A**: Calculate the normalization constant $c$.\n2. **Part B**: Calculate the Cumulative Distribution Function (CDF), $F_X(x)$.\n3. **Part C**: Calculate the conditional probability:\n$$P(3 < X < 4 \\mid X > 1)$$',
        contentHe: 'עבור משתנה מקרי רציף $X$, נתונה פונקציית צפיפות ההסתברות הבאה:\n$$f_X(x) = \\begin{cases} c(1 + x) & 2 \\le x \\le 5 \\\\ 0 & \\text{אחרת} \\end{cases}$$\n\n1. **חלק א**: מצאו את קבוע הנרמול $c$.\n2. **חלק ב**: מצאו את פונקציית ההתפלגות המצטברת (CDF), $F_X(x)$.\n3. **חלק ג**: חשבו את ההסתברות המותנית הבאה:\n$$P(3 < X < 4 \\mid X > 1)$$',
        simplifiedLogic: 'In Part A, we integrate the linear function over $[2, 5]$ and solve for $c$. In Part B, we integrate $f_X(t)$ from the starting boundary $t=2$ to $x$ to obtain the CDF. In Part C, we apply the conditional probability formula. Because the variable is only defined on $[2, 5]$, the event $X > 1$ is certain ($P(X > 1) = 1$), which simplifies the calculation.',
        simplifiedLogicHe: 'בחלק א, נבצע אינטגרציה של הפונקציה הליניארית על פני הקטע $[2, 5]$ ונשווה ל-1 כדי למצוא את $c$. בחלק ב, נבצע אינטגרציה ל-$f_X(t)$ מגבול ההתחלה $t=2$ ועד לנקודה $x$ כללית לקבלת ה-CDF. בחלק ג, נשתמש בנוסחת ההסתברות המותנית. מאחר שהמשתנה מוגדר רק על $[2, 5]$, המאורע $X > 1$ הוא מאורע ודאי ($P(X>1)=1$), מה שמפשט מאוד את החישוב.',
        toolboxConnection: 'Rescaling parameter models using boundary constants is a primary step in calibration algorithms and regression normalizing.',
        toolboxConnectionHe: 'כיול פרמטרים של מודלים באמצעות קבועי נרמול הוא שלב בסיסי באלגוריתמי למידה וסטטיסטיקה מפרשנית.',
        keyTakeaway: 'Conditional probability scales the active sample space, and conditioning on a certain event leaves the interval probabilities unchanged.',
        keyTakeawayHe: 'הסתברות מותנית מצמצמת את מרחב המדגם הפעיל, והתנייה על מאורע ודאי אינה משנה את ההסתברות המקורית של הקטע.',
        proof: '**Rigorous Step-by-Step Solution:**\n\n**Part A: Calculate Constant $c$**\nWe integrate the PDF over its active domain $[2, 5]$ and set it to 1:\n$$\\int_{2}^{5} c(1 + x) dx = 1 \\implies c \\left[ x + \\frac{x^2}{2} \\right]_2^5 = 1$$\nEvaluate the boundaries:\n$$c \\left( \\left( 5 + \\frac{25}{2} \\right) - \\left( 2 + \\frac{4}{2} \\right) \\right) = 1$$\n$$c \\left( 17.5 - 4 \\right) = 1 \\implies c \\cdot 13.5 = 1 \\implies c \\cdot \\frac{27}{2} = 1 \\implies c = \\frac{2}{27}$$\n\n**Part B: Calculate CDF $F_X(x)$**\nThe CDF is defined as $F_X(x) = \\int_{-\\infty}^{x} f_X(t) dt$. We integrate the active piece for $2 \\le x \\le 5$:\n$$F_X(x) = \\int_{2}^{x} \\frac{2}{27}(1 + t) dt = \\frac{2}{27} \\left[ t + \\frac{t^2}{2} \\right]_2^x$$\n$$F_X(x) = \\frac{2}{27} \\left( \\left(x + \\frac{x^2}{2}\\right) - \\left(2 + \\frac{4}{2}\\right) \\right) = \\frac{2}{27} \\left( x + \\frac{x^2}{2} - 4 \\right) = \\frac{x^2 + 2x - 8}{27}$$\nWe verify the upper boundary: $F_X(5) = \\frac{25 + 10 - 8}{27} = \\frac{27}{27} = 1$.\nThus, the complete CDF is:\n$$F_X(x) = \\begin{cases} 0 & x < 2 \\\\ \\frac{x^2 + 2x - 8}{27} & 2 \\le x \\le 5 \\\\ 1 & x > 5 \\end{cases}$$\n\n**Part C: Calculate Conditional Probability $P(3 < X < 4 \\mid X > 1)$**\nBy conditional probability:\n$$P(3 < X < 4 \\mid X > 1) = \\frac{P(3 < X < 4 \\cap X > 1)}{P(X > 1)}$$\nSince the variable $X$ is defined exclusively on $[2, 5]$, the event $X > 1$ represents the entire active domain, meaning $P(X > 1) = 1$. The intersection $\{3 < X < 4\} \\cap \{X > 1\}$ is simply $\{3 < X < 4\}$.\nTherefore:\n$$P(3 < X < 4 \\mid X > 1) = P(3 < X < 4) = F_X(4) - F_X(3)$$\nEvaluate using the derived CDF:\n* $F_X(4) = \\frac{16 + 8 - 8}{27} = \\frac{16}{27}$\n* $F_X(3) = \\frac{9 + 6 - 8}{27} = \\frac{7}{27}$\n$$P(3 < X < 4 \\mid X > 1) = \\frac{16}{27} - \\frac{7}{27} = \\frac{9}{27} = \\frac{1}{3} \\approx 0.333$$',
        proofHe: '**פתרון מתמטי מפורט שלב אחר שלב:**\n\n**חלק א: חישוב הקבוע $c$**\nנבצע אינטגרציה ל-PDF על פני התחום הפעיל $[2, 5]$ ונשווה ל-1:\n$$\\int_{2}^{5} c(1 + x) dx = 1 \\implies c \\left[ x + \\frac{x^2}{2} \\right]_2^5 = 1$$\nנציב את ערכי הגבולות:\n$$c \\left( \\left( 5 + \\frac{25}{2} \\right) - \\left( 2 + \\frac{4}{2} \\right) \\right) = 1$$\n$$c \\left( 17.5 - 4 \\right) = 1 \\implies c \\cdot 13.5 = 1 \\implies c \\cdot \\frac{27}{2} = 1 \\implies c = \\frac{2}{27}$$\n\n**חלק ב: חישוב ה-CDF $F_X(x)$**\nה-CDF מוגדרת כ-$F_X(x) = \\int_{-\\infty}^{x} f_X(t) dt$. נבצע אינטגרציה עבור התחום הפעיל $2 \\le x \\le 5$:\n$$F_X(x) = \\int_{2}^{x} \\frac{2}{27}(1 + t) dt = \\frac{2}{27} \\left[ t + \\frac{t^2}{2} \\right]_2^x$$\n$$F_X(x) = \\frac{2}{27} \\left( \\left(x + \\frac{x^2}{2}\\right) - \\left(2 + \\frac{4}{2}\\right) \\right) = \\frac{2}{27} \\left( x + \\frac{x^2}{2} - 4 \\right) = \\frac{x^2 + 2x - 8}{27}$$\nנוודא את הגבול העליון: $F_X(5) = \\frac{25 + 10 - 8}{27} = \\frac{27}{27} = 1$.\nעל כן, ה-CDF המלאה היא:\n$$F_X(x) = \\begin{cases} 0 & x < 2 \\\\ \\frac{x^2 + 2x - 8}{27} & 2 \\le x \\le 5 \\\\ 1 & x > 5 \\end{cases}$$\n\n**חלק ג: חישוב ההסתברות המותנית $P(3 < X < 4 \\mid X > 1)$**\nלפי הגדרת הסתברות מותנית:\n$$P(3 < X < 4 \\mid X > 1) = \\frac{P(3 < X < 4 \\cap X > 1)}{P(X > 1)}$$\nכיוון שהמשתנה $X$ מוגדר כולו בתחום $[2, 5]$, המאורע $X > 1$ מייצג את כל התחום האפשרי, ולכן ההסתברות שלו היא $P(X > 1) = 1$. החיתוך של $\{3 < X < 4\}$ עם $\{X > 1\}$ הוא פשוט $\{3 < X < 4\}$.\nמכאן:\n$$P(3 < X < 4 \\mid X > 1) = P(3 < X < 4) = F_X(4) - F_X(3)$$\nנחשב באמצעות ה-CDF שמצאנו:\n* $F_X(4) = \\frac{16 + 8 - 8}{27} = \\frac{16}{27}$\n* $F_X(3) = \\frac{9 + 6 - 8}{27} = \\frac{7}{27}$\nנקבל:\n$$P(3 < X < 4 \\mid X > 1) = \\frac{16}{27} - \\frac{7}{27} = \\frac{9}{27} = \\frac{1}{3} \\approx 0.333$$'
      },
      {
        id: 'def-prob-1-practice-3',
        title: 'Practice Problem 3: Polynomial PDF Normalization, CDF & Quantile Calculation (Question 3)',
        titleHe: 'בעיית תרגול 3: נרמול PDF פולינומי, חישוב CDF ומציאת קוונטילים/אחוזונים (שאלה 3)',
        isPractice: true,
        content: 'Let $X$ be a continuous random variable with PDF:\n$$f_X(x) = \\begin{cases} cx^2 & 0 \\le x \\le 5 \\\\ 0 & \\text{otherwise} \\end{cases}$$\n\n1. **Part A**: Find the normalization constant $c$.\n2. **Part B**: Find the value $k$ such that:\n$$P(X < k) = \\frac{1}{3}$$\n3. **Part C**: Find the complete continuous CDF, $F_X(t)$...',
        contentHe: 'יהי $X$ משתנה מקרי רציף בעל PDF מטיפוס פולינומי:\n$$f_X(x) = \\begin{cases} cx^2 & 0 \\le x \\le 5 \\\\ 0 & \\text{אחרת} \\end{cases}$$\n\n1. **חלק א**: מצאו את קבוע הנרמול $c$.\n2. **חלק ב**: מצאו את הערך $k$ המקיים:\n$$P(X < k) = \\frac{1}{3}$$\n3. **חלק ג**: מצאו את פונקציית ההתפלגות המצטברת המלאה $F_X(t)$.',
        simplifiedLogic: 'Part A uses standard polynomial integration. Part B asks us to find the 33.3rd percentile (a quantile value $k$) by setting the accumulated probability integral equal to $1/3$ and solving for $k$. Part C asks for the full continuous CDF representation across all real intervals.',
        simplifiedLogicHe: 'חלק א מבוסס על אינטגרציה פולינומית פשוטה. חלק ב מבקש מאיתנו למצוא את האחוזון ה-33.3 (ערך הקוונטיל $k$) על ידי השוואת אינטגרל ההסתברות הצבורה ל-$1/3$ ופתרון עבור $k$. חלק ג דורש ייצוג מלא של ה-CDF בכל טווחי המספרים הממשיים.',
        toolboxConnection: 'Percentile calculations and quantile functions are the main mathematical operations in risk assessment, financial value-at-risk (VaR) modeling, and performance profiling.',
        toolboxConnectionHe: 'חישובי אחוזונים ופונקציות קוונטיל הם הלב של הערכות סיכונים, מדדי Value-at-Risk (VaR) פיננסיים ואפיון ביצועי מערכות.',
        keyTakeaway: 'Quantiles are found by setting the CDF equation to the target probability and calculating the inverse function values.',
        keyTakeawayHe: 'קוונטילים נמצאים על ידי השוואת משוואת ה-CDF להסתברות היעד ופתרון המשוואה לקבלת ערך המשתנה.',
        proof: '**Rigorous Step-by-Step Solution:**\n\n**Part A: Find $c$**\nWe integrate over the active interval $[0, 5]$:\n$$\\int_{0}^{5} cx^2 dx = 1 \\implies c \\left[ \\frac{x^3}{3} \\right]_0^5 = 1$$\n$$c \\left( \\frac{125}{3} - 0 \\right) = 1 \\implies c \\cdot \\frac{125}{3} = 1 \\implies c = \\frac{3}{125}$$\n\n**Part B: Find $k$ such that $P(X < k) = 1/3$**\nWe set up the definite integral up to $k$:\n$$P(X < k) = \\int_{0}^{k} \\frac{3}{125} x^2 dx = \\frac{1}{3}$$\n$$\\frac{3}{125} \\left[ \\frac{x^3}{3} \\right]_0^k = \\frac{k^3}{125} = \\frac{1}{3}$$\nSolve for $k^3$:\n$$k^3 = \\frac{125}{3} \\implies k = \\sqrt[3]{\\frac{125}{3}} = \\frac{5}{\\sqrt[3]{3}} \\approx 3.467$$\n\n**Part C: Find the complete CDF $F_X(t)$**\nFor the active interval $0 \\le t \\le 5$:\n$$F_X(t) = \\int_{0}^{t} \\frac{3}{125} x^2 dx = \\frac{3}{125} \\left[ \\frac{x^3}{3} \\right]_0^t = \\frac{t^3}{125}$$\nTherefore, the complete CDF is:\n$$F_X(t) = \\begin{cases} 0 & t < 0 \\\\ \\frac{t^3}{125} & 0 \\le t \\le 5 \\\\ 1 & t > 5 \\end{cases}$$',
        proofHe: '**פתרון מתמטי מפורט שלב אחר שלב:**\n\n**חלק א: מציאת $c$**\nנבצע אינטגרציה על פני התחום $[0, 5]$:\n$$\\int_{0}^{5} cx^2 dx = 1 \\implies c \\left[ \\frac{x^3}{3} \\right]_0^5 = 1$$\n$$c \\left( \\frac{125}{3} - 0 \\right) = 1 \\implies c \\cdot \\frac{125}{3} = 1 \\implies c = \\frac{3}{125}$$\n\n**חלק ב: מציאת $k$ כך ש-$P(X < k) = 1/3$**\nנציב את הגדרת ההסתברות באמצעות אינטגרל עד ל-$k$:\n$$P(X < k) = \\int_{0}^{k} \\frac{3}{125} x^2 dx = \\frac{1}{3}$$\n$$\\frac{3}{125} \\left[ \\frac{x^3}{3} \\right]_0^k = \\frac{k^3}{125} = \\frac{1}{3}$$\nנחלץ את $k^3$:\n$$k^3 = \\frac{125}{3} \\implies k = \\sqrt[3]{\\frac{125}{3}} = \\frac{5}{\\sqrt[3]{3}} \\approx 3.467$$\n\n**חלק ג: מציאת ה-CDF המלאה $F_X(t)$**\nעבור התחום הפעיל $0 \\le t \\le 5$:\n$$F_X(t) = \\int_{0}^{t} \\frac{3}{125} x^2 dx = \\frac{3}{125} \\left[ \\frac{x^3}{3} \\right]_0^t = \\frac{t^3}{125}$$\nעל כן, ה-CDF המלאה היא:\n$$F_X(t) = \\begin{cases} 0 & t < 0 \\\\ \\frac{t^3}{125} & 0 \\le t \\le 5 \\\\ 1 & t > 5 \\end{cases}$$'
      },
      {
        id: 'def-prob-1-practice-4',
        title: 'Practice Problem 4: Non-linear Transformation of continuous PDF (Question 5)',
        titleHe: 'בעיית תרגול 4: טרנספורמציה לא-ליניארית של PDF רציף (שאלה 5)',
        isPractice: true,
        content: 'Let $X$ be a continuous random variable defined for $x > 0$ with PDF:\n$$f_X(x) = \\begin{cases} 2xe^{-x^2} & x > 0 \\\\ 0 & \\text{otherwise} \\end{cases}$$\n\nConsider the non-linear transformation $Y = X^2$. Derive the CDF $F_Y(y)$ and the PDF $f_Y(y)$ of the transformed variable $Y$.',
        contentHe: 'יהי $X$ משתנה מקרי רציף המוגדר עבור $x > 0$ עם PDF הבא:\n$$f_X(x) = \\begin{cases} 2xe^{-x^2} & x > 0 \\\\ 0 & \\text{אחרת} \\end{cases}$$\n\nנגדיר משתנה חדש באמצעות הטרנספורמציה הלא-ליניארית $Y = X^2$. מצאו את ה-CDF $F_Y(y)$ ואת ה-PDF $f_Y(y)$ של המשתנה המותמר $Y$.',
        simplifiedLogic: 'This is a continuous variable transformation. Since $X > 0$, the mapping $Y = X^2$ is strictly increasing, allowing us to map the CDF of $Y$ directly to the CDF of $X$ at $\\sqrt{y}$. This elegant transformation demonstrates how a Rayleigh-like distribution converts directly into a standard Exponential distribution.',
        simplifiedLogicHe: 'זוהי בעיית טרנספורמציה של משתנה רציף. מכיוון ש-$X > 0$, המיפוי $Y = X^2$ הוא מונוטוני עולה ממש, מה שמאפשר לנו לקשר ישירות בין ה-CDF של $Y$ ל-CDF של $X$ בנקודה $\\sqrt{y}$. טרנספורמציה אלגנטית זו מראה כיצד התפלגות מטיפוס ריילי (Rayleigh) הופכת ישירות להתפלגות מעריכית (Exponential) סטנדרטית.',
        toolboxConnection: 'Rayleigh and Weibull distributions model physical parameters like wind speeds, vacuum tube lifetimes, and signal amplitudes. Transforming them into Exponential models simplifies simulation math.',
        toolboxConnectionHe: 'התפלגויות ריילי ווייבול משמשות למידול מהירויות רוח, זמני חיים של רכיבים אלקטרוניים ואמפליטודת אותות. טרנספורמציה שלהן למודלים מעריכיים מפשטת משמעותית את החישובים הסימולטיביים.',
        keyTakeaway: 'Monotonic transformations map CDF boundaries directly, allowing complex distributions to be converted into simpler canonical distributions.',
        keyTakeawayHe: 'טרנספורמציות מונוטוניות מעבירות את גבולות ה-CDF בצורה ישירה, מה שמאפשר להמיר התפלגויות מורכבות להתפלגויות קנוניות פשוטות יותר.',
        proof: '**Rigorous Step-by-Step Solution:**\n\n**Step 1: Find the CDF of $X$**\nFor $x > 0$:\n$$F_X(x) = \\int_{0}^{x} 2te^{-t^2} dt$$\nLet $u = t^2$, then $du = 2t dt$:\n$$F_X(x) = \\int_{0}^{x^2} e^{-u} du = \\left[ -e^{-u} \\right]_0^{x^2} = 1 - e^{-x^2}$$\n\n**Step 2: Derive the CDF of $Y = X^2$**\nSince $X > 0$, the variable $Y$ must also be strictly positive ($Y > 0$).\n$$F_Y(y) = P(Y \\le y) = P(X^2 \\le y) = P(X \\le \\sqrt{y}) = F_X(\\sqrt{y})$$\nSubstitute $\\sqrt{y}$ into the CDF of $X$:\n$$F_Y(y) = 1 - e^{-(\\sqrt{y})^2} = 1 - e^{-y} \\quad \\text{for } y > 0$$\nTherefore, the complete CDF is:\n$$F_Y(y) = \\begin{cases} 0 & y \\le 0 \\\\ 1 - e^{-y} & y > 0 \\end{cases}$$\n\n**Step 3: Derive the PDF of $Y$**\nWe take the derivative of the CDF with respect to $y$ for $y > 0$:\n$$f_Y(y) = \\frac{d}{dy} F_Y(y) = \\frac{d}{dy} (1 - e^{-y}) = e^{-y}$$\nThus, the complete PDF of $Y$ is:\n$$f_Y(y) = \\begin{cases} e^{-y} & y > 0 \\\\ 0 & \\text{otherwise} \\end{cases}$$\nThis proves that the transformed variable $Y$ follows a standard Exponential distribution with parameter $\\lambda = 1$ ($Y \\sim \\text{Exp}(1)$).',
        proofHe: '**פתרון מתמטי מפורט שלב אחר שלב:**\n\n**שלב 1: מציאת ה-CDF של $X$**\nעבור $x > 0$:\n$$F_X(x) = \\int_{0}^{x} 2te^{-t^2} dt$$\nנציב $u = t^2$, ונקבל $du = 2t dt$:\n$$F_X(x) = \\int_{0}^{x^2} e^{-u} du = \\left[ -e^{-u} \\right]_0^{x^2} = 1 - e^{-x^2}$$\n\n**שלב 2: גזירת ה-CDF של $Y = X^2$**\nמכיוון ש-$X > 0$, גם המשתנה המותמר חייב להיות חיובי ממש ($Y > 0$).\n$$F_Y(y) = P(Y \\le y) = P(X^2 \\le y) = P(X \\le \\sqrt{y}) = F_X(\\sqrt{y})$$\nנציב את $\\sqrt{y}$ ב-CDF של $X$ שקיבלנו בשלב 1:\n$$F_Y(y) = 1 - e^{-(\\sqrt{y})^2} = 1 - e^{-y} \\quad \\text{עבור } y > 0$$\nעל כן, ה-CDF המלאה היא:\n$$F_Y(y) = \\begin{cases} 0 & y \\le 0 \\\\ 1 - e^{-y} & y > 0 \\end{cases}$$\n\n**שלב 3: גזירת ה-PDF של $Y$**\nנגזור את ה-CDF לפי $y$ עבור התחום $y > 0$:\n$$f_Y(y) = \\frac{d}{dy} F_Y(y) = \\frac{d}{dy} (1 - e^{-y}) = e^{-y}$$\nלכן, ה-PDF המלאה של $Y$ היא:\n$$f_Y(y) = \\begin{cases} e^{-y} & y > 0 \\\\ 0 & \\text{אחרת} \\end{cases}$$\nהוכחנו שערכי המשתנה המותמר $Y$ מתפלגים מעריכית עם פרמטר $\\lambda = 1$ ($Y \\sim \\text{Exp}(1)$).'
      },
      {
        id: 'def-prob-1-practice-5',
        title: 'Practice Problem 5: Rectification Transformations & Mixed CDF Derivation (Question 6)',
        titleHe: 'בעיית תרגול 5: טרנספורמציות יישור (Rectification) וגזירת CDF מעורב (שאלה 6)',
        isPractice: true,
        content: 'Let $X$ be a continuous random variable with a Cumulative Distribution Function $F_X(t)$. We define two transformed variables:\n$$X^+ = \\max(X, 0) \\quad \\text{and} \\quad X^- = \\max(-X, 0)$$\n\nDerive the complete CDFs, $F_{X^+}(t)$ and $F_{X^-}(t)$, in terms of $F_X(t)$. Explain their mathematical structure.',
        contentHe: 'יהי $X$ משתנה מקרי רציף עם פונקציית התפלגות מצטברת $F_X(t)$. נגדיר שני משתנים מותמרים חדשים:\n$$X^+ = \\max(X, 0) \\quad \\text{וכן} \\quad X^- = \\max(-X, 0)$$\n\nגזרו את ה-CDFs המלאים, $F_{X^+}(t)$ ו-$F_{X^-}(t)$, באמצעות $F_X(t)$. הסבירו את המבנה המתמטי הייחודי שמתקבל.',
        simplifiedLogic: 'This problem covers rectification transforms, which are critical in statistical signal processing. These operators map continuous ranges (like all negative numbers) to a single point 0. This collapses continuous probability density into a discrete point mass at 0, resulting in "mixed" random variables.',
        simplifiedLogicHe: 'בעיה זו עוסקת בטרנספורמציות יישור (rectification), שהן קריטיות בעיבוד אותות סטטיסטי. אופרטורים אלו ממפים טווחים רציפים שלמים (כמו כל המספרים השליליים) לנקודת קצה בודדת 0. פעולה זו מרכזת צפיפות הסתברות רציפה לתוך מסת הסתברות בדידה בנקודה 0, וכך נוצרים משתנים מקריים מעורבים.',
        toolboxConnection: 'The max operations represent half-wave rectifiers in electrical circuits and the ReLU (Rectified Linear Unit) activation functions in deep learning models.',
        toolboxConnectionHe: 'פעולות ה-max הללו מייצגות מיישרים חצי-גל (half-wave rectifiers) במעגלים חשמליים, וכן את פונקציות האקטיבציה מסוג ReLU (Rectified Linear Unit) ברשתות למידה עמוקה.',
        keyTakeaway: 'Restricting a continuous domain to a boundary collapses continuous density into a point mass, creating mixed variables with jump discontinuities in their CDFs.',
        keyTakeawayHe: 'חסימה של תחום רציף לקצה קבוע מרכזת את הצפיפות הרציפה למסת נקודת קצה בדידה, ויוצרת משתנים מעורבים המאופיינים בקפיצות אי-רציפות (jump discontinuities) ב-CDF שלהם.',
        proof: '**Rigorous Step-by-Step Proof and Derivation:**\n\n**Part 1: Derivation of CDF $F_{X^+}(t)$**\nLet $X^+ = \\max(X, 0)$. We evaluate $F_{X^+}(t) = P(X^+ \\le t)$ across different regions:\n* **For $t < 0$**:\nSince $X^+ \\ge 0$, it can never take negative values:\n$$F_{X^+}(t) = 0$$\n* **For $t \\ge 0$**:\n$$\\max(X, 0) \\le t \\iff X \\le t \\quad \\text{and} \\quad 0 \\le t$$\nSince we are in the region $t \\ge 0$, the condition is simply $X \\le t$:\n$$F_{X^+}(t) = P(X \\le t) = F_X(t)$$\n\nTherefore, the complete CDF is:\n$$F_{X^+}(t) = \\begin{cases} 0 & t < 0 \\\\ F_X(t) & t \\ge 0 \\end{cases}$$\n\n**Part 2: Derivation of CDF $F_{X^-}(t)$**\nLet $X^- = \\max(-X, 0)$. We evaluate $F_{X^-}(t) = P(X^- \\le t)$ across different regions:\n* **For $t < 0$**:\nSince $X^- \\ge 0$:\n$$F_{X^-}(t) = 0$$\n* **For $t \\ge 0$**:\n$$\\max(-X, 0) \\le t \\iff -X \\le t \\quad \\text{and} \\quad 0 \\le t$$\nSince $t \\ge 0$, this simplifies to:\n$$-X \\le t \\iff X \\ge -t$$\nTherefore:\n$$F_{X^-}(t) = P(X \\ge -t) = 1 - P(X < -t)$$\nSince $X$ is a continuous random variable, $P(X < -t) = P(X \\le -t) = F_X(-t)$\nThus:\n$$F_{X^-}(t) = 1 - F_X(-t) \\quad \\text{for } t \\ge 0$$\n\nTherefore, the complete CDF is:\n$$F_{X^-}(t) = \\begin{cases} 0 & t < 0 \\\\ 1 - F_X(-t) & t \\ge 0 \\end{cases}$$\n\n**Part 3: Analysis of the Mixed Variable Structure**\nBoth $X^+$ and $X^-$ are mixed random variables. Let us analyze the jump discontinuity at $t = 0$:\n* For $X^+$:\n$$P(X^+ = 0) = F_{X^+}(0) - \\lim_{t \\to 0^-} F_{X^+}(t) = F_X(0) - 0 = F_X(0)$$\nIf $P(X \\le 0) > 0$, we have a discrete point mass at $t = 0$.\n* For $X^-$:\n$$P(X^- = 0) = F_{X^-}(0) - \\lim_{t \\to 0^-} F_{X^-}(t) = (1 - F_X(0)) - 0 = 1 - F_X(0)$$\nIf $P(X > 0) > 0$, we have a discrete point mass at $t = 0$.\nFor all $t > 0$, both functions are fully continuous with derivatives representing continuous probability densities.',
        proofHe: '**הוכחה וגזירה מתמטית מפורטת שלב אחר שלב:**\n\n**חלק 1: גזירת ה-CDF עבור $F_{X^+}(t)$**\nנגדיר $X^+ = \\max(X, 0)$. נחשב את ה-CDF כ-$F_{X^+}(t) = P(X^+ \\le t)$ עבור האזורים השונים:\n* **עבור $t < 0$**:\nכיוון ש-$X^+ \\ge 0$, המשתנה אינו יכול לקבל ערכים שליליים:\n$$F_{X^+}(t) = 0$$\n* **עבור $t \\ge 0$**:\n$$\\max(X, 0) \\le t \\iff X \\le t \\quad \\text{וכן} \\quad 0 \\le t$$\nמאחר שאנו בתחום $t \\ge 0$, התנאי מצטמצם פשוט ל-$X \\le t$:\n$$F_{X^+}(t) = P(X \\le t) = F_X(t)$$\n\nעל כן, ה-CDF המלאה היא:\n$$F_{X^+}(t) = \\begin{cases} 0 & t < 0 \\\\ F_X(t) & t \\ge 0 \\end{cases}$$\n\n**חלק 2: גזירת ה-CDF עבור $F_{X^-}(t)$**\nנגדיר $X^- = \\max(-X, 0)$. נחשב את ה-CDF כ-$F_{X^-}(t) = P(X^- \\le t)$ עבור האזורים השונים:\n* **עבור $t < 0$**:\nכיוון ש-$X^- \\ge 0$:\n$$F_{X^-}(t) = 0$$\n* **עבור $t \\ge 0$**:\n$$\\max(-X, 0) \\le t \\iff -X \\le t \\quad \\text{וכן} \\quad 0 \\le t$$\nמכיוון ש-$t \\ge 0$, תנאי זה מתמצה ל:\n$$-X \\le t \\iff X \\ge -t$$\nמכאן:\n$$F_{X^-}(t) = P(X \\ge -t) = 1 - P(X < -t)$$\nמאחר ש-$X$ הוא משתנה מקרי רציף, מתקיים $P(X < -t) = P(X \\le -t) = F_X(-t)$.\nנקבל:\n$$F_{X^-}(t) = 1 - F_X(-t) \\quad \\text{עבור } t \\ge 0$$\n\nעל כן, ה-CDF המלאה היא:\n$$F_{X^-}(t) = \\begin{cases} 0 & t < 0 \\\\ 1 - F_X(-t) & t \\ge 0 \\end{cases}$$\n\n**חלק 3: ניתוח המבנה המעורב של המשתנים**\nשני המשתנים $X^+$ ו-$X^-$ הם משתנים מקריים מעורבים (mixed random variables). ננתח את נקודת אי-הרציפות (קפיצה) ב-$t = 0$:\n* עבור $X^+$:\n$$P(X^+ = 0) = F_{X^+}(0) - \\lim_{t \\to 0^-} F_{X^+}(t) = F_X(0) - 0 = F_X(0)$$\nאם מתקיים $P(X \\le 0) > 0$, נקבל מסת הסתברות בדידה (נקודתית) ב-$t = 0$.\n* עבור $X^-$:\n$$P(X^- = 0) = F_{X^-}(0) - \\lim_{t \\to 0^-} F_{X^-}(t) = (1 - F_X(0)) - 0 = 1 - F_X(0)$$\nאם מתקיים $P(X > 0) > 0$, נקבל מסת הסתברות בדידה (נקודתית) ב-$t = 0$.\nלכל ערך $t > 0$, שתי הפונקציות רציפות וגזירות, ונגזרתן מייצגת צפיפות הסתברות רציפה רגילה.'
      }
    ],
    quiz: [
      {
        question: 'Let $X$ be a continuous random variable with a PDF given by $f_X(x) = \\frac{3}{8}x^2$ for $0 \\le x \\le 2$, and $0$ otherwise. What is the value of the probability $P(X > 1)$?',
        questionHe: 'יהי $X$ משתנה מקרי רציף עם PDF הנתון על ידי $f_X(x) = \\frac{3}{8}x^2$ עבור $0 \\le x \\le 2$, ו-$0$ אחרת. מהו ערך ההסתברות $P(X > 1)$?',
        options: [
          '$\\frac{7}{8}$',
          '$\\frac{1}{8}$',
          '$\\frac{1}{2}$',
          '$\\frac{3}{8}$'
        ],
        optionsHe: [
          '$\\frac{7}{8}$',
          '$\\frac{1}{8}$',
          '$\\frac{1}{2}$',
          '$\\frac{3}{8}$'
        ],
        correctAnswerIndex: 0,
        explanation: 'We calculate the interval probability $P(X > 1)$ by integrating the continuous density function from the boundary $x = 1$ to the maximum active value $x = 2$:\n$$P(X > 1) = \\int_{1}^{2} \\frac{3}{8}x^2 dx = \\frac{3}{8} \\left[ \\frac{x^3}{3} \\right]_1^2 = \\frac{1}{8}(8 - 1) = \\frac{7}{8}$$',
        explanationHe: 'אנו מחשבים את ההסתברות בקטע $P(X > 1)$ על ידי אינטגרציה של פונקציית הצפיפות הרציפה מהגבול התחתון $x = 1$ ועד לערך הפעיל המקסימלי $x = 2$:\n$$P(X > 1) = \\int_{1}^{2} \\frac{3}{8}x^2 dx = \\frac{3}{8} \\left[ \\frac{x^3}{3} \\right]_1^2 = \\frac{1}{8}(8 - 1) = \\frac{7}{8}$$'
      },
      {
        question: 'Why is the individual point probability $P(X = x)$ exactly equal to zero for any single point $x$ in a continuous random variable?',
        questionHe: 'מדוע ההסתברות לפגוע בדיוק בנקודה בודדת $P(X = x)$ שווה בדיוק לאפס עבור כל נקודה ספציפית $x$ במשתנה מקרי רציף?',
        options: [
          'Because the PDF is zero at that point.',
          'Because continuous variables cannot take positive values.',
          'Because probability is defined as the integral (area under the curve) of the PDF, and a single mathematical point has zero width.',
          'Because the CDF is always constant.'
        ],
        optionsHe: [
          'מפני שפונקציית ה-PDF שווה לאפס באותה נקודה.',
          'מפני שמשתנים רציפים אינם יכולים לקבל ערכים חיוביים.',
          'מפני שההסתברות מוגדרת כאינטגרל (השטח מתחת לעקומה) של ה-PDF, ולנקודה מתמטית בודדת יש רוחב אפס.',
          'מפני שפונקציית ה-CDF היא תמיד קבועה.'
        ],
        correctAnswerIndex: 2,
        explanation: 'Probability for a continuous random variable is defined as the integral (area under the curve) of the PDF over an interval. Since a single mathematical point has zero width, the integral from $x$ to $x$ is always exactly zero:\n$$P(X = x) = \\int_{x}^{x} f_X(t) dt = 0$$\nThis holds regardless of the height of the PDF $f_X(x)$ at that point.',
        explanationHe: 'ההסתברות עבור משתנה מקרי רציף מוגדרת כאינטגרל (השטח מתחת לעקומה) של פונקציית הצפיפות (PDF) על פני קטע. כיוון שלנקודה מתמטית בודדת יש רוחב אפס, האינטגרל מ-$x$ עד $x$ הוא תמיד בדיוק אפס:\n$$P(X = x) = \\int_{x}^{x} f_X(t) dt = 0$$\nזה מתקיים ללא קשר לגובה ה-PDF $f_X(x)$ באותה נקודה.'
      }
    ]
  }
,
  {
    id: 'prob-2',
    courseId: 'prob',
    chapterNumber: '2',
    title: 'Chapter 2: Special Continuous Distributions & Further Transformations',
    titleHe: 'פרק 2: התפלגויות רציפות מיוחדות וטרנספורמציות מתקדמות',
    intro: 'This chapter explores the two most fundamental special continuous distributions: the Uniform and Exponential distributions. We study their mathematical properties, the unique memoryless property of the Exponential distribution, the distribution of the minimum of independent exponentials, and advanced techniques for deriving the distributions of transformed random variables (both continuous and mixed).',
    introHe: 'בעוד שמודלים בדידים מטפלים בתוצאות ספירות, תהליכים פיזיקליים, הנדסיים וביולוגיים—כגון זמן, מרחק או מתח רציף—דורשים עבודה עם התפלגויות רציפות ייחודיות. פרק זה חוקר לעומק את שתי ההתפלגויות הרציפות הבסיסיות והחשובות ביותר: ההתפלגות האחידה (Uniform) וההתפלגות המעריכית (Exponential). נלמד את תכונותיהן המתמטיות, נחקור את תכונת חוסר הזיכרון המפורסמת, נבין כיצד מתנהג המינימום של אוסף משתנים, ונפתח שיטות מתקדמות למציאת צפיפויות של משתנים שעברו טרנספורמציות מורכבות ומעורבות.',
    motivation: 'In computer simulations, reliability engineering, and queuing theory, the Uniform and Exponential distributions are the primary building blocks. The Uniform distribution models equal likelihood over an interval, while the Exponential distribution models random waiting times (like time between network arrivals or component failures). Mastering their transformations and properties is essential for modeling complex systems.',
    motivationHe: 'בסימולציות מחשב, הנדסת אמינות ותורת התורים, התפלגויות אלו מהוות את אבני הבניין הבסיסיות ביותר. התפלגות אחידה מניחה סיכוי שווה לחלוטין לכל תת-קטע בתוך תחום מוגדר, בעוד שהתפלגות מעריכית מהווה את המודל המושלם לתיאור זמני המתנה אקראיים (כמו הזמן החולף בין הגעת חבילות מידע ברשת, או משך הזמן עד לרגע שבו רכיב חומרה יתקלקל). שליטה בטרנספורמציות שלהן היא כלי הכרחי לניתוח מערכות מורכבות בעולם האמיתי.',
    definitions: [
      {
        id: 'def-prob-2-1',
        title: 'The Uniform Distribution',
        titleHe: 'ההתפלגות האחידה (Uniform Distribution)',
        content: 'A continuous random variable $X$ is uniformly distributed over the interval $[a, b]$ (denoted $X \\sim U(a, b)$) if its probability density is constant over that interval.\n\n**Mathematical Properties:**\n- **Probability Density Function (PDF)**:\n$$f_X(x) = \\begin{cases} \\frac{1}{b-a} & a \\le x \\le b \\\\ 0 & \\text{otherwise} \\end{cases}$$\n- **Cumulative Distribution Function (CDF)**:\n$$F_X(t) = \\begin{cases} 0 & t < a \\\\ \\frac{t-a}{b-a} & a \\le t \\le b \\\\ 1 & t > b \\end{cases}$$\n- **Mathematical Expectation**:\n$$\\mathbb{E}[X] = \\frac{a+b}{2}$$\n- **Variance**:\n$$\\text{Var}(X) = \\frac{(b-a)^2}{12}$$',
        contentHe: 'משתנה מקרי רציף $X$ מתפלג אחיד (Uniform) מעל הקטע $[a,b]$ (ומסומן כ-$X \\sim U(a,b)$) אם פונקציית הצפיפות שלו היא קבועה לחלוטין לכל אורך הקטע:\n\n**מאפיינים מתמטיים של התפלגות אחידה:**\n- **פונקציית צפיפות (PDF)**:\n$$f_X(x) = \\begin{cases} \\frac{1}{b-a} & a \\le x \\le b \\\\ 0 & \\text{אחרת} \\end{cases}$$\n- **פונקציית התפלגות מצטברת (CDF)**:\n$$F_X(t) = \\begin{cases} 0 & t < a \\\\ \\frac{t-a}{b-a} & a \\le t \\le b \\\\ 1 & t > b \\end{cases}$$\n- **תוחלת מתמטית**:\n$$\\mathbb{E}[X] = \\frac{a+b}{2}$$\n- **שונות (Variance)**:\n$$\\text{Var}(X) = \\frac{(b-a)^2}{12}$$',
        simplifiedLogic: 'The Uniform distribution is the continuous equivalent of "equally likely outcomes." The probability of falling into any sub-interval depends solely on the width of that sub-interval, not its location. The expectation is the exact midpoint of the interval.',
        simplifiedLogicHe: 'התפלגות אחידה היא המקבילה הרציפה לקונספט של "תוצאות בעלות סיכוי שווה". ההסתברות ליפול לתוך תת-קטע מסוים תלויה אך ורק ב**רוחב** של אותו תת-קטע, ללא קשר למיקום שלו על הציר. התוחלת היא פשוט נקודת האמצע הגיאומטרית של התחום.',
        toolboxConnection: 'The Uniform distribution is the foundational source for random number generators (RNGs) in computer science. Algorithms generate a pseudo-random value $U \\sim U(0,1)$ and then apply the inverse CDF transform to simulate any other distribution.',
        toolboxConnectionHe: 'ההתפלגות האחידה מפזרת את כל מסת ההסתברות בצורה שווה ושטוחה לחלוטין, ולכן היא מהווה את המקור הבסיסי ביותר ליצירת מספרים אקראיים (RNG) במדעי המחשב. מחשבים מייצרים ערך בסיסי $U \\sim U(0,1)$ ולאחר מכן מפעילים עליו את פונקציית ה-CDF ההפוכה כדי לסמלץ כל התפלגות אחרת בעולם.',
        keyTakeaway: 'The Uniform distribution distributes probability mass completely evenly over a finite interval, making interval probability directly proportional to interval width.',
        keyTakeawayHe: 'ההתפלגות האחידה מפזרת את ההסתברות בצורה שווה לחלוטין, וההסתברות של קטע פרופורציונלית ישירות לרוחבו.',
        proof: 'Proof of Expectation and Variance for $X \\sim U(a, b)$:\n\n**1. Expectation**:\n$$\\mathbb{E}[X] = \\int_{a}^{b} x \\frac{1}{b-a} dx = \\frac{1}{b-a} \\left[ \\frac{x^2}{2} \\right]_a^b = \\frac{b^2 - a^2}{2(b-a)} = \\frac{(b-a)(b+a)}{2(b-a)} = \\frac{a+b}{2}$$\n\n**2. Variance**:\nWe first calculate the second moment $\\mathbb{E}[X^2]$:\n$$\\mathbb{E}[X^2] = \\int_{a}^{b} x^2 \\frac{1}{b-a} dx = \\frac{1}{b-a} \\left[ \\frac{x^3}{3} \\right]_a^b = \\frac{b^3 - a^3}{3(b-a)} = \\frac{(b-a)(a^2 + ab + b^2)}{3(b-a)} = \\frac{a^2 + ab + b^2}{3}$$\nNow we use the variance formula $\\text{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2$:\n$$\\text{Var}(X) = \\frac{a^2 + ab + b^2}{3} - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{a^2 + ab + b^2}{3} - \\frac{a^2 + 2ab + b^2}{4}$$\nFind a common denominator of 12:\n$$\\text{Var}(X) = \\frac{4(a^2 + ab + b^2) - 3(a^2 + 2ab + b^2)}{12} = \\frac{a^2 - 2ab + b^2}{12} = \\frac{(b-a)^2}{12}$$\nThis completes the proof.',
        proofHe: '**הוכחת תוחלת ושונות עבור $X \\sim U(a,b)$:**\n\n**1. תוחלת**:\n$$\\mathbb{E}[X] = \\int_{a}^{b} x \\frac{1}{b-a} dx = \\frac{1}{b-a} \\left[ \\frac{x^2}{2} \\right]_a^b = \\frac{b^2 - a^2}{2(b-a)} = \\frac{(b-a)(b+a)}{2(b-a)} = \\frac{a+b}{2}$$\n\n**2. שונות**:\nנחשב תחילה את המומנט השני $\\mathbb{E}[X^2]$:\n$$\\mathbb{E}[X^2] = \\int_{a}^{b} x^2 \\frac{1}{b-a} dx = \\frac{1}{b-a} \\left[ \\frac{x^3}{3} \\right]_a^b = \\frac{b^3 - a^3}{3(b-a)} = \\frac{(b-a)(a^2 + ab + b^2)}{3(b-a)} = \\frac{a^2 + ab + b^2}{3}$$\nכעת נשתמש בנוסחת השונות $\\text{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2$:\n$$\\text{Var}(X) = \\frac{a^2 + ab + b^2}{3} - \\left(\\frac{a+b}{2}\\right)^2 = \\frac{a^2 + ab + b^2}{3} - \\frac{a^2 + 2ab + b^2}{4}$$\nניקח מכנה משותף 12:\n$$\\text{Var}(X) = \\frac{4(a^2 + ab + b^2) - 3(a^2 + 2ab + b^2)}{12} = \\frac{a^2 - 2ab + b^2}{12} = \\frac{(b-a)^2}{12}$$'
      },
      {
        id: 'def-prob-2-2',
        title: 'The Exponential Distribution & Memoryless Property',
        titleHe: 'ההתפלגות המעריכית (Exponential Distribution)',
        content: 'A continuous random variable $X$ follows an Exponential distribution with rate parameter $\\lambda > 0$ (denoted $X \\sim \\text{Exp}(\\lambda)$) if it models the time between independent poisson events.\n\n**Mathematical Properties:**\n- **Probability Density Function (PDF)**:\n$$f_X(x) = \\begin{cases} \\lambda e^{-\\lambda x} & x > 0 \\\\ 0 & \\text{otherwise} \\end{cases}$$\n- **Cumulative Distribution Function (CDF)**:\n$$F_X(t) = \\begin{cases} 0 & t \\le 0 \\\\ 1 - e^{-\\lambda t} & t > 0 \\end{cases}$$\n- **Mathematical Expectation**:\n$$\\mathbb{E}[X] = \\frac{1}{\\lambda}$$\n- **Variance**:\n$$\\text{Var}(X) = \\frac{1}{\\lambda^2}$$\n- **The Memoryless Property**: For any $s, t > 0$:\n$$P(X \\ge s + t \\mid X \\ge s) = P(X \\ge t)$$',
        contentHe: 'משתנה מקרי רציף $X$ עוקב אחר התפלגות מעריכית עם פרמטר קצב $\\lambda > 0$ (ומסומן כ-$X \\sim Exp(\\lambda)$) אם הוא מוגדר עבור $x > 0$ ומודל את זמני ההמתנה בין אירועים אקראיים ובלתי תלויים.\n\n**מאפיינים מתמטיים של התפלגות מעריכית:**\n- **פונקציית צפיפות (PDF)**:\n$$f_X(x) = \\begin{cases} \\lambda e^{-\\lambda x} & x > 0 \\\\ 0 & \\text{אחרת} \\end{cases}$$\n- **פונקציית התפלגות מצטברת (CDF)**:\n$$F_X(t) = \\begin{cases} 0 & t \\le 0 \\\\ 1 - e^{-\\lambda t} & t > 0 \\end{cases}$$\n- **תוחלת מתמטית**:\n$$\\mathbb{E}[X] = \\frac{1}{\\lambda}$$\n- **שונות (Variance)**:\n$$\\text{Var}(X) = \\frac{1}{\\lambda^2}$$\n- **תכונת חוסר הזיכרון (Memoryless Property)**: לכל $s, t > 0$:\n$$P(X \\ge s + t \\mid X \\ge s) = P(X \\ge t)$$',
        simplifiedLogic: 'The Exponential distribution models random waiting times. The memoryless property states that the probability of waiting an additional $t$ hours does not depend on how long ($s$ hours) you have already waited. The component does not "age"; it is as good as new until it suddenly fails.',
        simplifiedLogicHe: 'התפלגות מעריכית מתארת "זמן עד להתרחשות אירוע". תכונת חוסר הזיכרון אומרת שההסתברות שהרכיב ישרוד עוד $t$ שעות, בהינתן שהוא כבר פועל $s$ שעות, זהה לחלוטין להסתברות שרכיב חדש לגמרי ישרוד $t$ שעות. הרכיב אינו "מזדקן" או נשחק מבחינה הסתברותית; הוא שומר על טריות מוחלטת עד לרגע שבו הוא כושל פתאום.',
        toolboxConnection: 'Widely used in queuing theory (to model service times or call arrival rates in data centers) and reliability engineering (to model the time until hardware components fail).',
        toolboxConnectionHe: 'נפוצה מאוד בתורת התורים (למידול זמני שירות או קצב הגעת שיחות במרכזיות) ובהנדסת אמינות (למידול משך הזמן עד לכשל של רכיבי חומרה).',
        keyTakeaway: 'The Exponential distribution is the unique continuous distribution characterized by the memoryless property.',
        keyTakeawayHe: 'ההתפלגות המעריכית היא ההתפלגות הרציפה היחידה המתאפיינת בתכונת חוסר הזיכרון.',
        proof: 'Proof of the Memoryless Property:\n\nBy the definition of conditional probability:\n$$P(X \\ge s + t \\mid X \\ge s) = \\frac{P(X \\ge s + t \\cap X \\ge s)}{P(X \\ge s)}$$\nSince $s + t > s$, the intersection $\{X \\ge s + t\} \\cap \{X \\ge s\}$ is simply $\{X \\ge s + t\}$.\nTherefore:\n$$P(X \\ge s + t \\mid X \\ge s) = \\frac{P(X \\ge s + t)}{P(X \\ge s)}$$\nUsing the Exponential reliability function $P(X \\ge x) = 1 - F_X(x) = e^{-\\lambda x}$:\n$$P(X \\ge s + t \\mid X \\ge s) = \\frac{e^{-\\lambda(s + t)}}{e^{-\\lambda s}} = \\frac{e^{-\\lambda s} e^{-\\lambda t}}{e^{-\\lambda s}} = e^{-\\lambda t}$$\nSince $P(X \\ge t) = e^{-\\lambda t}$, we have proved:\n$$P(X \\ge s + t \\mid X \\ge s) = P(X \\ge t)$$\nThis completes the proof.',
        proofHe: '**הוכחת תכונת חוסר הזיכרון:**\n\nעל פי הגדרת הסתברות מותנית:\n$$P(X \\ge s+t \\mid X \\ge s) = \\frac{P(X \\ge s+t \\cap X \\ge s)}{P(X \\ge s)}$$\nמכיוון ש-$s+t > s$, החיתוך $\{X \\ge s+t\} \\cap $\{X \\ge s\}$ שווה פשוט למאורע $\{X \\ge s+t\}$.\nמכאן:\n$$P(X \\ge s+t \\mid X \\ge s) = \\frac{P(X \\ge s+t)}{P(X \\ge s)}$$\nנשתמש בפונקציית הישרדות המעריכית $P(X \\ge x) = 1 - F_X(x) = e^{-\\lambda x}$:\n$$P(X \\ge s+t \\mid X \\ge s) = \\frac{e^{-\\lambda(s+t)}}{e^{-\\lambda s}} = \\frac{e^{-\\lambda s} e^{-\\lambda t}}{e^{-\\lambda s}} = e^{-\\lambda t}$$\nמאחר ש-$P(X \\ge t) = e^{-\\lambda t}$, קיבלנו את השוויון המבוקש:\n$$P(X \\ge s+t \\mid X \\ge s) = P(X \\ge t)$$\nההוכחה הושלמה.'
      },
      {
        id: 'def-prob-2-3',
        title: 'Minimum of Independent Exponential Random Variables',
        titleHe: 'משפט המינימום של משתנים מעריכיים עצמאיים',
        content: 'Let $X_1, X_2, \\dots, X_m$ be independent continuous random variables, where each $X_i \\sim \\text{Exp}(\\lambda_i)$. Let $Y = \\min(X_1, X_2, \\dots, X_m)$ represent the minimum value among them.\n\nThe random variable $Y$ follows an Exponential distribution whose rate parameter is the sum of the individual rate parameters:\n$$Y \\sim \\text{Exp}\\left(\\sum_{i=1}^m \\lambda_i\\right)$$\n\nIf the variables are identically distributed with $\\lambda_i = \\lambda$ for all $i$, then:\n$$Y \\sim \\text{Exp}(m\\lambda)$$',
        contentHe: 'יהיו $X_1, X_2, \\dots, X_m$ משתנים מקריים רציפים ובלתי תלויים, כך שכל אחד מהם מתפלג מעריכית עם פרמטר קצב משלו: $X_i \\sim Exp(\\lambda_i)$. נגדיר משתנה מקרי חדש $Y$ המייצג את הערך המינימלי מביניהם:\n$$Y = \\min(X_1, X_2, \\dots, X_m)$$\n\nהמשתנה החדש $Y$ מתפלג גם הוא מעריכית, ופרמטר הקצב שלו הוא פשוט סכום פרמטרי הקצב של המשתנים המקוריים:\n$$Y \\sim Exp\\left(\\sum_{i=1}^m \\lambda_i\\right)$$\n\nאם כל המשתנים בעלי קצב זהה $\\lambda_i = \\lambda$ לכל $i$, אז מתקיים:\n$$Y \\sim Exp(m\\lambda)$$',
        simplifiedLogic: 'Think of $m$ light bulbs operating in series, where each bulb $i$ has a lifetime $X_i \\sim \\text{Exp}(\\lambda_i)$. The entire system fails as soon as the *first* bulb burns out. The lifetime of the system is $Y = \\min(X_1, \\dots, X_m)$. Since the risk of failure adds up, the system fails at a combined rate of $\\sum \\lambda_i$.',
        simplifiedLogicHe: 'חשבו על מערכת של $m$ נורות המחוברות בטור (בסדרה), כאשר לכל נורה יש אורך חיים מעריכית בלתי תלוי. המערכת כולה תפסיק לפעול ברגע שבו הנורה הראשונה תישרף. אורך חיי המערכת מיוצג על ידי המינימום. מכיוון שסיכון הכשל מצטבר מכל הנורות יחד, קצב הכשל של המערכת כולה גדל והופך לסכום הקצבים.',
        toolboxConnection: 'Essential for analyzing parallel execution systems, reliability of complex series networks, and multi-channel communication links.',
        toolboxConnectionHe: 'משמש כלי מרכזי בניתוח ביצועים של מערכות הרצה מקביליות, רשתות תקשורת מרובות ערוצים ואמינות של מערכות מורכבות.',
        keyTakeaway: 'The minimum of independent exponentially distributed variables is itself exponentially distributed with a rate parameter equal to the sum of the individual rates.',
        keyTakeawayHe: 'המינימום של משתנים מעריכיים עצמאיים מתפלג מעריכית עם קצב השווה לסכום הקצבים של המשתנים המרכיבים אותו.',
        proof: 'Step-by-Step Mathematical Proof:\n\nWe derive the Cumulative Distribution Function $F_Y(y) = P(Y \\le y)$ by looking at the complement probability $P(Y > y)$:\n$$P(Y > y) = P(\\min(X_1, X_2, \\dots, X_m) > y)$$\nThe minimum of a set of numbers is greater than $y$ if and only if *every* individual number in the set is greater than $y$:\n$$P(Y > y) = P(X_1 > y \\cap X_2 > y \\cap \\dots \\cap X_m > y)$$\nSince the variables $X_1, \\dots, X_m$ are independent, we multiply their individual probabilities:\n$$P(Y > y) = \\prod_{i=1}^m P(X_i > y)$$\nSubstitute the Exponential tail probability $P(X_i > y) = e^{-\\lambda_i y}$ for $y > 0$:\n$$P(Y > y) = \\prod_{i=1}^m e^{-\\lambda_i y} = e^{-\\lambda_1 y} e^{-\\lambda_2 y} \\dots e^{-\\lambda_m y} = e^{-\\left(\\sum_{i=1}^m \\lambda_i\\right) y}$$\nTherefore, the CDF of $Y$ is:\n$$F_Y(y) = 1 - P(Y > y) = 1 - e^{-\\left(\\sum_{i=1}^m \\lambda_i\\right) y} \\quad \\text{for } y > 0$$\nAnd $F_Y(y) = 0$ for $y \\le 0$. This is precisely the CDF of an Exponential random variable with rate parameter $\\sum_{i=1}^m \\lambda_i$.',
        proofHe: '**הוכחה מתמטית מפורטת:**\n\nנמצא את פונקציית ההתפלגות המצטברת $F_Y(y) = P(Y \\le y)$ דרך חישוב ההסתברות המשלימה של הזנב $P(Y > y)$:\n$$P(Y > y) = P(\\min(X_1, X_2, \\dots, X_m) > y)$$\nהערך המינימלי בקבוצה גדול מ-$y$ אם ורק אם כל אחד ואחד מהערכים בקבוצה גדול מ-$y$ בנפרד:\n$$P(Y > y) = P(X_1 > y \\cap X_2 > y \\cap \\dots \\cap X_m > y)$$\nבשל האי-תלות בין המשתנים $X_1, \\dots, X_m$, נכפול את ההסתברויות האינדיבידואליות:\n$$P(Y > y) = \\prod_{i=1}^m P(X_i > y)$$\nנציב את הסתברות הזנב המעריכית $P(X_i > y) = e^{-\\lambda_i y}$ עבור $y > 0$:\n$$P(Y > y) = \\prod_{i=1}^m e^{-\\lambda_i y} = e^{-\\lambda_1 y} e^{-\\lambda_2 y} \\dots e^{-\\lambda_m y} = e^{-\\left(\\sum_{i=1}^m \\lambda_i\\right) y}$$\nעל כן, פונקציית ההתפלגות ה-CDF של $Y$ היא:\n$$F_Y(y) = 1 - P(Y > y) = 1 - e^{-\\left(\\sum_{i=1}^m \\lambda_i\\right) y} \\quad \\text{עבור } y > 0$$\nוכן $F_Y(y) = 0$ עבור $y \\le 0$. זהו בדיוק המבנה של פונקציית התפלגות מעריכית עם פרמטר קצב $\\sum_{i=1}^m \\lambda_i$.'
      },
      // ==========================================
      //        PRACTICE SESSION 2 PROBLEMS
      // ==========================================
      {
        id: 'def-prob-2-4',
        title: 'Absolute Value Transformation of a Uniform Variable',
        titleHe: 'שאלה 1: טרנספורמציה לא-מונוטונית בעלת קיפול (ערך מוחלט)',
        isPractice: true,
        content: 'Let $X$ be a continuous random variable uniformly distributed over the interval $[-1, 3]$ (so $X \\sim U(-1, 3)$). Consider the transformed random variable $Y = |X|$.\n\nDerive the CDF $F_Y(t)$ and the PDF $f_Y(t)$ of the transformed variable $Y$.\n\n**Resulting CDF:**\n$$F_Y(t) = \\begin{cases} 0 & t < 0 \\\\ \\frac{t}{2} & 0 \\le t \\le 1 \\\\ \\frac{t+1}{4} & 1 < t \\le 3 \\\\ 1 & t > 3 \\end{cases}$$\n**Resulting PDF:**\n$$f_Y(t) = \\begin{cases} \\frac{1}{2} & 0 \\le t \\le 1 \\\\ \\frac{1}{4} & 1 < t \\le 3 \\\\ 0 & \\text{otherwise} \\end{cases}$$',
        contentHe: 'יהי $X$ משתנה מקרי רציף המפולג אחיד בקטע המאוזן $[-1,3]$. נגדיר משתנה מקרי חדש המייצג את המרחק מהראשית: $Y = |X|$. מצא את פונקציית ההתפלגות $F_Y(t)$ ואת פונקציית הצפיפות $f_Y(t)$ של המשתנה החדש.',
        simplifiedLogic: 'Since $X \\sim U(-1, 3)$, its density is constant at $1/4$ over $[-1, 3]$. The transformation $Y = |X|$ folds the negative part $[-1, 0]$ onto the positive part $[0, 1]$. In the region $[0, 1]$, we get contributions from both positive and negative values of $X$, double-folding the density to $2 \\times 1/4 = 1/2$. In the region $(1, 3]$, we only get contributions from positive values, so the density remains $1/4$.',
        simplifiedLogicHe: 'פעולת ערך מוחלט מקפלת את האזור השלילי של התחום ומלבישה אותו על האזור החיובי. באזורי החפיפה נוצר אפקט של כפל צפיפות, בעוד שבאזורים ללא חפיפה הצפיפות נשמרת.',
        toolboxConnection: 'Models rectified wave signals, magnitude measurements of symmetric noise, and absolute error metrics.',
        keyTakeaway: 'Absolute value transformations on intervals containing zero create multi-part piecewise densities due to overlapping regions.',
        keyTakeawayHe: 'פעולת ערך מוחלט מקפלת את האזור השלילי של התחום ומלבישה אותו על האזור החיובי. באזורי החפיפה נוצר אפקט של כפל צפיפות, בעוד שבאזורים ללא חפיפה הצפיפות נשמרת.',
        proof: 'Step-by-Step Derivation:\n\n**Step 1: Identify the distribution of $X$**\n$X \\sim U(-1, 3)$ has PDF $f_X(x) = 1/4$ for $-1 \\le x \\le 3$, and $0$ otherwise. The CDF of $X$ is:\n$$F_X(x) = \\frac{x - (-1)}{3 - (-1)} = \\frac{x+1}{4} \\quad \\text{for } -1 \\le x \\le 3$$\n\n**Step 2: Derive the CDF of $Y = |X|$**\nSince $Y = |X|$, $Y$ can only take non-negative values. Thus, $F_Y(t) = 0$ for $t < 0$.\nFor $t \\ge 0$, the CDF is:\n$$F_Y(t) = P(Y \\le t) = P(|X| \\le t) = P(-t \\le X \\le t) = F_X(t) - F_X(-t)$$\nNow we evaluate this across different intervals of $t$:\n- **Interval 1: $0 \\le t \\le 1$**\nBoth $t$ and $-t$ fall within the support $[-1, 3]$ of $X$.\n$$F_Y(t) = F_X(t) - F_X(-t) = \\frac{t+1}{4} - \\frac{-t+1}{4} = \\frac{2t}{4} = \\frac{t}{2}$$\n- **Interval 2: $1 < t \\le 3$**\nHere, $t$ is in $(1, 3]$, but $-t$ is less than $-1$. Since $X$ cannot be less than $-1$, the condition $X \\ge -t$ is always satisfied, meaning $F_X(-t) = 0$.\n$$F_Y(t) = F_X(t) - 0 = \\frac{t+1}{4}$$\n- **Interval 3: $t > 3$**\nSince $Y$ is at most 3, the probability is 1: $F_Y(t) = 1$.\n\n**Step 3: Derive the PDF of $Y$**\nWe take the derivative of the CDF $F_Y(t)$ with respect to $t$:\n- For $0 \\le t \\le 1$: $f_Y(t) = \\frac{d}{dt}\\left(\\frac{t}{2}\\right) = \\frac{1}{2}$\n- For $1 < t \\le 3$: $f_Y(t) = \\frac{d}{dt}\\left(\\frac{t+1}{4}\right) = \\frac{1}{4}$\n- Elsewhere: $f_Y(t) = 0$.',
        proofHe: '**שלב 1: ניתוח פונקציית המקור של $X$**\nהמשתנה $X \\sim U(-1,3)$, ולכן פונקציית הצפיפות שלו היא קבוע בגובה רבע לכל אורך התחום:\n$$f_X(x) = \\begin{cases} \\frac{1}{4} & -1 \\le x \\le 3 \\\\ 0 & \\text{אחרת} \\end{cases}$$\n\n**שלב 2: גזירת ה-CDF של המשתנה החדש $Y$**\nהמשתנה $Y=|X|$ אינו יכול לקבל ערכים שליליים, ולכן לכל $t < 0$ מתקיים $F_Y(t) = 0$.\nנבחן את התחום החיובי לפי קטעי החפיפה הגיאומטריים:\n- **עבור הקטע הראשון $0 \\le t < 1$ (אזור הקיפול הכפול):**\n  האירוע $Y \\le t$ שקול לדרישה ש-$X$ יימצא בין $-t$ ל-$t$:\n  $$F_Y(t) = P(|X| \\le t) = P(-t \\le X \\le t) = F_X(t) - F_X(-t)$$\n  נחשב את ההסתברות לקטע לפי רוחבו חלקי רוחב מרחב המדגם כולו (4):\n  $$F_Y(t) = \\frac{t - (-t)}{3 - (-1)} = \\frac{2t}{4} = \\frac{t}{2}$$\n- **עבור הקטע השני $1 \\le t < 3$ (אזור פתוח ללא חפיפה):**\n  בקטע זה, הצד השמאלי של הקיפול כבר הסתיים (מכיוון ש-$X$ חסום מלמטה ב-$-1$). האירוע שקול לחלוטין ל-$X \\le t$:\n  $$F_Y(t) = P(-1 \\le X \\le t) = \\frac{t - (-1)}{3 - (-1)} = \\frac{t + 1}{4}$$\n- **עבור $t \\ge 3$:**\n  הגענו לקצה העליון של מרחב המדגם, ולכן ההסתברות מגיעה לערך מקסימלי:\n  $$F_Y(t) = 1$$\n\nנרכז את פונקציית ההתפלגות המצטברת המלאה של $Y$:\n$$F_Y(t) = \\begin{cases} 0 & t < 0 \\\\ \\frac{t}{2} & 0 \\le t < 1 \\\\ \\frac{t + 1}{4} & 1 \\le t < 3 \\\\ 1 & t \\ge 3 \\end{cases}$$\n\n**שלב 3: גזירה לקבלת פונקציית הצפיפות (PDF)**\nנגזור כל קטע בנפרד לפי המשתנה $t$:\n- בקטע $0 \\le t < 1$: הנגזרת של $\\frac{t}{2}$ היא $\\frac{1}{2}$.\n- בקטע $1 \\le t < 3$: הנגזרת של $\\frac{t + 1}{4}$ היא $\\frac{1}{4}$.\n- בכל שאר המקומות הנגזרת מתאפסת.\n\nלכן, פונקציית הצפיפות הסופית של המשתנה המרחק היא:\n$$f_Y(y) = \\begin{cases} \\frac{1}{2} & 0 \\le y < 1 \\\\ \\frac{1}{4} & 1 \\le y < 3 \\\\ 0 & \\text{אחרת} \\end{cases}$$'
      },
      {
        id: 'def-prob-2-5',
        title: 'Discretization of Exponential Variable to Geometric',
        titleHe: 'שאלה 2: דגימה דיגיטלית של משתנה מעריכית (פונקציית הערך השלם)',
        isPractice: true,
        content: 'Let $X \\sim \\text{Exp}(\\lambda)$. Consider the discretized random variable $Y = \\lfloor X \\rfloor$, where $\\lfloor x \\rfloor$ represents the greatest integer less than or equal to $x$ (the floor function).\n\nShow that $Y$ follows a discrete Geometric distribution starting from $0$, with parameter $p = 1 - e^{-\\lambda}$:\n$$P(Y = k) = (1-p)^k p \\quad \\text{for } k = 0, 1, 2, \\dots$$',
        contentHe: 'יהי $X$ משתנה מקרי רציף המפולג מעריכית עם פרמטר קצב $\\lambda > 0$. נגדיר משתנה מקרי בדיד חדש $Y$ באמצעות פונקציית הערך השלם התחתון (רצפה): $Y = \\lfloor X \\rfloor$. מצא את פונקציית ההסתברות הבדידה של $Y$ והוכח כי הוא מתפלג גאומטרית.',
        simplifiedLogic: 'Imagine measuring an exponential lifetime using a coarse digital clock that only displays integer seconds. The recorded value is the floor of the actual time. The probability of the clock showing exactly $k$ seconds is the probability that the event occurred in the interval $[k, k+1)$. This discrete integer-waiting-time model corresponds exactly to a Geometric distribution.',
        simplifiedLogicHe: 'דגימה גסה וקטיעה של זמן רציף לאינטרוולים שלמים הופכת משתנה רציף למשתנה בדיד, וממירה את ההתפלגות המעריכית ישירות להתפלגות גאומטרית תואמת.',
        toolboxConnection: 'Explains the deep link between continuous Markov processes (Exponential waiting time) and discrete Markov chains (Geometric trials). used in digitizing analog continuous systems.',
        keyTakeaway: 'Coarse integer digital sampling of an Exponential variable yields a discrete Geometric distribution.',
        keyTakeawayHe: 'דגימה גסה וקטיעה של זמן רציף לאינטרוולים שלמים הופכת משתנה רציף למשתנה בדיד, וממירה את ההתפלגות המעריכית ישירות להתפלגות גאומטרית תואמת.',
        proof: 'Step-by-Step Proof:\n\nSince $X \\ge 0$, the variable $Y = \\lfloor X \\rfloor$ takes non-negative integer values $k \\in \\{0, 1, 2, \\dots\\}$.\nBy definition of the floor function:\n$$Y = k \\iff k \\le X < k+1$$\nTherefore, the probability mass function (PMF) of $Y$ is:\n$$P(Y = k) = P(k \\le X < k+1)$$\nFor a continuous variable, this is calculated using the CDF of $X$:\n$$P(Y = k) = F_X(k+1) - F_X(k)$$\nUsing the Exponential CDF $F_X(x) = 1 - e^{-\\lambda x}$ for $x > 0$:\n$$P(Y = k) = \\left(1 - e^{-\\lambda(k+1)}\\right) - \\left(1 - e^{-\\lambda k}\\right) = e^{-\\lambda k} - e^{-\\lambda(k+1)}$$\nFactor out $e^{-\\lambda k}$:\n$$P(Y = k) = e^{-\\lambda k} \\left(1 - e^{-\\lambda}\\right)$$\nNow, let us define $p = 1 - e^{-\\lambda}$. Then the term $e^{-\\lambda}$ is equal to $1-p$. Substitute these:\n$$P(Y = k) = (1 - p)^k p \\quad \\text{for } k = 0, 1, 2, \\dots$$\nThis matches exactly the PMF of a Geometric distribution starting at $0$ with success parameter $p$.',
        proofHe: '**שלב 1: הבנת פונקציית הרצפה**\nפונקציית הרצפה $\\lfloor X \\rfloor$ מחזירה את המספר השלם הגדול ביותר שקטן או שווה ל-$X$. המשתנה החדש $Y$ יכול לקבל ערכים שלמים אי-שליליים בלבד: $k = 0, 1, 2, \\dots$.  \nהאירוע שבו המשתנה הבדיד מקבל ערך שלם ספציפי $k$ מתרחש אם ורק אם המשתנה המקורי $X$ נפל בתוך הקטע החצי פתוח הבא:\n$$\\{Y = k\\} \\iff \\{k \\le X < k + 1\\}$$\n\n**שלב 2: חישוב ההסתברות הנקודתית**\nנחשב את ההסתברות לנפילה בקטע בעזרת פונקציית ההתפלגות המצטברת (CDF) של המשתנה המעריכית המקורי:\n$$P(Y = k) = P(k \\le X < k + 1) = F_X(k + 1) - F_X(k)$$\nנציב את נוסחת ה-CDF המעריכית $F_X(t) = 1 - e^{-\\lambda t}$:\n$$P(Y = k) = \\left(1 - e^{-\\lambda(k + 1)}\\right) - \\left(1 - e^{-\\lambda k}\\right)$$\n$$P(Y = k) = e^{-\\lambda k} - e^{-\\lambda(k + 1)} = e^{-\\lambda k} - e^{-\\lambda k} \\cdot e^{-\\lambda}$$\nנוציא גורם משותף מחוץ לסוגריים:\n$$P(Y = k) = e^{-\\lambda k} \\left(1 - e^{-\\lambda}\\right) = \\left(e^{-\\lambda}\\right)^k \\left(1 - e^{-\\lambda}\\right)$$\n\n**שלב 3: הוכחת ההתאמה להתפלגות גאומטרית**\nנזכיר כי פונקציית ההסתברות של משתנה גאומטרי $Z \\sim G(p)$ המתחיל מאפס מוגדרת כ:\n$$P(Z = k) = (1-p)^k \\cdot p$$\nנשווה את הביטויים בצורה ישירה. אם נגדיר את פרמטר ההצלחה הסטטיסטי כ:\n$$p = 1 - e^{-\\lambda}$$\nאז מתקבל בהכרח שאיבר השער המשלים הוא:\n$$1 - p = e^{-\\lambda}$$\nהצבה זו מראה בצורה מושלמת ש:\n$$P(Y = k) = (1-p)^k \\cdot p$$\n**מש\"ל:** המשתנה הבדיד $Y$ מתפלג גאומטרית עם פרמטר הצלחה $p = 1 - e^{-\\lambda}$!'
      },
      {
        id: 'def-prob-2-6',
        title: 'Capped Exponential Variable (Mixed Random Variable)',
        titleHe: 'שאלה 3: חסימת משתנה מעריכית בערך סף (משתנה מעורב - Mixed)',
        isPractice: true,
        content: 'Let $X \\sim \\text{Exp}(\\lambda)$. Consider the transformed variable $Y = \\min(X, 4)$, which caps the Exponential variable at a maximum value of 4.\n\nDerive the complete CDF $F_Y(t)$ and explain why it is a mixed random variable with a jump discontinuity.\n\n**Resulting CDF:**\n$$F_Y(t) = \\begin{cases} 0 & t < 0 \\\\ 1 - e^{-\\lambda t} & 0 \\le t < 4 \\\\ 1 & t \\ge 4 \\end{cases}$$',
        contentHe: 'יהי $X$ משתנה מקרי המפולג מעריכית עם פרמטר קצב $\\lambda = \\frac{1}{4}$. נגדיר משתנה מקרי חדש $Y$ המייצג מערכת קטועה או חסומה המוגדרת כך:\n$$Y = \\begin{cases} X & X \\ge 4 \\\\ 1 & \\text{אחרת} \\end{cases}$$\nמצא את פונקציית ההתפלגות $F_Y(t)$ של $Y$, וקבע האם הוא מהווה משתנה מקרי רציף.',
        simplifiedLogic: 'The variable $Y = \\min(X, 4)$ acts like an Exponential timer that is forced to stop at exactly 4 seconds if it has not already triggered. For any time $t < 4$, the CDF behaves like a standard continuous Exponential variable. However, at $t=4$, all the remaining probability mass that was spread over $[4, \\infty)$ collapses into the single discrete point $t=4$, creating a "mixed" variable with a jump discontinuity in its CDF.',
        simplifiedLogicHe: 'חסימה או כפייה של קטע שלם של ערכים רציפים להתרכז לתוך ערך קשיח אחד (1 במקרה זה) מולידה משתנה מעורב המכיל קפיצה שאינה רציפה ב-CDF.',
        toolboxConnection: 'Models censored data in statistics (where study observations are capped after a fixed duration) and saturation limits in hardware sensors.',
        keyTakeaway: 'Capping or censoring a continuous variable at a boundary creates a mixed random variable, characterized by a jump discontinuity in the CDF at the boundary equal to the tail probability.',
        keyTakeawayHe: 'חסימה או כפייה של קטע שלם של ערכים רציפים להתרכז לתוך ערך קשיח אחד (1 במקרה זה) מולידה משתנה מעורב המכיל קפיצה שאינה רציפה ב-CDF.',
        proof: 'Step-by-Step Derivation and Jump Analysis:\n\n**Step 1: Derive the CDF $F_Y(t)$**\nBy definition, $F_Y(t) = P(Y \\le t) = P(\\min(X, 4) \\le t)$.\n- **For $t < 0$**: Since $X \\ge 0$, $Y = \\min(X, 4) \\ge 0$, so $F_Y(t) = 0$.\n- **For $0 \\le t < 4$**: The condition $\\min(X, 4) \\le t$ is satisfied if and only if $X \\le t$ (since the cap 4 is strictly greater than $t$).\n$$F_Y(t) = P(X \\le t) = 1 - e^{-\\lambda t}$$\n- **For $t \\ge 4$**: Since $Y = \\min(X, 4)$ can never exceed 4, the event $Y \\le t$ is certain.\n$$F_Y(t) = 1$$\n\n**Step 2: Analyze the Jump Discontinuity**\nLet us evaluate the limit of $F_Y(t)$ as $t$ approaches 4 from the left:\n$$\\lim_{t \\to 4^-} F_Y(t) = 1 - e^{-4\\lambda}$$\nHowever, at exactly $t=4$, we have:\n$$F_Y(4) = 1$$\nThe jump discontinuity (discrete point mass) at $t=4$ is:\n$$P(Y = 4) = F_Y(4) - \\lim_{t \\to 4^-} F_Y(t) = 1 - \\left(1 - e^{-4\\lambda}\\right) = e^{-4\\lambda}$$\nThis represents the probability that the original Exponential variable $X$ was greater than or equal to 4 ($P(X \\ge 4) = e^{-4\\lambda}$), which now sits entirely as a discrete point mass at $t=4$.',
        proofHe: '**שלב 1: ניתוח קטעי ההתפלגות של $Y$**\nהמשתנה $X \\sim Exp(\\frac{1}{4})$. ה-CDF שלו היא $F_X(t) = 1 - e^{-\\frac{1}{4}t}$ לכל $t \\ge 0$.  \nנבחן את פונקציית הצבירה $F_Y(t) = P(Y \\le t)$ לאורך שלושה קטעים מרכזיים:\n1. **עבור התחום $t < 1$:**\n   על פי הגדרת הטרנספורמציה, הערך המינימלי ש-$Y$ יכול לקבל הוא 1 (מכיוון שכל ערך של $X$ שקטן מ-4 קורס מיד ל-1). לכן, אין שום סיכוי לקבל ערך קטן מ-1, וההסתברות מתאפסת:\n   $$F_Y(t) = 0$$\n2. **עבור התחום $1 \\le t < 4$:**\n   בקטע זה, הדרישה $Y \\le t$ יכולה להתממש אך ורק אם $Y=1$ (מכיוון שאין ערכים של המשתנה בין 1 ל-4).  \n   המשתנה $Y=1$ מתקבל לכל מצב שבו המשתנה המקורי $X$ היה קטן מ-4. לכן ההסתברות קבועה לאורך כל הקטע ושווה ל:\n   $$F_Y(t) = P(X < 4) = F_X(4) = 1 - e^{-\\frac{1}{4} \\cdot 4} = 1 - e^{-1} = 1 - \\frac{1}{e}$$\n3. **עבור התחום $t \\ge 4$:**\n   בקטע זה, המשתנה חוזר להתנהג בצורה רציפה כפי שהיה במקור ($Y=X$). ההסתברות כוללת את מסת המשקל של 1 ואינטגרציה של המשך הקטע הרציף:\n   $$F_Y(t) = P(X \\le t) = F_X(t) = 1 - e^{-\\frac{1}{4}t}$$\n\nנאחד את המסקנות לפונקציית ה-CDF המלאה של $Y$:\n$$F_Y(t) = \\begin{cases} 0 & t < 1 \\\\ 1 - \\frac{1}{e} & 1 \\le t < 4 \\\\ 1 - e^{-\\frac{1}{4}t} & t \\ge 4 \\end{cases}$$\n\n**שלב 2: קביעת סטטוס המשתנה (בדיקת רציפות)**\nנבדוק את תנאי הרציפות בנקודת המפנה $t=1$. נחשב את הגבול משמאל ומימין:\n- הגבול משמאל: $\\lim_{t \\to 1^-} F_Y(t) = 0$\n- הגבול מימין: $\\lim_{t \\to 1^+} F_Y(t) = 1 - \\frac{1}{e}$\n\nמכיוון שהגבולות אינם שווים, קיימת נקודת אי-רציפות מסוג קפיצה (Jump Discontinuity) בנקודה $t=1$. גודל הקפיצה מייצג את ההסתברות הנקודתית לקבל בדיוק 1:\n$$P(Y = 1) = 1 - \\frac{1}{e} \\approx 0.632$$\n**מסקנה סופית:** המשתנה $Y$ אינו משתנה מקרי רציף! הוא מהווה **משתנה מקרי מעורב (Mixed)**, המשלב נקודת מסה בדידה ב-1 והתנהגות צפיפות רציפה לכל $t \\ge 4$.'
      },
      {
        id: 'def-prob-2-7',
        title: 'Trigonometric Transformation & Infinite Geometric Series',
        titleHe: 'שאלה 4: טרנספורמציה טריגונומטרית מחזורית אינסופית',
        isPractice: true,
        content: 'Let $X \\sim \\text{Exp}(\\lambda)$. Consider the transformed variable $Y = \\sin(X)$. Calculate the exact probability that $Y$ is positive:\n$$P(Y > 0) = P(\\sin(X) > 0)$$\n\n**Resulting Probability:**\n$$P(Y > 0) = \\frac{1}{1 + e^{-\\lambda \\pi}}$$\n\nFor the standard rate parameter $\\lambda = 1$:\n$$P(Y > 0) = \\frac{1}{1 + e^{-\\pi}} \\approx 0.958$$',
        contentHe: 'יהי $X$ משתנה מקרי המפולג מעריכית עם פרמטר קצב $\\lambda > 0$. נפעיל על המשתנה טרנספורמציה מחזורית לקבלת גל סינוס: $Y = \\sin(X)$. חשב בצורה אנליטית מדויקת את ההסתברות שהגל יימצא בחלקו החיובי, כלומר: $P(Y > 0)$.',
        simplifiedLogic: 'The sine function $\\sin(x)$ is positive on intervals of the form $(2k\\pi, (2k+1)\\pi)$ for all non-negative integers $k$. To find the total probability that $Y > 0$, we sum the probabilities of $X$ falling into any of these disjoint intervals. Because the Exponential density decays geometrically, the sum of these interval probabilities forms an infinite geometric series that we can solve exactly.',
        simplifiedLogicHe: 'פתרון טרנספורמציה מחזורית על פני חצי ציר אינסופי דורש פירוק של המרחב לתתי-קטעים זרים, וחישוב סכום של טור הנדסי אינסופי מתכנס.',
        toolboxConnection: 'Ties together continuous probability density, trigonometric transformations, and infinite series summation, which is a classic advanced exam topic.',
        keyTakeaway: 'Trigonometric transformations of Exponential variables involve infinite sequences of active intervals, requiring geometric series summation to solve.',
        keyTakeawayHe: 'פתרון טרנספורמציה מחזורית על פני חצי ציר אינסופי דורש פירוק של המרחב לתתי-קטעים זרים, וחישוב סכום של טור הנדסי אינסופי מתכנס.',
        proof: 'Step-by-Step Solution:\n\n**Step 1: Identify positive regions of $\\sin(X)$**\nSince $X > 0$, the event $\\sin(X) > 0$ is the union of disjoint intervals:\n$$\\sin(X) > 0 \\iff X \\in \\bigcup_{k=0}^{\\infty} (2k\\pi, (2k+1)\\pi)$$\n\n**Step 2: Sum the interval probabilities**\nSince the intervals are disjoint, by Kolmogorov\'s third axiom:\n$$P(\\sin(X) > 0) = \\sum_{k=0}^{\\infty} P(2k\\pi < X < (2k+1)\\pi)$$\nFor each interval, the probability is:\n$$P(2k\\pi < X < (2k+1)\\pi) = F_X((2k+1)\\pi) - F_X(2k\\pi)$$\nUsing $F_X(x) = 1 - e^{-\\lambda x}$:\n$$F_X((2k+1)\\pi) - F_X(2k\\pi) = \\left(1 - e^{-\\lambda(2k+1)\\pi}\\right) - \\left(1 - e^{-\\lambda 2k\\pi}\\right) = e^{-2k\\lambda\\pi} - e^{-(2k+1)\\lambda\\pi}$$\nFactor out $e^{-2k\\lambda\\pi}$:\n$$P(2k\\pi < X < (2k+1)\\pi) = e^{-2k\\lambda\\pi} \\left(1 - e^{-\\lambda\\pi}\\right)$$\n\n**Step 3: Sum the infinite geometric series**\n$$P(\\sin(X) > 0) = \\sum_{k=0}^{\\infty} e^{-2k\\lambda\\pi} \\left(1 - e^{-\\lambda\\pi}\\right) = \\left(1 - e^{-\\lambda\\pi}\\right) \\sum_{k=0}^{\\infty} \\left(e^{-2\\lambda\\pi}\\right)^k$$\nThis is an infinite geometric series with first term $a = 1$ and common ratio $r = e^{-2\\lambda\\pi}$ (since $|r| < 1$, it converges):\n$$P(\\sin(X) > 0) = \\left(1 - e^{-\\lambda\\pi}\\right) \\cdot \\frac{1}{1 - e^{-2\\lambda\\pi}}$$\nUsing the difference of squares identity for the denominator, $1 - e^{-2\\lambda\\pi} = \\left(1 - e^{-\\lambda\\pi}\\right)\\left(1 + e^{-\\lambda\\pi}\\right)$:\n$$P(\\sin(X) > 0) = \\frac{1 - e^{-\\lambda\\pi}}{\\left(1 - e^{-\\lambda\\pi}\\right)\\left(1 + e^{-\\lambda\\pi}\\right)} = \\frac{1}{1 + e^{-\\lambda\\pi}}$$\nThis completes the proof.',
        proofHe: '**שלב 1: זיהוי תחומי החיוביות של פונקציית הסינוס**\nהביטוי $\\sin(x) > 0$ מתקיים על ציר המספרים במחזוריות קבועה, בתוך קטעים פתוחים מהצורה הבאה לכל $k$ שלם אי-שלילי:\n$$(2k\\pi, (2k+1)\\pi)$$\nכלומר, אנחנו מחפשים את ההסתברות ש-$X$ ייפול באחד מהקטעים הבאים:\n$$P(Y > 0) = P(0 < X < \\pi) + P(2\\pi < X < 3\\pi) + P(4\\pi < X < 5\\pi) + \\dots$$\n\n**שלב 2: חישוב הסכום באמצעות ה-CDF המעריכית**\nנחשב את ההסתברות לכל קטע בנפרד בעזרת נוסחת ההפרשים של ה-CDF הרציפה:\n$$P(2k\\pi < X < (2k+1)\\pi) = F_X((2k+1)\\pi) - F_X(2k\\pi)$$\n$$\\left(1 - e^{-\\lambda(2k+1)\\pi}\\right) - \\left(1 - e^{-\\lambda 2k\\pi}\\right) = e^{-2\\lambda k\\pi} - e^{-2\\lambda k\\pi - \\lambda\\pi}$$\nנוציא גורם משותף מחוץ לסוגריים:\n$$= e^{-2\\lambda k\\pi} \\left(1 - e^{-\\lambda\\pi}\\right) = \\left(e^{-2\\lambda\\pi}\\right)^k \\left(1 - e^{-\\lambda\\pi}\\right)$$\n\n**שלב 3: סיכום הטור ההנדסי האינסופי**\nנציב את האיברים שקיבלנו לכל $k = 0, 1, 2, \\dots$ ונקבל טור הנדסי אינסופי:\n$$P(Y > 0) = \\sum_{k=0}^{\\infty} \\left(1 - e^{-\\lambda\\pi}\\right) \\cdot \\left(e^{-2\\lambda\\pi}\\right)^k$$\nזהו טור הנדסי אינסופי תקני המחושב לפי נוסחת הסכום המפורסמת:\n$$S = \\frac{a_1}{1 - q}$$\nנחלץ את איבר הפתיחה ($a_1$) ואת מנת הטור ($q$) מתוך המשוואה:\n- איבר ראשון עבור $k=0$ הוא: $a_1 = 1 - e^{-\\lambda\\pi}$\n- מנת הטור הקבועה היא: $q = e^{-2\\lambda\\pi}$\n\nנציב אותם ישירות בתוך נוסחת הסכום:\n$$P(Y > 0) = \\frac{1 - e^{-\\lambda\\pi}}{1 - e^{-2\\lambda\\pi}}$$\nנשתמש בנוסחת כפל מקוצר להפרש ריבועים במכנה כדי לצמצם את הביטוי ($1 - e^{-2\\lambda\\pi} = (1 - e^{-\\lambda\\pi})(1 + e^{-\\lambda\\pi})$):\n$$P(Y > 0) = \\frac{1 - e^{-\\lambda\\pi}}{(1 - e^{-\\lambda\\pi})(1 + e^{-\\lambda\\pi})} = \\frac{1}{1 + e^{-\\lambda\\pi}}$$\n\n**תשובה סופית:** ההסתברות המדויקת שהגל יהיה חיובי היא בדיוק:\n$$P(Y > 0) = \\frac{1}{1 + e^{-\\lambda\\pi}}$$'
      }
    ],
    quiz: [
      {
        question: 'Let $X \\sim \\text{Exp}(2)$ represent the waiting time for a network packet. What is the probability that the packet takes more than 3 seconds to arrive, given that it has already taken more than 1 second?',
        questionHe: 'יהי $X \\sim Exp(2)$ משתנה מקרי המייצג את זמן ההמתנה לחבילת מידע ברשת. מהי ההסתברות המדויקת שהחבילה תתעכב יותר מ-3 שניות, בהינתן שידוע כי היא כבר מתעכבת יותר משנייה אחת?',
        options: [
          '$e^{-4}$',
          '$e^{-6}$',
          '$e^{-2}$',
          '$e^{-8}$'
        ],
        optionsHe: [
          '$e^{-4}$',
          '$e^{-6}$',
          '$e^{-2}$',
          '$e^{-8}$'
        ],
        correctAnswerIndex: 2,
        explanation: 'By the memoryless property of the Exponential distribution, $P(X > s + t \\mid X > s) = P(X > t)$. Here, $s = 1$ and $s + t = 3$, which means $t = 2$. Therefore, $P(X > 3 \\mid X > 1) = P(X > 2) = e^{-2\\lambda} = e^{-2(2)} = e^{-2}$ (or approximately 0.135).',
        explanationHe: 'על פי תכונת חוסר הזיכרון (Memoryless Property) הייחודית של ההתפלגות המעריכית, המערכת אינה זוכרת את זמן ההמתנה שכבר חלף. \nההסתברות להמתין עוד 2 שניות נוספות (מעבר לשנייה שכבר עברה) שקולה לחלוטין להסתברות שרכיב חדש ימתין יותר מ-2 שניות מהרגע הראשון:\n$$P(X > 1 + 2 \\mid X > 1) = P(X > 2)$$\nנחשב זאת ישירות באמצעות ההסתברות של הזנב המעריכית ($1 - F_X(2)$) עם פרמטר קצב $\\lambda = 2$:\n$$P(X > 2) = e^{-\\lambda \\cdot 2} = e^{-2 \\cdot 2} = e^{-4}$$\nלכן התשובה הנכונה היא $e^{-4}$.'
      },
      {
        question: 'Suppose $X_1, X_2, X_3$ are three independent lifetime measurements of cloud server instances, each modeled as $X_i \\sim \\text{Exp}(0.05)$. What is the distribution of the system lifetime if the system fails as soon as the first server crashes?',
        questionHe: 'נניח כי $X_1, X_2, X_3$ הם שלושה משתני אורך חיים בלתי תלויים של שרתים בענן, כאשר כל אחד מהם מתפלג $X_i \\sim Exp(0.05)$. מהי התפלגות אורך חיי המערכת אם ידוע שהיא כושלת ברגע שבו השרת הראשון קורס?',
        options: [
          '$\\text{Exp}(0.05)$',
          '$\\text{Exp}(0.15)$',
          '$\\text{Exp}(0.0167)$',
          '$\\text{Uniform}(0, 20)$'
        ],
        optionsHe: [
          '$Exp(0.05)$',
          '$Exp(0.15)$',
          '$Exp(0.0167)$',
          '$Uniform(0, 20)$'
        ],
        correctAnswerIndex: 1,
        explanation: 'The system lifetime is the minimum of the three lifetimes, $Y = \\min(X_1, X_2, X_3)$. Since the cloud server instances are independent and exponentially distributed, their minimum is also exponentially distributed, with rate parameter equal to the sum of the individual rates: $\\lambda_{sys} = 0.05 + 0.05 + 0.05 = 0.15$. Thus, $Y \\sim \\text{Exp}(0.15)$.',
        explanationHe: 'אורך חיי המערכת מיוצג על ידי המינימום של שלושת משתני אורך החיים, $Y = \\min(X_1, X_2, X_3)$. מאחר ששרתי הענן בלתי תלויים ומתפלגים מעריכית, המינימום שלהם מתפלג גם הוא מעריכית, כאשר פרמטר הקצב של המערכת הוא סכום פרמטרי הקצב האינדיבידואליים: $\\lambda_{sys} = 0.05 + 0.05 + 0.05 = 0.15$. על כן, $Y \\sim Exp(0.15)$.'
      }
    ]
  }
,
  {
    id: 'prob-3',
    courseId: 'prob',
    chapterNumber: '3',
    title: 'Chapter 3: Discrete Random Variables & Special Distributions',
    titleHe: 'פרק 3: משתנים מקריים בדידים והתפלגויות מיוחדות',
    intro: 'While continuous models deal with infinite, uncountable ranges of outcomes, many real-world phenomena involve discrete, countable counts—such as the number of heads in coin tosses, number of packets arriving at a server, or attempts until the first success. This chapter builds the rigorous foundations for Discrete Random Variables, their Probability Mass Functions (PMFs), mathematical expectations, variance, and the five fundamental discrete distributions: Bernoulli, Binomial, Geometric, Poisson, and Hypergeometric.',
    introHe: 'בעוד שמודלים רציפים מטפלים בטווחים אינסופיים ובלתי-ספירים של תוצאות, תופעות רבות בעולם האמיתי עוסקות בערכים בדידים וספירים—כמו מספר עצי המטבע בהטלת מטבעות, מספר חבילות מידע המגיעות לשרת, או מספר הניסיונות עד להצלחה הראשונה. פרק זה בונה את היסודות הקפדניים עבור משתנים מקריים בדידים, פונקציות ההסתברות שלהם (PMF), תוחלת מתמטית, שונות, וחמש ההתפלגויות הבדידיות היסודיות: ברנולי, דו-איברית (בינומית), גיאומטרית, פואסון והיפרגיאומטרית.',
    motivation: 'Discrete random variables are the cornerstone of digital computation, discrete-event simulation, and network packet analysis. Algorithms such as randomized hashing, randomized searches, and queueing models rely heavily on understanding discrete distributions (like Poisson and Binomial) to analyze performance limits and optimize throughput.',
    motivationHe: 'משתנים מקריים בדידים הם אבן הפינה של מחשוב דיגיטלי, סימולציות של אירועים בדידים וניתוח חבילות ברשתות תקשורת. אלגוריתמים כמו גיבוב אקראי, חיפושים אקראיים ומודלים של תורים מסתמכים במידה רבה על הבנת התפלגויות בדידיות (כמו פואסון ובינומית) לצורך ניתוח ביצועים ואופטימיזציה של רוחב פס.',
    definitions: [
      {
        id: 'def-prob-3-1',
        title: 'Discrete Random Variables & PMF',
        titleHe: 'משתנה מקרי בדיד ופונקציית הסתברות (PMF)',
        content: 'Let $X$ be a random variable taking values in a countable set $S \\subset \\mathbb{R}$ (either finite or countably infinite). The **Probability Mass Function (PMF)**, denoted by $p_X(x)$, represents the probability that the variable takes an exact value $x$:\n$$p_X(x) = P(X = x)$$\n\n**Core Mathematical Properties of the PMF:**\n1. **Non-Negativity**: For any real value $x$:\n$$p_X(x) \\ge 0$$\n2. **Normalization**: Summing the probabilities over the support $S$ must equal exactly 1:\n$$\\sum_{x \\in S} p_X(x) = 1$$\n3. **Event Probability**: For any event $A \\subset \\mathbb{R}$:\n$$P(X \\in A) = \\sum_{x \\in A \\cap S} p_X(x)$$',
        contentHe: 'יהי $X$ משתנה מקרי המקבל ערכים בקבוצה ספירה $S \\subset \\mathbb{R}$ (סופית או אינסופית ספירה). **פונקציית ההסתברות (PMF)**, המסומנת ב-$p_X(x)$, מייצגת את ההסתברות שהמשתנה יקבל בדיוק את הערך $x$:\n$$p_X(x) = P(X = x)$$\n\n**תכונות יסודיות של פונקציית ההסתברות:**\n1. **אי-שליליות**: לכל ערך ממשי $x$:\n$$p_X(x) \\ge 0$$\n2. **נרמול**: סכום ההסתברויות על פני כל תומך המשתנה $S$ חייב להיות שווה בדיוק ל-1:\n$$\\sum_{x \\in S} p_X(x) = 1$$\n3. **הסתברות של מאורע**: לכל מאורע $A \\subset \\mathbb{R}$:\n$$P(X \\in A) = \\sum_{x \\in A \\cap S} p_X(x)$$',
        simplifiedLogic: 'Unlike continuous variables where the probability of hitting a single point is zero, a discrete random variable concentrates its probability weight on specific countable points. The PMF simply lists the "weight" at each of these points, and the total weight of the entire universe is exactly 1.',
        simplifiedLogicHe: 'בניגוד למשתנים רציפים שבהם ההסתברות לקבל נקודה בודדת היא אפס, משתנה בדיד מרכז את מסת ההסתברות שלו בנקודות ספירות ספציפיות. פונקציית ההסתברות (PMF) פשוט מפרטת את ה"משקל" של כל אחת מהנקודות הללו, והמשקל הכולל של כל היקום הוא בדיוק 1.',
        toolboxConnection: 'PMFs are used to model states in discrete systems, such as the number of users connected to a network, database lock queues, or discrete error codes in API responses.',
        toolboxConnectionHe: 'פונקציות הסתברות בדידיות משמשות למידול מצבים במערכות בדידות, כגון מספר המשתמשים המחוברים לרשת, תורים לנעילת מסדי נתונים, או קודי שגיאה בדידים בתגובות API.',
        keyTakeaway: 'The PMF maps countable outcomes to their exact probabilities, summing to exactly 1.',
        keyTakeawayHe: 'פונקציית ההסתברות (PMF) ממפה תוצאות ספירות להסתברויות המדויקות שלהן, כאשר סכומן הוא בדיוק 1.'
      },
      {
        id: 'def-prob-3-2',
        title: 'Expectation, Variance & LOTUS',
        titleHe: 'תוחלת, שונות ומשפט הסטטיסטיקאי המרושל (LOTUS)',
        content: 'For a discrete random variable $X$ with support $S$, its **Expected Value** (mean), denoted by $\\mathbb{E}[X]$, is:\n$$\\mathbb{E}[X] = \\sum_{x \\in S} x \\cdot p_X(x)$$\nprovided the sum converges absolutely (i.e., $\\sum |x| \\cdot p_X(x) < \\infty$).\n\n**Law of the Unconscious Statistician (LOTUS)**: If $h(x)$ is a real-valued function, the expected value of $h(X)$ is calculated directly as:\n$$\\mathbb{E}[h(X)] = \\sum_{x \\in S} h(x) \\cdot p_X(x)$$\n\n**Variance**: The variance of $X$, denoted by $\\text{Var}(X)$, measures the spread and is defined as:\n$$\\text{Var}(X) = \\mathbb{E}\\left[(X - \\mathbb{E}[X])^2\\right] = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2$$\nwhere $\\mathbb{E}[X^2] = \\sum_{x \\in S} x^2 \\cdot p_X(x)$.',
        contentHe: 'עבור משתנה מקרי בדיד $X$ עם תומך $S$, ה**תוחלת** (הערך הממוצע), המסומנת ב-$\\mathbb{E}[X]$, מוגדרת כ:\n$$\\mathbb{E}[X] = \\sum_{x \\in S} x \\cdot p_X(x)$$\nבתנאי שהסכום מתכנס בהחלט (כלומר, $\\sum |x| \\cdot p_X(x) < \\infty$).\n\n**משפט הסטטיסטיקאי המרושל (LOTUS)**: עבור פונקציה ממשית $h(x)$, התוחלת של המשתנה החדש $h(X)$ מחושבת ישירות על ידי:\n$$\\mathbb{E}[h(X)] = \\sum_{x \\in S} h(x) \\cdot p_X(x)$$\n\n**שונות**: השונות של $X$, המסומנת ב-$\\text{Var}(X)$, מודדת את פיזור הערכים ומוגדרת כ:\n$$\\text{Var}(X) = \\mathbb{E}\\left[(X - \\mathbb{E}[X])^2\\right] = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2$$\nכאשר $\\mathbb{E}[X^2] = \\sum_{x \\in S} x^2 \\cdot p_X(x)$.',
        simplifiedLogic: 'The expected value is the "center of mass" of the distribution—where it would balance if placed on a pivot. LOTUS allows us to find the mean of a transformed variable $h(X)$ without first deriving the PMF of $h(X)$. The variance is the average squared distance from the mean, capturing the uncertainty or volatility.',
        simplifiedLogicHe: 'התוחלת היא "מרכז המסה" של ההתפלגות—הנקודה שבה היא תתאזן אם נציב אותה על ציר. משפט LOTUS מאפשר לנו למצוא את התוחלת של משתנה מותמר $h(X)$ מבלי שנצטרך למצוא תחילה את פונקציית ההסתברות החדשה של $h(X)$. השונות היא ממוצע ריבועי המרחקים מהתוחלת, והיא מייצגת את מידת הפיזור או התנודתיות.',
        toolboxConnection: 'Lineary of expectation ($\\mathbb{E}[aX+b]=a\\mathbb{E}[X]+b$) and variance rules ($\\text{Var}(aX+b)=a^2\\text{Var}(X)$) are critical in machine learning to normalize data and scale loss functions.',
        toolboxConnectionHe: 'ליניאריות התוחלת ($\\mathbb{E}[aX+b]=a\\mathbb{E}[X]+b$) וכללי השונות ($\\text{Var}(aX+b)=a^2\\text{Var}(X)$) קריטיים בלמידת מכונה לצורך נרמול נתונים ושינוי קנה מידה של פונקציות הפסד.',
        keyTakeaway: 'Expectation is the probability-weighted average, and LOTUS computes transformations directly.',
        keyTakeawayHe: 'התוחלת היא הממוצע המשוקלל בהסתברויות, ו-LOTUS מחשב תוחלת של טרנספורמציות באופן ישיר.'
      },
      {
        id: 'def-prob-3-3',
        title: 'Bernoulli & Binomial Distributions',
        titleHe: 'התפלגות ברנולי והתפלגות דו-איברית (בינומית)',
        content: 'These distributions model binary outcomes (Success/Failure):\n\n1. **Bernoulli Distribution ($X \\sim \\text{Bern}(p)$)**: Represents a single experiment with success probability $p \\in (0,1)$:\n- PMF: $p_X(1) = p, \\quad p_X(0) = 1-p$\n- Expectation: $\\mathbb{E}[X] = p$\n- Variance: $\\text{Var}(X) = p(1-p)$\n\n2. **Binomial Distribution ($Y \\sim \\text{Bin}(n, p)$)**: Represents the number of successes in $n$ independent Bernoulli trials:\n- PMF: \n$$P(Y = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad k \\in \\{0, 1, \\dots, n\\}$$\nwhere $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$.\n- Expectation: $\\mathbb{E}[Y] = np$\n- Variance: $\\text{Var}(Y) = np(1-p)$',
        contentHe: 'התפלגויות אלו ממדלות ניסויים בעלי שתי תוצאות אפשריות (הצלחה/כישלון):\n\n1. **התפלגות ברנולי ($X \\sim \\text{Bern}(p)$)**: מייצגת ניסוי בודד שבו ההסתברות להצלחה היא $p \\in (0,1)$:\n- פונקציית הסתברות: $p_X(1) = p, \\quad p_X(0) = 1-p$\n- תוחלת: $\\mathbb{E}[X] = p$\n- שונות: $\\text{Var}(X) = p(1-p)$\n\n2. **התפלגות דו-איברית בינומית ($Y \\sim \\text{Bin}(n, p)$)**: מייצגת את מספר ההצלחות ב-$n$ ניסויי ברנולי בלתי תלויים:\n- פונקציית הסתברות: \n$$P(Y = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad k \\in \\{0, 1, \\dots, n\\}$$\nכאשר $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$.\n- תוחלת: $\\mathbb{E}[Y] = np$\n- שונות: $\\text{Var}(Y) = np(1-p)$',
        simplifiedLogic: 'Think of Bernoulli as a single coin flip where the coin has a probability $p$ of landing on heads. Binomial is flipping that same coin $n$ times and counting the total number of heads. The binomial coefficient $\\binom{n}{k}$ counts the number of different sequences that contain exactly $k$ heads and $n-k$ tails.',
        simplifiedLogicHe: 'אפשר לחשוב על ברנולי כעל הטלת מטבע בודדת שבה להסתברות לקבל עץ היא $p$. בינומית היא הטלה של אותו מטבע בדיוק $n$ פעמים וספירת מספר הפעמים הכולל שבהם התקבל עץ. המקדם הבינומי $\\binom{n}{k}$ סופר את מספר הסדרות השונות האפשריות המכילות בדיוק $k$ הצלחות ו-$n-k$ כשלונות.',
        toolboxConnection: 'The Binomial distribution is used to model network reliability (e.g., probability that at most k packets are lost out of n), A/B testing conversion rates, and hardware component failure rates.',
        toolboxConnectionHe: 'התפלגות בינומית משמשת למידול אמינות של רשתות תקשורת (למשל, ההסתברות שלכל היותר $k$ חבילות יאבדו מתוך $n$), יחסי המרה במבחני A/B, ושיעורי כשל של רכיבי חומרה במערכות גדולות.',
        keyTakeaway: 'Binomial represents the sum of n independent Bernoulli variables, with mean np.',
        keyTakeawayHe: 'התפלגות בינומית מייצגת את סכומם של $n$ משתני ברנולי בלתי תלויים, עם תוחלת $np$.'
      },
      {
        id: 'def-prob-3-4',
        title: 'Geometric & Hypergeometric Distributions',
        titleHe: 'התפלגות גיאומטרית והתפלגות היפרגיאומטרית',
        content: 'These distributions model different sampling and waiting processes:\n\n1. **Geometric Distribution ($X \\sim \\text{Geom}(p)$)**: Models the number of independent Bernoulli trials until the **first success** occurs:\n- PMF: \n$$P(X = k) = (1-p)^{k-1} p, \\quad k \\in \\{1, 2, 3, \\dots\\}$$\n- Expectation: $\\mathbb{E}[X] = \\frac{1}{p}$\n- Variance: $\\text{Var}(X) = \\frac{1-p}{p^2}$\n- **Memoryless Property**: $P(X > s+t \\mid X > s) = P(X > t)$ for $s, t \\in \\{0, 1, 2, \\dots\\}$.\n\n2. **Hypergeometric Distribution ($Y \\sim \\text{Hyper}(N, D, n)$)**: Models the number of successes in a sample of size $n$ drawn **without replacement** from a population of $N$ items containing $D$ successes:\n- PMF:\n$$P(Y = k) = \\frac{\\binom{D}{k} \\binom{N-D}{n-k}}{\\binom{N}{n}}$$\nfor $\\max(0, n-(N-D)) \\le k \\le \\min(n, D)$.\n- Expectation: $\\mathbb{E}[Y] = n \\cdot \\frac{D}{N}$\n- Variance: $\\text{Var}(Y) = n \\cdot \\frac{D}{N} \\left(1 - \\frac{D}{N}\\right) \\frac{N-n}{N-1}$',
        contentHe: 'התפלגויות אלו ממדלות תהליכי דגימה והמתנה שונים:\n\n1. **התפלגות גיאומטרית ($X \\sim \\text{Geom}(p)$)**: מייצגת את מספר ניסויי ברנולי הבלתי תלויים הנדרשים עד ל**הצלחה הראשונה**:\n- פונקציית הסתברות: \n$$P(X = k) = (1-p)^{k-1} p, \\quad k \\in \\{1, 2, 3, \\dots\\}$$\n- תוחלת: $\\mathbb{E}[X] = \\frac{1}{p}$\n- שונות: $\\text{Var}(X) = \\frac{1-p}{p^2}$\n- **תכונת חוסר הזיכרון**: $P(X > s+t \\mid X > s) = P(X > t)$ לכל $s, t \\in \\{0, 1, 2, \\dots\\}$.\n\n2. **התפלגות היפרגיאומטרית ($Y \\sim \\text{Hyper}(N, D, n)$)**: מייצגת את מספר ההצלחות במדגם בגודל $n$ הנלקח **ללא החזרה** מאוכלוסייה בת $N$ איברים המכילה בדיוק $D$ איברים מוגדרים כהצלחה:\n- פונקציית הסתברות:\n$$P(Y = k) = \\frac{\\binom{D}{k} \\binom{N-D}{n-k}}{\\binom{N}{n}}$$\nכאשר לכל ערך המקיים $\\max(0, n-(N-D)) \\le k \\le \\min(n, D)$.\n- תוחלת: $\\mathbb{E}[Y] = n \\cdot \\frac{D}{N}$\n- שונות: $\\text{Var}(Y) = n \\cdot \\frac{D}{N} \\left(1 - \\frac{D}{N}\\right) \\frac{N-n}{N-1}$',
        simplifiedLogic: 'The geometric distribution waits for the first success; its expectation is $1/p$, meaning if the success rate is $20\\%$, you expect to wait 5 trials. The hypergeometric distribution is sampling without replacement. If we sampled *with* replacement, it would be Binomial. The factor $\\frac{N-n}{N-1}$ is the "finite population correction" which reduces variance because drawing without replacement reduces uncertainty as the pool shrinks.',
        simplifiedLogicHe: 'ההתפלגות הגיאומטרית ממדלת המתנה להצלחה ראשונה. התוחלת שלה היא $1/p$, כלומר אם סיכוי ההצלחה הוא $20\\%$, נצפה להמתין 5 ניסיונות. ההתפלגות ההיפרגיאומטרית היא דגימה ללא החזרה. אם היינו מחזירים כל כדור, זו הייתה התפלגות בינומית. הגורם $\\frac{N-n}{N-1}$ נקרא "תיקון אוכלוסייה סופית", והוא מקטין את השונות מכיוון שדגימה ללא החזרה מקטינה את אי-הוודאות ככל שמאגר הכדורים מצטמצם.',
        toolboxConnection: 'The geometric distribution is utilized in retry-until-success strategies in networking. The hypergeometric distribution is critical in quality control sampling, clinical trials, and lottery odds computations.',
        toolboxConnectionHe: 'ההתפלגות הגיאומטרית משמשת למידול מנגנוני ניסוי מחדש (retry) ברשתות תקשורת עד להצלחה. ההתפלגות ההיפרגיאומטרית חיונית בבקרת איכות של מדגמי ייצור, ניסויים קליניים וחישובי סיכויים במשחקי הגרלה.',
        keyTakeaway: 'Geometric is memoryless, while Hypergeometric models sampling without replacement.',
        keyTakeawayHe: 'ההתפלגות הגיאומטרית היא חסרת זיכרון, בעוד שההיפרגיאומטרית ממדלת דגימה ללא החזרה.'
      },
      {
        id: 'def-prob-3-5',
        title: 'Poisson Distribution & Limit Approximations',
        titleHe: 'התפלגות פואסון וקירובי גבול',
        content: 'This distribution models rare, independent events over a continuous interval:\n\n1. **Poisson Distribution ($X \\sim \\text{Poi}(\\lambda)$)**: Models the number of events in an interval with rate parameter $\\lambda > 0$:\n- PMF:\n$$P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}, \\quad k \\in \\{0, 1, 2, \\dots\\}$$\n- Expectation: $\\mathbb{E}[X] = \\lambda$\n- Variance: $\\text{Var}(X) = \\lambda$\n\n2. **Poisson Approximation to Binomial (Law of Rare Events)**: When $n$ is very large and $p$ is very small, such that $np \\to \\lambda$, then:\n$$\\text{Bin}(n, p) \\approx \\text{Poi}(\\lambda = np)$$\n\n3. **Normal Approximation to Binomial**: When $n$ is large such that $np \\ge 5$ and $n(1-p) \\ge 5$, then $Y \\sim \\text{Bin}(n, p)$ is approximately normal:\n$$Y \\approx N(np, np(1-p))$$\nUsing the **Continuity Correction**:\n$$P(a \\le Y \\le b) \\approx P\\left(\\frac{a - 0.5 - np}{\\sqrt{np(1-p)}} \\le Z \\le \\frac{b + 0.5 - np}{\\sqrt{np(1-p)}}\\right)$$',
        contentHe: 'התפלגות זו ממדלת אירועים נדירים ובלתי תלויים המתרחשים על פני מרווח זמן או מרחב רציף:\n\n1. **התפלגות פואסון ($X \\sim \\text{Poi}(\\lambda)$)**: ממדלת את מספר האירועים במרווח נתון עם פרמטר קצב $\\lambda > 0$:\n- פונקציית הסתברות:\n$$P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}, \\quad k \\in \\{0, 1, 2, \\dots\\}$$\n- תוחלת: $\\mathbb{E}[X] = \\lambda$\n- שונות: $\\text{Var}(X) = \\lambda$\n\n2. **קירוב פואסון לבינומי (חוק האירועים הנדירים)**: כאשר $n$ גדול מאוד ו-$p$ קטן מאוד, כך ש-$np \\to \\lambda$, מתקיים:\n$$\\text{Bin}(n, p) \\approx \\text{Poi}(\\lambda = np)$$\n\n3. **קירוב נורמלי לבינומי**: כאשר $n$ גדול מספיק כך ש-$np \\ge 5$ ו-$n(1-p) \\ge 5$, המשתנה $Y \\sim \\text{Bin}(n, p)$ מתנהג בקירוב כמו משתנה נורמלי:\n$$Y \\approx N(np, np(1-p))$$\nתוך שימוש ב**תיקון רציפות**:\n$$P(a \\le Y \\le b) \\approx P\\left(\\frac{a - 0.5 - np}{\\sqrt{np(1-p)}} \\le Z \\le \\frac{b + 0.5 - np}{\\sqrt{np(1-p)}}\\right)$$',
        simplifiedLogic: 'The Poisson distribution models counts of randomly occurring events (like website traffic spikes or phone calls to a center). Amazingly, both its mean and variance are exactly $\\lambda$. When events are rare ($p \\approx 0$) but there are many opportunities ($n \\approx \\infty$), the Poisson approximation saves massive binomial combinatorics computation. For moderate $p$ but large $n$, we use the Normal approximation, but we must expand the discrete boundaries by $0.5$ (continuity correction) to bridge the gap between step-like discrete bars and the smooth continuous bell curve.',
        simplifiedLogicHe: 'התפלגות פואסון ממדלת את מספרם של אירועים המתרחשים באופן אקראי (כמו כניסות לאתר או שיחות טלפון למוקד). למרבה הפלא, גם התוחלת וגם השונות שלה שוות בדיוק ל-$\\lambda$. כאשר אירועים הם נדירים ($p \\approx 0$) אך יש הזדמנויות רבות ($n \\approx \\infty$), קירוב פואסון חוסך חישובים קומבינטוריים בינומיים כבדים. עבור $p$ מתון ו-$n$ גדול, נשתמש בקירוב נורמלי, אך עלינו להרחיב את הגבולות הבדידים ב-$0.5$ (תיקון רציפות) כדי לגשר על הפער בין המדרגות הבדידיות לבין עקומת הפעמון הרציפה והחלקה.',
        toolboxConnection: 'Poisson traffic generators are standard in performance testing of servers. Normal approximations are used to establish statistical error margins in polls and surveys.',
        toolboxConnectionHe: 'מחוללי תעבורה פואסוניים הם סטנדרט בבדיקות ביצועים של שרתים. קירובים נורמליים משמשים לקביעת טווח שגיאה סטטיסטי בסקרים ומדגמי בחירות.',
        keyTakeaway: 'Poisson models event rates (mean = variance = lambda); Binomial can be approximated by Poisson (rare events) or Normal (large n).',
        keyTakeawayHe: 'פואסון ממדלת קצבי אירועים (תוחלת = שונות = למדא); ניתן לקרב את הבינומית על ידי פואסון (אירועים נדירים) או נורמלית (עבור $n$ גדול).'
      },
      {
        id: 'prac-prob-3-1',
        title: 'Practice 1: Algebraic Expectation & Variance Reconstruction',
        titleHe: 'תרגול 1: שחזור אלגברי של תוחלת ושונות מיחסים ריבועיים',
        content: 'A discrete random variable $X$ is known to satisfy two mathematical relations:\n$$\\mathbb{E}[(X - 1)^2] = 5 \\quad \\text{and} \\quad \\mathbb{E}[(X + 1)^2] = 13$$\n\nCalculate the exact expected value $\\mathbb{E}[X]$ and the variance $\\text{Var}(X)$.',
        contentHe: 'עבור משתנה מקרי בדיד $X$ ידועים שני היחסים המתמטיים הבאים:\n$$\\mathbb{E}[(X - 1)^2] = 5 \\quad \\text{וכן} \\quad \\mathbb{E}[(X + 1)^2] = 13$$\n\nחשבו את התוחלת המדויקת $\\mathbb{E}[X]$ ואת השונות $\\text{Var}(X)$.',
        isPractice: true,
        proof: 'We expand the quadratic terms inside the mathematical expectation operators using the linearity properties:\n\n1. **Expand the first relation:**\n$$\\mathbb{E}[(X - 1)^2] = \\mathbb{E}[X^2 - 2X + 1] = 5$$\nBy linearity of expectation:\n$$\\mathbb{E}[X^2] - 2\\mathbb{E}[X] + 1 = 5 \\implies \\mathbb{E}[X^2] - 2\\mathbb{E}[X] = 4 \\quad \\text{(Equation 1)}$$\n\n2. **Expand the second relation:**\n$$\\mathbb{E}[(X + 1)^2] = \\mathbb{E}[X^2 + 2X + 1] = 13$$\nBy linearity of expectation:\n$$\\mathbb{E}[X^2] + 2\\mathbb{E}[X] + 1 = 13 \\implies \\mathbb{E}[X^2] + 2\\mathbb{E}[X] = 12 \\quad \\text{(Equation 2)}$$\n\n3. **Solve the linear system:**\nLet $A = \\mathbb{E}[X^2]$ and $B = \\mathbb{E}[X]$. The equations are:\n- $A - 2B = 4$\n- $A + 2B = 12$\n\nAdding Equation 1 and Equation 2:\n$$(A - 2B) + (A + 2B) = 4 + 12 \\implies 2A = 16 \\implies A = 8$$\nSo, $\\mathbb{E}[X^2] = 8$.\n\nSubtracting Equation 1 from Equation 2:\n$$(A + 2B) - (A - 2B) = 12 - 4 \\implies 4B = 8 \\implies B = 2$$\nSo, $\\mathbb{E}[X] = 2$.\n\n4. **Calculate Variance:**\nUsing the identity $\\text{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2$:\n$$\\text{Var}(X) = 8 - 2^2 = 8 - 4 = 4$$\n\n**Final Answer:**\n$$\\mathbb{E}[X] = 2, \\quad \\text{Var}(X) = 4$$',
        proofHe: 'נפתח את האיברים הריבועיים בתוך אופרטור התוחלת תוך שימוש בתכונת הליניאריות:\n\n1. **פיתוח היחס הראשון:**\n$$\\mathbb{E}[(X - 1)^2] = \\mathbb{E}[X^2 - 2X + 1] = 5$$\nמליניאריות התוחלת נקבל:\n$$\\mathbb{E}[X^2] - 2\\mathbb{E}[X] + 1 = 5 \\implies \\mathbb{E}[X^2] - 2\\mathbb{E}[X] = 4 \\quad \\text{(משוואה 1)}$$\n\n2. **פיתוח היחס השני:**\n$$\\mathbb{E}[(X + 1)^2] = \\mathbb{E}[X^2 + 2X + 1] = 13$$\nמליניאריות התוחלת נקבל:\n$$\\mathbb{E}[X^2] + 2\\mathbb{E}[X] + 1 = 13 \\implies \\mathbb{E}[X^2] + 2\\mathbb{E}[X] = 12 \\quad \\text{(משוואה 2)}$$\n\n3. **פתרון מערכת המשוואות הליניאריות:**\nנגדיר $A = \\mathbb{E}[X^2]$ ו-$B = \\mathbb{E}[X]$. המשוואות הן:\n- $A - 2B = 4$\n- $A + 2B = 12$\n\nנחבר את משוואה 1 ומשוואה 2:\n$$(A - 2B) + (A + 2B) = 4 + 12 \\implies 2A = 16 \\implies A = 8$$\nכלומר, $\\mathbb{E}[X^2] = 8$.\n\nנחסיר את משוואה 1 ממשוואה 2:\n$$(A + 2B) - (A - 2B) = 12 - 4 \\implies 4B = 8 \\implies B = 2$$\nכלומר, $\\mathbb{E}[X] = 2$.\n\n4. **חישוב השונות:**\nנשתמש בזהות $\\text{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2$:\n$$\\text{Var}(X) = 8 - 2^2 = 8 - 4 = 4$$\n\n**תשובה סופית:**\n$$\\mathbb{E}[X] = 2, \\quad \\text{Var}(X) = 4$$',
        keyTakeawayHe: 'פיתוח ריבועי וליניאריות של תוחלת מאפשרים לחלץ את המומנט הראשון והשני של משתנה מקרי בקלות רבה.'
      },
      {
        id: 'prac-prob-3-2',
        title: 'Practice 2: Conditional Poisson & Truncated Support',
        titleHe: 'תרגול 2: הסתברות מותנית והתפלגות פואסון קטומה',
        content: 'Let $X \\sim \\text{Poi}(3)$ be a Poisson random variable representing the number of job requests arriving at a central server. Given that at least one request arrived ($X \\ge 1$), find the exact conditional probability that fewer than 2 requests arrived:\n$$P(X < 2 \\mid X \\ge 1)$$',
        contentHe: 'יהי $X \\sim \\text{Poi}(3)$ משתנה מקרי פואסוני המייצג את מספר בקשות השירות המגיעות לשרת מרכזי. בהינתן שהגיעה לפחות בקשה אחת ($X \\ge 1$), חשבו את ההסתברות המותנית המדויקת שלכל היותר הגיעה בקשה אחת (כלומר, פחות מ-2 בקשות):\n$$P(X < 2 \\mid X \\ge 1)$$',
        isPractice: true,
        proof: 'We apply the definition of conditional probability:\n\n$$P(X < 2 \\mid X \\ge 1) = \\frac{P(\\{X < 2\\} \\cap \\{X \\ge 1\\})}{P(X \\ge 1)}$$\n\n1. **Analyze the numerator:**\nSince $X$ is a discrete random variable taking values in $\\{0, 1, 2, \\dots\\}$, the only integer that satisfies both $X < 2$ and $X \\ge 1$ is $X = 1$. Therefore:\n$$P(\\{X < 2\\} \\cap \\{X \\ge 1\\}) = P(X = 1)$$\n\n2. **Analyze the denominator:**\nUsing the complement rule:\n$$P(X \\ge 1) = 1 - P(X = 0)$$\n\n3. **Compute the individual probabilities using the Poisson PMF ($P(X = k) = \\frac{e^{-\\lambda}\\lambda^k}{k!}$ where $\\lambda = 3$):**\n- For $k = 0$:\n$$P(X = 0) = \\frac{e^{-3} \\cdot 3^0}{0!} = e^{-3}$$\n- For $k = 1$:\n$$P(X = 1) = \\frac{e^{-3} \\cdot 3^1}{1!} = 3e^{-3}$$\n\n4. **Combine the results:**\n$$P(X < 2 \\mid X \\ge 1) = \\frac{3e^{-3}}{1 - e^{-3}} = \\frac{3}{e^3 - 1}$$\n\nSubstituting the numerical value $e^3 \\approx 20.0855$:\n$$P(X < 2 \\mid X \\ge 1) = \\frac{3}{20.0855 - 1} = \\frac{3}{19.0855} \\approx 0.1572 \\quad (15.72\\%)$$',
        proofHe: 'נשתמש בהגדרת ההסתברות המותנית:\n\n$$P(X < 2 \\mid X \\ge 1) = \\frac{P(\\{X < 2\\} \\cap \\{X \\ge 1\\})}{P(X \\ge 1)}$$\n\n1. **ניתוח המונה:**\nכיוון ש-$X$ הוא משתנה מקרי בדיד המקבל ערכים שלמים אי-שליליים $\\{0, 1, 2, \\dots\\}$, הערך השלם היחיד שמקיים בו-זמנית גם $X < 2$ וגם $X \\ge 1$ הוא $X = 1$. לכן:\n$$P(\\{X < 2\\} \\cap \\{X \\ge 1\\}) = P(X = 1)$$\n\n2. **ניתוח המכנה:**\nנשתמש בכלל המשלים:\n$$P(X \\ge 1) = 1 - P(X = 0)$$\n\n3. **חישוב ההסתברויות האינדיבידואליות לפי פונקציית פואסון ($P(X = k) = \\frac{e^{-\\lambda}\\lambda^k}{k!}$ עם $\\lambda = 3$):**\n- עבור $k = 0$:\n$$P(X = 0) = \\frac{e^{-3} \\cdot 3^0}{0!} = e^{-3}$$\n- עבור $k = 1$:\n$$P(X = 1) = \\frac{e^{-3} \\cdot 3^1}{1!} = 3e^{-3}$$\n\n4. **נחבר את התוצאות:**\n$$P(X < 2 \\mid X \\ge 1) = \\frac{3e^{-3}}{1 - e^{-3}} = \\frac{3}{e^3 - 1}$$\n\nנציב את הערך המספרי $e^3 \\approx 20.0855$:\n$$P(X < 2 \\mid X \\ge 1) = \\frac{3}{20.0855 - 1} = \\frac{3}{19.0855} \\approx 0.1572 \\quad (15.72\\%)$$',
        keyTakeawayHe: 'הסתברות מותנית מקטינה את מרחב המדגם, ובמקרה של פואסון קטום ב-0 אנו מחלקים ב-$1-e^{-\\lambda}$.'
      },
      {
        id: 'prac-prob-3-3',
        title: 'Practice 3: Normal Approximation to Binomial with Continuity Correction',
        titleHe: 'תרגול 3: קירוב נורמלי לבינומי עם תיקון רציפות',
        content: 'A customer feedback system shows a response rate of $p = 0.85$ ($85\\%$) for surveys. If $n = 10800$ customers are randomly selected to participate, calculate the approximate probability that the number of respondents $Y \\sim \\text{Bin}(10800, 0.85)$ falls between $9100$ and $9250$ inclusive:\n$$P(9100 \\le Y \\le 9250)$$',
        contentHe: 'מערכת משוב לקוחות מצביעה על כך ששיעור המענה לסקרים הוא $p = 0.85$ ($85\\%$). אם נבחרו באקראי $n = 10800$ לקוחות להשתתף בסקר, חשבו את ההסתברות המקורבת שמספר המשיבים בפועל $Y \\sim \\text{Bin}(10800, 0.85)$ יהיה בין $9100$ ל-$9250$ כולל:\n$$P(9100 \\le Y \\le 9250)$$',
        isPractice: true,
        proof: 'Since $n = 10800$ is extremely large, computing the binomial sum directly is intractable. We use the Normal Approximation.\n\n1. **Calculate the Mean (Expectation) and Variance of $Y$:**\n$$\\mu = \\mathbb{E}[Y] = np = 10800 \\times 0.85 = 9180$$\n$$\\sigma^2 = \\text{Var}(Y) = np(1-p) = 10800 \\times 0.85 \\times 0.15 = 1377$$\n$$\\sigma = \\sqrt{1377} \\approx 37.108$$\n\nSince $np = 9180 \\ge 5$ and $n(1-p) = 1620 \\ge 5$, the normal approximation is highly appropriate.\n\n2. **Apply Continuity Correction:**\nBecause we are approximating a discrete variable with a continuous one, we expand the boundaries by $0.5$ to cover the full rectangles of $9100$ and $9250$:\n$$P(9100 \\le Y \\le 9250) \\approx P(9099.5 \\le X_{normal} \\le 9250.5)$$\n\n3. **Standardize to Z-scores:**\n$$Z_1 = \\frac{9099.5 - 9180}{37.108} = \\frac{-80.5}{37.108} \\approx -2.169 \\approx -2.17$$\n$$Z_2 = \\frac{9250.5 - 9180}{37.108} = \\frac{70.5}{37.108} \\approx 1.8998 \\approx 1.90$$\n\n4. **Evaluate using the Standard Normal CDF $\\Phi$:**\n$$P(-2.17 \\le Z \\le 1.90) = \\Phi(1.90) - \\Phi(-2.17)$$\nUsing symmetry $\\Phi(-z) = 1 - \\Phi(z)$:\n$$P(-2.17 \\le Z \\le 1.90) = \\Phi(1.90) - (1 - \\Phi(2.17))$$\n\nFrom standard normal distribution tables:\n- $\\Phi(1.90) \\approx 0.9713$\n- $\\Phi(2.17) \\approx 0.9850$\n\nCombine the values:\n$$P(9100 \\le Y \\le 9250) \\approx 0.9713 - (1 - 0.9850) = 0.9713 - 0.0150 = 0.9563 \\quad (95.63\\%)$$',
        proofHe: 'מכיוון ש-$n = 10800$ הוא גדול מאוד, חישוב ישיר של סכום בינומי הוא בלתי אפשרי ידנית. נשתמש בקירוב הנורמלי לבינומי.\n\n1. **נחשב את התוחלת והשונות של המשתנה הבינומי $Y$:**\n$$\\mu = \\mathbb{E}[Y] = np = 10800 \\times 0.85 = 9180$$\n$$\\sigma^2 = \\text{Var}(Y) = np(1-p) = 10800 \\times 0.85 \\times 0.15 = 1377$$\n$$\\sigma = \\sqrt{1377} \\approx 37.108$$\n\nמכיוון ש-$np = 9180 \\ge 5$ ו-$n(1-p) = 1620 \\ge 5$, הקירוב הנורמלי מוצדק לחלוטין.\n\n2. **נחיל תיקון רציפות:**\nמאחר שאנו מקרבים משתנה בדיד באמצעות משתנה רציף, נרחיב את גבולות הקטע ב-$0.5$ כדי לכלול את מלוא ה"מלבנים" של הערכים $9100$ ו-$9250$:\n$$P(9100 \\le Y \\le 9250) \\approx P(9099.5 \\le X_{normal} \\le 9250.5)$$\n\n3. **טרנספורמציה למשתני Z סטנדרטיים:**\n$$Z_1 = \\frac{9099.5 - 9180}{37.108} = \\frac{-80.5}{37.108} \\approx -2.169 \\approx -2.17$$\n$$Z_2 = \\frac{9250.5 - 9180}{37.108} = \\frac{70.5}{37.108} \\approx 1.8998 \\approx 1.90$$\n\n4. **חישוב ההסתברות באמצעות פונקציית התפלגות נורמלית סטנדרטית מצטברת $\\Phi$:**\n$$P(-2.17 \\le Z \\le 1.90) = \\Phi(1.90) - \\Phi(-2.17)$$\nנשתמש בתכונת הסימטריות $\\Phi(-z) = 1 - \\Phi(z)$:\n$$P(-2.17 \\le Z \\le 1.90) = \\Phi(1.90) - (1 - \\Phi(2.17))$$\n\nמתוך טבלאות ההתפלגות הנורמלית הסטנדרטית:\n- $\\Phi(1.90) \\approx 0.9713$\n- $\\Phi(2.17) \\approx 0.9850$\n\nנשלב את הערכים:\n$$P(9100 \\le Y \\le 9250) \\approx 0.9713 - (1 - 0.9850) = 0.9713 - 0.0150 = 0.9563 \\quad (95.63\\%)$$',
        keyTakeawayHe: 'בקירוב נורמלי לבינומי, הוספת והחסרת $0.5$ (תיקון רציפות) היא קריטית לדיוק הקירוב כאשר מדובר במרווח סופי.'
      },
      {
        id: 'prac-prob-3-4',
        title: 'Practice 4: Memoryless Property of the Geometric Distribution',
        titleHe: 'תרגול 4: הוכחת תכונת חוסר הזיכרון בהתפלגות הגיאומטרית',
        content: 'Prove that for a geometric random variable $X \\sim \\text{Geom}(p)$ representing the number of trials until the first success, the **Memoryless Property** holds:\n$$P(X > s + t \\mid X > s) = P(X > t), \\quad \\forall s, t \\in \\{0, 1, 2, \\dots\\}$$',
        contentHe: 'הוכיחו כי עבור משתנה מקרי גיאומטרי $X \\sim \\text{Geom}(p)$ המייצג את מספר הניסויים עד להצלחה הראשונה, מתקיימת **תכונת חוסר הזיכרון**:\n$$P(X > s + t \\mid X > s) = P(X > t), \\quad \\forall s, t \\in \\{0, 1, 2, \\dots\\}$$',
        isPractice: true,
        proof: 'We establish the proof algebraically:\n\n1. **Determine the tail probability $P(X > k)$:**\nThe event $X > k$ occurs if and only if the first $k$ independent Bernoulli trials are all failures. Since the probability of failure on any trial is $1-p$, we have:\n$$P(X > k) = (1 - p)^k$$\n\n2. **Apply the conditional probability formula:**\n$$P(X > s + t \\mid X > s) = \\frac{P(\\{X > s + t\\} \\cap \\{X > s\\})}{P(X > s)}$$\n\n3. **Analyze the intersection event:**\nSince $t \\ge 0$, any outcome where $X$ is strictly greater than $s+t$ is automatically greater than $s$. Thus, the intersection of these two events is simply the smaller event:\n$$\\{X > s + t\\} \\cap \\{X > s\\} = \\{X > s + t\\}$$\n\n4. **Substitute the tail probabilities:**\n$$P(X > s + t \\mid X > s) = \\frac{P(X > s + t)}{P(X > s)} = \\frac{(1-p)^{s+t}}{(1-p)^s}$$\nUsing the laws of exponents:\n$$\\frac{(1-p)^{s+t}}{(1-p)^s} = (1-p)^t$$\n\n5. **Identify the final term:**\nSince $(1-p)^t$ is precisely the tail probability $P(X > t)$, we have:\n$$P(X > s + t \\mid X > s) = P(X > t)$$\nThis completes the proof.',
        proofHe: 'נוכיח את הטענה בצורה אלגברית קפדנית:\n\n1. **נמצא את הסתברות הזנב $P(X > k)$:**\nהמאורע $X > k$ מתרחש אם ורק אם $k$ הניסויים הראשונים נכשלו. כיוון שההסתברות לכישלון בניסוי בודד היא $1-p$, והניסויים בלתי תלויים, נקבל:\n$$P(X > k) = (1 - p)^k$$\n\n2. **נחיל את הגדרת ההסתברות המותנית:**\n$$P(X > s + t \\mid X > s) = \\frac{P(\\{X > s + t\\} \\cap \\{X > s\\})}{P(X > s)}$$\n\n3. **ננתח את מאורע החיתוך:**\nמאחר ש-$t \\ge 0$, כל תוצאה שמקיימת $X > s+t$ בהכרח מקיימת גם $X > s$. לכן מאורע החיתוך של שני המאורעות הוא פשוט המאורע המחמיר יותר:\n$$\\{X > s + t\\} \\cap \\{X > s\\} = \\{X > s + t\\}$$\n\n4. **נציב את הסתברויות הזנב:**\n$$P(X > s + t \\mid X > s) = \\frac{P(X > s + t)}{P(X > s)} = \\frac{(1-p)^{s+t}}{(1-p)^s}$$\nלפי חוקי חזקות:\n$$\\frac{(1-p)^{s+t}}{(1-p)^s} = (1-p)^t$$\n\n5. **זיהוי האיבר הסופי:**\nמכיוון ש-$(1-p)^t$ הוא בדיוק הסתברות הזנב לקבל יותר מ-$t$ ניסיונות, כלומר $P(X > t)$, קיבלנו:\n$$P(X > s + t \\mid X > s) = P(X > t)$$\nובזאת הושלמה ההוכחה.',
        keyTakeawayHe: 'חוסר זיכרון בדיד מתקיים אך ורק בהתפלגות הגיאומטרית, והוא מראה כי הסיכוי להצלחה בניסיונות הבאים אינו תלוי במספר הכישלונות שנצברו בעבר.'
      },
      {
        id: 'prac-prob-3-5',
        title: 'Practice 5: Urn Sampling Comparison — Hypergeometric vs Binomial',
        titleHe: 'תרגול 5: השוואת מודלים של דגימה מכד - היפרגיאומטרי מול בינומי',
        content: 'An urn contains $100$ chips, of which $30$ are red and $70$ are blue. A sample of size $n = 5$ is drawn. Compare the exact probability of drawing exactly $2$ red chips under two protocols:\n1. **Protocol A**: Drawn without replacement.\n2. **Protocol B**: Drawn with replacement.',
        contentHe: 'כד מכיל $100$ כדורים, מתוכם $30$ אדומים ו-$70$ כחולים. נדגמים מהכד $n = 5$ כדורים. השוו את ההסתברות המדויקת לקבל בדיוק $2$ כדורים אדומים תחת שני פרוטוקולים שונים:\n1. **פרוטוקול א\'**: דגימה ללא החזרה.\n2. **פרוטוקול ב\'**: דגימה עם החזרה.',
        isPractice: true,
        proof: 'We analyze both protocols using their corresponding distributions:\n\n1. **Protocol A: Sampling Without Replacement (Hypergeometric Model)**\nLet $Y \\sim \\text{Hyper}(N=100, D=30, n=5)$ represent the number of red chips drawn.\nUsing the Hypergeometric PMF:\n$$P(Y = 2) = \\frac{\\binom{30}{2} \\binom{70}{3}}{\\binom{100}{5}}$$\n\nCompute the binomial coefficients:\n$$\\binom{30}{2} = \\frac{30 \\times 29}{2} = 435$$\n$$\\binom{70}{3} = \\frac{70 \\times 69 \\times 68}{6} = 54740$$\n$$\\binom{100}{5} = \\frac{100 \\times 99 \\times 98 \\times 97 \\times 96}{120} = 75287520$$\n\nCompute the final probability:\n$$P(Y = 2) = \\frac{435 \\times 54740}{75287520} = \\frac{23811900}{75287520} \\approx 0.3163 \\quad (31.63\\%)$$\n\n2. **Protocol B: Sampling With Replacement (Binomial Model)**\nSince we replace each chip, the probability of success remains constant at $p = \\frac{30}{100} = 0.3$ for all 5 independent draws.\nLet $X \\sim \\text{Bin}(5, 0.3)$.\nUsing the Binomial PMF:\n$$P(X = 2) = \\binom{5}{2} p^2 (1-p)^3 = 10 \\times (0.3)^2 \\times (0.7)^3$$\n$$P(X = 2) = 10 \\times 0.09 \\times 0.343 = 0.3087 \\quad (30.87\\%)$$\n\n3. **Comparison Discussion:**\n- **Protocol A (Without Replacement)**: $P(Y = 2) \\approx 31.63\\%$\n- **Protocol B (With Replacement)**: $P(X = 2) \\approx 30.87\\%$\n\nBecause the population size $N=100$ is large relative to the sample size $n=5$, the effect of removing chips is small (the success probability changes very little between draws). Thus, the binomial distribution serves as a highly accurate and simpler approximation for hypergeometric sampling when $N \\ge 20n$.',
        proofHe: 'ננתח את שני הפרוטוקולים באמצעות ההתפלגויות המתאימות להם:\n\n1. **פרוטוקול א\': דגימה ללא החזרה (מודל היפרגיאומטרי)**\nיהי $Y \\sim \\text{Hyper}(N=100, D=30, n=5)$ משתנה מקרי המייצג את מספר הכדורים האדומים שנדגמו.\nלפי פונקציית ההסתברות ההיפרגיאומטרית:\n$$P(Y = 2) = \\frac{\\binom{30}{2} \\binom{70}{3}}{\\binom{100}{5}}$$\n\nנחשב את המקדמים הבינומיים:\n$$\\binom{30}{2} = \\frac{30 \\times 29}{2} = 435$$\n$$\\binom{70}{3} = \\frac{70 \\times 69 \\times 68}{6} = 54740$$\n$$\\binom{100}{5} = \\frac{100 \\times 99 \\times 98 \\times 97 \\times 96}{120} = 75287520$$\n\nנחשב את ההסתברות הסופית:\n$$P(Y = 2) = \\frac{435 \\times 54740}{75287520} = \\frac{23811900}{75287520} \\approx 0.3163 \\quad (31.63\\%)$$\n\n2. **פרוטוקול ב\': דגימה עם החזרה (מודל בינומי)**\nמכיוון שאנו מחזירים כל כדור, ההסתברות לקבלת כדור אדום נשארת קבועה בכל 5 הדגימות הבלתי תלויות: $p = \\frac{30}{100} = 0.3$.\nיהי $X \\sim \\text{Bin}(5, 0.3)$.\nלפי פונקציית ההסתברות הבינומית:\n$$P(X = 2) = \\binom{5}{2} p^2 (1-p)^3 = 10 \\times (0.3)^2 \\times (0.7)^3$$\n$$P(X = 2) = 10 \\times 0.09 \\times 0.343 = 0.3087 \\quad (30.87\\%)$$\n\n3. **דיון והשוואה:**\n- **פרוטוקול א\' (ללא החזרה)**: $P(Y = 2) \\approx 31.63\\%$\n- **פרוטוקול ב\' (עם החזרה)**: $P(X = 2) \\approx 30.87\\%$\n\nמכיוון שגודל האוכלוסייה $N=100$ הוא גדול יחסית לגודל המדגם $n=5$, השפעת הוצאת הכדורים ללא החזרה היא קטנה (ההסתברות להצלחה משתנה במעט מדגימה לדגימה). לכן, ההתפלגות הבינומית מהווה קירוב מצוין ופשוט יותר לדגימה היפרגיאומטרית כאשר מתקיים התנאי הכללי $N \\ge 20n$.',
        keyTakeawayHe: 'דגימה ללא החזרה מיוצגת על ידי ההתפלגות ההיפרגיאומטרית, בעוד שדגימה עם החזרה מיוצגת על ידי ההתפלגות הבינומית. כאשר גודל האוכלוסייה גדול מאוד ביחס למדגם, שתי ההתפלגויות שואפות להתלכד.'
      }
    ],
    quiz: [
      {
        question: 'A Poisson distribution X ~ Poi(lambda) has a variance equal to 4. What is the exact value of P(X = 0)?',
        questionHe: 'עבור משתנה מקרי בעל התפלגות פואסון X ~ Poi(lambda), ידוע כי השונות היא 4. מהי ההסתברות המדויקת לקבל P(X = 0)?',
        options: [
          'e^{-2}',
          'e^{-4}',
          '1 - e^{-4}',
          '4e^{-4}'
        ],
        optionsHe: [
          'e^{-2}',
          'e^{-4}',
          '1 - e^{-4}',
          '4e^{-4}'
        ],
        correctAnswerIndex: 1,
        explanation: 'For a Poisson distribution, both the expectation and the variance are equal to lambda. Thus, Var(X) = 4 implies lambda = 4. The Poisson PMF for k = 0 is P(X = 0) = (e^{-lambda} * lambda^0) / 0! = e^{-lambda} = e^{-4}.',
        explanationHe: 'עבור משתנה פואסוני, התוחלת והשונות שוות שתיהן לפרמטר lambda. לכן, שונות ששווה ל-4 פירושה lambda = 4. פונקציית ההסתברות של פואסון עבור k = 0 היא P(X = 0) = (e^{-lambda} * lambda^0) / 0! = e^{-lambda} = e^{-4}.'
      },
      {
        question: 'An independent sequence of Bernoulli trials with success probability p = 0.2 is performed. What is the expected number of trials needed to achieve exactly 3 successes?',
        questionHe: 'מבצעים סדרה של ניסויי ברנולי בלתי תלויים עם הסתברות הצלחה p = 0.2. מהו מספר הניסויים הממוצע (התוחלת) הנדרש כדי להשיג בדיוק 3 הצלחות?',
        options: [
          '6',
          '15',
          '3',
          '30'
        ],
        optionsHe: [
          '6',
          '15',
          '3',
          '30'
        ],
        correctAnswerIndex: 1,
        explanation: 'Let X_1, X_2, X_3 be the number of trials to get the 1st, 2nd, and 3rd successes respectively. Each X_i is independent and Geom(p) distributed. By linearity of expectation, the expected total trials is E[X_1 + X_2 + X_3] = E[X_1] + E[X_2] + E[X_3] = 3 * (1/p) = 3 * (1/0.2) = 3 * 5 = 15.',
        explanationHe: 'נגדיר X_1, X_2, X_3 ככל אחד ממספר הניסויים הנדרש כדי להגיע להצלחה ה-1, ה-2 וה-3 בהתאמה. כל אחד מ-X_i מתפלג גיאומטרית Geom(p). לפי ליניאריות התוחלת, תוחלת סכום הניסויים הכולל היא E[X_1 + X_2 + X_3] = E[X_1] + E[X_2] + E[X_3] = 3 * (1/p) = 3 * (1/0.2) = 3 * 5 = 15.'
      }
    ]
  },
  {
    id: 'prob-4',
    courseId: 'prob',
    chapterNumber: '4',
    title: 'Chapter 4: Joint Distributions & Probability Inequalities',
    titleHe: 'פרק 4: התפלגויות משותפות ואי-שוויונות הסתברותיים',
    intro: 'In real-world applications, we rarely observe a single random variable in isolation. Instead, multiple variables are analyzed simultaneously (such as height and weight, noise in multi-channel systems, or multi-sensor networks). This chapter introduces jointly distributed random variables, marginal distributions, covariance, independence, and the powerful concentration inequalities—Markov, Chebyshev, and Hoeffding—which allow us to bound probabilities and estimate required sample sizes without knowing the exact underlying distribution.',
    introHe: 'ביישומים מעשיים, אנו נתקלים לעיתים רחוקות במשתנה מקרי בודד ומבודד. במקום זאת, מספר משתנים מנותחים בו-זמנית (כמו גובה ומשקל, רעש במערכות רב-ערוציות, או קריאות מחיישנים שונים ברשת). פרק זה מציג משתנים מקריים בעלי התפלגות משותפת, התפלגויות שוליות, שונות משותפת (Covariance), אי-תלות, ואת אי-השוויונות המרוכזים החזקים—מרקוב, צ״בישב והופדינג—המאפשרים לנו לחסום הסתברויות ולחשב גודל מדגם נדרש מבלי לדעת את ההתפלגות המדויקת של המשתנים.',
    motivation: 'Whether predicting stock portfolios, verifying network communication packets, or designing clinical trials, we must understand how variables interact and bound their tail probabilities. For example, Hoeffding\'s inequality tells us exactly how many user survey samples we need to guarantee that our estimated customer satisfaction is within 10% of the true value with 95% confidence.',
    motivationHe: 'בין אם אנו מנבאים ביצועים של תיקי השקעות, מאמתים הגעה של חבילות מידע ברשת תקשורת, או מתכננים ניסויים קליניים, עלינו להבין כיצד משתנים משפיעים זה על זה ולדעת לחסום את הסתברויות הזנב שלהם. לדוגמה, אי-שוויון הופדינג מספק כלי מעשי לקביעה מדויקת של גודל המדגם הנדרש בסקר לקוחות כדי להבטיח ששיעור שביעות הרצון המוערך יהיה בטווח של 10% מהערך האמיתי בביטחון של 95%.',
    definitions: [
      {
        id: 'def-prob-4-1',
        title: 'Joint Distributions & Marginal Distributions',
        titleHe: 'התפלגויות משותפות והתפלגויות שוליות',
        content: 'Let $X$ and $Y$ be two random variables defined on the same sample space.\n\n* **Joint Cumulative Distribution Function (CDF)**: For any $x, y \\in \\mathbb{R}$:\n$$F_{X,Y}(x, y) = P(X \\le x, Y \\le y)$$\n\n* **Joint Probability Density Function (PDF)** (for continuous variables): A non-negative function $f_{X,Y}(x, y)$ such that:\n$$P((X,Y) \\in A) = \\iint_A f_{X,Y}(x, y) dx dy$$\nwith normalization: $\\int_{-\\infty}^{\\infty} \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y) dx dy = 1$.\n\n* **Marginal Distributions**:\n  * Continuous:\n  $$f_X(x) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y) dy, \\quad f_Y(y) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y) dx$$\n  * Discrete Marginal PMFs:\n  $$p_X(x) = \\sum_{y} p_{X,Y}(x, y), \\quad p_Y(y) = \\sum_{x} p_{X,Y}(x, y)$$',
        contentHe: 'יהיו $X$ ו-$Y$ שני משתנים מקריים המוגדרים על אותו מרחב מדגם.\n\n* **פונקציית התפלגות מצטברת משותפת (Joint CDF)**: לכל $x, y \\in \\mathbb{R}$:\n$$F_{X,Y}(x, y) = P(X \\le x, Y \\le y)$$\n\n* **פונקציית צפיפות הסתברות משותפת (Joint PDF)** (עבור משתנים רציפים): פונקציה אי-שלילית $f_{X,Y}(x, y)$ המקיימת:\n$$P((X,Y) \\in A) = \\iint_A f_{X,Y}(x, y) dx dy$$\nעם תנאי הנרמול: $\\int_{-\\infty}^{\\infty} \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y) dx dy = 1$.\n\n* **התפלגויות שוליות (Marginal Distributions)**:\n  * במקרה הרציף:\n  $$f_X(x) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y) dy, \\quad f_Y(y) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y) dx$$\n  * במקרה הבדיד (פונקציות הסתברות שוליות):\n  $$p_X(x) = \\sum_{y} p_{X,Y}(x, y), \\quad p_Y(y) = \\sum_{x} p_{X,Y}(x, y)$$',
        simplifiedLogic: 'Think of the joint PDF as a 3D landscape of probability height spread over the $(x, y)$ floor. If you want to find the probability of a region, you calculate the volume under this landscape over that region. The marginal density is like taking a spotlight and projecting the 3D landscape onto the X-axis or Y-axis, integrating out (collapsing) the other dimension.',
        simplifiedLogicHe: 'תארו לעצמכם את ה-PDF המשותף כנוף תלת-ממדי של גובה הסתברות הפרוס על פני רצפת הקואורדינטות $(x, y)$. אם אנו רוצים למצוא את ההסתברות של אזור מסוים, נחשב את הנפח שמתחת לנוף זה מעל אותו אזור. הצפיפות השולית היא כמו לקיחת פנס והקרנת הנוף התלת-ממדי על ציר ה-X או ציר ה-Y, תוך ביצוע אינטגרציה (קריסה) של הממד השני.',
        toolboxConnection: 'Joint distributions are used in digital image processing (where pixels have joint coordinates and intensities), and in recommendation engines analyzing joint user preferences.',
        toolboxConnectionHe: 'התפלגויות משותפות משמשות בעיבוד תמונה דיגיטלי (שם לפיקסלים יש קואורדינטות ועוצמות משותפות), ובמנועי המלצות המנתחים העדפות משותפות של משתמשים.',
        keyTakeaway: 'Joint functions describe multi-variable behavior, and marginals are obtained by integrating or summing out the other variables.',
        keyTakeawayHe: 'פונקציות משותפות מתארות התנהגות רב-משתנית, והתפלגויות שוליות מתקבלות על ידי אינטגרציה או סכימה של שאר המשתנים.'
      },
      {
        id: 'def-prob-4-2',
        title: 'Independence of Random Variables',
        titleHe: 'אי-תלות בין משתנים מקריים',
        content: 'Two random variables $X$ and $Y$ are **independent** if and only if their joint CDF factors into the product of their marginal CDFs:\n$$F_{X,Y}(x, y) = F_X(x) \\cdot F_Y(y), \\quad \\forall x, y \\in \\mathbb{R}$$\n\nEquivalently:\n* **Continuous**:\n$$f_{X,Y}(x, y) = f_X(x) \\cdot f_Y(y), \\quad \\forall x, y \\in \\mathbb{R}$$\n* **Discrete**:\n$$P(X = x, Y = y) = P(X = x) \\cdot P(Y = y), \\quad \\forall x, y$$\n\nIf $X$ and $Y$ are independent, then for any functions $g(x)$ and $h(y)$:\n$$\\mathbb{E}[g(X)h(Y)] = \\mathbb{E}[g(X)] \\cdot \\mathbb{E}[h(Y)]$$\nParticularly: $\\mathbb{E}[XY] = \\mathbb{E}[X] \\cdot \\mathbb{E}[Y]$.',
        contentHe: 'שני משתנים מקריים $X$ ו-$Y$ הם **בלתי תלויים** אם ורק אם פונקציית ההתפלגות המשותפת שלהם ניתנת לפירוק כמכפלת פונקציות ההתפלגות השוליות שלהם:\n$$F_{X,Y}(x, y) = F_X(x) \\cdot F_Y(y), \\quad \\forall x, y \\in \\mathbb{R}$$\n\nבאופן שקול:\n* **במקרה הרציף**:\n$$f_{X,Y}(x, y) = f_X(x) \\cdot f_Y(y), \\quad \\forall x, y \\in \\mathbb{R}$$\n* **במקרה הבדיד**:\n$$P(X = x, Y = y) = P(X = x) \\cdot P(Y = y), \\quad \\forall x, y$$\n\nאם $X$ ו-$Y$ בלתי תלויים, אז לכל שתי פונקציות $g(x)$ ו-$h(y)$ מתקיים:\n$$\\mathbb{E}[g(X)h(Y)] = \\mathbb{E}[g(X)] \\cdot \\mathbb{E}[h(Y)]$$\nובפרט מתקיים: $\\mathbb{E}[XY] = \\mathbb{E}[X] \\cdot \\mathbb{E}[Y]$.',
        simplifiedLogic: 'Independence means knowing the value of $X$ gives you absolutely zero information about the likelihood of $Y$. Mathematically, their joint density is just the multiplication of their individual densities, and their product expectation simplifies to the product of their expectations.',
        simplifiedLogicHe: 'אי-תלות פירושה שידיעת הערך של $X$ אינה מספקת שום מידע על ההסתברות של $Y$. מבחינה מתמטית, הצפיפות המשותפת שלהם היא פשוט מכפלת הצפיפויות האינדיבידואליות שלהם, ותוחלת המכפלה שלהם מתפשטת למכפלת התוחלות שלהם.',
        toolboxConnection: 'Assuming independence simplifies system architecture, allowing us to multiply individual success rates (e.g. server uptime) to find joint system reliability.',
        toolboxConnectionHe: 'הנחת אי-תלות מפשטת מאוד ארכיטקטורה של מערכות, ומאפשרת לנו להכפיל שיעורי הצלחה אינדיבידואליים (כמו זמינות שרתים) כדי למצוא את אמינות המערכת המשולבת.',
        keyTakeaway: 'Independent variables have joint densities that factor, and their expectation of products factors as well.',
        keyTakeawayHe: 'למשתנים בלתי תלויים יש צפיפות משותפת המתפרקת למכפלה, ותוחלת המכפלה שלהם מתפרקת למכפלת התוחלות.'
      },
      {
        id: 'def-prob-4-3',
        title: 'Covariance & Correlation',
        titleHe: 'שונות משותפת ומתאם',
        content: 'The **Covariance** between $X$ and $Y$, denoted by $\\text{Cov}(X, Y)$ or $\\sigma_{XY}$, measures the linear relationship between them:\n$$\\text{Cov}(X, Y) = \\mathbb{E}\\left[(X - \\mathbb{E}[X])(Y - \\mathbb{E}[Y])\\right] = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y]$$\n\n* **Core Covariance Properties**:\n  1. Symmetry: $\\text{Cov}(X, Y) = \\text{Cov}(Y, X)$\n  2. Self-Covariance: $\\text{Cov}(X, X) = \\text{Var}(X)$\n  3. Bilinearity: $\\text{Cov}(aX + b, cY + d) = ac \\text{Cov}(X, Y)$\n  4. Sum of Variables: $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y) + 2\\text{Cov}(X, Y)$\n  5. General Sums: $\\text{Var}\\left(\\sum_{i=1}^n X_i\\right) = \\sum_{i=1}^n \\text{Var}(X_i) + 2 \\sum_{i < j} \\text{Cov}(X_i, X_j)$\n\n* **Independence & Covariance**: If $X$ and $Y$ are independent, then $\\text{Cov}(X, Y) = 0$. The converse is **not** generally true.\n\n* **Pearson Correlation Coefficient**:\n$$\\rho_{X,Y} = \\frac{\\text{Cov}(X, Y)}{\\sqrt{\\text{Var}(X)\\text{Var}(Y)}}$$\nwhere $-1 \\le \\rho_{X,Y} \\le 1$.',
        contentHe: 'ה**שונות המשותפת (Covariance)** בין $X$ ל-$Y$, המסומנת ב-$\\text{Cov}(X, Y)$ או ב-$\\sigma_{XY}$, מודדת את עוצמת הקשר הליניארי ביניהם:\n$$\\text{Cov}(X, Y) = \\mathbb{E}\\left[(X - \\mathbb{E}[X])(Y - \\mathbb{E}[Y])\\right] = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y]$$\n\n* **תכונות יסוד של השונות המשותפת**:\n  1. סימטריות: $\\text{Cov}(X, Y) = \\text{Cov}(Y, X)$\n  2. שונות עצמית: $\\text{Cov}(X, X) = \\text{Var}(X)$\n  3. דו-ליניאריות: $\\text{Cov}(aX + b, cY + d) = ac \\text{Cov}(X, Y)$\n  4. שונות של סכום: $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y) + 2\\text{Cov}(X, Y)$\n  5. שונות של סכום כללי: $\\text{Var}\\left(\\sum_{i=1}^n X_i\\right) = \\sum_{i=1}^n \\text{Var}(X_i) + 2 \\sum_{i < j} \\text{Cov}(X_i, X_j)$\n\n* **אי-תלות ושונות משותפת**: אם $X$ ו-$Y$ בלתי תלויים, אז $\\text{Cov}(X, Y) = 0$. הכיוון ההפוך **אינו** נכון בהכרח.\n\n* **מקדם המתאם של פירסון (Correlation)**:\n$$\\rho_{X,Y} = \\frac{\\text{Cov}(X, Y)}{\\sqrt{\\text{Var}(X)\\text{Var}(Y)}}$$\nכאשר $-1 \\le \\rho_{X,Y} \\le 1$.',
        simplifiedLogic: 'Covariance tells you if two variables move together. If they both tend to be above their means at the same time, covariance is positive. If one is high when the other is low, it is negative. Correlation is just normalized covariance, giving a unitless score between -1 and 1. If two variables are independent, they have zero covariance, but having zero covariance doesn\'t mean they are independent (they could have a non-linear relationship!).',
        simplifiedLogicHe: 'שונות משותפת מראה האם שני משתנים נעים יחד. אם שניהם נוטים להיות מעל הממוצעים שלהם בו-זמנית, השונות המשותפת חיובית. אם אחד גבוה כשהשני נמוך, היא שלילית. מתאם הוא פשוט שונות משותפת מנורמלת, הנותנת ערך חסר ממדים בין 1- ל-1. אם שני משתנים בלתי תלויים, השונות המשותפת שלהם היא אפס, אך שונות משותפת אפס אינה מעידה בהכרח על אי-תלות (ייתכן קשר לא-ליניארי חזק!).',
        toolboxConnection: 'Portfolio diversification in finance relies on low or negative covariance between assets to reduce overall portfolio variance. In machine learning, correlation matrices help identify redundant features.',
        toolboxConnectionHe: 'פיזור תיקי השקעות בפיננסים מסתמך על שונות משותפת נמוכה או שלילית בין נכסים כדי להקטין את השונות הכוללת של התיק. בלמידת מכונה, מטריצות מתאם מסייעות בזיהוי תכונות יתירות (collinearity).',
        keyTakeaway: 'Covariance measures linear association, independence implies zero covariance (but not vice versa), and variance of a sum includes a covariance term.',
        keyTakeawayHe: 'שונות משותפת מודדת קשר ליניארי, אי-תלות גוררת שונות משותפת אפס (אך לא להפך), ושונות של סכום כוללת איבר של שונות משותפת.'
      },
      {
        id: 'def-prob-4-4',
        title: 'Markov & Chebyshev Inequalities',
        titleHe: 'אי-שוויונות מרקוב וצ\'בישב',
        content: '* **Markov\'s Inequality**: Let $X$ be a **non-negative** random variable ($X \\ge 0$). For any constant $c > 0$:\n$$P(X \\ge c) \\le \\frac{\\mathbb{E}[X]}{c}$$\n\n* **Chebyshev\'s Inequality**: Let $X$ be any random variable with mean $\\mu = \\mathbb{E}[X]$ and variance $\\sigma^2 = \\text{Var}(X)$. For any constant $c > 0$:\n$$P(|X - \\mu| \\ge c) \\le \\frac{\\text{Var}(X)}{c^2}$$\n\nAlternatively, setting $c = k\\sigma$:\n$$P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}$$',
        contentHe: '* **אי-שוויון מרקוב**: יהי $X$ משתנה מקרי **אי-שלילי** ($X \\ge 0$). לכל קבוע $c > 0$:\n$$P(X \\ge c) \\le \\frac{\\mathbb{E}[X]}{c}$$\n\n* **אי-שוויון צ\'בישב**: יהי $X$ משתנה מקרי כלשהו בעל תוחלת $\\mu = \\mathbb{E}[X]$ ושונות $\\sigma^2 = \\text{Var}(X)$. לכל קבוע $c > 0$:\n$$P(|X - \\mu| \\ge c) \\le \\frac{\\text{Var}(X)}{c^2}$$\n\nבצורה אלטרנטיבית, על ידי בחירת $c = k\\sigma$:\n$$P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}$$',
        simplifiedLogic: 'Markov\'s inequality is incredibly general: if you only know the average of a positive variable, you can place a ceiling on how often it can exceed any value. For instance, if the average salary is $50,000, at most 10% of people can earn $500,000 or more. Chebyshev\'s inequality takes this a step further: by knowing both the average and the spread (variance), you can bound how far the variable can stray from its average. For example, at most 11.1% of outcomes can lie more than 3 standard deviations away from the mean, regardless of the distribution shape!',
        simplifiedLogicHe: 'אי-שוויון מרקוב הוא כללי ביותר: אם אנו יודעים רק את הממוצע של משתנה חיובי, אנו יכולים לקבוע חסם עליון להסתברות שהוא יעבור ערך מסוים. לדוגמה, אם השכר הממוצע הוא 10,000 ש"ח, לכל היותר 10% מהאנשים יכולים להרוויח 100,000 ש"ח ומעלה. אי-שוויון צ\'בישב לוקח זאת צעד קדימה: על ידי ידיעת הממוצע והפיזור (השונות), ניתן לחסום כמה המשתנה יכול להתרחק מהממוצע שלו. לדוגמה, לכל היותר 11.1% מהתוצאות יכולות להיות רחוקות יותר מ-3 סטיות תקן מהממוצע, ללא קשר לצורת ההתפלגות!',
        toolboxConnection: 'These inequalities are vital in computer networking to bound packet delay rates, and in randomized algorithms to guarantee run-times.',
        toolboxConnectionHe: 'אי-שוויונות אלו חיוניים ברשתות תקשורת לחסימת שיעורי עיכוב של חבילות מידע, ובאלגוריתמים אקראיים להבטחת זמני ריצה מקסימליים.',
        keyTakeaway: 'Markov bounds non-negative tails using the expectation; Chebyshev bounds deviations from the mean using the variance.',
        keyTakeawayHe: 'מרקוב חוסם את זנב ההתפלגות של משתנה אי-שלילי באמצעות התוחלת; צ\'בישב חוסם סטיות מהממוצע באמצעות השונות.',
        proof: 'Let $Y = (X - \\mu)^2$. Since $Y$ is a squared real term, it is non-negative everywhere ($Y \\ge 0$).\n\nApplying Markov\'s Inequality to the variable $Y$ with threshold $c^2 > 0$:\n$$P(Y \\ge c^2) \\le \\frac{\\mathbb{E}[Y]}{c^2}$$\n\nNotice that the event $Y \\ge c^2$ is algebraically equivalent to:\n$$(X - \\mu)^2 \\ge c^2 \\iff |X - \\mu| \\ge c$$\n\nAlso, by definition of variance, the expectation of $Y$ is:\n$$\\mathbb{E}[Y] = \\mathbb{E}[(X - \\mu)^2] = \\text{Var}(X)$$\n\nSubstituting these equivalences back into Markov\'s inequality yields:\n$$P(|X - \\mu| \\ge c) \\le \\frac{\\text{Var}(X)}{c^2}$$\n\nThis completes the mathematical proof.',
        proofHe: 'נגדיר $Y = (X - \\mu)^2$. כיוון ש-$Y$ הוא איבר ריבועי ממשי, הוא אי-שלילי בכל מקום ($Y \\ge 0$).\n\nנחיל את אי-שוויון מרקוב על המשתנה $Y$ עם סף $c^2 > 0$:\n$$P(Y \\ge c^2) \\le \\frac{\\mathbb{E}[Y]}{c^2}$$\n\nנשים לב שהמאורע $Y \\ge c^2$ שקול אלגברית ל:\n$$(X - \\mu)^2 \\ge c^2 \\iff |X - \\mu| \\ge c$$\n\nכמו כן, לפי הגדרת השונות, התוחלת של המשתנה $Y$ היא:\n$$\\mathbb{E}[Y] = \\mathbb{E}[(X - \\mu)^2] = \\text{Var}(X)$$\n\nהצבת השקילויות הללו בחזרה באי-שוויון מרקוב מניבה:\n$$P(|X - \\mu| \\ge c) \\le \\frac{\\text{Var}(X)}{c^2}$$\n\nובזאת הושלמה ההוכחה המתמטית הקפדנית.'
      },
      {
        id: 'def-prob-4-5',
        title: 'Hoeffding\'s Inequality & Sample Size Selection',
        titleHe: 'אי-שוויון הופדינג וקביעת גודל מדגם',
        content: '* **Hoeffding\'s Inequality for Bernoulli Trials**: Let $X_1, X_2, \\dots, X_n$ be independent and identically distributed (i.i.d.) Bernoulli random variables with success parameter $p$, such that $X_i \\sim \\text{Bern}(p)$. Let $\\bar{X}_n = \\frac{1}{n} \\sum_{i=1}^n X_i$ be the sample mean. For any constant $\\epsilon > 0$:\n$$P(|\\bar{X}_n - p| \\ge \\epsilon) \\le 2 e^{-2n\\epsilon^2}$$\n\nThis inequality represents a **concentration bound**, showing that the sample average converges exponentially fast to the true mean as the sample size $n$ increases.\n\n* **Sample Size Determination**: To guarantee that our sample estimate $\\bar{X}_n$ is within a margin of error $\\epsilon$ of the true parameter $p$ with a high confidence level of at least $1 - \\alpha$, we solve:\n$$2 e^{-2n\\epsilon^2} \\le \\alpha \\implies n \\ge \\frac{\\ln(2/\\alpha)}{2\\epsilon^2}$$',
        contentHe: '* **אי-שוויון הופדינג לניסויי ברנולי**: יהיו $X_1, X_2, \\dots, X_n$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה (i.i.d.) המתפלגים ברנולי עם פרמטר הצלחה $p$, כלומר $X_i \\sim \\text{Bern}(p)$. יהי $\\bar{X}_n = \\frac{1}{n} \\sum_{i=1}^n X_i$ ממוצע המדגם. לכל קבוע $\\epsilon > 0$:\n$$P(|\\bar{X}_n - p| \\ge \\epsilon) \\le 2 e^{-2n\\epsilon^2}$$\n\nאי-שוויון זה מייצג **חסם ריכוז (concentration bound)**, המראה כי ממוצע המדגם מתכנס בקצב מעריכי מהיר אל הממוצע האמיתי ככל שגודל המדגם $n$ גדל.\n\n* **קביעת גודל מדגם מינימלי**: כדי להבטיח שאומדן המדגם $\\bar{X}_n$ יהיה בטווח טעות של לכל היותר $\\epsilon$ מהפרמטר האמיתי $p$ ברמת ביטחון של לפחות $1 - \\alpha$, נפתור:\n$$2 e^{-2n\\epsilon^2} \\le \\alpha \\implies n \\ge \\frac{\\ln(2/\\alpha)}{2\\epsilon^2}$$',
        simplifiedLogic: 'Chebyshev\'s inequality bounds deviations using a power-law decay ($1/n$), but Hoeffding\'s inequality shows that when we average many independent bounded variables, the probability of being far from the true mean decays **exponentially** ($e^{-n}$). This exponential decay means we need a much smaller sample size $n$ to guarantee high accuracy and confidence.',
        simplifiedLogicHe: 'אי-שוויון צ\'בישב חוסם סטיות לפי דעיכה פולינומית ($1/n$), אך אי-שוויון הופדינג מראה כי כאשר אנו ממוצעים משתנים חסומים ובלתי תלויים רבים, ההסתברות להתרחק מהממוצע האמיתי דועכת **מעריכית** ($e^{-n}$). דעיכה מהירה זו פירושה שאנו זקוקים לגודל מדגם $n$ קטן בהרבה כדי להבטיח רמות דיוק וביטחון גבוהות.',
        toolboxConnection: 'Hoeffding\'s inequality is the bedrock of PAC (Probably Approximately Correct) learning theory in machine learning, sample size determination in medical trials, and confidence bounds in multi-armed bandit reinforcement learning algorithms.',
        toolboxConnectionHe: 'אי-שוויון הופדינג הוא אבן היסוד של תיאוריית הלמידה PAC (Probably Approximately Correct) בלמידת מכונה, לקביעת גדלי מדגם בניסויים קליניים, ולחישוב חסמי ביטחון באלגוריתמי למידת חיזוק (Multi-armed Bandits).',
        keyTakeaway: 'Hoeffding\'s inequality bounds sample mean deviations exponentially, allowing tight bounds on the required sample size for estimation.',
        keyTakeawayHe: 'אי-שוויון הופדינג חוסם את סטיות ממוצע המדגם באופן מעריכי, ומאפשר לקבל חסמים הדוקים ביותר לגודל המדגם הנדרש לצורך אמידה.'
      },
      {
        id: 'prac-prob-4-1',
        title: 'Practice 1: Joint PDF Normalization & Marginal Integration on a Triangle',
        titleHe: 'תרגול 1: נרמול PDF משותף ואינטגרציה שולית על משולש',
        isPractice: true,
        content: 'A joint continuous random variable $(X, Y)$ has the PDF:\n$$f_{X,Y}(x, y) = \\begin{cases} c \\cdot xy & 0 \\le y \\le x \\le 1 \\ 0 & \\text{otherwise} \\end{cases}$$\n\n1. Calculate the exact normalization constant $c$.\n2. Derive the marginal PDFs $f_X(x)$ and $f_Y(y)$.\n3. Check if $X$ and $Y$ are independent.',
        contentHe: 'משתנה מקרי דו-ממדי רציף $(X, Y)$ הוא בעל פונקציית צפיפות הסתברות משותפת מהצורה:\n$$f_{X,Y}(x, y) = \\begin{cases} c \\cdot xy & 0 \\le y \\le x \\le 1 \\ 0 & \\text{אחרת} \\end{cases}$$\n\n1. חשבו את קבוע הנרמול המדויק $c$.\n2. מצאו את פונקציות הצפיפות השוליות $f_X(x)$ ו-$f_Y(y)$.\n3. קבעו האם $X$ ו-$Y$ הם משתנים מקריים בלתי תלויים.',
        simplifiedLogic: 'Double integration over a triangular domain requires setting the boundaries carefully. Because the support limits depend on each other, the variables cannot be independent.',
        simplifiedLogicHe: 'אינטגרציה כפולה על תחום משולש דורשת הגדרה נכונה של גבולות האינטגרל. כאשר גבולות התמיכה תלויים זה בזה, המשתנים אינם בלתי תלויים.',
        toolboxConnection: 'Calibrating joint continuous models with boundary dependencies is a fundamental step in geographic spatial analysis and multivariate sensor alignment.',
        toolboxConnectionHe: 'כיול מודלים רציפים משותפים בעלי תלות בגבולות הוא שלב בסיסי בניתוחים מרחביים גיאוגרפיים ובסנכרון חיישנים רב-משתניים.',
        keyTakeaway: 'Integrating over non-rectangular domains requires variables limits, and triangular supports inherently imply dependency.',
        keyTakeawayHe: 'אינטגרציה מעל תחומים שאינם מלבניים דורשת גבולות משתנים באינטגרל הפנימי, ותמיכה משולשת גוררת בהכרח תלות בין המשתנים.',
        proof: '**Rigorous Step-by-Step Mathematical Proof:**\n\n**Part 1: Find Constant $c$**\nWe set the double integral over the triangular support to 1:\n$$\\int_0^1 \\int_0^x c \\cdot xy \\, dy \\, dx = 1$$\n\nEvaluate the inner integral with respect to $y$:\n$$\\int_0^x c \\cdot xy \\, dy = c \\cdot x \\left[ \\frac{y^2}{2} \\right]_0^x = \\frac{c}{2} x^3$$\n\nNow evaluate the outer integral with respect to $x$:\n$$\\int_0^1 \\frac{c}{2} x^3 \\, dx = \\frac{c}{2} \\left[ \\frac{x^4}{4} \\right]_0^1 = \\frac{c}{8} = 1 \\implies c = 8$$\n\n**Part 2: Derive Marginal PDFs**\n* For $f_X(x)$, we integrate out $y$ from $0$ to $x$ (the limits of $y$ for a fixed $x$):\n$$f_X(x) = \\int_0^x 8xy \\, dy = 8x \\left[ \\frac{y^2}{2} \\right]_0^x = 4x^3, \\quad 0 \\le x \\le 1$$\n* For $f_Y(y)$, we integrate out $x$ from $y$ to $1$ (the limits of $x$ for a fixed $y$):\n$$f_Y(y) = \\int_y^1 8xy \\, dx = 8y \\left[ \\frac{x^2}{2} \\right]_y^1 = 4y(1 - y^2), \\quad 0 \\le y \\le 1$$\n\n**Part 3: Independence Check**\nWe compare the joint PDF to the product of marginals:\n$$f_{X,Y}(x, y) = 8xy \\ne f_X(x)f_Y(y) = 16x^3 y(1-y^2)$$\nSince the joint PDF does not equal the product of the marginals (and the support region is triangular, coupling the variables), $X$ and $Y$ are mathematically proved to be **dependent**.',
        proofHe: '**פתרון מתמטי מפורט שלב אחר שלב:**\n\n**חלק 1: מציאת הקבוע $c$**\nנשווה את האינטגרל הכפול על פני התמיכה המשולשת ל-1:\n$$\\int_0^1 \\int_0^x c \\cdot xy \\, dy \\, dx = 1$$\n\nנפתור את האינטגרל הפנימי לפי $y$:\n$$\\int_0^x c \\cdot xy \\, dy = c \\cdot x \\left[ \\frac{y^2}{2} \\right]_0^x = \\frac{c}{2} x^3$$\n\nכעת נפתור את האינטגרל החיצוני לפי $x$:\n$$\\int_0^1 \\frac{c}{2} x^3 \\, dx = \\frac{c}{2} \\left[ \\frac{x^4}{4} \\right]_0^1 = \\frac{c}{8} = 1 \\implies c = 8$$\n\n**חלק 2: מציאת פונקציות הצפיפות השוליות**\n* עבור $f_X(x)$, נבצע אינטגרציה לפי $y$ בין $0$ ל-$x$ (גבולות $y$ עבור $x$ קבוע):\n$$f_X(x) = \\int_0^x 8xy \\, dy = 8x \\left[ \\frac{y^2}{2} \\right]_0^x = 4x^3, \\quad 0 \\le x \\le 1$$\n* עבור $f_Y(y)$, נבצע אינטגרציה לפי $x$ בין $y$ ל-$1$ (גבולות $x$ עבור $y$ קבוע):\n$$f_Y(y) = \\int_y^1 8xy \\, dx = 8y \\left[ \\frac{x^2}{2} \\right]_y^1 = 4y(1 - y^2), \\quad 0 \\le y \\le 1$$\n\n**חלק 3: בדיקת אי-תלות**\nנשווה בין הצפיפות המשותפת למכפלת הצפיפויות השוליות:\n$$f_{X,Y}(x, y) = 8xy \\ne f_X(x)f_Y(y) = 16x^3 y(1-y^2)$$\nמכיוון שהצפיפות המשותפת אינה שווה למכפלת השוליות (וכן תמיכת הפונקציה היא משולש המצמד בין ערכי המשתנים), הוכח מתמטית כי $X$ ו-$Y$ הם משתנים **תלויים**.'
      },
      {
        id: 'prac-prob-4-2',
        title: 'Practice 2: Probability of Joint Region',
        titleHe: 'תרגול 2: חישוב הסתברות של תת-אזור בתחום משותף',
        isPractice: true,
        content: 'Using the joint continuous PDF $f_{X,Y}(x, y) = 8xy$ for $0 \\le y \\le x \\le 1$, calculate the exact probability that $X > 0.9$ and $Y < 0.1$:\n$$P(X > 0.9, Y < 0.1)$$',
        contentHe: 'בהסתמך על פונקציית הצפיפות המשותפת $f_{X,Y}(x, y) = 8xy$ בתחום $0 \\le y \\le x \\le 1$, חשבו את ההסתברות המדויקת שמתקיים $X > 0.9$ וגם $Y < 0.1$:\n$$P(X > 0.9, Y < 0.1)$$',
        simplifiedLogic: 'Since the target limits 0.9 and 0.1 do not violate the support boundary y <= x (as 0.1 < 0.9), the active integration domain is a perfect rectangle, simplifying the double integral.',
        simplifiedLogicHe: 'מאחר שערכי הגבולות של המאורע (0.9 ו-0.1) אינם חורגים מגבול התמיכה $y \\le x$ (שכן $0.1 < 0.9$), תחום האינטגרציה הפעיל הוא מלבן מושלם, דבר המפשט מאוד את חישוב האינטגרל הכפול.',
        toolboxConnection: 'Finding probabilities over sub-domains is the standard method for evaluating risk in reliability testing and spatial database filters.',
        toolboxConnectionHe: 'מציאת הסתברויות על פני תתי-תחומים היא השיטה הסטנדרטית להערכת סיכונים בבדיקות אמינות תוכנה וחומרה ובמסנני מסדי נתונים מרחביים.',
        keyTakeaway: 'When the event region lies fully within the support boundary, the joint integral factors into two independent single integrals.',
        keyTakeawayHe: 'כאשר אזור המאורע נמצא כולו בתוך גבולות התמיכה, האינטגרל המשותף מתפרק למכפלת שני אינטגרלים חד-ממדיים בלתי תלויים.',
        proof: '**Rigorous Step-by-Step Mathematical Solution:**\n\nWe want to compute $P(X > 0.9, Y < 0.1)$ under the support $0 \\le y \\le x \\le 1$.\n\nNotice that for any $x \\in [0.9, 1]$ and $y \\in [0, 0.1]$, the support condition $y \\le x$ is always satisfied since the maximum value of $y$ ($0.1$) is strictly less than the minimum value of $x$ ($0.9$).\n\nTherefore, the integration region is a perfect rectangle $[0.9, 1] \\times [0, 0.1]$. The double integral is:\n$$P(X > 0.9, Y < 0.1) = \\int_{0.9}^1 \\int_0^{0.1} 8xy \\, dy \\, dx$$\n\nSince the integrand is separable and the boundaries are constants, we factor the integrals:\n$$P(X > 0.9, Y < 0.1) = 8 \\left( \\int_{0.9}^1 x \\, dx \\right) \\left( \\int_0^{0.1} y \\, dy \\right)$$\n\nEvaluate the first integral:\n$$\\int_{0.9}^1 x \\, dx = \\left[ \\frac{x^2}{2} \\right]_{0.9}^1 = \\frac{1^2 - (0.9)^2}{2} = \\frac{1 - 0.81}{2} = 0.095$$\n\nEvaluate the second integral:\n$$\\int_0^{0.1} y \\, dy = \\left[ \\frac{y^2}{2} \\right]_0^{0.1} = \\frac{(0.1)^2 - 0}{2} = \\frac{0.01}{2} = 0.005$$\n\nMultiply the factored terms:\n$$P(X > 0.9, Y < 0.1) = 8 \\times 0.095 \\times 0.005 = 0.0038 \\quad (0.38\\%)$$',
        proofHe: '**פתרון מתמטי מפורט שלב אחר שלב:**\n\nאנו רוצים לחשב את ההסתברות $P(X > 0.9, Y < 0.1)$ תחת תנאי התמיכה $0 \\le y \\le x \\le 1$.\n\nנשים לב כי לכל $x \\in [0.9, 1]$ ו-$y \\in [0, 0.1]$, תנאי התמיכה $y \\le x$ מתקיים תמיד, שכן הערך המקסימלי של $y$ ($0.1$) קטן בהרבה מהערך המינימלי של $x$ ($0.9$).\n\nעל כן, תחום האינטגרציה הוא מלבן מושלם הנתון על ידי $[0.9, 1] \\times [0, 0.1]$. האינטגרל הכפול הוא:\n$$P(X > 0.9, Y < 0.1) = \\int_{0.9}^1 \\int_0^{0.1} 8xy \\, dy \\, dx$$\n\nמכיוון שהפונקציה ניתנת להפרדה וגבולות האינטגרציה הם קבועים, נפרק את האינטגרל למכפלה:\n$$P(X > 0.9, Y < 0.1) = 8 \\left( \\int_{0.9}^1 x \\, dx \\right) \\left( \\int_0^{0.1} y \\, dy \\right)$$\n\nנחשב את האינטגרל הראשון:\n$$\\int_{0.9}^1 x \\, dx = \\left[ \\frac{x^2}{2} \\right]_{0.9}^1 = \\frac{1^2 - (0.9)^2}{2} = \\frac{1 - 0.81}{2} = 0.095$$\n\nנחשב את האינטגרל השני:\n$$\\int_0^{0.1} y \\, dy = \\left[ \\frac{y^2}{2} \\right]_0^{0.1} = \\frac{(0.1)^2 - 0}{2} = \\frac{0.01}{2} = 0.005$$\n\nנכפיל את התוצאות שקיבלנו:\n$$P(X > 0.9, Y < 0.1) = 8 \\times 0.095 \\times 0.005 = 0.0038 \\quad (0.38\\%)$$'      },
      {
        id: 'prac-prob-4-3',
        title: 'Practice 3: Covariance Algebra & Variance of Linear Combination',
        titleHe: 'תרגול 3: אלגברת שונות משותפת ושונות של צירופים ליניאריים',
        isPractice: true,
        content: 'Let $X$ and $Y$ be two random school grade metrics with expectations $\\mathbb{E}[X] = 78, \\mathbb{E}[Y] = 82$, and variances $\\text{Var}(X) = 25, \\text{Var}(Y) = 16$. Their covariance is known to be $\\text{Cov}(X, Y) = 5$.\n\nCalculate:\n1. The variance of the sum: $\\text{Var}(X + Y)$\n2. The covariance of the linear transformation: $\\text{Cov}(X - Y, X + Y)$',
        contentHe: 'יהיו $X$ ו-$Y$ שני מדדי ציונים אקראיים בעלי תוחלות $\\mathbb{E}[X] = 78, \\mathbb{E}[Y] = 82$, ושנויות $\\text{Var}(X) = 25, \\text{Var}(Y) = 16$. השונות המשותפת ביניהם היא $\\text{Cov}(X, Y) = 5$.\n\nחשבו את:\n1. השונות של סכומם: $\\text{Var}(X + Y)$\n2. השונות המשותפת של הצירופים הליניאריים: $\\text{Cov}(X - Y, X + Y)$',
        simplifiedLogic: 'We expand covariance of sums using its distributive property. Because covariance is symmetric, the cross terms Cov(X, Y) and Cov(Y, X) cancel out in the difference/sum structure.',
        simplifiedLogicHe: 'נפתח את השונות המשותפת של הסכומים באמצעות תכונת הפילוג שלה. מכיוון שהשונות המשותפת היא סימטרית, איברי המכפלה המעורבים $\\text{Cov}(X, Y)$ ו-$\\text{Cov}(Y, X)$ מבטלים זה את זה במבנה של הפרש וסכום.',
        toolboxConnection: 'This linear covariance expansion is the absolute core of quantitative financial portfolio optimization and noise reduction analysis.',
        toolboxConnectionHe: 'פיתוח ליניארי זה של שונות משותפת הוא הלב של אופטימיזציית תיקי השקעות במימון כמותי ושל ניתוחי סינון רעשים בעיבוד אותות.',
        keyTakeaway: 'The covariance of a sum and difference simplifies to the difference of their individual variances, as the cross-covariance terms cancel out.',
        keyTakeawayHe: 'השונות המשותפת של הפרש וסכום של שני משתנים מתכנסת בדיוק להפרש השנויות שלהם, כיוון שאיברי השונות המשותפת המעורבים מתבטלים.',
        proof: '**Rigorous Step-by-Step Algebraic Solution:**\n\n**Part 1: Calculate $\\text{Var}(X + Y)$**\nUsing the variance sum identity:\n$$\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y) + 2\\text{Cov}(X, Y)$$\n\nSubstitute the given values:\n$$\\text{Var}(X + Y) = 25 + 16 + 2(5) = 41 + 10 = 51$$\n\n**Part 2: Calculate $\\text{Cov}(X - Y, X + Y)$**\nWe apply the bilinearity property of covariance to expand the term:\n$$\\text{Cov}(X - Y, X + Y) = \\text{Cov}(X, X) + \\text{Cov}(X, Y) - \\text{Cov}(Y, X) - \\text{Cov}(Y, Y)$$\n\nApply the core definitions and symmetry ($\\text{Cov}(X, Y) = \\text{Cov}(Y, X)$):\n- $\\text{Cov}(X, X) = \\text{Var}(X)$\n- $\\text{Cov}(Y, Y) = \\text{Var}(Y)$\n- $\\text{Cov}(X, Y) - \\text{Cov}(Y, X) = 0$$\n\nTherefore, the overall expression simplifies to:\n$$\\text{Cov}(X - Y, X + Y) = \\text{Var}(X) - \\text{Var}(Y)$$\n\nSubstitute the given values:\n$$\\text{Cov}(X - Y, X + Y) = 25 - 16 = 9$$',
        proofHe: '**פתרון אלגברי מפורט שלב אחר שלב:**\n\n**חלק 1: חישוב $\\text{Var}(X + Y)$**\nנשתמש בזהות השונות של סכום משתנים מקריים:\n$$\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y) + 2\\text{Cov}(X, Y)$$\n\nנציב את הערכים הנתונים בשאלה:\n$$\\text{Var}(X + Y) = 25 + 16 + 2(5) = 41 + 10 = 51$$\n\n**חלק 2: חישוב $\\text{Cov}(X - Y, X + Y)$**\nנשתמש בתכונת הדו-ליניאריות של השונות המשותפת כדי לפתוח את הביטוי:\n$$\\text{Cov}(X - Y, X + Y) = \\text{Cov}(X, X) + \\text{Cov}(X, Y) - \\text{Cov}(Y, X) - \\text{Cov}(Y, Y)$$\n\nנחיל את הגדרות היסוד ותכונת הסימטריות ($\\text{Cov}(X, Y) = \\text{Cov}(Y, X)$):\n- $\\text{Cov}(X, X) = \\text{Var}(X)$\n- $\\text{Cov}(Y, Y) = \\text{Var}(Y)$\n- $\\text{Cov}(X, Y) - \\text{Cov}(Y, X) = 0$ (מצטמצמים זה עם זה!)\n\nלפיכך, הביטוי המלא מתקצר בצורה יפהפייה לכדי:\n$$\\text{Cov}(X - Y, X + Y) = \\text{Var}(X) - \\text{Var}(Y)$$\n\nנציב את ערכי השנויות הנתונים:\n$$\\text{Cov}(X - Y, X + Y) = 25 - 16 = 9$$'
      },
      {
        id: 'prac-prob-4-4',
        title: 'Practice 4: Markov & Chebyshev Bounds vs Exact Normal Tail',
        titleHe: 'תרגול 4: חסמי מרקוב וצ\'בישב מול זנב התפלגות נורמלית מדויקת',
        isPractice: true,
        content: 'Let $Z \\sim N(0, 1)$ be a standard Normal random variable. We want to analyze the probability that $Z$ deviates by 2 or more standard deviations, i.e., $P(|Z| \\ge 2)$.\n\n1. Apply Markov\'s inequality to bound this probability (Hint: apply it to $|Z|$).\n2. Apply Chebyshev\'s inequality to bound this probability.\n3. Calculate the exact standard Normal tail probability $P(|Z| \\ge 2)$ and compare the bounds.',
        contentHe: 'יהי $Z \\sim N(0, 1)$ משתנה מקרי נורמלי סטנדרטי. אנו רוצים לנתח את ההסתברות ש-$Z$ סוטה ב-2 סטיות תקן ומעלה מהממוצע שלו, כלומר $P(|Z| \\ge 2)$.\n\n1. חסמו הסתברות זו באמצעות אי-שוויון מרקוב (רמז: החילו אותו על $|Z|$).\n2. חסמו הסתברות זו באמצעות אי-שוויון צ\'בישב.\n3. חשבו את ההסתברות המדויקת לזנב הנורמלי $P(|Z| \\ge 2)$ והשוו בין החסמים.',
        simplifiedLogic: 'Probabilistic bounds are conservative but hold for all possible distributions. Since Chebyshev incorporates variance (second moment), it provides a tighter tail bound than Markov (first moment).',
        simplifiedLogicHe: 'חסמים הסתברותיים הם שמרניים ביותר אך הם תקפים לכל התפלגות שהיא. מאחר שצ\'בישב משלב את השונות (המומנט השני), הוא מספק חסם הדוק בהרבה מזה של מרקוב (המומנט הראשון).',
        toolboxConnection: 'These distribution-free bounds are essential in software performance analysis, guaranteeing system response limits without knowing user load shapes.',
        toolboxConnectionHe: 'חסמים אלו שאינם תלויים בהתפלגות חיוניים בניתוחי ביצועי תוכנה, ומבטיחים גבולות לזמני תגובה של מערכות מבלי לדעת את אופי עומסי המשתמשים.',
        keyTakeaway: 'Chebyshev is tighter than Markov because it utilizes variance, but both are conservative compared to exact parametric distributions.',
        keyTakeawayHe: 'אי-שוויון צ\'בישב הדוק יותר ממרקוב כיוון שהוא עושה שימוש בשונות, אך שניהם שמרניים מאוד בהשוואה לחישוב פרמטרי מדויק של התפלגות נתונה.',
        proof: '**Rigorous Step-by-Step Comparison Analysis:**\n\n**Part 1: Markov Bound on $|Z|$**\nSince $|Z| \\ge 0$, we can apply Markov\'s inequality directly with threshold $c = 2$:\n$$P(|Z| \\ge 2) \\le \\frac{\\mathbb{E}[|Z|]}{2}$$\n\nFor a standard Normal variable $Z \\sim N(0, 1)$, the expected value of its absolute value is a known constant derived from integration:\n$$\\mathbb{E}[|Z|] = \\sqrt{\\frac{2}{\\pi}} \\approx 0.7979$$\n\nSubstituting this expectation gives the Markov bound:\n$$P(|Z| \\ge 2) \\le \\frac{0.7979}{2} = 0.3989 \\quad (39.89\\%)$$\n\n**Part 2: Chebyshev Bound**\nSince $\\mathbb{E}[Z] = 0$ and $\\text{Var}(Z) = 1$, we apply Chebyshev\'s inequality for deviations from the mean with threshold $c = 2$:\n$$P(|Z - 0| \\ge 2) \\le \\frac{\\text{Var}(Z)}{2^2} = \\frac{1}{4} = 0.25 \\quad (25\\%)$$\n\n**Part 3: Exact Tail Calculation & Comparison**\nBy the symmetry of the standard Normal curve, the probability of falling in either outer tail is:\n$$P(|Z| \\ge 2) = 2 P(Z \\ge 2) = 2(1 - \\Phi(2))$$\n\nUsing standard cumulative normal distribution tables, we find $\\Phi(2) \\approx 0.9772$. Substituting this in yields:\n$$P(|Z| \\ge 2) = 2(1 - 0.9772) = 2(0.0228) = 0.0456 \\quad (4.56\\%)$$\n\n**Bound Comparison Summary Table:**\n* **Markov Inequality Bound**: $\\le 39.89\\%$\n* **Chebyshev Inequality Bound**: $\\le 25.00\\%$\n* **Exact Standard Normal tail**: $4.56\\%$\n\nBoth bounds are mathematically correct and verified because $0.0456 \\le 0.2500 \\le 0.3989$. Chebyshev is significantly tighter than Markov because it incorporates variance. However, because both inequalities make absolutely no assumptions about the bell-curve shape of the normal distribution, they remain highly conservative bounds compared to the exact parametric density integration.',
        proofHe: '**ניתוח והשוואה מתמטית מפורטת שלב אחר שלב:**\n\n**חלק 1: חסם מרקוב על $|Z|$**\nכיוון ש-$|Z| \\ge 0$, ניתן להחיל עליו את אי-שוויון מרקוב ישירות עם סף $c = 2$:\n$$P(|Z| \\ge 2) \\le \\frac{\\mathbb{E}[|Z|]}{2}$$\n\nעבור משתנה נורמלי סטנדרטי $Z \\sim N(0, 1)$, התוחלת של הערך המוחלט שלו היא קבוע ידוע המחושב מאינטגרציה:\n$$\\mathbb{E}[|Z|] = \\sqrt{\\frac{2}{\\pi}} \\approx 0.7979$$\n\nהצבת ערך זה מניבה את חסם מרקוב הבא:\n$$P(|Z| \\ge 2) \\le \\frac{0.7979}{2} = 0.3989 \\quad (39.89\\%)$$\n\n**חלק 2: חסם צ״בישב**\nמאחר שמתקיים $\\mathbb{E}[Z] = 0$ וכן $\\text{Var}(Z) = 1$, נפעיל את אי-שוויון צ״בישב עבור סטיות מהממוצע עם סף $c = 2$:\n$$P(|Z - 0| \\ge 2) \\le \\frac{\\text{Var}(Z)}{2^2} = \\frac{1}{4} = 0.25 \\quad (25\\%)$$\n\n**חלק 3: חישוב זנב מדויק והשוואה**\nמתוך תכונת הסימטריות של עקומת הפעמון הנורמלית, ההסתברות להימצא באחד משני הקצוות הקיצוניים היא:\n$$P(|Z| \\ge 2) = 2 P(Z \\ge 2) = 2(1 - \\Phi(2))$$\n\nלפי טבלאות ההתפלגות הנורמלית הסטנדרטית ה-CDF הוא $\\Phi(2) \\approx 0.9772$. הצבה נותנת:\n$$P(|Z| \\ge 2) = 2(1 - 0.9772) = 2(0.0228) = 0.0456 \\quad (4.56\\%)$$\n\n**סיכום והשוואת חסמים:**\n* **חסם אי-שוויון מרקוב**: לכל היותר $39.89\\%$\n* **חסם אי-שוויון צ״בישב**: לכל היותר $25.00\\%$\n* **הסתברות נורמלית מדויקת**: בדיוק $4.56\\%$\n\nשני החסמים מתמטיים נכונים לחלוטין מכיוון שמתקיים שרשרת האי-שוויונות $0.0456 \\le 0.2500 \\le 0.3989$. חסם צ״בישב הדוק משמעותית ממרקוב כיוון שהוא עושה שימוש במידע על השונות. עם זאת, מאחר ששני האי-שוויונות אינם מניחים דבר על צורת הפעמון של ההתפלגות, הם נותרים שמרניים מאוד בהשוואה לאינטגרציה הפרמטרית המדויקת של צפיפות ההתפלגות.'
      },
      {
        id: 'prac-prob-4-5',
        title: 'Practice 5: Required Sample Size Bounds: Chebyshev vs Hoeffding',
        titleHe: 'תרגול 5: חסמי גודל מדגם נדרש: צ\'בישב מול הופדינג',
        isPractice: true,
        content: 'We want to estimate the success probability $p$ of a Bernoulli trial using the sample mean $\\bar{X}_n$ of $n$ i.i.d. trials $X_i \\sim \\text{Bern}(p)$.\n\nCalculate the minimum sample size $n$ required to guarantee that the estimate is within $0.1$ of the true probability $p$ with a confidence level of at least $95\\%$ ($1 - \\alpha = 0.95$, so $\\alpha = 0.05$):\n$$P(|\\bar{X}_n - p| < 0.1) \\ge 0.95 \\iff P(|\\bar{X}_n - p| \\ge 0.1) \\le 0.05$$\n\nCompare the minimum sample size $n$ obtained using:\n1. Chebyshev\'s inequality.\n2. Hoeffding\'s inequality.',
        contentHe: 'אנו מעוניינים לאמוד את הסתברות ההצלחה $p$ של ניסוי ברנולי באמצעות ממוצע מדגם $\\bar{X}_n$ של $n$ ניסויים בלתי תלויים ושווי התפלגות $X_i \\sim \\text{Bern}(p)$.\n\nחשבו את גודל המדגם המינימלי $n$ הנדרש כדי להבטיח שהאומדן יהיה בסטייה של לכל היותר $0.1$ מההסתברות האמיתית $p$ ברמת ביטחון של לפחות $95\\%$ (כלומר, $1 - \\alpha = 0.95$, ולכן $\\alpha = 0.05$):\n$$P(|\\bar{X}_n - p| < 0.1) \\ge 0.95 \\iff P(|\\bar{X}_n - p| \\ge 0.1) \\le 0.05$$\n\nהשוו בין גודל המדגם המינימלי $n$ המתקבל מתוך:\n1. אי-שוויון צ\'בישב.\n2. אי-שוויון הופדינג.',
        simplifiedLogic: 'Hoeffding exploits the bounded nature of Bernoulli trials to prove exponential convergence (e^{-n}) rather than power-law decay (1/n) like Chebyshev, saving over 60% of the required sampling size.',
        simplifiedLogicHe: 'אי-שוויון הופדינג מנצל את האופי החסום של ניסויי ברנולי כדי להוכיח התכנסות מעריכית מהירה ($e^{-n}$) בניגוד לדעיכה פולינומית איטית יותר ($1/n$) של צ\'בישב, מה שחוסך מעל ל-60% מגודל המדגם הנדרש.',
        toolboxConnection: 'This sample size comparison is the exact mathematical trade-off evaluated when designing polling surveys, market research plans, and clinical trials.',
        toolboxConnectionHe: 'השוואת גודל מדגם זו מייצגת את הפשרה המתמטית המדויקת שנלקחת בחשבון בעת תכנון סקרי דעת קהל, מחקרי שוק וניסויים קליניים רפואיים.',
        keyTakeaway: 'Hoeffding\'s exponential concentration enables dramatically tighter sample size bounds for bounded variables compared to Chebyshev.',
        keyTakeawayHe: 'הריכוז המעריכי של הופדינג מאפשר לקבל חסמים הדוקים וחסכוניים בהרבה לגודל המדגם עבור משתנים חסומים בהשוואה לצ\'בישב.',
        proof: '**Rigorous Step-by-Step Comparative Derivation:**\n\nWe want to find $n$ such that $P(|\\bar{X}_n - p| \\ge 0.1) \\le 0.05$.\n\n**Part 1: Chebyshev\'s Inequality Derivation**\nApplying Chebyshev\'s inequality to the sample average $\\bar{X}_n$ gives:\n$$P(|\\bar{X}_n - p| \\ge 0.1) \\le \\frac{\\text{Var}(\\bar{X}_n)}{(0.1)^2}$$\n\nSince the trials $X_i$ are i.i.d. Bernoulli, we have:\n$$\\text{Var}(\\bar{X}_n) = \\frac{\\text{Var}(X_1)}{n} = \\frac{p(1-p)}{n}$$\n\nBecause $p$ is unknown, we must evaluate the worst-case scenario. The variance $p(1-p)$ is a quadratic curve that achieves its global maximum at $p = 0.5$, which equals exactly $0.25$. Substituting this conservative value in gives:\n$$P(|\\bar{X}_n - p| \\ge 0.1) \\le \\frac{0.25}{0.01 n} = \\frac{25}{n}$$\n\nTo guarantee that this tail probability is at most $0.05$, we set the upper bound to $0.05$ and solve for $n$:\n$$\\frac{25}{n} \\le 0.05 \\implies n \\ge \\frac{25}{0.05} = 500$$\nTherefore, Chebyshev requires a sample size of **$n \\ge 500$**.\n\n**Part 2: Hoeffding\'s Inequality Derivation**\nApplying Hoeffding\'s concentration bound for i.i.d. Bernoulli trials gives:\n$$P(|\\bar{X}_n - p| \\ge 0.1) \\le 2 e^{-2n(0.1)^2} = 2 e^{-0.02 n}$$\n\nTo guarantee that this probability is at most $0.05$, we set this exponential upper bound to $0.05$ and solve for $n$:\n$$2 e^{-0.02 n} \\le 0.05 \\implies e^{-0.02 n} \\le \\frac{0.05}{2} = 0.025$$\n\nTake the natural logarithm of both sides:\n$$-0.02 n \\le \\ln(0.025) \\approx -3.6889$$\nMultiply by $-1$ and reverse the inequality:\n$$0.02 n \\ge 3.6889 \\implies n \\ge \\frac{3.6889}{0.02} = 184.44$$\n\nSince the sample size $n$ must be an integer, we round up to the nearest integer:\n$$n \\ge 185$$\nTherefore, Hoeffding requires a sample size of **$n \\ge 185$**.\n\n**Part 3: Comparative Discussion**\n* **Chebyshev Sample Size Requirement**: $n \\ge 500$\n* **Hoeffding Sample Size Requirement**: $n \\ge 185$\n\nHoeffding\'s inequality gives a much smaller and highly practical sample size (saving $63\\%$ of the experimental data collection cost!) compared to Chebyshev\'s inequality. This is because Hoeffding is sensitive to the bounded support of Bernoulli variables ($X_i \\in [0,1]$), allowing it to prove exponential concentration ($e^{-n}$ decay) rather than polynomial decay ($1/n$ decay).',
        proofHe: '**חישוב השוואתי מתמטי מפורט שלב אחר שלב:**\n\nאנו מחפשים את גודל המדגם המינימלי $n$ שיבטיח ש-$P(|\\bar{X}_n - p| \\ge 0.1) \\le 0.05$.\n\n**חלק 1: גזירה לפי אי-שוויון צ״בישב**\nנחיל את אי-שוויון צ״בישב על ממוצע המדגם $\\bar{X}_n$:\n$$P(|\\bar{X}_n - p| \\ge 0.1) \\le \\frac{\\text{Var}(\\bar{X}_n)}{(0.1)^2}$$\n\nהואיל והניסויים $X_i$ הם בלתי תלויים ומתפלגים זהה ברנולי, מתקיים:\n$$\\text{Var}(\\bar{X}_n) = \\frac{\\text{Var}(X_1)}{n} = \\frac{p(1-p)}{n}$$\n\nכיוון ש-$p$ אינו ידוע, נבחר במקרה הגרוע ביותר (worst-case). פונקציית השונות של ברנולי $p(1-p)$ היא פרבולה המגיעה לערכה המקסימלי בנקודה $p=0.5$ שם השונות היא בדיוק $0.25$. הצבת ערך שמרני זה נותנת:\n$$P(|\\bar{X}_n - p| \\ge 0.1) \\le \\frac{0.25}{0.01 n} = \\frac{25}{n}$$\n\nכדי להבטיח שהסתברות הזנב תהיה לכל היותר $0.05$, נשווה את החסם ל-$0.05$ ונחלץ את $n$:\n$$\\frac{25}{n} \\le 0.05 \\implies n \\ge \\frac{25}{0.05} = 500$$\nעל כן, אי-שוויון צ״בישב מחייב מדגם בגודל של **$n \\ge 500$**.\n\n**חלק 2: גזירה לפי אי-שוויון הופדינג**\nנפעיל את חסם הריכוז של הופדינג עבור ניסויי ברנולי i.i.d. לקבלת:\n$$P(|\\bar{X}_n - p| \\ge 0.1) \\le 2 e^{-2n(0.1)^2} = 2 e^{-0.02 n}$$\n\nכדי להבטיח שההסתברות תהיה לכל היותר $0.05$, נשווה את החסם המעריכי ל-$0.05$ ונפתור עבור $n$:\n$$2 e^{-0.02 n} \\le 0.05 \\implies e^{-0.02 n} \\le \\frac{0.05}{2} = 0.025$$\n\nנפעיל לוגריתם טבעי (ln) על שני אגפי המשוואה:\n$$-0.02 n \\le \\ln(0.025) \\approx -3.6889$$\n\nנכפיל ב-$1-$ ונהפוך את סימן אי-השוויון:\n$$0.02 n \\ge 3.6889 \\implies n \\ge \\frac{3.6889}{0.02} = 184.44$$\n\nמכיוון שגודל המדגם $n$ חייב להיות מספר שלם, נעגל כלפי מעלה למספר השלם הבא:\n$$n \\ge 185$$\nעל כן, אי-שוויון הופדינג מחייב מדגם בגודל של **$n \\ge 185$** בלבד.\n\n**חלק 3: דיון תוצאות והשוואה**\n* **דרישת מדגם לפי צ״בישב**: $n \\ge 500$\n* **דרישת מדגם לפי הופדינג**: $n \\ge 185$\n\nאי-שוויון הופדינג מספק גודל מדגם קטן ופרקטי בהרבה (חוסך כ-$63\\%$ מעלות איסוף הנתונים והדגימה של הניסוי!). הסיבה לכך היא שהופדינג מתחשב בעובדה שמשתני ברנולי הם חסומים ($X_i \\in [0,1]$), מה שמאפשר לו להוכיח ריכוזיות מעריכית חזקה (דעיכה בקצב $e^{-n}$) לעומת דעיכה פולינומית איטית ($1/n$) של צ״בישב.'
      }
    ],
    quiz: [
      {
        question: 'Let X and Y be two independent random variables with Var(X) = 9 and Var(Y) = 16. What is the variance of their difference Var(X - Y)?',
        questionHe: 'יהיו X ו-Y שני משתנים מקריים בלתי תלויים בעלי שנויות Var(X) = 9 ו-Var(Y) = 16. מהי השונות של הפרשם Var(X - Y)?',
        options: [
          '7',
          '25',
          '-7',
          '5'
        ],
        optionsHe: [
          '7',
          '25',
          '-7',
          '5'
        ],
        correctAnswerIndex: 1,
        explanation: 'Since X and Y are independent, their covariance Cov(X, Y) is 0. The variance of a linear combination is Var(aX + bY) = a^2 Var(X) + b^2 Var(Y). Here, a = 1 and b = -1. Therefore, Var(X - Y) = (1)^2 Var(X) + (-1)^2 Var(Y) = Var(X) + Var(Y) = 9 + 16 = 25.',
        explanationHe: 'מכיוון ש-X ו-Y הם בלתי תלויים, השונות המשותפת שלהם Cov(X, Y) היא 0. שונות של צירוף ליניארי היא Var(aX + bY) = a^2 Var(X) + b^2 Var(Y). במקרה שלנו, a = 1 ו-b = -1. לכן, Var(X - Y) = (1)^2 Var(X) + (-1)^2 Var(Y) = Var(X) + Var(Y) = 9 + 16 = 25.'
      },
      {
        question: 'A random variable X has mean E[X] = 10 and variance Var(X) = 4. What is the upper bound for the probability P(|X - 10| >= 6) using Chebyshev\'s inequality?',
        questionHe: 'עבור משתנה מקרי X ידוע כי התוחלת היא E[X] = 10 והשונות היא Var(X) = 4. מהו החסם העליון להסתברות P(|X - 10| >= 6) לפי אי-שוויון צ״בישב?',
        options: [
          '1/9',
          '4/9',
          '1/6',
          '1/3'
        ],
        optionsHe: [
          '1/9',
          '4/9',
          '1/6',
          '1/3'
        ],
        correctAnswerIndex: 0,
        explanation: 'By Chebyshev\'s inequality, P(|X - E[X]| >= c) <= Var(X) / c^2. Here, E[X] = 10, Var(X) = 4, and c = 6. Substituting these values: P(|X - 10| >= 6) <= 4 / 6^2 = 4 / 36 = 1/9.',
        explanationHe: 'לפי אי-שוויון צ״בישב, P(|X - E[X]| >= c) <= Var(X) / c^2. במקרה שלנו, E[X] = 10, Var(X) = 4, ו-c = 6. הצבת הערכים נותנת: P(|X - 10| >= 6) <= 4 / 6^2 = 4 / 36 = 1/9.'
      }
    ]
  }
,
  {
    id: 'prob-5',
    courseId: 'prob',
    chapterNumber: '5',
    title: 'Chapter 5: Moment Generating Functions',
    titleHe: 'פרק 5: פונקציות יוצרות מומנטים',
    intro: 'Moment Generating Functions (MGFs) provide a powerful and elegant alternative representation of a probability distribution. By transforming our variables into the frequency-like domain, we can easily calculate moments using derivatives, prove the uniqueness of distributions, and simplify complex sums of independent random variables into simple multiplications of their MGFs.',
    introHe: 'פונקציות יוצרות מומנטים (MGFs) מספקות ייצוג אלטרנטיבי חזק ואלגנטי של התפלגות הסתברות. על ידי מעבר של המשתנים לתחום המדמה תדר, אנו יכולים לחשב בקלות מומנטים בעזרת נגזרות, להוכיח את יחידות ההתפלגות, ולפשט סכומים מורכבים של משתנים מקריים בלתי תלויים לכדי כפל פשוט של פונקציות יוצרות המומנטים שלהם.',
    motivation: 'Directly calculating high-order moments (like skewness or kurtosis) using integration or summation can be mathematically exhausting. Furthermore, finding the exact PDF of the sum of multiple independent random variables normally requires tedious convolution integrals. Moment Generating Functions solve both of these challenges: they act as a "moment generator" via simple differentiation, and they transform the convolution of independent variables into basic multiplication.',
    motivationHe: 'חישוב ישיר של מומנטים מסדר גבוה (כמו שקיפות או גבנוניות) באמצעות אינטגרציה או סכימה עלול להיות מתיש מבחינה מתמטית. יתרה מכך, מציאת ה-PDF המדויק של סכום של מספר משתנים מקריים בלתי תלויים דורשת בדרך כלל אינטגרלי קונבולוציה מייגעים. פונקציות יוצרות מומנטים פותרות את שני האתגרים הללו: הן פועלות כ"מחולל מומנטים" באמצעות גזירה פשוטה, והן הופכות את הקונבולוציה של משתנים בלתי תלויים לכפל בסיסי.',
    definitions: [
      {
        id: 'def-prob-5-1',
        title: 'Definition of Moment Generating Functions (MGF)',
        titleHe: 'הגדרה של פונקציה יוצרת מומנטים',
        content: 'Let $X$ be a random variable (either discrete or continuous). The **Moment Generating Function** of $X$, denoted by $M_X(t)$, is defined as the expected value of $e^{tX}$:\n$$M_X(t) = \\mathbb{E}[e^{tX}]$$\n\n* **Continuous Random Variables**:\n$$M_X(t) = \\int_{-\\infty}^{\\infty} e^{tx} f_X(x) dx$$\n* **Discrete Random Variables**:\n$$M_X(t) = \\sum_{x \\in S} e^{tx} p_X(x)$$\n\n* **Domain of Convergence**: The MGF $M_X(t)$ is defined for all values of $t \\in \\mathbb{R}$ for which the expectation is finite. We assume there exists some positive number $h > 0$ such that $M_X(t) < \\infty$ for all $t \\in (-h, h)$.',
        contentHe: 'יהי $X$ משתנה מקרי (בדיד או רציף). ה**פונקציה יוצרת המומנטים** של $X$, המסומנת ב-$M_X(t)$, מוגדרת כתוחלת של המשתנה $e^{tX}$:\n$$M_X(t) = \\mathbb{E}[e^{tX}]$$\n\n* **עבור משתנים רציפים**:\n$$M_X(t) = \\int_{-\\infty}^{\\infty} e^{tx} f_X(x) dx$$\n* **עבור משתנים בדידים**:\n$$M_X(t) = \\sum_{x \\in S} e^{tx} p_X(x)$$\n\n* **תחום ההתכנסות**: הפונקציה $M_X(t)$ מוגדרת לכל ערכי $t \\in \\mathbb{R}$ שעבורם התוחלת סופית. אנו מניחים שקיים קבוע $h > 0$ כך ש-$M_X(t) < \\infty$ לכל $t \\in (-h, h)$.',
        simplifiedLogic: 'The MGF takes the distribution\'s PDF or PMF and wraps it inside an exponential term $e^{tx}$. This acts as an elegant mathematical transform (similar to the Laplace transform in engineering) that encodes all structural information of the distribution into a single function of $t$.',
        simplifiedLogicHe: 'הפונקציה יוצרת המומנטים לוקחת את ה-PDF או ה-PMF של ההתפלגות ועוטפת אותו בתוך איבר מעריכי $e^{tx}$. זהו טרנספורם מתמטי אלגנטי (דומה לטרנספורם לפלס בהנדסה) המקודד את כל המידע המבני של ההתפלגות לתוך פונקציה יחידה של $t$.',
        toolboxConnection: 'MGFs are used in signal processing and control systems to evaluate system response under randomized noise profiles.',
        toolboxConnectionHe: 'פונקציות יוצרות מומנטים משמשות בעיבוד אותות ומערכות בקרה לצורך הערכת תגובת מערכת תחת פרופילי רעש אקראיים.',
        keyTakeaway: 'The MGF is the expected value of $e^{tX}$, wrapping the distribution into a function of the parameter $t$.',
        keyTakeawayHe: 'הפונקציה יוצרת המומנטים היא התוחלת של $e^{tX}$, המקודדת את כל תכונות ההתפלגות כפונקציה של הפרמטר $t$.'
      },
      {
        id: 'def-prob-5-2',
        title: 'The Moment Generating Property & Uniqueness',
        titleHe: 'תכונת יצירת המומנטים ויחידות ההתפלגות',
        content: '* **Moment Generation Theorem**: If $M_X(t)$ is finite in an open interval around $t=0$, then all moments of $X$ exist, and the $n$-th moment is the $n$-th derivative of $M_X(t)$ evaluated at $t=0$:\n$$\\mathbb{E}[X^n] = M_X^{(n)}(0) = \\left. \\frac{d^n}{dt^n} M_X(t) \\right|_{t=0}$$\n\n* **Expectation & Variance identities**:\n$$\\mathbb{E}[X] = M_X\'(0)$$\n$$\\mathbb{E}[X^2] = M_X\'\'(0) \\implies \\text{Var}(X) = M_X\'\'(0) - (M_X\'(0))^2$\n\n* **Uniqueness Theorem**: If two random variables $X$ and $Y$ have MGFs $M_X(t)$ and $M_Y(t)$ that are equal in an open interval $(-h, h)$ around $0$, then $X$ and $Y$ have identical probability distributions.',
        contentHe: '* **משפט יצירת המומנטים**: אם $M_X(t)$ סופי בסביבה פתוחה סביב $t=0$, אז כל המומנטים של $X$ קיימים, והמומנט ה-$n$ הוא הנגזרת ה-$n$ של $M_X(t)$ המוערכת בנקודה $t=0$:\n$$\\mathbb{E}[X^n] = M_X^{(n)}(0) = \\left. \\frac{d^n}{dt^n} M_X(t) \\right|_{t=0}$$\n\n* **תוחלת ושונות באמצעות נגזרות**:\n$$\\mathbb{E}[X] = M_X\'(0)$$\n$$\\mathbb{E}[X^2] = M_X\'\'(0) \\implies \\text{Var}(X) = M_X\'\'(0) - (M_X\'(0))^2$\n\n* **משפט היחידות**: אם לשני משתנים מקריים $X$ ו-$Y$ יש פונקציות יוצרות מומנטים $M_X(t)$ ו-$M_Y(t)$ השוות זו לזו במרווח פתוח $(-h, h)$ סביב $0$, אז ל-$X$ ול-$Y$ יש את אותה התפלגות הסתברות בדיוק.',
        simplifiedLogic: 'Instead of doing tedious integrals $\\int x^n f(x) dx$ to find high-order moments, we can simply differentiate $M_X(t)$ $n$ times and substitute $t=0$. The Uniqueness Theorem is a major shortcut: if you derive an MGF of a complex expression and recognize it as the MGF of a Normal distribution, you immediately prove the variable is Normal.',
        simplifiedLogicHe: 'במקום לבצע אינטגרלים מורכבים $\\int x^n f(x) dx$ למציאת מומנטים מסדר גבוה, אנו יכולים פשוט לגזור את $M_X(t)$ $n$ פעמים ולהציב $t=0$. משפט היחידות מהווה קיצור דרך עצום: אם תגזרו MGF של ביטוי מורכב ותזהו אותו כ-MGF של התפלגות נורמלית, הוכחתם מיד שהמשתנה מתפלג נורמלית.',
        toolboxConnection: 'This property allows machine learning algorithms to compute higher-order statistics (skewness, kurtosis) efficiently in feature engineering.',
        toolboxConnectionHe: 'תכונה זו מאפשרת לאלגוריתמי למידת מכונה לחשב מומנטים סטטיסטיים מסדרים גבוהים (כמו מדד אסימטריה או גבנוניות) ביעילות.',
        keyTakeaway: 'Differentiating the MGF $n$ times and substituting $t=0$ yields $\\mathbb{E}[X^n]$. Distinct distributions have distinct MGFs.',
        keyTakeawayHe: 'גזירת הפונקציה $n$ פעמים והצבת $t=0$ מניבה את המומנט ה-$n$ של המשתנה. התפלגויות שונות גוררות פונקציות יוצרות מומנטים שונות.',
        proof: 'We prove the theorem using the Taylor series expansion of $e^{tX}$ around $t=0$:\n$$e^{tX} = \\sum_{n=0}^{\\infty} \\frac{(tX)^n}{n!} = 1 + tX + \\frac{t^2 X^2}{2!} + \\frac{t^3 X^3}{3!} + \\dots$$\n\nBy taking the mathematical expectation of both sides, and assuming we can interchange the expectation and summation (valid within the domain of convergence):\n$$M_X(t) = \\mathbb{E}[e^{tX}] = \\sum_{n=0}^{\\infty} \\frac{t^n \\mathbb{E}[X^n]}{n!} = 1 + t\\mathbb{E}[X] + \\frac{t^2 \\mathbb{E}[X^2]}{2!} + \\frac{t^3 \\mathbb{E}[X^3]}{3!} + \\dots$$\n\nNow we differentiate $M_X(t)$ with respect to $t$:\n$$M_X\'(t) = 0 + \\mathbb{E}[X] + t\\mathbb{E}[X^2] + \\frac{t^2 \\mathbb{E}[X^3]}{2} + \\dots$$\nSubstituting $t=0$ yields:\n$$M_X\'(0) = \\mathbb{E}[X]$$\n\nDifferentiating a second time yields:\n$$M_X\'\'(t) = \\mathbb{E}[X^2] + t\\mathbb{E}[X^3] + \\dots$$\nSubstituting $t=0$ yields:\n$$M_X\'\'(0) = \\mathbb{E}[X^2]$$\n\nBy mathematical induction, the $n$-th derivative is:\n$$M_X^{(n)}(t) = \\mathbb{E}[X^n] + t\\mathbb{E}[X^{n+1}] + \\dots \\implies M_X^{(n)}(0) = \\mathbb{E}[X^n]$$\nThis completes the rigorous mathematical proof.',
        proofHe: 'נוכיח את המשפט באמצעות פיתוח טור טיילור של פונקציית האקספוננט $e^{tX}$ סביב $t=0$:\n$$e^{tX} = \\sum_{n=0}^{\\infty} \\frac{(tX)^n}{n!} = 1 + tX + \\frac{t^2 X^2}{2!} + \\frac{t^3 X^3}{3!} + \\dots$$\n\nניקח תוחלת משני אגפי המשוואה, ובהנחה שניתן להחליף את סדר התוחלת והסכימה (פעולה מוצדקת בתחום ההתכנסות של הטור):\n$$M_X(t) = \\mathbb{E}[e^{tX}] = \\sum_{n=0}^{\\infty} \\frac{t^n \\mathbb{E}[X^n]}{n!} = 1 + t\\mathbb{E}[X] + \\frac{t^2 \\mathbb{E}[X^2]}{2!} + \\frac{t^3 \\mathbb{E}[X^3]}{3!} + \\dots$$\n\nכעת נגזור את הפונקציה $M_X(t)$ לפי המשתנה $t$:\n$$M_X\'(t) = 0 + \\mathbb{E}[X] + t\\mathbb{E}[X^2] + \\frac{t^2 \\mathbb{E}[X^3]}{2} + \\dots$$\nהצבת $t=0$ מניבה:\n$$M_X\'(0) = \\mathbb{E}[X]$$\n\nגזירה פעם שנייה מניבה:\n$$M_X\'\'(t) = \\mathbb{E}[X^2] + t\\mathbb{E}[X^3] + \\dots$$\nהצבת $t=0$ מניבה:\n$$M_X\'\'(0) = \\mathbb{E}[X^2]$$\n\nבאינדוקציה מתמטית, הנגזרת ה-$n$ היא מהצורה:\n$$M_X^{(n)}(t) = \\mathbb{E}[X^n] + t\\mathbb{E}[X^{n+1}] + \\dots \\implies M_X^{(n)}(0) = \\mathbb{E}[X^n]$$\nובכך הושלמה ההוכחה המתמטית הקפדנית.'
      },
      {
        id: 'def-prob-5-3',
        title: 'Linear Transformations & Independent Sums',
        titleHe: 'טרנספורמציות ליניאריות וסכום של משתנים בלתי תלויים',
        content: '* **Linear Transformations**: Let $a$ and $b$ be constants, and $Y = aX + b$. The MGF of $Y$ is:\n$$M_{aX+b}(t) = e^{bt} M_X(at)$$\n\n* **MGF of Sums of Independent Variables**: Let $X_1, X_2, \\dots, X_n$ be independent random variables. The MGF of their sum $S_n = \\sum_{i=1}^n X_i$ is the product of their individual MGFs:\n$$M_{S_n}(t) = \\prod_{i=1}^n M_{X_i}(t)$$\n\nIf $X_i$ are independent and identically distributed (i.i.d.), then:\n$$M_{S_n}(t) = \\left( M_{X_1}(t) \\right)^n$',
        contentHe: '* **טרנספורמציות ליניאריות**: יהיו $a$ ו-$b$ קבועים ממשיים, ויהי $Y = aX + b$. פונקציית ה-MGF של $Y$ היא:\n$$M_{aX+b}(t) = e^{bt} M_X(at)$$\n\n* **סכום של משתנים מקריים בלתי תלויים**: יהיו $X_1, X_2, \\dots, X_n$ משתנים מקריים בלתי תלויים. פונקציית ה-MGF של סכומם $S_n = \\sum_{i=1}^n X_i$ היא מכפלת פונקציות ה-MGF האינדיבידואליות שלהם:\n$$M_{S_n}(t) = \\prod_{i=1}^n M_{X_i}(t)$$\n\nאם המשתנים הם בלתי תלויים ובעלי התפלגות זהה (i.i.d.), אז מתקיים:\n$$M_{S_n}(t) = \\left( M_{X_1}(t) \\right)^n$',
        simplifiedLogic: 'The MGF transforms the mathematical convolution operation (which is required to find the PDF of a sum of variables) into a basic algebraic multiplication. This is why summing independent variables is incredibly easy to analyze in the MGF domain.',
        simplifiedLogicHe: 'פונקציה יוצרת מומנטים הופכת את פעולת הקונבולוציה המתמטית (הנדרשת למציאת ה-PDF של סכום משתנים) לכפל אלגברי פשוט. זו הסיבה שסכימת משתנים בלתי תלויים היא קלה ביותר לניתוח בתחום ה-MGF.',
        toolboxConnection: 'This multiplicative property is the core engine behind proving the Central Limit Theorem in statistics.',
        toolboxConnectionHe: 'תכונת הכפליות הזו היא המנגנון המרכזי המשמש להוכחת משפט הגבול המרכזי בסטטיסטיקה.',
        keyTakeaway: 'Linear shifts add exponential multipliers, and independent sums result in multiplying MGFs.',
        keyTakeawayHe: 'הזזות ליניאריות מוסיפות כופלים מעריכיים, וסכומים של משתנים בלתי תלויים מביאים למכפלה של פונקציות ה-MGF שלהם.',
        proof: '**Part 1: Proof of Linear Transformation Property**\nLet $Y = aX + b$. By definition of MGF:\n$$M_Y(t) = \\mathbb{E}[e^{tY}] = \\mathbb{E}[e^{t(aX+b)}] = \\mathbb{E}[e^{atX} \\cdot e^{bt}]$$\nSince $e^{bt}$ is a constant with respect to the expectation operator, we factor it out:\n$$M_Y(t) = e^{bt} \\mathbb{E}[e^{(at)X}] = e^{bt} M_X(at)$$\n\n**Part 2: Proof of Independent Sums Property**\nLet $S_n = \\sum_{i=1}^n X_i$, where $X_i$ are independent. By definition of MGF:\n$$M_{S_n}(t) = \\mathbb{E}[e^{t \\sum X_i}] = \\mathbb{E}[e^{tX_1 + tX_2 + \\dots + tX_n}] = \\mathbb{E}[e^{tX_1} \\cdot e^{tX_2} \\dots e^{tX_n}]$$\nSince the variables $X_1, \\dots, X_n$ are independent, the exponential functions $e^{tX_1}, \\dots, e^{tX_n}$ are also independent. Thus, the expectation of their product equals the product of their expectations:\n$$M_{S_n}(t) = \\mathbb{E}[e^{tX_1}] \\cdot \\mathbb{E}[e^{tX_2}] \\dots \\mathbb{E}[e^{tX_n}] = \\prod_{i=1}^n M_{X_i}(t)$$\nThis completes both mathematical proofs.',
        proofHe: '**חלק 1: הוכחת תכונת הטרנספורמציה הליניארית**\nיהי $Y = aX + b$. לפי הגדרת ה-MGF:\n$$M_Y(t) = \\mathbb{E}[e^{tY}] = \\mathbb{E}[e^{t(aX+b)}] = \\mathbb{E}[e^{atX} \\cdot e^{bt}]$$\nכיוון ש-$e^{bt}$ הוא קבוע ביחס לאופרטור התוחלת, ניתן להוציא אותו מחוץ לתוחלת:\n$$M_Y(t) = e^{bt} \\mathbb{E}[e^{(at)X}] = e^{bt} M_X(at)$$\n\n**חלק 2: הוכחת תכונת הסכום של משתנים בלתי תלויים**\nיהי $S_n = \\sum_{i=1}^n X_i$, כאשר $X_i$ הם בלתי תלויים. לפי הגדרת ה-MGF:\n$$M_{S_n}(t) = \\mathbb{E}[e^{t \\sum X_i}] = \\mathbb{E}[e^{tX_1 + tX_2 + \\dots + tX_n}] = \\mathbb{E}[e^{tX_1} \\cdot e^{tX_2} \\dots e^{tX_n}]$$\nכיוון שהמשתנים $X_1, \\dots, X_n$ בלתי תלויים, גם הפונקציות המעריכיות שלהם $e^{tX_1}, \\dots, e^{tX_n}$ הן בלתי תלויות. לכן, תוחלת המכפלה שווה למכפלת התוחלות:\n$$M_{S_n}(t) = \\mathbb{E}[e^{tX_1}] \\cdot \\mathbb{E}[e^{tX_2}] \\dots \\mathbb{E}[e^{tX_n}] = \\prod_{i=1}^n M_{X_i}(t)$$\nובכך הושלמו שתי ההוכחות המתמטיות באופן מלא.\n'
      },
      {
        id: 'prac-prob-5-1',
        title: 'Practice 1: Derive MGF of Exponential Distribution & Find Moments',
        titleHe: 'תרגול 1: גזירת MGF של התפלגות מעריכית ומציאת מומנטים',
        isPractice: true,
        content: 'Let $X \\sim \\text{Exp}(\\lambda)$ be an exponentially distributed random variable with rate parameter $\\lambda > 0$.\n\n1. Derive the MGF $M_X(t)$ from first principles (integration).\n2. Identify the domain of convergence for $t$.\n3. Use $M_X(t)$ to calculate the mean $\\mathbb{E}[X]$ and variance $\\text{Var}(X)$ using derivatives.',
        contentHe: 'יהי $X \\sim \\text{Exp}(\\lambda)$ משתנה מקרי בעל התפלגות מעריכית עם פרמטר קצב $\\lambda > 0$.\n\n1. גזרו את פונקציית ה-MGF $M_X(t)$ ישירות מההגדרה (באמצעות אינטגרציה).\n2. הגדירו את תחום ההתכנסות עבור המשתנה $t$.\n3. השתמשו ב-$M_X(t)$ כדי לחשב את התוחלת $\\mathbb{E}[X]$ ואת השונות $\\text{Var}(X)$ באמצעות נגזרות.',
        simplifiedLogic: 'Integrating the exponential function $e^{tx}$ against the PDF $\\lambda e^{-\\lambda x}$ creates a unified exponent $(\\lambda-t)x$. For the integral to converge at infinity, we must require $t < \\lambda$.',
        simplifiedLogicHe: 'אינטגרציה של הפונקציה המעריכית $e^{tx}$ מול הצפיפות $\\lambda e^{-\\lambda x}$ יוצרת מעריך משותף $(\\lambda-t)x$. כדי שהאינטגרל יתכנס באינסוף, עלינו לדרוש $t < \\lambda$.',
        toolboxConnection: 'The Exponential MGF is fundamental in queueing theory to model average customer service times and server waiting limits.',
        toolboxConnectionHe: 'פונקציית ה-MGF המעריכית היא כלי יסוד בתורת התורים לצורך מידול זמני שירות ממוצעים וגבולות זמני המתנה של שרתים.',
        keyTakeaway: 'The MGF of $Exp(\\lambda)$ is $\\frac{\\lambda}{\\lambda-t}$ for $t < \\lambda$. Evaluating derivatives yields the standard expectation $\\frac{1}{\\lambda}$ and variance $\\frac{1}{\\lambda^2}$.',
        keyTakeawayHe: 'הפונקציה יוצרת המומנטים של התפלגות מעריכית היא $\\frac{\\lambda}{\\lambda-t}$ עבור $t < \\lambda$. גזירה שלה מניבה את התוחלת הידועה $\\frac{1}{\\lambda}$ והשונות $\\frac{1}{\\lambda^2}$.',
        proof: '**Step-by-Step Derivation and Moment Calculation:**\n\n**Part 1: Integration Derivation**\nThe PDF of $X \\sim \\text{Exp}(\\lambda)$ is $f_X(x) = \\lambda e^{-\\lambda x}$ for $x \\ge 0$. By definition of MGF:\n$$M_X(t) = \\mathbb{E}[e^{tX}] = \\int_{0}^{\\infty} e^{tx} \\cdot \\lambda e^{-\\lambda x} dx = \\lambda \\int_{0}^{\\infty} e^{-(\\lambda - t)x} dx$$\n\n**Part 2: Domain of Convergence**\nTo evaluate this improper integral, we look at the exponent. The integral converges if and only if the coefficient of $x$ is negative, i.e., $-(\\lambda - t) < 0 \\iff t < \\lambda$. Under this condition:\n$$M_X(t) = \\lambda \\left[ \\frac{e^{-(\\lambda - t)x}}{-(\\lambda - t)} \\right]_{0}^{\\infty} = \\lambda \\left( 0 - \\frac{1}{-(\\lambda - t)} \\right) = \\frac{\\lambda}{\\lambda - t}$$\nTherefore, the MGF is **$M_X(t) = \\frac{\\lambda}{\\lambda - t}$** for **$t < \\lambda$**.\n\n**Part 3: Calculating Moments via Derivatives**\nLet\'s write the MGF as $M_X(t) = \\lambda (\\lambda - t)^{-1}$. We compute the first and second derivatives:\n* **First Derivative**:\n$$M_X\'(t) = \\lambda \\cdot (-1)(\\lambda - t)^{-2} \\cdot (-1) = \\lambda (\\lambda - t)^{-2}$$\nEvaluating at $t=0$ gives the expectation:\n$$\\mathbb{E}[X] = M_X\'(0) = \\lambda (\\lambda - 0)^{-2} = \\frac{\\lambda}{\\lambda^2} = \\frac{1}{\\lambda}$$\n\n* **Second Derivative**:\n$$M_X\'\'(t) = \\lambda \\cdot (-2)(\\lambda - t)^{-3} \\cdot (-1) = 2\\lambda (\\lambda - t)^{-3}$$\nEvaluating at $t=0$ gives the second moment:\n$$\\mathbb{E}[X^2] = M_X\'\'(0) = 2\\lambda (\\lambda - 0)^{-3} = \\frac{2\\lambda}{\\lambda^3} = \\frac{2}{\\lambda^2}$$\n\n* **Variance Calculation**:\n$$\\text{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2 = \\frac{2}{\\lambda^2} - \\left(\\frac{1}{\\lambda}\\right)^2 = \\frac{2}{\\lambda^2} - \\frac{1}{\\lambda^2} = \\frac{1}{\\lambda^2}$$\n\nThis completes the complete mathematical proof and derivatives matching standard parameter profiles.',
        proofHe: '**דרשת הגזירה וחישוב המומנטים שלב אחר שלב:**\n\n**חלק 1: גזירה באמצעות אינטגרל**\nפונקציית הצפיפות (PDF) של $X \\sim \\text{Exp}(\\lambda)$ היא $f_X(x) = \\lambda e^{-\\lambda x}$ עבור $x \\ge 0$. לפי ההגדרה:\n$$M_X(t) = \\mathbb{E}[e^{tX}] = \\int_{0}^{\\infty} e^{tx} \\cdot \\lambda e^{-\\lambda x} dx = \\lambda \\int_{0}^{\\infty} e^{-(\\lambda - t)x} dx$$\n\n**חלק 2: תחום ההתכנסות**\nכדי להעריך את האינטגרל הלא-אמיתי, נסתכל על המעריך. האינטגרל מתכנס אם ורק אם המקדם של $x$ שלילי, כלומר $-(\\lambda - t) < 0 \\iff t < \\lambda$. תחת תנאי זה:\n$$M_X(t) = \\lambda \\left[ \\frac{e^{-(\\lambda - t)x}}{-(\\lambda - t)} \\right]_{0}^{\\infty} = \\lambda \\left( 0 - \\frac{1}{-(\\lambda - t)} \\right) = \\frac{\\lambda}{\\lambda - t}$$\nעל כן, פונקציית ה-MGF היא **$M_X(t) = \\frac{\\lambda}{\\lambda - t}$** עבור **$t < \\lambda$**.\n\n**חלק 3: חישוב תוחלת ושונות באמצעות נגזרות**\nנכתוב את הפונקציה כ-$M_X(t) = \\lambda (\\lambda - t)^{-1}$. נחשב את הנגזרת הראשונה והשנייה:\n* **נגזרת ראשונה**:\n$$M_X\'(t) = \\lambda \\cdot (-1)(\\lambda - t)^{-2} \\cdot (-1) = \\lambda (\\lambda - t)^{-2}$$\nהצבה של $t=0$ מניבה את התוחלת:\n$$\\mathbb{E}[X] = M_X\'(0) = \\lambda (\\lambda - 0)^{-2} = \\frac{\\lambda}{\\lambda^2} = \\frac{1}{\\lambda}$$\n\n* **נגזרת שנייה**:\n$$M_X\'\'(t) = \\lambda \\cdot (-2)(\\lambda - t)^{-3} \\cdot (-1) = 2\\lambda (\\lambda - t)^{-3}$$\nהצבה של $t=0$ מניבה את המומנט השני:\n$$\\mathbb{E}[X^2] = M_X\'\'(0) = 2\\lambda (\\lambda - 0)^{-3} = \\frac{2\\lambda}{\\lambda^3} = \\frac{2}{\\lambda^2}$$\n\n* **חישוב השונות**:\n$$\\text{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2 = \\frac{2}{\\lambda^2} - \\left(\\frac{1}{\\lambda}\\right)^2 = \\frac{2}{\\lambda^2} - \\frac{1}{\\lambda^2} = \\frac{1}{\\lambda^2}$$\n\nובכך הושלם החישוב במלואו באופן התואם לערכים הפרמטריים הידועים של ההתפלגות.'
      },
      {
        id: 'prac-prob-5-2',
        title: 'Practice 2: Linear Transformations of Standard Normal MGF',
        titleHe: 'תרגול 2: טרנספורמציות ליניאריות של MGF נורמלי סטנדרטי',
        isPractice: true,
        content: 'Let $Z \\sim N(0, 1)$ be a standard Normal random variable with MGF $M_Z(t) = e^{\\frac{1}{2}t^2}$.\n\nLet $Y = \\sigma Z + \\mu$ be a linear transformation representing a Normal variable with mean $\\mu$ and variance $\\sigma^2$.\n\n1. Use the linear transformation property of MGFs to derive $M_Y(t)$.\n2. Show that the resulting MGF uniquely identifies $Y$ as a Normal random variable $N(\\mu, \\sigma^2)$.',
        contentHe: 'יהי $Z \\sim N(0, 1)$ משתנה מקרי נורמלי סטנדרטי בעל פונקציה יוצרת מומנטים $M_Z(t) = e^{\\frac{1}{2}t^2}$.\n\nנגדיר משתנה חדש $Y = \\sigma Z + \\mu$ המייצג משתנה נורמלי בעל תוחלת $\\mu$ ושונות $\\sigma^2$.\n\n1. השתמשו בתכונת הטרנספורמציה הליניארית של MGF כדי לגזור את הפונקציה $M_Y(t)$.\n2. הראו כי פונקציית ה-MGF שמתקבלת מזהה את $Y$ באופן יחיד כמשתנה מקרי נורמלי $N(\\mu, \\sigma^2)$.',
        simplifiedLogic: 'The linear shift by $\\mu$ multiplies the standard Normal MGF by $e^{\\mu t}$, while the scaling by $\\sigma$ changes $t^2$ to $\\sigma^2 t^2$. By the uniqueness theorem, this proves the linear combination is Normal.',
        simplifiedLogicHe: 'ההזזה הליניארית ב-$\\mu$ מכפילה את ה-MGF הנורמלי הסטנדרטי ב-$e^{\\mu t}$, בעוד שהכפל ב-$\\sigma$ משנה את $t^2$ ל-$\\sigma^2 t^2$. לפי משפט היחידות, זה מוכיח שהקומבינציה היא נורמלית.',
        toolboxConnection: 'This derivation is the mathematical justification for standardizing variables in statistical data pre-processing (Z-score normalization).',
        toolboxConnectionHe: 'גזירה זו מהווה את ההצדקה המתמטית לנרמול משתנים בעת הכנת נתונים סטטיסטיים (Z-score normalization).',
        keyTakeaway: 'The MGF of $N(\\mu, \\sigma^2)$ is $e^{\\mu t + \\frac{1}{2}\\sigma^2 t^2}$. Any variable with this MGF is Normal by the Uniqueness Theorem.',
        keyTakeawayHe: 'פונקציית ה-MGF של משתנה נורמלי $N(\\mu, \\sigma^2)$ היא $e^{\\mu t + \\frac{1}{2}\\sigma^2 t^2}$. כל משתנה בעל MGF כזה מתפלג נורמלית לפי משפט היחידות.',
        proof: '**Step-by-Step Derivation:**\n\nWe are given $Z \\sim N(0, 1)$ and its MGF $M_Z(t) = e^{\\frac{1}{2}t^2}$.\n\nLet $Y = \\sigma Z + \\mu$. Applying the linear transformation theorem for MGFs $M_{aX+b}(t) = e^{bt} M_X(at)$ with $a = \\sigma$ and $b = \\mu$:\n$$M_Y(t) = M_{\\sigma Z + \\mu}(t) = e^{\\mu t} M_Z(\\sigma t)$$\n\nSubstitute the standard Normal MGF evaluated at parameter $\\sigma t$:\n$$M_Z(\\sigma t) = e^{\\frac{1}{2}(\\sigma t)^2} = e^{\\frac{1}{2}\\sigma^2 t^2}$$\n\nMultiply the terms to find the final MGF of $Y$:\n$$M_Y(t) = e^{\\mu t} \\cdot e^{\\frac{1}{2}\\sigma^2 t^2} = e^{\\mu t + \\frac{1}{2}\\sigma^2 t^2}$$\n\n**Conclusion via Uniqueness Theorem:**\nSince the MGF of a general Normal random variable with mean $\\mu$ and variance $\\sigma^2$ is defined as $e^{\\mu t + \\frac{1}{2}\\sigma^2 t^2}$, and the MGF of $Y$ matches this profile exactly, by the Uniqueness Theorem of Moment Generating Functions we prove rigorously that:\n$$Y \\sim N(\\mu, \\sigma^2)$$\nThis completes the proof.',
        proofHe: '**הוכחה וגזירה שלב אחר שלב:**\n\nנתון לנו כי $Z \\sim N(0, 1)$ ופונקציית ה-MGF שלו היא $M_Z(t) = e^{\\frac{1}{2}t^2}$.\n\nנגדיר $Y = \\sigma Z + \\mu$. נפעיל את משפט הטרנספורמציה הליניארית של MGF ($M_{aX+b}(t) = e^{bt} M_X(at)$) כאשר $a = \\sigma$ ו-$b = \\mu$:\n$$M_Y(t) = M_{\\sigma Z + \\mu}(t) = e^{\\mu t} M_Z(\\sigma t)$$\n\nנציב את פונקציית ה-MGF הסטנדרטית כאשר היא מוערכת בנקודה $\\sigma t$:\n$$M_Z(\\sigma t) = e^{\\frac{1}{2}(\\sigma t)^2} = e^{\\frac{1}{2}\\sigma^2 t^2}$$\n\nנכפיל את האיברים לקבלת ה-MGF הסופי של $Y$:\n$$M_Y(t) = e^{\\mu t} \\cdot e^{\\frac{1}{2}\\sigma^2 t^2} = e^{\\mu t + \\frac{1}{2}\\sigma^2 t^2}$$\n\n**סיכום ומסקנה לפי משפט היחידות:**\nכיוון שפונקציית ה-MGF של משתנה נורמלי כללי בעל תוחלת $\\mu$ ושונות $\\sigma^2$ היא בדיוק $e^{\\mu t + \\frac{1}{2}\\sigma^2 t^2}$, ופונקציית ה-MGF של המשתנה $Y$ שחישבנו תואמת לה לחלוטין, נובע ישירות ממשפט היחידות של פונקציות יוצרות מומנטים כי:\n$$Y \\sim N(\\mu, \\sigma^2)$$\nובכך הושלמה ההוכחה במלואה.'
      },
      {
        id: 'prac-prob-5-3',
        title: 'Practice 3: Sum of Independent Poisson Random Variables',
        titleHe: 'תרגול 3: סכום של משתנים מקריים בלתי תלויים פואסוניים',
        isPractice: true,
        content: 'Let $X_1, X_2, \\dots, X_n$ be independent Poisson random variables, such that $X_i \\sim \\text{Poi}(\\lambda_i)$ for rate parameters $\\lambda_i > 0$.\n\nLet $S_n = \\sum_{i=1}^n X_i$ be the sum of these variables.\n\n1. Derive the MGF of a single Poisson variable $X_i$.\n2. Use the independent sums property to find the MGF of the sum $S_n$.\n3. Identify the distribution of $S_n$ using the uniqueness theorem.',
        contentHe: 'יהיו $X_1, X_2, \\dots, X_n$ משתנים מקריים בלתי תלויים המתפלגים פואסון, כאשר $X_i \\sim \\text{Poi}(\\lambda_i)$ עם פרמטר קצב $\\lambda_i > 0$.\n\nנגדיר $S_n = \\sum_{i=1}^n X_i$ כסכום המשתנים הללו.\n\n1. גזרו את ה-MGF של משתנה פואסוני בודד $X_i$.\n2. השתמשו בתכונת הסכום של משתנים בלתי תלויים כדי למצוא את ה-MGF של הסכום $S_n$.\n3. זהו את התפלגות המשתנה $S_n$ באמצעות משפט היחידות.',
        simplifiedLogic: 'The MGF of a single Poisson is $e^{\\lambda(e^t-1)}$. When summing independent Poisson variables, we multiply their MGFs, which sums their exponents. The resulting MGF is Poisson with rate $\\sum \\lambda_i$.',
        simplifiedLogicHe: 'פונקציית ה-MGF של משתנה פואסוני בודד היא $e^{\\lambda(e^t-1)}$. כאשר סוכמים משתנים פואסוניים בלתי תלויים, מכפילים את פונקציות ה-MGF שלהם, מה שמוביל לסכימה של המעריכים. פונקציית ה-MGF שמתקבלת היא פואסונית עם קצב $\\sum \\lambda_i$.',
        toolboxConnection: 'This property justifies modeling aggregate network web traffic as a single Poisson stream containing the sum of many independent traffic generators.',
        toolboxConnectionHe: 'תכונה זו מצדיקה מידול של תעבורת אינטרנט מצטברת ברשת כזרם פואסוני יחיד המורכב מסכום של מחוללי תעבורה בלתי תלויים רבים.',
        keyTakeaway: 'The sum of independent Poisson variables is Poisson, with a rate equal to the sum of their individual rates: $S_n \\sim Poi(\\sum \\lambda_i)$.',
        keyTakeawayHe: 'סכום של משתנים פואסוניים בלתי תלויים מתפלג פואסון, כאשר פרמטר הקצב של הסכום שווה לסכום פרמטרי הקצב האינדיבידואליים: $S_n \\sim Poi(\\sum \\lambda_i)$.',
        proof: '**Step-by-Step Derivation and Proof:**\n\n**Part 1: Deriving the MGF of a single Poisson $X_i \\sim \\text{Poi}(\\lambda_i)$**\nThe PMF of $X_i$ is $P(X_i = k) = \\frac{e^{-\\lambda_i} \\lambda_i^k}{k!}$ for $k \\ge 0$. By definition of MGF:\n$$M_{X_i}(t) = \\mathbb{E}[e^{tX_i}] = \\sum_{k=0}^{\\infty} e^{tk} \\cdot \\frac{e^{-\\lambda_i} \\lambda_i^k}{k!} = e^{-\\lambda_i} \\sum_{k=0}^{\\infty} \\frac{(e^t \\lambda_i)^k}{k!}$$\n\nUsing the infinite Taylor series expansion for the exponential function $\\sum_{k=0}^{\\infty} \\frac{u^k}{k!} = e^u$ with $u = \\lambda_i e^t$:\n$$M_{X_i}(t) = e^{-\\lambda_i} \\cdot e^{\\lambda_i e^t} = e^{\\lambda_i (e^t - 1)}$$\n\n**Part 2: MGF of the Sum of Independent Variables**\nSince the variables $X_1, \\dots, X_n$ are independent, the MGF of their sum $S_n = \\sum_{i=1}^n X_i$ is the product of their individual MGFs:\n$$M_{S_n}(t) = \\prod_{i=1}^n M_{X_i}(t) = \\prod_{i=1}^n e^{\\lambda_i (e^t - 1)}$$\n\nUsing standard algebra of exponents, the product of exponential terms becomes the exponential of the sum:\n$$M_{S_n}(t) = e^{\\sum_{i=1}^n \\lambda_i (e^t - 1)} = e^{\\left(\\sum_{i=1}^n \\lambda_i\\right)(e^t - 1)}$$\n\n**Part 3: Uniqueness Theorem Conclusion**\nLet $\\Lambda = \\sum_{i=1}^n \\lambda_i$. The MGF of the sum is exactly $e^{\\Lambda (e^t - 1)}$, which matches the MGF profile of a Poisson random variable with parameter $\\Lambda$.\n\nBy the Uniqueness Theorem of Moment Generating Functions, we prove rigorously that:\n$$S_n \\sim \\text{Poi}\\left(\\sum_{i=1}^n \\lambda_i\\right)$$\nThis completes the proof.',
        proofHe: '**גזירה והוכחה שלב אחר שלב:**\n\n**חלק 1: גזירת ה-MGF של משתנה פואסוני בודד $X_i \\sim \\text{Poi}(\\lambda_i)$**\nפונקציית ההסתברות (PMF) של $X_i$ היא $P(X_i = k) = \\frac{e^{-\\lambda_i} \\lambda_i^k}{k!}$ עבור $k \\ge 0$. לפי הגדרת ה-MGF:\n$$M_{X_i}(t) = \\mathbb{E}[e^{tX_i}] = \\sum_{k=0}^{\\infty} e^{tk} \\cdot \\frac{e^{-\\lambda_i} \\lambda_i^k}{k!} = e^{-\\lambda_i} \\sum_{k=0}^{\\infty} \\frac{(e^t \\lambda_i)^k}{k!}$$\n\nנשתמש בפיתוח הטור המעריכי הידוע $\\sum_{k=0}^{\\infty} \\frac{u^k}{k!} = e^u$ עבור $u = \\lambda_i e^t$:\n$$M_{X_i}(t) = e^{-\\lambda_i} \\cdot e^{\\lambda_i e^t} = e^{\\lambda_i (e^t - 1)}$$\n\n**חלק 2: MGF של סכום המשתנים הבלתי תלויים**\nכיוון שהמשתנים $X_1, \\dots, X_n$ הם בלתי תלויים, פונקציית ה-MGF של סכומם $S_n = \\sum_{i=1}^n X_i$ היא מכפלת פונקציות ה-MGF שלהם:\n$$M_{S_n}(t) = \\prod_{i=1}^n M_{X_i}(t) = \\prod_{i=1}^n e^{\\lambda_i (e^t - 1)}$$\n\nלפי חוקי חזקות, מכפלת אקספוננטים הופכת לאקספוננט של הסכום:\n$$M_{S_n}(t) = e^{\\sum_{i=1}^n \\lambda_i (e^t - 1)} = e^{\\left(\\sum_{i=1}^n \\lambda_i\\right)(e^t - 1)}$$\n\n**חלק 3: מסקנה לפי משפט היחידות**\nנגדיר $\\Lambda = \\sum_{i=1}^n \\lambda_i$. פונקציית ה-MGF של הסכום היא בדיוק $e^{\\Lambda (e^t - 1)}$, התואמת במדויק לפרופיל ה-MGF של משתנה מקרי פואסוני עם פרמטר $\\Lambda$.\n\nלפי משפט היחידות של פונקציות יוצרות מומנטים, הוכחנו באופן קשיח כי:\n$$S_n \\sim \\text{Poi}\\left(\\sum_{i=1}^n \\lambda_i\\right)$$\nובכך הושלמה ההוכחה במלואה.'
      }
    ],
    quiz: [
      {
        question: 'Let X be a random variable with MGF M_X(t) = 1 / (1 - 2t)^3. What is the expected value E[X]?',
        questionHe: 'יהי X משתנה מקרי בעל פונקציה יוצרת מומנטים M_X(t) = 1 / (1 - 2t)^3. מהי התוחלת E[X]?',
        options: [
          '3',
          '6',
          '1/8',
          '2'
        ],
        optionsHe: [
          '3',
          '6',
          '1/8',
          '2'
        ],
        correctAnswerIndex: 1,
        explanation: 'We write the MGF as M_X(t) = (1 - 2t)^-3. Taking the first derivative: M_X\'(t) = -3(1 - 2t)^-4 * (-2) = 6(1 - 2t)^-4. Evaluating at t = 0 yields E[X] = M_X\'(0) = 6(1)^-4 = 6.',
        explanationHe: 'נכתוב את הפונקציה כ-M_X(t) = (1 - 2t)^-3. נגזור אותה פעם אחת לקבלת הנגזרת הראשונה: M_X\'(t) = -3(1 - 2t)^-4 * (-2) = 6(1 - 2t)^-4. הצבת t = 0 מניבה את התוחלת: E[X] = M_X\'(0) = 6(1)^-4 = 6.'
      },
      {
        question: 'If X and Y are independent random variables with M_X(t) = e^{2(e^t - 1)} and M_Y(t) = e^{5(e^t - 1)}, what is the distribution of Z = X + Y?',
        questionHe: 'אם X ו-Y הם משתנים מקריים בלתי תלויים בעלי פונקציות יוצרות מומנטים M_X(t) = e^{2(e^t - 1)} ו-M_Y(t) = e^{5(e^t - 1)}, מהי ההתפלגות של Z = X + Y?',
        options: [
          'Binomial Bin(7, p)',
          'Poisson Poi(7)',
          'Poisson Poi(10)',
          'Normal N(7, 29)'
        ],
        optionsHe: [
          'דו-איברית Bin(7, p)',
          'פואסונית Poi(7)',
          'פואסונית Poi(10)',
          'נורמלית N(7, 29)'
        ],
        correctAnswerIndex: 1,
        explanation: 'The MGF of a Poisson variable Poi(lambda) is e^{lambda(e^t - 1)}. Thus, X ~ Poi(2) and Y ~ Poi(5). Since they are independent, the MGF of their sum Z = X + Y is M_Z(t) = M_X(t) * M_Y(t) = e^{2(e^t - 1)} * e^{5(e^t - 1)} = e^{7(e^t - 1)}. By the uniqueness theorem, Z has a Poisson distribution with parameter lambda = 7, i.e., Z ~ Poi(7).',
        explanationHe: 'ה-MGF של משתנה פואסוני Poi(lambda) הוא מהצורה e^{lambda(e^t - 1)}. מכאן שמתקיים X ~ Poi(2) וכן Y ~ Poi(5). כיוון שהם בלתי תלויים, ה-MGF של סכומם Z = X + Y הוא מכפלת ה-MGFs שלהם: M_Z(t) = M_X(t) * M_Y(t) = e^{2(e^t - 1)} * e^{5(e^t - 1)} = e^{7(e^t - 1)}. לפי משפט היחידות, Z מתפלג פואסון עם פרמטר lambda = 7, כלומר Z ~ Poi(7).'
      }
    ]
  }
,
  {
    id: 'prob-6',
    courseId: 'prob',
    chapterNumber: '6',
    title: 'Chapter 6: Limit Theorems & Convergence',
    titleHe: 'פרק 6: משפטי גבול והתכנסות משתנים מקריים',
    intro: 'This chapter covers the foundations of asymptotic probability theory: convergence in probability, convergence in distribution, and mean-square convergence. We study the Laws of Large Numbers (WLLN & SLLN) which guarantee that sample averages converge to their true expectations, the Central Limit Theorem (CLT) which describes the universal normal shape of sums of random variables, and the Delta Method for transforming asymptotic normal variables.',
    introHe: 'פרק זה עוסק ביסודות של תורת ההסתברות האסימפטוטית: התכנסות בהסתברות, התכנסות בהתפלגות והתכנסות בממוצע ריבועי. נלמד על חוקי המספרים הגדולים (החלש והחזק) המבטיחים כי ממוצעי מדגם מתכנסים לתוחלת האמיתית שלכם, משפט הגבול המרכזי (CLT) המתאר את הצורה הנורמלית האוניברסלית של סכומי משתנים מקריים, ושיטת הדלתא לצורך מציאת התפלגות אסימפטוטית של טרנספורמציות לא-ליניאריות.',
    motivation: 'In data science and statistics, we almost never have infinite data. Asymptotic theory tells us how our statistical estimators behave as the sample size $n$ grows. Without limit theorems, we could not construct confidence intervals, perform hypothesis tests, or guarantee that machine learning models will generalize to new data as we collect more samples.',
    motivationHe: 'במדע הנתונים ובסטטיסטיקה, כמעט לעולם אין לנו כמות אינסופית של נתונים. התורה האסימפטוטית מסבירה לנו כיצד האומדים הסטטיסטיים שלנו מתנהגים ככל שגודל המדגם $n$ גדל. ללא משפטי גבול, לא היינו יכולים לבנות מרווחי סמך, לבצע מבחני השערות, או להבטיח שמודלים של למידת מכונה יכללו היטב לנתונים חדשים ככל שנאסוף דגימות נוספות.',
    definitions: [
      {
        id: 'def-prob-6-1',
        title: 'Types of Convergence & Hierarchy',
        titleHe: 'סוגי התכנסות של משתנים מקריים והיררכיה',
        content: 'Let $X_1, X_2, \\dots$ be a sequence of random variables defined on the same probability space, and let $X$ be a random variable.\n\n* **Convergence in Probability**: $X_n \\xrightarrow{P} X$ if for every $\\epsilon > 0$:\n$$\\lim_{n \\to \\infty} \\mathbb{P}(|X_n - X| > \\epsilon) = 0$$\n\n* **Convergence in Distribution (Weak)**: $X_n \\xrightarrow{d} X$ if:\n$$\\lim_{n \\to \\infty} F_{X_n}(x) = F_X(x)$$\nfor all $x \\in \\mathbb{R}$ at which $F_X(x)$ is continuous.\n\n* **Convergence in Mean Square ($L_2$)**: $X_n \\xrightarrow{L_2} X$ if:\n$$\\lim_{n \\to \\infty} \\mathbb{E}[(X_n - X)^2] = 0$$\n\n* **Convergence Almost Surely (a.s.)**: $X_n \\xrightarrow{a.s.} X$ if:\n$$\\mathbb{P}(\\lim_{n \\to \\infty} X_n = X) = 1$$\n\n**The Asymptotic Hierarchy**:\n$$X_n \\xrightarrow{L_2} X \\implies X_n \\xrightarrow{P} X \\implies X_n \\xrightarrow{d} X$$\n$$X_n \\xrightarrow{a.s.} X \\implies X_n \\xrightarrow{P} X \\implies X_n \\xrightarrow{d} X$$',
        contentHe: 'תהא $X_1, X_2, \\dots$ סדרה של משתנים מקריים המוגדרים על אותו מרחב הסתברות, ויהי $X$ משתנה מקרי.\n\n* **התכנסות בהסתברות**: $X_n \\xrightarrow{P} X$ אם לכל $\\epsilon > 0$ מתקיים:\n$$\\lim_{n \\to \\infty} \\mathbb{P}(|X_n - X| > \\epsilon) = 0$$\n\n* **התכנסות בהתפלגות (התכנסות חלשה)**: $X_n \\xrightarrow{d} X$ אם מתקיים:\n$$\\lim_{n \\to \\infty} F_{X_n}(x) = F_X(x)$$\nלכל נקודה $x \\in \\mathbb{R}$ שבה פונקציית ההתפלגות $F_X(x)$ רציפה.\n\n* **התכנסות בממוצע ריבועי ($L_2$)**: $X_n \\xrightarrow{L_2} X$ אם מתקיים:\n$$\\lim_{n \\to \\infty} \\mathbb{E}[(X_n - X)^2] = 0$$\n\n* **התכנסות כמעט תמיד (כמעט בוודאות)**: $X_n \\xrightarrow{a.s.} X$ אם מתקיים:\n$$\\mathbb{P}(\\lim_{n \\to \\infty} X_n = X) = 1$$\n\n**היררכיית ההתכנסויות**:\n$$X_n \\xrightarrow{L_2} X \\implies X_n \\xrightarrow{P} X \\implies X_n \\xrightarrow{d} X$$\n$$X_n \\xrightarrow{a.s.} X \\implies X_n \\xrightarrow{P} X \\implies X_n \\xrightarrow{d} X$$',
        simplifiedLogic: 'L2 convergence is the strongest form in standard practice, followed by Almost Sure and Probability. Convergence in Distribution is the weakest because it only requires the CDF shape to match, not the actual values of the variables themselves.',
        simplifiedLogicHe: 'התכנסות בממוצע ריבועי ($L_2$) והתכנסות כמעט תמיד הן צורות חזקות מאוד של התכנסות, הגוררות התכנסות בהסתברות. התכנסות בהתפלגות היא החלשה ביותר מכיוון שהיא דורשת רק שצורת ה-CDF תתכנס, ללא קשר לערכים המשותפים של המשתנים עצמם (המשתנים אפילו לא חייבים להיות מוגדרים על אותו מרחב מדגם).',
        toolboxConnection: 'Statistical models use convergence in probability to prove that estimators converge to the true population parameters (consistency).',
        toolboxConnectionHe: 'מודלים סטטיסטיים משתמשים בהתכנסות בהסתברות כדי להוכיח שאומדים מתכנסים לפרמטרים האמיתיים של האוכלוסייה (תכונת העקביות).',
        keyTakeaway: 'L2 and Almost Sure imply Probability, which in turn implies Distribution.',
        keyTakeawayHe: 'התכנסות ב-$L_2$ וכמעט תמיד גוררות התכנסות בהסתברות, אשר גוררת התכנסות בהתפלגות.'
      },
      {
        id: 'def-prob-6-2',
        title: 'Laws of Large Numbers (WLLN & SLLN)',
        titleHe: 'חוקי המספרים הגדולים (החלש והחזק)',
        content: 'Let $X_1, X_2, \\dots$ be a sequence of independent and identically distributed (i.i.d.) random variables with finite expectation $\\mathbb{E}[X_i] = \\mu$. Let $\\bar{X}_n = \\frac{1}{n} \\sum_{i=1}^n X_i$ be the sample average.\n\n* **Weak Law of Large Numbers (WLLN)**: The sample average converges in probability to $\mu$:\n$$\\bar{X}_n \\xrightarrow{P} \\mu \\quad \\text{as } n \\to \\infty$$\nMeaning, for any $\\epsilon > 0$:\n$$\\lim_{n \\to \\infty} \\mathbb{P}(|\\bar{X}_n - \\mu| > \\epsilon) = 0$$\n\n* **Strong Law of Large Numbers (SLLN)**: The sample average converges almost surely to $\mu$:\n$$\\bar{X}_n \\xrightarrow{a.s.} \\mu \\quad \\text{as } n \\to \\infty$$\nMeaning:\n$$\\mathbb{P}\\left(\\lim_{n \\to \\infty} \\bar{X}_n = \\mu\\right) = 1$$',
        contentHe: 'יהיו $X_1, X_2, \\dots$ סדרה של משתנים מקריים בלתי תלויים ובעלי התפלגות זהה (i.i.d.) עם תוחלת סופית $\\mathbb{E}[X_i] = \\mu$. נסמן את ממוצע המדגם ב-$\\bar{X}_n = \\frac{1}{n} \\sum_{i=1}^n X_i$.\n\n* **החוק החלש של המספרים הגדולים (WLLN)**: ממוצע המדגם מתכנס בהסתברות לתוחלת $\\mu$:\n$$\\bar{X}_n \\xrightarrow{P} \\mu \\quad \\text{כאשר } n \\to \\infty$$\nכלומר, לכל $\\epsilon > 0$ מתקיים:\n$$\\lim_{n \\to \\infty} \\mathbb{P}(|\\bar{X}_n - \\mu| > \\epsilon) = 0$$\n\n* **החוק החזק של המספרים הגדולים (SLLN)**: ממוצע המדגם מתכנס כמעט תמיד לתוחלת $\\mu$:\n$$\\bar{X}_n \\xrightarrow{a.s.} \\mu \\quad \\text{כאשר } n \\to \\infty$$\nכלומר:\n$$\\mathbb{P}\\left(\\lim_{n \\to \\infty} \\bar{X}_n = \\mu\\right) = 1$$',
        simplifiedLogic: 'WLLN states that for a huge sample, it is highly unlikely for the average to differ from the true mean by more than a tiny epsilon. SLLN is a stronger topological guarantee: the path of the sample averages will converge to the true mean with probability 1.',
        simplifiedLogicHe: 'החוק החלש אומר שעבור מדגם ענק, ההסתברות שממוצע המדגם יהיה רחוק מהתוחלת האמיתית שואפת לאפס. החוק החזק נותן ערבות חזקה יותר: כמעט כל מסלול בודד של ממוצעי מדגם יתכנס לתוחלת האמיתית בסופו של דבר.',
        toolboxConnection: 'Monte Carlo simulations rely on the LLN to approximate complex integrals by averaging random samples.',
        toolboxConnectionHe: 'סימולציות מונטה קרלו מסתמכות על חוק המספרים הגדולים כדי לקרב אינטגרלים מורכבים על ידי מיצוע של דגימות אקראיות.',
        keyTakeaway: 'The average of many i.i.d. trials converges to the expected value.',
        keyTakeawayHe: 'הממוצע של ניסויי i.i.d. רבים מתכנס לתוחלת התיאורטית.'
      },
      {
        id: 'def-prob-6-3',
        title: 'The Central Limit Theorem (CLT)',
        titleHe: 'משפט הגבול המרכזי (CLT)',
        content: 'Let $X_1, X_2, \\dots$ be a sequence of i.i.d. random variables with finite mean $\\mathbb{E}[X_i] = \\mu$ and finite variance $\\text{Var}(X_i) = \\sigma^2 > 0$.\nLet $S_n = \\sum_{i=1}^n X_i$ be the sum, and $\\bar{X}_n = \\frac{1}{n} S_n$ be the sample average.\n\nAs $n \\to \\infty$, the standardized average converges in distribution to a standard normal variable:\n$$\\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} = \\frac{S_n - n\\mu}{\\sigma \\sqrt{n}} \\xrightarrow{d} Z \\sim N(0, 1)$$\n\nConsequently, for any $z \\in \\mathbb{R}$:\n$$\\lim_{n \\to \\infty} \\mathbb{P}\\left(\\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} \\le z\\right) = \\Phi(z)$$\nwhere $\\Phi(z)$ is the standard normal cumulative distribution function (CDF).',
        contentHe: 'יהיו $X_1, X_2, \\dots$ סדרה של משתנים מקריים בלתי תלויים ובעלי התפלגות זהה (i.i.d.) עם תוחלת סופית $\\mathbb{E}[X_i] = \\mu$ ושונות סופית וחיובית $\\text{Var}(X_i) = \\sigma^2 > 0$.\nנסמן ב-$S_n = \\sum_{i=1}^n X_i$ את סכום המשתנים, וב-$\\bar{X}_n = \\frac{1}{n} S_n$ את ממוצע המדגם.\n\nכאשר $n \\to \\infty$, הממוצע הממוקנן והמתוקנן מתכנס בהתפלגות למשתנה נורמלי סטנדרטי:\n$$\\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} = \\frac{S_n - n\\mu}{\\sigma \\sqrt{n}} \\xrightarrow{d} Z \\sim N(0, 1)$$\n\nכתוצאה מכך, לכל $z \\in \\mathbb{R}$ מתקיים:\n$$\\lim_{n \\to \\infty} \\mathbb{P}\\left(\\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} \\le z\\right) = \\Phi(z)$$\nכאשר $\\Phi(z)$ היא פונקציית ההתפלגות המצטברת (CDF) של משתנה נורמלי סטנדרטי.',
        simplifiedLogic: 'No matter what distribution the original variables have (as long as they have finite variance), the sum or average of a large number of them will look like a normal bell curve. This is why the normal distribution is so ubiquitous in nature.',
        simplifiedLogicHe: 'לא משנה מהי ההתפלגות המקורית של המשתנים (כל עוד יש להם שונות סופית), הסכום או הממוצע של מספר רב של משתנים כאלו תמיד יראה כמו עקומת פעמון נורמלית. זו הסיבה שההתפלגות הנורמלית נפוצה כל כך בטבע ובמדע.',
        toolboxConnection: 'The CLT allows engineers and scientists to compute probabilities for averages of measurements (e.g. noise levels, sample surveys) without knowing the underlying distribution.',
        toolboxConnectionHe: 'משפט הגבול המרכזי מאפשר למהנדסים ומדענים לחשב הסתברויות עבור ממוצעי מדידות (למשל רמות רעש, סקרי מדגם) מבלי לדעת את ההתפלגות המקורית של האוכלוסייה.',
        keyTakeaway: 'Sums of many i.i.d. variables are approximately normally distributed.',
        keyTakeawayHe: 'סכומים של משתני i.i.d. רבים מתפלגים בקירוב נורמלית.'
      },
      {
        id: 'def-prob-6-4',
        title: 'The Delta Method',
        titleHe: 'שיטת הדלתא',
        content: 'The **Delta Method** is a result for finding the asymptotic distribution of a function of a sequence of asymptotically normal random variables.\n\nLet $Y_1, Y_2, \\dots$ be a sequence of random variables such that:\n$$\\sqrt{n}(Y_n - \\theta) \\xrightarrow{d} N(0, \\sigma^2)$$\n\nLet $g: \\mathbb{R} \\to \\mathbb{R}$ be a function that is continuously differentiable at $\\theta$, with $g\'(\\theta) \\ne 0$.\nThen:\n$$\\sqrt{n}(g(Y_n) - g(\\theta)) \\xrightarrow{d} N(0, \\sigma^2 [g\'(\\theta)]^2)$$\n\nIn other words, $g(Y_n)$ is asymptotically normal:\n$$g(Y_n) \\approx N\\left(g(\\theta), \\frac{\\sigma^2 [g\'(\\theta)]^2}{n}\\right)$$',
        contentHe: '**שיטת הדלתא** היא כלי מתמטי למציאת ההתפלגות האסימפטוטית של פונקציה של סדרת משתנים מקריים המתפלגים אסימפטוטית נורמלית.\n\nתהא $Y_1, Y_2, \\dots$ סדרת משתנים מקריים שעבורה מתקיים:\n$$\\sqrt{n}(Y_n - \\theta) \\xrightarrow{d} N(0, \\sigma^2)$$\n\nתהא $g: \\mathbb{R} \\to \\mathbb{R}$ פונקציה רציפה וגזירה בנקודה $\\theta$, כך ש-$g\'(\\theta) \\ne 0$.\n\nאזי מתקיים:\n$$\\sqrt{n}(g(Y_n) - g(\\theta)) \\xrightarrow{d} N(0, \\sigma^2 [g\'(\\theta)]^2)$$\n\nבמילים אחרות, המשתנה המותמר $g(Y_n)$ מתפלג אסימפטוטית נורמלית:\n$$g(Y_n) \\approx N\\left(g(\\theta), \\frac{\\sigma^2 [g\'(\\theta)]^2}{n}\\right)$$',
        simplifiedLogic: 'The Delta method uses a first-order Taylor expansion to approximate a non-linear function $g(Y_n)$ around $\\theta$. The variance of the transformation is scaled by the squared slope of the function at that point.',
        simplifiedLogicHe: 'שיטת הדלתא משתמשת בפיתוח טיילור מסדר ראשון כדי לקרב פונקציה לא-ליניארית $g(Y_n)$ סביב הנקודה $\\theta$. השונות של המשתנה המותמר מוגדלת או מוקטנת בהתאם לריבוע השיפוע של הפונקציה באותה נקודה.',
        toolboxConnection: 'Used to derive the standard errors and confidence intervals for non-linear parameters, such as odds ratios, logarithms of estimators, or ratios of variances.',
        toolboxConnectionHe: 'משמשת לגזירת שגיאות תקן ומרווחי סמך עבור פרמטרים לא-ליניאריים, כגון יחסי סיכויים, לוגריתמים של אומדים, או יחסי שונויות.',
        keyTakeaway: 'Smooth transformations of asymptotically normal estimators remain asymptotically normal.',
        keyTakeawayHe: 'טרנספורמציות חלקות של אומדים נורמליים אסימפטוטית נותרות נורמליות אסימפטוטית.'
      },
      {
        id: 'prac-prob-6-1',
        title: 'Practice 1: Convergence in Probability of the Maximum of Uniform Variables',
        titleHe: 'תרגול 1: התכנסות בהסתברות של מקסימום משתנים אחידים',
        isPractice: true,
        content: 'Let $X_1, X_2, \\dots, X_n$ be independent and identically distributed random variables with $X_i \\sim U(0, \\theta)$ for some unknown parameter $\\theta > 0$. Let $X_{(n)} = \\max(X_1, \\dots, X_n)$ be the sample maximum.\n\n1. Derive the CDF of $X_{(n)}$.\n2. Show that $X_{(n)} \\xrightarrow{P} \\theta$ as $n \\to \\infty$.',
        contentHe: 'יהיו $X_1, X_2, \\dots, X_n$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה עם $X_i \\sim U(0, \\theta)$ עבור פרמטר לא ידוע $\\theta > 0$. נסמן ב-$X_{(n)} = \\max(X_1, \\dots, X_n)$ את מקסימום המדגם.\n\n1. פתחו את פונקציית ההתפלגות המצטברת (CDF) של $X_{(n)}$.\n2. הוכיחו כי $X_{(n)} \\xrightarrow{P} \\theta$ כאשר $n \\to \\infty$.',
        simplifiedLogic: 'The sample maximum $X_{(n)}$ will always be smaller than or equal to the upper bound $\\theta$. As we draw more samples ($n \\to \\infty$), the probability of landing extremely close to $\\theta$ approaches 1, meaning the maximum \"squeezes\" towards the parameter.',
        simplifiedLogicHe: 'מקסימום המדגם $X_{(n)}$ תמיד יהיה קטן או שווה לחסם העליון $\\theta$. ככל שאנו דוגמים יותר ערכים ($n \\to \\infty$), ההסתברות שמישהו מהם יפול קרוב מאוד לחסם שואפת ל-1, ולכן המקסימום "נדחף" לכיוון הפרמטר.',
        toolboxConnection: 'The sample maximum is the standard estimator for the boundary of a uniform process, such as the maximum serial number of tanks in wartime tracking.',
        toolboxConnectionHe: 'מקסימום המדגם הוא האומד הטבעי לחסם העליון של תהליך אחיד, למשל בבעיית מספרי הסדרה של טנקים לצורך אומדן ייצור צבאי.',
        keyTakeaway: 'The maximum of i.i.d. $U(0, \\theta)$ converges in probability to $\\theta$.',
        keyTakeawayHe: 'מקסימום המדגם של משתני $U(0, \\theta)$ מתכנס בהסתברות ל-$\\theta$.',
        proof: '**Step-by-Step Proof:**\n\n**Part 1: Deriving the CDF**\nThe PDF of an individual variable $X_i \\sim U(0, \\theta)$ is:\n$$F_X(x) = \\mathbb{P}(X_i \\le x) = \\frac{x}{\\theta} \\quad \\text{for } 0 \\le x \\le \\theta$$\n\nFor the maximum to be less than or equal to $x$, all individual variables must be less than or equal to $x$. Since they are independent:\n$$F_{X_{(n)}}(x) = \\mathbb{P}(X_{(n)} \\le x) = \\mathbb{P}(\\max(X_1, \\dots, X_n) \\le x) = \\mathbb{P}(X_1 \\le x, \\dots, X_n \\le x)$$\n$$F_{X_{(n)}}(x) = \\prod_{i=1}^n \\mathbb{P}(X_i \\le x) = [F_X(x)]^n = \\left(\\frac{x}{\\theta}\\right)^n \\quad \\text{for } 0 \\le x \\le \\theta$$\n\n**Part 2: Proving Convergence in Probability**\nTo show that $X_{(n)} \\xrightarrow{P} \\theta$, we must prove that for any $\\epsilon > 0$:\n$$\\lim_{n \\to \\infty} \\mathbb{P}(|X_{(n)} - \\theta| > \\epsilon) = 0$$\n\nSince $X_{(n)} \\le \\theta$ almost surely, $|X_{(n)} - \\theta| = \\theta - X_{(n)}$. Thus:\n$$\\mathbb{P}(|X_{(n)} - \\theta| > \\epsilon) = \\mathbb{P}(\\theta - X_{(n)} > \\epsilon) = \\mathbb{P}(X_{(n)} < \\theta - \\epsilon)$$\n\nUsing the CDF derived in Part 1 (for $0 < \\epsilon < \\theta$):\n$$\\mathbb{P}(X_{(n)} < \\theta - \\epsilon) = F_{X_{(n)}}(\\theta - \\epsilon) = \\left(\\frac{\\theta - \\epsilon}{\\theta}\\right)^n = \\left(1 - \\frac{\\epsilon}{\\theta}\\right)^n$$\n\nSince $\\theta > 0$ and $\\epsilon > 0$, we have $0 < 1 - \\frac{\\epsilon}{\\theta} < 1$. Taking the limit as $n \\to \\infty$:\n$$\\lim_{n \\to \\infty} \\mathbb{P}(|X_{(n)} - \\theta| > \\epsilon) = \\lim_{n \\to \\infty} \\left(1 - \\frac{\\epsilon}{\\theta}\\right)^n = 0$$\nFor $\\epsilon \\ge \\theta$, the probability is exactly 0. This completes the rigorous proof that **$X_{(n)} \\xrightarrow{P} \\theta$**.'
      },
      {
        id: 'prac-prob-6-2',
        title: 'Practice 2: Convergence in Distribution of Rescaled Maximum to Exponential',
        titleHe: 'תרגול 2: התכנסות בהתפלגות של מקסימום מנורמל להתפלגות מעריכית',
        isPractice: true,
        content: 'Let $X_1, X_2, \\dots, X_n \\sim U(0, 1)$ be i.i.d. random variables, and let $X_{(n)} = \\max(X_1, \\dots, X_n)$. Define the rescaled sequence $Y_n = n(1 - X_{(n)})$.\n\n1. Find the CDF of $Y_n$ for a fixed $n$.\n2. Compute the limit of the CDF as $n \\to \\infty$ and identify the limiting distribution.',
        contentHe: 'יהיו $X_1, X_2, \\dots, X_n \\sim U(0, 1)$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה, ויהי $X_{(n)} = \\max(X_1, \\dots, X_n)$. נגדיר את הסדרה המנורמלת $Y_n = n(1 - X_{(n)})$.\n\n1. מצאו את פונקציית ההתפלגות המצטברת (CDF) של $Y_n$ עבור $n$ קבוע.\n2. חשבו את גבול ה-CDF כאשר $n \\to \\infty$ וזהו את התפלגות הגבול.',
        simplifiedLogic: 'The variable $1 - X_{(n)}$ is the distance between the maximum and the upper bound 1, which shrinks at rate $1/n$. By scaling this distance by $n$, we keep the variable from collapsing to zero, revealing an Exponential limiting shape.',
        simplifiedLogicHe: 'המשתנה $1 - X_{(n)}$ מייצג את המרחק בין המקסימום לגבול העליון 1, אשר מתכווץ בקצב של $1/n$. על ידי הכפלת המרחק הזה ב-$n$, אנו מונעים מהמשתנה לקרוס לאפס ומקבלים התפלגות גבול מעריכית יציבה.',
        toolboxConnection: 'This rescaling is a core component of Extreme Value Theory (EVT), which is used to model rare disaster events like floods, stock market crashes, or network failures.',
        toolboxConnectionHe: 'פעולה זו היא מרכיב מרכזי בתורת הערכים הקיצוניים (EVT), המשמשת למידול אירועי אסון נדירים כגון שיטפונות, קריסות בורסה או כשלים ברשת.',
        keyTakeaway: 'The rescaled distance $n(1 - X_{(n)})$ converges in distribution to $Exp(1)$.',
        keyTakeawayHe: 'המרחק המנורמל $n(1 - X_{(n)})$ מתכנס בהתפלגות להתפלגות מעריכית $Exp(1)$.',
        proof: '**Step-by-Step Derivation:**\n\n**Part 1: Finding the CDF of $Y_n$**\nLet\'s write the CDF of $Y_n$ for $y \\ge 0$:\n$$F_{Y_n}(y) = \\mathbb{P}(Y_n \\le y) = \\mathbb{P}(n(1 - X_{(n)}) \\le y) = \\mathbb{P}\\left(1 - X_{(n)} \\le \\frac{y}{n}\\right)$$\n$$F_{Y_n}(y) = \\mathbb{P}\\left(X_{(n)} \\ge 1 - \\frac{y}{n}\\right) = 1 - \\mathbb{P}\\left(X_{(n)} < 1 - \\frac{y}{n}\\right) = 1 - F_{X_{(n)}}\\left(1 - \\frac{y}{n}\\right)$$\n\nUsing the CDF of $X_{(n)}$ for $U(0, 1)$ variables: $F_{X_{(n)}}(x) = x^n$ for $0 \\le x \\le 1$. Therefore, for $0 \\le y \\le n$:\n$$F_{Y_n}(y) = 1 - \\left(1 - \\frac{y}{n}\\right)^n$$\n\n**Part 2: Computing the Limit as $n \\to \\infty$**\nWe evaluate the limit of the CDF for any fixed $y \\ge 0$:\n$$\\lim_{n \\to \\infty} F_{Y_n}(y) = \\lim_{n \\to \\infty} \\left[ 1 - \\left(1 - \\frac{y}{n}\\right)^n \\right]$$\n\nRecall the standard calculus limit:\n$$\\lim_{n \\to \\infty} \\left(1 - \\frac{y}{n}\\right)^n = e^{-y}$$\n\nTherefore, we have:\n$$\\lim_{n \\to \\infty} F_{Y_n}(y) = 1 - e^{-y} \\quad \\text{for } y \\ge 0$$\n\nThis limit $F_Y(y) = 1 - e^{-y}$ for $y \\ge 0$ is precisely the CDF of the **Exponential distribution with parameter $\\lambda = 1$**. Thus, by definition, **$Y_n \\xrightarrow{d} \\text{Exp}(1)$**.'
      },
      {
        id: 'prac-prob-6-3',
        title: 'Practice 3: Central Limit Theorem Application to Lifetimes of Components',
        titleHe: 'תרגול 3: יישום משפט הגבול המרכזי על אורך חיים של רכיבים',
        isPractice: true,
        content: 'A facility uses 100 independent lightbulbs, where the lifetime of each bulb is exponentially distributed with a mean of 10 hours: $X_i \\sim \\text{Exp}(\\lambda = 0.1)$.\n\n1. Identify the expectation and variance of an individual bulb\'s lifetime.\n2. Use the Central Limit Theorem to calculate the approximate probability that the sum of the lifetimes of the 100 bulbs exceeds 1050 hours.',
        contentHe: 'מפעל משתמש ב-100 נורות תאורה עצמאיות, כאשר אורך החיים של כל נורה מתפלג מעריכית עם ממוצע של 10 שעות: $X_i \\sim \\text{Exp}(\\lambda = 0.1)$.\n\n1. הגדירו את התוחלת והשונות של אורך החיים של נורה בודדת.\n2. השתמשו במשפט הגבול המרכזי כדי לחשב את ההסתברות המקורבת שסכום אורכי החיים של 100 הנורות יעלה על 1050 שעות.',
        simplifiedLogic: 'Instead of computing the exact distribution of the sum (which is a complex Erlang distribution), the CLT lets us approximate the sum as a simple Normal distribution because the number of independent variables ($n=100$) is large.',
        simplifiedLogicHe: 'במקום לחשב את ההתפלגות המדויקת של הסכום (שהיא התפלגות ארלנג מורכבת), משפט הגבול המרכזי מאפשר לנו לקרב את הסכום באמצעות התפלגות נורמלית פשוטה כיוון שמספר הרכיבים הבלתי תלויים ($n=100$) הוא גדול.',
        toolboxConnection: 'Operations research and reliability engineering use CLT approximations to schedule hardware replacement cycles and manage inventory buffer sizes.',
        toolboxConnectionHe: 'חקר ביצועים והנדסת אמינות משתמשים בקירובי CLT כדי לתזמן מחזורי החלפת חומרה ולנהל מלאי רכיבים רזרביים.',
        keyTakeaway: 'CLT converts complex sums of independent variables into straightforward normal calculations.',
        keyTakeawayHe: 'משפט הגבול המרכזי הופך סכומים מורכבים של משתנים עצמאיים לחישובים נורמליים פשוטים.',
        proof: '**Step-by-Step Solution:**\n\n**Part 1: Expectation and Variance of a Bulb**\nFor an exponentially distributed random variable $X_i \\sim \\text{Exp}(\\lambda)$ with rate $\\lambda = 0.1$:\n* **Expectation**:\n$$\\mu = \\mathbb{E}[X_i] = \\frac{1}{\\lambda} = \\frac{1}{0.1} = 10 \\text{ hours}$$\n* **Variance**:\n$$\\sigma^2 = \\text{Var}(X_i) = \\frac{1}{\\lambda^2} = \\frac{1}{0.01} = 100$$\n\n**Part 2: Applying the CLT to the Sum**\nLet $S_{100} = \\sum_{i=1}^{100} X_i$ be the sum of the lifetimes. The sample size is $n = 100$. By the Central Limit Theorem, the sum $S_n$ is approximately normally distributed:\n$$S_n \\approx N(n\\mu, n\\sigma^2) = N(100 \\cdot 10, 100 \\cdot 100) = N(1000, 10000)$$\n\nThe expectation of the sum is $\\mathbb{E}[S_{100}] = 1000$ and the standard deviation is:\n$$\\text{SD}(S_{100}) = \\sqrt{10000} = 100$$\n\nWe wish to approximate the probability $\\mathbb{P}(S_{100} > 1050)$:\n$$\\mathbb{P}(S_{100} > 1050) = \\mathbb{P}\\left( \\frac{S_{100} - \\mathbb{E}[S_{100}]}{\\text{SD}(S_{100})} > \\frac{1050 - 1000}{100} \\right)$$\n$$\\mathbb{P}(S_{100} > 1050) \\approx \\mathbb{P}(Z > 0.5) = 1 - \\Phi(0.5)$$\n\nUsing standard normal tables, we find $\\Phi(0.5) \\approx 0.6915$. Therefore:\n$$\\mathbb{P}(S_{100} > 1050) \\approx 1 - 0.6915 = 0.3085 \\quad (30.85\\%)$$\n\nThis gives a highly accurate approximation of the replacement probability.'
      },
      {
        id: 'prac-prob-6-4',
        title: 'Practice 4: Asymptotic Quantiles via the Delta Method',
        titleHe: 'תרגול 4: חישוב קוונטילים אסימפטוטיים באמצעות שיטת הדלתא',
        isPractice: true,
        content: 'Let $X_1, \\dots, X_n \\sim N(1, 4)$ be i.i.d. random variables. Define the sample mean $\\bar{X}_n = \\frac{1}{n} \\sum_{i=1}^n X_i$, and the log-normal transformation $Y_n = e^{\\bar{X}_n}$.\n\n1. Find the asymptotic distribution of $\\sqrt{n}(Y_n - e)$ using the Delta Method.\n2. For $n = 16$, find the approximate $0.75$-quantile of $Y_n$.',
        contentHe: 'יהיו $X_1, \\dots, X_n \\sim N(1, 4)$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה. נסמן את ממוצע המדגם ב-$\\bar{X}_n = \\frac{1}{n} \\sum_{i=1}^n X_i$, ואת הטרנספורמציה $Y_n = e^{\\bar{X}_n}$.\n\n1. מצאו את ההתפלגות האסימפטוטית של $\\sqrt{n}(Y_n - e)$ באמצעות שיטת הדלתא.\n2. עבור $n = 16$, מצאו את הקוונטיל (אחוזון) ה-$0.75$ המקורב של $Y_n$.',
        simplifiedLogic: 'Since the sample average is normal, its exponent $e^{\\bar{X}_n}$ has a non-linear shape. The Delta method projects this non-linear function back into the normal space locally, giving a standard bell curve centered at the transformed mean $e$ with a variance scaled by the derivative $(e^{\\mu})^2$.',
        simplifiedLogicHe: 'מאחר שממוצע המדגם הוא נורמלי, המעריך שלו $e^{\\bar{X}_n}$ מקבל צורה לא-ליניארית. שיטת הדלתא מציגה את הפונקציה הלא-ליניארית הזו כקירוב ליניארי מקומי, מה שמאפשר לקבל עקומת פעמון נורמלית המתורגמת לתוחלת המותמרת $e$ עם שונות המוכפלת בריבוע הנגזרת $(e^{\\mu})^2$.',
        toolboxConnection: 'The Delta Method is critical in finance and statistics to evaluate the variance of exponential growths and rates of return.',
        toolboxConnectionHe: 'שיטת הדלתא קריטית במימון ובסטטיסטיקה כדי להעריך את השונות של צמיחה מעריכית ושיעורי תשואה.',
        keyTakeaway: 'The Delta Method allows us to calculate quantiles for complex non-linear estimators.',
        keyTakeawayHe: 'שיטת הדלתא מאפשרת לנו לחשב אחוזונים (קוונטילים) עבור אומדים לא-ליניאריים מורכבים.',
        proof: '**Step-by-Step Proof and Calculation:**\n\n**Part 1: Finding Asymptotic Distribution**\nThe individual variables have mean $\\mu = 1$ and variance $\\sigma^2 = 4$. By the CLT, the sample average is exactly (and asymptotically) normal:\n$$\\sqrt{n}(\\bar{X}_n - 1) \\sim N(0, 4)$$\n\nWe define $g(x) = e^x$. The derivative is $g\'(x) = e^x$. At the expected value $\\mu = 1$, we have $g\'(1) = e^1 = e \\ne 0$. By the Delta Method:\n$$\\sqrt{n}(g(\\bar{X}_n) - g(1)) \\xrightarrow{d} N(0, \\sigma^2 [g\'(1)]^2)$$\n$$\\sqrt{n}(e^{\\bar{X}_n} - e) \\xrightarrow{d} N(0, 4 \\cdot e^2)$$\n\nThus, the asymptotic variance of $Y_n = e^{\\bar{X}_n}$ is **$\\frac{4e^2}{n}$**.\n\n**Part 2: Quantile Calculation for $n = 16$**\nFor $n = 16$, the variance of $Y_n$ is $\\frac{4e^2}{16} = \\frac{e^2}{4}$, so the standard deviation is:\n$$\\text{SD}(Y_n) = \\sqrt{\\frac{e^2}{4}} = \\frac{e}{2}$$\n\nTherefore, we approximate the distribution of $Y_{16}$ as:\n$$Y_{16} \\approx N\\left(e, \\left(\\frac{e}{2}\\right)^2\\right)$$\n\nLet $y_{0.75}$ be the $0.75$-quantile, meaning $\\mathbb{P}(Y_{16} \\le y_{0.75}) = 0.75$. Standardizing:\n$$\\mathbb{P}\\left(\\frac{Y_{16} - e}{e/2} \\le \\frac{y_{0.75} - e}{e/2}\\right) = 0.75$$\n$$\\Phi\\left(\\frac{y_{0.75} - e}{e/2}\\right) \\approx 0.75$$\n\nFrom the standard normal table, the $0.75$-quantile of a standard normal distribution is $z_{0.75} \\approx 0.674$. Thus:\n$$\\frac{y_{0.75} - e}{e/2} \\approx 0.674 \\implies y_{0.75} \\approx e + 0.674 \\cdot \\frac{e}{2} = e(1 + 0.337) = 1.337e$$\n\nUsing $e \\approx 2.71828$, we get:\n$$y_{0.75} \\approx 1.337 \\cdot 2.71828 \\approx 3.634$$\nThis completes the step-by-step quantile calculation.'
      },
      {
        id: 'prac-prob-6-5',
        title: 'Practice 5: Central Limit Theorem for Product Variables',
        titleHe: 'תרגול 5: משפט הגבול המרכזי עבור מכפלות משתנים מקריים',
        isPractice: true,
        content: 'Let $X_1, X_2, \\dots, X_n$ be i.i.d. random variables with mean $\\mathbb{E}[X_i] = \\mu_X$ and variance $\\text{Var}(X_i) = \\sigma_X^2$. Let $Y_1, Y_2, \\dots, Y_n$ be i.i.d. Rademacher variables independent of the $X_i$, where $\\mathbb{P}(Y_i = 1) = \\mathbb{P}(Y_i = -1) = 0.5$. Define the sum of products $S_n = \\sum_{i=1}^n X_i Y_i$.\n\n1. Find the mean and variance of $W_i = X_i Y_i$.\n2. Apply the Central Limit Theorem to find the asymptotic distribution of $S_n$.',
        contentHe: 'יהיו $X_1, X_2, \\dots, X_n$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה עם תוחלת $\\mathbb{E}[X_i] = \\mu_X$ ושונות $\\text{Var}(X_i) = \\sigma_X^2$. יהיו $Y_1, Y_2, \\dots, Y_n$ משתנים מקריים בעלי התפלגות רדמאכר (Rademacher) הבלתי תלויים ב-$X_i$, כאשר $\\mathbb{P}(Y_i = 1) = \\mathbb{P}(Y_i = -1) = 0.5$. נגדיר את סכום המכפלות $S_n = \\sum_{i=1}^n X_i Y_i$.\n\n1. מצאו את התוחלת והשונות של המכפלה הבודדת $W_i = X_i Y_i$.\n2. השתמשו במשפט הגבול המרכזי כדי למצוא את ההתפלגות האסימפטוטית של $S_n$.',
        simplifiedLogic: 'Multiplying by a Rademacher variable randomizes the sign of $X_i$ to be positive or negative with equal chance. This centers the mean of the products at exactly 0. The variance is preserved as the sum of squared components $\\sigma_X^2 + \\mu_X^2$, allowing us to use CLT standardizations.',
        simplifiedLogicHe: 'הכפלה במשתנה רדמאכר משנה באופן אקראי את הסימן של $X_i$ לחיובי או שלילי בהסתברות שווה. הדבר ממרכז את תוחלת המכפלות בדיוק ב-0. השונות נשמרת כסכום הרכיבים הריבועיים $\\sigma_X^2 + \\mu_X^2$, מה שמאפשר להשתמש בתקנון CLT.',
        toolboxConnection: 'Product variables of this form are common in digital communication systems (like BPSK modulation in Wi-Fi and 5G) where message bits are randomized by noise profiles.',
        toolboxConnectionHe: 'משתני מכפלה מסוג זה נפוצים במערכות תקשורת ספרתית (כמו אפנון BPSK ב-Wi-Fi ו-5G) שבהן ביטים של מידע מוכפלים ברעש אקראי.',
        keyTakeaway: 'CLT applies to products of independent variables by first evaluating their combined mean and variance.',
        keyTakeawayHe: 'משפט הגבול המרכזי חל על מכפלות של משתנים בלתי תלויים על ידי חישוב מוקדם של התוחלת והשונות המשולבת שלהם.',
        proof: '**Step-by-Step Derivation:**\n\n**Part 1: Mean and Variance of $W_i = X_i Y_i$**\n* **Mean**:\nSince $X_i$ and $Y_i$ are independent:\n$$\\mathbb{E}[W_i] = \\mathbb{E}[X_i Y_i] = \\mathbb{E}[X_i] \\cdot \\mathbb{E}[Y_i]$$\n\nFor a Rademacher variable $Y_i$:\n$$\\mathbb{E}[Y_i] = 1 \\cdot 0.5 + (-1) \\cdot 0.5 = 0$$\nTherefore, the expectation of the product is:\n$$\\mathbb{E}[W_i] = \\mu_X \\cdot 0 = 0$$\n\n* **Variance**:\nSince the expectation is 0, the variance is equal to the second moment:\n$$\\text{Var}(W_i) = \\mathbb{E}[W_i^2] - (\\mathbb{E}[W_i])^2 = \\mathbb{E}[X_i^2 Y_i^2] - 0$$\nUsing the independence of $X_i^2$ and $Y_i^2$:\n$$\\text{Var}(W_i) = \\mathbb{E}[X_i^2] \\cdot \\mathbb{E}[Y_i^2]$$\n\nRecall that:\n$$\\mathbb{E}[X_i^2] = \\text{Var}(X_i) + (\\mathbb{E}[X_i])^2 = \\sigma_X^2 + \\mu_X^2$$\n$$\\mathbb{E}[Y_i^2] = (1)^2 \\cdot 0.5 + (-1)^2 \\cdot 0.5 = 0.5 + 0.5 = 1$$\nTherefore, the variance of the product is:\n$$\\text{Var}(W_i) = (\\sigma_X^2 + \\mu_X^2) \\cdot 1 = \\sigma_X^2 + \\mu_X^2$$\n\n**Part 2: Applying the CLT to $S_n$**\nThe variables $W_i = X_i Y_i$ are i.i.d. because the pairs $(X_i, Y_i)$ are i.i.d. Their mean is $\\mu_W = 0$ and their variance is $\\sigma_W^2 = \\sigma_X^2 + \\mu_X^2 > 0$. \n\nBy the Central Limit Theorem, the sum $S_n = \\sum_{i=1}^n W_i$ standardized converges in distribution to standard normal:\n$$\\frac{S_n - n\\mu_W}{\\sigma_W \\sqrt{n}} = \\frac{S_n - 0}{\\sqrt{n(\\sigma_X^2 + \\mu_X^2)}} \\xrightarrow{d} Z \\sim N(0, 1)$$\n\nThis means that for large $n$, $S_n$ is approximately normally distributed:\n$$S_n \\approx N(0, n(\\sigma_X^2 + \\mu_X^2))$$\nThis completes the rigorous proof.'
      }
    ],
    quiz: [
      {
        question: 'Let $X_1, X_2, \\dots$ be i.i.d. random variables with mean $\\mu = 3$ and variance $\\sigma^2 = 9$. By the Central Limit Theorem, what is the approximate distribution of the sample average $\\bar{X}_{36}$ based on a sample of size $n=36$?',
        questionHe: 'יהיו $X_1, X_2, \\dots$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה (i.i.d.) עם תוחלת $\\mu = 3$ ושונות $\\sigma^2 = 9$. לפי משפט הגבול המרכזי, מהי ההתפלגות המקורבת של ממוצע המדגם $\\bar{X}_{36}$ המבוסס על מדגם בגודל $n=36$?',
        options: [
          'N(3, 9)',
          'N(3, 0.25)',
          'N(108, 324)',
          'N(3, 1.5)'
        ],
        optionsHe: [
          'N(3, 9)',
          'N(3, 0.25)',
          'N(108, 324)',
          'N(3, 1.5)'
        ],
        correctAnswerIndex: 1,
        explanation: 'By the Central Limit Theorem, the sample average $\\bar{X}_n$ is approximately normally distributed with mean $\\mu$ and variance $\\sigma^2 / n$. Here, $\\mu = 3$, $\\sigma^2 = 9$, and $n = 36$. Therefore, the variance of the average is $\\text{Var}(\\bar{X}_{36}) = 9 / 36 = 1/4 = 0.25$. Thus, $\\bar{X}_{36} \\approx N(3, 0.25)$.',
        explanationHe: 'לפי משפט הגבול המרכזי, ממוצע המדגם $\\bar{X}_n$ מתפלג בקירוב נורמלית עם תוחלת $\\mu$ ושונות $\\sigma^2 / n$. כאן, $\\mu = 3$, $\\sigma^2 = 9$ ו-$n = 36$. לכן, שונות הממוצע היא $\\text{Var}(\\bar{X}_{36}) = 9 / 36 = 1/4 = 0.25$. מכאן ש-$\\bar{X}_{36} \\approx N(3, 0.25)$.'
      },
      {
        question: 'Let $\\sqrt{n}(\\hat{\\theta}_n - \\theta) \\xrightarrow{d} N(0, 4)$. What is the asymptotic variance of $g(\\hat{\\theta}_n) = \\ln(\\hat{\\theta}_n)$ at the true parameter $\\theta = 2$ using the Delta Method?',
        questionHe: 'יהי $\\sqrt{n}(\\hat{\\theta}_n - \\theta) \\xrightarrow{d} N(0, 4)$. מהי השונות האסימפטוטית של $g(\\hat{\\theta}_n) = \\ln(\\hat{\\theta}_n)$ בפרמטר האמיתי $\\theta = 2$ לפי שיטת הדלתא?',
        options: [
          '4',
          '1',
          '2',
          '0.5'
        ],
        optionsHe: [
          '4',
          '1',
          '2',
          '0.5'
        ],
        correctAnswerIndex: 1,
        explanation: 'The Delta Method states that if $\\sqrt{n}(Y_n - \\theta) \\xrightarrow{d} N(0, \\sigma^2)$, then the asymptotic variance of $g(Y_n)$ is $\\sigma^2 [g\'(\\theta)]^2$. Here, $\\sigma^2 = 4$, $g(x) = \\ln(x)$, and $g\'(x) = 1/x$. Evaluating at $\\theta = 2$ yields $g\'(2) = 1/2$. The asymptotic variance is $4 \\cdot (1/2)^2 = 4 \\cdot 1/4 = 1$.',
        explanationHe: 'לפי שיטת הדלתא, אם $\\sqrt{n}(Y_n - \\theta) \\xrightarrow{d} N(0, \\sigma^2)$, אזי השונות האסימפטוטית של $g(Y_n)$ היא $\\sigma^2 [g\'(\\theta)]^2$. כאן, $\\sigma^2 = 4$, $g(x) = \\ln(x)$, ולכן $g\'(x) = 1/x$. הצבה בנקודה $\\theta = 2$ נותנת $g\'(2) = 1/2$. השונות האסימפטוטית היא $4 \\cdot (1/2)^2 = 4 \\cdot 1/4 = 1$.'
      }
    ]
  }
,
  {
    id: 'stats-7',
    courseId: 'stats',
    chapterNumber: '7',
    title: 'Chapter 7: Method of Moments Estimation (MME)',
    titleHe: 'פרק 7: אמידה בשיטת המומנטים (MME)',
    intro: 'This chapter introduces the Method of Moments, one of the oldest and most intuitive parameter estimation techniques. We learn how to equate theoretical moments to sample moments, solve for unknown parameters, and establish the consistency of these estimators using the Law of Large Numbers and Continuous Mapping Theorem.',
    introHe: 'פרק זה מציג את שיטת המומנטים, אחת הטכניקות הוותיקות והאינטואיטיביות ביותר לאמידת פרמטרים. נלמד כיצד להשוות מומנטים תיאורטיים למומנטים של המדגם, לפתור עבור פרמטרים לא ידועים, ולהוכיח את העקביות של אומדים אלו באמצעות חוק המספרים הגדולים ומשפט ההעתקה הרציפה.',
    motivation: 'In empirical sciences, we must estimate parameters of physical or natural models from finite data. The Method of Moments provides a simple algebraic framework to construct estimators without requiring complex optimization algorithms. It serves as a benchmark and often provides excellent initial values for more advanced estimation procedures.',
    motivationHe: 'במדעים אמפיריים, עלינו לאמוד פרמטרים של מודלים פיזיקליים או טבעיים מתוך נתונים סופיים. שיטת המומנטים מספקת מסגרת אלגברית פשוטה לבניית אומדים ללא צורך באלגוריתמי אופטימיזציה מורכבים. היא משמשת כנקודת ייחוס ולעתים קרובות מספקת ערכי התחלה מצוינים עבור תהליכי אמידה מתקדמים יותר.',
    definitions: [
      {
        id: 'def-stats-7-1',
        title: 'Raw & Sample Moments',
        titleHe: 'מומנטים תיאורטיים ומומנטי מדגם',
        content: 'Let $X$ be a random variable.\n\n* **The $k$-th Raw Moment (Theoretical)**: The expectation of the $k$-th power of $X$, denoted by $\\mu_k$:\n$$\\mu_k = \\mathbb{E}[X^k]$$\nThis is a deterministic function of the underlying parameters $\\boldsymbol{\\theta} = (\\theta_1, \\dots, \\theta_r)$.\n\n* **The $k$-th Sample Moment**: The average of the $k$-th power of a sample of size $n$, denoted by $M_k$:\n$$M_k = \\frac{1}{n} \\sum_{i=1}^n X_i^k$$\nThis is a statistic (a random variable depending on the observed sample).',
        contentHe: 'יהי $X$ משתנה מקרי.\n\n* **המומנט התיאורטי מסדר $k$**: התוחלת של החזקה ה-$k$ של $X$, המסומנת ב-$\mu_k$:\n$$\\mu_k = \\mathbb{E}[X^k]$$\nזהו ערך דטרמיניסטי המהווה פונקציה של הפרמטרים של ההתפלגות $\\boldsymbol{\\theta} = (\\theta_1, \\dots, \\theta_r)$.\n\n* **מומנט המדגם מסדר $k$**: הממוצע של החזקה ה-$k$ של ערכי המדגם בגודל $n$, המסומן ב-$M_k$:\n$$M_k = \\frac{1}{n} \\sum_{i=1}^n X_i^k$$\nזהו סטטיסטי (משתנה מקרי התלוי בערכי המדגם הנצפים).',
        simplifiedLogic: 'Theoretical moments describe the geometry of the entire population probability curve. Sample moments estimate these geometric properties using our finite sample.',
        simplifiedLogicHe: 'מומנטים תיאורטיים מתארים את התכונות הגיאומטריות של התפלגות האוכלוסייה כולה. מומנטי המדגם מעריכים תכונות גיאומטריות אלו באמצעות המדגם הסופי שברשותנו.',
        toolboxConnection: 'The first moment is the mean, and the second moment is related to the variance through $\\text{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2$. We use these two to solve for up to two parameters.',
        toolboxConnectionHe: 'המומנט הראשון הוא התוחלת, והמומנט השני קשור לשונות באמצעות הקשר $\\text{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2$. אנו משתמשים בשני מומנטים אלו כדי לפתור בעיות עם עד שני פרמטרים לא ידועים.',
        keyTakeaway: 'Raw moments are theoretical expectations; sample moments are empirical averages.',
        keyTakeawayHe: 'מומנטים תיאורטיים הם תוחלות מתמטיות; מומנטי מדגם הם ממוצעים אמפיריים.'
      },
      {
        id: 'def-stats-7-2',
        title: 'Method of Moments Estimation (MME)',
        titleHe: 'אומד שיטת המומנטים (MME)',
        content: 'To estimate $r$ unknown parameters $\\boldsymbol{\\theta} = (\\theta_1, \\dots, \\theta_r)$, we equate the first $r$ theoretical raw moments to the first $r$ sample moments:\n$$\\mu_k(\\theta_1, \\dots, \\theta_r) = M_k \\quad \\text{for } k=1, \\dots, r$$\n\nThis forms a system of $r$ equations with $r$ unknowns:\n$$\\begin{cases} \\mathbb{E}[X] = \\bar{X} \\\\\\ \\mathbb{E}[X^2] = \\frac{1}{n}\\sum_{i=1}^n X_i^2 \\\\\\ \\vdots \\\\\\ \\mathbb{E}[X^r] = \\frac{1}{n}\\sum_{i=1}^n X_i^r \\end{cases}$$\n\nSolving this system for $\\theta_j$ yields the **Method of Moments Estimator (MME)**:\n$$\\hat{\\theta}_{j, MME} = g_j(M_1, \\dots, M_r)$$',
        contentHe: 'כדי לאמוד $r$ פרמטרים לא ידועים $\\boldsymbol{\\theta} = (\\theta_1, \\dots, \\theta_r)$, אנו משווים את $r$ המומנטים התיאורטיים הראשונים ל-$r$ מומנטי המדגם הראשונים:\n$$\\mu_k(\\theta_1, \\dots, \\theta_r) = M_k \\quad \\text{לכל } k=1, \\dots, r$$\n\nהדבר יוצר מערכת של $r$ משוואות עם $r$ נעלמים:\n$$\\begin{cases} \\mathbb{E}[X] = \\bar{X} \\\\\\ \\mathbb{E}[X^2] = \\frac{1}{n}\\sum_{i=1}^n X_i^2 \\\\\\ \\vdots \\\\\\ \\mathbb{E}[X^r] = \\frac{1}{n}\\sum_{i=1}^n X_i^r \\end{cases}$$\n\nפתרון מערכת משוואות זו עבור $\\theta_j$ מגדיר את **אומד שיטת המומנטים (MME)**:\n$$\\hat{\\theta}_{j, MME} = g_j(M_1, \\dots, M_r)$$',
        simplifiedLogic: 'We assume the sample geometry perfectly matches the population geometry and solve for the parameters that would make this true.',
        simplifiedLogicHe: 'אנו מניחים שגיאומטריית המדגם תואמת בדיוק לגיאומטריית האוכלוסייה ופותרים עבור ערכי הפרמטרים שיגרמו להנחה זו להתקיים.',
        toolboxConnection: 'MME is often simple to compute algebraically, bypassing the need for calculus or optimization tools that MLE requires.',
        toolboxConnectionHe: 'קל מאוד לחשב את אומדי המומנטים בצורה אלגברית, ללא צורך בגזירה או בכלים של אופטימיזציה נומרית הנדרשים לרוב בשיטת רב-הסיכוי (MLE).',
        keyTakeaway: 'Equate theoretical moments to sample moments and solve for the parameters.',
        keyTakeawayHe: 'משווים את המומנטים התיאורטיים למומנטי המדגם ופותרים עבור הפרמטרים.'
      },
      {
        id: 'def-stats-7-3',
        title: 'Consistency of MME',
        titleHe: 'עקביות אומדי שיטת המומנטים',
        content: 'An estimator $\\hat{\\theta}_n$ is consistent for $\\theta$ if $\\hat{\\theta}_n \\xrightarrow{P} \\theta$ as $n \\to \\infty$.\n\nBy the **Weak Law of Large Numbers (WLLN)**, each sample moment converges in probability to its theoretical counterpart:\n$$M_k = \\frac{1}{n}\\sum_{i=1}^n X_i^k \\xrightarrow{P} \\mathbb{E}[X^k] = \\mu_k$$\n\nIf the solving function $g_j(M_1, \\dots, M_r)$ is continuous at $(\\mu_1, \\dots, \\mu_r)$, then by the **Continuous Mapping Theorem (CMT)**:\n$$\\hat{\\theta}_{j, MME} = g_j(M_1, \\dots, M_r) \\xrightarrow{P} g_j(\\mu_1, \\dots, \\mu_r) = \\theta_j$$\n\nTherefore, MME estimators are consistent under very general mild continuity conditions.',
        contentHe: 'אומד $\\hat{\\theta}_n$ נקרא עקבי עבור $\\theta$ אם מתקיים $\\hat{\\theta}_n \\xrightarrow{P} \\theta$ כאשר $n \\to \\infty$.\n\nלפי **החוק החלש של המספרים הגדולים (WLLN)**, כל מומנט מדגם מתכנס בהסתברות למומנט התיאורטי המתאים לו:\n$$M_k = \\frac{1}{n}\\sum_{i=1}^n X_i^k \\xrightarrow{P} \\mathbb{E}[X^k] = \\mu_k$$\n\nאם פונקציית הפתרון $g_j(M_1, \\dots, M_r)$ רציפה בנקודה $(\\mu_1, \\dots, \\mu_r)$, אזי לפי **משפט ההעתקה הרציפה (CMT)** מתקיים:\n$$\\hat{\\theta}_{j, MME} = g_j(M_1, \\dots, M_r) \\xrightarrow{P} g_j(\\mu_1, \\dots, \\mu_r) = \\theta_j$$\n\nמכאן שאומדי שיטת המומנטים הם עקביים תחת תנאי רציפות כלליים ומתונים ביותר.',
        simplifiedLogic: 'Since sample averages get closer and closer to true expectations as we collect more data, any continuous function of these sample averages will get closer and closer to the true parameter.',
        simplifiedLogicHe: 'מכיוון שממוצעי המדגם הולכים ומתקרבים לתוחלות האמיתיות ככל שיש לנו יותר נתונים, כל פונקציה רציפה של הממוצעים הללו תתקרב בסופו של דבר לפרמטר האמיתי.',
        toolboxConnection: 'Consistency is the most vital baseline property for any statistical estimator. It guarantees that our estimate converges to the truth given infinite data.',
        toolboxConnectionHe: 'עקביות היא התכונה הבסיסית והחשובה ביותר של אומד סטטיסטי כלשהו. היא מבטיחה שהאומדן שלנו אכן יתכנס לאמת בהינתן כמות נתונים אינסופית.',
        keyTakeaway: 'LLN and Continuous Mapping Theorem guarantee MME consistency.',
        keyTakeawayHe: 'חוק המספרים הגדולים ומשפט ההעתקה הרציפה מבטיחים את עקביות אומדי המומנטים.'
      },
      {
        id: 'prac-stats-7-1',
        title: 'Practice 1: MME for Binomial Distribution with Concrete Data',
        titleHe: 'תרגול 1: אומד שיטת המומנטים להתפלגות בינומית עם נתוני מדגם',
        isPractice: true,
        content: 'Let $X_1, \\dots, X_n \\sim \\text{Binomial}(m, p)$ be i.i.d. variables, where the number of trials $m$ is known, and the success probability $p \\in (0, 1)$ is unknown.\n\n1. Find the MME estimator for $p$.\n2. Consider a sample of size $n = 10$ drawn from a $\\text{Binomial}(m=5, p)$ distribution, with the following frequency table:\n   * Value $k$: $0, 1, 2, 3, 4, 5$\n   * Frequency $f_k$: $2, 5, 2, 1, 0, 0$\n   Calculate the empirical value of the MME estimator.',
        contentHe: 'יהיו $X_1, \\dots, X_n \\sim \\text{Binomial}(m, p)$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה, כאשר מספר הניסויים $m$ ידוע, והסתברות ההצלחה $p \\in (0, 1)$ אינה ידועה.\n\n1. מצאו את אומד שיטת המומנטים (MME) עבור $p$.\n2. נתבונן במדגם בגודל $n = 10$ מהתפלגות $\\text{Binomial}(m=5, p)$, עם טבלת השכיחויות הבאה:\n   * ערך $k$: $0, 1, 2, 3, 4, 5$\n   * שכיחות $f_k$: $2, 5, 2, 1, 0, 0$\n   חשבו את הערך המספרי של אומד המומנטים במקרה זה.',
        simplifiedLogic: 'The binomial expectation is $\\mathbb{E}[X] = m p$. To find the success rate $p$, we equate the theoretical average to our sample mean $\\bar{X}$, giving $\\hat{p} = \\bar{X}/m$.',
        simplifiedLogicHe: 'התוחלת של התפלגות בינומית היא $\\mathbb{E}[X] = m p$. כדי למצוא את שיעור ההצלחה $p$, אנו משווים את התוחלת הזו לממוצע האמפירי של המדגם $\\bar{X}$, ומקבלים $\\hat{p} = \\bar{X}/m$.',
        toolboxConnection: 'This estimator represents the proportion of successes across all independent trials, which is the most natural intuitive estimate.',
        toolboxConnectionHe: 'אומד זה מייצג את פרופורציית ההצלחות מתוך כלל הניסויים הבלתי תלויים שבוצעו, וזהו האומד האינטואיטיבי הטבעי ביותר.',
        keyTakeaway: 'The MME of $p$ for Binomial(m, p) is $\\bar{X}/m$.',
        keyTakeawayHe: 'אומד שיטת המומנטים של $p$ עבור התפלגות בינומית הוא $\\bar{X}/m$.',
        proof: '**Step-by-Step Derivation and Calculation:**\n\n**Part 1: Deriving the Estimator**\nWe require $r = 1$ equations because there is only one unknown parameter, $p$.\n* **Theoretical Moment**:\n$$\\mu_1 = \\mathbb{E}[X] = m p$$\n* **Sample Moment**:\n$$M_1 = \\bar{X} = \\frac{1}{n} \\sum_{i=1}^n X_i$$\n\nEquating theoretical to sample moment:\n$$m p = \\bar{X} \\implies \\hat{p}_{MME} = \\frac{\\bar{X}}{m}$$\n\n**Part 2: Empirical Value Calculation**\nWe have a sample of size $n = 10$ (sum of frequencies $2+5+2+1+0+0 = 10$).\nThe sample mean $\\bar{X}$ is:\n$$\\bar{X} = \\frac{\\sum_{k=0}^5 k \\cdot f_k}{n} = \\frac{0 \\cdot 2 + 1 \\cdot 5 + 2 \\cdot 2 + 3 \\cdot 1 + 4 \\cdot 0 + 5 \\cdot 0}{10}$$\n$$\\bar{X} = \\frac{0 + 5 + 4 + 3 + 0 + 0}{10} = \\frac{12}{10} = 1.2$$\n\nSince $m = 5$, the MME estimate for $p$ is:\n$$\\hat{p}_{MME} = \\frac{\\bar{X}}{m} = \\frac{1.2}{5} = 0.24 \\quad (24\\%)$$\nThis provides a precise empirical estimate based on the raw frequency distribution.'
      },
      {
        id: 'prac-stats-7-2',
        title: 'Practice 2: Joint MME for Normal Distribution Parameters',
        titleHe: 'תרגול 2: אומד שיטת המומנטים המשותף לפרמטרי התפלגות נורמלית',
        isPractice: true,
        content: 'Let $X_1, \\dots, X_n \\sim N(\\mu, \\sigma^2)$ be i.i.d. random variables where both the mean $\\mu$ and variance $\\sigma^2$ are unknown parameters.\n\nDerive the Method of Moments estimators for both $\\mu$ and $\\sigma^2$.',
        contentHe: 'יהיו $X_1, \\dots, X_n \\sim N(\\mu, \\sigma^2)$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה, כאשר גם התוחלת $\\mu$ וגם השונות $\\sigma^2$ הן פרמטרים לא ידועים.\n\nפתחו את אומדי שיטת המומנטים עבור $\\mu$ ועבור $\\sigma^2$.',
        simplifiedLogic: 'We map the first moment to the mean $\\mu$ and the second moment to the variance plus mean-squared $\\sigma^2 + \\mu^2$. By replacing theoretical expectations with empirical averages, we obtain the sample mean and the biased sample variance.',
        simplifiedLogicHe: 'אנו משייכים את המומנט הראשון לתוחלת $\\mu$ ואת המומנט השני לשונות בתוספת ריבוע התוחלת $\\sigma^2 + \\mu^2$. על ידי החלפת התוחלות התיאורטיות בממוצעי מדגם אמפיריים, אנו מקבלים את ממוצע המדגם ואת שונות המדגם המוטה.',
        toolboxConnection: 'The resulting MME estimator for variance is biased but consistent. The bias disappears as $n \\to \\infty$.',
        toolboxConnectionHe: 'אומד המומנטים המתקבל עבור השונות הוא מוטה אך עקבי. ההטיה נעלמת (שואפת לאפס) כאשר $n \\to \\infty$.',
        keyTakeaway: 'The MME of $\\mu$ is $\\bar{X}$, and the MME of $\\sigma^2$ is $\\frac{1}{n}\\sum(X_i - \\bar{X})^2$.',
        keyTakeawayHe: 'אומד המומנטים של $\\mu$ הוא $\\bar{X}$, ואומד המומנטים של $\\sigma^2$ הוא $\\frac{1}{n}\\sum(X_i - \\bar{X})^2$.',
        proof: '**Step-by-Step Proof:**\n\nThere are two unknown parameters: $\\theta_1 = \\mu$ and $\\theta_2 = \\sigma^2$. We require the first $r = 2$ moments.\n\n**Theoretical Moments**:\n* First moment:\n$$\\mu_1 = \\mathbb{E}[X] = \\mu$$\n* Second moment:\n$$\\mu_2 = \\mathbb{E}[X^2] = \\text{Var}(X) + (\\mathbb{E}[X])^2 = \\sigma^2 + \\mu^2$$\n\n**Sample Moments**:\n* First sample moment:\n$$M_1 = \\bar{X} = \\frac{1}{n}\\sum_{i=1}^n X_i$$\n* Second sample moment:\n$$M_2 = \\frac{1}{n}\\sum_{i=1}^n X_i^2$$\n\n**System of Equations**:\n$$\\begin{cases} \\mu = M_1 \\\\\\ \\sigma^2 + \\mu^2 = M_2 \\end{cases}$$\n\nSolving for the parameters:\n1. From the first equation:\n$$\\hat{\\mu}_{MME} = M_1 = \\bar{X}$$\n2. Substituting into the second equation:\n$$\\hat{\\sigma}^2_{MME} = M_2 - (\\hat{\\mu}_{MME})^2 = M_2 - \\bar{X}^2$$\n$$\\hat{\\sigma}^2_{MME} = \\frac{1}{n}\\sum_{i=1}^n X_i^2 - \\bar{X}^2 = \\frac{1}{n}\\sum_{i=1}^n (X_i - \\bar{X})^2$$\n\nThis completes the rigorous algebraic derivation.'
      },
      {
        id: 'prac-stats-7-3',
        title: 'Practice 3: MME for Erlang-2 (Gamma) Distribution',
        titleHe: 'תרגול 3: אומד שיטת המומנטים להתפלגות ארלנג מסדר 2',
        isPractice: true,
        content: 'Let $X_1, \\dots, X_n$ be i.i.d. random variables with PDF:\n$$f(x; a) = a^2 x e^{-a x} \\quad \\text{for } x \\ge 0$$\nwhere $a > 0$ is an unknown rate parameter. Derive the MME for $a$.',
        contentHe: 'יהיו $X_1, \\dots, X_n$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה עם פונקציית צפיפות:\n$$f(x; a) = a^2 x e^{-a x} \\quad \\text{עבור } x \\ge 0$$\nכאשר $a > 0$ הוא פרמטר קצב לא ידוע. פתחו את אומד שיטת המומנטים עבור $a$.',
        simplifiedLogic: 'This distribution is a Gamma distribution with shape $k=2$ and rate $a$. Its expected value is $2/a$. Equating this to $\\bar{X}$ gives $\\hat{a} = 2/\\bar{X}$.',
        simplifiedLogicHe: 'התפלגות זו היא התפלגות גמא עם פרמטר צורה $k=2$ ופרמטר קצב $a$. התוחלת שלה היא $2/a$. השוואת ערך זה לממוצע המדגם $\\bar{X}$ נותנת $\\hat{a} = 2/\\bar{X}$.',
        toolboxConnection: 'Used commonly in queueing theory and telecommunications to model the waiting time for two consecutive network packet arrivals.',
        toolboxConnectionHe: 'נפוץ בשימוש בתורת התורים ובתקשורת נתונים לצורך מידול זמן ההמתנה לקבלת שתי חבילות מידע עוקבות ברשת.',
        keyTakeaway: 'The MME for the Erlang-2 rate parameter is $2/\\bar{X}$.',
        keyTakeawayHe: 'אומד שיטת המומנטים עבור פרמטר הקצב של התפלגות ארלנג-2 הוא $2/\\bar{X}$.',
        proof: '**Step-by-Step Derivation:**\n\nThere is one unknown parameter, $a$. We require the first theoretical moment:\n$$\\mu_1 = \\mathbb{E}[X] = \\int_0^{\\infty} x \\cdot (a^2 x e^{-a x}) \\, dx = a^2 \\int_0^{\\infty} x^2 e^{-a x} \\, dx$$\n\nUsing the substitution $t = a x$, so $dx = \\frac{1}{a} dt$:\n$$\\mathbb{E}[X] = a^2 \\int_0^{\\infty} \\left(\\frac{t}{a}\\right)^2 e^{-t} \\frac{1}{a} \\, dt = \\frac{1}{a} \\int_0^{\\infty} t^2 e^{-t} \\, dt$$\n\nRecall the definition of the Gamma function, where $\\int_0^{\\infty} t^2 e^{-t} \\, dt = \\Gamma(3) = 2! = 2$. Thus:\n$$\\mathbb{E}[X] = \\frac{2}{a}$$\n\nEquating to the first sample moment $M_1 = \\bar{X}$:\n$$\\frac{2}{a} = \\bar{X} \\implies \\hat{a}_{MME} = \\frac{2}{\\bar{X}}$$\nThis completes the proof.'
      },
      {
        id: 'prac-stats-7-4',
        title: 'Practice 4: MME for Continuous Uniform Distribution U(a, b)',
        titleHe: 'תרגול 4: אומד שיטת המומנטים להתפלגות אחידה רציפה U(a, b)',
        isPractice: true,
        content: 'Let $X_1, \\dots, X_n \\sim U(a, b)$ be i.i.d. variables where both boundaries $a$ and $b$ are unknown. Derive the Method of Moments estimators for $a$ and $b$.',
        contentHe: 'יהיו $X_1, \\dots, X_n \\sim U(a, b)$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה, כאשר שני הגבולות $a$ ו-$b$ אינם ידועים. פתחו את אומדי שיטת המומנטים עבור $a$ ועבור $b$.',
        simplifiedLogic: 'We express the boundaries $a$ and $b$ in terms of the mean $\\mu$ and standard deviation $\\sigma$. The mean is the center, and the interval width is $\\sigma \\sqrt{12}$. We plug in the sample average and standard deviation to find the estimated boundaries.',
        simplifiedLogicHe: 'אנו מבטאים את הגבולות $a$ ו-$b$ באמצעות התוחלת $\\mu$ וסטיית התקן $\\sigma$. התוחלת היא מרכז הקטע, ורוחב הקטע הוא $\\sigma \\sqrt{12}$. אנו מציבים את ממוצע המדגם וסטיית התקן שלו כדי לקבל את אומדני הגבולות.',
        toolboxConnection: 'The MME estimators for uniform boundaries differ significantly from the MLE estimators. MME uses all data points to estimate variance, whereas MLE only looks at the extreme min/max points.',
        toolboxConnectionHe: 'אומדי המומנטים עבור גבולות ההתפלגות האחידה שונים באופן מהותי מאומדי רב-הסיכוי (MLE). אומדי המומנטים משתמשים בכל נקודות המדגם כדי להעריך את השונות, בעוד ש-MLE מסתכל אך ורק על ערכי הקיצון (מינימום ומקסימום).',
        keyTakeaway: 'MME boundaries are $\\bar{X} \\pm \\sqrt{3}S_d$ where $S_d$ is the sample standard deviation.',
        keyTakeawayHe: 'גבולות המומנטים הם $\\bar{X} \\pm \\sqrt{3}S_d$ כאשר $S_d$ היא סטיית התקן של המדגם.',
        proof: '**Step-by-Step Proof:**\n\nThe parameters are $\\theta_1 = a$ and $\\theta_2 = b$. We use the first two moments.\n\n**Theoretical Moments**:\n* Expected Value:\n$$\\mathbb{E}[X] = \\frac{a+b}{2}$$\n* Variance:\n$$\\text{Var}(X) = \\frac{(b-a)^2}{12}$$\n\n**Sample Statistics**:\n* Sample mean: $M_1 = \\bar{X}$\n* Biased sample variance: $S_d^2 = M_2 - M_1^2 = \\frac{1}{n}\\sum(X_i - \\bar{X})^2$\n\n**Equating to Sample Moments**:\n1. For the first moment:\n$$\\frac{a+b}{2} = \\bar{X} \\implies a+b = 2\\bar{X} \\quad (1)$$\n2. For the variance:\n$$\\frac{(b-a)^2}{12} = S_d^2 \\implies (b-a)^2 = 12 S_d^2 \\implies b-a = 2\\sqrt{3}S_d \\quad (2)$$\n(since $b > a$, we take the positive square root).\n\n**Solving the System**:\nAdding (1) and (2):\n$$2b = 2\\bar{X} + 2\\sqrt{3}S_d \\implies \\hat{b}_{MME} = \\bar{X} + \\sqrt{3}S_d$$\nSubtracting (2) from (1):\n$$2a = 2\\bar{X} - 2\\sqrt{3}S_d \\implies \\hat{a}_{MME} = \\bar{X} - \\sqrt{3}S_d$$\n\nwhere $S_d = \\sqrt{\\frac{1}{n}\\sum_{i=1}^n (X_i - \\bar{X})^2}$. This completes the rigorous proof.'
      },
      {
        id: 'prac-stats-7-5',
        title: 'Practice 5: MME for Shifted Exponential Distribution',
        titleHe: 'תרגול 5: אומד שיטת המומנטים להתפלגות מעריכית מוזזת',
        isPractice: true,
        content: 'Let $X_1, \\dots, X_n$ be i.i.d. variables from a Shifted Exponential distribution with PDF:\n$$f(x; a, b) = \\frac{1}{b} e^{-\\frac{x - a}{b}} \\quad \\text{for } x \\ge a$$\nwhere $a \\in \\mathbb{R}$ is the shift parameter and $b > 0$ is the scale parameter. Derive the MME estimators for both $a$ and $b$.',
        contentHe: 'יהיו $X_1, \\dots, X_n$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה מהתפלגות מעריכית מוזזת בעלת צפיפות:\n$$f(x; a, b) = \\frac{1}{b} e^{-\\frac{x - a}{b}} \\quad \\text{עבור } x \\ge a$$\nכאשר $a \\in \\mathbb{R}$ הוא פרמטר ההזזה ו-$b > 0$ הוא פרמטר קנה המידה. פתחו את אומדי שיטת המומנטים עבור $a$ ועבור $b$.',
        simplifiedLogic: 'The expectation of a shifted exponential is $a+b$ (the starting boundary plus the average lifetime). The variance is $b^2$. Equating variance to the sample variance gives $\\hat{b} = S_d$, which then yields $\\hat{a} = \\bar{X} - S_d$.',
        simplifiedLogicHe: 'התוחלת של התפלגות מעריכית מוזזת היא $a+b$ (נקודת ההתחלה בתוספת אורך החיים הממוצע). השונות היא $b^2$. השוואת השונות התיאורטית לשונות המדגם נותנת $\\hat{b} = S_d$, ומכאן אנו מקבלים $\\hat{a} = \\bar{X} - S_d$.',
        toolboxConnection: 'The shift parameter represents a minimum delay or guaranteed survival time before the exponential decay process begins.',
        toolboxConnectionHe: 'פרמטר ההזזה מייצג השהיה מינימלית או זמן הישרדות מובטח לפני שתהליך הדעיכה המעריכי מתחיל.',
        keyTakeaway: 'The MME estimators are $\\hat{b} = S_d$ and $\\hat{a} = \\bar{X} - S_d$.',
        keyTakeawayHe: 'אומדי שיטת המומנטים הם $\\hat{b} = S_d$ ו-$\\hat{a} = \\bar{X} - S_d$.',
        proof: '**Step-by-Step Derivation:**\n\n**Theoretical Moments**:\nLet $Y = X - a \\sim \\text{Exp}(1/b)$. Then:\n* expectation of $Y$ is $\\mathbb{E}[Y] = b$.\n* variance of $Y$ is $\\text{Var}(Y) = b^2$.\n\nTherefore, for $X = Y + a$:\n* **First moment**:\n$$\\mu_1 = \\mathbb{E}[X] = \\mathbb{E}[Y] + a = a + b$$\n* **Variance**:\n$$\\text{Var}(X) = \\text{Var}(Y) = b^2$$\n* **Second moment**:\n$$\\mu_2 = \\text{Var}(X) + (\\mathbb{E}[X])^2 = b^2 + (a+b)^2$$\n\n**Equating to Sample Moments**:\nLet $\\bar{X}$ be the sample mean and $S_d^2$ be the biased sample variance:\n$$S_d^2 = M_2 - M_1^2$$\n\nEquating theoretical parameters to sample statistics:\n1. For variance:\n$$b^2 = S_d^2 \\implies \\hat{b}_{MME} = S_d$$\n2. For mean:\n$$a + b = \\bar{X} \\implies \\hat{a}_{MME} = \\bar{X} - \\hat{b}_{MME} = \\bar{X} - S_d$$\n\nwhere $S_d = \\sqrt{\\frac{1}{n}\\sum_{i=1}^n (X_i - \\bar{X})^2}$. This completes the rigorous proof.'
      }
    ],
    quiz: [
      {
        question: 'Let $X_1, \\dots, X_n \\sim \\text{Poisson}(\\lambda)$ be i.i.d. variables. We want to estimate the parameter $\\theta = e^{-\\lambda}$ (the probability of observing zero events). What is the Method of Moments Estimator (MME) of $\\theta$?',
        questionHe: 'יהיו $X_1, \\dots, X_n \\sim \\text{Poisson}(\\lambda)$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה. ברצוננו לאמוד את הפרמטר $\\theta = e^{-\\lambda}$ (ההסתברות לקבלת אפס אירועים). מהו אומד שיטת המומנטים (MME) של $\\theta$?',
        options: [
          'e^{-X_n}',
          'e^{-\\bar{X}}',
          '\\bar{X}',
          '\\ln(\\bar{X})'
        ],
        optionsHe: [
          'e^{-X_n}',
          'e^{-\\bar{X}}',
          '\\bar{X}',
          '\\ln(\\bar{X})'
        ],
        correctAnswerIndex: 1,
        explanation: 'The MME of the rate parameter $\\lambda$ is $\\hat{\\lambda} = \\bar{X}$ since $\\mathbb{E}[X] = \\lambda$. By the Continuous Mapping Theorem, since the function $g(x) = e^{-x}$ is continuous, the MME of $e^{-\\lambda}$ is $g(\\hat{\\lambda}) = e^{-\\bar{X}}$.',
        explanationHe: 'אומד המומנטים של פרמטר הקצב $\\lambda$ הוא $\\hat{\\lambda} = \\bar{X}$ מאחר ש-$\mathbb{E}[X] = \lambda$. לפי משפט ההעתקה הרציפה, מכיוון שהפונקציה $g(x) = e^{-x}$ רציפה, אומד המומנטים של $e^{-\\lambda}$ הוא $g(\\hat{\\lambda}) = e^{-\\bar{X}}$.'
      },
      {
        question: 'Let $X_1, \\dots, X_n \\sim U(0, \\theta)$ be i.i.d. variables. What is the MME of $\\theta$?',
        questionHe: 'יהיו $X_1, \\dots, X_n \\sim U(0, \\theta)$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה. מהו אומד שיטת המומנטים (MME) של $\\theta$?',
        options: [
          '\\bar{X}',
          '2\\bar{X}',
          'X_{(n)}',
          '\\frac{n+1}{n} X_{(n)}'
        ],
        optionsHe: [
          '\\bar{X}',
          '2\\bar{X}',
          'X_{(n)}',
          '\\frac{n+1}{n} X_{(n)}'
        ],
        correctAnswerIndex: 1,
        explanation: 'The theoretical expected value of $X \\sim U(0, \\theta)$ is $\\mathbb{E}[X] = \\theta / 2$. Equating this to the first sample moment $M_1 = \\bar{X}$ yields $\\theta / 2 = \\bar{X} \\implies \\hat{\\theta}_{MME} = 2\\bar{X}$. Note that this is different from the MLE, which is the sample maximum $X_{(n)}$.',
        explanationHe: 'התוחלת התיאורטית של $X \\sim U(0, \\theta)$ היא $\\mathbb{E}[X] = \\theta / 2$. השוואת ערך זה למומנט המדגם הראשון $M_1 = \\bar{X}$ נותנת $\\theta / 2 = \\bar{X} \\implies \\hat{\\theta}_{MME} = 2\\bar{X}$. שימו לב שאומד זה שונה מאומד רב-הסיכוי (MLE), שהוא מקסימום המדגם $X_{(n)}$.'
      }
    ]
  },
  {
    id: 'stats-8',
    courseId: 'stats',
    chapterNumber: '8',
    title: 'Chapter 8: Maximum Likelihood Estimation (MLE)',
    titleHe: 'פרק 8: אמידה בשיטת הנראות המרבית (MLE)',
    intro: 'This chapter covers Maximum Likelihood Estimation, the most widely used and statistically powerful method of parameter estimation. We study how to construct likelihood functions, solve score equations, apply the vital invariance property, and handle parameter-dependent boundaries using order statistics.',
    introHe: 'פרק זה עוסק באמידה בשיטת הנראות המרבית, השיטה הנפוצה והחזקה ביותר מבחינה סטטיסטית לאמידת פרמטרים. נלמד כיצד לבנות פונקציות נראות, לפתור משוואות ציונים, להשתמש בתכונת האי-שתנות הקריטית, ולטפל במקרים שבהם גבולות התומך תלויים בפרמטרים באמצעות סטטיסטי תור.',
    motivation: 'Maximum Likelihood Estimators have exceptional asymptotic properties: they are asymptotically unbiased, efficient (achieve the Cramer-Rao Lower Bound), and asymptotically normal. MLE is the computational backbone of logistic regression, generalized linear models, and deep learning optimization via cross-entropy loss.',
    motivationHe: 'לאומדי נראות מרבית יש תכונות אסימפטוטיות יוצאות מן הכלל: הם בלתי מוטים אסימפטוטית, יעילים (משיגים את חסם קרמר-ראו) ונורמליים אסימפטוטית. שיטה זו מהווה את הבסיס החישובי והתיאורטי של רגרסיה לוגיסטית, מודלים ליניאריים מוגללים ואופטימיזציה של למידה עמוקה באמצעות פונקציות הפסד מסוג אנטרופיה צולבת.',
    definitions: [
      {
        id: 'def-stats-8-1',
        title: 'Likelihood & Log-Likelihood Functions',
        titleHe: 'פונקציית הנראות והלוג-נראות',
        content: 'Let $X_1, \\dots, X_n$ be i.i.d. random variables with PDF or PMF $f(x; \\theta)$ where $\\theta$ is an unknown parameter.\n\n* **The Likelihood Function $L(\\theta)$**: The joint probability of observing our specific sample data as a function of the parameter:\n$$L(\\theta) = \\prod_{i=1}^n f(X_i; \\theta)$$\n\n* **The Log-Likelihood Function $\\ell(\\theta)$**: The natural logarithm of the likelihood function, which simplifies products into sums:\n$$\\ell(\\theta) = \\ln L(\\theta) = \\sum_{i=1}^n \\ln f(X_i; \\theta)$$\n\n* **The Score Function $U(\\theta)$**: The derivative of the log-likelihood function:\n$$U(\\theta) = \\ell\'(\\theta) = \\frac{\\partial}{\\partial \\theta} \\ell(\\theta)$$\n\nTo find the **Maximum Likelihood Estimator (MLE)** $\\hat{\\theta}_{MLE}$, we solve the score equation:\n$$U(\\theta) = 0$$\nand verify that the second derivative is negative at the critical point:\n$$\\ell\'\'(\\hat{\\theta}) < 0$$',
        contentHe: 'יהיו $X_1, \\dots, X_n$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה עם פונקציית צפיפות (או הסתברות) $f(x; \\theta)$ כאשר $\\theta$ הוא פרמטר לא ידוע.\n\n* **פונקציית הנראות $L(\\theta)$**: ההסתברות המשותפת לקבלת נתוני המדגם הספציפיים שצפינו בהם, כפונקציה של הפרמטר:\n$$L(\\theta) = \\prod_{i=1}^n f(X_i; \\theta)$$\n\n* **פונקציית הלוג-נראות $\\ell(\\theta)$**: הלוגריתם הטבעי של פונקציית הנראות, המפשט מכפלות לכדי סכומים:\n$$\\ell(\\theta) = \\ln L(\\theta) = \\sum_{i=1}^n \\ln f(X_i; \\theta)$$\n\n* **פונקציית הציון $U(\\theta)$**: הנגזרת הראשונה של פונקציית הלוג-נראות:\n$$U(\\theta) = \\ell\'(\\theta) = \\frac{\\partial}{\\partial \\theta} \\ell(\\theta)$$\n\nכדי למצוא את **אומד הנראות המרבית (MLE)** $\\hat{\\theta}_{MLE}$, אנו פותרים את משוואת הציונים:\n$$U(\\theta) = 0$$\nומודעים לכך שהנגזרת השנייה היא שלילית בנקודת הקיצון:\n$$\\ell\'\'(\\hat{\\theta}) < 0$$',
        simplifiedLogic: 'Instead of asking "what is the probability of the data given the parameter?", we turn it around and ask "which parameter value makes our observed data most likely to have occurred?"',
        simplifiedLogicHe: 'במקום לשאול "מהי ההסתברות לקבלת הנתונים בהינתן הפרמטר?", אנו הופכים את השאלה ושואלים "איזה ערך של הפרמטר הופך את הנתונים שראינו בפועל להכי סבירים להתרחש?"',
        toolboxConnection: 'Taking the log stabilizes calculations and prevents underflow when multiplying thousands of small probabilities, which is crucial for modern neural network training.',
        toolboxConnectionHe: 'פעולת הלוגריתם מייצבת את החישובים ומונעת מצבי קריסה של דיוק חישובי (underflow) בעת הכפלה של אלפי הסתברויות קטנות, דבר שהוא קריטי באימון רשתות נוירונים מודרניות.',
        keyTakeaway: 'MLE maximizes the probability of observing the collected sample.',
        keyTakeawayHe: 'אומד נראות מרבית ממקסם את ההסתברות לקבלת המדגם שנאסף.'
      },
      {
        id: 'def-stats-8-2',
        title: 'The Invariance Property of MLE',
        titleHe: 'תכונת האי-שתנות של אומד נראות מרבית',
        content: 'Let $\\hat{\\theta}_{MLE}$ be the Maximum Likelihood Estimator of $\\theta$.\n\nIf $g: \\Theta \\to \\Phi$ is any function, then the MLE of the transformed parameter $\\tau = g(\\theta)$ is given by:\n$$\\hat{\\tau}_{MLE} = g(\\hat{\\theta}_{MLE})$$\n\nThis property holds universally, even if the function $g$ is not one-to-one (in which case we define the profile likelihood to resolve ambiguity).',
        contentHe: 'יהי $\\hat{\\theta}_{MLE}$ אומד הנראות המרבית עבור $\\theta$.\n\nאם $g: \\Theta \\to \\Phi$ היא פונקציה כלשהי, אזי אומד הנראות המרבית של הפרמטר המותמר $\\tau = g(\\theta)$ נתון על ידי:\n$$\\hat{\\tau}_{MLE} = g(\\hat{\\theta}_{MLE})$$\n\nתכונה זו מתקיימת תמיד באופן אוניברסלי, גם אם הפונקציה $g$ אינה חד-חד-ערכית (במקרה כזה משתמשים בנראות פרופיל כדי לפתור את העמימות).',
        simplifiedLogic: 'If we want to estimate the square or exponent of a parameter, we do not need to rewrite and maximize a new likelihood function. We simply solve for the original parameter first, and then apply the square or exponent directly to the final estimate.',
        simplifiedLogicHe: 'אם אנו רוצים לאמוד את הריבוע או האקספוננט של פרמטר, איננו צריכים לכתוב ולמקסם פונקציית נראות חדשה מההתחלה. אנו פשוט מוצאים את האומד המקורי, ומפעילים עליו את הריבוע או האקספוננט ישירות.',
        toolboxConnection: 'Allows engineers to easily estimate complex system metrics (like reliability or standard deviation) directly from basic parameters.',
        toolboxConnectionHe: 'מאפשר למהנדסים לאמוד בקלות מדדים מורכבים של מערכות (כמו אמינות או סטיית תקן) ישירות מתוך הערכות של פרמטרים בסיסיים.',
        keyTakeaway: 'The MLE of any function $g(\\theta)$ is $g(\\hat{\\theta}_{MLE})$.',
        keyTakeawayHe: 'אומד הנראות המרבית של כל פונקציה $g(\\theta)$ הוא $g(\\hat{\\theta}_{MLE})$ של האומד המקורי.'
      },
      {
        id: 'def-stats-8-3',
        title: 'Boundary MLE & Order Statistics',
        titleHe: 'נראות מרבית על השפה וסטטיסטי תור',
        content: 'When the support of a probability distribution depends on the unknown parameter $\\theta$, the likelihood function is non-zero only within boundaries dictated by the sample.\n\nTo write the likelihood function rigorously, we use indicator functions:\n$$f(x; \\theta) = h(x, \\theta) I_{\\{x \\in \\text{supp}(\\theta)\\}}$$\n\nFor example, if $X_i \\sim U(0, \\theta)$:\n$$L(\\theta) = \\frac{1}{\\theta^n} \\prod_{i=1}^n I_{\\{0 \\le X_i \\le \\theta\\}} = \\frac{1}{\\theta^n} I_{\\{X_{(n)} \\le \\theta\\}} I_{\\{X_{(1)} \\ge 0\\}}$$\nwhere $X_{(n)} = \\max(X_1, \\dots, X_n)$ is the maximum order statistic.\n\nSince $L(\\theta)$ is strictly decreasing in $\\theta$ for $\\theta \\ge X_{(n)}$, the maximum is achieved at the smallest valid boundary:\n$$\\hat{\\theta}_{MLE} = X_{(n)}$$',
        contentHe: 'כאשר התומך של התפלגות הסתברותית תלוי בפרמטר הלא ידוע $\\theta$, פונקציית הנראות אינה אפס רק בתוך גבולות המוכתבים על ידי ערכי המדגם.\n\nכדי לכתוב את פונקציית הנראות בצורה מדויקת, אנו משתמשים בפונקציות אינדיקטור:\n$$f(x; \\theta) = h(x, \\theta) I_{\\{x \\in \\text{supp}(\\theta)\\}}$$\n\nלדוגמה, אם $X_i \\sim U(0, \\theta)$:\n$$L(\\theta) = \\frac{1}{\\theta^n} \\prod_{i=1}^n I_{\\{0 \\le X_i \\le \\theta\\}} = \\frac{1}{\\theta^n} I_{\\{X_{(n)} \\le \\theta\\}} I_{\\{X_{(1)} \\ge 0\\}}$$\nכאשר $X_{(n)} = \\max(X_1, \\dots, X_n)$ הוא סטטיסטי הסדר המקסימלי (מקסימום המדגם).\n\nמכיוון ש-$L(\\theta)$ היא פונקציה יורדת מונוטונית ב-$\theta$ עבור $\\theta \\ge X_{(n)}$, ערך הנראות המקסימלי מתקבל בגבול התחתון האפשרי של הפרמטר:\n$$\\hat{\\theta}_{MLE} = X_{(n)}$$',
        simplifiedLogic: 'If a parameter defines the maximum possible value of a uniform process, then the true parameter cannot be smaller than any value we have actually observed. To make the observed maximum as likely as possible, we choose the boundary to be exactly equal to our sample maximum.',
        simplifiedLogicHe: 'אם פרמטר מגדיר את הערך המקסימלי האפשרי של תהליך אחיד, אזי הפרמטר האמיתי אינו יכול להיות קטן יותר מאף ערך שראינו בפועל במדגם. כדי להפוך את המקסימום שראינו להכי סביר, אנו בוחרים את הגבול להיות שווה בדיוק למקסימום המדגם.',
        toolboxConnection: 'Used in non-regular statistical problems where standard calculus (derivatives) fails completely because the likelihood is not differentiable at the boundary.',
        toolboxConnectionHe: 'משמש בבעיות סטטיסטיות לא-רגולריות שבהן החשבון הדיפרנציאלי הסטנדרטי (נגזרות) נכשל לחלוטין מכיוון שפונקציית הנראות אינה גזירה בנקודת המקסימום שנמצאת על השפה.',
        keyTakeaway: 'If support depends on $\\theta$, analyze boundary conditions using order statistics.',
        keyTakeawayHe: 'אם התומך תלוי ב-$\theta$, מנתחים את תנאי השפה בעזרת סטטיסטי סדר.'
      },
      {
        id: 'prac-stats-8-1',
        title: 'Practice 1: Step-by-Step MLE for Poisson Distribution',
        titleHe: 'תרגול 1: אומד נראות מרבית להתפלגות פואסון שלב אחר שלב',
        isPractice: true,
        content: 'Let $X_1, \\dots, X_n \\sim \\text{Poisson}(\\lambda)$ be i.i.d. variables with unknown rate $\\lambda > 0$.\n\n1. Write the likelihood and log-likelihood functions.\n2. Derive the MLE for $\\lambda$ by solving the score equation and verifying the second derivative condition.',
        contentHe: 'יהיו $X_1, \\dots, X_n \\sim \\text{Poisson}(\\lambda)$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה עם קצב לא ידוע $\\lambda > 0$.\n\n1. כיתבו את פונקציית הנראות והלוג-נראות.\n2. פתחו את אומד הנראות המרבית (MLE) עבור $\\lambda$ על ידי פתרון משוואת הציונים ווידוא תנאי הנגזרת השנייה.',
        simplifiedLogic: 'The Poisson likelihood represents the joint chance of our outcomes. By taking the log, we get a sum. The derivative setting yields $\\hat{\\lambda} = \\bar{X}$, which is the sample average.',
        simplifiedLogicHe: 'פונקציית הנראות של פואסון מייצגת את ההסתברות המשותפת של תוצאות המדגם. על ידי מעבר ללוג, אנו מקבלים סכום. השוואת הנגזרת לאפס נותנת $\\hat{\\lambda} = \\bar{X}$, שהוא ממוצע המדגם.',
        toolboxConnection: 'The Poisson MLE is widely used in network traffic analysis and call center load estimation to find arrival rates.',
        toolboxConnectionHe: 'אומד נראות מרבית של פואסון משמש רבות בניתוח תעבורת רשתות מחשבים והערכת עומסים במוקדי שירות לקוחות למציאת קצבי הגעה.',
        keyTakeaway: 'The MLE of the Poisson parameter is the sample mean $\\bar{X}$.',
        keyTakeawayHe: 'אומד הנראות המרבית של פרמטר פואסון הוא ממוצע המדגם $\\bar{X}$.',
        proof: '**Step-by-Step Derivation:**\n\n**Part 1: Writing Likelihood and Log-Likelihood**\nThe PMF of an individual variable is:\n$$f(x; \\lambda) = \\frac{e^{-\\lambda} \\lambda^x}{x!}$$\n\nThe joint likelihood function of the independent sample is:\n$$L(\\lambda) = \\prod_{i=1}^n \\frac{e^{-\\lambda} \\lambda^{X_i}}{X_i!} = \\frac{e^{-n\\lambda} \\lambda^{\\sum_{i=1}^n X_i}}{\\prod_{i=1}^n X_i!}$$\n\nTaking the natural logarithm:\n$$\\ell(\\lambda) = \\ln L(\\lambda) = -n\\lambda + \\left(\\sum_{i=1}^n X_i\\right) \\ln\\lambda - \\ln\\left(\\prod_{i=1}^n X_i!\\right)$$\n\n**Part 2: Maximization**\nWe calculate the score function (first derivative):\n$$U(\\lambda) = \\ell\'(\\lambda) = -n + \\frac{\\sum_{i=1}^n X_i}{\\lambda}$$\n\nSetting the score to zero:\n$$-n + \\frac{\\sum_{i=1}^n X_i}{\\lambda} = 0 \\implies n\\lambda = \\sum_{i=1}^n X_i \\implies \\hat{\\lambda}_{MLE} = \\frac{1}{n}\\sum_{i=1}^n X_i = \\bar{X}$$\n\nTo guarantee that this critical point is a maximum, we check the second derivative:\n$$\\ell\'\'(\\lambda) = -\\frac{\\sum_{i=1}^n X_i}{\\lambda^2}$$\n\nSince $X_i \\ge 0$ for all Poisson variables, the sum is non-negative. If at least one $X_i > 0$ (which is virtually guaranteed for any active process):\n$$\\ell\'\'(\\hat{\\lambda}) = -\\frac{n\\bar{X}}{\\bar{X}^2} = -\\frac{n}{\\bar{X}} < 0$$\n\nSince the second derivative is strictly negative, the critical point is a global maximum. Thus, **$\\hat{\\lambda}_{MLE} = \\bar{X}$**.'
      },
      {
        id: 'prac-stats-8-2',
        title: 'Practice 2: Joint MLE for Normal Distribution Parameters',
        titleHe: 'תרגול 2: אומד נראות מרבית משותף לפרמטרי התפלגות נורמלית',
        isPractice: true,
        content: 'Let $X_1, \\dots, X_n \\sim N(\\mu, \\sigma^2)$ be i.i.d. variables where both the mean $\\mu$ and variance $\\sigma^2$ are unknown parameters.\n\nDerive the joint Maximum Likelihood Estimator for the parameter pair $(\\mu, \\sigma^2)$.',
        contentHe: 'יהיו $X_1, \\dots, X_n \\sim N(\\mu, \\sigma^2)$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה, כאשר גם התוחלת $\\mu$ וגם השונות $\\sigma^2$ אינן ידועות.\n\nפתחו את אומד הנראות המרבית (MLE) המשותף עבור צמד הפרמטרים $(\\mu, \\sigma^2)$.',
        simplifiedLogic: 'We write the joint log-likelihood as a function of two variables $\\mu$ and $\\sigma^2$. By taking partial derivatives, we find that the likelihood is maximized when the mean is the sample average $\\bar{X}$ and the variance is the biased sample variance $S_d^2$.',
        simplifiedLogicHe: 'אנו כותבים את פונקציית הלוג-נראות המשותפת כפונקציה של שני משתנים $\\mu$ ו-$\\sigma^2$. על ידי גזירה חלקית, אנו מגלים שהנראות מגיעה למקסימום כאשר התוחלת היא ממוצע המדגם $\\bar{X}$ והשונות היא שונות המדגם המוטה $S_d^2$.',
        toolboxConnection: 'The MLE estimator for normal variance is identical to the MME estimator. It is biased, which is why Bessel correction ($n-1$) is applied in standard sample variance calculations.',
        toolboxConnectionHe: 'אומד הנראות המרבית לשונות נורמלית זהה לחלוטין לאומד המומנטים. הוא מוטה, וזו הסיבה שמשתמשים בתיקון בסל ($n-1$) בחישובי שונות המדגם הסטנדרטיים.',
        keyTakeaway: 'The joint MLE estimators are $\\hat{\\mu} = \\bar{X}$ and $\\hat{\\sigma}^2 = \\frac{1}{n}\\sum(X_i - \\bar{X})^2$.',
        keyTakeawayHe: 'אומדי הנראות המרבית המשותפים הם $\\hat{\\mu} = \\bar{X}$ ו-$\\hat{\\sigma}^2 = \\frac{1}{n}\\sum(X_i - \\bar{X})^2$.',
        proof: '**Step-by-Step Proof:**\n\n**Likelihood Function**:\nThe PDF of $X_i \\sim N(\\mu, \\sigma^2)$ is:\n$$f(x; \\mu, \\sigma^2) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$\n\nFor a sample of size $n$, the log-likelihood function is:\n$$\\ell(\\mu, \\sigma^2) = \\ln \\prod_{i=1}^n \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-\\frac{(X_i-\\mu)^2}{2\\sigma^2}}$$\n$$\\ell(\\mu, \\sigma^2) = -\\frac{n}{2}\\ln(2\\pi) - \\frac{n}{2}\\ln(\\sigma^2) - \\frac{1}{2\\sigma^2}\\sum_{i=1}^n (X_i - \\mu)^2$$\n\n**Maximizing with respect to $\\mu$**:\nTaking the partial derivative with respect to $\\mu$:\n$$\\frac{\\partial \\ell}{\\partial \\mu} = \\frac{1}{\\sigma^2}\\sum_{i=1}^n (X_i - \\mu)$$\nSetting this to zero:\n$$\\sum_{i=1}^n (X_i - \\hat{\\mu}) = 0 \\implies \\sum_{i=1}^n X_i - n\\hat{\\mu} = 0 \\implies \\hat{\\mu}_{MLE} = \\bar{X}$$\n\n**Maximizing with respect to $\\sigma^2$**:\nWe define $\\theta = \\sigma^2$ as the parameter. Taking the partial derivative with respect to $\\theta$:\n$$\\frac{\\partial \\ell}{\\partial \\theta} = -\\frac{n}{2\\theta} + \\frac{1}{2\\theta^2}\\sum_{i=1}^n (X_i - \\mu)^2$$\nSetting this to zero:\n$$-\\frac{n}{2\\hat{\\theta}} + \\frac{1}{2\\hat{\\theta}^2}\\sum_{i=1}^n (X_i - \\hat{\\mu})^2 = 0 \\implies n\\hat{\\theta} = \\sum_{i=1}^n (X_i - \\bar{X})^2$$\n$$\\hat{\\sigma}^2_{MLE} = \\hat{\\theta} = \\frac{1}{n}\\sum_{i=1}^n (X_i - \\bar{X})^2$$\n\nThis completes the joint maximum likelihood derivation.'
      },
      {
        id: 'prac-stats-8-3',
        title: 'Practice 3: Boundary MLE for Uniform Distribution U(0, theta)',
        titleHe: 'תרגול 3: אומד נראות מרבית על השפה להתפלגות אחידה U(0, theta)',
        isPractice: true,
        content: 'Let $X_1, \\dots, X_n \\sim U(0, \\theta)$ be i.i.d. random variables with unknown boundary $\\theta > 0$.\n\n1. Write the likelihood function using indicator notation.\n2. Derive the MLE for $\\theta$.',
        contentHe: 'יהיו $X_1, \\dots, X_n \\sim U(0, \\theta)$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה עם חסם עליון לא ידוע $\\theta > 0$.\n\n1. כיתבו את פונקציית הנראות באמצעות סימון אינדיקטורים.\n2. פתחו את אומד הנראות המרבית (MLE) עבור $\\theta$.',
        simplifiedLogic: 'The support of the distribution is $[0, \\theta]$, meaning no data point can exceed $\\theta$. The likelihood is $\\theta^{-n}$ as long as $\\theta \\ge X_{(n)}$. To maximize this decreasing curve, we choose the smallest possible value, which is exactly the maximum observed value $X_{(n)}$.',
        simplifiedLogicHe: 'התומך של ההתפלגות הוא $[0, \\theta]$, כלומר אף נקודה במדגם אינה יכולה לעלות על $\\theta$. פונקציית הנראות היא $\\theta^{-n}$ בתנאי ש-$\theta \ge X_{(n)}$. כדי למקסם עקומה יורדת זו, אנו בוחרים את הערך הקטן ביותר האפשרי, שהוא בדיוק ערך המקסימום הנצפה במדגם $X_{(n)}$.',
        toolboxConnection: 'Calculus derivatives fail here because the maximum is at a corner/boundary point. This illustrates the absolute necessity of indicator functions in statistical analysis.',
        toolboxConnectionHe: 'הנגזרות של החשבון הדיפרנציאלי נכשלות כאן כיוון שהמקסימום מתקבל בנקודת פינה/שפה. מקרה זה מדגים את הנחיצות המוחלטת של שימוש בפונקציות אינדיקטור בניתוח סטטיסטי.',
        keyTakeaway: 'The MLE for the upper boundary of a Uniform distribution is the sample maximum $X_{(n)}$.',
        keyTakeawayHe: 'אומד הנראות המרבית לגבול העליון של התפלגות אחידה הוא מקסימום המדגם $X_{(n)}$.',
        proof: '**Step-by-Step Derivation:**\n\n**Part 1: Likelihood with Indicators**\nThe individual PDF of $X_i \\sim U(0, \\theta)$ is:\n$$f(x; \\theta) = \\frac{1}{\\theta} I_{\\{0 \\le x \\le \\theta\\}}$$\n\nFor an independent sample of size $n$, the joint likelihood is:\n$$L(\\theta) = \\prod_{i=1}^n \\frac{1}{\\theta} I_{\\{0 \\le X_i \\le \\theta\\}} = \\frac{1}{\\theta^n} \\prod_{i=1}^n I_{\\{0 \\le X_i \\le \\theta\\}}$$\n\nFor the product of indicator functions to be 1, every single $X_i$ must satisfy $0 \\le X_i \\le \\theta$. This is equivalent to saying the minimum is non-negative and the maximum is less than or equal to $\\theta$:\n$$L(\\theta) = \\frac{1}{\\theta^n} I_{\\{0 \\le X_{(1)}\\}} I_{\\{X_{(n)} \\le \\theta\\}}$$\nwhere $X_{(1)} = \\min(X_1, \\dots, X_n)$ and $X_{(n)} = \\max(X_1, \\dots, X_n)$.\n\n**Part 2: Optimization**\nWe evaluate the behavior of $L(\\theta)$ as a function of $\\theta$:\n- For $\\theta < X_{(n)}$, the indicator $I_{\\{X_{(n)} \\le \\theta\\}} = 0$, so $L(\\theta) = 0$.\n- For $\\theta \\ge X_{(n)}$, $L(\\theta) = \\frac{1}{\\theta^n}$.\n\nSince $\\frac{1}{\\theta^n}$ is a strictly decreasing function of $\\theta$ for $\\theta > 0$, the maximum of $L(\\theta)$ is achieved at the smallest possible value in the domain $\\theta \\ge X_{(n)}$, which is exactly $\\theta = X_{(n)}$.\n\nTherefore:\n$$\\hat{\\theta}_{MLE} = X_{(n)} = \\max(X_1, \\dots, X_n)$$\nThis completes the rigorous mathematical proof.'
      },
      {
        id: 'prac-stats-8-4',
        title: 'Practice 4: MLE for Both Boundaries of Uniform Distribution U(a, b)',
        titleHe: 'תרגול 4: אומד נראות מרבית לשני הגבולות של התפלגות אחידה U(a, b)',
        isPractice: true,
        content: 'Let $X_1, \\dots, X_n \\sim U(a, b)$ be i.i.d. variables where both the lower bound $a$ and the upper bound $b$ are unknown parameters. Derive the MLE estimators for both $a$ and $b$.',
        contentHe: 'יהיו $X_1, \\dots, X_n \\sim U(a, b)$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה, כאשר גם הגבול התחתון $a$ וגם הגבול העליון $b$ הם פרמטרים לא ידועים. פתחו את אומדי הנראות המרבית עבור $a$ ועבור $b$.',
        simplifiedLogic: 'To maximize the likelihood $(b-a)^{-n}$, we need to minimize the interval length $b-a$. Since $a$ must be smaller than the minimum observed value $X_{(1)}$, and $b$ must be larger than the maximum observed value $X_{(n)}$, the optimal choice is to set $a = X_{(1)}$ and $b = X_{(n)}$.',
        simplifiedLogicHe: 'כדי למקסם את הנראות $(b-a)^{-n}$, עלינו למזער ככל הניתן את אורך הקטע $b-a$. מכיוון ש-$a$ חייב להיות קטן או שווה לערך המינימלי שנצפה $X_{(1)}$, ו-$b$ חייב להיות גדול או שווה לערך המקסימלי שנצפה $X_{(n)}$, הבחירה האופטימלית היא לקבוע $a = X_{(1)}$ ו-$b = X_{(n)}$.',
        toolboxConnection: 'This is a classical example of a multi-dimensional boundary estimation problem where order statistics define the estimators.',
        toolboxConnectionHe: 'זהו דוגמה קלאסית לבעיית אמידת שפה רב-ממדית, שבה סטטיסטי הסדר (הקיצון) מגדירים את האומדים האופטימליים.',
        keyTakeaway: 'The MLE boundaries of $U(a, b)$ are the sample minimum $X_{(1)}$ and sample maximum $X_{(n)}$.',
        keyTakeawayHe: 'אומדי הנראות המרבית של גבולות $U(a, b)$ הם מינימום המדגם $X_{(1)}$ ומקסימום המדגם $X_{(n)}$.',
        proof: '**Step-by-Step Derivation:**\n\nThe PDF of $X_i \\sim U(a, b)$ is:\n$$f(x; a, b) = \\frac{1}{b-a} I_{\\{a \\le x \\le b\\}}$$\n\nFor a sample of size $n$, the joint likelihood is:\n$$L(a, b) = \\prod_{i=1}^n \\frac{1}{b-a} I_{\\{a \\le X_i \\le b\\}} = \\frac{1}{(b-a)^n} \\prod_{i=1}^n I_{\\{a \\le X_i \\le b\\}}$$\n\nEvery $X_i$ lies in $[a, b]$ if and only if the minimum $X_{(1)} \\ge a$ and the maximum $X_{(n)} \\le b$. Therefore:\n$$L(a, b) = \\frac{1}{(b-a)^n} I_{\\{a \\le X_{(1)}\\}} I_{\\{X_{(n)} \\le b\\}}$$\n\nTo maximize this expression with respect to $a$ and $b$:\n1. The indicator is non-zero only if $a \\le X_{(1)}$ and $b \\ge X_{(n)}$.\n2. Within this domain, $L(a, b) = (b-a)^{-n}$. To make this term as large as possible, we must make the denominator $(b-a)^n$ as small as possible, which means minimizing the difference $b - a$.\n3. To minimize $b - a$, we want to make $b$ as small as possible (which is bounded below by $X_{(n)}$) and $a$ as large as possible (which is bounded above by $X_{(1)}$).\n\nThus, the optimal values are:\n$$\\hat{a}_{MLE} = X_{(1)} = \\min(X_1, \\dots, X_n)$$\n$$\\hat{b}_{MLE} = X_{(n)} = \\max(X_1, \\dots, X_n)$$\n\nThis completes the rigorous mathematical proof.'
      },
      {
        id: 'prac-stats-8-5',
        title: 'Practice 5: MLE Invariance for Exponential Tail Probability',
        titleHe: 'תרגול 5: תכונת האי-שתנות עבור הסתברות זנב של התפלגות מעריכית',
        isPractice: true,
        content: 'Let $X_1, \\dots, X_n \\sim \\text{Exp}(\\lambda)$ be i.i.d. variables with unknown rate $\\lambda > 0$.\n\n1. Find the MLE of $\\lambda$.\n2. Find the MLE of the tail probability $\\theta = \\mathbb{P}(X_i > 2)$ using the invariance property of MLE.',
        contentHe: 'יהיו $X_1, \\dots, X_n \\sim \\text{Exp}(\\lambda)$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה עם קצב לא ידוע $\\lambda > 0$.\n\n1. מצאו את אומד הנראות המרבית (MLE) של $\\lambda$.\n2. מצאו את אומד הנראות המרבית של הסתברות הזנב $\\theta = \\mathbb{P}(X_i > 2)$ תוך שימוש בתכונת האי-שתנות של ה-MLE.',
        simplifiedLogic: 'The MLE of the exponential rate is $\\hat{\\lambda} = 1/\\bar{X}$. Since the probability of surviving past 2 hours is $e^{-2\\lambda}$, we apply this exact function to our estimated rate to get the MLE: $e^{-2/\\bar{X}}$.',
        simplifiedLogicHe: 'אומד הנראות המרבית של קצב ההתפלגות המעריכית הוא $\\hat{\\lambda} = 1/\\bar{X}$. מכיוון שההסתברות לשרוד מעבר ל-2 שעות היא $e^{-2\\lambda}$, אנו מפעילים את הפונקציה הזו בדיוק על הקצב המוערך ומקבלים את אומד הנראות המרבית: $e^{-2/\\bar{X}}$.',
        toolboxConnection: 'Highly valuable in reliability and survival engineering where we estimate system failures or biological survival probabilities directly from average lifetime data.',
        toolboxConnectionHe: 'שימושי ביותר בהנדסת אמינות וניתוח הישרדות שבהם אנו מעריכים סיכוי כשל של מערכת או הסתברויות הישרדות ביולוגיות ישירות מתוך נתוני ממוצע אורך החיים.',
        keyTakeaway: 'The MLE of a transformed parameter is the transformation applied to the parameter\'s MLE.',
        keyTakeawayHe: 'אומד הנראות המרבית של פרמטר מותמר הוא הפעלת הטרנספורמציה על אומד הנראות המרבית המקורי.',
        proof: '**Step-by-Step Derivation:**\n\n**Part 1: MLE of $\\lambda$**\nThe PDF of $X_i \\sim \\text{Exp}(\\lambda)$ is:\n$$f(x; \\lambda) = \\lambda e^{-\\lambda x} \\quad \\text{for } x \\ge 0$$\n\nFor a sample of size $n$, the log-likelihood is:\n$$\\ell(\\lambda) = \\ln \\prod_{i=1}^n \\lambda e^{-\\lambda X_i} = n\\ln\\lambda - \\lambda \\sum_{i=1}^n X_i$$\n\nTaking the derivative with respect to $\\lambda$ (score function):\n$$U(\\lambda) = \\ell\'(\\lambda) = \\frac{n}{\\lambda} - \\sum_{i=1}^n X_i$$\nSetting this to zero yields:\n$$\\hat{\\lambda}_{MLE} = \\frac{n}{\\sum_{i=1}^n X_i} = \\frac{1}{\\bar{X}}$$\n\nChecking the second derivative:\n$$\\ell\'\'(\\lambda) = -\\frac{n}{\\lambda^2} < 0$$\nwhich guarantees a global maximum.\n\n**Part 2: MLE of $\\theta = \\mathbb{P}(X_i > 2)$**\nThe theoretical tail probability is:\n$$\\theta = \\mathbb{P}(X_i > 2) = \\int_2^{\\infty} \\lambda e^{-\\lambda x} \\, dx = \\left[-e^{-\\lambda x}\\right]_2^{\\infty} = e^{-2\\lambda}$$\n\nWe define $g(\\lambda) = e^{-2\\lambda}$. By the **Invariance Property of MLE**, the MLE of the transformed parameter $\\theta = g(\\lambda)$ is:\n$$\\hat{\\theta}_{MLE} = g(\\hat{\\lambda}_{MLE}) = e^{-2\\hat{\\lambda}_{MLE}} = e^{-\\frac{2}{\\bar{X}}}$$\n\nThis completes the step-by-step rigorous derivation.'
      }
    ],
    quiz: [
      {
        question: 'Let $X_1, \\dots, X_n \\sim \\text{Exp}(\\lambda)$ be i.i.d. variables. What is the Maximum Likelihood Estimator (MLE) of the rate parameter $\\lambda$?',
        questionHe: 'יהיו $X_1, \\dots, X_n \\sim \\text{Exp}(\\lambda)$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה. מהו אומד הנראות המרבית (MLE) של פרמטר הקצב $\\lambda$?',
        options: [
          '\\bar{X}',
          '1/\\bar{X}',
          'X_{(1)}',
          'n/\\bar{X}'
        ],
        optionsHe: [
          '\\bar{X}',
          '1/\\bar{X}',
          'X_{(1)}',
          'n/\\bar{X}'
        ],
        correctAnswerIndex: 1,
        explanation: 'By setting the derivative of the log-likelihood function $n/\\lambda - n\\bar{X} = 0$, we find $\\hat{\\lambda}_{MLE} = 1/\\bar{X}$. The second derivative is $-n/\\lambda^2 < 0$, verifying a maximum.',
        explanationHe: 'על ידי השוואת הנגזרת של פונקציית הלוג-נראות $n/\\lambda - n\\bar{X} = 0$ לאפס, אנו מקבלים $\\hat{\\lambda}_{MLE} = 1/\\bar{X}$. הנגזרת השנייה היא $-n/\\lambda^2 < 0$, מה שמוכיח קיומו של מקסימום.'
      },
      {
        question: 'Let $\\hat{\\theta}$ be the MLE of a parameter $\\theta$. What is the MLE of $\\psi = \\theta^2 + 1$?',
        questionHe: 'יהי $\\hat{\\theta}$ אומד הנראות המרבית של פרמטר $\\theta$. מהו אומד הנראות המרבית של $\\psi = \\theta^2 + 1$?',
        options: [
          '\\hat{\\theta}^2 + 1',
          '\\text{Not enough information}',
          '(\\hat{\\theta} + 1)^2',
          '\\frac{1}{\\hat{\\theta}^2 + 1}'
        ],
        optionsHe: [
          '\\hat{\\theta}^2 + 1',
          '\\text{אין מספיק מידע}',
          '(\\hat{\\theta} + 1)^2',
          '\\frac{1}{\\hat{\\theta}^2 + 1}'
        ],
        correctAnswerIndex: 0,
        explanation: 'By the Invariance Property of Maximum Likelihood Estimators, the MLE of any transformed parameter $g(\\theta)$ is simply the function evaluated at the parameter\'s MLE: $g(\\hat{\\theta}) = \\hat{\\theta}^2 + 1$.',
        explanationHe: 'לפי תכונת האי-שתנות של אומדי נראות מרבית, אומד הנראות המרבית של פרמטר מותמר $g(\\theta)$ הוא פשוט הפעלת הפונקציה על האומד המקורי: $g(\\hat{\\theta}) = \\hat{\\theta}^2 + 1$.'
      }
    ]
  }
,
  {
    id: 'stats-9',
    courseId: 'stats',
    chapterNumber: '9',
    title: 'Chapter 9: Confidence Intervals',
    titleHe: 'פרק 9: מרווחי סמך',
    intro: 'This chapter introduces the concept of interval estimation. Unlike point estimators, which provide a single numerical value, confidence intervals provide a range of plausible values for an unknown parameter, associated with a specified confidence level. We cover pivotal quantities, intervals for normal means (both variance known and unknown), proportions, and sample size calculations.',
    introHe: 'פרק זה מציג את מושג אמידת המרווחים. בניגוד לאומדים נקודתיים המספקים ערך מספרי בודד, מרווחי סמך מספקים טווח של ערכים סבירים עבור פרמטר לא ידוע, המשויך לרמת סמך מוגדרת. אנו נלמד על פונקציות ציר (pivotal quantities), מרווחי סמך לתוחלת של התפלגות נורמלית (כאשר השונות ידועה או שאינה ידועה), מרווחי סמך לפרופורציה וחישובי גודל מדגם נדרש.',
    motivation: 'In empirical sciences and clinical trials, point estimates are almost never reported alone. A confidence interval quantifies the uncertainty in our estimation, enabling decision-makers to understand the margin of error and the reliability of their claims.',
    motivationHe: 'במדעים אמפיריים ובניסויים קליניים, אומדים נקודתיים כמעט לעולם אינם מדווחים לבדם. מרווח סמך מכמת את אי-הוודאות באמידה שלנו, ומאפשר למקבל ההחלטות להבין את מרווח הטעות ואת מידת האמינות של הממצאים.',
    definitions: [
      {
        id: 'def-stats-9-1',
        title: 'Confidence Intervals & Pivotal Quantities',
        titleHe: 'מרווחי סמך ופונקציית ציר',
        content: 'Let $X_1, \\dots, X_n$ be a sample from a distribution parameterized by an unknown parameter $\\theta$.\n\n* **Confidence Interval (CI)**: An interval $[L(X), U(X)]$ constructed from the sample such that the true parameter $\\theta$ lies within this range with a specified probability $1 - \\alpha$:\n$$P(L(X) \\le \\theta \\le U(X)) = 1 - \\alpha$$\nwhere $1 - \\alpha$ is the **confidence level** (e.g., $95\\%$).\n\n* **Pivotal Quantity $Q(X, \\theta)$**: A function of the sample data $X$ and the parameter $\\theta$ whose probability distribution is completely independent of $\\theta$ and any other nuisance parameters. We use pivotal quantities to derive exact boundaries for confidence intervals.',
        contentHe: 'יהי $X_1, \\dots, X_n$ מדגם מתוך התפלגות התלויה בפרמטר לא ידוע $\\theta$.\n\n* **מרווח סמך (CI)**: מרווח $[L(X), U(X)]$ המחושב מתוך ערכי המדגם, כך שהפרמטר האמיתי $\\theta$ נמצא בטווח זה בהסתברות מוגדרת מראש של $1 - \\alpha$:\n$$P(L(X) \\le \\theta \\le U(X)) = 1 - \\alpha$$\nכאשר $1 - \\alpha$ נקרא **רמת הסמך** (למשל, $95\\%$).\n\n* **פונקציית ציר (Pivotal Quantity) $Q(X, \\theta)$**: פונקציה של נתוני המדגם $X$ ושל הפרמטר $\\theta$ שהתפלגות ההסתברות שלה אינה תלויה בכלל בפרמטר $\\theta$ (או בכל פרמטר מפריע אחר). אנו משתמשים בפונקציית ציר כדי לגזור את הגבולות המדויקים של מרווח הסמך.',
        simplifiedLogic: 'Instead of guessing a single point, we build a "net" (the interval) that is designed to catch the true parameter value $95\\%$ of the times we repeat the experiment.',
        simplifiedLogicHe: 'במקום לנחש נקודה בודדת, אנו בונים "רשת" (המרווח) אשר מתוכננת ללכוד את ערך הפרמטר האמיתי ב-$95\\%$ מהפעמים שנחזור על הניסוי.',
        toolboxConnection: 'Underpins A/B testing statistical significance and precision limits in modern physics experiments (like measuring particle masses).',
        toolboxConnectionHe: 'מהווה את הבסיס למובהקות סטטיסטית במבחני A/B ולקביעת גבולות דיוק בניסויים בפיזיקה מודרנית (כמו מדידת מסות של חלקיקים).',
        keyTakeaway: 'A pivotal quantity distribution is independent of the parameter, enabling exact interval construction.',
        keyTakeawayHe: 'ההתפלגות של פונקציית ציר אינה תלויה בפרמטר, מה שמאפשר בנייה של מרווח סמך מדויק.'
      },
      {
        id: 'def-stats-9-2',
        title: 'CI for a Normal Mean (Variance Known vs. Unknown)',
        titleHe: 'מרווח סמך לתוחלת (שונות ידועה לעומת שונות לא ידועה)',
        content: 'Let $X_1, \\dots, X_n \\sim N(\\mu, \\sigma^2)$ be i.i.d. variables. We construct a confidence interval for $\\mu$ under two scenarios:\n\n1. **Variance $\\sigma^2$ is Known**: We use the standard normal pivotal quantity $Z = \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\sim N(0,1)$, yielding the **$Z$-interval**:\n$$\\left[ \\bar{X} - z_{1-\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} ,\\ \\bar{X} + z_{1-\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} \\right]$$\nwhere $z_{1-\\alpha/2}$ is the standard normal critical value.\n\n2. **Variance $\\sigma^2$ is Unknown**: We substitute $\\sigma$ with the sample standard deviation $S$ and use the Student $t$ pivotal quantity $t = \\frac{\\bar{X} - \\mu}{S/\\sqrt{n}} \\sim t(n-1)$, yielding the **$t$-interval**:\n$$\\left[ \\bar{X} - t_{1-\\alpha/2, n-1} \\frac{S}{\\sqrt{n}} ,\\ \\bar{X} + t_{1-\\alpha/2, n-1} \\frac{S}{\\sqrt{n}} \\right]$$\nwhere $t_{1-\\alpha/2, n-1}$ is the critical value of the $t$-distribution with $n-1$ degrees of freedom.',
        contentHe: 'יהיו $X_1, \\dots, X_n \\sim N(\\mu, \\sigma^2)$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה. אנו בונים מרווח סמך עבור התוחלת $\\mu$ בשני מקרים:\n\n1. **השונות $\\sigma^2$ ידועה**: אנו משתמשים בפונקציית הציר הנורמלית הסטנדרטית $Z = \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\sim N(0,1)$, המניבה את **מרווח ה-Z**:\n$$\\left[ \\bar{X} - z_{1-\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} ,\\ \\bar{X} + z_{1-\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} \\right]$$\nכאשר $z_{1-\\alpha/2}$ הוא הערך הקריטי מהתפלגות נורמלית סטנדרטית.\n\n2. **השונות $\\sigma^2$ אינה ידועה**: אנו מחליפים את $\\sigma$ בסטיית התקן המדגמית $S$ ומשתמשים בפונקציית ציר של התפלגות $t$ של סטודנט $t = \\frac{\\bar{X} - \\mu}{S/\\sqrt{n}} \\sim t(n-1)$, המניבה את **מרווח ה-t**:\n$$\\left[ \\bar{X} - t_{1-\\alpha/2, n-1} \\frac{S}{\\sqrt{n}} ,\\ \\bar{X} + t_{1-\\alpha/2, n-1} \\frac{S}{\\sqrt{n}} \\right]$$\nכאשר $t_{1-\\alpha/2, n-1}$ הוא הערך הקריטי של התפלגות $t$ עם $n-1$ דרגות חופש.',
        simplifiedLogic: 'When we do not know the true variance, we use the sample variance instead. This adds extra uncertainty, which is accounted for by using the wider t-distribution instead of the normal distribution.',
        simplifiedLogicHe: 'כאשר איננו יודעים את השונות האמיתית באוכלוסייה, אנו משתמשים בשונות המדגם במקום. הדבר מוסיף אי-ודאות, אותה אנו מאזנים על ידי שימוש בהתפלגות t שהיא רחבה יותר מההתפלגות הנורמלית.',
        toolboxConnection: 'Essential for estimating average conversion rates or user response times in web optimization when population variance is naturally unknown.',
        toolboxConnectionHe: 'חיוני להערכת זמני תגובה ממוצעים של משתמשים או שיעורי המרה כאשר שונות האוכלוסייה אינה ידועה מראש.',
        keyTakeaway: 'Use Z-interval if variance is known, and t-interval if variance is unknown.',
        keyTakeawayHe: 'השתמשו במרווח Z אם השונות ידועה, ובמרווח t אם השונות אינה ידועה.'
      },
      {
        id: 'def-stats-9-3',
        title: 'CI for Population Proportion & Sample Size Determination',
        titleHe: 'מרווח סמך לפרופורציה וקביעת גודל מדגם',
        content: 'Confidence intervals for proportions and rules for planning sample sizes:\n\n* **CI for a Proportion $p$**: For a large sample size $n$, the sample proportion $\\hat{p} = X/n$ is approximately normal by the CLT. Using the standard error estimate $SE = \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$, the **Wald interval** is:\n$$\\hat{p} \\pm z_{1-\\alpha/2} \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$$\n\n* **Sample Size Determination**: To guarantee that the margin of error does not exceed a specified bound $E$ with confidence level $1 - \\alpha$, the minimum required sample size is:\n$$n \\ge \\left( \\frac{z_{1-\\alpha/2} \\sigma}{E} \\right)^2$$\nIf $\\sigma$ is unknown, we can use a conservative estimate or prior pilot data.',
        contentHe: 'מרווחי סמך לפרופורציה וכללים לתכנון גדלי מדגם:\n\n* **מרווח סמך לפרופורציה $p$**: עבור גודל מדגם $n$ גדול מספיק, פרופורציית המדגם $\\hat{p} = X/n$ מתפלגת בקירוב נורמלית לפי משפט הגבול המרכזי. באמצעות אומד טעות התקן $SE = \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$, **מרווח ואלד (Wald)** הוא:\n$$\\hat{p} \\pm z_{1-\\alpha/2} \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$$\n\n* **קביעת גודל המדגם הנדרש**: כדי להבטיח שחצי רוחב מרווח הסמך (מרווח השגיאה) לא יעלה על ערך חסם מוגדר $E$ ברמת סמך $1 - \\alpha$, גודל המדגם המינימלי הנדרש הוא:\n$$n \\ge \\left( \\frac{z_{1-\\alpha/2} \\sigma}{E} \\right)^2$$\nאם $\\sigma$ אינה ידועה, ניתן להשתמש בהערכה שמרנית או בנתוני פיילוט קודמים.',
        simplifiedLogic: 'Wald interval wraps the sample proportion with a normal bell curve. For sample size, to cut your error in half, you need four times as many samples.',
        simplifiedLogicHe: 'מרווח ואלד עוטף את פרופורציית המדגם בעקומת פעמון נורמלית. לגבי גודל המדגם, כדי לחצות את השגיאה בחצי, עליך להגדיל את המדגם פי ארבעה.',
        toolboxConnection: 'Critical for election polling and sizing marketing campaigns to guarantee a maximum 3% margin of error.',
        toolboxConnectionHe: 'קריטי לסקרי בחירות ולתכנון קמפיינים שיווקיים כדי להבטיח מרווח טעות מרבי של לא יותר מ-3%.',
        keyTakeaway: 'Sample size scales quadratically with the inverse of the desired error bound.',
        keyTakeawayHe: 'גודל המדגם גדל ריבועית ביחס הפוך לחסם השגיאה המבוקש.'
      },
      {
        id: 'prac-stats-9-1',
        title: 'Practice 1: CI for Mean with Known Variance',
        titleHe: 'תרגול 1: מרווח סמך לתוחלת כאשר השונות ידועה',
        isPractice: true,
        content: 'Given a sample of size $n=100$ from a normal distribution with known variance $\\sigma^2=900$. The sample mean is $\\bar{X}=3000$. Construct a $95\\%$ confidence interval for $\\mu$.',
        contentHe: 'בהינתן מדגם בגודל $n=100$ מהתפלגות נורמלית בעלת שונות ידועה $\\sigma^2=900$. ממוצע המדגם הוא $\\bar{X}=3000$. חשבו מרווח סמך ברמת סמך של $95\\%$ עבור התוחלת $\\mu$.',
        proof: 'We collect the parameters:\n* $n = 100$\n* $\\sigma^2 = 900 \\implies \\sigma = 30$\n* $\\bar{X} = 3000$\n* Confidence Level $= 0.95 \\implies \\alpha = 0.05 \\implies z_{1-\\alpha/2} = z_{0.975} = 1.96$\n\nApplying the Z-interval formula:\n$$E = z_{1-\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} = 1.96 \\cdot \\frac{30}{\\sqrt{100}} = 1.96 \\cdot 3 = 5.88$$\n\nThus, the confidence interval is:\n$$[L, U] = [\\bar{X} - E, \\bar{X} + E] = [3000 - 5.88, 3000 + 5.88] = [2994.12, 3005.88]$$',
        proofHe: 'נאסוף את הפרמטרים מתוך השאלה:\n* $n = 100$\n* $\\sigma^2 = 900 \\implies \\sigma = 30$\n* $\\bar{X} = 3000$\n* רמת הסמך היא $0.95 \\implies \\alpha = 0.05 \\implies z_{1-\\alpha/2} = z_{0.975} = 1.96$\n\nנפעיל את נוסחת מרווח ה-Z:\n$$E = z_{1-\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} = 1.96 \\cdot \\frac{30}{\\sqrt{100}} = 1.96 \\cdot 3 = 5.88$$\n\nלכן, מרווח הסמך הוא:\n$$[L, U] = [\\bar{X} - E, \\bar{X} + E] = [3000 - 5.88, 3000 + 5.88] = [2994.12, 3005.88]$$'
      },
      {
        id: 'prac-stats-9-2',
        title: 'Practice 2: Sample Size Determination',
        titleHe: 'תרגול 2: קביעת גודל מדגם מינימלי',
        isPractice: true,
        content: 'Using the parameters from Practice 1 ($\\sigma=30$, $95\\%$ confidence level), determine the minimum sample size $n$ required so that the margin of error does not exceed $3$.',
        contentHe: 'בהתבסס על הנתונים מתרגול 1 (שונות $\\sigma^2=900$ ורמת סמך $95\\%$), מצאו את גודל המדגם המינימלי $n$ הנדרש כך שחצי רוחב מרווח הסמך (חסימת השגיאה) לא יעלה על $3$.',
        proof: 'We require the margin of error $E \\le 3$. The formula is:\n$$E = z_{1-\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} \\le 3$$\n\nSubstitute the known values:\n$$1.96 \\cdot \\frac{30}{\\sqrt{n}} \\le 3 \\implies \\frac{58.8}{\\sqrt{n}} \\le 3$$\n$$\\sqrt{n} \\ge \\frac{58.8}{3} = 19.6$$\n$$n \\ge 19.6^2 = 384.16$$\n\nSince $n$ must be an integer, we round up to get the minimum sample size:\n$$n = 385$$',
        proofHe: 'אנו דורשים שחצי רוחב מרווח הסמך (השגיאה) יקיים $E \\le 3$. הנוסחה היא:\n$$E = z_{1-\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} \\le 3$$\n\nנציב את הערכים הידועים לנו:\n$$1.96 \\cdot \\frac{30}{\\sqrt{n}} \\le 3 \\implies \\frac{58.8}{\\sqrt{n}} \\le 3$$\n$$\\sqrt{n} \\ge \\frac{58.8}{3} = 19.6$$\n$$n \\ge 19.6^2 = 384.16$$\n\nמכיוון שגודל מדגם חייב להיות מספר שלם, אנו מעגלים תמיד כלפי מעלה לקבלת גודל המדגם המינימלי:\n$$n = 385$$'
      },
      {
        id: 'prac-stats-9-3',
        title: 'Practice 3: CI for Mean with Unknown Variance',
        titleHe: 'תרגול 3: מרווח סמך לתוחלת כאשר השונות אינה ידועה (התפלגות $t$)',
        isPractice: true,
        content: 'A random sample of $n=16$ observations is drawn from a normal population. The sample mean is $\\bar{X}=50$ and the sample standard deviation is $S=8$. Construct a $95\\%$ confidence interval for $\\mu$.',
        contentHe: 'מדגם מקרי של $n=16$ תצפיות נלקח מאוכלוסייה נורמלית. ממוצע המדגם הוא $\\bar{X}=50$ וסטיית התקן המדגמית היא $S=8$. חשבו מרווח סמך ברמת סמך של $95\\%$ עבור התוחלת $\\mu$.',
        proof: 'Since the variance is unknown and the sample size is small ($n=16$), we use the Student t-distribution.\n* $df = n - 1 = 15$\n* $\\bar{X} = 50$\n* $S = 8$\n* $1-\\alpha = 0.95 \\implies \\alpha = 0.05 \\implies t_{1-\\alpha/2, n-1} = t_{0.975, 15} = 2.131$\n\nApplying the t-interval formula:\n$$E = t_{1-\\alpha/2, n-1} \\frac{S}{\\sqrt{n}} = 2.131 \\cdot \\frac{8}{\\sqrt{16}} = 2.131 \\cdot 2 = 4.262$$\n\nThus, the confidence interval is:\n$$[L, U] = [50 - 4.262, 50 + 4.262] = [45.738, 54.262]$$',
        proofHe: 'מכיוון ששונות האוכלוסייה אינה ידועה וגודל המדגם קטן ($n=16$), נשתמש במרווח המבוסס על התפלגות t של סטודנט.\n* דרגות החופש: $df = n - 1 = 15$\n* ממוצע המדגם: $\\bar{X} = 50$\n* סטיית התקן המדגמית: $S = 8$\n* רמת הסמך היא $0.95 \\implies \\alpha = 0.05 \\implies t_{1-\\alpha/2, n-1} = t_{0.975, 15} = 2.131$\n\nנפעיל את נוסחת מרווח ה-t:\n$$E = t_{1-\\alpha/2, n-1} \\frac{S}{\\sqrt{n}} = 2.131 \\cdot \\frac{8}{\\sqrt{16}} = 2.131 \\cdot 2 = 4.262$$\n\nלכן, מרווח הסמך הוא:\n$$[L, U] = [50 - 4.262, 50 + 4.262] = [45.738, 54.262]$$'
      },
      {
        id: 'prac-stats-9-4',
        title: 'Practice 4: CI for Proportion',
        titleHe: 'תרגול 4: מרווח סמך לפרופורציה',
        isPractice: true,
        content: 'In a random sample of $n=400$ citizens, $120$ support a certain policy. Construct a $95\\%$ confidence interval for the true population proportion $p$.',
        contentHe: 'במדגם מקרי של $n=400$ אזרחים, $120$ תומכים במדיניות מסוימת. חשבו מרווח סמך ברמת סמך של $95\\%$ עבור הפרופורציה האמיתית באוכלוסייה $p$.',
        proof: 'We estimate the sample proportion:\n$$\\hat{p} = \\frac{120}{400} = 0.3$$\n\nThe standard error of the estimate is:\n$$SE = \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}} = \\sqrt{\\frac{0.3 \\cdot 0.7}{400}} = \\sqrt{\\frac{0.21}{400}} = \\frac{\\sqrt{0.21}}{20} \\approx \\frac{0.45826}{20} = 0.02291$$\n\nFor a $95\\%$ confidence level, the critical value is $z_{0.975} = 1.96$. The margin of error is:\n$$E = z_{0.975} \\cdot SE = 1.96 \\cdot 0.02291 \\approx 0.0449$$\n\nThus, the confidence interval is:\n$$[L, U] = [0.3 - 0.0449, 0.3 + 0.0449] = [0.2551, 0.3449]$$',
        proofHe: 'נאמוד את פרופורציית המדגם:\n$$\\hat{p} = \\frac{120}{400} = 0.3$$\n\nטעות התקן של האומד היא:\n$$SE = \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}} = \\sqrt{\\frac{0.3 \\cdot 0.7}{400}} = \\sqrt{\\frac{0.21}{400}} = \\frac{\\sqrt{0.21}}{20} \\approx \\frac{0.45826}{20} = 0.02291$$\n\nעבור רמת סמך של $95\\%$, הערך הקריטי הוא $z_{0.975} = 1.96$. חסימת השגיאה (Margin of Error) היא:\n$$E = z_{0.975} \\cdot SE = 1.96 \\cdot 0.02291 \\approx 0.0449$$\n\nלכן, מרווח הסמך לפרופורציה הוא:\n$$[L, U] = [0.3 - 0.0449, 0.3 + 0.0449] = [0.2551, 0.3449]$$'
      },
      {
        id: 'prac-stats-9-5',
        title: 'Practice 5: CI for Variance',
        titleHe: 'תרגול 5: מרווח סמך לשונות (התפלגות חי בריבוע $\\chi^2$)',
        isPractice: true,
        content: 'A normal sample of size $n=20$ has a sample variance $S^2=25$. Construct a $90\\%$ confidence interval for the true variance $\\sigma^2$.',
        contentHe: 'מדגם נורמלי בגודל $n=20$ הניב שונות מדגמית $S^2=25$. חשבו מרווח סמך ברמת סמך של $90\\%$ עבור השונות האמיתית באוכלוסייה $\\sigma^2$.',
        proof: 'We construct a CI for variance using the Chi-Square distribution pivotal quantity $Q = \\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)$.\n* $n = 20 \\implies df = 19$\n* $S^2 = 25$\n* $1-\\alpha = 0.90 \\implies \\alpha/2 = 0.05$\n\nUsing the Chi-Square table for $19$ degrees of freedom:\n* Lower critical value: $\\chi^2_{0.05, 19} = 10.117$\n* Upper critical value: $\\chi^2_{0.95, 19} = 30.144$\n\nApplying the formula:\n$$[L, U] = \\left[ \\frac{(n-1)S^2}{\\chi^2_{1-\\alpha/2, n-1}} ,\\ \\frac{(n-1)S^2}{\\chi^2_\\alpha/2, n-1} \\right]$$\n$$L = \\frac{19 \\cdot 25}{30.144} = \\frac{475}{30.144} \\approx 15.76$$\n$$U = \\frac{19 \\cdot 25}{10.117} = \\frac{475}{10.117} \\approx 46.95$$\n\nThus, the $90\\%$ confidence interval for the variance $\\sigma^2$ is:\n$$[15.76, 46.95]$$',
        proofHe: 'אנו בונים מרווח סמך עבור השונות באמצעות פונקציית ציר המתפלגת חי בריבוע: $Q = \\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)$.\n* $n = 20 \\implies df = 19$\n* השונות המדגמית היא $S^2 = 25$\n* רמת הסמך היא $0.90 \\implies \\alpha = 0.10 \\implies \\alpha/2 = 0.05$\n\nמתוך טבלת התפלגות חי בריבוע עבור $19$ דרגות חופש:\n* ערך קריטי תחתון: $\\chi^2_{0.05, 19} = 10.117$\n* ערך קריטי עליון: $\\chi^2_{0.95, 19} = 30.144$\n\nנפעיל את נוסחת המרווח:\n$$[L, U] = \\left[ \\frac{(n-1)S^2}{\\chi^2_{1-\\alpha/2, n-1}} ,\\ \\frac{(n-1)S^2}{\\chi^2_\\alpha/2, n-1} \\right]$$\n$$L = \\frac{19 \\cdot 25}{30.144} = \\frac{475}{30.144} \\approx 15.76$$\n$$U = \\frac{19 \\cdot 25}{10.117} = \\frac{475}{10.117} \\approx 46.95$$\n\nלכן, מרווח הסמך ברמת סמך של $90\\%$ עבור השונות $\\sigma^2$ הוא:\n$$[15.76, 46.95]$$'
      }
    ],
    quiz: [
      {
        question: 'What happens to the width of a confidence interval if the confidence level increases (e.g., from $95\\%$ to $99\\%$) while keeping the sample size constant?',
        questionHe: 'מה קורה לרוחב מרווח הסמך כאשר רמת הסמך עולה (למשל מ-$95\\%$ ל-$99\\%$) תוך שמירה על גודל מדגם קבוע?',
        options: [
          'It increases',
          'It decreases',
          'It remains the same',
          'It becomes zero'
        ],
        optionsHe: [
          'הוא גדל',
          'הוא קטן',
          'הוא נשאר זהה',
          'הוא הופך לאפס'
        ],
        correctAnswerIndex: 0,
        explanation: 'Increasing the confidence level requires a larger critical value (e.g., from $1.96$ to $2.576$), which directly increases the margin of error and widens the interval.',
        explanationHe: 'העלאת רמת הסמך דורשת ערך קריטי גדול יותר (למשל, מ-1.96 ל-2.576), מה שמגדיל ישירות את חסימת השגיאה ומרחיב את המרווח.'
      },
      {
        question: 'If we multiply the sample size $n$ by $4$, what happens to the width of the confidence interval for the mean (assuming $\\sigma$ is constant)?',
        questionHe: 'אם נכפיל את גודל המדגם $n$ פי $4$, מה יקרה לרוחב מרווח הסמך עבור התוחלת (בהנחה ש-$\\sigma$ קבוע)?',
        options: [
          'It is halved',
          'It is doubled',
          'It is divided by 4',
          'It remains unchanged'
        ],
        optionsHe: [
          'הוא קטן פי 2 (נחצה)',
          'הוא גדל פי 2 (מוכפל)',
          'הוא קטן פי 4',
          'הוא נותר ללא שינוי'
        ],
        correctAnswerIndex: 0,
        explanation: 'The margin of error is inversely proportional to $\\sqrt{n}$. Multiplying $n$ by $4$ divides the standard error by $\\sqrt{4} = 2$, thereby halving the width.',
        explanationHe: 'חסימת השגיאה נמצאת ביחס הפוך לשורש של $n$. הכפלת $n$ פי $4$ מחלקת את סטיית התקן של הממוצע ב-$\\sqrt{4}=2$, ובכך חוצה את רוחב המרווח.'
      }
    ]
  },
  {
    id: 'stats-10',
    courseId: 'stats',
    chapterNumber: '10',
    title: 'Chapter 10: Hypothesis Testing',
    titleHe: 'פרק 10: מבחני השערות',
    intro: 'This chapter covers the framework of statistical hypothesis testing. We learn how to formulate null and alternative hypotheses, understand Type I and Type II errors, calculate the power of a test, perform parametric tests for means and proportions, and interpret the p-value.',
    introHe: 'פרק זה עוסק במסגרת המושגית של מבחני השערות סטטיסטיים. אנו נלמד כיצד לנסח השערת אפס והשערה אלטרנטיבית, נבין את המשמעות של טעויות מסוג ראשון ומסוג שני, נחשב את עוצמת המבחן, נבצע מבחנים פרמטריים עבור תוחלות ופרופורציות, ונפרש את משמעות ה-p-value.',
    motivation: 'Hypothesis testing is the standard scientific protocol for determining whether experimental results are statistically significant or merely due to random chance. It is the logical basis behind A/B testing in tech, drug efficacy approvals in medicine, and experimental validation in all fields of science.',
    motivationHe: 'מבחני השערות הם הפרוטוקול המדעי הסטנדרטי לקביעה האם תוצאות ניסיוניות הן בעלות מובהקות סטטיסטית או שהן נובעות פשוט מקשר מקרי. זהו הבסיס הלוגי שמאחורי מבחני A/B בהייטק, אישורי יעילות של תרופות ברפואה, ואימות ניסיוני בכל תחומי המדע.',
    definitions: [
      {
        id: 'def-stats-10-1',
        title: 'Hypothesis Formulation & Error Types',
        titleHe: 'ניסוח השערות וסוגי טעויות',
        content: 'We define the logical framework for making statistical decisions under uncertainty:\n\n* **Null Hypothesis ($H_0$)**: The default hypothesis that states there is no effect, no difference, or no change (e.g., $\\mu = \\mu_0$).\n\n* **Alternative Hypothesis ($H_1$ or $H_a$)**: The hypothesis we wish to establish evidence for, stating there is an effect or change (e.g., $\\mu > \\mu_0$ or $\\mu \\ne \\mu_0$).\n\n* **Type I Error (False Positive)**: Rejecting $H_0$ when it is actually true. The probability of committing this error is denoted by $\\alpha$ (the **significance level**):\n$$\\alpha = P(\\text{Reject } H_0 \\mid H_0 \\text{ is True})$$\n\n* **Type II Error (False Negative)**: Failing to reject $H_0$ when $H_0$ is false ($H_1$ is true). The probability is denoted by $\\beta$:\n$$\\beta = P(\\text{Fail to Reject } H_0 \\mid H_1 \\text{ is True})$$\n\n* **Power of a Test ($1 - \\beta$)**: The probability of correctly rejecting a false null hypothesis:\n$$\\text{Power} = 1 - \\beta = P(\\text{Reject } H_0 \\mid H_1 \\text{ is True})$$',
        contentHe: 'אנו מגדירים את המסגרת הלוגית לקבלת החלטות סטטיסטיות תחת תנאי אי-ודאות:\n\n* **השערת האפס ($H_0$)**: השערת ברירת המחדל, הטוענת שאין הבדל, אין השפעה או אין שינוי (למשל, $\\mu = \\mu_0$).\n\n* **ההשערה האלטרנטיבית ($H_1$ או $H_a$)**: ההשערה שאנו מעוניינים לבסס ולמצוא לה תימוכין סטטיסטיים, הטוענת שישנו שינוי או אפקט (למשל, $\\mu > \\mu_0$ או $\\mu \\ne \\mu_0$).\n\n* **טעות מסוג ראשון (False Positive)**: דחיית השערת האפס $H_0$ כאשר היא בעצם נכונה. ההסתברות לבצע טעות זו מסומנת ב-$\\alpha$ (והיא נקראת **רמת המובהקות**):\n$$\\alpha = P(\\text{דחיית } H_0 \\mid H_0 \\text{ נכונה})$$\n\n* **טעות מסוג שני (False Negative)**: אי-דחיית השערת האפס $H_0$ כאשר היא אינה נכונה ($H_1$ היא הנכונה). ההסתברות לכך מסומנת ב-$\\beta$:\n$$\\beta = P(\\text{אי-דחיית } H_0 \\mid H_1 \\text{ נכונה})$$\n\n* **עוצמת המבחן ($1 - \\beta$)**: ההסתברות לדחות בצורה נכונה את השערת האפס כאשר היא שקרית:\n$$\\text{עוצמת המבחן} = 1 - \\beta = P(\\text{דחיית } H_0 \\mid H_1 \\text{ נכונה})$$',
        simplifiedLogic: 'Type I error is convicting an innocent person. Type II error is letting a guilty person walk free. We set Type I error to be small (typically $5\\%$), and then try to maximize power (minimize Type II error).',
        simplifiedLogicHe: 'טעות מסוג ראשון היא הרשעת אדם חף מפשע. טעות מסוג שני היא זיכוי של אדם אשם. אנו קובעים את הטעות מסוג ראשון מראש להיות קטנה (בדרך כלל $5\\%$), ומנסים למקסם את עוצמת המבחן (כלומר למזער את הטעות מסוג שני).',
        toolboxConnection: 'Crucial for clinical trials where Type I error rate of 0.05 is legally mandated for pharmaceutical approvals.',
        toolboxConnectionHe: 'קריטי לניסויים קליניים שבהם רמת מובהקות של 0.05 היא חובה חוקית לאישור תרופות חדשות.',
        keyTakeaway: 'Type I and Type II errors are inversely related for a fixed sample size.',
        keyTakeawayHe: 'עבור גודל מדגם קבוע, קיימת מערכת יחסים הפוכה בין ההסתברות לטעות מסוג ראשון לבין ההסתברות לטעות מסוג שני.'
      },
      {
        id: 'def-stats-10-2',
        title: 'Parametric Tests for Mean (Z-Test & t-Test)',
        titleHe: 'מבחנים פרמטריים לתוחלת (מבחן Z ומבחן t)',
        content: 'Let $X_1, \\dots, X_n \\sim N(\\mu, \\sigma^2)$ be i.i.d. variables. To test $H_0: \\mu = \\mu_0$ against $H_1: \\mu \\ne \\mu_0$ (two-sided) or $H_1: \\mu > \\mu_0$ (one-sided):\n\n1. **Z-Test (Variance $\\sigma^2$ is Known)**: The test statistic is:\n$$Z = \\frac{\\bar{X} - \\mu_0}{\\sigma/\\sqrt{n}}$$\nUnder $H_0$, $Z \\sim N(0,1)$. We reject $H_0$ if $|Z| > z_{1-\\alpha/2}$ (two-sided) or $Z > z_{1-\\alpha}$ (one-sided right).\n\n2. **t-Test (Variance $\\sigma^2$ is Unknown)**: The test statistic is:\n$$t = \\frac{\\bar{X} - \\mu_0}{S/\\sqrt{n}}$$\nUnder $H_0$, $t \\sim t(n-1)$. We reject $H_0$ if $|t| > t_{1-\\alpha/2, n-1}$ (two-sided) or $t > t_{1-\\alpha, n-1}$ (one-sided right).',
        contentHe: 'יהיו $X_1, \\dots, X_n \\sim N(\\mu, \\sigma^2)$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה. כדי לבחון את השערת האפס $H_0: \\mu = \\mu_0$ מול $H_1: \\mu \\ne \\mu_0$ (מבחן דו-צדדי) או $H_1: \\mu > \\mu_0$ (מבחן חד-צדדי):\n\n1. **מבחן Z (כאשר השונות $\\sigma^2$ ידועה)**: סטטיסטי המבחן הוא:\n$$Z = \\frac{\\bar{X} - \\mu_0}{\\sigma/\\sqrt{n}}$$\nתחת השערת האפס $H_0$, מתקיים $Z \\sim N(0,1)$. נדחה את $H_0$ אם $|Z| > z_{1-\\alpha/2}$ (דו-צדדי) או $Z > z_{1-\\alpha}$ (חד-צדדי ימני).\n\n2. **מבחן t (כאשר השונות $\\sigma^2$ אינה ידועה)**: סטטיסטי המבחן הוא:\n$$t = \\frac{\\bar{X} - \\mu_0}{S/\\sqrt{n}}$$\nתחת השערת האפס $H_0$, מתקיים $t \\sim t(n-1)$. נדחה את $H_0$ אם $|t| > t_{1-\\alpha/2, n-1}$ (דו-צדדי) או $t > t_{1-\\alpha, n-1}$ (חד-צדדי ימני).',
        simplifiedLogic: 'We measure how many standard errors our sample mean $\\bar{X}$ is away from the claimed null mean $\\mu_0$. If it is too far (e.g., more than 1.96 standard deviations), we reject the claim.',
        simplifiedLogicHe: 'אנו מודדים כמה סטיות תקן ממוצע המדגם $\\bar{X}$ רחוק מהתוחלת המובטחת $\\mu_0$ תחת השערת האפס. אם המרחק גדול מדי (למשל, מעל 1.96 סטיות תקן), נדחה את ההשערה.',
        toolboxConnection: 'The foundational math behind comparing treatment group vs. control group in A/B feature releases.',
        toolboxConnectionHe: 'המתמטיקה הבסיסית שמאחורי השוואת קבוצת טיפול לעומת קבוצת ביקורת בשחרור פיצ\'רים חדשים במבחני A/B.',
        keyTakeaway: 'Use Z-test if variance is known, and t-test if variance is unknown.',
        keyTakeawayHe: 'השתמשו במבחן Z אם השונות ידועה, ובמבחן t אם השונות אינה ידועה.'
      },
      {
        id: 'def-stats-10-3',
        title: 'Test for Proportion & The p-value',
        titleHe: 'מבחן לפרופורציה וערך ה-p (p-value)',
        content: 'Testing rules for binary outcomes and the standard interpretation of significance:\n\n* **Z-Test for a Proportion $p$**: To test $H_0: p = p_0$ under a large sample size, we use the Central Limit Theorem. The test statistic is:\n$$Z = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n}}}$$\nwhere under $H_0$, $Z \\approx N(0,1)$.\n\n* **The p-value**: The probability, assuming the null hypothesis $H_0$ is true, of obtaining a test statistic value at least as extreme as the one actually observed. Formally, for a right-tailed test:\n$$p\\text{-value} = P(Z \\ge Z_{\\text{obs}} \\mid H_0 \\text{ is True})$$\nWe reject $H_0$ if and only if $p\\text{-value} \\le \\alpha$.',
        contentHe: 'כללי בדיקה עבור משתנים בינאריים והפרשנות הסטנדרטית לרמת מובהקות:\n\n* **מבחן Z לפרופורציה $p$**: כדי לבחון $H_0: p = p_0$ עבור גודל מדגם גדול, נשתמש במשפט הגבול המרכזי. סטטיסטי המבחן הוא:\n$$Z = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n}}}$$\nכאשר תחת השערת האפס $H_0$, מתקיים $Z \\approx N(0,1)$.\n\n* **ערך ה-p (p-value)**: ההסתברות, תחת ההנחה שהשערת האפס $H_0$ היא נכונה, לקבל סטטיסטי מבחן קיצוני לפחות כמו הערך שנצפה בפועל במדגם. פורמלית, עבור מבחן חד-צדדי ימני:\n$$p\\text{-value} = P(Z \\ge Z_{\\text{obs}} \\mid H_0 \\text{ נכונה})$$\nאנו דוחים את השערת האפס $H_0$ אם ורק אם $p\\text{-value} \\le \\alpha$.',
        simplifiedLogic: 'The p-value measures how "surprising" our data is under the assumption that $H_0$ is true. A tiny p-value means the data is extremely surprising, so we reject $H_0$.',
        simplifiedLogicHe: 'ערך ה-p מודד כמה הנתונים שקיבלנו "מפתיעים" תחת ההנחה שהשערת האפס נכונה. ערך p קטנטן אומר שהנתונים מפתיעים באופן קיצוני, ולכן אנו מבינים שהשערת האפס כנראה אינה נכונה ודוחים אותה.',
        toolboxConnection: 'The single most universally reported metric in academic scientific papers to prove research findings are significant.',
        toolboxConnectionHe: 'המדד המדווח והנפוץ ביותר בעולם במאמרים מדעיים אקדמיים כדי להוכיח שהממצאים הם בעלי משמעות.',
        keyTakeaway: 'Reject H0 if p-value <= alpha.',
        keyTakeawayHe: 'דוחים את השערת האפס H0 אם ורק אם ערך ה-p קטן או שווה לרמת המובהקות אלפא.'
      },
      {
        id: 'prac-stats-10-1',
        title: 'Practice 1: One-sided Z-test',
        titleHe: 'תרגול 1: מבחן Z חד-צדדי לתוחלת',
        isPractice: true,
        content: 'A manufacturer claims that the mean lifetime of a component is $\\mu_0 = 1000$ hours. A quality manager suspects the lifetime is actually higher. A sample of $n=64$ components has a mean lifetime of $\\bar{X}=1025$ hours. Assuming a known population standard deviation $\\sigma=80$ hours, perform a hypothesis test at a $5\\%$ significance level.',
        contentHe: 'יצרן טוען שזמן החיים הממוצע של רכיב הוא $\\mu_0 = 1000$ שעות. מנהל האיכות חושד שזמן החיים גבוה יותר בפועל. מדגם של $n=64$ רכיבים הניב זמן חיים ממוצע של $\\bar{X}=1025$ שעות. בהנחה שסטיית התקן באוכלוסייה ידועה והיא $\\sigma=80$ שעות, בצעו מבחן השערות ברמת מובהקות של $5\\%$.',
        proof: 'We state the hypotheses:\n* $H_0: \\mu = 1000$\n* $H_1: \\mu > 1000$ (one-sided right-tailed test)\n\nWe collect the parameters:\n* $n = 64$\n* $\\bar{X} = 1025$\n* $\\sigma = 80$\n* $\\alpha = 0.05 \\implies$ Critical Value $z_{1-\\alpha} = z_{0.95} = 1.645$\n\nWe compute the Z-test statistic:\n$$Z = \\frac{\\bar{X} - \\mu_0}{\\sigma/\\sqrt{n}} = \\frac{1025 - 1000}{80/\\sqrt{64}} = \\frac{25}{80/8} = \\frac{25}{10} = 2.5$$\n\nDecision Rule:\nReject $H_0$ if $Z > 1.645$.\n\nSince $Z = 2.5 > 1.645$, we reject the null hypothesis $H_0$. There is statistically significant evidence at the $5\\%$ level that the mean lifetime is indeed higher than 1000 hours.',
        proofHe: 'ננסח את ההשערות למבחן:\n* $H_0: \\mu = 1000$\n* $H_1: \\mu > 1000$ (מבחן חד-צדדי ימני)\n\nנאסוף את הפרמטרים מהשאלה:\n* $n = 64$\n* $\\bar{X} = 1025$\n* $\\sigma = 80$\n* רמת מובהקות $\\alpha = 0.05 \\implies$ ערך קריטי חד-צדדי הוא $z_{1-\\alpha} = z_{0.95} = 1.645$\n\nנחשב את סטטיסטי המבחן Z:\n$$Z = \\frac{\\bar{X} - \\mu_0}{\\sigma/\\sqrt{n}} = \\frac{1025 - 1000}{80/\\sqrt{64}} = \\frac{25}{80/8} = \\frac{25}{10} = 2.5$$\n\nכלל ההכרעה:\nנדחה את $H_0$ אם $Z > 1.645$.\n\nמכיוון ש-$Z = 2.5 > 1.645$, אנו דוחים את השערת האפס $H_0$. ישנן ראיות סטטיסטיות מובהקות ברמת מובהקות של $5\\%$ שזמן החיים הממוצע אכן ארוך מ-1000 שעות.'
      },
      {
        id: 'prac-stats-10-2',
        title: 'Practice 2: Two-sided t-test',
        titleHe: 'תרגול 2: מבחן t דו-צדדי לתוחלת',
        isPractice: true,
        content: 'Test $H_0: \\mu = 500$ vs. $H_1: \\mu \\neq 500$ using a sample of size $n=9$ from a normal distribution. The sample mean is $\\bar{X}=496$ and the sample standard deviation is $S=6$. Use a significance level of $\\alpha = 0.05$.',
        contentHe: 'בנו השערות ובחנו $H_0: \\mu = 500$ מול $H_1: \\mu \\neq 500$ בעזרת מדגם בגודל $n=9$ מהתפלגות נורמלית. ממוצע המדגם שהתקבל הוא $\\bar{X}=496$ וסטיית התקן המדגמית היא $S=6$. רמת המובהקות היא $\\alpha = 0.05$.',
        proof: 'We state the hypotheses:\n* $H_0: \\mu = 500$\n* $H_1: \\mu \\ne 500$ (two-sided test)\n\nWe collect the parameters:\n* $n = 9 \\implies df = n - 1 = 8$\n* $\\bar{X} = 496$\n* $S = 6$\n* $\\alpha = 0.05 \\implies$ Critical values $\\pm t_{1-\\alpha/2, n-1} = \\pm t_{0.975, 8} = \\pm 2.306$\n\nWe compute the t-test statistic:\n$$t = \\frac{\\bar{X} - \\mu_0}{S/\\sqrt{n}} = \\frac{496 - 500}{6/\\sqrt{9}} = \\frac{-4}{6/3} = \\frac{-4}{2} = -2$$\n\nDecision Rule:\nReject $H_0$ if $|t| > 2.306$.\n\nSince $|t| = |-2| = 2 < 2.306$, we fail to reject the null hypothesis $H_0$. There is not enough statistical evidence at the $5\\%$ level to conclude that the population mean is different from 500.',
        proofHe: 'ננסח את ההשערות למבחן:\n* $H_0: \\mu = 500$\n* $H_1: \\mu \\ne 500$ (מבחן דו-צדדי)\n\nנאסוף את הפרמטרים מהשאלה:\n* $n = 9 \\implies$ דרגות חופש $df = n - 1 = 8$\n* ממוצע המדגם: $\\bar{X} = 496$\n* סטיית התקן המדגמית: $S = 6$\n* רמת מובהקות $\\alpha = 0.05 \\implies$ ערכים קריטיים דו-צדדיים הם $\\pm t_{1-\\alpha/2, n-1} = \\pm t_{0.975, 8} = \\pm 2.306$\n\nנחשב את סטטיסטי המבחן t:\n$$t = \\frac{\\bar{X} - \\mu_0}{S/\\sqrt{n}} = \\frac{496 - 500}{6/\\sqrt{9}} = \\frac{-4}{6/3} = \\frac{-4}{2} = -2$$\n\nכלל ההכרעה:\nנדחה את $H_0$ אם $|t| > 2.306$.\n\nמכיוון ש-$|t| = |-2| = 2 < 2.306$, אנו נמנעים מלדחות את השערת האפס $H_0$. אין מספיק ראיות סטטיסטיות מובהקות ברמת מובהקות של $5\\%$ כדי לקבוע שהתוחלת באוכלוסייה שונה מ-500.'
      },
      {
        id: 'prac-stats-10-3',
        title: 'Practice 3: Z-test for Proportion',
        titleHe: 'תרגול 3: מבחן Z לפרופורציה',
        isPractice: true,
        content: 'An online store wants to test if the return rate of items has changed from the historical value of $p_0 = 0.10$. A sample of $n=100$ orders shows $15$ returns. Test this claim at a $5\\%$ significance level (one-sided: testing if it has increased, i.e., $H_1: p > 0.10$).',
        contentHe: 'חנות מקוונת רוצה לבדוק האם שיעור ההחזרות של מוצרים עלה משיעורו ההיסטורי העומד על $p_0 = 0.10$. מדגם מקרי של $n=100$ הזמנות הראה $15$ החזרות. בחנו טענה זו ברמת מובהקות של $5\\%$ (במבחן חד-צדדי: האם שיעור ההחזרות גדל, כלומר $H_1: p > 0.10$).',
        proof: 'We state the hypotheses:\n* $H_0: p = 0.10$\n* $H_1: p > 0.10$ (one-sided right-tailed test)\n\nWe collect the parameters:\n* $n = 100$\n* observed successes $X = 15 \\implies \\hat{p} = 0.15$\n* $\\alpha = 0.05 \\implies z_{0.95} = 1.645$\n\nUnder $H_0$, the standard error is calculated using the null proportion $p_0$:\n$$SE_0 = \\sqrt{\\frac{p_0(1-p_0)}{n}} = \\sqrt{\\frac{0.10 \\cdot 0.90}{100}} = \\sqrt{\\frac{0.09}{100}} = \\frac{0.3}{10} = 0.03$$\n\nWe compute the Z-test statistic:\n$$Z = \\frac{\\hat{p} - p_0}{SE_0} = \\frac{0.15 - 0.10}{0.03} = \\frac{0.05}{0.03} \\approx 1.667$$\n\nDecision Rule:\nReject $H_0$ if $Z > 1.645$.\n\nSince $Z = 1.667 > 1.645$, we reject $H_0$. There is significant evidence at the $5\\%$ level that the return rate has increased.',
        proofHe: 'ננסח את ההשערות למבחן:\n* $H_0: p = 0.10$\n* $H_1: p > 0.10$ (מבחן חד-צדדי ימני)\n\nנאסוף את הפרמטרים מהשאלה:\n* $n = 100$\n* מספר ההחזרות בפועל הוא $X = 15 \\implies \\hat{p} = 0.15$\n* רמת מובהקות $\\alpha = 0.05 \\implies z_{0.95} = 1.645$\n\nתחת השערת האפס $H_0$, טעות התקן מחושבת על סמך פרופורציית האפס $p_0$:\n$$SE_0 = \\sqrt{\\frac{p_0(1-p_0)}{n}} = \\sqrt{\\frac{0.10 \\cdot 0.90}{100}} = \\sqrt{\\frac{0.09}{100}} = \\frac{0.3}{10} = 0.03$$\n\nנחשב את סטטיסטי המבחן Z:\n$$Z = \\frac{\\hat{p} - p_0}{SE_0} = \\frac{0.15 - 0.10}{0.03} = \\frac{0.05}{0.03} \\approx 1.667$$\n\nכלל ההכרעה:\nנדחה את $H_0$ אם $Z > 1.645$.\n\nמכיוון ש-$Z = 1.667 > 1.645$, אנו דוחים את השערת האפס $H_0$. ישנן ראיות מובהקות סטטיסטית ברמת מובהקות של $5\\%$ ששיעור ההחזרות אכן עלה.'
      },
      {
        id: 'prac-stats-10-4',
        title: 'Practice 4: p-value Calculation',
        titleHe: 'תרגול 4: חישוב ערך ה-p (p-value)',
        isPractice: true,
        content: 'For the proportion test in Practice 3 (where the test statistic was $Z = 1.67$ for a right-tailed test), calculate the exact p-value and state whether $H_0$ is rejected at $\\alpha=0.05$.',
        contentHe: 'עבור מבחן הפרופורציה בתרגול 3 (בו התקבל סטטיסטי מבחן $Z=1.67$ במבחן חד-צדדי ימני), חשבו את ערך ה-p המדויק וקבעו האם דוחים את $H_0$ ברמת מובהקות של $\\alpha=0.05$.',
        proof: 'For a right-tailed Z-test, the p-value is the probability that a standard normal variable is greater than or equal to our observed statistic $Z_{\\text{obs}} = 1.667$:\n$$p\\text{-value} = P(Z \\ge 1.667) = 1 - \\Phi(1.667)$$\n\nUsing standard normal cumulative distribution values:\n$$\\Phi(1.67) \\approx 0.9525$$\n$$p\\text{-value} = 1 - 0.9525 = 0.0475$$\n\nSince $p\\text{-value} = 0.0475 \\le 0.05$, we reject $H_0$ at the $\\alpha=0.05$ significance level. (Note that the p-value is less than our threshold, which is mathematically equivalent to the test statistic exceeding the critical value of $1.645$).',
        proofHe: 'עבור מבחן Z חד-צדדי ימני, ערך ה-p הוא ההסתברות שמשתנה נורמלי סטנדרטי יקבל ערך גדול או שווה לסטטיסטי שנצפה בפועל $Z_{\\text{obs}} = 1.667$:\n$$p\\text{-value} = P(Z \\ge 1.667) = 1 - \\Phi(1.667)$$\n\nנעזר בערכי ההתפלגות הנורמלית הסטנדרטית המצטברת:\n$$\\Phi(1.67) \\approx 0.9525$$\n$$p\\text{-value} = 1 - 0.9525 = 0.0475$$\n\nמכיוון ש-$p\\text{-value} = 0.0475 \\le 0.05$, אנו דוחים את השערת האפס $H_0$ ברמת מובהקות של $\\alpha=0.05$. (שימו לב שערך ה-p קטן מרמת המובהקות, מה ששקול מתמטית לכך שסטטיסטי המבחן גדול מהערך הקריטי 1.645).'
      },
      {
        id: 'prac-stats-10-5',
        title: 'Practice 5: Type II Error & Power Calculation',
        titleHe: 'תרגול 5: חישוב טעות מסוג שני ועוצמת המבחן',
        isPractice: true,
        content: 'For the one-sided Z-test in Practice 1 ($H_0: \\mu = 1000$ vs. $H_1: \\mu > 1000$, $\\sigma=80$, $n=64$, $\\alpha=0.05$), calculate the probability of a Type II error ($\\beta$) and the power of the test ($1-\\beta$) if the true mean is $\\mu_1 = 1030$.',
        contentHe: 'עבור מבחן ה-Z החד-צדדי בתרגול 1 ($H_0: \\mu = 1000$ מול $H_1: \\mu > 1000$, שונות $\\sigma=80$, גודל מדגם $n=64$, רמת מובהקות $\\alpha=0.05$), חשבו את ההסתברות לטעות מסוג שני ($\\beta$) ואת עוצמת המבחן ($1-\\beta$) אם התוחלת האמיתית היא $\\mu_1 = 1030$.',
        proof: 'First, find the critical value of the sample mean $\\bar{X}_c$ that triggers rejection. We reject $H_0$ if:\n$$Z = \\frac{\\bar{X} - 1000}{\\sigma/\\sqrt{n}} > 1.645 \\implies \\bar{X} > 1000 + 1.645 \\cdot \\frac{80}{\\sqrt{64}}$$\n$$\\bar{X} > 1000 + 1.645 \\cdot 10 = 1016.45$$\n\nSo the non-rejection (acceptance) region is $\\bar{X} \\le 1016.45$.\n\nIf the true mean is $\\mu_1 = 1030$, the sample mean is distributed as $\\bar{X} \\sim N(1030, 10^2)$ since $SE = 80/\\sqrt{64} = 10$.\n\nWe calculate $\\beta$ (probability of failing to reject $H_0$ under $\\mu=1030$):\n$$\\beta = P(\\bar{X} \\le 1016.45 \\mid \\mu=1030) = P\\left( \\frac{\\bar{X} - 1030}{10} \\le \\frac{1016.45 - 1030}{10} \\right)$$\n$$\\beta = P(Z \\le -1.355) = \\Phi(-1.355) = 1 - \\Phi(1.355) \\approx 1 - 0.9123 = 0.0877$$\n\nNow, we compute the power of the test:\n$$\\text{Power} = 1 - \\beta = 1 - 0.0877 = 0.9123 \\quad (\\text{or } 91.23\\%)$$',
        proofHe: 'ראשית, נמצא את ערך ממוצע המדגם הקריטי $\\bar{X}_c$ שמעבר לו אנו דוחים את השערת האפס. אנו דוחים את $H_0$ אם:\n$$Z = \\frac{\\bar{X} - 1000}{\\sigma/\\sqrt{n}} > 1.645 \\implies \\bar{X} > 1000 + 1.645 \\cdot \\frac{80}{\\sqrt{64}}$$\n$$\\bar{X} > 1000 + 1.645 \\cdot 10 = 1016.45$$\n\nכלומר, אזור אי-הדחייה הוא $\\bar{X} \\le 1016.45$.\n\nאם התוחלת האמיתית היא $\\mu_1 = 1030$, אזי ממוצע המדגם מתפלג בפועל $\\bar{X} \\sim N(1030, 10^2)$ כיוון שטעות התקן היא $SE = 80/\\sqrt{64} = 10$.\n\nנחשב את $\\beta$ (ההסתברות לא לדחות את $H_0$ למרות שהתוחלת היא 1030):\n$$\\beta = P(\\bar{X} \\le 1016.45 \\mid \\mu=1030) = P\\left( \\frac{\\bar{X} - 1030}{10} \\le \\frac{1016.45 - 1030}{10} \\right)$$\n$$\\beta = P(Z \\le -1.355) = \\Phi(-1.355) = 1 - \\Phi(1.355) \\approx 1 - 0.9123 = 0.0877$$\n\nכעת, נחשב את עוצמת המבחן:\n$$\\text{עוצמת המבחן} = 1 - \\beta = 1 - 0.0877 = 0.9123 \\quad (\\text{או } 91.23\\%)$$'
      }
    ],
    quiz: [
      {
        question: 'What is the probability of committing a Type I error when the null hypothesis is true?',
        questionHe: 'מהי ההסתברות לבצע טעות מסוג ראשון כאשר השערת האפס נכונה?',
        options: [
          '\\alpha (The significance level)',
          '\\beta',
          '1 - \\alpha',
          '1 - \\beta (The power)'
        ],
        optionsHe: [
          '\\alpha (רמת המובהקות)',
          '\\beta',
          '1 - \\alpha',
          '1 - \\beta (עוצמת המבחן)'
        ],
        correctAnswerIndex: 0,
        explanation: 'By definition, the probability of a Type I error is set to the significance level $\\alpha$ of the test.',
        explanationHe: 'לפי ההגדרה, ההסתברות לביצוע טעות מסוג ראשון שווה לרמת המובהקות $\\alpha$ שנקבעה למבחן.'
      },
      {
        question: 'If we decrease the significance level $\\alpha$ (e.g., from $0.05$ to $0.01$), what happens to the probability of committing a Type II error $\\beta$, assuming everything else remains constant?',
        questionHe: 'אם נקטין את רמת המובהקות $\\alpha$ (למשל מ-0.05 ל-0.01), מה יקרה להסתברות לטעות מסוג שני $\\beta$, בהנחה שכל שאר התנאים קבועים?',
        options: [
          'It increases',
          'It decreases',
          'It remains the same',
          'It becomes zero'
        ],
        optionsHe: [
          'היא תגדל',
          'היא תקטן',
          'היא תישאר ללא שינוי',
          'היא תתאפס'
        ],
        correctAnswerIndex: 0,
        explanation: 'Decreasing $\\alpha$ makes it harder to reject $H_0$, which increases the probability of failing to reject a false $H_0$ (Type II error).',
        explanationHe: 'הקטנת $\\alpha$ מקשה על דחיית השערת האפס $H_0$, מה שמגדיל באופן ישיר את ההסתברות שלא לדחות השערת אפס שקרית (טעות מסוג שני).'
      }
    ]
  }
,
  {
    id: 'stats-11',
    courseId: 'stats',
    chapterNumber: '11',
    title: 'Chapter 11: Advanced Statistical Methods - Properties of Estimators & Linear Regression',
    titleHe: 'פרק 11: שיטות סטטיסטיות מתקדמות - תכונות אומדים ורגרסיה ליניארית',
    intro: `This final chapter covers advanced statistical topics: Point Estimator Properties (Bias, Mean Square Error, Consistency, and Efficiency), the Cramer-Rao Lower Bound, and the fundamentals of Simple Linear Regression.`,
    introHe: `פרק סיום זה עוסק בנושאים סטטיסטיים מתקדמים: תכונות אומדים נקודתיים (הטיה, טעות ריבועית ממוצעת, עקביות ויעילות), חסם קרמר-ראו, ויסודות הרגרסיה הליניארית הפשוטה.`,
    motivation: `Point estimation requires comparing different estimators to find the "best" one. Linear regression is the foundation of machine learning, allowing us to model relationships and predict continuous outcomes.`,
    motivationHe: `אמידה נקודתית דורשת השוואה בין אומדים שונים כדי למצוא את האומד "הטוב ביותר". רגרסיה ליניארית היא אבן היסוד של למידת מכונה (Machine Learning), ומאפשרת לנו למדל קשרים ולחזות ערכים רציפים.`,
    definitions: [
      {
        id: 'def-stats-11-1',
        title: 'Bias, Mean Square Error (MSE), & Consistency',
        titleHe: 'הטיה, טעות ריבועית ממוצעת (MSE) ועקביות',
        content: `We study how to evaluate the performance of point estimators:

* **Bias**: The difference between the expected value of the estimator $\\hat{\\theta}$ and the true parameter $\\theta$:
$$\\text{Bias}(\\hat{\\theta}) = \\mathbb{E}[\\hat{\\theta}] - \\theta$$
If $\\text{Bias}(\\hat{\\theta}) = 0$, the estimator is **unbiased**.

* **Mean Square Error (MSE)**: The expected squared deviation of the estimator from the parameter, decomposing into variance and squared bias:
$$\\text{MSE}(\\hat{\\theta}) = \\mathbb{E}[(\\hat{\\theta} - \\theta)^2] = \\text{Var}(\\hat{\\theta}) + [\\text{Bias}(\\hat{\\theta})]^2$$

* **Consistency**: An estimator $\\hat{\\theta}_n$ is consistent if it converges in probability to the true parameter $\\theta$ as $n \\to \\infty$:
$$\\lim_{n \\to \\infty} P(|\\hat{\\theta}_n - \\theta| \\ge \\epsilon) = 0, \\quad \\forall \\epsilon > 0$$
*Sufficient Condition*: An estimator is consistent if both its bias and variance vanish as $n \\to \\infty$.`,
        contentHe: `אנו לומדים כיצד להעריך את ביצועיהם של אומדים נקודתיים:

* **הטיה (Bias)**: ההפרש בין התוחלת של האומד $\\hat{\\theta}$ לבין ערכו האמיתי של הפרמטר $\\theta$:
$$\\text{Bias}(\\hat{\\theta}) = \\mathbb{E}[\\hat{\\theta}] - \\theta$$
אם $\\text{Bias}(\\hat{\\theta}) = 0$, האומד נקרא **בלתי מוטה**.

* **טעות ריבועית ממוצעת (MSE)**: תוחלת הסטייה הריבועית של האומד מהפרמטר, המתפרקת לשונות האומד ועוד ריבוע ההטיה שלו:
$$\\text{MSE}(\\hat{\\theta}) = \\mathbb{E}[(\\hat{\\theta} - \\theta)^2] = \\text{Var}(\\hat{\\theta}) + [\\text{Bias}(\\hat{\\theta})]^2$$

* **עקביות (Consistency)**: אומד $\\hat{\\theta}_n$ נקרא עקבי אם הוא מתכנס בהסתברות אל הפרמטר האמיתי $\\theta$ כאשר גודל המדגם $n$ שואף לאינסוף:
$$\\lim_{n \\to \\infty} P(|\\hat{\\theta}_n - \\theta| \\ge \\epsilon) = 0, \\quad \\forall \\epsilon > 0$$
*תנאי מספיק*: אומד הוא עקבי אם ההטיה שלו והשונות שלו שואפות לאפס כאשר $n \\to \\infty$.`,
        simplifiedLogic: `Unbiasedness means that "on average" we hit the target. MSE measures the total error (both accuracy/bias and precision/variance). Consistency means that with infinite data, our error drops to zero.`,
        simplifiedLogicHe: `אי-הטיה אומרת ש"בממוצע" אנו פוגעים במטרה. MSE מודד את סך כל השגיאה (הן דיוק/הטיה והן יציבות/שונות). עקביות אומרת שעם כמות אינסופית של נתונים, השגיאה שלנו שואפת לאפס.`,
        toolboxConnection: `Crucial for optimizing machine learning loss functions where bias-variance tradeoff dictates model generalization.`,
        toolboxConnectionHe: `קריטי לאופטימיזציה של פונקציות הפסד בלמידת מכונה, שבהן טרייד-אוף של הטיה ושונות (bias-variance tradeoff) מכתיב את יכולת ההכללה של המודל.`,
        keyTakeaway: `MSE is the sum of variance and squared bias.`,
        keyTakeawayHe: `הטעות הריבועית הממוצעת (MSE) שווה לשונות האומד ועוד ריבוע ההטיה שלו.`
      },
      {
        id: 'def-stats-11-2',
        title: 'Fisher Information & Cramer-Rao Lower Bound',
        titleHe: 'מידע פישר וחסם קרמר-ראו',
        content: `We define the mathematical limits of estimation precision:

* **Fisher Information $I(\\theta)$**: Measures the amount of information that a sample carries about an unknown parameter $\\theta$. For a sample of size $n$:
$$I(\\theta) = -n \\mathbb{E}\\left[ \\frac{\\partial^2}{\\partial \\theta^2} \\ln f(X; \\theta) \\right]$$

* **Cramer-Rao Lower Bound (CRLB)**: States that the variance of any unbiased estimator $\\hat{\\theta}$ is bounded from below by the reciprocal of the Fisher Information:
$$\\text{Var}(\\hat{\\theta}) \\ge \\frac{1}{I(\\theta)}$$
An unbiased estimator that achieves this lower bound is called **efficient** (or UMVUE).`,
        contentHe: `אנו מגדירים את הגבולות המתמטיים של דיוק האמידה:

* **מידע פישר (Fisher Information) $I(\\theta)$**: מודד את כמות המידע שמדגם נושא אודות הפרמטר הלא ידוע $\\theta$. עבור מדגם בגודל $n$:
$$I(\\theta) = -n \\mathbb{E}\\left[ \\frac{\\partial^2}{\\partial \\theta^2} \\ln f(X; \\theta) \\right]$$

* **חסם קרמר-ראו (Cramer-Rao Lower Bound - CRLB)**: קובע כי השונות של כל אומד בלתי מוטה $\\hat{\\theta}$ חסומה מלמטה על ידי ההופכי של מידע פישר:
$$\\text{Var}(\\hat{\\theta}) \\ge \\frac{1}{I(\\theta)}$$
אומד בלתי מוטה שמשיג את החסם המינימלי הזה נקרא אומד **יעיל**.`,
        simplifiedLogic: `Fisher Information measures how "steep" the likelihood curve is around the true value. The steeper it is, the easier it is to estimate the parameter, which lowers the minimum possible variance bound.`,
        simplifiedLogicHe: `מידע פישר מודד כמה "תלולה" עקומת הנראות סביב הערך האמיתי. ככל שהיא תלולה יותר, כך קל יותר לאמוד את הפרמטר, מה שמקטין את חסם השונות המינימלי האפשרי.`,
        toolboxConnection: `Used by radar and telecommunication systems engineers to determine the absolute physical limits of signal-to-noise estimation accuracy.`,
        toolboxConnectionHe: `משמש מהנדסי מערכות מכ"ם ותקשורת לקביעת הגבולות הפיזיקליים המוחלטים של דיוק אמידת אות לרעש.`,
        keyTakeaway: `The variance of any unbiased estimator cannot be lower than 1/I(theta).`,
        keyTakeawayHe: `השונות של כל אומד בלתי מוטה אינה יכולה להיות נמוכה מההופכי של מידע פישר (חסם קרמר-ראו).`
      },
      {
        id: 'def-stats-11-3',
        title: 'Simple Linear Regression & Least Squares',
        titleHe: 'רגרסיה ליניארית פשוטה וריבועים פחותים',
        content: `We model the linear relationship between an independent variable $X$ and a dependent variable $Y$:

* **The Linear Model**: 
$$Y = \\beta_0 + \\beta_1 X + \\epsilon, \\quad \\epsilon \\sim N(0, \\sigma^2)$$
where $\\beta_1$ is the slope, $\\beta_0$ is the intercept, and $\\epsilon$ represents independent normal noise.

* **Ordinary Least Squares (OLS) Estimators**: We find parameter values $\\hat{\\beta}_0, \\hat{\\beta}_1$ that minimize the Sum of Squared Residuals (SSE) $\\sum (Y_i - \\hat{Y}_i)^2$:
$$\\hat{\\beta}_1 = \\frac{\\sum_{i=1}^n (X_i - \\bar{X})(Y_i - \\bar{Y})}{\\sum_{i=1}^n (X_i - \\bar{X})^2} = \\frac{\\text{Cov}(X, Y)}{\\text{Var}(X)}$$
$$\\hat{\\beta}_0 = \\bar{Y} - \\hat{\\beta}_1 \\bar{X}$$`,
        contentHe: `אנו ממדלים את הקשר הליניארי בין משתנה מסביר (בלתי תלוי) $X$ לבין משתנה מוסבר (תלוי) $Y$:

* **המודל הליניארי**: 
$$Y = \\beta_0 + \\beta_1 X + \\epsilon, \\quad \\epsilon \\sim N(0, \\sigma^2)$$
כאשר $\\beta_1$ הוא השיפוע, $\\beta_0$ הוא החותך, ו-$\\epsilon$ הוא רעש נורמלי בלתי תלוי.

* **אומדי הריבועים הפחותים (OLS)**: אנו מוצאים את ערכי הפרמטרים $\\hat{\\beta}_0, \\hat{\\beta}_1$ שמביאים למינימום את סכום ריבועי השאריות (SSE) $\\sum (Y_i - \\hat{Y}_i)^2$:
$$\\hat{\\beta}_1 = \\frac{\\sum_{i=1}^n (X_i - \\bar{X})(Y_i - \\bar{Y})}{\\sum_{i=1}^n (X_i - \\bar{X})^2} = \\frac{\\text{Cov}(X, Y)}{\\text{Var}(X)}$$
$$\\hat{\\beta}_0 = \\bar{Y} - \\hat{\\beta}_1 \\bar{X}$$`,
        simplifiedLogic: `We draw a straight line through our data points such that the sum of the squared vertical distances from the points to the line is as small as possible.`,
        simplifiedLogicHe: `אנו מעבירים קו ישר דרך נקודות הנתונים שלנו כך שסכום מרחקי הריבוע האנכיים מהנקודות לקו יהיה הקטן ביותר האפשרי.`,
        toolboxConnection: `The foundational base of linear regression models in Machine Learning, predictive analytics, and trend forecasting.`,
        toolboxConnectionHe: `בסיס היסוד של מודלים של רגרסיה ליניארית בלמידת מכונה (ML), אנליטיקה חזויה וחיזוי מגמות.`,
        keyTakeaway: `OLS minimizes the sum of squared vertical residuals.`,
        keyTakeawayHe: `שיטת הריבועים הפחותים ממזערת את סכום ריבועי השאריות האנכיים.`
      },
      {
        id: 'prac-stats-11-1',
        title: 'Practice 1: Bias & MSE Comparison',
        titleHe: 'תרגול 1: השוואת הטיה ו-MSE של אומדים',
        isPractice: true,
        content: `Let $X_1, X_2$ be i.i.d. random variables with mean $\\mu$ and variance $\\sigma^2$. Compare the bias and MSE of two estimators for $\\mu$: $\\hat{\\mu}_1 = \\frac{X_1 + X_2}{2}$ and $\\hat{\\mu}_2 = \\frac{X_1 + 2X_2}{3}$.`,
        contentHe: `יהיו $X_1, X_2$ משתנים מקריים בלתי תלויים ובעלי התפלגות זהה עם תוחלת $\\mu$ ושונות $\\sigma^2$. השוו את ההטיה וה-MSE של שני אומדים עבור $\\mu$: $\\hat{\\mu}_1 = \\frac{X_1 + X_2}{2}$ ו-$\\hat{\\mu}_2 = \\frac{X_1 + 2X_2}{3}$.`,
        proof: `We compute the expectation and variance of both estimators:

1. **For Estimator 1 ($\\hat{\\mu}_1 = \\frac{X_1+X_2}{2}$)**:
* Expectation:
$$\\mathbb{E}[\\hat{\\mu}_1] = \\mathbb{E}\\left[\\frac{X_1+X_2}{2}\\right] = \\frac{\\mu+\\mu}{2} = \\mu \\implies \\text{Unbiased (Bias = 0)}$$
* Variance:
$$\\text{Var}(\\hat{\\mu}_1) = \\text{Var}\\left(\\frac{X_1+X_2}{2}\\right) = \\frac{1}{4}(\\text{Var}(X_1) + \\text{Var}(X_2)) = \\frac{2\\sigma^2}{4} = \\frac{\\sigma^2}{2}$$
* Mean Square Error:
$$\\text{MSE}(\\hat{\\mu}_1) = \\text{Var}(\\hat{\\mu}_1) + [\\text{Bias}(\\hat{\\mu}_1)]^2 = \\frac{\\sigma^2}{2} + 0^2 = \\frac{\\sigma^2}{2}$$

2. **For Estimator 2 ($\\hat{\\mu}_2 = \\frac{X_1+2X_2}{3}$)**:
* Expectation:
$$\\mathbb{E}[\\hat{\\mu}_2] = \\mathbb{E}\\left[\\frac{X_1+2X_2}{3}\\right] = \\frac{\\mu+2\\mu}{3} = \\mu \\implies \\text{Unbiased (Bias = 0)}$$
* Variance:
$$\\text{Var}(\\hat{\\mu}_2) = \\text{Var}\\left(\\frac{X_1+2X_2}{3}\\right) = \\frac{1}{9}(\\text{Var}(X_1) + 4\\text{Var}(X_2)) = \\frac{\\sigma^2 + 4\\sigma^2}{9} = \\frac{5\\sigma^2}{9}$$
* Mean Square Error:
$$\\text{MSE}(\\hat{\\mu}_2) = \\text{Var}(\\hat{\\mu}_2) + [\\text{Bias}(\\hat{\\mu}_2)]^2 = \\frac{5\\sigma^2}{9} + 0^2 = \\frac{5\\sigma^2}{9}$$

**Comparison**:
Since both estimators are unbiased, we compare their variances directly. Because $\\frac{1}{2} = 0.5 < \\frac{5}{9} \\approx 0.556$, the estimator $\\hat{\\mu}_1$ has a lower MSE and is more efficient than $\\hat{\\mu}_2$.`,
        proofHe: `נחשב את התוחלת והשונות של שני האומדים:

1. **עבור האומד הראשון ($\\hat{\\mu}_1 = \\frac{X_1+X_2}{2}$)**:
* תוחלת:
$$\\mathbb{E}[\\hat{\\mu}_1] = \\mathbb{E}\\left[\\frac{X_1+X_2}{2}\\right] = \\frac{\\mu+\\mu}{2} = \\mu \\implies \\text{בלתי מוטה (הטיה = 0)}$$
* שונות:
$$\\text{Var}(\\hat{\\mu}_1) = \\text{Var}\\left(\\frac{X_1+X_2}{2}\\right) = \\frac{1}{4}(\\text{Var}(X_1) + \\text{Var}(X_2)) = \\frac{2\\sigma^2}{4} = \\frac{\\sigma^2}{2}$$
* טעות ריבועית ממוצעת:
$$\\text{MSE}(\\hat{\\mu}_1) = \\text{Var}(\\hat{\\mu}_1) + [\\text{Bias}(\\hat{\\mu}_1)]^2 = \\frac{\\sigma^2}{2} + 0^2 = \\frac{\\sigma^2}{2}$$

2. **עבור האומד השני ($\\hat{\\mu}_2 = \\frac{X_1+2X_2}{3}$)**:
* תוחלת:
$$\\mathbb{E}[\\hat{\\mu}_2] = \\mathbb{E}\\left[\\frac{X_1+2X_2}{3}\\right] = \\frac{\\mu+2\\mu}{3} = \\mu \\implies \\text{בלתי מוטה (הטיה = 0)}$$
* שונות:
$$\\text{Var}(\\hat{\\mu}_2) = \\text{Var}\\left(\\frac{X_1+2X_2}{3}\\right) = \\frac{1}{9}(\\text{Var}(X_1) + 4\\text{Var}(X_2)) = \\frac{\\sigma^2 + 4\\sigma^2}{9} = \\frac{5\\sigma^2}{9}$$
* טעות ריבועית ממוצעת:
$$\\text{MSE}(\\hat{\\mu}_2) = \\text{Var}(\\hat{\\mu}_2) + [\\text{Bias}(\\hat{\\mu}_2)]^2 = \\frac{5\\sigma^2}{9} + 0^2 = \\frac{5\\sigma^2}{9}$$

**השוואה**:
מכיוון ששני האומדים בלתי מוטים, נשווה את השונויות שלהם ישירות. כיוון ש-$\\frac{1}{2} = 0.5 < \\frac{5}{9} \\approx 0.556$, לאומד $\\hat{\\mu}_1$ יש טעות ריבועית ממוצעת (MSE) נמוכה יותר, ולכן הוא יעיל יותר ומיועד להעדפה.`
      },
      {
        id: 'prac-stats-11-2',
        title: 'Practice 2: Cramer-Rao Lower Bound for Poisson',
        titleHe: 'תרגול 2: חסם קרמר-ראו להתפלגות פואסון',
        isPractice: true,
        content: `Let $X_1, \\dots, X_n \\sim \\text{Poisson}(\\lambda)$ be i.i.d. samples. Find the Cramer-Rao Lower Bound for unbiased estimators of $\\lambda$, and check if the sample mean $\\bar{X}$ achieves this bound.`,
        contentHe: 'יהי מדגם מקרי $X_1, \\dots, X_n \\sim \\text{Poisson}(\\lambda)$ בלתי תלויים ובעלי התפלגות זהה. מצאו את חסם קרמר-ראו עבור אומדים בלתי מוטים ל-$\\lambda$, ובדקו האם ממוצע המדגם $\\bar{X}$ משיג חסם זה.',
        proof: `First, write the PMF of a Poisson variable:
$$f(x; \\lambda) = \\frac{e^{-\\lambda} \\lambda^x}{x!}$$

Take the natural log:
$$\\ln f(x; \\lambda) = -\\lambda + x \\ln \\lambda - \\ln(x!)$$

Compute the first derivative with respect to $\\lambda$:
$$\\frac{\\partial}{\\partial \\lambda} \\ln f(x; \\lambda) = -1 + \\frac{x}{\\lambda}$$

Compute the second derivative:
$$\\frac{\\partial^2}{\\partial \\lambda^2} \\ln f(x; \\lambda) = -\\frac{x}{\\lambda^2}$$

Now, calculate the Fisher Information $I(\\lambda)$ for a sample of size $n$:
$$I(\\lambda) = -n \\mathbb{E}\\left[ \\frac{\\partial^2}{\\partial \\lambda^2} \\ln f(X; \\lambda) \\right] = -n \\mathbb{E}\\left[ -\\frac{X}{\\lambda^2} \\right] = \\frac{n}{\\lambda^2} \\mathbb{E}[X]$$

Since $\\mathbb{E}[X] = \\lambda$ for $X \\sim \\text{Poisson}(\\lambda)$:
$$I(\\lambda) = \\frac{n}{\\lambda^2} (\\lambda) = \\frac{n}{\\lambda}$$

The Cramer-Rao Lower Bound for unbiased estimators of $\\lambda$ is:
$$\\text{CRLB} = \\frac{1}{I(\\lambda)} = \\frac{\\lambda}{n}$$

Now, check the sample mean $\\bar{X}$:
* It is unbiased: $\\mathbb{E}[\\bar{X}] = \\lambda$
* Its variance is: $\\text{Var}(\\bar{X}) = \\frac{\\text{Var}(X)}{n} = \\frac{\\lambda}{n}$

Since $\\text{Var}(\\bar{X}) = \\text{CRLB} = \\frac{\\lambda}{n}$, the sample mean exactly achieves the Cramer-Rao Lower Bound. Thus, $\\bar{X}$ is an **efficient** and **UMVUE** (Uniformly Minimum-Variance Unbiased Estimator) estimator.`,
        proofHe: `ראשית, נרשום את פונקציית ההסתברות (PMF) של התפלגות פואסון:
$$f(x; \\lambda) = \\frac{e^{-\\lambda} \\lambda^x}{x!}$$

נפעיל לוגריתם טבעי:
$$\\ln f(x; \\lambda) = -\\lambda + x \\ln \\lambda - \\ln(x!)$$

נגזור פעם ראשונה לפי למדא:
$$\\frac{\\partial}{\\partial \\lambda} \\ln f(x; \\lambda) = -1 + \\frac{x}{\\lambda}$$

נגזור פעם שנייה לפי למדא:
$$\\frac{\\partial^2}{\\partial \\lambda^2} \\ln f(x; \\lambda) = -\\frac{x}{\\lambda^2}$$

כעת, נחשב את מידע פישר $I(\\lambda)$ עבור מדגם בגודל $n$:
$$I(\\lambda) = -n \\mathbb{E}\\left[ \\frac{\\partial^2}{\\partial \\lambda^2} \\ln f(X; \\lambda) \\right] = -n \\mathbb{E}\\left[ -\\frac{X}{\\lambda^2} \\right] = \\frac{n}{\\lambda^2} \\mathbb{E}[X]$$

מכיוון ש-$X \\sim \\text{Poisson}(\\lambda)$, מתקיים $\\mathbb{E}[X] = \\lambda$:
$$I(\\lambda) = \\frac{n}{\\lambda^2} (\\lambda) = \\frac{n}{\\lambda}$$\n\nחסם קרמר-ראו (CRLB) עבור אומדים בלתי מוטים ל-$\\lambda$ הוא:\n$$\\text{CRLB} = \\frac{1}{I(\\lambda)} = \\frac{\\lambda}{n}$$\n\nכעת נבחן את ממוצע המדגם $\\bar{X}$:\n* הוא בלתי מוטה: $\\mathbb{E}[\\bar{X}] = \\lambda$\n* השונות שלו היא: $\\text{Var}(\\bar{X}) = \\frac{\\text{Var}(X)}{n} = \\frac{\\lambda}{n}$\n\nכיוון ש-$Var(\\bar{X}) = CRLB = \\frac{\\lambda}{n}$, ממוצע המדגם משיג בדיוק את חסם קרמר-ראו. לכן $\\bar{X}$ הוא אומד **יעיל** ו-**UMVUE** (אומד בלתי מוטה בעל שונות מינימלית במידה שווה).`
      },
      {
        id: 'prac-stats-11-3',
        title: 'Practice 3: Least Squares Regression Line',
        titleHe: 'תרגול 3: התאמת קו רגרסיה בריבועים פחותים',
        isPractice: true,
        content: `Given a small dataset of $(X, Y)$ pairs: $(1, 2), (2, 3), (3, 7)$. Find the least squares regression line $Y = \\beta_0 + \\beta_1 X$.`,
        contentHe: 'בהינתן אוסף נתונים קטן של זוגות $(X, Y)$: $(1, 2), (2, 3), (3, 7)$. מצאו את קו הרגרסיה בריבועים פחותים $Y = \\beta_0 + \\beta_1 X$.',
        proof: `We compile the sums and averages for the data points:
* $n = 3$
* $\\bar{X} = \\frac{1+2+3}{3} = 2$
* $\\bar{Y} = \\frac{2+3+7}{3} = 4$

We construct the components for the slope $\\beta_1$:
* $X_1 - \\bar{X} = 1 - 2 = -1 \\implies (X_1 - \\bar{X})^2 = 1$
* $X_2 - \\bar{X} = 2 - 2 = 0 \\implies (X_2 - \\bar{X})^2 = 0$
* $X_3 - \\bar{X} = 3 - 2 = 1 \\implies (X_3 - \\bar{X})^2 = 1$
* Sum of Squared Deviations of $X$:
$$\\sum_{i=1}^3 (X_i - \\bar{X})^2 = 1 + 0 + 1 = 2$$

Now, calculate the sum of cross-products:
* $(X_1 - \\bar{X})(Y_1 - \\bar{Y}) = (-1) \\cdot (2 - 4) = 2$
* $(X_2 - \\bar{X})(Y_2 - \\bar{Y}) = 0 \\cdot (3 - 4) = 0$
* $(X_3 - \\bar{X})(Y_3 - \\bar{Y}) = 1 \\cdot (7 - 4) = 3$
* Sum of Cross-Products:
$$\\sum_{i=1}^3 (X_i - \\bar{X})(Y_i - \\bar{Y}) = 2 + 0 + 3 = 5$$

Calculate the Slope $\\hat{\\beta}_1$:
$$\\hat{\\beta}_1 = \\frac{\\sum (X_i - \\bar{X})(Y_i - \\bar{Y})}{\\sum (X_i - \\bar{X})^2} = \\frac{5}{2} = 2.5$$

Calculate the Intercept $\\hat{\\beta}_0$:
$$\\hat{\\beta}_0 = \\bar{Y} - \\hat{\\beta}_1 \\bar{X} = 4 - 2.5(2) = 4 - 5 = -1$$

Thus, the least squares regression line is:
$$Y = -1 + 2.5 X$$`,
        proofHe: `נחשב את הסכומים והממוצעים עבור נקודות הנתונים המדגמיות:
* $n = 3$
* ממוצע $X$: $\\bar{X} = \\frac{1+2+3}{3} = 2$
* ממוצע $Y$: $\\bar{Y} = \\frac{2+3+7}{3} = 4$

נכין את הרכיבים עבור חישוב השיפוע $\\beta_1$:
* $X_1 - \\bar{X} = 1 - 2 = -1 \\implies (X_1 - \\bar{X})^2 = 1$
* $X_2 - \\bar{X} = 2 - 2 = 0 \\implies (X_2 - \\bar{X})^2 = 0$
* $X_3 - \\bar{X} = 3 - 2 = 1 \\implies (X_3 - \\bar{X})^2 = 1$
* סכום הסטטיות הריבועיות של $X$:
$$\\sum_{i=1}^3 (X_i - \\bar{X})^2 = 1 + 0 + 1 = 2$$

כעת נחשב את סכום מכפלות הסטיות המשותפות:
* $(X_1 - \\bar{X})(Y_1 - \\bar{Y}) = (-1) \\cdot (2 - 4) = 2$
* $(X_2 - \\bar{X})(Y_2 - \\bar{Y}) = 0 \\cdot (3 - 4) = 0$
* $(X_3 - \\bar{X})(Y_3 - \\bar{Y}) = 1 \\cdot (7 - 4) = 3$
* סכום המכפלות:
$$\\sum_{i=1}^3 (X_i - \\bar{X})(Y_i - \\bar{Y}) = 2 + 0 + 3 = 5$$

נחשב את השיפוע $\\hat{\\beta}_1$:
$$\\hat{\\beta}_1 = \\frac{\\sum (X_i - \\bar{X})(Y_i - \\bar{Y})}{\\sum (X_i - \\bar{X})^2} = \\frac{5}{2} = 2.5$$

נחשב את החותך $\\hat{\\beta}_0$:
$$\\hat{\\beta}_0 = \\bar{Y} - \\hat{\\beta}_1 \\bar{X} = 4 - 2.5(2) = 4 - 5 = -1$$

לכן קו הרגרסיה בריבועים פחותים הוא:
$$Y = -1 + 2.5 X$$`
      },
      {
        id: 'prac-stats-11-4',
        title: 'Practice 4: Residuals and Noise Variance',
        titleHe: 'תרגול 4: שאריות ואומדן שונות הרעש',
        isPractice: true,
        content: `Using the regression line from Practice 3 ($Y = -1 + 2.5 X$), calculate the residuals $e_i = Y_i - \\hat{Y}_i$ for each point and estimate the noise variance $\\sigma^2$ using the unbiased estimator $S^2 = \\frac{\\sum e_i^2}{n-2}$.`,
        contentHe: 'בהתבסס על קו הרגרסיה מתרגול 3 ($Y = -1 + 2.5 X$), חשבו את השאריות $e_i = Y_i - \\hat{Y}_i$ עבור כל נקודה ואמדו את שונות הרעש $\\sigma^2$ באמצעות האומד הבלתי מוטה $S^2 = \\frac{\\sum e_i^2}{n-2}$.',
        proof: `We calculate predicted values $\\hat{Y}_i$ and residuals $e_i = Y_i - \\hat{Y}_i$:

1. **For $X_1 = 1, Y_1 = 2$**:
* $\\hat{Y}_1 = -1 + 2.5(1) = 1.5$
* $e_1 = 2 - 1.5 = 0.5 \\implies e_1^2 = 0.25$

2. **For $X_2 = 2, Y_2 = 3$**:
* $\\hat{Y}_2 = -1 + 2.5(2) = 4$
* $e_2 = 3 - 4 = -1 \\implies e_2^2 = 1.0$

3. **For $X_3 = 3, Y_3 = 7$**:
* $\\hat{Y}_3 = -1 + 2.5(3) = 6.5$
* $e_3 = 7 - 6.5 = 0.5 \\implies e_3^2 = 0.25$

Sum of Squared Residuals (SSE):
$$\\sum_{i=1}^3 e_i^2 = 0.25 + 1.0 + 0.25 = 1.5$$

Estimating noise variance $S^2$ (with $n-2 = 1$ degree of freedom):
$$S^2 = \\frac{\\sum e_i^2}{n-2} = \\frac{1.5}{3-2} = \\frac{1.5}{1} = 1.5$$

Thus, our unbiased estimate for the noise variance $\\sigma^2$ is:
$$S^2 = 1.5$$`,
        proofHe: `נחשב את הערכים המנובאים $\\hat{Y}_i$ ואת השאריות $e_i = Y_i - \\hat{Y}_i$:

1. **עבור $X_1 = 1, Y_1 = 2$**:
* $\\hat{Y}_1 = -1 + 2.5(1) = 1.5$
* $e_1 = 2 - 1.5 = 0.5 \\implies e_1^2 = 0.25$

2. **עבור $X_2 = 2, Y_2 = 3$**:
* $\\hat{Y}_2 = -1 + 2.5(2) = 4$
* $e_2 = 3 - 4 = -1 \\implies e_2^2 = 1.0$

3. **עבור $X_3 = 3, Y_3 = 7$**:
* $\\hat{Y}_3 = -1 + 2.5(3) = 6.5$
* $e_3 = 7 - 6.5 = 0.5 \\implies e_3^2 = 0.25$

סכום ריבועי השאריות (SSE):
$$\\sum_{i=1}^3 e_i^2 = 0.25 + 1.0 + 0.25 = 1.5$$

נאמוד את שונות הרעש $S^2$ (עם $n-2 = 1$ דרגת חופש):
$$S^2 = \\frac{\\sum e_i^2}{n-2} = \\frac{1.5}{3-2} = \\frac{1.5}{1} = 1.5$$

לכן, האומד הבלתי מוטה לשונות הרעש $\\sigma^2$ הוא:
$$S^2 = 1.5$$`
      },
      {
        id: 'prac-stats-11-5',
        title: 'Practice 5: Consistency Proof',
        titleHe: 'תרגול 5: הוכחת עקביות של אומד',
        isPractice: true,
        content: `Let $X_1, \\dots, X_n$ be i.i.d. samples from $U(0, \\theta)$. Show that the estimator $\\hat{\\theta}_n = \\frac{n+1}{n} X_{(n)}$ (where $X_{(n)} = \\max(X_1, \\dots, X_n)$) is consistent for $\\theta$.`,
        contentHe: 'יהי מדגם מקרי $X_1, \\dots, X_n$ בלתי תלויים ובעלי התפלגות זהה מהתפלגות אחידה $U(0, \\theta)$. הוכיחו כי האומד $\\hat{\\theta}_n = \\frac{n+1}{n} X_{(n)}$ (כאשר $X_{(n)} = \\max(X_1, \\dots, X_n)$) הוא אומד עקבי עבור $\\theta$.',
        proof: `We analyze the maximum order statistic $X_{(n)}$:
* Its CDF: $F_{X_{(n)}}(t) = P(X_{(n)} \\le t) = [P(X_i \\le t)]^n = \\left(\\frac{t}{\\theta}\\right)^n$ for $0 \\le t \\le \\theta$.
* Its PDF: $f_{X_{(n)}}(t) = \\frac{d}{dt} F_{X_{(n)}}(t) = \\frac{n t^{n-1}}{\\theta^n}$.

Calculate the expectation:
$$\\mathbb{E}[X_{(n)}] = \\int_0^{\\theta} t \\cdot \\frac{n t^{n-1}}{\\theta^n} \\, dt = \\frac{n}{\\theta^n} \\int_0^{\\theta} t^n \\, dt = \\frac{n}{\\theta^n} \\left[ \\frac{t^{n+1}}{n+1} \\right]_0^{\\theta} = \\frac{n}{n+1} \\theta$$

Thus, $\\hat{\\theta}_n = \\frac{n+1}{n} X_{(n)}$ is exactly unbiased:
$$\\mathbb{E}[\\hat{\\theta}_n] = \\frac{n+1}{n} \\mathbb{E}[X_{(n)}] = \\theta \\implies \\text{Bias}(\\hat{\\theta}_n) = 0$$

Calculate the second moment:
$$\\mathbb{E}[X_{(n)}^2] = \\int_0^{\\theta} t^2 \\cdot \\frac{n t^{n-1}}{\\theta^n} \\, dt = \\frac{n}{\\theta^n} \\int_0^{\\theta} t^{n+1} \\, dt = \\frac{n}{\\theta^n} \\left[ \\frac{t^{n+2}}{n+2} \\right]_0^{\\theta} = \\frac{n}{n+2} \\theta^2$$

Find the variance of $X_{(n)}$:
$$\\text{Var}(X_{(n)}) = \\mathbb{E}[X_{(n)}^2] - (\\mathbb{E}[X_{(n)}])^2 = \\frac{n}{n+2}\\theta^2 - \\left(\\frac{n}{n+1}\\right)^2\\theta^2 = \\frac{n}{(n+2)(n+1)^2} \\theta^2$$

Now, find the variance of $\\hat{\\theta}_n$:
$$\\text{Var}(\\hat{\\theta}_n) = \\left( \\frac{n+1}{n} \\right)^2 \\text{Var}(X_{(n)}) = \\frac{(n+1)^2}{n^2} \\cdot \\frac{n}{(n+2)(n+1)^2} \\theta^2 = \\frac{\\theta^2}{n(n+2)}$$

**Consistency Check**:
* As $n \\to \\infty$, the bias is zero:
$$\\lim_{n \\to \\infty} \\text{Bias}(\\hat{\\theta}_n) = 0$$
* As $n \\to \\infty$, the variance vanishes:
$$\\lim_{n \\to \\infty} \\text{Var}(\\hat{\\theta}_n) = \\lim_{n \\to \\infty} \\frac{\\theta^2}{n(n+2)} = 0$$

Since both the bias and variance approach zero as $n \\to \\infty$, the estimator $\\hat{\\theta}_n$ converges in probability to $\\theta$ (by Chebyshev's Inequality), proving that it is a **consistent** estimator.`,
        proofHe: `ננתח את סטטיסטי הסדר המקסימלי $X_{(n)}$:
* פונקציית ההתפלגות המצטברת (CDF) שלו: $F_{X_{(n)}}(t) = P(X_{(n)} \\le t) = [P(X_i \\le t)]^n = \\left(\\frac{t}{\\theta}\\right)^n$ עבור $0 \\le t \\le \\theta$.
* פונקציית הצפיפות (PDF) שלו: $f_{X_{(n)}}(t) = \\frac{d}{dt} F_{X_{(n)}}(t) = \\frac{n t^{n-1}}{\\theta^n}$.

נחשב את התוחלת:
$$\\mathbb{E}[X_{(n)}] = \\int_0^{\\theta} t \\cdot \\frac{n t^{n-1}}{\\theta^n} \\, dt = \\frac{n}{\\theta^n} \\int_0^{\\theta} t^n \\, dt = \\frac{n}{\\theta^n} \\left[ \\frac{t^{n+1}}{n+1} \\right]_0^{\\theta} = \\frac{n}{n+1} \\theta$$

לכן האומד $\\hat{\\theta}_n = \\frac{n+1}{n} X_{(n)}$ הוא בלתי מוטה לחלוטין:
$$\\mathbb{E}[\\hat{\\theta}_n] = \\frac{n+1}{n} \\mathbb{E}[X_{(n)}] = \\theta \\implies \\text{הטיה} = 0$$

נחשב את המומנט השני של $X_{(n)}$:
$$\\mathbb{E}[X_{(n)}^2] = \\int_0^{\\theta} t^2 \\cdot \\frac{n t^{n-1}}{\\theta^n} \\, dt = \\frac{n}{\\theta^n} \\int_0^{\\theta} t^{n+1} \\, dt = \\frac{n}{\\theta^n} \\left[ \\frac{t^{n+2}}{n+2} \\right]_0^{\\theta} = \\frac{n}{n+2} \\theta^2$$

נחשב את השונות של $X_{(n)}$:
$$\\text{Var}(X_{(n)}) = \\mathbb{E}[X_{(n)}^2] - (\\mathbb{E}[X_{(n)}])^2 = \\frac{n}{n+2}\\theta^2 - \\left(\\frac{n}{n+1}\\right)^2\\theta^2 = \\frac{n}{(n+2)(n+1)^2} \\theta^2$$

כעת נחשב את השונות של האומד $\\hat{\\theta}_n$ (על ידי הכפלה במקדם בריבוע):
$$\\text{Var}(\\hat{\\theta}_n) = \\left( \\frac{n+1}{n} \\right)^2 \\text{Var}(X_{(n)}) = \\frac{(n+1)^2}{n^2} \\cdot \\frac{n}{(n+2)(n+1)^2} \\theta^2 = \\frac{\\theta^2}{n(n+2)}$$

**בדיקת עקביות**:
* כאשר $n \\to \\infty$, ההטיה נשארת אפס:
$$\\lim_{n \\to \\infty} \\text{Bias}(\\hat{\\theta}_n) = 0$$
* כאשר $n \\to \\infty$, השונות שואפת לאפס:
$$\\lim_{n \\to \\infty} \\text{Var}(\\hat{\\theta}_n) = \\lim_{n \\to \\infty} \\frac{\\theta^2}{n(n+2)} = 0$$

מכיוון שגם ההטיה וגם השונות שואפות לאפס ככל ש-$n$ גדל, האומד $\\hat{\\theta}_n$ מתכנס בהסתברות אל $\\theta$ (לפי אי-שוויון צ'בישב), מה שמוכיח שהוא אומד **עקבי**.`
      }
    ],
    quiz: [
      {
        question: `What is the relationship between the Bias, Variance, and Mean Square Error (MSE) of an estimator?`,
        questionHe: `מהי מערכת היחסים בין ההטיה, השונות והטעות הריבועית הממוצעת (MSE) של אומד?`,
        options: [
          `MSE(\\hat{\\theta}) = Var(\\hat{\\theta}) + [Bias(\\hat{\\theta})]^2`,
          `Var(\\hat{\\theta}) = MSE(\\hat{\\theta}) + [Bias(\\hat{\\theta})]^2`,
          `MSE(\\hat{\\theta}) = Var(\\hat{\\theta}) - [Bias(\\hat{\\theta})]^2`,
          `Bias(\\hat{\\theta}) = Var(\\hat{\\theta}) + MSE(\\hat{\\theta})`
        ],
        optionsHe: [
          `MSE(\\hat{\\theta}) = Var(\\hat{\\theta}) + [Bias(\\hat{\\theta})]^2`,
          `Var(\\hat{\\theta}) = MSE(\\hat{\\theta}) + [Bias(\\hat{\\theta})]^2`,
          `MSE(\\hat{\\theta}) = Var(\\hat{\\theta}) - [Bias(\\hat{\\theta})]^2`,
          `Bias(\\hat{\\theta}) = Var(\\hat{\\theta}) + MSE(\\hat{\\theta})`
        ],
        correctAnswerIndex: 0,
        explanation: `The Mean Square Error is mathematically decomposed into the variance of the estimator plus its squared bias: $MSE(\\hat{\\theta}) = \\mathbb{E}[(\\hat{\\theta}-\\theta)^2] = Var(\\hat{\\theta}) + [\\mathbb{E}[\\hat{\\theta}]-\\theta]^2$.`,
        explanationHe: `הטעות הריבועית הממוצעת מפורקת מתמטית לשונות של האומד ועוד ריבוע ההטיה שלו: $MSE(\\hat{\\theta}) = \\mathbb{E}[(\\hat{\\theta}-\\theta)^2] = Var(\\hat{\\theta}) + [\\mathbb{E}[\\hat{\\theta}]-\\theta]^2$.`
      },
      {
        question: `In Simple Linear Regression, what does the least squares method minimize?`,
        questionHe: `ברגרסיה ליניארית פשוטה, מה מביאה למינימום שיטת הריבועים הפחותים?`,
        options: [
          `The sum of squared residuals`,
          `The sum of absolute errors`,
          `The variance of independent variables`,
          `The product of standard deviations`
        ],
        optionsHe: [
          `סכום ריבועי השאריות (SSE)`,
          `סכום השגיאות המוחלטות`,
          `שונות המשתנים הבלתי תלויים`,
          `מכפלת סטיות התקן`
        ],
        correctAnswerIndex: 0,
        explanation: `The least squares estimator minimizes the Sum of Squared Residuals (SSE) $\\sum (Y_i - \\hat{Y}_i)^2$, which represents the vertical distances squared from the data points to the fitted line.`,
        explanationHe: `אומד הריבועים הפחותים ממזער את סכום ריבועי השאריות (SSE) $\\sum (Y_i - \\hat{Y}_i)^2$, המייצג את סכומי ריבועי המרחקים האנכיים של נקודות הנתונים מהקו המותאם.`
      }
    ]
  },
{
    id: 'nla-1',
    courseId: 'nla',
    chapterNumber: '1',
    title: 'Preliminary Background & Vector Norms',
    titleHe: 'פרק 1: רקע מקדים ונורמות של וקטורים',
    intro: 'Linear systems form the foundation of scientific computing. This chapter covers standard matrix forms, floating-point round-off errors, vector space properties, and establishes vector norms to mathematically quantify size and convergence.',
    introHe: 'מערכות ליניאריות מהוות את עמוד התווך של מחשוב מדעי. פרק זה מכסה צורות סטנדרטיות של מטריצות, שגיאות עיגול בנקודה צפה, תכונות של מרחבים וקטוריים, ומגדיר נורמות וקטוריות כדי לכמת מתמטית גודל והתכנסות.',
    motivation: 'Computers cannot store real numbers with infinite precision. Round-off errors occur at every step. Without vector norms, we have no way of measuring the distance between our computed numerical solution and the true mathematical solution, nor can we define numerical convergence.',
    motivationHe: 'מחשבים אינם יכולים לאחסן מספרים ממשיים בדיוק אינסופי. שגיאות עיגול מתרחשות בכל שלב. ללא נורמות וקטוריות, אין לנו דרך למדוד את המרחק בין הפתרון הנומרי שחישבנו לפתרון המתמטי האמיתי, ולא נוכל להגדיר התכנסות נומרית.',
    definitions: [
      {
        id: 'def-nla-1-1',
        title: 'Vector Norm & Vector Spaces',
        titleHe: 'נורמות של וקטורים ומרחבים וקטוריים',
        simplifiedLogic: 'A vector norm is a mathematical "measuring tape" for vectors. It takes a multi-dimensional coordinate vector and squashes it into a single positive real number representing its "length" or "size".\n\n**Visual Summary Comparison:**\n| Norm Family | Mathematical Formula | Intuitive Mental Model | Primary Application |\n| :---: | :---: | :---: | :---: |\n| **$L_1$ Norm** | $\\sum_{i=1}^n \\vert x_i\\vert$ | Grid-based walking (Manhattan street grid) | Robust regression, sparse optimization (Lasso) |\n| **$L_2$ Norm** | $\\sqrt{\\sum_{i=1}^n x_i^2}$ | Straight-line distance (bird\'s flight) | Standard physics, energy minimization |\n| **$L_\\infty$ Norm** | $\\max_{1 \\le i \\le n} \\vert x_i\\vert$ | Largest single coordinate mismatch | Peak error tolerances, worst-case stress analysis |',
        simplifiedLogicHe: 'נורמה של וקטור היא "סרט מדידה" מתמטי. היא לוקחת וקטור רב-ממדי ומכווצת אותו למספר ממשי חיובי יחיד המייצג את "אורכו" או "גודלו".\n\n**טבלת השוואה חזותית:**\n| משפחת הנורמות | נוסחה מתמטית | מודל מנטלי אינטואיטיבי | יישום מרכזי |\n| :---: | :---: | :---: | :---: |\n| **נורמת $ L_1 $** | $\\sum_{i=1}^n \\vert x_i\\vert$ | הליכה ברשת כבישים עירונית (מנהטן) | רגרסיה חסונה, אופטימיזציה דלילה (Lasso) |\n| **נורמת $ L_2 $** | $\\sqrt{\\sum_{i=1}^n x_i^2}$ | מרחק אווירי בקו ישר (מרחק אוקלידי) | פיזיקה סטנדרטית, מינימיזציית אנרגיה |\n| **נורמת $ L_\\infty $** | $\\max_{1 \\le i \\le n} \\vert x_i\\vert$ | הרכיב הקיצוני/הגרוע ביותר בוקטור | הגבלת השגיאה המקסימלית, עומס שיא |',
        toolboxConnection: 'Projecting a point onto a box domain (which we do in **OPT Chapter 3**) is mathematically equivalent to enforcing an $L_\\infty$-norm constraint. Understanding vector norms is what allows us to model constraints in multi-dimensional optimization solvers!',
        toolboxConnectionHe: 'היטל של נקודה על תחום תיבה (קופסה), כפי שמבוצע ב-**OPT פרק 3**, שקול מתמטית לאכיפת אילוץ של נורמת $L_\\infty$. הבנת נורמות של וקטורים היא זו שמאפשרת לנו למדל אילוצים במערכות אופטימיזציה רב-ממדיות!',
        keyTakeaway: 'Vector norms turn multi-dimensional errors into a single measurable size.',
        keyTakeawayHe: 'נורמות וקטוריות הופכות שגיאה רב-ממדית לגודל מדיד יחיד.',
        content: 'A vector norm on a vector space $V$ over $\\mathbb{R}^n$ is a function $\\|\\cdot\\|: V \\to \\mathbb{R}$ satisfying three fundamental properties for all vectors $u, v \\in V$ and scalars $\\alpha \\in \\mathbb{R}$:\n1. Non-negativity and Definiteness: $\\|u\\| \\geq 0$, and $\\|u\\| = 0 \\iff u = 0$\n2. Homogeneity: $\\|\\alpha u\\| = |\\alpha| \\cdot \\|u\\|$\n3. Triangle Inequality: $\\|u + v\\| \\leq \\|u\\| + \\|v\\|$\n\nCommon forms are the family of $\\ell_p$ norms:\n$$\\|x\\|_p = \\left( \\sum_{i=1}^n |x_i|^p \\right)^{1/p}$$',
        contentHe: 'נורמה של וקטור במרחב וקטורי $V$ מעל $\\mathbb{R}^n$ היא פונקציה $\\|\\cdot\\|: V \\to \\mathbb{R}$ המקיימת שלוש תכונות יסוד לכל הוקטורים $u, v \\in V$ והסקלרים $\\alpha \\in \\mathbb{R}$:\n1. אי-שליליות והגדרתיות: $\\|u\\| \\geq 0$, ומתקיים $\\|u\\| = 0 \\iff u = 0$\n2. הומוגניות: $\\|\\alpha u\\| = |\\alpha| \\cdot \\|u\\|$\n3. אי-שוויון המשולש: $\\|u + v\\| \\leq \\|u\\| + \\|v\\|$\n\nצורות נפוצות הן משפחת נורמות $\\ell_p$:\n$$\\ |x\\|_p = \\left( \\sum_{i=1}^n |x_i|^p \\right)^{1/p}$$',
        proof: 'Proof: Equivalence of Norms in Finite Dimensions\nTheorem: On any finite-dimensional vector space $V = \\mathbb{R}^n$, all norms are topologically equivalent. That is, for any two norms $\\|\\cdot\\|_a$ and $\\|\\cdot\\|_b$, there exist positive constants $c_1, c_2 > 0$ such that:\n$$c_1 \\|x\\|_b \\leq \\|x\\|_a \\leq c_2 \\|x\\|_b \\quad \\forall x \\in \\mathbb{R}^n$$\n\nProof Sketch:\n1. Let $e_1, ..., e_n$ be the standard basis of $\\mathbb{R}^n$. Any vector $x = \\sum_i x_i e_i$.\n2. Using the triangle inequality and homogeneity of $\\|\\cdot\\|_a$:\n   $$\\|x\\|_a = \\left\\| \\sum_{i=1}^n x_i e_i \\right\\|_a \\leq \\sum_{i=1}^n |x_i| \\|e_i\\|_a \\leq M \\|x\\|_1$$\n   where $M = n \\max_i \\|e_i\\|_a$. This establishes the upper bound.\n3. The function $f(x) = \\|x\\|_a$ is continuous with respect to the $\\ell_1$ norm. The unit sphere $S = \\{x \\in \\mathbb{R}^n \\mid \\|x\\|_1 = 1\\}$ is a closed and bounded (compact) set in $\\mathbb{R}^n$.\n4. By the Extreme Value Theorem, the continuous function $f(x) = \\|x\\|_a$ must achieve a minimum value $c_1 > 0$ on the compact set $S$.\n5. Therefore, for all $x \\in S$, $\\|x\\|_a \\geq c_1 \\|x\\|_1 = c_1$.\n6. By homogeneity, this holds for all $x \\\neq 0$, proving norm equivalence. Thus, if a sequence converges in one norm, it converges in all norms in $\\mathbb{R}^n$.',
        proofHe: 'הוכחה: שקילות נורמות בממדים סופיים\nמשפט: מעל כל מרחב וקטורי מממד סופי $V = \\mathbb{R}^n$, כל הנורמות שקולות טופולוגית. כלומר, לכל שתי נורמות $\\|\\cdot\\|_a$ ו-$\\|\\cdot\\|_b$, קיימים קבועים חיוביים $c_1, c_2 > 0$ כך שמתקיים:\n$$c_1 \\|x\\|_b \\leq \\|x\\|_a \\leq c_2 \\|x\\|_b \\quad \\forall x \\in \\mathbb{R}^n$$\n\nסקיצה של ההוכחה:\n1. יהיו $e_1, ..., e_n$ הבסיס הסטנדרטי של $\\mathbb{R}^n$. כל וקטור ניתן לייצוג כ-$x = \\sum_i x_i e_i$.\n2. באמצעות אי-שוויון המשולש וההומוגניות של $\\|\\cdot\\|_a$:\n   $$\\|x\\|_a = \\left\\| \\sum_{i=1}^n x_i e_i \\right\\|_a \\leq \\sum_{i=1}^n |x_i| \\|e_i\\|_a \\leq M \\|x\\|_1$$\n   כאשר $M = n \\max_i \\|e_i\\|_a$. זה מבסס את החסם העליון.\n3. הפונקציה $f(x) = \\|x\\|_a$ היא רציפה ביחס לנורמת $\\ell_1$. כדור היחידה $S = \\{x \\in \\mathbb{R}^n \\mid \\|x\\|_1 = 1\\}$ הוא קבוצה סגורה וחסומה (קומפקטית) ב-$\\mathbb{R}^n$.\n4. לפי משפט ערך הקיצון, הפונקציה הרציפה $f(x) = \\|x\\|_a$ חייבת לקבל ערך מינימום $c_1 > 0$ מעל הקבוצה הקומפקטית $S$.\n5. לכן, לכל $x \\in S$, מתקיים $\\|x\\|_a \\geq c_1 \\|x\\|_1 = c_1$.\n6. לפי תכונת ההומוגניות, תנאי זה מתקיים לכל $x \\\neq 0$, מה שמוכיח שקילות נורמות. מכאן, אם סדרה מתכנסת לפי נורמה אחת, היא בהכרח מתכנסת לפי כל נורמה אחרת ב-$\\mathbb{R}^n$.',
        example: 'Let $x = [-4, 3]^T \\in \\mathbb{R}^2$.\n- $\\ell_1$ norm (Manhattan): $\\|x\\|_1 = |-4| + |3| = 7$\n- $\\ell_2$ norm (Euclidean): $\\|x\\|_2 = \\sqrt{(-4)^2 + 3^2} = \\sqrt{16 + 9} = 5$\n- $\\ell_\\infty$ norm (Maximum): $\\|x\\|_\\infty = \\max(|-4|, |3|) = 4$',
        exampleHe: 'יהי $x = [-4, 3]^T \\in \\mathbb{R}^2$.\n- נורמת $\\ell_1$ (מרחק מנהטן): $\\|x\\|_1 = |-4| + |3| = 7$\n- נורמת $\\ell_2$ (מרחק אוקלידי): $\\|x\\|_2 = \\sqrt{(-4)^2 + 3^2} = \\sqrt{16 + 9} = 5$\n- נורמת $\\ell_\\infty$ (מקסימום): $\\|x\\|_\\infty = \\max(|-4|, |3|) = 4$'
      },
      {
        id: 'def-nla-1-2',
        title: 'Energy Norms (M-Norms)',
        titleHe: 'נורמות אנרגיה (M-נורמות)',
        simplifiedLogic: 'An energy norm measures vector size through the lens of a positive definite matrix $M$. Instead of treating all coordinates equally, $M$ acts as a "weighting matrix" that scales and rotates the vector coordinates, modeling physical constraints or grid structures.\n\n**Visual Concept Comparison:**\n* **Standard Norm ($L_2$):** Assumes space is isotropic (flat, equal in all directions).\n* **Energy Norm ($M$-Norm):** Distorts space using the matrix $M$, scaling dimensions based on local stiffness or energy weightings.',
        simplifiedLogicHe: 'נורמת אנרגיה מודדת את גודל הוקטור דרך עיניה של מטריצה סימטרית חיובית לחלוטין $M$. במקום להתייחס לכל הרכיבים באופן שווה, המטריצה $M$ משמשת כ"מטריצת משקלים" המעוותת ומסובבת את מערכת הקואורדינטות, ובכך ממדלת מגבלות פיזיקליות או מבני רשת.\n\n**השוואה חזותית:**\n* **נורמה סטנדרטית ($L_2$):** מניחה שכל הכיוונים במרחב שווי-ערך (שטוח, מרחק אחיד).\n* **נורמת אנרגיה ($M$-Norm):** מעוותת את המרחב באמצעות $M$, ומותחת ממדים לפי דרגת קשיחות או אנרגיה מקומית.',
        toolboxConnection: 'Energy norms are heavily used in unconstrained optimization (**OPT Chapter 2**) for Quasi-Newton methods like BFGS, where the metric matrix defines the curvature of our search steps.',
        toolboxConnectionHe: 'נורמות אנרגיה נמצאות בשימוש נרחב באופטימיזציה ללא אילוצים (**OPT פרק 2**) בשיטות קוואזי-ניוטון (כמו BFGS), שבהן מטריצת המטריקה מגדירה את העקמומיות של צעדי החיפוש שלנו.',
        keyTakeaway: 'Energy norms measure distance while factoring in matrix-defined physical geometry.',
        keyTakeawayHe: 'נורמות אנרגיה מודדות מרחקים תוך שקלול הגיאומטריה הפיזיקלית המוגדרת על ידי המטריצה.',
        content: 'Let $M \\in \\mathbb{R}^{n \\times n}$ be a Symmetric Positive Definite (SPD) matrix. The $M$-norm (or energy norm) of a vector $u$ is defined as:\n$$\\|u\\|_M = \\sqrt{\\langle u, M u \\rangle} = \\sqrt{u^T M u}$$',
        contentHe: 'תהי $M \\in \\mathbb{R}^{n \\times n}$ מטריצה סימטרית חיובית לחלוטין (SPD). נורמת $M$ (או נורמת האנרגיה) של וקטור $u$ מוגדרת כ:\n$$\\|u\\|_M = \\sqrt{\\langle u, M u \\rangle} = \\sqrt{u^T M u}$$',
        proof: 'Proof: Verification of Norm Axioms for M-Norm\nLet $M$ be SPD ($M^T = M$, and $x^T M x > 0$ for all $x \\\neq 0$).\n1. Non-negativity & Definiteness: Since $M$ is positive definite, $u^T M u > 0$ for all $u \\\neq 0$, and $u^T M u = 0 \\iff u = 0$. Thus $\\|u\\|_M \\geq 0$, with equality iff $u=0$.\n2. Homogeneity: $\\|\\alpha u\\|_M = \\sqrt{(\\alpha u)^T M (\\alpha u)} = \\sqrt{\\alpha^2 u^T M u} = |\\alpha| \\sqrt{u^T M u} = |\\alpha| \\|u\\|_M$.\n3. Triangle Inequality: Since $M$ is SPD, it induces an inner product $\\langle u, v \\rangle_M = u^T M v$. By the Cauchy-Schwarz inequality, $|u^T M v| \\leq \\|u\\|_M \\|v\\|_M$. Thus:\n   $$\\|u+v\\|_M^2 = (u+v)^T M (u+v) = u^T M u + 2 u^T M v + v^T M v \\leq \\|u\\|_M^2 + 2 \\|u\\|_M \\|v\\|_M + \\|v\\|_M^2 = (\\|u\\|_M + \\|v\\|_M)^2$$\n   Taking the square root yields $\\|u+v\\|_M \\leq \\|u\\|_M + \\|v\\|_M$.',
        proofHe: 'הוכחה: אימות אקסיומות הנורמה עבור M-נורמה\nתהי $M$ מטריצה סימטרית חיובית לחלוטין ($M^T = M$, וכן $x^T M x > 0$ לכל $x \\\neq 0$).\n1. אי-שליליות והגדרתיות: מכיוון ש-$M$ היא חיובית לחלוטין, מתקיים $u^T M u > 0$ לכל $u \\\neq 0$, וכן $u^T M u = 0 \\iff u = 0$. לכן $\\|u\\|_M \\geq 0$, עם שוויון אם ורק אם $u=0$.\n2. הומוגניות: $\\|\\alpha u\\|_M = \\sqrt{(\\alpha u)^T M (\\alpha u)} = \\sqrt{\\alpha^2 u^T M u} = |\\alpha| \\sqrt{u^T M u} = |\\alpha| \\|u\\|_M$.\n3. אי-שוויון המשולש: מכיוון ש-$M$ היא SPD, היא משרה מכפלה פנימית $\\langle u, v \\rangle_M = u^T M v$. לפי אי-שוויון קושי-שוורץ, $|u^T M v| \\leq \\|u\\|_M \\|v\\|_M$. מכאן:\n   $$\\|u+v\\|_M^2 = (u+v)^T M (u+v) = u^T M u + 2 u^T M v + v^T M v \\leq \\|u\\|_M^2 + 2 \\|u\\|_M \\|v\\|_M + \\|v\\|_M^2 = (\\|u\\|_M + \\|v\\|_M)^2$$\n   הוצאת שורש ריבועי מניבה $\\|u+v\\|_M \\leq \\|u\\|_M + \\|v\\|_M$.',
        example: 'Let $M = \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$ (which is SPD) and $u = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$.\n$$\\|u\\|_M = \\sqrt{\\begin{bmatrix} 1 & 2 \\end{bmatrix} \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}} = \\sqrt{\\begin{bmatrix} 1 & 2 \\end{bmatrix} \\begin{bmatrix} 2 & 6 \\end{bmatrix}} = \\sqrt{2 + 12} = \\sqrt{14} \\approx 3.74$$',
        exampleHe: 'תהי $M = \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$ (שהיא SPD) ויהי $u = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$.\n$$\\|u\\|_M = \\sqrt{\\begin{bmatrix} 1 & 2 \\end{bmatrix} \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}} = \\sqrt{\\begin{bmatrix} 1 & 2 \\end{bmatrix} \\begin{bmatrix} 2 & 6 \\end{bmatrix}} = \\sqrt{2 + 12} = \\sqrt{14} \\approx 3.74$$'
      },
      {
        id: 'def-nla-1-3',
        title: 'Inner Products & Cauchy-Schwarz Inequality',
        titleHe: 'מכפלות פנימיות ואי-שוויון קושי-שוורץ',
        simplifiedLogic: 'An inner product measures the "alignment" or "overlap" between two vectors. The Cauchy-Schwarz inequality states that this overlap cannot exceed the product of their individual lengths. If the vectors point in the same direction, the overlap is maximized; if they are orthogonal, the overlap is zero.\n\n**Visual Tree Mappings:**\n* **Vectors Aligned (0°):** Maximum Positive Overlap $\\rightarrow \\langle u, v \\rangle = \\|u\\|_2 \\|v\\|_2$\n* **Vectors Orthogonal (90°):** Zero Overlap $\\rightarrow \\langle u, v \\rangle = 0$\n* **Vectors Opposite (180°):** Maximum Negative Overlap $\\rightarrow \\langle u, v \\rangle = -\\|u\\|_2 \\|v\\|_2$',
        simplifiedLogicHe: 'מכפלה פנימית מודדת את "ההתלכדות" או "החפיפה" בין שני וקטורים. אי-שוויון קושי-שוורץ קובע שחפיפה זו אינה יכולה לעלות על מכפלת האורכים האינדיבידואליים שלהם. אם הוקטורים מצביעים לאותו כיוון, החפיפה מקסימלית; אם הם מאונכים, החפיפה היא אפס.\n\n**מיפוי חזותי:**\n* **וקטורים מיושרים (0°):** חפיפה חיובית מקסימלית $\\rightarrow \\langle u, v \\rangle = \\|u\\|_2 \\|v\\|_2$\n* **וקטורים ניצבים (90°):** חפיפה אפסית לחלוטין $\\rightarrow \\langle u, v \\rangle = 0$\n* **וקטורים הפוכים (180°):** חפיפה שלילית מקסימלית $\\rightarrow \\langle u, v \\rangle = -\\|u\\|_2 \\|v\\|_2$',
        toolboxConnection: 'Steepest descent in **OPT Chapter 2** uses orthogonality. We prove consecutive steps are orthogonal (inner product is zero) to explain why the solver zigzags in narrow valleys.',
        toolboxConnectionHe: 'שיטת הירידה התלולה ב-**OPT פרק 2** מבוססת על ניצבות. אנו מוכיחים שצעדים עוקבים הם ניצבים (מכפלה פנימית אפס) כדי להסביר מדוע הפותר נע בזיגזג בעמקים צרים.',
        keyTakeaway: 'The inner product quantifies geometric alignment, bounded strictly by vector magnitudes.',
        keyTakeawayHe: 'מכפלה פנימית מכמתת התלכדות גיאומטרית, וחסומה באופן קשיח על ידי גודלי הוקטורים.',
        content: 'An inner product on a vector space $V$ is a function $\\langle \\cdot, \\cdot \\rangle: V \\times V \\to \\mathbb{R}$ (or $\\mathbb{C}$) satisfying:\n1. **Conjugate symmetry**: $\\langle u, v \\rangle = \\overline{\\langle v, u \\rangle}$\n2. **Linearity in second argument**: $\\langle u, \\alpha v + \\beta w \\rangle = \\alpha \\langle u, v \\rangle + \\beta \\langle u, w \\rangle$\n3. **Non-negativity**: $\\langle u, u \\rangle \\geq 0$, with $\\langle u, u \\rangle = 0 \\iff u = 0$\n\nThe standard (Hermitian) inner product on $\\mathbb{C}^n$ is:\n$$\\langle u, v \\rangle = u^* v = \\sum_{i=1}^n \\bar{u}_i v_i$$\nThis induces the $\\ell_2$ norm: $\\|u\\|_2 = \\sqrt{\\langle u, u \\rangle}$.\n\n**Cauchy-Schwarz Inequality**: For any vectors $u, v$:\n$$|\\langle u, v \\rangle| \\leq \\|u\\|_2 \\cdot \\|v\\|_2$$\nEquality holds if and only if $u$ and $v$ are linearly dependent.',
        contentHe: 'מכפלה פנימית במרחב וקטורי $V$ היא פונקציה $\\langle \\cdot, \\cdot \\rangle: V \\times V \\to \\mathbb{R}$ (או $\\mathbb{C}$) המקיימת:\n1. **סימטריה צמודה (הרמיטית)**: $\\langle u, v \\rangle = \\overline{\\langle v, u \\rangle}$\n2. **ליניאריות בארגומנט השני**: $\\langle u, \\alpha v + \\beta w \\rangle = \\alpha \\langle u, v \\rangle + \\beta \\langle u, w \\rangle$\n3. **אי-שליליות והגדרתיות**: $\\langle u, u \\rangle \\geq 0$, כאשר $\\langle u, u \\rangle = 0 \\iff u = 0$\n\nהמכפלה הפנימית הסטנדרטית (ההרמיטית) מעל $\\mathbb{C}^n$ מוגדרת כ:\n$$\\langle u, v \\rangle = u^* v = \\sum_{i=1}^n \\bar{u}_i v_i$$\nמכפלה זו משרה את נורמת $\\ell_2$: $\\|u\\|_2 = \\sqrt{\\langle u, u \\rangle}$.\n\n**אי-שוויון קושי-שוורץ (Cauchy-Schwarz Inequality)**: לכל שני וקטורים $u, v$ מתקיים:\n$$|\\langle u, v \\rangle| \\leq \\|u\\|_2 \\cdot \\|v\\|_2$$\nהשוויון מתקיים אם ורק אם $u$ ו-$v$ תלויים ליניארית.',
        proof: 'Proof: Cauchy-Schwarz Inequality\n\nCase $u = 0$: Both sides are 0, so the inequality holds trivially.\n\nCase $u \\\neq 0$: For any scalar $t \\in \\mathbb{R}$, consider the non-negative quantity:\n$$0 \\leq \\|v - t u\\|_2^2 = \\langle v - tu, v - tu \\rangle = \\|v\\|_2^2 - 2t \\langle u, v \\rangle + t^2 \\|u\\|_2^2$$\nChoose the optimal $t$ by minimizing the right side with respect to $t$:\n$$\\frac{d}{dt}(\\|v\\|_2^2 - 2t\\langle u, v\\rangle + t^2 \\|u\\|_2^2) = -2\\langle u, v\\rangle + 2t\\|u\\|_2^2 = 0$$\n$$\\implies t^* = \\frac{\\langle u, v \\rangle}{\\|u\\|_2^2}$$\nSubstituting $t^*$ back into the non-negativity condition:\n$$0 \\leq \\|v\\|_2^2 - 2 \\cdot \\frac{\\langle u, v \\rangle}{\\|u\\|_2^2} \\cdot \\langle u, v \\rangle + \\frac{\\langle u, v \\rangle^2}{\\|u\\|_2^4} \\cdot \\|u\\|_2^2 = \\|v\\|_2^2 - \\frac{\\langle u, v \\rangle^2}{\\|u\\|_2^2}$$\nRearranging: $\\langle u, v \\rangle^2 \\leq \\|u\\|_2^2 \\cdot \\|v\\|_2^2$, i.e., $|\\langle u, v \\rangle| \\leq \\|u\\|_2 \\cdot \\|v\\|_2$. $\\square$',
        proofHe: 'הוכחה: אי-שוויון קושי-שוורץ\n\nמקרה $u = 0$: שני האגפים שווים ל-0, ולכן האי-שוויון מתקיים באופן טריוויאלי.\n\nמקרה $u \\\neq 0$: לכל סקלר $t \\in \\mathbb{R}$, נבחן את הביטוי האי-שלילי:\n$$0 \\leq \\|v - t u\\|_2^2 = \\langle v - tu, v - tu \\rangle = \\|v\\|_2^2 - 2t \\langle u, v \\rangle + t^2 \\|u\\|_2^2$$\nנבחר את $t$ האופטימלי על ידי גזירה ומזעור של אגף ימין ביחס ל-$t$:\n$$\\frac{d}{dt}(\\|v\\|_2^2 - 2t\\langle u, v\\rangle + t^2 \\|u\\|_2^2) = -2\\langle u, v\\rangle + 2t\\|u\\|_2^2 = 0$$\n$$\\implies t^* = \\frac{\\langle u, v \\rangle}{\\|u\\|_2^2}$$\nנציב את $t^*$ חזרה לתנאי האי-שליליות:\n$$0 \\leq \\|v\\|_2^2 - 2 \\cdot \\frac{\\langle u, v \\rangle}{\\|u\\|_2^2} \\cdot \\langle u, v \\rangle + \\frac{\\langle u, v \\rangle^2}{\\|u\\|_2^4} \\cdot \\|u\\|_2^2 = \\|v\\|_2^2 - \\frac{\\langle u, v \\rangle^2}{\\|u\\|_2^2}$$\nהעברת אגפים וסידור מחדש מניבים: $\\langle u, v \\rangle^2 \\leq \\|u\\|_2^2 \\cdot \\|v\\|_2^2$, כלומר $|\\langle u, v \\rangle| \\leq \\|u\\|_2 \\cdot \\|v\\|_2$. $\\square$',
        example: 'Let $u = [3, 4]^T$ and $v = [1, 2]^T$.\n- Inner product: \\langle u, v \\rangle = 3(1) + 4(2) = 11\n- Norms: \\|u\\|_2 = \\sqrt{9+16} = 5, \\|v\\|_2 = \\sqrt{1+4} = \\sqrt{5}\n- Cauchy-Schwarz check: |11| \\leq 5 \\cdot \\sqrt{5} = 5 \\cdot 2.236 = 11.18 \\checkmark\n\nThis bound is tight \\u2014 if we set v = 2u = [6, 8]^T:\n- \\langle u, v \\rangle = 18 + 32 = 50, and \\|u\\|_2 \\|v\\|_2 = 5 \\cdot 10 = 50. Equality achieved!',
        exampleHe: 'יהיו $u = [3, 4]^T$ ו-$v = [1, 2]^T$.\n- מכפלה פנימית: $\\langle u, v \\rangle = 3(1) + 4(2) = 11$\n- נורמות: $\\|u\\|_2 = \\sqrt{9+16} = 5$, $\\|v\\|_2 = \\sqrt{1+4} = \\sqrt{5}$\n- בדיקת קושי-שוורץ: $|11| \\leq 5 \\cdot \\sqrt{5} = 5 \\cdot 2.236 = 11.18$ ✓\n\nחסם זה הדוק—אם נבחר $v = 2u = [6, 8]^T$:\n- $\\langle u, v \\rangle = 18 + 32 = 50$, וכן $\\|u\\|_2 \\|v\\|_2 = 5 \\cdot 10 = 50$. השוויון מושג!'
      }
    ],
    quiz: [
      {
        question: 'Under what condition is the energy norm ||u||_M mathematically defined as a valid vector norm?',
        questionHe: 'תחת איזה תנאי מוגדרת נורמת האנרגיה ||u||_M כנורמה וקטורית תקפה?',
        options: [
          'For any square matrix M.',
          'Only if M is a symmetric positive definite (SPD) matrix.',
          'Only if M is a diagonal matrix.',
          'If M has only negative eigenvalues.'
        ],
        optionsHe: [
          'לכל מטריצה ריבועית M.',
          'רק אם M היא מטריצה סימטרית חיובית לחלוטין (SPD).',
          'רק אם M היא מטריצה אלכסונית.',
          'אם ל-M יש ערכים עצמיים שליליים בלבד.'
        ],
        correctAnswerIndex: 1,
        explanation: 'For the M-norm to satisfy the non-negativity and definiteness axioms, the matrix M must be Symmetric Positive Definite, ensuring x^T M x > 0 for all non-zero vectors.',
        explanationHe: 'על מנת ש-M-נורמה תקיים את אקסיומות האי-שליליות וההגדרתיות, המטריצה M חייבת להיות סימטרית חיובית לחלוטין (SPD), מה שמבטיח שמתקיים x^T M x > 0 לכל וקטור שאינו אפס.'
      },
      {
        question: 'What does the equivalence of norms in finite dimensions guarantee?',
        questionHe: 'מה מבטיח משפט שקילות הנורמות בממדים סופיים?',
        options: [
          'All norms will calculate exactly the same numerical value for a given vector.',
          'If a sequence converges to a limit in one norm, it is mathematically guaranteed to converge to the same limit in all other norms.',
          'We only need to use the 1-norm for all calculations.',
          'The condition number of a matrix is the same across all norms.'
        ],
        optionsHe: [
          'כל הנורמות יחשבו בדיוק את אותו ערך מספרי עבור וקטור נתון.',
          'אם סדרה מתכנסת לגבול מסוים בנורמה אחת, מובטח מתמטית שהיא תתכנס לאותו גבול בכל נורמה אחרת.',
          'עלינו להשתמש רק בנורמה 1 לכל החישובים.',
          'מספר המצב של מטריצה זהה בכל הנורמות.'
        ],
        correctAnswerIndex: 1,
        explanation: 'Norm equivalence proves that the topological properties (like open sets, limit points, and convergence) are identical in finite-dimensional spaces across all valid norms.',
        explanationHe: 'שקילות נורמות מוכיחה כי התכונות הטופולוגיות (כמו קבוצות פתוחות, נקודות גבול והתכנסות) זהות לחלוטין במרחבים מממד סופי תחת כל נורמה תקפה.'
      }
    ]
  },
{
    id: 'nla-3',
    courseId: 'nla',
    chapterNumber: '3',
    title: 'Least Squares Minimization Problems',
    titleHe: 'פרק 3: בעיות מזעור בריבועים מינימליים',
    intro: 'When we have more equations than unknowns ($m > n$), a linear system $Ax=b$ has no exact solution. This chapter covers the method of Least Squares, its general derivatives, Weighted Least Squares, and Tikhonov Regularization.',
    introHe: 'כאשר יש לנו יותר משוואות מנעלמים ($m > n$), למערכת ליניארית $Ax=b$ אין פתרון מדויק. פרק זה מכסה את שיטת הריבועים המינימליים, נגזרותיה הכלליות, ריבועים מינימליים משוקללים ורגולריזציית טיכונוב (Tikhonov Regularization).',
    motivation: 'In real-world engineering and data science, data is noisy and overdetermined. Least Squares allows us to find the single mathematically optimal vector that minimizes the sum of squared errors, while regularizations protect our models against extreme noise.',
    motivationHe: 'בהנדסה ובמדע הנתונים בעולם האמיתי, הנתונים רועשים ומוגדרים ביתר (Overdetermined). שיטת הריבועים המינימליים מאפשרת לנו למצוא את הוקטור האופטימלי מתמטית היחיד שממזער את סכום ריבועי השגיאות, בעוד ששיטות רגולריזציה מגינות על המודלים שלנו מפני רעש קיצוני.',
    definitions: [
      {
        id: 'def-nla-3-1',
        title: 'Full-Rank Least Squares & Normal Equations',
        titleHe: 'ריבועים מינימליים בדרגה מלאה (Normal Equations)',
        simplifiedLogic: 'When $Ax = b$ has no exact solution (usually because we have more equations than variables, $m > n$), we project $b$ onto the column space of $A$. The closest possible vector is the projection, which we find by solving the **Normal Equations** ($A^TAx = A^Tb$).\n\n**Mathematical Pipeline:**\n$$\\text{Inconsistent: } Ax \\approx b \\quad \\longrightarrow \\quad \\text{Orthogonal Project: } A^T(b - Ax) = 0 \\quad \\longrightarrow \\quad \\text{Normal Equations: } A^T A x = A^T b$$',
        simplifiedLogicHe: 'כאשר למערכת $Ax = b$ אין פתרון מדויק (בדרך כלל כשיש יותר משוואות מנעלמים, $m > n$), אנו מטילים את $b$ על מרחב העמודות של $A$. הוקטור הקרוב ביותר האפשרי הוא ההיטל, אותו אנו מוצאים על ידי פתרון **המשוואות הנורמליות** ($A^TAx = A^Tb$).\n\n**תהליך הפתרון:**\n$$\\text{לא עקבי: } Ax \\approx b \\quad \\longrightarrow \\quad \\text{הטלה ניצבת: } A^T(b - Ax) = 0 \\quad \\longrightarrow \\quad \\text{משוואות נורמליות: } A^T A x = A^T b$$',
        toolboxConnection: 'This is the exact linear case of the **Gauss-Newton** method in **OPT Chapter 2**, showing that least squares fitting is optimization in its purest form.',
        toolboxConnectionHe: 'זהו המקרה הליניארי המדויק של שיטת **גאוס-ניוטון** ב-**OPT פרק 2**, המראה שפתרון ריבועים מינימליים הוא אופטימיזציה בצורתה הטהורה ביותר.',
        keyTakeaway: 'Normal equations solve overdetermined systems by forcing the error residual to be orthogonal to matrix columns.',
        keyTakeawayHe: 'משוואות נורמליות פותרות מערכות יתר על ידי אילוץ שארית השגיאה להיות ניצבת לעמודות המטריצה.',
        content: 'Let $A \\in \\mathbb{R}^{m \\times n}$ with $m > n$ have full column rank ($rank(A) = n$). We want to minimize the Euclidean norm of the residual $r = b - Ax$:\n$$\\min_x f(x) = \\frac{1}{2} \\|Ax - b\\|_2^2$$\nSetting the gradient $\\nabla f(x) = 0$ yields the Normal Equations:\n$$A^T A x = A^T b$$',
        contentHe: 'תהי $A \\in \\mathbb{R}^{m \\times n}$ מטריצה בעלת דרגת עמודות מלאה ($rank(A) = n$), כאשר $m > n$. אנו מעוניינים למזער את נורמת $\\ell_2$ (האוקלידית) של השארית (Residual) $r = b - Ax$:\n$$\\min_x f(x) = \\frac{1}{2} \\|Ax - b\\|_2^2$$\nהשוואת הגרדיאנט לאפס, $\\nabla f(x) = 0$, מניבה את המשוואות הנורמליות (Normal Equations):\n$$A^T A x = A^T b$$',
        proof: 'Proof: Normal Equations Derivation via Matrix Calculus\nLet $f(x) = \\frac{1}{2} \\|Ax - b\\|_2^2 = \\frac{1}{2} (Ax - b)^T (Ax - b)$.\n1. Expand the quadratic form:\n   $$f(x) = \\frac{1}{2} (x^T A^T A x - 2 x^T A^T b + b^T b)$$\n2. To find the minimum, we compute the gradient $\\nabla f(x)$ with respect to the vector $x$. Let\'s recall the derivatives of linear and quadratic functions:\n   - $\\nabla_x (x^T v) = v$\n   - $\\nabla_x (x^T M x) = (M + M^T)x$ (which reduces to $2Mx$ when $M$ is symmetric).\n3. Applying these rules to our expanded objective function:\n   $$\\nabla f(x) = \\frac{1}{2} (2 A^T A x - 2 A^T b) = A^T A x - A^T b$$\n4. Set the gradient to the zero vector for optimality:\n   $$A^T A x - A^T b = 0 \\implies A^T A x = A^T b$$\n5. Since $A$ has full column rank, $A^T A$ is symmetric positive definite and therefore invertible, yielding the unique least squares solution $x = (A^T A)^{-1} A^T b$.',
        proofHe: 'הוכחה: גזירת המשוואות הנורמליות באמצעות חשבון מטריצות\nיהי $f(x) = \\frac{1}{2} \\|Ax - b\\|_2^2 = \\frac{1}{2} (Ax - b)^T (Ax - b)$.\n1. נפתח את התבנית הריבועית:\n   $$f(x) = \\frac{1}{2} (x^T A^T A x - 2 x^T A^T b + b^T b)$$\n2. על מנת למצוא את המינימום, נחשב את הגרדיאנט $\\nabla f(x)$ ביחס לוקטור $x$. נזכיר את חוקי הגזירה של פונקציות ליניאריות וריבועיות:\n   - $\\nabla_x (x^T v) = v$\n   - $\\nabla_x (x^T M x) = (M + M^T)x$ (אשר מצטמצם ל-$2Mx$ כאשר $M$ היא מטריצה סימטרית).\n3. נחיל חוקים אלו על פונקציית המטרה שפתחנו:\n   $$\\nabla f(x) = \\frac{1}{2} (2 A^T A x - 2 A^T b) = A^T A x - A^T b$$\n4. נשווה את הגרדיאנט לוקטור האפס לקבלת תנאי אופטימליות:\n   $$A^T A x - A^T b = 0 \\implies A^T A x = A^T b$$\n5. מכיוון ש-$A$ היא בדרגת עמודות מלאה, המטריצה $A^T A$ היא סימטרית חיובית לחלוטין ולכן הפיכה, מה שמבטיח פתרון ריבועים מינימליים יחיד: $x = (A^T A)^{-1} A^T b$.',
        example: 'Fit a line $y = c_1 x + c_2$ to three data points: $(1, 2), (2, 3), (3, 5)$.\n1. Set up the overdetermined system $Ac = y$:\n   $$A = \\begin{bmatrix} 1 & 1 \\\\ 2 & 1 \\\\ 3 & 1 \\end{bmatrix}, \\quad y = \\begin{bmatrix} 2 \\\\ 3 \\\\ 5 \\end{bmatrix}$$\n2. Compute $A^T A$ and $A^T y$:\n   $$A^T A = \\begin{bmatrix} 14 & 6 \\\\ 6 & 3 \\end{bmatrix}, \\quad A^T y = \\begin{bmatrix} 23 \\\\ 10 \\end{bmatrix}$$\n3. Solve the Normal Equations $\\begin{bmatrix} 14 & 6 \\\\ 6 & 3 \\end{bmatrix} \\begin{bmatrix} c_1 \\\\ c_2 \\end{bmatrix} = \\begin{bmatrix} 23 \\\\ 10 \\end{bmatrix}$:\n   Multiplying row 2 by 2 gives $12c_1 + 6c_2 = 20$. Subtract from row 1:\n   $$2c_1 = 3 \\implies c_1 = 1.5$$\n   Substitute: $6(1.5) + 3c_2 = 10 \\implies 9 + 3c_2 = 10 \\implies c_2 = 1/3 \\approx 0.33$.\n4. Best-fit line: $y = 1.5x + 0.33$.',
        exampleHe: 'התאם קו ישר $y = c_1 x + c_2$ לשלוש נקודות נתונות: $(1, 2), (2, 3), (3, 5)$.\n1. נבנה את מערכת המשוואות המוגדרת ביתר $Ac = y$:\n   $$A = \\begin{bmatrix} 1 & 1 \\\\ 2 & 1 \\\\ 3 & 1 \\end{bmatrix}, \\quad y = \\begin{bmatrix} 2 \\\\ 3 \\\\ 5 \\end{bmatrix}$$\n2. נחשב את $A^T A$ ואת $A^T y$:\n   $$A^T A = \\begin{bmatrix} 14 & 6 \\\\ 6 & 3 \\end{bmatrix}, \\quad A^T y = \\begin{bmatrix} 23 \\\\ 10 \\end{bmatrix}$$\n3. נפתור את המשוואות הנורמליות $\\begin{bmatrix} 14 & 6 \\\\ 6 & 3 \\end{bmatrix} \\begin{bmatrix} c_1 \\\\ c_2 \\end{bmatrix} = \\begin{bmatrix} 23 \\\\ 10 \\end{bmatrix}$:\n   נכפיל את השורה השנייה ב-2 ונקבל $12c_1 + 6c_2 = 20$. נחסר משוואה זו מהשורה הראשונה:\n   $$2c_1 = 3 \\implies c_1 = 1.5$$\n   נציב חזרה: $6(1.5) + 3c_2 = 10 \\implies 9 + 3c_2 = 10 \\implies c_2 = 1/3 \\approx 0.33$.\n4. הקו בעל ההתאמה המיטבית הוא: $y = 1.5x + 0.33$.'
      },
      {
        id: 'def-nla-3-2',
        title: 'Weighted & Regularized Least Squares',
        titleHe: 'ריבועים מינימליים משוקללים ורגולריזציה (Tikhonov)',
        simplifiedLogic: 'Not all data points are created equal. **Weighted Least Squares** scales equations so that reliable measurements count more than noisy ones. **Tikhonov Regularization** prevents overfitting and mathematical instability by adding a penalty parameter $\\lambda^2 \\|x\\|_2^2$ to the objective, keeping the solution vector coordinates small.\n\n**Visual Summary Comparison:**\n| Method | Objective Function | Key Purpose |\n| :---: | :---: | :---: |\n| **Standard Least Squares** | $\\min_x \\|Ax - b\\|_2^2$ | Minimizes raw squared residual sum |\n| **Weighted Least Squares** | $\\min_x \\|W(Ax - b)\\|_2^2$ | Gives higher weight to high-confidence data |\n| **Tikhonov Regularization** | $\\min_x \\|Ax - b\\|_2^2 + \\lambda^2 \\|x\\|_2^2$ | Prevents high sensitivity and overfitting to noise |',
        simplifiedLogicHe: 'לא כל נקודות המידע נולדו שוות. **ריבועים מינימליים משוקללים** מעניקים משקל רב יותר למדידות אמינות ופחות למדידות רועשות. **רגולריזציית טיכונוב** מונעת התאמת-יתר ואי-יציבות מתמטית על ידי הוספת איבר ענישה $\\lambda^2 \\|x\\|_2^2$, השומר על ערכי וקטור הפתרון קטנים ויציבים.\n\n**טבלת השוואה:**\n| שיטה | פונקציית המטרה | מטרה מרכזית |\n| :---: | :---: | :---: |\n| **ריבועים מינימליים רגילים** | $\\min_x \\|Ax - b\\|_2^2$ | מזעור סכום ריבועי השאריות הגולמי |\n| **ריבועים מינימליים משוקללים** | $\\min_x \\|W(Ax - b)\\|_2^2$ | מתן עדיפות לנתונים בעלי רמת אמינות גבוהה |\n| **רגולריזציית טיכונוב** | $\\min_x \\|Ax - b\\|_2^2 + \\lambda^2 \\|x\\|_2^2$ | מניעת רגישות יתר והתאמת-יתר לרעש |',
        toolboxConnection: 'In **OPT Chapter 3**, Penalty methods enforce constraints by adding penalties to the objective, which is the exact same mathematical mechanism as Tikhonov regularization in NLA!',
        toolboxConnectionHe: 'ב-**OPT פרק 3**, שיטות קנס אוכפות אילוצים על ידי הוספת עונשים לפונקציית המטרה, וזהו מנגנון מתמטי זהה לחלוטין לרגולריזציית טיכונוב ב-NLA!',
        keyTakeaway: 'Regularization trading off residual error for parameter stability prevents noise from ruining solutions.',
        keyTakeawayHe: 'רגולריזציה מאזנת בין שגיאת השארית ליציבות הפרמטרים ובכך מונעת מרעש להרוס את הפתרון.',
        content: '1. Weighted Least Squares (WLS): Minimizes the error with varying confidence weights $W$:\n   $$\\min_x \\frac{1}{2} \\|Ax - b\\|_W^2 \\implies (A^T W A) x = A^T W b$$\n2. Regularized Least Squares (Tikhonov Regularization): Handles ill-conditioned or low-rank matrices by penalizing large solution norms with parameter $\\mu > 0$:\n   $$\\min_x \\frac{1}{2} \\|Ax - b\\|_2^2 + \\frac{\\mu}{2} \\|x\\|_2^2 \\implies (A^T A + \\mu I) x = A^T b$$',
        contentHe: '1. ריבועים מינימליים משוקללים (WLS): מזעור השגיאה תוך שקלול רמות ביטחון שונות $W$:\n   $$\\min_x \\frac{1}{2} \\|Ax - b\\|_W^2 \\implies (A^T W A) x = A^T W b$$\n2. ריבועים מינימליים מוסדרים (רגולריזציית טיכונוב - Tikhonov Regularization): מטפלת במטריצות בעלות מספר מצב גרוע או שאינן בדרגה מלאה על ידי ענישת ערכים גדולים בנורמת הפתרון באמצעות פרמטר $\\mu > 0$:\n   $$\\min_x \\frac{1}{2} \\|Ax - b\\|_2^2 + \\frac{\\mu}{2} \\|x\\|_2^2 \\implies (A^T A + \\mu I) x = A^T b$$',
        proof: 'Proof: Regularized LS Stability & Solvability\nSuppose $A^T A$ is singular (e.g., $rank(A) < n$, meaning we have infinitely many solutions and the system is unstable).\n1. We define the regularized objective: $g(x) = \\frac{1}{2} \\|Ax - b\\|_2^2 + \\frac{\\mu}{2} x^T x$.\n2. Take the gradient:\n   $$\\nabla g(x) = A^T A x - A^T b + \\mu x = (A^T A + \\mu I) x - A^T b$$\n3. Set to zero: $(A^T A + \\mu I) x = A^T b$.\n4. Let the eigenvalues of $A^T A$ be $\\lambda_i \\geq 0$. The eigenvalues of the regularized matrix $A^T A + \\mu I$ are $\\lambda_i + \\mu$.\n5. Since $\\mu > 0$, the smallest eigenvalue is at least $\\mu$, meaning $(A^T A + \\mu I)$ is strictly positive definite and guaranteed invertible, even if $A^T A$ was highly singular. This bounds the condition number and stabilizes the solution against extreme noise (vital in applications like image de-blurring).',
        proofHe: 'הוכחה: יציבות ופתירות של ריבועים מינימליים מוסדרים\nנניח כי $A^T A$ היא מטריצה סינגולרית (למשל, כאשר $rank(A) < n$, כלומר יש אינסוף פתרונות והמערכת אינה יציבה).\n1. נגדיר את פונקציית המטרה המוסדרת (הרגולרית): $g(x) = \\frac{1}{2} \\|Ax - b\\|_2^2 + \\frac{\\mu}{2} x^T x$.\n2. נחשב את הגרדיאנט:\n   $$\\nabla g(x) = A^T A x - A^T b + \\mu x = (A^T A + \\mu I) x - A^T b$$\n3. נשווה את הגרדיאנט לוקטור האפס: $(A^T A + \\mu I) x = A^T b$.\n4. נסמן את הערכים העצמיים של $A^T A$ ב-$\\lambda_i \\geq 0$. הערכים העצמיים של המטריצה המוסדרת $A^T A + \\mu I$ יהיו $\\lambda_i + \\mu$.\n5. כיוון ש-$\\mu > 0$, הערך העצמי הקטן ביותר הוא לפחות $\\mu$, מה שמבטיח שהמטריצה $(A^T A + \\mu I)$ היא חיובית לחלוטין (SPD) ולכן בהכרח הפיכה, גם אם המטריצה המקורית $A^T A$ הייתה סינגולרית לחלוטין. הדבר חוסם את מספר המצב ומייצב את הפתרון מול רעשים קיצוניים (חיוני ביישומים כגון שחזור וטשטוש תמונות).',
        example: 'Let $A^T A = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$ (singular, $\\det = 0$) and $A^T b = \\begin{bmatrix} 2 \\\\ 2 \\end{bmatrix}$.\nWithout regularization, no unique solution exists.\nApply Tikhonov regularization with $\\mu = 0.1$:\n$$A^T A + \\mu I = \\begin{bmatrix} 1.1 & 1 \\\\ 1 & 1.1 \\end{bmatrix}$$\nSolve $\\begin{bmatrix} 1.1 & 1 \\\\ 1 & 1.1 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 2 \\end{bmatrix}$:\nBy symmetry, $x_1 = x_2$. So $2.1x_1 = 2 \\implies x_1 = x_2 = 2/2.1 \\approx 0.95$. We obtained a stable, unique, and bounded solution!',
        exampleHe: 'תהי $A^T A = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$ (סינגולרית, $\\det = 0$) ויהי $A^T b = \\begin{bmatrix} 2 \\\\ 2 \\end{bmatrix}$.\nללא רגולריזציה, לא קיים פתרון יחיד למערכת.\nנחיל רגולריזציית טיכונוב עם פרמטר $\\mu = 0.1$:\n$$A^T A + \\mu I = \\begin{bmatrix} 1.1 & 1 \\\\ 1 & 1.1 \\end{bmatrix}$$\nנפתור את המערכת $\\begin{bmatrix} 1.1 & 1 \\\\ 1 & 1.1 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 2 \\end{bmatrix}$:\nמתוך סימטריה, מתקיים $x_1 = x_2$. לכן, $2.1x_1 = 2 \\implies x_1 = x_2 = 2/2.1 \\approx 0.95$. קיבלנו פתרון יציב, יחיד וחסום!'
      },
      {
        id: 'def-nla-3-3',
        title: 'Gradient Rules & LS Orthogonality Property',
        titleHe: 'חוקי גרדיאנטים ואורתוגונליות של ריבועים מינימליים',
        simplifiedLogic: 'To solve multi-dimensional optimization problems, we must take derivatives of vectors and matrices. This section catalogs the foundational matrix calculus rules (linear forms, quadratic forms, and symmetric gradients) and proves that the optimal least squares residual is strictly orthogonal to the columns of $A$.\n\n**Gradient Formula Matrix:**\n* Linear: $\\nabla_x (c^T x) = c$\n* Quadratic (General): $\\nabla_x (x^T M x) = (M + M^T) x$\n* Quadratic (Symmetric): $\\nabla_x (x^T A x) = 2 A x \\quad \\text{if } A^T = A$',
        simplifiedLogicHe: 'כדי לפתור בעיות אופטימיזציה רב-ממדיות, עלינו לדעת לגזור וקטורים ומטריצות. סעיף זה מרכז את חוקי היסוד של חשבון מטריצות (תבניות ליניאריות, תבניות ריבועיות וגרדיאנטים סימטריים) ומוכיח ששארית הריבועים המינימליים האופטימלית ניצבת לחלוטין לעמודות של $A$.\n\n**חוקי גזירה מהירים:**\n* ליניארי: $\\nabla_x (c^T x) = c$\n* ריבועי (כללי): $\\nabla_x (x^T M x) = (M + M^T) x$\n* ריבועי (סימטרי): $\\nabla_x (x^T A x) = 2 A x \\quad \\text{כאשר } A^T = A$',
        toolboxConnection: 'These gradient rules are the foundational toolbox used in **OPT Chapter 1** to derive the unconstrained First-Order and Second-Order Necessary Conditions!',
        toolboxConnectionHe: 'חוקי גזירה אלו הם ארגז הכלים הבסיסי המשמש ב-**OPT פרק 1** לגזירת תנאי האופטימליות מסדר ראשון ושני!',
        keyTakeaway: 'Vector derivatives treat vectors as single entities, and least-squares errors always sit perfectly orthogonal to column models.',
        keyTakeawayHe: 'נגזרות וקטוריות מתייחסות לוקטורים כישויות אחידות, ושגיאות ריבועים מינימליים תמיד ניצבות לחלוטין למודל העמודות.',
        content: '**Four key gradient identities** used to derive the normal equations:\n1. $\\nabla_x (v^T x) = v$\n2. $\\nabla_x (x^T v) = v$\n3. $\\nabla_x (v^T A^T A x) = A^T A v$ (linear in $x$)\n4. $\\nabla_x (x^T A^T A x) = 2 A^T A x$ (quadratic, symmetric matrix)\n\nFor any matrix $M$: $\\nabla_x(x^T M x) = (M + M^T)x$, which simplifies to $2Mx$ when $M$ is symmetric.\n\n**Orthogonality Property of LS**: The residual $r = b - A\\hat{x}$ of the least squares solution is orthogonal to the column space of $A$:\n$$A^T r = A^T(b - A\\hat{x}) = 0$$\nGeometrically: $\\hat{x}$ is the projection of $b$ onto the column space of $A$, and $r$ is the perpendicular component.',
        contentHe: '**ארבע זהויות גרדיאנט מרכזיות** המשמשות לגזירת המשוואות הנורמליות:\n1. $\\nabla_x (v^T x) = v$\n2. $\\nabla_x (x^T v) = v$\n3. $\\nabla_x (v^T A^T A x) = A^T A v$ (פונקציה ליניארית ב-$x$)\n4. $\\nabla_x (x^T A^T A x) = 2 A^T A x$ (פונקציה ריבועית, מטריצה סימטרית)\n\nלכל מטריצה כללית $M$: מתקיים $\\nabla_x(x^T M x) = (M + M^T)x$, זהות המצטמצמת ל-$2Mx$ כאשר המטריצה $M$ היא סימטרית.\n\n**תכונת האורתוגונליות של ריבועים מינימליים**: השארית $r = b - A\\hat{x}$ של פתרון הריבועים המינימליים ניצבת לחלוטין למרחב העמודות של $A$:\n$$A^T r = A^T(b - A\\hat{x}) = 0$$\nמבחינה גיאומטרית: $\\hat{x}$ הוא היטל של $b$ על מרחב העמודות של $A$, והשארית $r$ היא הרכיב האנכי (הניצב).',
        proof: 'Proof: LS Orthogonality from Normal Equations\n\nThe normal equation states:\n$$A^T A \\hat{x} = A^T b$$\nRearranging:\n$$A^T A \\hat{x} - A^T b = 0 \\implies A^T(A\\hat{x} - b) = 0 \\implies A^T r = 0$$\n\nAlternatively, we can derive this geometrically. The LS problem minimizes $\\|b - Ax\\|_2^2$ over all $x$. The minimum occurs when $b - A\\hat{x}$ is perpendicular to every direction in which $Ax$ can move (i.e., every column of $A$). This means:\n$$\\langle a_j, r \\rangle = a_j^T r = 0 \\quad \\forall j = 1, ..., n$$\nwhich is exactly $A^T r = 0$. $\\square$',
        proofHe: 'הוכחה: אורתוגונליות של ריבועים מינימליים מתוך המשוואות הנורמליות\n\nהמשוואה הנורמלית מוגדרת כ:\n$$A^T A \\hat{x} = A^T b$$\nנעביר אגפים ונסדר מחדש:\n$$A^T A \\hat{x} - A^T b = 0 \\implies A^T(A\\hat{x} - b) = 0 \\implies A^T r = 0$$\n\nלחלופין, נוכל להוכיח זאת באופן גיאומטרי. בעיית הריבועים המינימליים ממזערת את $\\|b - Ax\\|_2^2$ מעל כל הוקטורים $x$. המינימום מתקבל כאשר הוקטור $b - A\\hat{x}$ ניצב לכל כיוון שבו הוקטור $Ax$ יכול לנוע (כלומר, לכל עמודה של המטריצה $A$). כלומר:\n$$\\langle a_j, r \\rangle = a_j^T r = 0 \\quad \\forall j = 1, ..., n$$\nשזהו בדיוק התנאי $A^T r = 0$. $\\square$',
        example: 'Using the data fit example: $A = \\begin{bmatrix} 1 & 1 \\\\ 2 & 1 \\\\ 3 & 1 \\end{bmatrix}$, $b = \\begin{bmatrix} 2 \\\\ 3 \\\\ 5 \\end{bmatrix}$, $\\hat{x} = [1.5, 0.33]^T$.\n\nResidual: $r = b - A\\hat{x} = \\begin{bmatrix}2\\\\3\\\\5\\end{bmatrix} - \\begin{bmatrix}1.83\\\\3.33\\\\4.83\\end{bmatrix} = \\begin{bmatrix}0.17\\\\-0.33\\\\0.17\\end{bmatrix}$\n\nVerify orthogonality:\n$$A^T r = \\begin{bmatrix} 1 & 2 & 3 \\\\ 1 & 1 & 1 \\end{bmatrix} \\begin{bmatrix}0.17\\\\-0.33\\\\0.17\\end{bmatrix} = \\begin{bmatrix} 0.17 - 0.66 + 0.51 \\\\ 0.17 - 0.33 + 0.17 \\end{bmatrix} = \\begin{bmatrix} 0.02 \\\\ 0.01 \\end{bmatrix} \\approx 0 \\checkmark$$\n(Small rounding errors only.)',
        exampleHe: 'בהמשך לדוגמת התאמת הנתונים הקודמת: $A = \\begin{bmatrix} 1 & 1 \\\\ 2 & 1 \\\\ 3 & 1 \\end{bmatrix}$, $b = \\begin{bmatrix} 2 \\\\ 3 \\\\ 5 \\end{bmatrix}$, ו-$\\hat{x} = [1.5, 0.33]^T$.\n\nוקטור השארית: $r = b - A\\hat{x} = \\begin{bmatrix}2\\\\3\\\\5\\end{bmatrix} - \\begin{bmatrix}1.83\\\\3.33\\\\4.83\\end{bmatrix} = \\begin{bmatrix}0.17\\\\-0.33\\\\0.17\\end{bmatrix}$\n\nאימות האורתוגונליות:\n$$A^T r = \\begin{bmatrix} 1 & 2 & 3 \\\\ 1 & 1 & 1 \\end{bmatrix} \\begin{bmatrix}0.17\\\\-0.33\\\\0.17\\end{bmatrix} = \\begin{bmatrix} 0.17 - 0.66 + 0.51 \\\\ 0.17 - 0.33 + 0.17 \\end{bmatrix} = \\begin{bmatrix} 0.02 \\\\ 0.01 \\end{bmatrix} \\approx 0 \\checkmark$$\n(עד כדי שגיאות עיגול קטנות מאוד.)'
      }
    ],
    quiz: [
      {
        question: 'What is the main purpose of Tikhonov Regularization (regularized least squares)?',
        questionHe: 'מהי המטרה העיקרית של רגולריזציית טיכונוב (Tikhonov Regularization)?',
        options: [
          'To make the matrix multiplication faster.',
          'To stabilize ill-conditioned or singular systems by adding a penalty parameter μ to the diagonal.',
          'To eliminate all constraints from the system.',
          'To make the solution equal to zero.'
        ],
        optionsHe: [
          'להפוך את כפל המטריצות למהיר יותר.',
          'לייצב מערכות סינגולריות או בעלות מספר מצב גרוע על ידי הוספת פרמטר ענישה μ לאלכסון.',
          'לסלק את כל האילוצים מהמערכת.',
          'להפוך את הפתרון לאפס מוחלט.'
        ],
        correctAnswerIndex: 1,
        explanation: 'Regularization adds μI to A^T A. This shifts all eigenvalues of the coefficient matrix away from zero, making it strictly positive definite and invertible, which prevents extreme round-off amplification.',
        explanationHe: 'רגולריזציה מוסיפה את האיבר μI למטריצה A^T A. פעולה זו מסיטה את כל הערכים העצמיים של מטריצת המקדמים הרחק מאפס, מה שהופך אותה למטריצה חיובית לחלוטין והפיכה, ובכך מונע הגברה קיצונית של שגיאות עיגול.'
      },
      {
        question: 'Under what condition does the standard full-rank Least Squares normal equation system have a unique solution?',
        questionHe: 'תחת איזה תנאי קיים פתרון יחיד למערכת המשוואות הנורמליות בשיטת הריבועים המינימליים הסטנדרטית?',
        options: [
          'Only when the matrix A is symmetric.',
          'When A has full column rank (rank(A) = n), which guarantees A^T A is invertible.',
          'When the number of rows equals the number of columns.',
          'When the right hand side vector b is zero.'
        ],
        optionsHe: [
          'רק כאשר המטריצה A היא סימטרית.',
          'כאשר ל-A יש דרגת עמודות מלאה (rank(A) = n), המבטיחה כי המטריצה A^T A הפיכה.',
          'כאשר מספר השורות שווה למספר העמודות.',
          'כאשר וקטור האגף הימני b הוא וקטור האפס.'
        ],
        correctAnswerIndex: 1,
        explanation: 'If A has full column rank, the columns are linearly independent. This ensures that the symmetric matrix A^T A is strictly positive definite and hence uniquely invertible.',
        explanationHe: 'אם ל-A יש דרגת עמודות מלאה, עמודותיה הן בלתי תלויות ליניארית. תנאי זה מבטיח כי המטריצה הסימטרית A^T A היא חיובית לחלוטין ולכן הפיכה באופן יחיד.'
      }
    ]
  },
{
    id: 'nla-4-1',
    courseId: 'nla',
    chapterNumber: '4',
    title: 'Matrix Norms & Condition Numbers',
    titleHe: 'פרק 4: נורמות של מטריצות ומספר מצב',
    intro: 'This chapter expands norms from vector spaces to matrix spaces. We define induced matrix norms, examine their sub-multiplicative properties, and derive the condition number to bound numerical error propagation in linear solvers.',
    introHe: 'פרק זה מרחיב את מושג הנורמה ממרחבים וקטוריים למרחבי מטריצות. נגדיר נורמות מטריצה מושרות, נבחן את תכונת הסאב-מולטיפליקטיביות שלהן, ונגזור את מספר המצב על מנת לחסום את התפשטות השגיאה הנומרית בפותרים ליניאריים.',
    motivation: 'A solver is only as good as the conditioning of the matrix. If a matrix is close to singular, small roundoff errors in the machine representation will explode, destroying the accuracy of the output. Matrix norms and condition numbers give us the precise limits of how much we can trust our computer\'s results.',
    motivationHe: 'פותר נומרי טוב רק ככל שמצב המטריצה מאפשר זאת. אם מטריצה קרובה להיות סינגולרית, שגיאות עיגול זעירות בייצוג המחשב של המספרים יתעצמו ויחריבו את דיוק הפתרון. נורמות מטריצה ומספרי מצב מספקים לנו את הגבולות המדויקים המגדירים עד כמה נוכל לבטוח בתוצאות החישוב של המחשב.',
    definitions: [
      {
        id: 'def-nla-4-1-1',
        title: 'Induced Matrix Norms (1, ∞, 2 Norms)',
        titleHe: 'נורמות מושרות של מטריצות (נורמות 1, ∞ ו-2)',
        simplifiedLogic: 'A matrix induced norm represents the maximum possible scaling or "stretching factor" the matrix can apply to any vector. It measures the "strength" of the operator.\n\n**Visual Summary Comparison:**\n| Norm | Mathematical Name | Computational Recipe | Mental Model |\n| :---: | :---: | :---: | :---: |\n| **$\\|A\\|_1$** | Induced 1-Norm | $\\max_j \\sum_i \\vert a_{ij}\\vert$ <br>(Max absolute column sum) | Maximum stretch for coordinate axis vectors |\n| **$\\|A\\|_\\infty$** | Induced $\\infty$-Norm | $\\max_i \\sum_j \\vert a_{ij}\\vert$ <br>(Max absolute row sum) | Maximum stretch for worst-case sign vectors |\n| **$\\|A\\|_2$** | Induced 2-Norm | $\\sigma_{\\max}(A) = \\sqrt{\\lambda_{\\max}(A^T A)}$ <br>(Max singular value) | Ellipsoidal principal axis stretching |',
        simplifiedLogicHe: 'נורמה מושרית של מטריצה מייצגת את גורם המתיחה או המתיחה המקסימלית האפשרית שהמטריצה יכולה להחיל על וקטור כלשהו. היא מודדת את "העוצמה" של האופרטור.\n\n**טבלת השוואה חזותית:**\n| נורמה | שם מתמטי | שיטת חישוב | מודל מנטלי |\n| :---: | :---: | :---: | :---: |\n| **$\\|A\\|_1$** | נורמת $ 1 $ מושרית | $\\max_j \\sum_i \\vert a_{ij}\\vert$ <br>(סכום עמודה מוחלט מקסימלי) | מתיחה מקסימלית לאורך צירי הקואורדינטות |\n| **$\\|A\\|_\\infty$** | נורמת $ \\infty $ מושרית | $\\max_i \\sum_j \\vert a_{ij}\\vert$ <br>(סכום שורה מוחלט מקסימלי) | מתיחה מקסימלית עבור וקטורי סימנים גרועים |\n| **$\\|A\\|_2$** | נורמת $ 2 $ מושרית | $\\sigma_{\\max}(A) = \\sqrt{\\lambda_{\\max}(A^T A)}$ <br>(הערך הסינגולרי המקסימלי) | מתיחת הציר המרכזי של האליפסואיד |',
        toolboxConnection: 'The induced 2-norm $\\|A\\|_2$ is exactly the largest singular value $\\sigma_{\\max}$ of the SVD, which we use in **NLA Chapter 5** to find the optimal rank-1 approximations!',
        toolboxConnectionHe: 'הנורמה המושרית $\\|A\\|_2$ היא בדיוק הערך הסינגולרי הגדול ביותר $\\sigma_{\\max}$ של ה-SVD, המשמש ב-**NLA פרק 5** למציאת הקירובים הטובים ביותר מדרגה 1!',
        keyTakeaway: 'Induced matrix norms measure the maximum scaling power of a matrix over the unit sphere.',
        keyTakeawayHe: 'נורמות מטריצה מושרות מודדות את כוח המתיחה המקסימלי של מטריצה מעל כדור היחידה.',
        content: 'An induced matrix norm measures the maximum amplification of a vector under matrix multiplication: $\\|A\\| = \\max_{x \\neq 0} \\frac{\\|Ax\\|}{\\|x\\|}$. Common formulas:\n1. Induced 1-Norm (Max Column Sum):\n   $$\\|A\\|_1 = \\max_{1 \\leq j \\leq n} \\sum_{i=1}^m |a_{ij}|$$\n2. Induced $\\infty$-Norm (Max Row Sum):\n   $$\\|A\\|_\\infty = \\max_{1 \\leq i \\leq m} \\sum_{j=1}^n |a_{ij}|$$\n3. Induced 2-Norm (Spectral Norm):\n   $$\\|A\\|_2 = \\sqrt{\\lambda_{\\max}(A^T A)} = \\sigma_{\\max}(A)$$',
        contentHe: 'נורמת מטריצה מושרית מודדת את ההגברה המקסימלית של וקטור תחת כפל מטריצות: $\\|A\\| = \\max_{x \\neq 0} \\frac{\\|Ax\\|}{\\|x\\|}$. נוסחאות נפוצות:\n1. נורמת 1 מושרית (סכום עמודה מוחלט מקסימלי):\n   $$\\|A\\|_1 = \\max_{1 \\leq j \\leq n} \\sum_{i=1}^m |a_{ij}|$$\n2. נורמת $\\infty$ מושרית (סכום שורה מוחלט מקסימלי):\n   $$\\|A\\|_\\infty = \\max_{1 \\leq i \\leq m} \\sum_{j=1}^n |a_{ij}|$$\n3. נורמת 2 מושרית (נורמה ספקטרלית):\n   $$\\|A\\|_2 = \\sqrt{\\lambda_{\\max}(A^T A)} = \\sigma_{\\max}(A)$$\n',
        proof: 'Proof: Theorem for Matrix 1-Norm Formula\nWe prove that $\\|A\\|_1 = C$, where $C = \\max_j \\sum_i |a_{ij}|$.\n\n1. Let $x \\neq 0$. We bound $\\|Ax\\|_1$ from above:\n   $$\\|Ax\\|_1 = \\sum_i \\left| \\sum_j a_{ij} x_j \\right| \\leq \\sum_i \\sum_j |a_{ij}| |x_j| = \\sum_j |x_j| \\left( \\sum_i |a_{ij}| \\right)$$\n2. Since $\\sum_i |a_{ij}| \\leq C$ for all columns $j$:\n   $$\\|Ax\\|_1 \\leq C \\sum_j |x_j| = C \\|x\\|_1$$\n   Thus, $\\frac{\\|Ax\\|_1}{\\|x\\|_1} \\leq C$, showing that $\\|A\\|_1 \\leq C$.\n\n3. Now we show the bound is achieved. Let the maximum column sum occur at column $k$, so $\\sum_i |a_{ik}| = C$.\n4. Choose the vector $x = e_k$ (the $k$-th standard basis vector). Then $\\|x\\|_1 = 1$.\n5. Compute $Ax$:\n   $$Ax = A e_k = \\text{the } k\\text{-th column of } A$$\n6. Thus:\n   $$\\|Ax\\|_1 = \\sum_i |a_{ik}| = C$$\n   Since there exists a vector achieving the ratio $C$, the induced norm must be exactly $C$, i.e., $\\|A\\|_1 = \\max_j \\sum_i |a_{ij}|$. A highly parallel proof bounds the $\\infty$-norm.',
        proofHe: 'הוכחה: משפט עבור נוסחת נורמת 1 של מטריצה\nנוכיח כי $\\|A\\|_1 = C$, כאשר $C = \\max_j \\sum_i |a_{ij}|$.\n\n1. יהי $x \\neq 0$. נחסום מלמעלה את הנורמה $\\|Ax\\|_1$:\n   $$\\|Ax\\|_1 = \\sum_i \\left| \\sum_j a_{ij} x_j \\right| \\leq \\sum_i \\sum_j |a_{ij}| |x_j| = \\sum_j |x_j| \\left( \\sum_i |a_{ij}| \\right)$$\n2. מכיוון שמתקיים $\\sum_i |a_{ij}| \\leq C$ לכל עמודה $j$:\n   $$\\|Ax\\|_1 \\leq C \\sum_j |x_j| = C \\|x\\|_1$$\n   לכן, $\\frac{\\|Ax\\|_1}{\\|x\\|_1} \\leq C$, מה שמראה כי $\\|A\\|_1 \\leq C$.\n\n3. כעת נראה כי החסם אכן מתקבל. נניח שסכום העמודה המקסימלי מתקבל בעמודה ה-$k$, כלומר $\\sum_i |a_{ik}| = C$.\n4. נבחר את הוקטור $x = e_k$ (וקטור הבסיס הסטנדרטי ה-$k$). מתקיים $\\|x\\|_1 = 1$.\n5. נחשב את $Ax$:\n   $$Ax = A e_k = \\text{העמודה ה-} k \\text{ של המטריצה } A$$\n6. לכן:\n   $$\\|Ax\\|_1 = \\sum_i |a_{ik}| = C$$\n   מכיוון שקיים וקטור המשיג את היחס $C$, הנורמה המושרית חייבת להיות בדיוק $C$, כלומר $\\|A\\|_1 = \\max_j \\sum_i |a_{ij}|$. הוכחה מקבילה לחלוטין חוסמת את נורמת $\\infty$.',
        example: 'Let $A = \\begin{bmatrix} -1 & 5 \\\\ 3 & -2 \\end{bmatrix}$.\n- Column 1 sum: $|-1| + |3| = 4$. Column 2 sum: $|5| + |-2| = 7$. Thus $\\|A\\|_1 = 7$.\n- Row 1 sum: $|-1| + |5| = 6$. Row 2 sum: $|3| + |-2| = 5$. Thus $\\|A\\|_\\infty = 6$.',
        exampleHe: 'תהי $A = \\begin{bmatrix} -1 & 5 \\\\ 3 & -2 \\end{bmatrix}$.\n- סכום עמודה 1: $|-1| + |3| = 4$. סכום עמודה 2: $|5| + |-2| = 7$. לכן $\\|A\\|_1 = 7$.\n- סכום שורה 1: $|-1| + |5| = 6$. סכום שורה 2: $|3| + |-2| = 5$. לכן $\\|A\\|_\\infty = 6$.'
      },
      {
        id: 'def-nla-4-1-2',
        title: 'Matrix Condition Number & Error Bounds',
        titleHe: 'מספר מצב של מטריצה וחסמי שגיאה',
        simplifiedLogic: 'The condition number $\\kappa(A)$ measures how sensitive a linear system is to input errors or numerical noise. If the condition number is close to 1, the matrix is stable; if it is very large, a tiny ripple in the input data leads to a massive tsunami in the output solution.\n\n**Visual Sensitivity Mappings:**\n* **Low Condition ($\\kappa \\approx 1$):** Well-conditioned $\\rightarrow$ Spherical mapping $\\rightarrow$ High stability\n* **High Condition ($\\kappa \\gg 1$):** Ill-conditioned $\\rightarrow$ Extremely narrow, squashed ellipse $\\rightarrow$ Severe sensitivity to noise',
        simplifiedLogicHe: 'מספר המצב $\\kappa(A)$ מודד כמה רגישה מערכת ליניארית לשגיאות קלט או לרעש מספרי. אם מספר המצב קרוב ל-1, המטריצה יציבה; אם הוא גדול מאוד, תנודה קלה בנתוני הקלט תוביל לקריסה של הפתרון.\n\n**מיפוי רגישות חזותי:**\n* **מספר מצב נמוך ($\\kappa \\approx 1$):** מצב טוב $\\rightarrow$ מיפוי כדורי $\\rightarrow$ יציבות גבוהה\n* **מספר מצב גבוה ($\\kappa \\gg 1$):** מצב גרוע $\\rightarrow$ אליפסה צרה ומתוחה מאוד $\\rightarrow$ רגישות קיצונית לרעש',
        toolboxConnection: 'A high condition number in NLA Chapter 4 is the direct mathematical cause of the severe "zigzagging" effect in **OPT Chapter 2**\'s Steepest Descent solver!',
        toolboxConnectionHe: 'מספר מצב גבוה ב-NLA פרק 4 הוא הגורם המתמטי הישיר לתופעת ה"זיגזג" החמורה בפותר הירידה התלולה ב-**OPT פרק 2**!',
        keyTakeaway: 'The condition number acts as an error amplifier for system solvers; high values mean noise destroys accuracy.',
        keyTakeawayHe: 'מספר המצב משמש כאיבר הגברה לשגיאות; ערכים גבוהים פירושם שרעש קל יהרוס לחלוטין את הדיוק.',
        content: 'For a non-singular matrix $A \\in \\mathbb{R}^{n \\times n}$, the condition number with respect to a norm $\\|\\cdot\\|$ is:\n$$\\kappa(A) = \\|A\\| \\cdot \\|A^{-1}\\|$$\nIt represents the worst-case error magnification factor. Always $\\kappa(A) \\geq 1$.',
        contentHe: 'עבור מטריצה לא סינגולרית (הפיכה) $A \\in \\mathbb{R}^{n \\times n}$, מספר המצב ביחס לנורמה $\\|\\cdot\\|$ מוגדר כ:\n$$\\kappa(A) = \\|A\\| \\cdot \\|A^{-1}\\|$$\nהוא מייצג את מקדם הגברת השגיאה במקרה הגרוע ביותר. תמיד מתקיים $\\kappa(A) \\geq 1$.',
        proof: 'Proof: Theorem on Relative Error Propagation\nLet $Ax = b$. Suppose $b$ has a perturbation $\\delta b$, giving perturbed solution $x + \\delta x$ such that $A(x + \\delta x) = b + \\delta b$.\n1. Since $Ax = b$, subtracting this yields $A \\delta x = \\delta b \\implies \\delta x = A^{-1} \\delta b$.\n2. Taking norms on both sides:\n   $$\\|\\delta x\\| = \\|A^{-1} \\delta b\\| \\leq \\|A^{-1}\\| \\cdot \\|\\delta b\\|$$\n3. Also, from $Ax = b$, we have:\n   $$\\|b\\| = \\|Ax\\| \\leq \\|A\\| \\cdot \\|x\\| \\implies \\frac{1}{\\|x\\|} \\leq \\frac{\\|A\\|}{\\|b\\|}$$\n4. Combine these two inequalities by multiplying them together:\n   $$\\frac{\\|\\delta x\\|}{\\|x\\|} \\leq \\left( \\|A^{-1}\\| \\cdot \\|\\delta b\\| \\right) \\cdot \\left( \\frac{\\|A\\|}{\\|b\\|} \\right) = (\\|A\\| \\cdot \\|A^{-1}\\|) \\frac{\\|\\delta b\\|}{\\|b\\|} = \\kappa(A) \\frac{\\|\\delta b\\|}{\\|b\\|}$$\n\nExplanation:\nThis proves that the relative error in the output solution $\\frac{\\|\\delta x\\|}{\\|x\\|}$ can be up to $\\kappa(A)$ times larger than the relative error in the input $\\frac{\\|\\delta b\\|}{\\|b\\|}$. If $\\kappa(A) = 10^k$, we can expect to lose $k$ decimal digits of precision during the solve.',
        proofHe: 'הוכחה: משפט על התפשטות שגיאה יחסית\nתהי $Ax = b$. נניח שלקלט $b$ יש הפרעה $\\delta b$, המניבה פתרון מופרע $x + \\delta x$ כך שמתקיים $A(x + \\delta x) = b + \\delta b$.\n1. כיוון ש-$Ax = b$, חיסור משוואה זו מניב $A \\delta x = \\delta b \\implies \\delta x = A^{-1} \\delta b$.\n2. לקיחת נורמות משני האגפים:\n   $$\\|\\delta x\\| = \\|A^{-1} \\delta b\\| \\leq \\|A^{-1}\\| \\cdot \\|\\delta b\\|$$\n3. כמו כן, מתוך $Ax = b$, מתקיים:\n   $$\\|b\\| = \\|Ax\\| \\leq \\|A\\| \\cdot \\|x\\| \\implies \\frac{1}{\\|x\\|} \\leq \\frac{\\|A\\|}{\\|b\\|}$$\n4. נשלב את שני אי-השוויונים על ידי כפל שלהם זה בזה:\n   $$\\frac{\\|\\delta x\\|}{\\|x\\|} \\leq \\left( \\|A^{-1}\\| \\cdot \\|\\delta b\\| \\right) \\cdot \\left( \\frac{\\|A\\|}{\\|b\\|} \\right) = (\\|A\\| \\cdot \\|A^{-1}\\|) \\frac{\\|\\delta b\\|}{\\|b\\|} = \\kappa(A) \\frac{\\|\\delta b\\|}{\\|b\\|}$$\n\nהסבר:\nזה מוכיח כי השגיאה היחסית בפתרון המוצא $\\frac{\\|\\delta x\\|}{\\|x\\|}$ יכולה להיות גדולה עד פי $\\kappa(A)$ מהשגיאה היחסית בקלט $\\frac{\\|\\delta b\\|}{\\|b\\|}$. אם $\\kappa(A) = 10^k$, אנו צפויים לאבד $k$ ספרות דיוק עשרוניות במהלך הפתרון.',
        example: 'Let $A = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1.0001 \\end{bmatrix}$. The inverse is $A^{-1} = \\begin{bmatrix} 10001 & -10000 \\\\ -10000 & 10000 \\end{bmatrix}$.\n- Under the $\\infty$-norm:\n  $$\\|A\\|_\\infty = 2.0001, \\quad \\|A^{-1}\\|_\\infty = 20001$$\n  $$\\kappa_\\infty(A) = 2.0001 \\times 20001 = 40004.0001 \\approx 4 \\times 10^4$$\n- If we solve $Ax=b$ with input data perturbed by a tiny 0.01% error, our output solution can be corrupted by up to $40004 \\times 0.01\\% = 400\\%$, yielding total garbage!',
        exampleHe: 'תהי $A = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1.0001 \\end{bmatrix}$. המטריצה ההופכית היא $A^{-1} = \\begin{bmatrix} 10001 & -10000 \\\\ -10000 & 10000 \\end{bmatrix}$.\n- תחת נורמת $\\infty$:\n  $$\\|A\\|_\\infty = 2.0001, \\quad \\|A^{-1}\\|_\\infty = 20001$$\n  $$\\kappa_\\infty(A) = 2.0001 \\times 20001 = 40004.0001 \\approx 4 \\times 10^4$$\n- אם נפתור את המערכת $Ax=b$ כאשר נתוני הקלט מופרעים בשגיאה זעירה של 0.01%, פתרון המוצא שלנו עלול להיות משובש בשגיאה של עד $40004 \\times 0.01\\% = 400\\%$, מה שיהפוך את התוצאה לחסרת ערך לחלוטין!'
      },
      {
        id: 'def-nla-4-1-3',
        title: 'Frobenius Norm, Sub-multiplicativity & Spectral Radius',
        titleHe: 'נורמת פרובניוס, סאב-מולטיפליקטיביות ורדיוס ספקטרלי',
        simplifiedLogic: 'This section details key tools to evaluate matrix sizes and boundaries:\n1. **Frobenius Norm:** Evaluates the overall matrix size as if it were a single flat vector.\n2. **Sub-multiplicativity:** Proves that multiplication cannot multiply scaling indefinitely ($\\|AB\\| \\leq \\|A\\| \\|B\\|$).\n3. **Spectral Radius ($\\rho(A)$):** The absolute largest eigenvalue. It defines the asymptotic behavior of matrix power sequences.',
        simplifiedLogicHe: 'סעיף זה מרכז כלים מרכזיים להערכת גדלים וחסמים של מטריצות:\n1. **נורמת פרובניוס:** מודדת את הגודל הכולל של המטריצה כאילו הייתה וקטור שטוח ארוך.\n2. **תכונת הסאב-מולטיפליקטיביות:** מוכיחה שכפל מטריצות אינו יכול להגדיל את המתיחה ללא גבול ($\\|AB\\| \\leq \\|A\\| \\|B\\|$).\n3. **רדיוס ספקטרלי ($\\rho(A)$):** הערך העצמי הגדול ביותר בערכו המוחלט. הוא מגדיר את ההתנהגות האסימפטוטית של חזקות מטריצה.',
        toolboxConnection: 'The Spectral Radius $\\rho(A)$ is the exact criteria used in **NLA Chapter 6** to prove if preconditioned solvers like Jacobi or Gauss-Seidel will converge!',
        toolboxConnectionHe: 'הרדיוס הספקטרלי $\\rho(A)$ הוא הקריטריון המדויק המשמש ב-**NLA פרק 6** כדי להוכיח האם פותרים איטרטיביים כמו יעקובי או גאוס-סיידל יתכנסו!',
        keyTakeaway: 'Spectral radius sets the asymptotic speed of iterative matrix solvers, while sub-multiplicativity bounds product growth.',
        keyTakeawayHe: 'הרדיוס הספקטרלי קובע את מהירות ההתכנסות האסימפטוטית של פותרים איטרטיביים, בעוד שתכונת הסאב-מולטיפליקטיביות חוסמת גידול של מכפלות.',
        content: '**Frobenius Norm**: An entry-wise matrix norm analogous to the vector $\\ell_2$ norm:\n$$\\|A\\|_F = \\sqrt{\\sum_{i=1}^m \\sum_{j=1}^n |a_{ij}|^2} = \\sqrt{\\text{trace}(A^* A)} = \\sqrt{\\sum_{i=1}^p \\sigma_i^2}$$\nIt is not an induced norm, but it satisfies $\\|A\\|_2 \\leq \\|A\\|_F \\leq \\sqrt{n} \\|A\\|_2$.\n\n**Sub-multiplicativity** (Proposition): Any induced matrix norm satisfies:\n$$\\|AB\\| \\leq \\|A\\| \\cdot \\|B\\|$$\n\n**Spectral Radius** (Definition): The largest eigenvalue in magnitude:\n$$\\rho(A) = \\max_{1 \\leq i \\leq n} |\\lambda_i(A)|$$\nFor any induced matrix norm: $\\rho(A) \\leq \\|A\\|$. This is key to analysing the convergence of iterative methods — they converge iff $\\rho(T) < 1$.',
        contentHe: '**נורמת פרובניוס (Frobenius Norm)**: נורמת איברים של מטריצה, האנלוגית לנורמת $\\ell_2$ הוקטורית:\n$$\\|A\\|_F = \\sqrt{\\sum_{i=1}^m \\sum_{j=1}^n |a_{ij}|^2} = \\sqrt{\\text{trace}(A^* A)} = \\sqrt{\\sum_{i=1}^p \\sigma_i^2}$$\nהיא אינה נורמה מושרית, אך היא מקיימת $\\|A\\|_2 \\leq \\|A\\|_F \\leq \\sqrt{n} \\|A\\|_2$.\n\n**סאב-מולטיפליקטיביות (Sub-multiplicativity)**:\nלכל נורמת מטריצה מושרית מתקיים:\n$$\\|AB\\| \\leq \\|A\\| \\cdot \\|B\\|$$\n\n**רדיוס ספקטרלי (Spectral Radius)** (הגדרה): הערך העצמי הגדול ביותר בערכו המוחלט:\n$$\\rho(A) = \\max_{1 \\leq i \\leq n} |\\lambda_i(A)|$$\nלכל נורמת מטריצה מושרית מתקיים $\\rho(A) \\leq \\|A\\|$. תכונה זו היא המפתח לניתוח ההתכנסות של שיטות איטרטיביות — הן מתכנסות אם ורק אם $\\rho(T) < 1$.',
        proof: 'Proof: Sub-multiplicativity of Induced Norms\n\nLet $\\|\\cdot\\|$ be any induced matrix norm, and let $B \\in \\mathbb{R}^{n \\times p}$, $x \\in \\mathbb{R}^p$ with $x \\neq 0$.\n\nFrom the definition of induced norm:\n$$\\|Bx\\| \\leq \\|B\\| \\cdot \\|x\\|$$\nApplying $A$ to both sides:\n$$\\|A(Bx)\\| \\leq \\|A\\| \\cdot \\|Bx\\| \\leq \\|A\\| \\cdot \\|B\\| \\cdot \\|x\\|$$\nSince this holds for all $x \\neq 0$:\n$$\\|AB\\| = \\max_{x \\neq 0} \\frac{\\|(AB)x\\|}{\\|x\\|} \\leq \\|A\\| \\cdot \\|B\\| \\quad \\square$$\n\nProof: Spectral radius bound $\\rho(A) \\leq \\|A\\|$\n\nLet $(\\lambda, v)$ be an eigenpair of $A$ with $\\|v\\| = 1$. Then:\n$$|\\lambda| = |\\lambda| \\cdot \\|v\\| = \\|\\lambda v\\| = \\|Av\\| \\leq \\|A\\| \\cdot \\|v\\| = \\|A\\|$$\nSince this holds for any eigenvalue, $\\rho(A) = \\max_i |\\lambda_i| \\leq \\|A\\|$. $\\square$',
        proofHe: 'הוכחה: סאב-מולטיפליקטיביות של נורמות מושרות\n\nתהי $\\|\\cdot\\|$ נורמת מטריצה מושרית כלשהי, ויהיו $B \\in \\mathbb{R}^{n \\times p}$ ו-$x \\in \\mathbb{R}^p$ כאשר $x \\neq 0$.\n\nמהגדרת הנורמה המושרית:\n$$\\|Bx\\| \\leq \\|B\\| \\cdot \\|x\\|$$\nהפעלת המטריצה $A$ על שני האגפים:\n$$\\|A(Bx)\\| \\leq \\|A\\| \\cdot \\|Bx\\| \\leq \\|A\\| \\cdot \\|B\\| \\cdot \\|x\\|$$\nמכיוון שזה נכון לכל $x \\neq 0$:\n$$\\|AB\\| = \\max_{x \\neq 0} \\frac{\\|(AB)x\\|}{\\|x\\|} \\leq \\|A\\| \\cdot \\|B\\| \\quad \\square$$\n\nהוכחה: חסם הרדיוס הספקטרלי $\\rho(A) \\leq \\|A\\|$\n\nיהי $(\\lambda, v)$ זוג עצמי של $A$ עם $\\|v\\| = 1$. נקבל:\n$$|\\lambda| = |\\lambda| \\cdot \\|v\\| = \\|\\lambda v\\| = \\|Av\\| \\leq \\|A\\| \\cdot \\|v\\| = \\|A\\|$$\nמכיוון שזה נכון לכל ערך עצמי, מתקיים $\\rho(A) = \\max_i |\\lambda_i| \\leq \\|A\\|$. $\\square$',
        example: 'Let $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$.\n\n**Frobenius norm**: $\\|A\\|_F = \\sqrt{1^2 + 2^2 + 3^2 + 4^2} = \\sqrt{1+4+9+16} = \\sqrt{30} \\approx 5.48$\n\n**Spectral norm**: Eigenvalues of $A^T A = \\begin{bmatrix}10 & 14\\\\14 & 20\\end{bmatrix}$ are $\\lambda \\approx 29.87$ and $0.13$. So $\\|A\\|_2 = \\sqrt{29.87} \\approx 5.47$.\n\n**Sub-multiplicativity check**: If $B = A$, then $\\|A^2\\|_F \\leq \\|A\\|_F^2 = 30$. Computing directly: $A^2 = \\begin{bmatrix}7 & 10\\\\15 & 22\\end{bmatrix}$, and $\\|A^2\\|_F = \\sqrt{49+100+225+484} = \\sqrt{858} \\approx 29.3 \\leq 30$ ✓',
        exampleHe: 'תהי $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$.\n\n**נורמת פרובניוס**: $\\|A\\|_F = \\sqrt{1^2 + 2^2 + 3^2 + 4^2} = \\sqrt{1+4+9+16} = \\sqrt{30} \\approx 5.48$\n\n**נורמה ספקטרלית**: הערכים העצמיים של $A^T A = \\begin{bmatrix}10 & 14\\\\14 & 20\\end{bmatrix}$ הם $\\lambda \\approx 29.87$ ו-$0.13$. לכן $\\|A\\|_2 = \\sqrt{29.87} \\approx 5.47$.\n\n**בדיקת סאב-מולטיפליקטיביות**: אם $B = A$, מתקיים $\\|A^2\\|_F \\leq \\|A\\|_F^2 = 30$. חישוב ישיר מראה: $A^2 = \\begin{bmatrix}7 & 10\\\\15 & 22\\end{bmatrix}$, וכן $\\|A^2\\|_F = \\sqrt{49+100+225+484} = \\sqrt{858} \\approx 29.3 \\leq 30$ ✓'
      }
    ],
    quiz: [
      {
        question: 'Which of the following represents the formula for calculating the induced infinity-norm of a matrix?',
        questionHe: 'איזו מבין האפשרויות הבאות מייצגת את הנוסחה לחישוב נורמת אינסוף (∞) המושרית של מטריצה?',
        options: [
          'The square root of the maximum eigenvalue of A^T A.',
          'The maximum absolute column sum.',
          'The maximum absolute row sum.',
          'The sum of squares of all elements.'
        ],
        optionsHe: [
          'השורש הריבועי של הערך העצמי המקסימלי של A^T A.',
          'סכום העמודה המוחלט המקסימלי.',
          'סכום השורה המוחלט המקסימלי.',
          'סכום הריבועים של כל איברי המטריצה.'
        ],
        correctAnswerIndex: 2,
        explanation: 'The induced infinity-norm of a matrix is the maximum absolute row sum, whereas the 1-norm is the maximum absolute column sum.',
        explanationHe: 'נורמת אינסוף המושרית של מטריצה היא סכום השורה המוחלט המקסימלי, בעוד שנורמת 1 המושרית היא סכום העמודה המוחלט המקסימלי.'
      },
      {
        question: 'If a matrix has κ(A) = 10^5, and our right-hand side b is measured with an accuracy of 5 decimal digits, how many digits of accuracy can we expect in the solution x?',
        questionHe: 'אם למטריצה יש מספר מצב κ(A) = 10^5, ווקטור האגף הימני b נמדד בדיוק של 5 ספרות עשרוניות, לדיוק של כמה ספרות נוכל לצפות בפתרון x?',
        options: [
          '5 digits of accuracy.',
          'Roughly 0 stable digits (complete loss of accuracy).',
          '10 digits of accuracy.',
          'No digits are lost.'
        ],
        optionsHe: [
          'דיוק של 5 ספרות עשרוניות.',
          'בערך 0 ספרות יציבות (אובדן דיוק מוחלט).',
          'דיוק של 10 ספרות עשרוניות.',
          'אף ספרת דיוק אינה הולכת לאיבוד.'
        ],
        correctAnswerIndex: 1,
        explanation: 'Solving a system loses roughly log10(κ(A)) digits. Here, log10(10^5) = 5 digits are lost, which destroys all 5 digits of input accuracy, leaving the solution completely unreliable.',
        explanationHe: 'פתרון מערכת משוואות ליניארית מאבד בערך log10(κ(A)) ספרות דיוק. במקרה זה, log10(10^5) = 5 ספרות דיוק אובדות, מה שמחריב לחלוטין את הדיוק של 5 הספרות שנמדדו בקלט, ומשאיר אותנו עם פתרון לא אמין לחלוטין.'
      }
    ]
  },
{
    id: 'nla-5',
    courseId: 'nla',
    chapterNumber: '5',
    title: 'Orthogonalization & The SVD',
    titleHe: 'פרק 5: אורתוגונליזציה ו-SVD',
    intro: 'This chapter explores orthogonal bases, the Gram-Schmidt process, QR Factorization, and builds to the ultimate matrix decomposition: the Singular Value Decomposition (SVD), which reveals a matrix\'s core geometry and enables low-rank data compression.',
    introHe: 'פרק זה חוקר בסיסים אורתוגונליים, את תהליך גרם-שמידט, פירוק QR, ומגיע לפירוק המטריצות האולטימטיבי: פירוק לערכים סינגולריים (SVD), החושף את הגיאומטריה הבסיסית של המטריצה ומאפשר דחיסת נתונים מדרגה נמוכה.',
    motivation: 'Orthogonal vectors do not interfere with each other, making calculations numerically robust. The SVD is the single most powerful tool in numerical linear algebra—it solves ill-conditioned least squares, reveals the exact rank of a matrix, and provides the mathematically absolute best low-rank data approximations.',
    motivationHe: 'וקטורים אורתוגונליים אינם מפריעים זה לזה, מה שהופך את החישובים לחסונים נומרית. ה-SVD הוא הכלי החזק ביותר באלגברה ליניארית נומרית—הוא פותר בעיות ריבועים מינימליים בעלות מספר מצב גרוע, חושף את הדרגה המדויקת של המטריצה ומספק את הקירובים המתמטיים הטובים ביותר מדרגה נמוכה עבור דחיסת נתונים.',
    definitions: [
      {
        id: 'def-nla-5-1',
        title: 'Gram-Schmidt & QR Factorization',
        titleHe: 'תהליך גרם-שמידט ופירוק QR',
        simplifiedLogic: 'QR factorization factorizes a matrix $A$ into orthogonal columns $Q$ and an upper triangular matrix $R$. Classical Gram-Schmidt (CGS) projects vectors sequentially but is numerically unstable. Modified Gram-Schmidt (MGS) corrects this by projecting all remaining vectors immediately, preserving orthogonality.\n\n**CGS vs. MGS Stability Mapping:**\n| Feature | Classical Gram-Schmidt (CGS) | Modified Gram-Schmidt (MGS) |\n| :---: | :---: | :---: |\n| **Projection Step** | Projects vector against finished base | Projects remaining pool against current vector |\n| **Numerical Stability** | Poor (loses orthogonality in floating point) | High (satisfies non-increasing error bounds) |\n| **Best Used For** | Parallel hardware architectures | General robust QR computations |',
        simplifiedLogicHe: 'פירוק QR מפרק מטריצה $A$ לעמודות אורתוגונליות $Q$ ומטריצה משולשית עליונה $R$. תהליך גרם-שמידט הקלאסי (CGS) מטיל וקטורים באופן סדרתי אך הוא לא יציב מספרית. התהליך המעודכן (MGS) מתקן זאת על ידי הטלת כל הוקטורים הנותרים באופן מיידי, ובכך שומר על האורתוגונליות.\n\n**השוואת יציבות חזותית:**\n| תכונה | גרם-שמידט קלאסי (CGS) | גרם-שמידט מעודכן (MGS) |\n| :---: | :---: | :---: |\n| **שלב ההטלה** | מטיל את הוקטור הנוכחי מול הבסיס המוגמר | מטיל את כל הוקטורים הנותרים מול הוקטור הנוכחי |\n| **יציבות מספרית** | נמוכה (מאבד אורתוגונליות בנקודה צפה) | גבוהה (עומד בחסמי שגיאה יציבים) |\n| **שימוש מרכזי** | ארכיטקטורות חומרה מקביליות | חישובי QR חסונים וכלליים |',
        toolboxConnection: 'QR decomposition is the standard engine inside **OPT Chapter 3** for projecting gradients onto linear constraint hyperplanes safely!',
        toolboxConnectionHe: 'פירוק QR הוא המנוע הסטנדרטי המשמש ב-**OPT פרק 3** להטלת גרדיאנטים על אילוצי שוויון ליניאריים בצורה יציבה ובטוחה!',
        keyTakeaway: 'Modified Gram-Schmidt preserves mathematical orthogonality in floating point by correcting vector pools in real-time.',
        keyTakeawayHe: 'תהליך גרם-שמידט המעודכן שומר על אורתוגונליות מתמטית בחישובי נקודה צפה על ידי תיקון מאגר הוקטורים בזמן אמת.',
        content: '1. Gram-Schmidt Orthogonalization: Converts a set of linearly independent vectors $v_1, ..., v_n$ into an orthonormal basis $q_1, ..., q_n$:\n   $$u_k = v_k - \\sum_{i=1}^{k-1} \\langle q_i, v_k \\rangle q_i, \\quad q_k = \\frac{u_k}{\\|u_k\\|_2}$$\n2. QR Factorization: Gathers this process into matrix form, factoring any matrix $A \\in \\mathbb{R}^{m \\times n}$ ($m \\geq n$) into:\n   $$A = Q R$$\n   where $Q \\in \\mathbb{R}^{m \\times n}$ has orthonormal columns ($Q^T Q = I$) and $R \\in \\mathbb{R}^{n \\times n}$ is upper triangular.',
        contentHe: '1. תהליך גרם-שמידט (Gram-Schmidt): הופך קבוצת וקטורים בלתי תלויים ליניארית $v_1, ..., v_n$ לבסיס אורתונורמלי $q_1, ..., q_n$:\n   $$u_k = v_k - \\sum_{i=1}^{k-1} \\langle q_i, v_k \\rangle q_i, \\quad q_k = \\frac{u_k}{\\|u_k\\|_2}$$\n2. פירוק QR: מייצג את התהליך בצורה מטריציאלית, ומפרק כל מטריצה $A \\in \\mathbb{R}^{m \\times n}$ ($m \\geq n$) ל:\n   $$A = Q R$$\n   כאשר ל-$Q \\in \\mathbb{R}^{m \\times n}$ יש עמודות אורתונורמליות ($Q^T Q = I$) ו-$R \\in \\mathbb{R}^{n \\times n}$ היא מטריצה משולשית עליונה.',
        proof: 'Proof: Theorem on QR for Least Squares\nTheorem: The least squares solution to $\\min_x \\|Ax - b\\|_2$ can be computed stably using the QR factorization of $A$.\n\nProof:\n1. Factor $A = QR$, where $Q^T Q = I$ and $R$ is upper triangular.\n2. The least squares objective is $f(x) = \\|Ax - b\\|_2^2$.\n3. Substitute $A = QR$ into the Normal Equations:\n   $$(QR)^T (QR) x = (QR)^T b$$\n4. Expand the transposes:\n   $$R^T Q^T Q R x = R^T Q^T b$$\n5. Since $Q^T Q = I$:\n   $$R^T R x = R^T Q^T b$$\n6. Assuming $A$ has full rank, $R$ is non-singular. We can multiply both sides by $(R^T)^{-1}$:\n   $$R x = Q^T b$$\n7. Since $R$ is upper triangular, we can solve this system using backward substitution in $O(n^2)$ steps. This bypasses computing $A^T A$ entirely, which halves the condition number and is highly stable.',
        proofHe: 'הוכחה: משפט על פירוק QR עבור ריבועים מינימליים\nמשפט: ניתן לחשב את פתרון הריבועים המינימליים לבעיה $\\min_x \\|Ax - b\\|_2$ בצורה יציבה באמצעות פירוק QR של המטריצה $A$.\n\nהוכחה:\n1. נפרק את $A = QR$, כאשר $Q^T Q = I$ ו-$R$ היא מטריצה משולשית עליונה.\n2. פונקציית המטרה של הריבועים המינימליים היא $f(x) = \\|Ax - b\\|_2^2$.\n3. נציב את הפירוק $A = QR$ לתוך המשוואות הנורמליות:\n   $$(QR)^T (QR) x = (QR)^T b$$\n4. נפתח את פתיחת המטריצה המשוחלפת:\n   $$R^T Q^T Q R x = R^T Q^T b$$\n5. מכיוון שמתקיים $Q^T Q = I$:\n   $$R^T R x = R^T Q^T b$$\n6. נניח של-$A$ יש דרגה מלאה, לכן $R$ אינה סינגולרית. נוכל להכפיל את שני האגפים ב-$(R^T)^{-1}$:\n   $$R x = Q^T b$$\n7. מכיוון ש-$R$ היא משולשית עליונה, אנו יכולים לפתור את המערכת הזו באמצעות שיטת החלפה לאחור (Backward Substitution) ב-$O(n^2)$ שלבים. תהליך זה עוקף לחלוטין את חישוב $A^T A$, ובכך חוצה את מספר המצב ומשיג יציבות נומרית גבוהה.',
        example: 'Compute the QR factorization of $A = \\begin{bmatrix} 1 & 1 \\\\ 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$.\n1. Let $v_1 = [1, 1, 0]^T$ and $v_2 = [1, 0, 1]^T$.\n2. Orthonormalize $v_1$:\n   $$u_1 = v_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\quad \\|u_1\\|_2 = \\sqrt{2} \\implies q_1 = \\frac{1}{\\sqrt{2}} \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}$$\n3. Orthonormalize $v_2$ against $q_1$:\n   $$\\langle q_1, v_2 \\rangle = \\frac{1}{\\sqrt{2}} (1) = \\frac{1}{\\sqrt{2}}$$\n   $$u_2 = v_2 - \\langle q_1, v_2 \\rangle q_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix} - \\frac{1}{2} \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 0.5 \\\\ -0.5 \\\\ 1 \\end{bmatrix}$$\n   $$\\|u_2\\|_2 = \\sqrt{0.25 + 0.25 + 1} = \\sqrt{1.5} = \\frac{\\sqrt{6}}{2}$$\n   $$q_2 = \\frac{u_2}{\\|u_2\\|_2} = \\frac{2}{\\sqrt{6}} \\begin{bmatrix} 0.5 \\\\ -0.5 \\\\ 1 \\end{bmatrix} = \\frac{1}{\\sqrt{6}} \\begin{bmatrix} 1 \\\\ -1 \\\\ 2 \\end{bmatrix}$$\n4. Resulting matrices:\n   $$Q = \\begin{bmatrix} 1/\\sqrt{2} & 1/\\sqrt{6} \\\\ 1/\\sqrt{2} & -1/\\sqrt{6} \\\\ 0 & 2/\\sqrt{6} \\end{bmatrix}, \\quad R = \\begin{bmatrix} \\|u_1\\|_2 & \\langle q_1, v_2 \\rangle \\\\ 0 & \\|u_2\\|_2 \\end{bmatrix} = \\begin{bmatrix} \\sqrt{2} & 1/\\sqrt{2} \\\\ 0 & \\sqrt{1.5} \\end{bmatrix}$$',
        exampleHe: 'חשב את פירוק QR של המטריצה $A = \\begin{bmatrix} 1 & 1 \\\\ 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$.\n1. נגדיר $v_1 = [1, 1, 0]^T$ ו-$v_2 = [1, 0, 1]^T$.\n2. נבצע אורתונורמליזציה ל-$v_1$:\n   $$u_1 = v_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\quad \\|u_1\\|_2 = \\sqrt{2} \\implies q_1 = \\frac{1}{\\sqrt{2}} \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}$$\n3. נבצע אורתונורמליזציה ל-$v_2$ מול $q_1$:\n   $$\\langle q_1, v_2 \\rangle = \\frac{1}{\\sqrt{2}} (1) = \\frac{1}{\\sqrt{2}}$$\n   $$u_2 = v_2 - \\langle q_1, v_2 \\rangle q_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix} - \\frac{1}{2} \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 0.5 \\\\ -0.5 \\\\ 1 \\end{bmatrix}$$\n   $$\\|u_2\\|_2 = \\sqrt{0.25 + 0.25 + 1} = \\sqrt{1.5} = \\frac{\\sqrt{6}}{2}$$\n   $$q_2 = \\frac{u_2}{\\|u_2\\|_2} = \\frac{2}{\\sqrt{6}} \\begin{bmatrix} 0.5 \\\\ -0.5 \\\\ 1 \\end{bmatrix} = \\frac{1}{\\sqrt{6}} \\begin{bmatrix} 1 \\\\ -1 \\\\ 2 \\end{bmatrix}$$\n4. המטריצות המתקבלות:\n   $$Q = \\begin{bmatrix} 1/\\sqrt{2} & 1/\\sqrt{6} \\\\ 1/\\sqrt{2} & -1/\\sqrt{6} \\\\ 0 & 2/\\sqrt{6} \\end{bmatrix}, \\quad R = \\begin{bmatrix} \\|u_1\\|_2 & \\langle q_1, v_2 \\rangle \\\\ 0 & \\|u_2\\|_2 \\end{bmatrix} = \\begin{bmatrix} \\sqrt{2} & 1/\\sqrt{2} \\\\ 0 & \\sqrt{1.5} \\end{bmatrix}$$'
      },
      {
        id: 'def-nla-5-2',
        title: 'The Singular Value Decomposition (SVD)',
        titleHe: 'הפירוק לערכים סינגולריים (SVD)',
        simplifiedLogic: 'The Singular Value Decomposition (SVD) is the ultimate matrix factorization. It decomposes any matrix into rotation ($U$), scaling ($\\Sigma$), and rotation ($V^T$). The **Eckart-Young Theorem** states that the optimal rank-$k$ approximation of a matrix is found by zeroing out all but the largest $k$ singular values.\n\n**SVD Geometry Map:**\n$$\\text{Input Vector } x \\quad \\longrightarrow \\quad \\text{Rotate } V^T \\quad \\longrightarrow \\quad \\text{Scale } \\Sigma \\quad \\longrightarrow \\quad \\text{Rotate } U$$',
        simplifiedLogicHe: 'פירוק לערכים סינגולריים (SVD) הוא הפירוק האולטימטיבי של מטריצות. הוא מפרק כל מטריצה לסיבוב ($U$), מתיחה/כיווץ ($\\Sigma$) וסיבוב נוסף ($V^T$). **משפט אקארט-יאנג** קובע שהקירוב האופטימלי מדרגה $k$ למטריצה מתקבל על ידי איפוס כל הערכים הסינגולריים מלבד ה-$k$ הגדולים ביותר.\n\n**מיפוי גיאומטרי של SVD:**\n$$\\text{וקטור קלט } x \\quad \\longrightarrow \\quad \\text{סיבוב } V^T \\quad \\longrightarrow \\quad \\text{מתיחה } \\Sigma \\quad \\longrightarrow \\quad \\text{סיבוב } U$$',
        toolboxConnection: 'Low-rank SVD approximation is heavily utilized in **OPT Chapter 2** for Principal Component analysis to compress massive Hessian datasets in machine learning optimization.',
        toolboxConnectionHe: 'קירובים מדרגה נמוכה באמצעות SVD משמשים באופן נרחב ב-**OPT פרק 2** לניתוח רכיבים ראשיים (PCA) במטרה לדחוס מטריצות הסיאן ענקיות באופטימיזציה של למידת מכונה.',
        keyTakeaway: 'Eckart-Young proves SVD yields the mathematically best low-rank matrix approximations by focusing energy on major singular vectors.',
        keyTakeawayHe: 'משפט אקארט-יאנג מוכיח ש-SVD מפיק את קירובי המטריצה הטובים ביותר מדרגה נמוכה על ידי ריכוז האנרגיה בוקטורים הסינגולריים הדומיננטיים.',
        content: 'Any matrix $A \\in \\mathbb{R}^{m \\times n}$ can be factored as:\n$$A = U \\Sigma V^T$$\nwhere $U \\in \\mathbb{R}^{m \\times m}$ and $V \\in \\mathbb{R}^{n \\times n}$ are orthogonal matrices ($U^T U = I, V^T V = I$), and $\\Sigma \\in \\mathbb{R}^{m \\times n}$ is diagonal containing singular values $\\sigma_1 \\geq \\sigma_2 \\geq ... \\geq \\sigma_p \\geq 0$ ($p = \\min(m, n)$).',
        contentHe: 'כל מטריצה $A \\in \\mathbb{R}^{m \\times n}$ ניתנת לפירוק כ:\n$$A = U \\Sigma V^T$$\nכאשר $U \\in \\mathbb{R}^{m \\times m}$ ו-$V \\in \\mathbb{R}^{n \\times n}$ הן מטריצות אורתוגונליות ($U^T U = I, V^T V = I$), ו-$$\\Sigma \\in \\mathbb{R}^{m \\times n}$$ היא מטריצה אלכסונית המכילה ערכים סינגולריים $\\sigma_1 \\geq \\sigma_2 \\geq ... \\geq \\sigma_p \\geq 0$ ($p = \\min(m, n)$).',
        proof: 'Proof: Theorem on Existence of the SVD\nWe prove the existence of the SVD by induction on the size of the matrix $A \\in \\mathbb{R}^{m \\times n}$.\n\n1. Let $\\sigma_1 = \\|A\\|_2 = \\max_{\\|x\\|_2=1} \\|Ax\\|_2$. Since the unit sphere is compact, there exist vectors $v_1 \\in \\mathbb{R}^n$ and $u_1 \\in \\mathbb{R}^m$ of norm 1 such that $A v_1 = \\sigma_1 u_1$.\n2. Extend $v_1$ to an orthonormal basis $V_1 = [v_1, \\tilde{V}]$ of $\\mathbb{R}^n$, and extend $u_1$ to an orthonormal basis $U_1 = [u_1, \\tilde{U}]$ of $\\mathbb{R}^m$.\n3. Consider the product:\n   $$U_1^T A V_1 = \\begin{bmatrix} u_1^T \\\\ \\tilde{U}^T \\end{bmatrix} A \\begin{bmatrix} v_1 & \\tilde{V} \\end{bmatrix} = \\begin{bmatrix} u_1^T A v_1 & u_1^T A \\tilde{V} \\\\ \\tilde{U}^T A v_1 & \\tilde{U}^T A \\tilde{V} \\end{bmatrix}$$\n4. Since $A v_1 = \\sigma_1 u_1$ and $u_1^T u_1 = 1$, we have $u_1^T A v_1 = \\sigma_1$. Also, $\\tilde{U}^T A v_1 = \\sigma_1 \\tilde{U}^T u_1 = 0$ since columns are orthogonal. Thus:\n   $$U_1^T A V_1 = \\begin{bmatrix} \\sigma_1 & w^T \\\\ 0 & B \\end{bmatrix}$$\n5. We prove that $w = 0$. Let $x = [\\sigma_1, w^T]^T$. Then:\n   $$\\left\\| \\begin{bmatrix} \\sigma_1 & w^T \\\\ 0 & B \\end{bmatrix} \\begin{bmatrix} \\sigma_1 \\\\ w \\end{bmatrix} \\right\\|_2^2 = \\left\\| \\begin{bmatrix} \\sigma_1^2 + w^T w \\\\ B w \\end{bmatrix} \\right\\|_2^2 \\geq (\\sigma_1^2 + \\|w\\|_2^2)^2$$\n6. On the other hand, the matrix norm is invariant under orthogonal transformation:\n   $$\\left\\| U_1^T A V_1 x \\right\\|_2^2 \\leq \\|A\\|_2^2 \\|x\\|_2^2 = \\sigma_1^2 (\\sigma_1^2 + \\|w\\|_2^2)$$\n7. Thus $(\\sigma_1^2 + \\|w\\|_2^2)^2 \\leq \\sigma_1^2 (\\sigma_1^2 + \\|w\\|_2^2) \\implies \\|w\\|_2^2 \\leq 0 \\implies w = 0$.\n8. By induction on the smaller submatrix $B$, we decompose $B = U_2 \\Sigma_2 V_2^T$, yielding the complete SVD: $A = U \\Sigma V^T$.\n\nBest Low-Rank Approximation (Eckart-Young Theorem):\nThe rank-$k$ truncated SVD matrix $A_k = \\sum_{i=1}^k \\sigma_i u_i v_i^T$ is the mathematically absolute best rank-$k$ approximation of $A$ in the spectral norm, with error:\n$$\\min_{\\text{rank}(B) \\leq k} \\|A - B\\|_2 = \\|A - A_k\\|_2 = \\sigma_{k+1}$$',
        proofHe: 'הוכחה: משפט על קיום ה-SVD\nנוכיח את קיום הפירוק לערכים סינגולריים (SVD) באמצעות אינדוקציה על גודל המטריצה $A \\in \\mathbb{R}^{m \\times n}$.\n\n1. נגדיר $\\sigma_1 = \\|A\\|_2 = \\max_{\\|x\\|_2=1} \\|Ax\\|_2$. מכיוון שכדור היחידה הוא קומפקטי, קיימים וקטורים $v_1 \\in \\mathbb{R}^n$ ו-$u_1 \\in \\mathbb{R}^m$ בעלי נורמה 1 כך שמתקיים $A v_1 = \\sigma_1 u_1$.\n2. נשלים את $v_1$ לבסיס אורתונורמלי $V_1 = [v_1, \\tilde{V}]$ של $\\mathbb{R}^n$, ונשלים את $u_1$ לבסיס אורתונורמלי $U_1 = [u_1, \\tilde{U}]$ של $\\mathbb{R}^m$.\n3. נבחן את המכפלה:\n   $$U_1^T A V_1 = \\begin{bmatrix} u_1^T \\\\ \\tilde{U}^T \\end{bmatrix} A \\begin{bmatrix} v_1 & \\tilde{V} \\end{bmatrix} = \\begin{bmatrix} u_1^T A v_1 & u_1^T A \\tilde{V} \\\\ \\tilde{U}^T A v_1 & \\tilde{U}^T A \\tilde{V} \\end{bmatrix}$$\n4. מאחר שמתקיים $A v_1 = \\sigma_1 u_1$ וכן $u_1^T u_1 = 1$, נקבל $u_1^T A v_1 = \\sigma_1$. כמו כן, $\\tilde{U}^T A v_1 = \\sigma_1 \\tilde{U}^T u_1 = 0$ מאחר שהעמודות מאונכות. לכן:\n   $$U_1^T A V_1 = \\begin{bmatrix} \\sigma_1 & w^T \\\\ 0 & B \\end{bmatrix}$$\n5. נוכיח כי $w = 0$. נסמן $x = [\\sigma_1, w^T]^T$. אז:\n   $$\\left\\| \\begin{bmatrix} \\sigma_1 & w^T \\\\ 0 & B \\end{bmatrix} \\begin{bmatrix} \\sigma_1 \\\\ w \\end{bmatrix} \\right\\|_2^2 = \\left\\| \\begin{bmatrix} \\sigma_1^2 + w^T w \\\\ B w \\end{bmatrix} \\right\\|_2^2 \\geq (\\sigma_1^2 + \\|w\\|_2^2)^2$$\n6. מאידך, נורמת המטריצה אינווריאנטית תחת טרנספורמציה אורתוגונלית:\n   $$\\left\\| U_1^T A V_1 x \\right\\|_2^2 \\leq \\|A\\|_2^2 \\|x\\|_2^2 = \\sigma_1^2 (\\sigma_1^2 + \\|w\\|_2^2)$$\n7. לכן $(\\sigma_1^2 + \\|w\\|_2^2)^2 \\leq \\sigma_1^2 (\\sigma_1^2 + \\|w\\|_2^2) \\implies \\|w\\|_2^2 \\leq 0 \\implies w = 0$.\n8. כעת, לפי הנחת האינדוקציה על תת-המטריצה הקטנה יותר $B$, נוכל לפרק את $B = U_2 \\Sigma_2 V_2^T$, מה שמניב את ה-SVD המלא: $A = U \\Sigma V^T$.\n\nהקירוב הטוב ביותר מדרגה נמוכה (משפט אקארט-יאנג - Eckart-Young Theorem):\nהמטריצה הקטומה $A_k = \\sum_{i=1}^k \\sigma_i u_i v_i^T$ מדרגה $k$ היא הקירוב האופטימלי מדרגה $k$ למטריצה $A$ תחת נורמה ספקטרלית, ושגיאת הקירוב היא:\n$$\\min_{\\text{rank}(B) \\leq k} \\|A - B\\|_2 = \\|A - A_k\\|_2 = \\sigma_{k+1}$$',
        example: 'Let $A = \\begin{bmatrix} 3 & 0 \\\\ 0 & 2 \\end{bmatrix}$.\n1. Eigenvalues of $A^T A = \\begin{bmatrix} 9 & 0 \\\\ 0 & 4 \\end{bmatrix}$ are $\\lambda_1 = 9, \\lambda_2 = 4$.\n2. Singular values are $\\sigma_1 = \\sqrt{9} = 3, \\sigma_2 = \\sqrt{4} = 2$.\n3. Orthonormal eigenvectors of $A^T A$ are $v_1 = [1, 0]^T, v_2 = [0, 1]^T \\implies V = I$.\n4. Left singular vectors: $u_1 = A v_1 / \\sigma_1 = [3, 0]^T / 3 = [1, 0]^T$. $u_2 = A v_2 / \\sigma_2 = [0, 2]^T / 2 = [0, 1]^T \\implies U = I$.\n5. SVD: $A = I \\begin{bmatrix} 3 & 0 \\\\ 0 & 2 \\end{bmatrix} I^T$.',
        exampleHe: 'תהי $A = \\begin{bmatrix} 3 & 0 \\\\ 0 & 2 \\end{bmatrix}$.\n1. הערכים העצמיים של $A^T A = \\begin{bmatrix} 9 & 0 \\\\ 0 & 4 \\end{bmatrix}$ הם $\\lambda_1 = 9, \\lambda_2 = 4$.\n2. הערכים הסינגולריים הם $\\sigma_1 = \\sqrt{9} = 3, \\sigma_2 = \\sqrt{4} = 2$.\n3. הוקטורים העצמיים האורתונורמליים של $A^T A$ הם $v_1 = [1, 0]^T, v_2 = [0, 1]^T \\implies V = I$.\n4. הוקטורים הסינגולריים השמאליים: $u_1 = A v_1 / \\sigma_1 = [3, 0]^T / 3 = [1, 0]^T$. $u_2 = A v_2 / \\sigma_2 = [0, 2]^T / 2 = [0, 1]^T \\implies U = I$.\n5. פירוק ה-SVD: $A = I \\begin{bmatrix} 3 & 0 \\\\ 0 & 2 \\end{bmatrix} I^T$.'
      },
      {
        id: 'def-nla-5-3',
        title: 'Spectral Decomposition & SVD–Eigenvalue Relation',
        titleHe: 'פירוק ספקטרלי והקשר בין SVD לערכים עצמיים',
        simplifiedLogic: 'The Moore-Penrose Pseudo-inverse ($A^\\dagger$) generalizes matrix inversion to non-square and singular matrices. Using SVD, it provides the mathematically shortest, minimum-norm least squares solution to overdetermined or underdetermined systems.\n\n**Comparison Map:**\n* **Invertible System ($A^{-1}$):** $A x = b \\implies x^* = A^{-1} b$ (Exact, unique)\n* **Singular/Overdetermined System ($A^\\dagger$):** $A x \\approx b \\implies x^* = A^\\dagger b$ (Minimum-norm least squares)',
        simplifiedLogicHe: 'מטריצות סימטריות ניתנות לפירוק ספקטרלי, שבו המטריצה מיוצגת כסכום של היטלים מדרגה 1 המשוקללים על ידי הערכים העצמיים שלהן. ה-SVD מכליל זאת לכל מטריצה מלבנית על ידי שימוש בערכים סינגולריים, שהם בדיוק השורשים הריבועיים של הערכים העצמיים של המטריצה הסימטרית $A^T A$.\n\n**קשר מתמטי מנחה:**\n$$\\text{ערכים סינגולריים of } A \\quad \\longleftrightarrow \\quad \\text{ערכים עצמיים of } A^T A \\quad \\longrightarrow \\quad \\sigma_i = \\sqrt{\\lambda_i(A^TA)}$$',
        toolboxConnection: 'The Pseudo-inverse is the mathematical base for the Gauss-Newton step in **OPT Chapter 2** when the Jacobian matrix does not have full rank!',
        toolboxConnectionHe: 'קשר זה חיוני ביותר לניתוח מספר המצב תחת נורמת 2, ומאפשר לקשר בין קעירות של פונקציות ב-**OPT פרק 1** (דרך מטריצת ההסיאן) לערכים הסינגולריים של מטריצת המערכת!',
        keyTakeaway: 'The pseudo-inverse guarantees stable least-squares solutions even when matrices are singular or rectangular.',
        keyTakeawayHe: 'ערכים סינגולריים הם השורשים הריבועיים של הערכים העצמיים של $A^T A$, מה שמחבר בין תכונות אנרגטיות של מטריצה לצורתה הגיאומטרית.',
        content: '**Spectral Decomposition** (for normal/Hermitian matrices): If $A \\in \\mathbb{C}^{n \\times n}$ is normal ($A^*A = AA^*$), there exists a unitary $U$ such that:\n$$A = U \\Lambda U^*, \\quad \\Lambda = \\text{diag}(\\lambda_1, ..., \\lambda_n)$$\nwhere columns of $U$ are the eigenvectors and $\\Lambda$ holds eigenvalues. If $A$ is Hermitian, all $\\lambda_i \\in \\mathbb{R}$. If real symmetric, all matrices are real.\n\n**SVD–Eigenvalue Relationship**: Applying SVD $A = U\\Sigma V^T$ to $A^T A$:\n$$A^T A = (U\\Sigma V^T)^T(U\\Sigma V^T) = V\\Sigma^T U^T U \\Sigma V^T = V\\Sigma^2 V^T$$\nTherefore $\\sigma_i = \\sqrt{\\lambda_i(A^T A)}$ — the singular values are the square roots of eigenvalues of $A^T A$.',
        contentHe: '**פירוק ספקטרלי** (עבור מטריצות נורמליות/הרמיטיות): אם $A \\in \\mathbb{C}^{n \\times n}$ היא מטריצה נורמלית ($A^*A = AA^*$), קיימת מטריצה אוניטרית $U$ כך שמתקיים:\n$$A = U \\Lambda U^*, \\quad \\Lambda = \\text{diag}(\\lambda_1, ..., \\lambda_n)$$\nכאשר עמודות המטריצה $U$ הן הוקטורים העצמיים ו-$\\Lambda$ היא מטריצה אלכסונית המכילה את הערכים העצמיים. אם $A$ היא הרמיטית, כל $\\lambda_i \\in \\mathbb{R}$. אם היא סימטרית ממשית, כל המטריצות הן ממשושיות.\n\n**הקשר בין SVD לערכים עצמיים**: הפעלת SVD $A = U\\Sigma V^T$ על המטריצה $A^T A$:\n$$A^T A = (U\\Sigma V^T)^T(U\\Sigma V^T) = V\\Sigma^T U^T U \\Sigma V^T = V\\Sigma^2 V^T$$\nלכן $\\sigma_i = \\sqrt{\\lambda_i(A^T A)}$ — כלומר, הערכים הסינגולריים הם השורשים הריבועיים של הערכים העצמיים של $A^T A$.',
        proof: 'Proof: SVD–Spectral Decomposition Connection\n\nLet $A = U\\Sigma V^T$ be the full SVD. We compute $A^T A$:\n$$A^T A = (U\\Sigma V^T)^T(U\\Sigma V^T) = V\\Sigma^T U^T \\cdot U\\Sigma V^T$$\nSince $U^T U = I$ (orthogonality):\n$$A^T A = V \\Sigma^T \\Sigma V^T = V \\Sigma^2 V^T$$\nThis has the form of a spectral decomposition! Comparing to the eigendecomposition $A^T A = Q \\Lambda Q^T$:\n- $Q = V$ (columns of $V$ are eigenvectors of $A^T A$)\n- $\\Lambda = \\Sigma^2$ (eigenvalues are $\\sigma_i^2$)\nTherefore $\\sigma_i = \\sqrt{\\lambda_i(A^T A)} \\geq 0$, confirming singular values are always non-negative. $\\square$',
        proofHe: 'הוכחה: הקשר בין SVD לפירוק ספקטרלי\n\nיהי $A = U\\Sigma V^T$ ה-SVD המלא של המטריצה $A$. נחשב את $A^T A$:\n$$A^T A = (U\\Sigma V^T)^T(U\\Sigma V^T) = V\\Sigma^T U^T \\cdot U\\Sigma V^T$$\nמכיוון ש-$U$ היא אורתוגונלית ($U^T U = I$):\n$$A^T A = V \\Sigma^T \\Sigma V^T = V \\Sigma^2 V^T$$\nביטוי זה הוא בדיוק בעל מבנה של פירוק ספקטרלי! בהשוואה לפירוק העצמי $A^T A = Q \\Lambda Q^T$ נקבל:\n- $Q = V$ (עמודות המטריצה $V$ הן הוקטורים העצמיים של $A^T A$)\n- $\\Lambda = \\Sigma^2$ (הערכים העצמיים הם ריבועי הערכים הסינגולריים $\\sigma_i^2$)\nלכן $\\sigma_i = \\sqrt{\\lambda_i(A^T A)} \\geq 0$, מה שמוכיח כי ערכים סינגולריים הם תמיד אי-שליליים. $\\square$',
        example: 'Let $A = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$.\n\n$A^T A = \\begin{bmatrix}1 & 1\\\\1 & 2\\end{bmatrix}$. Eigenvalues: $\\lambda = \\frac{3 \\pm \\sqrt{5}}{2}$, so $\\lambda_1 \\approx 2.618$, $\\lambda_2 \\approx 0.382$.\n\nSingular values: $\\sigma_1 = \\sqrt{2.618} \\approx 1.618$, $\\sigma_2 = \\sqrt{0.382} \\approx 0.618$.\n\nNote: $\\sigma_1 / \\sigma_2 \\approx 2.618 = \\kappa_2(A)$. The condition number equals the ratio of largest to smallest singular values.',
        exampleHe: 'תהי $A = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$.\n\nמתקיים $A^T A = \\begin{bmatrix}1 & 1\\\\1 & 2\\end{bmatrix}$. ערכים עצמיים: $\\lambda = \\frac{3 \\pm \\sqrt{5}}{2}$, כלומר $\\lambda_1 \\approx 2.618$, $\\lambda_2 \\approx 0.382$.\n\nערכים סינגולריים: $\\sigma_1 = \\sqrt{2.618} \\approx 1.618$, $\\sigma_2 = \\sqrt{0.382} \\approx 0.618$.\n\nהערה: $\\sigma_1 / \\sigma_2 \\approx 2.618 = \\kappa_2(A)$. מספר המצב שווה ליחס בין הערך הסינגולרי הגדול ביותר לקטן ביותר.'
      },
      {
        id: 'def-nla-5-4',
        title: 'Moore-Penrose Pseudo-inverse & LS via SVD',
        titleHe: 'הפסאודו-הופכי של מור-פנרוז ופתרון LS באמצעות SVD',
        simplifiedLogic: 'The Moore-Penrose Pseudo-inverse ($A^\\dagger$) generalizes matrix inversion to non-square and singular matrices. Using SVD, it provides the mathematically shortest, minimum-norm least squares solution to overdetermined or underdetermined systems.\n\n**Comparison Map:**\n* **Invertible System ($A^{-1}$):** $A x = b \\implies x^* = A^{-1} b$ (Exact, unique)\n* **Singular/Overdetermined System ($A^\\dagger$):** $A x \\approx b \\implies x^* = A^\\dagger b$ (Minimum-norm least squares)',
        simplifiedLogicHe: 'הפסאודו-הופכי של מור-פנרוז ($A^\\dagger$) מכליל את מושג ההיפוך עבור מטריצות לא ריבועיות או סינגולריות. באמצעות SVD, הוא מספק את פתרון הריבועים המינימליים בעל הנורמה המינימלית הקצר ביותר למערכות יתר או תת-נקבעות.\n\n**מיפוי השוואתי:**\n* **מערכת הפיכה ($A^{-1}$):** $A x = b \\implies x^* = A^{-1} b$ (פתרון מדויק ויחיד)\n* **מערכת סינגולרית/יתר ($A^\\dagger$):** $A x \\approx b \\implies x^* = A^\\dagger b$ (פתרון ריבועים מינימליים בעל נורמה מינימלית)',
        toolboxConnection: 'The Pseudo-inverse is the mathematical base for the Gauss-Newton step in **OPT Chapter 2** when the Jacobian matrix does not have full rank!',
        toolboxConnectionHe: 'הפסאודו-הופכי הוא הבסיס המתמטי לצעד גאוס-ניוטון ב-**OPT פרק 2** כאשר מטריצת היעקוביאן אינה מדרגה מלאה!',
        keyTakeaway: 'The pseudo-inverse guarantees stable least-squares solutions even when matrices are singular or rectangular.',
        keyTakeawayHe: 'הפסאודו-הופכי מבטיח פתרונות ריבועים מינימליים יציבים גם כאשר המטריצות הן סינגולריות או מלבניות.',
        content: '**Pseudo-inverse** (Moore-Penrose): For any $A \\in \\mathbb{R}^{m \\times n}$ with SVD $A = U\\Sigma V^T$, define:\n$$A^\\dagger = V \\Sigma^\\dagger U^T, \\quad (\\Sigma^\\dagger)_{ii} = \\begin{cases} 1/\\sigma_i & \\sigma_i \\neq 0 \\\\ 0 & \\sigma_i = 0 \\end{cases}$$\n- Full-rank: $A^\\dagger = (A^T A)^{-1} A^T$ (standard LS solution)\n- Rank-deficient: $\\hat{x} = A^\\dagger b$ gives the **minimum-norm** solution among all LS minimizers.\n\n**Least Squares via SVD**: Substitute $A = U\\Sigma V^T$ into normal equations. With $\\hat{y} = V^T \\hat{x}$:\n$$\\Sigma^T \\Sigma \\hat{y} = \\Sigma^T U^T b \\implies \\Sigma \\hat{y} = U^T b \\implies \\hat{x} = V\\hat{y}$$\nThis reduces LS to a diagonal system — the most numerically stable approach.',
        contentHe: '**פסאודו-הופכי (Moore-Penrose)**: לכל מטריצה $A \\in \\mathbb{R}^{m \\times n}$ בעלת SVD $A = U\\Sigma V^T$, נגדיר:\n$$A^\\dagger = V \\Sigma^\\dagger U^T, \\quad (\\Sigma^\\dagger)_{ii} = \\begin{cases} 1/\\sigma_i & \\sigma_i \\neq 0 \\\\ 0 & \\sigma_i = 0 \\end{cases}$$\n- דרגה מלאה: $A^\\dagger = (A^T A)^{-1} A^T$ (פתרון ריבועים מינימליים סטנדרטי)\n- חסרת דרגה מלאה (Rank-deficient): $\\hat{x} = A^\\dagger b$ נותן את הפתרון בעל **הנורמה המינימלית** מבין כל פותרי הריבועים המינימליים.\n\n**ריבועים מינימליים באמצעות SVD**: נציב $A = U\\Sigma V^T$ במשוואות הנורמליות. נסמן $\\hat{y} = V^T \\hat{x}$:\n$$\\Sigma^T \\Sigma \\hat{y} = \\Sigma^T U^T b \\implies \\Sigma \\hat{y} = U^T b \\implies \\hat{x} = V\\hat{y}$$\nזה מצמצם את בעיית הריבועים המינימליים למערכת אלכסונית פשוטה — השיטה היציבה ביותר נומרית.',
        proof: 'Proof: SVD Least Squares Derivation\n\nGiven $A = U\\Sigma V^T$ (economic SVD, $U \\in \\mathbb{R}^{m \\times n}$, $V \\in \\mathbb{R}^{n \\times n}$). Normal equations: $A^T A \\hat{x} = A^T b$.\n\nSubstitute SVD:\n$$V\\Sigma^T U^T \\cdot U\\Sigma V^T \\hat{x} = V\\Sigma^T U^T b$$\n$$V \\Sigma^2 V^T \\hat{x} = V\\Sigma^T U^T b$$\nMultiply left by $V^T$ (orthogonal):\n$$\\Sigma^2 V^T \\hat{x} = \\Sigma^T U^T b$$\nLet $\\hat{y} = V^T \\hat{x}$ and since $\\Sigma^2 = \\Sigma^T \\Sigma$ for diagonal $\\Sigma$:\n$$\\Sigma \\hat{y} = U^T b$$\nThis diagonal system gives $\\hat{y}_i = (U^T b)_i / \\sigma_i$ when $\\sigma_i \\neq 0$. Finally $\\hat{x} = V\\hat{y} = V\\Sigma^\\dagger U^T b = A^\\dagger b$. $\\square$',
        proofHe: 'הוכחה: גזירת פתרון ריבועים מינימליים באמצעות SVD\n\nנתון פירוק SVD מצומצם $A = U\\Sigma V^T$ ($U \\in \\mathbb{R}^{m \\times n}$, $V \\in \\mathbb{R}^{n \\times n}$). המשוואות הנורמליות הן: $A^T A \\hat{x} = A^T b$.\n\nנציב את ה-SVD:\n$$V\\Sigma^T U^T \\cdot U\\Sigma V^T \\hat{x} = V\\Sigma^T U^T b$$\n$$V \\Sigma^2 V^T \\hat{x} = V\\Sigma^T U^T b$$\nנכפיל משמאל ב-$V^T$ (מטריצה אורתוגונלית):\n$$\\Sigma^2 V^T \\hat{x} = \\Sigma^T U^T b$$\nנגדיר $\\hat{y} = V^T \\hat{x}$ ומאחר שמתקיים $\\Sigma^2 = \\Sigma^T \\Sigma$ לכל מטריצה אלכסונית $\\Sigma$:\n$$\\Sigma \\hat{y} = U^T b$$\nמערכת אלכסונית זו נותנת באופן מיידי $\\hat{y}_i = (U^T b)_i / \\sigma_i$ לכל $\\sigma_i \\neq 0$. לבסוף, נקבל $\\hat{x} = V\\hat{y} = V\\Sigma^\\dagger U^T b = A^\\dagger b$. $\\square$',
        example: 'Solve $\\min \\|Ax - b\\|_2$ with $A = \\begin{bmatrix} -1 & -1 \\\\ 1 & 3 \\\\ -1 & -1 \\\\ 1 & 3 \\end{bmatrix}$, $b = [-1, 23, 15, 39]^T$.\n\nUsing SVD: $U, \\Sigma, V$ computed, then:\n1. $\\hat{b} = U^T b \\approx [46.96, 8.43, -0.31]^T$\n2. $\\hat{y} = \\hat{b} / \\sigma \\approx [4.88, 2.15, -0.73]^T$\n3. $\\hat{x} = V\\hat{y} = [2, 3, 4]^T$ ✓\n\nAll three approaches (Normal Equations, QR, SVD) give the same answer $[2, 3, 4]^T$, but SVD is most numerically stable.',
        exampleHe: 'פתור את בעיית המזעור $\\min \\|Ax - b\\|_2$ כאשר $A = \\begin{bmatrix} -1 & -1 \\\\ 1 & 3 \\\\ -1 & -1 \\\\ 1 & 3 \\end{bmatrix}$ ו-$b = [-1, 23, 15, 39]^T$.\n\nבאמצעות חישוב SVD וקבלת המטריצות $U, \\Sigma, V$:\n1. $\\hat{b} = U^T b \\approx [46.96, 8.43, -0.31]^T$\n2. $\\hat{y} = \\hat{b} / \\sigma \\approx [4.88, 2.15, -0.73]^T$\n3. $\\hat{x} = V\\hat{y} = [2, 3, 4]^T$ ✓\n\nשלוש השיטות (משוואות נורמליות, QR ו-SVD) מניבות כולן את אותה התוצאה $[2, 3, 4]^T$, אך שימוש ב-SVD הוא היציב ביותר נומרית בפני שגיאות עיגול.'
      }
    ],
    quiz: [
      {
        question: 'According to the Eckart-Young Theorem, what is the spectral norm error when approximating A with its optimal rank-k SVD truncated matrix A_k?',
        questionHe: 'על פי משפט אקארט-יאנג (Eckart-Young Theorem), מהי שגיאת הנורמה הספקטרלית כאשר מקרבים מטריצה A על ידי קיטום ה-SVD שלה למטריצה A_k מדרגה k?',
        options: [
          'The sum of all singular values.',
          'Exactly the (k+1)-th singular value, σ_{k+1}.',
          'Zero.',
          'The condition number of A.'
        ],
        optionsHe: [
          'סכום כל הערכים הסינגולריים.',
          'בדיוק הערך הסינגולרי ה-(k+1), כלומר σ_{k+1}.',
          'אפס.',
          'מספר המצב של A.'
        ],
        correctAnswerIndex: 1,
        explanation: 'The Eckart-Young theorem proves that the minimum spectral norm difference between A and any rank-k matrix is exactly the first omitted singular value σ_{k+1}.',
        explanationHe: 'משפט אקארט-יאנג מוכיח כי הפרש הנורמה הספקטרלית המינימלי בין מטריצה A לכל מטריצה מדרגה k הוא בדיוק הערך הסינגולרי המושמט הראשון, כלומר σ_{k+1}.'
      },
      {
        question: 'Why is solving a least squares problem using the QR decomposition considered numerically superior to solving it via the Normal Equations?',
        questionHe: 'מדוע פתרון בעיית ריבועים מינימליים באמצעות פירוק QR נחשב ליציב ועדיף נומרית על פני פתרון באמצעות המשוואות הנורמליות?',
        options: [
          'It takes more iterations to converge.',
          'It avoids forming A^T A, which squares the condition number, thus preserving numerical precision.',
          'It forces the solution to be zero.',
          'It only works if the matrix is symmetric.'
        ],
        optionsHe: [
          'נדרשות יותר איטרציות כדי להגיע להתכנסות.',
          'הוא מונע את חישוב המטריצה A^T A, המעלה בריבוע את מספר המצב של המערכת, ובכך שומר על דיוק נומרי.',
          'הוא מאלץ את הפתרון להיות אפס.',
          'הוא עובד רק אם המטריצה המקורית היא סימטרית.'
        ],
        correctAnswerIndex: 1,
        explanation: 'Forming A^T A numerically squares the condition number, making an ill-conditioned system even worse. QR decomposition solves the system directly using orthogonal transformations, keeping the conditioning stable.',
        explanationHe: 'חישוב המטריצה A^T A מעלה בריבוע את מספר המצב של המערכת, מה שהופך מערכת בעלת תנאי גרוע לגרועה בהרבה. פירוק QR פותר את המערכת ישירות באמצעות טרנספורמציות אורתוגונליות, מה ששומר על מספר המצב המקור ומונע התבדרות.'
      }
    ]
  },
{
    id: 'nla-6',
    courseId: 'nla',
    chapterNumber: '6',
    title: 'Iterative Methods for Linear Systems',
    titleHe: 'פרק 6: שיטות איטרטיביות למערכות ליניאריות',
    intro: 'This chapter covers algorithms that solve linear systems iteratively. We start with stationary splittings (Jacobi, Gauss-Seidel), establish rigorous convergence bounds using spectral radius, explore Successive Over-Relaxation (SOR) with Kahan\'s theorem, and study the Steepest Descent method from a quadratic optimization perspective.',
    introHe: 'פרק זה מכסה אלגוריתמים הפותרים מערכות ליניאריות באופן איטרטיבי. נתחיל עם שיטות פיצול סטציונריות (יעקובי, גאוס-סיידל), נבסס חסמי התכנסות קשיחים באמצעות רדיוס ספקטרלי, נחקור את שיטת ההרפיה לשיעורין (SOR) תוך שימוש במשפט כהן (Kahan\'s theorem), ונלמד את שיטת הירידה התלולה מנקודת מבט של אופטימיזציה ריבועית.',
    motivation: 'For sparse systems containing millions of variables, direct factorizations require far too much memory and time. Iterative methods generate highly accurate approximations using only matrix-vector multiplications, completing solves in seconds rather than hours.',
    motivationHe: 'עבור מערכות דלילות (Sparse) המכילות מיליוני משתנים, פירוקים ישירים (Direct factorizations) דורשים זיכרון וזמן רבים מדי. שיטות איטרטיביות מייצרות קירובים מדויקים ביותר תוך שימוש בכפל מטריצה-וקטור בלבד, ובכך משלימות פתרונות בשניות במקום בשעות.',
    definitions: [
      {
        id: 'def-nla-6-1',
        title: 'Jacobi & Gauss-Seidel Splittings',
        titleHe: 'שיטות פיצול של יעקובי וגאוס-סיידל',
        simplifiedLogic: 'Iterative splittings solve $Ax = b$ by rewriting the matrix as $A = M - N$ where $M$ is easy to invert. Instead of solving in one huge step, we guess a solution and repeatedly refine it.\n\n* **Jacobi:** Refines all coordinates using only values from the *previous* iteration step.\n* **Gauss-Seidel:** Refines coordinates sequentially, immediately using the *newly updated* values, speeding up convergence.',
        simplifiedLogicHe: 'פיצולים איטרטיביים פותרים את $Ax = b$ על ידי כתיבת המטריצה כ-$A = M - N$ כאשר קל להפוך את $M$. במקום לפתור בצעד ענק יחיד, אנו מנחשים פתרון ומשפרים אותו שוב ושוב.\n\n* **יעקובי:** מעדכן את כל הרכיבים במקביל תוך שימוש בערכים מהשלב *הקודם* בלבד.\n* **גאוס-סיידל:** מעדכן רכיבים בזה אחר זה, ומשתמש באופן מיידי בערכים *המעודכנים*, מה שמאיץ את ההתכנסות.',
        toolboxConnection: 'Iterative splittings are the discrete analogs of solving time-dependent differential equations. In **OPT Chapter 2**, Coordinate Descent acts exactly like Gauss-Seidel, minimizing one variable at a time!',
        toolboxConnectionHe: 'פיצולים איטרטיביים הם האנלוג הדיסקרטי של פתרון משוואות דיפרנציאליות תלויות בזמן. ב-**OPT פרק 2**, שיטת ירידת קואורדינטות פועלת בדיוק כמו גאוס-סיידל, וממזערת משתנה יחיד בכל פעם!',
        content: 'We split $A = D - L - U$, where $D$ is diagonal, $-L$ is strictly lower triangular, and $-U$ is strictly upper triangular.\n1. Jacobi Method: Computes coordinates independently:\n   $$D x^{(k+1)} = (L + U) x^{(k)} + b \\implies x^{(k+1)} = D^{-1}(L + U)x^{(k)} + D^{-1}b$$\n2. Gauss-Seidel: Uses newly updated values immediately:\n   $$(D - L) x^{(k+1)} = U x^{(k)} + b \\implies x^{(k+1)} = (D - L)^{-1} U x^{(k)} + (D - L)^{-1} b$$',
        contentHe: 'אנו מפצלים את המטריצה $A = D - L - U$, כאשר $D$ היא מטריצה אלכסונית, $-L$ היא משולשית תחתונה ממש, ו-$-U$ היא משולשית עליונה ממש.\n1. שיטת יעקובי: מחשבת רכיבים באופן בלתי תלוי:\n   $$D x^{(k+1)} = (L + U) x^{(k)} + b \\implies x^{(k+1)} = D^{-1}(L + U)x^{(k)} + D^{-1}b$$\n2. שיטת גאוס-סיידל: משתמשת בערכים שעודכנו זה עתה באופן מיידי:\n   $$(D - L) x^{(k+1)} = U x^{(k)} + b \\implies x^{(k+1)} = (D - L)^{-1} U x^{(k)} + (D - L)^{-1} b$$',
        proof: 'Proof: Theorem on Convergence via Spectral Radius & Diagonal Dominance\nTheorem: An iteration of the form $x^{(k+1)} = T x^{(k)} + c$ converges for any initial vector iff the spectral radius of $T$ satisfies $\\rho(T) < 1$.\n\nProof Sketch:\n1. Define the error at step $k$: $e^{(k)} = x^{(k)} - x^*$.\n2. Subtract the fixed-point equation $x^* = T x^* + c$ from the iteration:\n   $$x^{(k+1)} - x^* = T(x^{(k)} - x^*) \\implies e^{(k+1)} = T e^{(k)}$$\n3. By induction, $e^{(k)} = T^k e^{(0)}$.\n4. From linear algebra, $\\lim_{k \\to \\infty} T^k = 0 \\iff \\rho(T) < 1$. Thus, the error decays to zero iff all eigenvalues of $T$ are strictly less than 1 in magnitude.\n\nTheorem: Jacobi converges under Strict Diagonal Dominance (SDD).\n1. SDD means $|a_{ii}| > \\sum_{j \\neq i} |a_{ij}|$ for all $i$.\n2. The Jacobi iteration matrix is $T_J = D^{-1}(L + U)$. Its row-sum norm is:\n   $$\\|T_J\\|_\\infty = \\max_i \\sum_{j \\neq i} \\left| \\frac{a_{ij}}{a_{ii}} \\right| < 1 \\quad (\\text{by SDD})$$\n3. Since $\\rho(T_J) \\leq \\|T_J\\|_\\infty$, we have $\\rho(T_J) < 1$, guaranteeing convergence.',
        proofHe: 'הוכחה: משפט על התכנסות באמצעות רדיוס ספקטרלי ודומיננטיות אלכסונית\nמשפט: איטרציה מהצורה $x^{(k+1)} = T x^{(k)} + c$ מתכנסת לכל וקטור התחלתי אם ורק אם הרדיוס הספקטרלי של $T$ מקיים $\\rho(T) < 1$.\n\nסקיצה של ההוכחה:\n1. נגדיר את השגיאה בשלב $k$: $e^{(k)} = x^{(k)} - x^*$.\n2. נחסר את משוואת נקודת השבת $x^* = T x^* + c$ מהאיטרציה הכללית:\n   $$x^{(k+1)} - x^* = T(x^{(k)} - x^*) \\implies e^{(k+1)} = T e^{(k)}$$\n3. באמצעות אינדוקציה, נקבל $e^{(k)} = T^k e^{(0)}$.\n4. מאלגברה ליניארית, מתקיים $\\lim_{k \\to \\infty} T^k = 0 \\iff \\rho(T) < 1$. לכן, השגיאה דועכת לאפס אם ורק אם כל הערכים העצמיים של $T$ קטנים מ-1 בערכם המוחלט.\n\nמשפט: שיטת יעקובי מתכנסת תחת דומיננטיות אלכסונית חזקה (SDD).\n1. דומיננטיות אלכסונית חזקה פירושה $|a_{ii}| > \\sum_{j \\neq i} |a_{ij}|$ לכל שורה $i$.\n2. מטריצת האיטרציה של יעקובי היא $T_J = D^{-1}(L + U)$. נורמת סכום השורות שלה היא:\n   $$\\|T_J\\|_\\infty = \\max_i \\sum_{j \\neq i} \\left| \\frac{a_{ij}}{a_{ii}} \\right| < 1 \\quad (\\text{בשל הדומיננטיות האלכסונית})$$\n3. מכיוון שמתקיים $\\rho(T_J) \\leq \\|T_J\\|_\\infty$, נקבל $\\rho(T_J) < 1$, מה שמבטיח התכנסות.',
        example: 'Solve $\\begin{bmatrix} 3 & 1 \\\\ 1 & 3 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 5 \\end{bmatrix}$ starting from $x^{(0)} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}^T$.\n- Jacobi: $x_1^{(k+1)} = \\frac{5 - x_2^{(k)}}{3}$, $x_2^{(k+1)} = \\frac{5 - x_1^{(k)}}{3}$\n  - Step 1: $x_1^{(1)} = 1.67, x_2^{(1)} = 1.67$\n  - Step 2: $x_1^{(2)} = \\frac{5-1.67}{3} = 1.11, x_2^{(2)} = 1.11$\n- Gauss-Seidel: $x_1^{(k+1)} = \\frac{5 - x_2^{(k)}}{3}$, $x_2^{(k+1)} = \\frac{5 - x_1^{(k+1)}}{3}$\n  - Step 1: $x_1^{(1)} = 1.67$. Immediately use it: $x_2^{(1)} = \\frac{5 - 1.67}{3} = 1.11$.\n  - Step 2: $x_1^{(2)} = \\frac{5 - 1.11}{3} = 1.30$. $x_2^{(2)} = \\frac{5 - 1.30}{3} = 1.23$.\n  Gauss-Seidel converges much faster to the true solution $[1.25, 1.25]^T$!',
        exampleHe: 'פתור את המערכת $\\begin{bmatrix} 3 & 1 \\\\ 1 & 3 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 5 \\end{bmatrix}$ החל מהניחוש ההתחלתי $x^{(0)} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}^T$.\n- יעקובי: $x_1^{(k+1)} = \\frac{5 - x_2^{(k)}}{3}$, $x_2^{(k+1)} = \\frac{5 - x_1^{(k)}}{3}$\n  - שלב 1: $x_1^{(1)} = 1.67, x_2^{(1)} = 1.67$\n  - שלב 2: $x_1^{(2)} = \\frac{5-1.67}{3} = 1.11, x_2^{(2)} = 1.11$\n- גאוס-סיידל: $x_1^{(k+1)} = \\frac{5 - x_2^{(k)}}{3}$, $x_2^{(k+1)} = \\frac{5 - x_1^{(k+1)}}{3}$\n  - שלב 1: $x_1^{(1)} = 1.67$. נשתמש בערך זה מיד: $x_2^{(1)} = \\frac{5 - 1.67}{3} = 1.11$.\n  - שלב 2: $x_1^{(2)} = \\frac{5 - 1.11}{3} = 1.30$. $x_2^{(2)} = \\frac{5 - 1.30}{3} = 1.23$.\n  שיטת גאוס-סיידל מתכנסת מהר בהרבה לפתרון האמיתי $[1.25, 1.25]^T$!'
      },
      {
        id: 'def-nla-6-2',
        title: 'SOR & Kahan\'s Convergence Bounds',
        titleHe: 'שיטת SOR וחסמי התכנסות של כהן (Kahan)',
        simplifiedLogic: 'SOR speeds up Gauss-Seidel by taking the newly computed step and "extrapolating" slightly further in that direction. This is controlled by $\\omega$. If $\\omega > 1$, we over-correct (accelerate); if $\\omega < 1$, we under-correct.\n\n* **Kahan\'s Limit:** SOR can only converge if $\\omega$ is strictly between 0 and 2. Outside this box, Kahan proved that eigenvalues mathematically explode.',
        simplifiedLogicHe: 'שיטת SOR מאיצה את גאוס-סיידל על ידי לקיחת הצעד שחושב זה עתה וביצוע "אקסטרפולציה" קלה נוספת באותו כיוון. דבר זה נשלט על ידי הפרמטר $\\omega$. אם $\\omega > 1$, אנו מבצעים תיקון-יתר (האצה); אם $\\omega < 1$, אנו מבצעים תיקון-חסר.\n\n* **הגבול של כהן (Kahan):** שיטת SOR יכולה להתכנס רק אם $\\omega$ נמצא בקטע הפתוח $(0, 2)$. מחוץ לטווח זה, כהן הוכיח שהערכים העצמיים מתבדרים מתמטית באופן ודאי.',
        toolboxConnection: 'Finding the optimal $\\omega$ parameter in SOR is exactly analogous to tuning the learning rate (step size) in optimization algorithms like Gradient Descent in **OPT Chapter 2**.',
        toolboxConnectionHe: 'מציאת פרמטר ה-$\\omega$ האופטימלי ב-SOR שקולה לחלוטין לכיוונון קצב הלמידה (גודל הצעד) באלגוריתמי אופטימיזציה כמו ירידת גרדיאנט ב-**OPT פרק 2**.',
        content: 'Successive Over-Relaxation (SOR) accelerates Gauss-Seidel by weighting updates with relaxation parameter $\\omega \\in (0, 2)$:\n$$(D - \\omega L) x^{(k+1)} = ((1 - \\omega)D + \\omega U) x^{(k)} + \\omega b$$\n- Ostrowski-Reich: If $A$ is SPD, SOR converges for any initial guess iff $0 < \\omega < 2$.',
        contentHe: 'שיטת הרפיה לשיעורין (Successive Over-Relaxation - SOR) מאיצה את שיטת גאוס-סיידל על ידי שקלול העדכונים באמצעות פרמטר הרפיה $\\omega \\in (0, 2)$:\n$$(D - \\omega L) x^{(k+1)} = ((1 - \\omega)D + \\omega U) x^{(k)} + \\omega b$$\n- משפט אוסטרובסקי-רייך (Ostrowski-Reich): אם $A$ היא מטריצה סימטרית חיובית לחלוטין (SPD), שיטת SOR מתכנסת לכל ניחוש התחלתי אם ורק אם מתקיים $0 < \\omega < 2$.',
        proof: 'Proof: Theorem on Kahan\'s SOR Convergence Bound\nTheorem: For the SOR method to converge, we must have $0 < \\omega < 2$.\n\nProof:\n1. The SOR iteration matrix is $T_\\omega = (D - \\omega L)^{-1} ((1 - \\omega)D + \\omega U)$.\n2. The determinant of a product is the product of determinants. Since $L$ and $U$ are strictly lower/upper triangular, $(D - \\omega L)$ and $((1-\\omega)D + \\omega U)$ are triangular:\n   $$\\det(D - \\omega L) = \\det(D)$$\n   $$\\det((1 - \\omega)D + \\omega U) = (1 - \\omega)^n \\det(D)$$\n3. Thus:\n   $$\\det(T_\\omega) = \\frac{(1 - \\omega)^n \\det(D)}{\\det(D)} = (1 - \\omega)^n$$\n4. The determinant is also the product of all eigenvalues $\\lambda_i$ of $T_\\omega$:\n   $$\\prod_{i=1}^n \\lambda_i = (1 - \\omega)^n \\implies \\prod_{i=1}^n |\\lambda_i| = |1 - \\omega|^n$$\n5. For the spectral radius $\\rho(T_\\omega) = \\max |\\lambda_i| < 1$ (convergence), the product of the magnitudes must be strictly less than 1:\n   $$|1 - \\omega|^n < 1 \\implies |1 - \\omega| < 1 \\implies 0 < \\omega < 2$$\n   This proves that convergence is mathematically impossible outside of this range!',
        proofHe: 'הוכחה: משפט על חסם ההתכנסות של כהן (Kahan) עבור SOR\nמשפט: על מנת ששיטת SOR תתכנס, חייב להתקיים $0 < \\omega < 2$.\n\nהוכחה:\n1. מטריצת האיטרציה של SOR היא $T_\\omega = (D - \\omega L)^{-1} ((1 - \\omega)D + \\omega U)$.\n2. דטרמיננטה של מכפלה היא מכפלת הדטרמיננטות. מכיוון ש-$L$ ו-$U$ הן משולשיות תחתונות/עליונות ממש, המטריצות $(D - \\omega L)$ ו-$((1-\\omega)D + \\omega U)$ הן משולשיות:\n   $$\\det(D - \\omega L) = \\det(D)$$\n   $$\\det((1 - \\omega)D + \\omega U) = (1 - \\omega)^n \\det(D)$$\n3. לכן:\n   $$\\det(T_\\omega) = \\frac{(1 - \\omega)^n \\det(D)}{\\det(D)} = (1 - \\omega)^n$$\n4. הדטרמיננטה שווה גם למכפלת כל הערכים העצמיים $\\lambda_i$ של $T_\\omega$:\n   $$\\prod_{i=1}^n \\lambda_i = (1 - \\omega)^n \\implies \\prod_{i=1}^n |\\lambda_i| = |1 - \\omega|^n$$\n5. על מנת שהרדיוס הספקטרלי $\\rho(T_\\omega) = \\max |\\lambda_i| < 1$ (תנאי להתכנסות), מכפלת הגדלים של הערכים העצמיים חייבת להיות קטנה מ-1:\n   $$|1 - \\omega|^n < 1 \\implies |1 - \\omega| < 1 \\implies 0 < \\omega < 2$$\n   זה מוכיח כי התכנסות אינה אפשרית מתמטית מחוץ לטווח זה!',
        example: 'In a sparse matrix with Jacobi spectral radius $\\rho(T_J) = 0.995$:\n1. The optimal SOR parameter is:\n   $$\\omega_{opt} = \\frac{2}{1 + \\sqrt{1 - 0.995^2}} \\approx 1.82$$\n2. The iteration spectral radius drops from $0.995$ to $\\rho(T_{opt}) = \\omega_{opt} - 1 \\approx 0.82$.\n3. To reduce error by $10^{-4}$, Gauss-Seidel requires over 1000 iterations, while optimal SOR requires only 45!',
        exampleHe: 'במטריצה דלילה עם רדיוס ספקטרלי של יעקובי $\\rho(T_J) = 0.995$:\n1. פרמטר ה-SOR האופטימלי הוא:\n   $$\\omega_{opt} = \\frac{2}{1 + \\sqrt{1 - 0.995^2}} \\approx 1.82$$\n2. הרדיוס הספקטרלי של האיטרציה צונח מ-$0.995$ ל-$\\rho(T_{opt}) = \\omega_{opt} - 1 \\approx 0.82$.\n3. כדי להקטין את השגיאה פי $10^{-4}$, שיטת גאוס-סיידל דורשת מעל 1000 איטרציות, בעוד ש-SOR אופטימלי דורש 45 בלבד!'
      },
      {
        id: 'def-nla-6-3',
        title: 'Variational GS & Steepest Descent (SD)',
        titleHe: 'גאוס-סיידל וריאציוני וירידה תלולה (Steepest Descent)',
        simplifiedLogic: 'Solving a symmetric positive definite system $Ax = b$ is exactly the same as finding the lowest point of a bowl-shaped quadratic function. We can minimize this function in two ways:\n\n* **Variational GS:** Minimize the function by walking along one coordinate axis at a time.\n* **Steepest Descent:** Minimize by walking along the overall negative gradient (direction of steepest descent).',
        simplifiedLogicHe: 'פתרון מערכת סימטרית חיובית לחלוטין $Ax = b$ שקול לחלוטין למציאת הנקודה הנמוכה ביותר של פונקציה ריבועית דמויית קערה. אנו יכולים למזער פונקציה זו בשתי דרכים:\n\n* **גאוס-סיידל וריאציוני:** מזעור הפונקציה על ידי הליכה לאורך ציר קואורדינטות יחיד בכל פעם.\n* **ירידה תלולה:** מזעור על ידי הליכה בכיוון הגרדיאנט השלילי הכללי (כיוון הירידה התלולה ביותר).',
        toolboxConnection: 'The optimization perspective of solving linear equations bridges NLA and OPT. Steepest Descent is the grandfather of all unconstrained algorithms in **OPT Chapter 2**!',
        toolboxConnectionHe: 'נקודת המבט של אופטימיזציה על פתרון משוואות ליניאריות מחברת בין NLA ל-OPT. שיטת הירידה התלולה היא האב הקדמון של כל האלגוריתמים ללא אילוצים ב-**OPT פרק 2**!',
        content: 'If $A \\in \\mathbb{R}^{n \\times n}$ is Symmetric Positive Definite, solving $Ax=b$ is equivalent to minimizing the quadratic function:\n$$f(x) = \\frac{1}{2} x^T A x - b^T x$$\n1. Variational GS: Minimizing $f(x)$ sequentially coordinate by coordinate yields exactly the Gauss-Seidel iteration.\n2. Steepest Descent: Minimizes along the negative gradient search direction:\n   $$d^{(k)} = r^{(k)} = b - A x^{(k)} \\implies x^{(k+1)} = x^{(k)} + \\alpha^{(k)} d^{(k)}$$',
        contentHe: 'אם $A \\in \\mathbb{R}^{n \\times n}$ היא מטריצה סימטרית חיובית לחלוטין (SPD), פתרון המערכת $Ax=b$ שקול לחלוטין למזעור הפונקציה הריבועית:\n$$f(x) = \\frac{1}{2} x^T A x - b^T x$$\n1. גאוס-סיידל וריאציוני: מזעור הפונקציה $f(x)$ באופן סדרתי רכיב אחר רכיב מניב בדיוק את איטרציית גאוס-סיידל.\n2. ירידה תלולה: מזעור לאורך כיוון הגרדיאנט השלילי:\n   $$d^{(k)} = r^{(k)} = b - A x^{(k)} \\implies x^{(k+1)} = x^{(k)} + \\alpha^{(k)} d^{(k)}$$',
        proof: 'Proof: Theorem on Steepest Descent Optimal Step Size\nWe prove the optimal step size $\\alpha^{(k)}$ that minimizes the quadratic function $f(x^{(k)} + \\alpha d^{(k)})$ along the descent direction.\n\n1. Let $\\phi(\\alpha) = f(x^{(k)} + \\alpha d^{(k)}) = \\frac{1}{2} (x^{(k)} + \\alpha d^{(k)})^T A (x^{(k)} + \\alpha d^{(k)}) - b^T (x^{(k)} + \\alpha d^{(k)})$.\n2. Differentiate with respect to the scalar $\\alpha$:\n   $$\\phi\'(\\alpha) = (d^{(k)})^T A (x^{(k)} + \\alpha d^{(k)}) - b^T d^{(k)} = \\alpha (d^{(k)})^T A d^{(k)} - (d^{(k)})^T (b - A x^{(k)})$$\n3. Note that the residual $r^{(k)} = b - A x^{(k)}$. Thus:\n   $$\\phi\'(\\alpha) = \\alpha (d^{(k)})^T A d^{(k)} - (d^{(k)})^T r^{(k)}$$\n4. Set the derivative to zero for optimality:\n   $$\\alpha^{(k)} = \\frac{(d^{(k)})^T r^{(k)}}{(d^{(k)})^T A d^{(k)}}$$\n5. Since in standard Steepest Descent, the direction $d^{(k)} = r^{(k)}$, we get the classical optimal step size formula:\n   $$\\alpha^{(k)} = \\frac{(r^{(k)})^T r^{(k)}}{(r^{(k)})^T A r^{(k)}}$$\n   This mathematically guarantees the maximum possible decrease in the objective at each step.',
        proofHe: 'הוכחה: משפט על גודל צעד אופטימלי בירידה תלולה\nנוכיח כי גודל הצעד $\\alpha^{(k)}$ שממזער את הפונקציה הריבועית $f(x^{(k)} + \\alpha d^{(k)})$ לאורך כיוון הירידה הוא אכן הצעד האופטימלי.\n\n1. נגדיר $\\phi(\\alpha) = f(x^{(k)} + \\alpha d^{(k)}) = \\frac{1}{2} (x^{(k)} + \\alpha d^{(k)})^T A (x^{(k)} + \\alpha d^{(k)}) - b^T (x^{(k)} + \\alpha d^{(k)})$.\n2. נגזור ביחס לסקלר $\\alpha$:\n   $$\\phi\'(\\alpha) = (d^{(k)})^T A (x^{(k)} + \\alpha d^{(k)}) - b^T d^{(k)} = \\alpha (d^{(k)})^T A d^{(k)} - (d^{(k)})^T (b - A x^{(k)})$$\n3. נשים לב כי וקטור השארית הוא $r^{(k)} = b - A x^{(k)}$. לכן:\n   $$\\phi\'(\\alpha) = \\alpha (d^{(k)})^T A d^{(k)} - (d^{(k)})^T r^{(k)}$$\n4. נשווה את הנגזרת לאפס לקבלת אופטימליות מקומית:\n   $$\\alpha^{(k)} = \\frac{(d^{(k)})^T r^{(k)}}{(d^{(k)})^T A d^{(k)}}$$\n5. מכיוון שבשיטת הירידה התלולה הסטנדרטית, כיוון החיפוש הוא הצירוף $d^{(k)} = r^{(k)}$, נקבל את נוסחת גודל הצעד האופטימלי הקלאסית:\n   $$\\alpha^{(k)} = \\frac{(r^{(k)})^T r^{(k)}}{(r^{(k)})^T A r^{(k)}}$$\n   נוסחה זו מבטיחה מתמטית את הירידה המקסימלית האפשרית בפונקציית המטרה בכל שלב.',
        example: 'Solve $f(x) = \\frac{1}{2} x^T \\begin{bmatrix} 2 & 0 \\\\ 0 & 4 \\end{bmatrix} x - \\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}^T x$ starting at $x^{(0)} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$.\n1. Residual $r^{(0)} = b - A x^{(0)} = \\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}$. Search direction $d^{(0)} = \\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}$.\n2. Compute $A d^{(0)} = \\begin{bmatrix} 2 & 0 \\\\ 0 & 4 \\end{bmatrix} \\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 16 \\end{bmatrix}$.\n3. Compute optimal step size $\\alpha^{(0)}$:\n   $$\\alpha^{(0)} = \\frac{r^T r}{d^T A d} = \\frac{2^2 + 4^2}{2(4) + 4(16)} = \\frac{20}{8 + 64} = \\frac{20}{72} \\approx 0.278$$\n4. Update: $x^{(1)} = x^{(0)} + \\alpha^{(0)} d^{(0)} \\approx \\begin{bmatrix} 0.556 \\\\ 1.111 \\end{bmatrix}^T$.',
        exampleHe: 'פתור את בעיית המזעור של $f(x) = \\frac{1}{2} x^T \\begin{bmatrix} 2 & 0 \\\\ 0 & 4 \\end{bmatrix} x - \\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}^T x$ החל מהנקודה ההתחלתית $x^{(0)} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$.\n1. שארית: $r^{(0)} = b - A x^{(0)} = \\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}$. כיוון החיפוש: $d^{(0)} = \\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}$.\n2. נחשב את $A d^{(0)} = \\begin{bmatrix} 2 & 0 \\\\ 0 & 4 \\end{bmatrix} \\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 16 \\end{bmatrix}$.\n3. נחשב את גודל הצעד האופטימלי $\\alpha^{(0)}$:\n   $$\\alpha^{(0)} = \\frac{r^T r}{d^T A d} = \\frac{2^2 + 4^2}{2(4) + 4(16)} = \\frac{20}{8 + 64} = \\frac{20}{72} \\approx 0.278$$\n4. עדכון: $x^{(1)} = x^{(0)} + \\alpha^{(0)} d^{(0)} \\approx \\begin{bmatrix} 0.556 \\\\ 1.111 \\end{bmatrix}^T$.'
      },
      {
        id: 'def-nla-6-4',
        title: 'Error vs Residual & General Iterative Convergence',
        titleHe: 'שגיאה מול שארית והתכנסות איטרטיבית כללית',
        simplifiedLogic: 'In numerical solvers, we must separate what we *want* to know from what we *can* compute:\n\n* **Error ($e$):** The distance to the true solution. We cannot calculate this directly because we don\'t know the true solution!\n* **Residual ($r$):** The mismatch in our equation ($b - Ax$). We can calculate this easily.\n\n* **Preconditioning:** Modifies the system so that the transition matrix spectral radius shrinks, driving the error to zero faster.',
        simplifiedLogicHe: 'בפותרים נומריים, עלינו להפריד בין מה שאנו *רוצים* לדעת לבין מה שאנו *יכולים* לחשב:\n\n* **שגיאה ($e$):** המרחק לפתרון האמיתי. איננו יכולים לחשב זאת ישירות מאחר שהפתרון האמיתי אינו ידוע לנו!\n* **שארית ($r$):** חוסר ההתאמה במשוואה ($b - Ax$). קל מאוד לחשב זאת.\n\n* **הכשר מוקדם (Preconditioning):** משנה את המערכת כך שהרדיוס הספקטרלי של מטריצת המעבר מתכווץ, מה שמביא לדעיכת השגיאה לאפס במהירות רבה יותר.',
        toolboxConnection: 'Preconditioning is equivalent to coordinate scaling (pre-scaling) in optimization, which we use in **OPT Chapter 2** to make non-linear functions spherical and easy to solve.',
        toolboxConnectionHe: 'הכשר מוקדם (Preconditioning) שקול לשינוי קנה מידה של קואורדינטות (Scaling) באופטימיזציה, שבו אנו משתמשים ב-**OPT פרק 2** כדי להפוך פונקציות לא-ליניאריות לכדוריות וקלות לפתרון.',
        content: 'In iterative solvers, we define two critical vector quantities at step $k$:\n1. **Error Vector**: $e^{(k)} = x^* - x^{(k)}$ where $x^*$ is the exact solution. This is generally uncomputable since $x^*$ is unknown.\n2. **Residual Vector**: $r^{(k)} = b - A x^{(k)} = A e^{(k)}$ which is easily computed at each step.\n\n**General Preconditioned Iteration Framework**: Most iterative methods can be expressed as:\n$$x^{(k+1)} = x^{(k)} + M^{-1}(b - A x^{(k)})$$\nwhere $M$ is a preconditioner (approximation of $A$ that is cheap to invert). The error propagation is governed by:\n$$e^{(k+1)} = (I - M^{-1}A)e^{(k)}$$\nAsymptotic convergence is guaranteed iff the spectral radius of the iteration matrix $\\rho(I - M^{-1}A) < 1$.',
        contentHe: 'בפותרים איטרטיביים, אנו מגדירים שני וקטורים קריטיים בשלב $k$:\n1. **וקטור השגיאה (Error)**: $e^{(k)} = x^* - x^{(k)}$ כאשר $x^*$ הוא הפתרון המדויק. וקטור זה אינו ניתן לחישוב ישיר מכיוון ש-$x^*$ אינו ידוע.\n2. **וקטור השארית (Residual)**: $r^{(k)} = b - A x^{(k)} = A e^{(k)}$ שניתן לחישוב בקלות בכל שלב.\n\n**תבנית איטרציה מוכשרת כללית**: רוב השיטות האיטרטיביות ניתנות לייצוג כ:\n$$x^{(k+1)} = x^{(k)} + M^{-1}(b - A x^{(k)})$$\nכאשר $M$ הוא המכשיר המוקדם (Preconditioner - קירוב של $A$ שקל להפוך). מעבר השגיאה נשלט על ידי:\n$$e^{(k+1)} = (I - M^{-1}A)e^{(k)}$$\nהתכנסות אסימפטוטית מובטחת אם ורק אם הרדיוס הספקטרלי של מטריצת המעבר מקיים $\\rho(I - M^{-1}A) < 1$.',
        proof: 'Proof: Convergence Rate Theorem\n\nSubtract the fixed-point iteration $x^* = x^* + M^{-1}(b - Ax^*)$ from the general iteration:\n$$x^{(k+1)} - x^* = (x^{(k)} - x^*) - M^{-1}A(x^{(k)} - x^*)$$\n$$-e^{(k+1)} = -e^{(k)} + M^{-1}A e^{(k)} \\implies e^{(k+1)} = (I - M^{-1}A) e^{(k)}$$\nBy induction:\n$$e^{(k)} = (I - M^{-1}A)^k e^{(0)}$$\nFrom linear algebra, for any vector $e^{(0)}$, $\\lim_{k \\to \\infty} e^{(k)} = 0$ if and only if the spectral radius of the transition matrix satisfies $\\rho(I - M^{-1}A) < 1$. The asymptotic rate of convergence is governed by $- \\log_{10}(\\rho(I - M^{-1}A))$. $\\square$',
        proofHe: 'הוכחה: משפט על קצב ההתכנסות\n\nנחסר את משוואת נקודת השבת $x^* = x^* + M^{-1}(b - Ax^*)$ מהאיטרציה הכללית:\n$$x^{(k+1)} - x^* = (x^{(k)} - x^*) - M^{-1}A(x^{(k)} - x^*)$$\n$$-e^{(k+1)} = -e^{(k)} + M^{-1}A e^{(k)} \\implies e^{(k+1)} = (I - M^{-1}A) e^{(k)}$$\nבאמצעות אינדוקציה:\n$$e^{(k)} = (I - M^{-1}A)^k e^{(0)}$$\nמאלגברה ליניארית, לכל וקטור התחלתי $e^{(0)}$, מתקיים $\\lim_{k \\to \\infty} e^{(k)} = 0$ אם ורק אם הרדיוס הספקטרלי של מטריצת המעבר מקיים $\\rho(I - M^{-1}A) < 1$. קצב ההתכנסות האסימפטוטי נשלט על ידי $- \\log_{10}(\\rho(I - M^{-1}A))$. $\\square$',
        example: 'For a 1D system $2x = 4$ ($A=[2]$) with starting point $x^{(0)}=0$ and preconditioner $M=[3]$:\n- Transition value: $T = I - M^{-1}A = 1 - 2/3 = 1/3$.\n- Spectral radius is $\\rho(T) = 1/3 < 1$, guaranteeing convergence.\n- Step 1: $x^{(1)} = 0 + \\frac{1}{3}(4 - 0) = 4/3 \\approx 1.33$. Error: $e^{(1)} = 2 - 1.33 = 0.67$.\n- Step 2: $x^{(2)} = \\frac{4}{3} + \\frac{1}{3}(4 - \\frac{8}{3}) = \\frac{4}{3} + \\frac{4}{9} = \\frac{16}{9} \\approx 1.78$. Error: $e^{(2)} = 2 - 1.78 = 0.22$.\nObserve that the error at each step decreases exactly by a factor of $1/3$, as predicted!',
        exampleHe: 'עבור מערכת חד-ממדית $2x = 4$ ($A=[2]$) עם נקודת התחלה $x^{(0)}=0$ ומכשיר מוקדם $M=[3]$:\n- ערך מטריצת המעבר: $T = I - M^{-1}A = 1 - 2/3 = 1/3$.\n- הרדיוס הספקטרלי הוא $\\rho(T) = 1/3 < 1$, מה שמבטיח התכנסות.\n- שלב 1: $x^{(1)} = 0 + \\frac{1}{3}(4 - 0) = 4/3 \\approx 1.33$. שגיאה: $e^{(1)} = 2 - 1.33 = 0.67$.\n- שלב 2: $x^{(2)} = \\frac{4}{3} + \\frac{1}{3}(4 - \\frac{8}{3}) = \\frac{4}{3} + \\frac{4}{9} = \\frac{16}{9} \\approx 1.78$. שגיאה: $e^{(2)} = 2 - 1.78 = 0.22$.\nניתן לראות כי השגיאה בכל שלב קטנה בדיוק פי $1/3$, כפי שחוזה התיאוריה!'
      },
      {
        id: 'def-nla-6-5',
        title: 'Steepest Descent Zigzagging & Conjugate Gradients',
        titleHe: 'תופעת הזיגזג בירידה תלולה ושיטת הגרדיאנטים הצמודים',
        simplifiedLogic: 'Because Steepest Descent takes steps that are strictly 90-degrees (orthogonal) to each other, it gets trapped in narrow valleys, bouncing back and forth (zigzagging) rather than going down the center.\n\n* **Conjugate Gradients (CG):** Solves this by picking search directions that are "A-conjugate" (orthogonal under the matrix distortion). This ensures that we never take steps in directions we have already solved, guaranteeing exact convergence in at most $n$ steps!',
        simplifiedLogicHe: 'מכיוון ששיטת הירידה התלולה מבצעת צעדים שהם בדיוק ב-90 מעלות (ניצבים) זה לזה, היא נלכדת בעמקים צרים וקשי-מצב, ומדלגת מצד לצד (זיגזג) במקום להתקדם ישירות למרכז.\n\n* **גרדיאנטים צמודים (CG):** פותרת זאת על ידי בחירת כיווני חיפוש שהם צמודים ביחס ל-$A$ (אורתוגונליים תחת עיוות המטריצה). תנאי זה מבטיח שלעולם לא נבצע צעדים בכיוונים שכבר פתרנו, ומבטיח התכנסות מדויקת לפתרון תוך לכל היותר $n$ שלבים!',
        toolboxConnection: 'Conjugate Gradients is the exact engine behind the Quasi-Newton solvers in **OPT Chapter 2**, representing the peak of quadratic system solver technology.',
        toolboxConnectionHe: 'שיטת הגרדיאנטים הצמודים היא המנוע העומד מאחורי פותרי קוואזי-ניוטון ב-**OPT פרק 2**, ומייצגת את הפסגה של טכנולוגיית פותרי המערכות הריבועיות.',
        content: '**Zigzag Effect in Steepest Descent**: In Steepest Descent, consecutive search directions are mathematically orthogonal:\n$$\\langle d^{(k+1)}, d^{(k)} \\rangle = 0$$\nIn poorly conditioned narrow valleys (high $\\kappa(A)$), this causes the solver to make extremely slow, zigzagging progress, wasting hundreds of iterations.\n\n**Conjugate Gradient (CG) Method**: Resolves the zigzagging by choosing search directions $p^{(k)}$ that are $A$-conjugate (orthogonal in the energy inner product):\n$$\\langle p^{(j)}, A p^{(i)} \\rangle = 0 \\quad \\forall i \\neq j$$\n**CG Convergence Bound**: In the energy M-norm induced by $A$, the error decreases as:\n$$\\|e^{(k)}\\|_A \\leq 2 \\left( \\frac{\\sqrt{\\kappa(A)} - 1}{\\sqrt{\\kappa(A)} + 1} \\right)^k \\|e^{(0)}\\|_A$$\nThis is dramatically faster than SD, which relies on the unsquarerooted condition number.',
        contentHe: '**תופעת הזיגזג בירידה תלולה (SD)**: בשיטת הירידה התלולה, כיווני חיפוש עוקבים הם ניצבים מתמטית:\n$$\\langle d^{(k+1)}, d^{(k)} \\rangle = 0$$\nבעמקים צרים בעלי מספר מצב גרוע (גבוה $\\kappa(A)$), תופעה זו גורמת לפותר לבצע התקדמות איטית ביותר בזיגזג ולבזבז מאות איטרציות.\n\n**שיטת הגרדיאנטים הצמודים (CG)**: פותרת את בעיית הזיגזג על ידי בחירת כיווני חיפוש $p^{(k)}$ שהם צמודים ביחס ל-$A$ (אורתוגונליים במכפלה הפנימית המושרה על ידי המטריצה):\n$$\\langle p^{(j)}, A p^{(i)} \\rangle = 0 \\quad \\forall i \\neq j$$\n**חסם התכנסות CG**: בנורמת האנרגיה $M$-norm המושרה על ידי $A$, השגיאה קטנה לפי החסם:\n$$\\|e^{(k)}\\|_A \\leq 2 \\left( \\frac{\\sqrt{\\kappa(A)} - 1}{\\sqrt{\\kappa(A)} + 1} \\right)^k \\|e^{(0)}\\|_A$$\nקצב זה מהיר דרמטית מירידה תלולה, המסתמכת על מספר המצב ללא שורש ריבועי.',
        proof: 'Proof: Orthogonality of SD Search Directions\n\nIn Steepest Descent, the search direction is the residual: $d^{(k)} = r^{(k)} = b - Ax^{(k)}$. The update is $x^{(k+1)} = x^{(k)} + \\alpha^{(k)} r^{(k)}$, where $\\alpha^{(k)}$ minimizes $f(x^{(k)} + \\alpha r^{(k)})$.\n\nLet $\\phi(\\alpha) = f(x^{(k)} + \\alpha r^{(k)})$. At the minimum, the derivative is zero:\n$$\\frac{d}{d\\alpha} f(x^{(k)} + \\alpha r^{(k)}) = \\nabla f(x^{(k+1)})^T r^{(k)} = -(r^{(k+1)})^T r^{(k)} = 0$$\nSince the next search direction is $d^{(k+1)} = r^{(k+1)}$, this proves:\n$$\\langle d^{(k+1)}, d^{(k)} \\rangle = (r^{(k+1)})^T r^{(k)} = 0 \\quad \\square$$',
        proofHe: 'הוכחה: אורתוגונליות של כיווני החיפוש בירידה תלולה\n\nבירידה תלולה, כיוון החיפוש הוא השארית: $d^{(k)} = r^{(k)} = b - Ax^{(k)}$. העדכון הוא $x^{(k+1)} = x^{(k)} + \\alpha^{(k)} r^{(k)}$, כאשר $\\alpha^{(k)}$ ממזער את $f(x^{(k)} + \\alpha r^{(k)})$.\n\nנגדיר $\\phi(\\alpha) = f(x^{(k)} + \\alpha r^{(k)})$. בנקודת המינימום, הנגזרת היא אפס:\n$$\\frac{d}{d\\alpha} f(x^{(k)} + \\alpha r^{(k)}) = \\nabla f(x^{(k+1)})^T r^{(k)} = -(r^{(k+1)})^T r^{(k)} = 0$$\nמאחר שכיוון החיפוש הבא הוא $d^{(k+1)} = r^{(k+1)}$, הדבר מוכיח כי:\n$$\\langle d^{(k+1)}, d^{(k)} \\rangle = (r^{(k+1)})^T r^{(k)} = 0 \\quad \\square$$',
        example: 'Let $A = \\begin{bmatrix} 10 & 0 \\\\ 0 & 1 \\end{bmatrix}$ (ill-conditioned, $\\kappa(A) = 10$).\n- Steepest Descent convergence rate: $\\rho \\approx \\frac{10-1}{10+1} = \\frac{9}{11} \\approx 0.82$ (slow convergence).\n- Conjugate Gradient convergence rate: $\\rho_{CG} \\approx \\frac{\\sqrt{10}-1}{\\sqrt{10}+1} = \\frac{3.16-1}{3.16+1} = \\frac{2.16}{4.16} \\approx 0.52$ (much faster convergence!).\nFurthermore, CG is guaranteed to converge to the exact solution in at most 2 iterations (since the dimension $n=2$), whereas SD takes over 50 iterations to reach comparable accuracy.',
        exampleHe: 'תהי $A = \\begin{bmatrix} 10 & 0 \\\\ 0 & 1 \\end{bmatrix}$ (מספר מצב גרוע, $\\kappa(A) = 10$).\n- קצב התכנסות של ירידה תלולה (SD): $\\rho \\approx \\frac{10-1}{10+1} = \\frac{9}{11} \\approx 0.82$ (התכנסות איטית).\n- קצב התכנסות של גרדיאנטים צמודים (CG): $\\rho_{CG} \\approx \\frac{\\sqrt{10}-1}{\\sqrt{10}+1} = \\frac{3.16-1}{3.16+1} = \\frac{2.16}{4.16} \\approx 0.52$ (התכנסות מהירה בהרבה!).\nיתרה מכך, שיטת CG מובטחת להתכנס לפתרון המדויק בתוך 2 איטרציות לכל היותר (מאחר שהממד הוא $n=2$), בעוד שירידה תלולה דורשת מעל 50 איטרציות להשגת דיוק דומה.'
      }
    ],
    quiz: [
      {
        question: 'According to Kahan\'s Theorem, which range of the relaxation parameter ω makes SOR convergence mathematically possible?',
        questionHe: 'על פי משפט כהן (Kahan\'s Theorem), איזה טווח של פרמטר ההרפיה ω הופך את התכנסות שיטת SOR לאפשרית מתמטית?',
        options: [
          'ω > 1',
          '0 < ω < 2',
          '-1 < ω < 1',
          'Any real number.'
        ],
        optionsHe: [
          'ω > 1',
          '0 < ω < 2',
          '-1 < ω < 1',
          'כל מספר ממשי.'
        ],
        correctAnswerIndex: 1,
        explanation: 'Kahan\'s theorem proves that the product of the SOR eigenvalues is (1-ω)^n. For all eigenvalues to be under 1, we must have |1-ω| < 1, which restricts ω strictly to (0, 2).',
        explanationHe: 'משפט כהן מוכיח כי מכפלת הערכים העצמיים של SOR היא (1-ω)^n. על מנת שכל הערכים העצמיים יהיו קטנים מ-1 בערכם המוחלט, חייב להתקיים |1-ω| < 1, מה שמגביל את ω באופן קשיח לטווח (0, 2).'
      },
      {
        question: 'How is the optimal step size α^(k) computed in the quadratic Steepest Descent algorithm?',
        questionHe: 'כיצד מחושב גודל הצעד האופטימלי α^(k) באלגוריתם הירידה התלולה הריבועי?',
        options: [
          'By setting α to a constant value like 0.01.',
          'Using the Rayleigh-quotient styled formula α = (r^T r) / (r^T A r), which exactly minimizes the objective along the search direction.',
          'By dividing the iteration count by 10.',
          'Using the largest singular value of the matrix.'
        ],
        optionsHe: [
          'על ידי קביעת α לערך קבוע כגון 0.01.',
          'באמצעות נוסחת מנה בסגנון ריילי α = (r^T r) / (r^T A r), הממזערת בדיוק את פונקציית המטרה לאורך כיוון החיפוש.',
          'על ידי חלוקת מספר האיטרציות ב-10.',
          'באמצעות הערך הסינגולרי הגדול ביותר של המטריצה.'
        ],
        correctAnswerIndex: 1,
        explanation: 'This formula is derived analytically by setting the 1-D derivative along the line of search to zero, guaranteeing optimal local energy reduction.',
        explanationHe: 'נוסחה זו נגזרת אנליטית על ידי השוואת הנגזרת החד-ממדית לאורך קו החיפוש לאפס, מה שמבטיח הפחתת אנרגיה מקומית אופטימלית.'
      }
    ]
  },
{
    id: 'opt-1',
    courseId: 'opt',
    chapterNumber: '1',
    title: 'Background & Convexity',
    titleHe: 'פרק 1: רקע וקמירות',
    intro: 'Mathematical optimization consists of finding a point $x^*$ that minimizes or maximizes an objective function $f(x)$. This chapter covers multivariate Taylor expansions, derivatives of vectors and matrices (gradients, Hessians, Jacobians), and the foundational mathematics of convex sets and convex functions.',
    introHe: 'אופטימיזציה מתמטית עוסקת במציאת נקודה $x^*$ שממזערת או ממקסמת פונקציית מטרה $f(x)$. פרק זה מכסה פיתוחי טיילור רב-ממדיים, נגזרות של וקטורים ומטריצות (גרדיאנטים, הסיאנים, יעקוביאנים), ואת המתמטיקה הבסיסית של קבוצות ופונקציות קמורות.',
    motivation: 'Convex optimization is the absolute "gold standard" in numerical modeling. If a problem is convex, we are mathematically guaranteed that any local minimum is the absolute global minimum, allowing us to find the best possible solution without getting trapped in local valley traps.',
    motivationHe: 'אופטימיזציה קמורה היא "תקן הזהב" המוחלט במידול נומרי. אם הבעיה היא קמורה, אנו מובטחים מתמטית שכל מינימום מקומי הוא המינימום הגלובלי המוחלט, מה שמפשר לנו למצוא את הפתרון הטוב ביותר האפשרי מבלי להילכד במלכודות של עמקים מקומיים.',
    definitions: [
      {
        id: 'def-opt-1-1',
        title: 'Taylor Expansions & Derivatives',
        titleHe: 'פיתוחי טיילור ונגזרות רב-ממדיות',
        simplifiedLogic: 'Multi-dimensional Taylor expansions model complex non-linear functions locally using linear slopes (Gradient vector $\\nabla f$) and second-order curvatures (Hessian matrix $\\nabla^2 f$).\n\n**Linear vs. Quadratic Modeling:**\n* **1st-Order Taylor:** $f(x + \\epsilon) \\approx f(x) + \\nabla f^T \\epsilon$ (Flat plane approximation)\n* **2nd-Order Taylor:** $f(x + \\epsilon) \\approx f(x) + \\nabla f^T \\epsilon + \\frac{1}{2} \\epsilon^T H \\epsilon$ (Quadratic bowl/saddle approximation)',
        simplifiedLogicHe: 'פיתוחי טיילור רב-ממדיים ממדלים פונקציות לא-ליניאריות מורכבות באופן מקומי על ידי שימוש בשיפועים ליניאריים (וקטור הגרדיאנט $\\nabla f$) ועקמומיות מסדר שני (מטריצת ההסיאן $\\nabla^2 f$).\n\n**מידול ליניארי מול ריבועי:**\n* **טיילור מסדר ראשון:** $f(x + \\epsilon) \\approx f(x) + \\nabla f^T \\epsilon$ (קירוב של מישור שטוח)\n* **טיילור מסדר שני:** $f(x + \\epsilon) \\approx f(x) + \\nabla f^T \\epsilon + \\frac{1}{2} \\epsilon^T H \\epsilon$ (קירוב קערה ריבועית או אוכף)',
        toolboxConnection: 'The Hessian matrix $H$ must be Symmetric Positive Definite (SPD) for its eigenvalues to represent positive curvature, directly linking back to energy norms in **NLA Chapter 1**!',
        toolboxConnectionHe: 'מטריצת ההסיאן $H$ חייבת להיות סימטרית וחיובית לחלוטין (SPD) כדי שערכיה העצמיים ייצגו עקמומיות חיובית, מה שקושר אותה ישירות לנורמות אנרגיה ב-**NLA פרק 1**!',
        keyTakeaway: 'Taylor expansions locally linearize or quadratize complex landscapes, providing the maps that optimization solvers navigate.',
        keyTakeawayHe: 'פיתוחי טיילור מציגים קירוב ליניארי או ריבועי מקומי של פונקציות מורכבות, ומספקים את המפות שבהן פותרי אופטימיזציה ניווטים.',
        content: '1. Multivariate Taylor Expansion: A twice continuously differentiable function $f: \\mathbb{R}^n \\to \\mathbb{R}$ can be modeled locally around $x$ as:\n   $$f(x + \\epsilon) = f(x) + \\langle \\nabla f(x), \\epsilon \\rangle + \\frac{1}{2} \\langle \\epsilon, \\nabla^2 f(x) \\epsilon \\rangle + O(\\|\\epsilon\\|^3)$$\n   where $\\nabla f(x) \\in \\mathbb{R}^n$ is the gradient vector, and $\\nabla^2 f(x) = H \\in \\mathbb{R}^{n \\times n}$ is the symmetric Hessian matrix containing second-order partial derivatives:\n   $$H_{ij} = \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}$$\n2. Jacobian Matrix: For a vector-valued function $f: \\mathbb{R}^n \\to \\mathbb{R}^m$, the Jacobian matrix $J \\in \\mathbb{R}^{m \\times n}$ contains the row gradients of each coordinate function:\n   $$J_{ij} = \\frac{\\partial f_i}{\\partial x_j} \\implies f(x + \\epsilon) - f(x) \\approx J \\epsilon$$',
        contentHe: '1. פיתוח טיילור רב-ממדי: פונקציה $f: \\mathbb{R}^n \\to \\mathbb{R}$ הגזירה ברציפות פעמיים ניתנת למידול מקומי סביב הנקודה $x$ כ:\n   $$f(x + \\epsilon) = f(x) + \\langle \\nabla f(x), \\epsilon \\rangle + \\frac{1}{2} \\langle \\epsilon, \\nabla^2 f(x) \\epsilon \\rangle + O(\\|\\epsilon\\|^3)$$\n   כאשר $\\nabla f(x) \\in \\mathbb{R}^n$ הוא וקטור הגרדיאנט, ו-$\\nabla^2 f(x) = H \\in \\mathbb{R}^{n \\times n}$ היא מטריצת ההסיאן הסימטרית המכילה את הנגזרות החלקיות מסדר שני:\n   $$H_{ij} = \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}$$\n2. מטריצת היעקוביאן (Jacobian Matrix): עבור פונקציה וקטורית $f: \\mathbb{R}^n \\to \\mathbb{R}^m$, מטריצת היעקוביאן $J \\in \\mathbb{R}^{m \\times n}$ מכילה את הגרדיאנטים של כל פונקציית רכיב בשורותיה:\n   $$J_{ij} = \\frac{\\partial f_i}{\\partial x_j} \\implies f(x + \\epsilon) - f(x) \\approx J \\epsilon$$',
        proof: 'Proof: Jacobian of standard functions\n1. Let $f(x) = Ax$ for $A \\in \\mathbb{R}^{m \\times n}$ and $x \\in \\mathbb{R}^n$.\n   - Expand the perturbation:\n     $$\\delta f = f(x + \\epsilon) - f(x) = A(x + \\epsilon) - Ax = A \\epsilon$$\n   - Since $\\delta f = J \\epsilon$, it is clear that the Jacobian of $Ax$ is exactly $J = A$.\n2. Let $f(x) = \\phi(x)$, where $\\phi$ is a scalar function applied element-wise to the vector $x$, so $f_i(x) = \\phi(x_i)$.\n   - The Taylor expansion of each component is:\n     $$f_i(x_i + \\epsilon_i) - f_i(x_i) \\approx \\phi\'(x_i) \\epsilon_i$$\n   - Gathering this into vector form:\n     $$\\delta f \\approx \\text{diag}(\\phi\'(x)) \\epsilon$$\n   - Thus, the Jacobian of element-wise function application is a diagonal matrix $J = \\text{diag}(\\phi\'(x))$, where $J_{ii} = \\phi\'(x_i)$.',
        proofHe: 'הוכחה: יעקוביאן של פונקציות סטנדרטיות\n1. תהי $f(x) = Ax$ כאשר $A \\in \\mathbb{R}^{m \\times n}$ ו-$x \\in \\mathbb{R}^n$.\n   - נפתח את השינוי (הפרעה):\n     $$\\delta f = f(x + \\epsilon) - f(x) = A(x + \\epsilon) - Ax = A \\epsilon$$\n   - מכיוון שמתקיים $\\delta f = J \\epsilon$, ברור כי היעקוביאן של $Ax$ הוא בדיוק $J = A$.\n2. תהי $f(x) = \\phi(x)$, כאשר $\\phi$ היא פונקציה סקלרית המופעלת איבר-איבר על הוקטור $x$, כלומר $f_i(x) = \\phi(x_i)$.\n   - פיתוח טיילור של כל רכיב הוא:\n     $$f_i(x_i + \\epsilon_i) - f_i(x_i) \\approx \\phi\'(x_i) \\epsilon_i$$\n   - נקבץ זאת לצורה וקטורית:\n     $$\\delta f \\approx \\text{diag}(\\phi\'(x)) \\epsilon$$\n   - לכן, היעקוביאן של הפעלת פונקציה איבר-איבר הוא מטריצה אלכסונית $J = \\text{diag}(\\phi\'(x))$, כאשר $J_{ii} = \\phi\'(x_i)$.',
        example: 'Let $f(x, y) = x^2 + 3xy$. Find the gradient and Hessian at $(1, 2)$.\n1. Gradient vector:\n   $$\\nabla f = \\begin{bmatrix} \\frac{\\partial f}{\\partial x} \\\\ \\frac{\\partial f}{\\partial y} \\end{bmatrix} = \\begin{bmatrix} 2x + 3y \\\\ 3x \\end{bmatrix} \\implies \\nabla f(1, 2) = \\begin{bmatrix} 2(1) + 3(2) \\\\ 3(1) \\end{bmatrix} = \\begin{bmatrix} 8 \\\\ 3 \\end{bmatrix}$$\n2. Hessian matrix:\n   $$\\nabla^2 f = \\begin{bmatrix} \\frac{\\partial^2 f}{\\partial x^2} & \\frac{\\partial^2 f}{\\partial x \\partial y} \\\\ \\frac{\\partial^2 f}{\\partial y \\partial x} & \\frac{\\partial^2 f}{\\partial y^2} \\end{bmatrix} = \\begin{bmatrix} 2 & 3 \\\\ 3 & 0 \\end{bmatrix}$$\nThe Hessian is constant across all points, with determinant $\\det(H) = 0 - 9 = -9 < 0$, showing this is a saddle point.',
        exampleHe: 'תהי $f(x, y) = x^2 + 3xy$. מצא את הגרדיאנט וההסיאן בנקודה $(1, 2)$.\n1. וקטור הגרדיאנט:\n   $$\\nabla f = \\begin{bmatrix} \\frac{\\partial f}{\\partial x} \\\\ \\frac{\\partial f}{\\partial y} \\end{bmatrix} = \\begin{bmatrix} 2x + 3y \\\\ 3x \\end{bmatrix} \\implies \\nabla f(1, 2) = \\begin{bmatrix} 2(1) + 3(2) \\\\ 3(1) \\end{bmatrix} = \\begin{bmatrix} 8 \\\\ 3 \\end{bmatrix}$$\n2. מטריצת ההסיאן:\n   $$\\nabla^2 f = \\begin{bmatrix} \\frac{\\partial^2 f}{\\partial x^2} & \\frac{\\partial^2 f}{\\partial x \\partial y} \\\\ \\frac{\\partial^2 f}{\\partial y \\partial x} & \\frac{\\partial^2 f}{\\partial y^2} \\end{bmatrix} = \\begin{bmatrix} 2 & 3 \\\\ 3 & 0 \\end{bmatrix}$$\nההסיאן קבוע בכל הנקודות, והדטרמיננטה שלו היא $\\det(H) = 0 - 9 = -9 < 0$, מה שמראה כי זוהי נקודת אוכף (Saddle point).'
      },
      {
        id: 'def-opt-1-2',
        title: 'Convex Sets & Functions',
        titleHe: 'קבוצות ופונקציות קמורות',
        simplifiedLogic: 'Convexity is the absolute "gold standard" in numerical modeling. In a convex set, the straight line between any two points lies entirely inside. In a convex function, the curve bends upwards everywhere, guaranteeing that any local minimum is mathematically the absolute global minimum.\n\n**Visual Geometry Map:**\n* **Convex Function:** $\\theta f(x) + (1-\\theta)f(y) \\geq f(\\theta x + (1-\\theta)y)$ (Secant line lies above the function curve)\n* **Convex Hessian:** $\\nabla^2 f(x) \\succeq 0$ (Curvature is non-negative in all directions)',
        simplifiedLogicHe: 'קמירות היא "תקן הזהב" באופטימיזציה נומרית. בקבוצה קמורה, הקו הישר בין כל שתי נקודות נמצא כולו בתוך הקבוצה. בפונקציה קמורה, העקומה מתעגלת כלפי מעלה בכל כיוון, מה שמבטיח מתמטית שכל מינימום מקומי הוא המינימום הגלובלי המוחלט.\n\n**מיפוי גיאומטרי:**\n* **פונקציה קמורה:** $\\theta f(x) + (1-\\theta)f(y) \\geq f(\\theta x + (1-\\theta)y)$ (מיתר המחבר שתי נקודות נמצא מעל העקומה)\n* **הסיאן קמור:** $\\nabla^2 f(x) \\succeq 0$ (העקמומיות אינה שלילית בכל הכיוונים)',
        toolboxConnection: 'Proving that a matrix is positive semi-definite ($\\nabla^2 f \\succeq 0$) relies on eigenvalue verification tests learned in **NLA Chapter 5**!',
        toolboxConnectionHe: 'הוכחה שמטריצה היא חיובית חצי-לחלוטין ($\\nabla^2 f \\succeq 0$) מבוססת על בדיקות אימות של ערכים עצמיים שנלמדו ב-**NLA פרק 5**!',
        keyTakeaway: 'Convexity guarantees that optimization solvers will not get trapped in suboptimal local valleys.',
        keyTakeawayHe: 'קמירות מבטיחה שפותרי אופטימיזציה לא יילכדו בעמקים מקומיים שאינם אופטימליים.',
        content: '1. Convex Set: A set $C \\subseteq \\mathbb{R}^n$ is convex if for any $x, y \\in C$ and $\\theta \\in [0, 1]$:\n   $$\\theta x + (1 - \\theta) y \\in C$$\n2. Convex Function: A function $f: C \\to \\mathbb{R}$ on a convex set $C$ is convex if for all $x, y \\in C$ and $\\theta \\in [0, 1]$:\n   $$f(\\theta x + (1 - \\theta) y) \\leq \\theta f(x) + (1 - \\theta) f(y)$$\n\nAlternative definitions for twice differentiable functions:\n- First-Order: $f(x_1) \\geq f(x_2) + \\langle \\nabla f(x_2), x_1 - x_2 \\rangle$\n- Second-Order: The Hessian $\\nabla^2 f(x) \\succeq 0$ (positive semi-definite) for all $x$.',
        contentHe: '1. קבוצה קמורה: קבוצה $C \\subseteq \\mathbb{R}^n$ היא קמורה אם לכל $x, y \\in C$ ו-$\\theta \\in [0, 1]$ מתקיים:\n   $$\\theta x + (1 - \\theta) y \\in C$$\n2. פונקציה קמורה: פונקציה $f: C \\to \\mathbb{R}$ המוגדרת מעל קבוצה קמורה $C$ היא קמורה אם לכל $x, y \\in C$ ו-$\\theta \\in [0, 1]$ מתקיים:\n   $$f(\\theta x + (1 - \\theta) y) \\leq \\theta f(x) + (1 - \\theta) f(y)$$\n\nהגדרות שקולות עבור פונקציות גזירות ברציפות:\n- סדר ראשון: $f(x_1) \\geq f(x_2) + \\langle \\nabla f(x_2), x_1 - x_2 \\rangle$\n- סדר שני: מטריצת ההסיאן $\\nabla^2 f(x) \\succeq 0$ (חיובית חצי-לחלוטין) לכל $x$.',
        proof: 'Proof: Theorem on Local Minima of Convex Functions\nTheorem: If $f$ is a convex function over a convex region $C$, any local minimizer $x^*$ is a global minimizer of $f$.\n\nProof by Contradiction:\n1. Suppose $x^*$ is a local minimizer but NOT a global minimizer. Then there exists some point $y \\in C$ such that $f(y) < f(x^*)$.\n2. Since $C$ is convex, the line segment $z(\\theta) = \\theta y + (1 - \\theta) x^*$ must lie in $C$ for all $\\theta \\in [0, 1]$.\n3. Since $f$ is convex, we evaluate $f(z(\\theta))$:\n   $$f(z(\\theta)) = f(\\theta y + (1 - \\theta) x^*) \\leq \\theta f(y) + (1 - \\theta) f(x^*)$$\n4. Substitute our assumption $f(y) < f(x^*)$ into this inequality:\n   $$f(z(\\theta)) < \\theta f(x^*) + (1 - \\theta) f(x^*) = f(x^*)$$\n   So, $f(z(\\theta)) < f(x^*)$ for all $\\theta > 0$.\n5. As $\\theta \\to 0$, $z(\\theta) = \\theta y + (1 - \\theta) x^* \\to x^*$.\n6. This means in any arbitrarily small neighborhood around $x^*$, we can find a point $z(\\theta)$ with a strictly smaller function value than $f(x^*)$.\n7. This directly contradicts the assumption that $x^*$ is a local minimum. Therefore, $x^*$ must be a global minimizer.',
        proofHe: 'הוכחה: משפט על מינימום מקומי של פונקציות קמורות\nמשפט: אם $f$ היא פונקציה קמורה מעל תחום קמור $C$, אזי כל נקודת מינימום מקומי $x^*$ היא גם מינימום גלובלי של $f$.\n\nהוכחה בדרך השלילה:\n1. נניח בשלילה ש-$x^*$ היא נקודת מינימום מקומי אך אינה מינימום גלובלי. לכן קיימת נקודה כלשהי $y \\in C$ כך שמתקיים $f(y) < f(x^*)$.\n2. מכיוון ש-$C$ היא קבוצה קמורה, קטע הקו הישר $z(\\theta) = \\theta y + (1 - \\theta) x^*$ חייב להימצא ב-$C$ לכל $\\theta \\in [0, 1]$.\n3. מכיוון ש-$f$ היא קמורה, נחשב את $f(z(\\theta))$:\n   $$f(z(\\theta)) = f(\\theta y + (1 - \\theta) x^*) \\leq \\theta f(y) + (1 - \\theta) f(x^*)$$\n4. נציב את ההנחה שלנו $f(y) < f(x^*)$ לתוך אי-השוויון הזה:\n   $$f(z(\\theta)) < \\theta f(x^*) + (1 - \\theta) f(x^*) = f(x^*)$$\n   לכן, $f(z(\\theta)) < f(x^*)$ לכל $\\theta > 0$.\n5. כאשר $\\theta \\to 0$, מתקיים $z(\\theta) = \\theta y + (1 - \\theta) x^* \\to x^*$.\n6. פירוש הדבר הוא שבכל סביבה קטנה כרצוננו סביב $x^*$, אנו יכולים למצוא נקודה $z(\\theta)$ בעלת ערך פונקציה קטן ממש מ-$f(x^*)$.\n7. זה עומד בסתירה מוחלטת להנחה ש-$x^*$ היא נקודת מינימום מקומי. לכן, $x^*$ חייבת להיות נקודת מינימום גלובלי.',
        example: 'Prove that $f(x) = x^2$ is convex over $\\mathbb{R}$ using the second-order definition.\n1. Find the second derivative: $f\'(x) = 2x \\implies f\'\'(x) = 2$.\n2. Since $f\'\'(x) = 2 > 0$ for all $x \\in \\mathbb{R}$, the Hessian is strictly positive definite everywhere.\n3. By the second-order condition, $f(x) = x^2$ is mathematically convex.',
        exampleHe: 'הוכח ש-$f(x) = x^2$ היא פונקציה קמורה מעל $\\mathbb{R}$ באמצעות הגדרת הסדר השני.\n1. נמצא את הנגזרת השנייה: $f\'(x) = 2x \\implies f\'\'(x) = 2$.\n2. מכיוון ש-$f\'\'(x) = 2 > 0$ לכל $x \\in \\mathbb{R}$, ההסיאן הוא חיובי לחלוטין בכל מקום.\n3. על פי תנאי הסדר השני, $f(x) = x^2$ היא קמורה מתמטית.'
      },
      {
        id: 'def-opt-1-3',
        title: 'Optimality Conditions & Strongly Convex Functions',
        titleHe: 'תנאי אופטימליות ופונקציות קמורות חזק',
        simplifiedLogic: 'How do we mathematically verify if a point is a local minimum? We use three conditions:\n1. **FONC (First-Order Necessary):** Gradient must be zero (flat slope).\n2. **SONC (Second-Order Necessary):** Hessian must be Positive Semi-Definite (non-negative curvature).\n3. **SOSC (Second-Order Sufficient):** Gradient is zero AND Hessian is Positive Definite (strict positive bowl).\n\n**Strong convexity** provides a strict lower bound on curvature, guaranteeing extremely stable convergence rates for iterative algorithms.',
        simplifiedLogicHe: 'כיצד אנו מוודאים מתמטית שנקודה היא מינימום מקומי? אנו משתמשים בשלושה תנאים:\n1. **FONC (תנאי הכרחי מסדר ראשון):** הגרדיאנט חייב להיות אפס (שיפוע שטוח).\n2. **SONC (תנאי הכרחי מסדר שני):** ההסיאן חייב להיות חיובי חצי-לחלוטין (עקמומיות לא שלילית).\n3. **SOSC (תנאי מספיק מסדר שני):** הגרדיאנט הוא אפס וההסיאן הוא חיובי לחלוטין (קערה בעלת עקמומיות חיובית קשיחה).\n\n**קמירות חזקה** מספקת חסם תחתון קשיח לעקמומיות, ובכך מבטיחה קצב התכנסות יציב ומהיר במיוחד עבור אלגוריתמים איטרטיביים.',
        toolboxConnection: 'The quadratic form boundary in strongly convex functions is identical to the energy norm metric in **NLA Chapter 1**!',
        toolboxConnectionHe: 'חסם התבנית הריבועית בפונקציות קמורות חזק זהה לחלוטין למדד נורמת האנרגיה שנלמד ב-**NLA פרק 1**!',
        keyTakeaway: 'SOSC mathematically guarantees a local minimum by verifying a flat slope inside a strictly upward-curving bowl.',
        keyTakeawayHe: 'תנאי SOSC מבטיח מתמטית מינימום מקומי על ידי אימות שיפוע שטוח בתוך קערה המתעגלת כלפי מעלה.',
        content: '**Optimality Conditions for Unconstrained Minimization**:\nLet $f: \\mathbb{R}^n \\to \\mathbb{R}$ be smooth.\n1. **First-Order Necessary Condition (FONC)**: If $x^*$ is a local minimizer of $f$, then the gradient must vanish:\n   $$\\nabla f(x^*) = 0$$\n2. **Second-Order Necessary Condition (SONC)**: If $x^*$ is a local minimizer of $f$, then the Hessian must be positive semi-definite:\n   $$\\nabla^2 f(x^*) \\succeq 0$$\n3. **Second-Order Sufficient Condition (SOSC)**: If $\\nabla f(x^*) = 0$ and the Hessian is strictly positive definite:\n   $$\\nabla^2 f(x^*) \\succ 0$$\n   then $x^*$ is a strict local minimizer of $f$.\n\n**Strongly Convex Functions**: A function $f$ is $\\mu$-strongly convex ($\\mu > 0$) if it has curvature bounded below by a quadratic:\n$$f(y) \\geq f(x) + \\langle \\nabla f(x), y - x \\rangle + \\frac{\\mu}{2} \\|y - x\\|_2^2$$\n**Descent Direction**: A search direction $d$ is a descent direction if it makes an acute angle with the negative gradient:\n$$\\langle \\nabla f(x), d \\rangle < 0$$',
        contentHe: '**תנאי אופטימליות למזעור ללא אילוצים**:\nתהי $f: \\mathbb{R}^n \\to \\mathbb{R}$ פונקציה חלקה.\n1. **תנאי הכרחי מסדר ראשון (FONC)**: אם $x^*$ היא נקודת מינימום מקומי של $f$, אזי הגרדיאנט חייב להתאפס:\n   $$\\nabla f(x^*) = 0$$\n2. **תנאי הכרחי מסדר שני (SONC)**: אם $x^*$ היא נקודת מינימום מקומי של $f$, אזי מטריצת ההסיאן חייבת להיות חיובית חצי-לחלוטין:\n   $$\\nabla^2 f(x^*) \\succeq 0$$\n3. **תנאי מספיק מסדר שני (SOSC)**: אם $\\nabla f(x^*) = 0$ ומטריצת ההסיאן היא חיובית לחלוטין באופן קשיח:\n   $$\\nabla^2 f(x^*) \\succ 0$$\n   אזי $x^*$ היא נקודת מינימום מקומי חזק של $f$.\n\n**פונקציות קמורות חזק**: פונקציה $f$ היא $\\mu$-קמורה חזק ($\\mu > 0$) אם העקמומיות שלה חסומה מלמטה על ידי פונקציה ריבועית:\n$$f(y) \\geq f(x) + \\langle \\nabla f(x), y - x \\rangle + \\frac{\\mu}{2} \\|y - x\\|_2^2$$\n**כיוון ירידה (Descent Direction)**: כיוון חיפוש $d$ הוא כיוון ירידה אם הוא יוצר זווית חדה עם הגרדיאנט השלילי:\n$$\\langle \\nabla f(x), d \\rangle < 0$$',
        proof: 'Proof: Theorem on SOSC (Second-Order Sufficient Condition)\n\nLet $\\nabla f(x^*) = 0$ and $\\nabla^2 f(x^*) = H \\succ 0$. Since $H$ is positive definite, its smallest eigenvalue $\\lambda_{\\min} > 0$. For any direction $d \\neq 0$:\n$$d^T H d \\geq \\lambda_{\\min} \\|d\\|_2^2$$\nUsing the second-order Taylor expansion around $x^*$ for small $\\epsilon$:\n$$f(x^* + \\epsilon) = f(x^*) + \\langle \\nabla f(x^*), \\epsilon \\rangle + \\frac{1}{2} \\langle \\epsilon, \\nabla^2 f(x^*) \\epsilon \\rangle + o(\\|\\epsilon\\_2^2)$$\nSince $\\nabla f(x^*) = 0$:\n$$f(x^* + \\epsilon) - f(x^*) = \\frac{1}{2} \\epsilon^T H \\epsilon + o(\\|\\epsilon\\|_2^2) \\geq \\frac{\\lambda_{\\min}}{2} \\|\\epsilon\\|_2^2 + o(\\|\\epsilon\\|_2^2)$$\nFor sufficiently small $\\|\\epsilon\\|_2$, the quadratic term dominates the higher-order terms, so:\n$$f(x^* + \\epsilon) - f(x^*) > 0 \\implies f(x^* + \\epsilon) > f(x^*)$$\nwhich proves $x^*$ is a strict local minimizer! $\\square$',
        proofHe: 'הוכחה: משפט על תנאי מספיק מסדר שני (SOSC)\n\nיהי $\\nabla f(x^*) = 0$ ו-$\\nabla^2 f(x^*) = H \\succ 0$. מכיוון ש-$H$ היא חיובית לחלוטין, הערך העצמי הקטן ביותר שלה מקיים $\\lambda_{\\min} > 0$. לכל כיוון $d \\neq 0$ מתקיים:\n$$d^T H d \\geq \\lambda_{\\min} \\|d\\|_2^2$$\nנשתמש בפיתוח טיילור מסדר שני סביב $x^*$ עבור הפרעה קטנה $\\epsilon$:\n$$f(x^* + \\epsilon) = f(x^*) + \\langle \\nabla f(x^*), \\epsilon \\rangle + \\frac{1}{2} \\langle \\epsilon, \\nabla^2 f(x^*) \\epsilon \\rangle + o(\\|\\epsilon\\|_2^2)$$\nמכיוון שמתקיים $\\nabla f(x^*) = 0$:\n$$f(x^* + \\epsilon) - f(x^*) = \\frac{1}{2} \\epsilon^T H \\epsilon + o(\\|\\epsilon\\|_2^2) \\geq \\frac{\\lambda_{\\min}}{2} \\|\\epsilon\\|_2^2 + o(\\|\\epsilon\\|_2^2)$$\nעבור $\\|\\epsilon\\|_2$ קטן מספיק, האיבר הריבועי דומיננטי ביחס לאיברים מסדר גבוה יותר, ולכן:\n$$f(x^* + \\epsilon) - f(x^*) > 0 \\implies f(x^* + \\epsilon) > f(x^*)$$\nמה שמוכיח כי $x^*$ היא נקודת מינימום מקומי חזק! $\\square$',
        example: 'Let $f(x, y) = x^2 + 2y^2$. Find all stationary points and verify if they are minimizers.\n1. Gradient: $\\nabla f = [2x, 4y]^T$. Set to 0: $2x = 0, 4y = 0 \\implies (x^*, y^*) = (0, 0)$ is the unique stationary point.\n2. Hessian: $\\nabla^2 f = \\begin{bmatrix} 2 & 0 \\\\ 0 & 4 \\end{bmatrix}$.\n3. Since the Hessian is diagonal with positive eigenvalues (2 and 4), it is strictly positive definite ($H \\succ 0$) everywhere.\n4. By the Second-Order Sufficient Condition, $(0,0)$ is a strict local minimizer (and since $f$ is convex, it is the global minimizer).',
        exampleHe: 'תהי $f(x, y) = x^2 + 2y^2$. מצא את כל הנקודות הסטציונריות וקבע האם הן נקודות מינימום.\n1. גרדיאנט: $\\nabla f = [2x, 4y]^T$. נשווה לאפס: $2x = 0, 4y = 0 \\implies (x^*, y^*) = (0, 0)$ היא הנקודה הסטציונרית היחידה.\n2. הסיאן: $\\nabla^2 f = \\begin{bmatrix} 2 & 0 \\\\ 0 & 4 \\end{bmatrix}$.\n3. מכיוון שמטריצת ההסיאן היא אלכסונית עם ערכים עצמיים חיוביים (2 ו-4), היא חיובית לחלוטין ($H \\succ 0$) בכל מקום.\n4. על פי תנאי מספיק מסדר שני, $(0,0)$ היא נקודת מינימום מקומי חזק (ומאחר ש-$f$ קמורה, זהו המינימום הגלובלי המוחלט).'
      }
    ],
    quiz: [
      {
        question: 'Which of the following defines a convex set?',
        questionHe: 'איזו מבין האפשרויות הבאות מגדירה קבוצה קמורה?',
        options: [
          'A set that contains only positive numbers.',
          'A set where the line segment connecting any two points in the set lies entirely within the set.',
          'A set that contains its boundary.',
          'A set shaped like a perfect circle.'
        ],
        optionsHe: [
          'קבוצה המכילה מספרים חיוביים בלבד.',
          'קבוצה שבה קטע הקו הישר המחבר בין כל שתי נקודות בקבוצה נמצא כולו בתוך הקבוצה.',
          'קבוצה המכילה את השפה שלה.',
          'קבוצה בצורה של עיגול מושלם בלבד.'
        ],
        correctAnswerIndex: 1,
        explanation: 'By definition, a set is convex if for any two points in the set, every point on the straight line segment between them is also in the set.',
        explanationHe: 'לפי ההגדרה, קבוצה היא קמורה אם לכל שתי נקודות בקבוצה, כל נקודה על קטע הקו הישר המחבר ביניהן נמצאת גם היא בתוך הקבוצה.'
      },
      {
        question: 'If a function is twice continuously differentiable, how can we mathematically prove that it is convex?',
        questionHe: 'אם פונקציה היא גזירה ברציפות פעמיים, כיצד נוכל להוכיח מתמטית שהיא קמורה?',
        options: [
          'By showing that the gradient is always positive.',
          'By proving that the Hessian matrix is Positive Semi-Definite (∇^2 f(x) ⪰ 0) for all points in its domain.',
          'By showing that the function has no local minimum.',
          'By showing that the function is linear.'
        ],
        optionsHe: [
          'על ידי הוכחה שהגרדיאנט הוא תמיד חיובי.',
          'על ידי הוכחה שמטריצת ההסיאן היא חיובית חצי-לחלוטין (∇^2 f(x) ⪰ 0) לכל הנקודות בתחום הגדרתה.',
          'על ידי הוכחה שלפונקציה אין מינימום מקומי.',
          'על ידי הוכחה שהפונקציה היא ליניארית.'
        ],
        correctAnswerIndex: 1,
        explanation: 'The second-order convexity condition states that a twice-differentiable function is convex if and only if its Hessian matrix is positive semi-definite everywhere, representing non-negative curvature.',
        explanationHe: 'תנאי הקמירות מסדר שני קובע כי פונקציה הגזירה פעמיים היא קמורה אם ורק אם מטריצת ההסיאן שלה היא חיובית חצי-לחלוטין בכל מקום, מה שמייצג עקמומיות שאינה שלילית.'
      }
    ]
  },
{
    id: 'opt-2',
    courseId: 'opt',
    chapterNumber: '2',
    title: 'Iterative Methods for Unconstrained Optimization',
    titleHe: 'פרק 2: שיטות איטרטיביות לאופטימיזציה ללא אילוצים',
    intro: 'In general optimization, we cannot find local minima analytically. This chapter covers the definitive catalog of iterative solvers: Steepest Descent, Newton\'s method, Quasi-Newton, Coordinate Descent, Gauss-Newton for non-linear fitting, Iterative Re-weighted Least Squares (IRLS), and gradient verification.',
    introHe: 'באופטימיזציה כללית, לא ניתן למצוא נקודות מינימום מקומיות באופן אנליטי. פרק זה מכסה את הקטלוג המלא של פותרים איטרטיביים: ירידה תלולה, שיטת ניוטון, קוואזי-ניוטון, ירידת קואורדינטות, גאוס-ניוטון להתאמה לא-ליניארית, ריבועים מינימליים משוקללים איטרטיבית (IRLS), ואימות גרדיאנטים.',
    motivation: 'Whether training massive neural networks or fitting complex physical models, we rely on iterative optimization. Understanding the mathematical trade-offs between linear (Steepest Descent) and quadratic (Newton) methods is the key to writing fast, stable algorithms.',
    motivationHe: 'בין אם אנו מאמנים רשתות נוירונים ענקיות או מתאימים מודלים פיזיקליים מורכבים, אנו מסתמכים על אופטימיזציה איטרטיבית. הבנת הפשרות המתמטיות בין שיטות מסדר ראשון (ירידה תלולה) לשיטות מסדר שני (ניוטון) היא המפתח לכתיבת אלגוריתמים מהירים ויציבים.',
    definitions: [
      {
        id: 'def-opt-2-1',
        title: 'Steepest Descent, Newton & Armijo Backtracking',
        titleHe: 'ירידה תלולה, ניוטון וחיפוש קו ארמיחו',
        simplifiedLogic: 'Unconstrained solvers find minima iteratively. **Steepest Descent** updates along the negative gradient (cheap but slow). **Newton\'s Method** uses the inverse Hessian to adjust steps based on curvature (expensive but converges quadratically). **Armijo Backtracking** dynamically shrinks step sizes to guarantee sufficient descent.\n\n**Visual Summary Comparison:**\n| Method | Iteration Formula | Convergence Rate | Computational Cost per Step |\n| :---: | :---: | :---: | :---: |\n| **Steepest Descent** | $x_{k+1} = x_k - \\alpha_k \\nabla f(x_k)$ | Linear | **Very Cheap** (only gradient needed) |\n| **Newton\'s Method** | $x_{k+1} = x_k - H_k^{-1} \\nabla f(x_k)$ | Quadratic | **Very Expensive** (requires building/inverting Hessian) |',
        simplifiedLogicHe: 'פותרים ללא אילוצים מוצאים נקודות מינימום באופן איטרטיבי. **ירידה תלולה** מעדכנת לאורך הגרדיאנט השלילי (זול חישובית אך איטי). **שיטת ניוטון** משתמשת בהופכי של ההסיאן כדי להתאים את הצעדים לפי העקמומיות (יקר חישובית אך מתכנס ריבועית). **חיפוש קו ארמיחו** מקטין את גודל הצעד באופן דינמי כדי להבטיח ירידה מספקת.\n\n**טבלת השוואה חזותית:**\n| שיטה | נוסחת איטרציה | קצב התכנסות | עלות חישובית לצעד |\n| :---: | :---: | :---: | :---: |\n| **ירידה תלולה** | $x_{k+1} = x_k - \\alpha_k \\nabla f(x_k)$ | ליניארי | **זול מאוד** (רק חישוב גרדיאנט) |\n| **שיטת ניוטון** | $x_{k+1} = x_k - H_k^{-1} \\nabla f(x_k)$ | ריבועי | **יקר מאוד** (דורש בנייה והיפוך של ההסיאן) |',
        toolboxConnection: 'Solving the Newton step $H d = -g$ is a linear system solver task. If the Hessian is ill-conditioned, we must apply preconditioners learned in **NLA Chapter 6**!',
        toolboxConnectionHe: 'פתרון צעד ניוטון $H d = -g$ הוא משימה של פותר מערכות ליניאריות. אם ההסיאן במצב גרוע (ill-conditioned), עלינו להחיל את התנאים המוקדמים (preconditioners) שנלמדו ב-**NLA פרק 6**!',
        keyTakeaway: 'Newton leverages second-order curvature to take direct paths to the minimum, bypassing the slow linear steps of steepest descent.',
        keyTakeawayHe: 'שיטת ניוטון מנצלת עקמומיות מסדר שני כדי לצעוד ישירות אל המינימום, ועוקפת את הצעדים הליניאריים האיטיים של הירידה התלולה.',
        content: '1. Steepest Descent: Update along negative gradient search direction: $x_{k+1} = x_k - \\alpha_k \\nabla f(x_k)$.\n2. Newton\'s Method: Scales step using the inverse Hessian to capture curvature:\n   $$d_N = -\\left( \\nabla^2 f(x_k) \\right)^{-1} \\nabla f(x_k)$$\n3. Armijo Backtracking Line Search: Dynamically shrinks step size $\\alpha_j = \\beta^j \\alpha_0$ ($0 < \\beta < 1$) until sufficient decrease occurs:\n   $$f(x^{(k)} + \\alpha_j d^{(k)}) \\leq f(x^{(k)}) + c \\alpha_j \\langle \\nabla f, d^{(k)} \\rangle \\quad (0 < c < 1)$$',
        contentHe: '1. ירידה תלולה (Steepest Descent): עדכון לאורך כיוון הגרדיאנט השלילי: $x_{k+1} = x_k - \\alpha_k \\nabla f(x_k)$.\n2. שיטת ניוטון (Newton\'s Method): משנה את גודל וכיוון הצעד באמצעות ההסיאן ההופכי כדי להתחשב בעקמומיות:\n   $$d_N = -\\left( \\nabla^2 f(x_k) \\right)^{-1} \\nabla f(x_k)$$\n3. חיפוש קו ארמיחו (Armijo Backtracking Line Search): מקטין באופן דינמי את גודל הצעד $\\alpha_j = \\beta^j \\alpha_0$ ($0 < \\beta < 1$) עד שמתקבלת ירידה מספקת בפונקציית המטרה:\n   $$f(x^{(k)} + \\alpha_j d^{(k)}) \\leq f(x^{(k)}) + c \\alpha_j \\langle \\nabla f, d^{(k)} \\rangle \\quad (0 < c < 1)$$\n',
        proof: 'Proof: Theorem on Newton\'s Quadratic Convergence\nTheorem: Near a local minimum $x^*$ where $\\nabla^2 f(x^*)$ is strictly positive definite and Lipschitz continuous, Newton\'s method converges quadratically.\n\nProof:\n1. Let the error in iteration $k$ be $e_k = x_k - x^*$. The Newton update is:\n   $$e_{k+1} = e_k - [\\nabla^2 f(x_k)]^{-1} \\nabla f(x_k)$$\n2. By Taylor\'s theorem, since $\\nabla f(x^*) = 0$:\n   $$\\nabla f(x_k) = \\nabla f(x_k) - \\nabla f(x^*) = \\int_0^1 \\nabla^2 f(x^* + t e_k) e_k dt$$\n3. Substitute this into the error equation:\n   $$e_{k+1} = e_k - [\\nabla^2 f(x_k)]^{-1} \\int_0^1 \\nabla^2 f(x^* + t e_k) e_k dt$$\n   $$e_{k+1} = [\\nabla^2 f(x_k)]^{-1} \\int_0^1 \\left( \\nabla^2 f(x_k) - \\nabla^2 f(x^* + t e_k) \\right) e_k dt$$\n4. Since the Hessian is Lipschitz continuous, $\\|\\nabla^2 f(x_k) - \\nabla^2 f(x^* + t e_k)\\|_2 \\leq L (1 - t) \\|e_k\\|_2$. Taking norms:\n   $$\\|e_{k+1}\\|_2 \\leq \\|[\\nabla^2 f(x_k)]^{-1}\\|_2 \\int_0^1 L (1 - t) \\|e_k\\|_2^2 dt = \\frac{L}{2} \\|[\\nabla^2 f(x_k)]^{-1}\\|_2 \\cdot \\|e_k\\|_2^2$$\n5. This yields the quadratic error bound $\\|e_{k+1}\\|_2 \\leq C \\|e_k\\|_2^2$. If the error is $0.01$ at step $k$, it will be $0.0001$ at step $k+1$, achieving extremely rapid convergence.',
        proofHe: 'הוכחה: משפט על התכנסות ריבועית של שיטת ניוטון\nמשפט: בסביבת מינימום מקומי $x^*$ שבה מטריצת ההסיאן $\\nabla^2 f(x^*)$ היא חיובית לחלוטין ורציפה לפי ליפשיץ, שיטת ניוטון מתכנסת בקצב ריבועי.\n\nהוכחה:\n1. נסמן את השגיאה באיטרציה $k$ כ-$e_k = x_k - x^*$. עדכון ניוטון מוגדר כ:\n   $$e_{k+1} = e_k - [\\nabla^2 f(x_k)]^{-1} \\nabla f(x_k)$$\n2. לפי משפט טיילור, ומאחר שמתקיים $\\nabla f(x^*) = 0$:\n   $$\\nabla f(x_k) = \\nabla f(x_k) - \\nabla f(x^*) = \\int_0^1 \\nabla^2 f(x^* + t e_k) e_k dt$$\n3. נציב זאת במשוואת השגיאה:\n   $$e_{k+1} = e_k - [\\nabla^2 f(x_k)]^{-1} \\int_0^1 \\nabla^2 f(x^* + t e_k) e_k dt$$\n   $$e_{k+1} = [\\nabla^2 f(x_k)]^{-1} \\int_0^1 \\left( \\nabla^2 f(x_k) - \\nabla^2 f(x^* + t e_k) \\right) e_k dt$$\n4. מכיוון שההסיאן רציף לפי ליפשיץ, מתקיים $\\|\\nabla^2 f(x_k) - \\nabla^2 f(x^* + t e_k)\\|_2 \\leq L (1 - t) \\|e_k\\|_2$. לקיחת נורמות מניבה:\n   $$\\|e_{k+1}\\|_2 \\leq \\|[\\nabla^2 f(x_k)]^{-1}\\|_2 \\int_0^1 L (1 - t) \\|e_k\\|_2^2 dt = \\frac{L}{2} \\|[\\nabla^2 f(x_k)]^{-1}\\|_2 \\cdot \\|e_k\\|_2^2$$\n5. זה מניב את חסם השגיאה הריבועי $\\|e_{k+1}\\|_2 \\leq C \\|e_k\\|_2^2$. אם השגיאה היא $0.01$ בשלב $k$, היא תהיה $0.0001$ בשלב $k+1$, מה שמבטיח התכנסות מהירה במיוחד!',
        example: 'Minimize $f(x) = (1 - x_1)^2 + 5(x_2 - x_1^2)^2$ (Rosenbrock "Banana" function) starting from $[-1.4, 2.0]^T$.\n- Steepest Descent: Takes hundreds of small, zigzagging steps because of the curved valley. After 100 steps, it is still far from the minimum.\n- Newton\'s Method: Calculates the Hessian at each step. By adjusting step directions based on curvature, it directly targets the bowl, reaching the exact minimum $[1, 1]^T$ in only 9 steps!',
        exampleHe: 'מזער את הפונקציה $f(x) = (1 - x_1)^2 + 5(x_2 - x_1^2)^2$ (פונקציית רוזנברוק - Rosenbrock "Banana" function) החל מהנקודה ההתחלתית $[-1.4, 2.0]^T$.\n- ירידה תלולה: מבצעת מאות צעדים קטנים בזיגזג בגלל העמק המפותל. לאחר 100 שלבים, היא עדיין רחוקה מאוד מהמינימום.\n- שיטת ניוטון: מחשבת את ההסיאן בכל שלב. על ידי התאמת כיווני הצעד בהתבסס על העקמומיות, היא פונה ישירות לתחתית הקערה ומגיעה למינימום המדויק $[1, 1]^T$ ב-9 שלבים בלבד!'
      },
      {
        id: 'def-opt-2-2',
        title: 'Coordinate Descent, Gauss-Newton & IRLS',
        titleHe: 'ירידת קואורדינטות, גאוס-ניוטון ו-IRLS',
        simplifiedLogic: 'This section details specialized iterative solvers:\n1. **Coordinate Descent:** Minimizes one variable at a time (highly efficient for separable problems).\n2. **Gauss-Newton:** Solves non-linear least squares fit problems by approximating the Hessian using only Jacobian products ($J^T J$).\n3. **Iterative Re-weighted Least Squares (IRLS):** Solves non-smooth $L_p$ problems by converting them into sequential weighted least squares problems.',
        simplifiedLogicHe: 'סעיף זה מפרט פותרים איטרטיביים מיוחדים:\n1. **ירידת קואורדינטות:** ממזערת משתנה אחד בכל פעם (יעילה במיוחד לבעיות פריקות).\n2. **גאוס-ניוטון:** פותרת בעיות התאמה לא-ליניאריות בריבועים מינימליים על ידי קירוב ההסיאן באמצעות מכפלות יעקוביאן בלבד ($J^T J$).\n3. **IRLS (ריבועים מינימליים משוקללים איטרטיבית):** פותרת בעיות $L_p$ לא-חלקות על ידי הפיכתן לסדרה של בעיות ריבועים מינימליים משוקללים.',
        toolboxConnection: 'IRLS weighting updates are a direct optimization application of the weighted least squares formulations in **NLA Chapter 3**!',
        toolboxConnectionHe: 'עדכוני המשקלים ב-IRLS הם יישום אופטימיזציה ישיר של נוסחאות הריבועים המינימליים המשוקללים שנלמדו ב-**NLA פרק 3**!',
        keyTakeaway: 'Gauss-Newton avoids computing expensive second derivatives of residuals by approximating Hessians via first-order Jacobian products.',
        keyTakeawayHe: 'שיטת גאוס-ניוטון מונעת חישוב נגזרות שניות יקרות של השאריות על ידי קירוב ההסיאן באמצעות מכפלות יעקוביאן מסדר ראשון.',
        content: '1. Coordinate Descent (CD): Lexicographically minimizes the objective along one coordinate axis at a time, making it highly effective when 1-D forms are simple:\n   $$x_i^{(k+1)} \\leftarrow \\arg\\min_{x_i} f(x_1^{(k+1)}, ..., x_i, ..., x_n^{(k)})$$\n2. Gauss-Newton (GN): Solves non-linear least squares fit problems $\\min \\frac{1}{2}\\|f(\\theta) - y\\|_2^2$ by approximating the Hessian as $J^T J$:\n   $$d_{\\text{GN}} = -(J^T J)^{-1} J^T (f(\\theta) - y)$$\n   (Levenberg-Marquardt adds damping $\\mu I$ for stability: $J^T J + \\mu I$).\n3. Iterative Re-weighted Least Squares (IRLS): Solves $\\ell_p$-norm minimizations $\\min \\|Ax-b\\|_p^p$ by iteratively updating diagonal weights:\n   $$w_i^{(k)} = (|a_i^T x^{(k)} - b_i| + \\epsilon)^{p-2}$$',
        contentHe: '1. ירידת קואורדינטות (Coordinate Descent): ממזערת את פונקציית המטרה רכיב אחר רכיב באופן סדרתי, שיטה יעילה מאוד כאשר המזעור החד-ממדי פשוט לחישוב:\n   $$x_i^{(k+1)} \\leftarrow \\arg\\min_{x_i} f(x_1^{(k+1)}, ..., x_i, ..., x_n^{(k)})$$\n2. גאוס-ניוטון (Gauss-Newton): פותרת בעיות התאמה לא-ליניאריות בריבועים מינימליים $\\min \\frac{1}{2}\\|f(\\theta) - y\\|_2^2$ על ידי קירוב מטריצת ההסיאן כ-$J^T J$:\n   $$d_{\\text{GN}} = -(J^T J)^{-1} J^T (f(\\theta) - y)$$\n   (שיטת לבנברג-מרקוורדט מוסיפה ריסון $\\mu I$ ליציבות: $J^T J + \\mu I$).\n3. ריבועים מינימליים משוקללים איטרטיבית (IRLS): פותרת בעיות מזעור בנורמת $\\ell_p$ מהצורה $\\min \\|Ax-b\\|_p^p$ על ידי עדכון איטרטיבי של משקלי האלכסון:\n   $$w_i^{(k)} = (|a_i^T x^{(k)} - b_i| + \\epsilon)^{p-2}$$',
        proof: 'Proof: Theorem on IRLS Convergence Rationale\nSuppose we want to minimize the non-quadratic $\\ell_p$ norm $\\min_x \\sum_i \\phi(r_i)$, where $r_i = a_i^T x - b_i$ and $\\phi(r_i) = |r_i|^p$.\n1. Differentiate the objective with respect to $x_j$:\n   $$\\frac{\\partial}{\\partial x_j} \\sum_i |r_i|^p = \\sum_i p |r_i|^{p-1} \\text{sign}(r_i) \\frac{\\partial r_i}{\\partial x_j} = \\sum_i p |r_i|^{p-2} r_i a_{ij}$$\n2. We define the weights $w_i = |r_i|^{p-2}$. The gradient condition then becomes:\n   $$\\sum_i w_i (a_i^T x - b_i) a_{ij} = 0$$\n3. This is exactly the gradient of the weighted least squares problem $\\min_x \\sum_i w_i (a_i^T x - b_i)^2$.\n4. By fixing $w_i^{(k)}$ based on the previous iteration\'s residuals $r_i^{(k)}$, we can solve for $x^{(k+1)}$ using standard linear least squares. This allows us to solve complex non-smooth $\\ell_1$ or $\\ell_p$ problems using standard matrix division!',
        proofHe: 'הוכחה: עקרון הפעולה של שיטת IRLS\nנניח שאנו מעוניינים למזער את נורמת $\\ell_p$ הלא-ריבועית $\\min_x \\sum_i \\phi(r_i)$, כאשר השאריות הן $r_i = a_i^T x - b_i$ והפונקציה היא $\\phi(r_i) = |r_i|^p$.\n1. נגזור את פונקציית המטרה ביחס ל-$x_j$:\n   $$\\frac{\\partial}{\\partial x_j} \\sum_i |r_i|^p = \\sum_i p |r_i|^{p-1} \\text{sign}(r_i) \\frac{\\partial r_i}{\\partial x_j} = \\sum_i p |r_i|^{p-2} r_i a_{ij}$$\n2. נגדיר את המשקלים כ-$w_i = |r_i|^{p-2}$. תנאי הגרדיאנט הופך להיות:\n   $$\\sum_i w_i (a_i^T x - b_i) a_{ij} = 0$$\n3. זהו בדיוק הגרדיאנט של בעיית הריבועים המינימליים המשוקללים $\\min_x \\sum_i w_i (a_i^T x - b_i)^2$.\n4. על ידי קיבוע המשקלים $w_i^{(k)}$ בהתבסס על שאריות האיטרציה הקודמת $r_i^{(k)}$, אנו יכולים לפתור עבור $x^{(k+1)}$ באמצעות פתרון ריבועים מינימליים ליניאריים סטנדרטי. זה מאפשר לנו לפתור בעיות לא-חלקות מורכבות בנורמת $\\ell_1$ או $\\ell_p$ באמצעות כפל וחילוק מטריצות פשוט!',
        example: 'Solve a 1D $\\ell_1$ norm minimization $\\min_x |x - 1| + |x - 2|$ via IRLS starting at $x^{(0)} = 0$ with $\\epsilon = 0.01$.\n1. Step 1 residuals: $r_1 = -1, r_2 = -2$. Weights $w_i = \\frac{1}{|r_i| + \\epsilon}$:\n   $$w_1 = \\frac{1}{1.01} \\approx 0.99, \\quad w_2 = \\frac{1}{2.01} \\approx 0.50$$\n2. Solve the weighted least squares problem $\\min_x w_1 (x - 1)^2 + w_2 (x - 2)^2$:\n   $$x^{(1)} = \\frac{w_1 (1) + w_2 (2)}{w_1 + w_2} = \\frac{0.99 + 1.00}{0.99 + 0.50} = \\frac{1.99}{1.49} \\approx 1.33$$\n3. The weights update dynamically, guiding $x$ directly to the median optimal point!',
        exampleHe: 'פתור בעיית מזעור בנורמת $\\ell_1$ חד-ממדית $\\min_x |x - 1| + |x - 2|$ באמצעות IRLS החל מ-$x^{(0)} = 0$ עם $\\epsilon = 0.01$.\n1. שאריות בשלב 1: $r_1 = -1, r_2 = -2$. משקלים $w_i = \\frac{1}{|r_i| + \\epsilon}$:\n   $$w_1 = \\frac{1}{1.01} \\approx 0.99, \\quad w_2 = \\frac{1}{2.01} \\approx 0.50$$\n2. נפתור את בעיית הריבועים המינימליים המשוקללים $\\min_x w_1 (x - 1)^2 + w_2 (x - 2)^2$:\n   $$x^{(1)} = \\frac{w_1 (1) + w_2 (2)}{w_1 + w_2} = \\frac{0.99 + 1.00}{0.99 + 0.50} = \\frac{1.99}{1.49} \\approx 1.33$$\n3. המשקלים מתעדכנים באופן דינמי ומכוונים את $x$ ישירות אל עבר החציון האופטימלי!'
      },
      {
        id: 'def-opt-2-3',
        title: 'Gradient & Jacobian Verification Tests',
        titleHe: 'בדיקות אימות גרדיאנט ויעקוביאן',
        simplifiedLogic: 'Gradients and Jacobians are extremely prone to programming bugs. The **Gradient Test** is an automated sanity check based on the Taylor expansion: if the analytical gradient code is correct, the numerical error ratio $\\Phi(\\epsilon)$ must stay perfectly constant as step size $\\epsilon \\to 0$. If there is a bug, the ratio explodes exponentially!\n\n**Visual Error Verification Map:**\n* **Correct Gradient:** $\\Phi(\\epsilon) \\approx \\text{constant}$ as $\\epsilon \\to 0$ (Perfect quadratic decay)\n* **Buggy Gradient:** $\\Phi(\\epsilon) \\propto 1/\\epsilon \\rightarrow \\infty$ as $\\epsilon \\to 0$ (Linear error explosion)',
        simplifiedLogicHe: 'קוד עבור גרדיאנטים ויעקוביאנים הוא מועד מאוד לשגיאות תכנות. **בדיקת הגרדיאנט** היא אימות אוטומטי המבוסס על פיתוח טיילור: אם הגרדיאנט האנליטי נכון, יחס השגיאה הנומרי $\\Phi(\\epsilon)$ חייב להישאר קבוע לחלוטין ככל שגודל הצעד $\\epsilon \\to 0$. אם יש באג, היחס יתפוצץ אקספוננציאלית!\n\n**מיפוי בדיקת שגיאות:**\n* **גרדיאנט תקין:** $\\Phi(\\epsilon) \\approx \\text{constant}$ כאשר $\\epsilon \\to 0$ (דעיכה ריבועית מושלמת)\n* **גרדיאנט עם באג:** $\\Phi(\\epsilon) \\propto 1/\\epsilon \\rightarrow \\infty$ כאשר $\\epsilon \\to 0$ (התפוצצות שגיאה ליניארית)',
        toolboxConnection: 'The Transpose Test uses the definition of conjugate transpose inner products from **NLA Chapter 1** to verify linear operator implementations!',
        toolboxConnectionHe: 'בדיקת הצמוד (Transpose Test) משתמשת בהגדרת המכפלה הפנימית של הצמוד המרוכב שנלמדה ב-**NLA פרק 1** כדי לאמת מימושי אופרטורים ליניאריים!',
        keyTakeaway: 'Taylor-based verification tests isolate analytical bugs by checking if error decays at a perfect quadratic rate.',
        keyTakeawayHe: 'בדיקות אימות המבוססות על טיילור מבודדות באגים אנליטיים על ידי בדיקה האם השגיאה דועכת בקצב ריבועי מושלם.',
        content: 'Writing code for gradients and Jacobians is highly error-prone. To verify implementation correctness, we perform numerical checks based on Taylor expansions:\n1. The Gradient Test: $\\Phi(\\epsilon) = \\frac{|f(x + \\epsilon d) - f(x) - \\epsilon \\langle g, d \\rangle|}{\\epsilon^2} \\approx \\text{constant}$ as $\\epsilon \\to 0$.\n2. The Jacobian Test: $\\Phi(\\epsilon) = \\frac{\\|f(x + \\epsilon d) - f(x) - \\epsilon J d\\|_2}{\\epsilon^2} \\approx \\text{constant}$ as $\\epsilon \\to 0$.\n3. The Transpose Test: Verifies that $A$ and its conjugate transpose $A^T$ are correct by checking that $\\langle A u, v \\rangle = \\langle u, A^T v \\rangle$ for random vectors $u, v$.',
        contentHe: 'כתיבת קוד עבור גרדיאנטים ויעקוביאנים היא מועדת מאוד לשגיאות. על מנת לוודא את נכונות המימוש, אנו מבצעים בדיקות נומריות המבוססות על פיתוח טיילור:\n1. בדיקת הגרדיאנט (Gradient Test): $\\Phi(\\epsilon) = \\frac{|f(x + \\epsilon d) - f(x) - \\epsilon \\langle g, d \\rangle|}{\\epsilon^2} \\approx \\text{constant}$ כאשר $\\epsilon \\to 0$.\n2. בדיקת היעקוביאן (Jacobian Test): $\\Phi(\\epsilon) = \\frac{\\|f(x + \\epsilon d) - f(x) - \\epsilon J d\\|_2}{\\epsilon^2} \\approx \\text{constant}$ כאשר $\\epsilon \\to 0$.\n3. בדיקת הצמוד (Transpose Test): מאמתת כי המטריצה $A$ והצמוד שלה $A^T$ ממומשים נכון על ידי בדיקה שמתקיים $\\langle A u, v \\rangle = \\langle u, A^T v \\rangle$ עבור וקטורים אקראיים $u, v$.',
        proof: 'Proof: Mathematical Rationale of the Gradient Verification Test\nWe prove that if the gradient $g = \\nabla f(x)$ is mathematically correct, then the error term decays quadratically, meaning the ratio $\\Phi(\\epsilon)$ approaches a constant as $\\epsilon \\to 0$.\n\n1. Let $f$ be twice continuously differentiable. The Taylor expansion is:\n   $$f(x + \\epsilon d) = f(x) + \\epsilon \\langle \\nabla f(x), d \\rangle + \\frac{\\epsilon^2}{2} \\langle d, \\nabla^2 f(x) d \\rangle + O(\\epsilon^3)$$\n2. Subtract the first-order approximation from both sides:\n   $$f(x + \\epsilon d) - f(x) - \\epsilon \\langle \\nabla f(x), d \\rangle = \\frac{\\epsilon^2}{2} \\langle d, \\nabla^2 f(x) d \\rangle + O(\\epsilon^3)$$\n3. Divide both sides by $\\epsilon^2$:\n   $$\\frac{f(x + \\epsilon d) - f(x) - \\epsilon \\langle \\nabla f(x), d \\rangle}{\\epsilon^2} = \\frac{1}{2} \\langle d, \\nabla^2 f(x) d \\rangle + O(\\epsilon)$$\n4. Taking the limit as $\\epsilon \\to 0$:\n   $$\\lim_{\\epsilon \\to 0} \\frac{|f(x + \\epsilon d) - f(x) - \\epsilon \\langle \\nabla f(x), d \\rangle|}{\\epsilon^2} = \\frac{1}{2} |\\langle d, \\nabla^2 f(x) d \\rangle|$$\n5. This limit is a finite constant (half the quadratic curvature along direction $d$). If our gradient code has even a tiny typo, the numerator will have an $O(\\epsilon)$ term, causing the ratio to explode like $O(1/\\epsilon)$ as $\\epsilon \\to 0$, immediately detecting the bug!',
        proofHe: 'הוכחה: ביסוס מתמטי של בדיקת הגרדיאנט\nנוכיח כי אם הגרדיאנט האנליטי $g = \\nabla f(x)$ נכון מתמטית, אזי איבר השגיאה דועך ריבועית, כלומר היחס $\\Phi(\\epsilon)$ שואף לקבוע ככל ש-$\\epsilon \\to 0$.\n\n1. תהי $f$ פונקציה הגזירה פעמיים ברציפות. פיתוח טיילור הוא:\n   $$f(x + \\epsilon d) = f(x) + \\epsilon \\langle \\nabla f(x), d \\rangle + \\frac{\\epsilon^2}{2} \\langle d, \\nabla^2 f(x) d \\rangle + O(\\epsilon^3)$$\n2. נחסר את הקירוב מסדר ראשון משני האגפים:\n   $$f(x + \\epsilon d) - f(x) - \\epsilon \\langle \\nabla f(x), d \\rangle = \\frac{\\epsilon^2}{2} \\langle d, \\nabla^2 f(x) d \\rangle + O(\\epsilon^3)$$\n3. נחלק את שני האגפים ב-$\\epsilon^2$:\n   $$\\frac{f(x + \\epsilon d) - f(x) - \\epsilon \\langle \\nabla f(x), d \\rangle}{\\epsilon^2} = \\frac{1}{2} \\langle d, \\nabla^2 f(x) d \\rangle + O(\\epsilon)$$\n4. ניקח את הגבול כאשר $\\epsilon \\to 0$:\n   $$\\lim_{\\epsilon \\to 0} \\frac{|f(x + \\epsilon d) - f(x) - \\epsilon \\langle \\nabla f(x), d \\rangle|}{\\epsilon^2} = \\frac{1}{2} |\\langle d, \\nabla^2 f(x) d \\rangle|$$\n5. גבול זה הוא קבוע סופי (חצי מהעקמומיות הכיוונית לאורך הכיוון $d$). אם בקוד הגרדיאנט יש שגיאה קלה ביותר, במונה יופיע איבר מסדר $O(\\epsilon)$, מה שיגרום ליחס להתפוצץ כמו $O(1/\\epsilon)$ ככל ש-$\\epsilon \\to 0$, ויחשוף מיד את הבאג!',
        example: 'Verify gradient code for $f(x) = x^2$ at $x=2$ along direction $d=1$.\n1. Correct gradient is $g = 2x = 4$. Let\'s test this correct gradient. Calculate $\\Phi(\\epsilon)$:\n   - $\\epsilon = 0.1 \\implies \\Phi = \\frac{|(2.1)^2 - 4 - 0.1(4)|}{0.01} = \\frac{|4.41 - 4 - 0.4|}{0.01} = \\frac{0.01}{0.01} = 1.00$\n   - $\\epsilon = 0.01 \\implies \\Phi = \\frac{|(2.01)^2 - 4 - 0.01(4)|}{0.0001} = \\frac{|4.0401 - 4 - 0.04|}{0.0001} = \\frac{0.0001}{0.0001} = 1.00$\n   The ratio remains perfectly constant! The gradient is correct!\n2. Let\'s test a buggy gradient $g = 3.9$ (off by 2.5%):\n   - $\\epsilon = 0.1 \\implies \\Phi = \\frac{|4.41 - 4 - 0.1(3.9)|}{0.01} = \\frac{0.02}{0.01} = 2.00$\n   - $\\epsilon = 0.01 \\implies \\Phi = \\frac{|4.0401 - 4 - 0.01(3.9)|}{0.0001} = \\frac{0.0011}{0.0001} = 11.00$\n   - $\\epsilon = 0.001 \\implies \\Phi = \\frac{|4.004001 - 4 - 0.001(3.9)|}{0.000001} = \\frac{0.000101}{0.000001} = 101.00$\n   The ratio exploded by 10x with each division! This instantly flags our gradient as buggy!',
        exampleHe: 'אמת קוד גרדיאנט עבור $f(x) = x^2$ בנקודה $x=2$ לאורך כיוון $d=1$.\n1. הגרדיאנט הנכון הוא $g = 2x = 4$. נבדוק את הגרדיאנט התקין הזה. נחשב את $\\Phi(\\epsilon)$:\n   - $\\epsilon = 0.1 \\implies \\Phi = \\frac{|(2.1)^2 - 4 - 0.1(4)|}{0.01} = \\frac{|4.41 - 4 - 0.4|}{0.01} = \\frac{0.01}{0.01} = 1.00$\n   - $\\epsilon = 0.01 \\implies \\Phi = \\frac{|(2.01)^2 - 4 - 0.01(4)|}{0.0001} = \\frac{|4.0401 - 4 - 0.04|}{0.0001} = \\frac{0.0001}{0.0001} = 1.00$\n   היחס נשאר קבוע לחלוטין! הגרדיאנט תקין!\n2. כעת נבדוק גרדיאנט שגוי עם באג $g = 3.9$ (סטייה של 2.5%):\n   - $\\epsilon = 0.1 \\implies \\Phi = \\frac{|4.41 - 4 - 0.1(3.9)|}{0.01} = \\frac{0.02}{0.01} = 2.00$\n   - $\\epsilon = 0.01 \\implies \\Phi = \\frac{|4.0401 - 4 - 0.01(3.9)|}{0.0001} = \\frac{0.0011}{0.0001} = 11.00$\n   - $\\epsilon = 0.001 \\implies \\Phi = \\frac{|4.004001 - 4 - 0.001(3.9)|}{0.000001} = \\frac{0.000101}{0.000001} = 101.00$\n   היחס גדל פי 10 בכל פעם שחילקנו את $\\epsilon$ ב-10! זה מאותת מיד שהגרדיאנט פגום!'
      },
      {
        id: 'def-opt-2-4',
        title: 'Quasi-Newton & Inexact Newton-CG Solvers',
        titleHe: 'פותרי קוואזי-ניוטון וניוטון לא-מדויק (Inexact Newton-CG)',
        simplifiedLogic: 'Newton\'s method is computationally heavy because it requires calculating and inverting the Hessian matrix $H = \\nabla^2 f(x)$ at each step. **Quasi-Newton** methods (like BFGS) approximate $H^{-1}$ using only the change in gradients, keeping the approximation positive definite. **Inexact Newton-CG** solves the Hessian system approximately using Conjugate Gradients, stopping early to save compute.',
        simplifiedLogicHe: 'שיטת ניוטון יקרה חישובית מכיוון שהיא דורשת חישוב והיפוך של מטריצת ההסיאן בכל שלב. שיטות **קוואזי-ניוטון** (כמו BFGS) מעריכות את $H^{-1}$ באמצעות שינויים בגרדיאנטים בלבד, ושומרות על מטריצה חיובית לחלוטין. שיטת **ניוטון לא-מדויק (Newton-CG)** פותרת את מערכת ההסיאן באופן מקורב באמצעות גרדיאנטים צמודים, ונעצרת מוקדם כדי לחסוך זמן חישוב.',
        toolboxConnection: 'Inexact Newton-CG uses the Conjugate Gradient solver from **NLA Chapter 6** as its internal engine!',
        toolboxConnectionHe: 'שיטת ניוטון לא-מדויק משתמשת בפותר הגרדיאנטים הצמודים מ-**NLA פרק 6** כמנוע הפנימי שלה!',
        keyTakeaway: 'Quasi-Newton and Inexact Newton methods bypass the massive cost of Hessian inversion while preserving fast convergence rates.',
        keyTakeawayHe: 'שיטות קוואזי-ניוטון וניוטון לא-מדויק עוקפות את העלות העצומה של היפוך ההסיאן תוך שמירה על קצבי התכנסות מהירים.',
        content: '**Quasi-Newton Methods**: Newton\'s method is computationally heavy because it requires calculating and inverting the Hessian matrix $H = \\nabla^2 f(x)$ at each step. Quasi-Newton methods (like **BFGS** and **L-BFGS**) approximate $H^{-1}$ using only the change in gradients ($y_k = g_{k+1} - g_k$) and coordinates ($s_k = x_{k+1} - x_k$) via the secant equation:\n$$B_{k+1} s_k = y_k \\quad \\text{or} \\quad H_{k+1} y_k = s_k$$\n\n**Descent Direction Theorem**: Any update of the form $d = -M \\nabla f(x)$ is a guaranteed descent direction if $M$ is strictly positive definite ($M \\succ 0$):\n$$\\langle \\nabla f(x), d \\rangle = -\\nabla f(x)^T M \\nabla f(x) < 0$$\nQuasi-Newton updates are engineered to keep the Hessian approximation strictly positive definite.\n\n**Inexact Newton (Newton-PCG)**: Instead of solving the Hessian system exactly ($H d = -g$), we solve it approximately using the Conjugate Gradient (CG) method. We stop CG early once the residual satisfies:\n$$\\|H d + g\\|_2 \n\\leq \\eta_k \\|g\\|_2 \\quad (\\eta_k \\in (0, 1))$$\nThis saves massive amounts of compute while preserving fast convergence.',
        contentHe: '**שיטות קוואזי-ניוטון (Quasi-Newton)**: שיטת ניוטון יקרה חישובית מכיוון שהיא דורשת חישוב והיפוך של מטריצת ההסיאן $H = \\nabla^2 f(x)$ בכל שלב. שיטות קוואזי-ניוטון (כגון **BFGS** ו-**L-BFGS**) מעריכות את ההופכי של ההסיאן $H^{-1}$ באמצעות שינויים בגרדיאנטים ($y_k = g_{k+1} - g_k$) ובקואורדינטות ($s_k = x_{k+1} - x_k$) בלבד, דרך משוואת המיתר (Secant equation):\n$$B_{k+1} s_k = y_k \\quad \\text{או} \\quad H_{k+1} y_k = s_k$$\n\n**משפט על כיוון ירידה**: עדכון מהצורה $d = -M \\nabla f(x)$ מובטח להיות כיוון ירידה אם המטריצה $M$ היא חיובית לחלוטין באופן קשיח ($M \\succ 0$):\n$$\\langle \\nabla f(x), d \\rangle = -\\nabla f(x)^T M \\nabla f(x) < 0$$\nשיטות קוואזי-ניוטון מתוכננות לשמור על קירוב ההסיאן כחיובי לחלוטין באופן קשיח.\n\n**ניוטון לא-מדויק (Inexact Newton / Newton-PCG)**: במקום לפתור את מערכת ההסיאן באופן מדויק ($H d = -g$), אנו פותרים אותה באופן מקורב באמצעות שיטת הגרדיאנטים הצמודים (CG). אנו עוצרים את ה-CG מוקדם ברגע שוקטור השארית עומד בתנאי:\n$$\\|H d + g\\|_2 \\leq \\eta_k \\|g\\|_2 \\quad (\\eta_k \\in (0, 1))$$\nזה חוסך משאבי חישוב עצומים תוך שמירה על קצב התכנסות מהיר.',
        proof: 'Proof: Theorem on Descent Direction Scaling\n\nWe prove that $d = -M g$ is a descent direction for any $M \\succ 0$, where $g = \\nabla f(x) \\neq 0$.\n\n1. By definition, a direction $d$ is a descent direction if $\\langle g, d \\rangle < 0$.\n2. Substitute $d = -M g$:\n   $$\\langle g, -M g \\rangle = -g^T M g$$\n3. Since $M \\succ 0$ is positive definite, the quadratic form $v^T M v > 0$ for all non-zero vectors $v$.\n4. Since $g \\neq 0$ (not at a stationary point):\n   $$-g^T M g < 0$$\nThis mathematically guarantees that scaling the gradient by any positive definite matrix preserves the descent property, allowing us to safely use Hessian approximations. $\\square$',
        proofHe: 'הוכחה: משפט על כיוון ירידה מוכשר\n\nנוכיח כי $d = -M g$ הוא כיוון ירידה לכל $M \\succ 0$, כאשר $g = \\nabla f(x) \\neq 0$.\n\n1. לפי ההגדרה, כיוון $d$ הוא כיוון ירידה אם מתקיים $\\langle g, d \\rangle < 0$.\n2. נציב $d = -M g$:\n   $$\\langle g, -M g \\rangle = -g^T M g$$\n3. מכיוון ש-$M \\succ 0$ היא חיובית לחלוטין, התבנית הריבועית מקימת $v^T M v > 0$ לכל וקטור $v \\neq 0$.\n4. מכיוון ש-$g \\neq 0$ (איננו בנקודה סטציונרית):\n   $$-g^T M g < 0$$\nזה מבטיח מתמטית ששינוי קנה המידה של הגרדיאנט באמצעות מטריצה חיובית לחלוטין שומר על תכונת הירידה, מה שמאפשר לנו להשתמש בבטחה בקירובי הסיאן. $\\square$',
        example: 'Let $f(x) = x_1^4 + x_2^4$. Let $x^{(0)} = [1, 1]^T$. Let\'s compare Newton vs Inexact Newton-CG:\n- Newton: Calculates the exact Hessian $H = \\begin{bmatrix} 12x_1^2 & 0 \\\\ 0 & 12x_2^2 \\end{bmatrix} = \\begin{bmatrix} 12 & 0 \\\\ 0 & 12 \\end{bmatrix}$ and solves the system exactly.\n- Inexact Newton-CG: Starts solving the system $\\begin{bmatrix} 12 & 0 \\\\ 0 & 12 \\end{bmatrix} d = -\\begin{bmatrix} 4 \\\\ 4 \\end{bmatrix}$ using CG. We set $\\eta = 0.5$. In the very first iteration, CG finds $d = [-0.33, -0.33]^T$, which gives a residual norm of 0, immediately satisfying the stopping criteria. The solver makes a safe step forward without ever manually building or inverting the full Hessian matrix!',
        exampleHe: 'תהי $f(x) = x_1^4 + x_2^4$. יהי $x^{(0)} = [1, 1]^T$. נשווה בין ניוטון לניוטון לא-מדויק (Newton-CG):\n- ניוטון: מחשב את ההסיאן המדויק $H = \\begin{bmatrix} 12x_1^2 & 0 \\\\ 0 & 12x_2^2 \\end{bmatrix} = \\begin{bmatrix} 12 & 0 \\\\ 0 & 12 \\end{bmatrix}$ ופותר את המערכת בדיוק.\n- ניוטון לא-מדויק: מתחיל לפתור את המערכת $\\begin{bmatrix} 12 & 0 \\\\ 0 & 12 \\end{bmatrix} d = -\\begin{bmatrix} 4 \\\\ 4 \\end{bmatrix}$ באמצעות CG. נגדיר $\\eta = 0.5$. באיטרציה הראשונה של CG מתקבל $d = [-0.33, -0.33]^T$, מה שמניב נורמת שארית 0 ומקיים מיד את תנאי העצירה. הפותר מבצע צעד יציב קדימה מבלי לבנות או להפוך את ההסיאן המלא ידנית!'
      }
    ],
    quiz: [
      {
        question: 'In the Gradient Verification Test, what happens to the ratio Φ(ε) as ε approaches zero if the gradient code is 100% correct?',
        questionHe: 'בבדיקת אימות הגרדיאנט, מה קורה ליחס Φ(ε) כאשר ε שואף לאפס אם קוד הגרדיאנט נכון ב-100%?',
        options: [
          'It explodes to infinity.',
          'It approaches a constant value (half the directional curvature).',
          'It becomes exactly zero.',
          'It changes randomly.'
        ],
        optionsHe: [
          'הוא מתפוצץ לאינסוף.',
          'הוא שואף לערך קבוע (חצי מהעקמומיות הכיוונית).',
          'הוא הופך לאפס מוחלט.',
          'הוא משתנה באופן אקראי.'
        ],
        correctAnswerIndex: 1,
        explanation: 'Because the Taylor error decays quadratically (O(ε^2)), dividing the error by ε^2 results in a constant ratio in the limit. If there is a bug, the error decays only linearly, causing the ratio to blow up like O(1/ε).',
        explanationHe: 'מכיוון ששגיאת טיילור דועכת ריבועית (O(ε^2)), חלוקת השגיאה ב-ε^2 מניבה יחס קבוע בגבול. אם יש באג, השגיאה דועכת באופן ליניארי בלבד, מה שגורם ליחס להתפוצץ כמו O(1/ε).'
      },
      {
        question: 'What is the primary computational difference between the Gauss-Newton and Levenberg-Marquardt methods?',
        questionHe: 'מהו ההבדל החישובי העיקרי בין שיטות גאוס-ניוטון ולבנברג-מרקוורדט?',
        options: [
          'Gauss-Newton only works for linear systems.',
          'Levenberg-Marquardt adds a regularizing damping parameter μI to the J^T J system, stabilizing the search direction when the Jacobian is ill-conditioned.',
          'Levenberg-Marquardt is twice as slow.',
          'Gauss-Newton uses the second derivatives of the residuals.'
        ],
        optionsHe: [
          'גאוס-ניוטון עובדת רק עבור מערכות ליניאריות.',
          'לבנברג-מרקוורדט מוסיפה פרמטר ריסון מוסדר μI למערכת J^T J, מה שמייצב את כיוון החיפוש כאשר היעקוביאן אינו מדרגה מלאה.',
          'לבנברג-מרקוורדט איטית פי שניים.',
          'גאוס-ניוטון משתמשת בנגזרות שניות של השאריות.'
        ],
        correctAnswerIndex: 1,
        explanation: 'LM regularizes the GN step by adding μI, preventing division by near-zero singular values, which guarantees stability even for rank-deficient data fitting.',
        explanationHe: 'לבנברג-מרקוורדט (LM) מוסדרת את צעד גאוס-ניוטון (GN) על ידי הוספת μI, ובכך מונעת חלוקה בערכים סינגולריים הקרובים לאפס ומבטיחה יציבות גם כשהתאמת הנתונים חסרת דרגה מלאה.'
      }
    ]
  },
{
    id: 'opt-3',
    courseId: 'opt',
    chapterNumber: '3',
    title: 'Constrained Optimization',
    titleHe: 'פרק 3: אופטימיזציה עם אילוצים',
    intro: 'Real-world optimization is rarely free of limits. This chapter covers optimization under constraints: Lagrange Multipliers for equality constraints, the necessary Karush-Kuhn-Tucker (KKT) conditions for inequalities, Penalty and Barrier methods, and the Projected Steepest Descent algorithm.',
    introHe: 'אופטימיזציה בעולם האמיתי מוגבלת כמעט תמיד על ידי אילוצים ומגבלות. פרק זה מכסה אופטימיזציה תחת אילוצים: כופלי לגרנז\' עבור אילוצי שוויון, תנאי קארוש-קון-טאקר (KKT) ההכרחיים עבור אילוצי אי-שוויון, שיטות קנס ומחסום, ואלגוריתם ירידת גרדיאנט מוטלת (Projected Gradient Descent).',
    motivation: 'Engineering designs must stay within stress limits; financial portfolios must stay within budgets. Constrained optimization gives us the exact mathematical machinery to solve problems safely along the boundaries of complex feasible regions.',
    motivationHe: 'תכנונים הנדסיים חייבים לעמוד במגבלות עומס; תיקי השקעות פיננסיים חייבים לעמוד במגבלות תקציב. אופטימיזציה עם אילוצים מספקת לנו את המנגנון המתמטי המדויק לפתרון בעיות בבטחה לאורך הגבולות של אזורים אפשריים מורכבים.',
    definitions: [
      {
        id: 'def-opt-3-1',
        title: 'Lagrange Multipliers (Equality Constraints)',
        titleHe: 'כופלי לגרנז\' (אילוצי שוויון)',
        simplifiedLogic: 'Constrained optimization finds optimal points subject to constraints. An inequality constraint $g_i(x) \\leq 0$ is **active** at $x^*$ if it holds with exact equality ($g_i(x^*) = 0$). Active constraints act as barriers that shape the boundary of our search space.',
        simplifiedLogicHe: 'אופטימיזציה עם אילוצים מוצאת את הנקודות האופטימליות הכפופות למגבלות. אילוץ אי-שוויון $g_i(x) \\leq 0$ מוגדר כ**פעיל** בנקודה $x^*$ אם הוא מתקיים כשוויון מדויק ($g_i(x^*) = 0$). אילוצים פעילים משמשים כמחסומים המעצבים את גבול מרחב החיפוש שלנו.',
        toolboxConnection: 'Identifying active constraints creates a sub-system of linear equality constraints, which we solve using the projections in **NLA Chapter 3**!',
        toolboxConnectionHe: 'זיהוי אילוצים פעילים יוצר תת-מערכת של אילוצי שוויון ליניאריים, אותה אנו פותרים באמצעות ההטלות שנלמדו ב-**NLA פרק 3**!',
        keyTakeaway: 'Active constraints dictate the boundary geometry where the constrained optimal solution must sit.',
        keyTakeawayHe: 'אילוצים פעילים קובעים את גיאומטריית הגבול שבה חייב להימצא הפתרון האופטימלי הכפוף לאילוצים.',
        content: 'To minimize $f(x)$ subject to $m$ equality constraints $h_i(x) = 0$, we define the Lagrangian function:\n$$L(x, \\mu) = f(x) + \\sum_{i=1}^m \\mu_i h_i(x)$$\nwhere $\\mu_i$ are Lagrange multipliers. First-order necessary conditions require finding critical points where the gradient of the Lagrangian vanishes:\n$$\\nabla_x L(x^*, \\mu^*) = 0 \\quad \\text{and} \\quad \\nabla_\\mu L(x^*, \\mu^*) = 0$$',
        contentHe: 'על מנת למזער את $f(x)$ הכפופה ל-$m$ אילוצי שוויון $h_i(x) = 0$, נגדיר את פונקציית הלגרנז\'יאן (Lagrangian function):\n$$L(x, \\mu) = f(x) + \\sum_{i=1}^m \\mu_i h_i(x)$$\nכאשר $\\mu_i$ הם כופלי לגרנז\' (Lagrange multipliers). תנאי ההכרח מסדר ראשון דורשים מציאת נקודות קריטיות שבהן הגרדיאנט של הלגרנז\'יאן מתאפס:\n$$\\nabla_x L(x^*, \\mu^*) = 0 \\quad \\text{וכן} \\quad \\nabla_\\mu L(x^*, \\mu^*) = 0$$',
        proof: 'Proof: Geometric Rationale of Lagrange Multipliers\nWe prove that at a constrained local minimum $x^*$ of $f(x)$ subject to $h(x) = 0$, the gradients $\\nabla f(x^*)$ and $\\nabla h(x^*)$ must be parallel, meaning $\\nabla f(x^*) + \\mu^* \\nabla h(x^*) = 0$.\n\n1. The constraint equation $h(x) = 0$ defines a smooth boundary surface (manifold) in $\\mathbb{R}^n$.\n2. Any curve $z(t)$ lying entirely within this constraint surface and passing through $x^*$ at $t=0$ has a tangent vector $d = z\'(0)$.\n3. Since $h(z(t)) = 0$ for all $t$, we differentiate with respect to $t$ using the chain rule:\n   $$\\left. \\frac{d}{dt} h(z(t)) \\right|_{t=0} = \\langle \\nabla h(x^*), z\'(0) \\rangle = \\langle \\nabla h(x^*), d \\rangle = 0$$\n   This proves that any feasible movement direction $d$ must be strictly orthogonal to the constraint gradient $\\nabla h(x^*)$.\n4. Now, since $x^*$ is a local minimum along this constraint surface, moving along the feasible curve $z(t)$ must not decrease $f$. Thus, the rate of change of $f$ must vanish at $t=0$:\n   $$\\left. \\frac{d}{dt} f(z(t)) \\right|_{t=0} = \\langle \\nabla f(x^*), z\'(0) \\rangle = \\langle \\nabla f(x^*), d \\rangle = 0$$\n5. Geometrically, this means that the objective gradient $\\nabla f(x^*)$ is orthogonal to every tangent direction $d$ that is orthogonal to $\\nabla h(x^*)$.\n6. In $\\mathbb{R}^n$, if a vector is orthogonal to the same subspace as another vector, the two vectors must lie along the same line (they are parallel). Thus, there exists a scalar $\\mu^*$ such that:\n   $$\\nabla f(x^*) = -\\mu^* \\nabla h(x^*) \\implies \\nabla f(x^*) + \\mu^* \\nabla h(x^*) = 0$$\n   This establishes the Lagrangian gradient condition!',
        proofHe: 'הוכחה: ביסוס גיאומטרי של כופלי לגרנז\'\nנוכיח כי בנקודת מינימום מקומי עם אילוצים $x^*$ של $f(x)$ הכפופה ל-$h(x) = 0$, הגרדיאנטים $\\nabla f(x^*)$ ו-$\\nabla h(x^*)$ חייבים להיות מקבילים, כלומר מתקיים $\\nabla f(x^*) + \\mu^* \\nabla h(x^*) = 0$.\n\n1. משוואת האילוץ $h(x) = 0$ מגדירה משטח גבול חלק (יריעה) ב-$\\mathbb{R}^n$.\n2. לכל עקומה $z(t)$ הנמצאת כולה בתוך משטח אילוץ זה ועוברת דרך $x^*$ ב-$t=0$ יש וקטור משיק $d = z\'(0)$.\n3. מכיוון שמתקיים $h(z(t)) = 0$ לכל $t$, נגזור ביחס ל-$t$ באמצעות כלל השרשרת:\n   $$\\left. \\frac{d}{dt} h(z(t)) \\right|_{t=0} = \\langle \\nabla h(x^*), z\'(0) \\rangle = \\langle \\nabla h(x^*), d \\rangle = 0$$\n   זה מוכיח כי כל כיוון תנועה אפשרי $d$ חייב להיות ניצב לחלוטין לגרדיאנט האילוץ $\\nabla h(x^*)$.\n4. כעת, מכיוון ש-$x^*$ היא נקודת מינימום מקומי לאורך משטח אילוץ זה, תנועה לאורך העקומה האפשרית $z(t)$ אינה יכולה להקטין את $f$. לכן, קצב השינוי של $f$ חייב להתאפס ב-$t=0$:\n   $$\\left. \\frac{d}{dt} f(z(t)) \\right|_{t=0} = \\langle \\nabla f(x^*), z\'(0) \\rangle = \\langle \\nabla f(x^*), d \\rangle = 0$$\n5. מבחינה גיאומטרית, זה אומר שגרדיאנט פונקציית המטרה $\\nabla f(x^*)$ ניצב לכל כיוון משיק $d$ שניצב ל-$\\nabla h(x^*)$.\n6. ב-$\\mathbb{R}^n$, אם וקטור ניצב לאותו תת-מרחב כמו וקטור אחר, שני הוקטורים חייבים להיות על אותו קו ישר (הם מקבילים). לכן, קיים סקלר $\\mu^*$ כך שמתקיים:\n   $$\\nabla f(x^*) = -\\mu^* \\nabla h(x^*) \\implies \\nabla f(x^*) + \\mu^* \\nabla h(x^*) = 0$$\n   זה מבסס את תנאי התאפסות הגרדיאנט של הלגרנז\'יאן!',
        example: 'Minimize $f(x, y) = x^2 + y^2$ subject to $x + y = 2$.\n1. Lagrangian: $L(x, y, \\mu) = x^2 + y^2 + \\mu(x + y - 2)$.\n2. Compute gradients:\n   - $\\frac{\\partial L}{\\partial x} = 2x + \\mu = 0 \\implies x = -\\mu / 2$\n   - $\\frac{\\partial L}{\\partial y} = 2y + \\mu = 0 \\implies y = -\\mu / 2$\n   - $\\frac{\\partial L}{\\partial \\mu} = x + y - 2 = 0$\n3. Substitute: $(-\\mu/2) + (-\\mu/2) = 2 \\implies -\\mu = 2 \\implies \\mu = -2$.\n4. Solution: $x = 1, y = 1$, with objective value $f(1, 1) = 2$.',
        exampleHe: 'מזער את $f(x, y) = x^2 + y^2$ הכפופה לאילוץ $x + y = 2$.\n1. לגרנז\'יאן: $L(x, y, \\mu) = x^2 + y^2 + \\mu(x + y - 2)$.\n2. נחשב גרדיאנטים:\n   - $\\frac{\\partial L}{\\partial x} = 2x + \\mu = 0 \\implies x = -\\mu / 2$\n   - $\\frac{\\partial L}{\\partial y} = 2y + \\mu = 0 \\implies y = -\\mu / 2$\n   - $\\frac{\\partial L}{\\partial \\mu} = x + y - 2 = 0$\n3. נציב: $(-\\mu/2) + (-\\mu/2) = 2 \\implies -\\mu = 2 \\implies \\mu = -2$.\n4. פתרון: $x = 1, y = 1$, עם ערך פונקציית מטרה $f(1, 1) = 2$.'
      },
      {
        id: 'def-opt-3-2',
        title: 'Karush-Kuhn-Tucker (KKT) Conditions',
        titleHe: 'תנאי קארוש-קון-טאקר (KKT)',
        simplifiedLogic: 'For constrained problems, unconstrained SOSC does not apply. Instead, we require the Lagrangian Hessian to be positive definite only along directions in the **Critical Subspace** (directions that tangent the active constraints). This is because we only care about curvature in directions we can actually step without violating constraints.',
        simplifiedLogicHe: 'עבור בעיות עם אילוצים, תנאי SOSC הרגיל אינו תקף. במקום זאת, אנו דורשים שההסיאן של הלגרנז\'יאן יהיה חיובי לחלוטין רק לאורך כיוונים ב**תת-המרחב הקריטי** (כיוונים המשיקים לאילוצים הפעילים). זאת מכיוון שעקמומיות בכיוונים החורגים מהאילוצים אינה מעניינת אותנו.',
        toolboxConnection: 'Projecting the Lagrangian Hessian onto the critical subspace relies on orthogonal basis projections learned in **NLA Chapter 5**!',
        toolboxConnectionHe: 'הטלת הסיאן הלגרנז\'יאן על תת-המרחב הקריטי מבוססת על הטלות בסיס אורתוגונליות שנלמדו ב-**NLA פרק 5**!',
        keyTakeaway: 'Constrained sufficiency only requires positive curvature along critical directions that tangent the active constraint boundary.',
        keyTakeawayHe: 'תנאי מספיק עם אילוצים דורש עקמומיות חיובית רק לאורך כיוונים קריטיים המשיקים לגבול האילוצים הפעילים.',
        content: 'For the general constrained problem:\n$$\\min_x f(x) \\quad \\text{s.t.} \\quad g_i(x) \\leq 0 \\; (i=1..p), \\quad h_j(x) = 0 \\; (j=1..m)$$\nThe KKT conditions are the first-order necessary conditions for $x^*$ to be optimal:\n1. Stationarity: $\\nabla f(x^*) + \\sum_{i=1}^p \\lambda_i \\nabla g_i(x^*) + \\sum_{j=1}^m \\mu_j \\nabla h_j(x^*) = 0$\n2. Primal Feasibility: $g_i(x^*) \\leq 0$ and $h_j(x^*) = 0$\n3. Dual Feasibility: $\\lambda_i \\geq 0$\n4. Complementary Slackness: $\\lambda_i \\cdot g_i(x^*) = 0 \\quad \\forall i=1...p$',
        contentHe: 'עבור הבעיה הכללית עם אילוצים:\n$$\\min_x f(x) \\quad \\text{s.t.} \\quad g_i(x) \\leq 0 \\; (i=1..p), \\quad h_j(x) = 0 \\; (j=1..m)$$\nתנאי KKT הם תנאי ההכרח מסדר ראשון לאופטימיליות של נקודה $x^*$:\n1. סטציונריות: $\\nabla f(x^*) + \\sum_{i=1}^p \\lambda_i \\nabla g_i(x^*) + \\sum_{j=1}^m \\mu_j \\nabla h_j(x^*) = 0$\n2. אפשריות ראשונית (Primal Feasibility): $g_i(x^*) \\leq 0$ וכן $h_j(x^*) = 0$\n3. אפשריות דואלית (Dual Feasibility): $\\lambda_i \\geq 0$\n4. רפיון משלים (Complementary Slackness): $\\lambda_i \\cdot g_i(x^*) = 0 \\quad \\forall i=1...p$',
        proof: 'Proof/Explanation: Complementary Slackness Rationale\nThe complementary slackness condition $\\lambda_i \\cdot g_i(x^*) = 0$ is a vital diagnostic showing how constraints influence our optimum:\n- Case 1: Inactive Constraints ($g_i(x^*) < 0$). Geometrically, the constrained optimum lies strictly inside the feasible region boundary. The constraint does not restrict us locally, so its "shadow price" must be zero, meaning $\\lambda_i = 0$.\n- Case 2: Active Constraints ($g_i(x^*) = 0$). Geometrically, the optimum lies directly on the boundary of the feasible region. The constraint is holding us back, so its multiplier can be strictly positive: $\\lambda_i > 0$.\nIn either case, their product is exactly zero. This condition is crucial for active-set algorithms.',
        proofHe: 'הסבר מתמטי וגיאומטרי לרפיון משלים\nתנאי הרפיון המשלים $\\lambda_i \\cdot g_i(x^*) = 0$ מראה כיצד אילוצי אי-שוויון משפיעים על האופטימום שלנו:\n- מקרה 1: אילוצים לא פעילים ($g_i(x^*) < 0$). מבחינה גיאומטרית, האופטימום הכפוף לאילוצים נמצא strictly בתוך תחום האפשריות. האילוץ אינו מגביל אותנו מקומית, ולכן כופל הלגרנז\' שלו (הנקרא גם "מחיר צל") חייב להיות אפס, כלומר $\\lambda_i = 0$.\n- מקרה 2: אילוצים פעילים ($g_i(x^*) = 0$). מבחינה גיאומטרית, האופטימום נמצא ישירות על השפה של התחום האפשרי. האילוץ מונע מאיתנו להתקדם, ולכן הכופל שלו יכול להיות חיובי ממש: $\\lambda_i > 0$.\nבשני המקרים, המכפלה שלהם היא בדיוק אפס. תנאי זה חיוני עבור אלגוריתמי Active-Set.',
        example: 'Minimize $f(x) = (x - 3)^2$ subject to $x \\geq 1$ (which is $1 - x \\leq 0$).\n1. Standard form: $g(x) = 1 - x \\leq 0$. Lagrangian: $L(x, \\lambda) = (x-3)^2 + \\lambda(1-x)$.\n2. KKT conditions:\n   - Stationarity: $2(x - 3) - \\lambda = 0 \\implies \\lambda = 2(x - 3)$\n   - Feasibility: $x \\geq 1$, and $\\lambda \\geq 0$\n   - Slackness: $\\lambda(1 - x) = 0$\n3. Test Case 1: $\\lambda = 0 \\implies 2(x-3) = 0 \\implies x=3$. Check primal feasibility: $3 \\geq 1$ (satisfied!). The constraint is inactive, and $x^* = 3$ is our global minimum.\n4. Test Case 2: $\\lambda > 0 \\implies 1-x = 0 \\implies x=1$. Stationarity gives $\\lambda = 2(1-3) = -4$, which violates dual feasibility $\\lambda \\geq 0$. Thus, Case 1 is the only valid solution.',
        exampleHe: 'מזער את $f(x) = (x - 3)^2$ הכפופה לאילוץ $x \\geq 1$ (שזהו $1 - x \\leq 0$).\n1. צורה סטנדרטית: $g(x) = 1 - x \\leq 0$. לגרנז\'יאן: $L(x, \\lambda) = (x-3)^2 + \\lambda(1-x)$.\n2. תנאי KKT:\n   - סטציונריות: $2(x - 3) - \\lambda = 0 \\implies \\lambda = 2(x - 3)$\n   - אפשריות: $x \\geq 1$, וכן $\\lambda \\geq 0$\n   - רפיון משלים: $\\lambda(1 - x) = 0$\n3. מקרה בדיקה 1: $\\lambda = 0 \\implies 2(x-3) = 0 \\implies x=3$. נבדוק אפשריות ראשונית: $3 \\geq 1$ (מתקיים!). האילוץ אינו פעיל, ו-$x^* = 3$ הוא המינימום הגלובלי שלנו.\n4. מקרה בדיקה 2: $\\lambda > 0 \\implies 1-x = 0 \\implies x=1$. סטציונריות נותנת $\\lambda = 2(1-3) = -4$, מה שמפר את האפשריות הדואלית $\\lambda \\geq 0$. לכן, מקרה 1 הוא הפתרון התקף היחיד.'
      },
      {
        id: 'def-opt-3-3',
        title: 'Barrier Methods & Projected Gradient Descent',
        titleHe: 'שיטות מחסום וירידת גרדיאנט מוטלת',
        simplifiedLogic: 'How do we solve constrained optimization using unconstrained solvers? We use two approaches:\n1. **Penalty Methods:** Penalize constraint violations from the outside (by adding a penalty proportional to the violation).\n2. **Barrier Methods:** Prevent violations from ever escaping the interior by adding a logarithmic barrier term (like $- \\mu \\ln(-g_i(x))$) that explodes to infinity at the boundary.\n\n**Visual Penalty vs. Barrier Map:**\n* **Penalty:** Violation occurs $\\rightarrow$ Penalty pulls it back. Fits from **outside** the feasible region.\n* **Barrier:** Solver approaches boundary $\\rightarrow$ Force field explodes $\\rightarrow$ Keeps iterations strictly **inside**.',
        simplifiedLogicHe: 'כיצד אנו פותרים אופטימיזציה עם אילוצים באמצעות פותרים ללא אילוצים? אנו משתמשים בשתי גישות:\n1. **שיטות קנס:** מענישות על חריגה מהאילוצים מבחוץ (על ידי הוספת קנס היחסי לגודל החריגה).\n2. **שיטות מחסום (Interior Point):** מונעות מהאלגוריתם לצאת מתחום האילוצים על ידי הוספת איבר מחסום לוגריתמי (כמו $- \\mu \\ln(-g_i(x))$) המתפוצץ לאינסוף בגבול התחום.\n\n**השוואת קנס מול מחסום:**\n* **שיטת קנס:** מתרחשת חריגה $\\rightarrow$ הקנס מושך את הפתרון חזרה. מגיעה מ**מחוץ** לתחום האפשרי.\n* **שיטת מחסום:** הפותר מתקרב לגבול $\\rightarrow$ שדה הכוח מתפוצץ $\\rightarrow$ שומר על האיטרציות strictly **בתוך** התחום.',
        toolboxConnection: 'The barrier scaling parameter $\\mu$ acts like Tikhonov regularization in **NLA Chapter 3**, where we solve a sequence of regularized problems as $\\mu \\to 0$!',
        toolboxConnectionHe: 'פרמטר המשקל של המחסום $\\mu$ פועל בדומה לרגולריזציית טיכונוב ב-**NLA פרק 3**, שבה אנו פותרים סדרה של בעיות מיוצבות כאשר $\\mu \\to 0$!',
        keyTakeaway: 'Barrier methods enforce inequalities strictly from the inside using logarithmic force fields that explode at constraint boundaries.',
        keyTakeawayHe: 'שיות מחסום אוכפות אי-שוויונות אך ורק מתוך התחום האפשרי על ידי שימוש בשדות כוח לוגריתמיים המתפוצצים בגבולות האילוצים.',
        content: '1. Barrier Methods (Interior Point): Converts inequality constraints into penalties using a barrier parameter $\\mu > 0$ that approaches 0:\n   $$\\min_x B(x, \\mu) = f(x) - \\mu \\sum_{i=1}^p \\ln(-g_i(x))$$\n2. Projected Gradient Descent: Handles constraints by taking a gradient step and then projecting the resulting vector back onto the feasible set $\\Omega$ using projection operator $P_\\Omega$:\n   $$x^{(k+1)} = P_\\Omega \\left( x^{(k)} - \\alpha^{(k)} \\nabla f(x^{(k)}) \\right)$$',
        contentHe: '1. שיטות מחסום (Interior Point): הופכות אילוצי אי-שוויון לקנסות בפונקציית המטרה באמצעות פרמטר מחסום $\\mu > 0$ השואף לאפס:\n   $$\\min_x B(x, \\mu) = f(x) - \\mu \\sum_{i=1}^p \\ln(-g_i(x))$$\n2. ירידת גרדיאנט מוטלת (Projected Gradient Descent): מטפלת באילוצים על ידי ביצוע צעד גרדיאנט סטנדרטי ולאחר מכן הטלת הוקטור המתקבל חזרה אל התחום האפשרי $\\Omega$ באמצעות אופרטור ההיטל $P_\\Omega$:\n   $$x^{(k+1)} = P_\\Omega \\left( x^{(k)} - \\alpha^{(k)} \\nabla f(x^{(k)}) \\right)$$\n',
        proof: 'Proof: Theorem on Barrier Log-Derivative\nWe show how the barrier term $- \\mu \\ln(-g_i(x))$ acts as a force field preventing iterations from escaping the interior of the feasible region.\n\n1. Let $B_i(x) = - \\ln(-g_i(x))$.\n2. Compute the gradient of this barrier term:\n   $$\\nabla B_i(x) = - \\frac{1}{-g_i(x)} \\nabla (-g_i(x)) = \\frac{\\nabla g_i(x)}{-g_i(x)}$$\n3. As $x$ approaches the constraint boundary (where $g_i(x) \\to 0^-$), the denominator approaches zero.\n4. Thus, the gradient magnitude $\\|\\nabla B_i(x)\\|_2 \\to \\infty$.\n5. This mathematically proves that as our solver approaches the boundary, the gradient force explodes, acting as an infinite barrier that keeps iterations strictly inside the feasible region, allowing standard unconstrained solvers to find constrained solutions safely.',
        proofHe: 'הוכחה: נגזרת מחסום לוגריתמית והתנהגות הגבול\nנראה כיצד איבר המחסום $- \\mu \\ln(-g_i(x))$ פועל כשדה כוח המונע מהאיטרציות לצאת מהחלק הפנימי של התחום האפשרי.\n\n1. נגדיר $B_i(x) = - \\ln(-g_i(x))$.\n2. נחשב את הגרדיאנט של איבר מחסום זה:\n   $$\\nabla B_i(x) = - \\frac{1}{-g_i(x)} \\nabla (-g_i(x)) = \\frac{\\nabla g_i(x)}{-g_i(x)}$$\n3. ככל ש-$x$ מתקרב לשפת האילוץ (כאשר $g_i(x) \\to 0^-$), המכנה שואף לאפס.\n4. לכן, גודל הגרדיאנט שואף לאינסוף: $\\|\\nabla B_i(x)\\|_2 \\to \\infty$.\n5. זה מוכיח מתמטית שכאשר הפותר מתקרב לשפה, כוח הגרדיאנט מתפוצץ ופועל כמחסום אינסופי השומר על האיטרציות strictly בתוך התחום האפשרי, ומאפשר שימוש בטוח בפותרים ללא אילוצים.',
        example: 'Project a point $y = [2.0, 3.0]^T$ onto the unit circle $\\Omega = \\{x \\in \\mathbb{R}^2 \\mid \\|x\\|_2 \\leq 1\\}$.\n1. The projection operator $P_\\Omega(y)$ finds the closest point in $\\Omega$ to $y$:\n   $$P_\\Omega(y) = \\frac{y}{\\|y\\|_2} \\quad \\text{if } \\|y\\|_2 > 1$$\n2. Since $\\|y\\|_2 = \\sqrt{4 + 9} = \\sqrt{13} \\approx 3.61 > 1$, we scale $y$ to the boundary:\n   $$x^* = P_\\Omega(y) = \\frac{1}{\\sqrt{13}} \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix} \\approx \\begin{bmatrix} 0.55 \\\\ 0.83 \\end{bmatrix}^T$$',
        exampleHe: 'הטל נקודה $y = [2.0, 3.0]^T$ על כדור היחידה $\\Omega = \\{x \\in \\mathbb{R}^2 \\mid \\|x\\|_2 \\leq 1\\}$.\n1. אופרטור ההיטל $P_\\Omega(y)$ מוצא את הנקודה הקרובה ביותר ב-\\Omega ל-y:\n   $$P_\\Omega(y) = \\frac{y}{\\|y\\|_2} \\quad \\text{אם } \\|y\\|_2 > 1$$\n2. מכיוון שמתקיים $\\|y\\|_2 = \\sqrt{4 + 9} = \\sqrt{13} \\approx 3.61 > 1$, אנו מנרמלים את $y$ לשפה:\n   $$x^* = P_\\Omega(y) = \\frac{1}{\\sqrt{13}} \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix} \\approx \\begin{bmatrix} 0.55 \\\\ 0.83 \\end{bmatrix}^T$$'
      },
      {
        id: 'def-opt-3-4',
        title: 'LICQ, Active Sets & Projection Operators',
        titleHe: 'תנאי LICQ, קבוצות פעילות ואופרטורי היטל',
        simplifiedLogic: 'Projection operators find the closest point in a domain $\\Omega$ to a target $y$. **Box-Constrained Projection** clips variables element-wise to their bounds. **Linear Equality Projection** projects points onto hyperplanes using Lagrange multipliers.\n\n**Visual Projection Formulation Map:**\n* **Box-Constrained (Clipping):** $(P_\\Omega(x))_i = \\min(u_i, \\max(l_i, x_i))$\n* **Linear Equality Hyperplane:** $P_\\Omega(y) = y - A^T(A A^T)^{-1}(A y - b)$',
        simplifiedLogicHe: 'אופרטורי היטל מוצאים את הנקודה הקרובה ביותר בתחום $\\Omega$ לנקודת יעד $y$. **היטל אילוצי תיבה** קוטם (קליפינג) משתנים איבר-איבר לגבולותיהם. **היטל אילוצי שוויון ליניאריים** מטיל נקודות על תתי-מרחבים באמצעות כופלי לגרנז\'.\n\n**מיפוי נוסחאות היטל:**\n* **אילוצי תיבה (קטימה):** $(P_\\Omega(x))_i = \\min(u_i, \\max(l_i, x_i))$\n* **אילוץ שוויון ליניארי:** $P_\\Omega(y) = y - A^T(A A^T)^{-1}(A y - b)$',
        toolboxConnection: 'Enforcing a box boundary $l \\leq x \\leq u$ is equivalent to enforcing an $L_\\infty$ distance metric from **NLA Chapter 1**! If our step exceeds the boundary, we "clip" it element-wise, which is the exact geometric equivalent of projecting onto a unit sphere in the $L_\\infty$ norm!',
        toolboxConnectionHe: 'אכיפת גבולות תיבה $l \\leq x \\leq u$ שקולה מתמטית לאכיפת מרחק במדד נורמת $L_\\infty$ מ-**NLA פרק 1**! אם הצעד שלנו חורג מהגבול, אנו "קוטמים" אותו איבר-איבר, שזהו המקביל הגיאומטרי המדויק של היטל על כדור היחידה בנורמת $L_\\infty$!',
        keyTakeaway: 'Hyperplane projection finds the closest feasible point by subtracting the orthogonal constraint discrepancy vector.',
        keyTakeawayHe: 'הטלה על על-מישור מוצאת את הנקודה האפשרית הקרובה ביותר על ידי חיסור וקטור פער האילוצים הניצב.',
        content: '**Linear Independence Constraint Qualification (LICQ)**: The KKT necessary conditions are only guaranteed to hold if the constraint gradients are linearly independent at the solution. Specifically, LICQ is satisfied at $x^*$ if the active constraint gradients are linearly independent:\n$$\\{\\nabla g_i(x^*), i \\in \\mathcal{A}(x^*)\\} \\cup \\{\\nabla h_j(x^*), j = 1..m\\} \\text{ are linearly independent}$$\nwhere $\\mathcal{A}(x^*) = \\{i \\mid g_i(x^*) = 0\\}$ is the **Active Set**.\n\n**Box-Constrained Projection**: For a box domain $l \\leq x \\leq u$, the projection operator $P_\\Omega(x)$ is computed element-wise by clipping:\n$$(P_\\Omega(x))_i = \\min(u_i, \\max(l_i, x_i))$$\n\n**Linear Equality Constraint Projection**: To project a point $y$ onto the hyperplane $Ax = b$ (where $A$ has full row rank):\n$$P_\\Omega(y) = y - A^T(A A^T)^{-1}(A y - b)$$\nThis returns the closest point on the plane to $y$.',
        contentHe: '**תנאי אי-תלות ליניארית של אילוצים (LICQ)**: תנאי KKT מובטחים להתקיים רק אם גרדיאנטי האילוצים הם בלתי תלויים ליניארית בפתרון האופטימלי. LICQ מתקיים ב-$x^*$ אם הגרדיאנטים של האילוצים הפעילים הם בלתי תלויים ליניארית:\n$$\\{\\nabla g_i(x^*), i \\in \\mathcal{A}(x^*)\\} \\cup \\{\\nabla h_j(x^*), j = 1..m\\} \\text{ are linearly independent}$$\nכאשר $\\mathcal{A}(x^*) = \\{i \\mid g_i(x^*) = 0\\}$ היא **הקבוצה הפעילה (Active Set)**.\n\n**היטל אילוצי תיבה (Box-Constrained Projection)**: עבור תחום תיבה $l \\leq x \\leq u$, אופרטור ההיטל $P_\\Omega(x)$ מחושב איבר-איבר על ידי קטימה (Clipping):\n$$(P_\\Omega(x))_i = \\min(u_i, \\max(l_i, x_i))$$\n\n**היטל אילוצי שוויון ליניאריים**: כדי להטיל נקודה $y$ על העל-מישור $Ax = b$ (כאשר $A$ היא בדרגת שורות מלאה):\n$$P_\\Omega(y) = y - A^T(A A^T)^{-1}(A y - b)$$\nזה מחזיר את הנקודה הקרובה ביותר על המישור ל-y.',
        proof: 'Proof: Derivation of Linear Equality Constraint Projection\n\nWe prove that $x^* = y - A^T(A A^T)^{-1}(A y - b)$ is the closest point on $Ax = b$ to $y$.\n\n1. The projection problem is a constrained optimization problem:\n   $$\\min_x \\frac{1}{2} \\|x - y\\|_2^2 \\quad \\text{s.t.} \\quad A x - b = 0$$\n2. The Lagrangian is:\n   $$L(x, \\mu) = \\frac{1}{2} \\|x - y\\|_2^2 + \\mu^T (A x - b)$$\n3. Take the gradient with respect to $x$ and set to zero (Stationarity):\n   $$\\nabla_x L = (x - y) + A^T \\mu = 0 \\implies x^* = y - A^T \\mu$$\n4. Left-multiply this equation by $A$:\n   $$A x^* = A y - A A^T \\mu$$\n5. Since $x^*$ must satisfy $A x^* = b$ (Feasibility):\n   $$b = A y - A A^T \\mu \\implies A A^T \\mu = A y - b$$\n6. Assuming $A$ has full row rank, $A A^T$ is invertible. Solving for $\\mu$:\n   $$\\mu = (A A^T)^{-1} (A y - b)$$\n7. Substitute this back into the stationarity equation:\n   $$x^* = y - A^T (A A^T)^{-1} (A y - b) \\quad \\square$$',
        proofHe: 'הוכחה: גזירת אופרטור ההיטל עבור אילוצי שוויון ליניאריים\n\nנוכיח כי הנקודה $x^* = y - A^T(A A^T)^{-1}(A y - b)$ היא הנקודה הקרובה ביותר על $Ax = b$ ל-y.\n\n1. בעיית ההיטל היא בעיית אופטימיזציה עם אילוצים:\n   $$\\min_x \\frac{1}{2} \\|x - y\\|_2^2 \\quad \\text{s.t.} \\quad A x - b = 0$$\n2. הלגרנז\'יאן מוגדר כ:\n   $$L(x, \\mu) = \\frac{1}{2} \\|x - y\\|_2^2 + \\mu^T (A x - b)$$\n3. נגזור ביחס ל-x ונשווה לאפס (סטציונריות):\n   $$\\nabla_x L = (x - y) + A^T \\mu = 0 \\implies x^* = y - A^T \\mu$$\n4. נכפיל את המשוואה הזו משמאל ב-$A$:\n   $$A x^* = A y - A A^T \\mu$$\n5. מכיוון שהפתרון $x^*$ חייב לקיים את האילוץ $A x^* = b$ (אפשריות):\n   $$b = A y - A A^T \\mu \\implies A A^T \\mu = A y - b$$\n6. בהנחה של-$A$ יש דרגת שורות מלאה, המטריצה $A A^T$ היא הפיכה. נפתור עבור $\\mu$:\n   $$\\mu = (A A^T)^{-1} (A y - b)$$\n7. נציב זאת חזרה לתוך משוואת הסטציונריות:\n   $$x^* = y - A^T (A A^T)^{-1} (A y - b) \\quad \\square$$',
        example: 'Project the point $y = [2, 4]^T$ onto the line $x_1 + x_2 = 2$.\n1. Standard matrix form: $A = \\begin{bmatrix} 1 & 1 \\end{bmatrix}$, $b = [2]$.\n2. Compute $A A^T = 1(1) + 1(1) = [2]$, and $(A A^T)^{-1} = [0.5]$.\n3. Compute discrepancy $A y - b = (2 + 4) - 2 = 4$.\n4. Compute projection step:\n   $$A^T(A A^T)^{-1}(A y - b) = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} [0.5] (4) = \\begin{bmatrix} 2 \\\\ 2 \\end{bmatrix}$$\n5. Compute projected point $x^* = [2, 4]^T - [2, 2]^T = [0, 2]^T$.\n6. Verify feasibility: $0 + 2 = 2$ ✓. Distance is $\\|[2, 4]^T - [0, 2]^T\\|_2 = \\sqrt{4+4} = \\sqrt{8} \\approx 2.83$ (the shortest possible distance).',
        exampleHe: 'הטל את הנקודה $y = [2, 4]^T$ על הישר $x_1 + x_2 = 2$.\n1. ייצוג מטריצי סטנדרטי: $A = \\begin{bmatrix} 1 & 1 \\end{bmatrix}$, $b = [2]$.\n2. נחשב $A A^T = 1(1) + 1(1) = [2]$, וההופכי שלו הוא $(A A^T)^{-1} = [0.5]$.\n3. נחשב את פער האילוץ $A y - b = (2 + 4) - 2 = 4$.\n4. נחשב את צעד ההיטל:\n   $$A^T(A A^T)^{-1}(A y - b) = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} [0.5] (4) = \\begin{bmatrix} 2 \\\\ 2 \\end{bmatrix}$$\n5. נקבל את הנקודה המוטלת $x^* = [2, 4]^T - [2, 2]^T = [0, 2]^T$.\n6. נבדוק אפשריות: $0 + 2 = 2$ ✓. המרחק הוא $\\|[2, 4]^T - [0, 2]^T\\|_2 = \\sqrt{4+4} = \\sqrt{8} \\approx 2.83$ (המרחק הקצר ביותר האפשרי).'
      },
      {
        id: 'def-opt-3-5',
        title: 'Penalty Methods & 2nd-Order Constrained Conditions',
        titleHe: 'שיטות קנס ותנאי אופטימליות מסדר שני עם אילוצים',
        simplifiedLogic: 'For constrained problems, unconstrained SOSC does not apply. Instead, we require the Lagrangian Hessian to be positive definite only along directions in the **Critical Subspace** (directions that tangent the active constraints). This is because we only care about curvature in directions we can actually step without violating constraints.\n\n**Penalty Methods:** Converts constrained optimization into a sequence of unconstrained problems. The **Quadratic Penalty** formulation for equality constraints $h(x) = 0$ is:\n$$Q(x, \\mu) = f(x) + \\frac{\\mu}{2} \\sum_{j=1}^m (h_j(x))^2$$\nwhere the penalty parameter $\\mu > 0$ is increased towards $\\infty$ to force feasibility.',
        simplifiedLogicHe: 'עבור בעיות עם אילוצים, תנאי SOSC הרגיל אינו תקף. במקום זאת, אנו דורשים שההסיאן של הלגרנז\'יאן יהיה חיובי לחלוטין רק לאורך כיוונים ב**תת-המרחב הקריטי** (כיוונים המשיקים לאילוצים הפעילים). זאת מכיוון שעקמומיות בכיוונים החורגים מהאילוצים אינה מעניינת אותנו.\n\n**שיטות קנס:** הופכות בעיות עם אילוצים לסדרה של בעיות ללא אילוצים על ידי הוספת איבר קנס ריבועי לפונקציית המטרה, כגון $\\frac{\\mu}{2} (h(x))^2$, והגדלת $\\mu \\to \\infty$.',
        toolboxConnection: 'Projecting the Lagrangian Hessian onto the critical subspace relies on orthogonal basis projections learned in **NLA Chapter 5**! Using quadratic penalty formulations is mathematically identical to the Tikhonov regularization in **NLA Chapter 3**!',
        toolboxConnectionHe: 'הטלת הסיאן הלגרנז\'יאן על תת-המרחב הקריטי מבוססת על הטלות בסיס אורתוגונליות שנלמדו ב-**NLA פרק 5**! שימוש בשיטות קנס ריבועיות זהה מבחינה מתמטית לרגולריזציית טיכונוב שנלמדה ב-**NLA פרק 3**!',
        keyTakeaway: 'Constrained sufficiency only requires positive curvature along critical directions that tangent the active constraint boundary.',
        keyTakeawayHe: 'תנאי מספיק עם אילוצים דורש עקמומיות חיובית רק לאורך כיוונים קריטיים המשיקים לגבול האילוצים הפעילים.',
        content: '**Penalty Methods**: Converts constrained optimization into a sequence of unconstrained problems. The **Quadratic Penalty** formulation for equality constraints $h(x) = 0$ is:\n$$Q(x, \\mu) = f(x) + \\frac{\\mu}{2} \\sum_{j=1}^m (h_j(x))^2$$\nwhere the penalty parameter $\\mu > 0$ is increased towards $\\infty$ to force feasibility.\n\n**Second-Order Constrained Optimality Conditions**:\nLet $L(x, \\lambda, \\mu)$ be the Lagrangian. We define the **Critical Subspace** $C(x^*)$ of directions that do not immediately increase active constraints.\n1. **Second-Order Necessary Condition (SONC)**: If $x^*$ is a local minimizer, then:\n   $$d^T \\nabla^2_{xx} L(x^*, \\lambda^*, \\mu*) d \\geq 0 \\quad \\forall d \\in C(x^*)$$\n2. **Second-Order Sufficient Condition (SOSC)**: If KKT is satisfied, and the Hessian is strictly positive definite on the critical subspace:\n   $$d^T \\nabla^2_{xx} L(x^*, \\lambda^*, \\mu^*) d > 0 \\quad \\forall d \\in C(x^*) \\setminus \\{0\\}$$\n   then $x^*$ is a strict constrained local minimizer.',
        contentHe: '**שיטות קנס (Penalty Methods)**: הופכות אופטימיזציה עם אילוצים לסדרה של בעיות ללא אילוצים. נוסחת הקנס הריבועי עבור אילוצי שוויון $h(x) = 0$ היא:\n$$Q(x, \\mu) = f(x) + \\frac{\\mu}{2} \\sum_{j=1}^m (h_j(x))^2$$\nכאשר פרמטר הקנס $\\mu > 0$ מוגדל בהדרגה לכיוון $\\infty$ כדי לאלץ אפשריות.\n\n**תנאי אופטימליות מסדר שני עם אילוצים**:\nיהי $L(x, \\lambda, \\mu)$ הלגרנז\'יאן. נגדיר את **תת-המרחב הקריטי** $C(x^*)$ של כיוונים שאינם מגדילים באופן מיידי אילוצים פעילים.\n1. **תנאי הכרחי מסדר שני (SONC)**: אם $x^*$ היא נקודת מינימום מקומי עם אילוצים, אזי:\n   $$d^T \\nabla^2_{xx} L(x^*, \\lambda^*, \\mu^*) d \\geq 0 \\quad \\forall d \\in C(x^*)$$\n2. **תנאי מספיק מסדר שני (SOSC)**: אם תנאי KKT מתקיימים, ומטריצת ההסיאן היא חיובית לחלוטין באופן קשיח מעל תת-המרחב הקריטי:\n   $$d^T \\nabla^2_{xx} L(x^*, \\lambda^*, \\mu^*) d > 0 \\quad \\forall d \\in C(x^*) \\setminus \\{0\\}$$\n   אזי $x^*$ היא נקודת מינימום מקומי חזק כפוף לאילוצים.',
        proof: 'Proof: Theorem on SOSC (Second-Order Sufficient Condition)\n\nWe prove that if KKT holds and the Lagrangian Hessian $\\nabla^2_{xx} L(x^*, \\lambda^*, \\mu^*)$ is positive definite on the critical subspace $C(x^*)$, then $f(x) > f(x^*)$ for all neighboring feasible points $x \\neq x^*$.\n\n1. Let $x$ be a feasible point close to $x^*$. Let $d = x - x^*$.\n2. Since $x$ and $x^*$ are feasible, $h(x) = h(x^*) = 0$. For active inequalities, $g_i(x) \\leq 0 = g_i(x^*)$.\n3. The Taylor expansion of the Lagrangian with respect to $x$ at $(x^*, \\lambda^*, \\mu^*)$ is:\n   $$L(x, \\lambda^*, \\mu^*) = L(x^*, \\lambda^*, \\mu^*) + \\langle \\nabla_x L(x^*), d \\rangle + \\frac{1}{2} d^T \\nabla^2_{xx} L(x^*) d + o(\\|d\\|_2^2)$$\n4. Since stationarity holds, $\\nabla_x L(x^*) = 0$:\n   $$L(x, \\lambda^*, \\mu^*) = L(x^*, \\lambda^*, \\mu^*) + \\frac{1}{2} d^T \\nabla^2_{xx} L(x^*) d + o(\\|d\\|_2^2)$$\n5. Expanding the Lagrangian definitions and using feasibility ($h_j(x)=0, \\lambda_i \\geq 0, g_i(x) \\leq 0$):\n   $$L(x) = f(x) + \\sum \\lambda_i g_i(x) \\leq f(x) \\quad \\text{and} \\quad L(x^*) = f(x^*) + \\sum \\lambda_i g_i(x^*) = f(x^*)$$\n6. Thus:\n   $$f(x) - f(x^*) \\geq L(x) - L(x^*) = \\frac{1}{2} d^T \\nabla^2_{xx} L(x^*) d + o(\\|d\\|_2^2)$$\n7. Since the displacement $d$ belongs to the critical subspace (to first order), the quadratic term is strictly positive ($d^T \\nabla^2_{xx} L d > 0$), dominating the higher-order terms.\n8. Therefore, $f(x) - f(x^*) > 0 \\implies f(x) > f(x^*)$, proving $x^*$ is a strict local minimizer! $\\square$',
        proofHe: 'הוכחה: משפט על תנאי מספיק מסדר שני עם אילוצים (SOSC)\n\nנוכיח כי אם KKT מתקיים וההסיאן של הלגרנז\'יאן $\\nabla^2_{xx} L(x^*, \\lambda^*, \\mu^*)$ הוא חיובי לחלוטין מעל תת-המרחב הקריטי $C(x^*)$, אזי מתקיים $f(x) > f(x^*)$ לכל נקודה אפשרית קרובה $x \\neq x^*$.\n\n1. תהי $x$ נקודה אפשרית קרובה ל-$x^*$. נסמן $d = x - x^*$.\n2. מכיוון ש-$x$ ו-$x^*$ הן אפשריות, מתקיים $h(x) = h(x^*) = 0$. עבור אילוצי אי-שוויון פעילים מתקיים $g_i(x) \\leq 0 = g_i(x^*)$.\n3. פיתוח טיילור של הלגרנז\'יאן ביחס ל-x בנקודה $(x^*, \\lambda^*, \\mu^*)$ הוא:\n   $$L(x, \\lambda^*, \\mu^*) = L(x^*, \\lambda^*, \\mu^*) + \\langle \\nabla_x L(x^*), d \\rangle + \\frac{1}{2} d^T \\nabla^2_{xx} L(x^*) d + o(\\|d\\|_2^2)$$\n4. מכיוון שמתקיים תנאי הסטציונריות, $\\nabla_x L(x^*) = 0$:\n   $$L(x, \\lambda^*, \\mu^*) = L(x^*, \\lambda^*, \\mu^*) + \\frac{1}{2} d^T \\nabla^2_{xx} L(x^*) d + o(\\|d\\|_2^2)$$\n5. נפתח את הגדרת הלגרנז\'יאן ונשתמש באפשריות הנקודות ($h_j(x)=0, \\lambda_i \\geq 0, g_i(x) \\leq 0$):\n   $$L(x) = f(x) + \\sum \\lambda_i g_i(x) \\leq f(x) \\quad \\text{וכן} \\quad L(x^*) = f(x^*) + \\sum \\lambda_i g_i(x^*) = f(x^*)$$\n6. לכן:\n   $$f(x) - f(x^*) \\geq L(x) - L(x^*) = \\frac{1}{2} d^T \\nabla^2_{xx} L(x^*) d + o(\\|d\\|_2^2)$$\n7. מכיוון שההעתקה $d$ שייכת לתת-המרחב הקריטי (מסדר ראשון), האיבר הריבועי הוא חיובי ממש ($d^T \\nabla^2_{xx} L d > 0$), והוא הדומיננטי ביחס לאיברים מסדר גבוה יותר.\n8. לכן, $f(x) - f(x^*) > 0 \\implies f(x) > f(x^*)$, מה שמוכיח כי $x^*$ היא נקודת מינימום מקומי חזק! $\\square$',
        example: 'Minimize $f(x, y) = -xy$ subject to $x + y = 2$ (Lagrangian $L = -xy + \\mu(x+y-2)$).\n1. We found the stationary point $x^* = 1, y^* = 1$ with multiplier $\\mu^* = 1$.\n2. Compute Lagrangian Hessian:\n   $$\\nabla^2_{xx} L = \\begin{bmatrix} 0 & -1 \\\\ -1 & 0 \\end{bmatrix}$$\n3. The eigenvalues of this Hessian are $-1$ and $+1$, so it is indefinite on $\\mathbb{R}^2$! Let\'s check the critical subspace $C(x^*)$:\n   - Active constraint gradient: $\\nabla h = [1, 1]^T$.\n   - Subspace $C(x^*) = \\{d \\in \\mathbb{R}^2 \\mid d_1 + d_2 = 0\\} \\implies d = [t, -t]^T$.\n4. Evaluate Hessian on $d \\in C(x^*)$:\n   $$d^T \\nabla^2_{xx} L d = \\begin{bmatrix} t & -t \\end{bmatrix} \\begin{bmatrix} 0 & -1 \\\\ -1 & 0 \\end{bmatrix} \\begin{bmatrix} t \\\\ -t \\end{bmatrix} = \\begin{bmatrix} t & -t \\end{bmatrix} \\begin{bmatrix} t \\\\ -t \\end{bmatrix} = t^2 + t^2 = 2t^2$$\n5. For all $t \\neq 0$, $2t^2 > 0$, meaning the Hessian is strictly positive definite on the critical subspace! By SOSC, $(1,1)$ is a strict local minimizer.',
        exampleHe: 'מזער את $f(x, y) = -xy$ הכפופה לאילוץ $x + y = 2$ (לגרנז\'יאן $L = -xy + \\mu(x+y-2)$).\n1. מצאנו את הנקודה הסטציונרית $x^* = 1, y^* = 1$ עם כופל $\\mu^* = 1$.\n2. נחשב את הסיאן הלגרנז\'יאן:\n   $$\\nabla^2_{xx} L = \\begin{bmatrix} 0 & -1 \\\\ -1 & 0 \\end{bmatrix}$$\n3. הערכים העצמיים של הסיאן זה הם $-1$ ו-$+1$, לכן המטריצה אינה מוגדרת (Indefinite) מעל $\\mathbb{R}^2$! נבדוק את התנהגותה מעל תת-המרחב הקריטי $C(x^*)$:\n   - גרדיאנט האילוץ הפעיל: $\\nabla h = [1, 1]^T$.\n   - תת-המרחב הקריטי: $C(x^*) = \\{d \\in \\mathbb{R}^2 \\mid d_1 + d_2 = 0\\} \\implies d = [t, -t]^T$.\n4. נערך את ההסיאן על $d \\in C(x^*)$:\n   $$d^T \\nabla^2_{xx} L d = \\begin{bmatrix} t & -t \\end{bmatrix} \\begin{bmatrix} 0 & -1 \\\\ -1 & 0 \\end{bmatrix} \\begin{bmatrix} t \\\\ -t \\end{bmatrix} = \\begin{bmatrix} t & -t \\end{bmatrix} \\begin{bmatrix} t \\\\ -t \\end{bmatrix} = t^2 + t^2 = 2t^2$$\n5. לכל $t \\neq 0$ מתקיים $2t^2 > 0$, מה שאומר שההסיאן חיובי לחלוטין באופן קשיח מעל תת-המרחב הקריטי! לפי SOSC, הנקודה $(1,1)$ היא מינימום מקומי חזק כפוף לאילוצים.'
      }
    ],
    quiz: [
      {
        question: 'Which of the KKT conditions requires that inequality constraint multipliers must be non-negative (λ_i ≥ 0)?',
        questionHe: 'איזה מתנאי KKT דורש שכופלי אילוצי אי-שוויון יהיו אי-שליליים (λ_i ≥ 0)?',
        options: [
          'Complementary Slackness',
          'Dual Feasibility',
          'Primal Feasibility',
          'Stationarity'
        ],
        optionsHe: [
          'רפיון משלים (Complementary Slackness)',
          'אפשריות דואלית (Dual Feasibility)',
          'אפשריות ראשונית (Primal Feasibility)',
          'סטציונריות (Stationarity)'
        ],
        correctAnswerIndex: 1,
        explanation: 'Dual Feasibility enforces that inequality multipliers are non-negative, representing that relaxing the constraint would decrease (or keep constant) the objective value, never increase it.',
        explanationHe: 'אפשריות דואלית אוכפת שכופלי אילוצי אי-שוויון יהיו אי-שליליים, מה שמייצג ששחרור האילוץ יקטין (או ישאיר קבוע) את ערך פונקציית המטרה, ולעולם לא יגדיל אותו.'
      },
      {
        question: 'What is the primary geometric concept behind Projected Gradient Descent?',
        questionHe: 'מהו הקונספט הגיאומטרי העיקרי מאחורי ירידת גרדיאנט מוטלת (Projected Gradient Descent)?',
        options: [
          'It forces the objective gradient to be zero.',
          'It takes a standard gradient step and then mathematically projects the point back to the closest feasible point inside the constraint boundary.',
          'It ignores constraints entirely.',
          'It rotates the coordinate axes.'
        ],
        optionsHe: [
          'היא מאלצת את גרדיאנט פונקציית המטרה להיות אפס.',
          'היא מבצעת צעד גרדיאנט סטנדרטי ולאחר מכן מטילה מתמטית את הנקודה חזרה לנקודה האפשרית הקרובה ביותר בתוך גבול האילוצים.',
          'היא מתעלמת לחלוטין מהאילוצים.',
          'היא מסובבת את צירי הקואורדינטות.'
        ],
        correctAnswerIndex: 1,
        explanation: 'Projected GD ensures feasibility by applying the projection operator P_Ω after each step, mapping any out-of-bounds vector back onto the boundary of the feasible set.',
        explanationHe: 'ירידת גרדיאנט מוטלת מבטיחה אפשריות על ידי הפעלת אופרטור ההיטל P_Ω לאחר כל צעד, מה שממפה כל וקטור שחורג מהגבול חזרה אל שפת קבוצת האפשריות.'
      }
    ]
  }
];
