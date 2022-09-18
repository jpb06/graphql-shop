import { PropsWithChildren } from 'react';

import ErrorCircle from '../../../../public/icons/error-circle.svg';

export const GlobalError = ({ children }: PropsWithChildren) => (
  <div
    role="status"
    className="text-center w-full sm:pt-32 md:pt-36 pb-12 sm:pb-0"
  >
    <ErrorCircle className="inline w-48 h-48 animate-spin-once fill-red-500 text-center" />
    {children && (
      <div className="text-center text-xl pt-2 text-gray-600 font-bold">
        {children}
      </div>
    )}
  </div>
);
