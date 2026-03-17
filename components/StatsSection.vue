<template>
  <section class="section-padding gradient-gold text-white">
    <div class="container-custom">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="text-center"
          data-aos="fade-up"
          :data-aos-delay="stat.id * 100"
        >
          <i :class="`${stat.icon} text-5xl mb-4 opacity-80`"></i>
          <h3 class="text-4xl lg:text-5xl font-bold mb-2">
            <span ref="counters">{{ stat.number }}</span>+
          </h3>
          <p class="text-lg opacity-90">{{ stat.text }}</p>
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
