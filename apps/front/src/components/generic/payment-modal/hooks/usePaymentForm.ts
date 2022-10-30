import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { PaymentFormModel, formSchema } from '../logic/credit-card-form.schema';

export const usePaymentForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm<PaymentFormModel>({
    defaultValues: {
      number: '',
      name: '',
      expirationMonth: '',
      expirationYear: '',
      cvc: '',
    },
    resolver: zodResolver(formSchema),
  });

  // const { mutate, isLoading, error } = useMutation({
  //   onSuccess: (data) => {
  //     setAuthState(() => data.login);
  //     setModalState(() => 'payment');
  //   },
  // });

  const onSubmit = (payload: PaymentFormModel) => {
    console.log(payload);
    //mutate(payload);
  };

  return {
    control,
    onSubmit: handleSubmit(onSubmit),
    getValues,
    watch,
    // isLoading,
    formErrors: errors,
  };
};
