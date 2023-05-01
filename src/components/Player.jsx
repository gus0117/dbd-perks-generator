import React from "react";
import Perk from "./Perk";
import "../styles/Player.css";

const Player = ({
  playerName,
  firstPerk,
  secondPerk,
  thirdPerk,
  fourthPerk
}) => {
  return (
    <div className="player-container">
      <h1 className="player-name">{playerName}</h1>
      <div className="perks-container">
        <Perk
          perkName={firstPerk.perkName}
          description={firstPerk.description}
          owner={firstPerk.owner}
          url={firstPerk.url}
        />
        <Perk
          perkName={secondPerk.perkName}
          description={secondPerk.description}
          owner={secondPerk.owner}
          url={secondPerk.url}
        />
        <Perk
          perkName={thirdPerk.perkName}
          description={thirdPerk.description}
          owner={thirdPerk.owner}
          url={thirdPerk.url}
        />
        <Perk
          perkName={fourthPerk.perkName}
          description={fourthPerk.description}
          owner={fourthPerk.owner}
          url={fourthPerk.url}
        />
      </div>
    </div>
  );
};

export default Player;
