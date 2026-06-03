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


const platformModules = [
  {
    category: "Marketplace & Commerce Ecosystem",
    description: "Global networks, third-party apps, and internal sales.",
    icon: Store,
    color: "text-amber-600",
    bg: "bg-amber-100",
    border: "border-amber-200",
    items: [
      {
        title: "Marketplace",
        description: "Connect to the broader external fitness network, browse and install premium modules, and third-party integrations.",
        icon: Globe,
        route: "/marketplace",
        featured: true,
        badge: "Premium Ecosystem"
      },
      {
        title: "E-Commerce Store (Gym-Owned Sales)",
        description: "Manage gym-owned sales, physical inventory, and retail fulfillment.",
        icon: ShoppingBag,
        route: "/ecommerce",
        featured: true,
      }
    ]
  },
  {
    category: "Client Management",
    description: "Core administration portal linked to all types of management for your business.",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-100",
    border: "border-blue-200",
    items: [
      {
        title: "Client Management",
        description: "Centralized database managing memberships, trainers, employees, and payroll integration systems.",
        icon: Users,
        route: "/clients",
        stats: [
          { label: "Total Clients", value: "2,845" },
          { label: "Active Clients", value: "2,512" }
        ],
        wide: true
      }
    ]
  },
  {
    category: "Services & Programs",
    description: "Fitness offerings, scheduling, and dietary planning.",
    icon: Activity,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    border: "border-emerald-200",
    items: [
      {
        title: "Class & Session Management",
        description: "Group fitness scheduling, timetables, and room allocation.",
        icon: CalendarCheck,
        route: "/classes"
      },
      {
        title: "Personal Training Management",
        description: "1-on-1 session tracking, PT assignments, and scheduling.",
        icon: UserCheck,
        route: "/pt-management"
      },
      {
        title: "Workout Program Management",
        description: "Template builder and client routine management.",
        icon: CheckSquare,
        route: "/workouts"
      },
      {
        title: "Nutrition & Diet Management",
        description: "Meal planning and macro tracking administration.",
        icon: Apple,
        route: "/nutrition"
      }
    ]
  },
  {
    category: "Operations & Facility",
    description: "Physical infrastructure, hardware, and access control.",
    icon: Building2,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
    border: "border-indigo-200",
    items: [
      {
        title: "Attendance & Access Control",
        description: "Turnstile integration, QR check-ins, and entry logs.",
        icon: Scan,
        route: "/access"
      },
      {
        title: "Multi-Branch Management",
        description: "Control multiple gym locations from a global view.",
        icon: Server,
        route: "/branches"
      },
      {
        title: "Inventory Management",
        description: "Internal asset tracking and consumable management.",
        icon: Package,
        route: "/inventory"
      },
      {
        title: "Equipment Maintenance Management",
        description: "Service schedules, logs, and out-of-order tracking.",
        icon: Wrench,
        route: "/equipment"
      }
    ]
  },
  {
    category: "Finance & Point of Sale",
    description: "Revenue tracks, point of sale, and billing automation.",
    icon: DollarSign,
    color: "text-rose-600",
    bg: "bg-rose-100",
    border: "border-rose-200",
    items: [
      {
        title: "Sales & Lead Management",
        description: "CRM, pipelines, and membership conversion funnels.",
        icon: TrendingUp,
        route: "/sales"
      },
      {
        title: "Financial Management",
        description: "P&L tracking, accounting integrations, and revenue.",
        icon: BarChart3,
        route: "/finance"
      },
      {
        title: "Payments & Billing",
        description: "Invoicing, automated billing, and failed recoveries.",
        icon: CreditCard,
        route: "/billing"
      },
      {
        title: "Retail & POS (Point of Sale)",
        description: "Physical point-of-sale systems and physical registers.",
        icon: Receipt,
        route: "/pos"
      }
    ]
  },
  {
    category: "Marketing & Growth",
    description: "Customer connection, rewards, and online presence.",
    icon: Megaphone,
    color: "text-violet-600",
    bg: "bg-violet-100",
    border: "border-violet-200",
    items: [
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
        title: "Website & Online Booking Management",
        description: "Manage public web portal and embeddable booking widgets.",
        icon: Globe,
        route: "/website"
      },
      {
        title: "Mobile App Management",
        description: "Push notifications and customized member app setup.",
        icon: Smartphone,
        route: "/mobile-app"
      }
    ]
  },
  {
    category: "Intelligence & Support",
    description: "Data analytics, artificial intelligence, and service desk.",
    icon: BrainCircuit,
    color: "text-teal-600",
    bg: "bg-teal-100",
    border: "border-teal-200",
    items: [
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
        route: "/ai",
        badge: "Smart"
      },
      {
        title: "Customer Support & Helpdesk",
        description: "Unified ticketing system and helpdesk for members.",
        icon: ShieldQuestion,
        route: "/support"
      }
    ]
  }
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-secondary-50/50 p-4 md:p-8 lg:p-12">
      <div className="max-w-[1600px] mx-auto space-y-12 pb-24">
        
        {/* Header Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-2.5 rounded-full bg-primary-600"></div>
              <h1 className="text-3xl md:text-4xl font-black text-secondary-900 tracking-tight">Central Data Center</h1>
            </div>
            
            <a href="/branches/provision" className="flex items-center justify-center gap-2 bg-secondary-900 hover:bg-black text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap group">
              <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Provision New Gym Platform
            </a>
          </div>
          <p className="text-lg text-secondary-500 font-medium max-w-3xl">
            System Administrator Control Panel. Manage, monitor, and configure all integrated fitness ecosystem platforms from this singular command center.
          </p>

          {/* Global Network Overview Widget */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-5 rounded-2xl border border-secondary-200 flex items-center gap-4">
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                <Network className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-black text-secondary-900 leading-none mb-1">12</p>
                <p className="text-xs font-bold text-secondary-500 uppercase tracking-wider">Active Gym Branches</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-secondary-200 flex items-center gap-4">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-black text-secondary-900 leading-none mb-1">34.2K</p>
                <p className="text-xs font-bold text-secondary-500 uppercase tracking-wider">Total Network Members</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-secondary-200 flex items-center gap-4">
              <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-black text-secondary-900 leading-none mb-1">99.9%</p>
                <p className="text-xs font-bold text-secondary-500 uppercase tracking-wider">Platform Uptime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="space-y-16">
          {platformModules.map((section, idx) => (
            <section key={idx} className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className={cn("p-3 rounded-xl", section.bg, section.border, "border")}>
                   <section.icon className={cn("w-6 h-6", section.color)} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-secondary-900 tracking-tight">{section.category}</h2>
                  <p className="text-sm text-secondary-500">{section.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {section.items.map((item, itemIdx) => (
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
                      
                      {item.badge && (
                        <span className={cn(
                          "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0 ml-2 mt-1",
                          item.badge === 'Premium' ? "bg-fuchsia-100 text-fuchsia-700" :
                          item.badge === 'Smart' ? "bg-teal-100 text-teal-700" :
                          "bg-emerald-100 text-emerald-700"
                        )}>
                          {item.badge}
                        </span>
                      )}
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
            </section>
          ))}
        </div>

      </div>
    </div>
  );
}
