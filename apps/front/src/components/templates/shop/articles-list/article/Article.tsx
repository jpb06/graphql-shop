import { useAtom } from 'jotai';
import Image from 'next/image';

import { ProductsQueryDataItem } from '@front/api';

import DollarPriceTagIcon from '../../../../../../public/icons/dollar-price-tag.svg';
import ProductGoodsBoxCompleteIcon from '../../../../../../public/icons/product-goods-box-complete.svg';
import { ordersAtom } from '../../../../../state/orders.state';
import { TextWithIcon } from '../../../../generic/text-with-icon/TextWithIcon';
import { Title } from '../../../../generic/title/Title';
import { ArticleBuyButton } from './article-buy-button/ArticleBuyButton';
import { ArticleOrderSelector } from './article-order-selector/ArticleOrderSelector';

export const Article = (props: ProductsQueryDataItem) => {
  const [orders] = useAtom(ordersAtom);
  const { id, name, image, description, price, stock } = props;
  const hasOrders = orders.find((el) => el.id === id)?.count ?? 0;

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
