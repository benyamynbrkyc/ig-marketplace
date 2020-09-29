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
          <div class="row" id="featuredRow" v-if="recents.length !== 0">
            <div
              class="col"
              v-for="listing in recents"
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
          <div class="row" id="featuredRow" v-if="recents.length == 0">
            No data found
          </div>
          <br />
          <br />

          <FilterCard></FilterCard>

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
      lastVisible: null
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
        .limit(5)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data all data from document
            this.allListings.push(doc.data());
          });

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
          firestore
            .collection('/allListings')
            .orderBy('username')
            .startAfter(this.lastVisible)
            .limit(5)
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                this.allListings.push(doc.data());
              });

              this.lastVisible =
                querySnapshot.docs[querySnapshot.docs.length - 1];
            });
          this.$forceUpdate;
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
            recents.push(doc.data());
          });

          for (let i = recents.length - 1; i > recents.length - 4; i--)
            this.recents.push(recents[i]);
        });
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
