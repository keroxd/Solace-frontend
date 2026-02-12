import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/shop';
import ProductPage from './pages/product-page';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product" element={<ProductPage />} />

      {/* <Route path="/about" element={<About />} /> */}
      {/* 404 Page catch-all */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;