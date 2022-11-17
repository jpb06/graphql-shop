import { atom } from 'jotai';

import { GqlNewAddressOutput } from '@front/api';

import { AuthModal } from '../../../generic/auth-modal';
import { NewAddressModal } from '../../../generic/new-shipping-address-modal';
import { OrderCompleteModal } from '../../../generic/order-complete-modal';
import { PaymentModal } from '../../../generic/payment-modal';
import { AddressModal } from '../../../generic/shipping-address-selection-modal';

export const orderModalSteps = {
  auth: AuthModal,
  address: AddressModal,
  newAddress: NewAddressModal,
  payment: PaymentModal,
  complete: OrderCompleteModal,
};

type ModalStep = keyof typeof orderModalSteps;

type OrderState = {
  step: ModalStep;
  address?: GqlNewAddressOutput;
  orderId?: number;
};

export const orderModalAtom = atom<OrderState>({ step: 'auth' });
