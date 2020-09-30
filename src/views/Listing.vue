<template>
  <div class="wrapper">
    <md-card id="mainCard" class="md-card-login">
      <div class="section" id="intro" @click="openListing()">
        <div class="container-fluid" id="flexContainer">
          <div class="row" id="introRow">
            <div class="col-6" id="backG2">
              <div
                class="row"
                id="featureRow"
                style="margin-bottom: 10px; margin-top: 30px;"
              >
                <div class="info itemInfo">
                  <div class="row innerListingItem">
                    <div class="icon">
                      <img
                        src="@/assets/img/listingSubIcons/followers.png"
                        alt=""
                      />
                    </div>
                    <h4 class="info" style="line-height: 2rem !important;">
                      <span class="listingSubTextTitle">Username</span>
                      <br />
                      @***kyc
                    </h4>
                  </div>
                </div>
                <div class="info itemInfo">
                  <div class="row innerListingItem">
                    <div class="icon">
                      <img
                        src="@/assets/img/listingSubIcons/posts.png"
                        alt=""
                      />
                    </div>
                    <h4 class="info" style="line-height: 2rem !important;">
                      <span class="listingSubTextTitle">Followers</span> <br />
                      Username
                    </h4>
                  </div>
                </div>
                <div class="info itemInfo" id="categoryTag">
                  <div class="row innerListingItem lastFeatureItem">
                    <div class="icon">
                      <img
                        src="@/assets/img/listingSubIcons/category.png"
                        alt=""
                      />
                    </div>
                    <h4 class="info" style="line-height: 2rem !important;">
                      <span class="listingSubTextTitle">Followers</span> <br />
                      Username
                    </h4>
                  </div>
                </div>
              </div>
              <!-- SECOND ROW -->
              <div
                class="row secondRow"
                id="featureRow"
                style="margin-top: 30px"
              >
                <div class="info itemInfo">
                  <div class="row innerListingItem">
                    <div class="icon">
                      <img
                        src="@/assets/img/listingSubIcons/price.png"
                        alt=""
                      />
                    </div>
                    <h4 class="info" style="line-height: 2rem !important;">
                      <span class="listingSubTextTitle">Followers</span> <br />
                      Username
                    </h4>
                  </div>
                </div>
                <div class="info itemInfo">
                  <div class="row innerListingItem">
                    <div class="icon">
                      <img
                        src="@/assets/img/listingSubIcons/likeperpost.png"
                        alt=""
                      />
                    </div>
                    <h4 class="info" style="line-height: 2rem !important;">
                      <span class="listingSubTextTitle">Followers</span> <br />
                      Username
                    </h4>
                  </div>
                </div>
                <div class="info itemInfo" id="categoryTag">
                  <div class="row innerListingItem lastFeatureItem">
                    <div class="icon">
                      <img
                        src="@/assets/img/listingSubIcons/author.png"
                        alt=""
                      />
                    </div>
                    <h4 class="info" style="line-height: 2rem !important; ">
                      <span class="listingSubTextTitle">Reach</span><br />
                      12,000
                      <img src="../assets/img/verified.jpg" alt="" />
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6" id="backG1" style="text-align: left;">
              <img src="../assets/img/verified.jpg" alt="" />
              <h3 style="font-size: 0.85rem; color: green; margin-bottom: 0px;">
                Seller
              </h3>
              <h3
                class="listingSubTextTitle"
                style="font-size: 1.1rem; margin-top: 0px !important; "
              >
                SellerName
              </h3>
              <p class="description sellerActions">
                <md-icon style="margin-right: 7px;">mail</md-icon> Contact
                Seller
              </p>
              <p
                class="description sellerActions"
                style="background-color: #e3fed6; display:inline; padding: 5px 3px  5px 0px"
              >
                <md-icon style="margin-right: 7px; color: green;">lock</md-icon>
                Buy account with Escrow
              </p>
              <p class="description sellerActions">
                <md-icon style="margin-right: 7px; color: red;"
                  >report_problem</md-icon
                >
                Report listing
              </p>
            </div>
          </div>
        </div>
      </div>
    </md-card>
  </div>
</template>

<script>
export default {
  components: {},
  bodyClass: 'profile-page',
  data() {
    return {};
  },
  props: {
    img: {
      type: String,
      default: require('@/assets/img/@symbol.png')
    }
  },
  computed: {
    headerStyle() {
      return {
        background: `radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)`
      };
    },
    listingID() {
      return this.$route.params.id;
    }
  },
  created() {}
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
    max-width: unset !important;
    width: 100% !important;
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
</style>
