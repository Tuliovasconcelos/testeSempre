import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import FichaCadastral from '../pages/FichaCadastral';
import PlanosPage from '../pages/Planos';
import ResumoCompra from '../pages/ResumoCompra';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fichaCadastral" element={<FichaCadastral />} />
        <Route path="/planos" element={<PlanosPage />} />
        <Route path="/resumoCompra" element={<ResumoCompra />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
