import firebase from "firebase";
import { AUTH_ERROR, AUTH_LOADING, LOGIN, LOGOUT } from "../types";

export const loginUser = (email, password) => dispatch => {
  dispatch({ type: AUTH_LOADING, payload: true });
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      dispatch({ type: AUTH_ERROR, payload: "Invalid Credentials" });
    });
};

export const authListener = () => dispatch =>
  firebase.auth().onAuthStateChanged(user => {
    if (user) dispatch({ type: LOGIN, payload: user });
    else dispatch(logoutUser());
  });

export const logoutUser = () => dispatch => {
  firebase.auth().signOut();
  dispatch({ type: LOGOUT });
};
