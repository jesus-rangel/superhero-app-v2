import { setLocal, getLocal } from "./localStorage";
import { calculateTeamIntelligence } from "../helpers/powerstatsCalculators";

const initialState = {
  error: null,
  results: [],
  team: getLocal("superTeam-team", {
    heroes: [],
    goodguys: 0,
    badguys: 0,
    teamIntelligence: 0,
    teamStrength: 0,
    teamSpeed: 0,
    teamDurability: 0,
    teamPower: 0,
    teamCombat: 0,
    averageHeight: 0,
  }),
  userIsSearching: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_RESULTS":
      state.error = null;
      state.results = action.results;
      state.userIsSearching = true;
      return Object.assign({}, state);

    case "SET_ERROR":
      state.error = action.error;
      state.userIsSearching = true;
      return Object.assign({}, state);

    case "ADD_HERO_TO_TEAM":
      state.team.heroes = [...state.team.heroes, action.hero];
      if (action.hero.biography.alignment === "bad") {
        state.team.badguys++;
      } else {
        state.team.goodguys++;
      }

      /* POWERSTATS CALCULATION */
      state.team.teamIntelligence = state.team.heroes.reduce(
        (teamIntelligence, hero) => {
          return teamIntelligence + parseInt(hero.powerstats.intelligence, 10);
        },
        0
      );
      state.team.teamStrength = state.team.heroes.reduce(
        (teamStrength, hero) => {
          return teamStrength + parseInt(hero.powerstats.strength, 10);
        },
        0
      );
      state.team.teamSpeed = state.team.heroes.reduce((teamSpeed, hero) => {
        return teamSpeed + parseInt(hero.powerstats.speed, 10);
      }, 0);
      state.team.teamDurability = state.team.heroes.reduce(
        (teamDurability, hero) => {
          return teamDurability + parseInt(hero.powerstats.durability, 10);
        },
        0
      );
      state.team.teamPower = state.team.heroes.reduce((teamPower, hero) => {
        return teamPower + parseInt(hero.powerstats.power, 10);
      }, 0);
      state.team.teamCombat = state.team.heroes.reduce((teamCombat, hero) => {
        return teamCombat + parseInt(hero.powerstats.combat, 10);
      }, 0);

      /* Weight and Height Average */
      /* let regexp = /^(\d*)\s.*$/;

      const heightCalc = state.team.heroes.reduce((averageHeight, hero) => {
        const result = regexp.exec(hero.appearance.height[1]);
        if (result != null) {
          return averageHeight + parseInt(result[1], 10);
        } else {
          return 0;
        }
      });

      state.team.averageHeight = heightCalc / state.team.heroes.length; */

      state.team = Object.assign({}, state.team);
      setLocal("superTeam-team", state.team);
      return Object.assign({}, state);

    case "REMOVE_HERO_FROM_TEAM":
      state.team.heroes = state.team.heroes.filter(
        (hero) => hero.id !== action.hero.id
      );
      if (action.hero.biography.alignment === "bad") {
        state.team.badguys--;
      } else {
        state.team.goodguys--;
      }

      /* POWERSTATS CALCULATION */
      state.team.teamIntelligence = state.team.heroes.reduce(
        (teamIntelligence, hero) => {
          return teamIntelligence + parseInt(hero.powerstats.intelligence, 10);
        },
        0
      );
      state.team.teamStrength = state.team.heroes.reduce(
        (teamStrength, hero) => {
          return teamStrength + parseInt(hero.powerstats.strength, 10);
        },
        0
      );
      state.team.teamSpeed = state.team.heroes.reduce((teamSpeed, hero) => {
        return teamSpeed + parseInt(hero.powerstats.speed, 10);
      }, 0);
      state.team.teamDurability = state.team.heroes.reduce(
        (teamDurability, hero) => {
          return teamDurability + parseInt(hero.powerstats.durability, 10);
        },
        0
      );
      state.team.teamPower = state.team.heroes.reduce((teamPower, hero) => {
        return teamPower + parseInt(hero.powerstats.power, 10);
      }, 0);
      state.team.teamCombat = state.team.heroes.reduce((teamCombat, hero) => {
        return teamCombat + parseInt(hero.powerstats.combat, 10);
      }, 0);

      state.team = Object.assign({}, state.team);
      setLocal("superTeam-team", state.team);
      return Object.assign({}, state);

    case "VIEW_TEAM":
      state.userIsSearching = false;
      return Object.assign({}, state);
  }

  return state;
}
