import { useAtom } from 'jotai';

import { ArrayItemType } from '../../../../../../types/ArrayItemType.type';
import { articleDetailsModalAtom } from '../../state/article-details-modal.state';
import { ordersAtom } from '../../state/orders.state';
import { ProductsArrayType } from '../Article';

export const useArticleState = (article: ArrayItemType<ProductsArrayType>) => {
  const [orderStarted] = useAtom(ordersAtom);
  const [, setModalState] = useAtom(articleDetailsModalAtom);

  const handleArticleSelected = () => {
    setModalState({
      hidden: false,
      ...article,
    });
  };

  return {
    hasOrders: orderStarted[article.id] !== undefined,
    handleArticleSelected,
  };
};
