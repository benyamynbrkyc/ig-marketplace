<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <div>
        <router-view />
      </div>
      <router-view name="footer" />
    </div>
  </div>
</template>

<script>
require('dotenv').config()
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['userProfile']),
  },
};
</script>
