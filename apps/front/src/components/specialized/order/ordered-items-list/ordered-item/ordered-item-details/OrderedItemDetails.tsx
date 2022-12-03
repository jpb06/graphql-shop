import Image from 'next/image';

import DollarPriceTagIcon from '@front/assets/icons/dollar-price-tag.svg';
import ProductGoodsBoxCompleteIcon from '@front/assets/icons/product-goods-box-complete.svg';
import ProductIcon from '@front/assets/icons/product.svg';
import { TextWithIcon } from '@front/components/design-system';
import { OrderData } from '@front/state';

export const OrderedItemDetails = ({
  name,
  description,
  image,
  price,
  stock,
}: OrderData) => (
  <>
    <div className="rounded-t-lg border border-gray-800 bg-gray-700 md:max-h-60 md:flex-none md:rounded-none md:rounded-l-lg">
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
      <div className="flex h-full flex-col p-4 leading-normal">
        <TextWithIcon Icon={ProductIcon} className="text-2xl text-cyan-600">
          {name}
        </TextWithIcon>
        <TextWithIcon Icon={DollarPriceTagIcon} className="mt-6">
          {price} €
        </TextWithIcon>
        <TextWithIcon Icon={ProductGoodsBoxCompleteIcon}>
          {stock} in stock
        </TextWithIcon>
        <p className="flex grow font-normal text-gray-400">
          <span className="self-end">{description}</span>
        </p>
      </div>
    </div>
  </>
);
