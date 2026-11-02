<template>
  <div class="jar-wrapper py-5 px-3 min-vh-100 d-flex flex-column justify-content-center align-items-center">
    
    <div class="container text-center mb-5 fade-in">
      <h2 class="custom-heading display-4 fw-bold">The Jar of Reasons 🫙</h2>
      <p class="text-muted fs-5">A magical jar holding all the reasons why you are so special...</p>
    </div>

    <!-- ম্যাজিক জার সেকশন -->
    <div class="magic-container position-relative d-flex flex-column align-items-center mt-2"> 
      <div v-if="!currentReason && !isShaking" class="modern-hint-box">
        <div class="hint-content shadow-sm">
          <span class="hint-text">Psst... tap to open!</span>
        </div>
        <div class="down-arrow">👇</div>
      </div>

      <!-- পালসিং রিং -->
      <div v-if="!currentReason" class="pulse-ring"></div>
      <div v-if="!currentReason" class="pulse-ring delay"></div>

      <div class="magic-jar-wrapper mt-3 position-relative">
        
        <!-- উড়ন্ত চিরকুটের অবিরাম ফোয়ারা -->
        <div class="flying-notes">
          <span class="tiny-note continuous-fly-1">📝</span>
          <span class="tiny-note continuous-fly-2">💌</span>
          <span class="tiny-note continuous-fly-3">📄</span>
          <span class="tiny-note continuous-fly-4">🌸</span>
          <span class="tiny-note continuous-fly-5">💖</span>
        </div>

        <!-- তোমার কাঁচের বয়ামের ছবি -->
        <img 
          src="/assets/img/glass-jar.png" 
          alt="Magical Jar" 
          class="jar-image"
          :class="{ 'shake-jar': isShaking }"
          @click="pickRandomReason"
        />

        <!-- ফ্লোর শ্যাডো (বয়াম ভাসার সাথে সাথে এটাও ছোট-বড় হবে) -->
        <div class="floor-shadow"></div>
      </div>

      <!-- পপ-আপ বড় চিরকুট (Chirkut) -->
      <transition name="pop">
        <div v-if="currentReason" class="chirkut-card shadow-lg mt-5 p-4 text-center position-relative">
          <span @click="closeNote" class="close-btn position-absolute top-0 end-0 p-3">&times;</span>
          <p class="small text-muted fw-bold mb-2">You are special because:</p>
          <h4 class="custom-handwriting text-dark mb-0">"{{ currentReason }}"</h4>
        </div>
      </transition>
    </div>

     <!-- কিউরিওসিটি টেক্সট (Curiosity Text) -->
    <div class="curiosity-section mt-2 fade-in text-center" style="animation-delay: 0.5s;">
      <h3 class="curiosity-heading mb-1">Want to know a secret? 🤫</h3>
      <p class="curiosity-subtext">Tap the jar to see what my heart wants to tell you...</p>
    </div>

    <!-- নেক্সট পেজ বাটন -->
    <div class="text-center my-5 pt-4 fade-in" style="animation-delay: 1s;">
      <button @click="goNext" class="btn rounded-pill px-5 py-3 shadow-sm custom-btn">
        Next: Voice Notes &rarr;
      </button>
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
  if (isShaking.value) return;

  currentReason.value = null; 
  isShaking.value = true; 
  
  setTimeout(() => {
    isShaking.value = false;
    const randomIndex = Math.floor(Math.random() * jarReasons.length);
    currentReason.value = jarReasons[randomIndex];
  }, 600);
}

const closeNote = () => {
  currentReason.value = null; 
}

const goNext = () => {
  router.push('/voice-notes')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Nunito:wght@400;600;700&display=swap');

.jar-wrapper {
  background: linear-gradient(to top, #fdfbfb 0%, #ebedee 100%);
  font-family: 'Nunito', sans-serif;
  overflow-x: hidden;
}

.custom-heading {
  font-family: 'Caveat', cursive;
  color: #5d4037;
}

.custom-handwriting { 
  font-family: 'Caveat', cursive;
  font-size: 2.2rem; 
  line-height: 1.4;
  color: #4a3b32 !important;
}

/* Modern Hint Box */
.modern-hint-box {
  position: absolute;
  top: -60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;
  animation: float-hint 2s ease-in-out infinite;
}

.hint-content { background: white; padding: 8px 20px; border-radius: 30px; border: 1.5px solid #f8bbd0; box-shadow: 0 8px 15px rgba(248, 187, 208, 0.3); }
.hint-text { font-weight: 700; color: #d81b60; font-size: 0.95rem; letter-spacing: 0.5px; }
.down-arrow { font-size: 1.5rem; margin-top: 5px; animation: bounce-arrow 1.5s infinite; }

@keyframes float-hint { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
@keyframes bounce-arrow { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(8px); } 60% { transform: translateY(4px); } }

/* Pulse Rings */
.pulse-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.6) 0%, rgba(255, 215, 0, 0) 70%);
  border-radius: 50%;
  z-index: 1;
  animation: pulse-animation 2.5s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.pulse-ring.delay { animation-delay: 1.2s; }
@keyframes pulse-animation { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.8; } 100% { transform: translate(-50%, -50%) scale(2); opacity: 0; } }

/* Magic Jar Image & Blinking Shadow */
.magic-jar-wrapper {
  width: 220px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.jar-image {
  width: 100%;
  height: auto;
  cursor: pointer;
  position: relative;
  z-index: 5;
  /* এখানে নতুন ব্লিঙ্কিং গ্লো অ্যাড করা হয়েছে */
  animation: magical-float-glow 3s infinite ease-in-out;
  transition: transform 0.3s ease;
}

.jar-image:hover { transform: scale(1.05); }

@keyframes magical-float-glow {
  0%, 100% { 
    transform: translateY(0); 
    filter: drop-shadow(0 10px 15px rgba(255, 215, 0, 0.2)); /* নরমাল শ্যাডো */
  }
  50% { 
    transform: translateY(-15px); 
    filter: drop-shadow(0 25px 35px rgba(255, 215, 0, 0.85)); /* ব্রাইট ব্লিঙ্কিং শ্যাডো */
  }
}

/* Floor Shadow (ফ্লোর শ্যাডো) */
.floor-shadow {
  position: absolute;
  bottom: -15px;
  width: 120px;
  height: 15px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  filter: blur(4px);
  z-index: 1;
  animation: shadow-shrink 3s infinite ease-in-out;
}

/* Curiosity Text Design */
.curiosity-heading {
  font-family: 'Caveat', cursive;
  font-size: 2.2rem;
  color: #d81b60; /* Pinkish romantic color */
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.05);
}

.curiosity-subtext {
  font-size: 1.1rem;
  color: #6d4c41;
  font-weight: 600;
  letter-spacing: 0.5px;
}

@keyframes shadow-shrink {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(0.6); opacity: 0.2; } /* বয়াম উপরে উঠলে শ্যাডো ছোট হবে */
}

/* Flying Notes */
.flying-notes { position: absolute; top: 20px; left: 50%; z-index: 2; }
.tiny-note { position: absolute; font-size: 1.2rem; opacity: 0; bottom: 0; }
.continuous-fly-1 { animation: floatUp1 3s infinite linear 0s; }
.continuous-fly-2 { animation: floatUp2 3.5s infinite linear 0.7s; }
.continuous-fly-3 { animation: floatUp3 2.8s infinite linear 1.2s; }
.continuous-fly-4 { animation: floatUp4 3.2s infinite linear 1.8s; }
.continuous-fly-5 { animation: floatUp5 3.6s infinite linear 2.5s; }

@keyframes floatUp1 { 0% { transform: translate(-50%, 0) scale(0.2) rotate(0); opacity: 0; } 15% { opacity: 1; } 80% { opacity: 0.7; } 100% { transform: translate(-100px, -200px) scale(1) rotate(-30deg); opacity: 0; } }
@keyframes floatUp2 { 0% { transform: translate(-50%, 0) scale(0.2) rotate(0); opacity: 0; } 15% { opacity: 1; } 80% { opacity: 0.7; } 100% { transform: translate(90px, -220px) scale(1.2) rotate(45deg); opacity: 0; } }
@keyframes floatUp3 { 0% { transform: translate(-50%, 0) scale(0.2) rotate(0); opacity: 0; } 15% { opacity: 1; } 80% { opacity: 0.7; } 100% { transform: translate(-40px, -240px) scale(0.9) rotate(15deg); opacity: 0; } }
@keyframes floatUp4 { 0% { transform: translate(-50%, 0) scale(0.2) rotate(0); opacity: 0; } 15% { opacity: 1; } 80% { opacity: 0.7; } 100% { transform: translate(-110px, -150px) scale(1.1) rotate(-60deg); opacity: 0; } }
@keyframes floatUp5 { 0% { transform: translate(-50%, 0) scale(0.2) rotate(0); opacity: 0; } 15% { opacity: 1; } 80% { opacity: 0.7; } 100% { transform: translate(110px, -180px) scale(1) rotate(60deg); opacity: 0; } }

/* Pop-up Chirkut Card */
.chirkut-card { width: 100%; max-width: 500px; background: #fffdf2; border-radius: 12px; border-left: 8px solid #f8bbd0; background-image: repeating-linear-gradient(transparent, transparent 31px, #f0eaea 32px); z-index: 30; }
.close-btn { font-size: 2rem; cursor: pointer; color: #a1887f; line-height: 1; transition: 0.2s; }
.close-btn:hover { color: #d32f2f; transform: scale(1.1); }

/* Shake Animation */
.shake-jar { animation: shake 0.6s cubic-bezier(.36,.07,.19,.97) both; }
@keyframes shake { 10%, 90% { transform: translate3d(-4px, 0, 0) rotate(-3deg); } 20%, 80% { transform: translate3d(6px, 0, 0) rotate(3deg); } 30%, 50%, 70% { transform: translate3d(-8px, 0, 0) rotate(-5deg); } 40%, 60% { transform: translate3d(8px, 0, 0) rotate(5deg); } }

/* Transitions */
.pop-enter-active, .pop-leave-active { transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.5s; }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: scale(0.8) translateY(30px); }
.fade-in { animation: fadeIn 1s ease-in forwards; opacity: 0; }
@keyframes fadeIn { to { opacity: 1; } }

.custom-btn { background-color: #6d4c41; color: white; transition: all 0.3s; font-weight: bold; }
.custom-btn:hover { background-color: #5d4037; transform: translateY(-2px); box-shadow: 0 10px 15px rgba(0,0,0,0.1); }
</style>