import { NavMenuLink } from './NavMenuLink';

type NavMobileMenuProps = {
  isCollapsed: boolean;
};

export const NavMobileMenu = ({ isCollapsed }: NavMobileMenuProps) => {
  return (
    <div
      className="justify-between items-center w-full md:flex md:w-auto md:order-1"
      id="collapse-menu"
    >
      <div className={isCollapsed ? 'hidden md:flex' : 'md:flex'}>
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <NavMenuLink to="/">Articles</NavMenuLink>
          <NavMenuLink to="/order">Order</NavMenuLink>
        </ul>
      </div>
    </div>
  );
};
