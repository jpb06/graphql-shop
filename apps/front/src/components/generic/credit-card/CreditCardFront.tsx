import { formatExpiration, formatNumber } from './logic';
import { CreditCardFocus } from './types/credit-card-focus';
import { CreditCardInfos } from './types/credit-card-infos';

interface CreditCardFrontProps extends Partial<CreditCardInfos> {
  placeholderName: string;
  focus: CreditCardFocus;
  cardBackground: string;
}

export const CreditCardFront = ({
  focus,
  number,
  name,
  placeholderName,
  expirationMonth,
  expirationYear,
  cardBackground,
}: Partial<CreditCardFrontProps>) => {
  const focused = {
    number: focus === 'number' ? 'opacity-100' : 'opacity-50',
    name: focus === 'name' ? 'opacity-100' : 'opacity-50',
    expiration: focus?.startsWith('expiration') ? 'opacity-100' : 'opacity-50',
  };

  return (
    <div
      className={`backface-hidden font-credit-card ${cardBackground} h-hull relative z-0 col-[1/1] row-[1/1] h-[220px] overflow-hidden rounded-xl bg-cover bg-no-repeat text-left text-2xl text-white opacity-70 shadow-md shadow-teal-700/50`}
    >
      <div className=" flex h-full w-full flex-col px-6 pt-6 pb-3">
        <div className="mb-8 flex justify-between">
          <div className="bg-credit-card-chip h-10 w-full bg-contain bg-left bg-no-repeat" />
          <div className="bg-visa h-12 w-full bg-contain bg-right bg-no-repeat" />
        </div>
        <div className={focused.number}>{formatNumber(number, false)}</div>
        <div className="flex h-full flex-col justify-end text-xl">
          <div className="flex flex-row content-end justify-between">
            <div className={`place-self-center text-sm ${focused.name}`}>
              {!name ? placeholderName : name}
            </div>
            <div>
              <div className={`text-sm ${focused.expiration}`}>Expires</div>
              <div className={focused.expiration}>
                {formatExpiration(expirationMonth, expirationYear)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
