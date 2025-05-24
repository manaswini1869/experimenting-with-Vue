<template>
  <div>
    <HeaderView />
    <h2>Hello User, Add to Our Restaurant!</h2>
    <form class="login-form">
      <input type="text" v-model="restaurant.name" placeholder="Enter the Restaurant Name" />
      <input type="text" v-model="restaurant.location" placeholder="Enter the Restaurant Location" />
      <input type="text" v-model="restaurant.contact" placeholder="Enter the Restaurant Contact" />
      <button type="button" @click="addRestaurant">Add Restaurant</button>
    </form>
  </div>
</template>

<script>
import HeaderView from './HeaderView.vue'
import axios from 'axios'
export default {
    name: 'AddResto',
    components: {
        HeaderView
    },
    data() {
      return {
        restaurant: {
          name: '',
          location: '',
          contact: ''
        }
      }
    },
    methods: {
      async addRestaurant() {
        console.warn(this.restaurant);
        await axios.post('http://localhost:3000/restaurants', this.restaurant)
          .then((response) => {
            alert('Restaurant added');
            if (response.status == 201) {
              this.$router.push({name: 'Home'});
            }
          })
          .catch(error => {
            console.error('Error adding restaurant:', error);
          });
      }
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