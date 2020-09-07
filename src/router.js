import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import Landing from './views/Landing.vue';
import Login from './views/Login.vue';
import Profile from './views/Profile.vue';
import Product from './views/Product.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/landing',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/product',
      name: 'product',
      components: { default: Product, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
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
