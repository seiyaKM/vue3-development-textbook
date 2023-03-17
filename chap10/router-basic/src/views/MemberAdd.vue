<script setup lang="ts">
import { inject, reactive } from 'vue'
import type { Member } from '@/types/Member'
import { useRouter } from 'vue-router'

const router = useRouter()
const members = inject('members') as Map<number, Member>
const member: Member = reactive({
  id: 0,
  name: '',
  email: '',
  point: 0,
  note: ''
})
const onAdd = () => {
  members.set(member.id, member)
  router.push({ name: 'MemberList' })
}
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
      <li>Member Registration</li>
    </ul>
  </nav>
  <section>
    <h2>Member Registration</h2>
    <p>Enter your information and click register button.</p>
    <form @submit.prevent="onAdd">
      <dl>
        <dt>ID</dt>
        <dd>
          <input type="number" v-model.number="member.id" required />
        </dd>
        <dt>NAME</dt>
        <dd>
          <input type="text" v-model="member.name" required />
        </dd>
        <dt>EMAIL</dt>
        <dd>
          <input type="text" v-model="member.email" required />
        </dd>
        <dt>POINT</dt>
        <dd>
          <input type="number" v-model.number="member.point" required />
        </dd>
        <dt>REMARKS</dt>
        <dd>
          <input type="text" v-model="member.note" />
        </dd>
      </dl>
      <button type="submit">Register</button>
    </form>
  </section>
</template>
