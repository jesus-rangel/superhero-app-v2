import { createStore } from "redux";
import superheroesReducer from "./superheroesReducer";

export default createStore(
  superheroesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
