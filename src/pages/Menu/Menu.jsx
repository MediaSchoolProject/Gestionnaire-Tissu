import './Menu.css';
import React,{useState} from "react";
import Dropdown from './Dropdown';


export default function App() {
  
  const [selected,setSelected]=useState('');

//     -----     DEPARTEMENTS   -----

  const IMPORT ='IMPORT'
  const Import = ["PLANNING IMPORTS","FACTURE","BON DE LIVRAISON" ,"FICHE TECHNIQUE MATIERE","FICHE INTERNE MATIERE","STOCK"];
  
  const MAGASIN='MAGASIN'
  const Magasin=['STOCK',"PLACEMENT","INVENTAIRE"]

  const FABRICATION_ET_EXPORT='FABRICATION ET EXPORT'
  const FabricationEtExport=["PLANNING EXPORTS",'FICHE PRODUIT',"COMMANDE","ATELIERS ET RENDEMENT","METHODE"]

  const FACTURATION='FACTURATION'
  const Facturation=['CLIENTS',"COMMANDE","FICHE PRODUIT","FICHE INTERNE MATIERE"]

  return (
    <div>
    <Dropdown setSelected={setSelected} operations={Import} departement={IMPORT}/>
    <Dropdown setSelected={setSelected} operations={Magasin} departement={MAGASIN}/>
    <Dropdown setSelected={setSelected} operations={FabricationEtExport} departement={FABRICATION_ET_EXPORT}/>
    <Dropdown setSelected={setSelected} operations={Facturation} departement={FACTURATION}/>
    </div>
  );
}


