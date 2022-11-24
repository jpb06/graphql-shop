import { ChangeEvent, ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import { formatCvc, formatNumber } from '@front/components';

import { NameValue } from './../types/name-value.type';

export interface InputProps<T extends FieldValues>
  extends UseControllerProps<T> {
  onInputFocus: ChangeEventHandler<NameValue>;
  isLoading?: boolean;
  type: HTMLInputTypeAttribute;
  maxLength: number;
  placeholder: string;
  spellcheck?: boolean;
  pattern?: string;
  autoComplete?: string;
}

export function Input<T extends FieldValues>(props: InputProps<T>) {
  const {
    field: { ref, value, onChange, ...otherFieldProps },
  } = useController(props);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let maybeFormattedValue = '';
    switch (name) {
      case 'number':
        maybeFormattedValue = formatNumber(value, true);
        break;
      case 'cvc':
        maybeFormattedValue = formatCvc(value, 3, true);
        break;
      default:
        maybeFormattedValue = value;
        break;
    }

    onChange(value === '' ? undefined : maybeFormattedValue);
  };

  return (
    <input
      type={props.type}
      className="block w-full rounded-lg border border-gray-600 bg-gray-700 py-2.5 pr-2 text-right text-sm text-white placeholder-gray-400 transition-all focus:border-blue-500 focus:ring-blue-500"
      placeholder={props.placeholder}
      required
      disabled={props.isLoading}
      spellCheck={props.spellcheck}
      maxLength={props.maxLength}
      autoComplete={props.autoComplete}
      pattern={props.pattern}
      onChange={handleChange}
      onFocus={props.onInputFocus}
      value={value || ''}
      ref={ref}
      {...otherFieldProps}
    />
  );
}
