<!-- Login.vue -->

<template>
  <div class="login-wrapper d-flex justify-content-center align-items-center vh-100 w-100">
    <div class="card p-4 p-md-5 shadow-lg border-0 rounded-4 text-center glass-card">
      <div class="card-body">
        
        <h1 class="display-5 fw-bold mb-3 custom-title">A Little Corner...</h1>
        <p class="text-muted mb-4">Just for you. Please enter the magic number.</p>

        <div class="input-group mb-3 px-md-3">
          <input 
            type="password" 
            v-model="password" 
            class="form-control rounded-start-pill px-4 bg-light border-0 shadow-sm" 
            placeholder="Enter PIN..." 
            @keyup.enter="checkPassword"
          />
          <button 
            @click="checkPassword" 
            class="btn rounded-end-pill px-4 shadow-sm custom-btn"
          >
            &#10140; 
          </button>
        </div>

        <p v-if="error" class="text-danger small mt-3 fw-semibold">
          Ops! Wrong PIN. Hint: It's a special number.
        </p>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const password = ref('')
const error = ref(false)
const router = useRouter()

const SECRET_PIN = '786' 

const checkPassword = () => {
  if (password.value === SECRET_PIN) {
    error.value = false
    localStorage.setItem('isLoggedIn', 'true') 
    router.push('/welcome') 
  } else {
    error.value = true
    password.value = ''
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Nunito:wght@400&display=swap');

.login-wrapper {
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
  font-family: 'Nunito', sans-serif;
}

.glass-card {
  background: rgba(255, 255, 255, 0.5) !important;
  backdrop-filter: blur(12px);
  max-width: 420px;
  width: 90%;
}

.custom-title {
  font-family: 'Caveat', cursive;
  color: #5d4037;
}

.custom-btn {
  background-color: #6d4c41;
  color: white;
  transition: all 0.3s;
}

.custom-btn:hover {
  background-color: #5d4037;
}
</style>