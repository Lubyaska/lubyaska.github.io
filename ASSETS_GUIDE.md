# 🖼️ Asset & Image Replacement Guide

Panduan lengkap untuk mengganti semua gambar dan asset placeholder dengan konten Anda sendiri.

## 📍 Lokasi Gambar di Website

### 1. Hero Section (Homepage)
**File**: `index.html` ~ Line 60
```html
<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop" alt="Lubyaska Lietamenta" class="profile-img">
```
**Ganti dengan**: Foto profil Anda
**Ukuran ideal**: 400x500px (portrait)
**Format**: JPG, PNG, WebP

---

### 2. About Section Profile Image
**File**: `index.html` ~ Line 107
```html
<img src="https://images.unsplash.com/photo-1520664185298-1b434c919eba?w=400&h=500&fit=crop" alt="Lubyaska" class="about-img">
```
**Ganti dengan**: Foto casual/personal Anda
**Ukuran ideal**: 400x500px (portrait)
**Catatan**: Akan ditampilkan dalam circle shape

---

### 3. Project Images (Bagian Projects)
**File**: `index.html` ~ Line 212-237
Ada 5 project images:
```html
<!-- Project 1 (Large - 600x500) -->
<img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=500&fit=crop" alt="Project 1">

<!-- Projects 2-5 (400x300 atau 400x400) -->
<img src="https://images.unsplash.com/photo-1561090900-4587da91a2e8?w=400&h=300&fit=crop" alt="Project 2">
```
**Ganti dengan**: Screenshot atau mockup project Anda
**Ukuran ideal**: 
- Large: 600x500px
- Small: 400x300-400px
**Tips**: Gunakan high-quality screenshot atau mockup tool

---

### 4. Achievement/Certificate Images
**File**: `index.html` ~ Line 256-275
```html
<img src="https://via.placeholder.com/400x500/2a2a2a/b70020?text=Certificate+1" alt="Achievement 1">
```
**Ganti dengan**: Sertifikat atau achievement image Anda
**Ukuran ideal**: 400x500px
**Format**: Bisa foto sertifikat atau design graphic

---

## 🔗 Cara Mengganti Gambar

### Option 1: Gunakan Unsplash (Free)
1. Buka https://unsplash.com
2. Search foto yang sesuai
3. Klik foto → Copy link
4. Format URL:
```
https://images.unsplash.com/photo-ID?w=WIDTH&h=HEIGHT&fit=crop
```

**Contoh**:
```html
<!-- Original -->
<img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=500&fit=crop">

<!-- Ganti dengan foto lain -->
<img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=500&fit=crop">
```

### Option 2: Gunakan Pexels/Pixabay (Free)
1. Buka https://www.pexels.com atau https://pixabay.com
2. Download foto
3. Upload ke folder lokal
4. Update path:
```html
<img src="images/my-photo.jpg">
```

### Option 3: Upload ke GitHub/CDN
1. Upload foto ke GitHub
2. Raw URL:
```
https://raw.githubusercontent.com/USERNAME/REPO/main/images/photo.jpg
```

### Option 4: Gunakan Imgur
1. Buka https://imgur.com
2. Upload foto
3. Copy direct link:
```html
<img src="https://i.imgur.com/XXXXX.jpg">
```

---

## 📐 Image Specifications

### Hero Profile Image
```
Dimension: 400 x 500px (atau aspect ratio 4:5)
Format: JPG, PNG, WebP
Style: Portrait, professional
Optimization: Compress untuk web (~50KB)
```

### About Section Image
```
Dimension: 400 x 500px (atau square 500x500)
Format: JPG, PNG, WebP
Style: Casual/personal vibe
Optimization: ~50KB
Note: Akan di-crop circular
```

### Project Images
```
Large (Hero Project):
- Dimension: 600 x 500px
- Format: JPG, PNG
- Style: Professional mockup/screenshot
- Optimization: ~100KB

Regular Projects:
- Dimension: 400 x 300px (horizontal) atau 400 x 400px (square)
- Format: JPG, PNG
- Style: Consistent design
- Optimization: ~60KB each
```

### Achievement Images
```
Dimension: 400 x 500px (portrait) atau 600 x 400px (landscape)
Format: JPG, PNG, PDF (jika sertifikat)
Style: Sertifikat, award, atau recognition
Optimization: ~80KB
```

---

## 🎨 Free Image Resources

### Stock Photo Sites (High Quality)
- **Unsplash** - https://unsplash.com
- **Pexels** - https://www.pexels.com
- **Pixabay** - https://pixabay.com
- **Flaticon** - https://www.flaticon.com

### Design/Portfolio Mockups
- **Figma** - Free templates untuk mockups
- **Canva** - Drag & drop design
- **Adobe Express** - Free version

### Icon Libraries
- **Font Awesome** - Already integrated
- **Feather Icons** - https://feathericons.com
- **Tabler Icons** - https://tabler.io/icons

---

## 🔀 Complete Replacement Checklist

### Step 1: Foto Profil
- [ ] Hero image (400x500)
- [ ] About image (400x500)
- [ ] Pastikan kualitas tinggi

### Step 2: Project Images
- [ ] 5 project images (berbeda setiap project)
- [ ] Atau bisa duplikat jika hanya showcase
- [ ] Update alt text dengan project name

### Step 3: Achievement Images
- [ ] 4 certificate/achievement images
- [ ] Bisa sertifikat, award, atau portfolio work

### Step 4: Icons (Optional)
- [ ] Social media icons sudah pakai Font Awesome
- [ ] Tambah icons lain jika perlu

### Step 5: Testing
- [ ] Semua gambar load dengan baik
- [ ] Tidak ada broken image icon
- [ ] Responsive di mobile

---

## 💡 Pro Tips

### Optimasi Gambar
```bash
# Gunakan ImageOptim atau TinyPNG
# Buat ukuran lebih kecil tanpa loss of quality

# Online tools:
# - https://tinypng.com
# - https://imagecompressor.com
# - https://squoosh.app
```

### Resize Batch Images
```bash
# Gunakan ImageMagick atau FFmpeg
# Windows: Gunakan IrfanView (batch conversion)
# Mac: Gunakan Preview
```

### Watermark (Optional)
```html
<!-- Uncomment jika ingin watermark -->
<!-- <img src="image.jpg" alt=""> -->
```

---

## ⚡ Using Local Images (Best Practice)

### Step 1: Create Images Folder
```
PortofolioWebsite/
├── index.html
├── styles.css
├── script.js
└── images/                    ← Create this folder
    ├── profile.jpg
    ├── about.jpg
    ├── project-1.jpg
    ├── project-2.jpg
    └── achievement-1.jpg
```

### Step 2: Update HTML
```html
<!-- Dari URL -->
<img src="https://images.unsplash.com/photo-ID?w=400&h=500">

<!-- Ke local file -->
<img src="images/profile.jpg" alt="Lubyaska Lietamenta">
```

### Step 3: Update All References
Search & replace di `index.html`:
- Find: `https://images.unsplash.com`
- Replace: `images/` (untuk local images)

---

## 🖼️ Image Placement Reference

```html
<!-- HERO SECTION -->
<section id="home" class="hero">
  <img src="HERO_IMAGE.jpg" class="profile-img">
</section>

<!-- ABOUT SECTION -->
<section id="about" class="about">
  <img src="ABOUT_IMAGE.jpg" class="about-img">
</section>

<!-- PROJECTS SECTION -->
<section id="projects" class="projects">
  <img src="PROJECT_1.jpg">  <!-- Large -->
  <img src="PROJECT_2.jpg">  <!-- Regular -->
  <img src="PROJECT_3.jpg">  <!-- Regular -->
  <img src="PROJECT_4.jpg">  <!-- Regular -->
  <img src="PROJECT_5.jpg">  <!-- Regular -->
</section>

<!-- ACHIEVEMENTS SECTION -->
<section id="achievements" class="achievements">
  <img src="CERT_1.jpg">
  <img src="CERT_2.jpg">
  <img src="CERT_3.jpg">
  <img src="CERT_4.jpg">
</section>
```

---

## 🚨 Troubleshooting Images

### Image tidak muncul
1. Check path adalah correct
2. Buka browser DevTools (F12)
3. Lihat Network tab untuk broken images
4. Pastikan file exists dan readable

### Image loading slow
1. Compress image (TinyPNG)
2. Gunakan CDN (Cloudinary, imgix)
3. Lazy loading:
```html
<img src="..." loading="lazy">
```

### Image distorted
1. Check aspect ratio
2. Adjust width/height di HTML
3. Atau edit di CSS `.project-card img { object-fit: cover; }`

### Responsive image issues
1. Test di mobile
2. Ensure parent container is responsive
3. Check media queries di CSS

---

## 📚 Resources

### Image Editing
- Photoshop (paid)
- GIMP (free)
- Canva (online)
- Pixlr (online)

### Image Compression
- TinyPNG
- ImageOptim
- Squoosh.app

### Design Tools
- Figma
- Adobe XD
- Sketch
- Lunacy (free)

---

## 🎯 Next Steps

1. Gather all your images
2. Optimize them for web
3. Replace URLs in HTML
4. Test responsiveness
5. Verify all images load
6. Deploy!

---

**Last Updated**: December 15, 2024
