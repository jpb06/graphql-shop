import MonitorMoneyIcon from '../../../../../../public/icons/monitor-money.svg';
import CheckSquareIcon from '../../../../../../public/icons/tick-square.svg';
import { Button } from '../../../../generic/button/Button';
import { TextWithIcon } from '../../../../generic/text-with-icon/TextWithIcon';
import { useOrderSummaryActions } from './hooks/useOrderSummaryActions';
import { useOrdersData } from './hooks/useOrdersData';

export const OrderSummary = () => {
  const { handleCancelPayment, handleStartPayment } = useOrderSummaryActions();
  const { articlesCount, totalCost } = useOrdersData();

  return (
    <div className="grow rounded-lg border border-gray-100 bg-gradient-to-br from-sky-800 to-sky-200 p-4 text-white">
      <TextWithIcon Icon={CheckSquareIcon} className="text-2xl">
        Summary
      </TextWithIcon>
      <div className="flex flex-col justify-center text-center">
        <MonitorMoneyIcon className="max-w-[160px] self-center md:max-w-[270px]" />
        <div className="pb-5 text-5xl text-sky-900 md:text-6xl">Your order</div>
        <div className="pb-2 text-3xl text-gray-200">
          {articlesCount} articles - {totalCost} €
        </div>
        <div className="mt-10 flex self-center">
          <Button
            variant="green"
            className="h-40 w-40"
            onClick={handleStartPayment}
          >
            Proceed
            <br /> with payment
          </Button>
          <Button
            variant="neutral"
            className="h-40 w-40"
            onClick={handleCancelPayment}
          >
            Cancel order
          </Button>
        </div>
      </div>
    </div>
  );
};
