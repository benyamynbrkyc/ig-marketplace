<template>
  <md-card
    id="mainCard"
    class="md-card-login"
    :class="{ 'md-card-hidden': cardHidden }"
  >
    <div class="container" id="cardContainer">
      <div class="row" id="cardRow">
        <div class="col-xs-2 cardCol">1</div>
        <div class="col-xs-3">2</div>
        <div class="col-xs-3">3</div>
        <div class="col-xs-4">4</div>
      </div>
    </div>
  </md-card>
</template>

<style scoped>
#mainCard {
  width: 100%;
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
