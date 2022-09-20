import { ProductsQuery } from '@front/api';

import { Article } from './article/Article';

export const ArticlesList = ({ products }: Pick<ProductsQuery, 'products'>) =>
  products && (
    <div className="grid place-content-center gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.slice(0, 13).map((p) => (
        <Article key={p.id} {...p} />
      ))}
    </div>
  );
