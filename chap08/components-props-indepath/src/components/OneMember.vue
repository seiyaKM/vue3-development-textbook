<script setup lang="ts">
import { ref, computed } from "vue";

export type Props = {
  id: number;
  name: string;
  email: string;
  point: number;
  note?: string;
};

const props = withDefaults(defineProps<Props>(), { note: "---" });

const internalPoint = ref(props.point);

const pointUp = () => internalPoint.value++;
</script>

<template>
  <section class="box">
    <h4>{{ name }} info</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>EMAIL</dt>
      <dd>{{ email }}</dd>
      <dt>POINT</dt>
      <dd>{{ internalPoint }}</dd>
      <dt>NOTE</dt>
      <dd>{{ note }}</dd>
    </dl>
    <button @click="pointUp">add</button>
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>
