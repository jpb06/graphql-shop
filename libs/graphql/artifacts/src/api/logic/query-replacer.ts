import { ProductsByPageQueryArgs, ProductsWithIdsQueryArgs, ProductQueryArgs, CategoryQueryArgs, GetOrderQueryArgs } from './../types/api-types';
import { stringify } from './stringify-object'

export const queryReplacer: Record<
string,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(variables: any) => [RegExp, string] | undefined
> = {
  products: () => undefined,
  productsByPage: ({input}: ProductsByPageQueryArgs) => [new RegExp('^ {2}productsByPage {$', 'gm'), `  productsByPage(input: ${stringify(input, "GqlPaginatedProductsInput")}) {`],
  productsWithIds: ({ids}: ProductsWithIdsQueryArgs) => [new RegExp('^ {2}productsWithIds {$', 'gm'), `  productsWithIds(ids: ${stringify(ids, "number")}) {`],
  product: ({id}: ProductQueryArgs) => [new RegExp('^ {2}product {$', 'gm'), `  product(id: ${stringify(id, "number")}) {`],
  categories: () => undefined,
  category: ({id}: CategoryQueryArgs) => [new RegExp('^ {2}category {$', 'gm'), `  category(id: ${stringify(id, "number")}) {`],
  me: () => undefined,
  getOrder: ({id}: GetOrderQueryArgs) => [new RegExp('^ {2}getOrder {$', 'gm'), `  getOrder(id: ${stringify(id, "number")}) {`],
  myOrders: () => undefined,
  myAddresses: () => undefined,

};