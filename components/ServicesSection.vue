<template>
  <section id="services" class="section-padding bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-12 scroll-animate fly-up" data-aos="fade-up">
        <span class="text-primary font-semibold uppercase tracking-wider text-sm">
          Dịch Vụ Của Chúng Tôi
        </span>
        <h2 class="text-3xl lg:text-4xl font-bold text-secondary mt-2">
          Giải Pháp Xây Dựng Toàn Diện
        </h2>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.id"
          class="scroll-animate fly-bounce bg-white p-8 rounded-2xl shadow-card hover-lift hover-glow
                 transition-all duration-300 text-center group relative overflow-hidden"
          :class="`delay-${service.id * 100}`"
        >
          <!-- Animated Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-dark/5 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Icon Container -->
          <div class="relative">
            <div class="w-20 h-20 gradient-gold rounded-full flex items-center 
                        justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12
                        transition-all duration-500 shadow-lg group-hover:shadow-gold-hover
                        animate-pulse-scale">
              <i :class="`${service.icon} text-3xl text-white`"></i>
            </div>
            
            <!-- Ripple Effect on Hover -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-20 h-20 rounded-full border-2 border-primary 
                          scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-50
                          transition-all duration-700"></div>
            </div>
          </div>
          
          <h3 class="text-xl font-bold text-secondary mb-4 group-hover:text-primary 
                     transition-colors duration-300 relative z-10">
            {{ service.title }}
          </h3>
          <p class="text-gray-600 leading-relaxed relative z-10">
            {{ service.description }}
          </p>
          
          <!-- Hover Arrow -->
          <div class="mt-4 text-primary opacity-0 group-hover:opacity-100 
                      transform translate-y-4 group-hover:translate-y-0
                      transition-all duration-300">
            <i class="fas fa-arrow-right animate-bounce-soft"></i>
          </div>
          
          <!-- Corner Decoration -->
          <div class="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full
                      transform translate-x-10 -translate-y-10 group-hover:translate-x-0 
                      group-hover:translate-y-0 transition-transform duration-500"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Service } from '~/types'

const services: Service[] = [
  {
    id: 1,
    icon: 'fas fa-drafting-compass',
    title: 'Tư Vấn Thiết Kế',
    description: 'Tư vấn và thiết kế kiến trúc chuyên nghiệp, tối ưu hóa không gian và công năng sử dụng theo nhu cầu khách hàng.'
  },
  {
    id: 2,
    icon: 'fas fa-hard-hat',
    title: 'Thi Công Xây Dựng',
    description: 'Thi công xây dựng với đội ngũ thợ lành nghề, tiến độ đảm bảo, chất lượng công trình uy tín.'
  },
  {
    id: 3,
    icon: 'fas fa-pencil-ruler',
    title: 'Thiết Kế Nội Thất',
    description: 'Thiết kế nội thất hiện đại, sang trọng, phù hợp với phong cách và ngân sách của mỗi gia đình.'
  },
  {
    id: 4,
    icon: 'fas fa-tools',
    title: 'Sửa Chữa - Cải Tạo',
    description: 'Dịch vụ sửa chữa, cải tạo, nâng cấp công trình cũ, mang đến diện mạo mới cho ngôi nhà của bạn.'
  },
  {
    id: 5,
    icon: 'fas fa-clipboard-check',
    title: 'Giám Sát Thi Công',
    description: 'Giám sát chất lượng thi công, đảm bảo công trình được thực hiện đúng thiết kế và tiêu chuẩn.'
  },
  {
    id: 6,
    icon: 'fas fa-handshake',
    title: 'Tư Vấn Pháp Lý',
    description: 'Hỗ trợ các thủ tục pháp lý liên quan đến xây dựng, giấy phép xây dựng, thẩm định dự án.'
  }
]
</script>
