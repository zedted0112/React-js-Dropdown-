import React from "react";
import { useState } from "react";

function Dropdown(selected, setSelected) {
  const [isActive, setIsActive] = useState(false);
  const options = ["React", " Vue", " Angular", " TypeScript"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        Choose One
        <span > X </span>
      </div>

      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick = {(e) => {
                setIsActive(false);
                setSelected(option);

               
              }}
              className=" dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
