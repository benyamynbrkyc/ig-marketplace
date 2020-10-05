<template>
  <div>
    <div class="app-container">
      <span class="user-logged">Logged as {{ currentUserId }}</span>
      <!-- used to have the options with users -->

      <chat-container
        :currentUserId="currentUserId"
        :theme="theme"
        v-if="showChat"
      />

      <!-- <div class="version-container">
				v1.0.0
			</div>-->
    </div>
  </div>
</template>

<script>
import { roomsRef, usersRef } from '@/views/firestore';
import ChatContainer from './ChatContainer';
import * as fb from './firestore/index';
import getPairs from './utils/combinations';

export default {
  components: {
    ChatContainer
  },

  data() {
    return {
      theme: 'light',
      showChat: true,
      // used to have users array which populates on mounted() - think it's irrelevant
      currentUserId: null, // sets userid on load
      currentUser: null,
      updatingData: false
    };
  },

  watch: {
    currentUserId() {
      this.showChat = false;
      setTimeout(() => (this.showChat = true), 150);
    }
  },
  // used to have the addData and ClearData() Methods
  // they're kinda useless I think
  methods: {
    setCurrentUserId() {
      this.currentUserId = fb.auth.currentUser.uid;
      this.currentUser = fb.auth.currentUser;
    },
    async populateRooms() {
      // put in a users array on roomsRef
      let users = [];
      usersRef
        .get()
        .then(snapshot => {
          snapshot.forEach(user => {
            users.push(user.data());
          });
          let pairs = getPairs(users);

          pairs.forEach(async pair => {
            let roomName = pair[0].username + '_' + pair[1].username;
            let docExists = await roomsRef.doc(roomName).get();
            if (docExists.data() == undefined) {
              // TODO: add admin here and set up a gmail account for him
              const ADMIN = await usersRef.doc('Admin').get();
              pair.push(ADMIN.data());
              roomsRef.doc(roomName).set({ users: pair });
            } else {
              console.log('Did not set document, document exists.');
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.setCurrentUserId();
    this.populateRooms();
  }
};
</script>

<style lang="scss">
body {
  background: #fafafa;
}

.app-container {
  font-family: 'Quicksand', sans-serif;
  padding: 10px 20px 20px;
  padding-top: 100px !important;

  @media only screen and (max-width: 768px) {
    padding: 0;
  }
}

select {
  height: 20px;
  outline: none;
  border: 1px solid #e0e2e4;
  background: #fff;
}

.user-logged {
  font-size: 12px;
  margin-right: 5px;
}

.button-theme {
  float: right;

  .button-light {
    background: #fff;
    border: 1px solid #46484e;
    color: #46484e;
  }

  .button-dark {
    background: #1c1d21;
    border: 1px solid #1c1d21;
  }

  button {
    color: #fff;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    padding: 6px 12px;
    margin-left: 10px;
    border: none;
    font-size: 14px;
    transition: 0.3s;
    vertical-align: middle;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }

    @media only screen and (max-width: 768px) {
      padding: 3px 6px;
      font-size: 13px;
    }
  }
}

.version-container {
  padding-top: 20px;
  text-align: right;
  font-size: 14px;
  color: grey;
}
</style>
