<template>
  <div class="wrapper">
    <parallax class="page-header" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="pathToAvatar"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">{{ username }}</h3>
                  <md-button class="md-info">Message</md-button> <br />
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-instagram"
                    ><i class="fab fa-instagram"></i
                  ></md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sed urna dignissim orci ultricies cursus quis sit amet magna.
              Vestibulum placerat pharetra felis condimentum lobortis. Nullam
              nunc felis, lacinia in nulla a, pellentesque placerat nisl. Morbi
              a lectus in tellus porttitor pulvinar. Nam tempus suscipit nisl,
              nec aliquam tellus gravida in.
            </p>
          </div>
          <div class="container" id="listings">
            <h3 class="title">Listings</h3>
            <ListingCardMain></ListingCardMain>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ListingCard from '../components/cards/ListingCard.vue';
import ListingCardMain from '../components/cards/ListingCardMain.vue';
export default {
  components: {
    // ListingCard,
    ListingCardMain
  },
  bodyClass: 'profile-page',
  data() {
    return {
      profileData: {}
    };
  },
  props: {
    // img: {
    //   type: String,
    //   default: require('@/assets/img/faces/christian.jpg')
    // },
    headerStyle: {
      type: String,
      default: '#EEEEEE'
    }
  },
  watch: {
    $route(to, from) {
      // react to route changes...
    }
  },
  computed: {
    username() {
      return this.$store.getters.getUserProfile.username;
    },
    pathToAvatar() {
      // BUILD CHANGE
      // console.log(this.$store.getters.getUserProfile.avatar);
      if (this.$store.getters.getUserProfile.avatar !== null)
        return `${this.$store.getters.getUserProfile.avatar}`;
      else
        return 'https://ladyinredthefilm.files.wordpress.com/2014/04/facebook-anonymous-silhouette.png?w=696';
    }
  }
};
</script>

<style scoped>
.page-header {
  height: 250px !important  ;
}
#listings h3 {
  text-align: center;
  margin-bottom: 100px;
}

#listings {
  padding-bottom: 100px;
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
