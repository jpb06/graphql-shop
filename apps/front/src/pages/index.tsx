import { NavBar, Footer } from '@front/components';

import { ShopRoot } from '../components/specialized/shop/Shop';

const Index = () => (
  <div className="flex h-screen flex-col">
    <NavBar />
    <ShopRoot />
    <Footer />
  </div>
);

export default Index;
