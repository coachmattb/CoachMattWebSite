import React, { useEffect, useState } from 'react';
import { 
  Trophy, 
  ClipboardList, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Mail, 
  BookOpen,
  Download,
  Play, 
  Sparkles, 
  X, 
  Send,
  Clock,
  BarChart3
} from 'lucide-react';

interface AppItem {
  id: string;
  title: string;
  category: 'Analytics' | 'Team Management';
  tagline: string;
  description: string;
  features: string[];
  image: string;
  imageFit?: 'contain' | 'cover';
  screenshots?: string[];
  comingSoon?: boolean;
  url: string;
  metrics: string;
}

interface SocialLinksProps {
  className: string;
  compact?: boolean;
}

function SocialLinks({ className, compact = false }: SocialLinksProps) {
  const linkClassName = `${compact ? 'w-6 h-6 sm:w-8 sm:h-8' : 'w-10 h-10'} rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 transition-all`;
  const iconClassName = compact ? 'w-3 h-3 sm:w-4 sm:h-4' : 'w-4 h-4';

  return (
    <div className={className}>
      <a href="https://www.reddit.com/user/coachmattb77/" target="_blank" rel="noopener noreferrer" className={linkClassName} aria-label="Reddit">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClassName}>
          <path d="m12 6.5 1-3.5 4 1" />
          <circle cx="18" cy="3.5" r="1.5" />
          <path d="M12 6.5c-4.7 0-8.5 3-8.5 7.2S7.3 21 12 21s8.5-3 8.5-7.3S16.7 6.5 12 6.5Z" />
          <circle cx="8.5" cy="13.5" r=".8" fill="currentColor" stroke="none" />
          <circle cx="15.5" cy="13.5" r=".8" fill="currentColor" stroke="none" />
          <path d="M8.5 16c1.8 1.5 5.2 1.5 7 0" />
        </svg>
      </a>
      <a href="https://x.com/coachmattb77" target="_blank" rel="noopener noreferrer" className={linkClassName} aria-label="X">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={iconClassName}>
          <path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.3L6.6 22H3.5l7.3-8.4L3 2h6.2l4.3 5.8L18.9 2Zm-1.1 18h1.7L8.3 3.9H6.5L17.8 20Z" />
        </svg>
      </a>
      <a href="https://www.instagram.com/coachmattb77/" target="_blank" rel="noopener noreferrer" className={linkClassName} aria-label="Instagram">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClassName}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a href="https://www.facebook.com/coachmattb77/" target="_blank" rel="noopener noreferrer" className={linkClassName} aria-label="Facebook">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={iconClassName}>
          <path d="M13.8 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.7-.1-1.6-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5V10H7v3h3v8h3.8Z" />
        </svg>
      </a>
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState<'en' | 'pl'>('en');
  const isPolish = language === 'pl';
  const translate = (english: string, polish: string) => isPolish ? polish : english;
  const [activeTab, setActiveTab] = useState<'all' | 'Analytics' | 'Team Management'>('all');
  const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);
  const [expandedTip, setExpandedTip] = useState<number | null>(0);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const title = translate(
      'CoachMattB | Basketball Coaching, Drills & Apps',
      'CoachMattB | Trening koszykarski, ćwiczenia i aplikacje'
    );
    const description = translate(
      'Basketball coaching resources, youth basketball apps, drills, plays and skills programmes from CoachMattB, a coach and sports-tech creator in Ireland.',
      'Materiały dla trenerów koszykówki, aplikacje, ćwiczenia i programy rozwoju umiejętności od CoachMattB, trenera i twórcy technologii sportowych z Irlandii.'
    );

    document.documentElement.lang = language;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', isPolish ? 'pl_PL' : 'en_IE');
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
  }, [language, isPolish]);

  const apps: AppItem[] = [
    {
      id: 'coachboard',
      title: 'CoachBoard',
      category: 'Analytics',
      tagline: translate('Your entire basketball season, all in one place', 'Cały sezon koszykarski w jednej aplikacji'),
      description: translate(
        'Manage your basketball season from one app: track schedules and league standings, follow team and player stats, record live game stats, and turn the season’s numbers into useful insights.',
        'Zarządzaj sezonem koszykarskim w jednej aplikacji: śledź terminarz i tabele ligowe, sprawdzaj statystyki drużyny i zawodników, zapisuj statystyki meczowe na żywo i zamieniaj dane w przydatne wnioski.'
      ),
      features: [
        translate('Season tracking, schedules, and league standings', 'Terminarz sezonu i tabele ligowe'),
        translate('Team stats and individual player stat profiles', 'Statystyki drużyny i profile zawodników'),
        translate('Live game stat tracking from the sideline', 'Śledzenie statystyk meczu na żywo z ławki trenerskiej'),
        translate('Season insights to follow team and player progress', 'Analizy sezonu i postępów drużyny oraz zawodników')
      ],
      image: './public/coachboard-icon.png',
      imageFit: 'contain',
      url: 'https://play.google.com/store/apps/details?id=com.coachmattb.coachboard',
      metrics: translate('All-in-One Season Hub', 'Centrum całego sezonu')
    },
    {
      id: 'courtside-hub',
      title: 'Courtside Hub: Basketball',
      category: 'Team Management',
      tagline: translate('A different approach to live games, seasons, and player stats', 'Nowe podejście do meczów, sezonów i statystyk zawodników'),
      description: translate(
        'Ditch the clipboards and scattered apps. Courtside Hub brings game planning, practice building, live stat tracking, roster management, and season-long player development into one coach-designed basketball assistant.',
        'Odstaw schowki i rozproszone aplikacje. Courtside Hub łączy planowanie meczów i treningów, statystyki na żywo, zarządzanie składem oraz całosezonowy rozwój zawodników w jednym asystencie stworzonym przez trenera.'
      ),
      features: [
        translate('Interactive playbook, tactical diagrams, and opponent scouting', 'Interaktywny playbook, diagramy taktyczne i analiza przeciwników'),
        translate('Time-blocked practices, drill library, and coach sharing', 'Treningi podzielone na bloki, biblioteka ćwiczeń i współpraca trenerów'),
        translate('Live box scores, advanced metrics, and shot charts', 'Wyniki i statystyki na żywo, zaawansowane wskaźniki i mapy rzutów'),
        translate('Player profiles, attendance, rotations, and playing time', 'Profile zawodników, obecność, rotacje i czas gry'),
        translate('Season stats, development reports, and exportable box scores', 'Statystyki sezonowe, raporty rozwoju i eksport wyników meczów'),
        translate('Offline access for practices and live games', 'Dostęp offline podczas treningów i meczów')
      ],
      image: './public/courtside-hub-logo.jpg',
      imageFit: 'cover',
      screenshots: ['./public/courtside-hub-live-tracker.jpg', './public/courtside-hub-box-score.jpg'],
      comingSoon: true,
      url: '#',
      metrics: translate('Coming Soon', 'Wkrótce')
    }
  ];

  const coachingTips = [
    {
      title: translate('Structuring High-Intensity 90-Minute Practices', 'Jak zaplanować intensywny, 90-minutowy trening'),
      category: translate('Practice Design', 'Planowanie treningu'),
      summary: translate('Avoid long standing lines. Maximize player touches by splitting your gym into 3 independent micro-stations running simultaneously.', 'Unikaj długich kolejek. Zwiększ liczbę kontaktów z piłką, dzieląc salę na 3 niezależne stacje ćwiczeń działające jednocześnie.'),
      details: translate(
        'In youth development, standing in line is the number one killer of engagement. By implementing 15-minute high-tempo blocks where players rotate through shooting mechanics, 3v3 decision making, and conditioning stations, you increase active heart rates and ball touches by 300%.',
        'W szkoleniu młodzieży stanie w kolejce najbardziej obniża zaangażowanie. Wprowadź 15-minutowe, dynamiczne bloki, w których zawodnicy rotują między stacją techniki rzutu, podejmowaniem decyzji w grze 3 na 3 i ćwiczeniami kondycyjnymi. Dzięki temu mogą być aktywni i częściej pracować z piłką.'
      )
    },
    {
      title: translate('Tracking Individual Progress Without Overwhelming Stats', 'Jak śledzić postępy zawodników bez nadmiaru statystyk'),
      category: translate('Player Development', 'Rozwój zawodników'),
      summary: translate('Focus on 3 core controllable metrics per player rather than raw scoring averages to build lasting confidence.', 'Aby budować pewność siebie, skup się na 3 kluczowych, zależnych od zawodnika wskaźnikach zamiast na samej średniej punktów.'),
      details: translate(
        'Scoring fluctuates based on role and opponent. Instead, grade players weekly on defensive stance recoveries, effective box-outs, and communication volume on the floor. When players see growth in hustle metrics, scoring follows naturally.',
        'Liczba punktów zależy od roli zawodnika i przeciwnika. Co tydzień oceniaj za to powrót do prawidłowej pozycji w obronie, skuteczność zastawiania i komunikację na boisku. Gdy zawodnicy widzą postępy w zaangażowaniu, często poprawiają się też wyniki punktowe.'
      )
    },
    {
      title: translate('Game-Day Halftime Adjustments: Less Is More', 'Korekty w przerwie meczu: mniej znaczy więcej'),
      category: translate('Game Strategy', 'Strategia meczowa'),
      summary: translate('Limit halftime adjustments to one defensive tweak and one offensive spacing correction.', 'Ogranicz korekty w przerwie do jednej zmiany w obronie i jednej poprawki ustawienia w ataku.'),
      details: translate(
        'Coaches often overwhelm players with tactical whiteboards during the 8-minute halftime break. Simplify your message: identify one opponent tendency we must take away, and one spot on the floor we are attacking in transition. Clarity beats complexity every time.',
        'Podczas ośmiominutowej przerwy trenerzy często przekazują zawodnikom zbyt wiele informacji. Uprość komunikat: wskaż jedną tendencję przeciwnika, którą trzeba zatrzymać, i jedno miejsce na boisku, które należy atakować w kontrze. Jasność przekazu zawsze wygrywa ze złożonością.'
      )
    },
    {
      title: translate('Building Resilient Culture Through Positive Accountability', 'Budowanie odporności zespołu przez pozytywną odpowiedzialność'),
      category: translate('Team Culture', 'Kultura zespołu'),
      summary: translate('Shift feedback from emotional sideline yelling to objective film-backed standards.', 'Zastąp emocjonalne krzyki z ławki obiektywną informacją zwrotną opartą na nagraniach i jasno określonych standardach.'),
      details: translate(
        'When players review their own clips in our app post-game, they self-correct faster than any coach lecture. Pair high expectations with transparent, data-backed praise to build unshakeable team trust.',
        'Gdy po meczu zawodnicy oglądają własne nagrania w naszej aplikacji, szybciej sami korygują błędy niż po wysłuchaniu trenerskiego wykładu. Łącz wysokie wymagania z przejrzystą pochwałą opartą na danych, aby budować trwałe zaufanie w zespole.'
      )
    }
  ];

  const localizedApps = apps.map((app) => ({
    ...app,
    categoryLabel: app.category === 'Analytics'
      ? translate('Analytics', 'Analityka')
      : translate('Team Management', 'Zarządzanie zespołem')
  }));
  const filteredApps = activeTab === 'all' 
    ? localizedApps
    : localizedApps.filter(app => app.category === activeTab);
  const localizedSelectedApp = selectedApp
    ? localizedApps.find(app => app.id === selectedApp.id)
    : null;

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactError(null);
    setIsSubmittingContact(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/coachmattb@proton.me', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          _replyto: contactForm.email,
          _subject: `New website message from ${contactForm.name}`,
          message: contactForm.message
        })
      });
      const result = await response.json() as { success?: boolean | string; message?: string };

      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error(result.message || 'The email service rejected the message.');
      }

      setFormSubmitted(true);
      setTimeout(() => {
        setContactForm({ name: '', email: '', message: '' });
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Contact form submission failed', error);
      setContactError('We couldn’t send your message. Please try again or email coachmattb@proton.me.');
    } finally {
      setIsSubmittingContact(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-orange-500 selection:text-white">
      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center gap-1 sm:gap-2 group whitespace-nowrap shrink-0">
            <img src="./public/coachmatt-logo.jpg" alt={translate('CoachMattB logo', 'Logo CoachMattB')} className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl object-cover shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform" />
            <div>
              <span className="text-base sm:text-xl font-extrabold tracking-tight text-white font-heading">CoachMattB</span>
              <span className="hidden sm:block text-[10px] text-orange-400 font-medium tracking-widest uppercase">{translate('Sports Tech Studio', 'Studio technologii sportowych')}</span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-6 text-xs xl:text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors whitespace-nowrap shrink-0">{translate('About', 'O mnie')}</a>
            <a href="#apps" className="hover:text-white transition-colors whitespace-nowrap shrink-0">{translate('Apps & Tools', 'Aplikacje i narzędzia')}</a>
            <a href="#programs" className="hover:text-white transition-colors whitespace-nowrap shrink-0">{translate('Drills & Programs', 'Ćwiczenia i programy')}</a>
            <a href="#insights" className="hover:text-white transition-colors whitespace-nowrap shrink-0">{translate('Coaching Tips', 'Porady trenerskie')}</a>
            <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap shrink-0">{translate('Contact', 'Kontakt')}</a>
            <button
              type="button"
              onClick={() => setLanguage(isPolish ? 'en' : 'pl')}
              className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-bold text-orange-300 hover:border-orange-500 transition-colors"
              aria-label={translate('Switch language to Polish', 'Zmień język na angielski')}
              aria-pressed={isPolish}
            >
              {isPolish ? 'PL' : 'EN'}
            </button>
          </nav>

          {/* Zone 3: Social Links */}
          <SocialLinks compact className="flex items-center gap-0.5 sm:gap-2 shrink-0" />

          {/* Zone 4: Primary Action */}
          <div className="flex items-center gap-1 sm:gap-3 shrink-0">
            <a 
              href="#apps" 
              className="hidden xl:inline-flex px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange-500/25 transition-all whitespace-nowrap shrink-0"
            >
              {translate('Explore Apps', 'Poznaj aplikacje')}
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1 sm:p-2 text-slate-400 hover:text-white"
              aria-label={translate('Toggle menu', 'Otwórz menu')}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">{translate('About', 'O mnie')}</a>
            <a href="#apps" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">{translate('Apps & Tools', 'Aplikacje i narzędzia')}</a>
            <a href="#programs" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">{translate('Drills & Programs', 'Ćwiczenia i programy')}</a>
            <a href="#insights" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">{translate('Coaching Tips', 'Porady trenerskie')}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">{translate('Contact', 'Kontakt')}</a>
            <button
              type="button"
              onClick={() => {
                setLanguage(isPolish ? 'en' : 'pl');
                setMobileMenuOpen(false);
              }}
              className="rounded-lg border border-slate-700 px-3 py-2 text-sm font-bold text-orange-300 hover:border-orange-500 transition-colors"
              aria-label={translate('Switch language to Polish', 'Zmień język na angielski')}
              aria-pressed={isPolish}
            >
              {isPolish ? 'Polski (PL)' : 'English (EN)'}
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-24 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-950/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{translate('Youth Basketball Coaching & Custom Tech Suite', 'Trening koszykarski dla młodzieży i nowoczesne technologie')}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-heading uppercase leading-[1.05]">
              {translate('Elevate Your Program.', 'Rozwijaj swoją drużynę.')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-400">
                {translate('Simplify Your Season.', 'Uprość cały sezon.')}
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {translate('Hi, I’m ', 'Cześć, jestem ')}<strong className="text-white font-semibold">CoachMattB</strong>{translate('. As a veteran youth basketball coach and software builder, I create high-performance web apps that eliminate administrative friction, track player development objectively, and give you more time to teach the game.', '. Jako doświadczony trener koszykówki młodzieżowej i twórca oprogramowania buduję wydajne aplikacje internetowe, które upraszczają administrację, pomagają obiektywnie śledzić rozwój zawodników i dają więcej czasu na naukę gry.')}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#apps" 
                className="px-7 py-3.5 text-sm font-bold tracking-wide text-white bg-orange-500 rounded-xl hover:bg-orange-600 shadow-xl shadow-orange-500/30 transition-all flex items-center gap-2"
              >
                <span>{translate('Explore the Apps', 'Poznaj aplikacje')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="px-7 py-3.5 text-sm font-bold tracking-wide text-slate-300 bg-slate-900 border border-slate-700 rounded-xl hover:bg-slate-800 hover:text-white transition-all"
              >
                {translate('Get in Touch', 'Skontaktuj się')}
              </a>
            </div>

            {/* Quick Proof Strip */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80">
              <div>
                <p className="text-2xl lg:text-3xl font-extrabold text-white font-heading">{translate('Since 2018', 'Od 2018')}</p>
                <p className="text-xs text-slate-400">{translate('Coaching with Carlow', 'Trener w Carlow')}</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-extrabold text-orange-400 font-heading">{translate('2 Apps', '2 aplikacje')}</p>
                <p className="text-xs text-slate-400">{translate('1 Available + 1 Coming Soon', '1 dostępna + 1 wkrótce')}</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-extrabold text-white font-heading">100</p>
                <p className="text-xs text-slate-400">{translate('Coaches & Players', 'Trenerów i zawodników')}</p>
              </div>
            </div>
          </div>

          {/* Featured App */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-600 opacity-30 blur-xl"></div>
            <div className="relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
              <div className="w-full h-[380px] bg-gradient-to-br from-slate-900 via-slate-950 to-orange-950 flex flex-col items-center justify-center p-8 pb-28 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px]" />
                <img src="./public/coachboard-icon.png" alt={translate('CoachBoard basketball app icon', 'Ikona aplikacji koszykarskiej CoachBoard')} className="relative z-10 w-32 h-32 rounded-2xl bg-white object-contain p-2 mb-4 shadow-2xl shadow-orange-500/20" />
                <h3 className="text-3xl font-bold text-white font-heading mb-2">CoachBoard</h3>
                <p className="text-xs text-slate-300 max-w-sm">{translate('Your whole basketball season in one place: stats, live game tracking, insights, and league standings.', 'Cały sezon koszykarski w jednym miejscu: statystyki, śledzenie meczów na żywo, analizy i tabele ligowe.')}</p>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">CoachBoard</h3>
                    <p className="text-xs text-slate-400">{translate('Season stats, schedules & standings', 'Statystyki sezonowe, terminarz i tabele')}</p>
                  </div>
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.coachmattb.coachboard" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-colors whitespace-nowrap">
                  {translate('Get the App', 'Pobierz aplikację')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / BIO SECTION */}
      <section id="about" className="py-24 bg-[#0e1422]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Coach Avatar */}
            <div className="lg:col-span-5">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-orange-500/30 to-amber-500/0 blur-xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                  <img
                    src="./public/coachmatt-carlow-profile.jpeg"
                    alt={translate('Coach Matt on court at Carlow Basketball', 'Trener Matt na boisku Carlow Basketball')}
                    className="w-full h-[520px] object-cover object-[center_30%]"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent">
                    <h3 className="text-xl font-bold text-white font-heading">Coach Matt B.</h3>
                    <p className="text-xs text-orange-400 font-medium">{translate('Coach & Basketball Developer', 'Trener i twórca rozwiązań dla koszykówki')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
                <span>{translate('A Life in Basketball', 'Życie z koszykówką')}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading uppercase tracking-tight">
                {translate('Built by a Coach, for Coaches', 'Stworzone przez trenera, dla trenerów')}
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                {translate('Basketball isn’t just a game to me—it’s been a life long journey. My love for the game started on the court in Poland, playing high school and college ball from 1985 to 2006, and continuing into Masters basketball in Ireland.', 'Koszykówka to dla mnie coś więcej niż gra — to droga na całe życie. Moja przygoda zaczęła się na parkietach w Polsce, gdzie w latach 1985–2006 grałem w szkole średniej i na studiach, a później kontynuowałem karierę w irlandzkiej lidze Masters.')}
              </p>

              <p className="text-slate-300 text-base leading-relaxed">
                {translate('Since 2018, I’ve been on the sidelines coaching with Carlow Basketball—working across every level, from Academy U8/U10 programs and Men’s senior teams to guiding the Basketball Ireland Academy program and leading our U11 Girls to a T4 tournament finish.', 'Od 2018 roku pracuję jako trener w Carlow Basketball na różnych poziomach rozgrywek — od grup akademii U8/U10 i seniorskich drużyn mężczyzn po program Basketball Ireland Academy. Prowadziłem również drużynę dziewcząt U11 do czwartego miejsca w turnieju T4.')}
              </p>

              <p className="text-slate-300 text-base leading-relaxed">
                {translate('Over decades of playing and coaching teams at every developmental stage, I realized how much time coaches spend managing logistics, playbooks, and team operations instead of focusing on what really matters: developing players. That’s why I started building software tailored specifically for basketball coaches—creating intuitive apps designed by someone who truly knows the game from the inside out.', 'Po wielu latach gry i trenowania zespołów na każdym etapie rozwoju zauważyłem, ile czasu trenerzy poświęcają logistyce, playbookom i organizacji drużyny zamiast temu, co najważniejsze — rozwojowi zawodników. Dlatego zacząłem tworzyć oprogramowanie dla trenerów koszykówki: intuicyjne aplikacje zaprojektowane przez osobę, która naprawdę zna tę dyscyplinę od podszewki.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPS SHOWCASE / PRODUCTS SECTION */}
      <section id="apps" className="py-24 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
                <span>{translate('Product Suite', 'Nasze produkty')}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading uppercase tracking-tight">
                {translate('All-in-One Coaching Apps', 'Komplet aplikacji dla trenerów')}
              </h2>
              <p className="text-slate-400 text-sm mt-2 max-w-xl">
                {translate('Explore our basketball tools for managing the season, preparing the team, and tracking player development.', 'Poznaj narzędzia koszykarskie do zarządzania sezonem, przygotowania drużyny i śledzenia rozwoju zawodników.')}
              </p>
            </div>

            {/* Category Filter Tabs (Interactive buttons) */}
            <div className="flex items-center gap-2 p-1.5 bg-slate-900 rounded-xl border border-slate-800">
              {(['all', 'Analytics', 'Team Management'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all capitalize whitespace-nowrap ${
                    activeTab === tab 
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab === 'all'
                    ? translate('All', 'Wszystkie')
                    : tab === 'Analytics'
                      ? translate('Analytics', 'Analityka')
                      : translate('Team Management', 'Zarządzanie zespołem')}
                </button>
              ))}
            </div>
          </div>

          {/* App Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredApps.map((app) => (
              <div 
                key={app.id} 
                className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-slate-950">
                    {app.screenshots ? (
                      <div className="grid h-full w-full grid-cols-[0.7fr_1.3fr] items-center gap-3 bg-slate-950 p-4">
                        <img src={app.image} alt={translate(`${app.title} logo`, `Logo aplikacji ${app.title}`)} className="w-full rounded-xl object-cover" />
                        <div className="grid gap-2">
                          {app.screenshots.map((screenshot) => (
                            <img key={screenshot} src={screenshot} alt={translate(`${app.title} app screenshot`, `Zrzut ekranu aplikacji ${app.title}`)} className="w-full max-h-[88px] rounded-md border border-slate-700 object-contain" />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <img
                        src={app.image}
                        alt={translate(app.title, `Aplikacja ${app.title}`)}
                        className={`w-full h-full ${app.imageFit === 'contain' ? 'object-contain bg-white p-3' : 'object-cover'} group-hover:scale-105 transition-transform duration-500 opacity-90`}
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-orange-400 text-xs font-bold uppercase tracking-wider">
                        {app.categoryLabel}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-500/40 text-orange-300 text-xs font-semibold">
                      {app.metrics}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-white font-heading">{app.title}</h3>
                    <p className="text-sm font-medium text-orange-400">{app.tagline}</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{app.description}</p>

                    <div className="pt-2 border-t border-slate-800/80 space-y-2">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{translate('Key Features', 'Najważniejsze funkcje')}</p>
                      <ul className="space-y-1.5">
                        {app.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {app.id === 'coachboard' && (
                    <div className="px-6 pb-6 space-y-3">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{translate('CoachBoard in Action', 'CoachBoard w akcji')}</h4>
                      <div className="aspect-video overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                        <iframe
                          className="w-full h-full"
                          src="https://www.youtube-nocookie.com/embed/MZ2JuldE9K8"
                          title={translate('CoachBoard app overview video', 'Prezentacja aplikacji CoachBoard')}
                          loading="lazy"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedApp(app)}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{translate('Quick Preview', 'Szybki podgląd')}</span>
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </button>
                  {app.comingSoon ? (
                    <span className="flex-1 py-3 px-4 rounded-xl bg-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center">
                      {translate('Coming Soon', 'Wkrótce')}
                    </span>
                  ) : (
                    <a
                      href={app.url}
                      target={app.id === 'coachboard' ? '_blank' : undefined}
                      rel={app.id === 'coachboard' ? 'noopener noreferrer' : undefined}
                      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
                    >
                      <span>{translate('View App / Download', 'Zobacz aplikację / Pobierz')}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRILLS, PLAYS & SKILLS PROGRAMMES SECTION */}
      <section id="programs" className="py-24 border-t border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-semibold mb-3">
              <BookOpen className="w-4 h-4" />
              <span>{translate('Coach Resources', 'Materiały dla trenerów')}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading uppercase tracking-tight">
              {translate('Drills, Plays & Skills Programmes', 'Ćwiczenia, zagrywki i programy rozwoju umiejętności')}
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto">
              {translate('Practical basketball resources for building game understanding, confident decisions, and stronger team habits.', 'Praktyczne materiały koszykarskie, które pomagają lepiej rozumieć grę, podejmować pewne decyzje i budować dobre nawyki w drużynie.')}
            </p>
          </div>

          <article className="max-w-4xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 shadow-xl shadow-black/20">
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <BookOpen className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400">{translate('U13 Girls · 5 Weeks · 10 Sessions', 'Dziewczęta U13 · 5 tygodni · 10 sesji')}</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-2">
                  {translate('U13 Girls Championship Program', 'Program mistrzowski U13 dla dziewcząt')}
                </h3>
                <p className="text-slate-300 font-semibold mt-2">
                  {translate('Coaching Philosophy & 60-Minute Session Framework', 'Filozofia treningu i struktura 60-minutowej sesji')}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mt-4">
                  {translate(
                    'Two sessions per week across five weeks (10 sessions total). At U13, basketball IQ grows through decision-making, spatial dynamics, and rhythm rather than memorized set plays. Session A develops technical execution and pattern recognition; Session B applies learning in live Small Sided Games (SSGs) under defensive pressure.',
                    'Dwie sesje tygodniowo przez pięć tygodni (łącznie 10 sesji). Na poziomie U13 rozwój rozumienia gry opiera się na podejmowaniu decyzji, orientacji przestrzennej i rytmie, a nie na zapamiętywaniu gotowych zagrywek. Sesja A rozwija wykonanie techniczne i rozpoznawanie schematów; sesja B pozwala wykorzystać te umiejętności w grze na małej przestrzeni (SSG) pod presją obrony.'
                  )}
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a href="./championship-basketball-iq-program.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs font-bold uppercase tracking-wider transition-all">
                    <BookOpen className="w-4 h-4" />
                    {translate('View Program PDF', 'Otwórz program PDF')}
                  </a>
                  <a href="./championship-basketball-iq-program.pdf" download className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider transition-colors">
                    <Download className="w-4 h-4" />
                    {translate('Download PDF', 'Pobierz PDF')}
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="max-w-4xl mx-auto mt-8 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 shadow-xl shadow-black/20">
            <div className="text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">{translate('Coaching Drill', 'Ćwiczenie koszykarskie')}</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-2">
                {translate('Drill from CoachMattB', 'Ćwiczenie od CoachMattB')}
              </h3>
            </div>
            <div className="max-w-sm mx-auto aspect-[9/16] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/imH0-WBPEdw"
                title={translate('CoachMattB coaching drill', 'Ćwiczenie koszykarskie CoachMattB')}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-slate-400 text-center mt-5">
              {translate('Watch and use this drill with your team to reinforce key basketball habits.', 'Obejrzyj ćwiczenie i wykorzystaj je z drużyną, aby utrwalać kluczowe nawyki koszykarskie.')}
            </p>
          </article>
        </div>
      </section>

      {/* COACHING TIPS & INSIGHTS SECTION */}
      <section id="insights" className="py-24 bg-[#0e1422] border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold mb-3">
              <span>{translate('Coaching Masterclass', 'Kurs mistrzowski dla trenerów')}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading uppercase tracking-tight">
              {translate('Tips & Insights from CoachMattB', 'Porady i wskazówki od CoachMattB')}
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
              {translate('Actionable frameworks for youth basketball coaches looking to run efficient practices and build winning cultures.', 'Praktyczne wskazówki dla trenerów młodzieżowych, którzy chcą prowadzić efektywne treningi i budować zwycięską kulturę zespołu.')}
            </p>
          </div>

          <div className="space-y-4">
            {coachingTips.map((tip, idx) => {
              const isOpen = expandedTip === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedTip(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-850 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-orange-400 font-mono">0{idx + 1}.</span>
                        <span className="text-xs text-slate-400 font-medium px-2 py-0.5 rounded bg-slate-800">{tip.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white font-heading">{tip.title}</h3>
                    </div>
                    <div className={`p-2 rounded-xl bg-slate-800 text-slate-300 transition-transform ${isOpen ? 'rotate-180 bg-orange-500 text-white' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 space-y-4 animate-fadeIn">
                      <p className="text-sm font-medium text-slate-300">{tip.summary}</p>
                      <p className="text-xs text-slate-400 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800/60">
                        {tip.details}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT & GET IN TOUCH SECTION */}
      <section id="contact" className="py-24 border-t border-slate-800/80 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-950/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 shadow-2xl">
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
                <span>{translate("Let's Connect", 'Porozmawiajmy')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading uppercase tracking-tight">
                {translate('Get in Touch with CoachMattB', 'Skontaktuj się z CoachMattB')}
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                {translate(
                  'Have questions about custom sports tech apps, coaching consulting, or speaking engagements? Your name, email, and message will be sent to coachmattb@proton.me through FormSubmit.',
                  'Masz pytania o aplikacje sportowe, konsultacje trenerskie lub wystąpienia? Twoje imię, adres e-mail i wiadomość zostaną wysłane do coachmattb@proton.me przez FormSubmit.'
                )}
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white font-heading">{translate('Message Sent Successfully!', 'Wiadomość została wysłana!')}</h3>
                <p className="text-xs text-slate-300">{translate('Thanks for reaching out. CoachMattB will get back to your inbox within 24 hours.', 'Dziękuję za kontakt. CoachMattB odpowie w ciągu 24 godzin.')}</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                {contactError && (
                  <p role="alert" className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-sm text-red-300">
                    {translate('We couldn’t send your message. Please try again or email coachmattb@proton.me.', 'Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz na adres coachmattb@proton.me.')}
                  </p>
                )}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">{translate('Your Name', 'Imię i nazwisko')}</label>
                    <input 
                      type="text" 
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder={translate('Coach Sarah Jenkins', 'Trenerka Anna Kowalska')}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">{translate('Email Address', 'Adres e-mail')}</label>
                    <input 
                      type="email" 
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder={translate('sarah@basketballclub.com', 'anna@klubkoszykarski.pl')}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">{translate('Your Message', 'Twoja wiadomość')}</label>
                  <textarea 
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder={translate('Tell me about your team, your coaching software needs, or your program goals...', 'Napisz o swojej drużynie, potrzebach związanych z oprogramowaniem lub celach programu...')}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 text-sm resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmittingContact}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmittingContact ? translate('Sending...', 'Wysyłanie...') : translate('Send Message to CoachMattB', 'Wyślij wiadomość do CoachMattB')}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SOCIALS & FOOTER SECTION */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-white font-heading">CoachMattB</span>
                <span className="block text-[10px] text-orange-400 font-medium tracking-widest uppercase">{translate('Elevate Your Program', 'Rozwijaj swoją drużynę')}</span>
              </div>
            </div>

            <SocialLinks className="flex items-center gap-4" />
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} CoachMattB. {translate('All rights reserved. Built for basketball coaches & creators.', 'Wszelkie prawa zastrzeżone. Stworzone dla trenerów i twórców koszykarskich.')}</p>
            <div className="flex items-center gap-2">
              <span>{translate('Page views', 'Wyświetlenia')}</span>
              <a href="https://visitor-badge.laobi.icu/" target="_blank" rel="noopener noreferrer" title={translate('Page-view counter provided by Visitor Badge', 'Licznik wyświetleń Visitor Badge')} aria-label={translate('Page-view count provided by Visitor Badge', 'Liczba wyświetleń według Visitor Badge')}>
                <img src={'https://visitor-badge.laobi.icu/badge?page_id=coachmattb.CoachMattWebSite&left_text=page%20views&right_color=orange'} alt={translate('Live page-view counter', 'Licznik wyświetleń na żywo')} referrerPolicy="no-referrer" />
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a href="#about" className="hover:text-slate-400">{translate('Privacy Policy', 'Polityka prywatności')}</a>
              <a href="#apps" className="hover:text-slate-400">{translate('Terms of Service', 'Warunki korzystania')}</a>
              <a href="#contact" className="hover:text-slate-400">{translate('Support', 'Pomoc')}</a>
            </div>
          </div>
        </div>
      </footer>

      {/* QUICK PREVIEW MODAL */}
      {localizedSelectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-orange-400 font-bold uppercase tracking-wider">
                  {localizedSelectedApp.categoryLabel}{translate(' App', ' — aplikacja')}
                </span>
                <h3 className="text-2xl font-bold text-white font-heading">{localizedSelectedApp.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedApp(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label={translate('Close modal', 'Zamknij okno')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 h-48">
                {localizedSelectedApp.screenshots ? (
                  <div className="grid h-full grid-cols-[0.7fr_1.3fr] items-center gap-3 p-3">
                    <img src={localizedSelectedApp.image} alt={translate(`${localizedSelectedApp.title} logo`, `Logo aplikacji ${localizedSelectedApp.title}`)} className="w-full rounded-lg object-cover" />
                    <div className="grid gap-2">
                      {localizedSelectedApp.screenshots.map((screenshot) => (
                        <img key={screenshot} src={screenshot} alt={translate(`${localizedSelectedApp.title} app screenshot`, `Zrzut ekranu aplikacji ${localizedSelectedApp.title}`)} className="w-full max-h-[76px] rounded-md border border-slate-700 object-contain" />
                      ))}
                    </div>
                  </div>
                ) : (
                  <img
                    src={localizedSelectedApp.image}
                    alt={translate(localizedSelectedApp.title, `Aplikacja ${localizedSelectedApp.title}`)}
                    className={`w-full h-full ${localizedSelectedApp.imageFit === 'contain' ? 'object-contain bg-white p-3' : 'object-cover'}`}
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>

              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{translate('Overview', 'Opis')}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{localizedSelectedApp.description}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">{translate('Key Capabilities', 'Najważniejsze możliwości')}</h4>
                <div className="grid gap-2">
                  {localizedSelectedApp.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-800 bg-slate-950/50 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedApp(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                {translate('Close', 'Zamknij')}
              </button>
              {localizedSelectedApp.comingSoon ? (
                <span className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider">
                  {translate('Coming Soon', 'Wkrótce')}
                </span>
              ) : (
                <a
                  href={localizedSelectedApp.url}
                  target={localizedSelectedApp.id === 'coachboard' ? '_blank' : undefined}
                  rel={localizedSelectedApp.id === 'coachboard' ? 'noopener noreferrer' : undefined}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all flex items-center gap-2"
                >
                  <span>{translate('Launch / Download', 'Uruchom / Pobierz')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
