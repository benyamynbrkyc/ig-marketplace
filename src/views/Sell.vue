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
                  @keydown="usernameKeydown($event)"
                  :disabled="showCheckAvailability === false"
                />
                <md-button
                  id="verifyButton"
                  v-if="showCheckAvailability === true"
                  @click="verifyAccount(instaUsername)"
                  >Verify</md-button
                >
              </h6>

              <h6
                v-if="showFoundUser"
                class="description"
                style="text-align: left;"
                slot="title"
              >
                Account
                <span style="font-weight:bold;">{{ instaUsername }}</span> is
                verified.
              </h6>

              <md-field v-if="showForm" class="md-form-group" slot="inputs">
                <md-icon style="right:unset !important;">article</md-icon>

                <md-textarea
                  style="padding-left:25px !important;"
                  v-model="formValues.description"
                  maxlength="512"
                ></md-textarea>
                <br />
              </md-field>

              <md-field v-if="showForm" class="md-form-group" slot="inputs">
                <md-icon>attach_money</md-icon>
                <!-- <label id="usernameLabel">Price</label> -->
                <md-input
                  v-model="formValues.price"
                  type="number"
                  min="1"
                ></md-input>
                <br />
              </md-field>

              <md-field
                class="md-form-group"
                slot="inputs"
                id="categoryRadio"
                style="flex-wrap: wrap;"
                v-if="showForm"
                ><md-icon>category</md-icon>

                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Architecture & Interior"
                  >Architecture & Interior</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Art & Design"
                  >Art & Design</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Blog & Lifestyle"
                  >Blog & Lifestyle</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Business & Brand"
                  >Business & Brand</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Cars & Bikes"
                  >Cars & Bikes</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="City & Country"
                  >City & Country</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Educational & QA"
                  >Educational & QA</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Fashion & Style"
                  >Fashion & Style</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Fitness & Sports"
                  >Fitness & Sports</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Food & Nutrition"
                  >Food & Nutrition</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Gaming & Entertainment"
                  >Gaming & Entertainment</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Health & Beauty"
                  >Health & Beauty</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Humor & Memes"
                  >Humor & Memes</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Luxury & Motivation"
                  >Luxury & Motivation</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Movies, TV & Fan Pages"
                  >Movies, TV & Fan Pages</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Pets & Animals"
                  style="color: black !important;"
                  >Pets & Animals</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Quotes & Text"
                  >Quotes & Text</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Reviews & Tutorials"
                  >Reviews & Tutorials</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Tech & Computers"
                  >Tech & Computers</md-radio
                >
                <md-radio
                  class="categoryOption"
                  v-model="formValues.radio"
                  value="Travel & Nature"
                  >Travel & Nature</md-radio
                >
              </md-field>

              <md-button
                @click="addListing()"
                slot="footer"
                class="md-simple md-success md-lg"
                v-if="showForm"
              >
                Add Listing
              </md-button>
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
import './utils/Sell';
import { calculateMissingValues } from './utils/Sell';
const firestore = firebase.firestore();

export default {
  components: {
    SellCard,
  },
  bodyClass: 'login-page',
  data() {
    return {
      instaUsername: '',
      // form values
      formValues: {
        description: null,
        price: null,
        radio: null,
      },
      // todo: fix username already registered
      usernameAlreadyRegistered: false,

      showCheckAvailability: true,
      showFoundUser: false,
      showForm: false,
      // fetched user from api
      listing: {
        avg_likes: null,
        bio_description: null,
        followers: null,
        full_name: null,
        is_private: null,
        is_verified: null,
        posts_count: null,
        profile_pic_url: null,
        reach: null,
        username: null,
        description: null,
        price: null,
        category: null,
        ownerEmail: null,
        ownerUsername: null,
        dateCreated: null,
      },
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
      const { description, price, radio } = this.formValues;

      let missingValues = [];

      calculateMissingValues(missingValues, description, price, radio);

      if (missingValues.length == 0) {
        this.listing.description = this.formValues.description;
        this.listing.price = Number(this.formValues.price);
        this.listing.category = this.formValues.radio;
        this.listing.ownerEmail = this.$store.getters.getUserProfile.email;
        this.listing.ownerUsername = this.$store.getters.getUserProfile.username;
        this.listing.dateCreated = new Date();

        this.$store.dispatch('addListingToUserAccount', this.listing);

        console.log(this.listing);

        router.push('/profile');
      } else {
        alert(`Missing values: ${missingValues.join(', ')}`);
      }
    },

    // trigger
    async verifyAccount(instaUsername) {
      try {
        const url = `${process.env.VUE_APP_API_DOMAIN_LOCALHOST}/user/checkInsta/${instaUsername}`;

        const response = await axios.get(url);

        if (response.data.status === 406) {
          return window.alert(response.data.message);
        }

        this.listing = response.data.user.body;

        this.showCheckAvailability = false;
        this.showFoundUser = true;
        this.showForm = true;
      } catch (err) {
        window.alert('This instagram user does not exist.');
        console.log(err);
      }
    },
    usernameKeydown(e) {
      if (
        !/^([A-Za-z0-9._](?:(?:[A-Za-z0-9._]|(?:\.(?!\.))){2,28}(?:[A-Za-z0-9._]))?)$/gim.test(
          e.key
        )
      ) {
        e.preventDefault();
      }
    },
  },
  created() {
    fb.auth
      .getRedirectResult()
      .then((result) => {
        this.setFBAuthStatus(result);
      })
      .catch((err) => {
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
