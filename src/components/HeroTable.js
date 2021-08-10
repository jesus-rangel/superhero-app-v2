import React from "react";
import { useSelector } from "react-redux";

const HeroTable = () => {
  const team = useSelector((state) => state.team);

  return (
    <div className="container mt-3">
      <table className="table hero-table mx-auto">
        <thead className="thead-dark">
          <th colspan="2">Your Team's Collective Stats</th>
        </thead>
        <tbody>
          <tr>
            <th>Intelligence</th>
            <td>{team.teamIntelligence}</td>
          </tr>
          <tr>
            <th>Strength</th>
            <td>{team.teamStrength}</td>
          </tr>
          <tr>
            <th>Speed</th>
            <td>{team.teamSpeed}</td>
          </tr>
          <tr>
            <th>Durability</th>
            <td>{team.teamDurability}</td>
          </tr>
          <tr>
            <th>Power</th>
            <td>{team.teamPower}</td>
          </tr>
          <tr>
            <th>Combat</th>
            <td>{team.teamCombat}</td>
          </tr>
          <tr>
            {/*<th>Height (Average)</th>
              <td>Number</td>
            </tr>
            <tr>
              <th>Weight (Average)</th>
              <td>Number</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HeroTable;
