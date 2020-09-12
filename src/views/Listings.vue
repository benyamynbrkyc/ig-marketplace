<template>
  <div class="wrapper">
    <parallax class="section page-header" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <h1>All Listings</h1>
          <br />
          <h3 class="title text-center">Most Recent</h3>
          <br />
          <div class="row" id="featuredRow">
            <div class="col">
              <div class="classWithPad"><FeaturedCard></FeaturedCard></div>
            </div>
            <div class="col">
              <div class="classWithPad"><FeaturedCard></FeaturedCard></div>
            </div>
            <div class="col">
              <div class="classWithPad"><FeaturedCard></FeaturedCard></div>
            </div>
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
          <ListingCardMain></ListingCardMain><ListingCardMain></ListingCardMain
          ><ListingCardMain></ListingCardMain
          ><ListingCardMain></ListingCardMain>
          <Modal v-if="showModal == true"></Modal>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#toolbar {
  margin-bottom: 90px;
}
.classWithPad {
  margin: 10px;
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

<script>
import Modal from '@/components/Modal.vue';
import FeaturedCard from '@/components/cards/FeaturedCard.vue';
import { eventBus } from '../eventBus';
import ListingCardMain from '../components/cards/ListingCardMain.vue';
export default {
  components: {
    Modal,
    FeaturedCard,
    ListingCardMain
  },
  bodyClass: 'profile-page',
  //   props: {
  //     header: {
  //       type: String,
  //       default: require('@/assets/img/kifkuf.jpg')
  //     }
  //   },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    }
  },
  mounted() {
    eventBus.$on('closeModal', msg => {
      this.showModal = false;
    });
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
