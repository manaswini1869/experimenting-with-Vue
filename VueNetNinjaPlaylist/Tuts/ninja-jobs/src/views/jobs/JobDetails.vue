<template>
    <div>
        <h1> JOb Details Page</h1>
        <p>The jobs is is {{ id }}</p>
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


}
</script>

<style>

</style>