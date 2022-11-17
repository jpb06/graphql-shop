import { HTMLInputTypeAttribute } from 'react';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

export interface InputProps<T extends FieldValues>
  extends UseControllerProps<T> {
  label: string;
  isLoading?: boolean;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
}

export function Input<T extends FieldValues>(
  props: InputProps<T>
): JSX.Element {
  const {
    field: { ref, value, onChange, name, ...otherFieldProps },
    fieldState,
  } = useController(props);

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-300"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        className="block w-full rounded-lg border border-gray-500 bg-gray-600 p-2.5 text-sm text-white placeholder-gray-400 ring-sky-500 focus:border-blue-500 focus:ring-blue-500"
        placeholder={props.placeholder}
        required
        disabled={props.isLoading}
        onChange={(e) => {
          onChange(e.target.value === '' ? undefined : e.target.value);
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
