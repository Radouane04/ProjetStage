import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './home';
import HomeC from "./Client/home.jsx";
import DmCheque from "./Client/DmCheque.jsx";
import Reclamation from "./Client/Reclamation.jsx";
import HistoriqueOperations from "./Client/Compte.jsx";
import Carte from "./Client/Carte.jsx";
import Vir from "./Client/Vir.jsx";
import Rib from "./Client/Rib.jsx";
import HomeA from './admin/Home';
import Ajouter from './admin/Ajouter';
import ListeArticles from './admin/ListeArticles';
import DetailArticle from './admin/DetailArticle';
import ModifierArticles from './admin/modifierarticles';
import './admin/style.css'
import About from './about.js';
import Actualite from './Actualite.js';
import { Provider } from 'react-redux';
import store from './admin/Store';
import Historique from './admin/Historique.js';

const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Helmet>
        <title>BPM</title>
        <link rel="icon" href="/img/cheval.JPG" />
      </Helmet>
      <Routes> 
        {/* <Route element={<Layout />}> */}
          <Route index element={<Home/>} />
          <Route path="/client" element={<HomeC />} />
          <Route path="/about" element={<About />} />
          <Route path="/Actualite" element={<Actualite />} />
          <Route path="/client/Reclamation" element={<Reclamation />} />
          <Route path="/client/DmCheque" element={<DmCheque />} />
          <Route path="/client/Rib" element={<Rib />} />
          <Route path="/client/Compte" element={<HistoriqueOperations />} />
          <Route path="/client/Vir" element={<Vir />} />
          <Route path="/client/Carte" element={<Carte />} />
          <Route path='/Admin' element={<HomeA/>}/>
          <Route path='/Admin/Ajouter' element={<Ajouter/>}/>
          <Route path='/Admin/listArticles' element={<ListeArticles />}/>
          <Route path='/Admin/Historique' element={<Historique />}/>
          <Route path='/Admin/modifier/:id' element={<ModifierArticles/>}/>
          <Route path='/Admin/details/:id' element={<DetailArticle/>}/>
          {/* <Route path='/Admin/login' element={<Login/>}/> */}
          
            {/* </Route> */}
      </Routes>
    </BrowserRouter>
 </Provider>
  );
};

export default App;
