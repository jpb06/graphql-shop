import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';

import { formatCvc, formatNumber } from '../credit-card/logic';
import { CreditCardFocus } from '../credit-card/types';
import { CurrentYearSelectOptions } from '../current-year-select-options/CurrentYearSelectOptions';
import { MonthSelectOptions } from '../month-select-options/MonthSelectOptions';
import { CardState } from './PaymentModalContent';

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
  const handleInputFocus: ChangeEventHandler<{
    name: string;
    value: string;
  }> = (e) => {
    const { name } = e.target;

    setTransitionClassName((_) => (name === 'cvc' ? 'rotate-y-180' : ''));
    setCard((card) => ({ ...card, focus: name as CreditCardFocus }));
  };

  const handleInputChange: ChangeEventHandler<{
    name: string;
    value: string;
  }> = (e) => {
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
      <input
        type="tel"
        name="number"
        className="block w-full rounded-lg border border-gray-600 bg-gray-700 py-2.5 pr-2 text-right text-sm text-white placeholder-gray-400 transition-all focus:border-blue-500 focus:ring-blue-500"
        required
        placeholder="Card Number"
        maxLength={19}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        value={number}
      />
      <input
        type="text"
        name="name"
        spellCheck="false"
        className="block w-full rounded-lg border border-gray-600 bg-gray-700 py-2.5 pr-2 text-right text-sm text-white placeholder-gray-400 transition-all focus:border-blue-500 focus:ring-blue-500"
        required
        placeholder="Full Name"
        pattern="[\d| ]{16,22}"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        maxLength={20}
        autoComplete="off"
      />
      <div className="flex w-full flex-row gap-1">
        <select
          name="expirationMonth"
          className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-gray-400 placeholder-gray-400 transition-all focus:border-blue-500 focus:ring-blue-500"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          value={expirationMonth}
        >
          <MonthSelectOptions
            defaultValue="••"
            defaultValueText="Select a month"
          />
        </select>
        <select
          className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-gray-400 placeholder-gray-400 transition-all focus:border-blue-500 focus:ring-blue-500"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          name="expirationYear"
          value={expirationYear}
        >
          <CurrentYearSelectOptions
            defaultValue="••"
            defaultValueText="Select a year"
          />
        </select>
      </div>
      <input
        type="number"
        name="cvc"
        className="block w-full rounded-lg border border-gray-600 bg-gray-700 py-2.5 pr-2 text-right text-sm text-white placeholder-gray-400 transition-all focus:border-blue-500 focus:ring-blue-500"
        required
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        maxLength={4}
        placeholder="CVC"
        autoComplete="off"
        value={cvc}
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
