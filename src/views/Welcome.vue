<template>
  <div class="welcome-wrapper d-flex justify-content-center align-items-center vh-100 w-100 text-center px-3">
    
    <div class="welcome-content fade-in-up">
      <!-- আইকন বা ছোট ছবি (Bootstrap Icon বা ইমোজি) -->
      <div class="container d-flex justify-content-center">
        <div class="img-container rounded-circle overflow-hidden w-50">
          <img src="/assets/img/tofa-1.jpg" alt="MyHeart" class="img-thumbnail">
        </div>
      </div>

      <h1 class="display-4 fw-bold mb-3 custom-heading">Hello, Beautiful Soul</h1>

      <div class="welcome-text-container mt-4">
        <p class="lead text-muted mb-3">
          ইন্টারনেটের এক ছোট্ট কোণ, <span class="fw-bold custom-heading">শুধু তোমারই জন্য।</span>
        </p>
        
        <p class="text-muted mb-3">
          আমাদের সুন্দর স্মৃতিগুলো, তোমার ওই মিষ্টি হাসি আর আমার না বলা সব কথা সযতনে আগলে রাখতেই আমার এই ছোট্ট আয়োজন, যেন আমাদের কাটানো কোনো মুহূর্তই কখনো হারিয়ে না যায়। যদি কখনো আমার অনুভূতিগুলো জানতে ইচ্ছে করে, তবে তার জন্য এখানে একটা ছোট্ট ডায়েরিও রাখা আছে।
        </p>

        <p class="text-muted mb-3">
          তোমাকে নিয়ে আমার বুকের ভেতর হাজারো কথা আর স্বপ্ন জমে আছে, যা এই সামান্য একটা ওয়েবসাইটে পুরোপুরি প্রকাশ করা কখনোই সম্ভব নয়। তবুও, এই ছোট ছোট নোটগুলো যদি কোনোভাবে তোমার কাছে আমার অনুভূতির বার্তা হয়ে পৌঁছাতে পারে, সেটাই আমার জন্য অনেক বড় পাওয়া।
        </p>

        <p class="text-muted mb-4">
          আমি মন থেকে চাই, তোমার একাকীত্বের সময়গুলোতে এই ছোট্ট জায়গাটি তোমার সঙ্গী হোক এবং তোমার মুখে এক চিলতে হাসি ফুটিয়ে তুলুক।
        </p>

        <h5 class="custom-handwriting mt-4 mb-4">
          এবার চোখ বন্ধ করে একটা গভীর শ্বাস নাও... <br> 
          আর চলো, আমরা দুজনে মিলে আমাদের স্মৃতির সরণি থেকে একটু ঘুরে আসি।
        </h5>
      </div>

      <!-- নেক্সট পেজে যাওয়ার বাটন -->
      <button @click="goToJourney" class="btn btn-lg rounded-pill px-5 py-3 mb-5 shadow-sm custom-btn">
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
.img-container{
  margin-top: 300px;
}

.welcome-content{
  max-width:600px;
}
.welcome-text-container{
  font-style: italic;
  text-align: justify;
  line-height: 1.8;
}
.welcome-wrapper {
  font-family: 'Nunito', sans-serif;
}

.custom-btn:hover {
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