import Vue from 'vue';
import Vuex from 'vuex';
import * as fb from '../views/firestore/index';
import router from '../router';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userProfile: {}
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    }
    //   setPosts maybe it can help with posting listings
  },
  actions: {
    async signup({ dispatch }, form) {
      // sign user up
      try {
        const { user } = await fb.auth.createUserWithEmailAndPassword(
          form.email,
          form.password
        );

        // create user profile object in users collection
        await fb.usersRef.doc(user.uid).set({
          username: form.username,
          email: form.email,
          avatar: form.avatar,
          dateCreated: new Date()
        });

        dispatch('fetchUserProfile', user);
      } catch (error) {
        // BUILD CHANGE
        // console.log(error);

        if (error.code == 'auth/argument-error')
          alert('All fields must be populated.');

        if (error.code == 'auth/invalid-email') alert('Invalid email.');
      }
    },
    async login({ dispatch }, form) {
      // sign user in
      try {
        const { user } = await fb.auth.signInWithEmailAndPassword(
          form.email,
          form.password
        );

        // fetch user profile and set in state
        dispatch('fetchUserProfile', user);
      } catch (error) {
        // BUILD CHANGE
        // console.log(error);
        if (error.code == 'auth/argument-error')
          alert('Email and password cannot be empty.');

        if (error.code == 'auth/invalid-email') alert('Invalid email.');

        if (error.code == 'auth/wrong-password') alert('Invalid password.');

        if (error.code == 'auth/user-not-found') {
          let question = confirm(
            'The user has not been found.\nDo you want to sign up?'
          );
          if (question) router.push('/signup');
        }
      }
    },
    async logout({ commit }) {
      await fb.auth.signOut();

      // clean userProfile and redirect to /login
      commit('setUserProfile', {});
      router.push('/login');
    },

    // MAIN DRIVER
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersRef.doc(user.uid).get();

      // set profile in state
      commit('setUserProfile', userProfile.data());

      // change route to dashboard
      if (
        router.currentRoute.fullPath == '/login' ||
        router.currentRoute.fullPath == '/signup'
      )
        router.push('/');
    }
    // MAIN DRIVER
  },
  getters: {
    getUserProfile: state => state.userProfile,
    getCurrentUser: () => fb.auth.currentUser
  }
});

export default store;
