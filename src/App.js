import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import  Home  from './pages/Home';
import  Servicos from './pages/Servicos';
import  Contatos from './pages/Contatos';

import Header from  './componentes/Header';
import Footer from './componentes/Footer';

const Routes = () => {
  return (
    <BrowserRouter>

    <Header />
    
      <Route component={Home} path="/" exact={true} />
      <Route path='/servicos' component={Servicos} />
      <Route path='/contantos' component={Contatos} />
        
    <Footer />
    </BrowserRouter>
  )

}

export default Routes;