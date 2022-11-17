import { useAtom } from 'jotai';
import { useState } from 'react';

import { GqlNewAddressOutput, MyAddressesQuery } from '@front/api';

import { orderModalAtom } from '../../../specialized/order/state/order-modal.state';
import { BorderedRadio } from './BorderedRadio';

type AddressSelectionProps = {
  data: MyAddressesQuery;
};

export const AddressSelection = ({ data }: AddressSelectionProps) => {
  const [checkedId, setCheckedId] = useState<string | null>(null);

  const [, setModalState] = useAtom(orderModalAtom);

  const handleAddressChosen = (id: string) => {
    setCheckedId(id);

    const selectedAddress = data.myAddresses.find((a) => a.id === id);
    setModalState(() => ({
      step: 'payment',
      address: selectedAddress as GqlNewAddressOutput,
    }));
  };

  return (
    <ul className="mb-2 grid h-80 w-full gap-1 overflow-scroll rounded-md p-1 ring-2 ring-sky-600 ring-offset-1 ring-offset-sky-600">
      {data?.myAddresses.map(({ id, street, zipCode, city, country }) => (
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
