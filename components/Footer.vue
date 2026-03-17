<template>
  <footer class="bg-secondary text-white pt-16 pb-6 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute top-0 left-0 w-full h-full opacity-5">
      <div class="absolute top-10 right-10 w-64 h-64 gradient-gold rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-10 left-10 w-72 h-72 gradient-gold rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
    </div>
    
    <div class="container-custom relative z-10">
      <!-- Main Footer Content -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Company Info -->
        <div class="animate-fade-in-up" style="animation-delay: 0.1s;">
          <NuxtLink 
            to="/" 
            class="inline-flex items-center gap-2 text-xl font-bold mb-4 group hover-glow"
          >
            <i class="fas fa-home text-primary text-2xl group-hover:scale-125 
                      group-hover:rotate-12 transition-all duration-500"></i>
            <span class="group-hover:text-primary transition-colors duration-300">
              Golden Home Điện Biên
            </span>
          </NuxtLink>
          <p class="text-gray-400 text-sm mb-6 leading-relaxed">
            Đối tác tin cậy cho mọi công trình xây dựng của bạn. 
            Chất lượng - Uy tín - Chuyên nghiệp.
          </p>
          <div class="flex gap-3">
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center 
                     justify-center hover:bg-primary transition-all duration-300
                     hover-lift group relative overflow-hidden"
            >
              <span class="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark 
                           scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
              <i class="fab fa-facebook-f relative z-10 group-hover:scale-125 
                        group-hover:rotate-12 transition-all duration-300"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center 
                     justify-center hover:bg-primary transition-all duration-300
                     hover-lift group relative overflow-hidden"
            >
              <span class="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark 
                           scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
              <i class="fab fa-instagram relative z-10 group-hover:scale-125 
                        group-hover:rotate-12 transition-all duration-300"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center 
                     justify-center hover:bg-primary transition-all duration-300
                     hover-lift group relative overflow-hidden"
            >
              <span class="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark 
                           scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
              <i class="fab fa-youtube relative z-10 group-hover:scale-125 
                        group-hover:rotate-12 transition-all duration-300"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center 
                     justify-center hover:bg-primary transition-all duration-300
                     hover-lift group relative overflow-hidden"
            >
              <span class="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark 
                           scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
              <i class="fab fa-tiktok relative z-10 group-hover:scale-125 
                        group-hover:rotate-12 transition-all duration-300"></i>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
          <h3 class="text-lg font-bold mb-4 hover:text-primary transition-colors duration-300">
            Dịch Vụ
          </h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="#services" 
                        class="text-gray-400 hover:text-primary transition-all duration-300
                               inline-flex items-center gap-2 group">
                <i class="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 
                          -translate-x-2 group-hover:translate-x-0 transition-all duration-300"></i>
                <span>Tư vấn thiết kế</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#services" 
                        class="text-gray-400 hover:text-primary transition-all duration-300
                               inline-flex items-center gap-2 group">
                <i class="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 
                          -translate-x-2 group-hover:translate-x-0 transition-all duration-300"></i>
                <span>Thi công xây dựng</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#services" 
                        class="text-gray-400 hover:text-primary transition-all duration-300
                               inline-flex items-center gap-2 group">
                <i class="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 
                          -translate-x-2 group-hover:translate-x-0 transition-all duration-300"></i>
                <span>Thiết kế nội thất</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#services" 
                        class="text-gray-400 hover:text-primary transition-all duration-300
                               inline-flex items-center gap-2 group">
                <i class="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 
                          -translate-x-2 group-hover:translate-x-0 transition-all duration-300"></i>
                <span>Sửa chữa - Cải tạo</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div class="animate-fade-in-up" style="animation-delay: 0.3s;">
          <h3 class="text-lg font-bold mb-4 hover:text-primary transition-colors duration-300">
            Liên Kết
          </h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="#home" 
                        class="text-gray-400 hover:text-primary transition-all duration-300
                               inline-flex items-center gap-2 group">
                <i class="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 
                          -translate-x-2 group-hover:translate-x-0 transition-all duration-300"></i>
                <span>Trang chủ</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#about" 
                        class="text-gray-400 hover:text-primary transition-all duration-300
                               inline-flex items-center gap-2 group">
                <i class="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 
                          -translate-x-2 group-hover:translate-x-0 transition-all duration-300"></i>
                <span>Về chúng tôi</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#projects" 
                        class="text-gray-400 hover:text-primary transition-all duration-300
                               inline-flex items-center gap-2 group">
                <i class="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 
                          -translate-x-2 group-hover:translate-x-0 transition-all duration-300"></i>
                <span>Dự án</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#contact" 
                        class="text-gray-400 hover:text-primary transition-all duration-300
                               inline-flex items-center gap-2 group">
                <i class="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 
                          -translate-x-2 group-hover:translate-x-0 transition-all duration-300"></i>
                <span>Liên hệ</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="animate-fade-in-up" style="animation-delay: 0.4s;">
          <h3 class="text-lg font-bold mb-4 hover:text-primary transition-colors duration-300">
            Liên Hệ
          </h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li class="flex items-center gap-2 group hover:text-white transition-colors duration-300">
              <i class="fas fa-phone text-primary group-hover:scale-125 
                        group-hover:rotate-12 transition-all duration-300"></i>
              <span>0912 345 678</span>
            </li>
            <li class="flex items-center gap-2 group hover:text-white transition-colors duration-300">
              <i class="fas fa-envelope text-primary group-hover:scale-125 
                        group-hover:rotate-12 transition-all duration-300"></i>
              <span>info@goldenhomedb.vn</span>
            </li>
            <li class="flex items-start gap-2 group hover:text-white transition-colors duration-300">
              <i class="fas fa-map-marker-alt text-primary mt-1 group-hover:scale-125 
                        group-hover:rotate-12 transition-all duration-300"></i>
              <span>Điện Biên Phủ, Điện Biên</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-700 pt-6 text-center text-sm text-gray-400 animate-fade-in-up" 
           style="animation-delay: 0.5s;">
        <p class="hover:text-primary transition-colors duration-300">
          &copy; {{ new Date().getFullYear() }} Golden Home Điện Biên. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component with enhanced animations
</script>
