# Bike to Work Indonesia 🚴‍♂️

Situs web gerakan nasional untuk mengajak masyarakat Indonesia menggunakan sepeda sebagai transportasi utama menuju tempat kerja.

## ✨ Fitur Utama

- **🗺️ Peta Komunitas Interaktif** - Temukan komunitas bike to work di berbagai provinsi dengan link Instagram
- **🔗 Carbon Saved External Link** - Link menuju carbonsaved.b2w-id.org untuk tracking jejak karbon
- **💚 Manfaat Kesehatan & Lingkungan** - Informasi lengkap tentang keuntungan bike to work
- **👥 Testimoni Komunitas** - Cerita inspiratif dari anggota komunitas
- **📱 Responsive Design** - Akses mudah dari desktop dan mobile
- **🎨 UI/UX Modern** - Desain yang bersih dan user-friendly dengan spaced branding

## 🚀 Deployment - Pilih Platform

### GitHub Pages (Recommended)

#### Langkah 1: Setup Repository
```bash
# Upload semua file ke repository GitHub
git clone https://github.com/username/bike2work-indonesia.git
cd bike2work-indonesia
# Copy semua file dari folder frontend ke root repository
```

#### Langkah 2: Enable GitHub Pages
1. Buka **Settings** di repository GitHub
2. Scroll ke **Pages** (sidebar kiri)
3. Di **Source**, pilih **GitHub Actions**

#### Langkah 3: Deploy Otomatis
```bash
git add .
git commit -m "Deploy Bike to Work Indonesia"
git push origin main
```

Website akan otomatis tersedia di:
- Default: `https://username.github.io/bike2work-indonesia`
- Custom domain: `https://bike2work.id` (jika CNAME dikonfigurasi)

### GitLab Pages

#### Langkah 1: Setup Repository GitLab
```bash
# Upload semua file ke repository GitLab
git clone https://gitlab.com/username/bike2work-indonesia.git
cd bike2work-indonesia
# Copy semua file dari folder frontend ke root repository
```

#### Langkah 2: Deploy Otomatis
```bash
git add .
git commit -m "Deploy Bike to Work Indonesia to GitLab Pages"
git push origin main
```

Website akan otomatis tersedia di:
- `https://username.gitlab.io/bike2work-indonesia`

## 🛠️ Development Local

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build untuk production
yarn build
```

## 📁 Struktur Project untuk Deployment

```
bike2work-indonesia/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions
├── .gitlab-ci.yml           # GitLab CI/CD
├── public/
│   ├── index.html
│   ├── CNAME               # Custom domain untuk GitHub Pages
│   ├── 404.html            # SPA routing support
│   └── _redirects          # Fallback routing
├── src/
│   ├── components/
│   ├── mock/
│   ├── App.js
│   ├── App.css
│   └── index.css
├── package.json
├── README.md
└── DEPLOY.md
```

## 🎨 Teknologi yang Digunakan

- **React 19** - Frontend framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Router** - Navigation
- **GitHub Actions / GitLab CI** - CI/CD
- **GitHub Pages / GitLab Pages** - Hosting

## 🌐 Domain Configuration

### Custom Domain Setup
1. **DNS Setup**: Point `bike2work.id` to pages server
   - GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - GitLab Pages: Sesuai dengan GitLab Pages IP

2. **CNAME File**: Sudah included di `public/CNAME`

3. **SSL**: Otomatis disediakan oleh platform

## 🔧 Platform Features

### GitHub Pages
- ✅ Otomatis SSL/HTTPS
- ✅ Custom domain support
- ✅ Build dari GitHub Actions
- ✅ Fast global CDN

### GitLab Pages  
- ✅ Otomatis SSL/HTTPS
- ✅ Custom domain support
- ✅ Build dari GitLab CI/CD
- ✅ Private repository support

## 📊 Fitur Khusus

- **🗺️ Peta Komunitas dengan Instagram Integration**
  - Daftar komunitas per provinsi  
  - Informasi detail setiap komunitas
  - Link Instagram komunitas (@biketowork_jakarta, @bandung_biketowork, dll)
  - Info jadwal dan titik kumpul

- **🔗 Carbon Saved External Link**
  - Menu navigasi "Carbon Saved" mengarah ke https://carbonsaved.b2w-id.org/
  - Link external yang membuka di tab baru
  - Terintegrasi di header dan footer navigation

- **🎨 Professional Branding**
  - Header menampilkan "Bike to Work Indonesia"
  - Logo resmi Bike2Work Indonesia sebagai favicon
  - Tahun didirikan: 2005
  - Email kontak: info@bike2work.id

## 📱 SPA Routing

Website menggunakan client-side routing yang compatible dengan:
- GitHub Pages (404.html fallback)
- GitLab Pages (_redirects fallback)
- Custom server deployment

## 🤝 Kontribusi

Website ini adalah bagian dari gerakan Bike to Work Indonesia. Kontribusi dan saran selalu diterima untuk meningkatkan kualitas dan fungsionalitas website.

---

**© 2025 Bike to Work Indonesia - Mari Bersama Selamatkan Bumi! 🌍**
