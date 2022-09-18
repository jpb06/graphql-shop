import { atom } from 'jotai';

export type OrdersIndexerType = {
  [id: string]: number | undefined;
};

export const ordersAtom = atom<OrdersIndexerType>({});
