import { PropsWithChildren } from 'react';

import Loader from '../../../../public/loader.svg';

export const GlobalCircularLoader = ({ children }: PropsWithChildren) => (
  <div role="status" className="text-center w-full pt-36 pb-40">
    <Loader className="inline mr-2 w-36 h-36 animate-spin text-gray-600 fill-blue-600" />
    {children && (
      <div className="text-center text-xl pt-2 text-gray-600 font-bold">
        {children}
      </div>
    )}
    <span className="sr-only">{children}</span>
  </div>
);
