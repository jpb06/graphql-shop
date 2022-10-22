import { useState } from 'react';

import {
  CreditCard,
  CreditCardFocus,
  CreditCardInfos,
} from '@front/components';

import { PaymentModalForm } from './PaymentModalForm';

export interface CardState extends CreditCardInfos {
  focus?: CreditCardFocus;
}

export const PaymentModalContent = () => {
  const [card, setCard] = useState<CardState>({
    cvc: '',
    expirationMonth: '',
    expirationYear: '',
    name: '',
    number: '',
  });
  const [transitionClassName, setTransitionClassName] = useState('');

  return (
    <div className="flex flex-col items-center px-1">
      <div
        className={`transform-style-3d grid h-full w-[325px] grow grid-cols-1 grid-rows-1 items-stretch transition-transform duration-1000 ${transitionClassName}`}
      >
        <CreditCard {...card} />
      </div>
      <PaymentModalForm
        {...card}
        setCard={setCard}
        setTransitionClassName={setTransitionClassName}
      />
    </div>
  );
};
