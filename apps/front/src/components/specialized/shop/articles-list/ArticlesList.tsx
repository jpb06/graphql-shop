import { ProductsQueryData } from '@front/api';

import { Article } from './article/Article';

type ArticlesListProps = {
  products?: ProductsQueryData;
};

export const ArticlesList = ({ products }: ArticlesListProps) => {
  if (!products) {
    return null;
  }

  return (
    <div className="grid place-content-center gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((p) => (
        <Article key={p.id} {...p} />
      ))}
    </div>
  );
};
