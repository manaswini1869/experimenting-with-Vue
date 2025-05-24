<template>
  <div>
    <HeaderView />
    <h2>Hello {{ name }}, Welcome to Our Restaurant!</h2>
    <div>
      <table border="1">
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Location</td>
          <td>Contact</td>
        </tr>
        <tr v-for="item in restaurant" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.location }}</td>
          <td>{{ item.contact }}</td>
        </tr>
      </table>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import HeaderView from './HeaderView.vue'
export default {
    name: 'HomeView',
    components: {
        HeaderView
    },
    data() {
      return {
        name: '',
        restaurant: []
      }
    },
    async mounted() {
        let user = localStorage.getItem('user');
        this.name = JSON.parse(user)[0].name;
        if (!user) {
            this.$router.push({name: 'SignUp'});
        }
        let restaurant = await axios.get('http://localhost:3000/restaurants')
        this.restaurant = restaurant.data;
    },

}
</script>

<style>

td {
  width: 160px;
  height: 40px;
}

</style>