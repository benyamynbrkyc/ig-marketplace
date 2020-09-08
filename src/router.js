import Vue from 'vue';
import Router from 'vue-router';
import Landing from './views/Landing.vue';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Profile from './views/Profile.vue';
import Product from './views/Product.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

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
      path: '/product',
      name: 'product',
      components: { default: Product, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        title: 'BS Social Swap | Product'
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
        title: 'BS Social Swap | Chat'
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

router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || 'BS Social Swap';
  });
});

export default router;
