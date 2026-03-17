# ✅ Public Images Directory - Golden Home Landing Page

**This is the CORRECT location for all project images when using @nuxt/image**

## Directory Structure

```
public/
  images/
    hero-building.jpg          # Hero section image (1920x1080)
    company-building.jpg       # Company/About image (1200x900)
    project-villa.jpg          # Project 1 (800x600)
    project-townhouse.jpg      # Project 2 (800x600)
    project-mall.jpg           # Project 3 (800x600)
    project-hotel.jpg          # Project 4 (800x600)
    project-warehouse.jpg      # Project 5 (800x600)
    project-resort.jpg         # Project 6 (800x600)
    logo.png                   # Company logo (optional)
    favicon.ico                # Favicon (optional)
```

## Image Specifications

### Hero Section
- **File**: `hero-building.jpg`
- **Size**: 1920×1080 pixels (16:9 ratio)
- **Description**: Most impressive construction project photo
- **Used in**: HeroSection.vue
- **Path in code**: `/images/hero-building.jpg`

### About Section  
- **File**: `company-building.jpg`
- **Size**: 1200×900 pixels (4:3 ratio)
- **Description**: Company office or team photo
- **Used in**: AboutSection.vue
- **Path in code**: `/images/company-building.jpg`

### Projects Section
- **Files**: 6 images (`project-*.jpg`)
- **Size**: 800×600 pixels each (4:3 ratio)
- **Used in**: ProjectsSection.vue
- **Paths in code**:
  1. `/images/project-villa.jpg` - Modern villa
  2. `/images/project-townhouse.jpg` - 3-story townhouse
  3. `/images/project-mall.jpg` - Shopping center
  4. `/images/project-hotel.jpg` - Mini hotel
  5. `/images/project-warehouse.jpg` - Warehouse
  6. `/images/project-resort.jpg` - Resort

## How to Add Images

1. **Create the directory** (if it doesn't exist):
   ```bash
   mkdir public\images
   ```

2. **Copy your images** into `public/images/`

3. **Update components** to enable images:
   
   **HeroSection.vue**:
   ```typescript
   // Change from:
   const heroImage = ref<string | null>(null)
   // To:
   const heroImage = ref<string | null>('/images/hero-building.jpg')
   ```
   
   **AboutSection.vue**:
   ```typescript
   // Change from:
   const companyImage = ref<string | null>(null)
   // To:
   const companyImage = ref<string | null>('/images/company-building.jpg')
   ```
   
   **ProjectsSection.vue**:
   ```typescript
   // Uncomment the imageMap in getProjectImage() function
   ```

4. **Restart dev server**:
   ```bash
   npm run dev
   ```

## Usage in Code

```vue
<NuxtImg
  src="/images/hero-building.jpg"
  alt="Golden Home Điện Biên"
  format="webp"
  quality="80"
  loading="lazy"
/>
```

## Format & Optimization

- **Format**: JPG/JPEG (best for photographs)
- **Quality**: 80-90% (balance between quality and file size)
- **File size**: < 500KB per image recommended
- **@nuxt/image will automatically**:
  - Convert to WebP format
  - Optimize file size
  - Enable lazy loading
  - Generate responsive sizes

## Optimization Tips

1. **Pre-optimize images** before adding (use TinyPNG, ImageOptim, etc.)
2. **Use high-quality photos** - @nuxt/image will handle optimization
3. **Consistent naming** - use kebab-case (lowercase with hyphens)
4. **High resolution** - ensure images look good on 4K displays
5. **Keep originals** - backup original high-res images elsewhere

## Fallback Behavior

If images are not found:
- Hero section shows animated building icon
- About section shows animated building icon  
- Project cards show category-specific icons (home, building, store, hotel, warehouse, spa)

This allows the site to work perfectly even without images!

## Other Public Assets

You can also add:
- `logo.png` - Company logo
- `favicon.ico` - Tab icon
- `social-share.jpg` - Social media preview image (1200×630)
- `robots.txt` - SEO crawling instructions
