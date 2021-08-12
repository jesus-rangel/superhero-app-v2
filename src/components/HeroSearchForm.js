import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const HeroSearchForm = (props) => {
  const [heroName, setHeroName] = useState("");
  const dispatch = useDispatch();

  const handleHeroSearch = (e) => {
    e.preventDefault();
    axios.get(`/api/10158584425538406/search/${heroName}`).then((res) => {
      if (res.data.error) {
        dispatch({ type: "SET_ERROR", error: res.data.error });
      } else {
        dispatch({ type: "SET_RESULTS", results: res.data.results });
        console.log(res.data.results);
      }
    });
  };

  return (
    <div>
      <form className="d-flex">
        <input
          type="text"
          className="form-control my-1"
          value={heroName}
          onChange={(e) => setHeroName(e.target.value)}
          placeholder="Search for your character"
        />
        <button onClick={handleHeroSearch} className="btn btn-secondary ml-1">
          Search
        </button>
      </form>
    </div>
  );
};

export default HeroSearchForm;
