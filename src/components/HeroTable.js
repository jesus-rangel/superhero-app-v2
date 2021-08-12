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
            <th className="text-center">Intelligence</th>
            <td>{team.intelligence}</td>
          </tr>
          <tr>
            <th className="text-center">Strength</th>
            <td>{team.strength}</td>
          </tr>
          <tr>
            <th className="text-center">Speed</th>
            <td>{team.speed}</td>
          </tr>
          <tr>
            <th className="text-center">Durability</th>
            <td>{team.durability}</td>
          </tr>
          <tr>
            <th className="text-center">Power</th>
            <td>{team.power}</td>
          </tr>
          <tr>
            <th className="text-center">Combat</th>
            <td>{team.combat}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HeroTable;
