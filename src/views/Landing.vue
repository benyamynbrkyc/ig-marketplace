<template>
  <div class="wrapper">
    <parallax class="section page-header" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="row" id="heroImgRow">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ig-marketplace.appspot.com/o/bs-logo-no-bg.png?alt=media&token=205ef9a4-6c6c-4033-a823-fa4d96e08bc4"
              id="heroImg"
            />
          </div>
          <div class="row" id="heroTextRow">
            <h1 id="heroTitle">
              <span id="socialSwap">BS Social Swap</span>
              <br />
              <span id="onlineMarket" style="text-transform: uppercase;"
                >The Safest Online Marketplace &nbsp;</span
              >
              <img id="checkmark" src="@/assets/img/checkmark.png" alt="" />
            </h1>
            <br />
            <h4 id="sellText">
              Buy and Sell Virtual Items
            </h4>
          </div>
          <br />
        </div>
      </div>
    </parallax>
    <!-- first section -->
    <div class="main main-raised">
      <div class="section" id="intro">
        <div class="container-fluid" id="flexContainer">
          <div class="row" id="introRow">
            <div class="col-6" id="backG1">
              <div class="backG">
                <div class="info">
                  <h2 class="info" style="font-weight: bold;">
                    TRUSTPILOT
                  </h2>
                  <img
                    src="@/assets/img/trustpilot.png"
                    style="max-height: 50px; margin-bottom:30px;"
                    alt=""
                  />

                  <h3 class="info">WhatsApp</h3>
                  <h4 class="info">+387 64 44 25 098</h4>

                  <h3 class="info">Email</h3>
                  <h4 class="info">support@socialswapbs.com</h4>
                </div>
              </div>
            </div>
            <div class="padding"></div>

            <div class="col-6" id="backG2">
              <div class="row" id="featureRow">
                <div class="info">
                  <div class="icon">
                    <img src="@/assets/img/featureRow/1.png" alt="" />
                  </div>
                  <h4 class="info">24/7 Support</h4>
                </div>
                <div class="info">
                  <div class="icon">
                    <img src="@/assets/img/featureRow/2.png" alt="" />
                  </div>

                  <h4 class="info">Experience</h4>
                </div>
                <div class="info">
                  <div class="icon">
                    <img src="@/assets/img/featureRow/3.png" alt="" />
                  </div>

                  <h4 class="info">Escrow</h4>
                </div>
                <div class="info">
                  <div class="icon">
                    <img src="@/assets/img/featureRow/4.png" id="deliveryImg" />
                  </div>

                  <h4 class="info">Fast Delivery</h4>
                </div>
              </div>
              <div class="backG">
                <div class="info" id="aboutText">
                  <h2 class="info">About Us</h2>
                  <div id="aboutTextWrapper">
                    <p class="info">
                      BS Social Swap was created to offer a way for people to
                      trade their virtual items. There are certain limitations
                      to what you can expect from us and they are: <br />
                    </p>
                    <p class="info">
                      BS Social Swap does guarantee any claims or promises made
                      by sellers. <br />
                    </p>
                    <p class="info">
                      BS Social Swap does monitor the authenticity of any users
                      or members of our site.
                    </p>

                    <p class="info">
                      BS Social Swap is not liable for what happens after the
                      listing ends.
                    </p>
                    <p class="info">
                      If we catch you trying to spam or scam our users, we will
                      ban you without notice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- second section -->
    </div>
    <div class="section" id="listingHome">
      <div class="container-fluid" id="flexContainer">
        <div class="row" id="introRow">
          <div class="col-6" id="backG2Listing">
            <div class="row" id="featureRow">
              <!-- TODO: get these icons -->
              <!-- <div class="icon">
                <img
                  src="https://www.socialswapbs.com/wp-content/uploads/2020/08/instagram-sketched-1.png"
                  alt=""
                />
              </div> -->
              <h4 class="info">
                <span class="listingBuy">Buy Instagram Accounts</span>
              </h4>

              <div class="padding"></div>

              <!-- TODO: get these icons -->
              <!-- <div class="icon">
                <img
                  src="https://www.socialswapbs.com/wp-content/uploads/2020/06/tiktok.png"
                  alt=""
                />
              </div> -->
              <h4 class="info">
                <span class="listingBuy">Buy TikTok Accounts</span>
              </h4>

              <div class="padding"></div>

              <!-- TODO: get these icons -->
              <!-- <div class="icon">
                <img
                  src="https://www.socialswapbs.com/wp-content/uploads/2020/07/icons8-twitter-52.png"
                  alt=""
                />
              </div> -->
              <h4 class="info">
                <span class="listingBuy" id="twitterAcc"
                  >Buy Twitter Accounts</span
                >
              </h4>

              <div class="padding"></div>

              <!-- TODO: get these icons -->
              <!-- <div class="icon">
                <img
                  src="https://www.socialswapbs.com/wp-content/uploads/2020/08/delivery.png"
                  alt=""
                />
              </div> -->
              <h4 class="info">
                <span class="listingBuy" id="virtualServ"
                  >Buy Virtual Services</span
                >
              </h4>
            </div>
            <div class="backG">
              <div class="info" id="aboutText">
                <div id="recentInstaWrapper">
                  <p class="info">
                    Recent Instagram listings
                  </p>
                </div>
              </div>
            </div>
            <br />
            <ListingCardMain
              v-for="listing in recents"
              :key="listing.id"
              :avatar="listing.data.avatar"
              :followers="listing.data.noOfFollowers"
              :posts="listing.data.noOfPosts"
              :price="listing.data.price"
              :reach="listing.data.reach"
              :category="listing.data.category"
              :author="listing.data.ownerUsername"
              :id="listing.id"
            ></ListingCardMain>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListingCardMain from '../components/cards/ListingCardMain';
import * as firebase from './firestore/index';

export default {
  components: {
    ListingCardMain,
  },
  bodyClass: 'landing-page',
  props: {
    header: {
      type: String,
      default: require('@/assets/img/header-backg.jpeg'),
    },
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      recents: [],
    };
  },
  methods: {
    loadRecents() {
      firebase.db
        .collection('/allListings')
        .orderBy('dateCreated')
        .get()
        .then(snapshot => {
          let recents = [];
          snapshot.forEach(doc => {
            let listingData = {
              data: doc.data(),
              id: doc.id,
            };
            recents.push(listingData);
          });

          for (let i = recents.length - 1; i > recents.length - 4; i--)
            this.recents.push(recents[i]);
        });
    },
  },
  mounted() {},
  created() {
    console.log('running load recents');
    this.loadRecents();
  },
  computed: {
    headerStyle() {
      return {
        background: '#3a7571',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
<style scoped>
#backG1 {
  max-width: 324px;
  width: 100%;
  text-align: center;
  background-color: #d9e1e0;
}
#backG1 h3,
h4 {
  font-weight: bold;
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
  width: 100%;
  max-width: none !important;
}
#backG2Listing .info {
  width: 100%;
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
  width: 95%;
  display: flex;
  justify-content: space-around;
}

#flexContainer {
  max-width: 1500px;
  padding-right: 0px !important;
  padding-left: 0px !important;
}

@media only screen and (max-width: 768px) {
  #introRow {
    display: block;
  }
  #featureRow {
    display: block !important;
  }
  #backG1 {
    max-width: unset !important;
  }
}

#featureRow {
  display: flex;
  width: 100%;
  text-align: center;
}
#featureRow .info {
  font-weight: bold;
  text-transform: uppercase;
}

#featureRow img {
  max-width: 35px;
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

#heroImgRow {
  display: block;
  width: 100%;
  text-align: center;
}
#heroTextRow {
  text-align: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
#heroImg {
  margin-top: 20px;
  margin-bottom: 10px;
  max-width: 100px;
  display: inline;
}
#heroTitle {
  widows: 100%;
  text-align: center;
  display: inline-block;
  margin: auto;
  font-weight: bold;
  line-height: 70px;
}

#socialSwap {
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.359);
}
#onlineMarket {
  font-size: 1.8rem;
  color: aquamarine;
  font-weight: bolder;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.359);
  letter-spacing: 0.3rem;
}
#sellText {
  display: inline;
  width: 100%;
  text-align: center;
  margin-top: 70px;
  text-transform: uppercase;
  font-weight: bold;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.359);
  letter-spacing: 0.6rem;
}

#heroButtonContainer {
  width: 100%;
  display: inline;
  text-align: center;
}
.padding {
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
}
@media only screen and (max-width: 768px) {
  .padding {
    display: none;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
}
#limitations {
  padding-left: 10px;
}
.features-1 {
  margin-top: 100px;
  margin-bottom: 40px;
}

.features-2 {
  margin-bottom: 100px;
}
#listingInfo {
  display: inline-block;
  text-align: center;
}

.row > * {
  display: inline-block;
}

.info {
  padding-top: 5px;
  padding-bottom: 1px;
}

.info h3,
.info h2,
.info h5,
.info h6,
.info h4 {
  margin-top: 0px !important;
}

.info h5,
.info h6,
.info h4 {
  padding-top: 0px;
  padding-bottom: 20px;
}

@media only screen and (max-width: 768px) {
  .titleName {
    font-size: 1.2em;
  }
}

@media only screen and (max-width: 480px) {
  .titleName {
    font-size: 1em;
  }
}
.backG {
  background: #ffffff;
  border-radius: 25px;
  box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.171),
    0 7px 10px -5px rgba(0, 0, 0, 0.15);
}
/* bottom half */
#listingHome {
  background-color: #3a7571;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
#listingHome #featureRow {
  padding-top: 10px;
}

#listingHome #featureRow h4 {
  color: white;
  font-size: 0.9rem;
  text-align: left;
  margin-left: 15px;
  text-transform: capitalize;
}
@media only screen and (max-width: 768px) {
  #listingHome #featureRow h4 {
    text-align: center;
    margin-left: 0px;
  }
}
.listingBuy {
  border: 2px solid black;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.788);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 7px;
  padding-bottom: 7px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
}
.listingBuy:hover {
  background-color: #252d2c;
}
@media only screen and (max-width: 768px) {
  #listingHome #featureRow div {
    margin-top: 20px;
  }
  #listingHome #featureRow h4 {
    margin-top: 5px;
  }
}
#recentInstaWrapper {
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 7px;
  padding-top: 7px;
  background-color: #1d3a38 !important;
  border: 1px solid black;
  letter-spacing: 0.3rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.377);
  line-height: 1.2rem;
  text-transform: uppercase;
  text-align: center;
}

#recentInstaWrapper p {
  color: #ffffff;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0px !important;
}
#twitterAcc,
#virtualServ {
  background-color: black;
}
#twitterAcc:hover,
#virtualServ:hover {
  background-color: #252d2c;
}
</style>
