# 📋 Project Structure Overview

## Cấu Trúc Tổng Quan

```
landing-page-golden-home/
│
├── 📁 .git/                    # Git repository
├── 📁 assets/                  # Static assets
│   └── 📁 css/
│       └── main.css            # Tailwind CSS + Custom styles
│
├── 📁 components/              # Vue SFC Components
│   ├── Header.vue              # Header với navigation ✅
│   ├── HeroSection.vue         # Hero/Banner section ✅
│   ├── ServicesSection.vue     # 6 dịch vụ cards ✅
│   ├── AboutSection.vue        # Giới thiệu công ty ✅
│   ├── StatsSection.vue        # Thống kê + counter animation ✅
│   ├── ProjectsSection.vue     # 6 dự án tiêu biểu ✅
│   ├── ContactSection.vue      # Form liên hệ ✅
│   ├── Footer.vue              # Footer với links ✅
│   └── ScrollTop.vue           # Scroll to top button ✅
│
├── 📁 layouts/                 # Layout templates
│   └── default.vue             # Layout mặc định ✅
│
├── 📁 pages/                   # Pages (auto-routing)
│   └── index.vue               # Trang chủ ✅
│
├── 📁 types/                   # TypeScript definitions
│   └── index.ts                # Interface declarations ✅
│
├── 📄 .env.example             # Environment variables template
├── 📄 .gitignore               # Git ignore rules
├── 📄 app.vue                  # Root application component
├── 📄 nuxt.config.ts           # Nuxt 3 configuration ⚙️
├── 📄 package.json             # NPM dependencies
├── 📄 tailwind.config.js       # Tailwind CSS config 🎨
├── 📄 tsconfig.json            # TypeScript config
│
├── 📖 README.md                # Full documentation
├── 📖 QUICKSTART.md            # Quick start guide 🚀
├── 📖 MIGRATION.md             # Migration guide
└── 📖 README.quick.md          # Quick reference

# OLD FILES (có thể xóa sau khi test Nuxt version):
├── index.html                  # ⚠️ Không dùng nữa
├── styles.css                  # ⚠️ Đã chuyển sang Tailwind
└── script.js                   # ⚠️ Đã chuyển sang Vue
```

## Component Dependency Graph

```
app.vue
 └── layouts/default.vue
      ├── Header.vue
      ├── pages/index.vue
      │    ├── HeroSection.vue
      │    ├── ServicesSection.vue
      │    ├── AboutSection.vue
      │    ├── StatsSection.vue
      │    ├── ProjectsSection.vue
      │    └── ContactSection.vue
      ├── Footer.vue
      └── ScrollTop.vue
```

## Data Flow

```
types/index.ts
    ├─> Định nghĩa interfaces
    │
    └─> Sử dụng trong components
         ├─> ServicesSection.vue (Service[])
         ├─> ProjectsSection.vue (Project[])
         ├─> StatsSection.vue (Stat[])
         ├─> AboutSection.vue (Feature[])
         └─> ContactSection.vue (FormData, ContactInfo[])
```

## Styling Architecture

```
tailwind.config.js
    ├─> Cấu hình colors, shadows, themes
    │
    └─> assets/css/main.css
         ├─> @tailwind directives
         ├─> Custom components (@layer components)
         └─> Custom utilities (@layer utilities)
              │
              └─> Sử dụng trong component templates
                   ├─> Utility classes (flex, grid, etc)
                   ├─> Custom classes (btn-primary, gradient-gold)
                   └─> Responsive modifiers (lg:, md:, sm:)
```

## Build Process

```
npm run dev
    ├─> Nuxt reads nuxt.config.ts
    ├─> Vite starts dev server
    ├─> Auto-imports components
    ├─> Compiles TypeScript
    ├─> Processes Tailwind CSS
    └─> Hot Module Replacement 🔥

npm run build
    ├─> Production build
    ├─> Code splitting
    ├─> Tree shaking
    ├─> Minification
    └─> Output to .output/

npm run generate
    ├─> Static Site Generation
    ├─> Pre-renders all pages
    ├─> Optimizes assets
    └─> Output to .output/public/
```

## Technology Stack Details

| Technology | Version | Purpose |
|------------|---------|---------|
| Nuxt | 3.11+ | Framework |
| Vue | 3.4+ | UI Framework |
| TypeScript | 5.4+ | Type Safety |
| Tailwind CSS | 3.x | Styling |
| @nuxt/image | 1.7+ | Image Optimization |
| Vite | 5.x | Build Tool |
| Font Awesome | 6.4+ | Icons |

## Key Features Breakdown

### ✅ Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Hamburger menu cho mobile

### ✅ SEO Optimization
- Server-side rendering (SSR)
- Auto meta tags từ nuxt.config.ts
- Semantic HTML structure
- Open Graph tags

### ✅ Performance
- Code splitting tự động
- Lazy loading components
- Image optimization với @nuxt/image
- CSS purging với Tailwind

### ✅ Type Safety
- TypeScript trong toàn bộ codebase
- Interface definitions trong types/
- Type checking với `npm run typecheck`
- Auto-completion trong IDE

### ✅ Developer Experience
- Hot Module Replacement (HMR)
- Auto-import components
- File-based routing
- Vue DevTools support

## Getting Started Checklist

- [ ] 1. Clone repository
- [ ] 2. Run `npm install`
- [ ] 3. Copy `.env.example` to `.env` (optional)
- [ ] 4. Run `npm run dev`
- [ ] 5. Open http://localhost:3000
- [ ] 6. Customize content trong components
- [ ] 7. Update colors trong tailwind.config.js
- [ ] 8. Add real images vào public/
- [ ] 9. Test responsive design
- [ ] 10. Build và deploy

## Next Steps

1. **Development**: `npm run dev`
2. **Test**: Kiểm tra mọi section hoạt động
3. **Customize**: Thay đổi content, colors, images
4. **Build**: `npm run generate`
5. **Deploy**: Upload lên Vercel/Netlify/VPS

## Support & Resources

- 📖 [README.md](./README.md) - Full documentation
- 🚀 [QUICKSTART.md](./QUICKSTART.md) - Quick start guide
- 🔄 [MIGRATION.md](./MIGRATION.md) - HTML → Nuxt migration
- 🌐 [Nuxt Docs](https://nuxt.com/docs)
- 🎨 [Tailwind Docs](https://tailwindcss.com/docs)
- 📘 [Vue 3 Docs](https://vuejs.org/guide/introduction.html)

---

**Status**: ✅ Project ready for development
**Version**: 1.0.0
**Created**: March 2026
