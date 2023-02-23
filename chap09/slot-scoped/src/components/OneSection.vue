<script setup lang="ts">
import { reactive } from 'vue'

const memberInfo = reactive({ name: 'steve', state: 'no problem' })
</script>

<template>
  <section>
    <slot :memberInfo="memberInfo">
      <h1>{{ memberInfo.name }} state</h1>
      <p>{{ memberInfo.state }}</p>
    </slot>
  </section>
</template>
