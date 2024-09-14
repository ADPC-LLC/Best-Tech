<!-- @format -->

<template>
  <div>
    <div v-for="i in 100" :key="i">
      <span v-if="i % 5 === 0 && i % 7 === 0">Five-Seven</span>
      <span v-else-if="i % 5 === 0">Five</span>
      <span v-else-if="i % 7 === 0">Seven</span>
      <span v-else>{{ i }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PrintNumbers",
  };
</script>
