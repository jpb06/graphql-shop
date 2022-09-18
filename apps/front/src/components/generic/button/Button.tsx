import { PropsWithChildren } from 'react';

type ButtonVariant = 'green' | 'neutral';

type ButtonProps = {
  onClick: () => void;
  variant: ButtonVariant;
  width: number;
  height: number;
};

const getVariantClasses = (variant: ButtonVariant) => {
  switch (variant) {
    case 'green':
      return 'bg-green-600 hover:bg-green-700 focus:ring-green-800 text-white';
    case 'neutral':
      return 'border border-gray-600 text-gray-400 hover:text-white focus:z-10 focus:ring-gray-700 bg-gray-700 ';
  }
};

export const Button = ({
  onClick,
  variant,
  width,
  height,
  children,
}: PropsWithChildren<ButtonProps>) => {
  const variantStyles = getVariantClasses(variant);

  return (
    <button
      type="button"
      className={`mr-2  mb-2 rounded-lg px-5 py-2.5 text-sm font-medium focus:outline-none focus:ring-4 w-${width} h-${height} ${variantStyles} text-xl`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
