<template>
  <div>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{name: 'jobsDetails', params: { id: job.id }}">
        <h2> {{ job.title }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobsView",
  data() {
    return {
        jobs: [
            { id: 1, title: "Job 1", description: "Description for Job 1" },
            { id: 2, title: "Job 2", description: "Description for Job 2" },
            { id: 3, title: "Job 3", description: "Description for Job 3" },
            { id: 4, title: "Job 4", description: "Description for Job 4" },
            { id: 5, title: "Job 5", description: "Description for Job 5" }
        ]
    }
  }
}
</script>

<style>

.job h2{
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}

.job a{
  text-decoration: none;
}

</style>