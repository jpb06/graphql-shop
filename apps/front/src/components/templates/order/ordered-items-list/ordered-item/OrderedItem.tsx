import { ProductsWithIdsQuery } from '@front/api';

import { ArrayItemType } from '../../../../../types/ArrayItemType.type';
import { OrderedItemControls } from './ordered-item-controls.tsx/OrderedItemControls';
import { OrderedItemDetails } from './ordered-item-details/OrderedItemDetails';

export type ProductsWithIdsArrayType = Pick<
  ProductsWithIdsQuery,
  'productsWithIds'
>['productsWithIds'];

export const OrderedItem = ({
  id,
  name,
  description,
  image,
  price,
}: ArrayItemType<ProductsWithIdsArrayType>) => {
  return (
    <div className="flex flex-col md:flex-row">
      <OrderedItemDetails name={name} description={description} image={image} />
      <OrderedItemControls id={id} price={price} />
    </div>
  );
};
