<template>
  <div class="journey-wrapper py-5 px-3 min-vh-100">
    
    <!-- হেডিং সেকশন -->
    <div class="container text-center mb-5 fade-in">
      <h2 class="custom-heading display-4 fw-bold">Our Journey</h2>
      <p class="text-muted">How it all beautifully unfolded...</p>
    </div>

    <!-- টাইমলাইন সেকশন -->
    <div class="container timeline-container">
      
      <!-- Vue 'v-for' লুপ দিয়ে টাইমলাইন ইভেন্টগুলো দেখানো হচ্ছে -->
      <div 
        v-for="(event, index) in timelineEvents" 
        :key="index" 
        class="timeline-item fade-in-up"
        :style="{ animationDelay: `${index * 0.3}s` }"
      >
        <div class="timeline-dot"></div>
        <div class="timeline-content card border-0 shadow-sm rounded-4 p-4 mb-4">
          <span class="custom-date fw-bold small mb-2 d-block">{{ event.date }}</span>
          <h4 class="fw-bold mb-2">{{ event.title }}</h4>
          <p class="text-muted mb-0">{{ event.description }}</p>
        </div>
      </div>

    </div>

    <!-- নেক্সট চ্যাপ্টার বাটন -->
    <div class="text-center mt-5 fade-in" style="animation-delay: 1.2s;">
      <button @click="goNext" class="btn rounded-pill px-5 py-3 shadow-sm custom-btn">
        Next: The Smile Corner &rarr;
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// এখানে তুমি তোমার নিজের মতো করে ইভেন্টগুলো লিখে নিবে
const timelineEvents = ref([
  {
    date: 'The Beginning',
    title: 'The First Message',
    description: 'That unexpected moment when everything started. A simple conversation that changed my days.'
  },
  {
    date: 'A Special Day',
    title: 'Our First Meet',
    description: 'Seeing you in person was different. I realized there is so much more to you than just words on a screen.'
  },
  {
    date: 'The Shift',
    title: 'Falling Deeper',
    description: 'When you started hiding yourself and sharing less, I found myself looking for you even more. The silence made me realize how much I care.'
  }
])

const goNext = () => {
  // বাটনে ক্লিক করলে নেক্সট পেজ (Smile Corner) এ যাবে
  router.push('/smile')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Nunito:wght@300;400;600&display=swap');

.journey-wrapper {
  background: #fdfbfb;
  font-family: 'Nunito', sans-serif;
}

.custom-heading {
  font-family: 'Caveat', cursive;
  color: #6d4c41;
}

/* Timeline Custom CSS */
.timeline-container {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  padding-left: 20px;
}

/* টাইমলাইনের লম্বা দাগটা */
.timeline-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 27px; 
  height: 100%;
  width: 3px;
  background-color: #d7ccc8;
}

.timeline-item {
  position: relative;
  margin-bottom: 20px;
}

/* টাইমলাইনের গোল ডটগুলো */
.timeline-dot {
  position: absolute;
  left: -2px; 
  top: 25px;
  width: 18px;
  height: 18px;
  background-color: #8d6e63;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px #d7ccc8;
  z-index: 1;
}

.timeline-content {
  margin-left: 40px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important;
}

.custom-date {
  color: #a1887f; 
  text-transform: uppercase;
  letter-spacing: 1px;
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
.fade-in {
  animation: fadeIn 1s ease-in forwards;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>