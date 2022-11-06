import { atom } from 'jotai';

import { AddressModal } from '../../../generic/address-modal';
import { AuthModal } from '../../../generic/auth-modal';
import { PaymentModal } from '../../../generic/payment-modal';

export const orderModalSteps = {
  auth: AuthModal,
  address: AddressModal,
  payment: PaymentModal,
};

type CurrentState = keyof typeof orderModalSteps;

export const orderModalStep = atom<CurrentState>('auth');
