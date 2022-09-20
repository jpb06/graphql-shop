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
    <li className="cursor-pointer rounded-xl border-gray-700 py-2 pr-4 pl-3 text-xl text-gray-400 hover:bg-gray-700 hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-white">
      {children}
    </li>
  </Link>
);
