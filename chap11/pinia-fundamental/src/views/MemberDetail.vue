<script setup lang="ts">
import { useMembersStore } from '@/stores/members'
import type { Member } from '@/types/Member'
import { computed } from 'vue'

type Props = {
  id: number
}
const props = defineProps<Props>()

const membersStore = useMembersStore()
const member = computed((): Member => {
  return membersStore.getById(props.id)
})
</script>

<template>
  <h1>Member Management</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink :to="{ name: 'AppTop' }"> Top </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'MemberList' }"> MemberList </RouterLink>
      </li>
      <li>MemberDetail</li>
    </ul>
  </nav>
  <section>
    <h2>Member Detail</h2>
    <dl>
      <dt>ID</dt>
      <dd>{{ member.id }}</dd>
      <dt>NAME</dt>
      <dd>{{ member.name }}</dd>
      <dt>EMAIL</dt>
      <dd>{{ member.email }}</dd>
      <dt>POINT</dt>
      <dd>{{ member.point }}</dd>
      <dt>REMARKS</dt>
      <dd>{{ member.note }}</dd>
    </dl>
  </section>
</template>
