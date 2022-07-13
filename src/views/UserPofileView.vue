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

export default {
  name: 'UserPofile',
  components: {
    Content,
    UserProfineinfo,
    UserProfinePosts,
    UserProfineWriteVue,
  },

  setup() {
    const user = reactive({
      id: 1,
      username: "guozheng",
      lastName: "Guo",
      firstName: "Zheng",
      followerCount :0,
      is_followd: false,
    });

    const posts = reactive({
      count : 3,
      posts : [
        {
          id : 1,
          userId : 1,
          content : "今天上了web课真开心",
        },
        {
          id : 2,
          userId : 1,
          content : "今天上了算法课，更开心了",
        },
        {
          id : 3,
          userId : 1,
          content : "今天上了acwing，开心极了",
        },
      ]
    })

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
