import { PropsWithChildren } from 'react';

import Loader from '../../../../public/loader.svg';

export const GlobalCircularLoader = ({ children }: PropsWithChildren) => (
  <div role="status" className="w-full pt-36 pb-40 text-center">
    <Loader className="mr-2 inline h-36 w-36 animate-spin fill-blue-600 text-gray-600" />
    {children && (
      <div className="pt-2 text-center text-xl font-bold text-gray-600">
        {children}
      </div>
    )}
    <span className="sr-only">{children}</span>
  </div>
);
