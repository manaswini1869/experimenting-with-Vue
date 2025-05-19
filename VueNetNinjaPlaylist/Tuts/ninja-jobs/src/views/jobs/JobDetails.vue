<template>
    <div v-if="job">
        <h1> JOb Details Page</h1>
        <p>The jobs is is {{ id }}</p>
        <p>{{ job }}</p>
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    name: "JobDetails",
    props: ['id', 'description'],
    data() {
        return {
            job: null
        }
    },
    mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
        .then(res => res.json())
        .then(data => this.job = data)
        .catch(err => console.log(err))
    }


}
</script>

<style>

</style>