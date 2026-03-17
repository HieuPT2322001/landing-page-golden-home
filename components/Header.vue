<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300',
      isScrolled ? 'shadow-lg py-2' : 'shadow-md py-0'
    ]"
  >
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo with Animations -->
        <NuxtLink 
          to="/" 
          class="flex items-center gap-2 text-xl font-bold text-secondary group"
        >
          <i class="fas fa-home text-primary text-2xl group-hover:scale-125 
                    group-hover:rotate-12 transition-all duration-500 animate-pulse-scale"></i>
          <span class="group-hover:text-primary transition-colors duration-300">
            Golden Home
          </span>
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="nav-link relative text-gray-700 font-medium hover:text-primary 
                   transition-colors duration-300 py-2 group"
          >
            <span class="relative z-10">{{ link.label }}</span>
            <!-- Underline Animation -->
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r 
                         from-primary to-primary-dark group-hover:w-full 
                         transition-all duration-300"></span>
            <!-- Background Glow on Hover -->
            <span class="absolute inset-0 bg-primary/5 rounded-lg scale-0 
                         group-hover:scale-100 transition-transform duration-300 -z-10"></span>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Toggle with Animation -->
        <button
          @click="toggleMenu"
          class="lg:hidden text-2xl text-secondary relative group p-2 
                 hover:text-primary transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <div class="relative">
            <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'" 
               class="transition-all duration-300"></i>
            <!-- Ripple Effect -->
            <span class="absolute inset-0 bg-primary/10 rounded-full scale-0 
                         group-hover:scale-150 transition-transform duration-500"></span>
          </div>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu with Enhanced Animations -->
    <Transition name="slide">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 top-16 bg-white lg:hidden z-40 overflow-y-auto"
      >
        <!-- Background Overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        
        <div class="relative flex flex-col p-6 gap-2">
          <NuxtLink
            v-for="(link, index) in navLinks"
            :key="link.href"
            :to="link.href"
            @click="closeMenu"
            class="text-lg font-medium text-gray-700 hover:text-primary 
                   transition-all duration-300 py-3 px-4 rounded-xl
                   hover:bg-primary/5 hover:translate-x-2 group relative
                   animate-slide-in-left"
            :style="{ animationDelay: `${index * 50}ms` }"
          >
            <!-- Icon Arrow -->
            <i class="fas fa-chevron-right absolute left-0 opacity-0 
                      group-hover:opacity-100 group-hover:left-2 
                      transition-all duration-300 text-primary text-sm"></i>
            <span class="ml-6">{{ link.label }}</span>
            
            <!-- Border Bottom -->
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r 
                        from-primary to-primary-dark group-hover:w-full 
                        transition-all duration-500"></div>
          </NuxtLink>
        </div>
        
        <!-- Close Button with Animation -->
        <button
          @click="closeMenu"
          class="absolute top-4 right-6 text-2xl text-secondary group
                 hover:text-primary transition-all duration-300"
          aria-label="Close menu"
        >
          <div class="relative">
            <i class="fas fa-times group-hover:rotate-90 transition-transform duration-300"></i>
            <!-- Pulse Ring -->
            <div class="absolute inset-0 border-2 border-primary rounded-full 
                        scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-30 
                        transition-all duration-500"></div>
          </div>
        </button>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import type { NavLink } from '~/types'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const navLinks: NavLink[] = [
  { label: 'Trang Chủ', href: '#home' },
  { label: 'Dịch Vụ', href: '#services' },
  { label: 'Về Chúng Tôi', href: '#about' },
  { label: 'Dự Án', href: '#projects' },
  { label: 'Liên Hệ', href: '#contact' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
