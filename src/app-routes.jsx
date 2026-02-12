import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/shop';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      
      {/* <Route path="/about" element={<About />} /> */}
      {/* 404 Page catch-all */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;