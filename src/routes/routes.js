import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Countrey from '../pages/Countrey/Countrey';
import Home from '../pages/Home/Home';

const AppRoutes = () => (
  <Suspense>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:countrey" element={<Countrey />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
