import { useState } from "react";
import "./Menu.css"


function Dropdown({ operations, departement }) {

  const [isActive, setIsActive] = useState(false); // etat: voir/masquer la liste des operations
  const [selected, setSelected] = useState("CHOOSE ONE"); // etat: pour voir l'operation choisie

  return (
    <div className="container">
      <h1 style={{textAlign:'left',margin:'auto auto 4% 24%'}}>{departement}</h1>
      <div className="dropdown" style={{ margin: "10px auto 0px 200px" }}>
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {selected}
        </div>
        {isActive && (              // si l'etat de la liste est active alors on voi la liste, si non on la masque
          <div
            className="dropdown-content"
            style={{ width: "100%", marginTop: "20px" }}
          >
            {operations.map((operation) => {
              return (
                <div onClick={(e) => {
                      setSelected(operation); //operation choisie
                      setIsActive(!isActive); // masquer la liste
                      window.location=`/${operation}`
                     }}
                     className="dropdown-item">
                      {operation}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
export default Dropdown;
