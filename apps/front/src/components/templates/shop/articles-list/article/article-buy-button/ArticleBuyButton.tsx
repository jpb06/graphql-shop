import { ProductsQueryDataItem } from '@front/api';

import UpArrowChevronIcon from '../../../../../../../public/icons/up-arrow-chevron.svg';
import { useOrderActions } from '../hooks/useOrderActions';

export const ArticleBuyButton = (product: ProductsQueryDataItem) => {
  const { handleBumpOrder } = useOrderActions({ ...product, count: 0 });

  if (product.stock === 0) {
    return (
      <div className="cursor-pointer rounded-lg bg-rose-800 py-2 text-center text-xl text-gray-200">
        Out of stock
      </div>
    );
  }

  return (
    <button
      className="flex items-center justify-center rounded-lg bg-sky-800 py-[26px] px-3 text-xl text-white hover:bg-sky-700 sm:py-2"
      onClick={handleBumpOrder}
    >
      Buy
      <UpArrowChevronIcon className="ml-1 h-7 w-7 text-white" />
    </button>
  );
};
