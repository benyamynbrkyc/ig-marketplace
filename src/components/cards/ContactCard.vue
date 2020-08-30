<template>
  <md-card id="cardWrapper" class="md-card-login">
    <md-card-header class="card-header-wrapper">
      <slot name="title"
        ><md-icon style="color: white; margin-right: 10px">email</md-icon>
        <a href="mailto:support@socialswapbs.com"
          >support@socialswapbs.com</a
        ></slot
      >
    </md-card-header>

    <md-card-content id="cardContent">
      <slot name="description"
        ><md-icon>phone</md-icon> &nbsp; &nbsp; or WhatsApp:
        <a>test_num</a></slot
      >
    </md-card-content>
  </md-card>
</template>

<style>
#cardWrapper {
  margin-top: 100px;
  margin-bottom: 100px;
}

.card-header-wrapper {
  background-color: #2e715e !important;
  color: white;
  padding-left: 10px !important;
  padding-right: 10px !important;
}

#cardContent {
  font-size: 1.2rem;
  text-align: center;
}
</style>

<script>
export default {
  name: 'ContactCard',
  props: {
    headerColor: {
      type: String,
      default: '2e715e'
    }
  },
  data() {
    return {
      cardHidden: false
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
