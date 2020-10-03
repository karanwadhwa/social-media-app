import firebase from "firebase";
import "firebase/firestore";
import { FIRESTORE } from "../../../firebaseInstance";
import { updateUserStatus } from "../../fbCRUD";

import { AUTH_ERROR, AUTH_LOADING, LOGIN, LOGOUT } from "../types";

export const loginUser = (email, password) => dispatch => {
  dispatch({ type: AUTH_LOADING, payload: true });
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      dispatch({ type: AUTH_ERROR, payload: "Error: Invalid Credentials" });
    });
};

export const authListener = () => dispatch =>
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      updateUserStatus("online");
      dispatch({ type: LOGIN, payload: user });
    } else dispatch(logoutUser());
  });

export const logoutUser = () => async dispatch => {
  // update user status before logging out
  const userObj = await updateUserStatus("offline").then(user => {
    firebase.auth().signOut();
    dispatch({ type: LOGOUT });
  });
};

export const signupUser = (name, email, password) => dispatch => {
  dispatch({ type: AUTH_LOADING, payload: true });
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      firebase
        .auth()
        .currentUser.updateProfile({ displayName: name })
        .catch(err => console.log("update profile err", err));

      initializeUserObj(name, user.user.uid);
    })
    .catch(err => {
      console.log("signup err: ", err);
      dispatch({ type: AUTH_ERROR, payload: err.message });
    });
};

const initializeUserObj = async (name, firebaseid) => {
  const userObj = {
    name,
    photoURL: null,
    followers: [],
    following: [],
    status: "online",
    lastOnline: Date.now(),
  };

  FIRESTORE.collection("users")
    .doc(firebaseid)
    .set(userObj)
    .catch(err => console.log("failed to initialize userObj", err));
};
