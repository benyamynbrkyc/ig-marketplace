<template>
  <md-card
    id="mainCard"
    class="md-card-login"
    :class="{ 'md-card-hidden': cardHidden }"
  >
    <div class="section" id="intro">
      <div class="container-fluid" id="flexContainer">
        <div class="row" id="introRow">
          <div class="col-6" id="backG1">
            <img
              src="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-19/s150x150/118284985_354124242280580_9210287956944691765_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_ohc=SrW7ppYlqU8AX8hkFCS&oh=7e1b52c0553427bac4f98e596a2f445a&oe=5F71FED9"
              alt=""
            />
          </div>
          <div class="col-6" id="backG2">
            <div class="row" id="featureRow" style="margin-bottom: 10px;">
              <div class="info">
                <div class="row innerListingItem">
                  <div class="icon">
                    <img
                      src="@/assets/img/listingSubIcons/followers.png"
                      alt=""
                    />
                  </div>
                  <h4 class="info" style="line-height: 1rem !important;">
                    10.000 <br />
                    <span class="listingSubTextTitle">Followers</span>
                  </h4>
                </div>
              </div>
              <div class="info">
                <div class="row innerListingItem">
                  <div class="icon">
                    <img src="@/assets/img/listingSubIcons/posts.png" alt="" />
                  </div>
                  <h4 class="info" style="line-height: 1rem !important;">
                    15 <br />
                    <span class="listingSubTextTitle">Posts</span>
                  </h4>
                </div>
              </div>
              <div class="info" id="categoryTag">
                <div class="row innerListingItem lastFeatureItem">
                  <div class="icon">
                    <img
                      src="@/assets/img/listingSubIcons/category.png"
                      alt=""
                    />
                  </div>
                  <h4 class="info" style="line-height: 1rem !important; ">
                    Entertainment <br />
                    <span class="listingSubTextTitle">Category</span>
                  </h4>
                </div>
              </div>
            </div>
            <!-- SECOND ROW -->
            <div class="row secondRow" id="featureRow">
              <div class="info">
                <div class="row innerListingItem">
                  <div class="icon">
                    <img src="@/assets/img/listingSubIcons/price.png" alt="" />
                  </div>
                  <h4 class="info" style="line-height: 1rem !important;">
                    $800 <br />
                    <span class="listingSubTextTitle">Price</span>
                  </h4>
                </div>
              </div>
              <div class="info">
                <div class="row innerListingItem">
                  <div class="icon">
                    <img
                      src="@/assets/img/listingSubIcons/likeperpost.png"
                      alt=""
                    />
                  </div>
                  <h4 class="info" style="line-height: 1rem !important;">
                    155 <br />
                    <span class="listingSubTextTitle">Likes Per Post</span>
                  </h4>
                </div>
              </div>
              <div class="info" id="categoryTag">
                <div class="row innerListingItem lastFeatureItem">
                  <div class="icon">
                    <img src="@/assets/img/listingSubIcons/author.png" alt="" />
                  </div>
                  <h4 class="info" style="line-height: 1rem !important; ">
                    @username <br />
                    <span class="listingSubTextTitle">Author</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </md-card>
</template>

<style scoped>
#outerWrapper {
  width: 100%;
  padding-left: 0px !important;
  padding-right: 0px !important;
  display: block;
}
#backG1 {
  max-width: 100px;
  width: 100%;
  text-align: center;
  position: relative;
}
#backG1 img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 75px;
  border-radius: 50%;
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
}

@media only screen and (min-width: 768px) {
  #featureRow .info {
    min-width: 129px !important;
    max-width: 200px !important;
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
  margin-bottom: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
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
.innerListingItem > * {
  display: inline-block !important;
}
.innerListingItem img {
  margin-top: -20px;
}
.listingSubTextTitle {
  text-transform: uppercase;
  font-size: 0.7rem;
  color: #3fa1b8;
}
#featureRow > * {
  text-align: left;
}
</style>

<script>
export default {
  name: 'ListingCard',
  props: {
    headerColor: {
      type: String,
      default: '2e715e'
    }
  },
  data() {
    return {
      cardHidden: true
    };
  },
  beforeMount() {
    setTimeout(this.showCard, 400);
  },
  methods: {
    showCard: function() {
      this.cardHidden = false;
    },
    getClass: function(headerColor) {
      return 'md-card-header-' + headerColor + '';
    }
  }
};
</script>

<style lang="css"></style>
