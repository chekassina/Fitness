import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  IdCard, 
  Dumbbell, 
  CalendarDays, 
  Activity, 
  Apple, 
  Clock, 
  Megaphone, 
  DollarSign, 
  CreditCard, 
  PieChart, 
  Package, 
  Store, 
  Building2, 
  BarChart4, 
  Bot, 
  Settings,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Dashboard', route: '/dashboard', icon: LayoutDashboard, active: true },
  { name: 'Members', route: '/members', icon: Users },
  { name: 'Memberships', route: '/memberships', icon: IdCard },
  { name: 'Trainers', route: '/trainers', icon: Dumbbell },
  { name: 'Classes', route: '/classes', icon: CalendarDays },
  { name: 'Workouts', route: '/workouts', icon: Activity },
  { name: 'Nutrition', route: '/nutrition', icon: Apple },
  { name: 'Attendance', route: '/attendance', icon: Clock },
  { name: 'Marketing', route: '/marketing', icon: Megaphone },
  { name: 'Sales & POS', route: '/sales', icon: DollarSign },
  { name: 'Payments', route: '/payments', icon: CreditCard },
  { name: 'Finance', route: '/finance', icon: PieChart },
  { name: 'Inventory', route: '/inventory', icon: Package },
  { name: 'E-Commerce Store', route: '/store', icon: Store },
  { name: 'Fitness Marketplace', route: '/marketplace', icon: Building2 },
  { name: 'Reports & Analytics', route: '/reports', icon: BarChart4 },
  { name: 'AI Assistant', route: '/ai-assistant', icon: Bot },
  { name: 'Settings', route: '/settings', icon: Settings },
];

export function Sidebar({ className, onClose }: { className?: string, onClose?: () => void }) {
  return (
    <aside className={cn("bg-[#0F172A] h-screen flex flex-col text-secondary-400 border-r border-secondary-800 w-64", className)}>
      <div className="h-16 flex items-center justify-between px-6 border-b border-secondary-800 shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-primary-500 p-1.5 rounded-lg w-8 h-8 flex items-center justify-center">
            <Dumbbell className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-white text-lg tracking-tight uppercase line-clamp-1">FitEcosystem</span>
        </div>
        {onClose && (
          <button onClick={onClose} className="lg:hidden text-secondary-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        )}
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
        <nav className="px-4 space-y-1 text-[11px] lg:text-xs font-semibold uppercase tracking-wider">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.route}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group",
                item.active 
                  ? "bg-primary-600/20 text-primary-400 border border-primary-500/30" 
                  : "hover:bg-secondary-800 hover:text-white border border-transparent"
              )}
            >
              <item.icon className={cn(
                "w-4 h-4 transition-colors shrink-0",
                item.active ? "text-primary-400" : "text-secondary-500 group-hover:text-secondary-300"
              )} />
              <span className="line-clamp-1">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
