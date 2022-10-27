import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

import { NameValue } from './types/name-value.type';

type InputProps = {
  onInputChange: ChangeEventHandler<NameValue>;
  onInputFocus: ChangeEventHandler<NameValue>;
  value?: number | string;
  type: HTMLInputTypeAttribute;
  name: string;
  maxLength: number;
  placeholder: string;
  spellcheck?: boolean;
  pattern?: string;
  autoComplete?: string;
};

export const Input = ({
  onInputChange,
  onInputFocus,
  value,
  type,
  name,
  maxLength,
  placeholder,
  pattern,
  autoComplete,
  spellcheck = false,
}: InputProps) => (
  <input
    type={type}
    name={name}
    spellCheck={spellcheck}
    className="block w-full rounded-lg border border-gray-600 bg-gray-700 py-2.5 pr-2 text-right text-sm text-white placeholder-gray-400 transition-all focus:border-blue-500 focus:ring-blue-500"
    required
    placeholder={placeholder}
    maxLength={maxLength}
    onChange={onInputChange}
    onFocus={onInputFocus}
    value={value}
    autoComplete={autoComplete}
    pattern={pattern}
  />
);
