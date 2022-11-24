import { ModalContent } from '@front/components';

import { ShippingAddressSelectionModalContent } from './ShippingAddressSelectionModalContent';

export const AddressModal: ModalContent = {
  title: 'Shipping address',
  Content: ShippingAddressSelectionModalContent,
  Footer: null,
  width: 'w-[600px]',
};
