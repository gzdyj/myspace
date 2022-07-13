<template>
    <div class="card">
        <div class="card-body">

            <div class="low">
                <div class="col-3">
                    <img class="img-fluid" src = "https://cdn.acwing.com/media/user/profile/photo/204586_lg_d9719113f9.jpg" alt="">
                </div>
                <div class="col-9">
                    <div class="username">{{ fullName }}</div>
                    <div calse="fans">粉丝:{{user.followerCount}}</div>
                    <button @click="follow" v-if="!user.is_followd" class="btn btn-secondary btn-sm" type="submit">+关注</button>
                    <button @click="unfollow" v-if="user.is_followd" class="btn btn-secondary btn-sm" type="submit">取消关注</button>
                </div>
            </div>
         </div>
    </div>


</template>


<script>

import { computed } from 'vue';

export default {
    name: "UserProfileInfo",
    props:{
        user:{
            type:Object,
            required:true,
        }
    },
    setup(props,context){
        let fullName = computed(() => props.user.lastName + ' ' + props.user.firstName);

        const follow = () => {
            context.emit('follow');
        };

        const unfollow = () => {
            context.emit('unfollow');
        }

        return {
            fullName,
            follow,
            unfollow,
        }
    }


}
</script>

<style scoped>
img {
    border-radius: 50%;
}

.username{
    font-weight: bold;
}
.fans{
    font-size: 12px;
    color:gray;
}
button{
    padding: 2px 4px;
    size: 12px;
}


</style>