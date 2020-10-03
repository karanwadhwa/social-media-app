import firebase from "firebase";
import { FIRESTORE } from "../firebaseInstance";

export const getUserObj = async () => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser && currentUser.uid) {
    const userRef = FIRESTORE.collection("users").doc(currentUser.uid);
    const snapshot = await userRef.get();
    console.log("getUserObj", snapshot.data());
    if (snapshot.exists) return snapshot.data();
  }
  return null;
};

export const updateUserObj = async updateObj => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser && currentUser.uid) {
    const userRef = FIRESTORE.collection("users").doc(currentUser.uid);
    const snapshot = await userRef.update(updateObj).then(res => true);
    return snapshot;
  }
  return null;
};

export const updateUserStatus = async status => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser && currentUser.uid) {
    console.log("updating status", status);
    const userRef = FIRESTORE.collection("users").doc(currentUser.uid);
    const updateObj = { status, lastOnline: Date.now() };
    const snapshot = await userRef.update(updateObj).then(res => true);
    return snapshot;
  }
  return null;
};
