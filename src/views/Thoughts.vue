<template>
  <div class="thoughts-wrapper py-5 px-3 min-vh-100 d-flex flex-column justify-content-center">
    
    <div class="container text-center mb-5 pb-3 fade-in">
      <h2 class="custom-heading display-4 fw-bold">Through My Eyes</h2>
      <p class="text-muted">How I truly see you...</p>
    </div>

    <div class="container max-width-container">
      
      <!-- লুপ করে থটসগুলো দেখানো হচ্ছে -->
      <div 
        v-for="(thought, index) in thoughts" 
        :key="thought.id"
        class="thought-card-wrapper mb-5 fade-in-up"
        :style="{ animationDelay: `${index * 0.3}s` }"
      >
        <!-- জোড়-বিজোড় অনুযায়ী লেআউট ডান-বামে শিফট হবে -->
        <div class="row align-items-center" :class="{ 'flex-row-reverse': index % 2 !== 0 }">
          
          <div class="col-md-4 text-center mb-4 mb-md-0">
            <div class="icon-circle shadow-sm mx-auto">
              <span class="display-4">{{ thought.icon }}</span>
            </div>
          </div>
          
          <div class="col-md-8">
            <div class="thought-content p-4 rounded-4 shadow-sm bg-white border-0 position-relative">
              <h3 class="custom-title mb-3">{{ thought.title }}</h3>
              <p class="text-muted thought-text mb-0">{{ thought.content }}</p>
              <!-- ডেকোরেটিভ কোটেশন মার্ক -->
              <span class="quote-mark text-light position-absolute top-0 end-0 pt-2 pe-3 display-1 fw-bold">"</span>
            </div>
          </div>

        </div>
      </div>

      <!-- নেক্সট পেজ বাটন -->
      <div class="text-center mt-5 pt-4 fade-in" style="animation-delay: 1.2s;">
        <button @click="goNext" class="btn rounded-pill px-5 py-3 shadow-sm custom-btn">
          Next: The Memory Lane &rarr;
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { myThoughts } from '../data/db.js'

const router = useRouter()
const thoughts = ref(myThoughts)

const goNext = () => {
  // নেক্সট পেজ (Memory Lane) এ যাওয়ার জন্য
  router.push('/memory-lane')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Nunito:wght@300;400;500&family=Playfair+Display:ital,wght@1,500&display=swap');

.thoughts-wrapper {
  background: linear-gradient(to bottom, #fdfbfb 0%, #f4f1ea 100%);
  font-family: 'Nunito', sans-serif;
  overflow-x: hidden;
}

.max-width-container { max-width: 850px; margin: 0 auto; }
.custom-heading { font-family: 'Caveat', cursive; color: #5d4037; }

/* কার্ড এবং আইকন স্টাইল */
.icon-circle {
  width: 100px;
  height: 100px;
  background-color: #faf9f6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #d7ccc8;
  transition: transform 0.4s ease;
}

.thought-card-wrapper:hover .icon-circle {
  transform: scale(1.1) rotate(10deg);
  background-color: #fff;
  border-color: #bcaaa4;
}

.thought-content {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  z-index: 1;
}

.thought-card-wrapper:hover .thought-content {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(93, 64, 55, 0.08) !important;
}

.custom-title {
  font-family: 'Playfair Display', serif; /* মডার্ন এবং পোয়েটিক ফন্ট */
  color: #4e342e;
  font-size: 1.8rem;
}

.thought-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #5d4037 !important;
  position: relative;
  z-index: 2;
}

.quote-mark {
  font-family: serif;
  opacity: 0.3;
  z-index: 0;
  user-select: none;
}

/* Button & Animations */
.custom-btn {
  background-color: #fff; color: #6d4c41; border: 1px solid #d7ccc8; font-weight: 600; transition: all 0.3s ease;
}
.custom-btn:hover { background-color: #d7ccc8; color: #fff; transform: translateY(-3px); }

.fade-in { animation: fadeIn 1s ease-in forwards; opacity: 0; }
.fade-in-up { opacity: 0; transform: translateY(30px); animation: fadeInUp 0.8s ease-out forwards; }

@keyframes fadeIn { to { opacity: 1; } }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
</style>