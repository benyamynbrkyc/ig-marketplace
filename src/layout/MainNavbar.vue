<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
    style="box-shadow: none !important;"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">
          <a href="/"
            ><img
              src="https://nitrocdn.com/oBHBqLgJXZVfCESjGKVwqurKNzgjnxtE/assets/static/optimized/rev-31096c6/wp-content/uploads/2020/05/sajtpng-e1589632975136-min.png"
              alt=""
          /></a>
        </h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          id="mobileHamburger"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <!-- item 1 -->
              <li class="md-list-item" v-if="!showDownload">
                <a
                  href="/"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-simple"
                      style="color: white !important;"
                    >
                      <i class="material-icons" style="color:white !important;"
                        >home</i
                      >
                      <p>Home</p>
                    </md-button>
                  </div>
                </a>
              </li>
              <!-- item 2 -->
              <li class="md-list-item" v-if="!showDownload">
                <a
                  href="/listings"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-simple"
                      style="color: white !important;"
                    >
                      <i class="material-icons" style="color:white !important;"
                        >shopping_cart</i
                      >
                      <p>Listings</p>
                    </md-button>
                  </div>
                </a>
              </li>
              <!-- item 3 -->
              <li class="md-list-item" v-if="!showDownload">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-simple dropdown-toggle"
                        data-toggle="dropdown"
                        style="color:white !important;"
                      >
                        <i
                          class="material-icons"
                          style="color:white !important;"
                          >library_books</i
                        >
                        <p>Policies and TOS</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="/privacy-policy">
                            <i class="material-icons">privacy_tip</i>
                            <p>Privacy Policy</p>
                          </a>
                        </li>
                        <li>
                          <a href="/terms-of-service">
                            <i class="material-icons">perm_device_info</i>
                            <p>Terms of Service</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
              <!-- item 4 -->
              <li class="md-list-item" v-if="!showDownload">
                <a
                  href="/contact"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-simple"
                      style="color: white !important;"
                    >
                      <i class="material-icons" style="color:white !important;"
                        >contact_page</i
                      >
                      <p>Contact</p>
                    </md-button>
                  </div>
                </a>
              </li>
              <!-- item 5 -->
              <li class="md-list-item" v-if="!showDownload">
                <a
                  href="/chat"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-simple"
                      style="color: white !important;"
                    >
                      <i class="material-icons" style="color:white !important;"
                        >chat</i
                      >
                      <p>Chat</p>
                    </md-button>
                  </div>
                </a>
              </li>
              <!-- item 6 / profile -->
              <li class="md-list-item" v-if="!showDownload">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-simple dropdown-toggle"
                        data-toggle="dropdown"
                        style="color:white !important;"
                      >
                        <i
                          class="material-icons"
                          style="color:white !important;"
                          >person</i
                        >
                        <p>Profile</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="/login">
                            <i class="material-icons">privacy_tip</i>
                            <p>Log In</p>
                          </a>
                        </li>
                        <li>
                          <a href="/signup">
                            <i class="material-icons">perm_device_info</i>
                            <p>Sign Up</p>
                          </a>
                        </li>
                        <li>
                          <a @click="logout()">
                            <i class="material-icons">perm_device_info</i>
                            <p>Log Out</p>
                          </a>
                        </li>
                        <li>
                          <a @click="logCurrentUser()">
                            <i class="material-icons">perm_device_info</i>
                            <p>logCurrentUser()</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<style>
.md-simple p {
  color: white !important;
}
.material-icons {
  color: black;
}
.md-button {
  color: white !important;
}
.md-title img {
  /* background-color: #1a4136; */
  padding: 15px 10px;
  border-radius: 5px;
}
</style>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from '@/layout/MobileMenu';
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: 'white',
      validator(value) {
        return [
          'white',
          'default',
          'primary',
          'danger',
          'success',
          'warning',
          'info'
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: '',
      toggledClass: false
    };
  },
  computed: {
    showDownload() {
      // const excludedRoutes = ['login', 'landing', 'profile'];
      // return excludedRoutes.every(r => r !== this.$route.name);
      return false;
    }
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById('bodyClick');

      if (bodyClick === null) {
        let body = document.querySelector('body');
        let elem = document.createElement('div');
        elem.setAttribute('id', 'bodyClick');
        body.appendChild(elem);

        let bodyClick = document.getElementById('bodyClick');
        bodyClick.addEventListener('click', this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      if (this.$route.name !== 'profile' || this.$route.name !== 'product') {
        let scrollValue =
          document.body.scrollTop || document.documentElement.scrollTop;
        let navbarColor = document.getElementById('toolbar');
        this.currentScrollValue = scrollValue;
        if (this.colorOnScroll > 0 && scrollValue > 0) {
          this.extraNavClasses = `md-${this.type}`;
          navbarColor.classList.remove('md-transparent');
        } else {
          if (this.extraNavClasses) {
            this.extraNavClasses = '';
            navbarColor.classList.add('md-transparent');
          }
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById('downloadSection');
      if (element_id) {
        element_id.scrollIntoView({ block: 'end', behavior: 'smooth' });
      }
    },
    logout() {
      console.log('Logging out', this.$store.getters.getUserProfile.username);
      this.$store.dispatch('logout');
    },
    logCurrentUser() {
      console.log(this.$store.getters.getUserProfile);
    }
  },
  mounted() {
    if (
      this.$route.name !== 'profile' &&
      this.$route.name !== 'product' &&
      this.$route.name !== 'landing' &&
      this.$route.name !== 'contact' &&
      this.$route.name !== 'privacy-policy' &&
      this.$route.name !== 'terms-of-service' &&
      this.$route.name !== 'listings' &&
      this.$route.name !== 'chat' &&
      this.$route.name !== 'login'
    ) {
      document.addEventListener('scroll', this.scrollListener);
    } else {
      let navbarColor = document.getElementById('toolbar');
      navbarColor.classList.remove('md-transparent');
    }
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollListener);
  }
};
</script>
