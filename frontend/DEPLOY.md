# 🚀 Deploy ke GitHub Pages - Langkah Mudah

## Cara Deploy Website Bike to Work Indonesia ke GitHub Pages

### 📋 Prerequisites
- Akun GitHub
- Git terinstall di komputer

### 🔄 Langkah-langkah Deployment

#### 1. Upload ke GitHub Repository
```bash
# Buat repository baru di GitHub dengan nama: biketowork-indonesia
# Clone repository atau upload semua file frontend ke repository

git clone https://github.com/username/biketowork-indonesia.git
cd biketowork-indonesia

# Copy semua file dari folder frontend ke root repository
# Pastikan struktur seperti ini:
# /
# ├── src/
# ├── public/
# ├── package.json
# ├── .github/workflows/deploy.yml
# └── README.md
```

#### 2. Enable GitHub Pages
1. Buka repository di GitHub
2. Klik tab **Settings**
3. Scroll ke bagian **Pages** (sidebar kiri)
4. Di **Source**, pilih **GitHub Actions**

#### 3. Push dan Deploy Otomatis
```bash
git add .
git commit -m "Initial commit - Bike to Work Indonesia website"
git push origin main
```

#### 4. Monitor Deployment
1. Buka tab **Actions** di repository GitHub
2. Lihat proses build dan deploy
3. Tunggu hingga status berubah menjadi ✅ (hijau)

#### 5. Akses Website
Website akan tersedia di:
```
https://username.github.io/biketowork-indonesia
```

### ⚡ Quick Deploy (Copy-Paste Ready)

Jika ingin deploy dengan cepat, copy struktur file ini ke repository GitHub:

```
biketowork-indonesia/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── _redirects
├── src/
│   ├── components/
│   ├── mock/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── DEPLOY.md
```

### 🔧 Troubleshooting

**Build Error?**
- Pastikan `package.json` ada di root folder
- Pastikan semua dependencies terinstall

**Page tidak muncul?**
- Pastikan GitHub Pages sudah di-enable
- Cek di tab Actions apakah deploy berhasil
- Tunggu 5-10 menit setelah deploy pertama

**Routing Error?**
- File `_redirects` sudah ada di public/
- Pastikan `homepage: "."` ada di package.json

### 📞 Support

Jika ada masalah deployment, periksa:
1. Console error di browser
2. GitHub Actions logs
3. Pastikan semua file sudah ter-commit

**Website siap digunakan! 🎉**