import * as api from "api/rest";
import { getAuthToken, getUserId } from "./selectors";

export const LOGIN = "LOGIN";

export const storeUser = (loginData) => ({
  type: LOGIN,
  payload: loginData,
});

export const login = (username, password) => {
  return async (dispatch) => {
    const response = await api.login(username, password);
    dispatch(storeUser(response));
  };
};

export const authenticatedRequest = (fn, ...params) => {
  return (dispatch, getState) => {
    const token = getAuthToken(getState());
    return fn(...params, token);
  };
};

export const requestWithUserId = (fn, ...params) => {
  return (dispatch, getState) => {
    const token = getAuthToken(getState());
    const userId = getUserId(getState());
    return fn(...params, token, userId);
  };
};
