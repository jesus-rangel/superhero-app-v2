import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const TeamShowcase = () => {
  const team = useSelector((state) => state.team);
  console.log("team:", team);
  return (
    <div>
      <h3 className="text-center mt-4">Welcome to the SuperTeam creator</h3>
      <h4 className="text-center">
        Use the search bar above to pick three villains and three heroes
      </h4>
      <h4 className="text-center mt-3">Your Team:</h4>
      <div className="row text-center heroes-in-team">
        {team.heros.map((hero, index) => (
          <div
            key={index}
            className="card rounded shadow col-md-5 offset-md-1 mb-3 p-3"
          >
            <div className="row">
              <div className="col">
                <p>
                  {hero.name} ({hero.biography["full-name"]})
                </p>
                <p
                  className={
                    hero.biography.alignment === "good"
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  Alignment: {hero.biography.alignment}
                </p>
                <p>Height: {hero.appearance.height[0]}</p>
                <p>Weight: {hero.appearance.weight[0]}</p>
                <p>
                  Intelligence:{" "}
                  {hero.powerstats.intelligence === "null"
                    ? "Unknown"
                    : hero.powerstats.intelligence}
                  <br></br>
                  Strength:{" "}
                  {hero.powerstats.strength === "null"
                    ? "Unknown"
                    : hero.powerstats.strength}
                  <br></br>
                  Speed:{" "}
                  {hero.powerstats.speed === "null"
                    ? "Unknown"
                    : hero.powerstats.speed}
                  <br></br>
                  Durability:{" "}
                  {hero.powerstats.durability === "null"
                    ? "Unknown"
                    : hero.powerstats.durability}
                  <br></br>
                  Power:{" "}
                  {hero.powerstats.power === "null"
                    ? "Unknown"
                    : hero.powerstats.power}
                  <br></br>
                  Combat:{" "}
                  {hero.powerstats.combat === "null"
                    ? "Unknown"
                    : hero.powerstats.combat}
                </p>
              </div>
              <div className="col">
                <img height="200px" src={hero.image.url} className="mb-4"></img>
                <br></br>
                <button className="btn btn-danger">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamShowcase;
