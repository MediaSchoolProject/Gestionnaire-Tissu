import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import Footer from '../../footer/Footer'
import "./Fiche.css";

export default function Matiere() {
 

  return (
    <>
      <Navbar />

      <div className="container">
        <form className="d-flex">
          <input id="rechercher"
            className="form-control me-2"
            type="search"
            placeholder="Recherche une matière (par nom)"
            aria-label="Search"/>
          <button id="ajouter" className="btn btn-outline-info" type="submit">
            AJOUTER UNE MATIERE
          </button>
        </form>
       
      </div>
      <Footer/>
    </>
  );
}


// import { Dropdown } from "bootstrap";
// import { React, useEffect, useState } from "react";
// import Navbar from "../../navbar/Navbar";

// export default function Matiere() {

//  // les caracteristiques de differents matieres primaires entree en state
//   const [categorie, setCategorie] = useState("TISSU / BOUTON / VIGNETTE ...");
//   const [fournisseur, setFournisseur] = useState("NOM DU FOURNISSEUR");
//   const [composition, setComposition] = useState("METALIQUE / PLASTIQUE / POLYESTER/COTON...");
//   const [couleur, setCouleur] = useState("COULEUR");
//   const [dimensions, setDimensions] = useState("en cm");
//   const [poids, setPoids] = useState("en g");
//   const [reference, setReference] = useState("xx xxxx xxxx xxxxxx xxxx ");
  
//   // L'objet de la matiere primaire 
//   const ficheMatiere = {
//     FOURNISSEUR: fournisseur,
//     CATEGORIE: categorie,
//     COMPOSITION: composition,
//     COULEUR: couleur,
//     DIMENSIONS: dimensions,
//     POIDS: poids,
//     REFERENCE: reference,
//   };
  
  // const [data, setData] = useState(
  //   JSON.parse(localStorage.getItem("Fiche")) || []
  // );

 


  // useEffect(() => {
  //   localStorage.setItem("Fiche", JSON.stringify(data));
  // }, [data]);

//   return (
//     <>
//     <Navbar/>
    
//     </>
//   );
// }

{/* <input
        type="text"
        placeholder="noter le type de la matiere"
        onChange={(e) => {
          setCategorie(e.target.value);
        }}
      /> */}
//       <input
//         type="number"
//         placeholder="noter la reference de la matiere"
//         onChange={(e) => {
//           setNumero(e.target.value);
//         }}
//       />
//       <Button
//         onClick={() => {
//           setData([...data, fiche]);
//         }}
//       >
//         {" "}
//         envoye
//       </Button>
//       <div>
//         <h2> liste des articles</h2>
//         {data.map((e) => (
//           <div>
//             <p> <strong> Categorie :</strong>{e.categorie}</p>
//             <p> <strong> Numero :</strong>{e.num}</p>
//           </div>
//         ))}
//       </div>
