<template>
  <div class="polaroid-wrapper py-5 px-3 min-vh-100">
    
    <!-- হেডিং সেকশন -->
    <div class="container text-center mb-5 fade-in">
      <h2 class="custom-heading display-4 fw-bold">The Polaroid Vault 📸</h2>
      <p class="text-muted">A collection of my favorite views...</p>
    </div>

    <div class="container max-width-container">
      
      <!-- মডার্ন Masonry গ্রিড লেআউট -->
      <div class="masonry-grid">
        
        <!-- বাইরের ডিভ: এটা শুধু Masonry ব্রেকিং আর ফেড-ইন অ্যানিমেশন কন্ট্রোল করবে -->
        <div 
          v-for="(photo, index) in photos" 
          :key="photo.id" 
          class="masonry-item fade-in-up"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <!-- ভেতরের ডিভ: এটা 3D ফ্লিপ আর তোমার সেই বাঁকা (Tilted) রোটেশন ধরে রাখবে -->
          <div class="polaroid-container" :class="photo.rotateClass">
            <div class="polaroid-card shadow-sm">
              
              <!-- ছবির সামনের দিক (Front) -->
              <div class="polaroid-front">
                <div class="image-box">
                  <!-- ছবি এখন আর কাটবে না, অরিজিনাল রেশিও নেবে -->
                  <img :src="photo.image" :alt="photo.title" class="custom-img" />
                </div>
                <div class="polaroid-caption mt-3 mb-1 text-center">
                  <h5 class="fw-bold mb-0 custom-title text-dark">{{ photo.title }}</h5>
                  <small class="text-muted">{{ photo.date }}</small>
                </div>
              </div>
              
              <!-- ছবির পেছনের দিক (Back) -->
              <div class="polaroid-back d-flex justify-content-center align-items-center p-4">
                <p class="custom-handwriting text-center mb-0 text-dark">
                  "{{ photo.note }}"
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>

      <!-- নেক্সট পেজ বাটন -->
      <div class="text-center mt-5 pt-5 fade-in" style="animation-delay: 1s;">
        <button @click="goNext" class="btn rounded-pill px-5 py-3 shadow-sm custom-btn">
          Next: Through My Eyes &rarr;
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { polaroidGallery } from '../data/db.js'

const router = useRouter()
const photos = ref(polaroidGallery)

const goNext = () => {
  router.push('/thoughts')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Nunito:wght@400;600;700&display=swap');

.polaroid-wrapper {
  background: #fdfbfb;
  font-family: 'Nunito', sans-serif;
  overflow-x: hidden;
}

.max-width-container { max-width: 1100px; margin: 0 auto; }
.custom-title { font-family: 'Nunito', sans-serif; }

.custom-handwriting { 
  font-family: 'Caveat',
  cursive; font-size: 1.5rem; 
  line-height: 1.4; 
  color: #5d4037 !important;}

.masonry-grid {
  column-count: 1;
  column-gap: 2rem;
}

@media (min-width: 768px) {
  .masonry-grid { column-count: 2; }
}

@media (min-width: 992px) {
  .masonry-grid { column-count: 3; }
}

.masonry-item {
  width: 100%;
  break-inside: avoid;
  margin-bottom: 2.5rem;
  display: inline-block;
}

.polaroid-container {
  perspective: 1000px;
  width: 100%;
  cursor: pointer;
  transition: transform 0.3s ease; 
}

.rotate-left { transform: rotate(-4deg); }
.rotate-right { transform: rotate(5deg); }
.rotate-straight { transform: rotate(-1deg); }

.polaroid-card {
  display: grid;
  width: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.polaroid-container:hover .polaroid-card {
  transform: rotateY(180deg) scale(1.05);
  box-shadow: 0 15px 25px rgba(0,0,0,0.1);
  background-color: #5d4037;
}


.polaroid-front, .polaroid-back {
  grid-area: 1 / 1; 
  backface-visibility: hidden; 
  background: #fff;
  border-radius: 20px;
  padding: 10px;
  border: 1px solid #e0e0e0;
}


.image-box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.custom-img {
  width: 100%;
  height: auto; 
  max-height: 380px;
  object-fit: cover;
  object-position: top;
  display: block; 
}


.polaroid-back {
  transform: rotateY(180deg);
  background: #fffdf2;
  background-image: repeating-linear-gradient(transparent, transparent 29px, #f0eaea 30px);
}

.fade-in { animation: fadeIn 1s ease-in forwards; opacity: 0; }
.fade-in-up { opacity: 0; transform: translateY(30px); animation: fadeInUp 0.8s ease-out forwards; }
@keyframes fadeIn { to { opacity: 1; } }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
</style>