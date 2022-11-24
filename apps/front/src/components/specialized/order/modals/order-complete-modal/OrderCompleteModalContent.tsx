import { useAtom } from 'jotai';

import { GqlUserOrder, useGetOrderQuery } from '@front/api';
import { Loader, Title } from '@front/components';

import { orderModalAtom } from '../../state/order-modal.state';

export const OrderCompleteModalContent = () => {
  const [orderModalState] = useAtom(orderModalAtom);

  const { isLoading, data } = useGetOrderQuery({
    id: orderModalState.orderId as number,
  });

  if (isLoading) {
    return (
      <div className="w-full pt-10 pb-10 text-center">
        <Loader />
      </div>
    );
  }

  const order = data?.getOrder as GqlUserOrder;

  return (
    <div className="px-6 pb-6 lg:px-8">
      <Title>Payment</Title>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-col pb-3">
          <dt className="mb-1 text-gray-400 md:text-lg">Mean of payment</dt>
          <dd className="text-lg font-semibold text-white">Credit card</dd>
          <dd className="text-sm text-stone-500">
            ~ {order.creditCard.number.slice(-4)} expiring{' '}
            {order.creditCard.expires}
          </dd>
        </div>
        <div className="flex flex-col pb-3">
          <dt className="mb-1 text-gray-400 md:text-lg">Amount</dt>
          <dd className="text-lg font-semibold text-white">
            {order.items?.reduce(
              (total, { price, quantity }) => total + price * quantity,
              0
            )}
            €
          </dd>
        </div>
      </div>
      <Title>Articles</Title>
      <ul className="max-h-72 max-w-md divide-y divide-gray-700 overflow-scroll rounded-md bg-gray-800 px-4 pt-2 ring-2 ring-sky-600">
        {order.items?.map(({ id, name, price, quantity }) => (
          <li key={id} className="pb-2">
            <div className="flex items-center space-x-4">
              <div className="min-w-0 flex-1">
                <p className="truncate pt-2 text-sm font-medium text-white">
                  {name}
                </p>
                <p className="truncate text-sm text-gray-400">{price}€</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-white">
                {quantity}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
