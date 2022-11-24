import { useAtom } from 'jotai';
import { useState } from 'react';

import { Brand, Button, useModal } from '@front/components';
import { authStateAtom } from '@front/state';

import { NavBurgerButton } from './children/NavBurgerButton';
import { NavMenu } from './children/NavMenu';
import { AuthModal } from './modal/auth-modal';

export const NavBar = () => {
  const [auth] = useAtom(authStateAtom);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const { updateModal } = useModal();

  const handleExpandClick = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-gray-900 px-2 py-2.5 text-white sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Brand />
          <NavBurgerButton onExpandClick={handleExpandClick} />
          <NavMenu isCollapsed={isNavCollapsed} />
          {!auth && (
            <div className="hidden md:order-3 md:flex">
              <Button variant="blue" onClick={() => updateModal(AuthModal)}>
                Login
              </Button>
            </div>
          )}
        </div>
      </nav>
      <div className="mb-14 md:mb-16" />
    </>
  );
};
