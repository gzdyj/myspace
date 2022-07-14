<template>
    <Content>
        <div class="card" v-for="user in users" :key="user.id" @click="open_user_pofile(user.id)">
          <div class="card-body">
            <div class="row">
              <div class="col-1 img-filed">
                <img class="img-fluid" :src="user.photo" alt="">
              </div>
              <div class="col-11">
                <div class = "username">{{ user.username }}</div>
                
                <div class = "follower-count">{{ user.followerCount }}</div>

              </div>
            </div>
          </div>
        </div>
    </Content>
</template>

<script>

//# sourceMappingURL=file.js.map

import Content from '../components/Content.vue';
import $ from 'jquery';
import { ref } from 'vue';
import router from '@/router/index';
import {useStore} from 'vuex';

export default {
  name: 'userList',
  components: {
    Content,
  },

  setup() {
    const store = useStore();
    let users = ref([]);

    $.ajax({
      url: 'https://app165.acapp.acwing.com.cn/myspace/userlist/',
      type: "get",
      success(resp) {
        users.value = resp;
      }

    });

    const open_user_pofile = userId => {
        if (store.state.user.is_login) {
          router.push ({
            name : "userprofile",
            params : {
              userId
            }
          })
        } else {
          router.push({
            name: "login",

          });
        }
    }


    return {
      users,
      open_user_pofile,
    };
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
  text-align: left;
}

img {
  border-radius: 50%;
}

.username {
  font-weight: bold;
  height: 50%;
}

.follower-count {
  font-size: 12px;
  color: gray;
  height: 50%;
}

.card{
  margin-bottom: 20px;
  cursor: pointer;
}

.card:hover {
  box-shadow: 2px 2px 10px lightpink;
  transition: 500ms;
}
.img-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
}


</style>
