import { PropsWithChildren } from 'react';

type BorderedRadioProps = {
  id: string;
  name: string;
  checked: boolean;
  onSelected: (id: string) => void;
};

export const BorderedRadio = ({
  id,
  name,
  checked,
  onSelected,
  children,
}: PropsWithChildren<BorderedRadioProps>) => {
  const handleClick = () => {
    onSelected(id);
  };

  const labelStyle = checked
    ? 'text-blue-500 border-blue-600'
    : 'text-gray-300 border-gray-700';

  return (
    <li onClick={handleClick}>
      <input
        type="radio"
        id={id}
        name={name}
        defaultChecked={checked}
        value={id}
        className="peer hidden"
        required
      />
      <label
        htmlFor={id}
        className={`inline-flex w-full cursor-pointer items-center justify-between rounded-lg border bg-gray-800 p-5 hover:bg-gray-900 hover:text-gray-300 ${labelStyle}`}
      >
        <div className="flex flex-col">{children}</div>
        <svg
          aria-hidden="true"
          className="ml-3 h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </label>
    </li>
  );
};
