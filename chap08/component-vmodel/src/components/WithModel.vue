<script setup lang="ts">
import { ref } from "vue";

const name = ref("no name");
</script>

<template>
  <section>
    <P>Hi, {{ name }}</P>
    <input type="text" v-model="name" />
  </section>
</template>

<style scoped>
section {
  border: orange 1px dashed;
  margin: 10px;
}
</style>
