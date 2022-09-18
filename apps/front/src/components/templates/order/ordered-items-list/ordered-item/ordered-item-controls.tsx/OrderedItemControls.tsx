import { useAtom } from 'jotai';
import { PropsWithChildren } from 'react';

import ArrowRightIcon from '../../../../../../../public/icons/arrow-right.svg';
import DollarPriceTagIcon from '../../../../../../../public/icons/dollar-price-tag.svg';
import { ArrayItemType } from '../../../../../../types/ArrayItemType.type';
import { TitleWithIcon } from '../../../../../generic/title-with-icon/TitleWithIcon';
import { useOrderActions } from '../../../../shop/articles-list/article/hooks/useOrderActions';
import { ordersAtom } from '../../../../shop/articles-list/state/orders.state';
import { ProductsWithIdsArrayType } from '../OrderedItem';

type OrderedItemActionProps = {
  onClick: () => void;
};

const OrderedItemAction = ({
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

export const OrderedItemControls = ({
  id,
  price,
}: Pick<ArrayItemType<ProductsWithIdsArrayType>, 'id' | 'price'>) => {
  const [orders] = useAtom(ordersAtom);
  const { handleBumpOrder, handleCancelOrder } = useOrderActions(id);

  return (
    <div className="grid grid-cols-2 rounded-b-lg border border-l-0 border-gray-800 bg-gray-700 text-white shadow-md hover:bg-sky-900 md:block md:w-36 md:flex-initial md:rounded-none md:rounded-r-lg">
      <div className="mx-6 mt-4 mb-2 items-center">
        <TitleWithIcon Icon={DollarPriceTagIcon}>Cost</TitleWithIcon>
      </div>
      <div className="p-3 pt-6 text-right align-bottom text-xl md:mt-10 md:pt-2 md:text-base">
        <div className="">{`${orders[id]} x ${price} €`}</div>
        <div className="flex justify-end gap-2">
          <ArrowRightIcon className="w-4" /> <span>{price * orders[id]} €</span>
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-1 px-1 pb-1 md:mt-6">
        <OrderedItemAction onClick={handleCancelOrder}>-</OrderedItemAction>
        <OrderedItemAction onClick={handleBumpOrder}>+</OrderedItemAction>
      </div>
    </div>
  );
};
