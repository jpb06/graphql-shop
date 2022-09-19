import MenuIcon from '../../../../public/icons/menu-icon.svg';

type NavContentProps = {
  onExpandClick: () => void;
};

export const NavContent = ({ onExpandClick }: NavContentProps) => (
  <div className="flex md:order-2">
    <button
      type="button"
      className="mr-1 rounded-lg p-2.5 text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 md:hidden"
      onClick={onExpandClick}
    >
      <MenuIcon className="h-5 w-5 text-sky-200" />
    </button>
  </div>
);
