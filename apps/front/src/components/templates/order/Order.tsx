import { usePersistedOrders } from '../../../hooks/usePersistedOrders';
import { GlobalCircularLoader } from '../../generic/global-circular-loader/GlobalCircularLoader';
import { GlobalError } from '../../generic/global-error/GlobalError';
import { Title } from '../../generic/title/Title';
import { useOrderedItemsData } from './hooks/useOrderedItemsData';
import { OrderedItemsList } from './ordered-items-list/OrderedItemsList';

export const OrderRoot = () => {
  usePersistedOrders();
  const { status, data } = useOrderedItemsData();

  return (
    <div className="p-2 md:p-4 flex-grow">
      <div className="flex flex-col mt-3">
        <Title>Your order</Title>
        {
          {
            loading: <GlobalCircularLoader>Loading</GlobalCircularLoader>,
            success: (
              <OrderedItemsList productsWithIds={data?.productsWithIds} />
            ),
            error: (
              <GlobalError>
                An error occured while fetching your order
              </GlobalError>
            ),
          }[status]
        }
      </div>
    </div>
  );
};
