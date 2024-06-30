import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import logo from '../../assets/images/logo.png';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { HiOutlineLogout, HiOutlineMenu } from "react-icons/hi";

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsCollapsed(true),
    onSwipedRight: () => setIsCollapsed(false),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div {...handlers} className={classNames('flex flex-col bg-blue-950 text-white transition-all duration-300', { 'w-60': !isCollapsed, 'w-20': isCollapsed })}>
      <div className='flex items-center justify-between px-3 py-3'>
        {!isCollapsed && <img src={logo} alt="logo" className='h-10 w-auto transition-all duration-300' />}
        {isCollapsed && (
          <button onClick={toggleSidebar} className="text-xl focus:outline-none w-full flex justify-center">
            <HiOutlineMenu />
          </button>
        )}
      </div>
      <div className='flex-1 py-8 flex flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} isCollapsed={isCollapsed} />
        ))}
      </div>
      <div className='flex flex-col gap-0.5 pt-2 border-t border-blue-900'>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item => (
          <SidebarLink key={item.key} item={item} isCollapsed={isCollapsed} />
        ))}
        <div className={classNames('text-red-400 cursor-pointer', linkClasses, { 'justify-center': isCollapsed })}>
          <span className='text-xl'><HiOutlineLogout /></span>
          {!isCollapsed && 'Logout'}
        </div>
      </div>
    </div>
  );

  function SidebarLink({ item, isCollapsed }) {
    const { pathname } = useLocation();

    return (
      <Link
        to={item.path}
        className={classNames(pathname === item.path ? 'bg-blue-950 text-white' : 'text-neutral-400', linkClasses, { 'justify-center': isCollapsed })}
      >
        <span className='text-xl'>{item.icon}</span>
        {!isCollapsed && item.label}
      </Link>
    );
  }
}
