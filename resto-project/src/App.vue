<template>
<div>
<!-- <SignUp /> -->
<router-view />
</div>
</template>

<script>
// import SignUp from './components/SignUp.vue'
export default {
  name: 'App',
  components: {
    // SignUp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
}
</style>
