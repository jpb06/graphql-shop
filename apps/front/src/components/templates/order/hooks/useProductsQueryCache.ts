import { useQueryClient } from '@tanstack/react-query';

import { ProductsQuery, useProductsQuery } from '@front/api';

export const useProductsQueryCache = (ids: Array<number>) => {
  const queryClient = useQueryClient();

  if (ids.length === 0) {
    return undefined;
  }

  const productsQueryCachedData = queryClient.getQueryData<ProductsQuery>(
    useProductsQuery.getKey()
  );

  if (!productsQueryCachedData) {
    return undefined;
  }

  return {
    productsWithIds: productsQueryCachedData.products.filter((el) =>
      ids.includes(Number(el.id))
    ),
  };
};
