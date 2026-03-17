<template>
  <section id="projects" class="section-padding bg-white relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute top-0 left-0 w-full h-full opacity-5">
      <div class="absolute top-10 right-10 w-40 h-40 gradient-gold rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-10 left-10 w-48 h-48 gradient-gold rounded-full blur-3xl animate-float" style="animation-delay: 3s;"></div>
    </div>
    
    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12 scroll-animate fly-up">
        <span class="text-primary font-semibold uppercase tracking-wider text-sm hover-glow inline-block">
          Dự Án Tiêu Biểu
        </span>
        <h2 class="text-3xl lg:text-4xl font-bold text-secondary mt-2 hover:text-primary transition-colors duration-300">
          Những Công Trình Đã Thực Hiện
        </h2>
      </div>

      <!-- Projects Grid with Enhanced Animations -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="scroll-animate fly-rotate bg-white rounded-2xl overflow-hidden shadow-card hover-lift hover-glow
                 transition-all duration-300 cursor-pointer group relative"
          :class="`delay-${project.id * 100}`"
        >
          <!-- Image with Overlay Effects -->
          <div class="relative h-64 overflow-hidden">
            <NuxtImg
              v-if="getProjectImage(project.id)"
              :src="getProjectImage(project.id)"
              :alt="project.title"
              class="w-full h-full object-cover transition-all duration-700 
                     group-hover:scale-125 group-hover:rotate-3"
              format="webp"
              quality="80"
              loading="lazy"
            />
            <div v-else class="w-full h-full gradient-gold flex items-center justify-center
                              group-hover:scale-105 transition-transform duration-500">
              <i :class="`${project.icon} text-white text-7xl opacity-50 
                         group-hover:scale-125 group-hover:rotate-12 
                         transition-all duration-500`"></i>
            </div>
            
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Hover Info -->
            <div class="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full 
                        group-hover:translate-y-0 transition-transform duration-500">
              <div class="text-white">
                <div class="flex items-center gap-2 text-sm">
                  <i class="fas fa-map-marker-alt text-primary"></i>
                  <span>{{ project.location }}</span>
                </div>
              </div>
            </div>
            
            <!-- Category Badge -->
            <div class="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs
                        transform translate-x-20 opacity-0 group-hover:translate-x-0 
                        group-hover:opacity-100 transition-all duration-500 delay-150">
              <i class="fas fa-star"></i> Hoàn Thành
            </div>
            
            <!-- Corner Decoration -->
            <div class="absolute top-0 left-0 w-20 h-20 bg-primary/20 
                        transform -translate-x-10 -translate-y-10 
                        group-hover:translate-x-0 group-hover:translate-y-0
                        transition-transform duration-500 rounded-br-full"></div>
          </div>
          
          <!-- Content -->
          <div class="p-6 relative">
            <!-- Animated Border Top -->
            <div class="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary-dark
                        group-hover:w-full transition-all duration-700"></div>
            
            <h3 class="text-xl font-bold text-secondary mb-2 group-hover:text-primary 
                       transition-colors duration-300">
              {{ project.title }}
            </h3>
            <p class="text-primary text-sm mb-3 flex items-center gap-1 group-hover:gap-2
                      transition-all duration-300">
              <i class="fas fa-map-marker-alt group-hover:animate-bounce-soft"></i>
              {{ project.location }}
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ project.description }}
            </p>
            
            <!-- View More Button -->
            <div class="mt-4 flex items-center gap-2 text-primary opacity-0 
                        group-hover:opacity-100 transform translate-y-2 
                        group-hover:translate-y-0 transition-all duration-300">
              <span class="text-sm font-semibold">Xem chi tiết</span>
              <i class="fas fa-arrow-right animate-bounce-soft"></i>
            </div>
          </div>
          
          <!-- Ripple Effect -->
          <div class="absolute inset-0 rounded-2xl border-2 border-primary 
                      scale-0 group-hover:scale-105 opacity-0 group-hover:opacity-30
                      transition-all duration-700 pointer-events-none"></div>
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

const getProjectImage = (projectId: number): string | undefined => {
  // Using real images from public/images/
  const imageMap: { [key: number]: string } = {
    1: '/images/3.jpg',
    2: '/images/4.jpg',
    3: '/images/5.jpg',
    4: '/images/6.jpg',
    5: '/images/5.jpg',
    6: '/images/6.jpg'
  }
  return imageMap[projectId]
}
</script>
