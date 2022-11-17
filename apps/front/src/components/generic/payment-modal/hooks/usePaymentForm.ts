import { zodResolver } from '@hookform/resolvers/zod';
import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';

import { usePlaceOrderMutation } from '@front/api';
import { ordersAtom } from '@front/state';

import { useLocalStorage } from '../../../../hooks/useLocalStorage';
import { orderModalAtom } from '../../../specialized/order/state/order-modal.state';
import { PaymentFormModel, formSchema } from '../logic/credit-card-form.schema';

export const usePaymentForm = () => {
  const [, setOrderModalState] = useAtom(orderModalAtom);
  const [orders, setOrders] = useAtom(ordersAtom);
  const [, setPersistedOrders] = useLocalStorage('orders', []);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm<PaymentFormModel>({
    defaultValues: {
      number: '',
      name: '',
      expirationMonth: '',
      expirationYear: '',
      cvc: '',
    },
    resolver: zodResolver(formSchema),
  });

  const { mutate, isLoading, isError } = usePlaceOrderMutation({
    mutationKey: ['place-order'],
    onSuccess: (data) => {
      setOrders([]);
      setPersistedOrders([]);
      setOrderModalState((state) => ({
        ...state,
        step: 'complete',
        orderId: data.placeOrder.orderId,
      }));
    },
  });

  const onSubmit = (payload: PaymentFormModel) => {
    const { expirationMonth, expirationYear, ...creditCard } = payload;

    mutate({
      creditCard: {
        ...creditCard,
        expires: `${expirationMonth}/${expirationYear.slice(-2)}`,
      },
      orderedItems: orders.map((o) => ({
        idProduct: Number(o.id),
        quantity: o.quantity,
      })),
    });
  };

  return {
    control,
    onSubmit: handleSubmit(onSubmit),
    getValues,
    watch,
    isLoading,
    isError,
    formErrors: errors,
  };
};
