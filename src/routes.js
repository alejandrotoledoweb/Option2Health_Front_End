import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
// import SideNavBar from './components/sideNavbar';
import Login from './components/Login';
import Register from './components/register';
import Perfil from './components/Perfil';
import Coinsults from './components/Coinsults';
import Guardados from './components/Guardados';
import RegisterMedico from './components/registerMedico';
import RegisterProdServ from './components/registerProdServ';
import DatosMedico from './components/DatosMedico';
import PerfilMedico from './components/PerfilMedico';
import Publicacion from './components/Publicacion';
import ArticulosMedico from './components/ArticulosMedico';
import Ayudar from './components/ayudar';

const RoutesFunction = () => (
  <BrowserRouter>
    {/* <SideNavBar /> */}
    <main className="container">
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/coinsults" element={<Coinsults />} />
        <Route path="/guardados" element={<Guardados />} />
        <Route path="/registerMed" element={<RegisterMedico />} />
        <Route path="/registerProdServ" element={<RegisterProdServ />} />
        <Route path="/datosmedico" element={<DatosMedico />} />
        <Route path="/perfilmedico" element={<PerfilMedico />} />
        <Route path="/nuevapublicacion" element={<Publicacion />} />
        <Route path="/articulosmedico" element={<ArticulosMedico />} />
        <Route path="/ayudar" element={<Ayudar />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default RoutesFunction;
