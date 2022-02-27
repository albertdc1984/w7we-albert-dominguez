import { actionTypes } from "./actionTypes";

export const loadUsersAction = (users) => ({
  type: actionTypes.loadUserlist,
  users,
});

export const loadUserAction = (user) => ({
  type: actionTypes.loadUser,
  user,
});
