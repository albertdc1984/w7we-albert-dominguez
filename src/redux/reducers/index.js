import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  user: usersReducer,
});

export default rootReducer;
