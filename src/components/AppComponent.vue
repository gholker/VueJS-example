<template>
  <span v-bind:title="message" class="example">Hello from the AppComponent</span>
</template>

<script>
  export default {
    data() {
      return {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
      }
    }
  }
</script>

<style>
  .example {
    color: red;
  }
</style>