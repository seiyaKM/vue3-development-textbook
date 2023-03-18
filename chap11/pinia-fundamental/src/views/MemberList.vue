<script setup lang="ts">
import { useMembersStore } from '@/stores/members'
import type { Member } from '@/types/Member'
import { computed } from 'vue'

const membersStore = useMembersStore()
const members = computed((): Map<number, Member> => membersStore.members)
</script>

<template>
  <h1>Member Management</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink :to="{ name: 'AppTop' }"> Top </RouterLink>
      </li>
      <li>MemberList</li>
    </ul>
  </nav>
  <section>
    <h2>MemberList</h2>
    <p>
      <RouterLink :to="{ name: 'MemberAdd' }"> Click here for New Member Registration. </RouterLink>
    </p>
    <section>
      <ul>
        <li v-for="[id, member] in members" :key="id">
          <RouterLink :to="{ name: 'MemberDetail', params: { id: id } }">
            ID: {{ id }}, NAME: {{ member.name }}
          </RouterLink>
        </li>
      </ul>
    </section>
  </section>
</template>
