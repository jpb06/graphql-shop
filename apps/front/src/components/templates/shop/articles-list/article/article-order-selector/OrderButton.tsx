import { PropsWithChildren } from 'react';

type OrderButtonProps = {
  onClick: () => void;
};

export const OrderButton = ({
  children,
  onClick,
}: PropsWithChildren<OrderButtonProps>) => (
  <button
    className="focus:outline:none rounded-lg bg-teal-600 py-5 px-14 text-xl hover:bg-teal-500 sm:py-2 sm:px-5 md:text-xl"
    onClick={onClick}
  >
    {children}
  </button>
);
