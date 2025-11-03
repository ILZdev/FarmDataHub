// Data contoh transaksi pertanian
const sampleTransactions = [
  // Transaksi Timun - November 2024
  {
    jenis: "pengeluaran",
    kategori: "bibit",
    nominal: 150000,
    komoditas: "timun",
    tanggal: "2024-11-01",
    keterangan: "Bibit timun hibrida 500 biji",
  },
  {
    jenis: "pengeluaran",
    kategori: "pupuk",
    nominal: 200000,
    komoditas: "timun",
    tanggal: "2024-11-02",
    keterangan: "Pupuk NPK 25kg",
  },
  {
    jenis: "pengeluaran",
    kategori: "pestisida",
    nominal: 120000,
    komoditas: "timun",
    tanggal: "2024-11-05",
    keterangan: "Insektisida dan fungisida",
  },
  {
    jenis: "pengeluaran",
    kategori: "upah_buruh",
    nominal: 300000,
    komoditas: "timun",
    tanggal: "2024-11-10",
    keterangan: "Upah tanam dan perawatan",
  },
  {
    jenis: "pemasukan",
    kategori: "panen",
    nominal: 1200000,
    komoditas: "timun",
    tanggal: "2024-11-25",
    keterangan: "Panen timun 120kg @ Rp10.000",
  },
  {
    jenis: "pemasukan",
    kategori: "panen",
    nominal: 800000,
    komoditas: "timun",
    tanggal: "2024-11-28",
    keterangan: "Panen timun 80kg @ Rp10.000",
  },

  // Transaksi Cabai - November 2024
  {
    jenis: "pengeluaran",
    kategori: "bibit",
    nominal: 180000,
    komoditas: "cabai",
    tanggal: "2024-11-03",
    keterangan: "Bibit cabai rawit 300 batang",
  },
  {
    jenis: "pengeluaran",
    kategori: "pupuk",
    nominal: 250000,
    komoditas: "cabai",
    tanggal: "2024-11-04",
    keterangan: "Pupuk kandang dan NPK",
  },
  {
    jenis: "pengeluaran",
    kategori: "pestisida",
    nominal: 180000,
    komoditas: "cabai",
    tanggal: "2024-11-08",
    keterangan: "Pestisida khusus cabai",
  },
  {
    jenis: "pengeluaran",
    kategori: "upah_buruh",
    nominal: 400000,
    komoditas: "cabai",
    tanggal: "2024-11-12",
    keterangan: "Upah tanam dan pemeliharaan",
  },
  {
    jenis: "pemasukan",
    kategori: "panen",
    nominal: 1800000,
    komoditas: "cabai",
    tanggal: "2024-11-26",
    keterangan: "Panen cabai 60kg @ Rp30.000",
  },
  {
    jenis: "pemasukan",
    kategori: "panen",
    nominal: 1500000,
    komoditas: "cabai",
    tanggal: "2024-11-29",
    keterangan: "Panen cabai 50kg @ Rp30.000",
  },

  // Transaksi Bawang Merah - Oktober 2024
  {
    jenis: "pengeluaran",
    kategori: "bibit",
    nominal: 300000,
    komoditas: "bawang_merah",
    tanggal: "2024-10-01",
    keterangan: "Bibit bawang merah 15kg",
  },
  {
    jenis: "pengeluaran",
    kategori: "pupuk",
    nominal: 180000,
    komoditas: "bawang_merah",
    tanggal: "2024-10-02",
    keterangan: "Pupuk organik dan NPK",
  },
  {
    jenis: "pengeluaran",
    kategori: "pestisida",
    nominal: 100000,
    komoditas: "bawang_merah",
    tanggal: "2024-10-05",
    keterangan: "Fungisida untuk bawang",
  },
  {
    jenis: "pengeluaran",
    kategori: "upah_buruh",
    nominal: 350000,
    komoditas: "bawang_merah",
    tanggal: "2024-10-08",
    keterangan: "Upah tanam dan penyiangan",
  },
  {
    jenis: "pemasukan",
    kategori: "panen",
    nominal: 2400000,
    komoditas: "bawang_merah",
    tanggal: "2024-10-28",
    keterangan: "Panen bawang merah 80kg @ Rp30.000",
  },

  // Transaksi Tomat - Oktober 2024
  {
    jenis: "pengeluaran",
    kategori: "bibit",
    nominal: 120000,
    komoditas: "tomat",
    tanggal: "2024-10-05",
    keterangan: "Bibit tomat 200 batang",
  },
  {
    jenis: "pengeluaran",
    kategori: "pupuk",
    nominal: 220000,
    komoditas: "tomat",
    tanggal: "2024-10-06",
    keterangan: "Pupuk kandang dan NPK",
  },
  {
    jenis: "pengeluaran",
    kategori: "pestisida",
    nominal: 150000,
    komoditas: "tomat",
    tanggal: "2024-10-10",
    keterangan: "Pestisida dan fungisida tomat",
  },
  {
    jenis: "pengeluaran",
    kategori: "upah_buruh",
    nominal: 380000,
    komoditas: "tomat",
    tanggal: "2024-10-15",
    keterangan: "Upah tanam dan perawatan",
  },
  {
    jenis: "pemasukan",
    kategori: "panen",
    nominal: 1600000,
    komoditas: "tomat",
    tanggal: "2024-10-30",
    keterangan: "Panen tomat 160kg @ Rp10.000",
  },

  // Transaksi Umum - September 2024
  {
    jenis: "pengeluaran",
    kategori: "sewa_lahan",
    nominal: 2000000,
    komoditas: "lainnya",
    tanggal: "2024-09-01",
    keterangan: "Sewa lahan 1 hektar per musim",
  },
  {
    jenis: "pengeluaran",
    kategori: "alat_pertanian",
    nominal: 500000,
    komoditas: "lainnya",
    tanggal: "2024-09-05",
    keterangan: "Cangkul, sabit, dan alat lainnya",
  },
  {
    jenis: "pengeluaran",
    kategori: "transportasi",
    nominal: 150000,
    komoditas: "lainnya",
    tanggal: "2024-09-10",
    keterangan: "Ongkos angkut hasil panen",
  },
  {
    jenis: "pengeluaran",
    kategori: "irigasi",
    nominal: 300000,
    komoditas: "lainnya",
    tanggal: "2024-09-15",
    keterangan: "Biaya air irigasi",
  },
  {
    jenis: "pemasukan",
    kategori: "subsidi",
    nominal: 1000000,
    komoditas: "lainnya",
    tanggal: "2024-09-20",
    keterangan: "Subsidi pupuk dari pemerintah",
  },
];

// Konfigurasi default
const defaultConfigMoney = {
  app_title: "Laporan Keuangan Pertanian",
  income_label: "Total Pemasukan",
  expense_label: "Total Pengeluaran",
  profit_label: "Laba/Rugi",
};

let transactions = sampleTransactions;
let filteredTransactions = [];

// Inisialisasi aplikasi
async function initializeApp() {
  // Inisialisasi Element SDK
  if (window.elementSdk) {
    await window.elementSdk.init({
      defaultConfigMoney,
      onConfigChange: async (config) => {
        document.getElementById("app-title").textContent =
          config.app_title || defaultConfigMoney.app_title;
        document.getElementById("income-label").textContent =
          config.income_label || defaultConfigMoney.income_label;
        document.getElementById("expense-label").textContent =
          config.expense_label || defaultConfigMoney.expense_label;
        document.getElementById("profit-label").textContent =
          config.profit_label || defaultConfigMoney.profit_label;
      },
      mapToCapabilities: (config) => ({
        recolorables: [
          {
            get: () => config.background_color || "#f0fdf4",
            set: (value) => {
              document.body.style.backgroundColor = value;
              config.background_color = value;
              window.elementSdk.setConfig({ background_color: value });
            },
          },
          {
            get: () => config.surface_color || "#ffffff",
            set: (value) => {
              const surfaces = document.querySelectorAll(".bg-white");
              surfaces.forEach((el) => (el.style.backgroundColor = value));
              config.surface_color = value;
              window.elementSdk.setConfig({ surface_color: value });
            },
          },
          {
            get: () => config.primary_color || "#059669",
            set: (value) => {
              const primaryElements = document.querySelectorAll(
                ".text-green-800, .text-green-600"
              );
              primaryElements.forEach((el) => (el.style.color = value));
              config.primary_color = value;
              window.elementSdk.setConfig({ primary_color: value });
            },
          },
          {
            get: () => config.text_color || "#374151",
            set: (value) => {
              const textElements = document.querySelectorAll(
                ".text-gray-800, .text-gray-700, .text-gray-900"
              );
              textElements.forEach((el) => (el.style.color = value));
              config.text_color = value;
              window.elementSdk.setConfig({ text_color: value });
            },
          },
          {
            get: () => config.accent_color || "#dc2626",
            set: (value) => {
              const accentElements = document.querySelectorAll(".text-red-600");
              accentElements.forEach((el) => (el.style.color = value));
              config.accent_color = value;
              window.elementSdk.setConfig({ accent_color: value });
            },
          },
        ],
        borderables: [],
        fontEditable: {
          get: () => config.font_family || "system-ui",
          set: (value) => {
            document.body.style.fontFamily = `${value}, system-ui, sans-serif`;
            config.font_family = value;
            window.elementSdk.setConfig({ font_family: value });
          },
        },
        fontSizeable: {
          get: () => config.font_size || 16,
          set: (value) => {
            document.body.style.fontSize = `${value}px`;
            const headings = document.querySelectorAll("h1, h2, h3");
            headings.forEach((h) => {
              if (h.tagName === "H1") h.style.fontSize = `${value * 1.875}px`;
              if (h.tagName === "H2") h.style.fontSize = `${value * 1.25}px`;
              if (h.tagName === "H3") h.style.fontSize = `${value * 0.875}px`;
            });
            config.font_size = value;
            window.elementSdk.setConfig({ font_size: value });
          },
        },
      }),
      mapToEditPanelValues: (config) =>
        new Map([
          ["app_title", config.app_title || defaultConfigMoney.app_title],
          [
            "income_label",
            config.income_label || defaultConfigMoney.income_label,
          ],
          [
            "expense_label",
            config.expense_label || defaultConfigMoney.expense_label,
          ],
          [
            "profit_label",
            config.profit_label || defaultConfigMoney.profit_label,
          ],
        ]),
    });
  }

  setupEventListeners();
  applyFilters();
  updateSummary();
  renderTransactions();
  updateFilterOptions();
}

function setupEventListeners() {
  // Filter changes
  document
    .getElementById("filter-komoditas")
    .addEventListener("change", applyFilters);
  document
    .getElementById("filter-jenis")
    .addEventListener("change", applyFilters);
  document
    .getElementById("filter-dari")
    .addEventListener("change", applyFilters);
  document
    .getElementById("filter-sampai")
    .addEventListener("change", applyFilters);
}

function applyFilters() {
  const komoditasFilter = document.getElementById("filter-komoditas").value;
  const jenisFilter = document.getElementById("filter-jenis").value;
  const dariFilter = document.getElementById("filter-dari").value;
  const sampaiFilter = document.getElementById("filter-sampai").value;

  filteredTransactions = transactions.filter((transaction) => {
    if (komoditasFilter && transaction.komoditas !== komoditasFilter)
      return false;
    if (jenisFilter && transaction.jenis !== jenisFilter) return false;
    if (dariFilter && transaction.tanggal < dariFilter) return false;
    if (sampaiFilter && transaction.tanggal > sampaiFilter) return false;
    return true;
  });

  renderTransactions();
  updateSummary();
}

function renderTransactions() {
  const tbody = document.getElementById("transactions-table");
  const emptyState = document.getElementById("empty-state");

  // Clear all existing rows except empty state
  const existingRows = tbody.querySelectorAll("tr:not(#empty-state)");
  existingRows.forEach((row) => row.remove());

  if (filteredTransactions.length === 0) {
    emptyState.style.display = "table-row";
    return;
  }

  emptyState.style.display = "none";

  // Sort transactions by date (newest first)
  const sortedTransactions = [...filteredTransactions].sort(
    (a, b) => new Date(b.tanggal) - new Date(a.tanggal)
  );

  // Create and append all rows
  sortedTransactions.forEach((transaction, index) => {
    const row = createTransactionRow(transaction, index);
    tbody.appendChild(row);
  });
}

function createTransactionRow(transaction, index) {
  const row = document.createElement("tr");
  row.dataset.id = index; // Use index as unique identifier
  row.className = "hover:bg-gray-50";

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const jenisClass =
    transaction.jenis === "pemasukan"
      ? "text-green-600 bg-green-100"
      : "text-red-600 bg-red-100";

  row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${formatDate(
                  transaction.tanggal
                )}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 py-1 text-xs font-medium rounded-full ${jenisClass}">
                        ${
                          transaction.jenis.charAt(0).toUpperCase() +
                          transaction.jenis.slice(1)
                        }
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${transaction.kategori
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${transaction.komoditas
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ${
                  transaction.jenis === "pemasukan"
                    ? "text-green-600"
                    : "text-red-600"
                }">
                    ${formatCurrency(transaction.nominal)}
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">${
                  transaction.keterangan || "-"
                }</td>
            `;

  return row;
}

function updateSummary() {
  const totalIncome = filteredTransactions
    .filter((t) => t.jenis === "pemasukan")
    .reduce((sum, t) => sum + t.nominal, 0);

  const totalExpense = filteredTransactions
    .filter((t) => t.jenis === "pengeluaran")
    .reduce((sum, t) => sum + t.nominal, 0);

  const profit = totalIncome - totalExpense;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  document.getElementById("total-income").textContent =
    formatCurrency(totalIncome);
  document.getElementById("total-expense").textContent =
    formatCurrency(totalExpense);
  document.getElementById("total-transactions").textContent =
    filteredTransactions.length;

  const profitElement = document.getElementById("total-profit");
  profitElement.textContent = formatCurrency(profit);

  // Update profit styling
  profitElement.className = "text-2xl font-bold px-3 py-1 rounded-lg";
  if (profit > 0) {
    profitElement.classList.add("profit-positive");
  } else if (profit < 0) {
    profitElement.classList.add("profit-negative");
  } else {
    profitElement.classList.add("text-gray-600", "bg-gray-100");
  }
}

function updateFilterOptions() {
  const komoditasSet = new Set(transactions.map((t) => t.komoditas));
  const filterKomoditas = document.getElementById("filter-komoditas");

  // Save current selection
  const currentValue = filterKomoditas.value;

  // Clear and rebuild options
  filterKomoditas.innerHTML = '<option value="">Semua Komoditas</option>';

  Array.from(komoditasSet)
    .sort()
    .forEach((komoditas) => {
      const option = document.createElement("option");
      option.value = komoditas;
      option.textContent = komoditas
        .replace(/_/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      filterKomoditas.appendChild(option);
    });

  // Restore selection if still valid
  if (komoditasSet.has(currentValue)) {
    filterKomoditas.value = currentValue;
  }
}

// Initialize app when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeApp);
