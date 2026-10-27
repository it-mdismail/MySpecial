<template>
  <Fireflies />

  <MusicPlayer />
  
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'

import MusicPlayer from './components/MusicPlayer.vue'
import Fireflies from './components/Fireflies.vue'
</script>