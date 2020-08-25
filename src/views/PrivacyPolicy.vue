<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <h1>Privacy Policy</h1>
          <div class="description">
            <p class="heading">Do we use ‘cookies’?</p>
            <p>
              We do not use cookies for tracking purposes. You can choose to
              have your computer warn you each time a cookie is being sent, or
              you can choose to turn off all cookies. You can do this through
              your browser settings. Since every browser is a little different,
              look at your browser's Help Menu to learn the correct way to
              modify your cookie settings.
            </p>
            <br /><br />
            <p class="heading">
              COPPA (Children's Online Privacy Protection Act)
            </p>
            <p>
              When it comes to the collection of personal information from
              children under the age of 13 years old, the Children’s Online
              Privacy Protection Act (COPPA) puts parents in control. The
              Federal Trade Commission, United States’ consumer protection
              agency, enforces the COPPA Rule, which spells out what operators
              of websites and online services must do to protect children’s
              privacy and safety online. We do not specifically market to
              children under the age of 13 years old.
            </p>
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
