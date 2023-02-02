import { useAtom } from 'jotai';

import { Button, useModal } from '@front/components/design-system';
import { authStateAtom } from '@front/state';

import { NavMenuLink } from './NavMenuLink';
import { AuthModal } from '../modal/auth-modal';

type NavMenuProps = {
  isCollapsed: boolean;
};

export const NavMenu = ({ isCollapsed }: NavMenuProps) => {
  const [auth] = useAtom(authStateAtom);

  const { updateModal } = useModal();

  return (
    <div
      className="w-full items-center justify-between md:order-1 md:flex md:w-auto"
      id="collapse-menu"
    >
      <div className={isCollapsed ? 'hidden md:flex' : 'md:flex'}>
        <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
          <NavMenuLink to="/">Articles</NavMenuLink>
          <NavMenuLink to="/order">Order</NavMenuLink>
          {!auth && (
            <Button
              variant="blue"
              className="mt-2 w-full md:hidden"
              onClick={() => updateModal(AuthModal)}
            >
              Login
            </Button>
          )}
        </ul>
      </div>
    </div>
  );
};
