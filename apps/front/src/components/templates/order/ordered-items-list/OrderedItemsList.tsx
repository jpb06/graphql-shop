import { useAtom } from 'jotai';

import { ordersAtom } from '../../../state/orders.state';
import { OrderSummary } from './order-summary/OrderSummary';
import { OrderedItem } from './ordered-item/OrderedItem';

export const OrderedItemsList = () => {
  const [orders] = useAtom(ordersAtom);

  return (
    <div className="flex flex-col gap-2 md:justify-start xl:flex-row">
      <OrderSummary />
      <div className="col-span-2 flex flex-col gap-2 rounded-lg bg-gradient-to-tr from-slate-500 to-slate-400">
        {orders.map((product) => (
          <OrderedItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
