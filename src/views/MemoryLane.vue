<template>
  <div class="memory-wrapper py-5 px-3 min-vh-100">
    
    <div class="container text-center mb-5 pb-3 fade-in">
      <h2 class="custom-heading display-4 fw-bold">The Memory Lane ⏳</h2>
      <p class="text-muted">A timeline of our little unforgettable moments...</p>
    </div>

    <div class="container max-width-container">
      
      <div class="timeline">
        <!-- লুপ করে টাইমলাইনের আইটেমগুলো দেখানো হচ্ছে -->
        <div 
          v-for="(memory, index) in memories" 
          :key="memory.id"
          class="timeline-item fade-in-up"
          :class="{ 'left': index % 2 === 0, 'right': index % 2 !== 0 }"
          :style="{ animationDelay: `${index * 0.3}s` }"
        >
          <div class="timeline-content shadow-sm p-4 rounded-4 bg-white position-relative">
            
            <!-- মাঝখানের আইকন/ডট -->
            <div class="timeline-badge shadow-sm d-flex justify-content-center align-items-center">
              <span class="fs-4">{{ memory.icon }}</span>
            </div>

            <span class="text-muted fw-bold small d-block mb-2">{{ memory.date }}</span>
            <h4 class="custom-title mb-3">{{ memory.title }}</h4>
            <p class="text-dark mb-0">{{ memory.description }}</p>
          </div>
        </div>
      </div>

      <!-- নেক্সট পেজ বাটন -->
      <div class="text-center mt-5 pt-5 fade-in" style="animation-delay: 1.5s;">
        <button @click="goNext" class="btn rounded-pill px-5 py-3 shadow-sm custom-btn">
          Next: The Mood Enhancer &rarr;
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { memoryLane } from '../data/db.js'

const router = useRouter()
const memories = ref(memoryLane)

const goNext = () => {
  // নেক্সট পেজ (Mood Enhancer) এ যাওয়ার জন্য
  router.push('/mood')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Nunito:wght@400;600;700&display=swap');

.memory-wrapper {
  background: #fdfbfb;
  font-family: 'Nunito', sans-serif;
  overflow-x: hidden;
}

.max-width-container { max-width: 900px; margin: 0 auto; position: relative; }
.custom-title { color: #6d4c41; font-weight: 700; }

/* Timeline CSS Architecture */
.timeline {
  position: relative;
  margin: 0 auto;
}

/* মাঝখানের লম্বা লাইনটা */
.timeline::after {
  content: '';
  position: absolute;
  width: 4px;
  background-color: #d7ccc8;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
  border-radius: 5px;
}

.timeline-item {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* জোড় আইটেম বামে, বিজোড় আইটেম ডানে */
.left { left: 0; }
.right { left: 50%; }

.timeline-content {
  border: 1px solid #f5f5f5;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-item:hover .timeline-content {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important;
}

/* মাঝখানের গোল আইকন ব্যাজ */
.timeline-badge {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: 3px solid #bcaaa4;
  border-radius: 50%;
  top: 20px;
  z-index: 1;
}

/* ব্যাজ পজিশনিং */
.left .timeline-badge { right: -25px; }
.right .timeline-badge { left: -25px; }

/* Animations */
.fade-in { animation: fadeIn 1s ease-in forwards; opacity: 0; }
.fade-in-up { opacity: 0; transform: translateY(30px); animation: fadeInUp 0.8s ease-out forwards; }

@keyframes fadeIn { to { opacity: 1; } }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

/* Mobile Responsive */
@media screen and (max-width: 768px) {
  .timeline::after { left: 31px; }
  .timeline-item { width: 100%; padding-left: 70px; padding-right: 25px; }
  .left { left: 0; }
  .right { left: 0; }
  .left .timeline-badge, .right .timeline-badge { left: 6px; right: auto; }
}
</style>