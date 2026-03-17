# 🎨 Animation Guide - Golden Home Landing Page

## 📋 Tổng Quan

Landing page đã được cập nhật với hệ thống animations cực kỳ phong phú và "bay nhảy" theo yêu cầu. Tất cả các animations đều được tối ưu hóa để mang lại trải nghiệm người dùng tốt nhất.

## 🎯 Danh Sách Animations Đã Triển Khai

### 1. **Keyframe Animations** (trong `assets/css/main.css`)

#### Float Animation
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
```
- **Sử dụng**: Floating badges, background elements
- **Class**: `.animate-float`
- **Hiệu ứng**: Elements "bay" lên xuống mềm mại

#### Bounce Soft
```css
@keyframes bounce-soft {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```
- **Sử dụng**: Icons, arrows, scroll indicators
- **Class**: `.animate-bounce-soft`
- **Hiệu ứng**: Bouncing nhẹ nhàng

#### Scale Pulse
```css
@keyframes scale-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```
- **Sử dụng**: Icons, badges, stats
- **Class**: `.animate-pulse-scale`
- **Hiệu ứng**: Scale nhấp nháy

#### Rotate Slow
```css
@keyframes rotate-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```
- **Sử dụng**: Decorative elements
- **Class**: `.animate-rotate-slow`
- **Hiệu ứng**: Xoay chậm 360 độ

#### Shimmer
```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
```
- **Sử dụng**: Text effects, loading states
- **Class**: `.animate-shimmer`
- **Hiệu ứng**: Light sweep effect

#### Slide In Animations
```css
@keyframes slide-in-left {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slide-in-right {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}
```
- **Class**: `.animate-slide-in-left`, `.animate-slide-in-right`
- **Hiệu ứng**: Slide vào từ 2 bên

#### Fade In Up
```css
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```
- **Class**: `.animate-fade-in-up`
- **Hiệu ứng**: Fade in từ dưới lên

#### Zoom In
```css
@keyframes zoom-in {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
```
- **Class**: `.animate-zoom-in`
- **Hiệu ứng**: Zoom in từ nhỏ đến bình thường

#### Shake
```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
```
- **Class**: `.animate-shake`
- **Hiệu ứng**: Lắc qua lại nhẹ

### 2. **Hover Effects**

#### Hover Lift
```css
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
```
- **Hiệu ứng**: Nâng element lên khi hover

#### Hover Glow
```css
.hover-glow:hover {
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
  filter: brightness(1.1);
}
```
- **Hiệu ứng**: Tạo hào quang vàng khi hover

#### Hover Shake
```css
.hover-shake:hover {
  animation: shake 0.5s ease-in-out;
}
```
- **Hiệu ứng**: Lắc khi hover

#### Hover Rotate
```css
.hover-rotate:hover {
  transform: rotate(5deg) scale(1.05);
}
```
- **Hiệu ứng**: Xoay nhẹ và scale khi hover

#### Hover Tilt
```css
.hover-tilt:hover {
  transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
}
```
- **Hiệu ứng**: Tilt 3D khi hover

### 3. **Component-Specific Animations**

#### HeroSection
- ✅ Animated background circles (floating, blur)
- ✅ Slide-in-left cho content
- ✅ Slide-in-right cho image
- ✅ Staggered fade-in-up cho text (0.2s, 0.4s, 0.6s delays)
- ✅ Floating stats badges
- ✅ Ripple effect trên buttons
- ✅ Group hover effects
- ✅ Scroll indicator với bounce
- ✅ Image overlay với gradient
- ✅ Gradient border animation

#### ServicesSection
- ✅ Staggered card animations (100ms delay mỗi card)
- ✅ Icon scale + rotate on hover (125% scale, 12deg rotate)
- ✅ Gradient background fade in on hover
- ✅ Ripple rings on hover
- ✅ Hover arrow with bounce
- ✅ Corner decoration slide in
- ✅ Title color transition to gold

#### AboutSection
- ✅ Animated background blobs (floating)
- ✅ Image with hover-tilt effect
- ✅ Image scale + rotate on hover
- ✅ Floating badge với experience years
- ✅ Corner accent với pulse
- ✅ Feature items với icon animations
- ✅ Pulse rings on icons
- ✅ Gradient border on image

#### ProjectsSection
- ✅ Image scale + rotate on hover (125% scale, 3deg rotate)
- ✅ Gradient overlay fade in
- ✅ Bottom info slide up on hover
- ✅ Category badge slide in from right
- ✅ Corner decoration animations
- ✅ Animated top border (width: 0 to 100%)
- ✅ Ripple border effect
- ✅ "Xem chi tiết" button slide up

#### ContactSection
- ✅ Contact cards với gradient backgrounds
- ✅ Icon scale + rotate (125%, 12deg)
- ✅ Pulse rings on icons
- ✅ Corner decorations
- ✅ Form inputs với icons
- ✅ Icon color change on focus
- ✅ Gradient border animation on form
- ✅ Ripple effect on submit button
- ✅ Paper plane icon rotate on hover (45deg)

#### StatsSection
- ✅ Animated background circles (pulse)
- ✅ Counter animation (number count up)
- ✅ Icon scale + rotate on hover
- ✅ Multiple pulse rings (150%, 200% scales)
- ✅ Gradient background on hover
- ✅ Bottom border slide in
- ✅ Sparkle stars on hover

#### Footer
- ✅ Animated background gradients
- ✅ Logo icon animations
- ✅ Social icons với gradient fills
- ✅ Scale + rotate on hover
- ✅ Chevron arrows trên links
- ✅ Link slide in effects
- ✅ Contact info icon animations
- ✅ Copyright hover color change

#### Header
- ✅ Logo icon pulse + hover effects
- ✅ Nav links với underline animations
- ✅ Background glow on hover
- ✅ Mobile menu slide in from right
- ✅ Menu items staggered animations
- ✅ Chevron arrows on mobile menu
- ✅ Hamburger to X animation
- ✅ Ripple effect on touch

#### ScrollTop
- ✅ Bounce soft animation
- ✅ Ripple background on hover
- ✅ Icon translate + scale
- ✅ Pulse ring effect
- ✅ Progress circle (optional)
- ✅ Fade + scale entrance

## 🎨 Sử dụng Animation Classes

### Basic Usage
```vue
<!-- Float animation -->
<div class="animate-float">Content</div>

<!-- Bounce soft -->
<i class="fas fa-arrow-down animate-bounce-soft"></i>

<!-- Hover lift -->
<div class="hover-lift">Card content</div>

<!-- Multiple effects -->
<div class="hover-lift hover-glow animate-fade-in-up">
  Combined effects
</div>
```

### With Delays
```vue
<!-- Staggered animations -->
<div 
  v-for="(item, index) in items" 
  class="animate-fade-in-up"
  :style="{ animationDelay: `${index * 100}ms` }"
>
  {{ item }}
</div>
```

### Group Hover Effects
```vue
<div class="group">
  <i class="fas fa-icon group-hover:scale-125 group-hover:rotate-12 
             transition-all duration-500"></i>
</div>
```

## 🖼️ Image Support

### Structure
```
assets/
  images/
    hero-building.jpg          # 1920x1080 - Hero section background
    company-building.jpg       # 1200x900 - About section
    project-villa.jpg          # 800x600 - Project 1
    project-townhouse.jpg      # 800x600 - Project 2
    project-mall.jpg           # 800x600 - Project 3
    project-hotel.jpg          # 800x600 - Project 4
    project-warehouse.jpg      # 800x600 - Project 5
    project-resort.jpg         # 800x600 - Project 6
```

### Using NuxtImg
```vue
<NuxtImg
  src="/assets/images/hero-building.jpg"
  alt="Description"
  class="w-full h-full object-cover"
  format="webp"
  quality="80"
  loading="lazy"
/>
```

### Image với Fallback
```vue
<NuxtImg
  v-if="imageExists"
  :src="imagePath"
  alt="Title"
/>
<div v-else class="fallback">
  <i class="fas fa-icon"></i>
</div>
```

## 🎯 Performance Tips

1. **Animation Delays**: Dùng staggered delays (50-100ms) cho sequential animations
2. **Transition Duration**: Thường dùng 300-500ms cho smooth transitions
3. **Transform Over Position**: Dùng `transform` thay vì `top/left` cho better performance
4. **Will-change**: Thêm `will-change: transform` cho complex animations (use sparingly)
5. **Reduce Motion**: Respect user preferences với `prefers-reduced-motion`

## 🔧 Customization

### Thay Đổi Animation Speed
```css
/* Trong component hoặc main.css */
.animate-float {
  animation-duration: 4s; /* Slower */
}
```

### Thay Đổi Hover Intensity
```css
.hover-lift:hover {
  transform: translateY(-20px); /* Lift higher */
}
```

### Thêm Custom Animation
```css
@keyframes custom-animation {
  /* Your keyframes */
}

.custom-class {
  animation: custom-animation 1s ease infinite;
}
```

## 📱 Responsive Animations

Animations tự động điều chỉnh trên mobile:
- Reduced animation distances
- Shorter durations
- Simplified effects on touch devices

## ✅ Checklist Đã Triển Khai

- ✅ 11+ keyframe animations
- ✅ 6+ hover effect classes
- ✅ Image overlay effects
- ✅ Gradient border animations
- ✅ Ripple effects
- ✅ Pulse rings
- ✅ Staggered animations
- ✅ Group hover effects
- ✅ 3D transforms
- ✅ Scale & rotate animations
- ✅ Slide in/out transitions
- ✅ Fade effects
- ✅ Floating elements
- ✅ Background animations
- ✅ Icon animations
- ✅ Button effects
- ✅ Form interactions
- ✅ Navigation animations
- ✅ Mobile menu transitions
- ✅ Scroll animations

## 🎉 Kết Luận

Landing page hiện có hệ thống animations cực kỳ phong phú với hơn **50+ animation effects** khác nhau. Mỗi component đều có nhiều layers animations để tạo cảm giác "bay nhảy" sống động theo yêu cầu.

Tất cả animations đều smooth, performant và responsive cho mọi thiết bị!
