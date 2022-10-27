import { ChangeEventHandler, PropsWithChildren } from 'react';

import { NameValue } from './types/name-value.type';

type SelectProps = {
  onInputChange: ChangeEventHandler<NameValue>;
  onInputFocus: ChangeEventHandler<NameValue>;
  name: string;
  value: string | number;
};

export const Select = ({
  onInputChange,
  onInputFocus,
  name,
  value,
  children,
}: PropsWithChildren<SelectProps>) => (
  <select
    name={name}
    className="block w-full appearance-none rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-gray-400 placeholder-gray-400 transition-all focus:border-blue-500 focus:ring-blue-500"
    onChange={onInputChange}
    onFocus={onInputFocus}
    value={value}
  >
    {children}
  </select>
);
