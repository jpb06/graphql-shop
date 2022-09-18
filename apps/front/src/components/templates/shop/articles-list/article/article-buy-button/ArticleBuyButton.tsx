import UpArrowChevronIcon from '../../../../../../../public/icons/up-arrow-chevron.svg';
import { useOrderActions } from '../hooks/useOrderActions';

type ArticleBuyButtonProps = {
  id: string;
};

export const ArticleBuyButton = ({ id }: ArticleBuyButtonProps) => {
  const { handleBumpOrder } = useOrderActions(id);

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
