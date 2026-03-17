<template>
  <section id="contact" class="section-padding bg-gray-50 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute top-0 left-0 w-full h-full opacity-5">
      <div class="absolute top-20 left-20 w-64 h-64 gradient-gold rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-20 w-72 h-72 gradient-gold rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
    </div>
    
    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12 scroll-animate fly-up">
        <span class="text-primary font-semibold uppercase tracking-wider text-sm hover-glow inline-block">
          Liên Hệ Với Chúng Tôi
        </span>
        <h2 class="text-3xl lg:text-4xl font-bold text-secondary mt-2 hover:text-primary transition-colors duration-300">
          Nhận Tư Vấn Miễn Phí
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Contact Info with Enhanced Animations -->
        <div class="grid sm:grid-cols-2 gap-6 scroll-animate fly-left">
          <div
            v-for="(info, index) in contactInfo"
            :key="index"
            class="bg-white p-6 rounded-2xl shadow-card hover-lift hover-glow
                   text-center group relative overflow-hidden transition-all duration-300"
          >
            <!-- Background Gradient on Hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-dark/5 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Icon with Animations -->
            <div class="relative">
              <div class="w-16 h-16 gradient-gold rounded-full flex items-center justify-center 
                          mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12
                          transition-all duration-500 shadow-lg group-hover:shadow-gold-hover">
                <i :class="`${info.icon} text-2xl text-white`"></i>
              </div>
              
              <!-- Pulse Ring -->
              <div class="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full 
                          border-2 border-primary scale-100 group-hover:scale-150 
                          opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
            </div>
            
            <h3 class="font-bold text-secondary mb-2 group-hover:text-primary 
                       transition-colors duration-300 relative z-10">
              {{ info.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed relative z-10" v-html="info.content"></p>
            
            <!-- Corner Decoration -->
            <div class="absolute bottom-0 right-0 w-16 h-16 bg-primary/10 rounded-tl-full
                        transform translate-x-8 translate-y-8 group-hover:translate-x-0 
                        group-hover:translate-y-0 transition-transform duration-500"></div>
          </div>
        </div>

        <!-- Contact Form with Enhanced Interactions -->
        <form
          @submit.prevent="handleSubmit"
          class="scroll-animate fly-right delay-300 bg-white p-8 rounded-2xl shadow-card hover-glow
                 relative overflow-hidden"
        >
          <!-- Gradient Border Animation -->
          <div class="absolute inset-0 gradient-border opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
          
          <div class="space-y-4 relative z-10">
            <div class="relative group">
              <input
                v-model="formData.name"
                type="text"
                placeholder="Họ và tên *"
                required
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                       focus:border-primary focus:outline-none transition-all duration-300
                       hover:border-primary/50 hover:shadow-md"
              />
              <i class="fas fa-user absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 
                        group-focus-within:text-primary transition-colors duration-300"></i>
            </div>
            
            <div class="relative group">
              <input
                v-model="formData.phone"
                type="tel"
                placeholder="Số điện thoại *"
                required
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                       focus:border-primary focus:outline-none transition-all duration-300
                       hover:border-primary/50 hover:shadow-md"
              />
              <i class="fas fa-phone absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 
                        group-focus-within:text-primary transition-colors duration-300"></i>
            </div>
            
            <div class="relative group">
              <input
                v-model="formData.email"
                type="email"
                placeholder="Email"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                       focus:border-primary focus:outline-none transition-all duration-300
                       hover:border-primary/50 hover:shadow-md"
              />
              <i class="fas fa-envelope absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 
                        group-focus-within:text-primary transition-colors duration-300"></i>
            </div>
            
            <div class="relative group">
              <select
                v-model="formData.service"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                       focus:border-primary focus:outline-none transition-all duration-300
                       hover:border-primary/50 hover:shadow-md"
              >
                <option value="">Chọn dịch vụ quan tâm</option>
                <option value="design">Tư vấn thiết kế</option>
                <option value="construction">Thi công xây dựng</option>
                <option value="interior">Thiết kế nội thất</option>
                <option value="renovation">Sửa chữa - Cải tạo</option>
                <option value="supervision">Giám sát thi công</option>
                <option value="legal">Tư vấn pháp lý</option>
              </select>
              <i class="fas fa-cog absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 
                        group-focus-within:text-primary transition-colors duration-300 pointer-events-none"></i>
            </div>
            
            <div class="relative group">
              <textarea
                v-model="formData.message"
                placeholder="Nội dung tin nhắn"
                rows="5"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                       focus:border-primary focus:outline-none transition-all duration-300
                       hover:border-primary/50 hover:shadow-md resize-none"
              ></textarea>
              <i class="fas fa-comment-dots absolute right-4 top-4 text-gray-400 
                        group-focus-within:text-primary transition-colors duration-300"></i>
            </div>
            
            <button
              type="submit"
              class="btn-primary w-full justify-center group/btn relative overflow-hidden"
            >
              <!-- Ripple Effect -->
              <span class="absolute inset-0 bg-white/20 rounded-xl scale-0 
                           group-hover/btn:scale-100 transition-transform duration-500"></span>
              
              <i class="fas fa-paper-plane relative z-10 group-hover/btn:rotate-45 
                        transition-transform duration-300"></i>
              <span class="relative z-10">Gửi Tin Nhắn</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { FormData, ContactInfo } from '~/types'

const formData = reactive<FormData>({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: ''
})

const contactInfo: ContactInfo[] = [
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Địa Chỉ',
    content: 'Đường Võ Nguyên Giáp, Phường Mường Thanh<br>Thành phố Điện Biên Phủ, Điện Biên'
  },
  {
    icon: 'fas fa-phone',
    title: 'Điện Thoại',
    content: 'Hotline: 0912 345 678<br>Tel: 0215 123 456'
  },
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    content: 'info@goldenhomedb.vn<br>contact@goldenhomedb.vn'
  },
  {
    icon: 'fas fa-clock',
    title: 'Giờ Làm Việc',
    content: 'Thứ 2 - Thứ 7: 7:30 - 17:30<br>Chủ Nhật: 8:00 - 12:00'
  }
]

const handleSubmit = () => {
  alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.')
  
  // Reset form
  formData.name = ''
  formData.phone = ''
  formData.email = ''
  formData.service = ''
  formData.message = ''
}
</script>
