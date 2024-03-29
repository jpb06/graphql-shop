import { useAtom } from 'jotai';
import { useState } from 'react';

import { GqlNewAddressOutput, GqlAddress } from '@front/api';
import { useModal } from '@front/components/design-system';

import { BorderedRadio } from './BorderedRadio';
import { orderModalAtom } from '../../../state/order-modal.state';
import { PaymentModal } from '../../payment-modal';

type AddressSelectionProps = {
  data: Array<GqlAddress>;
};

export const AddressSelection = ({ data }: AddressSelectionProps) => {
  const [checkedId, setCheckedId] = useState<string | null>(null);

  const [, setOrderModalState] = useAtom(orderModalAtom);

  const { updateModal } = useModal();

  const handleAddressChosen = (id: string) => {
    setCheckedId(id);

    const selectedAddress = data.find((a) => a.id === id);
    setOrderModalState(() => ({
      step: 'payment',
      address: selectedAddress as GqlNewAddressOutput,
    }));
    updateModal(PaymentModal);
  };

  return (
    <ul className="mb-2 grid h-80 w-full gap-1 overflow-scroll rounded-md p-1 ring-2 ring-sky-600 ring-offset-1 ring-offset-sky-600">
      {data?.map(({ id, street, zipCode, city, country }) => (
        <BorderedRadio
          key={id}
          id={id}
          name={`address-${id}`}
          checked={checkedId === id}
          onSelected={handleAddressChosen}
        >
          <div className="pb-2">{street}</div>
          <div>{`${zipCode} ${city}`}</div>
          <div>{country}</div>
        </BorderedRadio>
      ))}
    </ul>
  );
};
