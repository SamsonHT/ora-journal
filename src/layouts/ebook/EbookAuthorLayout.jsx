import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { 
  AppstoreOutlined, BookOutlined, CheckCircleOutlined, 
  TagsOutlined, SyncOutlined, SettingOutlined, 
  SearchOutlined, BellOutlined, SunOutlined, MoonOutlined, 
  DownOutlined, LayoutOutlined, LogoutOutlined, UserOutlined
} from '@ant-design/icons';

// ✅ PRESETS DEFINED DIRECTLY HERE TO AVOID IMPORT ERRORS
export const sidebarPresets = {
  maroon: {
    name: 'Classic Maroon',
    bg: 'bg-gradient-to-b from-[#531324] to-[#2D0A14] border-r border-[#3D0F1C]',
    text: 'text-[#E0C3D0]',
    activeBg: 'bg-white text-[#7A1849] shadow-lg scale-[1.02]',
    activeText: 'text-[#7A1849]',
    hover: 'hover:bg-white/10 hover:text-white',
    icon: 'text-[#E0C3D0]',
  },
  light: {
    name: 'Clean Light',
    bg: 'bg-white border-r border-gray-200',
    text: 'text-gray-600',
    activeBg: 'bg-[#7A1849] text-white shadow-md',
    activeText: 'text-white',
    hover: 'hover:bg-[#FCF7F9] hover:text-[#7A1849]',
    icon: 'text-gray-500',
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

export default function EbookAuthorLayout({ children }) {
  const { isDarkMode, setIsDarkMode, sidebarTheme, isTopNav, setIsTopNav } = useTheme();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const activePresetKey = isDarkMode ? 'dark' : (sidebarTheme || 'maroon');
  const currentPreset = sidebarPresets[activePresetKey] || sidebarPresets.maroon;

  const bgMain = isDarkMode ? 'bg-[#121212]' : 'bg-[#F8F9FA]';
  const bgHeader = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const bgDropdown = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-200';
  const inputBg = isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-white' : 'bg-gray-50 border-gray-200 text-gray-900';

  const menuItems = [
    { name: 'Dashboard', icon: <AppstoreOutlined />, path: '/ebook/author/dashboard' },
    { name: 'My Books', icon: <BookOutlined />, path: '/ebook/author/my-books' },
    { name: 'Pending Proof', icon: <CheckCircleOutlined />, path: '/ebook/author/pending-proof' },
    { name: 'Publishing Fee', icon: <TagsOutlined />, path: '/ebook/author/publishing-fee' },
    { name: 'Revisions', icon: <SyncOutlined />, path: '/ebook/author/revisions' },
    { name: 'Settings', icon: <SettingOutlined />, path: '/ebook/author/settings' },
  ];

  const handleLogout = () => navigate('/ebook/login');

  return (
    <div className={`flex flex-col h-screen font-sans transition-colors duration-300 ${bgMain}`}>
      
      {!isTopNav && (
        <div className="flex flex-1 overflow-hidden">
          <aside className={`w-[260px] h-full flex-shrink-0 flex flex-col transition-all duration-300 ${currentPreset.bg}`}>
            <div className={`h-[72px] flex items-center px-6 border-b border-white/10`}>
              <Link to="/ebook" className="flex items-center gap-3">
                <div className="bg-white rounded-full p-1 shadow-md">
                  <img src="/oralogo.png" alt="ORA" className="h-7 w-auto" onError={(e) => e.target.style.display = 'none'} />
                </div>
                <div className="flex flex-col">
                  <span className={`text-[16px] font-serif font-bold leading-tight ${currentPreset.text}`}>ORA eBooks</span>
                  <span className={`text-[9px] tracking-[0.2em] uppercase font-semibold opacity-80 ${currentPreset.text}`}>Author Portal</span>
                </div>
              </Link>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-4">
              <nav className="space-y-1.5">
                {menuItems.map((item) => {
                  const isActive = currentPath.includes(item.path);
                  return (
                    <Link key={item.name} to={item.path} className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-[13px] font-semibold transition-all duration-200 ${isActive ? currentPreset.activeBg : `${currentPreset.text} ${currentPreset.hover}`}`}>
                      <span className={`text-[16px] ${isActive ? currentPreset.activeText : currentPreset.icon}`}>{item.icon}</span> {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className={`p-4 border-t border-white/10`}>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shadow-sm bg-white/20 backdrop-blur-sm ${currentPreset.text}`}>AM</div>
                    <div>
                      <p className={`text-[13px] font-bold ${currentPreset.text}`}>Ava Morgan</p>
                      <p className={`text-[10px] opacity-70 ${currentPreset.text}`}>Author</p>
                    </div>
                  </div>
                  <button onClick={handleLogout} className={`p-2 rounded-lg ${currentPreset.text} hover:bg-white/10 transition-colors`}>
                    <LogoutOutlined />
                  </button>
               </div>
            </div>
          </aside>

          <div className="flex-1 flex flex-col overflow-hidden">
            <header className={`h-[72px] flex items-center justify-between px-8 border-b transition-colors duration-300 ${bgHeader}`}>
              <div className="relative w-[350px]">
                <SearchOutlined className="absolute left-3 top-2.5 text-gray-400" />
                <input type="text" placeholder="Search books, submissions..." className={`w-full pl-9 pr-4 py-2 rounded-lg text-[13px] outline-none border ${inputBg} focus:border-[#7A1849]`} />
              </div>

              <div className="flex items-center gap-4">
                <button onClick={() => setShowNotifications(!showNotifications)} className={`w-8 h-8 rounded-full flex items-center justify-center relative ${isDarkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}>
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
                      <button className={`w-full text-left px-4 py-2 text-[13px] flex items-center gap-2 ${isDarkMode ? 'text-gray-300 hover:bg-[#2A2A2A]' : 'text-gray-700 hover:bg-gray-50'}`}>
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
            <main className="flex-1 overflow-y-auto p-8">{children}</main>
          </div>
        </div>
      )}
    </div>
  );
}