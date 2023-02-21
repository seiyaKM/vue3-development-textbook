<script setup lang="ts">
type Props = {
  rand: number;
};

type Emits = {
  (event: "createNewRand"): void;
};

defineProps<Props>();

const emit = defineEmits<Emits>();

const onNewRandButtonClick = (): void => {
  emit("createNewRand");
};
</script>

<template>
  <section class="box">
    <p>props rand value : {{ rand }}</p>
    <button @click="onNewRandButtonClick">create rand</button>
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>
