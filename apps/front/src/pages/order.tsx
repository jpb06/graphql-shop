import { Footer } from '../components/generic/footer/Footer';
import { NavBar } from '../components/generic/navbar';
import { OrderRoot } from '../components/templates/order/Order';

const Order = () => (
  <div className="flex flex-col h-screen">
    <NavBar />
    <OrderRoot />
    <Footer />
  </div>
);

export default Order;
