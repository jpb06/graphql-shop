import { NavBar, Footer } from '@front/components';

import { OrderRoot } from '../components/specialized/order/Order';

const Order = () => (
  <div className="flex h-screen flex-col">
    <NavBar />
    <OrderRoot />
    <Footer />
  </div>
);

export default Order;
