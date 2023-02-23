<script setup lang="ts">
import { provide, reactive } from "vue";
import BaseSection from "./components/BaseSection.vue";
import type { Member } from "./types/Member";

const data = new Map<number, Member>();
data.set(1234, {
  id: 1234,
  name: "steve",
  email: "steve@example.com",
  point: 100,
  note: "steeeeeeeeve!",
});
data.set(5678, {
  id: 5678,
  name: "mike",
  email: "mike@example.com",
  point: 80,
});

provide("members", reactive(data));
</script>

<template>
  <BaseSection />
</template>
