import ArrowRightIcon from '@front/assets/icons/arrow-right.svg';
import DollarPriceTagIcon from '@front/assets/icons/dollar-price-tag.svg';
import { TextWithIcon } from '@front/components/design-system';
import { OrderData } from '@front/state';

import { OrderedItemAction } from './OrderedItemAction';
import { useOrderActions } from '../../../../shop/articles-list/article/hooks/useOrderActions';

export const OrderedItemControls = (order: OrderData) => {
  const { handleBumpOrder, handleCancelOrder } = useOrderActions(order);

  const { quantity, price } = order;

  return (
    <div className="grid grid-cols-2 rounded-b-lg border border-l-0 border-gray-800 bg-gray-700 text-white shadow-md hover:bg-sky-900 md:block md:w-36 md:flex-initial md:rounded-none md:rounded-r-lg">
      <div className="mx-6 mt-4 mb-2 items-center">
        <TextWithIcon Icon={DollarPriceTagIcon} className="text-2xl">
          Cost
        </TextWithIcon>
      </div>
      <div className="p-3 pt-6 text-right align-bottom text-xl md:mt-10 md:pt-2 md:text-base">
        <div className="">{`${quantity} x ${price} €`}</div>
        <div className="flex justify-end gap-2">
          <ArrowRightIcon className="w-4" /> <span>{price * quantity} €</span>
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-1 px-1 pb-1 md:mt-6">
        <OrderedItemAction onClick={handleCancelOrder}>-</OrderedItemAction>
        <OrderedItemAction onClick={handleBumpOrder}>+</OrderedItemAction>
      </div>
    </div>
  );
};
