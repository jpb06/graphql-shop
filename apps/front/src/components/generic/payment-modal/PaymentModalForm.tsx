import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';

import {
  formatCvc,
  formatNumber,
  CreditCardFocus,
  CurrentYearSelectOptions,
  MonthSelectOptions,
} from '@front/components';

import { Input } from './Input';
import { CardState } from './PaymentModalContent';
import { Select } from './Select';
import { NameValue } from './types/name-value.type';

interface PaymentModalFormProps extends CardState {
  setCard: Dispatch<SetStateAction<CardState>>;
  setTransitionClassName: Dispatch<SetStateAction<string>>;
}

export const PaymentModalForm = ({
  number,
  expirationMonth,
  expirationYear,
  cvc,
  setCard,
  setTransitionClassName,
}: PaymentModalFormProps) => {
  const handleInputFocus: ChangeEventHandler<NameValue> = (e) => {
    const { name } = e.target;

    setTransitionClassName((_) => (name === 'cvc' ? 'rotate-y-180' : ''));
    setCard((card) => ({ ...card, focus: name as CreditCardFocus }));
  };

  const handleInputChange: ChangeEventHandler<NameValue> = (e) => {
    const { name, value } = e.target;

    let maybeFormattedValue = '';
    switch (name) {
      case 'number':
        maybeFormattedValue = formatNumber(value, true);
        break;
      case 'cvc':
        maybeFormattedValue = formatCvc(value, 3, true);
        break;
      default:
        maybeFormattedValue = value;
        break;
    }

    setCard((card) => ({ ...card, [name]: maybeFormattedValue }));
  };

  return (
    <div className="flex w-[335px] flex-col items-center gap-2 p-2 pt-4">
      <Input
        type="tel"
        name="number"
        onInputChange={handleInputChange}
        onInputFocus={handleInputFocus}
        value={number}
        maxLength={19}
        placeholder="Card Number"
      />
      <Input
        type="text"
        name="name"
        onInputChange={handleInputChange}
        onInputFocus={handleInputFocus}
        maxLength={20}
        spellcheck={false}
        placeholder="Full name"
        pattern="[\d| ]{16,22}"
        autoComplete="off"
      />

      <div className="flex w-full flex-row gap-1">
        <Select
          onInputChange={handleInputChange}
          onInputFocus={handleInputFocus}
          name="expirationMonth"
          value={expirationMonth}
        >
          <MonthSelectOptions
            defaultValue="••"
            defaultValueText="Select a month"
          />
        </Select>
        <Select
          onInputChange={handleInputChange}
          onInputFocus={handleInputFocus}
          name="expirationYear"
          value={expirationYear}
        >
          <CurrentYearSelectOptions
            defaultValue="••"
            defaultValueText="Select a year"
          />
        </Select>
      </div>
      <Input
        type="number"
        name="cvc"
        onInputChange={handleInputChange}
        onInputFocus={handleInputFocus}
        value={cvc}
        maxLength={4}
        placeholder="CVC"
        autoComplete="off"
      />
      <button
        type="button"
        className="mt-4 w-full rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-800"
      >
        Pay
      </button>
    </div>
  );
};
