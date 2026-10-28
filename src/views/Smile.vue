<template>
  <div class="smile-wrapper py-5 px-3 min-vh-100">
    
    <!-- হেডিং সেকশন -->
    <div class="container text-center mb-5 fade-in">
      <h2 class="custom-heading display-4 fw-bold">The Smile Corner 😊</h2>
      <p class="text-muted">Because your smile is my favorite notification...</p>
    </div>

    <div class="container max-width-container">
      <div class="row g-4 mb-5">
        
        <!-- জোকস বা মজার চ্যাটের স্টিকি নোটগুলো -->
        <div 
          class="col-md-6 fade-in-up" 
          v-for="(note, index) in smileNotes" 
          :key="smileNotes.id"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="card h-100 border-0 shadow-sm sticky-note" :class="note.colorClass">
            <div class="card-body p-4 text-center d-flex align-items-center justify-content-center flex-column">
              <span class="fs-2 mb-2">{{ note.emoji }}</span>
              <p class="fw-semibold mb-0 text-dark">{{ note.text }}</p>
            </div>
          </div>
        </div>

      </div>

      <!-- দ্য টুইস্ট (The Twist) সেকশন -->
      <div class="text-center mt-5 fade-in" style="animation-delay: 0.8s;">
        <p class="text-muted mb-3">I have a secret confession to make...</p>
        
        <button 
          v-if="!showTwist" 
          @click="showTwist = true" 
          class="btn btn-danger rounded-pill px-4 py-2 shadow-sm twist-btn shake-animation"
        >
          Click for a Twist 🎁
        </button>

        <!-- বাটনে ক্লিক করার পর এই লেখাটা ভেসে উঠবে -->
        <div v-else class="twist-reveal p-4 rounded-4 shadow-sm mt-3 fade-in">
          <h4 class="custom-heading text-danger mb-2">The Twist! 🫣</h4>
          <p class="mb-0 text-dark">
            আমি তো ভাবতাম আমি খুব শক্ত মনের মানুষ, কিন্তু তুমি হঠাৎ করে ছবি দেওয়া বন্ধ করার পর বুঝলাম— 
            আমার পাসওয়ার্ড তো তোমার ওই হাসিতেই হ্যাক হয়ে গেছে! 💻❤️
          </p>
        </div>
      </div>

    </div>

    <!-- নেক্সট চ্যাপ্টার বাটন -->
    <div class="text-center mt-5 pt-4 fade-in" style="animation-delay: 1.2s;">
      <button @click="goNext" class="btn rounded-pill px-5 py-3 shadow-sm custom-btn">
        Next: Unspoken Words &rarr;
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { smileNotes }from '../data/db.js'

const router = useRouter()
const showTwist = ref(false) // টুইস্ট দেখানোর স্টেট


const goNext = () => {
  // আগে এখানে '/diary' ছিল, এখন '/open-when' হবে
  router.push('/open-when') 
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Nunito:wght@400;600;700&display=swap');

.smile-wrapper {
  background: #fdfbfb;
  font-family: 'Nunito', sans-serif;
}

.max-width-container {
  max-width: 800px;
  margin: 0 auto;
}

/* Sticky Note Colors (Pastel) */
/* Smile Corner Sticky Notes Colors */

.bg-yellow { 
  background-color: #fff9c4 !important; 
  color: #827717 !important; /* গাঢ় হলুদ-সবুজ টেক্সট */
}

.bg-blue { 
  background-color: #e3f2fd !important; 
  color: #1565c0 !important; /* গাঢ় নীল টেক্সট */
}

.bg-pink { 
  background-color: #fce4ec !important; 
  color: #880e4f !important; /* গাঢ় ম্যাজেন্টা/পিংক টেক্সট */
}

.bg-green { 
  background-color: #e8f5e9 !important; 
  color: #1b5e20 !important; /* গাঢ় সবুজ টেক্সট */
}

.bg-peach { 
  background-color: #ffedd5 !important;
  color: #7c2d12 !important; /* গাঢ় খয়েরি টেক্সট */
}

.bg-rose { 
  background-color: #ffe4e6 !important;
  color: #881337 !important; /* গাঢ় ওয়াইন রেড টেক্সট */
}

.sticky-note {
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}

.sticky-note:hover {
  transform: translateY(-8px) rotate(2deg);
  box-shadow: 0 12px 20px rgba(0,0,0,0.1) !important;
}

.twist-btn {
  font-weight: 600;
  transition: transform 0.2s;
}

.twist-reveal {
  background: rgba(255, 255, 255, 0.8);
  border: 2px dashed #ffcdd2;
  backdrop-filter: blur(10px);
}

/* Animations */
.fade-in { animation: fadeIn 1s ease-in forwards; opacity: 0; }
.fade-in-up { opacity: 0; transform: translateY(20px); animation: fadeInUp 0.8s ease-out forwards; }

.shake-animation {
  animation: shake 2s infinite ease-in-out;
}

@keyframes fadeIn { to { opacity: 1; } }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
@keyframes shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(3deg); }
  50% { transform: rotate(-3deg); }
  75% { transform: rotate(3deg); }
}
</style>