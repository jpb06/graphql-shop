import { useAtom } from 'jotai';

import { ModalWrapper, PageTitle } from '@front/components';

import { usePersistedOrders } from '../../../hooks/usePersistedOrders';
import { ordersAtom } from '../../../state/orders.state';
import { EmptyBasket } from './empty-basket/EmptyBasket';
import { OrderedItemsList } from './ordered-items-list/OrderedItemsList';
import { orderModalSteps, orderModalStep } from './state/order-modal.state';

export const OrderRoot = () => {
  usePersistedOrders();
  const [orders] = useAtom(ordersAtom);
  const [modalStep] = useAtom(orderModalStep);

  return (
    <ModalWrapper
      title="Payment"
      {...orderModalSteps[modalStep]}
      modalAnimation="move"
      outsideAnimation="blow"
      width="w-96"
    >
      <div className="z-10 flex-grow p-2 md:p-4">
        <div className="mt-3 flex flex-col">
          <PageTitle>Your order</PageTitle>
          {orders.length === 0 ? <EmptyBasket /> : <OrderedItemsList />}
        </div>
      </div>
    </ModalWrapper>
  );
};
