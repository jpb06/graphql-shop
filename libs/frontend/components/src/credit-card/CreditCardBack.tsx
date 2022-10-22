import { formatCvc } from './logic';
import { CreditCardInfos } from './types/credit-card-infos';

type CreditCardBackProps = Partial<Pick<CreditCardInfos, 'cvc'>> & {
  cardBackground: string;
};

export const CreditCardBack = ({
  cvc,
  cardBackground,
}: CreditCardBackProps) => (
  <div
    className={`rotate-y-180 backface-hidden font-credit-card ${cardBackground} h-hull relative z-0 col-[1/1] row-[1/1] h-[220px] overflow-hidden rounded-xl bg-cover bg-no-repeat text-left text-2xl text-white opacity-70 shadow-md shadow-teal-700/50`}
  >
    <div className=" mt-7 h-10 w-full bg-black" />
    <div className="credit-card-signature ml-4 mt-4 h-8 w-64 p-1 text-right text-gray-800">
      {formatCvc(cvc, 3, false)}
    </div>
    <div className="bg-visa mt-9 h-12 w-full bg-contain bg-center bg-no-repeat text-center" />
  </div>
);
