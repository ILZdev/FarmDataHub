// Configuration
const defaultConfigInventory = {
  dashboard_title: "Manajemen Inventori Pertanian",
  farm_name: "Kebun Makmur",
  notification_text: "Ada barang yang perlu diperhatikan!",
  primary_color: "#16a34a",
  surface_color: "#ffffff",
  text_color: "#1f2937",
  warning_color: "#eab308",
  danger_color: "#dc2626",
};

// Sample inventory data
const inventory = [
  {
    id: "1",
    nama: "Pupuk Urea",
    jumlah: 25,
    satuan: "kg",
    komoditas: "Timun",
    stok_minimum: 50,
  },
  {
    id: "2",
    nama: "Selang Air",
    jumlah: 5,
    satuan: "unit",
    komoditas: "Bawang Merah",
    stok_minimum: 3,
  },
  {
    id: "3",
    nama: "Benih Cabai",
    jumlah: 0,
    satuan: "kg",
    komoditas: "Cabai",
    stok_minimum: 2,
  },
  {
    id: "4",
    nama: "Pestisida Organik",
    jumlah: 8,
    satuan: "liter",
    komoditas: "Timun",
    stok_minimum: 10,
  },
  {
    id: "5",
    nama: "Cangkul",
    jumlah: 12,
    satuan: "unit",
    komoditas: "Bawang Merah",
    stok_minimum: 5,
  },
  {
    id: "6",
    nama: "Pupuk Kompos",
    jumlah: 150,
    satuan: "karung",
    komoditas: "Cabai",
    stok_minimum: 20,
  },
  {
    id: "7",
    nama: "Sprayer Manual",
    jumlah: 3,
    satuan: "unit",
    komoditas: "Timun",
    stok_minimum: 2,
  },
  {
    id: "8",
    nama: "Mulsa Plastik",
    jumlah: 45,
    satuan: "meter",
    komoditas: "Bawang Merah",
    stok_minimum: 100,
  },
  {
    id: "9",
    nama: "Pupuk NPK",
    jumlah: 2,
    satuan: "karung",
    komoditas: "Cabai",
    stok_minimum: 15,
  },
  {
    id: "10",
    nama: "Sekop Kecil",
    jumlah: 8,
    satuan: "unit",
    komoditas: "Timun",
    stok_minimum: 4,
  },
  {
    id: "11",
    nama: "Fungisida",
    jumlah: 0,
    satuan: "botol",
    komoditas: "Bawang Merah",
    stok_minimum: 5,
  },
  {
    id: "12",
    nama: "Tali Rafia",
    jumlah: 25,
    satuan: "unit",
    komoditas: "Cabai",
    stok_minimum: 10,
  },
];

let notificationTimeout = null;

// Element SDK configuration
const elementConfig = {
  defaultConfigInventory,
  onConfigChange: async (config) => {
    document.getElementById("dashboard-title").textContent =
      config.dashboard_title || defaultConfigInventory.dashboard_title;
    document.getElementById("farm-name").textContent =
      config.farm_name || defaultConfigInventory.farm_name;

    // Apply colors
    const primaryColor =
      config.primary_color || defaultConfigInventory.primary_color;
    const surfaceColor =
      config.surface_color || defaultConfigInventory.surface_color;
    const textColor = config.text_color || defaultConfigInventory.text_color;
    const warningColor =
      config.warning_color || defaultConfigInventory.warning_color;
    const dangerColor =
      config.danger_color || defaultConfigInventory.danger_color;

    document.documentElement.style.setProperty("--primary-color", primaryColor);
    document.documentElement.style.setProperty("--surface-color", surfaceColor);
    document.documentElement.style.setProperty("--text-color", textColor);
    document.documentElement.style.setProperty("--warning-color", warningColor);
    document.documentElement.style.setProperty("--danger-color", dangerColor);
  },
  mapToCapabilities: (config) => ({
    recolorables: [
      {
        get: () => config.primary_color || defaultConfigInventory.primary_color,
        set: (value) => {
          if (window.elementSdk) {
            window.elementSdk.setConfig({ primary_color: value });
          }
        },
      },
      {
        get: () => config.surface_color || defaultConfigInventory.surface_color,
        set: (value) => {
          if (window.elementSdk) {
            window.elementSdk.setConfig({ surface_color: value });
          }
        },
      },
      {
        get: () => config.text_color || defaultConfigInventory.text_color,
        set: (value) => {
          if (window.elementSdk) {
            window.elementSdk.setConfig({ text_color: value });
          }
        },
      },
      {
        get: () => config.warning_color || defaultConfigInventory.warning_color,
        set: (value) => {
          if (window.elementSdk) {
            window.elementSdk.setConfig({ warning_color: value });
          }
        },
      },
      {
        get: () => config.danger_color || defaultConfigInventory.danger_color,
        set: (value) => {
          if (window.elementSdk) {
            window.elementSdk.setConfig({ danger_color: value });
          }
        },
      },
    ],
    borderables: [],
    fontEditable: undefined,
    fontSizeable: undefined,
  }),
  mapToEditPanelValues: (config) =>
    new Map([
      [
        "dashboard_title",
        config.dashboard_title || defaultConfigInventory.dashboard_title,
      ],
      ["farm_name", config.farm_name || defaultConfigInventory.farm_name],
      [
        "notification_text",
        config.notification_text || defaultConfigInventory.notification_text,
      ],
    ]),
};

// Initialize app
function initializeApp() {
  try {
    if (window.elementSdk) {
      window.elementSdk.init(elementConfig);
    }

    // Initialize UI with sample data
    updateUI();
    updateSummary();
    updateCommodityFilter();
    checkStockLevels();
  } catch (error) {
    console.error("Failed to initialize app:", error);
  }
}

// Utility functions
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function getStockStatus(current, minimum) {
  const percentage =
    minimum > 0 ? (current / minimum) * 100 : current > 0 ? 100 : 0;

  if (current === 0)
    return {
      status: "Habis",
      class: "bg-red-100 text-red-800",
      color: "red",
    };
  if (percentage <= 100)
    return {
      status: "Menipis",
      class: "bg-yellow-100 text-yellow-800",
      color: "yellow",
    };
  return {
    status: "Aman",
    class: "bg-green-100 text-green-800",
    color: "green",
  };
}

function showNotification(message, type = "warning") {
  const notification = document.createElement("div");
  notification.className = `notification-slide bg-white border-l-4 ${
    type === "error" ? "border-red-500" : "border-yellow-500"
  } p-4 rounded-lg shadow-lg max-w-sm`;

  notification.innerHTML = `
                <div class="flex items-center">
                    <div class="text-2xl mr-3">${
                      type === "error" ? "🚨" : "⚠️"
                    }</div>
                    <div class="flex-1">
                        <p class="text-sm font-medium text-gray-800">${message}</p>
                    </div>
                    <button class="ml-2 text-gray-400 hover:text-gray-600" onclick="this.parentElement.parentElement.remove()">
                        <span class="text-lg">×</span>
                    </button>
                </div>
            `;

  document.getElementById("notifications").appendChild(notification);

  setTimeout(() => {
    if (notification.parentElement) {
      notification.classList.add("fade-out");
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

function updateSummary() {
  const total = inventory.length;
  let safe = 0,
    low = 0,
    empty = 0;

  inventory.forEach((item) => {
    const stockInfo = getStockStatus(item.jumlah, item.stok_minimum);
    if (stockInfo.status === "Aman") safe++;
    else if (stockInfo.status === "Menipis") low++;
    else empty++;
  });

  document.getElementById("total-items").textContent = total;
  document.getElementById("safe-items").textContent = safe;
  document.getElementById("low-items").textContent = low;
  document.getElementById("empty-items").textContent = empty;
}

function updateCommodityFilter() {
  const filter = document.getElementById("commodity-filter");
  const currentValue = filter.value;
  const commodities = [
    ...new Set(inventory.map((item) => item.komoditas)),
  ].sort();

  filter.innerHTML = '<option value="">Semua Komoditas</option>';
  commodities.forEach((commodity) => {
    const option = document.createElement("option");
    option.value = commodity;
    option.textContent = commodity;
    filter.appendChild(option);
  });

  filter.value = currentValue;
}

function updateUI() {
  const tableBody = document.getElementById("inventory-table");
  const emptyState = document.getElementById("empty-state");
  const filter = document.getElementById("commodity-filter").value;

  const filteredInventory = filter
    ? inventory.filter((item) => item.komoditas === filter)
    : inventory;

  if (filteredInventory.length === 0) {
    emptyState.style.display = "table-row";
    // Remove existing rows
    const existingRows = tableBody.querySelectorAll("tr:not(#empty-state)");
    existingRows.forEach((row) => row.remove());
    return;
  }

  emptyState.style.display = "none";

  // Update existing rows and add new ones
  const existingRows = new Map();
  tableBody.querySelectorAll("tr[data-item-id]").forEach((row) => {
    existingRows.set(row.dataset.itemId, row);
  });

  filteredInventory.forEach((item) => {
    const stockInfo = getStockStatus(item.jumlah, item.stok_minimum);

    if (existingRows.has(item.id)) {
      // Update existing row
      const row = existingRows.get(item.id);
      updateRowContent(row, item, stockInfo);
      existingRows.delete(item.id);
    } else {
      // Create new row
      const row = createTableRow(item, stockInfo);
      tableBody.appendChild(row);
    }
  });

  // Remove rows that are no longer needed
  existingRows.forEach((row) => row.remove());
}

function updateRowContent(row, item, stockInfo) {
  row.children[0].textContent = item.nama;
  row.children[1].textContent = item.jumlah;
  row.children[2].textContent = item.satuan;
  row.children[3].textContent = item.komoditas;

  const statusCell = row.children[4];
  statusCell.innerHTML = `<span class="px-2 py-1 text-xs font-semibold rounded-full ${stockInfo.class}">${stockInfo.status}</span>`;
}

function createTableRow(item, stockInfo) {
  const row = document.createElement("tr");
  row.dataset.itemId = item.id;
  row.className = "hover:bg-gray-50";

  row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${item.nama}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.jumlah}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.satuan}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.komoditas}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 py-1 text-xs font-semibold rounded-full ${stockInfo.class}">${stockInfo.status}</span>
                </td>
            `;

  return row;
}

function checkStockLevels() {
  if (notificationTimeout) {
    clearTimeout(notificationTimeout);
  }

  notificationTimeout = setTimeout(() => {
    const lowStockItems = inventory.filter((item) => {
      const stockInfo = getStockStatus(item.jumlah, item.stok_minimum);
      return stockInfo.status === "Menipis" || stockInfo.status === "Habis";
    });

    if (lowStockItems.length > 0) {
      const config = window.elementSdk?.config || defaultConfigInventory;
      const message =
        config.notification_text || defaultConfigInventory.notification_text;
      showNotification(`${message} (${lowStockItems.length} barang)`);
    }
  }, 1000);
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();

  // Filter
  document
    .getElementById("commodity-filter")
    .addEventListener("change", updateUI);
});
