import { useState } from 'react';

import { CreditCardFocus, CreditCardInfos } from '@front/components/specific';

import { PaymentModalForm } from './PaymentModalForm';
import { BoundCreditCard } from './children/BoundCreditCard';
import { usePaymentForm } from './hooks/usePaymentForm';

export interface CardState extends CreditCardInfos {
  focus?: CreditCardFocus;
}

export const PaymentModalContent = () => {
  const { control, onSubmit, watch, isLoading } = usePaymentForm();

  const [focus, setFocus] = useState<CreditCardFocus>('number');
  const [transitionClassName, setTransitionClassName] = useState('');

  return (
    <div className="flex flex-col items-center px-1">
      <div
        className={`transform-style-3d grid h-full w-[325px] grow grid-cols-1 grid-rows-1 items-stretch transition-transform duration-1000 ${transitionClassName}`}
      >
        <BoundCreditCard watch={watch} focus={focus} />
      </div>
      <PaymentModalForm
        control={control}
        onSubmit={onSubmit}
        setTransitionClassName={setTransitionClassName}
        setFocus={setFocus}
        isLoading={isLoading}
      />
    </div>
  );
};
