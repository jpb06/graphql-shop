import Link from 'next/link';

import EmptyBoxIcon from '../../../../../public/icons/box-empty.svg';
import { GlobalIndicator } from '../../../generic/global-indicator/GlobalIndicator';

export const EmptyBasket = () => (
  <GlobalIndicator Icon={EmptyBoxIcon}>
    Your basket is empty!
    <div className="mt-10 text-2xl text-sky-600 md:mb-28">
      <Link href="/">Go to the shop</Link>
    </div>
  </GlobalIndicator>
);
