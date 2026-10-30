<template>
  <div class="future-wrapper py-5 px-3 min-vh-100">
    
    <div class="container text-center mb-1 pb-3 fade-in">
      <h2 class="custom-heading display-4 fw-bold">The Future Chapters..</h2>
      <p class="text-muted">A timeline of the little moments awaiting us...</p>
    </div>

    <div class="container p-0 max-width-container">
      
      <div class="future">
        <!-- লুপ করে টাইমলাইনের আইটেমগুলো দেখানো হচ্ছে -->
        <div 
          v-for="(future, index) in futures" 
          :key="future.id"
          class="future-item fade-in-up"
          :class="{ 'left': index % 2 === 0, 'right': index % 2 !== 0 }"
          :style="{ animationDelay: `${index * 0.3}s` }"
        >
          <div class="future-content shadow-sm p-4 rounded-4 bg-white position-relative">
            
            <!-- মাঝখানের আইকন/ডট ব্যাজ -->
            <div class="future-badge shadow-sm d-flex justify-content-center align-items-center">
              <span class="fs-4">{{ future.icon }}</span>
            </div>

            <span class="text-muted fw-bold small d-block mb-2">{{ future.date }}</span>
            <h4 class="custom-title mb-3">{{ future.title }}</h4>
            <p class="text-dark mb-0">{{ future.description }}</p>
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
import { futureChapters } from '../data/db.js'

const router = useRouter()
const futures = ref(futureChapters)

const goNext = () => {
  // নেক্সট পেজ (Mood Enhancer) এ যাওয়ার জন্য
  router.push('/mood')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Nunito:wght@400;600;700&display=swap');

.future-wrapper {
  background: #fdfbfb;
  font-family: 'Nunito', sans-serif;
  overflow-x: hidden;
}

.max-width-container { 
  max-width: 900px; 
  margin: 0 auto; 
  position: relative; 
}

.custom-title { 
  color: #722F37; 
  font-weight: 700; 
}

/* future CSS Architecture */
.future {
  position: relative;
  margin: 0 auto;
}

/* ডেস্কটপের জন্য মাঝখানের লম্বা লাইনটা */
.future::after {
  content: '';
  position: absolute;
  width: 2px;
  background-color: #d7ccc8;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
  border-radius: 5px;
}

.future-item {
  padding: 15px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* জোড় আইটেম বামে, বিজোড় আইটেম ডানে (ডেস্কটপের জন্য) */
.left { left: 0; }
.right { left: 50%; }

.future-content {
  border: 1px solid #722F37;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.future-item:hover .future-content {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important;
}

/* গোল আইকন ব্যাজ */
.future-badge {
  position: absolute;
  width: 45px;
  height: 45px;
  background-color: #fff;
  border: 3px solid #722F37;
  border-radius: 50%;
  top: 20px;
  z-index: 1;
}

/* ডেস্কটপে ব্যাজ পজিশনিং */
.left .future-badge { right: -22.5px; }
.right .future-badge { left: -22.5px; }

/* Animations */
.fade-in { animation: fadeIn 1s ease-in forwards; opacity: 0; }
.fade-in-up { opacity: 0; transform: translateY(30px); animation: fadeInUp 0.8s ease-out forwards; }

@keyframes fadeIn { to { opacity: 1; } }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

/* =========================================
   Mobile Responsive (The Magic Happens Here)
   ========================================= */
@media screen and (max-width: 768px) {
  /* মোবাইলে মাঝখানের গ্লোবাল লাইনটা হাইড করে দেবো */
  .future::after { 
    display: none; 
  }
  
  /* কার্ডগুলো ফুল উইডথ (১০০%) নেবে */
  .future-item { 
    width: 100%; 
    padding: 15px 0px; 
  }
  
  .left, .right { 
    left: 0; 
  }

  /* -------------------------------------
     জোড় আইটেম (Left) - বর্ডার ও ব্যাজ থাকবে ডানে
     ------------------------------------- */
  .left .future-content {
    border-right: 4px solid #722F37; /* ডান পাশে টাইমলাইন বর্ডার */
    border-left: 1px solid #f5f5f5;
    margin-right: 15px; /* ব্যাজের জন্য একটু জায়গা ছাড়বে */
  }
  .left .future-badge {
    right: -24px; /* ব্যাজটা ডান দিকের বর্ডারের ঠিক ওপরে বসবে */
    left: auto;
  }

  /* -------------------------------------
     বিজোড় আইটেম (Right) - বর্ডার ও ব্যাজ থাকবে বাঁয়ে
     ------------------------------------- */
  .right .future-content {
    border-left: 4px solid #722F37; /* বাঁ পাশে টাইমলাইন বর্ডার */
    border-right: 1px solid #f5f5f5;
    margin-left: 15px; /* ব্যাজের জন্য একটু জায়গা ছাড়বে */
  }
  .right .future-badge {
    left: -24px; /* ব্যাজটা বাঁ দিকের বর্ডারের ঠিক ওপরে বসবে */
    right: auto;
  }
}
</style>