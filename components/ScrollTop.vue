<template>
  <Transition name="fade">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed right-6 bottom-6 w-12 h-12 rounded-full gradient-gold 
             text-white shadow-gold hover:shadow-gold-hover hover-lift
             transition-all duration-300 z-40 flex items-center justify-center
             group overflow-hidden animate-bounce-soft"
      aria-label="Scroll to top"
    >
      <!-- Ripple Effect Background -->
      <span class="absolute inset-0 bg-white/20 rounded-full scale-0 
                   group-hover:scale-100 transition-transform duration-500"></span>
      
      <!-- Icon with Rotation -->
      <i class="fas fa-arrow-up relative z-10 group-hover:-translate-y-1 
                group-hover:scale-125 transition-all duration-300"></i>
      
      <!-- Pulse Ring -->
      <div class="absolute inset-0 rounded-full border-2 border-white 
                  scale-100 group-hover:scale-150 opacity-50 group-hover:opacity-0
                  transition-all duration-700"></div>
      
      <!-- Progress Circle (optional visual enhancement) -->
      <svg class="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="white"
          stroke-width="2"
          opacity="0.3"
          class="group-hover:opacity-60 transition-opacity duration-300"
        />
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}
</style>
