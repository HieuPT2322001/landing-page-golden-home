<template>
  <section id="about" class="section-padding bg-gray-50 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-20 right-10 w-72 h-72 bg-primary-dark/5 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
    
    <div class="container-custom relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Image with Advanced Effects -->
        <div class="relative scroll-animate fly-left group">
          <div class="w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-card 
                      gradient-border image-overlay hover-tilt">
            <NuxtImg
              v-if="companyImage"
              :src="companyImage"
              alt="Golden Home Điện Biên"
              class="w-full h-full object-cover transition-transform duration-700 
                     group-hover:scale-110 group-hover:rotate-2"
              format="webp"
              quality="80"
              loading="lazy"
            />
            <div v-else class="w-full h-full bg-gradient-to-br from-secondary to-secondary-light 
                              flex items-center justify-center">
              <i class="fas fa-building text-primary text-9xl opacity-30 animate-pulse-scale"></i>
            </div>
          </div>
          
          <!-- Floating Badge -->
          <div class="absolute -top-6 -right-6 bg-white rounded-2xl shadow-gold p-4
                      animate-float hover-glow group">
            <div class="text-center">
              <div class="text-3xl font-bold gradient-text">10+</div>
              <div class="text-sm text-gray-600">Năm kinh nghiệm</div>
            </div>
          </div>
          
          <!-- Corner Accent -->
          <div class="absolute -bottom-4 -left-4 w-24 h-24 gradient-gold rounded-2xl
                      opacity-20 group-hover:opacity-40 transition-opacity duration-500
                      animate-pulse-scale"></div>
        </div>

        <!-- Content -->
        <div class="space-y-6 scroll-animate fly-right delay-200">
          <div>
            <span class="text-primary font-semibold uppercase tracking-wider text-sm
                         hover-glow inline-block">
              Về Chúng Tôi
            </span>
            <h2 class="text-3xl lg:text-4xl font-bold text-secondary mt-2 
                       hover:text-primary transition-colors duration-300">
              Golden Home Điện Biên
            </h2>
          </div>

          <p class="text-gray-600 leading-relaxed" style="animation-delay: 0.2s;">
            Với nhiều năm kinh nghiệm trong lĩnh vực xây dựng, Golden Home Điện Biên tự hào là đối tác tin cậy 
            của hàng trăm gia đình và doanh nghiệp tại Điện Biên và các tỉnh lân cận.
          </p>

          <p class="text-gray-600 leading-relaxed" style="animation-delay: 0.4s;">
            Chúng tôi cam kết mang đến chất lượng tốt nhất với giá thành hợp lý, đúng tiến độ và luôn đặt 
            sự hài lòng của khách hàng lên hàng đầu.
          </p>

          <!-- Features with Enhanced Animations -->
          <div class="space-y-4 mt-8">
            <div
              v-for="feature in features"
              :key="feature.id"
              class="flex gap-4 items-start p-4 rounded-xl hover-lift hover-glow
                     transition-all duration-300 group"
              :style="{ animationDelay: `${0.6 + feature.id * 0.1}s` }"
            >
              <div class="relative">
                <i :class="`${feature.icon} text-2xl text-primary mt-1 flex-shrink-0 
                           group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`"></i>
                <!-- Pulse Ring -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-8 h-8 rounded-full border-2 border-primary 
                              scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-30
                              transition-all duration-700"></div>
                </div>
              </div>
              <div>
                <h4 class="font-bold text-secondary mb-1 group-hover:text-primary 
                           transition-colors duration-300">
                  {{ feature.title }}
                </h4>
                <p class="text-gray-600 text-sm">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Feature } from '~/types'

// Using real image from public/images
const companyImage = ref<string | null>('/images/2.jpg')

const features: Feature[] = [
  {
    id: 1,
    icon: 'fas fa-check-circle',
    title: 'Đội Ngũ Chuyên Nghiệp',
    description: 'Kiến trúc sư, kỹ sư giàu kinh nghiệm'
  },
  {
    id: 2,
    icon: 'fas fa-check-circle',
    title: 'Chất Lượng Cam Kết',
    description: 'Bảo hành dài hạn, hậu mãi chu đáo'
  },
  {
    id: 3,
    icon: 'fas fa-check-circle',
    title: 'Giá Cả Cạnh Tranh',
    description: 'Báo giá minh bạch, chi phí hợp lý'
  }
]
</script>
