<template>
  <div>
    <HeaderView />
    <h2>Hello User, Update to Our Restaurant!</h2>
  </div>
</template>

<script>
import HeaderView from './HeaderView.vue'
export default {
    name: 'UpdateResto',
    components: {
        HeaderView
    },
    mounted() {
        let user = localStorage.getItem('user');
        if (!user) {
            this.$router.push({name: 'SignUp'});
        }
    },

}
</script>

<style>

</style>