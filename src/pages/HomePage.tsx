import React, { useState, useEffect } from 'react';
import {
  Dumbbell, Users, TrendingUp, Shield, ArrowRight, CheckCircle,
  BarChart3, CalendarDays, Smartphone, Bot, Star, Play, Globe,
  Zap, ChevronDown
} from 'lucide-react';

const stats = [
  { label: 'Active Gyms', value: '2,400+', icon: Dumbbell },
  { label: 'Members Managed', value: '1.2M+', icon: Users },
  { label: 'Revenue Processed', value: '$340M+', icon: TrendingUp },
  { label: 'Uptime Guarantee', value: '99.9%', icon: Shield },
];

const features = [
  {
    icon: Users,
    title: 'Member Management',
    description: 'Centralized profiles, memberships, attendance tracking and automated renewals in one powerful hub.',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    border: 'border-primary-100',
  },
  {
    icon: CalendarDays,
    title: 'Class & Scheduling',
    description: 'Group fitness classes, personal training sessions, and nutrition consultations — all beautifully organized.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Real-time revenue dashboards, member churn insights, and export-ready performance reports.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: Globe,
    title: 'Fitness Marketplace',
    description: 'Connect to a global network of vendors, trainers, and nutritionists to grow your ecosystem.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: Bot,
    title: 'AI Business Assistant',
    description: 'Predictive analytics, automated insights, and smart recommendations powered by cutting-edge AI.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Branded mobile apps for your members with booking, progress tracking, and push notifications.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
];

const testimonials = [
  {
    name: 'Marcus Johnson',
    role: 'Owner, IronPeak Gym',
    text: 'FitEcosystem transformed how we run our gym. Member retention went up 34% in the first quarter alone.',
    avatar: 'MJ',
    stars: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Director, CoreFit Studios',
    text: 'The AI insights alone are worth it. We identified peak hours we never knew existed and optimized staffing.',
    avatar: 'SC',
    stars: 5,
  },
  {
    name: 'David Osei',
    role: 'Founder, EliteFit Network',
    text: 'Managing 8 locations from a single dashboard used to be a dream. FitEcosystem made it reality.',
    avatar: 'DO',
    stars: 5,
  },
];

export function HomePage({ onLoginClick }: { onLoginClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-secondary-50 font-sans">

      {/* Navbar */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-secondary-200' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary-600 p-1.5 rounded-lg w-8 h-8 flex items-center justify-center shadow-lg shadow-primary-500/30">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <span className="font-black text-secondary-900 text-lg tracking-tight uppercase">FitEcosystem</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-semibold text-secondary-600 hover:text-primary-600 transition-colors">Features</a>
            <a href="#testimonials" className="text-sm font-semibold text-secondary-600 hover:text-primary-600 transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm font-semibold text-secondary-600 hover:text-primary-600 transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onLoginClick}
              className="text-sm font-bold text-secondary-700 hover:text-primary-600 transition-colors px-4 py-2 rounded-lg hover:bg-primary-50"
            >
              Sign In
            </button>
            <button
              onClick={onLoginClick}
              className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-primary-100/60 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-40 right-10 w-64 h-64 bg-violet-100/40 rounded-full blur-3xl" />
          <div className="absolute top-60 left-10 w-48 h-48 bg-amber-100/40 rounded-full blur-3xl" />
          {/* Dot grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#4f46e5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-8">
            <Zap className="w-3.5 h-3.5 text-primary-600" />
            <span className="text-xs font-bold text-primary-700 uppercase tracking-wider">The #1 Gym Management Platform</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-secondary-900 leading-[1.08] tracking-tight mb-6">
            Run Your Gym
            <br />
            <span className="text-primary-600 relative">
              Like a Pro
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 12" preserveAspectRatio="none">
                <path d="M0,8 Q100,2 200,8 Q300,14 400,8" stroke="#6366f1" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-secondary-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            FitEcosystem brings together member management, scheduling, AI analytics, e-commerce, and marketplace tools — all under one powerful roof.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button
              onClick={onLoginClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-secondary-900 hover:bg-black text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
            >
              Access Platform
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-secondary-50 text-secondary-700 px-8 py-4 rounded-xl font-bold text-base border border-secondary-200 hover:border-secondary-300 transition-all">
              <Play className="w-4 h-4 text-primary-600 fill-primary-600" />
              Watch Demo
            </button>
          </div>

          <p className="text-xs text-secondary-400 font-medium">No credit card required · Free 30-day trial · Cancel anytime</p>
        </div>

        {/* Stats bar */}
        <div className="relative max-w-5xl mx-auto px-6 mt-20">
          <div className="bg-white rounded-2xl border border-secondary-200 shadow-xl shadow-secondary-900/5 p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-100 transition-colors">
                  <stat.icon className="w-5 h-5 text-primary-600" />
                </div>
                <p className="text-2xl font-black text-secondary-900">{stat.value}</p>
                <p className="text-xs font-semibold text-secondary-500 uppercase tracking-wider mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a href="#features" className="flex flex-col items-center gap-2 text-secondary-400 hover:text-primary-500 transition-colors group">
            <span className="text-xs font-semibold uppercase tracking-widest">Explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white border-t border-secondary-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary-100 rounded-full px-4 py-1.5 mb-5">
              <span className="text-xs font-bold text-secondary-600 uppercase tracking-wider">Everything You Need</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-secondary-900 mb-4 tracking-tight">
              One Platform.<br />Infinite Possibilities.
            </h2>
            <p className="text-lg text-secondary-500 max-w-xl mx-auto font-medium">
              Every tool your gym needs to grow, retain members, and maximize revenue — built in from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`group p-6 rounded-2xl border ${feature.border} ${feature.bg} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white border ${feature.border} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="font-bold text-secondary-900 text-base mb-2">{feature.title}</h3>
                <p className="text-sm text-secondary-500 leading-relaxed">{feature.description}</p>
                <div className={`mt-4 flex items-center gap-1 text-xs font-bold ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-secondary-200 rounded-full px-4 py-1.5 mb-5">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span className="text-xs font-bold text-secondary-600 uppercase tracking-wider">Trusted by Thousands</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-secondary-900 tracking-tight">
              Loved by Gym Owners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-secondary-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-secondary-700 font-medium leading-relaxed mb-6 text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-secondary-100">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 font-black text-xs flex items-center justify-center border border-primary-200">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary-900">{t.name}</p>
                    <p className="text-xs text-secondary-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-600/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Ready to Transform<br />Your Gym Business?
          </h2>
          <p className="text-lg text-secondary-400 mb-10 max-w-xl mx-auto font-medium">
            Join over 2,400 gyms already using FitEcosystem to grow smarter and faster.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onLoginClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-xl shadow-primary-900/40 hover:-translate-y-0.5 group"
            >
              Access Platform
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-2 text-secondary-500">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold">Free trial · No card needed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 border-t border-secondary-800 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary-600 p-1.5 rounded-lg w-7 h-7 flex items-center justify-center">
              <Dumbbell className="w-4 h-4 text-white" />
            </div>
            <span className="font-black text-white text-sm uppercase tracking-tight">FitEcosystem</span>
          </div>
          <p className="text-xs text-secondary-600 font-medium">© 2025 FitEcosystem. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-secondary-500 hover:text-secondary-300 font-semibold transition-colors">Privacy</a>
            <a href="#" className="text-xs text-secondary-500 hover:text-secondary-300 font-semibold transition-colors">Terms</a>
            <a href="#" className="text-xs text-secondary-500 hover:text-secondary-300 font-semibold transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
