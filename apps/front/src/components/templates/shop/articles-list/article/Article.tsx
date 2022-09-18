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
    <div className="opacity-95 rounded-lg border shadow-md bg-gray-800 hover:bg-gray-700 border-gray-700 flex flex-col">
      <Image
        src={image}
        alt={name}
        width={640}
        height={480}
        placeholder="blur"
        blurDataURL="https://loremflickr.com/320/240"
        className="rounded-t-md"
      />
      <div className="px-5 pt-5 flex-grow">
        <button onClick={handleArticleSelected}>
          <h5 className="text-left mb-2 text-2xl font-bold tracking-tight text-white h-10 sm:h-24">
            {name}
          </h5>
        </button>
        <p className="mb-3 font-normal text-white">{price} €</p>
        <p className="mb-3 font-light text-gray-400 truncate max-w-xs h-9">
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
