import Image from 'next/future/image'; // 'next/image';

import ProductIcon from '../../../../../../../public/icons/product.svg';
import { ArrayItemType } from '../../../../../../types/ArrayItemType.type';
import { ProductsWithIdsArrayType } from '../OrderedItem';

export const OrderedItemDetails = ({
  name,
  description,
  image,
}: Omit<ArrayItemType<ProductsWithIdsArrayType>, 'id' | 'price'>) => {
  return (
    <>
      <div className="md:flex-none bg-gray-700 rounded-t-lg md:rounded-none md:rounded-l-lg border-gray-800 border-2">
        <Image
          src={image}
          alt={name}
          width="640"
          height="480"
          placeholder="blur"
          blurDataURL="https://loremflickr.com/320/240"
          className="rounded-t-lg md:rounded-none md:rounded-l-lg w-full hover:mix-blend-exclusion hover:bg-dark h-auto"
        />
      </div>
      <div className="flex-initial md:w-[500px] bg-gray-800 hover:bg-gray-700">
        <div className="p-4 leading-normal">
          <h5 className="flex gap-2 mb-2 text-2xl font-bold tracking-tight text-white">
            <ProductIcon className="w-6 fill-white" />
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-400">{description}</p>
        </div>
      </div>
    </>
  );
};
