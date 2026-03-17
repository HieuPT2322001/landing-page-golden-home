<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300',
      isScrolled ? 'shadow-lg' : 'shadow-md'
    ]"
  >
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 text-xl font-bold text-secondary">
          <i class="fas fa-home text-primary text-2xl"></i>
          <span>Golden Home</span>
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="nav-link relative text-gray-700 font-medium hover:text-primary transition-colors duration-300"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          @click="toggleMenu"
          class="lg:hidden text-2xl text-secondary"
          aria-label="Toggle menu"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 top-16 bg-white lg:hidden z-40 overflow-y-auto"
      >
        <div class="flex flex-col p-6 gap-4">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            @click="closeMenu"
            class="text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
        <button
          @click="closeMenu"
          class="absolute top-4 right-6 text-2xl text-secondary"
          aria-label="Close menu"
        >
          <i class="fas fa-times"></i>
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
.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  @apply w-full;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
