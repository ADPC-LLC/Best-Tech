<!-- @format -->
import { app.config.globalProperties. =  } from 'vue'
<template>
  <div>
    <h1>Benchmark Comparison Results</h1>
    <ul>
      <li v-for="result in results" :key="result.id">
        {{ result.language }}: {{ result.execution_time }} ms ({{
          result.date
        }})
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    test_data() {
      return {
        results: [],
      };
    },
    mounted() {
      fetch("http://localhost:3000/results") // Replace with your API URL if deployed
        .then((response) => response.json())
        .then((test_data) => {
          this.results = test_data.results;
        });
    },
  };
</script>
