<template>
  <div class="whispers-wrapper py-5 px-3 min-vh-100">
    
    <div class="container text-center mb-5 fade-in">
      <h2 class="custom-heading display-4 fw-bold">Daily Whispers 💌</h2>
      <p class="text-muted">A board full of my random thoughts about you...</p>
    </div>

    <div class="container max-width-container">
      <div class="row g-4">
        
        <!-- Db theke data ene grid e dekhano hocche -->
        <div 
          v-for="(whisper, index) in whispersData" 
          :key="whisper.id" 
          class="col-md-6 col-lg-4 fade-in-up"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div class="card h-100 border-0 shadow-sm whisper-card" :class="whisper.color">
            <div class="card-body p-4 d-flex flex-column justify-content-between">
              <p class="whisper-text fw-semibold text-dark mb-4">"{{ whisper.text }}"</p>
              <span class="whisper-date text-muted small text-end d-block fw-bold">{{ whisper.date }}</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Next page e jabar button -->
      <div class="text-center mt-5 pt-4 fade-in" style="animation-delay: 1s;">
        <button @click="goNext" class="btn rounded-pill px-5 py-3 shadow-sm custom-btn">
          Next: The Polaroid Vault &rarr;
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { dailyWhispers } from '../data/db.js' // Amader mock database import korlam

const router = useRouter()
const whispersData = ref(dailyWhispers)

const goNext = () => {
  // Pore amra eita k Polaroid page e link korbo
  router.push('/polaroid')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Nunito:wght@400;600;700&display=swap');

.whispers-wrapper {
  background: #fdfbfb;
  font-family: 'Nunito', sans-serif;
}

.max-width-container {
  max-width: 1000px;
  margin: 0 auto;
}

.custom-heading {
  font-family: 'Caveat', cursive;
  color: #6d4c41;
}

/* Note Colors */
.bg-yellow { background-color: #fff9c4 !important; }
.bg-blue { background-color: #e3f2fd !important; }
.bg-pink { background-color: #fce4ec !important; }
.bg-green { background-color: #e8f5e9 !important; }

.whisper-card {
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.whisper-card:hover {
  transform: translateY(-5px) rotate(1deg);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}

.whisper-text {
  font-size: 1.1rem;
  line-height: 1.6;
}

.whisper-date {
  color: #8d6e63 !important;
  border-top: 1px dashed rgba(0,0,0,0.1);
  padding-top: 10px;
}

.custom-btn {
  background-color: #fff;
  color: #6d4c41;
  border: 1px solid #d7ccc8;
  font-weight: 600;
  transition: all 0.3s ease;
}

.custom-btn:hover {
  background-color: #d7ccc8;
  color: #fff;
  transform: translateY(-3px);
}

.fade-in { animation: fadeIn 1s ease-in forwards; opacity: 0; }
.fade-in-up { opacity: 0; transform: translateY(20px); animation: fadeInUp 0.8s ease-out forwards; }

@keyframes fadeIn { to { opacity: 1; } }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
</style>