import { useAtom } from 'jotai';

import { PageTitle } from '@front/components';
import { ordersAtom } from '@front/state';

import { usePersistedOrders } from '../../../hooks/usePersistedOrders';
import { EmptyBasket } from './empty-basket/EmptyBasket';
import { OrderedItemsList } from './ordered-items-list/OrderedItemsList';

export const OrderRoot = () => {
  usePersistedOrders();
  const [orders] = useAtom(ordersAtom);

  return (
    <div className="z-10 flex-grow p-2 md:p-4">
      <div className="mt-3 flex flex-col">
        <PageTitle>Your order</PageTitle>
        {orders.length === 0 ? <EmptyBasket /> : <OrderedItemsList />}
      </div>
    </div>
  );
};
