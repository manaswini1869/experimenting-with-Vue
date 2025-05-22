<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <router-link to="/update">Update Restaurant</router-link>
    <a @click="logout">Logout</a>
  </div>
</template>

<script>
export default {
    name: 'HeaderView',
    methods: {
        logout() {
            localStorage.removeItem('user');
            this.$router.push({name: 'LoginView'});
        }
    }
}
</script>

<style>
.nav {
    background-color: #333;
    overflow: hidden;
}

.nav a{
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    margin-right: 5px;
}

.nav a:hover {
    background-color: #ddd;
    color: black;
}
</style>