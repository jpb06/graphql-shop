import Link from 'next/link';
import { PropsWithChildren } from 'react';

type NavMenuLinkProps = {
  to: string;
};

export const NavMenuLink = ({
  children,
  to,
}: PropsWithChildren<NavMenuLinkProps>) => (
  <Link href={to}>
    <li className="rounded-xl py-2 pr-4 pl-3 text-xl md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
      {children}
    </li>
  </Link>
);
