import { useState } from "react";

function Dropdown({setSelected,operations,departement}) {
  const [isActive, setIsActive] = useState(false);
  

  return (
    <div className="dropdown" style={{margin:'250px auto 350px auto'}}>
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
      {departement}
      </div>
      {isActive && (
        <div className="dropdown-content"style={{width:'100%',marginTop:'20px'}}>
          {operations.map((option) => { return (<div onClick={(e) => setSelected(option)} className="dropdown-item">
              {option}
            </div>)}
            
          )}
        </div>
      )}
    </div>
  );
}
export default Dropdown;
