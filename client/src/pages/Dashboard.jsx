import React from 'react';
import { 
  Terminal, Group, Activity, Bolt, 
  AlertCircle, Layout, CheckCircle, 
  Search, Rocket, Database, History,
  ShieldAlert
} from 'lucide-react';

const Dashboard = () => {
  // Toggle this to 'Developer' or 'Manager' to see the sections disappear
  const userRole = 'Admin'; 

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* 1. Dynamic Header */}
      <div className="flex justify-between items-center border-b border-[#d2f5fa]/10 pb-4">
        <div>
          <h2 className="text-xl font-bold text-[#78e5ef] tracking-tight flex items-center gap-2">
            {userRole === 'Admin' && <ShieldAlert size={20} className="text-red-400" />}
            {userRole} Overview
          </h2>
          <p className="text-xs text-[#d2f5fa]/40 uppercase tracking-widest mt-1">
            {userRole === 'Admin' ? 'Admin Console v2.4.0' : 'Assigned Project Workspace'}
          </p>
        </div>
        <div className="hidden md:flex relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#78e5ef]/40" size={14} />
          <input 
            type="text" 
            placeholder={userRole === 'Admin' ? "Search system logs..." : "Search tasks..."}
            className="bg-[#042124] border border-[#78e5ef]/20 rounded-sm text-xs py-2 pl-9 pr-4 w-64 outline-none focus:border-[#78e5ef] transition-all"
          />
        </div>
      </div>

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {userRole === 'Admin' ? (
          <>
            <StatCard label="Total Projects" value="42" icon={<Terminal />} color="text-cyan-400" trend="+4 this month" />
            <StatCard label="Active Users" value="1,284" icon={<Group />} color="text-cyan-400" trend="+12% vs last week" />
            <StatCard label="Critical Issues" value="08" icon={<AlertCircle />} color="text-red-500" pulse trend="Requires attention" />
            <StatCard label="System Health" value="98.2%" icon={<Bolt />} color="text-cyan-400" bar />
          </>
        ) : (
          <>
            <StatCard label="My Active Tasks" value="12" icon={<Layout />} color="text-cyan-400" />
            <StatCard label="Sprints" value="03" icon={<Activity />} color="text-cyan-400" />
            <StatCard label="Critical Issues" value="08" icon={<AlertCircle />} color="text-red-500" pulse />
            <StatCard label="Fix Rate" value="94%" icon={<CheckCircle />} color="text-green-400" bar />
          </>
        )}
      </div>

      {/* 3. Main Data Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 space-y-6">
          {/* Only Admins see User Management */}
          {userRole === 'Admin' && <UserManagementTable />}
          
          {/* Project Provisioning Form (Admin Only) */}
          {userRole === 'Admin' && <ProjectProvisioningForm />}

          {/* Developers would see a Task List here instead */}
          {userRole !== 'Admin' && (
            <div className="bg-[#0a3338] border border-[#d2f5fa]/10 p-6">
              <h3 className="text-[#78e5ef] text-sm font-bold uppercase mb-4 tracking-widest">Assigned Issues</h3>
              <p className="text-xs text-[#d2f5fa]/40 italic">Developer task board content goes here...</p>
            </div>
          )}
        </div>

        {/* 4. Side Widget Area */}
        <div className="space-y-6">
          <SystemEventsLog />
          
        </div>

      </div>
    </div>
  );
};

// --- SUB-COMPONENTS  ---

const StatCard = ({ label, value, icon, color, pulse, bar, trend }) => (
  <div className="bg-[#042124] border border-[#dfe3e4]/5 p-6 rounded-lg hover:border-[#78e5ef]/20 transition-all shadow-lg shadow-black/20">
    <div className="flex justify-between items-start mb-4 text-[#dfe3e4]/40 text-[10px] uppercase font-bold tracking-widest">
      {label} <span className={`${color} ${pulse ? 'animate-pulse' : ''}`}>{icon}</span>
    </div>
    <div className="text-4xl font-bold text-[#c8faff] tracking-tight">{value}</div>
    {trend && (
      <div className="text-[10px] text-[#78e5ef]/60 mt-2 flex items-center gap-1 font-mono">
        {trend}
      </div>
    )}
    {bar && (
      <div className="w-full bg-[#0a0f10] h-1.5 mt-4 overflow-hidden rounded-full">
        <div className="bg-[#78e5ef] h-full w-[98%] shadow-[0_0_10px_#78e5ef]"></div>
      </div>
    )}
  </div>
);

const UserManagementTable = () => (
  <div className="bg-[#042124] border border-[#dfe3e4]/5 rounded-lg overflow-hidden">
    <div className="px-6 py-4 border-b border-[#dfe3e4]/5 flex justify-between items-center bg-[#1b2121]/50">
      <h3 className="text-sm text-[#78e5ef] font-bold uppercase tracking-widest">User Management</h3>
      <button className="text-[10px] font-bold text-[#78e5ef] border border-[#78e5ef]/30 px-3 py-1 hover:bg-[#78e5ef]/10 transition-all">
        EXPORT CSV
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-[#0a0f10] text-[10px] text-[#dfe3e4]/40 uppercase tracking-widest">
          <tr>
            <th className="px-6 py-4">User Identity</th>
            <th className="px-6 py-4">System Role</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="text-xs divide-y divide-[#dfe3e4]/5">
          {/* User Rows use bg-[#171c1d] and text-[#dfe3e4] */}
          <UserRow name="Sarah Miller" email="smiller@evtrack.io" role="Senior Dev" status="Active" roleColor="bg-[#253aa7]/30 text-[#bac3ff]" />
          <UserRow name="James Kovic" email="j.kovic@evtrack.io" role="QA Lead" status="Active" roleColor="bg-[#ffcd6d]/10 text-[#f0bf61]" />
        </tbody>
      </table>
    </div>
  </div>
);

const UserRow = ({ name, email, role, status, color }) => (
  <tr className="hover:bg-white/5 transition-colors">
    <td className="px-6 py-4">
      <div className="font-bold">{name}</div>
      <div className="text-[10px] text-[#d2f5fa]/40 font-mono">{email}</div>
    </td>
    <td className="px-6 py-4">
      <span className="px-2 py-0.5 bg-[#78e5ef]/10 text-[#78e5ef] text-[9px] font-bold rounded-sm uppercase border border-[#78e5ef]/20">{role}</span>
    </td>
    <td className="px-6 py-4">
      <div className="flex items-center gap-2">
        <div className={`w-1.5 h-1.5 rounded-full ${color}`}></div>
        <span className="text-[10px] uppercase tracking-tighter">{status}</span>
      </div>
    </td>
    <td className="px-6 py-4 text-right space-x-2">
      <button className="text-[9px] font-bold text-[#78e5ef] hover:underline uppercase">Manage</button>
    </td>
  </tr>
);

const ProjectProvisioningForm = () => (
  <div className="bg-gradient-to-br from-[#0a3338] to-[#042124] border border-[#d2f5fa]/10 p-8 rounded-lg">
    <h3 className="font-bold text-2xl text-[#78e5ef] mb-2 tracking-tight">Initialize New Vector</h3>
    <p className="text-xs text-[#d2f5fa]/40 uppercase tracking-widest mb-8">Provision Foundation Resources</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase tracking-widest text-[#78e5ef] font-bold">Project Label</label>
          <input className="bg-[#042124] border border-[#d2f5fa]/10 focus:border-[#78e5ef] text-sm p-3 outline-none" placeholder="e.g. Project Obsidian" />
        </div>
      </div>
      <div className="pt-5">
        <button className="w-full py-3 bg-[#78e5ef] text-[#00363a] font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all">
          <Rocket size={14} /> Provision Project
        </button>
      </div>
    </div>
  </div>
);

const SystemEventsLog = () => (
  <div className="bg-[#0a3338] border border-[#d2f5fa]/10 rounded-lg p-6 h-fit">
    <h3 className="text-sm text-[#78e5ef] font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
      <History size={16} /> System Events
    </h3>
    <div className="space-y-6">
      <ActivityItem text="New project initialized: Aether" time="12:44:02" color="bg-cyan-400" />
      <ActivityItem text="Database latency spike detected" time="11:30:15" color="bg-red-400" />
      <ActivityItem text="Admin login from 192.168.1.104" time="08:00:01" color="bg-[#d2f5fa]/20" />
    </div>
  </div>
);


const ActivityItem = ({ text, time, color }) => (
  <div className="flex gap-3 text-xs">
    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${color}`}></div>
    <div>
      <p className="text-[#d2f5fa] font-medium leading-tight">{text}</p>
      <span className="text-[10px] text-[#d2f5fa]/20 font-mono uppercase">{time} // SID-AUTO</span>
    </div>
  </div>
);

export default Dashboard;