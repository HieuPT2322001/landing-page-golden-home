<template>
  <footer class="bg-secondary text-white pt-16 pb-6">
    <div class="container-custom">
      <!-- Main Footer Content -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Company Info -->
        <div>
          <NuxtLink to="/" class="flex items-center gap-2 text-xl font-bold mb-4">
            <i class="fas fa-home text-primary text-2xl"></i>
            <span>Golden Home Điện Biên</span>
          </NuxtLink>
          <p class="text-gray-400 text-sm mb-6 leading-relaxed">
            Đối tác tin cậy cho mọi công trình xây dựng của bạn. 
            Chất lượng - Uy tín - Chuyên nghiệp.
          </p>
          <div class="flex gap-3">
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center 
                     justify-center hover:bg-primary transition-colors duration-300"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center 
                     justify-center hover:bg-primary transition-colors duration-300"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center 
                     justify-center hover:bg-primary transition-colors duration-300"
            >
              <i class="fab fa-youtube"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center 
                     justify-center hover:bg-primary transition-colors duration-300"
            >
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-bold mb-4">Dịch Vụ</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="#services" class="text-gray-400 hover:text-primary transition-colors">
                Tư vấn thiết kế
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#services" class="text-gray-400 hover:text-primary transition-colors">
                Thi công xây dựng
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#services" class="text-gray-400 hover:text-primary transition-colors">
                Thiết kế nội thất
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#services" class="text-gray-400 hover:text-primary transition-colors">
                Sửa chữa - Cải tạo
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold mb-4">Liên Kết</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="#home" class="text-gray-400 hover:text-primary transition-colors">
                Trang chủ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#about" class="text-gray-400 hover:text-primary transition-colors">
                Về chúng tôi
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#projects" class="text-gray-400 hover:text-primary transition-colors">
                Dự án
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#contact" class="text-gray-400 hover:text-primary transition-colors">
                Liên hệ
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-bold mb-4">Liên Hệ</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li class="flex items-center gap-2">
              <i class="fas fa-phone text-primary"></i>
              0912 345 678
            </li>
            <li class="flex items-center gap-2">
              <i class="fas fa-envelope text-primary"></i>
              info@goldenhomedb.vn
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-map-marker-alt text-primary mt-1"></i>
              <span>Điện Biên Phủ, Điện Biên</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Golden Home Điện Biên. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component
</script>
