# 🚀 Hướng Dẫn Deploy Landing Page

## 🎯 Các Phương Pháp Deploy

### 1️⃣ Vercel (KHUYẾN NGHỊ - Dễ nhất, Miễn phí) ⭐

**Ưu điểm:**
- ✅ Miễn phí hoàn toàn
- ✅ Deploy tự động khi push code
- ✅ HTTPS miễn phí
- ✅ Domain miễn phí (.vercel.app)
- ✅ Hỗ trợ Nuxt 3 native
- ✅ CDN toàn cầu

**Cách 1: Deploy qua Git (Khuyến nghị)**

1. **Push code lên GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

2. **Deploy trên Vercel**
   - Truy cập: https://vercel.com
   - Đăng nhập bằng GitHub
   - Click "Add New" → "Project"
   - Chọn repository của bạn
   - Click "Deploy"
   - Đợi 2-3 phút → Website online! 🎉

**Cách 2: Deploy qua Vercel CLI**

```bash
# Cài đặt Vercel CLI
npm install -g vercel

# Deploy
vercel

# Làm theo hướng dẫn:
# - Chọn "Y" để setup
# - Chọn scope (account)
# - Link to existing project? → No
# - Project name → nhập tên
# - Directory → mặc định (.)
# - Vercel sẽ tự động detect Nuxt 3
# - Deploy!

# Deploy lên production
vercel --prod
```

3. **Cấu hình custom domain (Optional)**
   - Vào Vercel Dashboard → Project Settings → Domains
   - Thêm domain của bạn
   - Cập nhật DNS records theo hướng dẫn

---

### 2️⃣ Netlify (Miễn phí, Dễ)

**Ưu điểm:**
- ✅ Miễn phí
- ✅ Drag & drop deploy
- ✅ HTTPS miễn phí
- ✅ Domain miễn phí (.netlify.app)

**Cách 1: Deploy qua Git**

1. **Push code lên GitHub/GitLab**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. **Deploy trên Netlify**
   - Truy cập: https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Chọn Git provider (GitHub)
   - Chọn repository
   - Build settings:
     - Build command: `npm run generate`
     - Publish directory: `.output/public`
   - Click "Deploy site"

**Cách 2: Drag & Drop (Nhanh nhất)**

```bash
# Build static site
npm run generate

# Folder .output/public sẽ chứa static files
```

- Truy cập: https://app.netlify.com/drop
- Kéo thả folder `.output/public` vào
- Done! 🎉

---

### 3️⃣ GitHub Pages (Static, Miễn phí)

**Chỉ dùng cho static site (SSG)**

1. **Cài đặt GH Pages action**

Tạo file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Generate static site
        run: npm run generate
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./.output/public
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. **Cấu hình GitHub Pages**
   - Vào Settings → Pages
   - Source: GitHub Actions
   - Push code → Tự động deploy

3. **Truy cập:** `https://your-username.github.io/your-repo/`

---

### 4️⃣ Hosting Thông Thường (VPS/Shared Hosting)

**Dành cho ai đã có hosting**

**Build static site:**

```bash
# Generate static files
npm run generate

# Upload folder .output/public lên hosting
# Qua FTP hoặc cPanel File Manager
```

**Upload qua FTP:**
1. Mở FileZilla/WinSCP
2. Connect tới hosting
3. Upload toàn bộ nội dung trong `.output/public/`
4. Đặt vào thư mục `public_html` hoặc `www`

**Cấu hình Apache (.htaccess):**

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

### 5️⃣ VPS với PM2 (Server-side rendering)

**Dành cho ai cần SSR**

```bash
# Trên VPS, cài đặt Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone your-repo.git
cd your-repo

# Install dependencies
npm install

# Build
npm run build

# Install PM2
npm install -g pm2

# Chạy với PM2
pm2 start .output/server/index.mjs --name "golden-home"

# Auto start on reboot
pm2 startup
pm2 save

# Cấu hình Nginx
sudo nano /etc/nginx/sites-available/golden-home
```

**Nginx config:**

```nginx
server {
    listen 80;
    server_name goldenhomedb.vn www.goldenhomedb.vn;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/golden-home /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Install SSL with Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d goldenhomedb.vn -d www.goldenhomedb.vn
```

---

## 📋 So Sánh Các Phương Pháp

| Phương pháp | Độ khó | Chi phí | Tốc độ | SSR | Khuyến nghị |
|-------------|--------|---------|--------|-----|-------------|
| **Vercel** | ⭐ Dễ | Miễn phí | ⚡ Nhanh | ✅ | ⭐⭐⭐⭐⭐ |
| **Netlify** | ⭐ Dễ | Miễn phí | ⚡ Nhanh | ❌ | ⭐⭐⭐⭐ |
| **GitHub Pages** | ⭐⭐ TB | Miễn phí | 🚀 Nhanh | ❌ | ⭐⭐⭐ |
| **Hosting** | ⭐⭐ TB | $2-5/th | 🐌 Chậm | ❌ | ⭐⭐ |
| **VPS + PM2** | ⭐⭐⭐ Khó | $5-10/th | ⚡ Nhanh | ✅ | ⭐⭐⭐⭐ |

---

## 🎯 Khuyến Nghị Cho Golden Home

### Option 1: Nhanh nhất (5 phút) ⚡
```bash
npm install -g vercel
vercel
```
→ Link online ngay lập tức!

### Option 2: Chuyên nghiệp (10 phút) 🌟
1. Push lên GitHub
2. Connect với Vercel
3. Tự động deploy mỗi khi push code
4. Thêm custom domain (goldenhomedb.vn)

---

## 🔗 Sau Khi Deploy

### Kiểm tra website:
- ✅ Tất cả sections hiển thị đúng
- ✅ Responsive trên mobile
- ✅ Form contact hoạt động
- ✅ Images load nhanh
- ✅ Smooth scrolling

### Tối ưu SEO:
- ✅ Submit sitemap lên Google Search Console
- ✅ Thêm Google Analytics
- ✅ Tạo robots.txt
- ✅ Tối ưu images

### Chia sẻ:
- 📱 Share link trên Facebook/Zalo
- 🌐 Thêm vào Google My Business
- 📧 Gửi email cho khách hàng

---

## 🆘 Troubleshooting

### Build failed
```bash
# Clear cache và rebuild
rm -rf .nuxt .output node_modules
npm install
npm run generate
```

### 404 errors trên hosting
→ Cần cấu hình rewrite rules (xem phần Apache/Nginx)

### Slow loading
→ Optimize images, enable CDN (Vercel/Netlify tự động có)

### Domain không hoạt động
→ Kiểm tra DNS records (mất 24-48h để propagate)

---

## 📞 Hỗ Trợ

Nếu gặp vấn đề khi deploy, hãy cho tôi biết:
- Bạn chọn phương pháp nào?
- Lỗi gì xuất hiện?
- Screenshot nếu có

**Khuyến nghị:** Bắt đầu với **Vercel** - dễ nhất và miễn phí! 🚀
