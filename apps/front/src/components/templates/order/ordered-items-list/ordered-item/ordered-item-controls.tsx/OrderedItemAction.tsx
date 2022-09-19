import { PropsWithChildren } from 'react';

type OrderedItemActionProps = {
  onClick: () => void;
};

export const OrderedItemAction = ({
  onClick,
  children,
}: PropsWithChildren<OrderedItemActionProps>) => (
  <button
    className="h-14 cursor-pointer select-none rounded-md bg-teal-600 py-3 text-center text-2xl text-gray-800 hover:bg-teal-500"
    onClick={onClick}
  >
    {children}
  </button>
);
