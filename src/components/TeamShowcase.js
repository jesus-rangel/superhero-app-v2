import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const TeamShowcase = () => {
  const team = useSelector((state) => state.team);
  console.log("team:", team);
  return (
    <div>
      <h3 className="text-center mt-5">Welcome to the SuperTeam creator</h3>
      <h4 className="text-center">
        Use the search bar above to pick three villains and three heroes
      </h4>
      <h4 className="text-center mt-3">Your Team:</h4>
      <p>Goodguys: {team.goodguys}</p>
      <p>Badguys: {team.badguys}</p>
      {team.heros.map((hero, index) => {
        return <p key={index}>{hero.name}</p>;
      })}
    </div>
  );
};

export default TeamShowcase;
