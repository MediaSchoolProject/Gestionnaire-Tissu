import React from "react";

export default function Menu() {
  return (
    <>
      <div className="container">
        <h3> IMPORT</h3>
        <select>
          <option value="">LISTE COLISAGE ET FACTURE IMPORT</option>
          <option value="">FICHE TECHNIQUE MATIERE</option>
          <option value="">CREATION DE FICHE MATIERE</option>
          <option value="">INTRODUIRE DU MATIERE EN STOCK</option>
          <option value="">AUTRES</option>
        </select>
      </div>
      <div className="container">
        <h3> STOCK</h3>
        <select>
          <option value="">CONSULTER STOCK</option>
          <option value="">CONSULTER EMPLACEMENTS</option>
          <option value="">PLACEMENT DU MATIERE</option>
          <option value="">SORTIE POUR PRODUCTION</option>
          <option value="">SORTIE POUR TRANSFERT</option>
          <option value="">INVENTAIRE</option>
          <option value="">AUTRES MODIFICATIONS SUR STOCK</option>
        </select>
      </div>
      <div className="container">
        <h3>FABRICATION ET EXPORT</h3>
        <select>
          <option value="">CONSULTER FICHE TECHNIQUE PRODUIT</option>
          <option value="">CREATION COMMANDE</option>
          <option value="">SUIVIE DE COMMANDE</option>
          <option value="">METHODE</option>
          <option value="">ATELIERS ET RENDEMENT</option>
          <option value="">DOUANES</option>
          <option value="">AUTRES</option>
        </select>
      </div>
      <div className="container">
        <h3>FACTURATION ET SOUS-TRAITANTS</h3>
        <select>
          <option value="">CLIENTS</option>
          <option value="">FICHE TECHNIQUE PRODUIT</option>
          <option value="">FICHE MATIERE</option>
          <option value="">SUIVIE DE COMMANDE</option>
          <option value="">AUTRES</option>
        </select>
      </div>
    </>
  );
}
