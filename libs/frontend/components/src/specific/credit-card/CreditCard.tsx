import { useMemo } from 'react';

import { CreditCardBack } from './CreditCardBack';
import { CreditCardFront } from './CreditCardFront';
import { getRandomBackground } from './logic';
import { CreditCardFocus, CreditCardInfos } from './types';

export interface CreditCardProps extends Partial<CreditCardInfos> {
  placeholderName?: string;
  focus?: CreditCardFocus;
}

export const CreditCard = ({
  number,
  name,
  placeholderName = 'FULL NAME',
  expirationMonth,
  expirationYear,
  cvc,
  focus,
}: CreditCardProps) => {
  const cardBackground = useMemo(() => getRandomBackground(), []);

  return (
    <>
      <CreditCardFront
        number={number}
        name={name}
        placeholderName={placeholderName}
        expirationMonth={expirationMonth}
        expirationYear={expirationYear}
        focus={focus}
        cardBackground={cardBackground}
      />
      <CreditCardBack cvc={cvc} cardBackground={cardBackground} />
    </>
  );
};
