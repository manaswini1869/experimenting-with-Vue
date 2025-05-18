<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>
    <h1>{{title}}</h1>
    <br>
    <input type="text" ref="name">
    <button @click="handleClicks">Click Me</button>
  <teleport to=".modals" v-if="showModal">
    <Modal :theme="theme" @close="toggleModel">
      <h1>Manaswini Vue Tutorial</h1>
      <p>Working hard to convert internship to fulltime, this is fun!</p>
      <template v-slot:links>
        <a href="#">Sign Up Now </a>
        <a href="#">Learn More</a>
      </template>
    </Modal>
  </teleport>
  <teleport to=".modals" v-if="showModalTwo">
    <Modal :theme="theme" @close="toggleModelTwo">
      <h1>Manaswini's Second Modal</h1>
      <p>I think I can now add this additional content to this modal.</p>
      <template v-slot:links>
        <a href="https://www.youtube.com/watch?v=k4yXQkG2s1E">Celebrations </a>
        <a href="https://www.youtube.com/watch?v=QGJuMBdaqIw">Fireworks</a>
      </template>
    </Modal>
  </teleport>
  <br>
  <button @click="toggleModel">
    Open Modal
  </button>
  <br>
  <button @click="toggleModelTwo">
    Open this Modal
  </button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data () {
    return {
      title: 'My First Vue App :0',
      theme: 'sale',
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    handleClicks() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModel() {
      this.showModal = !this.showModal
    },
    toggleModelTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
