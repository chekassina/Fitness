import React, { useState } from 'react';
import { Dumbbell, Eye, EyeOff, ArrowLeft, Lock, Mail, AlertCircle, CheckCircle, Zap } from 'lucide-react';

// Demo credentials
const DEMO_USERS = [
  { email: 'admin@fitecosystem.com', password: 'Admin@2025', role: 'Gym Manager', name: 'Admin User' },
  { email: 'demo@fitecosystem.com', password: 'Demo@2025', role: 'Staff Member', name: 'Demo User' },
];

interface LoginPageProps {
  onLoginSuccess: () => void;
  onBackToHome: () => void;
}

export function LoginPage({ onLoginSuccess, onBackToHome }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filledDemo, setFilledDemo] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate network delay
    await new Promise((r) => setTimeout(r, 900));

    const user = DEMO_USERS.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (user) {
      setIsLoading(false);
      onLoginSuccess();
    } else {
      setIsLoading(false);
      setError('Invalid email or password. Try the demo credentials below.');
    }
  };

  const fillDemoCredentials = (userIndex = 0) => {
    setEmail(DEMO_USERS[userIndex].email);
    setPassword(DEMO_USERS[userIndex].password);
    setError('');
    setFilledDemo(true);
    setTimeout(() => setFilledDemo(false), 2000);
  };

  return (
    <div className="min-h-screen bg-secondary-50 flex font-sans">

      {/* Left Panel — Brand */}
      <div className="hidden lg:flex lg:w-1/2 bg-secondary-900 relative flex-col justify-between p-12 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-600/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Logo */}
        <div className="relative flex items-center gap-3">
          <div className="bg-primary-600 p-2 rounded-xl w-10 h-10 flex items-center justify-center shadow-lg shadow-primary-900/50">
            <Dumbbell className="w-5 h-5 text-white" />
          </div>
          <span className="font-black text-white text-xl uppercase tracking-tight">FitEcosystem</span>
        </div>

        {/* Main copy */}
        <div className="relative">
          <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-500/30 rounded-full px-3 py-1.5 mb-6">
            <Zap className="w-3 h-3 text-primary-400" />
            <span className="text-xs font-bold text-primary-300 uppercase tracking-wider">Gym Management Platform</span>
          </div>

          <h2 className="text-4xl font-black text-white leading-tight mb-4">
            Your Gym.<br />
            <span className="text-primary-400">Supercharged.</span>
          </h2>
          <p className="text-secondary-400 font-medium leading-relaxed max-w-sm">
            Access your complete gym management suite — members, classes, analytics, AI insights, marketplace, and more.
          </p>

          {/* Feature highlights */}
          <div className="mt-8 space-y-3">
            {[
              'Member & membership management',
              'AI-powered business insights',
              'Marketplace & e-commerce store',
              'Real-time analytics dashboard',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3 h-3 text-primary-400" />
                </div>
                <span className="text-sm font-semibold text-secondary-400">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <div className="relative bg-secondary-800/50 border border-secondary-700/50 rounded-2xl p-5">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-amber-400/80" />
            ))}
          </div>
          <p className="text-sm text-secondary-300 font-medium leading-relaxed">
            "Our revenue grew 40% after switching to FitEcosystem. The analytics alone paid for itself in month one."
          </p>
          <p className="text-xs text-secondary-500 font-semibold mt-3">— Marcus Johnson, IronPeak Gym</p>
        </div>
      </div>

      {/* Right Panel — Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 relative">

        {/* Back button */}
        <button
          onClick={onBackToHome}
          className="absolute top-6 left-6 flex items-center gap-2 text-sm font-semibold text-secondary-500 hover:text-secondary-900 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to home
        </button>

        {/* Mobile logo */}
        <div className="flex lg:hidden items-center gap-3 mb-8">
          <div className="bg-primary-600 p-1.5 rounded-lg w-8 h-8 flex items-center justify-center">
            <Dumbbell className="w-5 h-5 text-white" />
          </div>
          <span className="font-black text-secondary-900 text-lg uppercase tracking-tight">FitEcosystem</span>
        </div>

        <div className="w-full max-w-sm">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-secondary-900 mb-2 tracking-tight">Welcome back</h1>
            <p className="text-secondary-500 font-medium">Sign in to your platform dashboard</p>
          </div>

          {/* Demo credentials hint */}
          <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 mb-6">
            <p className="text-xs font-bold text-primary-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Zap className="w-3 h-3" />
              Demo Credentials
            </p>
            <div className="space-y-1.5">
              {DEMO_USERS.map((u, i) => (
                <button
                  key={i}
                  onClick={() => fillDemoCredentials(i)}
                  className="w-full text-left bg-white hover:bg-primary-50 border border-primary-100 hover:border-primary-300 rounded-lg px-3 py-2 transition-all group"
                >
                  <p className="text-xs font-bold text-secondary-700 group-hover:text-primary-700 transition-colors">{u.email}</p>
                  <p className="text-[10px] text-secondary-400 font-medium">{u.role} · password: <span className="font-mono">{u.password}</span></p>
                </button>
              ))}
            </div>
            {filledDemo && (
              <p className="text-[10px] font-bold text-emerald-600 mt-2 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Credentials filled — click Sign In!
              </p>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-secondary-700 mb-2">Email address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  placeholder="you@fitecosystem.com"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-secondary-50 border border-secondary-200 rounded-xl text-sm text-secondary-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-medium"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-bold text-secondary-700">Password</label>
                <button type="button" className="text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-11 py-3 bg-secondary-50 border border-secondary-200 rounded-xl text-sm text-secondary-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-secondary-400 hover:text-secondary-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-start gap-2.5 bg-rose-50 border border-rose-200 rounded-xl p-3">
                <AlertCircle className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                <p className="text-xs font-semibold text-rose-700">{error}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 disabled:hover:translate-y-0 flex items-center justify-center gap-2 text-sm"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in...
                </>
              ) : (
                'Sign In to Dashboard'
              )}
            </button>
          </form>

          <p className="text-center text-xs text-secondary-400 font-medium mt-8">
            This is a demo platform. No real accounts are created.
          </p>
        </div>
      </div>
    </div>
  );
}
