# 🏠 Golden Home Điện Biên - Landing Page

Landing page chuyên nghiệp cho công ty tư vấn thiết kế xây dựng Golden Home Điện Biên.

## 📋 Mô Tả

Website giới thiệu dịch vụ tư vấn, thiết kế và xây dựng của công ty Golden Home tại Điện Biên. Được xây dựng với công nghệ hiện đại: Nuxt 3, TypeScript, và Tailwind CSS.

## 🚀 Công Nghệ Sử Dụng

- **Nuxt 3**: Vue.js framework với SSR/SSG support
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **@nuxt/image**: Tối ưu hóa hình ảnh tự động
- **Font Awesome**: Icon library

## ✨ Tính Năng

- **Responsive Design**: Tương thích với mọi thiết bị (Desktop, Tablet, Mobile)
- **Modern UI/UX**: Giao diện hiện đại, chuyên nghiệp với Tailwind CSS
- **Smooth Scrolling**: Cuộn mượt mà giữa các phần
- **Interactive Elements**: Hiệu ứng tương tác khi hover và scroll
- **Contact Form**: Form liên hệ thu thập thông tin khách hàng
- **SEO Optimized**: Tối ưu cho công cụ tìm kiếm với Nuxt SEO
- **Type Safety**: TypeScript cho code quality cao
- **Component-based**: Architecture dễ maintain và scale

## 🎨 Các Phần Chính

1. **Header/Navigation**
   - Logo công ty
   - Menu điều hướng
   - Responsive menu cho mobile

2. **Hero Section**
   - Tiêu đề chính
   - Mô tả ngắn gọn
   - Call-to-action buttons

3. **Services Section**
   - 6 dịch vụ chính:
     - Tư vấn thiết kế
     - Thi công xây dựng
     - Thiết kế nội thất
     - Sửa chữa - Cải tạo
     - Giám sát thi công
     - Tư vấn pháp lý

4. **About Section**
   - Giới thiệu công ty
   - Đặc điểm nổi bật
   - Cam kết chất lượng

5. **Statistics Section**
   - Số năm kinh nghiệm
   - Công trình hoàn thành
   - Khách hàng hài lòng
   - Đội ngũ chuyên gia

6. **Projects Section**
   - 6 dự án tiêu biểu
   - Hình ảnh và mô tả các công trình

7. **Contact Section**
   - Thông tin liên hệ
   - Form liên hệ
   - Địa chỉ, điện thoại, email

8. **Footer**
   - Thông tin công ty
   - Links nhanh
   - Social media
   - Copyright

## 🚀 Cài Đặt và Sử Dụng

### Yêu Cầu
- Node.js 18.x trở lên
- npm hoặc yarn hoặc pnpm

### Cách Chạy

1. **Clone hoặc tải repository**
   ```bash
   git clone [repository-url]
   cd landing-page-golden-home
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   # hoặc
   yarn install
   # hoặc
   pnpm install
   ```

3. **Chạy development server**
   ```bash
   npm run dev
   # hoặc
   yarn dev
   # hoặc
   pnpm dev
   ```
   
   Mở trình duyệt và truy cập: `http://localhost:3000`

4. **Build cho production**
   ```bash
   npm run build
   # hoặc
   yarn build
   # hoặc
   pnpm build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   # hoặc
   yarn preview
   # hoặc
   pnpm preview
   ```

6. **Generate static site (SSG)**
   ```bash
   npm run generate
   # hoặc
   yarn generate
   # hoặc
   pnpm generate
   ```

## 📁 Cấu Trúc Thư Mục

```
landing-page-golden-home/
│
├── .nuxt/                  # Nuxt build output (auto-generated)
├── assets/                 # Assets (CSS, images, fonts)
│   └── css/
│       └── main.css        # Tailwind CSS + custom styles
├── components/             # Vue components
│   ├── Header.vue
│   ├── HeroSection.vue
│   ├── ServicesSection.vue
│   ├── AboutSection.vue
│   ├── StatsSection.vue
│   ├── ProjectsSection.vue
│   ├── ContactSection.vue
│   ├── Footer.vue
│   └── ScrollTop.vue
├── layouts/                # Layout components
│   └── default.vue
├── pages/                  # Page components (auto-routing)
│   └── index.vue
├── public/                 # Static files
├── types/                  # TypeScript type definitions
│   └── index.ts
├── .gitignore
├── app.vue                 # Root component
├── nuxt.config.ts          # Nuxt configuration
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Documentation
```

## 🎨 Màu Sắc Chính

Được cấu hình trong `tailwind.config.js`:

- **Primary**: #d4af37 (Gold)
- **Primary Dark**: #b8941f
- **Secondary**: #1a1a1a (Dark Gray)
- **Secondary Light**: #333333
- **Background**: #f8f9fa
- **White**: #ffffff

## 🔧 Tùy Chỉnh

### Thay Đổi Màu Sắc
Chỉnh sửa Tailwind config trong file `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#d4af37',
        dark: '#b8941f',
      },
      // ... thêm màu sắc khác
    }
  }
}
```

### Thay Đổi Nội Dung
- Mở các file component trong thư mục `components/`
- Chỉnh sửa text, số liệu, thông tin trong `<script setup>`
- Dữ liệu được quản lý dưới dạng TypeScript objects
 (Tailwind CSS)

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

## 🌐 Trình Duyệt Hỗ Trợ

- ✅ Chrome (Khuyến nghị)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 🛠️ Scripts Có Sẵn

```bash
npm run dev         # Chạy development server
npm run build       # Build cho production
npm run generate    # Generate static site
npm run preview     # Preview production build
npm run typecheck   # Kiểm tra TypeScript errors
```

### Thêm Component Mới
1. Tạo file `.vue` trong `components/`
2. Component tự động được import và có thể sử dụng ngay
3. Không cần import thủ công

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 576px - 968px
- **Mobile**: < 576px

## 🌐 Trình Duyệt Hỗ Trợ

- ✅ Chrome (Khuyến nghị)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📞 Thông Tin Liên Hệ
 API**
   - Tạo API endpoints với Nuxt Server Routes
   - Kết nối form với database
   - Xử lý gửi email tự động
   - Lưu trữ thông tin khách hàng

2. **Thêm Hình Ảnh Thật**
   - Chụp ảnh các dự án thực tế
   - Sử dụng @nuxt/image để optimize
   - Thêm gallery/lightbox với Nuxt modules

3. **Tối Ưu SEO**
   - Cài đặt @nuxtjs/seo module
   - Tạo sitemap.xml tự động
   - Thêm structured data (JSON-LD)
   - Cấu hình Google Analytics

4. **Thêm Tính Năng**
   - Blog/Tin tức với Nuxt Content
   - Báo giá online với API
   - Chat trực tuyến
   - Đa ngôn ngữ với @nuxtjs/i18n

5. **Deploy**
   - **Vercel**: `vercel deploy` (khuyến nghị cho Nuxt)
   - **Netlify**: Kết nối Git repository
   - **VPS**: Build và deploy với PM2
   - **Static**: Generate và upload lên hosting

## 🚀 Deploy

### Deploy lên Vercel (Khuyến nghị)
```bash
npm install -g vercel
vercel
```

### Deploy lên Netlify
```bash
npm run generate
# Upload thư mục .output/public lên Netlify
```

### Deploy lên VPS
```bash
npm run build
# Copy .output lên server
# Chạy với PM2: pm2 start .output/server/index.mjs
```**
   - Blog/Tin tức
   - Báo giá online
   - Chat trực tuyến
   - Đa ngôn ngữ (Việt/English)

5. **Deploy**
   - Chọn hosting (VPS/Shared hosting)
   - Đăng ký tên miền
   - Cài đặt SSL certificate
   - Upload website

## 🔐 Bảo Mật

- Form validation để ngăn chặn spam
- HTTPS cho bảo mật dữ liệu (khi deploy)
- Bảo vệ chống XSS và CSRF (khi thêm backend)
- Environment variables cho sensitive data

## ⚠️ Troubleshooting

### TypeScript Errors Khi Mở Project Lần Đầu

Nếu bạn thấy nhiều TypeScript errors về `Cannot find name 'ref'`, `Cannot find module '~/types'`, đây là bình thường. 

**Nguyên nhân**: Chưa cài đặt dependencies và file `.nuxt/tsconfig.json` chưa được generate.

**Giải pháp**:
```bash
npm install
npm run dev
```

Sau khi chạy lệnh trên, restart VSCode hoặc TypeScript server. Tất cả errors sẽ biến mất.

### Tailwind CSS Warnings

Warnings về `@tailwind` và `@apply` trong `assets/css/main.css` là bình thường. Chúng sẽ hoạt động đúng sau khi cài @nuxtjs/tailwindcss.

### Port Conflict

```bash
# Nếu port 3000 bị chiếm
PORT=3001 npm run dev
```

### Build Errors

```bash
# Clear cache và rebuild
rm -rf .nuxt .output node_modules
npm install
npm run dev
```

## 📝 License

Copyright © 2026 Golden Home Điện Biên. All rights reserved.

## 👨‍💻 Hỗ Trợ Kỹ Thuật

Nếu cần hỗ trợ kỹ thuật hoặc tùy chỉnh thêm, vui lòng liên hệ:
- Email: tech@goldenhomedb.vn
- Phone: 0912 345 678

---

**Phát triển với ❤️ cho Golden Home Điện Biên**
