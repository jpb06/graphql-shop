import ErrorCircle from '../../../../public/icons/error-circle.svg';
import { usePersistedOrders } from '../../../hooks/usePersistedOrders';
import { GlobalCircularLoader } from '../../generic/global-circular-loader/GlobalCircularLoader';
import { GlobalIndicator } from '../../generic/global-indicator/GlobalIndicator';
import { Title } from '../../generic/title/Title';
import { EmptyBasket } from './empty-basket/EmptyBasket';
import { useOrderedItemsData } from './hooks/useOrderedItemsData';
import { OrderedItemsList } from './ordered-items-list/OrderedItemsList';

export const OrderRoot = () => {
  usePersistedOrders();
  const { status, data } = useOrderedItemsData();

  return (
    <div className="flex-grow p-2 md:p-4">
      <div className="mt-3 flex flex-col">
        <Title>Your order</Title>
        {
          {
            empty: <EmptyBasket />,
            loading: <GlobalCircularLoader>Loading</GlobalCircularLoader>,
            success: (
              <OrderedItemsList productsWithIds={data?.productsWithIds} />
            ),
            error: (
              <GlobalIndicator Icon={ErrorCircle}>
                An error occured while fetching your order
              </GlobalIndicator>
            ),
          }[status]
        }
      </div>
    </div>
  );
};
