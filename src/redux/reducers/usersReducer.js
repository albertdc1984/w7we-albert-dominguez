import { actionsTypes } from "../actions/actionsTypes";

export const usersReducer = (currentUsers = [], action = {}) => {
  let newUsers;

  switch (action.type) {
    case actionsTypes.loadUserlist:
      newUsers = [...action.users];
      break;
    case actionsTypes.loadUser:
      newUsers = { ...action.user };
      break;

    default:
      newUsers = [...currentUsers];
      break;
  }

  return newUsers;
};
