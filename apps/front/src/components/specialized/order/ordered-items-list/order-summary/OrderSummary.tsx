import MonitorMoneyIcon from '@front/assets/icons/monitor-money.svg';
import CheckSquareIcon from '@front/assets/icons/tick-square.svg';
import { Button, TextWithIcon } from '@front/components/design-system';

import { useOrderSummaryActions } from './hooks/useOrderSummaryActions';
import { useOrdersData } from './hooks/useOrdersData';

export const OrderSummary = () => {
  const { handleCancelPayment, handleStartPayment } = useOrderSummaryActions();
  const { articlesCount, totalCost } = useOrdersData();

  return (
    <div className="grow rounded-lg border border-gray-700 bg-gradient-to-br from-sky-700 to-cyan-900 p-4 text-white">
      <TextWithIcon Icon={CheckSquareIcon} className="text-2xl">
        Summary
      </TextWithIcon>
      <div className="flex flex-col justify-center text-center">
        <MonitorMoneyIcon className="max-w-[160px] self-center md:max-w-[270px]" />
        <div className="pb-5 text-5xl text-cyan-600 md:text-6xl">Total</div>
        <div className="pb-2 text-3xl text-gray-200">
          {articlesCount} articles - {totalCost} €
        </div>
        <div className="mt-10 flex flex-col self-center">
          <Button
            variant="green"
            className="h-30 w-full text-2xl transition duration-150 ease-in-out"
            data-bs-toggle="modal"
            data-bs-target="#paymentModal"
            onClick={handleStartPayment}
          >
            Proceed with payment
          </Button>
          <Button
            variant="neutral"
            className="h-30 w-full text-2xl"
            onClick={handleCancelPayment}
          >
            Cancel order
          </Button>
        </div>
      </div>
    </div>
  );
};
