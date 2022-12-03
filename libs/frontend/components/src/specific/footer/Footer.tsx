import GithubIcon from '@front/assets/technos-icons/github.svg';

import { Brand } from '../../design-system';
import { Links } from './Links';

export const Footer = () => (
  <footer className="bg-gray-900 p-4 sm:p-6">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <div className="flex items-center">
          <Brand />
        </div>
      </div>
      <Links />
    </div>
    <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-gray-400 sm:text-center">
        © 2022{' '}
        <a href="" className="hover:underline">
          Yolo
        </a>
        .
      </span>
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <a
          href="https://github.com/jpb06"
          className="text-gray-500 hover:text-white"
        >
          <GithubIcon className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">GitHub account</span>
        </a>
      </div>
    </div>
  </footer>
);
