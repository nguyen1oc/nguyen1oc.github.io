# 🚀 Nguyen Thien Loc — Portfolio Website (Refined® Editorial Edition)

Trang Portfolio cá nhân của **Nguyễn Thiên Lộc (Nguyen Thien Loc)** — Kỹ sư AI & Phần mềm (HCMUT).
Được thiết kế theo phong cách tối giản cao cấp (**Refined® Framer Editorial Theme**) kết hợp bảng màu Dark Graphite (`#000000` / `#121212`), Typography nghệ thuật (`Halant Serif` + `Geist Sans`), chuyển động mượt mà và hệ thống quản lý dữ liệu không cần Database phức tạp.

---

## 💻 1. Hướng dẫn chạy Local (Development)

### Yêu cầu:
- Đã cài đặt [Node.js](https://nodejs.org/) (khuyến nghị phiên bản 18+ hoặc 20+).

### Các bước chạy:
```bash
# 1. Di chuyển vào thư mục portfolio
cd portfolio

# 2. Cài đặt các thư viện (nếu chưa cài)
npm install

# 3. Khởi động server phát triển
npm run dev
```

Server sẽ chạy trực tiếp tại địa chỉ: **`http://localhost:5173/`**

---

## 🌐 2. Hướng dẫn Deploy lên Vercel (Miễn phí 100% & Cực nhanh)

Dự án được xây dựng bằng **React + Vite + TypeScript + TailwindCSS**, tối ưu hoàn hảo cho việc Deploy tự động lên Vercel:

1. **Đẩy code lên GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio refined edition"
   git branch -M main
   git remote add origin https://github.com/nguyen1oc/<ten-repo-cua-ban>.git
   git push -u origin main
   ```
2. **Deploy trên Vercel:**
   - Truy cập [vercel.com](https://vercel.com/) và đăng nhập bằng GitHub.
   - Bấm **"Add New Project"** ➔ Chọn Repository bạn vừa tạo.
   - **Root Directory:** Chọn thư mục `portfolio` (nếu bạn để cả repo ở thư mục cha, hoặc để mặc định nếu repo là thư mục `portfolio`).
   - Bấm **"Deploy"** ➔ Vercel sẽ tự động build và cấp cho bạn tên miền miễn phí (VD: `nguyenthienloc.vercel.app`) trong 15 giây!

---

## 📸 3. Hướng dẫn thêm Ảnh, Phim, Nhạc & CV (Không cần Database)

> **💡 Bạn có cần Database không?**  
> **Hoàn toàn KHÔNG CẦN.** Với một website Portfolio cá nhân, việc lưu dữ liệu tĩnh trong file cấu hình (`src/data/portfolioData.ts`) kết hợp thư mục hình ảnh `public/` giúp website **load nhanh tức thì (dưới 0.3s), chuẩn SEO, không tốn tiền server, không sợ bị sập database**. Mỗi khi muốn cập nhật, bạn chỉ cần sửa file data và đẩy lên GitHub, Vercel sẽ tự động cập nhật ngay!

---

### 📷 A. Thêm hoặc đổi Ảnh Chụp Đường Phố (Street Photography):
1. **Lưu file ảnh:** Copy file ảnh của bạn vào thư mục:
   `portfolio/public/images/photography/photo1.jpg`, `photo2.jpg`, v.v...
2. **Khai báo thông tin:** Mở file [`src/data/portfolioData.ts`](src/data/portfolioData.ts), tìm mảng `PHOTOS` và thêm/sửa:
   ```ts
   {
     id: 'p6',
     title: 'Sài Gòn Chiều Mưa',
     location: 'Quận 1, TP.HCM',
     year: '2024',
     caption: 'Cơn mưa rào bất chợt xua tan cái nóng phố thị.',
     story: 'Chụp từ hiên quán cà phê cũ góc đường Pasteur...',
     cameraInfo: 'Fujifilm X-T30 II • 35mm f/2',
     localPath: '/images/photography/photo6.jpg',
     fallbackUrl: 'https://images.unsplash.com/...',
   }
   ```

---

### 🎬 B. Thêm hoặc đổi Poster Phim (Movie Journal):
1. **Lưu file poster:** Đặt ảnh poster vào thư mục:
   `portfolio/public/images/movies/movie1.jpg`, v.v... (hoặc dùng thẳng link ảnh online).
2. **Khai báo thông tin:** Mở [`src/data/portfolioData.ts`](src/data/portfolioData.ts), tìm mảng `MOVIES` và thêm:
   ```ts
   {
     id: 'm21',
     title: 'Tenet',
     director: 'Christopher Nolan',
     releaseYear: 2020,
     category: 'Sci-Fi & Tech',
     quote: 'Don’t try to understand it. Feel it.',
     localPath: '/images/movies/tenet.jpg',
     fallbackUrl: 'https://...',
   }
   ```

---

### 🎵 C. Thêm Nghệ Sĩ & Bài Hát (Spotify Vinyl Player):
1. **Lưu file avatar nghệ sĩ:** Đặt vào:
   `portfolio/public/images/music/artist1.jpg`, v.v...
2. **Khai báo thông tin & link YouTube:** Mở [`src/data/portfolioData.ts`](src/data/portfolioData.ts), tìm mảng `ARTISTS`:
   ```ts
   {
     id: 'a13',
     name: 'Hà Anh Tuấn',
     genre: 'Acoustic / Live Ballad',
     bio: 'Những bản tình ca mộc mạc làm say lòng người nghe.',
     localPath: '/images/music/ha_anh_tuan.jpg',
     avatarUrl: 'https://...',
     topTracks: [
       { title: 'Tháng Tư Là Lời Nói Dối Của Em', youtubeUrl: 'https://www.youtube.com/results?search_query=...' },
       { title: 'Xuân Thì', youtubeUrl: 'https://www.youtube.com/results?search_query=...' },
     ],
   }
   ```

---

### 📄 D. Để người dùng bấm "Download CV" tải file PDF của bạn:
1. Bạn biên dịch file `main.tex` thành file PDF (hoặc xuất file PDF CV chuẩn của bạn).
2. Đổi tên file thành: **`NguyenThienLoc_Resume.pdf`**
3. Copy và đặt vào thư mục:  
   👉 **`portfolio/public/cv/NguyenThienLoc_Resume.pdf`**
4. Khi người dùng bấm nút **"Download CV"** hoặc nút **"Tải file PDF"** trên web, trình duyệt sẽ tự động tải file PDF này về ngay!

---

### 💼 E. Chỉnh sửa Kinh nghiệm (Experience) & Kỹ năng (Tech Stack):
- Toàn bộ nội dung kinh nghiệm thực chiến (*VinUniversity, bTaskee, DFM Engineering, Grab*) và 4 nhóm Tech Stack (*Languages & Frameworks, LLM & Agents, Databases, Cloud & DevOps*) đều nằm tập trung tại [`src/data/portfolioData.ts`](src/data/portfolioData.ts).
- Chỉ cần chỉnh sửa văn bản trong file này là giao diện sẽ tự động cập nhật ngay lập tức.
