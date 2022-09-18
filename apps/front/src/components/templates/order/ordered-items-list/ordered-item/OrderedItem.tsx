import { ProductsWithIdsQuery } from '@front/api';

import { ArrayItemType } from '../../../../../types/ArrayItemType.type';
import { OrderedItemControls } from './ordered-item-controls.tsx/OrderedItemControls';
import { OrderedItemDetails } from './ordered-item-details/OrderedItemDetails';

export type ProductsWithIdsArrayType = Pick<
  ProductsWithIdsQuery,
  'productsWithIds'
>['productsWithIds'];

export const OrderedItem = ({
  id,
  name,
  description,
  image,
  price,
}: ArrayItemType<ProductsWithIdsArrayType>) => {
  return (
    <div className="flex flex-col md:flex-row">
      <OrderedItemDetails name={name} description={description} image={image} />
      <OrderedItemControls id={id} price={price} />
    </div>
  );

  // return (
  //   <div className="grid grid-cols-12 justify-start rounded-lg border shadow-md max-h-[200px] border-gray-700 bg-gray-800 hover:bg-gray-700">
  //     {/* eslint-disable-next-line @next/next/no-img-element */}
  //     <img
  //       src={image}
  //       alt={name}
  //       className="h-[192px] object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
  //     />
  //     <div className="p-4 leading-normal justify-self-start">
  //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
  //         {name}
  //       </h5>
  //       <p className="mb-3 font-normal text-gray-400">{description}</p>
  //     </div>
  //     <OrderedItemControls id={id} price={price} />
  //   </div>
  // );

  // return (
  //   <>
  //     {/* <div className="flex flex-col sm:flex-row gap-1"> */}
  //     <div className="flex flex-col items-center rounded-lg border shadow-md md:flex-row min-h-[170px] md:max-w-5xl border-gray-700 bg-gray-800 hover:bg-gray-700">
  //       {/* eslint-disable-next-line @next/next/no-img-element */}
  //       <img
  //         src={image}
  //         alt={name}
  //         className="md:pl-1 object-cover w-full h-96 rounded-t-lg md:h-auto md:w-56 md:rounded-none md:rounded-l-lg"
  //       />
  //       {/* <Image
  //         src={image}
  //         alt={name}
  //         width={640}
  //         height={480}
  //         placeholder="blur"
  //         blurDataURL="https://loremflickr.com/320/240"
  //         //className="object-cover"
  //         className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
  //       /> */}
  //       <div className="flex flex-col justify-start p-4 leading-normal">
  //         <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
  //           {name}
  //         </h5>
  //         <p className="mb-3 font-normal text-gray-400">{description}</p>
  //       </div>
  //       <OrderedItemControls id={id} price={price} />
  //     </div>
  //     {/* </div> */}
  //   </>
  // );
};
