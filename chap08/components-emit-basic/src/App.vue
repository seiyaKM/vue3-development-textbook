<script setup lang="ts">
import { ref } from "vue";
import OneSection from "./components/OneSection.vue";

const rand = ref(Math.round(Math.random() * 10));
const onCreateNewRand = (): void => {
  rand.value = Math.round(Math.random() * 10);
};
</script>

<template>
  <section>
    <p>state rand value : {{ rand }}</p>
    <OneSection :rand="rand" @create-new-rand="onCreateNewRand" />
  </section>
</template>
