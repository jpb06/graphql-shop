import { OrderData } from '../../../../../state/orders.state';
import { OrderedItemControls } from './ordered-item-controls.tsx/OrderedItemControls';
import { OrderedItemDetails } from './ordered-item-details/OrderedItemDetails';

export const OrderedItem = (order: OrderData) => {
  return (
    <div className="flex flex-col md:flex-row">
      <OrderedItemDetails {...order} />
      <OrderedItemControls {...order} />
    </div>
  );
};
