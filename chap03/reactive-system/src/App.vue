<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

import { ref } from "vue";

const now = new Date();
const nowStr = now.toLocaleTimeString();

let timeStr = nowStr;

const timeStrRef = ref(nowStr);

function changeTim(): void {
  const newTime = new Date();
  const newTimeStr = newTime.toLocaleTimeString();

  timeStr = newTimeStr;

  timeStrRef.value = newTimeStr;
}

setInterval(changeTim, 1000);
</script>

<template>
  <p>time string : {{ timeStr }}</p>
  <p>time string ref : {{ timeStrRef }}</p>
</template>
