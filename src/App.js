import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Menu from "./components/pages/Menu/Menu";
import Fournisseur from "./components/pages/Fiches/Fournisseur";
import Matiere from "./components/pages/Fiches/Matiere";
import Produit from "./components/pages/Fiches/Produit";
import Commande from "./components/pages/Fiches/Commande";
import Facture from "./components/pages/Fiches/Facture";

import Client from "./components/pages/Fiches/Client";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const [language, setLanguage]=useState('En')
  const [listeFournisseurs,setListeFournisseurs]=([])
  const [listMatieres,setListeMatieres]=useState([])
  const [listeProduits,setListeProduits]=useState([])
  const [listeCommandes,setListeCommandes]=useState([])
  const [listeClients,setListeClients]=useState([])

  return (
    <>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="Login" element={<Login />} />
        <Route exact path="Menu" element={<Menu />} />
        <Route exact path="MATIERE" element={<Matiere />} />
        <Route exact path="FOURNISSEUR" element={<Fournisseur state={listeFournisseurs}/>} />
        {/* <Route exact path="PRODUIT" element={<Produit/>} />
        <Route exact path="COMMANDE" element={<Commande/>} />
        <Route exact path="CLIENT" element={<Client />} />
        <Route exact path="FACTURE" element={<Facture />} /> */}
      </Routes>
      
    </>
  );
}

export default App;
