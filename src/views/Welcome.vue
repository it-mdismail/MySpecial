<template>
  <div class="welcome-wrapper d-flex justify-content-center align-items-center vh-100 w-100 text-center px-3">
    
    <div class="welcome-content fade-in-up">
      <!-- আইকন বা ছোট ছবি (Bootstrap Icon বা ইমোজি) -->
      <div class="mb-4">
        <span class="fs-1">✨</span>
      </div>

      <h1 class="display-4 fw-bold mb-3 custom-heading">Hello, Beautiful Soul</h1>
      
      <p class="lead text-muted mb-5 mx-auto" style="max-width: 600px;">
        A little corner on the internet, just for you. I made this space to keep our memories, your smiles, and my unspoken words safe. Take a deep breath, and let's take a walk down memory lane.
      </p>

      <!-- নেক্সট পেজে যাওয়ার বাটন -->
      <button @click="goToJourney" class="btn btn-lg rounded-pill px-5 py-3 shadow-sm custom-btn">
        Begin the Journey <span class="ms-2">&rarr;</span>
      </button>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToJourney = () => {
  // বাটনে ক্লিক করলে জার্নি পেজে নিয়ে যাবে
  router.push('/journey')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Nunito:wght@300;400;600&display=swap');

.welcome-wrapper {
  background: linear-gradient(to bottom, #fdfbfb 0%, #ebedee 100%);
  font-family: 'Nunito', sans-serif;
}

.custom-heading {
  font-family: 'Caveat', cursive;
  color: #6d4c41; /* Soft brown */
  text-shadow: 1px 1px 2px rgba(0,0,0,0.05);
}

.custom-btn {
  background-color: #fff;
  color: #6d4c41;
  border: 1px solid #d7ccc8;
  transition: all 0.4s ease;
  font-weight: 600;
}

.custom-btn:hover {
  background-color: #d7ccc8;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(109, 76, 65, 0.15) !important;
}

/* সফট ফেড-ইন অ্যানিমেশন */
.fade-in-up {
  animation: fadeInUp 1.2s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>