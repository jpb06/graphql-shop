import { useAtom } from 'jotai';

import { ordersAtom } from '@front/state';

import { OrderSummary } from './order-summary/OrderSummary';
import { OrderedItem } from './ordered-item/OrderedItem';
import { OrderedItemSkeleton } from './ordered-item-skeleton/OrderedItemSkeleton';

export const OrderedItemsList = () => {
  const [orders] = useAtom(ordersAtom);

  return (
    <div className="flex flex-col gap-2 md:justify-start xl:flex-row">
      <OrderSummary />
      <div className="col-span-2 flex flex-col gap-2 rounded-lg">
        {orders.map((product) => (
          <OrderedItem key={product.id} {...product} />
        ))}
        {orders.length < 3 &&
          Array.from(Array(3 - orders.length).keys()).map((id) => (
            <OrderedItemSkeleton key={id} />
          ))}
      </div>
    </div>
  );
};
