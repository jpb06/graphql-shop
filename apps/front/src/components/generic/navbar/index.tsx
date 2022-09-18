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
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900 fixed w-full z-20 top-0 left-0 border-b text-white">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Brand />
          <NavContent onExpandClick={handleExpandClick} />
          <NavMobileMenu isCollapsed={isNavCollapsed} />
        </div>
      </nav>
      <div className="mb-14 md:mb-16" />
    </>
  );
};
