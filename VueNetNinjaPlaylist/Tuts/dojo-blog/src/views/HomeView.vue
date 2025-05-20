<template>
  <div class="home">
    <!-- <p ref="p">My name is {{ name }} and my age is {{ age}}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Add one to age</button>
    <input type="text" v-model="name" /> -->
    <!-- <h1>Home</h1>
    <h2>Refs</h2>
    <p> {{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <p> {{ ninjaTwo.name }} - {{ ninjaTwo.age }} - Reactive</p>
    <button @click="updateninjaOne">Update Ninja One</button>
    <button @click="updateninjaTwo">Update Ninja Two</button> -->
    <!-- <h1>Home</h1>
    <input type="text" v-model="search" />
    <div v-for="name in matchingNames" :key="name">
      <p>My name is {{ name }}</p>
    </div>
    <button @click="handleClick">Stop Watch</button> -->
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>Loading...</div>
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import { ref } from 'vue'
export default {
  name: 'HomeView',
  components: {
    PostList
  },
  setup() {
    // Composition API setup function
    // You can use reactive, ref, etc. here

    // const p = ref(null)

    // const name = ref("Mario");
    // const age = ref(30);
    // const handleClick = () => {
    //   // console.log("you clicked me", p, p.value);
    //   // p.value.classList.add('test');
    //   // p.value.textContent = "I am a new text";
    //   name.value = "";
    // }
    // return {
    //   name, age, handleClick, p
    // }
    // const ninjaOne = ref({ name: 'Mario', age: 30})
    // const ninjaTwo = reactive({ name: 'Manaswini', age: 30})

    // const updateninjaOne = () => {
    //   ninjaOne.value.age = 40
    // }

    // const updateninjaTwo = () => {
    //   ninjaTwo.age = 45
    // }

    // return {ninjaOne, ninjaTwo, updateninjaOne, updateninjaTwo}
    // const name = computed(() => {
    //   return "Mario"
    // })
    // const search = ref('')
    // const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'browser', 'koopa', 'peach'])

    // const stopWatch = watch(search, () => {
    //   console.log('watch function run')
    // })
    // const stopEffect = watchEffect(() => {
    //   console.log('watcheffect function run', search.value)
    // })

    // const handleClick = () => {
    //   stopWatch()
    //   stopEffect()
    // }
    // const matchingNames = computed(() => {
    //   return names.value.filter((name) => name.includes(search.value))
    // })
    // return {search, names, matchingNames, handleClick}
    const { posts, error, load } = getPosts()

    load()

    const showPosts = ref(true)

    return {posts, showPosts, error}
  },
}
</script>

<style>

</style>