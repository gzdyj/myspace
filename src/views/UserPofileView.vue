<template>
  <Content>
    <div class="row">
      <div class="col-3">
        <UserProfineinfo @follow="follow" @unfollow="unfollow" :user="user"/>
        <UserProfineWriteVue @post_a_post="post_a_post"/>
      </div>

      <div class="col-9"><UserProfinePosts :posts="posts"/></div>
    </div>
  </Content>
</template>

<script>
import Content from '../components/Content.vue'
import UserProfineinfo from '../components/UserProfineinfo.vue';
import UserProfinePosts from '../components/UserProfinePosts.vue';
import UserProfineWriteVue from '../components/UserProfineWrite.vue';
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import $ from 'jquery';
import {useStore} from 'vuex';

export default {
  name: 'UserPofile',
  components: {
    Content,
    UserProfineinfo,
    UserProfinePosts,
    UserProfineWriteVue,
  },

  setup() {
    const store = useStore();
    const route = useRoute();
    const userId = route.params.userId;
    const user = reactive({});
    const posts = reactive({});

    $.ajax({
      url : "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
      type : "GET",
      data : {
        user_id: userId,
      },
      headers : {
        'Authorization': "Bearer "+ store.state.user.access,
      },
      success (resp) {
        user.id = resp.id;
        user.username = resp.username;
        user.photo = resp.photo;
        user.followerCount = resp.followerCount;
        user.is_followd = resp.is_followd;

      }
    });


    $.ajax({
      url : "https://app165.acapp.acwing.com.cn/myspace/post/",
      type : "GET",
      data : {
        user_id: userId,
      },
      headers : {
        'Authorization': "Bearer "+ store.state.user.access,
      },
      success (resp) {
        posts.posts = resp;


      }
    });

    const follow = () => {
        if (user.is_followd) return;
        user.is_followd = true;
        user.followerCount ++;
    };

    const unfollow = () => {
        if (!user.is_followd) return;
        user.is_followd = false;
        user.followerCount --;
    };

    const post_a_post = (content) => {
      posts.count++;
      posts.posts.unshift({
        id: posts.count,
        userId: 1,
        content:content,
      })
    };

    return {
      user,
      follow,
      unfollow,
      posts,
      post_a_post,
    }
  }
}



</script>

<style scoped>
.container {
  margin-top: 20px;
  text-align: left;
}

</style>
