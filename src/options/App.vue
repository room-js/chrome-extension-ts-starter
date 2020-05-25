<template>
  <div class="container">
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  data() {
    return {
      message: 'Hey, it is the Options page running on Vue.js!',
    };
  },
};
</script>

<style scoped lang="scss">
  .container {
    width: 600px;
    margin: 50px auto;
    text-align: center;

    h1 {
      font-style: italic;
    }
  }
</style>