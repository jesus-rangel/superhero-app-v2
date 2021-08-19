import React from "react";
import { showPowerStat } from "../../helpers/helperFunctions";

function Powerstats(props) {
  return (
    <div>
      Intelligence: {showPowerStat(props.hero.powerstats.intelligence)}
      <br></br>
      Strength: {showPowerStat(props.hero.powerstats.strength)}
      <br></br>
      Speed: {showPowerStat(props.hero.powerstats.speed)}
      <br></br>
      Durability: {showPowerStat(props.hero.powerstats.durability)}
      <br></br>
      Power: {showPowerStat(props.hero.powerstats.power)}
      <br></br>
      Combat: {showPowerStat(props.hero.powerstats.combat)}
    </div>
  );
}

export default Powerstats;
