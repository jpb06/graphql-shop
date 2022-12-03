import { FieldValues, UseControllerProps } from 'react-hook-form';

export interface ToggleProps<T extends FieldValues>
  extends UseControllerProps<T> {
  label: string;
  isLoading?: boolean;
  placeholder?: string;
}

export function Toggle<T extends FieldValues>(props: ToggleProps<T>) {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" value="" className="peer sr-only" />
      <div className="peer h-6 w-11 rounded-full border-gray-600 bg-gray-700 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800"></div>
      <span className="ml-3 text-sm font-medium text-gray-300">
        {props.label}
      </span>
    </label>
  );
}
