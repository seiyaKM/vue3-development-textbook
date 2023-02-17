<script setup lang="ts">
import OneInfo from "./components/OneInfo.vue";
</script>

<template>
  <h1>Props basic</h1>
  <section>
    <h2>write direct to attribute</h2>
    <OneInfo
      title="Use Props"
      content="Use props to pass data to child components."
    />
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>
