import { ProductsWithIdsQuery } from '@front/api';

import { OrderedItem } from './ordered-item/OrderedItem';
import { OrderSummary } from './ordered-item/order-summary/OrderSummary';

export const OrderedItemsList = ({
  productsWithIds,
}: Pick<ProductsWithIdsQuery, 'productsWithIds'>) => {
  return (
    <div className="flex flex-col gap-2 md:justify-start xl:flex-row">
      <OrderSummary productsWithIds={productsWithIds} />
      <div className="col-span-2 flex flex-col gap-2">
        {productsWithIds.map((product) => (
          <OrderedItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
