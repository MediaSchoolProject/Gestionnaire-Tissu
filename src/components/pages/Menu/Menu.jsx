import React from "react";
import Navbar from "../../navbar/Navbar";
import Client from "../Fiches/Client";
import Dropdown from './DropDown';
import './Menu.css';




export default function Menu() {

 

//     -----     DEPARTEMENTS   -----

  const IMPORT ='IMPORT'
  const Import = ["FOURNISSEUR","FACTURE","BON DE LIVRAISON" ,"FICHE TECHNIQUE MATIERE","MATIERE","STOCK"];
  
  const MAGASIN='MAGASIN'
  const Magasin=['STOCK',"PLACEMENT","INVENTAIRE"]

  const FABRICATION_ET_EXPORT='FABRICATION ET EXPORT'
  const FabricationEtExport=["PLANNING EXPORTS",'FICHE PRODUIT',"COMMANDE","ATELIERS ET RENDEMENT","METHODE"]

  const FACTURATION='FACTURATION'
  const Facturation=['CLIENTS',"COMMANDE","FICHE PRODUIT","FICHE INTERNE MATIERE"]

  return (
    <div>
      <Navbar/>
    <Dropdown operations={Import} departement={IMPORT}/>
    {/* <Dropdown operations={Magasin} departement={MAGASIN}/> 
    <Dropdown operations={FabricationEtExport} departement={FABRICATION_ET_EXPORT}/>
    <Dropdown operations={Facturation} departement={FACTURATION}/> */}
    </div>
  );
}


