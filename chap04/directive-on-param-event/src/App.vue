<script setup lang="ts">
import { ref } from 'vue';

const mousePointX = ref(0);
const mousePointY = ref(0);

const onImgMousemove = (event: MouseEvent): void => {
  mousePointX.value = event.offsetX;
  mousePointY.value = event.offsetY;
};
</script>

<template>
  <img src="./assets/logo.svg" alt="Vue Logo" width="200" @mousemove="onImgMousemove">
  <p>pointer point : x = {{ mousePointY }}; y = {{ mousePointY }}</p>
</template>
