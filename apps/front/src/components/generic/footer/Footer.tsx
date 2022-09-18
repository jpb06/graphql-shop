import GithubIcon from '../../../../public/technos-icons/github.svg';
import { Brand } from '../brand/Brand';
import { Links } from './Links';

export const Footer = () => (
  <footer className="p-4 sm:p-6 bg-gray-900">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <div className="flex items-center">
          <Brand />
        </div>
      </div>
      <Links />
    </div>
    <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm sm:text-center text-gray-400">
        © 2022{' '}
        <a href="" className="hover:underline">
          Yolo
        </a>
        .
      </span>
      <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <a
          href="https://github.com/jpb06"
          className="text-gray-500 hover:text-white"
        >
          <GithubIcon className="w-5 h-5" aria-hidden="true" />
          <span className="sr-only">GitHub account</span>
        </a>
      </div>
    </div>
  </footer>
);
