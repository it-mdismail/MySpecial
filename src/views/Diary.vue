<template>
  <div class="diary-wrapper py-5 px-3 min-vh-100 d-flex justify-content-center align-items-center">
    
    <div class="container max-width-container">
      
      <div class="text-center mb-5 fade-in">
        <h2 class="custom-heading display-4 fw-bold">Unspoken Words</h2>
        <p class="text-muted">Just a few things I needed to say...</p>
      </div>

      <div class="card border-0 shadow-lg letter-card fade-in-up" style="animation-delay: 0.5s;">
        <div class="card-body p-md-5 p-4">
          
          <p class="greeting custom-handwriting mb-4">Dear You,</p>
          
          <div class="letter-content">
            <p v-for="(text, index) in displayedParagraphs" :key="index" class="letter-text">
              {{ text }}
              <span v-if="isTyping && currentParaIndex === index" class="blinking-cursor">|</span>
            </p>
          </div>

          <div class="text-end mt-4 fade-in-slow" v-if="!isTyping">
            <p class="custom-handwriting sign-off mb-0">Yours,</p>
            <p class="fw-bold text-dark">Md Ismail Hossan (Lingkon)</p>
          </div>

        </div>
      </div>

      <!-- নতুন গেম সেকশন (টাইপ শেষ হলে দেখাবে) -->
      <div class="text-center mt-5 fade-in" v-if="!isTyping">
        <button 
          @click="showModal = true" 
          class="btn rounded-pill px-4 py-2 shadow-sm quiz-btn shake-animation"
        >
          P.S. I have a question 🫣
        </button>
      </div>

    </div>

    <!-- কিউট পপ-আপ (Modal) -->
    <div v-if="showModal" class="custom-modal-overlay">
      <div class="custom-modal card border-0 shadow-lg p-4 text-center rounded-4 fade-in-up">
        
        <div v-if="!quizAnswered">
          <h3 class="custom-heading mb-3">Just wondering...</h3>
          <p class="text-muted mb-4">আমাদের নেক্সট দেখায় কী খাওয়া উচিত?</p>
          
          <div class="d-flex flex-column gap-3">
            <button @click="handleAnswer" class="btn btn-outline-secondary rounded-pill">কফি ☕</button>
            <button @click="handleAnswer" class="btn btn-outline-secondary rounded-pill">আইসক্রিম 🍦</button>
            <button @click="handleAnswer" class="btn btn-outline-secondary rounded-pill">তুমি যা বলবে 😊</button>
          </div>
        </div>

        <div v-else class="py-4">
          <h1 class="mb-3">❤️</h1>
          <h4 class="custom-heading">Noted!</h4>
          <p class="text-muted">I'll be waiting for that day. <br> Take care.</p>
          <button @click="goNext" class="btn btn-sm btn-light rounded-pill mt-3 px-4">
            See My Whispers &rarr;
          </button>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const paragraphs = [
  "হঠাৎ করে এমন একটা স্পেস বা মেসেজ পেয়ে হয়তো তুমি অবাক হবে। কিন্তু নিজের ভেতরের কথাগুলো না বলে আর থাকতে পারলাম না। অনেকদিন ধরেই তোমাকে আমি খুব খেয়াল করছি।",
  "আগে তুমি নিজের অনেক ছবি শেয়ার করতে, কিন্তু ইদানীং হঠাৎ করে সেটা বন্ধ করে দিয়েছ। সত্যি বলতে, তোমার এই বদলে যাওয়া বা নিজেকে একটু আড়াল করে নেওয়ার ব্যাপারটা আমাকে তোমার প্রতি আরও বেশি মুগ্ধ করেছে। কেন যেন এরপর থেকেই তোমার প্রতি আরও গভীরভাবে টান অনুভব করেছি।",
  "তোমাকে না জানিয়েই ভেতরে ভেতরে অনেক বেশি ভালোবেসে ফেলেছি। মনের অনুভূতিগুলো এতোটাই বেড়ে গেছে যে, আর নিজের ভেতর চেপে রাখতে পারলাম না। তাই আজ সাহস করে এই ছোট্ট স্পেসটা বানালাম, শুধু তোমাকে বলার জন্য।",
  "আমি চাই না এটা পড়ে তুমি কোনো অস্বস্তি বোধ করো বা কোনো চাপে পড়ো। আমি শুধু চেয়েছি আমার জমানো অনুভূতিগুলো অন্তত একবার তুমি জানো। আমি সবসময় তোমার পাশে আছি, ঠিক এভাবেই। যদি তোমার মনে হয়, তবে একটা ছোট্ট রিপ্লাই দিও। তোমার উত্তরের অপেক্ষায় থাকবো।"
]

const displayedParagraphs = ref(['', '', '', ''])
const currentParaIndex = ref(0)
const currentCharIndex = ref(0)
const isTyping = ref(true)

const showModal = ref(false)
const quizAnswered = ref(false)

const typeWriter = () => {
  if (currentParaIndex.value < paragraphs.length) {
    const currentText = paragraphs[currentParaIndex.value]
    if (currentCharIndex.value < currentText.length) {
      displayedParagraphs.value[currentParaIndex.value] += currentText.charAt(currentCharIndex.value)
      currentCharIndex.value++
      setTimeout(typeWriter, 35) 
    } else {
      currentParaIndex.value++
      currentCharIndex.value = 0
      setTimeout(typeWriter, 400) 
    }
  } else {
    isTyping.value = false 
  }
}

onMounted(() => {
  setTimeout(typeWriter, 1200) 
})

const handleAnswer = () => {
  quizAnswered.value = true
}

const goNext = () => {
  showModal.value = false
  router.push('/whispers')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Nunito:wght@300;400;500&display=swap');

.diary-wrapper {
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
  font-family: 'Nunito', sans-serif;
}

.max-width-container { max-width: 750px; margin: 0 auto; }

.letter-card {
  background-color: #faf9f6;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  min-height: 400px; 
}

.letter-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 6px;
  background: linear-gradient(90deg, #d7ccc8, #a1887f);
}

.custom-handwriting { 
  font-size: 2rem;
}

.letter-text { 
  font-size: 1.1rem; 
  line-height: 1.8; 
  color: #4e342e; 
  text-align: justify; 
  min-height: 25px;
 }
.blinking-cursor { 
  font-weight: bold; 
  animation: blink 1s step-end infinite; 
}
.sign-off { 
  font-size: 1.8rem; 
  color: #795548; 
}

.quiz-btn {
  background-color: #fff9c4;
  color: #5d4037;
  border: 1px solid #d7ccc8;
  font-weight: 600;
  transition: all 0.3s ease;
}
.quiz-btn:hover { background-color: #fff59d; transform: scale(1.05); }

/* Modal Styles */
.custom-modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  display: flex; justify-content: center; align-items: center;
  z-index: 10000;
}

.custom-modal { width: 90%; max-width: 400px; background: #fff; }
.custom-modal .btn { transition: all 0.3s ease; border-color: #d7ccc8; color: #5d4037; }
.custom-modal .btn:hover { background: #d7ccc8; color: #fff; }

/* Animations */
.fade-in { animation: fadeIn 1.2s ease-in forwards; opacity: 0; }
.fade-in-up { opacity: 0; transform: translateY(20px); animation: fadeInUp 0.5s ease-out forwards; }
.fade-in-slow { animation: fadeIn 2s ease-in forwards; opacity: 0; }
.shake-animation { animation: shake 2.5s infinite ease-in-out; }

@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
@keyframes fadeIn { to { opacity: 1; } }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
@keyframes shake {
  0%, 100% { transform: rotate(0deg); }
  5%, 15% { transform: rotate(3deg); }
  10%, 20% { transform: rotate(-3deg); }
  25% { transform: rotate(0deg); }
}
</style>