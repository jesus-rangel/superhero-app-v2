const initialState = {
  error: null,
  results: [],
  team: { heros: [] },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_RESULTS":
      state.error = null;
      state.results = action.results;
      return state;
    case "SET_ERROR":
      state.error = action.error;
      return state;
    case "ADD_HERO_TO_TEAM":
      state.team.heros = [...state.team.heros, action.hero];
      state.team = Object.assign({}, state.team);
      return Object.assign({}, state);
  }

  return state;
}
