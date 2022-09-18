import { ProductsWithIdsQuery } from '@front/api';

import { OrderedItem } from './ordered-item/OrderedItem';

export const OrderedItemsList = ({
  productsWithIds,
}: Pick<ProductsWithIdsQuery, 'productsWithIds'>) => {
  return (
    // <div className="grid grid-cols-3 gap-3">
    // <div className="flex flex-col sm:flex-row sm:justify-start gap-3">
    <div className="col-span-2 flex flex-col gap-2">
      {productsWithIds.map((product) => (
        <OrderedItem key={product.id} {...product} />
      ))}
    </div>
    // <div className="rounded-md bg-sky-800 text-white p-4">d</div>
    // </div>
  );
};
