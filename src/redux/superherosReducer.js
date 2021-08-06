const initialState = {
  error: null,
  results: [],
  team: { heros: [], goodguys: 0, badguys: 0 },
  isSearching: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_RESULTS":
      state.error = null;
      state.results = action.results;
      state.isSearching = true;
      return state;
    case "SET_ERROR":
      state.error = action.error;
      state.isSearching = true;
      return state;
    case "ADD_HERO_TO_TEAM":
      state.team.heros = [...state.team.heros, action.hero];
      if (action.hero.biography.alignment === "bad") {
        state.team.badguys++;
      } else {
        state.team.goodguys++;
      }
      state.team = Object.assign({}, state.team);
      return Object.assign({}, state);
    case "VIEW_TEAM":
      state.isSearching = false;
      return state;
  }

  return state;
}
