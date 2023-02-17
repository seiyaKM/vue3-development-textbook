<script setup lang="ts">
import WithModel from "./components/WithModel.vue";
</script>

<template>
  <h1>Component independence</h1>
  <section>
    <h2>v-model include components</h2>
    <WithModel />
    <WithModel />
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>
