import { PropsWithChildren } from 'react';

export const Title = ({ children }: PropsWithChildren) => (
  <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
    {children}
  </h1>
);
