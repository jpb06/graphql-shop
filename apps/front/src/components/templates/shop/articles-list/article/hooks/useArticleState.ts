import { useAtom } from 'jotai';

import { ArrayItemType } from '../../../../../../types/ArrayItemType.type';
import { ordersAtom } from '../../../../../state/orders.state';
import { articleDetailsModalAtom } from '../../state/article-details-modal.state';
import { ProductsArrayType } from '../Article';

export const useArticleState = (article: ArrayItemType<ProductsArrayType>) => {
  const [orders] = useAtom(ordersAtom);
  const [, setModalState] = useAtom(articleDetailsModalAtom);

  const handleArticleSelected = () => {
    setModalState({
      hidden: false,
      ...article,
    });
  };

  return {
    hasOrders: orders.some((el) => el.id === article.id),
    handleArticleSelected,
  };
};
