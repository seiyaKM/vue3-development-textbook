<script setup lang="ts">
import { computed, ref } from "vue";

type Artist = {
  id: number;
  name: string;
  isActive: boolean;
};

const artists = new Map<number, Artist>();
artists.set(1, { id: 1, name: "Bring Me the Horizon", isActive: true });
artists.set(2, { id: 2, name: "Parkway Drive", isActive: true });
artists.set(3, { id: 3, name: "Saosin", isActive: false });
artists.set(4, { id: 4, name: "Sum41", isActive: false });

const artistNo = ref(1);

const artistName = computed((): string => {
  const artist = artists.get(artistNo.value);
  return artist ? artist.name : "this no not exist.";
});

setInterval((): void => {
  artistNo.value = Math.round(Math.random() * 3) + 2;
}, 3000);
</script>

<template>
  <p>Current Artist number: {{ artistNo }}</p>
  <br>
  <p>{{ artistName }}</p>
</template>
