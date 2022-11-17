import { PropsWithChildren } from 'react';

import { Loader } from '../loader/Loader';

export const GlobalCircularLoader = ({ children }: PropsWithChildren) => (
  <div role="status" className="w-full pt-36 pb-40 text-center">
    <Loader />
    {children && (
      <div className="pt-2 text-center text-xl font-bold text-gray-600">
        {children}
      </div>
    )}
    <span className="sr-only">{children}</span>
  </div>
);
