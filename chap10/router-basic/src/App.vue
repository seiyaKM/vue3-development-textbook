<script setup lang="ts">
import { RouterView } from 'vue-router'
import type { Member } from '@/types/Member'
import { provide, reactive } from 'vue'

const members = new Map<number, Member>()
members.set(1234, {
  id: 1234,
  name: 'steve',
  email: 'steve@example.com',
  point: 100,
  note: 'steeeeeeeeve!'
})
members.set(5678, {
  id: 5678,
  name: 'mike',
  email: 'mike@example.com',
  point: 80
})
provide('members', reactive(members))
</script>

<template>
  <header>
    <h1>Vue Router Sample</h1>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
main {
  border: blue 1px solid;
  padding: 10px;
}

#breadcrumbs ul li {
  display: inline;
  list-style-type: none;
}

#breadcrumbs {
  margin-left: 0px;
}

#breadcrumbs ul {
  /* margin-left: 0px; */
  padding: 0;
}

#breadcrumbs ul .current {
  content: '>';
}

#breadcrumbs ul li:first-child::before {
  content: none;
}
</style>
