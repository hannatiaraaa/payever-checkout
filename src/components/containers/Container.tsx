import React, { useState } from 'react';
import TopBar from '../nav/TopBar';
import DockSidebar from '../nav/DockSidebar';
import { useTheme } from 'next-themes';

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  activeNav?: string;
};

type Props = ContainerProps;

const Container = ({ children, className, activeNav }: Props) => {
  const { systemTheme } = useTheme();
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className={`w-screen h-screen flex flex-col px-4 pt-4 pb-8 gap-4 ${className}`}>
      <TopBar
        theme={systemTheme}
        openSidebar={() => setShowSidebar(!showSidebar)}
      />
      <div className='hidden lg:flex overflow-hidden h-full gap-4'>
        {showSidebar && (
          <DockSidebar
            activeNav={activeNav}
            onClose={() => setShowSidebar(false)}
          />
        )}
        <div className='overflow-auto flex-1'>{children}</div>
      </div>
    </div>
  );
};

export default Container;
