import React from "react";
import { useSelector, useDispatch } from "react-redux";

const HeroShowcase = () => {
  const dispatch = useDispatch();

  const results = useSelector((state) => state.results);

  const error = useSelector((state) => state.error);

  const handleAddToTeam = (result) => {
    dispatch({ type: "ADD_HERO_TO_TEAM", hero: result });
  };
  return (
    <div>
      <div className={`${!error ? "hide" : ""} mt-5`}>
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
                    {result.name} ({result.biography["full-name"]})
                  </h3>
                </div>
                {/* Hero Card */}
                <div className="card-body row">
                  {/* Image Column */}
                  <div className="col-sm-6">
                    <img src={result.image.url} className="hero-img"></img>
                  </div>
                  {/* Hero Data Column */}
                  <div className="col-sm-6">
                    <p
                      className={
                        result.biography.alignment === "good"
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      <span className="lead">Alignment: </span>
                      {result.biography.alignment}
                    </p>
                    <p>
                      <span className="lead">Place of birth:</span>{" "}
                      {result.biography["place-of-birth"].length > 2
                        ? result.biography["place-of-birth"]
                        : "Unknown"}
                    </p>
                    <p>
                      <span className="lead">Height:</span>{" "}
                      {result.appearance.height[0]}
                    </p>
                    <p>
                      <span className="lead">Weight:</span>{" "}
                      {result.appearance.weight[0]}
                    </p>
                    <p>
                      <span className="lead">PowerStats</span>
                      <br></br>
                      Intelligence:{" "}
                      {result.powerstats.intelligence === "null"
                        ? "Unknown"
                        : result.powerstats.intelligence}
                      <br></br>
                      Strength:{" "}
                      {result.powerstats.strength === "null"
                        ? "Unknown"
                        : result.powerstats.strength}
                      <br></br>
                      Speed:{" "}
                      {result.powerstats.speed === "null"
                        ? "Unknown"
                        : result.powerstats.speed}
                      <br></br>
                      Durability:{" "}
                      {result.powerstats.durability === "null"
                        ? "Unknown"
                        : result.powerstats.durability}
                      <br></br>
                      Power:{" "}
                      {result.powerstats.power === "null"
                        ? "Unknown"
                        : result.powerstats.power}
                      <br></br>
                      Combat:{" "}
                      {result.powerstats.combat === "null"
                        ? "Unknown"
                        : result.powerstats.combat}
                    </p>
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
    </div>
  );
};

export default HeroShowcase;
