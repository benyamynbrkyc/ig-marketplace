<template>
  <div class="wrapper">
    <div class="section page-header" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <SellCard>
              <h3 slot="title" class="card-title">Sell - Add a Listing</h3>
              <h6 slot="title" class="card-title">
                <i class="fab fa-facebook-square" style="padding-right:3px"></i>
                &nbsp; Facebook Authorization
              </h6>
              <p slot="title" class="description" id="disclaimer">
                In order to add a listing for an Instagram account, you have to
                authorize BS Social Swap to read your Instagram account data to
                be able to verify your identity and display your listing data.
                We do this by securely communicating with Facebook using their
                API (<span
                  ><a
                    id="graphAPILink"
                    href="https://developers.facebook.com/docs/graph-api/"
                    target="_blank"
                    >more info</a
                  ></span
                >) so your data is
                <span style="font-style: italic;">safe and encrypted.</span>
              </p>

              <h6
                class="description"
                slot="title"
                v-if="facebookAuthStatus"
                style="color:green;"
              >
                Account successfully linked to Facebook
              </h6>
              <h6 class="description" slot="title" v-else style="color:red;">
                Account isn't linked to Facebook
                <a id="authController" @click="sendInstaInfo()">Link</a>
              </h6>

              <md-field
                v-if="facebookAuthStatus"
                class="md-form-group"
                slot="inputs"
              >
                <md-icon>account_circle</md-icon>
                <label>@username</label>
                <md-input v-model="username" type="text"></md-input>
                <br />
              </md-field>

              <md-button
                v-if="facebookAuthStatus"
                @click="addListing()"
                slot="footer"
                class="md-simple md-success md-lg"
              >
                Add Listing
              </md-button>
              <h3 class="description" slot="inputs" v-if="!facebookAuthStatus">
                You must authorize BS Social Swap to access your Instagram data
                via Facebook before you can submit an account.
              </h3>
            </SellCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from 'firebase';
import SellCard from '../components/cards/SellCard';
import * as fb from '../views/firestore/index';
import firebase from 'firebase';

export default {
  components: {
    SellCard
  },
  bodyClass: 'login-page',
  data() {
    return {
      username: null,
      facebookAuthUser: null,
      facebookAuthStatus: false
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundColor: `#3a7571`
      };
    }
  },
  methods: {
    async sendInstaInfo() {
      console.log('Logging in user using firebase facebook auth');
      let facebookProvider = new firebase.auth.FacebookAuthProvider();
      facebookProvider.addScope('pages_show_list', 'instagram_basic');

      // this could work better for mobile
      // provider.setCustomParameters({
      //   display: 'popup'
      // });

      fb.auth.signInWithRedirect(facebookProvider);
    },
    setFBAuthStatus(result) {
      this.facebookAuthUser = result;
      console.log('result user', result.user);
      console.log('1', this.facebookAuthStatus);

      if (result.user == null) {
        this.facebookAuthStatus = false;
      }
      if (result.user === undefined) {
        this.facebookAuthStatus = true;
      }
      console.log('2', this.facebookAuthStatus);
      console.log('this facebook auth user', this.facebookAuthUser);
    },
    addListing() {
      let username = this.username
        .toLowerCase()
        .trim()
        .split('');

      if (username[0] == '@') username.splice(0, 1);
      let usernameMod = username.join('');
      console.log(usernameMod);

      const regexInstaUser = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim.test(
        usernameMod
      );
      console.log(regexInstaUser, usernameMod);
    }
  },
  created() {
    fb.auth
      .getRedirectResult()
      .then(result => {
        // console.log('RESULT:\n', result);

        this.setFBAuthStatus(result);
      })
      .catch(err => {
        if (err.code == 'auth/account-exists-with-different-credential') {
          console.log(err.code);
          this.setFBAuthStatus(err);
        }
      });
  }
};
</script>

<style lang="css" scoped>
body {
  background-color: #3a7571 !important;
}
.md-layout {
  /* margin-right: 0px !important;
  margin-left: 0px !important; */
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
  width: 960px;
  /* margin-top: 150px; */
}
@media only screen and (max-width: 1199px) {
  .md-card {
    width: 900px;
  }
}
/* this is the hamburger collapse */
@media only screen and (max-width: 992px) {
  .md-card {
    width: 600px;
  }
  .card-title {
    font-size: smaller;
  }
}
/* hamburger collapse  */
@media only screen and (max-width: 768px) {
  .md-card {
    width: 500px;
    margin-top: 0px !important;
  }
}
@media only screen and (max-width: 550px) {
  .md-card {
    width: 400px;
    margin-top: 0px !important;
  }
}
@media only screen and (max-width: 487px) {
  .md-card {
    width: 300px;
    margin-top: 50px !important;
  }
}
/* media for card */
h6.card-title {
  max-width: 600px;
  color: white;
  text-align: justify;
  margin: auto;
  padding-left: 10px;
  padding-right: 10px;
  text-transform: capitalize !important;
}
@media only screen and (max-width: 992px) {
  h6.card-title {
    font-size: 14px;
  }
}
h3.card-title {
  text-transform: none !important;
  margin-top: 0px !important;
}
h6.description,
p.description {
  max-width: 600px;
  color: white;
  text-align: justify;
  margin: auto;
  padding-left: 10px;
  padding-right: 10px;
  text-transform: capitalize;
}
#createAcc {
  text-transform: none;
  text-decoration: underline;
}
.authText {
  text-align: left;
}
#authController {
  cursor: pointer;
  padding-left: 3px;
  text-transform: uppercase;
}
#disclaimer {
  text-transform: none;
}
#graphAPILink {
  text-decoration: underline;
}
</style>
