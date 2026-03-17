# 🚀 Quick Start Guide

## Bắt Đầu Ngay

### 1. Cài Đặt Dependencies

```bash
npm install
```

Hoặc với yarn:
```bash
yarn install
```

Hoặc với pnpm (nhanh hơn):
```bash
pnpm install
```

### 2. Chạy Development Server

```bash
npm run dev
```

Website sẽ chạy tại: **http://localhost:3000**

### 3. Build cho Production

```bash
# Build server-side rendering
npm run build

# Hoặc generate static site
npm run generate
```

## ⚠️ Lưu Ý Quan Trọng

### TypeScript Errors Khi Mở Project Lần Đầu

Bạn sẽ thấy nhiều TypeScript errors trong editor trước khi chạy `npm install`. Đây là BÌNH THƯỜNG vì:
- Chưa cài đặt Nuxt 3 và các dependencies
- File `.nuxt/tsconfig.json` chưa được generate

**Giải pháp**: Chạy `npm install` và các lỗi sẽ tự động biến mất.

### Tailwind CSS Warnings

Các warning về `@tailwind` và `@apply` trong CSS file là bình thường. Chúng sẽ hoạt động đúng sau khi cài đặt @nuxtjs/tailwindcss.

## 📦 Dependencies Sẽ Được Cài

- **nuxt**: ^3.11.2 - Framework chính
- **vue**: ^3.4.21 - Vue 3
- **@nuxt/image**: ^1.7.0 - Image optimization
- **@nuxtjs/tailwindcss**: ^6.12.0 - TailwindCSS integration
- **typescript**: ^5.4.5 - TypeScript support

## 🔍 Kiểm Tra Sau Khi Cài Đặt

1. ✅ Không còn TypeScript errors
2. ✅ `npm run dev` chạy thành công
3. ✅ Website hiển thị tại localhost:3000
4. ✅ Responsive design hoạt động
5. ✅ Form contact có thể submit

## 🆘 Gặp Vấn Đề?

### Port 3000 đã được sử dụng
```bash
PORT=3001 npm run dev
```

### Node version không đúng
Cần Node.js >= 18.x
```bash
node --version  # Kiểm tra version
```

### Clear cache và reinstall
```bash
rm -rf node_modules .nuxt .output
npm install
```

## 📚 Tài Liệu

- [README.md](./README.md) - Full documentation
- [MIGRATION.md](./MIGRATION.md) - Migration guide từ HTML sang Nuxt
- [Nuxt 3 Docs](https://nuxt.com/docs) - Official Nuxt documentation

## ✨ Features Ready to Use

- ✅ Header với responsive menu
- ✅ Hero section với gradient
- ✅ Services grid (6 dịch vụ)
- ✅ About section
- ✅ Stats counter với animation
- ✅ Projects showcase
- ✅ Contact form
- ✅ Footer với social links
- ✅ Scroll to top button
- ✅ Smooth scrolling
- ✅ SEO optimized

Enjoy coding! 🎉
