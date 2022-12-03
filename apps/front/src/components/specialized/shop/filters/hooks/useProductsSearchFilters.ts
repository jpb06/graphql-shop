import { zodResolver } from '@hookform/resolvers/zod';
import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import zod from 'zod';

import {
  ProductsSearchFilters,
  productsSearchFiltersAtom,
} from '../../state/products-search-filters.state';

const stringToNumber = (val: string | undefined, ctx: zod.RefinementCtx) => {
  if (val === '' || val === undefined) {
    return undefined;
  }

  const parsed = parseInt(val);
  if (isNaN(parsed)) {
    ctx.addIssue({
      code: zod.ZodIssueCode.custom,
      message: 'Not a number',
    });

    return zod.NEVER;
  }

  return parsed;
};

export const formSchema: zod.ZodSchema = zod.object({
  categoriesIds: zod.string().default('-1').transform(stringToNumber),
  text: zod.string().optional(),
  price: zod.string().optional().transform(stringToNumber),
  priceCondition: zod.enum(['gte', 'lte']).default('lte'),
});

export const useProductsSearchFiltersForm = () => {
  const [, setState] = useAtom(productsSearchFiltersAtom);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm<ProductsSearchFilters>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (payload: ProductsSearchFilters) => {
    setState(payload);
  };

  return {
    control,
    onSubmit: handleSubmit(onSubmit),
    getValues,
    watch,
    formErrors: errors,
  };
};
