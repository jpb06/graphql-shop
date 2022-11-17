import { atom } from 'jotai';

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
