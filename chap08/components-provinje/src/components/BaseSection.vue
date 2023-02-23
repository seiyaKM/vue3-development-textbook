<script setup lang="ts">
import type { Member } from "@/types/Member";
import { computed, inject } from "vue";
import OneMember from "./OneMember.vue";

const members = inject("members") as Map<number, Member>;
const totalPoints = computed((): number => {
  let total = 0;
  for (const member of members.values()) {
    total += member.point;
  }
  return total;
});
</script>

<template>
  <section>
    <h1>Member List</h1>
    <p>Members total point : {{ totalPoints }}</p>
    <OneMember v-for="id in members.keys()" :key="id" :id="id" />
  </section>
</template>

<style scoped>
section {
  border: orange 1px dashed;
  margin: 10px;
}
</style>
