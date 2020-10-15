<template>
  <div class="wrapper">
    <md-card id="mainCard" class="md-card-login">
      <div class="section" id="intro">
        <div class="container">
          <!-- TODO: Add if mobile here and push it below -->
          <h1
            style="margin-left: 20px; margin-bottom: 40px; text-align: center;"
          >
            {{ sellerName }}'s account
          </h1>
        </div>

        <div class="container-fluid" id="flexContainer">
          <div class="row" id="introRow">
            <div class="col-6" id="backG2"></div>
            <div class="col-6" id="backG1" style="text-align: left;">
              <img :src="avatar" alt="" />
              <h3 style="font-size: 0.85rem; color: green; margin-bottom: 0px;">
                Seller
              </h3>
              <h3
                class="listingSubTextTitle"
                style="font-size: 1.1rem; margin-top: 0px !important; margin-right: 10px;"
              >
                {{ sellerName }}
                <img
                  src="../assets/img/verified.jpg"
                  style="max-width:20px; margin: 0;"
                />
              </h3>
              <!-- TODO: get these links -->
              <p
                id="contactSeller"
                class="description sellerActions"
                @click="openRoomForUser()"
              >
                <md-icon style="margin-right: 7px;">mail</md-icon> Contact
                Seller
              </p>
            </div>
          </div>
          <div
            data-v-9d51a18c=""
            id="featureRow"
            class="row"
            style="margin-bottom: 10px; margin-top: 30px; background-color: transparent;"
          >
            <div
              data-v-9d51a18c=""
              id="description"
              style="background-color: transparent; box-shadow: none;"
              class="info itemInfo"
            >
              <h4
                v-if="noData == false"
                class="title"
                style="margin-left: 20px; margin-top: 20px;"
              >
                Listings
              </h4>
              <h3
                v-if="noData == true"
                class="title"
                style="margin-left: 20px;"
              >
                No listings
              </h3>
              <div
                data-v-9d51a18c=""
                class="row innerListingItem lastFeatureItem"
              >
                <ProfileListingCard
                  style="background-color: white;"
                  v-for="listing in allListings"
                  :key="listing._id"
                  :avatar="listing.avatar"
                  :followers="listing.noOfFollowers"
                  :posts="listing.noOfPosts"
                  :price="listing.price"
                  :reach="listing.reach"
                  :category="listing.category"
                  :id="listing._id"
                ></ProfileListingCard>
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
import ProfileListingCard from './../components/cards/ProfileListingCard';
import router from '../router';

export default {
  components: {
    ProfileListingCard
  },
  bodyClass: 'profile-page',
  data() {
    return {
      noData: false,
      allListings: [],
      sellerName: null,
      avatar: null,
      firebaseCurrentUserUsername: null
    };
  },
  methods: {
    async loadAllListingsForUser(userID) {
      this.allListings = [];
      firebase.db
        .doc(`/users/${userID}`)
        .get()
        .then(querySnapshot => {
          querySnapshot.data().listings.forEach(listingID => {
            firebase.db
              .doc(`/allListings/${listingID}`)
              .get()
              .then(listing => {
                this.noData = false;
                this.allListings.push(listing.data());
              })
              .catch(err => {
                this.noData = true;
              });
          });
        })
        .catch(err => {
          this.noData = true;
        });
    },
    getListingID(listingName) {
      firebase.db
        .doc(`/allListings/${listingName}`)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            return doc.data();
          });
        })
        .catch(err => {
          return err;
        });
    },
    loadUser() {
      firebase.db
        .doc(`/users/${this.userID}`)
        .get()
        .then(userSnapshot => {
          this.sellerName = userSnapshot.data().username;
          this.avatar = userSnapshot.data().avatar;
        })
        .catch(err => {
          this.sellerName = 'error';
          this.avatar = 'error';
        });
    },
    pushToSeller() {
      this.$router.push(`/profile/${String(this.ownerID)}`);
    },
    openRoomForUser() {
      firebase.db
        .doc(`/users/${this.userID}`)
        .get()
        .then(querySnapshot => {
          let username = querySnapshot.data().username;

          let firstCombo = username + '_' + this.firebaseCurrentUserUsername;
          let secondCombo = this.firebaseCurrentUserUsername + '_' + username;

          console.log(this.findCorrectRoom(firstCombo, secondCombo));
        })
        .catch(err => {
          this.$store.dispatch('showUnknownErrorBanner');
        });
    },
    findCorrectRoom(firstCombo, secondCombo) {
      let allRooms = [];
      let correctRoom;
      firebase.db
        .collection('chatRooms')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(room => {
            allRooms.push(room.id);
          });
          for (let i = 0; i < allRooms.length; i++) {
            if (allRooms[i] == firstCombo || allRooms[i] == secondCombo) {
              console.log('correctRoom', allRooms[i]);
              return `${allRooms[i]} `;
              break;
            }
          }
        })
        .catch(err => {
          this.$store.dispatch('showUnknownErrorBanner');
        });
    }
  },

  mounted() {
    this.loadUser();
    this.loadAllListingsForUser(this.userID);
  },
  created() {
    firebase.db
      .doc(`/users/${firebase.auth.currentUser.uid}`)
      .get()
      .then(querySnapshot => {
        this.firebaseCurrentUserUsername = querySnapshot.data().username;
      })
      .catch(err => {
        this.$store.dispatch('showUnknownErrorBanner');
      });
  },

  computed: {
    headerStyle() {
      return {
        background: `radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)`
      };
    },
    userID() {
      return this.$route.params.id;
    }
  }
};
</script>

<style scoped>
#outerWrapper {
  width: 100%;
  padding-left: 0px !important;
  padding-right: 0px !important;
  display: block;
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
    width: 100%;
    max-width: 400px;
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
  margin-top: -300px !important;
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
  /* height: 300px; */
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
  background-color: transparent;
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
    width: 90%;
    max-width: 400px;
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
  #featureRow {
    margin-top: 30px !important;
  }
}
@media only screen and (max-width: 850px) {
  #featureRow {
    display: unset !important;
  }
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
#contactSeller {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 5px 0 5px;
}
#contactSeller:hover {
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 23px -2px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: 0px 0px 23px -2px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 0px 23px -2px rgba(0, 0, 0, 0.28);
  transition: 0.5s;
}
</style>
