import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TeamShowcase = () => {
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team);

  const handleRemoveFromTeam = (hero) => {
    dispatch({ type: "REMOVE_HERO_FROM_TEAM", hero });
  };

  return (
    <div>
      <h3 className="text-center mt-4">Welcome to the SuperTeam creator</h3>
      <h4 className="text-center">
        Use the Navbar above to pick three villains and three heroes
      </h4>
      <h4 className="text-center mt-3">
        {team.heroes.length === 0
          ? "You have no characters selected"
          : "Your Team"}
      </h4>
      <div className="row text-center heroes-in-team">
        {team.heroes.map((hero, index) => (
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
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveFromTeam(hero)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="container">
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
      </div>
    </div>
  );
};

export default TeamShowcase;
