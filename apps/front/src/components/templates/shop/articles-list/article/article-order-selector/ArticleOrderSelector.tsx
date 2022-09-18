import { useOrderActions } from './../hooks/useOrderActions';

type ArticleOrderSelectorProps = {
  id: string;
};

export const ArticleOrderSelector = ({ id }: ArticleOrderSelectorProps) => {
  const { count, handleCancelOrder, handleBumpOrder } = useOrderActions(id);

  return (
    <div className="grow items-center text-center text-white rounded-lg bg-sky-800 hover:bg-sky-900">
      <div className="flex gap-1 justify-between">
        <button
          className="bg-teal-600 hover:bg-teal-500 py-6 sm:py-2 px-14 sm:px-5 rounded-lg focus:outline:none text-xl"
          onClick={handleCancelOrder}
        >
          -
        </button>
        <div className="py-6 sm:py-2 rounded-lg text-2xl sm:text-lg">
          {count}
        </div>
        <button
          className="bg-teal-600 hover:bg-teal-500 py-6 sm:py-2 px-14 sm:px-5 rounded-lg focus:outline:none text-xl"
          onClick={handleBumpOrder}
        >
          +
        </button>
      </div>
    </div>
  );
};
