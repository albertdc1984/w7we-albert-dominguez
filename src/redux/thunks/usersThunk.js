import { loadUserAction, loadUsersAction } from "../actions/actionsTypes";

export const loadRobotsThunk = async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}`);
  const users = await response.json();
  if (!response.ok) return;
  dispatch(loadUsersAction(users.users));
};
export const loadOneRobotThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/robots/${id}`);
  const robot = await response.json();

  dispatch(loadUserAction(robot));
};
