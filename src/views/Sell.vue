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
                <i class="fab fa-instagram" style="padding-right:3px"></i>
                &nbsp; Account Verification process
              </h6>

              <!-- todo: add description here -->
              <p slot="title" class="description" id="disclaimer">
                some text p
              </p>

              <h6 style="text-transform: none" class="description" slot="title">
                some text h6
              </h6>

              <h6 class="description" slot="title">
                BS Social Swap is connected to this Instagram Account:
                <a id="authController">{{
                  '@' + instagramAccUsername || 'No Account Found'
                }}</a>
              </h6>

              <md-field class="md-form-group" slot="inputs">
                <md-icon style="right:unset !important;">article</md-icon>

                <md-textarea
                  style="padding-left:25px !important;"
                  v-model="description"
                  maxlength="512"
                ></md-textarea>
                <br />
              </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>attach_money</md-icon>
                <!-- <label id="usernameLabel">Price</label> -->
                <md-input v-model="price" type="number" min="1"></md-input>
                <br />
              </md-field>

              <md-field
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
                @click="addListing()"
                slot="footer"
                class="md-simple md-success md-lg"
              >
                Add Listing
              </md-button>

              <h6 class="description" slot="inputs" style="text-align: center">
                <a
                  href="https://help.instagram.com/790156881117411?helpref=uf_permalink"
                  >Why do we do this?</a
                >
              </h6>

              <h4
                class="description"
                slot="inputs"
                style="color: red; font-weight: bold;"
              >
                Missing Values:
                <span v-for="val in missingValues" :key="val">
                  <br />{{ val }}
                </span>
              </h4>
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
import router from '../router';

const firestore = firebase.firestore();

export default {
  components: {
    SellCard,
  },
  bodyClass: 'login-page',
  data() {
    return {
      price: 0,
      radio: null,
      description: null,
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
      ERROR: null,
      instagramAccountData: {
        username: null,
        noOfFollowers: null,
        price: null,
        category: null,
        noOfPosts: null,
        reach: null,
        description: null,
      },
      missingValues: null,
      usernameAlreadyRegistered: false,
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundColor: `#3a7571`,
      };
    },
  },
  methods: {
    async sendInstaInfo() {
      let facebookProvider = new firebase.auth.FacebookAuthProvider();
      facebookProvider.addScope('pages_show_list');
      facebookProvider.addScope('instagram_basic');
      facebookProvider.addScope('business_management');
      facebookProvider.addScope('instagram_manage_insights');
      facebookProvider.addScope('read_insights');
      facebookProvider.setCustomParameters({
        auth_type: 'rerequest',
      });

      // this could work better for mobile
      // provider.setCustomParameters({
      //   display: 'popup'
      // });

      localStorage.setItem(
        'tempCred',
        JSON.stringify({
          email: this.$store.getters.getUserProfile.email,
          password: this.$store.getters.getUserProfile.password,
        }),
      );

      fb.auth.signInWithRedirect(facebookProvider);
    },
    async setFBAuthStatus(result) {
      this.facebookAuthUser = result;

      this.FB_ACCESS_TOKEN = result.credential.accessToken;

      if (
        result.credential.accessToken !== null &&
        result.credential.accessToken !== undefined
      ) {
        this.facebookAuthStatus = true;
      }

      let pagesOfUser = await axios.get(
        `https://graph.facebook.com/v8.0/me/accounts?access_token=${this.FB_ACCESS_TOKEN}`,
      );
      let pages = pagesOfUser.data.data;
      this.pages = pagesOfUser.data.data;

      pages.forEach(page => {
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
          }
        });
      } else {
      }
    },
    addListing() {
      this.instagramAccountData.description = this.description;
      this.instagramAccountData.price = Number(this.price);
      this.instagramAccountData.category = this.radio;
      this.instagramAccountData.ownerEmail = this.$store.getters.getUserProfile.email;
      this.instagramAccountData.ownerUsername = this.$store.getters.getUserProfile.username;
      this.instagramAccountData.dateCreated = new Date();

      let emptyVals = [];
      for (let elem in this.instagramAccountData) {
        if (elem == 'price' && this.instagramAccountData[elem] == 0) {
          emptyVals.push(
            elem.charAt(0).toUpperCase() + elem.slice(1) + ': cannot be 0.',
          );
        }
        if (this.instagramAccountData[elem] == null)
          emptyVals.push(elem.charAt(0).toUpperCase() + elem.slice(1));
      }
      if (emptyVals.length > 0) {
        this.missingValues = emptyVals;
      } else {
        this.missingValues = null;

        this.$store.dispatch(
          'addListingToUserAccount',
          this.instagramAccountData,
        );

        router.push('/listings');
      }
    },
    async findInstagramAcc(page) {
      this.IG_USER = await axios.get(
        `https://graph.facebook.com/v8.0/${page.id}?fields=instagram_business_account&access_token=${page.access_token}`,
      );

      try {
        const instaBusinessAccountID = this.IG_USER.data
          .instagram_business_account.id;

        const username = await axios.get(
          `https://graph.facebook.com/v8.0/${instaBusinessAccountID}?fields=username&access_token=${page.access_token}`,
        );

        const allListingsDataSearchID = firestore
          .collection('allListings')
          .doc(`${username.data.username}`);
        allListingsDataSearchID.get().then(async docSnapshot => {
          if (docSnapshot.exists) {
            this.usernameAlreadyRegistered = true;
            this.instagramAccUsername = username.data.username;
            this.foundInstagramAcc = true;
          } else {
            this.usernameAlreadyRegistered = false;

            this.instagramAccUsername = username.data.username;
            this.foundInstagramAcc = true;

            // get # of posts
            let mediaObjIDs = [];
            const posts = await axios.get(
              `https://graph.facebook.com/v8.0/${instaBusinessAccountID}/media?access_token=${page.access_token}`,
            );
            this.instagramAccountData.noOfPosts = posts.data.data.length;
            const postIDs = posts.data.data;
            const numOfPosts = posts.data.data.length;

            for (let i = 0; i < numOfPosts; i++) {
              mediaObjIDs.push(postIDs[i].id);
            }

            // average reach
            let reachData = await axios.get(
              `https://graph.facebook.com/v8.0/${instaBusinessAccountID}/insights?metric=reach&period=days_28&access_token=${page.access_token}`,
            );
            let reachVals = reachData.data.data[0].values;
            let reachValsSum = 0;

            for (let i = 0; i < reachVals.length; i++) {
              reachValsSum += reachVals[i].value;
            }

            let avgReach = reachValsSum / reachVals.length;

            // get followers
            let businessDiscoveryInsights = await axios.get(
              `https://graph.facebook.com/v8.0/${instaBusinessAccountID}?fields=business_discovery.username(${username.data.username}){followers_count,media_count}&access_token=${page.access_token}`,
            );

            // get profile picture url from insta api
            let profilePictureResponseObject = await axios.get(
              `https://graph.facebook.com/v8.0/${instaBusinessAccountID}/?fields=profile_picture_url&access_token=${page.access_token}`,
            );

            let followers =
              businessDiscoveryInsights.data.business_discovery.followers_count;
            let mediaCount =
              businessDiscoveryInsights.data.business_discovery.media_count;

            this.instagramAccountData.username = username.data.username;
            this.instagramAccountData.avatar =
              profilePictureResponseObject.data.profile_picture_url;
            this.instagramAccountData.noOfFollowers = followers;
            this.instagramAccountData.noOfPosts = mediaCount;
            this.instagramAccountData.reach = avgReach;
          }
        });
      } catch (error) {
        this.ERROR = 'No Instagram account is connected to this Facebook Page.';
      }
    },
    logBackIn() {
      const tempCred = JSON.parse(localStorage.getItem('tempCred'));
      this.$store.dispatch('login', {
        email: tempCred.email,
        password: tempCred.password,
      });
    },
  },
  created() {
    fb.auth
      .getRedirectResult()
      .then(result => {
        this.setFBAuthStatus(result);
      })
      .catch(err => {
        if (err.code == 'auth/account-exists-with-different-credential') {
          this.setFBAuthStatus(err);
        }
      });
  },
  watch: {
    radio(val) {},
    pageNameHeader(val) {
      this.setPageID(val);
    },
    chosenPage(val) {
      this.findInstagramAcc(val);
    },
  },
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
#usernameLabelCategory {
  margin-bottom: 20px;
}
@media only screen and (max-width: 768px) {
  .categoryOption {
    width: 100%;
  }
}
</style>
