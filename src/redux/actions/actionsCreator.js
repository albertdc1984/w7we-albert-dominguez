import { actionsTypes } from "./actionsTypes";

export const loadUsersAction = (users) => ({
  type: actionsTypes.loadUserlist,
  users,
});

export const loadUserAction = (user) => ({
  type: actionsTypes.loadUser,
  user,
});
