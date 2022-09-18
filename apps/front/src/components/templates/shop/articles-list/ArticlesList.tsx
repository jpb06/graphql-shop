import { useAtom } from 'jotai';

import { ProductsQuery } from '@front/api';

import { Article } from './article/Article';
import { ArticleDetailsModal } from './details-modal/ArticleDetailsModal';
import { articleDetailsModalAtom } from './state/article-details-modal.state';

export const ArticlesList = ({ products }: Pick<ProductsQuery, 'products'>) => {
  const [modalState] = useAtom(articleDetailsModalAtom);

  return (
    products && (
      <>
        <ArticleDetailsModal {...modalState} />
        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 place-content-center">
          {products.slice(0, 13).map((p) => (
            <Article key={p.id} {...p} />
          ))}
        </div>
      </>
    )
  );
};
