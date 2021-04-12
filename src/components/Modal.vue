<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="md-collapse">
            <!-- <md-list-item href="#user">
                      <i class="material-icons">person</i>
                      <p class="hidden-lg hidden-md">Profile</p>
                    </md-list-item> -->
            <!-- price item -->

            <!-- followers item -->

            <!-- niche item -->
            <md-toolbar class="md-primary">
              <div class="md-toolbar-row">
                <form action="">
                  <!-- <md-button
                      slot="title"
                      class="md-button md-button-link md-simple dropdown-toggle"
                      data-toggle="dropdown"
                      style="color:black !important;"
                    >
                      <i class="material-icons" style="color:black !important;"
                        >people_alt</i
                      >
                      <p>Followers: {High to Low - Default}</p>
                    </md-button> -->
                  <label for="price"
                    ><i class="material-icons" style="color:black !important;"
                      >attach_money</i
                    ></label
                  >
                  <select name="price" id="price">
                    <option id="high-to-low" value="high-to-low"
                      >High to Low</option
                    >
                    <option id="low-to-high" value="low-to-high"
                      >Low to High</option
                    >
                  </select>
                  <br /><br />
                  <label for="price"
                    ><i class="material-icons" style="color:black !important;"
                      >people_alt</i
                    ></label
                  >
                  <select name="followers" id="followers">
                    <option id="high-to-low" value="high-to-low"
                      >High to Low</option
                    >
                    <option id="low-to-high" value="low-to-high"
                      >Low to High</option
                    >
                  </select>

                  <br /><br />
                  <input type="submit" value="Submit" />
                </form></div
            ></md-toolbar>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="css">
label {
  color: black;
}

form {
  width: 100%;
}
select {
  text-transform: uppercase;
  background-color: #ffffff;
}
option {
}
</style>

<script>
import { eventBus } from '../eventBus';
export default {
  name: 'modal',
  methods: {
    closeModal() {
      eventBus.$emit('closeModal', { msg: 'Modal Open -> Close Modal' });
    },
  },
};
</script>

<style lang="scss">
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.md-simple {
  text-decoration: none;
  text-transform: uppercase;
  background: none;
  border: none;
  font-size: 1rem;
  padding: 10px 25px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
