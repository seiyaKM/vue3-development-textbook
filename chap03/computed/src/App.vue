<script setup lang="ts">
import { computed, ref, reactive } from 'vue';

const data = reactive({
  PI: 3.14,
  radius: Math.round(Math.random() * 10)
})

// const radiusInit = Math.round(Math.random() * 10);
// const PI = ref(3.14);

// const radius = ref(radiusInit);
// const area = computed(
//   (): number => {
//     return radius.value * radius.value * PI.value;
//   }
// );
const area = computed(
  (): number => {
    return data.radius * data.radius * data.PI;
  }
);

// setInterval(
//   ():void => {
//     radius.value = Math.round(Math.random() * 10);
//   },3000
// )
setInterval(
  ():void => {
    data.radius = Math.round(Math.random() * 10);
  },3000
)

</script>

<template>
  <p>半径{{data.radius}}の円の面積を円周率{{data.PI}}で計算すると、{{area}}</p>
</template>
