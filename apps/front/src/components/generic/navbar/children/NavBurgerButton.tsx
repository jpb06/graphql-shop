import { useAtom } from 'jotai';

import MenuIcon from '@front/assets/icons/menu-icon.svg';
import { Avatar } from '@front/components/design-system';
import { authStateAtom } from '@front/state';

type NavBurgerButtonProps = {
  onExpandClick: () => void;
};

export const NavBurgerButton = ({ onExpandClick }: NavBurgerButtonProps) => {
  const [state] = useAtom(authStateAtom);

  return (
    <div className="flex md:order-2">
      {state ? (
        <Avatar
          name={`${state.firstName[0]}${state.lastName[0]}`}
          onClick={onExpandClick}
        />
      ) : (
        <button
          type="button"
          className="mr-1 rounded-lg p-2.5 text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 md:hidden"
          onClick={onExpandClick}
        >
          <MenuIcon className="h-5 w-5 text-sky-200" />
        </button>
      )}
    </div>
  );
};
