<template>
  <div class="voice-wrapper py-5 px-3 min-vh-100">
    <div class="container text-center mb-5 fade-in">
      <h2 class="custom-heading display-4 fw-bold">Echoes of Us 🎧</h2>
      <p class="text-muted">কিছু জমানো শব্দ, কিছু চেনা হাসি... যা আমি বারবার শুনতে চাই।</p>
    </div>

    <div class="container max-width-container">
      <div class="row g-4">
        
        <div 
          v-for="(note, index) in notes" 
          :key="note.id" 
          class="col-12 col-md-6 fade-in-up"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="card h-100 border-0 shadow-sm p-4 rounded-4 voice-card">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h5 class="custom-title mb-0">{{ note.title }}</h5>
              <span class="badge bg-light text-secondary rounded-pill border">{{ note.date }}</span>
            </div>
            
            <p class="text-muted small mb-4">{{ note.description }}</p>
            
            <!-- কাস্টম অডিও প্লেয়ার -->
            <div class="audio-player-container mt-auto">
              <audio controls class="w-100 custom-audio">
                <source :src="note.audioSrc" type="audio/mpeg">
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>

      </div>

      <!-- নেক্সট বা প্রিভিয়াস পেজে যাওয়ার বাটন -->
      <div class="text-center mt-5 pt-4 fade-in" style="animation-delay: 1s;">
        <button @click="goNext" class="btn rounded-pill px-5 py-3 shadow-sm custom-btn">
          Next: Song of Our Week &rarr;
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { voiceNotes } from '../data/db.js'

const router = useRouter()
const notes = ref(voiceNotes)

const goNext = () => {
  // তুমি যে পেজে পাঠাতে চাও, সেটার পাথ দাও
  router.push('/vinyl')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Nunito:wght@400;600;700&display=swap');

.voice-wrapper {
  background: #fdfbfb;
  font-family: 'Nunito', sans-serif;
}

.max-width-container {
  max-width: 900px;
  margin: 0 auto;
}

.custom-heading {
  font-family: 'Caveat', cursive;
  color: #5d4037;
}

.custom-title {
  color: #6d4c41;
  font-weight: 700;
}

.voice-card {
  background: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #f5f5f5;
}

.voice-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important;
}

/* অডিও প্লেয়ারের স্টাইল একটু সুন্দর করার জন্য */
.custom-audio {
  height: 40px;
  border-radius: 30px;
}
.custom-audio::-webkit-media-controls-panel {
  background-color: #fdfbfb;
}

.custom-btn {
  background-color: #6d4c41;
  color: white;
  transition: all 0.3s;
}

.custom-btn:hover {
  background-color: #5d4037;
  transform: translateY(-2px);
}

.fade-in { animation: fadeIn 1s ease-in forwards; opacity: 0; }
.fade-in-up { opacity: 0; transform: translateY(30px); animation: fadeInUp 0.8s ease-out forwards; }

@keyframes fadeIn { to { opacity: 1; } }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
</style>