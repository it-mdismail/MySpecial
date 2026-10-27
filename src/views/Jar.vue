<template>
  <div class="jar-wrapper py-5 px-3 min-vh-100 d-flex flex-column justify-content-center">
    
    <div class="container text-center mb-5 fade-in">
      <h2 class="custom-heading display-4 fw-bold">The Jar of Reasons 🫙</h2>
      <p class="text-muted fs-5">Click the jar whenever you feel unsure about yourself...</p>
    </div>

    <div class="container max-width-container d-flex flex-column align-items-center">
      
      <!-- কাঁচের বয়াম (CSS Art) -->
      <div 
        class="magic-jar mt-4 fade-in-up" 
        :class="{ 'shake-jar': isShaking }"
        @click="pickRandomReason"
      >
        <div class="jar-lid"></div>
        <div class="jar-body d-flex justify-content-center align-items-center flex-wrap p-3">
          <!-- বয়ামের ভেতরের ছোট ছোট তারা বা চিরকুট -->
          <span class="jar-star">⭐</span>
          <span class="jar-star">✨</span>
          <span class="jar-star">💌</span>
          <span class="jar-star">💖</span>
          <span class="jar-star">🌸</span>
        </div>
      </div>
      
      <p class="text-muted mt-4 fade-in" style="animation-delay: 0.5s;">Tap to open a note</p>

      <!-- পপ-আপ চিরকুট (Chirkut) -->
      <transition name="pop">
        <div v-if="currentReason" class="chirkut-card shadow-lg mt-4 p-4 text-center position-relative">
          <span @click="currentReason = null" class="close-btn position-absolute top-0 end-0 p-2">&times;</span>
          <p class="small text-muted fw-bold mb-2">One reason why you are special:</p>
          <h4 class="custom-handwriting text-dark mb-0">"{{ currentReason }}"</h4>
        </div>
      </transition>

      <!-- নেক্সট পেজ বাটন -->
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
import { jarReasons } from '../data/db.js'

const router = useRouter()
const currentReason = ref(null)
const isShaking = ref(false)

const pickRandomReason = () => {
  // যদি আগে থেকেই কাঁপতে থাকে তবে রিটার্ন করবে
  if (isShaking.value) return;

  // বয়াম কাঁপার অ্যানিমেশন শুরু
  isShaking.value = true;
  currentReason.value = null; // আগের চিরকুট মুছে দেওয়া

  // অ্যানিমেশন শেষ হওয়ার পর (১ সেকেন্ড পর) নতুন চিরকুট বের হবে
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * jarReasons.length);
    currentReason.value = jarReasons[randomIndex];
    isShaking.value = false; // কাঁপা বন্ধ
  }, 800);
}

const goNext = () => {
  // নেক্সট পেজ (Song of Our Week) এ যাওয়ার জন্য
  router.push('/vinyl')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Nunito:wght@400;600;700&display=swap');

.jar-wrapper {
  background: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  font-family: 'Nunito', sans-serif;
  overflow-x: hidden;
}

.max-width-container { max-width: 600px; margin: 0 auto; }
.custom-heading { font-family: 'Caveat', cursive; color: #5d4037; }
.custom-handwriting { font-family: 'Caveat', cursive; font-size: 1.8rem; line-height: 1.4; color: #4e342e; }

/* CSS Magic Jar */
.magic-jar {
  position: relative;
  width: 160px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.magic-jar:hover { transform: scale(1.05); }

.jar-lid {
  width: 120px;
  height: 25px;
  background: #8d6e63;
  border-radius: 5px 5px 0 0;
  margin: 0 auto;
  border-bottom: 3px solid #5d4037;
  position: relative;
  z-index: 2;
}

.jar-body {
  width: 160px;
  height: 200px;
  background: rgba(255, 255, 255, 0.4);
  border: 4px solid rgba(255, 255, 255, 0.8);
  border-radius: 15px 15px 40px 40px;
  backdrop-filter: blur(6px);
  box-shadow: inset 0 0 20px rgba(255,255,255,0.8), 0 10px 20px rgba(0,0,0,0.1);
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.jar-star { font-size: 1.5rem; margin: 5px; opacity: 0.8; animation: float 3s infinite ease-in-out alternate; }
.jar-star:nth-child(2) { animation-delay: 0.5s; font-size: 2rem; }
.jar-star:nth-child(3) { animation-delay: 1s; }
.jar-star:nth-child(4) { animation-delay: 1.5s; font-size: 1.2rem; }

/* Chirkut (Note) Design */
.chirkut-card {
  width: 100%;
  max-width: 450px;
  background: #fffdf2;
  border-radius: 10px;
  border-left: 5px solid #d7ccc8;
  background-image: repeating-linear-gradient(transparent, transparent 29px, #f0eaea 30px);
}

.close-btn { font-size: 1.5rem; cursor: pointer; color: #a1887f; line-height: 1; }
.close-btn:hover { color: #5d4037; }

/* Button & Animations */
.custom-btn {
  background-color: #fff; color: #6d4c41; border: 1px solid #d7ccc8; font-weight: 600; transition: all 0.3s ease;
}
.custom-btn:hover { background-color: #d7ccc8; color: #fff; transform: translateY(-3px); }

/* Shake Animation */
.shake-jar { animation: shake 0.4s 2; }

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-5deg); }
  20% { transform: translate(-3px, 0px) rotate(5deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(5deg); }
  50% { transform: translate(-1px, 2px) rotate(-5deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-5deg); }
  80% { transform: translate(-1px, -1px) rotate(5deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-5deg); }
}

@keyframes float { from { transform: translateY(0px) rotate(0deg); } to { transform: translateY(-10px) rotate(10deg); } }

/* Vue Transition */
.pop-enter-active, .pop-leave-active { transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s; }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: scale(0.8) translateY(20px); }

.fade-in { animation: fadeIn 1s ease-in forwards; opacity: 0; }
.fade-in-up { opacity: 0; transform: translateY(30px); animation: fadeInUp 0.8s ease-out forwards; }
@keyframes fadeIn { to { opacity: 1; } }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
</style>