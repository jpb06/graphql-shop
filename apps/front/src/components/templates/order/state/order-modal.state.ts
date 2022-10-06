import { atom } from 'jotai';

import { AuthModal } from '../../../generic/auth-modal';
import { PaymentModal } from '../../../generic/payment-modal';

export const orderModalSteps = {
  auth: AuthModal,
  payment: PaymentModal,
};

type CurrentState = keyof typeof orderModalSteps;

export const orderModalStep = atom<CurrentState>('auth');
