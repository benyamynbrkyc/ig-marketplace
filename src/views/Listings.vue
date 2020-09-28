<template>
  <div class="wrapper">
    <parallax class="section page-header" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <h1>All Listings</h1>
          <button @click="loadSampleData()">Load Sample Data</button>
          <br />
          <h3 class="title text-center">Most Recent</h3>
          <br />
          <div
            class="row"
            id="featuredRow"
            v-if="mostRecentListings.length !== 0"
          >
            <div
              class="col"
              v-for="listing in mostRecentListings"
              :key="listing.idUsername"
            >
              <div class="classWithPad">
                <FeaturedCard
                  id="colFeaturedCardContainer"
                  :avatar="listing.avatar"
                  :followers="listing.noOfFollowers"
                  :posts="listing.noOfPosts"
                  :price="listing.price"
                  :reach="listing.reach"
                ></FeaturedCard>
              </div>
            </div>
          </div>
          <div
            class="row"
            id="featuredRow"
            v-if="mostRecentListings.length == 0"
          >
            No data found
          </div>
          <br />
          <br />
          <md-toolbar class="md-primary" id="toolbar">
            <div class="md-toolbar-row">
              <div class="md-toolbar-section-start">
                <h3 class="md-title" id="md-title">Filters</h3>
              </div>
              <div class="md-toolbar-section-end">
                <md-button
                  class="md-just-icon md-simple md-toolbar-toggle"
                  id="mobileHamburgerListing"
                  @click="openModal()"
                  style="background-color: white !important; "
                >
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </md-button>

                <div class="md-collapse">
                  <md-list>
                    <!-- <md-list-item href="#user">
                      <i class="material-icons">person</i>
                      <p class="hidden-lg hidden-md">Profile</p>
                    </md-list-item> -->
                    <!-- price item -->
                    <li class="md-list-item">
                      <a
                        href="javascript:void(0)"
                        class="md-list-item-router md-list-item-container md-button-clean dropdown"
                      >
                        <div class="md-list-item-content">
                          <drop-down direction="down">
                            <md-button
                              slot="title"
                              class="md-button md-button-link md-simple dropdown-toggle"
                              data-toggle="dropdown"
                              style="color:black !important;"
                            >
                              <i
                                class="material-icons"
                                style="color:black !important;"
                                >attach_money</i
                              >
                              <p>Price: {High to Low - Default}</p>
                            </md-button>
                            <ul class="dropdown-menu">
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">
                                    High to Low
                                  </p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Low to High</p>
                                </a>
                              </li>
                            </ul>
                          </drop-down>
                        </div>
                      </a>
                    </li>
                    <!-- followers item -->
                    <li class="md-list-item">
                      <a
                        href="javascript:void(0)"
                        class="md-list-item-router md-list-item-container md-button-clean dropdown"
                      >
                        <div class="md-list-item-content">
                          <drop-down direction="down">
                            <md-button
                              slot="title"
                              class="md-button md-button-link md-simple dropdown-toggle"
                              data-toggle="dropdown"
                              style="color:black !important;"
                            >
                              <i
                                class="material-icons"
                                style="color:black !important;"
                                >people_alt</i
                              >
                              <p>Followers: {High to Low - Default}</p>
                            </md-button>
                            <ul class="dropdown-menu">
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">
                                    High to Low
                                  </p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Low to High</p>
                                </a>
                              </li>
                            </ul>
                          </drop-down>
                        </div>
                      </a>
                    </li>
                    <!-- niche item -->
                    <li class="md-list-item">
                      <a
                        href="javascript:void(0)"
                        class="md-list-item-router md-list-item-container md-button-clean dropdown"
                      >
                        <div class="md-list-item-content">
                          <drop-down direction="down">
                            <md-button
                              slot="title"
                              class="md-button md-button-link md-simple dropdown-toggle"
                              data-toggle="dropdown"
                              style="color:black !important;"
                            >
                              <i
                                class="material-icons"
                                style="color:black !important;"
                                >category</i
                              >
                              <p>Niche</p>
                            </md-button>
                            <ul class="dropdown-menu">
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">
                                    Architecture & Interior
                                  </p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Art & Design</p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Blog & Lifestyle</p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Business & Brand</p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Cars & Bikes</p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">City & Country</p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Educational & QA</p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Fashion & Style</p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Fitness & Sports</p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Food & Nutrition</p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">
                                    Gaming & Entertainment
                                  </p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Health & Beauty</p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Humor & Memes</p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Luxury & Motivation</p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Movies TV & Fan Pages</p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Pets & Animals</p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Quotes & Text</p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Reviews & Tutorials</p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Tech & Computers</p>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  <p class="dropdownP">Travel & Nature</p>
                                </a>
                              </li>
                            </ul>
                          </drop-down>
                        </div>
                      </a>
                    </li>
                  </md-list>
                </div>
              </div>
            </div>
          </md-toolbar>

          <ListingCardMain
            v-for="listing in allListings"
            :key="listing.idUsername"
            :avatar="listing.avatar"
            :followers="listing.noOfFollowers"
            :posts="listing.noOfPosts"
            :price="listing.price"
            :reach="listing.reach"
            :category="listing.category"
            :author="listing.ownerUsername"
          ></ListingCardMain>

          <Modal v-if="showModal == true"></Modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import FeaturedCard from '@/components/cards/FeaturedCard.vue';
import { eventBus } from '../eventBus';
import ListingCardMain from '../components/cards/ListingCardMain.vue';
import loadSampleData from './utils/injectListings';
import firebase from 'firebase';

const firestore = firebase.firestore();

export default {
  components: {
    Modal,
    FeaturedCard,
    ListingCardMain
  },
  bodyClass: 'profile-page',
  data() {
    return {
      showModal: false,
      allListings: [],
      mostRecentListings: []
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    loadSampleData() {
      loadSampleData();
      console.log('Loaded sample data');
    },
    async loadAllListings() {
      firestore
        .collection('/allListings')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data all data from document
            this.allListings.push(doc.data());
          });

          let UNIXDates = [];
          this.allListings.forEach(listing => {
            UNIXDates.push(listing.dateCreated);
          });

          UNIXDates.sort((a, b) => {
            return b - a;
          });

          console.log(UNIXDates);
          console.log(UNIXDates[0], UNIXDates[1], UNIXDates[2]);

          querySnapshot.forEach(doc => {
            if (
              doc.data().dateCreated == UNIXDates[0] ||
              doc.data().dateCreated == UNIXDates[1] ||
              doc.data().dateCreated == UNIXDates[2]
            )
              this.mostRecentListings.push(doc.data());
          });
        })
        .catch(err => {
          console.log("Couldn't get data", err);
        });

      console.log('all listings\n', this.allListings);
      console.log('most recent\n', this.mostRecentListings);
    }
  },
  mounted() {
    eventBus.$on('closeModal', msg => {
      this.showModal = false;
    });
    this.loadAllListings();
  },
  created() {
    console.log(this.allListings);
  },
  computed: {
    headerStyle() {
      return {
        background: `radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)`
      };
    }
  }
};
</script>
<style>
#toolbar {
  margin-bottom: 90px;
}
.classWithPad {
  /* margin: 10px; */
  padding: 10px;
}
#featuredRow {
  margin: auto;
}
.col {
  display: inline-block;
  margin-right: auto;
  margin-left: auto;
}
.dropdownP {
  margin: 0 !important;
}
#md-title {
  color: black !important;
}

#mobileHamburgerListing .icon-bar {
  color: black !important;
}
.page-header {
  height: 170px !important;
}
.description {
  padding-top: 50px;
  padding: 50px;
}
p {
  font-size: 1em;
  line-height: 1.3em;
  text-align: justify;
}

.heading {
  text-align: left;
  font-weight: bold;
}

h1 {
  text-align: center;
}
</style>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*='tab-pane-'] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
