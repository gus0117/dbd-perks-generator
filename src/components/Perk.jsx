import React from "react";
import "../styles/Perk.css";
const Perk = ({ perkName, description, owner, url }) => {
  return (
    <div className="perk-container">
      <img
        className="perk-img"
        src={`../../assets/perks/${url}.png`}
        alt={`${description} icon`}
      />
      <h4 className="perk-name">{perkName}</h4>
      <h4 className="perk-owner">{owner}</h4>
    </div>
  );
};

export default Perk;
