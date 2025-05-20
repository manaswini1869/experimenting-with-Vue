<template>
<div>
<img class="logo" src="../assets/logo.png" alt="Resto Logo">
<h1>Sign Up</h1>
<div class="signup-form">
    <input type="text" v-model="name" required placeholder="Enter your Name">
    <input type="email" v-model="email" required placeholder="Enter your Email">
    <input type="password" v-model="password" required placeholder="Enter your Password">
    <button @click="signup">Sign Up</button>
</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
    async signup() {
        if (this.name == '' || this.email == '' || this.password == '') {
            alert('Please fill all fields');
            return;
        }
        let result = await axios.post('http://localhost:3000/users', {
            name: this.name,
            email: this.email,
            password: this.password
        })
        if (result.status == 201) {
            alert('Sign up successful');
            localStorage.setItem('user', JSON.stringify(result.data));
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
.signup-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.signup-form input {
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
.signup-form button {
    width: 320px;
    height: 40px;
    padding: 10px 15px;
    background-color: #e16b22;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.signup-form button:hover {
    background-color: #f49e84;
}


</style>