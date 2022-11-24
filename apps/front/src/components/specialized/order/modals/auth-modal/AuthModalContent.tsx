import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { AuthModalForm, useLoginForm, useModal } from '@front/components';
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
