import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import "./Fiche.css";

export default function Fournisseur(state) {

  const [show, setShow] = useState(true);

  const fournisseur = {
    NUMERO: Number,
    NOM: String,
    ADDRESSE: String,
    MATRICULE: String,
    TELEPHONE: Number,
    EMAIL: String,
  };



  // const ListeFournisseurs = (element) => {
  //   return;
  //   <>
  //     <div className="ListeElements">
  //       <div>{element.NUMERO}</div>
  //       <div>{element.NOM}</div>
  //       <div>{element.MATRICULE}</div>
  //       <div>{element.ADDRESSE}</div>
  //       <div>{element.TELEPHONE}</div>
  //       <div>{element.EMAIL}</div>
  //     </div>
  //   </>;
  // };

  return (
    <>
      <Navbar />

      <div className="container">
        <form>
          <button
            id="ajouter"
            className="btn btn-outline-info"
            type="submit"
            onClick={
              show && (
                <div>
                  <input
                    type="text"
                    placeholder="le nom du fournisseur"
                    onChange={(e) => {
                      fournisseur.NOM = e.target.value;
                    }}
                  />
                  <input
                    type="text"
                    placeholder="La matricule"
                    onChange={(e) => {
                      fournisseur.MATRICULE = e.target.value;
                    }}
                  />
                  <input
                    type="text"
                    placeholder="ADDRESSE"
                    onChange={(e) => {
                      fournisseur.ADDRESSE = e.target.value;
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Telephone"
                    onChange={(e) => {
                      fournisseur.TELEPHONE = e.target.value;
                    }}
                  />
                  <input
                    type="text"
                    placeholder="e-mail"
                    onChange={(e) => {
                      fournisseur.EMAIL = e.target.value;
                    }}
                  />
                  <button
                    onClick={(e) => {
                      setState=state.push(fournisseur);
                      setShow= !show;
                    }}
                  >
                    submit
                  </button>
                </div>
              )
            }
          >
            AJOUTER UN FOURNISSEUR
          </button>
          <input
            id="recherche"
            className="form-control me-2"
            type="search"
            placeholder="Recherche"
            aria-label="Search"
          />
        </form>
      </div>
      {/* {ListeFournisseurs(state)} */}
      <Footer />
    </>
  );
}
