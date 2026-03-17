# ⚠️ IMPORTANT: Use public/images/ Instead

> **For Nuxt 3 with @nuxt/image, images should be placed in the `public/images/` directory, NOT here in `assets/images/`.**

## Correct Image Location

**Use `public/images/` for all project images:**
```
public/
  images/
    hero-building.jpg
    company-building.jpg
    project-*.jpg
```

## Why public/images/ Instead of assets/images/?

1. **@nuxt/image compatibility**: The `<NuxtImg>` component works best with images in the `public/` directory
2. **Direct path access**: Images in public/ can be referenced as `/images/...`
3. **No build processing needed**: Public images are served as-is
4. **Dynamic image support**: Better support for conditional/dynamic images

## Migration Instructions

If you have images here in `assets/images/`, move them to `public/images/`:

```bash
# Windows
mkdir public\images
move assets\images\*.jpg public\images\

# Linux/Mac
mkdir -p public/images
mv assets/images/*.jpg public/images/
```

## Image Requirements

See `public/images/README.md` for detailed image specifications and naming conventions.

---

**Note**: This `assets/images/` directory can be removed or used for other asset types (like CSS, fonts, etc.) that need Vite processing.
