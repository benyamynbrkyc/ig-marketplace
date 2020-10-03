import Vue from 'vue';
import Router from 'vue-router';
import Landing from './views/Landing.vue';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Profile from './views/Profile.vue';
import Listing from './views/Listing.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
import ListingFooter from './layout/ListingFooter.vue';
import { auth } from './views/firestore/index';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        title: 'BS Social Swap | Home'
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      },
      meta: {
        title: 'BS Social Swap | Login'
      }
    },
    {
      path: '/signup',
      name: 'signup',
      components: { default: Signup, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      },
      meta: {
        title: 'BS Social Swap | Sign Up'
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        title: 'BS Social Swap | Profile'
      }
    },
    {
      path: '/profile/:id',
      name: 'profile-page',
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        title: 'BS Social Swap | Profile'
      }
    },
    {
      path: '/listing/:id',
      name: 'listing',
      components: {
        default: Listing,
        header: MainNavbar,
        footer: ListingFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        title: 'BS Social Swap | Listing'
      }
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      components: {
        default: () =>
          import(
            /* webpackChunkName: "settings" */ './views/TermsOfService.vue'
          ),
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        title: 'BS Social Swap | Terms Of Service'
      }
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      components: {
        default: () =>
          import(
            /* webpackChunkName: "settings" */ './views/PrivacyPolicy.vue'
          ),
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        title: 'BS Social Swap | Privacy Policy'
      }
    },
    {
      path: '/listings',
      name: 'listings',
      components: {
        default: () =>
          import(/* webpackChunkName: "settings" */ './views/Listings.vue'),
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        title: 'BS Social Swap | Listings'
      }
    },
    {
      path: '/sell',
      name: 'sell',
      components: {
        default: () =>
          import(/* webpackChunkName: "settings" */ './views/Sell.vue'),
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 }
      },
      meta: {
        title: 'BS Social Swap | Sell'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: {
        default: () =>
          import(/* webpackChunkName: "settings" */ './views/Contact.vue'),
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        title: 'BS Social Swap | Contact'
      }
    },
    {
      path: '/chat',
      name: 'chat',
      components: {
        default: () =>
          import(/* webpackChunkName: "settings" */ './views/Chat.vue'),
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        title: 'BS Social Swap | Chat',
        requiresAuth: true,
        requiresAuthMessage: 'You have to log in to access the chat.'
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  // the email verification for specific routes can be handled here
  if (requiresAuth && !auth.currentUser) next('/login');
  else next();
});

router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || 'BS Social Swap';
  });
});

export default router;
