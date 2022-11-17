import { ModalStep } from '@front/components';

import { ShippingAddressSelectionModalContent } from './ShippingAddressSelectionModalContent';

export const AddressModal: ModalStep = {
  title: 'Shipping address',
  Content: ShippingAddressSelectionModalContent,
  Footer: null,
};
