<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: `123`
    }
  }
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
</template>

<style>
h1 {
  color: red;
}
</style>