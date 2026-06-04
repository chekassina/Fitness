/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';

type View = 'home' | 'login' | 'dashboard';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (view === 'home') {
    return (
      <HomePage
        onLoginClick={() => setView('login')}
      />
    );
  }

  if (view === 'login') {
    return (
      <LoginPage
        onLoginSuccess={() => setView('dashboard')}
        onBackToHome={() => setView('home')}
      />
    );
  }

  // Dashboard view
  return (
    <div className="min-h-screen bg-secondary-50 flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-secondary-900/50 z-20 xl:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        <Header
          onMenuClick={() => setIsSidebarOpen(true)}
          onLogout={() => setView('home')}
        />
        <main className="flex-1">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
