# Website Kata-Kata Romantis 💕

Website mobile-friendly untuk menampilkan kata-kata romantis dengan gambar yang indah. Website ini dapat dihosting gratis di GitHub Pages.

## Fitur ✨

- 📱 **Mobile Responsive** - Tampil sempurna di semua perangkat
- 💖 **Kata-kata Romantis** - Koleksi kata-kata cinta yang menyentuh hati
- 🖼️ **Galeri Gambar** - Gambar romantis yang dapat dikustomisasi
- 🎨 **Background Dinamis** - Latar belakang yang berubah otomatis
- 📤 **Fitur Berbagi** - Bagikan kata-kata favorit dengan mudah
- 👆 **Touch Gestures** - Swipe untuk mengganti kata-kata (mobile)
- 🎭 **Animasi Smooth** - Transisi yang halus dan menarik

## Cara Menggunakan 🚀

### 1. Kustomisasi Kata-kata
Edit file `script.js` pada bagian `romanticQuotes` untuk menambah atau mengubah kata-kata:

```javascript
const romanticQuotes = [
    {
        text: "Kata-kata romantis Anda di sini",
        author: "Nama penulis (opsional)",
        image: "images/nama-gambar.jpg"
    },
    // Tambahkan lebih banyak...
];
```

### 2. Menambah Gambar
- Letakkan file gambar di folder `images/`
- Gunakan format JPG, PNG, atau WEBP
- Ukuran yang disarankan: 800x600px atau lebih besar
- Nama file sesuai dengan yang ada di `script.js`

**Gambar yang diperlukan:**
- Background images: `bg1.jpg` sampai `bg5.jpg`
- Love images: `love1.jpg` sampai `love10.jpg`

### 3. Deploy ke GitHub Pages

1. **Upload ke GitHub:**
   ```bash
   git add .
   git commit -m "Add romantic quotes website"
   git push origin main
   ```

2. **Aktifkan GitHub Pages:**
   - Pergi ke Settings → Pages di repository GitHub Anda
   - Pilih source: Deploy from a branch
   - Pilih branch: main / (root)
   - Klik Save

3. **Akses website:**
   - URL akan tersedia di: `https://username.github.io/repository-name`
   - Tunggu beberapa menit untuk deployment

## Struktur Folder 📁

```
atsa/
├── index.html          # Halaman utama
├── styles.css          # Styling dan responsive design
├── script.js           # Logic dan data kata-kata
├── images/             # Folder gambar
│   ├── bg1.jpg         # Background images
│   ├── bg2.jpg
│   ├── ...
│   ├── love1.jpg       # Love images
│   ├── love2.jpg
│   └── ...
└── README.md           # Dokumentasi ini
```

## Kustomisasi Lanjutan 🎨

### Mengubah Warna Tema
Edit file `styles.css` pada bagian CSS variables atau warna gradient:

```css
.btn {
    background: linear-gradient(135deg, #your-color1, #your-color2);
}
```

### Menambah Fitur Auto-Slide
Uncomment baris di `script.js`:
```javascript
setTimeout(startAutoAdvance, 5000);
```

### Mengubah Font
Ganti link font di `index.html` dan update CSS:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

## Tips untuk Gambar 📸

1. **Gunakan gambar berkualitas tinggi** tapi compress untuk web
2. **Tema romantis:** sunset, flowers, couple, hearts, nature
3. **Tools untuk compress:** TinyPNG, ImageOptim
4. **Format yang disarankan:** WEBP > JPG > PNG

## Browser Support 🌐

- ✅ Chrome (Mobile & Desktop)
- ✅ Firefox (Mobile & Desktop)
- ✅ Safari (Mobile & Desktop)
- ✅ Edge
- ✅ Opera

## License 📄

Free to use and modify for personal projects.

---

**Dibuat dengan ❤️ untuk menyebarkan cinta**

Untuk pertanyaan atau bantuan, silakan buka issue di repository ini.
