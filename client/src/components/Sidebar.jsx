import { NavLink } from 'react-router-dom';
import { Menu, X, LayoutDashboard, FolderKanban, Bug, Bell, ShieldAlert, LogOut } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const userRole = 'Developer'; 

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Projects', path: '/projects', icon: <FolderKanban size={20} /> },
    { name: 'Issues', path: '/issues', icon: <Bug size={20} /> },
    { name: 'Notifications', path: '/notifications', icon: <Bell size={20} /> },
  ];

  return (
    <>
    {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden" 
          onClick={toggleSidebar}
        />
      )}
    <aside className={`fixed left-0 top-0 h-full w-64 bg-[#042124] border-r border-[#d2f5fa]/10 flex flex-col py-6 z-40 transition-transform duration-300 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        
        
        <button 
          onClick={toggleSidebar} 
          className="lg:hidden absolute right-4 top-6 text-[#78e5ef]"
        >
          <X size={24} />
        </button>

        <div className="px-6 mb-10 flex items-center gap-2">
          <div className="w-8 h-8 bg-[#78e5ef] rounded-lg flex items-center justify-center text-[#042124] font-bold">D</div>
          <div className="text-xl font-bold tracking-tighter text-[#78e5ef]">DevTrack</div>
        </div>

      <nav className="flex-1 space-y-1 px-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'bg-[#78e5ef]/10 text-[#78e5ef] shadow-[inset_0_0_10px_rgba(120,229,239,0.05)]' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            {item.icon}
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}

        {userRole === 'Admin' && (
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 mt-8 rounded-lg border border-[#78e5ef]/20 transition-all ${
                isActive ? 'bg-[#78e5ef] text-[#042124]' : 'text-[#78e5ef] hover:bg-[#78e5ef]/10'
              }`
            }
          >
            <ShieldAlert size={20} />
            <span className="font-medium">Admin Panel</span>
          </NavLink>
        )}
      </nav>

      <div className="px-6 mt-auto">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
    </>
  );
};
export default Sidebar;