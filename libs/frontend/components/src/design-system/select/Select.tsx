import { ChangeEventHandler, PropsWithChildren } from 'react';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import { NameValue } from '../../types/name-value.type';

export interface SelectProps<T extends FieldValues>
  extends UseControllerProps<T> {
  onInputFocus?: ChangeEventHandler<NameValue>;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export function Select<T extends FieldValues>(
  props: PropsWithChildren<SelectProps<T>>
) {
  const {
    field: { ref, value, onChange, ...otherFieldProps },
  } = useController(props);

  const handleValueChanged: ChangeEventHandler<HTMLSelectElement> = (e) => {
    onChange(e);

    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <select
      className="block w-full appearance-none rounded-lg border border-gray-400 bg-gray-600 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
      onChange={handleValueChanged}
      onFocus={props.onInputFocus}
      value={value || ''}
      ref={ref}
      {...otherFieldProps}
    >
      {props.children}
    </select>
  );
}
