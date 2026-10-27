<template>
  <div class="music-player">
    <button 
      @click="togglePlay" 
      class="btn rounded-circle shadow-lg music-btn" 
      :class="{ 'playing': isPlaying }"
      title="Play/Pause Music"
    >
      <!-- গান চললে পজ আইকন, না চললে মিউজিক আইকন দেখাবে -->
      <span v-if="isPlaying">⏸️</span>
      <span v-else>🎵</span>
    </button>
    
    <!-- অডিও ট্যাগ, যা ব্যাকগ্রাউন্ডে কাজ করবে। loop দেওয়া আছে যাতে শেষ হলে আবার বাজে -->
    <audio ref="audioRef" loop>
      <source src="/music.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isPlaying = ref(false)
const audioRef = ref(null)

const togglePlay = () => {
  if (isPlaying.value) {
    audioRef.value.pause()
  } else {
    // ব্রাউজারের পলিসি অনুযায়ী ইউজার ক্লিক করলেই গান প্লে হবে
    audioRef.value.play().catch(error => {
      console.log("Audio play failed:", error)
    })
  }
  isPlaying.value = !isPlaying.value
}
</script>

<style scoped>
/* প্লেয়ারটিকে স্ক্রিনের নিচে ডানদিকে ভাসিয়ে রাখার জন্য fixed পজিশন */
.music-player {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1050; /* সবার উপরে রাখার জন্য */
}

.music-btn {
  width: 55px;
  height: 55px;
  font-size: 1.5rem;
  background-color: #fff;
  border: 2px solid #d7ccc8;
  color: #6d4c41;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.music-btn:hover {
  transform: scale(1.1);
  background-color: #f5f5f5;
}

/* গান চলার সময় বাটনের চারদিকে একটা সুন্দর পালস (Pulse) ইফেক্ট হবে */
.playing {
  animation: pulse 2s infinite;
  background-color: #fce4ec; /* হালকা পিংক ফিল */
  border-color: #f48fb1;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(244, 143, 177, 0.7); }
  70% { box-shadow: 0 0 0 15px rgba(244, 143, 177, 0); }
  100% { box-shadow: 0 0 0 0 rgba(244, 143, 177, 0); }
}
</style>