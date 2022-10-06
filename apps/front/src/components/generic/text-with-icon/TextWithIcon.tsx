import React from 'react';
import { PropsWithChildren } from 'react';

type TitleWithIconProps = {
  Icon: typeof React.Component;
  className?: string;
};

export const TextWithIcon = ({
  Icon,
  className,
  children,
}: PropsWithChildren<TitleWithIconProps>) => (
  <h5
    className={`mb-2 flex gap-2 font-bold tracking-tight text-white ${className}`}
  >
    <Icon className="w-6 fill-white" />
    {children}
  </h5>
);
