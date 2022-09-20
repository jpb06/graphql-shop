import { PropsWithChildren } from 'react';

export const Title = ({ children }: PropsWithChildren) => (
  <h5 className="mb-2 text-left text-2xl font-bold tracking-tight text-cyan-600">
    {children}
  </h5>
);
