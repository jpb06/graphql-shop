import Link from 'next/link';

import PlusIcon from '@front/assets/icons/plus.svg';

export const OrderedItemSkeleton = () => (
  <div
    className={`animate-pulse-quiet hidden rounded-lg bg-slate-700 xl:flex xl:h-[240px] xl:flex-row`}
  >
    <Link href="/" className="inline-flex w-[100%]">
      <div className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg text-gray-400 hover:bg-slate-600 hover:text-gray-300">
        <PlusIcon className="h-24 w-24" aria-hidden="true" />
        <div className="text-2xl">Order more articles</div>
      </div>
    </Link>
  </div>
);
