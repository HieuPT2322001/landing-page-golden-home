<template>
  <Transition name="fade">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed right-6 bottom-6 w-12 h-12 rounded-full gradient-gold 
             text-white shadow-card hover:shadow-card-hover hover:-translate-y-1
             transition-all duration-300 z-40 flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <i class="fas fa-arrow-up"></i>
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
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
