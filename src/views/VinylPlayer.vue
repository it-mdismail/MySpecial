<template>
  <div class="vinyl-wrapper py-5 px-3 min-vh-100 d-flex flex-column justify-content-center">
    
    <div class="container text-center mb-5 fade-in">
      <h2 class="custom-heading display-4 fw-bold">Song of Our Week 🎶</h2>
      <p class="text-muted fs-5">A melody that reminds me of you...</p>
    </div>

    <div class="container max-width-container d-flex flex-column align-items-center">
      
      <div class="vinyl-container position-relative fade-in-up" style="animation-delay: 0.3s;">
        <!-- রেকর্ড প্লেয়ারের ডিস্ক (Vinyl) -->
        <div class="vinyl-record shadow-lg" :class="{ 'spinning': isPlaying }" @click="togglePlay">
          <div class="vinyl-center">
            <img :src="song.cover" alt="Song Cover" class="cover-img" />
            <div class="vinyl-hole"></div>
          </div>
        </div>
        
        <!-- প্লে/পজ বাটন (ডিস্কের নিচে) -->
        <button @click="togglePlay" class="btn play-btn shadow-sm mt-4 rounded-pill px-4 py-2">
          <span v-if="isPlaying">⏸️ Pause Track</span>
          <span v-else>▶️ Play Track</span>
        </button>
      </div>

      <div class="song-details text-center mt-4 fade-in" style="animation-delay: 0.6s;">
        <h3 class="fw-bold text-dark mb-1">{{ song.title }}</h3>
        <p class="text-muted mb-3">{{ song.artist }}</p>
        <p class="custom-handwriting text-dark mt-3">"{{ song.note }}"</p>
      </div>

      <!-- অডিও ট্যাগ (লুকানো থাকবে) -->
      <audio ref="audioPlayer" :src="song.audio" @ended="isPlaying = false"></audio>

      <!-- শেষ পেজ থেকে আবার শুরুতে যাওয়ার বাটন -->
      <div class="text-center mt-5 pt-4 fade-in" style="animation-delay: 1s;">
        <button @click="goHome" class="btn rounded-pill px-5 py-3 shadow-sm custom-btn">
          &larr; Back to the Beginning
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { songOfWeek } from '../data/db.js'

const router = useRouter()
const song = ref(songOfWeek)
const isPlaying = ref(false)
const audioPlayer = ref(null)

const togglePlay = () => {
  if (isPlaying.value) {
    audioPlayer.value.pause()
  } else {
    audioPlayer.value.play()
  }
  isPlaying.value = !isPlaying.value
}

const goHome = () => {
  // আবার একদম প্রথম পেজে (Welcome বা Login) ফিরে যাওয়া
  router.push('/welcome')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Nunito:wght@400;600;700&display=swap');

.vinyl-wrapper {
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
  font-family: 'Nunito', sans-serif;
}

.max-width-container { max-width: 600px; margin: 0 auto; }
.custom-heading { font-family: 'Caveat', cursive; color: #5d4037; }
.custom-handwriting { font-family: 'Caveat', cursive; font-size: 1.5rem; color: #4e342e; }

/* Vinyl Record CSS */
.vinyl-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vinyl-record {
  width: 250px;
  height: 250px;
  background: #111; /* রেকর্ডের কালো রং */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 5px solid #222;
  box-shadow: inset 0 0 20px rgba(255,255,255,0.1), 0 15px 25px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
  /* রেকর্ডের খাঁজকাটা দাগগুলোর ইফেক্ট */
  background-image: repeating-radial-gradient(#111, #111 4px, #1a1a1a 5px, #111 6px);
}

.vinyl-record:hover { transform: scale(1.02); }

.vinyl-center {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 2px solid #333;
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
}

/* মাঝখানের ছোট ছিদ্র */
.vinyl-hole {
  width: 15px;
  height: 15px;
  background: #fdfbfb;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  border: 1px solid #ccc;
}

/* Spinning Animation (গান চলার সময় ঘুরবে) */
.spinning { animation: spin 4s linear infinite; }

@keyframes spin { 100% { transform: rotate(360deg); } }

/* Buttons */
.play-btn {
  background-color: #5d4037; color: #fff; border: none; font-weight: bold; transition: all 0.3s ease;
}
.play-btn:hover { background-color: #4e342e; transform: translateY(-2px); }

.custom-btn {
  background-color: transparent; color: #6d4c41; border: 1px solid #d7ccc8; font-weight: 600; transition: all 0.3s ease;
}
.custom-btn:hover { background-color: #d7ccc8; color: #fff; transform: translateY(-3px); }

/* Animations */
.fade-in { animation: fadeIn 1s ease-in forwards; opacity: 0; }
.fade-in-up { opacity: 0; transform: translateY(30px); animation: fadeInUp 0.8s ease-out forwards; }
@keyframes fadeIn { to { opacity: 1; } }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
</style>