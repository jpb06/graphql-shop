import Image from 'next/image';

import GraphqlLogo from '../../../../public/technos-icons/graphql.svg';
import JotaiLogo from '../../../../public/technos-icons/jotai.png';
import NestLogo from '../../../../public/technos-icons/nest.svg';
import NextLogo from '../../../../public/technos-icons/next.svg';
import NxLogo from '../../../../public/technos-icons/nx.png';
import ReactQueryLogo from '../../../../public/technos-icons/react-query.svg';
import ReactLogo from '../../../../public/technos-icons/react.svg';
import TailwindLogo from '../../../../public/technos-icons/tailwind.svg';
import TypeGraphqlLogo from '../../../../public/technos-icons/typegraphql.png';

export const Links = () => (
  <div className="grid grid-cols-2 md:gap-20 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 md:mr-20">
    <div>
      <h2 className="mb-6 text-sm font-semibold uppercase text-white">
        Frameworks
      </h2>
      <ul className="text-gray-400">
        <li className="mb-4 flex">
          <Image src={NxLogo} width="20" height="20" alt="nx" />
          <a href="https://nx.dev/" className="hover:underline pl-1">
            nx
          </a>
        </li>
        <li className="mb-4 flex">
          <NextLogo className="h-5 w-5" />
          <a href="https://nextjs.org/" className="hover:underline pl-1">
            nextjs
          </a>
        </li>
        <li className="mb-4 flex">
          <NestLogo className="h-5 w-5" />
          <a href="https://nestjs.com/" className="hover:underline pl-1">
            nestjs
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h2 className="mb-6 text-sm font-semibold text-white">Server state</h2>
      <ul className="text-gray-400">
        <li className="mb-4 flex">
          <GraphqlLogo className="h-5 w-5" />
          <a href="https://graphql.org/" className="hover:underline pl-1">
            graphql
          </a>
        </li>
        <li className="mb-4 flex">
          <Image
            src={TypeGraphqlLogo}
            width="20"
            height="20"
            alt="typegraphql"
          />
          <a href="https://typegraphql.com/" className="hover:underline pl-1">
            typegraphql
          </a>
        </li>
        <li className="mb-4 flex">
          <ReactQueryLogo className="h-5 w-5" />
          <a
            href="https://tanstack.com/query/v4"
            className="hover:underline pl-1"
          >
            react-query
          </a>
        </li>
      </ul>
    </div>
    <div className="mt-4 sm:mt-0">
      <h2 className="mb-6 text-sm font-semibold text-white">Frontend</h2>
      <ul className="text-gray-400">
        <li className="mb-4 flex">
          <ReactLogo className="h-5 w-5" />
          <a href="https://reactjs.org/" className="hover:underline pl-1">
            react
          </a>
        </li>
        <li className="mb-4 flex">
          <TailwindLogo className="h-5 w-5" />
          <a href="https://tailwindcss.com/" className="hover:underline pl-1">
            tailwind
          </a>
        </li>
      </ul>
    </div>
    <div className="mt-4 sm:mt-0">
      <h2 className="mb-6 text-sm font-semibold uppercase text-white">
        App state
      </h2>
      <ul className="text-gray-400">
        <li className="mb-4 flex">
          <Image src={JotaiLogo} width="24" height="20" alt="jotai" />{' '}
          <a href="https://jotai.org/docs" className="hover:underline pl-1">
            jotai
          </a>
        </li>
      </ul>
    </div>
  </div>
);
