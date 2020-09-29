import Vue from 'vue';
import Vuex from 'vuex';
import * as fb from '../views/firestore/index';
import router from '../router';
import firebase from 'firebase';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userProfile: {}
  },
  mutations: {
    SET_USER_PROFILE(state, val) {
      state.userProfile = val;
      console.log('user prof from store.js', state.userProfile);
    },
    ADD_NEW_LISTING_TO_STATE(state, listingData) {
      state.userProfile.listings.push(listingData);
      console.log(
        'added new listing to listings array and set in state',
        listingData
      );
      console.log(state.userProfile);
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
          dateCreated: new Date(),
          password: form.password
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
      commit('SET_USER_PROFILE', {});
      router.push('/login');
    },

    // MAIN DRIVER
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersRef.doc(user.uid).get();

      // set profile in state
      commit('SET_USER_PROFILE', userProfile.data());

      // change route to dashboard
      if (
        router.currentRoute.fullPath == '/login' ||
        router.currentRoute.fullPath == '/signup'
      )
        router.push('/');
    },
    async addListingToUserAccount({ commit }, listingData) {
      console.log(listingData);
      let user = await fb.usersRef.doc(fb.auth.currentUser.uid).get();

      const firestore = firebase.firestore();
      const doc = firestore.doc(`/users/${fb.auth.currentUser.uid}`);
      const arrayUnion = firebase.firestore.FieldValue.arrayUnion;

      doc.update({
        listings: arrayUnion({
          category: listingData.category,
          description: listingData.description,
          noOfFollowers: listingData.noOfFollowers,
          noOfPosts: listingData.noOfPosts,
          price: listingData.price,
          reach: listingData.reach,
          username: listingData.username,
          ownerEmail: listingData.ownerEmail,
          ownerUsername: listingData.ownerUsername,
          dateCreated: listingData.dateCreated,
          avatar: listingData.avatar
        })
      });

      commit('ADD_NEW_LISTING_TO_STATE', listingData);

      // add to collection - all listings
      firestore.collection(`/allListings`).add({
        category: listingData.category,
        description: listingData.description,
        noOfFollowers: listingData.noOfFollowers,
        noOfPosts: listingData.noOfPosts,
        price: listingData.price,
        reach: listingData.reach,
        username: listingData.username,
        ownerEmail: listingData.ownerEmail,
        ownerUsername: listingData.ownerUsername,
        dateCreated: listingData.dateCreated,
        avatar: listingData.avatar
      });
    }
    // MAIN DRIVER
  },
  getters: {
    getUserProfile(state) {
      return state.userProfile;
    },
    getCurrentUser: () => fb.auth.currentUser
  }
});

export default store;
