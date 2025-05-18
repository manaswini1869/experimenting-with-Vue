<template>
    <div class="results">
        <h5>Your Reaction time is: <p>{{ results }}</p> </h5>
        <p>{{ rank }}</p>
    </div>
</template>

<script>
export default {
    name: 'ReactionResults',
    props: ['results'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.results < 200) {
            this.rank = 'You are a Ninja!'
        } else if (this.results < 400) {
            this.rank = 'You are a Jedi!'
        } else if (this.results < 600) {
            this.rank = 'You are a Padawan!'
        } else if (this.results < 800) {
            this.rank = 'You are a Noob!'
        } else {
            this.rank = 'You are a Sloth!'
        }
    }
}
</script>

<style>
    .results p {
        font-size: 1.4rem;
        color: #0faf87;
        font-weight: bold;
    }
</style>