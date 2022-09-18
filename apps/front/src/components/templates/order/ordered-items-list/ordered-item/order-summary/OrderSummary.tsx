import { useAtom } from 'jotai';

import { ProductsWithIdsQuery } from '@front/api';

import PiggyBankIcon from '../../../../../../../public/icons/monitor-money.svg';
import CheckSquareIcon from '../../../../../../../public/icons/tick-square.svg';
import { useLocalStorage } from '../../../../../../hooks/useLocalStorage';
import { Button } from '../../../../../generic/button/Button';
import { TitleWithIcon } from '../../../../../generic/title-with-icon/TitleWithIcon';
import { ordersAtom } from '../../../../shop/articles-list/state/orders.state';

export const OrderSummary = ({
  productsWithIds,
}: Pick<ProductsWithIdsQuery, 'productsWithIds'>) => {
  const [orders, setOrders] = useAtom(ordersAtom);
  const [, setPersistedOrders] = useLocalStorage('orders', {});

  const handleStartPayment = () => {};

  const handleCancelPayment = () => {
    setPersistedOrders({});
    setOrders({});
  };

  return (
    <div className="grow rounded-md bg-sky-800 p-4 text-white">
      <TitleWithIcon Icon={CheckSquareIcon}>Summary</TitleWithIcon>
      <div className="flex flex-col justify-center text-center">
        <PiggyBankIcon className="max-w-[270px] self-center" />
        <div className="pb-5 text-6xl text-teal-200">Your order</div>
        <div className="text-grey-200 pb-2 text-3xl">
          {productsWithIds.length} articles -{' '}
          {productsWithIds.reduce(
            (sum, { id, price }) => sum + price * orders[id],
            0
          )}{' '}
          €
        </div>
        <div className="mt-10 flex self-center">
          <Button
            variant="green"
            width={40}
            height={40}
            onClick={handleStartPayment}
          >
            Proceed
            <br /> with payment
          </Button>
          <Button
            variant="neutral"
            width={40}
            height={40}
            onClick={handleCancelPayment}
          >
            Cancel order
          </Button>
        </div>
      </div>
    </div>
  );
};
