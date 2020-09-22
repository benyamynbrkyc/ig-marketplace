<template>
  <div class="wrapper">
    <div
      class="section page-header"
      :style="headerStyle"
      style="height: unset !important;"
    >
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

              <h6
                v-if="facebookAuthStatus && !isPageChosen"
                class="description"
                slot="title"
              >
                Choose the Facebook Page your Instagram Account is connected to:
                <a id="authController">{{ pageNameHeader || 'Choose Page' }}</a>
              </h6>

              <md-radio
                v-if="facebookAuthStatus && !isPageChosen"
                v-for="pageName in pageNames"
                :key="pageName"
                class="categoryOption"
                v-model="pageNameHeader"
                slot="title"
                :value="pageName"
                style="color: white !important;"
                >{{ pageName }}</md-radio
              >

              <h6
                v-if="facebookAuthStatus && foundInstagramAcc"
                class="description"
                slot="title"
              >
                BS Social Swap is connected to this Instagram Account:
                <a id="authController">{{
                  '@' + instagramAccUsername || 'No Account Found'
                }}</a>
              </h6>

              <h6
                v-if="ERROR !== null"
                class="description"
                slot="title"
                style="color: red;"
              >
                This Facebook Page doesn't have an Instagram Account connected
                to it:
                <a id="authController">{{ 'NO ACCOUNT FOUND' }}</a> <br />
                <span
                  ><a
                    id="learnToConnect"
                    target="_blank"
                    href="https://www.facebook.com/business/help/898752960195806"
                    >To learn how to connect your Instagram Account, visit this
                    link.</a
                  ></span
                >
              </h6>

              <h6
                v-if="facebookAuthStatus && isPageChosen"
                class="description"
                slot="title"
              >
                Page Chosen:
                <a id="authController">Page</a>
              </h6>

              <h6
                v-if="!facebookAuthStatus"
                class="description"
                slot="title"
                style="color:red;"
              >
                Account isn't linked to Facebook
                <a id="authController" @click="sendInstaInfo()">Link</a>
              </h6>

              <md-field
                v-if="facebookAuthStatus && foundInstagramAcc"
                class="md-form-group"
                slot="inputs"
              >
                <md-icon>attach_money</md-icon>
                <label id="usernameLabel">Price</label>
                <md-input v-model="price" type="number" min="1"></md-input>
                <br />
              </md-field>

              <md-field
                v-if="facebookAuthStatus && foundInstagramAcc"
                class="md-form-group"
                slot="inputs"
                id="categoryRadio"
                style="flex-wrap: wrap;"
                ><md-icon>category</md-icon>
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Architecture & Interior"
                  >Architecture & Interior</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Art & Design"
                  >Art & Design</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Blog & Lifestyle"
                  >Blog & Lifestyle</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Business & Brand"
                  >Business & Brand</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Cars & Bikes"
                  >Cars & Bikes</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="City & Country"
                  >City & Country</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Educational & QA"
                  >Educational & QA</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Fashion & Style"
                  >Fashion & Style</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Fitness & Sports"
                  >Fitness & Sports</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Food & Nutrition"
                  >Food & Nutrition</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Gaming & Entertainment"
                  >Gaming & Entertainment</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Health & Beauty"
                  >Health & Beauty</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Humor & Memes"
                  >Humor & Memes</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Luxury & Motivation"
                  >Luxury & Motivation</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Movies, TV & Fan Pages"
                  >Movies, TV & Fan Pages</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Pets & Animals"
                  style="color: black !important;"
                  >Pets & Animals</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Quotes & Text"
                  >Quotes & Text</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Reviews & Tutorials"
                  >Reviews & Tutorials</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Tech & Computers"
                  >Tech & Computers</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="radio"
                  value="Travel & Nature"
                  >Travel & Nature</md-radio
                >
              </md-field>

              <md-button
                v-if="facebookAuthStatus && foundInstagramAcc"
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
import axios from 'axios';

export default {
  components: {
    SellCard
  },
  bodyClass: 'login-page',
  data() {
    return {
      price: 0,
      radio: null,
      facebookAuthUser: null,
      facebookAuthStatus: false,
      isPageChosen: false,
      chosenPage: '',
      pageNameHeader: null,
      pageNames: [],
      pages: [],
      FB_ACCESS_TOKEN: '',
      FB_PAGE_ID: null,
      IG_USER: null,
      foundInstagramAcc: false,
      instagramAccUsername: null,
      ERROR: null
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
      facebookProvider.addScope('pages_show_list');
      facebookProvider.addScope('instagram_basic');
      facebookProvider.addScope('business_management');

      // this could work better for mobile
      // provider.setCustomParameters({
      //   display: 'popup'
      // });

      fb.auth.signInWithRedirect(facebookProvider);
    },
    async setFBAuthStatus(result) {
      this.facebookAuthUser = result;
      this.FB_ACCESS_TOKEN = result.credential.accessToken;
      console.log(result.credential.accessToken);

      if (
        result.credential.accessToken !== null &&
        result.credential.accessToken !== undefined
      ) {
        this.facebookAuthStatus = true;
      }

      console.log('this facebook auth user\n', this.facebookAuthUser);

      let pagesOfUser = await axios.get(
        `https://graph.facebook.com/v8.0/me/accounts?access_token=${this.FB_ACCESS_TOKEN}`
      );
      let pages = pagesOfUser.data.data;
      this.pages = pagesOfUser.data.data;

      pages.forEach(page => {
        console.log('page', page);
        this.pageNames.push(page.name);
      });
    },
    setPageID(name) {
      if (
        this.pageNameHeader !== 'Choose page' &&
        this.pageNameHeader !== null
      ) {
        this.pages.some(page => {
          if (page.name === name) {
            this.chosenPage = page;
            console.log('chosen page', this.chosenPage);
          }
        });
      } else {
        console.error('No value in pageNameHeader');
      }
      console.log(this.facebookAuthStatus, this.foundInstagramAcc);
    },
    addListing() {
      let username = this.username
        .toLowerCase()
        .trim()
        .split('');

      if (username[0] == '@') username.splice(0, 1);
      let usernameMod = username.join('');

      const regexInstaUser = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim.test(
        usernameMod
      );

      if (regexInstaUser) {
        usernameMod = '@' + usernameMod;
        const newListingData = {
          username: usernameMod,
          price: this.price,
          category: this.radio
        };
        console.log(newListingData);
      }
    },
    async findInstagramAcc(page) {
      console.log('page with ID', page);

      this.IG_USER = await axios.get(
        `https://graph.facebook.com/v8.0/${page.id}?fields=instagram_business_account&access_token=${page.access_token}`
      );

      console.log(this.IG_USER);

      try {
        const instaBusinessAccountID = this.IG_USER.data
          .instagram_business_account.id;

        console.log(instaBusinessAccountID);

        const username = await axios.get(
          `https://graph.facebook.com/v8.0/${instaBusinessAccountID}?fields=username&access_token=${page.access_token}`
        );

        this.instagramAccUsername = username.data.username;
        this.foundInstagramAcc = true;
        this.console.log('username', username.data.username);
      } catch (error) {
        this.ERROR = 'No Instagram account is connected to this Facebook Page.';
        console.log('error', this.ERROR);
      }
    }
  },
  created() {
    fb.auth
      .getRedirectResult()
      .then(result => {
        console.log('RESULT:\n', result);

        this.setFBAuthStatus(result);
      })
      .catch(err => {
        if (err.code == 'auth/account-exists-with-different-credential') {
          console.log(err.code);
          this.setFBAuthStatus(err);
        }
      });
  },
  watch: {
    radio(val) {
      console.log(this.radio);
    },
    pageNameHeader(val) {
      this.setPageID(val);
    },
    chosenPage(val) {
      this.findInstagramAcc(val);
    }
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
    width: 350px;
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
.md-select-value {
  margin-left: 5px;
}
.categoryOption {
  margin-left: 10px;
  color: black !important;
}
md-radio {
  color: black !important;
}
#learnToConnect {
  text-decoration: underline;
  text-transform: none;
}
</style>
