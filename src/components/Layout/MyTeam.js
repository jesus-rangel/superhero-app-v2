import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { alignmentColor } from "../../helpers/helperFunctions";

import HeroTable from "./HeroTable";
import Powerstats from "./Powerstats";

const MyTeam = () => {
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
        {team.heroes.length === 0 ? "" : "Your Team:"}
      </h4>
      <div className="row text-center">
        {team.heroes.map((hero, index) => (
          <div
            key={index}
            className="card rounded shadow col-md-5 offset-md-1 mb-3 p-3"
          >
            <div className="row">
              <div className="col">
                <p>
                  {hero.name}{" "}
                  {hero.biography["full-name"] &&
                    `(${hero.biography["full-name"]})`}
                </p>
                <p className={alignmentColor(hero.biography.alignment)}>
                  Alignment: {hero.biography.alignment}
                </p>
                <p>Height: {hero.appearance.height[1]}</p>
                <p>Weight: {hero.appearance.weight[1]}</p>
                <p>
                  <Powerstats hero={hero} />
                </p>
              </div>
              <div className="col">
                <img
                  height="200px"
                  src={hero.image.url}
                  className="mb-4"
                  alt=""
                ></img>
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
        <HeroTable />
      </div>
    </div>
  );
};

export default MyTeam;
