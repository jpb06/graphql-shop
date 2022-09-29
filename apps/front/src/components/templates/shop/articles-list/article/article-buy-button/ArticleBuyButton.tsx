import UpArrowChevronIcon from '../../../../../../../public/icons/up-arrow-chevron.svg';
import { ArrayItemType } from '../../../../../../types/ArrayItemType.type';
import { ProductsArrayType } from '../Article';
import { useOrderActions } from '../hooks/useOrderActions';

export const ArticleBuyButton = (order: ArrayItemType<ProductsArrayType>) => {
  const { handleBumpOrder } = useOrderActions(order);

  if (order.stock === 0) {
    return (
      <div className="cursor-pointer rounded-lg bg-rose-800 py-2 text-center text-xl text-gray-200">
        Out of stock
      </div>
    );
  }

  return (
    <button
      className="flex items-center justify-center rounded-lg bg-sky-800 py-6 px-3 text-xl text-white hover:bg-sky-700 sm:py-2"
      onClick={handleBumpOrder}
    >
      Buy
      <UpArrowChevronIcon className="ml-1 h-7 w-7 text-white" />
    </button>
  );
};
