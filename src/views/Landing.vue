<template>
  <div class="wrapper">
    <parallax class="section page-header" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="row" id="heroImgRow">
            <img
              src="https://nitrocdn.com/oBHBqLgJXZVfCESjGKVwqurKNzgjnxtE/assets/static/optimized/rev-31096c6/wp-content/uploads/2020/05/992-e1589633150167.png"
              id="heroImg"
            />
          </div>
          <div class="row" id="heroTextRow">
            <h1 id="heroTitle">
              BS Social Swap
              <span><img src="@/assets/img/jumping-insta.gif" alt=""/></span>
              <!-- <hr style="background-color: #40ab57" /> -->
              <br />
              <span style="text-transform: uppercase;"
                >The Safest Online Marketplace</span
              >
            </h1>
            <br />
            <h4 id="sellText">
              Want to Sell or Buy an account?
            </h4>
          </div>
          <br />
          <div class="container" id="heroButtonContainer">
            <md-button href="" class="md-success md-lg" target="_blank"
              >Sign up and start selling</md-button
            >
            <div class="padding"></div>
            <md-button href="/listings" class="md-success md-lg"
              >Browse our Marketplace</md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <div class="features features-2 text-center">
                <div class="md-layout">
                  <div class="md-layout-item md-medium">
                    <div class="backG">
                      <div class="info">
                        <h2 class="info">Last Month We Sold</h2>
                        <h2 class="title">
                          <span style="font-weight: 100;">Over&nbsp;</span
                          >84&nbsp;
                          <span style="font-weight: 100;">Accounts</span>
                        </h2>
                        <h2 class="info" style="font-weight: bold;">
                          TRUSTPILOT
                        </h2>
                        <img
                          src="@/assets/img/4-5-stars.png"
                          style="max-height: 50px; margin-bottom: 15px;"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2 class="title text-center">
                Enhance your digital presence with us
              </h2>
              <h5 class="description">
                BS Social Swap was created to offer a way for people to trade
                their social media entities. There are certain limitations to
                what you can expect from us and they are:
                <div class="container">
                  <ul style="text-align: justify;" id="limitations">
                    <li>
                      BS Social Swap does not guarantee any claims or promises
                      made by sellers.
                    </li>
                    <li>
                      BS Social Swap monitors the authenticity of any users or
                      members of our site.
                    </li>
                    <li>
                      BS Social Swap is not liable for what happens after the
                      listing ends.
                    </li>
                    <li>
                      If we catch you trying to spam or scam our users, we will
                      ban you without notice.
                    </li>
                  </ul>
                </div>
              </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-small-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon ">
                    <md-icon>settings</md-icon>
                  </div>
                  <h4 class="info-title">24/7 Support</h4>
                </div>
              </div>
              <div class="md-layout-item md-small-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon">
                    <md-icon>timeline</md-icon>
                  </div>
                  <h4 class="info-title">Experience</h4>
                </div>
              </div>
              <div class="md-layout-item md-small-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon ">
                    <md-icon>account_balance</md-icon>
                  </div>
                  <h4 class="info-title">Escrow</h4>
                </div>
              </div>
              <div class="md-layout-item md-small-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon ">
                    <md-icon>shopping_cart</md-icon>
                  </div>
                  <h4 class="info-title">Fast Delivery</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Testimonials</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg1"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Carl Wilson
                      <br />
                      <small class="card-description text-muted">Client</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        I am very pleased with the service. I’d recommend your
                        service to anyone. Great job 😉
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg2"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Robert Soprano
                      <br />
                      <small class="card-description text-muted">Client</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Very good sellers, and most of all I can trust them. You
                        don't find many sellers that you can trust in this
                        business. Very Good.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg3"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Amanda Park
                      <br />
                      <small class="card-description text-muted">Client</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        My dream was to become a popular model. These guys made
                        it possible for me by finding the ideal profile. I
                        recommend them to everyone.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Talk To Us</h2>
              <h4 class="text-center description">
                Don't worry, we will find the best option for you and secure a
                fast transfer.
              </h4>
            </div>
          </div>
          <ContactCard></ContactCard>
          <div class="container" style="">
            <md-button
              href=""
              id="linkButton1"
              class="md-success md-lg"
              target="_blank"
              >Sign up and start trading</md-button
            ><md-button
              href=""
              id="linkButton2"
              class="md-success md-lg"
              target="_blank"
              >Browse our Marketplace</md-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#heroImgRow {
  display: block;
  width: 100%;
  text-align: center;
}
#heroTextRow {
  text-align: center;
  width: 100%;
}
#heroImg {
  margin-top: 20px;
  margin-bottom: 10px;
  max-width: 50px;
  display: inline;
}
#heroTitle {
  widows: 100%;
  text-align: center;
  display: inline;
  margin: auto;
  font-weight: bold;
}
#sellText {
  display: inline;
  width: 100%;
  text-align: center;
  margin-top: 70px;
  text-transform: uppercase;
  font-weight: bolder;
}

#heroButtonContainer {
  width: 100%;
  display: inline;
  text-align: center;
}
.padding {
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
}
@media only screen and (max-width: 768px) {
  .padding {
    display: none;
  }
}
#limitations {
  padding-left: 10px;
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
  padding-top: 5px;
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
</style>

<script>
import ContactCard from '../components/cards/ContactCard';

export default {
  components: {
    ContactCard
  },
  bodyClass: 'landing-page',
  props: {
    header: {
      type: String,
      default: require('@/assets/img/header-backg.jpeg')
    },
    teamImg1: {
      type: String,
      default: require('@/assets/img/faces/testimonials/testimonials-1.png')
    },
    teamImg2: {
      type: String,
      default: require('@/assets/img/faces/testimonials/testimonials-2.png')
    },
    teamImg3: {
      type: String,
      default: require('@/assets/img/faces/testimonials/testimonials-3.png')
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  computed: {
    headerStyle() {
      return {
        background: '#2e715e'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
