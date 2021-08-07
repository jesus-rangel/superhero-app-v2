import { setLocal, getLocal } from "./localStorage";

const initialState = {
  error: null,
  results: [],
  team: getLocal("superTeam-team", { heros: [], goodguys: 0, badguys: 0 }),
  userIsSearching: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_RESULTS":
      state.error = null;
      state.results = action.results;
      state.userIsSearching = true;
      return state;
    case "SET_ERROR":
      state.error = action.error;
      state.userIsSearching = true;
      return state;
    case "ADD_HERO_TO_TEAM":
      state.team.heros = [...state.team.heros, action.hero];
      if (action.hero.biography.alignment === "bad") {
        state.team.badguys++;
      } else {
        state.team.goodguys++;
      }
      state.team = Object.assign({}, state.team);
      setLocal("superTeam-team", state.team);
      return Object.assign({}, state);
    case "REMOVE_HERO_FROM_TEAM":
      state.team.heros = state.team.heros.filter(
        (hero) => hero.id !== action.id
      );
      return state;
    case "VIEW_TEAM":
      state.userIsSearching = false;
      return state;
  }

  return state;
}
