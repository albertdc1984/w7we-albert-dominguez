import { actionTypes } from "../actions/actionTypes";

export const usersReducer = (currentUsers = [], action = {}) => {
  let newUsers;

  switch (action.type) {
    case actionTypes.loadUserlist:
      newUsers = [...action.users];
      break;
    case actionTypes.loadOneRobot:
      newUsers = { ...action.user };
      break;

    default:
      newUsers = [...currentUsers];
      break;
  }

  return newUsers;
};
