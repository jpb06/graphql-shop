import { Footer } from '../components/generic/footer/Footer';
import { NavBar } from '../components/generic/navbar';
import { OrderRoot } from '../components/templates/order/Order';

const Order = () => (
  <div className="flex h-screen flex-col">
    <NavBar />
    <OrderRoot />
    <Footer />
  </div>
);

export default Order;
