import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { 
  AppstoreOutlined, BookOutlined, 
  UserOutlined, CheckSquareOutlined, SettingOutlined,
  SearchOutlined, BellOutlined, SunOutlined, MoonOutlined, 
  DownOutlined, LayoutOutlined, LogoutOutlined
} from '@ant-design/icons';

// ✅ PRESETS DEFINED DIRECTLY HERE FOR INDEPENDENT USE
export const sidebarPresets = {
  light: {
    name: 'Clean Light',
    bg: 'bg-white border-r border-gray-200',
    text: 'text-gray-600',
    activeBg: 'bg-[#7A1849] text-white shadow-md',
    activeText: 'text-white',
    hover: 'hover:bg-[#FCF7F9] hover:text-[#7A1849]',
    icon: 'text-gray-500',
  },
  maroon: {
    name: 'Classic Maroon',
    bg: 'bg-gradient-to-b from-[#531324] to-[#2D0A14] border-r border-[#3D0F1C]',
    text: 'text-[#E0C3D0]',
    activeBg: 'bg-white text-[#7A1849] shadow-lg scale-[1.02]',
    activeText: 'text-[#7A1849]',
    hover: 'hover:bg-white/10 hover:text-white',
    icon: 'text-[#E0C3D0]',
  },
  solid: {
    name: 'Bold Solid',
    bg: 'bg-[#7A1849] border-r border-[#5E1136]',
    text: 'text-[#F3D5E1]',
    activeBg: 'bg-[#531324] text-white shadow-lg border border-white/10',
    activeText: 'text-white',
    hover: 'hover:bg-white/10 hover:text-white',
    icon: 'text-[#F3D5E1]',
  },
  dark: {
    name: 'Midnight (Dark)',
    bg: 'bg-[#1A1A1A] border-r border-[#2D2D2D]',
    text: 'text-gray-400',
    activeBg: 'bg-[#7A1849] text-white shadow-md',
    activeText: 'text-white',
    hover: 'hover:bg-[#2A2A2A] hover:text-white',
    icon: 'text-gray-400',
  }
};

export default function EbookEditorialLayout({ children }) {
  const { isDarkMode, setIsDarkMode, sidebarTheme, isTopNav, setIsTopNav } = useTheme();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // ✅ Default to 'light' if no theme is selected
  const activePresetKey = isDarkMode ? 'dark' : (sidebarTheme || 'light');
  const currentPreset = sidebarPresets[activePresetKey] || sidebarPresets.light;

  const bgMain = isDarkMode ? 'bg-[#121212]' : 'bg-[#F8F9FA]';
  const bgHeader = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const bgDropdown = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-200';
  const inputBg = isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-white' : 'bg-gray-50 border-gray-200 text-gray-900';

  const menuItems = [
    { name: 'Dashboard', icon: <AppstoreOutlined />, path: '/ebook/editorial/dashboard' },
    { name: 'All Books', icon: <BookOutlined />, path: '/ebook/editorial/books' },
    { name: 'Assign Reviewers', icon: <UserOutlined />, path: '/ebook/editorial/reviewers' },
    { name: 'Final Decisions', icon: <CheckSquareOutlined />, path: '/ebook/editorial/reviews-list' },
    { name: 'Settings', icon: <SettingOutlined />, path: '/ebook/editorial/settings' },
  ];

  const handleLogout = () => navigate('/ebook/login');

  return (
    <div className={`flex flex-col h-screen font-sans transition-colors duration-300 ${bgMain}`}>
      
      {!isTopNav && (
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className={`w-[260px] h-full flex-shrink-0 flex flex-col transition-all duration-300 ${currentPreset.bg}`}>
            
            {/* Logo Area */}
            <div className={`h-[72px] flex items-center px-6 border-b ${
              activePresetKey === 'light' ? 'border-gray-200' : 'border-white/10'
            }`}>
              <Link to="/ebook/editorial/dashboard" className="flex items-center gap-3">
                <div className={`rounded-full p-1 shadow-sm ${activePresetKey === 'light' ? 'bg-white border border-gray-100' : 'bg-white'}`}>
                  <img src="/oralogo.png" alt="ORA" className="h-7 w-auto" onError={(e) => e.target.style.display = 'none'} />
                </div>
                <div className="flex flex-col">
                  <span className={`text-[16px] font-serif font-bold leading-tight ${
                    activePresetKey === 'light' ? 'text-gray-900' : currentPreset.text
                  }`}>ORA eBooks</span>
                  <span className={`text-[9px] tracking-[0.2em] uppercase font-semibold opacity-80 ${
                    activePresetKey === 'light' ? 'text-gray-500' : currentPreset.text
                  }`}>Editorial</span>
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <nav className="space-y-1.5">
                {menuItems.map((item) => {
                  // Advanced active-state logic to keep parent menu items highlighted on sub-pages
                  let isActive = false;
                  
                  if (item.path === '/ebook/editorial/books') {
                    isActive = currentPath.includes('/books') || currentPath.includes('/book-details') || currentPath.includes('/screening');
                  } else if (item.path === '/ebook/editorial/reviewers') {
                    isActive = currentPath.includes('/reviewers') || currentPath.includes('/assign');
                  } else if (item.path === '/ebook/editorial/reviews-list') {
                    isActive = currentPath.includes('/reviews-list') || currentPath.includes('/decision-workspace');
                  } else {
                    isActive = currentPath.includes(item.path);
                  }

                  return (
                    <Link 
                      key={item.name} 
                      to={item.path} 
                      className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-[13px] font-semibold transition-all duration-200 ${
                        isActive ? currentPreset.activeBg : `${currentPreset.text} ${currentPreset.hover}`
                      }`}
                    >
                      <span className={`text-[16px] ${isActive ? currentPreset.activeText : currentPreset.icon}`}>
                        {item.icon}
                      </span> 
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* User Profile Footer */}
            <div className={`p-4 border-t ${
              activePresetKey === 'light' ? 'border-gray-200' : 'border-white/10'
            }`}>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shadow-sm ${
                      activePresetKey === 'light' ? 'bg-[#FCF7F9] text-[#7A1849]' : 'bg-white/20 backdrop-blur-sm text-white'
                    }`}>AM</div>
                    <div>
                      <p className={`text-[13px] font-bold ${
                        activePresetKey === 'light' ? 'text-gray-900' : currentPreset.text
                      }`}>Ava Morgan</p>
                      <p className={`text-[10px] opacity-70 ${
                        activePresetKey === 'light' ? 'text-gray-500' : currentPreset.text
                      }`}>Editor-in-Chief</p>
                    </div>
                  </div>
                  <button onClick={handleLogout} className={`p-2 rounded-lg transition-colors ${
                    activePresetKey === 'light' 
                      ? 'text-gray-500 hover:bg-gray-100 hover:text-red-500' 
                      : `${currentPreset.text} hover:bg-white/10`
                  }`}>
                    <LogoutOutlined />
                  </button>
               </div>
            </div>
          </aside>

          {/* Main Area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <header className={`h-[72px] flex items-center justify-between px-6 border-b transition-colors duration-300 ${bgHeader}`}>
              <div className="relative w-[350px]">
                <SearchOutlined className="absolute left-3 top-2.5 text-gray-400" />
                <input type="text" placeholder="Search books, authors, reviewers..." className={`w-full pl-9 pr-4 py-2 rounded-lg text-[13px] outline-none border ${inputBg} focus:border-[#7A1849]`} />
              </div>

              <div className="flex items-center gap-4">
                <button className={`w-8 h-8 rounded-full flex items-center justify-center relative ${isDarkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}>
                  <BellOutlined />
                  <span className={`absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border ${isDarkMode ? 'border-[#1E1E1E]' : 'border-white'}`}></span>
                </button>
                
                <button onClick={() => setIsTopNav(true)} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] font-bold border transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                  <LayoutOutlined /> Top Layout
                </button>
                
                <button onClick={() => setIsDarkMode(!isDarkMode)} className={`w-8 h-8 rounded-full flex items-center justify-center ${isDarkMode ? 'hover:bg-gray-800 text-yellow-400' : 'hover:bg-gray-100 text-gray-600'}`}>
                  {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
                </button>
                
                <div className={`h-5 w-px mx-1 ${borderCol}`}></div>
                
                <div className="relative">
                  <button onClick={() => setShowProfileMenu(!showProfileMenu)} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#7A1849] text-white flex items-center justify-center text-[11px] font-bold shadow-sm">AM</div>
                    <DownOutlined className={`text-[10px] ${textMuted}`} />
                  </button>
                  {showProfileMenu && (
                    <div className={`absolute right-0 mt-2 w-48 rounded-xl shadow-lg border py-2 z-50 ${bgDropdown}`}>
                      <button 
                        onClick={() => navigate('/ebook/editorial/settings')}
                        className={`w-full text-left px-4 py-2 text-[13px] flex items-center gap-2 ${isDarkMode ? 'text-gray-300 hover:bg-[#2A2A2A]' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        <UserOutlined /> My Profile
                      </button>
                      <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-[13px] flex items-center gap-2 text-red-500 hover:bg-red-50">
                        <LogoutOutlined /> Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </header>
            
            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto p-4 lg:p-6">
              <div className="w-full mx-auto max-w-[1500px]">
                {children}
              </div>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}