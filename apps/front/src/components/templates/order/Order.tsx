import { useAtom } from 'jotai';

import { usePersistedOrders } from '../../../hooks/usePersistedOrders';
import { PageTitle } from '../../generic/page-title/PageTitle';
import { ordersAtom } from '../../state/orders.state';
import { EmptyBasket } from './empty-basket/EmptyBasket';
import { OrderedItemsList } from './ordered-items-list/OrderedItemsList';

export const OrderRoot = () => {
  usePersistedOrders();
  const [orders] = useAtom(ordersAtom);

  return (
    <div className="flex-grow p-2 md:p-4">
      <div className="mt-3 flex flex-col">
        <PageTitle>Your order</PageTitle>
        {orders.length === 0 ? <EmptyBasket /> : <OrderedItemsList />}
      </div>
    </div>
  );
};
