<script setup lang="ts">
import { ref } from "vue";

const artistsInit: { [key: number]: string } = {
  100: "ELLEGARDEN",
  200: "HIATUS",
  300: "MONOEYES",
};
const artists = ref(artistsInit);
</script>

<template>
  <ul>
    <li v-for="(artist, id) in artists" :key="'artists' + id">
      ID is {{ id }}, Artist is {{ artist }}
    </li>
  </ul>
  <ul>
    <li v-for="(artist, id, index) in artists" :key="'artists_with_index' + id">
      {{ index }}: ID is {{ id }}, Artist is {{ artist }}
    </li>
  </ul>
</template>
