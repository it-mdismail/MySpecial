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

<style>
.custom-btn {
  background-color: #722F37 !important; /* Primary Wine Red */
  color: #ffffff !important;
  border: 1px solid #722F37 !important;
  font-weight: 600;
  transition: all 0.3s ease-in-out !important; /* খুব স্মুথ ট্রানজিশন */
}

.custom-btn:hover {
  background-color: #800020 !important;
  border-color: #800020 !important;
  color: #ffffff !important;
  transform: translateY(-4px) !important;
  box-shadow: 0 10px 20px rgba(114, 47, 55, 0.4) !important;
}

.custom-heading {
  font-family: 'Caveat', cursive;
  color: #722F37 !important;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.05);
}

.custom-handwriting {
  color: #800020 !important;
  font-family: 'Caveat', cursive;
}
</style>