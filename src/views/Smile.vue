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
          v-for="(note, index) in funnyNotes" 
          :key="index"
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

const router = useRouter()
const showTwist = ref(false) // টুইস্ট দেখানোর স্টেট

// তোমার মজার কথা বা জোকসগুলো এখানে এডিট করবে
const funnyNotes = ref([
  {
    text: "Remember that day we talked about completely random things for hours? Yeah, I was smiling at my screen like an idiot.",
    emoji: "📱",
    colorClass: "bg-yellow" // স্টিকি নোটের কালার
  },
  {
    text: "You know what's funny? I used to check my phone once an hour. Now? My screen time is basically judging me.",
    emoji: "⏳",
    colorClass: "bg-blue"
  },
  {
    text: "If missing your texts was an Olympic sport, I would definitely win a gold medal right now.",
    emoji: "🥇",
    colorClass: "bg-pink"
  },
  {
    text: "You hiding your pictures only made me imagine your smile more clearly. Plot twist, right?",
    emoji: "🙈",
    colorClass: "bg-green"
  }
])

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

.custom-heading {
  font-family: 'Caveat', cursive;
  color: #6d4c41;
}

/* Sticky Note Colors (Pastel) */
.bg-yellow { background-color: #fff9c4 !important; }
.bg-blue { background-color: #e3f2fd !important; }
.bg-pink { background-color: #fce4ec !important; }
.bg-green { background-color: #e8f5e9 !important; }

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