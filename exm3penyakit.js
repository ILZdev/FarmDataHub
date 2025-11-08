// Data penyakit tanaman
const penyakitData = [
  {
    nama: "Busuk Akar",
    gejala: "Daun menguning, tanaman layu meski tanah lembap.",
    penyebab: "Jamur Fusarium oxysporum.",
    solusi:
      "Gunakan fungisida berbahan aktif mankozeb, perbaiki drainase, hindari genangan air.",
    komoditas: ["Timun", "Cabai"],
    status: "aktif",
  },
  {
    nama: "Antraknosa",
    gejala: "Muncul bercak coklat kehitaman pada buah dan daun.",
    penyebab: "Jamur Colletotrichum capsici.",
    solusi: "Buang bagian tanaman yang terinfeksi, semprot fungisida tembaga.",
    komoditas: ["Cabai", "Bawang Merah"],
    status: "teratasi",
  },
  {
    nama: "Embun Tepung",
    gejala: "Daun tampak berdebu putih, pertumbuhan terhambat.",
    penyebab: "Jamur Oidium sp.",
    solusi: "Gunakan sulfur cair, tingkatkan sirkulasi udara antar tanaman.",
    komoditas: ["Timun"],
    status: "aktif",
  },
  {
    nama: "Layu Bakteri",
    gejala: "Tanaman layu mendadak, batang menghitam dari dalam.",
    penyebab: "Bakteri Ralstonia solanacearum.",
    solusi:
      "Cabut dan musnahkan tanaman terinfeksi, rotasi tanaman, gunakan varietas tahan.",
    komoditas: ["Cabai", "Tomat"],
    status: "aktif",
  },
  {
    nama: "Bercak Daun",
    gejala: "Bercak coklat dengan tepi kuning pada daun.",
    penyebab: "Jamur Cercospora sp.",
    solusi:
      "Semprot fungisida sistemik, buang daun terinfeksi, jaga jarak tanam.",
    komoditas: ["Bawang Merah", "Timun"],
    status: "teratasi",
  },
];

// Default config
const PenyakitDefaultConfig = {
  page_title: "Data Penyakit Tanaman",
  page_subtitle: "Pusat Informasi Penyakit Pertanian",
  filter_label: "Filter Komoditas",
  background_color: "#667eea",
  surface_color: "#ffffff",
  text_color: "#374151",
  primary_action_color: "#7c3aed",
  secondary_action_color: "#a78bfa",
  font_family: "system-ui",
  font_size: 16,
};

// Populate filter dropdown
function populateFilter() {
  const filterSelect = document.getElementById("komoditasFilter");
  const allKomoditas = new Set();

  penyakitData.forEach((penyakit) => {
    penyakit.komoditas.forEach((k) => allKomoditas.add(k));
  });

  const sortedKomoditas = Array.from(allKomoditas).sort();
  sortedKomoditas.forEach((komoditas) => {
    const option = document.createElement("option");
    option.value = komoditas;
    option.textContent = komoditas;
    filterSelect.appendChild(option);
  });
}

// Current view state
let currentView = "cards"; // 'cards' or 'table'

// Render cards
function renderCards(filter = "Semua") {
  const cardsContainer = document.getElementById("cardsContainer");
  const emptyState = document.getElementById("emptyState");
  const totalCount = document.getElementById("totalCount");

  const filteredData =
    filter === "Semua"
      ? penyakitData
      : penyakitData.filter((p) => p.komoditas.includes(filter));

  if (filteredData.length === 0) {
    cardsContainer.classList.add("hidden");
    emptyState.classList.remove("hidden");
    totalCount.textContent = "0";
    return;
  }

  cardsContainer.classList.remove("hidden");
  emptyState.classList.add("hidden");
  totalCount.textContent = filteredData.length;

  cardsContainer.innerHTML = filteredData
    .map((penyakit, index) => {
      const statusColor =
        penyakit.status === "aktif"
          ? "bg-red-100 text-red-800 border-red-300"
          : "bg-green-100 text-green-800 border-green-300";

      const statusIcon = penyakit.status === "aktif" ? "🔴" : "✅";
      const statusText = penyakit.status === "aktif" ? "Aktif" : "Teratasi";

      const komoditasTags = penyakit.komoditas
        .map(
          (k) =>
            `<span class="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs mr-1 mb-1 font-medium">${k}</span>`
        )
        .join("");

      const cardGradients = [
        "from-blue-50 to-indigo-100",
        "from-green-50 to-emerald-100",
        "from-purple-50 to-violet-100",
        "from-pink-50 to-rose-100",
        "from-yellow-50 to-amber-100",
      ];

      const gradient = cardGradients[index % cardGradients.length];

      return `
          <div class="bg-gradient-to-br ${gradient} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50">
            <div class="p-6">
              <!-- Header -->
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-bold text-gray-800 leading-tight">${
                  penyakit.nama
                }</h3>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${statusColor} ml-2 flex-shrink-0">
                  ${statusIcon} ${statusText}
                </span>
              </div>
              
              <!-- Content -->
              <div class="space-y-3 mb-4">
                <div>
                  <h4 class="text-sm font-semibold text-gray-600 mb-1">🔍 Gejala:</h4>
                  <p class="text-sm text-gray-700 leading-relaxed">${
                    penyakit.gejala.length > 80
                      ? penyakit.gejala.substring(0, 80) + "..."
                      : penyakit.gejala
                  }</p>
                </div>
                
                <div>
                  <h4 class="text-sm font-semibold text-gray-600 mb-1">🦠 Penyebab:</h4>
                  <p class="text-sm text-gray-700">${penyakit.penyebab}</p>
                </div>
                
                <div>
                  <h4 class="text-sm font-semibold text-gray-600 mb-2">🌱 Komoditas Terdampak:</h4>
                  <div class="flex flex-wrap">${komoditasTags}</div>
                </div>
              </div>
              
              <!-- Action Button -->
              <div class="pt-4 border-t border-white/30">
                <button onclick="openDetailLink('${
                  penyakit.nama
                }')" class="w-full bg-white/80 hover:bg-white text-purple-700 font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-md border border-purple-200 hover:border-purple-300">
                  📖 Lihat Selengkapnya
                </button>
              </div>
            </div>
          </div>
        `;
    })
    .join("");
}

// Render table
function renderTable(filter = "Semua") {
  const tableBody = document.getElementById("tableBody");
  const emptyState = document.getElementById("emptyState");
  const tableContainer = document.getElementById("tableContainer");
  const totalCount = document.getElementById("totalCount");

  const filteredData =
    filter === "Semua"
      ? penyakitData
      : penyakitData.filter((p) => p.komoditas.includes(filter));

  if (filteredData.length === 0) {
    tableContainer.classList.add("hidden");
    emptyState.classList.remove("hidden");
    totalCount.textContent = "0";
    return;
  }

  tableContainer.classList.remove("hidden");
  emptyState.classList.add("hidden");
  totalCount.textContent = filteredData.length;

  tableBody.innerHTML = filteredData
    .map((penyakit) => {
      const statusColor =
        penyakit.status === "aktif"
          ? "bg-red-100 text-red-800 border-red-300"
          : "bg-green-100 text-green-800 border-green-300";

      const komoditasTags = penyakit.komoditas
        .map(
          (k) =>
            `<span class="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs mr-1 mb-1">${k}</span>`
        )
        .join("");

      return `
          <tr class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4">
              <div class="font-semibold text-gray-900">${penyakit.nama}</div>
            </td>
            <td class="px-6 py-4 text-sm text-gray-700">${
              penyakit.gejala.length > 60
                ? penyakit.gejala.substring(0, 60) + "..."
                : penyakit.gejala
            }</td>
            <td class="px-6 py-4 text-sm text-gray-700">${
              penyakit.penyebab
            }</td>
            <td class="px-6 py-4 text-sm text-gray-700">${
              penyakit.solusi.length > 60
                ? penyakit.solusi.substring(0, 60) + "..."
                : penyakit.solusi
            }</td>
            <td class="px-6 py-4">
              <div class="flex flex-wrap">${komoditasTags}</div>
            </td>
            <td class="px-6 py-4">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${statusColor}">
                ${penyakit.status === "aktif" ? "🔴 Aktif" : "✅ Teratasi"}
              </span>
            </td>
            <td class="px-6 py-4">
              <button onclick="openDetailLink('${
                penyakit.nama
              }')" class="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
                Selengkapnya
              </button>
            </td>
          </tr>
        `;
    })
    .join("");
}

// Render current view
function renderCurrentView(filter = "Semua") {
  if (currentView === "cards") {
    renderCards(filter);
    document.getElementById("cardsContainer").classList.remove("hidden");
    document.getElementById("tableContainer").classList.add("hidden");
  } else {
    renderTable(filter);
    document.getElementById("cardsContainer").classList.add("hidden");
    document.getElementById("tableContainer").classList.remove("hidden");
  }
}

// Open detail link function
function openDetailLink(penyakitNama) {
  // You can customize these URLs as needed
  const detailLinks = {
    "Busuk Akar": "https://example.com/penyakit/busuk-akar",
    Antraknosa: "https://example.com/penyakit/antraknosa",
    "Embun Tepung": "https://example.com/penyakit/embun-tepung",
    "Layu Bakteri": "https://example.com/penyakit/layu-bakteri",
    "Bercak Daun": "https://example.com/penyakit/bercak-daun",
  };

  const url =
    detailLinks[penyakitNama] || "https://example.com/penyakit/detail";
  window.open(url, "_blank", "noopener,noreferrer");
}

// Filter event listener
document.getElementById("komoditasFilter").addEventListener("change", (e) => {
  renderCurrentView(e.target.value);
});

// View toggle event listeners
document.getElementById("viewToggle").addEventListener("click", () => {
  const button = document.getElementById("viewToggle");
  if (currentView === "cards") {
    currentView = "table";
    button.innerHTML = "📋 Tampilan Kartu";
    button.classList.remove(
      "text-purple-600",
      "border-purple-200",
      "hover:border-purple-400"
    );
    button.classList.add(
      "text-blue-600",
      "border-blue-200",
      "hover:border-blue-400"
    );
  } else {
    currentView = "cards";
    button.innerHTML = "📊 Tampilan Tabel";
    button.classList.remove(
      "text-blue-600",
      "border-blue-200",
      "hover:border-blue-400"
    );
    button.classList.add(
      "text-purple-600",
      "border-purple-200",
      "hover:border-purple-400"
    );
  }

  const currentFilter = document.getElementById("komoditasFilter").value;
  renderCurrentView(currentFilter);
});

// Element SDK implementation
async function onConfigChange(config) {
  const baseSize = config.font_size || PenyakitDefaultConfig.font_size;
  const customFont = config.font_family || PenyakitDefaultConfig.font_family;
  const baseFontStack = "system-ui, -apple-system, sans-serif";

  // Update text content
  document.getElementById("pageTitle").textContent =
    config.page_title || PenyakitDefaultConfig.page_title;
  document.getElementById("pageSubtitle").textContent =
    config.page_subtitle || PenyakitDefaultConfig.page_subtitle;
  document.getElementById("filterLabel").textContent =
    config.filter_label || PenyakitDefaultConfig.filter_label;

  // Update colors
  const backgroundColor =
    config.background_color || PenyakitDefaultConfig.background_color;
  const surfaceColor =
    config.surface_color || PenyakitDefaultConfig.surface_color;
  const textColor = config.text_color || PenyakitDefaultConfig.text_color;
  const primaryColor =
    config.primary_action_color || PenyakitDefaultConfig.primary_action_color;

  document.querySelector(
    "body > div"
  ).style.background = `linear-gradient(135deg, ${backgroundColor} 0%, ${primaryColor} 100%)`;

  const surfaces = document.querySelectorAll(".bg-white");
  surfaces.forEach((el) => (el.style.backgroundColor = surfaceColor));

  const textElements = document.querySelectorAll(
    ".text-gray-700, .text-gray-600, .text-gray-900"
  );
  textElements.forEach((el) => (el.style.color = textColor));

  // Update fonts
  document.getElementById(
    "pageTitle"
  ).style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.getElementById("pageTitle").style.fontSize = `${baseSize * 2}px`;

  document.getElementById(
    "pageSubtitle"
  ).style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.getElementById("pageSubtitle").style.fontSize = `${
    baseSize * 1.25
  }px`;

  document.getElementById(
    "filterLabel"
  ).style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.getElementById("filterLabel").style.fontSize = `${
    baseSize * 1.125
  }px`;

  const tableHeaders = document.querySelectorAll("thead th");
  tableHeaders.forEach((el) => {
    el.style.fontFamily = `${customFont}, ${baseFontStack}`;
    el.style.fontSize = `${baseSize * 0.875}px`;
    el.style.backgroundColor = primaryColor;
  });

  const bodyText = document.querySelectorAll("tbody td");
  bodyText.forEach((el) => {
    el.style.fontFamily = `${customFont}, ${baseFontStack}`;
    el.style.fontSize = `${baseSize * 0.875}px`;
  });
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () =>
          config.background_color || PenyakitDefaultConfig.background_color,
        set: (value) => {
          if (window.elementSdk) {
            window.elementSdk.config.background_color = value;
            window.elementSdk.setConfig({ background_color: value });
          }
        },
      },
      {
        get: () => config.surface_color || PenyakitDefaultConfig.surface_color,
        set: (value) => {
          if (window.elementSdk) {
            window.elementSdk.config.surface_color = value;
            window.elementSdk.setConfig({ surface_color: value });
          }
        },
      },
      {
        get: () => config.text_color || PenyakitDefaultConfig.text_color,
        set: (value) => {
          if (window.elementSdk) {
            window.elementSdk.config.text_color = value;
            window.elementSdk.setConfig({ text_color: value });
          }
        },
      },
      {
        get: () =>
          config.primary_action_color ||
          PenyakitDefaultConfig.primary_action_color,
        set: (value) => {
          if (window.elementSdk) {
            window.elementSdk.config.primary_action_color = value;
            window.elementSdk.setConfig({ primary_action_color: value });
          }
        },
      },
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || PenyakitDefaultConfig.font_family,
      set: (value) => {
        if (window.elementSdk) {
          window.elementSdk.config.font_family = value;
          window.elementSdk.setConfig({ font_family: value });
        }
      },
    },
    fontSizeable: {
      get: () => config.font_size || PenyakitDefaultConfig.font_size,
      set: (value) => {
        if (window.elementSdk) {
          window.elementSdk.config.font_size = value;
          window.elementSdk.setConfig({ font_size: value });
        }
      },
    },
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["page_title", config.page_title || PenyakitDefaultConfig.page_title],
    [
      "page_subtitle",
      config.page_subtitle || PenyakitDefaultConfig.page_subtitle,
    ],
    ["filter_label", config.filter_label || PenyakitDefaultConfig.filter_label],
  ]);
}

// Initialize
if (window.elementSdk) {
  window.elementSdk.init({
    PenyakitDefaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues,
  });
}

populateFilter();
renderCurrentView();
