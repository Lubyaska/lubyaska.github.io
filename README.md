# 🎨 Lubyaska Lietamenta - Personal Portfolio Website

Portfolio website yang indah dan artsy untuk Lubyaska Lietamenta, dengan dark theme, vector graphics, dan design yang ekspresif.

## ✨ Fitur Utama

- **Responsive Design**: Fully responsive untuk semua device (desktop, tablet, mobile)
- **Dark Theme**: Tema gelap dengan aksen merah maroon yang artistic
- **Modern UI/UX**: Design clean dengan smooth animations dan transitions
- **Sections**:
  - 🏠 Hero Landing Page
  - 👤 About Section dengan passion grid
  - 📚 Experiences dengan timeline education & work
  - 🎨 Projects showcase dengan grid layout
  - 🏆 Achievements carousel
  - 💻 Skills dengan progress bars & languages
  - 📧 Contact form
  - 📱 Footer dengan social links

## 🎯 Design Highlights

- **Color Palette**: 
  - Primary Dark: #160000
  - Primary Maroon: #270000
  - Accent Red: #b70020
  - Gradien background yang menarik

- **Typography**:
  - Heading: Playfair Display (serif)
  - Body: Poppins (sans-serif)

- **Visual Elements**:
  - Decorative SVG doodles dengan floating animation
  - Smooth scroll behavior
  - Parallax effects
  - Hover interactions
  - Glass-morphism cards

## 📁 Project Structure

```
PortofolioWebsite/
├── index.html       # Main HTML file
├── styles.css       # Complete CSS styling
├── script.js        # JavaScript interactions
└── README.md        # This file
```

## 🚀 Cara Menggunakan

### Option 1: Open File Directly
1. Buka file `index.html` dengan browser favorit
2. Website akan langsung berjalan

### Option 2: Using Python Server (Recommended)
```bash
# Python 3.x
python -m http.server 8000

# Atau Python 2.x
python -m SimpleHTTPServer 8000
```
Kemudian buka `http://localhost:8000` di browser

### Option 3: Using Node.js http-server
```bash
npm install -g http-server
http-server
```
Kemudian buka `http://localhost:8080` di browser

### Option 4: Using VS Code Live Server
- Install extension "Live Server" di VS Code
- Right-click pada `index.html` → "Open with Live Server"

## 🎨 Customization

### Mengubah Warna
Edit variable CSS di `styles.css`:
```css
:root {
    --primary-dark: #160000;
    --primary-maroon: #270000;
    --accent-red: #b70020;
    --accent-light-red: #de6163;
    /* ... */
}
```

### Mengubah Konten
- Edit teks langsung di `index.html`
- Ganti gambar dengan image URL atau path lokal
- Update social media links di bagian contact dan footer

### Menambah Animasi
Semua animasi dideskripsikan di bagian `@keyframes` di `styles.css`

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Tablet: 768px
- Mobile: < 480px

## 🔧 Features Explained

### Timeline Section
- Switching antara Education dan Work history
- Vertical timeline dengan alternating layout
- Animated dots dan connecting line

### Projects Grid
- Responsive grid yang auto-fit
- Hover effects dengan overlay
- Large card untuk featured project

### Skills Section
- Progress bars dengan gradient
- Language cards dengan flags
- Smooth animations pada scroll

### Contact Form
- Form validation
- Smooth transitions
- Submit handler (currently logs to console)

## 🎬 Animations

Website ini dilengkapi dengan berbagai animations:
- Fade in/up on scroll
- Float effects pada doodles
- Rotate animation pada image border
- Scale transforms pada hover
- Parallax scrolling effects

## 📦 Dependencies

Semua dependencies adalah external CDN:
- **Google Fonts**: Playfair Display, Poppins
- **Font Awesome**: Icons untuk social media & contact
- **Placeholder Images**: Unsplash & placeholder.com

## 🔐 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Asset Customization

Untuk mengganti gambar placeholder:

1. **Hero Image**: Ganti URL di `.hero-image img`
2. **About Image**: Ganti URL di `.about-img`
3. **Project Images**: Ganti URL di `.project-card img`
4. **Achievement Images**: Ganti URL di `.achievement-item img`

## ✅ Optimization Tips

1. **Images**: Gunakan format modern (WebP) untuk faster loading
2. **Lazy Loading**: Tambahkan `loading="lazy"` pada img tags
3. **Minify**: Minify CSS dan JS untuk production
4. **CDN**: Host gambar di CDN untuk faster delivery

## 🐛 Troubleshooting

### Fonts tidak tampil
- Check internet connection (Google Fonts dari CDN)
- Clear browser cache

### Gambar tidak muncul
- Verify image URLs
- Check browser console untuk error messages

### Animations tidak smooth
- Check browser performance
- Disable browser extensions yang mungkin conflict

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome Icons](https://fontawesome.com/)

## 🎓 Learning Resources

Dokumentasi yang digunakan:
- CSS Grid & Flexbox
- CSS Animations & Transitions
- Intersection Observer API
- Modern JavaScript ES6+

## 📄 License

Personal portfolio - Feel free to customize and use as your own!

## 🤝 Credits

Design inspired by:
- Behance art gallery designs
- Dribbble portfolio showcases
- Modern dark-themed websites
- Personal creative vision

---

**Made with ❤️ by Lubyaska Lietamenta**

Terakhir diupdate: 15 Desember 2024
