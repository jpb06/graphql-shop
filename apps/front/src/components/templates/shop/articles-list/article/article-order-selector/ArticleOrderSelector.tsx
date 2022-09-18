import { useOrderActions } from './../hooks/useOrderActions';

type ArticleOrderSelectorProps = {
  id: string;
};

export const ArticleOrderSelector = ({ id }: ArticleOrderSelectorProps) => {
  const { count, handleCancelOrder, handleBumpOrder } = useOrderActions(id);

  return (
    <div className="grow items-center rounded-lg bg-sky-800 text-center text-white hover:bg-sky-900">
      <div className="flex justify-between gap-1">
        <button
          className="focus:outline:none rounded-lg bg-teal-600 py-6 px-14 text-xl hover:bg-teal-500 sm:py-2 sm:px-5"
          onClick={handleCancelOrder}
        >
          -
        </button>
        <div className="rounded-lg py-6 text-2xl sm:py-2 sm:text-lg">
          {count}
        </div>
        <button
          className="focus:outline:none rounded-lg bg-teal-600 py-6 px-14 text-xl hover:bg-teal-500 sm:py-2 sm:px-5"
          onClick={handleBumpOrder}
        >
          +
        </button>
      </div>
    </div>
  );
};
