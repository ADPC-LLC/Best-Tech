<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to our Vue.js Benchmark Comparison App" />
  <div id="app">
    <BenchmarkResults />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import BenchmarkResults from './components/BenchmarkResults.vue';

  export default {
    name: 'App',
    components: {
      HelloWorld
      BenchmarkResults
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
