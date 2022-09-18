import Image from 'next/future/image';

import ProductIcon from '../../../../../../../public/icons/product.svg';
import { ArrayItemType } from '../../../../../../types/ArrayItemType.type';
import { TitleWithIcon } from '../../../../../generic/title-with-icon/TitleWithIcon';
import { ProductsWithIdsArrayType } from '../OrderedItem';

export const OrderedItemDetails = ({
  name,
  description,
  image,
}: Omit<ArrayItemType<ProductsWithIdsArrayType>, 'id' | 'price'>) => {
  return (
    <>
      <div className="rounded-t-lg border-2 border-gray-800 bg-gray-700 md:flex-none md:rounded-none md:rounded-l-lg">
        <Image
          src={image}
          alt={name}
          width="640"
          height="480"
          placeholder="blur"
          blurDataURL="https://loremflickr.com/320/240"
          className="hover:bg-dark h-auto w-full rounded-t-lg hover:mix-blend-exclusion md:rounded-none md:rounded-l-lg"
        />
      </div>
      <div className="flex-initial grow bg-gray-800 hover:bg-gray-700 md:w-[500px]">
        <div className="p-4 leading-normal">
          <TitleWithIcon Icon={ProductIcon}>{name}</TitleWithIcon>
          <p className="mb-3 font-normal text-gray-400">{description}</p>
        </div>
      </div>
    </>
  );
};
