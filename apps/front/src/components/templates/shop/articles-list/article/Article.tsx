import Image from 'next/image';

import { ProductsQuery } from '@front/api';

import { ArrayItemType } from '../../../../../types/ArrayItemType.type';
import { ArticleBuyButton } from './article-buy-button/ArticleBuyButton';
import { ArticleOrderSelector } from './article-order-selector/ArticleOrderSelector';
import { useArticleState } from './hooks/useArticleState';

export type ProductsArrayType = Pick<ProductsQuery, 'products'>['products'];

export const Article = (props: ArrayItemType<ProductsArrayType>) => {
  const { hasOrders, handleArticleSelected } = useArticleState(props);

  const { id, name, image, description, price } = props;

  return (
    <div className="flex flex-col rounded-lg border border-gray-700 bg-gray-800 opacity-95 shadow-md hover:bg-gray-700">
      <Image
        src={image}
        alt={name}
        width={640}
        height={480}
        placeholder="blur"
        blurDataURL="https://loremflickr.com/320/240"
        className="rounded-t-md"
      />
      <div className="flex-grow px-5 pt-5">
        <button onClick={handleArticleSelected}>
          <h5 className="mb-2 h-10 text-left text-2xl font-bold tracking-tight text-white sm:h-24">
            {name}
          </h5>
        </button>
        <p className="mb-3 font-normal text-white">{price} €</p>
        <p className="mb-3 h-9 max-w-xs truncate font-light text-gray-400">
          {description}
        </p>
      </div>
      {hasOrders ? (
        <ArticleOrderSelector id={id} />
      ) : (
        <ArticleBuyButton id={id} />
      )}
    </div>
  );
};
