import React from 'react';
import {
  Store, Globe, Layers, ShoppingBag, Users, Ticket, Dumbbell, 
  Briefcase, Calculator, Activity, CalendarCheck, UserCheck, 
  CheckSquare, Apple, Building2, Scan, Server, Package, 
  Wrench, DollarSign, TrendingUp, BarChart3, CreditCard, 
  Receipt, Megaphone, MessageSquare, Gift, Smartphone, 
  BrainCircuit, PieChart, Bot, ShieldQuestion, ArrowUpRight, Plus, Network
} from 'lucide-react';
import { cn } from '../lib/utils';


const features = [
  {
    title: "Marketplace",
    description: "Connect to the broader external fitness network, browse and install modules and third-party integrations.",
    icon: Globe,
    route: "/marketplace",
    featured: true,
  },
  {
    title: "Store",
    description: "Manage gym-owned sales, physical inventory, and retail fulfillment.",
    icon: ShoppingBag,
    route: "/store",
    featured: true,
  },
  {
    title: "Client Management",
    description: "Centralized database managing memberships, trainers, employees, and payroll integration systems.",
    icon: Users,
    route: "/clients",
    wide: true
  },
  {
    title: "Class & Session Management",
    description: "Group fitness scheduling, personal training, workout programs, and nutrition planning.",
    icon: CalendarCheck,
    route: "/classes"
  },
  {
    title: "Create Account",
    description: "Set up new accounts, handle onboarding, and manage billing structures.",
    icon: DollarSign,
    route: "/create-account"
  },
  {
    title: "Communication & Marketing",
    description: "Email campaigns, SMS broadcasting, and outreach.",
    icon: MessageSquare,
    route: "/marketing"
  },
  {
    title: "Loyalty & Referral Program",
    description: "Reward points, referral tracking, and achievement tiers.",
    icon: Gift,
    route: "/loyalty"
  },
  {
    title: "Website & Online Booking",
    description: "Manage public web portal and embeddable booking widgets.",
    icon: Layers,
    route: "/website"
  },
  {
    title: "Mobile App Management",
    description: "Push notifications and customized member app setup.",
    icon: Smartphone,
    route: "/mobile-app"
  },
  {
    title: "Client App",
    description: "Dedicated application configuration and personalized experience for gym members.",
    icon: Dumbbell,
    route: "/client-app"
  },
  {
    title: "Analytics & Reporting Dashboard",
    description: "Comprehensive data visualization and platform exports.",
    icon: PieChart,
    route: "/analytics",
    wide: true
  },
  {
    title: "AI Business Assistant",
    description: "Automated insights and predictive operational analytics.",
    icon: Bot,
    route: "/ai"
  },
  {
    title: "Customer Support & Helpdesk",
    description: "Unified ticketing system and helpdesk for members.",
    icon: ShieldQuestion,
    route: "/support"
  }
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-secondary-50/50 p-4 md:p-8 lg:p-12">
      <div className="max-w-[1600px] mx-auto space-y-12 pb-24">
        
        {/* Header Section */}
        <div className="flex justify-end">
          <a href="/branches/provision" className="flex items-center justify-center gap-2 bg-secondary-900 hover:bg-black text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap group">
            <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Provision New Gym Platform
          </a>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {features.map((item, itemIdx) => (
            <a
              key={itemIdx}
              href={item.route}
              className={cn(
                "group relative flex flex-col bg-white rounded-2xl p-6 transition-all duration-300",
                "border border-secondary-200 hover:border-primary-400 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 block",
                item.wide ? "md:col-span-2" : "col-span-1",
                item.featured ? "border-2 border-amber-200/50 bg-gradient-to-b from-amber-50/30 to-white shadow-sm" : ""
              )}
            >
              {item.featured && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 blur-3xl rounded-full"></div>
              )}
              
              <div className="flex items-start justify-between mb-4 relative z-10 w-full">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center border transition-colors",
                  item.featured ? "bg-amber-100 border-amber-200 text-amber-700" : "bg-secondary-50 border-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:border-primary-200 group-hover:text-primary-600"
                )}>
                  <item.icon className="w-6 h-6" />
                </div>
              </div>
              
              <div className="flex-1 relative z-10 w-full">
                <h3 className="font-bold text-secondary-900 text-base mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">{item.title}</h3>
                <p className="text-sm text-secondary-500 leading-relaxed line-clamp-3">{item.description}</p>
              </div>

              {item.stats && (
                <div className="mt-6 flex flex-wrap items-center gap-3 relative z-10 bg-secondary-50/50 p-3 rounded-lg border border-secondary-100 w-full">
                  {item.stats.map((stat, i) => (
                    <div key={i} className="flex-1 bg-white px-3 py-2 rounded shadow-sm border border-secondary-100/50 min-w-[100px]">
                      <p className="text-[10px] font-bold text-secondary-400 uppercase tracking-wider mb-0.5 whitespace-nowrap">{stat.label}</p>
                      <p className="text-lg font-black text-secondary-900 font-mono leading-none">{stat.value}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Hover Link Indicator */}
              <div className="mt-6 pt-4 border-t border-secondary-100 flex items-center justify-between relative z-10 w-full">
                <span className="text-xs font-bold text-secondary-400 group-hover:text-primary-600 transition-colors uppercase tracking-wider">Launch Platform</span>
                <ArrowUpRight className="w-4 h-4 text-secondary-300 group-hover:text-primary-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </a>
          ))}
        </div>

        {/* Platform Uptime Section */}
        <div className="flex items-center justify-center pt-8 border-t border-secondary-200/50 mt-12">
          <div className="flex items-center gap-3">
            <div className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <span className="text-sm font-bold text-secondary-600 uppercase tracking-widest">Platform Uptime: <span className="text-secondary-900">99.9%</span></span>
          </div>
        </div>

      </div>
    </div>
  );
}
