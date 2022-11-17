import { ModalStep } from '@front/components';

import { OrderCompleteModalContent } from './OrderCompleteModalContent';

export const OrderCompleteModal: ModalStep = {
  title: 'Your order',
  Content: OrderCompleteModalContent,
  Footer: null,
};
