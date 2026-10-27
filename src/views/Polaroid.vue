<template>
  <div class="polaroid-wrapper py-5 px-3 min-vh-100">
    
    <!-- হেডিং সেকশন -->
    <div class="container text-center mb-5 fade-in">
      <h2 class="custom-heading display-4 fw-bold">The Polaroid Vault 📸</h2>
      <p class="text-muted">A collection of my favorite views...</p>
    </div>

    <div class="container max-width-container">
      <div class="row justify-content-center g-5">
        
        <!-- লুপ করে ছবিগুলো দেখানো হচ্ছে -->
        <div 
          v-for="(photo, index) in photos" 
          :key="photo.id" 
          class="col-md-6 col-lg-4 d-flex justify-content-center fade-in-up"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <!-- 3D ফ্লিপ কন্টেইনার -->
          <div class="polaroid-container" :class="photo.rotateClass">
            <div class="polaroid-card shadow-lg">
              
              <!-- ছবির সামনের দিক (Front) -->
              <div class="polaroid-front">
                <div class="image-box">
                  <img :src="photo.image" :alt="photo.title" class="img-fluid" />
                </div>
                <div class="polaroid-caption mt-3 text-center">
                  <h5 class="fw-bold mb-0 custom-font text-dark">{{ photo.title }}</h5>
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
  // নেক্সট পেজ (Through My Eyes) এ যাওয়ার জন্য
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
.custom-heading { font-family: 'Caveat', cursive; color: #6d4c41; }
.custom-handwriting { font-family: 'Caveat', cursive; font-size: 1.8rem; line-height: 1.4; color: #4e342e !important; }

/* 3D Flip Card CSS */
.polaroid-container {
  perspective: 1000px; /* 3D স্পেস তৈরি করা হলো */
  width: 280px;
  height: 340px;
  cursor: pointer;
}

/* পোলারয়েড ছড়ানো ছিটানো দেখানোর জন্য ক্লাসেস */
.rotate-left { transform: rotate(-4deg); }
.rotate-right { transform: rotate(5deg); }
.rotate-straight { transform: rotate(-1deg); }

.polaroid-card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* বাউন্সি ফ্লিপ ইফেক্ট */
  transform-style: preserve-3d;
}

/* হোভার করলে কার্ডটা ১৮০ ডিগ্রি ঘুরে যাবে */
.polaroid-container:hover .polaroid-card {
  transform: rotateY(180deg) scale(1.05);
}

.polaroid-front, .polaroid-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* পেছনের দিকটা লুকিয়ে রাখার জন্য */
  background: #fff;
  border-radius: 8px;
  padding: 15px 15px 20px 15px;
  border: 1px solid #eee;
}

.image-box {
  width: 100%;
  height: 230px;
  overflow: hidden;
  background: #f5f5f5;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.polaroid-back {
  transform: rotateY(180deg);
  background: #faf9f6;
  background-image: repeating-linear-gradient(transparent, transparent 29px, #e0e0e0 30px); /* ডায়েরির পাতার মতো লাইন */
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