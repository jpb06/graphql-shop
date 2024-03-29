import { useAtom } from 'jotai';
import Image from 'next/image';

import { GqlProduct } from '@front/api';
import DollarPriceTagIcon from '@front/assets/icons/dollar-price-tag.svg';
import ProductGoodsBoxCompleteIcon from '@front/assets/icons/product-goods-box-complete.svg';
import { TextWithIcon, Title } from '@front/components/design-system';
import { ordersAtom } from '@front/state';

import { ArticleBuyButton } from './article-buy-button/ArticleBuyButton';
import { ArticleOrderSelector } from './article-order-selector/ArticleOrderSelector';

export const Article = (props: GqlProduct) => {
  const [orders] = useAtom(ordersAtom);
  const { id, name, image, description, price, stock } = props;
  const hasOrders = orders.find((el) => el.id === id)?.quantity ?? 0;

  return (
    <div className="flex flex-col rounded-lg border border-gray-700 bg-gray-800 opacity-95 shadow-md hover:bg-gray-700 ">
      <Image
        src={image}
        alt={name}
        width={640}
        height={480}
        placeholder="blur"
        blurDataURL="https://loremflickr.com/320/240"
        className="rounded-t-md"
      />
      <div className="flex-grow p-5">
        <Title>{name}</Title>
        <div className="mt-3 mb-3 font-normal text-slate-300">
          <div className="flex flex-col">
            <TextWithIcon Icon={DollarPriceTagIcon}>{price} €</TextWithIcon>
            <TextWithIcon Icon={ProductGoodsBoxCompleteIcon}>
              {stock} in stock
            </TextWithIcon>
          </div>
        </div>
        <p className="contents h-9 max-w-xs font-light text-gray-400">
          {description}
        </p>
      </div>
      {hasOrders > 0 ? (
        <ArticleOrderSelector {...props} />
      ) : (
        <ArticleBuyButton {...props} />
      )}
    </div>
  );
};
