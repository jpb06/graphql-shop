import React from 'react';
import { PropsWithChildren } from 'react';

type TitleWithIconProps = {
  Icon: typeof React.Component;
};

export const TitleWithIcon = ({
  Icon,
  children,
}: PropsWithChildren<TitleWithIconProps>) => (
  <h5 className="mb-2 flex gap-2 text-2xl font-bold tracking-tight text-white">
    <Icon className="w-6 fill-white" />
    {children}
  </h5>
);
