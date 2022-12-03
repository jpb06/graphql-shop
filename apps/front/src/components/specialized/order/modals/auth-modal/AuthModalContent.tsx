import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { useModal } from '@front/components/design-system';
import { AuthModalForm, useLoginForm } from '@front/components/specific';
import { authStateAtom } from '@front/state';

import { orderModalAtom } from '../../state/order-modal.state';
import { AddressModal } from '../shipping-address-selection-modal';

export const AuthModalContent = () => {
  const [auth] = useAtom(authStateAtom);
  const [, setOrderModalState] = useAtom(orderModalAtom);

  const { updateModal } = useModal();

  const handleLoginSuccess = () => {
    setOrderModalState(() => ({
      step: 'address',
    }));
    updateModal(AddressModal);
  };

  const { onSubmit, isLoading, authError, control } =
    useLoginForm(handleLoginSuccess);

  useEffect(() => {
    if (auth) {
      setOrderModalState(() => ({
        step: 'address',
      }));
      updateModal(AddressModal);
    }
  }, [updateModal, setOrderModalState, auth]);

  return (
    <AuthModalForm
      control={control}
      isLoading={isLoading}
      onSubmit={onSubmit}
      error={authError}
    />
  );
};
