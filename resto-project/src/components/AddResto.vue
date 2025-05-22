<template>
  <div>
    <HeaderView />
    <h2>Hello User, Add to Our Restaurant!</h2>
  </div>
</template>

<script>
import HeaderView from './HeaderView.vue'
export default {
    name: 'AddResto',
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