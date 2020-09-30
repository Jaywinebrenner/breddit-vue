import firebase from '@/firebase';

const state = {
  user: {},
  isLoggedIn: false,
};

const actions = {
  async login() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = await firebase.auth().signInWithPopup(provider);
  console.log("resutl do user", result.user);
  }
};

export default {
  namespaced: true,
  state,
  actions,
};
