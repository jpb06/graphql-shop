import { useAtom } from 'jotai';

import { MyAddressesQuery, useMyAddressesQuery } from '@front/api';
import ErrorCircle from '@front/assets/icons/error-circle.svg';
import PlusIcon from '@front/assets/icons/plus.svg';
import {
  Button,
  GlobalIndicator,
  Title,
  Loader,
  useModal,
} from '@front/components';

import { orderModalAtom } from '../../state/order-modal.state';
import { NewAddressModal } from '../new-shipping-address-modal';
import { AddressSelection } from './children/AddressSelection';

export const ShippingAddressSelectionModalContent = () => {
  const [, setOrderModalState] = useAtom(orderModalAtom);

  const { data, isLoading, isError } = useMyAddressesQuery();

  const { updateModal } = useModal();

  const handleNewAddressClick = () => {
    setOrderModalState(() => ({ step: 'new-address' }));
    updateModal(NewAddressModal);
  };

  if (isLoading) {
    return (
      <div className="w-full pt-10 pb-10 text-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <GlobalIndicator Icon={ErrorCircle} noTopPadding>
        Unable to retrieve previously used addresses
      </GlobalIndicator>
    );
  }

  return (
    <div className="m-2">
      <Title>Addresses previously used</Title>
      <div className="m-2">
        <AddressSelection data={data as MyAddressesQuery} />
      </div>
      <Title>Use another address</Title>
      <Button
        variant="neutral"
        className="w-full"
        onClick={handleNewAddressClick}
      >
        <PlusIcon className="w-10 pr-4" />
        New shipping address
      </Button>
    </div>
  );
};
