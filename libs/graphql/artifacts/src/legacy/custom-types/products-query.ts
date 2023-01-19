import { ProductsQuery } from '../api';
import { ArrayItemType } from './ArrayItemType.type';

export type ProductsQueryData = Pick<ProductsQuery, 'products'>['products'];
export type ProductsQueryDataItem = ArrayItemType<ProductsQueryData>;
