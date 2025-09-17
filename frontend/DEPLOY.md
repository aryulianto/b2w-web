# 🚀 Deploy - GitHub Pages & GitLab Pages

## Quick Deploy Guide untuk Bike to Work Indonesia

### 🐙 GitHub Pages (Recommended)

#### Setup Cepat:
1. **Upload ke GitHub Repository**
   ```bash
   # Buat repo: bike2work-indonesia
   git clone https://github.com/username/bike2work-indonesia.git
   cd bike2work-indonesia
   # Copy semua file dari folder frontend ke root
   ```

2. **Enable GitHub Pages**
   - Settings → Pages → Source: **GitHub Actions**

3. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy Bike to Work Indonesia"
   git push origin main
   ```

4. **Access**: `https://username.github.io/bike2work-indonesia` atau `https://bike2work.id`

---

### 🦊 GitLab Pages

#### Setup Cepat:
1. **Upload ke GitLab Repository**
   ```bash
   # Buat repo: bike2work-indonesia
   git clone https://gitlab.com/username/bike2work-indonesia.git
   cd bike2work-indonesia
   # Copy semua file dari folder frontend ke root
   ```

2. **Deploy** (otomatis via CI/CD)
   ```bash
   git add .
   git commit -m "Deploy to GitLab Pages"
   git push origin main
   ```

3. **Access**: `https://username.gitlab.io/bike2work-indonesia`

---

## 🌐 Custom Domain (bike2work.id)

### DNS Configuration:
**GitHub Pages:**
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Type: CNAME
Name: www
Value: username.github.io
```

**GitLab Pages:**
```
Type: A
Name: @
Value: [GitLab Pages IP]

Type: CNAME  
Name: www
Value: username.gitlab.io
```

---

## 🔧 Files Included

### Deployment Files:
- ✅ `.github/workflows/deploy.yml` - GitHub Actions
- ✅ `.gitlab-ci.yml` - GitLab CI/CD  
- ✅ `public/404.html` - SPA routing support
- ✅ `public/_redirects` - Fallback routing
- ✅ `public/CNAME` - Custom domain file

### Features:
- ✅ Automatic SSL/HTTPS
- ✅ SPA routing support
- ✅ Custom domain ready
- ✅ SEO optimized
- ✅ Mobile responsive
- ✅ Fast CDN delivery

---

## ⚡ Platform Comparison

| Feature | GitHub Pages | GitLab Pages |
|---------|--------------|--------------|
| **Free Tier** | ✅ Public repos | ✅ Public & Private |
| **Custom Domain** | ✅ | ✅ |
| **SSL/HTTPS** | ✅ Auto | ✅ Auto |
| **Build Time** | ~2-3 min | ~2-4 min |
| **CDN** | ✅ Global | ✅ Global |
| **Storage** | 1GB | 10GB |

---

## 🐛 Troubleshooting

**Build Error?**
```bash
# Check Node version
node --version  # Should be 18+

# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
```

**Page not loading?**
- Wait 5-10 minutes after first deploy
- Check Actions/CI logs for errors
- Verify Pages is enabled in settings

**Routing issues?**
- `404.html` handles SPA routing
- `_redirects` provides fallback
- Both files included automatically

---

## 🚀 Ready to Deploy!

1. Choose platform (GitHub or GitLab)
2. Upload files to repository
3. Enable Pages in settings
4. Push to main branch
5. Visit your live website!

**Live in 5 minutes! 🎉**