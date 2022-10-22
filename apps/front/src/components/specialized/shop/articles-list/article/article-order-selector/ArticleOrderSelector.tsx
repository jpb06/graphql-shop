import { ProductsQueryDataItem } from '@front/api';

import { useOrderActions } from '../hooks/useOrderActions';
import { NoStock } from './NoStock';
import { OrderButton } from './OrderButton';

export const ArticleOrderSelector = (product: ProductsQueryDataItem) => {
  const { count, handleCancelOrder, handleBumpOrder } = useOrderActions({
    ...product,
    count: 0,
  });

  const outOfStock = count ? count >= product.stock : false;

  return (
    <div className="rounded-lg bg-sky-800 text-center text-white hover:bg-sky-900">
      <div className="flex justify-between gap-1">
        <OrderButton onClick={handleCancelOrder}>-</OrderButton>
        <div className="rounded-lg py-6 text-2xl sm:py-2 sm:text-lg">
          {count}
        </div>
        {outOfStock ? (
          <NoStock />
        ) : (
          <OrderButton onClick={handleBumpOrder}>+</OrderButton>
        )}
      </div>
    </div>
  );
};
