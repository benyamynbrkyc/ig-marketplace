<template>
  <md-card class="md-card-login" :class="{ 'md-card-hidden': cardHidden }">
    <md-card-header style="background-color: #252d2c !important;">
      <slot name="title"></slot>
      <div class="social-line">
        <slot name="buttons"></slot>
      </div>
    </md-card-header>

    <md-card-content>
      <slot name="description"></slot>
      <slot name="inputs"></slot>
    </md-card-content>

    <md-card-actions>
      <slot name="footer"></slot>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: 'login-card',
  props: {},
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
    }
  }
};
</script>

<style lang="css" scoped>
md-card-header {
  background-color: #346966 !important;
}
.md-card-content {
  padding-top: 0px;
}
</style>
