import { AuthModalForm, useLoginForm, useModal } from '@front/components';

export const AuthModalContent = () => {
  const { updateModal } = useModal();

  const handleSuccess = () => {
    updateModal(undefined, 'closed');
  };

  const { onSubmit, isLoading, authError, control } =
    useLoginForm(handleSuccess);

  return (
    <AuthModalForm
      control={control}
      isLoading={isLoading}
      onSubmit={onSubmit}
      error={authError}
    />
  );
};
