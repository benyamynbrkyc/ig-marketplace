<template>
  <div class="wrapper">
    <parallax class="section page-header"></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <h1>Instagram Accounts for sale</h1>
          <button @click="loadSampleData()">Load Sample Data</button>
          <br />
          <h3 class="title text-center">Most Recent</h3>
          <br />
          <div class="row" id="featuredRow" v-if="recents.length !== 0">
            <div class="col" v-for="listing in recents" :key="listing.id">
              <div class="classWithPad" @click="openListing(listing.id)">
                <FeaturedCard
                  id="colFeaturedCardContainer"
                  :avatar="listing.data.avatar"
                  :followers="listing.data.noOfFollowers"
                  :posts="listing.data.noOfPosts"
                  :price="listing.data.price"
                  :reach="listing.data.reach"
                ></FeaturedCard>
              </div>
            </div>
          </div>
          <div class="row" id="featuredRow" v-if="recents.length == 0">
            No data found
          </div>
          <br />
          <br />

          <FilterCard :noData="noData" @filterData="filterData"></FilterCard>

          <ListingCardMain
            v-for="listing in allListings"
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

          <h3 v-if="noData == true" class="title" id="noDataTitle">
            No Data Found
          </h3>

          <Modal v-if="showModal == true"></Modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import FeaturedCard from '@/components/cards/FeaturedCard.vue';
import ListingCardMain from '../components/cards/ListingCardMain.vue';
import FilterCard from '../components/cards/FilterCard';
import { eventBus } from '../eventBus';
import loadSampleData from './utils/injectListings';
import firebase from 'firebase';

const firestore = firebase.firestore();

export default {
  components: {
    Modal,
    FeaturedCard,
    ListingCardMain,
    FilterCard
  },
  bodyClass: 'profile-page',
  data() {
    return {
      showModal: false,
      allListings: [],
      recents: [],
      lastVisible: null,
      filterOn: false,
      filter: null,
      noData: false
    };
  },
  methods: {
    filterData(filterInfoPayload) {
      this.filterOn = true;
      console.log('got event');
      this.allListings = [];

      if (filterInfoPayload.category == 'All Categories') {
        this.allListings = [];

        firestore
          .collection('allListings')
          .orderBy('price')
          .limit(5)
          .startAt(filterInfoPayload.minPrice)
          .endAt(filterInfoPayload.maxPrice)
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              if (
                doc.data().noOfFollowers <= filterInfoPayload.maxFollowers &&
                doc.data().noOfFollowers >= filterInfoPayload.minFollowers
              ) {
                let listingData = {
                  data: doc.data(),
                  id: doc.id
                };
                console.log('listingDataFIlter', listingData);

                this.allListings.push(listingData);
              } else {
                console.log('error', doc.data());
              }
            });
            if (this.allListings.length == 0) {
              this.noData = true;
            } else {
              this.noData = false;
              this.$forceUpdate();
            }

            this.lastVisible = snapshot.docs[snapshot.docs.length - 1];
          });
      } else {
        this.allListings = [];

        firestore
          .collection('allListings')
          .orderBy('price')
          // .limit(5)
          .startAt(filterInfoPayload.minPrice)
          .endAt(filterInfoPayload.maxPrice)
          .get()
          .then(snapshot => {
            this.allListings = [];

            snapshot.forEach(doc => {
              console.log(doc.data().category == filterInfoPayload.category);
              if (
                doc.data().noOfFollowers <= filterInfoPayload.maxFollowers &&
                doc.data().noOfFollowers >= filterInfoPayload.minFollowers
              ) {
                if (doc.data().category == filterInfoPayload.category) {
                  let listingData = {
                    data: doc.data(),
                    id: doc.id
                  };
                  this.allListings.push(listingData);
                  console.log('listingDataFIlter', listingData);
                }
              } else {
                console.log('error', doc.data());
              }
            });
            if (this.allListings.length == 0) {
              this.noData = true;
            } else {
              this.noData = false;
              this.$forceUpdate();
            }

            this.lastVisible = snapshot.docs[snapshot.docs.length - 1];
          });
      }

      this.filter = filterInfoPayload;
    },
    openModal() {
      this.showModal = true;
    },
    loadSampleData() {
      loadSampleData();
      console.log('Loaded sample data');
    },
    async loadAllListings() {
      this.allListings = [];
      firestore
        .collection('/allListings')
        .limit(5)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data all data from document
            console.log(doc.data().noOfFollowers);
            let listingData = {
              data: doc.data(),
              id: doc.id
            };
            this.allListings.push(listingData);
          });

          if (this.allListings.length == 0) {
            this.noData = true;
          } else {
            this.noData = false;
            this.$forceUpdate();
          }
          this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        })
        .catch(err => {
          console.log("Couldn't get data", err);
        });

      console.log('all listings\n', this.allListings);
    },
    async loadMore() {
      window.onscroll = () => {
        let bottomOfWindow =
          window.innerHeight + window.scrollY >= document.body.offsetHeight;

        if (bottomOfWindow) {
          if (!this.filterOn) {
            firestore
              .collection('/allListings')
              .orderBy('username')
              .startAfter(this.lastVisible)
              .limit(5)
              .get()
              .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  let listingData = {
                    data: doc.data(),
                    id: doc.id
                  };
                  this.allListings.push(listingData);
                });

                if (this.allListings.length == 0) {
                  this.noData = true;
                } else {
                  this.noData = false;
                  this.$forceUpdate();
                }

                this.lastVisible =
                  querySnapshot.docs[querySnapshot.docs.length - 1];
              });
          } else if (this.filterOn) {
            console.log('this is te filter', this.filter);
            if (this.filter.category == 'All Categories') {
              try {
                firestore
                  .collection('allListings')
                  .orderBy('price')
                  .limit(5)
                  .startAfter(this.lastVisible)
                  .endAt(this.filter.maxPrice)
                  .get()
                  .then(snapshot => {
                    snapshot.forEach(doc => {
                      if (
                        doc.data().noOfFollowers <= this.filter.maxFollowers &&
                        doc.data().noOfFollowers >= this.filter.minFollowers
                      ) {
                        let listingData = {
                          data: doc.data(),
                          id: doc.id
                        };
                        this.allListings.push(listingData);
                      }
                    });
                    if (this.allListings.length == 0) {
                      this.noData = true;
                    } else {
                      this.noData = false;
                      this.$forceUpdate();
                    }

                    this.lastVisible = snapshot.docs[snapshot.docs.length - 1];
                  });
              } catch (error) {
                console.log('No more data', error);
              }
            } else if (this.filter.category !== 'All Categories') {
              try {
                firestore
                  .collection('allListings')
                  .orderBy('price')
                  .limit(5)
                  .startAfter(this.lastVisible)
                  .endAt(this.filter.maxPrice)
                  .get()
                  .then(snapshot => {
                    snapshot.forEach(doc => {
                      if (
                        doc.data().noOfFollowers <= this.filter.maxFollowers &&
                        doc.data().noOfFollowers >= this.filter.minFollowers &&
                        doc.data().category == this.filter.category
                      ) {
                        let listingData = {
                          data: doc.data(),
                          id: doc.id
                        };
                        this.allListings.push(listingData);
                      }
                    });
                    if (this.allListings.length == 0) {
                      this.noData = true;
                    } else {
                      this.noData = false;
                      this.$forceUpdate();
                    }
                    this.lastVisible = snapshot.docs[snapshot.docs.length - 1];
                  });
              } catch (error) {
                console.log('No more data', error);
              }
            }
          }
        }
      };
    },
    loadRecents() {
      firestore
        .collection('/allListings')
        .orderBy('dateCreated')
        .get()
        .then(snapshot => {
          let recents = [];
          snapshot.forEach(doc => {
            let listingData = {
              data: doc.data(),
              id: doc.id
            };
            recents.push(listingData);
          });

          for (let i = recents.length - 1; i > recents.length - 4; i--)
            this.recents.push(recents[i]);
        });
    },
    openListing(id) {
      this.$router.push(`/listing/${id}`);
    }
  },
  mounted() {
    eventBus.$on('closeModal', msg => {
      this.showModal = false;
    });
    this.loadAllListings();
    this.loadRecents();
    this.loadMore();
  },
  created() {
    console.log(this.allListings);
  }
  // computed: {
  //   headerStyle() {
  //     return {
  //       background: `radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)`
  //     };
  //   }
  // }
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
#colFeaturedCardContainer {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
}

#colFeaturedCardContainer:hover {
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 23px -2px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: 0px 0px 23px -2px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 0px 23px -2px rgba(0, 0, 0, 0.28);
  transition: 0.5s;
}
#noDataTitle {
  text-align: center;
  transition: 0.5s;
  margin-top: 0px !important;
}
</style>
