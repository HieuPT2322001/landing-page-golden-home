<template>
  <section id="projects" class="section-padding bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-12" data-aos="fade-up">
        <span class="text-primary font-semibold uppercase tracking-wider text-sm">
          Dự Án Tiêu Biểu
        </span>
        <h2 class="text-3xl lg:text-4xl font-bold text-secondary mt-2">
          Những Công Trình Đã Thực Hiện
        </h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover 
                 transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
          data-aos="fade-up"
          :data-aos-delay="project.id * 100"
        >
          <div class="h-64 gradient-gold flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <i :class="`${project.icon} text-white text-7xl opacity-50`"></i>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-secondary mb-2">
              {{ project.title }}
            </h3>
            <p class="text-primary text-sm mb-3 flex items-center gap-1">
              <i class="fas fa-map-marker-alt"></i>
              {{ project.location }}
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

const projects: Project[] = [
  {
    id: 1,
    icon: 'fas fa-home',
    title: 'Biệt Thự Hiện Đại',
    location: 'Điện Biên Phủ',
    description: 'Biệt thự 2 tầng phong cách hiện đại, diện tích 250m²'
  },
  {
    id: 2,
    icon: 'fas fa-building',
    title: 'Nhà Phố 3 Tầng',
    location: 'Mường Thanh',
    description: 'Nhà phố kết hợp kinh doanh, thiết kế tối ưu không gian'
  },
  {
    id: 3,
    icon: 'fas fa-store',
    title: 'Trung Tâm Thương Mại',
    location: 'Thanh Trường',
    description: 'Công trình thương mại 4 tầng, diện tích 500m²'
  },
  {
    id: 4,
    icon: 'fas fa-hotel',
    title: 'Khách Sạn Mini',
    location: 'Noong Bua',
    description: 'Khách sạn 5 tầng phong cách Indochine'
  },
  {
    id: 5,
    icon: 'fas fa-warehouse',
    title: 'Nhà Xưởng',
    location: 'Tân Thanh',
    description: 'Nhà xưởng sản xuất, diện tích 1000m²'
  },
  {
    id: 6,
    icon: 'fas fa-spa',
    title: 'Resort Nghỉ Dưỡng',
    location: 'Pa Thơm',
    description: 'Khu nghỉ dưỡng sinh thái gần núi rừng'
  }
]
</script>
