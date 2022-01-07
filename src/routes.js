import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
// import SideNavBar from './components/sideNavbar';
import Login from './components/Login';
import Register from './components/register';
import Perfil from './components/Perfil';
import Coinsults from './components/Coinsults';
import Guardados from './components/Guardados'
import RegisterMedico from './components/registerMedico'
import RegisterProdServ from './components/registerProdServ';
import DatosMedico from './components/DatosMedico';
import PerfilMedico from './components/PerfilMedico'
import Publicacion from './components/Publicacion';
import ArticulosMedico from './components/ArticulosMedico';
import Ayudar from './components/ayudar';

const Routes = () => (
  <BrowserRouter>
  {/* <SideNavBar /> */}
    <main className="container">
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/coinsults" component={Coinsults} />
        <Route path="/guardados" component={Guardados} />
        <Route path="/registerMed" component={RegisterMedico} />
        <Route path="/registerProdServ" component={RegisterProdServ} />
        <Route path="/datosmedico" component={DatosMedico} />
        <Route path="/perfilmedico" component={PerfilMedico} />
        <Route path="/nuevapublicacion" component={Publicacion} />
        <Route path="/articulosmedico" component={ArticulosMedico} />
        <Route path="/ayudar" component={Ayudar} />

      </Switch>
    </main>
  </BrowserRouter>
);

export default Routes;