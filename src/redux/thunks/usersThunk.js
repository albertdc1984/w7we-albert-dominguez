import jwtDecode from "jwt-decode";
import {
  loginAction,
  loadUsersAction,
  loadUserAction,
  newUserAction,
} from "../actions/actionsCreator";

export const loadUsersThunk = async (dispatch) => {
  const token = localStorage.getItem("UserToken");
  const response = await fetch(`https://xarxasocial84.herokuapp.com/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const users = await response.json();
  if (!response.ok) return;
  dispatch(loadUsersAction(users.users));
};
export const loadOneUserThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `https://xarxasocial84.herokuapp.com/users/${id}`
  );
  const user = await response.json();

  dispatch(loadUserAction(user));
};

export const loginThunk = (user) => async (dispatch) => {
  const response = await fetch(`https://xarxasocial84.herokuapp.com/login`, {
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

export const newUserThunk = (user) => async (dispatch) => {
  console.log(user.append);
  const response = await fetch("https://xarxasocial84.herokuapp.com/signin", {
    method: "POST",

    body: user,
  });
  const newUser = response.json();
  dispatch(newUserAction(newUser));
  /*   if (response.ok) {
    const token = await response.json();
    const { id, username } = await jwtDecode(token.token);
    localStorage.setItem("UserToken", token.token);
    dispatch(loginAction({ id, username, token: token.token }));
  } */
};
