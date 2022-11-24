import { atom } from 'jotai';

import { GqlNewAddressOutput } from '@front/api';

type ModalStep = 'auth' | 'address' | 'new-address' | 'payment' | 'complete';

type OrderState = {
  step: ModalStep;
  address?: GqlNewAddressOutput;
  orderId?: number;
};

export const orderModalAtom = atom<OrderState>({ step: 'auth' });
