import { UseFormWatch } from 'react-hook-form';

import { CreditCard, CreditCardInfos } from '@front/components';

interface BoundCreditCardProps {
  focus: keyof CreditCardInfos;
  watch: UseFormWatch<CreditCardInfos>;
}

export const BoundCreditCard = ({ focus, watch }: BoundCreditCardProps) => {
  const { number, name, expirationMonth, expirationYear, cvc } = watch();

  return (
    <CreditCard
      number={number}
      name={name}
      expirationMonth={expirationMonth}
      expirationYear={expirationYear}
      cvc={cvc}
      focus={focus}
    />
  );
};
