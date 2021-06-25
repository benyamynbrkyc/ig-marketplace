<template>
  <div class="wrapper" id="outerWrapper">
    <md-card id="mainCard" class="md-card-login">
      <div class="section" id="intro">
        <div class="container-fluid" id="flexContainer">
          <div class="row" id="introRow">
            <div
              class="col-6"
              id="backG1"
              style="text-align: left; max-height: 250px;"
            >
              <img :src="profile.avatar" alt="" />
              <h3 style="font-size: 0.85rem; color: green; margin-bottom: 0px;">
                Welcome
              </h3>
              <h3
                class="listingSubTextTitle"
                style="font-size: 1.1rem; margin-top: 0px !important; margin-right: 10px;"
              >
                {{ profile.username }}
                <img
                  src="../assets/img/verified.jpg"
                  style="max-width:20px; margin: 0;"
                />
              </h3>
              <!-- TODO: get these links -->
              <router-link
                to="/chat"
                id="messagesLink"
                class="description sellerActions"
              >
                Messages
              </router-link>
            </div>
            <div class="col-6" id="backG2">
              <div
                class="row"
                id="featureRow"
                style="margin-bottom: 10px; margin-top: 30px; background-color: white !important;"
              >
                <table>
                  <tr style="border-bottom: 3px solid #dddddd">
                    <th>Username</th>
                    <th>Followers</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Listed</th>
                  </tr>
                  <tr v-for="listing in listings" :key="listing.idUsername">
                    <td id="usernameLink">@{{ listing.username }}</td>
                    <td>{{ listing.noOfFollowers }}</td>
                    <td>{{ listing.price }}</td>
                    <td>{{ listing.category }}</td>
                    <td>
                      {{
                        new Date(listing.dateCreated).toLocaleDateString(
                          'en-GB'
                        )
                      }}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </md-card>
  </div>
</template>

<script>
import * as firebase from './firestore/index';
import { sampleListings } from './utils/Profile/index';
import store from './../store/store.js';

export default {
  components: {},
  bodyClass: 'profile-page',
  data() {
    return {
      // todo: enable real listings
      listings: [],
      // your profile
    };
  },
  props: {
    img: {
      type: String,
      default: require('@/assets/img/@symbol.png'),
    },
  },
  computed: {
    headerStyle() {
      return {
        background: `radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)`,
      };
    },
    profile() {
      const profile = store.getters.getUserProfile;
      return profile;
    },
  },
  async created() {
    // todo: await a call to firebase for listings
    // const userListings = sampleListings;

    const myListings = (this.listings = userListings);

    console.log(this.listings);
  },
};
</script>

<style scoped>
#outerWrapper {
  margin-bottom: 500px;
}
#backG1 {
  max-width: 220px;
  width: 100%;
  text-align: center;
  position: relative;
  background-color: white;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 22px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 22px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 22px 1px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
}
#backG1 img {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 75px;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 10px;
}
#backG1 h3 {
  margin-left: 10px;
}
@media only screen and (max-width: 768px) {
  #backG1 img {
    margin-bottom: 10px;
  }
}
@media only screen and (max-width: 768px) {
  #introRow {
    display: unset !important;
  }
  #backG1 {
    position: initial !important;
    display: block;
    width: 220px;
    margin-left: auto;
    margin-right: auto;
  }

  #backG1 img {
    position: unset !important;
    top: unset !important;
    bottom: unset !important;
    left: unset !important;
    right: unset !important;
  }

  #backG2 {
    display: block;
    max-width: unset !important;
    width: 100% !important;
  }
}
#backG1 .info {
  padding: 0 !important;
}
#backG1 h3,
h4 {
  font-weight: bold;
  font-size: 1rem;
}
#backG2 {
  max-width: 900px;
  width: 100%;
}
#backG2Listing {
  max-width: 1200px;
  width: 100%;
}
#backG2 .info {
  /* width: 100%; */
  max-width: none !important;
}
#backG2Listing .info {
  /* width: 100%; */
  max-width: none !important;
}
.backG {
  width: 100%;
  display: inline-block;
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}
#intro {
  padding-top: 0px;
  padding-bottom: 0px;
}
.main {
  box-shadow: none !important;
}
#introRow {
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

#flexContainer {
  max-width: 1500px;
  padding-right: 0px !important;
  padding-left: 0px !important;
}

.itemInfo {
  background-color: white;
  height: 127px;
  width: 270px;
  border: none;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 22px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 22px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 22px 1px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
}

#featureRow {
  display: flex;
  width: 100%;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
#featureRow .info {
  font-weight: bold;
  text-transform: uppercase;
  padding-top: 3px !important;
  padding-bottom: 3px !important;
  padding-right: 10px !important;
  padding-left: 10px !important;
}

@media only screen and (min-width: 768px) {
  #featureRow .info {
    min-width: 129px !important;
    /* max-width: 200px !important; */
  }
}
@media only screen and (max-width: 768px) {
}

#featureRow img {
  max-height: 25px;
  width: auto;
}
@media only screen and (min-width: 768px) {
  div.secondRow > .info {
    min-width: 129px !important;
    max-width: 200px !important;
  }
  .lastFeatureItem {
    min-width: 170px !important;
  }
}
#deliveryImg {
  height: auto !important;
  width: 45px !important;
}

#aboutText h2 {
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.4rem;
  color: #3a7571;
}
#aboutTextWrapper {
  padding-left: 5px;
  padding-right: 5px;
  background-color: #d9e1e0 !important;
  border-radius: 5px !important;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.377);
  line-height: 1.2rem;
}

#aboutTextWrapper p {
  color: #4d5554;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0;
}
#mainCard {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: none;
}

.card-header-wrapper {
  background-color: #3a7571 !important;
  color: white;
}

.description {
  text-align: center;
  font-size: 1.2em;
  padding: 0;
}
.innerListingItem {
  margin-top: 15px;
  margin-left: 10px;
}
.innerListingItem > * {
  display: inline-block !important;
}
.innerListingItem img {
  margin-top: -5px;
}
.listingSubTextTitle {
  text-transform: uppercase;
  font-size: 1rem;
  color: #3fa1b8;
  word-wrap: break-word;
}
h4 {
  font-size: 1.6rem;
}
#featureRow > * {
  text-align: left;
}
.wrapper {
  max-width: 1140px;
  padding-top: 130px;
  margin-left: auto;
  margin-right: auto;
}
.sellerActions {
  font-size: 0.9rem;
  text-align: left !important;
  margin-left: 10px !important;
  font-weight: bolder;
  line-height: 2.5rem;
}

@media only screen and (max-width: 1080px) {
  #introRow {
    display: unset !important;
  }
  #backG1 {
    margin-left: auto;
    margin-right: auto;
  }
  #backG2 {
    margin-left: auto;
    margin-right: auto;
  }
  #description {
    margin-left: auto !important;
    margin-right: auto !important;
    width: 90% !important;
  }
}
@media only screen and (max-width: 850px) {
  .itemInfo {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
#description {
  max-width: unset;
  width: 100%;
  margin-left: 20px;
  margin-right: 250px;
  height: auto;
}
#descriptionText {
  font-weight: normal;
  line-height: 10px;
  font-size: 1rem;
  text-align: justify;
  text-transform: none;
  padding-bottom: 10px;
  word-break: break-all;
  white-space: pre-wrap;
}
#description .info {
  max-width: unset;
  width: 100%;
}
footer {
  padding-top: -1000px;
}
#userAccountImage {
  width: 68px !important;
  height: 68px !important;
  max-height: unset !important;
  border-radius: 50%;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 12px;
  color: #243e59;
  font-size: 14px;
}

#messagesLink {
  color: #243e59;
  font-weight: bold;
  padding: 10px 20px 10px 20px;
}
#messagesLink:hover {
  background: rgb(236, 236, 236) !important;
  color: #243e59 !important;
  cursor: pointer;
}
#usernameLink {
  color: #17a2b8;
}
#usernameLink:hover {
  text-decoration: underline;
  cursor: pointer;
}
#headerRow {
  border-bottom: 2px !important;
}
</style>
