import Link from 'next/link';

import YoloLogo from '../../../../public/yolo-logo.svg';

export const Brand = () => (
  <Link href="/">
    <div className="flex cursor-pointer items-center">
      <YoloLogo />
      <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
        Yolo shop
      </span>
    </div>
  </Link>
);
