# Migration Guide: Static HTML → Nuxt 3

Hướng dẫn chuyển đổi từ phiên bản HTML/CSS/JS sang Nuxt 3.

## Các File Cũ (Có thể xóa sau khi test)

- `index.html` - Đã chuyển sang components và pages
- `styles.css` - Đã chuyển sang Tailwind CSS trong `assets/css/main.css`
- `script.js` - Đã chuyển sang Vue composables và component logic

## Các File Mới (Nuxt 3)

### Cấu hình
- `nuxt.config.ts` - Cấu hình Nuxt 3
- `tailwind.config.js` - Cấu hình Tailwind CSS
- `tsconfig.json` - Cấu hình TypeScript
- `package.json` - Dependencies

### Cấu trúc ứng dụng
- `app.vue` - Root component
- `layouts/default.vue` - Layout mặc định
- `pages/index.vue` - Trang chủ (auto-routing)

### Components Vue
- `components/Header.vue` - Header với navigation
- `components/HeroSection.vue` - Hero section
- `components/ServicesSection.vue` - Dịch vụ (6 cards)
- `components/AboutSection.vue` - Về chúng tôi
- `components/StatsSection.vue` - Thống kê (với animation)
- `components/ProjectsSection.vue` - Dự án
- `components/ContactSection.vue` - Form liên hệ
- `components/Footer.vue` - Footer
- `components/ScrollTop.vue` - Nút scroll to top

### Styles
- `assets/css/main.css` - Tailwind + custom styles

### TypeScript
- `types/index.ts` - Type definitions

## So Sánh Tính Năng

| Tính năng | HTML/CSS/JS | Nuxt 3 |
|-----------|-------------|---------|
| Responsive | ✅ Custom CSS | ✅ Tailwind utilities |
| SEO | ⚠️ Manual meta tags | ✅ Auto + SSR |
| Performance | ⚠️ Manual optimization | ✅ Auto code splitting |
| Type Safety | ❌ | ✅ TypeScript |
| Image Optimization | ❌ | ✅ @nuxt/image |
| Component Reuse | ⚠️ Manual | ✅ Vue SFC |
| State Management | ⚠️ Manual | ✅ Vue Composition API |
| Build Process | ❌ | ✅ Vite |

## Cách Chuyển Đổi Hoàn Toàn

1. **Test Nuxt version**
   ```bash
   npm install
   npm run dev
   ```

2. **So sánh 2 phiên bản**
   - Mở cả 2 version song song
   - Kiểm tra mọi tính năng hoạt động đúng

3. **Backup files cũ** (optional)
   ```bash
   mkdir old-version
   mv index.html styles.css script.js old-version/
   ```

4. **Deploy Nuxt version**
   ```bash
   npm run generate
   # hoặc
   npm run build
   ```

## Lợi Ích Của Nuxt 3

✅ **Better Performance**: Code splitting, lazy loading tự động
✅ **Better SEO**: SSR/SSG support, auto meta tags
✅ **Better DX**: TypeScript, hot reload, component auto-import
✅ **Better Maintenance**: Component-based, type-safe
✅ **Better Scalability**: Dễ dàng thêm tính năng mới
✅ **Modern Stack**: Vue 3 Composition API, Vite

## Troubleshooting

### Port đã được sử dụng
```bash
# Thay đổi port
PORT=3001 npm run dev
```

### TypeScript errors
```bash
# Rebuild types
npm run postinstall
```

### Tailwind không hoạt động
```bash
# Đảm bảo Tailwind được cài đặt
npm install -D @nuxtjs/tailwindcss
# Rebuild
rm -rf .nuxt node_modules
npm install
```

## Hỗ Trợ

Nếu gặp vấn đề trong quá trình migration, liên hệ:
- Email: tech@goldenhomedb.vn
- Docs: https://nuxt.com/docs
