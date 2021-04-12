<template>
  <md-card
    id="mainCard"
    class="md-card-login"
    :class="{ 'md-card-hidden': cardHidden }"
  >
    <div class="section" id="intro">
      <div class="container-fluid" id="flexContainer">
        <div class="row" id="introRow">
          <div class="col-6" id="backG2">
            <div class="row" id="featureRow" style="margin-bottom: 10px;">
              <div class="info">
                <div class="row innerListingItem">
                  <h4 class="info" style="line-height: 1rem !important;">
                    <md-input
                      v-model="minPrice"
                      type="number"
                      min="1"
                    ></md-input>
                    <br />
                    <span
                      v-if="minPriceError == null"
                      class="listingSubTextTitle"
                      >$ Min Price</span
                    >
                    <span
                      v-if="minPriceError !== null"
                      class="listingSubTextTitleError"
                      >{{ minPriceError }}</span
                    >
                  </h4>
                </div>
              </div>
              <div class="info">
                <div class="row innerListingItem">
                  <h4 class="info" style="line-height: 1rem !important;">
                    <md-input
                      v-model="maxPrice"
                      type="number"
                      min="1"
                    ></md-input>
                    <br />
                    <span
                      v-if="maxPriceError == null"
                      class="listingSubTextTitle"
                      >$ Max Price</span
                    >
                    <span
                      v-if="maxPriceError !== null"
                      class="listingSubTextTitleError"
                      >{{ maxPriceError }}</span
                    >
                  </h4>
                </div>
              </div>
              <div class="info" id="categoryTag">
                <div class="row innerListingItem lastFeatureItem">
                  <div class="icon"></div>
                  <h4 class="info" style="line-height: 1rem !important; ">
                    <select id="selectCategory" v-model="selectedCategory">
                      <option value="All Categories">All Categories</option>
                      <option
                        name="category"
                        id="categorySelectDropdown"
                        v-for="option in options"
                        :value="option"
                        :key="option"
                        >{{ option }}</option
                      >
                    </select>
                    <br />
                    <span class="listingSubTextTitle">Category</span>
                  </h4>
                </div>
              </div>
            </div>
            <!-- SECOND ROW -->
            <div class="row secondRow" id="featureRow">
              <div class="info">
                <div class="row innerListingItem">
                  <h4 class="info" style="line-height: 1rem !important;">
                    <md-input
                      v-model="minFollowers"
                      type="number"
                      min="1"
                    ></md-input>
                    <br />
                    <span
                      v-if="minFollowersError == null"
                      class="listingSubTextTitle"
                      >Min Followers</span
                    >
                    <span
                      v-if="minFollowersError !== null"
                      class="listingSubTextTitleError"
                      >{{ minFollowersError }}</span
                    >
                  </h4>
                </div>
              </div>
              <div class="info">
                <div class="row innerListingItem">
                  <h4 class="info" style="line-height: 1rem !important;">
                    <md-input
                      v-model="maxFollowers"
                      type="number"
                      min="100000000"
                    ></md-input>
                    <br />
                    <span
                      v-if="maxFollowersError == null"
                      class="listingSubTextTitle"
                      >Max Followers</span
                    >
                    <span
                      v-if="maxFollowersError !== null"
                      class="listingSubTextTitleError"
                      >{{ maxFollowersError }}</span
                    >
                  </h4>
                </div>
              </div>
              <div class="info" id="categoryTag">
                <div class="row innerListingItem">
                  <h4
                    class="info"
                    style="line-height: 1rem !important; margin-top: 5px;"
                  >
                    <button @click="filter()" id="filterButton">Filter</button>
                    <span class="listingSubTextTitleError" v-if="noData == true"
                      >No accounts found.</span
                    >
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

<script>
export default {
  name: 'FilterCard',
  props: {
    headerColor: {
      type: String,
      default: '2e715e',
    },
    allListings: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      cardHidden: true,
      selectedCategory: 'All Categories',
      options: [
        'Architecture & Interior',
        'Art & Design',
        'Blog & Lifestyle',
        'Business & Brand',
        'Cars & Bikes',
        'City & Country',
        'Educational & QA',
        'Fashion & Style',
        'Fitness & Sports',
        'Food & Nutrition',
        'Gaming & Entertainment',
        'Health & Beauty',
        'Humor & Memes',
        'Luxury & Motivation',
        'Movies TV & Fan Pages',
        'Pets & Animals',
        'Quotes & Text',
        'Reviews & Tutorials',
        'Tech & Computers',
        'Travel & Nature',
      ],
      minPrice: 1,
      maxPrice: 1000000,
      minFollowers: 1, // TODO: change to 2000
      maxFollowers: 100000000,
      minPriceError: null,
      maxPriceError: null,
      minFollowersError: null,
      maxFollowersError: null,
      unknownError: false,
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
    },
    getNoAvatarPic() {
      return require(`${'../../assets/img/faces/no-avatar.jpg'}`);
    },
    filter() {
      // check minPrice field
      if (Number(this.minPrice) < 1)
        this.minPriceError = 'Minimum price cannot be lower than $1.';
      else if (Number(this.minPrice) > this.maxPrice)
        this.minPriceError =
          'Minimum price cannot be higher than the maximum price.';
      else this.minPriceError = null;

      // check maxPrice field
      if (Number(this.maxPrice) > 1000000)
        this.maxPriceError = 'Maximum price cannot be higher than $1,000,000.';
      else if (Number(this.maxPrice) < this.minPrice)
        this.maxPriceError =
          'Maximum price cannot be lower than the minimum price.';
      else this.maxPriceError = null;

      // check minFollower field
      // if (Number(this.minFollowers) < 2)
      // TODO: change to 2000
      // this.minFollowersError = 'Accounts must have at least 2000 followers.';
      if (Number(this.minFollowers) > this.maxFollowers)
        this.minFollowersError =
          'Minimum followers filter cannot be higher than the maximum followers filter.';
      else this.minFollowersError = null;

      // check maxFollower field
      if (Number(this.maxFollowers) < this.minFollowers)
        this.maxFollowersError =
          'Maximum followers filter cannot be lower than the minimum followers filter.';
      else this.maxFollowersError = null;

      if (
        this.minPriceError == null &&
        this.maxPriceError == null &&
        this.minFollowersError == null &&
        this.maxFollowersError == null
      ) {
        let filterInfo = {
          minPrice: Number(this.minPrice),
          maxPrice: Number(this.maxPrice),
          category: this.selectedCategory,
          minFollowers: Number(this.minFollowers),
          maxFollowers: Number(this.maxFollowers),
        };

        this.$emit('filterData', filterInfo);
      } else {
        this.unknownError = true;
      }
    },
  },
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
  width: 100%;
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
  #featureRow .info {
    min-width: 129px !important;
    /* max-width: 200px !important; */
  }
}
@media only screen and (max-width: 768px) {
  #featureRow {
    display: unset !important;
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
  margin-bottom: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #3a7571;
}

#mainCard:hover {
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 23px -2px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: 0px 0px 23px -2px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 0px 23px -2px rgba(0, 0, 0, 0.28);
  transition: 0.5s;
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
  color: white;
}
.listingSubTextTitleError {
  color: white;
  border-bottom: 1px solid red;
  font-size-adjust: 0.5rem;
  text-transform: none;
}
#featureRow > * {
  text-align: left;
}
#filterButton {
  width: 100%;
  margin-bottom: 10px;
}
select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 4px;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
}

input {
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 4px;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
}

#filterButton {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #50f486;
  color: black;
  font-size: 1rem;
  border: none;
  border-radius: 3px;
}

@media only screen and (max-width: 768px) {
  input {
    width: 100%;
  }
}
/* For IE <= 11 */
select::-ms-expand {
  display: none;
}

#selectCategory {
  text-transform: capitalize;
}
#filterError {
  color: red;
  text-transform: none;
}
</style>
