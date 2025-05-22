<template>
<div>
<img class="logo" src="../assets/logo.png" alt="Resto Logo">
<h1>Login</h1>
<div class="login-form">
    <input type="email" v-model="email" required placeholder="Enter your Email">
    <input type="password" v-model="password" required placeholder="Enter your Password">
    <button @click="login">Login</button>
    <p>
        <router-link to="/SignUp">
            Create an account? SignUp
        </router-link>
    </p>
</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    mounted() {
        let user = localStorage.getItem('user');
        if (user) {
            this.$router.push({name: 'Home'});
        }
    },
    methods: {
        async login() {
            let result = await axios.get('http://localhost:3000/users', {
                params: {
                    email: this.email,
                    password: this.password
                }
            })
            if (result.status == 200 && result.data.length > 0) {
            localStorage.setItem('user', JSON.stringify(result.data));
            this.$router.push({name: 'Home'});
        }
        }
    }
}
</script>

<style>
.logo {
    max-width: 100px;
    margin-bottom: 20px;
    border-radius: 50px;
}
.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login-form input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.login-form button {
    width: 320px;
    height: 40px;
    padding: 10px 15px;
    background-color: #e16b22;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.login-form button:hover {
    background-color: #f49e84;
}
</style>