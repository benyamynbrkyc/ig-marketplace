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
                  <h3 class="title">Ime Prezime</h3>
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
            <ListingCard></ListingCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListingCard from '../components/cards/ListingCard.vue';
export default {
  components: {
    ListingCard
  },
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
    img: {
      type: String,
      default: require('@/assets/img/faces/christian.jpg')
    },
    headerStyle: {
      type: String,
      default: '#EEEEEE'
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
