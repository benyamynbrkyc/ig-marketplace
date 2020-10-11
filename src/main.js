import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

import { auth } from './views/firestore/index';
import * as fb from './views/firestore/index';

import MaterialKit from './plugins/material-kit';

Vue.config.productionTip = false;

Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

auth.onAuthStateChanged(user => {
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app');

  if (user) {
    store.dispatch('fetchUserProfile', user);
    console.log(auth.currentUser);
    if (fb.auth.currentUser.emailVerified == false) {
      auth.currentUser
        .sendEmailVerification()
        .then(() => {
          // alert(
          //   'You have been sent a verification email. You must verify your account before you can fully experience BS Social Swap. Check your email for the verification link.'
          // );
          store.dispatch('showEmailNotVerifiedBanner');
          console.log('dispatched event');
          // BUILD CHANGE
          // console.log('Sent verification email');
        })
        .catch(err => {
          // BUILD CHANGE
          alert(err);
          // console.log(err);
        });
    }
  }
});
