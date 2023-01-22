import { GqlProduct } from '@front/api';

import { NoStock } from './NoStock';
import { OrderButton } from './OrderButton';
import { useOrderActions } from '../hooks/useOrderActions';

export const ArticleOrderSelector = (product: GqlProduct) => {
  const { quantity, handleCancelOrder, handleBumpOrder } = useOrderActions({
    ...product,
    quantity: 0,
  });

  const outOfStock = quantity ? quantity >= product.stock : false;

  return (
    <div className="rounded-lg bg-sky-800 text-center text-white hover:bg-sky-900">
      <div className="flex justify-between gap-1">
        <OrderButton onClick={handleCancelOrder}>-</OrderButton>
        <div className="rounded-lg py-6 text-2xl sm:py-2 sm:text-lg">
          {quantity}
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
