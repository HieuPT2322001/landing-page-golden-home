<template>
  <section id="contact" class="section-padding bg-gray-50">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-12" data-aos="fade-up">
        <span class="text-primary font-semibold uppercase tracking-wider text-sm">
          Liên Hệ Với Chúng Tôi
        </span>
        <h2 class="text-3xl lg:text-4xl font-bold text-secondary mt-2">
          Nhận Tư Vấn Miễn Phí
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Contact Info -->
        <div class="grid sm:grid-cols-2 gap-6" data-aos="fade-right">
          <div
            v-for="(info, index) in contactInfo"
            :key="index"
            class="bg-white p-6 rounded-2xl shadow-card text-center"
          >
            <i :class="`${info.icon} text-4xl text-primary mb-4`"></i>
            <h3 class="font-bold text-secondary mb-2">{{ info.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed" v-html="info.content"></p>
          </div>
        </div>

        <!-- Contact Form -->
        <form
          @submit.prevent="handleSubmit"
          class="bg-white p-8 rounded-2xl shadow-card"
          data-aos="fade-left"
        >
          <div class="space-y-4">
            <input
              v-model="formData.name"
              type="text"
              placeholder="Họ và tên *"
              required
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                     focus:border-primary focus:outline-none transition-colors"
            />
            <input
              v-model="formData.phone"
              type="tel"
              placeholder="Số điện thoại *"
              required
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                     focus:border-primary focus:outline-none transition-colors"
            />
            <input
              v-model="formData.email"
              type="email"
              placeholder="Email"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                     focus:border-primary focus:outline-none transition-colors"
            />
            <select
              v-model="formData.service"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                     focus:border-primary focus:outline-none transition-colors"
            >
              <option value="">Chọn dịch vụ quan tâm</option>
              <option value="design">Tư vấn thiết kế</option>
              <option value="construction">Thi công xây dựng</option>
              <option value="interior">Thiết kế nội thất</option>
              <option value="renovation">Sửa chữa - Cải tạo</option>
              <option value="supervision">Giám sát thi công</option>
              <option value="legal">Tư vấn pháp lý</option>
            </select>
            <textarea
              v-model="formData.message"
              placeholder="Nội dung tin nhắn"
              rows="5"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                     focus:border-primary focus:outline-none transition-colors resize-none"
            ></textarea>
            <button
              type="submit"
              class="btn-primary w-full justify-center"
            >
              <i class="fas fa-paper-plane"></i>
              Gửi Tin Nhắn
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
