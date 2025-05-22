<template>
  <div>
    <HeaderView />
    <h2>Hello {{ name }}, Welcome to Our Restaurant!</h2>
  </div>
</template>

<script>
import HeaderView from './HeaderView.vue'
export default {
    name: 'HomeView',
    components: {
        HeaderView
    },
    data() {
      return {
        name: '',
      }
    },
    mounted() {
        let user = localStorage.getItem('user');
        this.name = JSON.parse(user)[0].name;
        if (!user) {
            this.$router.push({name: 'SignUp'});
        }
    },

}
</script>

<style>

</style>