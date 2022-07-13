<template>
    <Content>
        <div class="card" v-for="user in users" :key="user.id">
          <div class="card-body">
            <div class="row">
              <div class="col-1">
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


export default {
  name: 'userList',
  components: {
    Content,
  },

  setup() {
    let users = ref([]);

    $.ajax({
      url: 'https://app165.acapp.acwing.com.cn/myspace/userlist/',
      type: "get",
      success(resp) {
        users.value = resp;
      }

    });

    return {
      users,
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


</style>
