<template>
  <div class="mood-wrapper py-5 px-3 min-vh-100 d-flex flex-column justify-content-center">
    
    <div class="container text-center mb-4 fade-in">
      <h2 class="custom-heading display-4 fw-bold">Daily Check-in 🌤️</h2>
      <p class="text-muted fs-5">How are you feeling right now?</p>
    </div>

    <div class="container max-width-container text-center">
      
      <!-- মুড সিলেকশন বাটনগুলো -->
      <div class="d-flex flex-wrap justify-content-center gap-3 mb-5 fade-in-up" style="animation-delay: 0.3s;">
        <button @click="selectMood('happy')" class="btn mood-btn rounded-pill px-4 py-2 shadow-sm">😊 Happy</button>
        <button @click="selectMood('sad')" class="btn mood-btn rounded-pill px-4 py-2 shadow-sm">😔 Sad</button>
        <button @click="selectMood('tired')" class="btn mood-btn rounded-pill px-4 py-2 shadow-sm">😫 Tired</button>
        <button @click="selectMood('overthinking')" class="btn mood-btn rounded-pill px-4 py-2 shadow-sm">🥺 Overthinking</button>
      </div>

      <!-- মুড সিলেক্ট করার পর যে মেসেজটা দেখাবে -->
      <transition name="fade">
        <div v-if="selectedMood" class="response-card card shadow-lg border-0 mx-auto mt-4">
          <div class="card-body p-5 rounded-4" :class="moodResponses[selectedMood].color">
            <span class="display-1 d-block mb-3">{{ moodResponses[selectedMood].emoji }}</span>
            <h3 class="fw-bold mb-3">{{ moodResponses[selectedMood].title }}</h3>
            <p class="fs-5 mb-0" style="line-height: 1.6;">"{{ moodResponses[selectedMood].message }}"</p>
          </div>
        </div>
      </transition>

      <!-- নেক্সট পেজ বাটন -->
      <div class="text-center mt-5 pt-3 fade-in" style="animation-delay: 0.8s;">
        <button @click="goNext" class="btn rounded-pill px-5 py-3 shadow-sm custom-btn">
          Next: The Jar of Reasons &rarr;
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { moodResponses } from '../data/db.js'

const router = useRouter()
const selectedMood = ref(null)

const selectMood = (mood) => {
  // ক্লিক করলে ওই মুডের মেসেজটা দেখাবে
  selectedMood.value = mood
}

const goNext = () => {
  // নেক্সট পেজ (Jar of Reasons) এ যাওয়ার জন্য
  router.push('/jar')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Nunito:wght@400;600;700&display=swap');

.mood-wrapper {
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
  font-family: 'Nunito', sans-serif;
}

.max-width-container { max-width: 800px; margin: 0 auto; }
.custom-heading { font-family: 'Caveat', cursive; color: #5d4037; }

/* Mood Buttons */
.mood-btn {
  background-color: #fff;
  border: 2px solid #e0e0e0;
  color: #5d4037;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.mood-btn:hover {
  transform: translateY(-3px);
  border-color: #bcaaa4;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1) !important;
}

/* Response Card */
.response-card {
  max-width: 500px;
  border-radius: 20px;
  transition: transform 0.3s ease;
}

/* Button & Animations */
.custom-btn {
  background-color: transparent; color: #6d4c41; border: 1px solid #d7ccc8; font-weight: 600; transition: all 0.3s ease;
}
.custom-btn:hover { background-color: #d7ccc8; color: #fff; transform: translateY(-3px); }

/* Vue Transition CSS */
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease, transform 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(20px); }

.fade-in { animation: fadeIn 1s ease-in forwards; opacity: 0; }
.fade-in-up { opacity: 0; transform: translateY(30px); animation: fadeInUp 0.8s ease-out forwards; }

@keyframes fadeIn { to { opacity: 1; } }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
</style>