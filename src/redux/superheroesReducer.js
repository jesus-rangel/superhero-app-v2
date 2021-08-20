import { setLocal, getLocal } from "../helpers/localStorage";
import { powerStatSum } from "../helpers/helperFunctions";

const initialState = {
  error: null,
  results: [], // "results" Refers to heroes returned from the search
  team: getLocal("superTeam-team", {
    heroes: [], // "heroes" Refers to the heroes already in the team
    goodguys: 0,
    badguys: 0,
    height: 0,
    weight: 0,
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  }),
  userIsSearching: false,
};

let heroHeight, heroWeight;

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_RESULTS": // Searching for a character
      state.error = null;
      state.results = action.results;
      state.userIsSearching = true;
      return Object.assign({}, state);

    case "SET_ERROR": // Getting an error from the hero API
      state.error = action.error;
      state.userIsSearching = true;
      return Object.assign({}, state);

    case "ADD_HERO_TO_TEAM":
      state.team.heroes = [...state.team.heroes, action.hero];
      if (action.hero.biography.alignment === "bad") {
        state.team.badguys++;
      } else if (action.hero.biography.alignment === "good") {
        state.team.goodguys++;
      }

      /* POWERSTATS SUM */
      state.team.intelligence = powerStatSum(state.team.heroes, "intelligence");
      state.team.strength = powerStatSum(state.team.heroes, "strength");
      state.team.speed = powerStatSum(state.team.heroes, "speed");
      state.team.durability = powerStatSum(state.team.heroes, "durability");
      state.team.power = powerStatSum(state.team.heroes, "power");
      state.team.combat = powerStatSum(state.team.heroes, "combat");

      /* Height and weight */
      heroHeight = +action.hero.appearance.height[1].match(/\d+/)[0];
      state.team.height += heroHeight;

      heroWeight = +action.hero.appearance.weight[1].match(/\d+/)[0];
      state.team.weight += heroWeight;

      state.team = Object.assign({}, state.team);
      setLocal("superTeam-team", state.team);
      return Object.assign({}, state);

    case "REMOVE_HERO_FROM_TEAM":
      state.team.heroes = state.team.heroes.filter(
        (hero) => hero.id !== action.hero.id
      );
      if (action.hero.biography.alignment === "bad") {
        state.team.badguys--;
      } else if (action.hero.biography.alignment === "good") {
        state.team.goodguys--;
      }

      /* POWERSTATS SUM */
      state.team.intelligence = powerStatSum(state.team.heroes, "intelligence");
      state.team.strength = powerStatSum(state.team.heroes, "strength");
      state.team.speed = powerStatSum(state.team.heroes, "speed");
      state.team.durability = powerStatSum(state.team.heroes, "durability");
      state.team.power = powerStatSum(state.team.heroes, "power");
      state.team.combat = powerStatSum(state.team.heroes, "combat");

      /* Height and weight */
      heroHeight = +action.hero.appearance.height[1].match(/\d+/)[0];
      state.team.height -= heroHeight;

      heroWeight = +action.hero.appearance.weight[1].match(/\d+/)[0];
      state.team.weight -= heroWeight;

      state.team = Object.assign({}, state.team);
      setLocal("superTeam-team", state.team);
      return Object.assign({}, state);

    case "VIEW_TEAM": // Returning to home screen where team is visible
      state.userIsSearching = false;
      return Object.assign({}, state);
  }

  return state;
}
