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
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="titleName">@username</h3>
                  <h6>{ niche }</h6>
                  <md-button class="md-simple"
                    ><i class="fab fa-instagram"></i>Visit Page</md-button
                  ><br />
                  <md-button class="md-info">Contact Seller</md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <h1 id="price">$$$</h1>
            <h6>Original Mail:</h6>
          </div>
          <div class="features features-1 text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium">
                <div class="backG">
                  <div class="info">
                    <h4 class="info">Followers</h4>
                    <h2 class="title">{ numOfFollowers }</h2>
                  </div>
                </div>
              </div>
              <div class="md-layout-item md-medium">
                <div class="backG">
                  <div class="info">
                    <h4 class="info">Posts</h4>
                    <h2 class="title">{ numOfPosts }</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="features features-2 text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium">
                <div class="backG">
                  <div class="info">
                    <h4 class="info">Average Likes</h4>
                    <h2 class="title">{ numOfAvgLikes }</h2>
                  </div>
                </div>
              </div>
              <div class="md-layout-item md-medium">
                <div class="backG">
                  <div class="info">
                    <h4 class="info">Average Comments</h4>
                    <h2 class="title">{ numOfAvgComms }</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  bodyClass: 'profile-page',
  data() {
    return {
      tabPane1: [
        { image: require('@/assets/img/examples/studio-1.jpg') },
        { image: require('@/assets/img/examples/studio-2.jpg') },
        { image: require('@/assets/img/examples/studio-4.jpg') },
        { image: require('@/assets/img/examples/studio-5.jpg') }
      ],
      tabPane2: [
        { image: require('@/assets/img/examples/olu-eletu.jpg') },
        { image: require('@/assets/img/examples/clem-onojeghuo.jpg') },
        { image: require('@/assets/img/examples/cynthia-del-rio.jpg') },
        { image: require('@/assets/img/examples/mariya-georgieva.jpg') },
        { image: require('@/assets/img/examples/clem-onojegaw.jpg') }
      ],
      tabPane3: [
        { image: require('@/assets/img/examples/mariya-georgieva.jpg') },
        { image: require('@/assets/img/examples/studio-3.jpg') },
        { image: require('@/assets/img/examples/clem-onojeghuo.jpg') },
        { image: require('@/assets/img/examples/olu-eletu.jpg') },
        { image: require('@/assets/img/examples/studio-1.jpg') }
      ]
    };
  },
  props: {
    // header: {
    //   type: String,
    //   default: require('@/assets/img/city-profile.jpg')
    // },
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
    }
  }
};
</script>

<style lang="scss" scoped>
#price {
  margin-top: 80px;
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
  padding-top: 20px;
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
