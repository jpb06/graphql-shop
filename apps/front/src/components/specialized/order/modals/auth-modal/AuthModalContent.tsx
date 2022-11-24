import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { AuthModalForm, modalStateAtom, useLoginForm } from '@front/components';
import { authStateAtom } from '@front/state';

import { orderModalAtom } from '../../state/order-modal.state';
import { AddressModal } from '../shipping-address-selection-modal';

export const AuthModalContent = () => {
  const [auth] = useAtom(authStateAtom);
  const [, setOrderModalState] = useAtom(orderModalAtom);
  const [, setModalState] = useAtom(modalStateAtom);

  const handleLoginSuccess = () => {
    setOrderModalState(() => ({
      step: 'address',
    }));
    setModalState((state) => ({
      ...state,
      content: AddressModal,
    }));
  };

  const { onSubmit, isLoading, authError, control } =
    useLoginForm(handleLoginSuccess);

  useEffect(() => {
    if (auth) {
      setOrderModalState(() => ({
        step: 'address',
      }));
      setModalState((state) => ({
        ...state,
        content: AddressModal,
      }));
    }
  }, [setModalState, setOrderModalState, auth]);

  return (
    <AuthModalForm
      control={control}
      isLoading={isLoading}
      onSubmit={onSubmit}
      error={authError}
    />
  );
};
