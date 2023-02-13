import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import "./Fiche.css";

export default function Fournisseur(state) {
  const [listeFournisseurs, setlisteFournisseurs] = useState([]);
  const [numero, setNumero] = useState(0);
  const [nom, setNom] = useState("");
  const [addresse, setAddresse] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");

  const[recherche,setRecherche]=useState('')

  const fournisseur = {
    NUMERO: numero,
    NOM: nom,
    // ADDRESSE: String,
    // MATRICULE: String,
    // TELEPHONE: Number,
    EMAIL: email,
  };
const [storage,setStorage]=useState( JSON.parse(localStorage.getItem("fournisseur")) ||[] )

  // useEffect(()=>{
  //   setlisteFournisseurs([...listeFournisseurs,fournisseur])
  // },[])

  return (
    <div>
      <Navbar />
      <div className="containerInput">
        <div className="input-container">
          <input
            type="text"
            placeholder="Numero"
            onChange={(e) => {
              setNumero(e.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Nom"
            onChange={(e) => {
              setNom(e.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="input-container">
          <input
            type="text"
            placeholder="searche ..."
            onChange={(e) => {
              setRecherche(e.target.value);
            }}
          />
        </div>
      <button
        id="startButton"
         onClick={(e) => {
           var x=storage;
           x=[...listeFournisseurs,fournisseur];
           setlisteFournisseurs(x);
          localStorage.setItem('fournisseur',JSON.stringify(listeFournisseurs))
        }}
      >
        AJOUTER
      </button>
      
        {listeFournisseurs
        .filter((item)=>item.NOM.includes(recherche))
        .map((element) => {
          return(
          <div >
          <h3>Numero : {element.NUMERO}</h3>
          <h3>Nom : {element.NOM}</h3>
          <h3>Email : {element.EMAIL}</h3>
          </div>
          )
          
        })}
      

      <Footer />
    </div>
  );
}
