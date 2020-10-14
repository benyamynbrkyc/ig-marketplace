import Vue from 'vue';
import Vuex from 'vuex';
import * as fb from '../views/firestore/index';
import router from '../router';
import firebase from 'firebase';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userProfile: { listings: null },
    showEmailNotVerifiedBanner: false,
    showUnknownErrorBanner: false,
    showInvalidPasswordBanner: false,
    showUserNotFoundBanner: false,
    showArgumentErrorBanner: false,
    showInvalidEmailBanner: false,
    showAllFieldsMustBePopulatedBanner: false,
    showEmailInUseBanner: false
  },
  mutations: {
    SET_USER_PROFILE(state, val) {
      state.userProfile = { ...val };
      // console.log('user prof from store.js', state.userProfile);
    },
    ADD_NEW_LISTING_TO_STATE(state, listingData) {
      state.userProfile.listings.push(listingData);
      console.log(
        'added new listing to listings array and set in state',
        listingData
      );
      console.log(state.userProfile);
    },
    SET_SHOW_EMAIL_NOT_VERIFIED_BANNER_TO_TRUE(state) {
      state.showEmailNotVerifiedBanner = true;
    },
    SET_SHOW_UNKNOWN_ERROR_BANNER_TO_TRUE(state) {
      state.showUnknownErrorBanner = true;
    },
    //
    //
    SET_SHOW_ARGUMENT_ERROR_BANNER_TO_TRUE(state) {
      state.showArgumentErrorBanner = true;
    },
    SET_SHOW_ARGUMENT_ERROR_BANNER_TO_FALSE(state) {
      state.showArgumentErrorBanner = false;
    },
    //
    //
    SET_SHOW_INVALID_EMAIL_BANNER_TO_TRUE(state) {
      state.showInvalidEmailBanner = true;
    },
    SET_SHOW_INVALID_EMAIL_BANNER_TO_FALSE(state) {
      state.showInvalidEmailBanner = false;
    },
    //
    //
    SET_SHOW_INVALID_PASSWORD_BANNER_TO_TRUE(state) {
      state.showInvalidPasswordBanner = true;
    },
    SET_SHOW_INVALID_PASSWORD_BANNER_TO_FALSE(state) {
      state.showInvalidPasswordBanner = false;
    },
    //
    //
    SET_SHOW_USER_NOT_FOUND_BANNER_TO_TRUE(state) {
      state.showUserNotFoundBanner = true;
    },
    SET_SHOW_USER_NOT_FOUND_BANNER_TO_FALSE(state) {
      state.showUserNotFoundBanner = false;
    },
    //
    //
    SET_SHOW_ALL_FIELDS_MUST_BE_POPULATED_BANNER_TO_TRUE(state) {
      state.showAllFieldsMustBePopulatedBanner = true;
    },
    SET_SHOW_ALL_FIELDS_MUST_BE_POPULATED_BANNER_TO_FALSE(state) {
      state.showAllFieldsMustBePopulatedBanner = false;
    },
    //
    //
    SET_SHOW_EMAIL_IN_USE_BANNER_TO_TRUE(state) {
      state.showEmailInUseBanner = true;
    },
    SET_SHOW_EMAIL_IN_USE_BANNER_TO_FALSE(state) {
      state.showEmailInUseBanner = false;
    }
    //
    //
  },
  actions: {
    async showEmailNotVerifiedBanner({ commit }) {
      commit('SET_SHOW_EMAIL_NOT_VERIFIED_BANNER_TO_TRUE');
    },
    async showUnknownErrorBanner({ commit }) {
      commit('SET_SHOW_UNKNOWN_ERROR_BANNER_TO_TRUE');
    },
    async signup({ dispatch, commit }, form) {
      // sign user up
      try {
        const { user } = await fb.auth.createUserWithEmailAndPassword(
          form.email,
          form.password
        );

        // create user profile object in users collection
        await fb.usersRef.doc(user.uid).set({
          _id: user.uid,
          username: form.username,
          email: form.email,
          avatar: form.avatar,
          dateCreated: new Date(),
          password: form.password
        });

        dispatch('fetchUserProfile', user);
      } catch (error) {
        // BUILD CHANGE
        console.log(error);

        if (error.code == 'auth/argument-error')
          commit('SET_SHOW_ALL_FIELDS_MUST_BE_POPULATED_BANNER_TO_TRUE');
        else commit('SET_SHOW_ALL_FIELDS_MUST_BE_POPULATED_BANNER_TO_FALSE');

        if (error.code == 'auth/invalid-email')
          commit('SET_SHOW_INVALID_EMAIL_BANNER_TO_TRUE');
        else commit('SET_SHOW_INVALID_EMAIL_BANNER_TO_FALSE');

        if (error.code == 'auth/email-already-in-use')
          commit('SET_SHOW_EMAIL_IN_USE_BANNER_TO_TRUE');
        else commit('SET_SHOW_EMAIL_IN_USE_BANNER_TO_FALSE');
      }
    },
    async login({ dispatch, commit }, form) {
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
        console.log(error);

        // TODO: emit these as events
        if (error.code == 'auth/argument-error')
          commit('SET_SHOW_ARGUMENT_ERROR_BANNER_TO_TRUE');
        else commit('SET_SHOW_ARGUMENT_ERROR_BANNER_TO_FALSE');

        if (error.code == 'auth/invalid-email')
          commit('SET_SHOW_INVALID_EMAIL_BANNER_TO_TRUE');
        else commit('SET_SHOW_INVALID_EMAIL_BANNER_TO_FALSE');

        if (error.code == 'auth/wrong-password')
          commit('SET_SHOW_INVALID_PASSWORD_BANNER_TO_TRUE');
        else commit('SET_SHOW_INVALID_PASSWORD_BANNER_TO_FALSE');

        if (error.code == 'auth/user-not-found')
          commit('SET_SHOW_USER_NOT_FOUND_BANNER_TO_TRUE');
        else commit('SET_SHOW_USER_NOT_FOUND_BANNER_TO_FALSE');
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
      const UID =
        user.uid == 'mqSrKzK2MWd9rPA8dBPxUz7RLof2' ? 'Admin' : user.uid;

      const userProfile = await fb.usersRef.doc(UID).get();
      const userProfileData = {
        ...userProfile.data(),
        id: userProfile.id
      };

      // set profile in state
      commit('SET_USER_PROFILE', userProfileData);

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

      const firestore = fb.db;
      const currentUser = firestore.doc(`/users/${fb.auth.currentUser.uid}`);
      const arrayUnion = fb.arrayUnion;

      let newListingInAllListings = firestore.collection('allListings').doc();
      const NEW_LISTING_IN_ALL_LISTINGS_ID = newListingInAllListings.id;
      console.log(NEW_LISTING_IN_ALL_LISTINGS_ID);
      newListingInAllListings.set({
        category: listingData.category,
        description: listingData.description,
        noOfFollowers: listingData.noOfFollowers,
        noOfPosts: listingData.noOfPosts,
        price: listingData.price,
        reach: listingData.reach,
        username: listingData.username,
        ownerEmail: listingData.ownerEmail,
        ownerUsername: listingData.ownerUsername,
        ownerID: fb.auth.currentUser.uid,
        dateCreated: listingData.dateCreated,
        avatar: listingData.avatar,
        _id: NEW_LISTING_IN_ALL_LISTINGS_ID
      });

      currentUser.update({
        listings: arrayUnion(`${String(NEW_LISTING_IN_ALL_LISTINGS_ID)}`)
      });
    }
  },
  getters: {
    getUserProfile(state) {
      return state.userProfile;
    },
    getCurrentUser: () => fb.auth.currentUser,
    getShowUnknownErrorBannerStatus: state => state.showUnknownErrorBanner,
    getShowInvalidPasswordBannerStatus: state =>
      state.showInvalidPasswordBanner,
    getShowUserNotFoundBannerStatus: state => state.showUserNotFoundBanner,
    getShowInvalidEmailBannerStatus: state => state.showInvalidEmailBanner,
    getShowArgumentErrorBanner: state => state.showArgumentErrorBanner,
    getShowAllFieldsMustBePopulatedBanner: state =>
      state.showAllFieldsMustBePopulatedBanner,
    getShowEmailInUseBannerStatus: state => state.showEmailInUseBanner
  }
});

export default store;
