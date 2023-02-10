<script setup lang="ts">
import { ref, watchEffect } from "vue";

type Artist = {
  id: number;
  name: string;
  isActive: boolean;
};

const artistNo = ref(1);

const artistName = ref("");
watchEffect(():void => {
  artistName.value = findArtistName(artistNo.value);
});

function findArtistName(no: number): string {
  const artists = new Map<number, Artist>();
  artists.set(1, { id: 1, name: "Bring Me the Horizon", isActive: true });
  artists.set(2, { id: 2, name: "Parkway Drive", isActive: true });
  artists.set(3, { id: 3, name: "Saosin", isActive: false });
  artists.set(4, { id: 4, name: "Sum41", isActive: false });
  const artist = artists.get(no);
  return artist ? artist.name : "this no not exist.";
}

setInterval((): void => {
  artistNo.value = Math.round(Math.random() * 4) + 1;
}, 3000);
</script>

<template>
  <p>Current Artist number: {{ artistNo }}</p>
  <br />
  <p>{{ artistName }}</p>
</template>
