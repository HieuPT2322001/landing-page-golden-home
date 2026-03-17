<template>
  <section id="about" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div class="relative" data-aos="fade-right">
          <div class="w-full h-96 lg:h-[500px] bg-gradient-to-br from-secondary to-secondary-light 
                      rounded-3xl flex items-center justify-center shadow-card">
            <i class="fas fa-building text-primary text-9xl opacity-30"></i>
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-6" data-aos="fade-left">
          <div>
            <span class="text-primary font-semibold uppercase tracking-wider text-sm">
              Về Chúng Tôi
            </span>
            <h2 class="text-3xl lg:text-4xl font-bold text-secondary mt-2">
              Golden Home Điện Biên
            </h2>
          </div>

          <p class="text-gray-600 leading-relaxed">
            Với nhiều năm kinh nghiệm trong lĩnh vực xây dựng, Golden Home Điện Biên tự hào là đối tác tin cậy 
            của hàng trăm gia đình và doanh nghiệp tại Điện Biên và các tỉnh lân cận.
          </p>

          <p class="text-gray-600 leading-relaxed">
            Chúng tôi cam kết mang đến chất lượng tốt nhất với giá thành hợp lý, đúng tiến độ và luôn đặt 
            sự hài lòng của khách hàng lên hàng đầu.
          </p>

          <!-- Features -->
          <div class="space-y-4 mt-8">
            <div
              v-for="feature in features"
              :key="feature.id"
              class="flex gap-4 items-start"
              data-aos="fade-up"
              :data-aos-delay="feature.id * 100"
            >
              <i :class="`${feature.icon} text-2xl text-primary mt-1 flex-shrink-0`"></i>
              <div>
                <h4 class="font-bold text-secondary mb-1">{{ feature.title }}</h4>
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
