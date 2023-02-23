<script setup lang="ts">
import type { Member } from "@/types/Member";
import { computed, inject } from "vue";

type Props = {
  id: number;
};

const props = defineProps<Props>();
const members = inject("members") as Map<number, Member>;

const member = computed((): Member | undefined => members.get(props.id));
const internalNote = computed((): string => {
  const note = member.value?.note;
  return note || "---";
});
</script>

<template>
  <section class="box">
    <h4 v-if="member === undefined">Not Exist ID</h4>
    <template v-else>
      <h4>{{ member.name }} information</h4>
      <dl>
        <dt>ID</dt>
        <dd>{{ id }}</dd>
        <dt>EMAIL</dt>
        <dd>{{ member.email }}</dd>
        <dt>POINT</dt>
        <dd>
          <input type="number" v-model.number="member.point" />
        </dd>
        <dt>REMARKS</dt>
        <dd>{{ internalNote }}</dd>
      </dl>
    </template>
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>
