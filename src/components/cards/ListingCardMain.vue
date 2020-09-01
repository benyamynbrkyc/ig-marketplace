<template>
  <md-card
    id="mainCard"
    class="md-card-login"
    :class="{ 'md-card-hidden': cardHidden }"
  >
    <div class="container-fluid" id="outerWrapper">
      <div class="section" id="intro">
        <div class="container-fluid" id="flexContainer">
          <div class="row" id="introRow">
            <div class="col-6" id="backG1">
              <img
                src="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-19/s150x150/118284985_354124242280580_9210287956944691765_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_ohc=SrW7ppYlqU8AX8hkFCS&oh=7e1b52c0553427bac4f98e596a2f445a&oe=5F71FED9"
                alt=""
              />
            </div>
            <div class="padding"></div>

            <div class="col-6" id="backG2">
              <div class="row" id="featureRow">
                <div class="info">
                  <div class="icon">
                    <img src="@/assets/img/featureRow/1.png" alt="" />
                  </div>
                  <h4 class="info">24/7 Support</h4>
                </div>
                <div class="info">
                  <div class="icon">
                    <img src="@/assets/img/featureRow/2.png" alt="" />
                  </div>

                  <h4 class="info">Experience</h4>
                </div>
                <div class="info">
                  <div class="icon">
                    <img src="@/assets/img/featureRow/3.png" alt="" />
                  </div>

                  <h4 class="info">Escrow</h4>
                </div>
              </div>
              <div class="row" id="featureRow">
                <div class="info">
                  <div class="icon">
                    <img src="@/assets/img/featureRow/1.png" alt="" />
                  </div>
                  <h4 class="info">24/7 Support</h4>
                </div>
                <div class="info">
                  <div class="icon">
                    <img src="@/assets/img/featureRow/2.png" alt="" />
                  </div>

                  <h4 class="info">Experience</h4>
                </div>
                <div class="info">
                  <div class="icon">
                    <img src="@/assets/img/featureRow/3.png" alt="" />
                  </div>

                  <h4 class="info">Escrow</h4>
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
}
#backG1 {
  max-width: 324px;
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
}
@media only screen and (max-width: 768px) {
  #introRow {
    display: block;
  }
  #backG1 {
    position: initial !important;
    display: block;
    max-width: unset !important;
    width: 100% !important;
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
  width: 100%;
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

#featureRow img {
  max-width: 35px;
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
  margin-top: 50px;
  margin-bottom: 50px;
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
#noPadding {
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
