<template>
  <section id="home" class="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-primary-dark rounded-full blur-3xl animate-bounce-soft"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-6 animate-slide-in-left">
          <h1 class="text-4xl lg:text-6xl font-bold leading-tight">
            <span class="text-gradient-gold neon-glow animate-pulse-scale">Golden Home</span>
            <span class="text-secondary"> Điện Biên</span>
          </h1>
          
          <h2 class="text-2xl lg:text-3xl text-gray-600 font-semibold animate-fade-in-up" style="animation-delay: 0.2s">
            Tư Vấn - Thiết Kế - Xây Dựng
          </h2>
          
          <p class="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style="animation-delay: 0.4s">
            Chúng tôi mang đến giải pháp xây dựng toàn diện, từ tư vấn thiết kế đến thi công hoàn thiện. 
            Biến ước mơ ngôi nhà của bạn thành hiện thực với chất lượng vượt trội.
          </p>
          
          <div class="flex flex-wrap gap-4 animate-fade-in-up" style="animation-delay: 0.6s">
            <NuxtLink 
              to="#contact" 
              class="btn-primary ripple hover-lift group"
            >
              <i class="fas fa-phone-alt group-hover:animate-bounce-soft"></i>
              Liên Hệ Ngay
            </NuxtLink>
            <NuxtLink 
              to="#services" 
              class="btn-secondary hover-lift group"
            >
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              Xem Dịch Vụ
            </NuxtLink>
          </div>
        </div>

        <!-- Image -->
        <div class="relative animate-slide-in-right">
          <div class="image-overlay gradient-border rounded-3xl shadow-card hover-glow group">
            <!-- Use real image if available, fallback to icon -->
            <NuxtImg
              v-if="heroImage"
              :src="heroImage"
              alt="Golden Home Điện Biên"
              class="w-full h-96 lg:h-[500px] object-cover rounded-3xl"
              format="webp"
              loading="lazy"
            />
            <!-- Fallback icon -->
            <div v-else class="w-full h-96 lg:h-[500px] gradient-gold rounded-3xl flex items-center justify-center">
              <i class="fas fa-city text-white text-9xl opacity-30 group-hover:scale-110 transition-transform duration-500 animate-float"></i>
            </div>
          </div>
          
          <!-- Floating Stats -->
          <div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-card hover-lift animate-bounce-soft">
            <div class="text-3xl font-bold text-primary">10+</div>
            <div class="text-sm text-gray-600">Năm Kinh Nghiệm</div>
          </div>
          
          <div class="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-card hover-lift animate-float">
            <div class="text-3xl font-bold text-primary">200+</div>
            <div class="text-sm text-gray-600">Dự Án</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#services" class="text-gray-400 hover:text-primary transition-colors">
        <i class="fas fa-chevron-down text-2xl"></i>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
// Using real image from public/images
const heroImage = ref<string | null>('/images/1.jpg')
</script>

<style scoped>
@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in-left {
  animation: slide-in-left 0.8s ease-out;
}

.animate-slide-in-right {
  animation: slide-in-right 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out;
}
</style>
