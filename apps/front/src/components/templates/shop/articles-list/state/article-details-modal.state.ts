import { atom } from 'jotai';

import { ArrayItemType } from '../../../../../types/ArrayItemType.type';
import { ProductsArrayType } from '../article/Article';

type ArticleDetailsModalState = Partial<
  Pick<ArrayItemType<ProductsArrayType>, 'name' | 'description' | 'image'>
> & {
  hidden: boolean;
};

export const articleDetailsModalAtom = atom<ArticleDetailsModalState>({
  hidden: true,
});
