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
          <td>Actions</td>
        </tr>
        <tr v-for="item in restaurant" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.location }}</td>
          <td>{{ item.contact }}</td>
          <td><router-link :to="'/update/'+item.id">Update</router-link> | <button @click="deleteRestaurant(item.id)">Delete</button></td>
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
    methods: {
      async deleteRestaurant(id) {
        try {
          console.log(id);
          const response = await axios.delete(`http://localhost:3000/restaurants/${id}`);
          alert('Restaurant deleted');

          if (response.status === 200) {
            const restaurant = await axios.get('http://localhost:3000/restaurants');
            this.restaurant = restaurant.data;
            this.$router.push({ name: 'Home' });
          }
        } catch (error) {
          console.error('Error deleting restaurant:', error);
        }
      }
    }

}
</script>

<style>

td {
  width: 160px;
  height: 40px;
}

</style>