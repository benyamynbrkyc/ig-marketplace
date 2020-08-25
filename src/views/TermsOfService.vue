<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <h1>Terms of Service</h1>
          <div class="description" style="text-align:justify;">
            BS Social Swap was created to offer a way for people to trade their
            social media entities. There are certain limitations to what you can
            expect from us and they are:
            <div class="container">
              <ul style="text-align: justify;" id="limitations">
                <li>
                  BS Social Swap does not guarantee any claims or promises made
                  by sellers.
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
                  If we catch you trying to spam or scam our users, we will ban
                  you without notice.
                </li>
              </ul>
            </div>
            <br /><br />
            <p class="heading">
              Seller Terms
            </p>
            If you are creating any type of listing on BS Social Swap you agree
            to abide by these rules:
            <div class="container">
              <ul style="text-align: justify;" id="limitations">
                <li>
                  You will only post accounts and pages that are owned by you.
                </li>
                <li>
                  You will only register a BS Social Swap account for yourself
                  and no one else.
                </li>
                <li>
                  You agree that we can terminate your listing at any time for
                  any reason.
                </li>
                <li>
                  You will not game or fake your feedback score on BS Social
                  Swap.
                </li>
              </ul>
            </div>
            <h4 class="noteStrong">
              If you are caught breaking any of the rules above, your account
              will be terminated.
            </h4>
            <br /><br />
            <p class="heading">
              Listing Terms
            </p>
            BS Social Swap offers different types of listings, all of them
            follow these simple rules:
            <div class="container">
              <ul style="text-align: justify;" id="limitations">
                <li>
                  The same listing cannot be posted multiple times until the old
                  one expires or is deleted by us.
                </li>
                <li>
                  You agree that we can terminate your listing at any time for
                  any reason.
                </li>
              </ul>
            </div>
            <br /><br />
            <p class="heading">
              Why ID?
            </p>
            We need your ID to validate the contract for any account purchases
            above $100 USD. Protecting buyers and sellers is BS Social Swap’s
            main job. We go above and beyond to protect our buyers as we need to
            keep our community as safe as possible. <br />We understand that it
            might seem unconventional to provide an ID for purchasing a product
            from an online store but please pay attention to the below details:
            <div class="container">
              <ul style="text-align: justify;" id="limitations">
                <li>
                  The product you are purchasing is a Digital Good.
                </li>
                <li>
                  Digital Goods don’t have any shipping / tracking code which
                  means no protection of the seller.
                </li>
                <li>
                  An online contract is needed to protect the seller and without
                  an ID, it has no value.
                </li>
                <li>
                  BS Social Swap deals with credit card frauds on a daily basis
                  and a simple ID can help avoid all of it.
                </li>
                <li>
                  Your ID will be kept fully encrypted and they get deleted
                  after a certain period of time.
                </li>
              </ul>
            </div>
            <h4 class="noteStrong">
              Your understanding is greatly appreciated and we are very thankful
              for your contribution to keeping our community safe.
            </h4>
            <br /><br />
            <p class="heading">
              Refund Policy
            </p>
            You agree that when you buy a page and the page is successfully
            delivered you don't have the right to refund.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.description {
  padding-top: 50px;
  padding: 50px;
}
body,
p {
  font-size: 1.2em;
  line-height: 1.3em;
  text-align: justify;
}

.heading {
  text-align: left;
  font-weight: bold;
}

.noteStrong {
  font-weight: bold;
}

h1 {
  text-align: center;
}
</style>

<script>
export default {
  bodyClass: 'profile-page',
  props: {
    header: {
      type: String,
      default: require('@/assets/img/kifkuf.jpg')
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
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
