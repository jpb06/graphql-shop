import { useAtom } from 'jotai';

import { ModalWrapper, PageTitle } from '@front/components';
import { ordersAtom } from '@front/state';

import { usePersistedOrders } from '../../../hooks/usePersistedOrders';
import { EmptyBasket } from './empty-basket/EmptyBasket';
import { OrderedItemsList } from './ordered-items-list/OrderedItemsList';
import { orderModalAtom, orderModalSteps } from './state/order-modal.state';

export const OrderRoot = () => {
  usePersistedOrders();
  const [orders] = useAtom(ordersAtom);
  const [modalStep] = useAtom(orderModalAtom);

  return (
    <ModalWrapper
      {...orderModalSteps[modalStep.step]}
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
