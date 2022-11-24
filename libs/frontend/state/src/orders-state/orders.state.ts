import { atom } from 'jotai';

// Extracting this type to avoid a circular dep issue with @front/types
export interface OrderData {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  quantity: number;
}

export const ordersAtom = atom<Array<OrderData>>([]);
