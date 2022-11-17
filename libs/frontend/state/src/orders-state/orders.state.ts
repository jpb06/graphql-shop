import { atom } from 'jotai';

import { GqlProduct } from '@front/api';

export interface OrderData
  extends Pick<
    GqlProduct,
    'id' | 'name' | 'description' | 'price' | 'image' | 'stock'
  > {
  quantity: number;
}

export const ordersAtom = atom<Array<OrderData>>([]);
