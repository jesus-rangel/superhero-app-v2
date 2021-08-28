import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { alignmentColor } from "../../helpers/helperFunctions";

import HeroTable from "./HeroTable";
import Powerstats from "./Powerstats";

import "./HeroSearch.css";

const HeroSearch = () => {
  const dispatch = useDispatch();

  const results = useSelector((state) => state.results);
  const team = useSelector((state) => state.team);

  const error = useSelector((state) => state.error);

  const handleAddToTeam = (result) => {
    if (team.heroes.find((hero) => hero.id === result.id)) {
      toast("This character is on your team already!");
      return;
    }

    if (result.biography.alignment === "bad" && team.badguys === 3) {
      toast("You can't have more than 3 bad guys!");
      return;
    }

    if (result.biography.alignment === "good" && team.goodguys === 3) {
      toast("You can't have more than 3 good guys!");
      return;
    }

    if (team.heroes.length === 6) {
      toast("You have reached the maximum of 6 characters!");
      return;
    }

    toast("Character added to your team!");
    dispatch({ type: "ADD_HERO_TO_TEAM", hero: result });
  };
  return (
    <div>
      {/* If error in search, display here */}
      <div className={`${!error ? "hide" : ""} mt-2`}>
        <h3 className="text-center">{error}</h3>
      </div>

      <div>
        {results.map((result) => {
          return (
            <div className="row justify-content-center" key={result.id}>
              <div
                className="card rounded shadow col mt-3 hero-card"
                key={result.id}
              >
                <div className="card-header text-center">
                  <h3>
                    {result.name}{" "}
                    {result.biography["full-name"] &&
                      `(${result.biography["full-name"]})`}
                  </h3>
                </div>
                <div className="card-body row">
                  <div className="col-sm-6">
                    <img
                      src={result.image.url}
                      className="hero-img"
                      alt=""
                    ></img>
                  </div>
                  <div className="col-sm-6">
                    <p className={alignmentColor(result.biography.alignment)}>
                      <span className="lead">Alignment: </span>
                      {result.biography.alignment}
                    </p>
                    <p>
                      <span className="lead">Place of birth:</span>{" "}
                      {result.biography["place-of-birth"].length > 1
                        ? result.biography["place-of-birth"]
                        : "Unknown"}
                    </p>
                    <p>
                      <span className="lead">Place of work:</span>{" "}
                      {result.work.base}
                    </p>
                    <div className="hero-stats">
                      <p className="hero-appearance">
                        <span className="lead">Appearance:</span>
                        <br></br>
                        Height: {result.appearance.height[1]}
                        <br></br>
                        Weight: {result.appearance.weight[1]}
                        <br></br>
                        Eye color: {result.appearance["eye-color"]}
                        <br></br>
                        Hair color: {result.appearance["hair-color"]}
                      </p>
                      <p className="hero-powerstats">
                        <span className="lead">PowerStats</span>
                        <br></br>
                        <Powerstats hero={result} />
                      </p>
                    </div>
                    <div className="text-center">
                      <button
                        className="btn btn-success"
                        onClick={() => handleAddToTeam(result)}
                      >
                        Add to Team
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <HeroTable />
    </div>
  );
};

export default HeroSearch;
