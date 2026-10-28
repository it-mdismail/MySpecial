<template>
  <div class="open-when-wrapper py-5 px-3 min-vh-100">
    
    <div class="container text-center mb-5 fade-in">
      <h2 class="custom-heading display-4 fw-bold">Open When...</h2>
      <p class="text-muted">A few small notes for different moments.</p>
    </div>

    <div class="container">
      <div class="row g-4 justify-content-center">
        
        <!-- এনভেলপগুলো লুপ করে দেখানো হচ্ছে -->
        <div 
          class="col-lg-4 col-md-6 mb-5 fade-in-up" 
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
    title: "Open when you feel sad 😔",
    message: "তোমার মন খারাপ মানে আমারও পৃথিবী থমকে থাকা। মনে রেখো, মেঘ কেটে গেলেই রোদ উঠবে। আমি সবসময় তোমার পাশে আছি।"
  },
  {
    title: "Open when you miss me ❤️",
    message: "সত্যি বলতে, আমিও তোমায় মিস করছি! আর হ্যাঁ, কোনো কারণ ছাড়াই আমাকে যখন-তখন নক দেওয়া যায়, আমি সবসময় তোমার এক টেক্সট দূরত্বে আছি।"
  },
  {
    title: "Open when you are overthinking 🧠",
    message: "মাথার ভেতরের এই যুদ্ধটা এবার একটু থামাও। তুমি যতটা ভাবছো, পরিস্থিতি ততটা খারাপ নয়। নিজের ওপর বিশ্বাস রাখো, তুমি স্পেশাল।"
  },
  {
    title: "Open when you can't sleep 🌙",
    message: "রাত জাগলে কিন্তু চোখের নিচে কালি পড়বে! চোখ বন্ধ করে লম্বা একটা শ্বাস নাও। কালকের সকালটা একটা নতুন শুরু নিয়ে শুধু তোমার জন্য অপেক্ষা করছে।"
  },
  {
    title: "Open when you suddenly want to see me 👀",
    message: "জাস্ট একটা টেক্সট করো— 'দেখা করবে?' বিশ্বাস করো, পৃথিবীর সমস্ত কাজ ফেলে আমি তোমার সামনে এসে হাজির হবো। আমি শুধু তোমার এই একটা কথারই তো অপেক্ষায় থাকি!"
  },
  {
    title: "Open when you hesitate to text me 📱",
    message: "তুমি হয়তো ভাবো আমি ব্যস্ত! কিন্তু সত্যিটা হলো, আমি সারাদিন শুধু তোমার একটা মেসেজের অপেক্ষায় বসে থাকি। তোমার ওই একটা নোটিফিকেশন আমার পুরো দিনের মুড বদলে দেয়।"
  },
  {
    title: "Open when you need me by your side 🏃‍♂️",
    message: "পরিস্থিতি যেমনই হোক, আর আমি যেখানেই থাকি না কেন... তুমি শুধু একবার বলো 'আমার তোমাকে দরকার', আমি সব কিছু ছেড়ে তোমার কাছে ছুটে আসবো। You are always my first priority."
  },
  {
    title: "Open when you feel like you are bothering me 🛑",
    message: "তুমি আমাকে কখনোই বিরক্ত করো না। বরং সত্যি বলতে কি, আমি সারাদিন শুধু সুযোগ আর বাহানা খুঁজি, কীভাবে তোমার সাথে একটু কথা বলা যায়। আমি চাই তুমি আমাকে বিরক্ত করো!"
  },
  {
    title: "Open when you want to escape from everything 🌍",
    message: "যদি কখনো চারপাশের সবকিছু খুব বিরক্তিকর লাগে আর মনে হয় কোথাও পালিয়ে যাই, আমাকে জানিও। তোমার যেকোনো পাগলামিতে আমি বিনা শর্তে সঙ্গী হতে রাজি আছি।"
  },
  {
    title: "Open when you wonder if I'm waiting for you ⏳",
    message: "হ্যাঁ, আমি অপেক্ষা করছি। ঠিক সেই মুহূর্তটার জন্য, যখন তুমি নিজে থেকে আমাকে বলবে, 'চলো আজ কোথাও একটু বসি?' আমি শুধু ওই ছোট্ট সুযোগটার অপেক্ষায় প্রহর গুনছি।"
  },
  {
    title: "Open when you want to hear my voice 📞",
    message: "কোনো কারণ ছাড়াই আমাকে কল দিতে পারো। আমি সব কাজ ফেলে শুধু তোমার কথা শোনার জন্য ঘণ্টার পর ঘণ্টা ফোন কানে ধরে বসে থাকতে রাজি আছি। Just call me!"
  },
  {
    title: "Open when you feel distant from me 🥺",
    message: "মাঝে মাঝে হয়তো আমাদের কথা কম হয়। কিন্তু তুমি জানো না, কথা না বলা সময়টাতেও আমি শুধু এটা ভাবি— কখন তুমি অনলাইনে আসবে, আর কখন আমি তোমাকে একটা মেসেজ দেওয়ার সুযোগ পাবো।"
  },
  {
    title: "Open when you doubt yourself 🤔",
    message: "যখন নিজের আয়নার সামনে দাঁড়িয়ে নিজেকে অপূর্ণ মনে হবে, তখন একবার আমার চোখে নিজেকে দেখো। তুমি যেমন আছো, ঠিক তেমনই পারফেক্ট।"
  },
  {
    title: "Open when you feel lonely 🥺",
    message: "তুমি একা নও। এই যে আমি পুরো একটা ওয়েবসাইট বানিয়ে বসে আছি, শুধু তোমাকে এটা বোঝানোর জন্য যে তোমার জন্য কেউ একজন সবসময় অপেক্ষা করে আছে।"
  },
  {
    title: "Open when you need a hug 🤗",
    message: "আমি হয়তো এখন তোমার সামনে নেই, কিন্তু চোখ বন্ধ করে ভাবো। এই মেসেজটা তোমার জন্য আমার পাঠানো একটা অনেক উষ্ণ আর শক্ত ভার্চুয়াল হাগ!"
  },
  {
    title: "Open when you are exhausted 😫",
    message: "তুমি আজ অনেক পরিশ্রম করেছো। এবার একটু বিশ্রাম নাও। নিজেকে একটু সময় দাও, নিজের যত্ন নাও। You truly deserve peace."
  },
  {
    title: "Open when you need to smile ✨",
    message: "তোমার ওই মিষ্টি হাসিটা আমার সবচেয়ে প্রিয়। প্লিজ একটু হাসো তো! হ্যাঁ, ঠিক এই হাসিটাই আমাকে পাগল করে দেয়।"
  },
  {
    title: "Open when you are mad at me 😠",
    message: "আমি জানি আমি হয়তো কোনো বোকামি করেছি। আমাকে মাফ করে দেওয়া যায় না? তোমার ওই রাগী চেহারাটাও কিউট, তবে হাসিটা বেশি সুন্দর।"
  },
  {
    title: "Open when everything feels too much 🌪️",
    message: "একটা লম্বা শ্বাস নাও। সবকিছু আজকেই ঠিক করতে হবে এমন কোনো কথা নেই। আজকের মতো সব চিন্তা ছেড়ে দাও, কাল নতুন করে ভাবা যাবে।"
  },
  {
    title: "Open when you want to talk but don't know how 🤐",
    message: "কথা বলার জন্য কোনো অজুহাত লাগবে না। জাস্ট একটা ডট (.) পাঠিয়ে দাও। আমি বুঝে নেবো তুমি কথা বলতে চাইছো।"
  },
  {
    title: "Open when you are bored 🥱",
    message: "চলো পৃথিবীর সবচেয়ে রেন্ডম আর অদ্ভুত কোনো টপিক নিয়ে কথা বলি? আমি তোমার মেসেজের অপেক্ষায় আছি।"
  },
  {
    title: "Open when you feel like crying 😢",
    message: "কেঁদে মন হালকা করতে চাইলে করো, কোনো বাধা নেই। কিন্তু মনে রেখো, তোমার এই চোখের জল মোছার জন্য কেউ একজন খুব দূরে বসেও ব্যাকুল হয়ে আছে।"
  },
  {
    title: "Open when you read this first time 💌",
    message: "আমি জানি না এই ওয়েবসাইটটা দেখার পর তোমার কেমন লাগছে। তবে আমি শুধু এটুকুই চাই, এটা যেন তোমার মুখের হাসির কারণ হয়।"
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
  width: 280px;
  height: 180px;
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
  padding: 10px 5px;
  font-size: 0.9rem;
  margin-top: 40px;
  width: 100%;
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
  left: 3%;
  width: 94%;
  height: 94%;
  background: #fff;
  border-radius: 5px;
  z-index: 2;
  padding: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease, z-index 0s 0.2s;
  border: 1px solid #722F37;
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

/* Animations */
.fade-in { animation: fadeIn 1s ease-in forwards; opacity: 0; }
.fade-in-up { opacity: 0; transform: translateY(20px); animation: fadeInUp 0.8s ease-out forwards; }

@keyframes fadeIn { to { opacity: 1; } }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
</style>