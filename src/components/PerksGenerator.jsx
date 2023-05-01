import React, { useState } from "react";
import PlayersForm from "./PlayersForm";
import Player from "./Player";

const PerksGenerator = () => {

  const [player, setPlayer] = useState();

  const addPlayer = (newPlayer) => {
    setPlayer(newPlayer);
  };
  return (
    <>
      <PlayersForm onSubmit={addPlayer} />
      <div className="players-list-container">
        { player ? 
            <Player 
              playerName={player.playerName}
              firstPerk={player.firstPerk}
              secondPerk={player.secondPerk}
              thirdPerk={player.thirdPerk}
              fourthPerk={player.fourthPerk}
            />
          : null
        }
        
      </div>
    </>
  );
};

export default PerksGenerator;
