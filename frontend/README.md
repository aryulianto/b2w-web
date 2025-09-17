# Bike to Work Indonesia 🚴‍♂️

Situs web gerakan nasional untuk mengajak masyarakat Indonesia menggunakan sepeda sebagai transportasi utama menuju tempat kerja.

## ✨ Fitur Utama

- **🗺️ Peta Komunitas Interaktif** - Temukan komunitas bike to work di berbagai provinsi dengan link Instagram
- **🔗 Carbon Saved External Link** - Link menuju carbonsaved.b2w-id.org untuk tracking jejak karbon
- **💚 Manfaat Kesehatan & Lingkungan** - Informasi lengkap tentang keuntungan bike to work
- **👥 Testimoni Komunitas** - Cerita inspiratif dari anggota komunitas
- **📱 Responsive Design** - Akses mudah dari desktop dan mobile
- **🎨 UI/UX Modern** - Desain yang bersih dan user-friendly dengan spaced branding

## 🚀 Deployment ke GitHub Pages

### Langkah 1: Persiapan Repository
```bash
# Clone atau upload ke repository GitHub Anda
git clone <your-repo-url>
cd biketowork-indonesia
```

### Langkah 2: Setup GitHub Pages
1. Buka Settings di repository GitHub Anda
2. Scroll ke bagian "Pages"
3. Di Source, pilih "GitHub Actions"

### Langkah 3: Deployment Otomatis
File workflow sudah disediakan di `.github/workflows/deploy.yml` yang akan:
- Otomatis build dan deploy setiap push ke branch `main`
- Menggunakan yarn untuk dependency management
- Deploy ke GitHub Pages secara otomatis

### Langkah 4: Access Website
Setelah deployment selesai, website dapat diakses di:
```
https://username.github.io/repository-name
```

## 🛠️ Development Local

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build untuk production
yarn build
```

## 📁 Struktur Project

```
frontend/
├── public/
│   ├── index.html
│   └── _redirects           # Untuk SPA routing
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── BenefitsSection.jsx
│   │   ├── CommunityMap.jsx
│   │   ├── CarbonSavedSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   └── Footer.jsx
│   ├── mock/
│   │   └── mockData.js      # Data komunitas dan testimoni
│   ├── App.js
│   ├── App.css
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions untuk deployment
└── package.json
```

## 🎨 Teknologi yang Digunakan

- **React 19** - Frontend framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Router** - Navigation
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Hosting

## 📊 Fitur Carbon Saved

- Real-time counter animasi CO₂ yang diselamatkan
- Statistik dampak lingkungan (pohon diselamatkan, BBM dihemat)
- Progress chart bulanan
- Visualisasi data yang interaktif

## 🗺️ Peta Komunitas

- Daftar komunitas per provinsi
- Informasi detail setiap komunitas
- Link Instagram komunitas
- Info jadwal dan titik kumpul

## 📱 Responsive & Optimized

- Mobile-first design
- Fast loading dengan optimized assets
- SEO-friendly
- Accessibility compliant

## 🤝 Kontribusi

Website ini adalah bagian dari gerakan Bike to Work Indonesia. Kontribusi dan saran selalu diterima untuk meningkatkan kualitas dan fungsionalitas website.

---

**© 2025 BikeToWork Indonesia - Mari Bersama Selamatkan Bumi! 🌍**
