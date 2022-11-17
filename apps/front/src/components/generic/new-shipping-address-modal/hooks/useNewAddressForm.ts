import { zodResolver } from '@hookform/resolvers/zod';
import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import zod from 'zod';

import { useNewAddressMutation } from '@front/api';

import { orderModalAtom } from '../../../specialized/order/state/order-modal.state';

export type NewAddressFormModel = {
  street: string;
  zipCode: string;
  city: string;
  country: string;
};

const schema: zod.ZodSchema<NewAddressFormModel> = zod.object({
  street: zod.string().min(1, 'Required'),
  zipCode: zod.string().min(1, 'Required'),
  city: zod.string().min(1, 'Required'),
  country: zod.string().min(1, 'Required'),
});

export const useNewAddressForm = () => {
  const [, setModalState] = useAtom(orderModalAtom);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAddressFormModel>({
    defaultValues: {
      street: '',
      zipCode: '',
      city: '',
      country: '',
    },
    resolver: zodResolver(schema),
  });

  const { mutate, isLoading, isError } = useNewAddressMutation({
    onSuccess: (data) => {
      setModalState(() => ({
        step: 'payment',
        address: data.createAddress,
      }));
    },
  });

  const onSubmit = (payload: NewAddressFormModel) => {
    mutate(payload);
  };

  return {
    control,
    onSubmit: handleSubmit(onSubmit),
    errors,
    isLoading,
    isError,
  };
};
