import { legacy_createStore } from "redux";
import articlesReducer from "./Reducers";

const store = legacy_createStore(articlesReducer);

export default store ;