import React, { useState } from 'react';
import TopBar from '../nav/TopBar';
import DockSidebar from '../nav/DockSidebar';
import { useTheme } from 'next-themes';
import { closeDockSidebarAnimation, openDockSidebarAnimation } from '@/animations/components/dockSidebar.animation';
import type { TPageName } from '@/types/nav.type';

type Props = {
  children?: React.ReactNode;
  className?: string;
  activeNav?: string;
};

const Container = ({ children, className, activeNav }: Props) => {
  const { systemTheme } = useTheme();
  const [showSidebar, setShowSidebar] = useState(true);
  const [showFullSidebar, setShowFullSidebar] = useState(false);
  const sidebar = '#dock-sidebar';

  const closeSidebar = () => {
    const element = document.querySelector(sidebar) as HTMLElement;
    closeDockSidebarAnimation(sidebar, () => {
      element.style.display = 'none';
      setShowSidebar(false);
    });
  };

  const openSidebar = () => {
    const element = document.querySelector(sidebar) as HTMLElement;
    openDockSidebarAnimation(sidebar, () => {
      element.style.display = 'block';
      setShowSidebar(true);
    });
  };

  const toggleSidebar = () => {
    if (innerWidth >= 1024) {
      if (showSidebar) {
        closeSidebar();
      } else {
        openSidebar();
      }
    }

    setShowFullSidebar(!showFullSidebar);
  };

  return (
    <div className={`w-screen lg:h-screen flex flex-col px-4 pt-4 pb-8 gap-4 ${className}`}>
      <TopBar
        theme={systemTheme}
        toggleSidebar={toggleSidebar}
      />
      <div
        id='full-container'
        className='hidden lg:flex overflow-hidden h-full gap-4'
      >
        <DockSidebar
          id='dock-sidebar'
          activeNav={activeNav}
          onClose={closeSidebar}
        />

        <div
          id='content-page'
          className='overflow-auto flex-1'
        >
          {children}
        </div>
      </div>
      {showFullSidebar ? (
        <DockSidebar
          className='lg:hidden w-full h-screen lg:h-auto'
          id='dock-sidebar'
          activeNav={activeNav}
          onClose={closeSidebar}
          onNavClick={(name) => onPageTransition(name as TPageName)}
        />
      ) : (
        <div
          id='content-page'
          className='lg:hidden'
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Container;
