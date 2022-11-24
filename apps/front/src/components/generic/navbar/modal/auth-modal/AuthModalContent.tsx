import { useAtom } from 'jotai';

import { AuthModalForm, modalStateAtom, useLoginForm } from '@front/components';

export const AuthModalContent = () => {
  const [, setModalState] = useAtom(modalStateAtom);

  const handleLoginSuccess = () => {
    setModalState(() => ({
      content: undefined,
      status: 'closed',
    }));
  };

  const { onSubmit, isLoading, authError, control } =
    useLoginForm(handleLoginSuccess);

  return (
    <AuthModalForm
      control={control}
      isLoading={isLoading}
      onSubmit={onSubmit}
      error={authError}
    />
  );
};
