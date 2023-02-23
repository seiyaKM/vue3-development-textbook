<script setup lang="ts">
import OneMember from "@/components/OneMember.vue";
import type { Props as Member } from "@/components/OneMember.vue";
import { computed, reactive } from "vue";

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

const members = reactive(data);

const totalPoint = computed((): number => {
  let total = 0;
  for (const member of members.values()) {
    total += member.point;
  }
  return total;
});

const onIncrementPoint = (id: number): void => {
  const member = members.get(id);
  if (member !== undefined) {
    member.point++;
  }
};
</script>

<template>
  <section>
    <h1>Member list</h1>
    <p>Total point : {{ totalPoint }}</p>
    <OneMember
      v-for="[id, member] in members"
      :key="id"
      :id="member.id"
      :name="member.name"
      :email="member.email"
      :point="member.point"
      :note="member.note"
      @increment-point="onIncrementPoint"
    />
  </section>
</template>
