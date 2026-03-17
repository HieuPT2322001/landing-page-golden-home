<template>
  <section id="home" class="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-6" data-aos="fade-right">
          <h1 class="text-4xl lg:text-6xl font-bold leading-tight">
            <span class="text-gradient-gold">Golden Home</span>
            <span class="text-secondary"> Điện Biên</span>
          </h1>
          
          <h2 class="text-2xl lg:text-3xl text-gray-600 font-semibold">
            Tư Vấn - Thiết Kế - Xây Dựng
          </h2>
          
          <p class="text-lg text-gray-600 leading-relaxed">
            Chúng tôi mang đến giải pháp xây dựng toàn diện, từ tư vấn thiết kế đến thi công hoàn thiện. 
            Biến ước mơ ngôi nhà của bạn thành hiện thực với chất lượng vượt trội.
          </p>
          
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="#contact" class="btn-primary">
              Liên Hệ Ngay
            </NuxtLink>
            <NuxtLink to="#services" class="btn-secondary">
              Xem Dịch Vụ
            </NuxtLink>
          </div>
        </div>

        <!-- Image -->
        <div class="relative" data-aos="fade-left">
          <div class="w-full h-96 lg:h-[500px] gradient-gold rounded-3xl flex items-center justify-center shadow-card">
            <i class="fas fa-city text-white text-9xl opacity-30"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero section component
</script>
