import { NavMenuLink } from './NavMenuLink';

type NavMobileMenuProps = {
  isCollapsed: boolean;
};

export const NavMobileMenu = ({ isCollapsed }: NavMobileMenuProps) => {
  return (
    <div
      className="w-full items-center justify-between md:order-1 md:flex md:w-auto"
      id="collapse-menu"
    >
      <div className={isCollapsed ? 'hidden md:flex' : 'md:flex'}>
        <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
          <NavMenuLink to="/">Articles</NavMenuLink>
          <NavMenuLink to="/order">Order</NavMenuLink>
        </ul>
      </div>
    </div>
  );
};
