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
            <SellCard style="text-align: left;">
              <h3 slot="title" class="card-title">Sell - Add a Listing</h3>
              <h6 slot="title" class="card-title">
                <i class="fab fa-instagram" style="padding-right:3px"></i>
                &nbsp; Account Verification process
              </h6>

              <!-- todo: add description here -->
              <p slot="title" class="description" id="disclaimer">
                In order to add a listing, you have to prove you own the account
                you are trying to sell. In order to be eligible, your account
                must:
                <span>
                  <ul>
                    <li>Have at least 2000 followers</li>
                    <li>Be public</li>
                    <li>
                      Have BSSSVERIFICATION in bio (only needed when adding a
                      new listing, you can delete it after, the code is used for
                      verifying your account and ensuring you are not a bot)
                    </li>
                  </ul>
                </span>
              </p>

              <h6
                style="text-transform: none; text-align: left; font-size: 16px; padding-bottom: 10px;"
                class="description"
                slot="title"
              >
                <span style="padding-right: 5px;"
                  >Please enter your account name (without the '@' sign): <br />
                </span>
                <input
                  id="usernameInput"
                  style="border: none; background: none; color: white;"
                  type="text"
                  placeholder="Your username here"
                  v-model="instaUsername"
                />
                <md-button
                  id="verifyButton"
                  @click="verifyAccount(instaUsername)"
                  >Verify my account</md-button
                >
              </h6>

              <h6 class="description" style="text-align: left;" slot="title">
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
      // new
      instaUsername: '',
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
    //  see what you can use from this
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

    // trigger
    async verifyAccount(instaUsername) {
      axios.defaults.headers.post['Content-Type'] =
        'application/json;charset=utf-8';
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      const response = await axios.get(
        'https://instagram.com/' + 'benyamynbrkyc' + '/?__a=1',
      );

      console.log(response);
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
#usernameInput::placeholder {
  color: rgba(255, 255, 255, 0.897);
  text-decoration: underline;
}
#verifyButton {
  background-color: whitesmoke !important;
  color: black !important;
}
</style>
