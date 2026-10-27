<template>
  <div class="open-when-wrapper py-5 px-3 min-vh-100">
    
    <div class="container text-center mb-5 fade-in">
      <h2 class="custom-heading display-4 fw-bold">Open When...</h2>
      <p class="text-muted">A few small notes for different moments.</p>
    </div>

    <div class="container max-width-container">
      <div class="row g-4 justify-content-center">
        
        <!-- এনভেলপগুলো লুপ করে দেখানো হচ্ছে -->
        <div 
          class="col-lg-5 col-md-6 mb-5 fade-in-up" 
          v-for="(envelope, index) in envelopes" 
          :key="index"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="envelope-container" @click="toggleEnvelope(index)">
            
            <div class="envelope" :class="{ 'is-open': openIndex === index }">
              <!-- খামের পেছনের অংশ -->
              <div class="env-back"></div>
              
              <!-- ভেতরের চিঠি -->
              <div class="env-letter shadow-sm">
                <p class="mb-0 fw-semibold text-dark">{{ envelope.message }}</p>
              </div>
              
              <!-- খামের সামনের অংশ -->
              <div class="env-front">
                <span class="env-label badge rounded-pill shadow-sm">{{ envelope.title }}</span>
              </div>
              
              <!-- খামের ওপরের ঢাকনা (Flap) -->
              <div class="env-top"></div>
            </div>
            
          </div>
        </div>

      </div>

      <!-- নেক্সট চ্যাপ্টার বাটন -->
      <div class="text-center mt-5 pt-3 fade-in" style="animation-delay: 1s;">
        <button @click="goNext" class="btn rounded-pill px-5 py-3 shadow-sm custom-btn">
          Next: Unspoken Words &rarr;
        </button>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const openIndex = ref(null) // কোন খামটা খোলা আছে তার ট্র্যাক রাখার জন্য

// খামের টাইটেল এবং ভেতরের মেসেজ 
const envelopes = ref([
  {
    title: "Open when you are sad 😔",
    message: "Remember that you have a beautiful smile. Even on bad days, I'm right here rooting for you."
  },
  {
    title: "Open when you can't sleep 🌙",
    message: "Close your eyes, take a deep breath. Let go of today's worries. Tomorrow is a fresh start."
  },
  {
    title: "Open when you feel alone 🥺",
    message: "You are never alone. You have someone secretly making a whole website just to make you smile!"
  },
  {
    title: "Open when you miss me ❤️",
    message: "Well... you know where to find me. Just drop a tiny message. I'm always one text away."
  }
])

const toggleEnvelope = (index) => {
  // যদি খামটা আগে থেকেই খোলা থাকে, তবে বন্ধ হবে। নাহলে খুলবে।
  if (openIndex.value === index) {
    openIndex.value = null
  } else {
    openIndex.value = index
  }
}

const goNext = () => {
  router.push('/diary') // এই পেজের পর ডায়েরি পেজে যাবে
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Nunito:wght@400;600&display=swap');

.open-when-wrapper {
  background: #fdfbfb;
  font-family: 'Nunito', sans-serif;
  overflow-x: hidden;
}

.max-width-container {
  max-width: 900px;
  margin: 0 auto;
}

.custom-heading {
  font-family: 'Caveat', cursive;
  color: #6d4c41;
}

/* Envelope CSS Art & Animation */
.envelope-container {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  perspective: 1000px;
}

.envelope {
  position: relative;
  width: 260px;
  height: 160px;
  background: #f5f5f5;
  transition: transform 0.4s ease;
}

.envelope:hover {
  transform: translateY(-5px);
}

.env-back {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #d7ccc8;
  border-radius: 5px;
}

.env-front {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #bcaaa4;
  border-radius: 0 0 5px 5px;
  z-index: 3;
  clip-path: polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.env-label {
  background: #fff;
  color: #6d4c41;
  padding: 8px 15px;
  font-size: 0.9rem;
  margin-top: 30px;
}

.env-top {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #a1887f;
  border-radius: 5px;
  clip-path: polygon(0 0, 100% 0, 50% 55%);
  z-index: 4;
  transform-origin: top;
  transition: transform 0.4s 0.2s ease, z-index 0s 0.2s;
}

.env-letter {
  position: absolute;
  bottom: 0;
  left: 5%;
  width: 90%;
  height: 90%;
  background: #fff;
  border-radius: 5px;
  z-index: 2;
  padding: 15px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease, z-index 0s 0.2s;
  border: 1px solid #eee;
}

.env-letter p {
  font-size: 0.9rem;
  color: #5d4037;
}

/* খাম খোলার পর যা হবে (When is-open class is active) */
.is-open .env-top {
  transform: rotateX(180deg);
  z-index: 1; /* ঢাকনা পেছনে চলে যাবে */
  transition: transform 0.4s ease, z-index 0s 0.2s;
}

.is-open .env-letter {
  transform: translateY(-80px); /* চিঠিটা অর্ধেক বেরিয়ে আসবে */
  z-index: 4; /* চিঠিটা সবার সামনে চলে আসবে */
  transition: transform 0.5s 0.2s ease, z-index 0s 0.2s;
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

@keyframes fadeIn { to { opacity: 1; } }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
</style>