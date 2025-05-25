<template>
  <div>
    <HeaderView />
    <h2>Hello User, Add to Our Restaurant!</h2>
    <form class="login-form">
      <input type="text" v-model="restaurant.name" placeholder="Enter the Restaurant Name" />
      <input type="text" v-model="restaurant.location" placeholder="Enter the Restaurant Location" />
      <input type="text" v-model="restaurant.contact" placeholder="Enter the Restaurant Contact" />
      <button type="button" @click="updateRestaurant">Update Restaurant</button>
    </form>
  </div>
</template>

<script>
import HeaderView from './HeaderView.vue'
import axios from 'axios'
export default {
    name: 'UpdateResto',
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
      async updateRestaurant() {
        await axios.put('http://localhost:3000/restaurants/' + this.$route.params.id, this.restaurant)
          .then((response) => {
            alert('Restaurant updated');
            if (response.status == 200) {
              this.$router.push({name: 'Home'});
            }
          })
          .catch(error => {
            console.error('Error updating restaurant:', error);
          });
      }
    },
    async mounted() {
        let user = localStorage.getItem('user');
        if (!user) {
            this.$router.push({name: 'SignUp'});
        }

        const result = await axios.get('http://localhost:3000/restaurants/' + this.$route.params.id);
        this.restaurant = result.data;
    },

}
</script>

<style>

</style>