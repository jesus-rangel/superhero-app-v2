import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const TeamShowcase = () => {
  const team = useSelector((state) => state.team);
  console.log("team:", team);
  return (
    <div>
      {team.heros.map((hero, index) => {
        return <p key={index}>{hero.name}</p>;
      })}
    </div>
  );
};

export default TeamShowcase;
