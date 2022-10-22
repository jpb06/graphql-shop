import React from 'react';
import { PropsWithChildren } from 'react';

type GlobalIndicatorProps = {
  Icon: typeof React.Component;
  spin?: boolean;
};

export const GlobalIndicator = ({
  Icon,
  spin,
  children,
}: PropsWithChildren<GlobalIndicatorProps>) => (
  <div
    role="status"
    className="w-full pb-12 text-center sm:pt-32 sm:pb-0 md:pt-36"
  >
    <Icon
      className={`${
        spin && 'animate-spin-once'
      } inline h-48 w-48 fill-red-500 text-center`}
    />
    {children && (
      <div className="pt-2 text-center text-xl font-bold text-gray-600">
        {children}
      </div>
    )}
  </div>
);
