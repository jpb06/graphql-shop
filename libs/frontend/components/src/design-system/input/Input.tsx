import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
} from 'react';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import { NameValue } from '../../types/name-value.type';

export interface InputProps<T extends FieldValues>
  extends UseControllerProps<T> {
  onInputFocus?: ChangeEventHandler<NameValue>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  formatValue?: ChangeEventHandler<HTMLInputElement> | undefined;
  maxLength?: number;
  spellcheck?: boolean;
  pattern?: string;
  autoComplete?: string;
  label?: string;
  isLoading?: boolean;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
}

export function Input<T extends FieldValues>(props: InputProps<T>) {
  const {
    field: { ref, value, onChange, name, ...otherFieldProps },
    fieldState,
  } = useController(props);

  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-medium text-gray-300">
        {props.label}
      </label>
      <input
        name={name}
        type={props.type}
        className="block w-full rounded-lg border border-gray-400 bg-gray-600 p-2.5 text-sm text-white placeholder-gray-400 ring-sky-500 focus:border-blue-500 focus:ring-blue-500"
        placeholder={props.placeholder}
        required
        disabled={props.isLoading}
        spellCheck={props.spellcheck}
        maxLength={props.maxLength}
        autoComplete={props.autoComplete}
        pattern={props.pattern}
        onFocus={props.onInputFocus}
        onKeyDown={props.onKeyDown}
        onChange={(e) => {
          if (e.target.value === '') {
            return onChange(undefined);
          }

          if (props.formatValue) {
            return onChange(props.formatValue(e));
          }

          return onChange(e.target.value);
        }}
        value={value || ''}
        ref={ref}
        {...otherFieldProps}
      />
      {fieldState.error && (
        <p className="mt-2 text-sm text-red-500">{fieldState.error?.message}</p>
      )}
    </div>
  );
}
