import { SIGNIN_SUCCESS, SIGNOUT_SUCCESS, ADD_USER_DETAILS } from "./types";
import firebase from "../../config/fire";

export const signInAction = user => {
  return {
    type: SIGNIN_SUCCESS,
    payload: user
  };
};
export const signOutAction = () => {
  return {
    type: SIGNOUT_SUCCESS
  };
};

// ADD DETAILS
export const addUserDetailsAction = data => {
  return {
    type: ADD_USER_DETAILS,
    payload: data
  };
};

export const signOutUser = () => {
  firebase
    .auth()
    .signOut()
    .then()
    .catch(error => {
      console.error(error.message);
      alert(error.message);
    });
};
