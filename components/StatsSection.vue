<template>
  <section class="section-padding gradient-gold text-white relative overflow-hidden">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-pulse-scale"></div>
      <div class="absolute bottom-10 right-10 w-40 h-40 border-2 border-white rounded-full animate-pulse-scale" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-white rounded-full animate-pulse-scale" style="animation-delay: 2s;"></div>
    </div>
    
    <div class="container-custom relative z-10">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="text-center group hover-lift relative scroll-animate fly-zoom"
          :class="`delay-${stat.id * 100}`"
        >
          <!-- Card Background with Hover Effect -->
          <div class="absolute inset-0 bg-white/5 rounded-2xl scale-0 
                      group-hover:scale-100 transition-transform duration-500"></div>
          
          <!-- Icon with Multiple Animations -->
          <div class="relative mb-4">
            <i :class="`${stat.icon} text-5xl mb-4 opacity-80 inline-block
                       group-hover:scale-125 group-hover:rotate-12 
                       transition-all duration-500`"></i>
            
            <!-- Pulse Rings -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div class="w-16 h-16 border-2 border-white rounded-full 
                          scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-30
                          transition-all duration-700"></div>
              <div class="absolute top-0 left-0 w-16 h-16 border-2 border-white rounded-full 
                          scale-0 group-hover:scale-200 opacity-0 group-hover:opacity-20
                          transition-all duration-1000"></div>
            </div>
          </div>
          
          <!-- Counter Number with Gradient Background -->
          <div class="relative inline-block">
            <div class="absolute inset-0 bg-white/10 rounded-xl blur-xl 
                        scale-0 group-hover:scale-110 transition-transform duration-500"></div>
            <h3 class="text-4xl lg:text-5xl font-bold mb-2 relative z-10 
                       group-hover:scale-110 transition-transform duration-300">
              <span ref="counters">{{ stat.number }}</span>+
            </h3>
          </div>
          
          <p class="text-lg opacity-90 group-hover:opacity-100 
                    transition-opacity duration-300 relative z-10">
            {{ stat.text }}
          </p>
          
          <!-- Bottom Border Animation -->
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-white 
                      group-hover:w-3/4 transition-all duration-700 rounded-full"></div>
          
          <!-- Sparkle Effect -->
          <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-500">
            <i class="fas fa-star text-white text-xs animate-pulse-scale"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Stat } from '~/types'

const stats: Stat[] = [
  {
    id: 1,
    icon: 'fas fa-award',
    number: 10,
    text: 'Năm Kinh Nghiệm'
  },
  {
    id: 2,
    icon: 'fas fa-building',
    number: 200,
    text: 'Công Trình Hoàn Thành'
  },
  {
    id: 3,
    icon: 'fas fa-users',
    number: 150,
    text: 'Khách Hàng Hài Lòng'
  },
  {
    id: 4,
    icon: 'fas fa-user-tie',
    number: 30,
    text: 'Chuyên Gia'
  }
]

const counters = ref<HTMLElement[]>([])

onMounted(() => {
  // Animation for counter numbers
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = Number(entry.target.textContent)
        animateCounter(entry.target as HTMLElement, target)
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })

  counters.value.forEach((counter) => {
    if (counter) observer.observe(counter)
  })
})

function animateCounter(element: HTMLElement, target: number) {
  let current = 0
  const increment = target / 50
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = String(target)
      clearInterval(timer)
    } else {
      element.textContent = String(Math.floor(current))
    }
  }, 30)
}
</script>
