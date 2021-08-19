import React, { useCallback } from "react";
import { useSelector } from "react-redux";

const HeroTable = () => {
  const team = useSelector((state) => state.team);

  const teamArray = [
    { label: "Intelligence", value: team.intelligence },
    { label: "Strength", value: team.strength },
    { label: "Speed", value: team.speed },
    { label: "Durability", value: team.durability },
    { label: "Power", value: team.power },
    { label: "Combat", value: team.combat },
  ];

  /* Compare function from Stack Overflow to organize highest stat */
  const compare = useCallback((a, b) => {
    if (a.value > b.value) {
      return -1;
    }
    if (a.value < b.value) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });

  return (
    <div className="container mt-3">
      <table className="table hero-table mx-auto">
        <thead className="thead-dark">
          <th colspan="2">Your Team's Collective Stats</th>
        </thead>
        <tbody>
          {teamArray.sort(compare).map((stat, index) => {
            return (
              <tr key={index}>
                <th className="text-center">{stat.label}</th>
                <td>{stat.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HeroTable;
