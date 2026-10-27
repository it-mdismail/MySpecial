<template>
  <div class="fireflies-container">
    <div 
      v-for="n in 30" 
      :key="n" 
      class="firefly"
      :style="generateRandomStyle()"
    ></div>
  </div>
</template>

<script setup>
const generateRandomStyle = () => {
  const leftPos = Math.random() * 100; 
  const duration = 10 + Math.random() * 10; // ১০ থেকে ২০ সেকেন্ড
  const delay = Math.random() * 5; // ০ থেকে ৫ সেকেন্ড ডিলে

  // এবার শুধু পজিশন আর সময়টা ইনলাইন স্টাইলে দিচ্ছি
  return {
    left: `${leftPos}vw`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`
  }
}
</script>

<style scoped>
.fireflies-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none; 
  z-index: 9999; 
  overflow: hidden;
}

.firefly {
  position: absolute;
  bottom: -20px;
  width: 6px;
  height: 6px;
  background-color: #ffd54f;
  border-radius: 50%;
  box-shadow: 0 0 10px #ffca28, 0 0 20px #ffe082; 
  
  /* অ্যানিমেশনের নাম আর স্টাইল এখানে আলাদা করে দেওয়া হলো */
  animation-name: flyUp;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes flyUp {
  0% {
    transform: translateY(0) translateX(0) scale(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
    transform: translateY(-20vh) translateX(20px) scale(1.5);
  }
  50% {
    opacity: 1;
    transform: translateY(-50vh) translateX(-20px) scale(1);
  }
  80% {
    opacity: 0.8;
    transform: translateY(-80vh) translateX(20px) scale(1.5);
  }
  100% {
    transform: translateY(-120vh) translateX(0) scale(0);
    opacity: 0;
  }
}
</style>