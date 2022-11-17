import { useAtom } from 'jotai';

import { Button, GlobalIndicator, Title } from '@front/components';
import ErrorCircle from '@front/assets/icons/error-circle.svg';
import PlusIcon from '@front/assets/icons/plus.svg';

import { orderModalAtom } from '../../specialized/order/state/order-modal.state';
import { AddressSelection } from './children/AddressSelection';
import { MyAddressesQuery, useMyAddressesQuery } from '@front/api';
import { Loader } from 'libs/frontend/components/src/loader/Loader';

export const ShippingAddressSelectionModalContent = () => {
  const [, setModalState] = useAtom(orderModalAtom);

  const { data, isLoading, isError } = useMyAddressesQuery();

  const handleNewAddressClick = () => {
    setModalState(() => ({ step: 'newAddress' }));
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
