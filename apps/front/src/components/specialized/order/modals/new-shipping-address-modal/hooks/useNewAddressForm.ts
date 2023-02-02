import { zodResolver } from '@hookform/resolvers/zod';
import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import zod from 'zod';

import { useCreateAddressMutation } from '@front/api';
import { useModal } from '@front/components/design-system';

import { orderModalAtom } from '../../../state/order-modal.state';
import { PaymentModal } from '../../payment-modal';

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
  const [, setOrderModalState] = useAtom(orderModalAtom);
  const { updateModal } = useModal();

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

  const { mutate, isLoading, isError } = useCreateAddressMutation({
    onSuccess: (data) => {
      setOrderModalState(() => ({
        step: 'payment',
        address: data.createAddress,
      }));
      updateModal(PaymentModal);
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
