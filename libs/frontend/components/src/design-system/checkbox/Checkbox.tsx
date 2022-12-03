import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

export interface CheckboxProps<T extends FieldValues>
  extends UseControllerProps<T> {
  label: string;
  isLoading?: boolean;
  placeholder?: string;
}

export function Checkbox<T extends FieldValues>(props: CheckboxProps<T>) {
  const {
    field: { ref, value, onChange, name, ...otherFieldProps },
  } = useController(props);

  return (
    <div className="mb-4 flex items-center">
      <input
        ref={ref}
        type="checkbox"
        value={value}
        onChange={(e) => {
          onChange(e.target.value === '' ? undefined : e.target.value);
        }}
        className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 ring-offset-gray-800 focus:ring-2 focus:ring-blue-600"
        {...otherFieldProps}
      />
      <label htmlFor={name} className="ml-2 text-sm font-medium text-gray-300">
        {props.label}
      </label>
    </div>
  );
}
