import { useAtom } from 'jotai';

import ArrowRightIcon from '../../../../../../../public/icons/arrow-right.svg';
import DollarPriceTagIcon from '../../../../../../../public/icons/dollar-price-tag.svg';
import { ArrayItemType } from '../../../../../../types/ArrayItemType.type';
import { ordersAtom } from '../../../../shop/articles-list/state/orders.state';
import { ProductsWithIdsArrayType } from '../OrderedItem';

export const OrderedItemControls = ({
  id,
  price,
}: Pick<ArrayItemType<ProductsWithIdsArrayType>, 'id' | 'price'>) => {
  const [orders] = useAtom(ordersAtom);

  return (
    <div className="grid grid-cols-2 md:block md:flex-initial md:w-36 bg-gray-700 hover:bg-sky-900 text-white rounded-b-lg md:rounded-none md:rounded-r-lg border shadow-md border-gray-800 border-l-0">
      <h5 className="flex gap-2 mt-4 mx-6 mb-2 text-2xl font-bold tracking-tight text-white items-center">
        <DollarPriceTagIcon className="w-6 fill-white" />
        Cost
      </h5>
      <div className="md:mt-10 align-bottom pt-6 md:pt-2 text-xl md:text-base text-right p-3">
        <div className="">{`${orders[id]} x ${price} €`}</div>
        <div className="flex gap-2 justify-end">
          <ArrowRightIcon className="w-4" /> <span>{price * orders[id]} €</span>
        </div>
      </div>
      <div className="md:mt-6 grid grid-cols-2 gap-1 px-1 pb-1 col-span-2">
        <div className="rounded-md bg-teal-600 hover:bg-teal-500 h-14 text-2xl text-gray-800 text-center py-3 cursor-pointer select-none">
          -
        </div>
        <div className="rounded-md bg-teal-600 hover:bg-teal-500 h-14 text-2xl text-gray-800 text-center py-3 cursor-pointer select-none">
          +
        </div>
      </div>
    </div>
  );
};
