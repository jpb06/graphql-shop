import { zodResolver } from '@hookform/resolvers/zod';
import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import zod from 'zod';

import { useLoginMutation } from '@front/api';

import { authState } from '../../../../state/auth.state';
import { orderModalStep } from '../../../specialized/order/state/order-modal.state';

export type LoginFormModel = {
  email: string;
  password: string;
};

const schema: zod.ZodSchema<LoginFormModel> = zod.object({
  email: zod.string().email('Email expected').min(1, 'Required'),
  password: zod.string().min(1, 'Password required'),
});

export const useLoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormModel>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(schema),
  });
  const [, setModalState] = useAtom(orderModalStep);
  const [, setAuthState] = useAtom(authState);

  const { mutate, isLoading, error } = useLoginMutation({
    onSuccess: (data) => {
      setAuthState(() => data.login);
      setModalState(() => 'payment');
    },
  });

  const onSubmit = ({ email, password }: LoginFormModel) => {
    mutate({ username: email, password });
  };

  return {
    control,
    onSubmit: handleSubmit(onSubmit),
    isLoading,
    formErrors: errors,
    authError: (error as { message: string })?.message,
  };
};
