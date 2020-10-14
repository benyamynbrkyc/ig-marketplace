<template>
  <div class="wrapper">
    <div class="section page-header" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card>
              <h3 slot="title" class="card-title">Login</h3>
              <h6 slot="title" class="card-title">
                or <a id="createAcc" href="/signup">Create an Account</a>
              </h6>
              <!-- <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square"></i>
              </md-button> -->
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email</label>
                <md-input v-model="email" type="email"></md-input> <br />
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>

              <h5
                style="color: red; text-align: center; margin-top: 30px;"
                slot="inputs"
                v-if="showUserNotFoundBanner == true"
              >
                User (email) not found
              </h5>
              <h5
                style="color: red; text-align: center; margin-top: 30px;"
                slot="inputs"
                v-if="showInvalidPasswordBanner == true"
              >
                Incorrect password
              </h5>
              <h5
                style="color: red; text-align: center; margin-top: 30px;"
                slot="inputs"
                v-if="showInvalidEmailBanner == true"
              >
                Invalid email
              </h5>
              <h5
                style="color: red; text-align: center; margin-top: 30px;"
                slot="inputs"
                v-if="showArgumentErrorBanner == true"
              >
                Email and password cannot be empty
              </h5>
              <md-button
                @click="login()"
                slot="footer"
                class="md-simple md-success md-lg"
              >
                Login
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from '@/components';

export default {
  components: {
    LoginCard
  },
  bodyClass: 'login-page',
  data() {
    return {
      email: null,
      password: null
    };
  },
  props: {
    header: {
      type: String,
      default: require('@/assets/img/profile_city.jpg')
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundColor: `#3a7571`
      };
    },
    showUserNotFoundBanner() {
      return this.$store.getters.getShowUserNotFoundBannerStatus;
    },
    showInvalidPasswordBanner() {
      return this.$store.getters.getShowInvalidPasswordBannerStatus;
    },
    showInvalidEmailBanner() {
      return this.$store.getters.getShowInvalidEmailBannerStatus;
    },
    showArgumentErrorBanner() {
      return this.$store.getters.getShowArgumentErrorBanner;
    }
  },
  methods: {
    async login() {
      this.resetFeedback = true;
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style lang="css" scoped>
body {
  background-color: #3a7571 !important;
}
.md-layout {
  margin-right: 0px !important;
  margin-left: 0px !important;
  margin: auto !important;
}
.md-layout-item {
  margin: 0 !important;
  padding-right: 0px !important;
  padding-left: 0px !important;
}
.md-card-header- {
  background-color: #346966 !important;
}
.md-card {
  width: 500px;
  margin-top: 150px;
}
@media only screen and (max-width: 768px) {
  .md-card {
    width: 300px;
    margin-top: 0px !important;
  }
}
h6.card-title {
  text-transform: none !important;
  font-size: 1rem;
}
#createAcc {
  text-transform: none;
  text-decoration: underline;
}
</style>
