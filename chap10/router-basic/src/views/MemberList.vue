<script setup lang="ts">
import type { Member } from '@/types/Member'
// import { RouterLink } from 'vue-router'
import { inject } from 'vue'

const members = inject('members') as Map<number, Member>
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
