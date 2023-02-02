import { useAtom } from 'jotai';

import ArrowLeft from '@front/assets/icons/arrow-left.svg';
import ErrorCircle from '@front/assets/icons/error-circle.svg';
import {
  Button,
  GlobalIndicator,
  Input,
  Title,
  useModal,
} from '@front/components/design-system';

import { useNewAddressForm } from './hooks/useNewAddressForm';
import { orderModalAtom } from '../../state/order-modal.state';
import { AddressModal } from '../shipping-address-selection-modal';

export const NewShippingAddressModal = () => {
  const [, setOrderModalState] = useAtom(orderModalAtom);
  const { updateModal } = useModal();

  const { onSubmit, isLoading, isError, control } = useNewAddressForm();

  const handleGoToExistingAddresses = () => {
    setOrderModalState(() => ({ step: 'address' }));
    updateModal(AddressModal);
  };

  if (isError) {
    return (
      <GlobalIndicator Icon={ErrorCircle} noTopPadding>
        Unable to save your new address
      </GlobalIndicator>
    );
  }

  return (
    <div className="px-6 pb-6 lg:px-8">
      <Button
        variant="neutral"
        className="w-full"
        onClick={handleGoToExistingAddresses}
      >
        <ArrowLeft className="w-8 pr-2" />
        Choose an existing address
      </Button>
      <Title>Shipping address</Title>
      <form onSubmit={onSubmit}>
        <div className="space-y-2">
          <Input
            control={control}
            type="text"
            name="street"
            label="Street"
            isLoading={isLoading}
          />
          <div className="flex w-full flex-row gap-2">
            <Input
              control={control}
              type="text"
              name="zipCode"
              label="Zip code"
              isLoading={isLoading}
            />
            <Input
              control={control}
              type="text"
              name="city"
              label="City"
              isLoading={isLoading}
            />
          </div>
          <Input
            control={control}
            type="text"
            name="country"
            label="Country"
            isLoading={isLoading}
          />
        </div>
        <Button
          isLoading={isLoading}
          variant="blue"
          className="mt-8 w-full"
          loadingText="Logging in ..."
        >
          Choose this address
        </Button>
      </form>
    </div>
  );
};
