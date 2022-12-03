import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  FormEventHandler,
  SetStateAction,
} from 'react';
import { Control } from 'react-hook-form';

import {
  Select,
  Button,
  NameValue,
  Input,
} from '@front/components/design-system';
import {
  CreditCardFocus,
  CurrentYearSelectOptions,
  formatCvc,
  formatNumber,
  MonthSelectOptions,
} from '@front/components/specific';

import { PaymentFormModel } from './logic/credit-card-form.schema';

type PaymentModalFormProps = {
  isLoading: boolean;
  control: Control<PaymentFormModel, unknown>;
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
  setTransitionClassName: Dispatch<SetStateAction<string>>;
  setFocus: Dispatch<SetStateAction<CreditCardFocus>>;
};

export const PaymentModalForm = ({
  isLoading,
  control,
  onSubmit,
  setTransitionClassName,
  setFocus,
}: PaymentModalFormProps) => {
  const handleInputFocus: ChangeEventHandler<NameValue> = (e) => {
    const { name } = e.target;

    setTransitionClassName((_) => (name === 'cvc' ? 'rotate-y-180' : ''));
    setFocus(() => name as CreditCardFocus);
  };

  const formatValue = (e: ChangeEvent<HTMLInputElement>) => {
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

    return value === '' ? undefined : maybeFormattedValue;
  };

  return (
    <form
      className="flex w-[335px] flex-col items-center gap-2 p-2 pt-4"
      onSubmit={onSubmit}
    >
      <Input
        type="text"
        name="number"
        onInputFocus={handleInputFocus}
        formatValue={formatValue}
        maxLength={19}
        placeholder="Card Number"
        control={control}
      />
      <Input
        type="text"
        name="name"
        onInputFocus={handleInputFocus}
        maxLength={20}
        spellcheck={false}
        placeholder="Full name"
        autoComplete="off"
        control={control}
      />

      <div className="flex w-full flex-row gap-1">
        <Select
          onInputFocus={handleInputFocus}
          name="expirationMonth"
          control={control}
        >
          <MonthSelectOptions
            defaultValue="••"
            defaultValueText="Select a month"
          />
        </Select>
        <Select
          onInputFocus={handleInputFocus}
          name="expirationYear"
          control={control}
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
        onInputFocus={handleInputFocus}
        formatValue={formatValue}
        maxLength={4}
        placeholder="CVC"
        autoComplete="off"
        control={control}
      />
      <Button
        variant="green"
        isLoading={isLoading}
        loadingText="Confirming payment ..."
        className="mt-2 w-full"
      >
        Pay
      </Button>
    </form>
  );
};
