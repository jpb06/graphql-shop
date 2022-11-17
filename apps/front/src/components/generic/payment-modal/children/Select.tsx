import { ChangeEventHandler, PropsWithChildren } from 'react';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import { NameValue } from './../types/name-value.type';

export interface SelectProps<T extends FieldValues>
  extends UseControllerProps<T> {
  onInputFocus: ChangeEventHandler<NameValue>;
}

export function Select<T extends FieldValues>(
  props: PropsWithChildren<SelectProps<T>>
) {
  const {
    field: { ref, value, onChange, ...otherFieldProps },
  } = useController(props);

  return (
    <select
      className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
      onChange={onChange}
      onFocus={props.onInputFocus}
      value={value || ''}
      ref={ref}
      {...otherFieldProps}
    >
      {props.children}
    </select>
  );
}
