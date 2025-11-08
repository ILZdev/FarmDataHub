const NewsDefaultConfig = {
  background_color: "#f0f9ff",
  header_color: "#0ea5e9",
  card_color: "#ffffff",
  text_color: "#1e293b",
  button_color: "#0ea5e9",
  font_family: "system-ui",
  font_size: 16,
  site_title: "Berita Pertanian",
  site_tagline: "Informasi Terkini Dunia Pertanian",
  search_placeholder: "Cari berita...",
  all_category_label: "Semua",
};

let config = { ...NewsDefaultConfig };

// Data berita pertanian
const newsData = [
  {
    id: 1,
    title: "Teknologi Hidroponik Tingkatkan Hasil Panen 300%",
    category: "Teknologi",
    date: "15 Januari 2025",
    excerpt:
      "Petani di Jawa Barat berhasil meningkatkan hasil panen sayuran hingga 300% menggunakan sistem hidroponik modern.",
    content:
      "Sistem hidroponik yang diterapkan oleh kelompok tani di Bandung telah membuktikan efektivitasnya dalam meningkatkan produktivitas pertanian. Dengan menggunakan nutrisi yang tepat dan sistem otomatis, petani dapat memanen sayuran berkualitas tinggi sepanjang tahun tanpa tergantung musim.",
    image: "🌱",
    photos: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=800&h=600&fit=crop",
    ],
    videos: [
      {
        title: "Tutorial Sistem Hidroponik Modern",
        url: "https://www.youtube.com/embed/DLzxrzFCyOs?si=FPBLYJJpu3AO9ntL",
        duration: "3:33",
      },
    ],
  },
  {
    id: 2,
    title: "Harga Beras Stabil Jelang Musim Panen Raya",
    category: "Ekonomi",
    date: "14 Januari 2025",
    excerpt:
      "Pemerintah memastikan stok beras nasional aman dan harga tetap stabil menjelang musim panen raya.",
    content:
      "Bulog melaporkan stok beras nasional mencapai 1,2 juta ton, cukup untuk memenuhi kebutuhan masyarakat hingga 3 bulan ke depan. Harga beras di tingkat petani juga mengalami kenaikan yang menguntungkan, berkisar Rp 5.500-6.000 per kilogram.",
    image: "🌾",
    photos: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
    ],
    videos: [
      {
        title: "Proses Panen Padi Modern",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "6:30",
      },
    ],
  },
  {
    id: 3,
    title: "Petani Milenial Sukses Kembangkan Agrowisata",
    category: "Inspirasi",
    date: "13 Januari 2025",
    excerpt:
      "Generasi muda membuktikan pertanian bisa menjadi bisnis yang menguntungkan dan menarik.",
    content:
      "Andi, petani berusia 28 tahun, berhasil mengembangkan kebun strawberry menjadi destinasi agrowisata yang ramai dikunjungi. Dengan memanfaatkan media sosial dan konsep wisata edukatif, pendapatannya meningkat hingga 500% dibanding hanya menjual hasil panen.",
    image: "👨‍🌾",
    photos: [
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=800&h=600&fit=crop",
    ],
    videos: [
      {
        title: "Kisah Sukses Agrowisata Strawberry",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "12:15",
      },
      {
        title: "Tips Memulai Agrowisata",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "9:20",
      },
    ],
  },
  {
    id: 4,
    title: "Pupuk Organik Ramah Lingkungan Diminati Petani",
    category: "Lingkungan",
    date: "12 Januari 2025",
    excerpt:
      "Kesadaran akan pertanian berkelanjutan mendorong petani beralih ke pupuk organik.",
    content:
      "Penggunaan pupuk organik meningkat 40% dalam setahun terakhir. Petani mulai menyadari manfaat jangka panjang pupuk organik untuk kesuburan tanah dan kesehatan lingkungan. Pemerintah juga memberikan subsidi untuk produksi pupuk organik lokal.",
    image: "♻️",
    photos: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=800&h=600&fit=crop",
    ],
    videos: [
      {
        title: "Cara Membuat Pupuk Organik Sendiri",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "10:30",
      },
    ],
  },
  {
    id: 5,
    title: "Drone Pertanian Bantu Monitoring Lahan Sawah",
    category: "Teknologi",
    date: "11 Januari 2025",
    excerpt:
      "Teknologi drone memudahkan petani memantau kondisi tanaman secara efisien.",
    content:
      "Penggunaan drone untuk monitoring kesehatan tanaman dan penyemprotan pestisida semakin populer. Teknologi ini menghemat waktu dan biaya operasional hingga 60%, serta memberikan data akurat tentang kondisi lahan pertanian.",
    image: "🚁",
    photos: [
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    ],
    videos: [
      {
        title: "Drone Pertanian dalam Aksi",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "7:45",
      },
    ],
  },
  {
    id: 6,
    title: "Ekspor Kopi Indonesia Tembus 500 Ribu Ton",
    category: "Ekonomi",
    date: "10 Januari 2025",
    excerpt:
      "Kopi Indonesia semakin diminati pasar internasional dengan kualitas premium.",
    content:
      "Ekspor kopi Indonesia mencapai rekor baru dengan total 500 ribu ton ke berbagai negara. Kopi specialty dari Aceh, Toraja, dan Papua menjadi primadona dengan harga jual tinggi di pasar internasional.",
    image: "☕",
    photos: [
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=800&h=600&fit=crop",
    ],
    videos: [
      {
        title: "Perjalanan Kopi dari Kebun ke Cangkir",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "15:20",
      },
    ],
  },
  {
    id: 7,
    title: "Program Asuransi Pertanian Lindungi Petani",
    category: "Kebijakan",
    date: "9 Januari 2025",
    excerpt:
      "Pemerintah perluas program asuransi untuk melindungi petani dari risiko gagal panen.",
    content:
      "Program asuransi pertanian kini mencakup 2 juta hektar lahan di seluruh Indonesia. Petani yang mengalami gagal panen akibat bencana alam atau hama akan mendapat kompensasi hingga 80% dari nilai kerugian.",
    image: "🛡️",
    photos: [
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
    ],
    videos: [
      {
        title: "Penjelasan Program Asuransi Pertanian",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "11:10",
      },
    ],
  },
  {
    id: 8,
    title: "Budidaya Ikan Lele Bioflok Raup Untung Jutaan",
    category: "Perikanan",
    date: "8 Januari 2025",
    excerpt:
      "Sistem bioflok terbukti efektif tingkatkan produktivitas budidaya ikan lele.",
    content:
      "Petani ikan di Yogyakarta berhasil meraup keuntungan hingga Rp 15 juta per bulan dari budidaya lele sistem bioflok. Teknologi ini memungkinkan padat tebar tinggi dengan kualitas air terjaga dan pertumbuhan ikan optimal.",
    image: "🐟",
    photos: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    ],
    videos: [
      {
        title: "Tutorial Budidaya Lele Bioflok",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "13:45",
      },
    ],
  },
  {
    id: 9,
    title: "Cabai Rawit Tembus Harga Rp 100 Ribu per Kg",
    category: "Ekonomi",
    date: "7 Januari 2025",
    excerpt:
      "Cuaca ekstrem menyebabkan kelangkaan cabai dan lonjakan harga di pasaran.",
    content:
      "Harga cabai rawit melonjak drastis akibat gagal panen di beberapa sentra produksi. Pemerintah melakukan operasi pasar dan impor untuk menstabilkan harga. Petani diminta mempercepat penanaman untuk memenuhi kebutuhan pasar.",
    image: "🌶️",
    photos: [
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    ],
    videos: [
      {
        title: "Analisis Lonjakan Harga Cabai",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "8:30",
      },
    ],
  },
  {
    id: 10,
    title: "Pertanian Vertikal Solusi Lahan Terbatas di Kota",
    category: "Teknologi",
    date: "6 Januari 2025",
    excerpt:
      "Urban farming dengan sistem vertikal menjadi tren di kota-kota besar.",
    content:
      "Sistem pertanian vertikal memungkinkan warga kota bercocok tanam di lahan terbatas. Dengan memanfaatkan dinding dan rak bertingkat, produktivitas per meter persegi meningkat hingga 10 kali lipat dibanding pertanian konvensional.",
    image: "🏙️",
    photos: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
    ],
    videos: [
      {
        title: "Inovasi Pertanian Vertikal di Jakarta",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "14:25",
      },
    ],
  },
  {
    id: 11,
    title: "Petani Organik Raih Sertifikasi Internasional",
    category: "Inspirasi",
    date: "5 Januari 2025",
    excerpt: "Produk pertanian organik Indonesia diakui standar internasional.",
    content:
      "Kelompok tani organik di Bali berhasil mendapat sertifikasi organik internasional. Pencapaian ini membuka peluang ekspor ke pasar premium Eropa dan Amerika dengan harga jual 3-4 kali lipat produk konvensional.",
    image: "🏆",
    photos: [
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop",
    ],
    videos: [
      {
        title: "Perjalanan Menuju Sertifikasi Organik",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "16:40",
      },
    ],
  },
  {
    id: 12,
    title: "Aplikasi Mobile Bantu Petani Akses Informasi",
    category: "Teknologi",
    date: "4 Januari 2025",
    excerpt:
      "Platform digital memudahkan petani mendapat informasi cuaca dan harga pasar.",
    content:
      "Aplikasi pertanian digital kini digunakan oleh lebih dari 500 ribu petani di Indonesia. Fitur prediksi cuaca, harga pasar real-time, dan konsultasi ahli gratis membantu petani membuat keputusan yang lebih baik.",
    image: "📱",
    photos: [
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
    ],
    videos: [
      {
        title: "Demo Aplikasi Pertanian Digital",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "9:15",
      },
    ],
  },
];

let filteredNews = [...newsData];
let selectedCategory = "Semua";

function renderCategories() {
  const categories = [
    "Semua",
    ...new Set(newsData.map((news) => news.category)),
  ];
  const container = document.getElementById("category-filters");
  const allLabel =
    config.all_category_label || NewsDefaultConfig.all_category_label;

  container.innerHTML = categories
    .map((cat) => {
      const displayName = cat === "Semua" ? allLabel : cat;
      const isActive = cat === selectedCategory;
      return `
          <button 
            class="category-badge px-4 py-2 rounded-full font-medium ${
              isActive ? "shadow-md" : "opacity-70"
            }"
            data-category="${cat}"
            style="background-color: ${
              isActive ? config.button_color : config.card_color
            }; 
                   color: ${isActive ? "#ffffff" : config.text_color};
                   border: 2px solid ${config.button_color};"
          >
            ${displayName}
          </button>
        `;
    })
    .join("");

  container.querySelectorAll(".category-badge").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedCategory = btn.dataset.category;
      filterNews();
    });
  });
}

function renderNewsCards() {
  const container = document.getElementById("news-grid");
  const noResults = document.getElementById("no-results");

  if (filteredNews.length === 0) {
    container.innerHTML = "";
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");

  container.innerHTML = filteredNews
    .map(
      (news) => `
        <article class="news-card rounded-lg shadow-md overflow-hidden" 
                 data-id="${news.id}"
                 style="background-color: ${config.card_color};">
          <div class="p-6">
            <div class="text-6xl mb-4 text-center">${news.image}</div>
            <div class="mb-2">
              <span class="inline-block px-3 py-1 rounded-full text-sm font-medium"
                    style="background-color: ${
                      config.button_color
                    }; color: #ffffff;">
                ${news.category}
              </span>
            </div>
            <h2 class="text-xl font-bold mb-2" 
                style="color: ${config.text_color}; 
                       font-family: ${
                         config.font_family
                       }, system-ui, sans-serif;
                       font-size: ${config.font_size * 1.25}px;">
              ${news.title}
            </h2>
            <p class="text-sm mb-3 opacity-60" 
               style="color: ${config.text_color};
                      font-family: ${config.font_family}, system-ui, sans-serif;
                      font-size: ${config.font_size * 0.875}px;">
              ${news.date}
            </p>
            <p class="mb-4" 
               style="color: ${config.text_color};
                      font-family: ${config.font_family}, system-ui, sans-serif;
                      font-size: ${config.font_size}px;">
              ${news.excerpt}
            </p>
            <button class="read-more px-4 py-2 rounded-lg font-medium transition-colors"
                    style="background-color: ${
                      config.button_color
                    }; color: #ffffff;">
              Baca Selengkapnya
            </button>
          </div>
        </article>
      `
    )
    .join("");

  container.querySelectorAll(".news-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      const newsId = parseInt(card.dataset.id);
      openModal(newsId);
    });
  });
}

function openModal(newsId) {
  const news = newsData.find((n) => n.id === newsId);
  if (!news) return;

  const modal = document.getElementById("news-modal");
  const modalBody = document.getElementById("modal-body");

  modalBody.innerHTML = `
        <div class="p-8">
          <button id="close-modal" class="absolute top-4 right-4 text-4xl font-bold opacity-60 hover:opacity-100 transition-opacity"
                  style="color: ${config.text_color};">
            ×
          </button>
          <div class="text-8xl mb-6 text-center">${news.image}</div>
          <div class="mb-4">
            <span class="inline-block px-4 py-2 rounded-full font-medium"
                  style="background-color: ${
                    config.button_color
                  }; color: #ffffff;">
              ${news.category}
            </span>
          </div>
          <h1 class="text-3xl font-bold mb-3" 
              style="color: ${config.text_color};
                     font-family: ${config.font_family}, system-ui, sans-serif;
                     font-size: ${config.font_size * 2}px;">
            ${news.title}
          </h1>
          <p class="text-sm mb-6 opacity-60" 
             style="color: ${config.text_color};
                    font-family: ${config.font_family}, system-ui, sans-serif;
                    font-size: ${config.font_size * 0.875}px;">
            ${news.date}
          </p>
          <div class="prose max-w-none mb-8" 
               style="color: ${config.text_color};
                      font-family: ${config.font_family}, system-ui, sans-serif;
                      font-size: ${config.font_size * 1.125}px;
                      line-height: 1.8;">
            <p class="mb-4">${news.excerpt}</p>
            <p class="mb-6">${news.content}</p>
          </div>

          ${
            news.photos && news.photos.length > 0
              ? `
            <div class="mb-8">
              <h3 class="text-xl font-bold mb-4" 
                  style="color: ${config.text_color};
                         font-family: ${
                           config.font_family
                         }, system-ui, sans-serif;
                         font-size: ${config.font_size * 1.25}px;">
                📸 Galeri Foto
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                ${news.photos
                  .map(
                    (photo, index) => `
                  <div class="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                       onclick="openPhotoViewer('${photo}', '${news.title}')">
                    <img src="${photo}" 
                         alt="Foto ${news.title} ${index + 1}"
                         class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                         onerror="this.src=''; this.alt='Foto gagal dimuat'; this.style.display='none';">
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          `
              : ""
          }

          ${
            news.videos && news.videos.length > 0
              ? `
            <div class="mb-8">
              <h3 class="text-xl font-bold mb-4" 
                  style="color: ${config.text_color};
                         font-family: ${
                           config.font_family
                         }, system-ui, sans-serif;
                         font-size: ${config.font_size * 1.25}px;">
                🎥 Video Terkait
              </h3>
              <div class="space-y-4">
                ${news.videos
                  .map(
                    (video) => `
                  <div class="rounded-lg overflow-hidden shadow-md" 
                       style="background-color: ${config.card_color};">
                    <div class="aspect-video">
                      <iframe 
                        src="${video.url}" 
                        title="${video.title}"
                        class="w-full h-full"
                        frameborder="0" 
                        allowfullscreen>
                      </iframe>
                    </div>
                    <div class="p-4">
                      <h4 class="font-semibold mb-2" 
                          style="color: ${config.text_color};
                                 font-family: ${
                                   config.font_family
                                 }, system-ui, sans-serif;
                                 font-size: ${config.font_size}px;">
                        ${video.title}
                      </h4>
                      <p class="text-sm opacity-60" 
                         style="color: ${config.text_color};
                                font-family: ${
                                  config.font_family
                                }, system-ui, sans-serif;
                                font-size: ${config.font_size * 0.875}px;">
                        ⏱️ Durasi: ${video.duration}
                      </p>
                    </div>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          `
              : ""
          }
        </div>
      `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  document.getElementById("close-modal").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

function closeModal() {
  const modal = document.getElementById("news-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function openPhotoViewer(photoUrl, newsTitle) {
  const photoModal = document.createElement("div");
  photoModal.className = "modal active";
  photoModal.style.zIndex = "1100";
  photoModal.innerHTML = `
        <div class="flex items-center justify-center p-4">
          <div class="relative max-w-4xl max-h-full">
            <button onclick="this.parentElement.parentElement.parentElement.remove(); document.body.style.overflow='hidden';" 
                    class="absolute -top-12 right-0 text-white text-4xl font-bold hover:opacity-70 transition-opacity z-10">
              ×
            </button>
            <img src="${photoUrl}" 
                 alt="${newsTitle}"
                 class="max-w-full max-h-screen object-contain rounded-lg shadow-2xl"
                 onerror="this.src=''; this.alt='Foto gagal dimuat'; this.parentElement.innerHTML='<p class=\\'text-white text-center\\'>Foto gagal dimuat</p>';">
          </div>
        </div>
      `;

  document.body.appendChild(photoModal);

  photoModal.addEventListener("click", (e) => {
    if (e.target === photoModal) {
      photoModal.remove();
      document.body.style.overflow = "hidden";
    }
  });
}

function filterNews() {
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();

  filteredNews = newsData.filter((news) => {
    const matchesCategory =
      selectedCategory === "Semua" || news.category === selectedCategory;
    const matchesSearch =
      news.title.toLowerCase().includes(searchTerm) ||
      news.excerpt.toLowerCase().includes(searchTerm) ||
      news.content.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  renderCategories();
  renderNewsCards();
}

async function onConfigChange(newConfig) {
  Object.assign(config, newConfig);

  document.body.style.backgroundColor = config.background_color;

  const header = document.getElementById("header");
  header.style.backgroundColor = config.header_color;
  header.style.color = "#ffffff";

  const filterSection = document.getElementById("filter-section");
  filterSection.style.backgroundColor = config.background_color;

  const siteTitle = document.getElementById("site-title");
  siteTitle.textContent = config.site_title || NewsDefaultConfig.site_title;
  siteTitle.style.fontFamily = `${config.font_family}, system-ui, sans-serif`;
  siteTitle.style.fontSize = `${config.font_size * 2.5}px`;

  const siteTagline = document.getElementById("site-tagline");
  siteTagline.textContent =
    config.site_tagline || NewsDefaultConfig.site_tagline;
  siteTagline.style.fontFamily = `${config.font_family}, system-ui, sans-serif`;
  siteTagline.style.fontSize = `${config.font_size * 1.125}px`;

  const searchInput = document.getElementById("search-input");
  searchInput.placeholder =
    config.search_placeholder || NewsDefaultConfig.search_placeholder;
  searchInput.style.borderColor = config.button_color;
  searchInput.style.color = config.text_color;
  searchInput.style.fontFamily = `${config.font_family}, system-ui, sans-serif`;
  searchInput.style.fontSize = `${config.font_size}px`;

  renderCategories();
  renderNewsCards();
}

if (window.elementSdk) {
  window.elementSdk.init({
    NewsDefaultConfig,
    onConfigChange,
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () =>
            config.background_color || NewsDefaultConfig.background_color,
          set: (value) => {
            config.background_color = value;
            window.elementSdk.setConfig({ background_color: value });
          },
        },
        {
          get: () => config.header_color || NewsDefaultConfig.header_color,
          set: (value) => {
            config.header_color = value;
            window.elementSdk.setConfig({ header_color: value });
          },
        },
        {
          get: () => config.card_color || NewsDefaultConfig.card_color,
          set: (value) => {
            config.card_color = value;
            window.elementSdk.setConfig({ card_color: value });
          },
        },
        {
          get: () => config.text_color || NewsDefaultConfig.text_color,
          set: (value) => {
            config.text_color = value;
            window.elementSdk.setConfig({ text_color: value });
          },
        },
        {
          get: () => config.button_color || NewsDefaultConfig.button_color,
          set: (value) => {
            config.button_color = value;
            window.elementSdk.setConfig({ button_color: value });
          },
        },
      ],
      borderables: [],
      fontEditable: {
        get: () => config.font_family || NewsDefaultConfig.font_family,
        set: (value) => {
          config.font_family = value;
          window.elementSdk.setConfig({ font_family: value });
        },
      },
      fontSizeable: {
        get: () => config.font_size || NewsDefaultConfig.font_size,
        set: (value) => {
          config.font_size = value;
          window.elementSdk.setConfig({ font_size: value });
        },
      },
    }),
    mapToEditPanelValues: (config) =>
      new Map([
        ["site_title", config.site_title || NewsDefaultConfig.site_title],
        ["site_tagline", config.site_tagline || NewsDefaultConfig.site_tagline],
        [
          "search_placeholder",
          config.search_placeholder || NewsDefaultConfig.search_placeholder,
        ],
        [
          "all_category_label",
          config.all_category_label || NewsDefaultConfig.all_category_label,
        ],
      ]),
  });
}

document.getElementById("search-input").addEventListener("input", filterNews);

document.addEventListener("DOMContentLoaded", () => {
  onConfigChange(config);
});
