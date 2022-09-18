import { useState } from 'react';

import { Brand } from '../brand/Brand';
import { NavContent } from './NavContent';
import { NavMobileMenu } from './NavMobileMenu';

export const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleExpandClick = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-gray-900 px-2 py-2.5 text-white sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Brand />
          <NavContent onExpandClick={handleExpandClick} />
          <NavMobileMenu isCollapsed={isNavCollapsed} />
        </div>
      </nav>
      <div className="mb-14 md:mb-16" />
    </>
  );
};
