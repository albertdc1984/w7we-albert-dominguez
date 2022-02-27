import jwtDecode from "jwt-decode";
import {
  loginAction,
  loadUsersAction,
  loadUserAction,
} from "../actions/actionsCreator";

export const loadUsersThunk = async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}`);
  const users = await response.json();
  if (!response.ok) return;
  dispatch(loadUsersAction(users.users));
};
export const loadOneUserThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`);
  const user = await response.json();

  dispatch(loadUserAction(user));
};

export const loginThunk =
  ({ user }) =>
  async (dispatch) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const token = await response.json();
      const { id, username } = await jwtDecode(token.token);
      localStorage.setItem("UserToken", token.token);
      dispatch(loginAction({ id, username, token: token.token }));
    }
  };

export const newUserThunk =
  ({ user }) =>
  async (dispatch) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const token = await response.json();
      const { id, username } = await jwtDecode(token.token);
      localStorage.setItem("UserToken", token.token);
      dispatch(loginAction({ id, username, token: token.token }));
    }
  };
