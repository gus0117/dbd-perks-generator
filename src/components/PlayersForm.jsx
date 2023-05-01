import React, { useState } from "react";
import "../styles/PlayersForm.css";
import survPerks from "../data/perksData.js";
import { generarId } from "../utils/utils";

const PlayersForm = (props) => {
  const [playerNameInput, setPlayerNameInput] = useState("Player")

  //Genera una lista de 4 numeros aleatorios no repetidos
  const uniqueRandomListGenerator = (range, size) => {
    let list = [];
    let i = 0;
    let rp = 0;
    let isEqual = false;
    while (i < size) {
      rp = Math.floor(Math.random() * range);
      list.map(e => {
        if(e === rp){
          isEqual = true;
        }
      });
      if(isEqual){
        isEqual = false;
      }
      else{
        list.push(rp);
        i++;
      }
    }
    return list;
  };

  const updateFormData = (event) =>
    setPlayerNameInput(event.target.value);

  const sendFormData = (event) => {
    event.preventDefault();
    let perksID = uniqueRandomListGenerator(16, 4);
    const newPlayer = {
      id: generarId(),
      playerName: playerNameInput,
      firstPerk: {
        perkName: survPerks[perksID[0]].perkName,
        description: survPerks[perksID[0]].description,
        owner: survPerks[perksID[0]].owner,
        url: survPerks[perksID[0]].url
      },
      secondPerk: {
        perkName: survPerks[perksID[1]].perkName,
        description: survPerks[perksID[1]].description,
        owner: survPerks[perksID[1]].owner,
        url: survPerks[perksID[1]].url
      },
      thirdPerk: {
        perkName: survPerks[perksID[2]].perkName,
        description: survPerks[perksID[2]].description,
        owner: survPerks[perksID[2]].owner,
        url: survPerks[perksID[2]].url
      },
      fourthPerk: {
        perkName: survPerks[perksID[3]].perkName,
        description: survPerks[perksID[3]].description,
        owner: survPerks[perksID[3]].owner,
        url: survPerks[perksID[3]].url
      }
    }
    props.onSubmit(newPlayer);
  };


  return (
    <div className="form-container">
      <form className="players-form" onSubmit={sendFormData}>
        <input
          className="player-name"
          type="text"
          onChange={updateFormData}
          name="playerName"
          placeholder="Nombre del Jugador"
        />
        <button className="btn-generator">Generar</button>
      </form>
    </div>
  );
};

export default PlayersForm;
