import MenuIcon from '../../../../public/icons/menu-icon.svg';
import SearchIcon from '../../../../public/icons/search-icon.svg';

type NavContentProps = {
  onExpandClick: () => void;
};

export const NavContent = ({ onExpandClick }: NavContentProps) => (
  <div className="flex md:order-2">
    <button
      type="button"
      className="p-2.5 mr-1 rounded-lg text-sm md:hidden focus:outline-none focus:ring-2 hover:bg-gray-700 focus:ring-gray-700"
      onClick={onExpandClick}
    >
      <MenuIcon className="w-5 h-5 text-sky-200" />
    </button>
  </div>
);
