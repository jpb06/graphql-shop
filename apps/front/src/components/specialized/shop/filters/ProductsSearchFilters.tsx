import { KeyboardEventHandler } from 'react';

import { useCategoriesQuery } from '@front/api';
import { Input, Title, Select, Button } from '@front/components/design-system';

import { useProductsSearchFiltersForm } from './hooks/useProductsSearchFilters';

type ProductsSearchFiltersProps = {
  isLoading: boolean;
};

export const ProductsSearchFilters = ({
  isLoading,
}: ProductsSearchFiltersProps) => {
  const { data } = useCategoriesQuery();
  const { onSubmit, control } = useProductsSearchFiltersForm();

  const handleInputSearch: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      void onSubmit();
    }
  };

  const handleSelectSearch = () => {
    void onSubmit();
  };

  return (
    <div className="mb-2 rounded-lg bg-slate-600 p-4">
      <Title>Filters</Title>
      <div className="grid gap-1">
        <Input
          control={control}
          onKeyDown={handleInputSearch}
          type="text"
          name="text"
          isLoading={isLoading}
          placeholder="Search by text"
        />
        <Select
          name="categoriesIds"
          control={control}
          onChange={handleSelectSearch}
        >
          <option key="all" value={-1}>
            All categories
          </option>
          {data?.categories.map(({ id, name }) => (
            <option key={id} value={Number(id)}>
              {name}
            </option>
          ))}
        </Select>
        <div className="flex w-full flex-row gap-1">
          <Select
            name="priceCondition"
            control={control}
            onChange={handleSelectSearch}
          >
            <option value="lte">Less than</option>
            <option value="gte">More than</option>
          </Select>
          <Input
            control={control}
            onKeyDown={handleInputSearch}
            type="text"
            name="price"
            isLoading={isLoading}
            placeholder="Price"
          />
        </div>
      </div>
      <Button
        onClick={onSubmit}
        variant="blue"
        isLoading={isLoading}
        className="mt-2 w-full"
      >
        Search
      </Button>
    </div>
  );
};
