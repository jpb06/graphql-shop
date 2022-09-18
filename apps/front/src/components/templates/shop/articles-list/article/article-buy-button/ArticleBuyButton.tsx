import UpArrowChevronIcon from '../../../../../../../public/icons/up-arrow-chevron.svg';
import { useOrderActions } from '../hooks/useOrderActions';

type ArticleBuyButtonProps = {
  id: string;
};

export const ArticleBuyButton = ({ id }: ArticleBuyButtonProps) => {
  const { handleBumpOrder } = useOrderActions(id);

  return (
    <button
      className="flex justify-center py-6 sm:py-2 px-3 text-xl items-center text-white rounded-lg bg-sky-800 hover:bg-sky-700"
      onClick={handleBumpOrder}
    >
      Buy
      <UpArrowChevronIcon className="ml-1 w-7 h-7 text-white" />
    </button>
  );
};
