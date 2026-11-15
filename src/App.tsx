import React, { useState } from 'react';
import { 
  Trophy, 
  Activity, 
  ClipboardList, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Mail, 
  Twitter, 
  Youtube, 
  Instagram, 
  Linkedin, 
  Github, 
  Play, 
  Sparkles, 
  X, 
  Send,
  Zap,
  Target,
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

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'Analytics' | 'Team Management'>('all');
  const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);
  const [expandedTip, setExpandedTip] = useState<number | null>(0);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const apps: AppItem[] = [
    {
      id: 'coachboard',
      title: 'CoachBoard',
      category: 'Analytics',
      tagline: 'Your entire basketball season, all in one place',
      description: 'Manage your basketball season from one app: track schedules and league standings, follow team and player stats, record live game stats, and turn the season’s numbers into useful insights.',
      features: [
        'Season tracking, schedules, and league standings',
        'Team stats and individual player stat profiles',
        'Live game stat tracking from the sideline',
        'Season insights to follow team and player progress'
      ],
      image: './public/coachboard-icon.png',
      imageFit: 'contain',
      url: 'https://play.google.com/store/apps/details?id=com.coachmattb.coachboard',
      metrics: 'All-in-One Season Hub'
    },
    {
      id: 'courtside-hub',
      title: 'Courtside Hub: Basketball',
      category: 'Team Management',
      tagline: 'A different approach to live games, seasons, and player stats',
      description: 'Ditch the clipboards and scattered apps. Courtside Hub brings game planning, practice building, live stat tracking, roster management, and season-long player development into one coach-designed basketball assistant.',
      features: [
        'Interactive playbook, tactical diagrams, and opponent scouting',
        'Time-blocked practices, drill library, and coach sharing',
        'Live box scores, advanced metrics, and shot charts',
        'Player profiles, attendance, rotations, and playing time',
        'Season stats, development reports, and exportable box scores',
        'Offline access for practices and live games'
      ],
      image: './public/courtside-hub-logo.jpg',
      imageFit: 'cover',
      screenshots: ['./public/courtside-hub-live-tracker.jpg', './public/courtside-hub-box-score.jpg'],
      comingSoon: true,
      url: '#',
      metrics: 'Coming Soon'
    }
  ];

  const coachingTips = [
    {
      title: 'Structuring High-Intensity 90-Minute Practices',
      category: 'Practice Design',
      summary: 'Avoid long standing lines. Maximize player touches by splitting your gym into 3 independent micro-stations running simultaneously.',
      details: 'In youth development, standing in line is the number one killer of engagement. By implementing 15-minute high-tempo blocks where players rotate through shooting mechanics, 3v3 decision making, and conditioning stations, you increase active heart rates and ball touches by 300%.'
    },
    {
      title: 'Tracking Individual Progress Without Overwhelming Stats',
      category: 'Player Development',
      summary: 'Focus on 3 core controllable metrics per player rather than raw scoring averages to build lasting confidence.',
      details: 'Scoring fluctuates based on role and opponent. Instead, grade players weekly on defensive stance recoveries, effective box-outs, and communication volume on the floor. When players see growth in hustle metrics, scoring follows naturally.'
    },
    {
      title: 'Game-Day Halftime Adjustments: Less Is More',
      category: 'Game Strategy',
      summary: 'Limit halftime adjustments to one defensive tweak and one offensive spacing correction.',
      details: 'Coaches often overwhelm players with tactical whiteboards during the 8-minute halftime break. Simplify your message: identify one opponent tendency we must take away, and one spot on the floor we are attacking in transition. Clarity beats complexity every time.'
    },
    {
      title: 'Building Resilient Culture Through Positive Accountability',
      category: 'Team Culture',
      summary: 'Shift feedback from emotional sideline yelling to objective film-backed standards.',
      details: 'When players review their own clips in our app post-game, they self-correct faster than any coach lecture. Pair high expectations with transparent, data-backed praise to build unshakeable team trust.'
    }
  ];

  const filteredApps = activeTab === 'all' 
    ? apps 
    : apps.filter(app => app.category === activeTab);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setContactForm({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-orange-500 selection:text-white">
      {/* TOP NAVIGATION BAR (Strict 3-zone contract) */}
      <header className="sticky top-0 z-50 bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center gap-2 group whitespace-nowrap shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-heading">CoachMattB</span>
              <span className="block text-[10px] text-orange-400 font-medium tracking-widest uppercase">Sports Tech Studio</span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors whitespace-nowrap shrink-0">About</a>
            <a href="#apps" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Apps & Tools</a>
            <a href="#insights" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Coaching Tips</a>
            <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Contact</a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a 
              href="#apps" 
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange-500/25 transition-all whitespace-nowrap shrink-0"
            >
              Explore Apps
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">About</a>
            <a href="#apps" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">Apps & Tools</a>
            <a href="#insights" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">Coaching Tips</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">Contact</a>
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
              <span>Youth Basketball Coaching & Custom Tech Suite</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-heading uppercase leading-[1.05]">
              Elevate Your Program. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-400">
                Simplify Your Season.
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Hi, I’m <strong className="text-white font-semibold">CoachMattB</strong>. As a veteran youth basketball coach and software builder, I create high-performance web apps that eliminate administrative friction, track player development objectively, and give you more time to teach the game.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#apps" 
                className="px-7 py-3.5 text-sm font-bold tracking-wide text-white bg-orange-500 rounded-xl hover:bg-orange-600 shadow-xl shadow-orange-500/30 transition-all flex items-center gap-2"
              >
                <span>Explore the Apps</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="px-7 py-3.5 text-sm font-bold tracking-wide text-slate-300 bg-slate-900 border border-slate-700 rounded-xl hover:bg-slate-800 hover:text-white transition-all"
              >
                Get in Touch
              </a>
            </div>

            {/* Quick Proof Strip */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80">
              <div>
                <p className="text-2xl lg:text-3xl font-extrabold text-white font-heading">15+ Yrs</p>
                <p className="text-xs text-slate-400">Coaching Experience</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-extrabold text-orange-400 font-heading">2 Apps</p>
                <p className="text-xs text-slate-400">1 Available + 1 Coming Soon</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-extrabold text-white font-heading">1,200+</p>
                <p className="text-xs text-slate-400">Coaches & Players</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-600 opacity-30 blur-xl"></div>
            <div className="relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
              <img 
                src="/src/assets/images/hero_coach_action_1794752754058.jpg" 
                alt="CoachMattB courtside analytics"
                className="w-full h-[380px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Live Sideline Telemetry</h3>
                    <p className="text-xs text-slate-400">Real-time player efficiency tracking</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  Active
                </span>
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
                    src="/src/assets/images/coach_avatar_1794752755444.jpg" 
                    alt="CoachMattB head coach portrait" 
                    className="w-full h-[450px] object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent">
                    <h3 className="text-xl font-bold text-white font-heading">Coach Matt B.</h3>
                    <p className="text-xs text-orange-400 font-medium">Founder & Head Developer, CoachMattB Tech</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
                <span>The Builder's Story</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading uppercase tracking-tight">
                Solving Real Coaching Friction Through Practical Software
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                After spending over 15 years courtside leading youth and high school basketball programs, I realized how much valuable coaching time was wasted wrestling with clipboards, scattered spreadsheets, and fragmented parent communication threads.
              </p>

              <p className="text-slate-300 text-base leading-relaxed">
                That’s why I started building my own suite of sports tech tools. Every app in this portfolio was forged in the fire of real practices and tournament weekends—designed specifically to keep things simple, lightning-fast, and focused entirely on player development.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-5 h-5 text-orange-400" />
                    <h4 className="font-bold text-white text-sm">Player Development First</h4>
                  </div>
                  <p className="text-xs text-slate-400">Metrics that emphasize fundamentals, defensive IQ, and tangible skill progression.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-orange-400" />
                    <h4 className="font-bold text-white text-sm">Courtside Speed</h4>
                  </div>
                  <p className="text-xs text-slate-400">Zero lag, large touch targets, and offline support built for high-stress game environments.</p>
                </div>
              </div>
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
                <span>Product Suite</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading uppercase tracking-tight">
                All-in-One Coaching Apps
              </h2>
              <p className="text-slate-400 text-sm mt-2 max-w-xl">
                Explore our basketball tools for managing the season, preparing the team, and tracking player development.
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
                  {tab}
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
                        <img src={app.image} alt={`${app.title} logo`} className="w-full rounded-xl object-cover" />
                        <div className="grid gap-2">
                          {app.screenshots.map((screenshot) => (
                            <img key={screenshot} src={screenshot} alt={`${app.title} app screenshot`} className="w-full max-h-[88px] rounded-md border border-slate-700 object-contain" />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <img
                        src={app.image}
                        alt={app.title}
                        className={`w-full h-full ${app.imageFit === 'contain' ? 'object-contain bg-white p-3' : 'object-cover'} group-hover:scale-105 transition-transform duration-500 opacity-90`}
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-orange-400 text-xs font-bold uppercase tracking-wider">
                        {app.category}
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
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Features</p>
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
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedApp(app)}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Quick Preview</span>
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </button>
                  {app.comingSoon ? (
                    <span className="flex-1 py-3 px-4 rounded-xl bg-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center">
                      Coming Soon
                    </span>
                  ) : (
                    <a
                      href={app.url}
                      target={app.id === 'coachboard' ? '_blank' : undefined}
                      rel={app.id === 'coachboard' ? 'noopener noreferrer' : undefined}
                      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
                    >
                      <span>View App / Download</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COACHING TIPS & INSIGHTS SECTION */}
      <section id="insights" className="py-24 bg-[#0e1422] border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold mb-3">
              <span>Coaching Masterclass</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading uppercase tracking-tight">
              Tips & Insights from CoachMattB
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
              Actionable frameworks for youth basketball coaches looking to run efficient practices and build winning cultures.
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
                <span>Let's Connect</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading uppercase tracking-tight">
                Get in Touch with CoachMattB
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Have questions about custom sports tech apps, coaching consulting, or speaking engagements? Drop a message below.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white font-heading">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-300">Thanks for reaching out. CoachMattB will get back to your inbox within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Coach Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="sarah@basketballclub.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Your Message</label>
                  <textarea 
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Tell me about your team, your coaching software needs, or your program goals..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 text-sm resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to CoachMattB</span>
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
                <span className="block text-[10px] text-orange-400 font-medium tracking-widest uppercase">Elevate Your Program</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 transition-all" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 transition-all" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 transition-all" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 transition-all" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} CoachMattB. All rights reserved. Built for basketball coaches & creators.</p>
            <div className="flex items-center gap-6">
              <a href="#about" className="hover:text-slate-400">Privacy Policy</a>
              <a href="#apps" className="hover:text-slate-400">Terms of Service</a>
              <a href="#contact" className="hover:text-slate-400">Support</a>
            </div>
          </div>
        </div>
      </footer>

      {/* QUICK PREVIEW MODAL */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-orange-400 font-bold uppercase tracking-wider">{selectedApp.category} App</span>
                <h3 className="text-2xl font-bold text-white font-heading">{selectedApp.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedApp(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 h-48">
                {selectedApp.screenshots ? (
                  <div className="grid h-full grid-cols-[0.7fr_1.3fr] items-center gap-3 p-3">
                    <img src={selectedApp.image} alt={`${selectedApp.title} logo`} className="w-full rounded-lg object-cover" />
                    <div className="grid gap-2">
                      {selectedApp.screenshots.map((screenshot) => (
                        <img key={screenshot} src={screenshot} alt={`${selectedApp.title} app screenshot`} className="w-full max-h-[76px] rounded-md border border-slate-700 object-contain" />
                      ))}
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedApp.image}
                    alt={selectedApp.title}
                    className={`w-full h-full ${selectedApp.imageFit === 'contain' ? 'object-contain bg-white p-3' : 'object-cover'}`}
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>

              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Overview</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{selectedApp.description}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Key Capabilities</h4>
                <div className="grid gap-2">
                  {selectedApp.features.map((feat, idx) => (
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
                Close
              </button>
              {selectedApp.comingSoon ? (
                <span className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider">
                  Coming Soon
                </span>
              ) : (
                <a
                  href={selectedApp.url}
                  target={selectedApp.id === 'coachboard' ? '_blank' : undefined}
                  rel={selectedApp.id === 'coachboard' ? 'noopener noreferrer' : undefined}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all flex items-center gap-2"
                >
                  <span>Launch / Download</span>
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
