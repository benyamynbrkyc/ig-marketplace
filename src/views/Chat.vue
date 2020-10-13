<template>
  <div>
    <div class="app-container">
      <div class="alert-icon" id="chatAdminDisclaimer">
        <md-icon>info_outline</md-icon> <b>Info </b>: Every chat group includes
        the admin user who handles the payment and escrow process. He is there
        to ensure safety and transparency throughout BS Social Swap.
      </div>

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
      this.currentUserId =
        fb.auth.currentUser.uid == 'mqSrKzK2MWd9rPA8dBPxUz7RLof2'
          ? 'Admin'
          : fb.auth.currentUser.uid;
      this.currentUser = fb.auth.currentUser;
    },
    async populateRooms() {
      // put in a users array on roomsRef
      let users = [];
      usersRef
        .get()
        .then(snapshot => {
          snapshot.forEach(user => {
            users.push({ username: user.data().username, id: user.id });
            // users.push(user.id);
            console.log('user IDs pushed to [users]', {
              username: user.data().username,
              id: user.id
            });
          });

          let pairs = getPairs(users);

          pairs.forEach(async pair => {
            // get room name
            let roomName = pair[0].username + '_' + pair[1].username;
            console.log(roomName);

            // form id pairs - to be used as an array to push to individual room
            let pairOfIDs = [];
            pair.forEach(user => {
              pairOfIDs.push(user.id);
            });

            // get document to check if it exists
            let docExists = await roomsRef.doc(roomName).get();
            // console.log(docExists.data());

            // if it doesn't exist
            if (docExists.data() == undefined) {
              const ADMIN = await usersRef.doc('Admin').get();
              const ADMIN_ID = ADMIN.id;
              pairOfIDs.push(ADMIN_ID);

              roomsRef.doc(roomName).set({ users: pairOfIDs });
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
#chatAdminDisclaimer {
  padding: 0 10px 0 10px;
}
</style>
