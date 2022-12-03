import { useAtom } from 'jotai';

import { useModal } from '@front/components/design-system';
import { ordersAtom } from '@front/state';

import { useLocalStorage } from '../../../../../../hooks/useLocalStorage';
import { AuthModal } from '../../../modals/auth-modal';
import { orderModalAtom } from '../../../state/order-modal.state';

export const useOrderSummaryActions = () => {
  const [, setOrders] = useAtom(ordersAtom);
  const [, setPersistedOrders] = useLocalStorage('orders', []);
  const [, setOrderModalState] = useAtom(orderModalAtom);

  const { updateModal } = useModal();

  const handleStartPayment = () => {
    setOrderModalState(() => ({ step: 'auth' }));
    updateModal(AuthModal);
  };

  const handleCancelPayment = () => {
    setPersistedOrders([]);
    setOrders([]);
  };

  return { handleCancelPayment, handleStartPayment };
};
