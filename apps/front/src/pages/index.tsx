import { Footer } from '../components/generic/footer/Footer';
import { NavBar } from '../components/generic/navbar';
import { ShopRoot } from '../components/templates/shop/Shop';

const Index = () => (
  <div className="flex h-screen flex-col">
    <NavBar />
    <ShopRoot />
    <Footer />
  </div>
);

export default Index;
