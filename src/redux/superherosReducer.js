const initialState = {
  error: null,
  results: [],
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
  }

  return state;
}
