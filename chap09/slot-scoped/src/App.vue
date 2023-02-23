<script setup lang="ts">
import OneSection from './components/OneSection.vue'
</script>

<template>
  <section>
    <OneSection>
      <template #default="slotProps">
        <dl>
          <dt>Name</dt>
          <dd>{{ slotProps.memberInfo.name }}</dd>
          <dt>Status</dt>
          <dd>{{ slotProps.memberInfo.state }}</dd>
        </dl>
      </template>
    </OneSection>
    <OneSection />
  </section>
</template>
