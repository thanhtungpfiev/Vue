<template>
  <h1>Job Details</h1>
  <!-- <p>The job id is {{ $route.params.id }}</p> -->
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style></style>
